import ShopCard from "./ShopCard"

export default function CardsView({ cards }) {
  return (
    <div className="shop-cards">
      {cards.map((card, id) => (
        <ShopCard product = {card} key={id}/>
      ))}
  </div>
  )
}
