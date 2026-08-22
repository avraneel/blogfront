import styles from "../styles/authForm.module.css";

export default function Login() {
  const url = "http://localhost:3000/login";
  return (
    <div className={`login ${styles.formContainer}`}>
      <h2>Log In</h2>
      <form action={handleSubmit} className={styles.formContainer}>
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

async function handleSubmit(formData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const request = {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: myHeaders,
  };

  const response = await fetch("http://localhost:3000/login", request);
  // as soon as header arrives, the promise resolves to response object, so first check header
  if (!response.ok) {
    throw new Error(`Response Status : ${response.status}`);
  }

  const jwt = await response.json();
  localStorage.setItem("token", `Bearer ${jwt.token}`);
}
