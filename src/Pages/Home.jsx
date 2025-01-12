import React from 'react';
import Addtocard from './Addtocard/Addtocard';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  const navigate = useNavigate();
  const goToSearch = () => {
    navigate("/search");
  };
  return (
    <div>
            <button className="btn" onClick={goToSearch}>
            Go to Search
          </button>
      <Addtocard />
      < Footer/>
    </div>
  );
}

export default Home;
