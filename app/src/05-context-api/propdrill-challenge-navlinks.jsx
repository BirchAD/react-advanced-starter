import User from "./propdrill-challenge-user";

const Navlinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <User />
    </div>
  );
};

export default Navlinks;
