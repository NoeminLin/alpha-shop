import icons from './../../assets/icons/icons.svg'


function CountButton({ type }) {
  return (
    <svg className={"product-action " + type}>
      <use xlinkHref={icons + "#svg-icon-" + type}></use>
    </svg>
  )
}

function ProductControl({ quantity }) {
  return (
    <div className="product-control-container">
      <div className="product-control">
        <CountButton type="minus" />
        <span className="product-count">{quantity}</span>
        <CountButton type="plus" />
      </div>
    </div>
  )
}

function Product({ id, name, price, quantity, img }) {
  return (
    <div className="product-container col col-12" key={id}>
      <img className="img-container" src={img} alt="" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <ProductControl quantity={quantity} />
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
  const productList = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]

  return (
    <section className="cart-container col col-lg-5 col-sm-12" data-total-price="0">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {
          productList.map(prod =>
            <Product {...prod} key={prod.id + '-' + prod.name} />
          )
        }
      </section>

      <CartInfo title={"運費"} value={"免費"} />
      <CartInfo title={"小計"} value={"$ " + 0} />
    </section>
  )
}

export default Cart