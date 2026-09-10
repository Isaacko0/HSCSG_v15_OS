"""
Background translation of One Community Global EN → ES.
Uses deep_translator (Google Translate free) chunk by chunk.
Outputs: ONECOMMUNITY_GLOBAL_COMPLETE_ES.md
"""
import os
import re
import sys
import time
from pathlib import Path

SRC = Path(r"C:\Users\Isaacko0\HSCSG_v15_OS\_scratch\ONECOMMUNITY_GLOBAL_COMPLETE_EN.md")
OUT = Path(r"C:\Users\Isaacko0\HSCSG_v15_OS\_scratch\ONECOMMUNITY_GLOBAL_COMPLETE_ES.md")
PROGRESS = Path(r"C:\Users\Isaacko0\HSCSG_v15_OS\_scratch\translation_progress.txt")

try:
    from deep_translator import GoogleTranslator
    translator = GoogleTranslator(source='en', target='es')
except ImportError:
    print("Installing deep_translator...")
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "--quiet", "deep_translator"])
    from deep_translator import GoogleTranslator
    translator = GoogleTranslator(source='en', target='es')

def load_progress():
    if PROGRESS.exists():
        try:
            return int(PROGRESS.read_text().strip())
        except:
            return 0
    return 0

def save_progress(chunk_idx):
    PROGRESS.write_text(str(chunk_idx))

def split_chunks(text, max_chars=4500):
    """Split text into chunks at section boundaries, max ~4500 chars each"""
    chunks = []
    current = ""
    for line in text.split('\n'):
        if len(current) + len(line) + 1 > max_chars and current:
            chunks.append(current)
            current = line + "\n"
        else:
            current += line + "\n"
    if current:
        chunks.append(current)
    return chunks

def translate_chunk(text, max_retries=3):
    for attempt in range(max_retries):
        try:
            # Google Translate free limit ~5000 chars
            if len(text) > 4800:
                # Split further
                mid = len(text) // 2
                # Find a good split point
                split_at = text.rfind('\n', 0, mid)
                if split_at == -1:
                    split_at = mid
                part1 = translate_chunk(text[:split_at])
                part2 = translate_chunk(text[split_at:])
                return part1 + part2
            return translator.translate(text)
        except Exception as e:
            if attempt == max_retries - 1:
                print(f"  Translation failed after {max_retries} attempts: {e}")
                return text  # Return original on failure
            time.sleep(2 ** attempt)
    return text

def main():
    print(f"Loading source: {SRC}")
    text = SRC.read_text(encoding="utf-8", errors="ignore")
    print(f"Total chars: {len(text):,}")

    chunks = split_chunks(text)
    print(f"Total chunks: {len(chunks)}")

    start_chunk = load_progress()
    print(f"Resuming from chunk {start_chunk + 1}")

    # Open output file in append mode if resuming
    mode = "a" if start_chunk > 0 else "w"
    with open(OUT, mode, encoding="utf-8") as f:
        if mode == "w":
            f.write("# One Community Global — Complete Open Source Sustainable Living Blueprints (ES)\n\n")
            f.write("**Fuente:** https://onecommunityglobal.org/\n")
            f.write("**Traducido:** Auto-traducción Google Translate (deep_translator)\n")
            f.write(f"**Fecha:** {time.strftime('%Y-%m-%d')}\n\n")
            f.write("---\n\n")

        for i, chunk in enumerate(chunks[start_chunk:], start_chunk):
            print(f"  Chunk {i+1}/{len(chunks)} ({len(chunk)} chars)...")
            translated = translate_chunk(chunk)
            f.write(translated + "\n")
            save_progress(i + 1)
            time.sleep(0.5)  # Rate limiting

    print(f"Done! Output: {OUT} ({OUT.stat().st_size:,} chars)")

if __name__ == "__main__":
    main()