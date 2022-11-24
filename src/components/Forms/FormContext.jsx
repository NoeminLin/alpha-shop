import { createContext } from "react"
import { productListInit } from "./../Cart/CartContext"
import { countTotal } from "./../Cart/Cart"

const initFormData = {
  cardOwner: null,
  cardNumber: null,
  validityPeriod: null,
  CVCorCCV: null,
  total: countTotal(productListInit)
}

const FormContext = createContext()
const StepContext = createContext()

export { FormContext, StepContext, initFormData }