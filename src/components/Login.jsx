export default function Login() {
  return (
    <div className="login">
      <h2>Log In</h2>
      <form action="/posts" method="post">
        <div className="formItem">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="formItem">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
