import { Link } from "@remix-run/react";
import "../styles/index.css";

export default function Index() {
  return (
    <div className="container">
      <h1 className="title">ブログアプリ</h1>
      <p className="text">ブログアプリのトップページです。</p>
      <Link to="/sign-in" className="button">
        ログイン
      </Link>
    </div>
  );
}
