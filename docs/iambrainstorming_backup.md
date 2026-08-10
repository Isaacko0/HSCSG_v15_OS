# iambrainstorming (Amiya Tulu) — Backup Quirúrgico + Texto Extraído

**Fuente primaria:** repo clonado `repo_iambrainstorming_iambrainstorming.github.io` (GitHub + mirror GitLab `iambrainstorming/blog`).
Es un **libro mdBook** (`book.toml`, `src/SUMMARY.md`, ~270 capítulos en `src/chapters/`).
Sitios hermanos: `opinionated_observer`, `coding_blog`, `interactive-five`, `blog` (GitLab).
Autor: **Amiya Tulu** (referencias a `amiyatulu/shivarthu`, `amiyatulu.github.io/blog/shivarthu`).
Licencia: `LICENSE-CC` (Creative Commons) + `LICENSE-MIT`.

**No es una DAO/protocolo de código**: es un **cuerpo de pensamiento sistémico** sobre moneda post-capitalista, democracia justa, descentralización y educación. Aporta la **capa de saber experiencial + modelo de negocio del conocimiento** al vaso comunicante HSCSG.

---

## 0. QUÉ ES (home.md)

> "iambrainstorming" — libro de ideas que van de la moneda y la democracia a la educación, el trabajo y la ciudad.
> Federación de sitios: principal (github.io + vercel), Observador opinado, Coding blog, Interactive learning, GitLab blog.

El `SUMMARY.md` organiza el libro en ejes: **Democracia y cadena de suministro**, **Moneda**, **Educación**, **Trabajo**, **Ciudad/Energía**, **Bloque/DeFi**, **Democracia**.

---

## 1. MODELO DE NEGOCIO DEL CONOCIMIENTO (extraído de capítulos clave)

### 1.1 Conocimiento libre financiado por modelos híbridos
Del capítulo *"Business Model for Lectures and Material provided by various Universities"* (2015-06-18):
> "Lectures and Materials can be made free all over the country, but we can still raise funds by making tie ups with other foreign universities of developed countries. Also we can make the new lectures available online paid, in different developed countries, till some funds for a particular lecture is raised, after that it can be made free."

→ **Patrón**: contenido libre por defecto; monetización diferida vía tie-ups internacionales y acceso de pago temporal en mercados desarrollados hasta recuperar costo; luego libera. Isomorfo a CaaS (acceso por contribución, no por dinero).

### 1.2 ICOs como crowdfunding (no especulación)
De *"Why startup funding through ICOs is more needed in developing country like India?"* (2019-04-24):
> "To create entrepreneurs, India requires ICO (initial coin offering) and cryptocurrency. [...] Loan creates an immense burden on entrepreneurs [...] Here in ICOs, people are stakeholders of the idea. So, if the idea doesn't support the interest of people, its unlikely to be funded. It's similar to the crowdfunding system."
> "What we need is an auditing system and return policy of cryptocurrency if your idea fails. The smart contract should have code to return the cryptocurrency under unintended situations."

→ **Patrón**: financiación por stakes de la comunidad + contrato que devuelve fondos si el proyecto falla (auditable). Isomorfo a Solarpunk escrow + CDS.

### 1.3 APIs abiertas como infraestructura de negocio
De *"Apps can solve the basic social security problem"* (2018-08-13):
> "Features: 1) API endpoints that any app developer can use and include with their e-commerce apps. Separate types of account for seller and customer."

De *"Going away with money"*: "We already made API for currency. But it only requires API for all services and products [...] all should be integrated with the API similar to present e-commerce API."

→ **Patrón**: el negocio es la **API abierta** (infraestructura compartida), no el silo. Isomorfo a federación DTN/AP de HSCSG.

### 1.4 Incentivar información de calidad (Web3 vs Web2)
De *"Can Web3 stop copying web2?"* (2021-12-31):
> "Maybe incentivizing high-quality information is a solution. It can create a self-reinforcement pattern to share good quality content."

→ Isomorfo a AUT×CDS (reconocimiento por contribución, no por alcance/likes).

---

## 2. MODELO MONETARIO: "UNA MONEDA QUE CUENTA PARA LA UNIDAD"

### 2.1 Tesis central (capítulo *"Going away with money and making a currency that counts to unity always"*, 2016-11-28)
> "The total amount of money is 1 or 100%, that never grows in the count. Even if you take a loan, total amount should be always one. But the algorithm work is to divide the 1 into fractions and assign it to products and services."

> "We have only ONE available for division, so divide it efficiently."

> "Its purpose was to **'work'** for serving each other need (not greed). But with time this **'work'** is getting done by automation through computers and factories. So, with time the purpose of money should also change [...] all money gets concentrated with people that run these factories and common people are left without any purchasing power."

**4 tipos de money**: exchange (caduca, requiere reactivación con identidad), storage (atado a identidad, no transferible), deposits (ciclos, interés para circular), loans (auditoría).

**4 principios de accountability** (clave para HSCSG/RAO): responsibility, explainability, accuracy, auditability, fairness.

→ Isomorfo a **ZNU**: unidad contable fija, no inflable, acceso por contribución. El "total=1" es el análogo del pool ZNU no-creíble.

### 2.2 Tipos de dinero (corto vs largo plazo)
De *"Future of Money: Removing the negative impacts of money"* (2016-11-22):
> "We have two types of money, one required for short time for doing an exchange and other for storage. Exchange bitcoins will come with an expiry date of one/two month [...] money will remain accountable, can't be misused [...] money also can't be concentrated."

→ Isomorfo a **ZNU con caducidad/rotación** para evitar concentración (anti-acumulación).

### 2.3 Eliminar deuda y fiat nacional
De *"What would we gain from eliminating the national fiat currency?"* (2022-10-16):
> "No more debt economy. Banks transfer wealth from people to capitalists by issuing debt or printing money. [...] UN: 3.3 Billion People [...] Live in Countries Spending More on Debt Service Than Education, Health."
> "Let's check out what gonna change if we quit our national currency and implement [shivarthu protocol]."

→ Isomorfo a CaaS (sin deuda, acceso por contribución).

---

## 3. PRICE DISCOVERY POR CONSENSO DE UTILIDAD (no oferta/demanda)

### 3.1 Schelling game para precio (cap. *"Price discovery with score Schelling game using blockchain"*, 2021-06-26)
> "Schelling games can be used to rate a product. [...] If the 'mean' of all the product rating is near to your rating then you will get incentives, otherwise, your incentives will be deducted."

Algoritmo para fondear proyectos de un pool común: el monto solicitado no puede exceder (pool)^(4/5); juego de Schelling de porcentaje para predecir el precio (+10 a -10 = +100%/-100%).

### 3.2 Consenso de utilidad en DEX (cap. *"What if crypto token prices are discovered through consensus of utility rather than demand and supply?"*, 2022-12-19 — 39k chars)
> "The price of tokens derived through demand and supply is suboptimal. It doesn't include a consensus from everyone or stakeholders, but just the interacting party."

> "We can discover prices through consensus and using human rationality rather than speculation, increase stability of coins prices."

> "Another way is to tax the shit coins and subsidize the good coins based on the price discovery [...] Taxing can be done using market makers like Uniswap, and taxes collected are sold at lower discovered prices to buy or collect good coins."

**Mecanismo de precio**: median price discovery + commit-and-reveal + time locks + circuit breakers + rational price discoverers con incentivos.

**Cadenas de suministro** (supply chains con su propia cripto):
1) Sin techo/piso de precio (evita escasez/desperdicio)
2) Gran número de compradores/vendedores
3) Subsidiar externalidad positiva, taxear negativa
4) Información perfecta de utilidades
5) **No más de 5h/día de trabajo, sin bullshit jobs**
6) Producción sostenible
7) Gobernanza con expertise
8) Distribución equitativa de tokens (rico no se enriquece más)

→ Isomorfo a **CDS (gobernanza por expertise) + RAO (subsidio/tasa por externalidad) + CaaS (5h/día, sin bullshit jobs)**.

---

## 4. DEMOCRACIA JUSTA (DPoS EVOLUTIVO) — isomorfo a CDS

De *"A new fair democracy inspired by Delegated Proof of Stake algorithm"* (2019-01-09) + *"The whole process of voting in a DPoS Country"* (2019-01-11):
> "Democracy is about fair and equal treatment of everyone [...] The new fair democracy provides an elegant way of governance that separates the representative responsibility according to their specialization and can grow into any complexity. The governance is divided into various departments, and each department is supervised by representatives with expertise in the field."

> "Evolutionary democracy using hierarchical specialization with adapted delegated proof of stake algorithm, where different specialized departments are in a symbiotic or mutually beneficial relationship."

→ **Árbol de democracia**: cada embudo es un departamento con subdepartamentos; votantes eligen representantes por departamento según expertise. Isomorfo a **CDS (Consejo de Dominios Especializados)** de HSCSG.

---

## 5. UBI + EDUCACIÓN (cap. *"Universal Basic Income, Education and Fair Democracy"*, 2018-03-21)
> "A deal here, to survive you have to thrive, in other words, you will get the basic [income] if you engage in education/thriving activities."

→ UBI **condicionado a aprendizaje/thriving** (no incondicional ciego). Isomorfo a **CaaS-BM (acceso por contribución/desarrollo)**.

---

## 6. ISOMORFISMO CON HSCSG (resumen)

| iambrainstorming | HSCSG v15 OS |
|------------------|--------------|
| Moneda "total=1", no inflable | ZNU (pool fijo, no-creíble) |
| Exchange money con caducidad | ZNU con rotación anti-acumulación |
| Precio por consenso de utilidad (Schelling) | CDS + RAO (valor por contribución) |
| Tax shitcoin / subsidize good | RAO (tasa externalidad negativa / subsidio positiva) |
| 4 tipos: exchange/storage/deposit/loan | CaaS (acceso, no deuda) |
| Democracia DPoS por expertise | CDS (Consejo de Dominios Especializados) |
| UBI ligado a educación/thriving | CaaS-BM |
| APIs abiertas / federación | Federación DTN/AP |
| Accountability: explainability/auditability | RAO (append-only, trazable) |
| 5h/día, no bullshit jobs | Lucidez / trabajo que sirve la necesidad |

---

## 7. LO QUE SE EXTIRPA (regla offline-first sin EVM)
- **Blockchain/EVM/smart contracts** (Schelling games, DEX, KYC on-chain) → reemplazados por CDS + RAO locales.
- **Stablecoins USD-pegged** → ZNU/CaaS (rechazo explícito de amor por USD en *"Love for USD pegged stable coin... must end"*).
- **Cripto/ICOs especulativos** → CaaS (financiación por contribución, no tokens).
- **Plataformas centralizadas (Amazon/Flipkart/Zomato/Ola)** → federación DTN/AP.
- **Analytics de terceros (WordPress/Vercel)** → RAO local.

## 8. LO NUEVO QUE APORTA (confluencia)
1. **Moneda que "cuenta para la unidad"** (total=1) → fundamenta la no-inflabilidad de ZNU.
2. **Price discovery por consenso de utilidad** → valida CDS+RAO como mecanismo de valor.
3. **Democracia DPoS por expertise** → modelo vivo de CDS.
4. **UBI ligado a thriving/educación** → CaaS-BM matizado.
5. **5h/día, sin bullshit jobs** → límite de trabajo postmonetario.
6. **APIs abiertas como negocio** → federación DTN/AP.

## 9. VERIFICACIÓN DE EXTRACCIÓN
- Repo clonado: `repo_iambrainstorming_iambrainstorming.github.io` (1231 archivos, README + 2 LICENSE).
- Capítulos leídos íntegros: `going-away-with-money...`, `what-if-crypto-token-prices...` (39k), `what-would-we-gain-from-eliminating-national-fiat-currency`, `price-discovery-with-score-schelling-game`, `the-competitive-collaboration-algorithm`, `universal-basic-income-and-education`, `apps-can-solve-the-basic-social-security-problem`, `business-model-for-lectures...`, `web3-can-stop-copying-web2`, `why-startup-funding-through-icos`, `should-we-allow-the-government-to-tax-crypto`, `from-hypocrisy-to-democracy`, `the-whole-process-of-voting-in-a-dpos-country`, `love-for-usd-pegged-stable-coin`, `future-of-money`.
- Conteo total de capítulos en `src/chapters/`: ~270. Ejes principales confirmados en `src/SUMMARY.md`.
