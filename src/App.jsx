import './style/main.scss'
import { useState } from 'react'
import StepProgress from './components/StepProgress/StepProgress'
import Forms from './components/Forms/Form'
import ProgressControl from './components/ProgressControl/ProgressControl'
import Cart from './components/Cart/Cart'
import { FormContext, StepContext, initFormData } from './components/Forms/FormContext'
import { productListInit, ProductListContext } from './components/Cart/CartContext'

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initFormData);
  const [productList, setProductList] = useState(productListInit)


  return (
    <main className="site-main">
      <div className="main-container">
        <FormContext.Provider value={{ data: formData, updateFormData: setFormData }}>
          <section className="register-container col col-lg-6 col-sm-12">
            <h2 className="register-title col col-12">結帳</h2>
            <StepProgress step={step} />
            <Forms step={step} />
          </section>
          <ProductListContext.Provider value={{ productList: productList, updateProductList: setProductList }}>
            <StepContext.Provider value={{ step: step, updateStep: setStep }}>
              <Cart />
              <ProgressControl />
            </StepContext.Provider>
          </ProductListContext.Provider>
        </FormContext.Provider>
      </div>
    </main>
  );
}

export default App;
