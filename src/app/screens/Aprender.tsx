import { useState } from 'react'
import { Card, Stat, Badge, Btn, EmptyState } from '@components/ui'
import { learningProgress } from '@core/lib/learning'
import { useAppStore } from '@core/state/store'

export function Aprender() {
  const { aprender, completeChallenge, addLearningChallenge } = useAppStore()
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('código')
  const [reward, setReward] = useState(100)

  const progress = learningProgress(aprender)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Aprender haciendo (Retos)</h1>
        <Badge color="bg-fuchsia-500/20 text-fuchsia-300">iambrainstorming · interactive-five</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Stat label="Retos" value={`${aprender.challenges.length}`} sub="por completar" />
        <Stat label="Progreso" value={`${progress}%`} sub="completados" />
        <Stat label="Thriving ZNU" value={`${aprender.thrivingScore}`} sub="acumulado" />
      </div>

      <Card title="Saber del ecosistema (knowledge base)">
        <div className="space-y-1 text-sm">
          {aprender.knowledge.map((k) => (
            <div key={k.id} className="flex items-center gap-2">
              <Badge color="bg-sky-500/20 text-sky-300">{k.source}</Badge>
              <span>{k.title}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Retos de aprendizaje">
        {aprender.challenges.length === 0 ? (
          <EmptyState>Aún no hay retos. Crea uno abajo.</EmptyState>
        ) : (
          <div className="space-y-2">
            {aprender.challenges.map((c) => (
              <div key={c.id} className="flex items-center justify-between border border-white/10 rounded p-2">
                <div>
                  <div className="font-medium">{c.title}</div>
                  <div className="text-xs text-white/50">{c.topic} · {c.znuReward} ZNU {c.done ? '· ✅' : ''}</div>
                </div>
                {!c.done && <Btn onClick={() => completeChallenge(c.id)}>Completar</Btn>}
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card title="Nuevo reto">
        <div className="flex flex-wrap gap-2 items-end">
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Título</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={title}
              onChange={(e) => setTitle(e.target.value)} placeholder="ej. Resuelve un reto de Schelling" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">Tema</label>
            <input className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm" value={topic}
              onChange={(e) => setTopic(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-white/60">ZNU recompensa</label>
            <input type="number" className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm w-24"
              value={reward} onChange={(e) => setReward(Number(e.target.value))} />
          </div>
          <Btn disabled={!title.trim()} onClick={() => { addLearningChallenge(title.trim(), topic.trim(), reward); setTitle('') }}>
            Añadir reto
          </Btn>
        </div>
        <p className="text-xs text-white/40 mt-2">Editable por el dueño del nodo. Se guarda localmente. UBI ligado a thriving.</p>
      </Card>
    </div>
  )
}
