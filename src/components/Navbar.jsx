import "./Navbar.css";

function Navbar() {

  return (
    <div className="container">
      <div className="leftNav">
        <a className="Logo" href="/">
          Montrose
        </a>
        <a className="Logo" href="/">
          Montrose
        </a>
      </div>
      <div className="rightNav">
        <a className="navButton" href="/crew">
          thecrew.
        </a>
        <a className="navButton" href="/menu">
          menu.
        </a>
        <a
          className="navButton contact"
          href="https://github.com/paul-nguyen96"
        >
          contact.
        </a>
      </div>
    </div>
  );
}

export default Navbar;
