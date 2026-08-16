export default function SignUp() {
  return (
    <main>
      <h2>Sign Up</h2>
      <form action="/posts" method="post">
        <div className="formItem">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" id="fullname" />
        </div>
        <div className="formItem">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="formItem">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="formItem">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
        <button>Submit</button>
      </form>
    </main>
  );
}
