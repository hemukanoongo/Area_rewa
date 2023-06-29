import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactForm extends Component {

	componentDidMount() {

    	const $ = window.$;
    	
       	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-messege');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
    }

    render() {

	let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120">
				<div className="container">
				<div className="row">
					<div className="col-md-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<form id="contact-form" action={publicUrl+"mail.php"} method="post">
						<div className="row">
							<div className="col-md-12">
							<div className="input-item">
								<label><b>Name</b></label>
								<input type="text" name="name" placeholder="Enter your name" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item">
							<label><b>Email</b></label>
								<input type="email" name="email" placeholder="Enter email address" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item">
							<label><b>Mobile Number</b></label>   
								<input type="text" name="phone" placeholder="Enter phone number" />
							</div>
							</div>
							<div className="col-md-12">
							<div className="input-item">
							<label><b>Address</b></label>  
								<input type="text" name="Address" placeholder="Enter Property Address" />
							</div>
							</div>
							<div className="col-md-12 d-flex gap-5 radio_button">
							<p><label className="input-info-save mb-0"><input type="Radio" name="Service" /> <b>Rent</b></label></p>
							<p><label className="input-info-save mb-0"><input type="Radio" name="Service" /> <b>Sell</b></label></p>
							</div>
						</div>
						<p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> I agree with <Link to="/PrivacyPolicy" className="text-underline">Terms & Conditions</Link></label></p>
						<div className="btn-wrapper mt-0">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Get in Touch</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactForm