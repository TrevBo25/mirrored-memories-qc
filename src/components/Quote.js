import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Quote extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      phone: '',
      date: new Date(),
      type: '',
      location: '',
      hear: '',
      add: '',
      nope: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(emailData) {
    toast.success('Submitted!', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
      });
    emailjs.send("gmail", "MirroredMemoriesQuote", emailData, 'user_K799lAF6KQMFkMDT4p2MT')
    this.setState({name: '', email: '', phone: '', type: '', location: '', hear: '', add: 'Additional information:'})
  }

  handleSubmit() {
    let emailData = Object.assign({}, {name: this.state.name, email: this.state.email, phone: this.state.phone, date: this.state.date.toDateString(), type: this.state.type, location: this.state.location, hear: this.state.hear, add: this.state.add});

    if(Object.values(emailData).every((e) => !!e)) {
      this.setState({nope: false}, this.sendEmail(emailData))
    } else {
      this.setState({nope: true});
      setTimeout(() => this.setState({nope: false}), 2000);
    }
  }

  render() {
    return (
      <div className="quote-comp">
        <h1 className="quote-title">request a quote.</h1>
        <div className="quote-form-outter">
          <div className="quote-form-inner">
            <div className="left-inputs">
              <input className="inputs" type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
              <input className="inputs" type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
              <input className="inputs" type="text" name="phone" placeholder="Phone" value={this.state.phone} onChange={(e) => {this.setState({phone: e.target.value})}}/>
              <span className="date-picker"><DatePicker className="inputs" selected={this.state.date} onChange={(date) => this.setState({date})} /><span className="date-label">Event Date</span></span>
              <input className="inputs" type="text" name="location"  placeholder="Location" value={this.state.location} onChange={(e) => {this.setState({location: e.target.value})}}/>
            </div>
            <div className="right-inputs">
              <select className="inputs selects" name="type" value={this.state.type} onChange={(e) => {this.setState({type: e.target.value})}}>
                <option value="" selected disabled hidden>What type of event?</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Graduation">Graduation</option>
                <option value="Quinceanera">Quinceanera</option>
                <option value="Bar/Bat Mitzvah">Bar/Bat Mitzvah</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Holiday Party">Holiday Party</option>
                <option value="Other">Other</option>
              </select>
              <select className="inputs selects" name="hear" value={this.state.hear} onChange={(e) => {this.setState({hear: e.target.value})}}>
                <option value="" selected disabled hidden>How did you hear about us?</option>
                <option value="FaceBook">FaceBook</option>
                <option value="Website">Website</option>
                <option value="Google">Google</option>
                <option value="Word of Mouth">Word of Mouth</option>
                <option value="Past Event">Past Event</option>
                <option value="Other">Other</option>
              </select>
              <textarea className="inputs textarea" placeholder="Desired Package and additional information:" value={this.state.add} onChange={(e) => {this.setState({add: e.target.value})}} rows="6" cols=""/>
            </div>
          </div>
          <div className={`quote-form-submit ${this.state.nope ? 'nope' : ''}`} onClick={() => {this.handleSubmit()}} ><span class="button-text">{this.state.nope ? 'Please fill out all fields.' : 'Submit'}</span></div>
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
