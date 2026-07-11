import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottomNav">

      <Link to="/" className="navItem">
        🏠
        <span>Home</span>
      </Link>

      <Link to="/tackle" className="navItem">
        📦
        <span>Tackle</span>
      </Link>

      <Link to="/fish" className="navItem">
        🐟
        <span>Fish</span>
      </Link>

      <Link to="/log" className="navItem">
        📝
        <span>Log</span>
      </Link>

      <Link to="/settings" className="navItem">
        ⚙️
        <span>Settings</span>
      </Link>

    </nav>
  );
}