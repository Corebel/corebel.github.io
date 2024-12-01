import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to CodeCraft</h1>
      <p>Innovating Excellence, Empowering Your Success</p>
      <nav>
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/code-assistance">Code Assistance</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
