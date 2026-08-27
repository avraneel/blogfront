import styles from "../styles/authForm.module.css";
import backurl from "../../url";

export default function CommentBox({ postId, setUpdateFlag, session }) {
  const url = `${backurl}/comments`;
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
        authorId: session.id,
      }),
    };

    const response = await fetch(url, request);
    if (response.ok) {
      setUpdateFlag((updateFlag) => !updateFlag);
    }
  }

  return (
    <div>
      <form action={handleSubmit} className={styles.formBody}>
        <div className={styles.formItem}>
          <label htmlFor="comment">Write a comment *</label>
          <textarea name="comment" id="comment" required></textarea>
        </div>
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
