import Layout from "../components/Layout";
import Post from "../components/Post";
import "../styles/timeline.css";

export default function Timeline() {
  const posts = [
    {
      id: 1,
      author: "あさひ",
      content: "今日はRemixで掲示板作った！🔥",
      createdAt: "2025-05-12 10:00",
    },
    {
      id: 2,
      author: "ユーザーB",
      content: "やば、めっちゃいい感じやん！",
      createdAt: "2025-05-12 10:05",
    },
  ];

  return (
    <Layout>
      <div className="timeline">
        <div className="timeline-list">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
