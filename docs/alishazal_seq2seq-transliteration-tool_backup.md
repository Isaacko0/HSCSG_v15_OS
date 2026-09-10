# alishazal/seq2seq-transliteration-tool — Backup 2026-09-10

**Fecha de asimilación:** 2026-09-10  
**Repositorio original:** https://github.com/alishazal/seq2seq-transliteration-tool  
**Fork de:** CAMeL-Lab/qalb (160 commits ahead)  
**Commit HEAD:** 368cef879da9a8503d6349cfbadf4e7a48a3f811 (2020-10-28)  
**Licencia:** MIT  
**Autores:** Ali Shazal, Aiza Usman  

---

## 1. Visión General

Herramienta de **transliteración seq2seq** para convertir **Arabizi** (árabe escrito en script latino, ej. "marhaban" → "مرحبا") a **script árabe nativo**. Diseñada para datos **LDC BOLT Egyptian Arabic SMS/Chat** (LDC2017T07).

**4 Modelos implementados:**
1. **Word2Word** — nivel palabra (baseline)
2. **Line2Line** — nivel línea/oración completa
3. **MLE** (Maximum Likelihood Estimation) — para palabras OOV (out-of-vocabulary)
4. **Hybrid** — combina MLE (OOV) + Word2Word (INV)

---

## 2. Arquitectura del Repositorio

```
seq2seq-transliteration-tool/
├── ai/
│   ├── datasets/           # Preprocesamiento de cualquier dataset
│   ├── models/             # Arquitecturas: char_seq2seq (FastText-enabled) + simple seq2seq
│   └── tests/              # Scripts de entrenamiento, evaluación (accuracy, BLEU)
├── helpers/                # Helpers para transliterate.py
├── output/
│   ├── evaluations/        # Resultados de evaluación (txt)
│   ├── models/             # Modelos entrenados
│   └── predictions/        # Predicciones de sistemas entrenados
├── pretrained_word_embeddings/  # FastText .bin files (300-dim)
├── splits_ldc/             # Datos LDC split: train/dev/test + source (unannotated arabizi ~1M words)
├── temp/                   # ML input/output files generados durante runs (preprocessing, ay-normalization)
├── transliterate.py        # Entry point principal (CLI con flags exhaustivos)
├── generate-report.py      # Generación de reportes
├── dalma_scripts.sh        # Scripts para cluster Dalma (NYU Abu Dhabi, Tesla V100 32GB)
├── LICENSE                 # MIT
└── README.md               # Documentación completa
```

---

## 3. Pipeline Completo (4 Fases)

### Fase 1: Extracción de Datos desde LDC XML
```bash
# Split XML en train/dev/test
python3 splits_ldc/makeSplits.py bolt_sms_chat_ara_src_transliteration/data/transliteration/ splits_ldc/train.txt splits_ldc/train/xml_files
# ... (dev, test)

# Extraer source + target (word-aligned + sentence-aligned)
python3 splits_ldc/getSourceAndTarget.py splits_ldc/train/xml_files/ splits_ldc/train/train-source.arabizi splits_ldc/train/train-word-aligned-target.gold splits_ldc/train/train-sentence-aligned-target.gold

# Extraer Arabizi no anotado (para FastText, excluye dev/test)
python3 splits_ldc/getSourceArabiziWithoutDevAndTest.py bolt_sms_chat_ara_src_transliteration/data/source splits_ldc/dev/xml_files splits_ldc/test/xml_files splits_ldc/source/source-without-dev-test.arabizi
```

### Fase 2: Entrenamiento FastText (Word Embeddings)
```bash
# Preprocess
python3 helpers/preprocess_fasttext_data.py --input_file=splits_ldc/source/source-without-dev-test.arabizi --output_file=splits_ldc/source/source-without-dev-test-preprocessed.arabizi

# Train skipgram (300-dim, minn=2, ws=2)
./fastText/fasttext skipgram -input splits_ldc/source/source-without-dev-test-preprocessed.arabizi -output pretrained_word_embeddings/arabizi_300_narrow -dim 300 -minn 2 -ws 2
```

### Fase 3: Entrenamiento Modelos Seq2Seq
```bash
# Word2Word (default)
python3 transliterate.py --predict=False --evaluate_accuracy=False --evaluate_bleu=False

# Line2Line
python3 transliterate.py --predict=False --evaluate_accuracy=False --evaluate_bleu=False --model_name=line2line --model_output_path=output/models/line2line_model --batch_size=1024

# MLE
python3 transliterate.py --predict=False --evaluate_accuracy=False --evaluate_bleu=False --model_name=mle --model_output_path=output/models/mle_model
```

### Fase 4: Predicción + Evaluación
```bash
# Word2Word (dev)
python3 transliterate.py --predict_input_file=splits_ldc/dev/dev-source.arabizi --predict_output_file=output/predictions/word2word_dev.out --predict_output_word_aligned_gold=splits_ldc/dev/dev-word-aligned-target.gold --predict_output_sentence_aligned_gold=splits_ldc/dev/dev-sentence-aligned-target.gold --evaluation_results_file=output/evaluations/word2word_dev_evaluation_results.txt

# Hybrid (MLE + Word2Word)
python3 transliterate.py --model_name=hybrid --train=False --mle_model_file=output/models/mle_model --word2word_model_dir output/models/word2word_model --predict_input_file=... --predict_output_file=... --evaluation_results_file=...
```

---

## 4. Componentes Técnicos Clave

### ai/datasets/ — Preprocesamiento Universal
- Normalización Arabizi (ay-normalization)
- Tokenización a nivel carácter/palabra
- Vocabulario compartido source/target
- Padding, batching, bucketing por longitud

### ai/models/ — Arquitecturas
- **char_seq2seq** — Seq2Seq a nivel carácter con embeddings FastText preentrenados
- **simple_seq2seq** — Baseline sin embeddings externos
- Encoder: Bidirectional LSTM
- Decoder: Unidirectional LSTM + Attention (Bahdanau)
- Teacher forcing durante training

### ai/tests/ — Evaluación
- **Accuracy** — Exact match a nivel palabra
- **BLEU** — n-gram overlap (corpus-level)
- Scripts para reproducir resultados paper

### transliterate.py — CLI Unificado
Flags principales:
- `--model_name` {word2word, line2line, mle, hybrid}
- `--train` / `--predict` / `--evaluate_accuracy` / `--evaluate_bleu`
- `--model_output_path`, `--predict_input_file`, `--predict_output_file`
- `--preprocess` (True/False)
- `--batch_size`, `--beam_size` (para beam search)
- Flags MLE híbrido: `--mle_model_file`, `--word2word_model_dir`
- Flags loaded model (para Line2Line): `--prediction_loaded_model_training_*`

---

## 5. Infraestructura: Dalma HPC (NYU Abu Dhabi)

| Recurso | Especificación |
|---------|----------------|
| **GPU** | NVIDIA Tesla V100 PCIe 32 GB |
| **Memoria** | 30 GB flag |
| **Tiempo max** | 12 horas por run |
| **Cluster** | Dalma (NYU Abu Dhabi HPC) |
| **Scripts** | `dalma_scripts.sh` (SBATCH configs) |

**Prerequisites estrictos (versiones pinned):**
- Python 3.6
- camel-tools
- tensorflow-gpu 1.4.0
- cudatoolkit 8.0
- cudnn 6.0.21
- GCC 4.9.3 (crítico: grep command en seq2seq scripts)
- Anaconda 4.1.1

---

## 6. Datos LDC BOLT Egyptian Arabic

| Split | Chat (CHT_ARZ) | SMS (SMS_ARZ) |
|-------|----------------|---------------|
| **Train** | 20121228.0001-20150101.0002 | 20120223.0001-20130902.0002 |
| **Dev** | 20120130.0000-20121226.0003 | 20110705.0000-20120220.0000 |
| **Test** | 20150101.0008-20160201.0001 | 20130904.0001-20130929.0000 |

**Formatos target:**
- `word-aligned-target.gold` — con tokens `[+]` `[-]` (alignment marks)
- `sentence-aligned-target.gold` — sin alignment marks

---

## 7. Hybrid System (Innovación Clave)

```
┌─────────────────────────────────────┐
│        Input Arabizi Word           │
└──────────────┬──────────────────────┘
               │
       ┌───────▼───────┐
       │  En Vocab?    │
       └───────┬───────┘
      ┌─No───┴───Sí──┐
      ▼             ▼
┌─────────┐    ┌────────────┐
│  MLE    │    │ Word2Word  │
│ (OOV)   │    │   (INV)    │
└────┬────┘    └─────┬──────┘
     │              │
     └──────┬───────┘
            ▼
    ┌─────────────┐
    │  Output     │
    │  Arabic     │
    └─────────────┘
```

- **MLE** maneja palabras nunca vistas (OOV) via transliteración carácter-a-carácter probabilística
- **Word2Word** maneja palabras en vocabulario (INV) via seq2seq aprendido
- Combina lo mejor de ambos: cobertura completa + calidad en palabras conocidas

---

## 8. Archivos Clave para Asimilación

```
transliterate.py              # Entry point CLI (flags exhaustivos)
ai/models/char_seq2seq.py     # Arquitectura principal con FastText
ai/models/simple_seq2seq.py   # Baseline seq2seq
ai/datasets/preprocess.py     # Normalización, tokenización, vocab
ai/tests/accuracy_bleu.py     # Métricas evaluación
helpers/preprocess_fasttext_data.py  # Preprocess para FastText
splits_ldc/makeSplits.py      # Split XML LDC
splits_ldc/getSourceAndTarget.py   # Extracción source/target
splits_ldc/getSourceArabiziWithoutDevAndTest.py  # Unannotated data
dalma_scripts.sh              # HPC batch scripts
generate-report.py            # Reporte automático
```