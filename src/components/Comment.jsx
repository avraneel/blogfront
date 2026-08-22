export default function Comment({ authorId, date, content }) {
  const localeDate = date.toLocaleString();
  return (
    <div className="comment">
      <p>{localeDate}</p>
      <p>{content}</p>
    </div>
  );
}
