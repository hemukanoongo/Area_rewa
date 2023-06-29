import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV6 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
				<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">


				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- banner_bg_image bg-overlay-theme-black-30" data-bs-bg={publicUrl+"assets/img/slider/41.jpg"}>
					<div className="ltn__slide-item-inner">
					<div className="container">
						<div className="row">
						<div className="col-lg-7 align-self-start">
							<div className="slide-item-car-dealer-form">
							<div className="section-title-area ltn__section-title-2">
								<h1 className="section-title text-color-white">Determine the current market value of your property</h1>
							</div>
							<div className="ltn__car-dealer-form-tab">
								<div className="tab-content">
								<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
									<div className="car-dealer-form-inner">
										
									<form action="#" className="ltn__car-dealer-form-box row"> 
										<div className="ltn__car-dealer-form-item col-lg-12 col-md-12">
											<div className='row'>
												<div className='col-md-12'>
													{/* Search Widget */}
										<div className="ltn__search-widget">
										<form action="#">
											<input type="text" name="search" placeholder="Enter your property address" />
											<button type="submit"><Link to="/Booking">Get an Estimate</Link></button>
										</form>
										</div>
												</div>
											</div>
										</div> 
									</form>
									</div>
								</div>
								<div className="tab-pane fade" id="ltn__form_tab_1_2">
									<div className="car-dealer-form-inner">
									<form action="#" className="ltn__car-dealer-form-box row"> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Property Type</option>
											<option>Apartment</option>
											<option>Co-op</option>
											<option>Condo</option>
											<option>Single Family Home</option>
										</select>
										</div> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Location</option>
											<option>chicago</option>
											<option>London</option>
											<option>Los Angeles</option>
											<option>New York</option>
											<option>New Jersey</option>
										</select>
										</div> 
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<select className="nice-select">
											<option>Sub Location</option>
											<option>Bayonne</option>
											<option>Greenville</option>
											<option>Manhattan</option>
											<option>Queens</option>
											<option>The Heights</option>
											<option>Upper East Side</option>
											<option>West Side</option>
										</select>
										</div>
										<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
										<div className="btn-wrapper text-center mt-0 go-top">
											{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
											<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
										</div>
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
				</div>
			</div>
        }
}

export default BannerV6