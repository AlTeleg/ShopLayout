export default function ShopItem({ product }) {
  return (
    <div className='shop-item'>
      <img className='shop-item_product-img' src={product.img} alt={product.name} />
      <h2 className='shop-item_product-name'>{product.name}</h2>
      <p className='shop-item_product-color'>{product.color}</p>
      <p className='shop-item_product-price'>${product.price}</p>
      <button className='shop-item_product-btn'>Add to cart</button>
    </div>
  )
}
