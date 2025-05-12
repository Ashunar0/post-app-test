import { useNavigate } from "@remix-run/react";
import Layout from "../components/Layout";
import "../styles/profile.css";

export default function Profile() {
  // 仮のユーザーデータ（あとでAPI or ログイン情報から取得する想定）
  const user = {
    name: "あさひ",
    email: "asahi@example.com",
    bio: "早稲田の情報系大学生 / Webエンジニア志望",
    avatarUrl: "https://via.placeholder.com/100", // アイコン画像がなければデフォでこれ
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
