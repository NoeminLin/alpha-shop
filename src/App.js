import './style/main.scss'
import { useState, useContext } from 'react'
import StepProgress from './components/StepProgress/StepProgress'
import Forms from './components/Forms/Form'
import ProgressControl from './components/ProgressControl/ProgressControl'
import Cart from './components/Cart/Cart'
import { FormContext } from './components/Forms/FormContext'

function App() {
  const [step, setStep] = useState(0);
  const formData = useContext(FormContext);

  function handleStepChange(e) {
    const isSubmut = e.target.parentElement.classList.contains('submit') ||
      e.target.classList.contains('submit')
    const isNext = e.target.parentElement.classList.contains('next') ||
      e.target.classList.contains('next')
    const isPrev = e.target.parentElement.classList.contains('prev') ||
      e.target.classList.contains('prev')
    if (isSubmut) {
      console.log(JSON.stringify(formData));
      setStep(0);
    } else if (isNext) {
      setStep(step + 1);
    } else if (isPrev) {
      setStep(step - 1);
    }
  }

  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12">
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress step={step} />
          <Forms step={step} />
        </section>
        <Cart />
        <ProgressControl step={step} onClick={handleStepChange} />
      </div>
    </main>
  );
}

export default App;
