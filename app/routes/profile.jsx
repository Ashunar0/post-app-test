import { useNavigate } from "@remix-run/react";
import Layout from "../components/Layout";
import "../styles/profile.css";

export default function Profile() {
  // 仮のユーザーデータ（あとでAPI or ログイン情報から取得する想定）
  const user = {
    name: "あさひ",
    email: "asahi@example.com",
    bio: "早稲田の情報系大学生 / Webエンジニア志望",
    avatarUrl:
      "data:image/png;base64,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", // アイコン画像がなければデフォでこれ
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="profile">
        <h1>プロフィール</h1>
        <div className="profile-card">
          <img src={user.avatarUrl} alt="プロフィール画像" className="avatar" />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
          </div>
        </div>
        <button className="sign-out-button" onClick={handleSignOut}>
          ログアウト
        </button>
      </div>
    </Layout>
  );
}
