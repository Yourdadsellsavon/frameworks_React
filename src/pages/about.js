import React from "react";
// stylesheet
import "./about.scss"
// images
import a2 from "../assets/a2.png"
import a1 from "../assets/a1.png"
import plantt from "../assets/plantt2.png"
import eug from "../assets/eug3.mp4"
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
import backgroundImage from "../assets/banner.JPG"

const About = () => {
	return (
		<div class="about">
			<section class="hero_about" style={{backgroundImage: `url(${backgroundImage})`}}>
				<div class="hero-text_about container">
					<h4>Graphic + Web Developer</h4>
					<h2 class="Reece">Reece<br/>Chappell</h2>
				</div>
				</section>
				<section class="section1_about"><h2 class="title">About Me</h2><br/>
				<div class="section1_content_about">
					<div class="section_text_about">
					<p>Thanks for stopping by and hello, I’m Reece Chappell, a Web Designer and Software Developer based in Lancashire, UK.<br/><br/>
						I have a background in web development, computer programming, graphic design and computer repairs. <br/>
						For the past 8 years I’ve studied and explored areas of computer science, in the pursuit of knowledge and to build myself a career in web development.
						I’m currently undergoing a masters computer science degree at Lancaster University, one of the top universities in the country.
						<br/><br/>
						Welcome to my portfolio website, here I showcase some of my previous work combined with my current skills in web design. 
						This website is used as part of my dissertation project, which aims to assess the performance differences of using various popular frameworks to implement a multi-page website.<br/><br/>
					</p>
					</div>
					<div class="section_images_about">
					<img class="images" src={a2} alt="Image of the author"/><br/><br/>
					<img class="images" src={a1} alt="Image of the author"/>
					</div>
				</div>
				</section>

				<section class="section2_about">
				<h2 class="title">Projects</h2>
				<h4 class="title2">This section showcases a couple of projects that I have worked on in the last few years.</h4><br/>
				<div class="section2_content_about">
					<div class="section2_first_about">
						<div class="polaroid">
						<video class="images_about" src={eug} autoplay="true" controls="true" loop="true"></video>
						<div class="pol_container">
						<p>Eugenes Crusade</p>
						</div>
					</div>
					</div>
					<div class="section2_second_about">
					<p>A side-scrolling mythical adventure game featuring an interactive story and intense boss battles. 
						Inspired by Super Mario Bros and Dark Souls, we created this game to be entertaining through it’s amusing storyline whilst also incorporating the challenging nature often seen in games like Dark Souls.
						This game was created through collaboration with other developers as part of a game production project.</p>
					</div>
					<div class="section2_third_about">
					<div class="polaroid">
						<img src={plantt} alt="Image of a game created by the author" />
						<div class="pol_container">
						<p>Planter-restrial</p>
						</div>
					</div>
					</div>
					<div class="section2_fourth_about">
					<p>A Pokemon-Go inspired game for finding and collecting virtual plants located around Lancaster University Campus. A serious games project designed to increase user engagement with plants. Following the analysis of the user study, in which students interacted with the game and recorded their experiences, the game was proven to reduce plant-blindness amongst players. 
						Reducing plant blindness is an essential foundation to providing a sustainable future for our planet, by increasing the appreciation for nature in our environments. </p>
					</div>
				</div>      
				</section>

				<section class="section3_about">
				<h2 class="title">Get In Touch</h2>
				<h4 class="title2">Like what you see or have any questions? Drop me a message and I’ll get back to you.</h4>
				<div class="section3_content_about">
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
					<div class="images_about">
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
	);
};

export default About;
