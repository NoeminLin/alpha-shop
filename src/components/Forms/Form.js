import { CityList, GenderList } from "../../data/FormsOptionList"


function Input({ type, placeholder }) {
  return (
    <input type={type} placeholder={placeholder} />
  )
}

function Select({ optionList, placeholder }) {
  return (
    <div className="select-container">
      <select>
        {placeholder && <option value="">{placeholder}</option>}
        {optionList.map(option =>
          <option value={option.value} key={'option-' + option.value}>{option.title}</option>
        )}
      </select>
    </div>
  )
}

function RadioGroup({ id, text, price, period }) {
  return (
    <label class="radio-group col col-12" data-price="0">
      <input id={id} type="radio" name="shipping" checked="" onChange={() => { console.log(id) }} />
      <div class="radio-info">
        <div className="col col-12">
          <div class="text">{text}</div>
          <div class="price">{price}</div>
        </div>
        <div class="period col col-12">{period}</div>
      </div>
      <div class="radio-box-border"></div>
    </label>
  )
}

function InputGroup({ className, label, tag, type, placeholder, optionList }) {
  return (
    <div className={className}>
      <div className="input-label">{label}</div>
      {tag === 'input' && <Input type={type} placeholder={placeholder} />}
      {tag === 'select' && <Select optionList={optionList} placeholder={placeholder} />}
    </div>
  )
}

function inputGroupClass(largeSize, smSize) {
  return `input-group input-w-lg-${largeSize} input-w-sm-${smSize}`
}

function AddressForm() {
  return (
    <form className="col col-12">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <InputGroup
            className={inputGroupClass('2', 's1')}
            label='稱謂'
            tag='select'
            optionList={GenderList}
          />
          <InputGroup
            className={inputGroupClass('4', 's2')}
            label='姓名'
            tag='input'
            type="text"
            placeholder="請輸入姓名"
          />
        </div>
        <div className="col col-12">
          <InputGroup
            className={inputGroupClass('3', 'full')}
            label='電話'
            tag='input'
            type="tel"
            placeholder="請輸入行動電話"
          />
          <InputGroup
            className={inputGroupClass('3', 'full')}
            label='Email'
            tag='input'
            type="email"
            placeholder="請輸入電子郵件"
          />
        </div>
        <div className="col col-12">
          <InputGroup
            className={inputGroupClass('2', 'full')}
            label='縣市'
            tag='select'
            optionList={CityList}
            placeholder="請選擇縣市"
          />
          <InputGroup
            className={inputGroupClass('4', 'full')}
            label='地址'
            tag='input'
            type="text"
            placeholder="請輸入地址"
          />
        </div>
      </section>
    </form>
  )
}

function ShippingForm() {
  return (
    <form class="col col-12" data-phase="shipping">
      <h3 class="form-title">運送方式</h3>
      <section class="form-body col col-12">
        <RadioGroup id="shipping-standard" text="標準運送" price="免費" period="約 3~7 個工作天" />
        <RadioGroup id="shipping-dhl" text="DHL 貨運" price="$500" period="48 小時內送達" />
      </section>
    </form>
  )
}

function CreditCardForm() {
  return (
    <form class="col col-12" data-phase="credit-card">
      <h3 class="form-title">付款資訊</h3>
      <section class="form-body col col-12">
        <div className="col col-12">
          <InputGroup
            className={inputGroupClass('4', 'full')}
            label='持卡人姓名'
            tag='input'
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="col col-12">
          <InputGroup
            className={inputGroupClass('4', 'full')}
            label='卡號'
            tag='input'
            type="text"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className="col col-12">
          <InputGroup
            className={inputGroupClass('3', 's3')}
            label='有效期限'
            tag='input'
            type="text"
            placeholder="MM/YY"
          />
          <InputGroup
            className={inputGroupClass('3', 's3')}
            label='CVC / CCV'
            tag='input'
            type="text"
            placeholder="123"
          />
        </div>
      </section>
    </form>
  )
}

function Forms({ step }) {
  console.log(step);
  return (
    <section className="form-container col col-12">
      {step === 0 && < AddressForm />}
      {step === 1 && < ShippingForm />}
      {step === 2 && < CreditCardForm />}
    </section>
  )
}

export default Forms;