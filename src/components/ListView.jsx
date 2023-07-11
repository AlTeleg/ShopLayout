import ShopItem from "./ShopItem"

export default function ListView({ items }) {
  return (
    <div className="shop-items">
      {items.map((item, id) => (
        <ShopItem product = {item} key={id}/>
      ))}
    </div>
  )
}
