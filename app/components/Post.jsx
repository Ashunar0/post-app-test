import "../styles/components/Post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post-author">{post.author}</div>
      <div className="post-content">{post.content}</div>
      <div className="post-date">{post.createdAt}</div>
    </div>
  );
}
