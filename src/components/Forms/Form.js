import { CityList } from "../../data/formsOptionList"




function AddressForm() {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select>
                <option value="mr">先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <div className="input-label">姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">電話</div>
            <input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">Email</div>
            <input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <select required="">
                <option value="">請選擇縣市</option>
                {CityList.map(city =>
                  <option key={city.value} value={city.value}>{city.title}</option>
                )}
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">地址</div>
            <input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  )
}

// function ShippingForm() {
//   return (
//     <form className="col col-12" data-phase="shipping">
//       <h3 className="form-title">運送方式</h3>
//       <section className="form-body col col-12">
//         <label className="radio-group col col-12" data-price="0">
//           <input id="shipping-standard" type="radio" name="shipping" checked="" />
//           <div className="radio-info">
//             <div className="col col-12">
//               <div className="text">標準運送</div>
//               <div className="price">免費</div>
//             </div>
//             <div className="period col col-12">約 3~7 個工作天</div>
//           </div>
//           <div className="radio-box-border"></div>
//         </label>
//         <label className="radio-group col col-12" data-price="500">
//           <input id="shipping-dhl" type="radio" name="shipping" />
//           <div className="radio-info">
//             <div className="col col-12">
//               <div className="text">DHL 貨運</div>
//               <div className="price">$500</div>
//             </div>
//             <div className="period col col-12">48 小時內送達</div>
//           </div>
//           <div className="radio-box-border"></div>
//         </label>
//       </section>
//     </form>
//   )
// }

// function CreditCardForm() {
//   return (
//     <form className="col col-12" data-phase="credit-card">
//       <h3 className="form-title">付款資訊</h3>
//       <section className="form-body col col-12">
//         <div className="col col-12">
//           <div className="input-group input-w-lg-4 input-w-sm-full">
//             <div className="input-label">持卡人姓名</div>
//             <input type="text" placeholder="John Doe" />
//           </div>
//         </div>
//         <div className="col col-12">
//           <div className="input-group input-w-lg-4 input-w-sm-full">
//             <div className="input-label">卡號</div>
//             <input type="text" placeholder="1111 2222 3333 4444" />
//           </div>
//         </div>
//         <div className="col col-12">
//           <div className="input-group input-w-lg-3 input-w-sm-s3">
//             <div className="input-label">有效期限</div>
//             <input type="text" placeholder="MM/YY" />
//           </div>
//           <div className="input-group input-w-lg-3 input-w-sm-s3">
//             <div className="input-label">CVC / CCV</div>
//             <input type="text" placeholder="123" />
//           </div>
//         </div>
//       </section>
//     </form>
//   )
// }

function Forms() {
  return (
    <section className="form-container col col-12">
      <AddressForm />
    </section>
  )
}

export default Forms;