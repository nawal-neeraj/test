import { Component } from 'react';
import React from 'react';
import { Menu } from 'react-feather';
class Header extends Component {
    render() {
        return (
            <div className="App">
              <div id="wrapper">


<div class="navbar navbar-expand flex-column flex-md-row navbar-custom">
    <div class="container-fluid">
        
        <a href="index.html" class="navbar-brand mr-0 mr-md-2 logo">
            <span class="logo-lg">
                <img src="assets/images/logo.png" alt="" height="40" />
            
            </span>
            <span class="logo-sm">
                <img src="assets/images/logo.png" alt="" height="24"></img>
            </span>
        </a>

        <ul class="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
            <li class="">
                <button class="button-menu-mobile open-left disable-btn">
                  <Menu class="menu-icon"/>
                 
                </button>
            </li>
        </ul>

        <ul class="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
        

            <li class="dropdown notification-list" data-toggle="tooltip" data-placement="left"
                >
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                    aria-expanded="false">
                    <i dangerouslySetInnerHTML = {{__html:window.feather.icons.bell.toSvg()}}></i>
                    <span class="noti-icon-badge"></span>
                </a>
                                </li>
                                <li className="dropdown notification-list" data-toggle="tooltip" data-placement="left" title="Logout">
                                    <a onClick={()=>{
                                        localStorage.removeItem('LoginDetail')
                                        window.location.href='/'
                                    }} className="nav-link right-bar-toggle">
                                        <i data-feather="log-out"></i>
                                        {/* <Icon icon={LogOut} /> */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;
