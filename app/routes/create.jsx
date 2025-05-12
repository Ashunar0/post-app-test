import Layout from "../components/Layout";
import "../styles/create.css";

export default function Create() {
  return (
    <Layout>
      <div className="create">
        <h1>新規投稿</h1>
        <form>
          <textarea
            name="content"
            placeholder="投稿内容を入力してください"
            cols={20}
            rows={10}
          />
          <button type="submit">投稿</button>
        </form>
      </div>
    </Layout>
  );
}
