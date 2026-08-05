export interface Brand {
  id: string
  name: string
  handle: string
  ini: string
  logo?: string
  accent?: string
  plan?: string
}

export interface BrandContext {
  currentBrand: Brand
  allBrands: Brand[]
  switchBrand: (id: string) => void
  addBrand: (brand: Omit<Brand, 'id'>) => void
  removeBrand: (id: string) => void
}
