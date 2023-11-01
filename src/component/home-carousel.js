
import '../style/home.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store';
import { appSearchAction } from '../store/search-slice';


const HomeCarousel  = () => {

  const openSearchModal = useSelector(state => state.appSearch.openSearchModal)
  const dispatch = useDispatch()
  

  return (
    <div className="home-container">
        <h1>Farzi is basically a counterfeit of everything</h1>
        <p>Some description about Farzi</p>
        {/* <Link to="/search"> */}
          <Button variant="primary" onClick={ () => dispatch(appSearchAction.showSearchModal()) }>
          Find your Farzi
        </Button>
      {/* </Link> */}
      
      

    </div>
  );
}

export default HomeCarousel;
