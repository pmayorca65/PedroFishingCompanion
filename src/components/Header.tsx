import { Link } from "react-router-dom";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className="header">

      <Link to="/" className="backButton">
        ←
      </Link>

      <h1>{title}</h1>

    </div>
  );
}