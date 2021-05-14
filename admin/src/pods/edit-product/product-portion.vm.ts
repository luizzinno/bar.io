export interface ProductPortionType {
  id: string;
  name: string;
}

export interface ProductPortion {
  id: string;
  name: string;
  price: number;
}

export const createEmptyProductPortionTypeVm = () => ({
  id: '',
  name: ''
})

export const createEmptyProductPortionVm = () => ({
  id: '',
  name: '',
  price: 0
})