import { useEffect, useState } from "react";
import styles from "../styles/authForm.module.css";
import { useNavigate, useParams } from "react-router";
import url from "../../url";

export default function () {
  const [content, setContent] = useState("");
  const { commentId } = useParams();
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));
    console.log(formData.get("title"));
    const request = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        content: formData.get("content"),
      }),
    };

    const response = await fetch(`${url}/comments/${commentId}`, request);
    const data = await response.json();
    navigate("/");
  }

  useEffect(() => {
    async function getComments(commentId) {
      const response = await fetch(`${url}/comments/${commentId}`);
      const data = await response.json();
      console.log(data);
      setContent(data.content);
    }
    getComments(commentId);
  }, []);

  return (
    <div className={styles.formContainer}>
      <h2>Edit Comment</h2>
      <form action={handleSubmit} className={styles.formBody}>
        <div className={styles.formItem}>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            rows={10}
            cols={40}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
