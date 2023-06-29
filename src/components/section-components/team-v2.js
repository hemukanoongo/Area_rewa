import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__team-area pt-110--- pb-90 help">
				<div className="container">
					<div className='row'>
					<div className='col-md-6 col-md-6'>
						<h2 className='mb-0 text-center mt-5'>Ankur Bhaseen</h2>
						<span className='mb-40 d-block text-center'>Director/Licensee</span>
						<p className='mb-4'>Ankur Bhaseen is not your typical real estate agent—he's a dynamic leader who's passionate about helping his clients achieve their dreams. </p>
						<p className='mb-4'>As the Founder and Licensee of Area Real Estate WA, Ankur brings a wealth of experience and expertise to the table, having worked in the building and construction industry as a Project Supervisor in numerous projects across Perth. His deep understanding of the market, combined with his energetic, client-focused approach, has earned him a reputation as one of the most trusted and respected agents in the real estate industry. Fluent in multiple languages, Ankur communicates effectively with clients from diverse backgrounds, and his commitment to building strong, lasting relationships is evident in every transaction he handles. </p>
						<p>When he's not working hard for his clients, Ankur can be found playing cricket or soccer, spending time with his family, or exploring the local community he loves. With Ankur at the helm, you can trust that your real estate goals are in good hands.</p>
						<span className="go-top"><Link to="#" className="btn btn-transparent btn-effect-1"><img className="mr-10" src={publicUrl+"assets/img/team/telephone.png"} />0430 294 110</Link></span>
					</div>
					<div className='col-md-6'>
					<img className="teams_founder" src={publicUrl+"assets/img/others/about_founder.png"} alt="About Us Image" />
					</div>
					</div>
				</div>
			</div>
        }
}

export default TeamV2