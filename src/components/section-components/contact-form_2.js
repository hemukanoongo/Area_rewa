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
					<div className='row'>
						<div className='col-md-12'>
							<div className='form_text_upper'>
							<p className='text-center contact-us_heading_text'>Located conveniently at 478 Torquay Road, Area Real Estate WA offers tailored real estate service to those who live in the 3217 area.</p>
							<span className='text-center'>If you would like to book a sale or a rental appraisal, please click here.</span>
							</div>
						</div>
					</div>
				<div className="row">
					<div className="col-md-7">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<form id="contact-form" action={publicUrl+"mail.php"} method="post">
						<div className="row">
							<div className="col-md-6">
							<div className="input-item">
								<label for="name"><b>Full Name</b></label>
								<input type="text" name="name" placeholder="Enter your name" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item">
							<label for="email"><b>Email</b></label>
								<input type="email" name="email" placeholder="Enter email address" />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item" >
							<label for="State"><b>State</b></label>
								<select className="nice-select" name="service">
								<option>Select Service</option>
								<option>Buy </option>
								<option>Sell </option>
								<option>Rent</option> 
								</select>
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item">
							<label for="phone"><b>Phone</b></label>
								<input type="text" name="phone" placeholder="Enter phone number" />
							</div>
							</div>
							<div className="col-md-12">
							<div className="input-item ">
							<label for="Address"><b>Address</b></label>
								<input type="text" name="Address" placeholder="Enter Property Address" />
							</div>
							</div>
							<div className="col-md-12 d-flex gap-5">
							<p><label className="input-info-save mb-0"><input type="Radio" name="Service" /> <b>Buy</b></label></p>
							<p><label className="input-info-save mb-0"><input type="Radio" name="Service" /> <b>Sell</b></label></p>
							</div>
						</div>
						<div className="input-item">
						<label for="message"><b>Message</b></label>
							<textarea name="message" placeholder="Enter message" defaultValue={""} />
						</div>
						<p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> I agree with Terms & Conditions</label></p>
						<div className="btn-wrapper mt-0">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Contact Us</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
					<div className='col-md-5'>
						<div className='row'>
							<div className='col-sm-12'>
							<h3>Phone</h3>
							<p>08 9253 3456</p>
							<p>043 029 4110</p>
							</div>
							<div className='col-sm-12'>
							<h3>Email</h3>
							<p>admin@area-rewa.com.au</p>
							</div>
							<div className='col-sm-12'>
							<h3>Address</h3>
							<p>Unit 2, 82 Hale rd Forrestfield WA 6058</p>
							</div>
							<div className='col-sm-12'>
							<h3>Socials</h3>
							<ul className='social_link'>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactForm