import { createContext } from "react"

const initFormData = {
  cardOwner: null,
  cardNumber: null,
  validityPeriod: null,
  CVCorCCV: null,
  total: 0
}

const FormContext = createContext()
const StepContext = createContext()
const ShopContext = createContext()

export { FormContext, StepContext, ShopContext, initFormData }