import React , {Component} from 'react';
import './Header.css';
import CTA from './CTA';
import Headshot from '../../assets/headshot.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	
		return (
      		<header>
      			<div className="container header__container">
      				<h5>Hello I'm</h5>
      				<h1>Wahidullah Haidari</h1>
      				<h5 className="text-light">Fullstack Developer</h5>
      				<CTA/>
      				<HeaderSocials/>
      				<div >
      					<img src={Headshot} alt="" className="me"/>
      				</div>
      				<a href="#contact" className='scroll__down'>Scroll Down</a>
      			</div>
      		</header>
		);
	
}

export default Header;