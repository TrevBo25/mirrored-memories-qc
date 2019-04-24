import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      nope: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(messageData) {
    toast.success('Submitted!', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
    emailjs.send("gmail",  "MirroredMemoriesContact", messageData, 'user_K799lAF6KQMFkMDT4p2MT')
    this.setState({name: '', email: '', message: ''});
  }

  handleSubmit() {
    let messageData = Object.assign({}, {name: this.state.name, email: this.state.email, message: this.state.message});

    if(Object.values(messageData).every((e) => !!e)) {
      this.setState({nope: false}, this.sendEmail(messageData))
    } else {
      this.setState({nope: true});
      setTimeout(() => this.setState({nope: false}), 2000);
    }
  }

  render() {
    return (
      <div className="contact-comp">
        <div className="contact-title">contact us.</div>
        <div className="contact-holders">
          <div className="contact-left">
            <input className="inputs" type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
            <input className="inputs" type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
            <textarea className="inputs textarea" value={this.state.message} placeholder="What's up?" onChange={(e) => {this.setState({message: e.target.value})}} rows="6" cols=""/>
            <div className={`quote-form-submit ${this.state.nope ? 'nope' : ''}`} onClick={() => {this.handleSubmit()}} ><span class="button-text">{this.state.nope ? 'Please fill out all fields.' : 'Submit'}</span></div>
          </div>
          <div className="contact-right">
            <img src="https://s3.us-east-2.amazonaws.com/mirroredmemories/map+radius.JPG" alt="" className="contact-img" />
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover={false}
        />
      </div>
    )
  }
}