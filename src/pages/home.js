import React from 'react';
// stylesheet
import "./home.scss"
// pages
import About from './about.js';
import {Link, Route, Routes} from 'react-router-dom';
// images
import gal1 from "../assets/gal1.png"
import gal2 from "../assets/gal2.png"
import d6 from "../assets/d6.png"
import d9 from "../assets/d9.png"
import eug from "../assets/eug3.mp4"
import sw from "../assets/sw.png"
import a3 from "../assets/a3.jpg"
import d8 from "../assets/d8.PNG"
import spotify from "..//assets/icons/spotify.png"
import fb from "../assets/icons/fb.png"
import ig from "../assets/icons/ig.png"
import twitter from "../assets/icons/twitter.png"
import reddit from "../assets/icons/reddit.png"
import yt from "../assets/icons/yt.png"
import pin from "../assets/icons/pin.png"
import linkedin from "../assets/icons/linkedin.png"
import git from "../assets/icons/git.png"
import sc from "../assets/icons/sc.png"
import backgroundImage from "../assets/t2_edit11.jpg"

const Home = () => {
	return (
		<>
		<div class="home">
			<section class="hero" style={{backgroundImage: `url(${backgroundImage})`}}>
				<div class="hero-text container">
					<br/><br/><br/>
					<h2>Hello,<br/>I'm Reece Chappell</h2>
					<h4>Web designer and software developer based in Lancashire, UK</h4>
				</div>
			</section>
			<section class="section1"><h2 class="title">What Do I Do?</h2><br/>
				<h4 class="title2">Here’s some of my previous work in Web Design, Graphic Design and Software Design.</h4>
				<div class="section1_content">
					<div class="section1_first">
					<div class="polaroid">
						<img src={gal1} alt="Image of a website created by the author" />
						<img src={gal2} alt="Image of a website created by the author" />
						<div class="pol_container">
						<p>Web Design</p>
						</div>
					</div>
					</div>
					<div class="section1_second">
					<div class="polaroid">
						<img src={d6} alt="Image of a graphic created by the author" />
						<img src={d9} alt="Image of a graphic created by the author" />
						<div class="pol_container">
						<p>Graphic Design</p>
						</div>
					</div>
					</div>
					<div class="section1_third">
					<div class="polaroid">
						<video class="images" src={eug} autoplay="true" controls="true" loop="true"></video>
						<img src={sw} alt="Image of a game created by the author" />
						<div class="pol_container">
						<p>Software Design</p>
						</div>
					</div>
					</div>
				</div>
    		</section>
			<section class="section2">
				<h2 class="title">Who Am I?</h2>
				<br/>
				<div class="section2_content">
					<div class="section2_first">
						<div class="polaroid">
						<img src={a3} alt="Graphic-styled Image of the author created by the author" />
					</div>
					</div>
					<div class="section2_second">
					<p class="title2">Born and raised in England, UK. <br/>
						I’m a masters computer science student studying at Lancaster University, building up my skills for a career in web development.
						I enjoy going on adventures, making the most out of life and I never shy away from a photographic moment. 
					</p><br/>
					</div>
					<div class="section2_fourth">
						<Link to ="/about">
							<button class="button_about">Learn More</button>
						</Link>
						<Routes>
							<Route path="/about" element={<About/>} />
						</Routes>
					</div>
				</div>      
				<p class="title3"><i>"Art is what makes us unique and it should be encouraged!"</i></p><br/>
			</section>
			<section class="section3">
				<h2 class="title">Get In Touch</h2>
				<h4 class="title2">Like what you see or have any questions? Drop me a message and I’ll get back to you.</h4>
				<div class="section3_content">
					<div class="form" required>
					<form id="formId" method="get" autocomplete="on">
						<label for="fullname">Full Name:</label><br/>
						<input type="text" id="fullname" name="fullname" placeholder="Joe Bloggs" required /><br/><br/>
						<label for="email">Email:</label><br/>
						<input type="text" id="email" name="email" placeholder="joebloggs@gmail.com" required /><br/><br/> 		   
						<label for="pnumber">Phone Number:</label><br/>
						<input type="number" id="pnumber" name="pnumber" placeholder="07123456789" required /><br/><br/>
						<label for="message">Your Message:</label><br/>
						<textarea  id="message" name="message" rows="10" cols="50" placeholder="Enter your message here..." required></textarea><br/><br/>
						<input type="submit" id="submit" value="Submit" required />
					</form>
					</div>
					<div class="images">
					<img src={d8} alt="Graphic-styled image created by the author" />
					</div>
				</div>
			</section>
			<section class="section4">
				<br/>
				<div class="links">
					<a href="http://www.facebook.com/"><img src={fb} alt="facebook icon" height="50px" width="50px"/></a>
					<a href="http://www.instagram.com/"><img src={ig} alt="instagram icon" height="50px" width="50px"/></a>
					<a href="http://www.twitter.com/"><img src={twitter} alt="twitter icon" height="50px" width="50px"/></a>
					<a href="http://www.reddit.com/"><img src={reddit} alt="reddit icon" height="50px" width="50px"/></a>
					<a href="http://www.youtube.com/"><img src={yt} alt="youtube icon" height="50px" width="50px"/></a>
					<a href="http://www.pinterest.co.uk/"><img src={pin} alt="pinterest icon" height="50px" width="50px"/></a>
					<a href="http://www.linkedin.com/"><img src={linkedin} alt="linkedin icon" height="50px" width="50px"/></a>
					<a href="http://www.github.com/"><img src={git} alt="github icon" height="50px" width="50px"/></a>
					<a href="http://www.snapchat.com/"><img src={sc} alt="snapchat icon" height="50px" width="50px"/></a>
					<a href="http://www.spotify.com/"><img src={spotify} alt="spotify icon" height="50px" width="50px"/></a>
				</div>
				<br/>
				<p class="title">Services Offered:</p><br/>
				<div class="services">
					<ul class="web"><u>Website:</u>
					<li>Web Design</li>
					<li>Web Development</li>
					<li>Front-end UI/UX Implementation</li>
					</ul>
					<ul class="graphic"><u>Graphics:</u>
					<li>Graphic Design</li>
					<li>Logo Creation + Branding</li>
					<li>Other Graphic-styled media</li>
					</ul>
					<ul class="software"><u>Software:</u>
					<li>Software Design</li>
					<li>Software Development</li>
					<li>UX Design + Implementation</li>
					<li>Application Development</li>
					</ul>
				</div>
				<p class="copyright">©Reece Chappell 2023</p>
			</section>
		</div>
	  </>
	);
};

export default Home;
