import React from 'react';
import { connect } from 'react-redux';
// import moment from 'react-moment';
import { setUsername, setPassword } from '../Actions/LoginAction';
import Notiflix from "notiflix";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            datass:'',
            Password: '',
            EmailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "assets/js/pages/form-wizard.init.js";
        script.async = true;
        document.body.appendChild(script);

        var login = localStorage.getItem('LoginDetail');
        var details = JSON.parse(login)
        this.setState({
            datass: details
        })
        if (details != null) {
            this.props.history.push('./dashboard')
        }
        
    }

    onPost = () => {
        // console.log(this.props.LoginCred.Username)
        const data = this.props.LoginCred
        // console.log(data,"asdasd")

        Notiflix.Loading.Dots('');
        localStorage.setItem('LoginDetail', this.props.LoginCred)
        Notiflix.Loading.Remove()
        // window.location.href = `${process.env.PUBLIC_URL}/dashboard`
    }



    onLogInButtonClicked = () => {
        if (this.props.LoginCred.Username != '') {
            if (this.state.EmailRegex.test(this.props.LoginCred.Username)) {
                if (this.props.LoginCred.Password != '') {
                    this.onPost();
                } else {
                    Notiflix.Notify.Failure('Please Enter Password');
                }
            } else {
                Notiflix.Notify.Failure('Please Enter Correct Email Address');
            }
        } else {
            Notiflix.Notify.Failure('Please Enter Email or Mobile');
        }
    }

    handleNameChange = event => {
        this.props.setUsername(event.target.value)
    }

    handlePasswordChange = event => {
        this.props.setPassword(event.target.value)
    }

    render() {
        // console.log(this.state.datass,"asdad")
        return (
            <div className="App">
                <div class="account-pages my-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6">
                                <div class="card logincard">
                                    <div class="card-body p-0">
                                        <div class="row">
                                            <div class="col-md-12 p-5">
                                                <div class="mx-auto mb-5">
                                                    <a href="index.html">
                                                        {/* <img src="assets/images/logo.png" alt="Eguru logo" style={{ width: '29%' }} /> */}
                                                    </a>
                                                </div>
                                                <h6 class="h5 mb-0 mt-4">Welcome!</h6>
                                                <p class="text-muted mt-1 mb-4">Enter your mobile number and password to
                                                Sign In</p>

                                                <form onSubmit={(e) => {
                                                    e.preventDefault()
                                                }} class="authentication-form">
                                                    <div class="form-group">
                                                        <label class="form-control-label">Mobile Number</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="phone"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.phone.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" class="form-control" id="email"
                                                                // maxLength ="10"
                                                                value={this.props.LoginCred.Username}
                                                                onChange={this.handleNameChange.bind(this)}
                                                                placeholder="1234567986"></input>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mt-4">
                                                        <label class="form-control-label">Password</label>
                                                        <a href="pages-recoverpw.html" class="float-right text-muted text-unline-dashed ml-1">Forgot your password?</a>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="lock"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.lock.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="password" class="form-control" id="password"
                                                                value={this.props.LoginCred.Password}
                                                                onChange={this.handlePasswordChange.bind(this)}
                                                                placeholder="Enter Your Password"></input>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-0 text-center loginbtn">
                                                        <button class="btn btn-primary btn-block" type="submit"
                                                            onClick={this.onLogInButtonClicked.bind(this)}> Log In </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cardes">
                                    <img src="assets/images/praveen.png" class="classed" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                {/* <p style={{ textAlign: 'center' }}> Copyright &copy; {moment().format('YYYY')} <a href="http://staycovid19free.in/" target="_blank"><b>Stay Covid-19 Free</b></a>. All rights reserved. <br /> Powered by <a href="globaltrendz.com" target="_blank">Global Trendz</a> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        LoginCred: state.login,
    }
}


export default connect(mapStateToProps, { setUsername, setPassword })(Login);