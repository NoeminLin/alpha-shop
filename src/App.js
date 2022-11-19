import './style/main.scss';
import StepProgress from './components/StepProgress/StepProgress';
import Forms from './components/Forms/Form';
import ProgressControl from './components/ProgressControl/ProgressControl';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12">
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress />
          <Forms />
        </section>
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}

export default App;
