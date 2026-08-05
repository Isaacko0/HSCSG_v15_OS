// HSCSG v15 OS — Tipos del módulo Vesting (asimilado de sepu85/collabberry-berry-vesting)
// Vesting piecewise inmutable de participación ZNU, isomorfo al contrato BerryInvestorVesting.sol.

export interface VestingTranche {
  id: string
  ts: number // unix ms — momento del unlock
  amountZNU: number // cantidad liberable (en ZNU, no $BERRY)
}

export interface VestingState {
  token: string // etiqueta de la moneda (p.ej. 'ZNU')
  schedule: VestingTranche[]
  beneficiary: string | null // miembro beneficiario (seteado una vez post-TGE)
  claimed: number // ZNU ya liberado
  beneficiarySetDeadline: number // unix ms límite para setear beneficiario
  ownerRenounced: boolean
}
