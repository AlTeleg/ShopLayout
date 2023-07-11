export default function ShopCard({ product }) {
  return (
    <div className='shop-card'>
      <h2 className='shop-card_product-name'>{product.name}</h2>
      <p className='shop-card_product-color'>{product.color}</p>
      <img className='shop-card_product-img' src={product.img} alt={product.name} />
      <div className="shop-card_product-add">
        <p className='shop-card_product-add_price'>${product.price}</p>
        <button className='shop-card_product-add_btn'>Add to cart</button>
      </div>
    </div>
  )
}
