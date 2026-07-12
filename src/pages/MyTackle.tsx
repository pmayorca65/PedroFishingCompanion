import { Link } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import "../styles/MyTackle.css";

export default function MyTackle() {

  return (

    <div>

      <Header title="📦 My Tackle" />

      <div className="tacklePage">

        <Link
          to="/softplastics"
          className="cardLink"
        >

          <div className="categoryCard">

            <div>

              <h2>🪱 Soft Plastics</h2>

              <p>Organize all your soft baits</p>

            </div>

            <span>→</span>

          </div>

        </Link>

        <Link
          to="/jigheads"
          className="cardLink"
        >

          <div className="categoryCard">

            <div>

              <h2>⚖️ Jig Heads</h2>

              <p>Sizes and quantities</p>

            </div>

            <span>→</span>

          </div>

        </Link>

        <div className="categoryCard">

          <div>

            <h2>🎯 Hard Baits</h2>

            <p>Crankbaits, jerkbaits and more</p>

          </div>

          <span>→</span>

        </div>

        <div className="categoryCard">

          <div>

            <h2>🪝 Hooks</h2>

            <p>All hook types</p>

          </div>

          <span>→</span>

        </div>

        <div className="categoryCard">

          <div>

            <h2>🎣 Rods & Reels</h2>

            <p>Your complete setups</p>

          </div>

          <span>→</span>

        </div>

        <Link
          to="/additem"
          className="cardLink"
        >

          <div className="categoryCard">

            <div>

              <h2>➕ Add New Item</h2>

              <p>Add anything to your tackle inventory</p>

            </div>

            <span>+</span>

          </div>

        </Link>

      </div>

      <BottomNav />

    </div>

  );

}