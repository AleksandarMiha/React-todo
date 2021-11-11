import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2> Home </h2>
      <Link to="/users" className="nav-link">
        Manage Users
      </Link>
    </div>
  );
};

export default Home;
