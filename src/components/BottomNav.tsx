import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMapMarkedAlt,
  FaFish,
  FaBookOpen,
  FaCog,
} from "react-icons/fa";

export default function BottomNav() {
  const navStyle: React.CSSProperties = {
    position: "fixed",
    left: 16,
    right: 16,
    bottom: 16,

    height: 84,

    borderRadius: 28,

    background:
      "linear-gradient(180deg, rgba(12,32,54,.72), rgba(6,18,34,.82))",

    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)",

    border: "1.5px solid rgba(90,185,255,.30)",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    boxShadow:
      "0 10px 30px rgba(0,0,0,.28), 0 20px 55px rgba(0,0,0,.42)",

    zIndex: 9999,
  };

  const link = ({
    isActive,
  }: {
    isActive: boolean;
  }): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,

    textDecoration: "none",

    color: isActive ? "#9BE236" : "#D6E3ED",

    fontSize: 12,

    fontWeight: isActive ? 700 : 500,

    transition: "all .25s ease",

    width: 68,
  });

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={link}>
        <FaHome size={24} />
        Today
      </NavLink>

      <NavLink to="/lakes" style={link}>
        <FaMapMarkedAlt size={24} />
        Advisor
      </NavLink>

      <NavLink to="/tackle" style={link}>
        <FaFish size={24} />
        Tackle
      </NavLink>

      <NavLink to="/fish" style={link}>
        <FaBookOpen size={24} />
        Knowledge
      </NavLink>

      <NavLink to="/settings" style={link}>
        <FaCog size={24} />
        Settings
      </NavLink>
    </nav>
  );
}