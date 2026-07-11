import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      <div className="logo">
        🎣
      </div>

      <h1 className="title">
        Pedro Fishing
        <br />
        Companion
      </h1>

      <h2 className="subtitle">
        Welcome back, Pedro!
      </h2>

      <Link to="/tackle" className="cardLink">
  <div className="menuCard">
    <div className="icon">📦</div>
    <div className="text">
      <h3>My Tackle</h3>
      <p>Inventory of all your fishing gear</p>
    </div>
    <div className="arrow">›</div>
  </div>
</Link>

<div className="menuCard">
  <div className="icon">🐟</div>
  <div className="text">
    <h3>Fish Guide</h3>
    <p>Species, seasons and techniques</p>
  </div>
  <div className="arrow">›</div>
</div>

<div className="menuCard">
  <div className="icon">🗺️</div>
  <div className="text">
    <h3>Lake Guide</h3>
    <p>Your favorite fishing locations</p>
  </div>
  <div className="arrow">›</div>
</div>

<div className="menuCard">
  <div className="icon">📝</div>
  <div className="text">
    <h3>Catch Log</h3>
    <p>Record every fishing trip</p>
  </div>
  <div className="arrow">›</div>
</div>

<div className="menuCard">
  <div className="icon">🛒</div>
  <div className="text">
    <h3>Shopping List</h3>
    <p>Everything you still need</p>
  </div>
  <div className="arrow">›</div>
</div>

<div className="menuCard">
  <div className="icon">⚙️</div>
  <div className="text">
    <h3>Settings</h3>
    <p>Customize the application</p>
  </div>
  <div className="arrow">›</div>
</div>
</div>
  );
}
