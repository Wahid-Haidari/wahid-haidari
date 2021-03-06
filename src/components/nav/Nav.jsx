import React , {Component} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BiMessageAltDetail} from 'react-icons/bi';
import {useState} from 'react';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return(
		<nav>
			<a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
			<a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
			<a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''} ><AiOutlineFundProjectionScreen/></a>
			<a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageAltDetail/></a>
		</nav>
	);
	
}

export default Nav;
