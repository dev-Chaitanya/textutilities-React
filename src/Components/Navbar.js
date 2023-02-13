import PropTypes from 'prop-types'
// import App from '../App'
import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Picker from './Picker';
export default function Navbar(props) {
  const [color,setcolor]=useState("");
  let handelChange=(text)=>{
   setcolor(text)
   props.colorHandel(color)
  }
  return (
    <nav className={`navbar navbar-expand-lg`} id='navBar'style={{backgroundColor:color,color:'black',WebkitTextStroke:"0.2px",WebkitTextStrokeColor:"white"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">About</a>
          </li> 
        </ul>
            <Picker handel={handelChange}/>
        <div className="mt-2 form-check form-switch ">
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
  <input className={`form-check-input DarkMode bg-${props.ChangeMode}`}  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.colorHandel} />
  </label>
</div>
        <form className="d-flex m-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit ">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
};
Navbar.defaultProps={
    title: "TextUtiles",
};