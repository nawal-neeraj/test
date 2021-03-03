import React, { Component } from 'react';
// import moment from 'moment'

class Footer extends Component {
    render() {
        return (

            <div className="App">
                <div className='wrapper'>
              <footer class="footer" style={{backgroundColor:'#e80000'}}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                {/* Copyright &copy; {moment().format('YYYY')} */}
                                 {/* <a href="http://staycovid19free.in/" style={{color:'white'}}><b> Stay Covid-19 Free</b></a>. All rights reserved. */}
                            </div>
                            <div class="col-lg-6">
                            {/* <span class="showweb">Powered by <a href="http://globaltrendz.com/" target="_blank" style={{color: '#fff'}}>Global Trendz</a></span> 
                            <span class="showmob">Powered by <a href="http://globaltrendz.com/" target="_blank" style={{color: '#fff'}}>Global Trendz</a></span>  */}
                         </div>
                        </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }

}

export default Footer;
