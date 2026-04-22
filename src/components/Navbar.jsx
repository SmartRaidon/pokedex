import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">PokéDex</div>

      <div className="nav-links">
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>

        <Link to="/about">
          <button className="nav-btn">About</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;