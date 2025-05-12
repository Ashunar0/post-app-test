import { Link, useNavigate } from "@remix-run/react";
import "../styles/sign-in.css";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ログイン機能をいずれ実装する
    navigate("/timeline");
  };

  return (
    <div className="sign-in-page">
      <div className="form-container">
        <h2>ログイン</h2>
        <form onSubmit={handleSubmit}>
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
          <button className="sign-in-button" type="submit">
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
            アカウントをお持ちでないですか？&nbsp;
            <span>
              <Link to="/sign-up">新規作成</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
