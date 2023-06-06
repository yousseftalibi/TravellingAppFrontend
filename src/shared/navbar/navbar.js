
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLoggedIn } from '../stateStore/stateStore';
import logo from  '../logo.png';

const Navbar = () => {

  const navigate = useNavigate();
  const setLoggedIn = useLoggedIn(state => state.setLoggedIn);

  const logout = () => {
    setLoggedIn(false); 
    Cookies.remove('loggedIn'); 
    Cookies.remove('userId'); 
    Cookies.remove('username'); 
    navigate('/authentification'); 
  }
  
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="#" type='button'>
              <img className="img-fluid" src={logo} alt="Trippy logo" style={{ width: "30%" }}></img>
              <p>
                TRAVELLERS
              </p>
          </a>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/places")} type='button'>Places</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/addPlaces")} type='button'>Add Places</a>
              </li>
           
            </ul>


            <form className="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-secondary my-2 my-sm-0" type='button' id="logout" onClick={() => logout("Logout")}>
                Logout <FontAwesomeIcon icon={faSignOutAlt} style={{fontSize: "24px"}} />
              </button>          
            </form>

          </div>
        </nav>
      
    </>
  );
}
export default Navbar;

