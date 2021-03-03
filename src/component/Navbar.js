import React , { Component } from 'react'
import {NavLink} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
    <div>
      <header className="desktop-container" id="desktop-header-cnt">
        <div className="desktop-preHeaderContent desktop-showBanner">
          <a className="desktop-preHeaderLinks" href="myntrainsider?cache=false">
           Myntra Insider
           <span className="desktop-superscriptTag" > New </span>
          </a>
          <a className="desktop-preHeaderLinks" href="" >
            Gift Card
          </a>
          <a className="desktop-preHeaderLinks" href="" >
            Track Orders
          </a>
          <a className="desktop-preHeaderLinks" href="" >
           Contact Us
          </a>
        </div>
        <div className="desktop-bound" >
          <div className="desktop-logoContainer" >
          <a href="#" className="myntraweb-sprite desktop-logo sprites-headerLogo"/></div>
          <nav className="desktop-navbar">
            <div className="desktop-navLinks">
              <div className="desktop-navContent">
                <div className="desktop-navLink">
                  <NavLink to="/men" data-group="men" data-color="#ee5f73" style={{borderBottomColor: '#ee5f73'}} className="desktop-main">Men</NavLink>
                </div>
              </div>
              <div className="desktop-navContent">
                <div className="desktop-navLink">
                  <NavLink data-index={1} data-group="women" data-color="#fb56c1" style={{borderBottomColor: '#fb56c1'}} className="desktop-main" to="/women">Women</NavLink>
                </div>
              </div>
              <div className="desktop-navContent">
                <div className="desktop-navLink">
                  <NavLink to="/kids" data-group="kids" data-color="#f26a10" style={{borderBottomColor: '#f26a10'}} className="desktop-main">Kids</NavLink>
                </div>
              </div>
              <div className="desktop-navContent">
                <div className="desktop-navLink">
                  <a href="#" data-index={3} data-group="home-&-living" data-color="#f2c210" style={{borderBottomColor: '#f2c210'}} className="desktop-main">Home &amp; Living</a>               </div>
              </div>
              <div className="desktop-navContent">
                <div className="desktop-navLink" >
                  <a href="#" data-index={4} data-group="essentials" data-color="#0db7af" style={{borderBottomColor: '#0db7af'}} className="desktop-main">Essentials</a>
                </div>
              </div>
            </div>
          </nav>
          <div className="desktop-actions" >
            <div className="desktop-user" >
              <div className="desktop-userIconsContainer"><span className="myntraweb-sprite desktop-iconUser sprites-headerUser"/><span className="desktop-userTitle">Profile</span></div>
              <div className="desktop-userActions">
                <div className="desktop-userActionsArrow"/>
                
              </div>
            </div>
            <a href="wishlist" className="desktop-wishlist"><span className="myntraweb-sprite desktop-iconWishlist sprites-headerWishlist"/><span className="desktop-userTitle">Wishlist</span></a><a href="checkout/cart" className="desktop-cart"><span className="myntraweb-sprite desktop-iconBag sprites-headerBag"/><span className="desktop-badge 
                           desktop-grey" >0</span><span className="desktop-userTitle">Bag</span></a>
          </div>
          <div className="desktop-query"><input placeholder="Search for products, brands and more" className="desktop-searchBar"/><a className="desktop-submit"><span className="myntraweb-sprite desktop-iconSearch sprites-search"/></a></div>
        </div>
      </header>
    </div>
  );
}
}
export default Navbar;
