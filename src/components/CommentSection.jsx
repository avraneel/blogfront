import { Comment } from "./Comment";

const comments = [
  {
    name: "Adam",
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in nostrum rerum omnis repudiandae voluptatem eaque amet tempore dolores, tempora facilis odit nihil voluptates. Amet neque rerum provident blanditiis dolor.",
  },
  {
    name: "Jacob",
    date: new Date(),
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore optio aliquid, adipisci dolorem sapiente! Dicta amet, quidem porro sapiente veritatis odit quas atque impedit laborum commodi. Tempora, veniam doloremque.",
  },
  {
    name: "Eve",
    date: new Date(),
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laborum deleniti eos deserunt quaerat vel suscipit iure quae? Fugiat perferendis natus accusamus vitae enim dolores quasi tenetur quidem illum debitis?",
  },
];

export function CommentSection() {
  const commentComponents = comments.map((comment) => (
    <Comment
      name={comment.name}
      date={comment.date}
      content={comment.content}
    />
  ));
  return <div className="commentSection">{commentComponents}</div>;
}
