import React from 'react';

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white mx-2">
      <a className="navbar-brand ml-2 font-weight-bolder" href="#">Men's Shoes (503)</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> 
        <span className="navbar-toggler-icon"></span> 
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarColor">
        <ul className="navbar-nav">
          <li className="nav-item nav-link cursor-pointer">Hide Filters <i className="fa fa-bars mx-2" aria-hidden="true"></i></li>
          <li className="nav-item nav-link">
            <div>
              <select className="border-0" name="sort" id="sort">
                <option value="default">Sort By</option>
                <option value="default">Name</option>
                <option value="default">Size</option>
              </select>
            </div>
          </li>                
        </ul>        
      </div>
    </nav>
  );
}

export default Topbar;
