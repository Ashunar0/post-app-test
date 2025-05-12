import { Link, useNavigate } from "@remix-run/react";
import GoogleIcon from "@mui/icons-material/Google";
import "../styles/sign-up.css";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ログイン機能をいずれ実装する
    navigate("/timeline");
  };

  return (
    <div className="sign-in-page">
      <div className="form-container">
        <h2>アカウント新規作成</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user-name">ユーザー名</label>
            <input type="text" placeholder="ユーザー名を入力" />
          </div>
          <br />
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input type="text" placeholder="メールアドレスを入力" />
          </div>
          <br />
          <div>
            <label htmlFor="password">パスワード</label>
            <input type="password" placeholder="パスワードを入力" />
          </div>
          <br />
          <button className="sign-up-button" type="submit">
            ログイン
          </button>
        </form>
        <div className="footer">
          <hr />
          <p>または</p>
          <button className="google-button">
            <GoogleIcon />
            Googleでログイン
          </button>
          <p>
            アカウントを既にお持ちですか？&nbsp;
            <span>
              <Link to="/sign-in">ログイン</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
