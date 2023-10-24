
import '../style/home.css';
import { Link } from 'react-router-dom';
const Home  = () => {
  return (
    <div className="home-container">
        <h1>Farzi is basically a counterfeit of everything</h1>
        <p>Some description about Farzi</p>
        <Link to="/search">Find your Farzi</Link>
    </div>
  );
}

export default Home;
