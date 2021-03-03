import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notiflix from "notiflix";
// import moment from 'moment';
import {
    setOldPassword,
    setNewPassword,
    setConfirmNewPassword
} from '../Actions/LoginAction'



class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OldPassword: '',
            LoginDetail: [],
            pass: '',
            userName: ''


        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/assets/js/pages/form-wizard.init.js";
        script.async = true;
        document.body.appendChild(script);
        var dataName = localStorage.getItem('LoginDetailName')
        var dataOldPass = localStorage.getItem('LoginDetailPass')
        this.setState({
            pass: JSON.parse(dataOldPass),
            userName: dataName
        })
    }




    onPost = () => {
        Notiflix.Loading.Dots('Please wait...');
        
        window.location.href = `${process.env.PUBLIC_URL}/dashboard`
        Notiflix.Loading.Remove()
    }

    handleOldPassword = event => {
        this.props.setOldPassword(event.target.value)
    }

    handleNewPassword = event => {
        this.props.setNewPassword(event.target.value)
    }

    handleConfirmNewPassword = event => {
        this.props.setConfirmNewPassword(event.target.value)
    }

    handleSubmit = () => {
        // console.log(this.state.pass,"<======sa")
        if (this.props.Chngpswrd.OldPassword !== '') {
            if (this.props.Chngpswrd.OldPassword == this.state.pass) {
                if (this.props.Chngpswrd.NewPassword !== '') {
                    if (this.props.Chngpswrd.ConfirmNewPassword !== '') {
                        if (this.props.Chngpswrd.NewPassword == this.props.Chngpswrd.ConfirmNewPassword) {
                            // alert(this.props.Chngpswrd.OldPassword)
                            // alert(this.state.pass)
                            // console.log(this.props.Chngpswrd.OldPassword,'asdasd', this.state.pass)
                            // alert("hello")
                            localStorage.setItem('LoginDetailPass', this.props.Chngpswrd.NewPassword)
                            this.onPost();
                        }
                        else {
                            Notiflix.Notify.Failure('New Password and Confirm Password do not match');
                        }
                    }
                    else {
                        Notiflix.Notify.Failure('Confirm Password Cannot be empty');
                    }

                }
                else {
                    Notiflix.Notify.Failure('New Password Cannot be empty');
                }

            }
            else {
                Notiflix.Notify.Failure('Incorrect Old Password');
            }

        }
        else {
            Notiflix.Notify.Failure('old Password Cannot be empty');
        }
    }



    render() {
        return (
            <div className="App">
                <div className="content-page">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row page-title">
                                <div className="col-md-12">
                                    <nav aria-label="breadcrumb" class="float-right mt-1">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Change Password</a></li>
                                        </ol>
                                    </nav>
                                    <h4 className="mb-1 mt-0">Change Password</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="toast fade show" role="alert" aria-live="assertive"
                                                aria-atomic="true" data-toggle="toast">
                                                <div className="toast-header">
                                                    <strong className="mr-auto">Reset Password</strong>
                                                </div>
                                                <div className="toast-body">
                                                    <form class="needs-validation" onSubmit={(e) => {
                                                        e.preventDefault()
                                                    }}>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <label for="validationCustom01">Old Password*</label>
                                                                    <input type="Password" class="form-control" id="validationCustom01"
                                                                        value={this.props.Chngpswrd.OldPassword}
                                                                        onChange={this.handleOldPassword.bind(this)} ></input>

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <label for="validationCustom01">New Password*</label>
                                                                    <input type="Password" class="form-control" id="validationCustom01"
                                                                        value={this.props.Chngpswrd.NewPassword}
                                                                        onChange={this.handleNewPassword.bind(this)}></input>

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <label for="validationCustom01">Confirm New Password*</label>
                                                                    <input type="Password" className="form-control" id="validationCustom01"
                                                                        value={this.props.Chngpswrd.ConfirmNewPassword}
                                                                        onChange={this.handleConfirmNewPassword.bind(this)}></input>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-success" style={{ float: 'right', marginBottom: '9px' }}
                                                                onClick={this.handleSubmit.bind(this)}> Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        Chngpswrd: state.ChngPaswrd,
    }
}

export default connect(mapStateToProps, {
    setOldPassword,
    setNewPassword,
    setConfirmNewPassword
})(ChangePassword);









