import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChangePassword from './ChangePassword';
// import LogOut from '@iconify/icons-feather/log-out';
// import { Icon, InlineIcon } from '@iconify/react';
import { Home, Briefcase, User, Layout, Users, Grid, Lock, FilePlus, BarChart, FileText, CreditCard } from 'react-feather';
//  import Dashboard from './Dashboard';
// import EditManagement from './EditManagement';




class Menu extends Component {

    componentDidMount() {
       
        console.log("a<--------")
    }

    render() {
        return (
            <div className="App">
                <Header></Header>
             
            <Router>
            <div id="wrapper">
              <div class="left-side-menu">
                <div class="media user-profile mt-2 mb-2">
                    <img src="assets/images/users/avatar-7.jpg" class="avatar-sm rounded-circle mr-2" alt="Shreyu" />
                    <img src="assets/images/users/avatar-7.jpg" class="avatar-xs rounded-circle mr-2" alt="Shreyu" />

                    <div class="media-body">
                        <h6 class="pro-user-name mt-0 mb-0">Nawal</h6>
                        <span class="pro-user-desc">Administrator</span>
                    </div>
                    
                </div>
                <div class="sidebar-content">
                    <div id="sidebar-menu" class="slimscroll-menu">
                        <ul class="metismenu" id="menu-bar">
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
                                <Home/>
                                    <span> Dashboard </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/changepassword`} aria-expanded="false">
                                <Lock/>
                                    <span>Change Password </span>
                                </Link>
                            </li>
                             <li>
                                <a onClick={()=>{
                                    localStorage.removeItem('LoginDetail')
                                    window.location.href='/'
                                }}>
                                {/* <Icon icon={ LogOut } /> */}
                                    <span> Logout </span>
                                </a>
                            </li>   
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            </div>
            <Switch>
            {/* <Route exact path ={`${process.env.PUBLIC_URL}/Editblog`} component={EditManagement}></Route>
            <Route exact path={`${process.env.PUBLIC_URL}/addblog`} component =  {Management}></Route>
            <Route exact path ={`${process.env.PUBLIC_URL}/blog`} component={BlogManagement}></Route> */}
            {/* <Route exact path ={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard}></Route> */}
            <Route exact path ={`${process.env.PUBLIC_URL}/changepassword`} component={ChangePassword}></Route>
            </Switch>
             
            </Router>
            
              <Footer></Footer>
            </div>
        );
    }

}

export default Menu;
