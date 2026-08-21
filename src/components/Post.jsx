import { CommentSection } from "./CommentSection";

const post = {
  title: "Lorem",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, facilis? A doloribus laudantium sint! Odio, quod ipsa quibusdam voluptatibus necessitatibus magni. Qui adipisci, nihil commodi similique corrupti provident at cum.",
};

export default function Post() {
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <CommentSection />
    </article>
  );
}
