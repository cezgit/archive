import React, {Component} from 'react';
import swal from 'sweetalert';
import { saveContactInfo } from '../services/ContactService';

class ContactContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      reason: "none",
      message: ""
    };

    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    e.target.classList.add('active');
    this.setState({
      [e.target.name]: e.target.value
    });
    if(e.target.required) {
      this.showInputError(e.target.name);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    //console.log('component state', JSON.stringify(this.state));

    if (this.isFormValid()) {

      var data = {
        "name": this.state.name,
        "email": this.state.email,
        "subject": this.state.subject,
        "reason": this.state.reason,
        "message": this.state.message
      };

      saveContactInfo(data)
      .then(() => {
        swal("Good job!", "We'll get back to you soon!", "success")
        this.handleReset();
      })
      .catch(() => {
        swal("Oops...", "Something went wrong! Please try to email us instead.", "error");
      })
    }
  }

  handleReset() {
    this.setState(this.baseState);
    this.clearErrors();
  }

  clearErrors() {
    const inputs = document.querySelectorAll('input,textarea');
    inputs.forEach(input => {
      input.classList.remove('active');
      let refName =  input.name;
      const error = document.getElementById(`${refName}Error`);
      if(error)
        error.textContent = '';
    });
  }

  isFormValid() {
    const inputs = document.querySelectorAll('input,textarea');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');
      // don't validate the search field.
      if(input.name !== 'q') {
        const isInputValid = this.showInputError(input.name);
        if (!isInputValid) {
          isFormValid = false;
        }
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}`).placeholder;
    const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  render() {

    return (
      <div className="col-lg-12">
        <div className="ibox float-e-margins">
          <div className="ibox-content">

            <div className="row form">
              <form role="form" noValidate>

                <div className="col-md-6">
                  <div className="form-group contact-form-group"><input type="text" className="form-control" id="name" name="name" placeholder="Full Name"
                    ref="name" value={ this.state.name } onChange={ this.handleChange } required /></div>
                  <div className="error" id="nameError"></div>
                  <div className="form-group contact-form-group"><input type="email" className="form-control" id="email" name="email" placeholder="Email Address"
                    ref="email" value={ this.state.email } onChange={ this.handleChange } required /></div>
                  <div className="error" id="emailError"></div>
                  <div className="form-group contact-form-group"><input type="text" className="form-control" id="subject" name="subject" placeholder="Subject"
                    ref="subject" value={ this.state.subject } onChange={ this.handleChange } required /></div>
                  <div className="error" id="subjectError"></div>
                </div>

                <div className="col-md-6">
                  <div className="form-group contact-form-group">
                    <select className="form-control" id="reason" name="reason" ref="reason" value={ this.state.reason } onChange={ this.handleChange }>
                      <option value="none">Select Reason</option>
                      <option value="TSS">TopStreamingServices.com</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group contact-form-group">
                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="Message"
                      ref="message" value={ this.state.message } onChange={ this.handleChange } required></textarea>
                  </div>
                  <div className="error" id="messageError"></div>
                </div>

              </form>
            </div>

            <div className="row text-center top-spacing">
              <div className="col-xs-6 col-md-2 col-lg-3"></div>
              <div className="col-xs-12 col-md-4 col-lg-3 text-center">
                <button type="reset" onClick={this.handleReset} className="btn btn-white contact-button">Reset</button>
              </div>
              <div className="col-xs-12 col-md-4 col-lg-3 text-center">
                <button type="submit" onClick={ this.handleSubmit } className="btn btn-primary contact-button" data-loading-text="Sending..." data-complete-text="Message sent">Send your message</button>
              </div>
              <span className="clear"></span>
            </div>

            <div className="row email text-center">
              <div className="col-xs-12">
                <p>Or just Email us at <a href="mailto:webdevised@gmail.com">webdevised@gmail.com</a></p>
              </div>
            </div>

            <span className="clear"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
