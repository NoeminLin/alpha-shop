import { CityList, GenderList } from "../../data/formsOptionList"


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
    <form className="col col-12" data-phase="address">
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

function Forms() {
  return (
    <section className="form-container col col-12">
      <AddressForm />
    </section>
  )
}

export default Forms;