import { Link, useNavigate } from "@remix-run/react";
import "../styles/components/Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <header>
      <h1>Remix掲示板</h1>
      <nav>
        <div className="nav-option">
          <Link to="/timeline">タイムライン</Link>
        </div>
        <div className="nav-option">
          <Link to="/create">投稿</Link>
        </div>
        <div className="nav-option">
          <Link to="/profile">プロフィール</Link>
        </div>
        <div className="nav-option">
          <button onClick={handleSignOut}>ログアウト</button>
        </div>
      </nav>
    </header>
  );
}
