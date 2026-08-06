import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@app/layout/Layout'
import { Home } from '@app/screens/Home'
import { BaseMaterial } from '@app/screens/BaseMaterial'
import { Lucidez } from '@app/screens/Lucidez'
import { Colectivo } from '@app/screens/Colectivo'
import { Automata } from '@app/screens/Automata'
import { ZNU } from '@app/screens/ZNU'
import { Verificacion } from '@app/screens/Verificacion'
import { Orquestacion } from '@app/screens/Orquestacion'
import { CaaS } from '@app/screens/CaaS'
import { Automat } from '@app/screens/Automat'
import { Solarpunk } from '@app/screens/Solarpunk'
import { Colaberry } from '@app/screens/Colaberry'
import { Priorizar } from '@app/screens/Priorizar'
import { Vesting } from '@app/screens/Vesting'
import { Trustlines } from '@app/screens/Trustlines'
import { Tekitl } from '@app/screens/Tekitl'
import { Soberania } from '@app/screens/Soberania'
import { Integral } from '@app/screens/Integral'
import { Mundus } from '@app/screens/Mundus'
import { Life } from '@app/screens/Life'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="base" element={<BaseMaterial />} />
        <Route path="lucidez" element={<Lucidez />} />
        <Route path="colectivo" element={<Colectivo />} />
        <Route path="automata" element={<Automata />} />
        <Route path="znu" element={<ZNU />} />
        <Route path="verificacion" element={<Verificacion />} />
        <Route path="orquestacion" element={<Orquestacion />} />
        <Route path="caas" element={<CaaS />} />
        <Route path="automat" element={<Automat />} />
        <Route path="solarpunk" element={<Solarpunk />} />
        <Route path="colaberry" element={<Colaberry />} />
        <Route path="priorizar" element={<Priorizar />} />
        <Route path="vesting" element={<Vesting />} />
        <Route path="trustlines" element={<Trustlines />} />
        <Route path="tekitl" element={<Tekitl />} />
        <Route path="soberania" element={<Soberania />} />
        <Route path="integral" element={<Integral />} />
        <Route path="mundus" element={<Mundus />} />
        <Route path="life" element={<Life />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
