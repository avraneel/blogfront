import styles from "../styles/authForm.module.css";

export default function CommentBox({ postId }) {
  const url = "http://localhost:3000/comments";

  async function handleSubmit(formData) {
    const token = localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    const request = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        content: formData.get("comment"),
        postId: postId,
      }),
    };
    console.log(request);
    const response = await fetch(url, request);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <form action={handleSubmit} className={styles.formBody}>
        <div className={styles.formItem}>
          <label htmlFor="comment">Write a comment</label>
          <textarea name="comment" id="comment"></textarea>
        </div>
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
