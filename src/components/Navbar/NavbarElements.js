import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: rgba(12, 57, 39, 1);
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
transition: .5s ease all;
img{
	width: 90px;
	margin-left: 25px
	
}
.logo{
	@media (max-width: 768px) {
		width: 70px;
		margin: 2px;
	}
	@media (max-width: 450px) {
		width: 50px;
		margin: 2px;
	}
}
`;

export const NavLink = styled(Link)`
font-family: 'Sora', sans-serif;
font-weight: 900;
margin-left: 90px;
justify-content:center;
text-transform: uppercase;
font-size: 20px;
color: #d4af37;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 50%;
cursor: pointer;
border-bottom: 1px solid transparent;
&.active {
	color: #0199cc;
	border-color: #0199cc;
}
@media (max-width: 930px) {
	margin-left:40px;
	font-size:18px;
}
@media (max-width: 768px) {
	margin-left:30px;
	font-size:16px;
}
@media (max-width: 600px) {
	margin-left:20px;
	font-size:11px;
}
@media (max-width: 450px) {
	margin-left:10px;
}
@media (max-width: 400px) {
	margin-left:0px;
	padding: 0px 12px;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #d4af37;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	// display: none;
}
`;
