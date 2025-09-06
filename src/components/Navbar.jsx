const Navbar = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        console.log("Searching for:", query);
       
      }
    return ( 
        <header className="header">
        <div className="header-content">
          <div className="logo">🎮 GameHub</div>
          <nav>
            <ul className="nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#games">Games</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
            </ul>
          </nav>
          <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search games..." className="search-bar" />
          </form>
        </div>
      </header>
     );

}
 
export default Navbar;

