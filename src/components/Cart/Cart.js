import icons from './../../assets/icons/icons.svg'
import { useState } from 'react'
import { useContext } from 'react'
import { productListContext } from './CartContext.js'


function CountButton({ type, onClick, id }) {
  return (
    <svg className={"product-action " + type}>
      <use xlinkHref={icons + "#svg-icon-" + type} onClick={onClick} type={type} id={id}></use>
    </svg>
  )
}

function ProductControl({ quantity, onClick, id }) {
  return (
    <div className="product-control-container">
      <div className="product-control">
        <CountButton type="minus" onClick={onClick} id={id} />
        <span className="product-count">{quantity}</span>
        <CountButton type="plus" onClick={onClick} id={id} />
      </div>
    </div>
  )
}

function Product({ id, name, price, quantity, img, onClick }) {
  return (
    <div className="product-container col col-12" key={id}>
      <img className="img-container" src={img} alt="" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <ProductControl quantity={quantity} onClick={onClick} id={id} />
        <div className="price">${price}</div>
      </div>
    </div>
  )
}

function CartInfo({ title, value }) {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">{title}</div>
      <div className="price">{value}</div>
    </section>
  )
}

function Cart() {
  const productListInit = useContext(productListContext)

  const [productList, setProductList] = useState(productListInit)

  function handleProductQuantity(e) {
    const id = e.target.id
    const type = e.target.getAttribute('type')
    const newProductList = productList.map(prod => {
      if (prod.id === id) {
        const newProd = { ...prod }
        const newQuantity = newProd.quantity + (type === 'minus' ? (-1) : 1)
        newProd.quantity = newQuantity >= 0 ? newQuantity : 0
        return newProd
      } else {
        return { ...prod }
      }
    });
    setProductList(newProductList)
  }
  function countTotal(productList) {
    let total = 0;
    productList.forEach(prod => {
      total += prod.price * prod.quantity
    });
    return total
  }

  return (
    <section className="cart-container col col-lg-5 col-sm-12" data-total-price="0">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {
          productList.map(prod =>
            <Product {...prod} key={prod.id + '-' + prod.name} onClick={handleProductQuantity} />
          )
        }
      </section>

      <CartInfo title={"運費"} value={"免費"} />
      <CartInfo title={"小計"} value={"$ " + countTotal(productList)} />
    </section>
  )
}

export default Cart