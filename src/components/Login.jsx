import styles from "../styles/authForm.module.css";

export default function Login() {
  const url = "http://localhost:3000/login";
  return (
    <div className={`login ${styles.formContainer}`}>
      <h2>Log In</h2>
      <form action={url} method="post" className={styles.formContainer}>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
