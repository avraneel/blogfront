export default function User({ fullname, email, date }) {
  return (
    <div className="userProfile">
      <h2>{fullname}</h2>
      <div className="detail">
        <div className="itemName">Email</div>
        <div className="itemValue">{email}</div>
      </div>
      <div className="detail">
        <div className="itemName">Date of Registration</div>
        <div className="itemValue">{date}</div>
      </div>
    </div>
  );
}
