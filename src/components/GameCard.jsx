// src/components/GameCard.jsx
export default function GameCard({ name, image, released }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Released: {released}</p>
      </div>
    </div>
  );
}
