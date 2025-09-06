const Wishlist = ({ wishlist, toggleWishlist }) => {
  return (
    <div style={{marginBottom: "5rem"}}>
      <h2 style={{color: "white", marginTop: "2rem", marginLeft: "2rem"}}>My Wishlist</h2>
      <div className="grid">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((game) => (
            <div key={game.id} className="card">
              <img src={game.background_image} alt={game.name} />
              <div className="card-content">
                <h3>{game.name}</h3>
                <button onClick={() => toggleWishlist(game)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
