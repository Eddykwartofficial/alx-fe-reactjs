import { Link } from "react-router-dom";
<nav>
  <ul>
    <li>
      <Link
        style={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
        }}
        to
        href="/"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        style={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
        }}
        to
        href="<About/>"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        style={{
          backgroundColor: "Blue",
          display: "flex",
          justifyContent: "center",
        }}
        to
        href="<Services/>"
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        style={{
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "center",
        }}
        to
        href="<Contact/>"
      >
        Contact
      </Link>
    </li>
  </ul>
</nav>;

export default Navbar;
