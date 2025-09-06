// src/components/GameCard.jsx
export default function GameCard({ name, image, released, onAddWishlist }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Released: {released}</p>
        <button 
          className="wishlist-btn" 
          onClick={() => onAddWishlist(name)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
