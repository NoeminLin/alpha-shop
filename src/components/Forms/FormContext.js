import { createContext } from "react"

const initFormData = {
  cardOwner: null,
  cardNumber: null,
  validityPeriod: null,
  CVCorCCV: null,
}

const FormContext = createContext()
const StepContext = createContext()
const ShopContext = createContext()

export { FormContext, StepContext, ShopContext, initFormData }