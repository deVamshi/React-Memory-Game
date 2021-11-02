import "./SingleCard.css";

export default function SingleCard({ card, handleClick, flipped }) {
  return (
    <div className={flipped ? "card flipped" : "card"}>
      <img className="front" alt="front" src={card.src} />
      <img
        onClick={() => handleClick(card)}
        className="back"
        alt="back"
        src="/img/cover.png"
      />
    </div>
  );
}
