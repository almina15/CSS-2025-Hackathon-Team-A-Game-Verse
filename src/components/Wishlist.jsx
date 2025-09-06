// src/components/Wishlist.jsx
export default function Wishlist({ items }) {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {items.length === 0 ? (
        <p>No games added yet.</p>
      ) : (
        items.map((game, index) => (
          <div key={index} className="wishlist-item">{game}</div>
        ))
      )}
    </div>
  );
}
