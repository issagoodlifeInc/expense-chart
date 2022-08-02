import logo from "../images/logo.svg";

export default function Top() {
  return (
    <header className="container">
      <div className=" flex">
        <div className="header">
          <p className="header--text">My balance</p>
          <h2 className="header--title">$921.48</h2>
        </div>
        <div className="img--header">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
}
