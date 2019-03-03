import React, {Component} from 'react';
import '../../css/HeaderContainer.css';

class HeaderContainer extends Component {

  render(){
    return(
      <div className="main-header-container">
        <h2>Header Container</h2>
          <div className="header-left">
              <h3>header left container</h3>
              <div className="header-left-top">
              <h4>LOGO</h4>
              </div>
              <div className="header-left-bottom">
              <h4>the best website in the world</h4>
              </div>
          </div>
          <div className="header-right">
              <div clasName="header-right-menu">
                <div className="menu-item-post-job">
                <p>post job</p>
                </div>
                <div className="menu-item-pricing">
                <p>pricing</p>
                </div>
                <div className="menu-item-about">
                <p>about</p>
                </div>
                <div className="menu-item-contact">
                <p>contact</p>
                </div>
              </div>
          </div>
      </div>

    )
  }

}

export default HeaderContainer;
