import React from 'react';
// stylesheet
import "./media.scss"
// images
import b_roll from "../assets/b_roll_muted.mp4"
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
import backgroundImage from "../assets/b3.JPG"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import s4 from "../assets/s4.png"
import s5 from "../assets/s5.png"
import s6 from "../assets/s6.png"
import s7 from "../assets/s7.png"
import s8 from "../assets/s8.png"
import s9 from "../assets/s9.png"
import s10 from "../assets/s10.png"

const Media = () => {
return (
		<div class="media">
			<section class="hero_media" style={{backgroundImage: `url(${backgroundImage})`}}>
			<div class="hero-text container">
				<h2 class="title_media"><span class="hello">Hello,</span><br/><br/>I'm Reece Chappell</h2>
				<h4>Web designer and software developer based in Lancashire, UK</h4>
			</div>
			</section>
			<section class="section1_media"><h2 class="title">Video + Music</h2>
			<h4 class="title2">This page showcases a variety of media.</h4><br/>
			<div class="section1_content_media">
				<div class="section1_first_media">
				<p class="title3">As the most contentful page in the website, this is the home for content.
					By packing this page full of content, we can simulate the performance expectancies seen in a large-scale web project.
					<br/><br/>
					So relax, explore and enjoy some of my favourite music, videos and images.</p>
				<br/>
				</div>
				<div class="section1_second_media">
				<div class="polaroid">
					<video class="images" src={b_roll} autoplay="true" controls="true" loop="true"></video>
					<div class="pol_container">
					<p>B-roll Footage</p>
					</div>
				</div>
				</div>
			</div>
			<iframe class="spotify" src="https://open.spotify.com/embed/track/1umlNFq4EhrBQX4T8WNAmx?utm_source=generator&theme=0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			</section>

			<section class="section2_media">
			<h2 class="title_media">Gallery of Graphics</h2>
			<div class="section2_content_media">
				<div class="carousel-wrapper">
					<span id="item-1"></span>
					<span id="item-2"></span>
					<span id="item-3"></span>
					<span id="item-4"></span>
					<span id="item-5"></span>
					<span id="item-6"></span>
					<span id="item-7"></span>
					<span id="item-8"></span>
					<span id="item-9"></span>
					<span id="item-10"></span>

					<div class="carousel-item item-1" style={{backgroundImage: `url(${s1})`}}>
						<a href="#item-10" class="arrow-prev arrow"></a>
						<a href="#item-2" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-2" style={{backgroundImage: `url(${s2})`}}>
						<a href="#item-1" class="arrow-prev arrow"></a>
						<a href="#item-3" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-3" style={{backgroundImage: `url(${s3})`}}>
						<a href="#item-2" class="arrow-prev arrow"></a>
						<a href="#item-4" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-4" style={{backgroundImage: `url(${s4})`}}>
						<a href="#item-3" class="arrow-prev arrow"></a>
						<a href="#item-5" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-5" style={{backgroundImage: `url(${s5})`}}>
						<a href="#item-4" class="arrow-prev arrow"></a>
						<a href="#item-6" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-6" style={{backgroundImage: `url(${s6})`}}>
						<a href="#item-5" class="arrow-prev arrow"></a>
						<a href="#item-7" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-7" style={{backgroundImage: `url(${s7})`}}>
						<a href="#item-6" class="arrow-prev arrow"></a>
						<a href="#item-8" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-8" style={{backgroundImage: `url(${s8})`}}>
						<a href="#item-7" class="arrow-prev arrow"></a>
						<a href="#item-9" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-9" style={{backgroundImage: `url(${s9})`}}>
						<a href="#item-8" class="arrow-prev arrow"></a>
						<a href="#item-10" class="arrow-next arrow"></a>
					</div>

					<div class="carousel-item item-10" style={{backgroundImage: `url(${s10})`}}>
						<a href="#item-9" class="arrow-prev arrow"></a>
						<a href="#item-1" class="arrow-next arrow"></a>
					</div>

				</div>
			</div>      
			<p class="title3"><i>"Art is what makes us unique and it should be encouraged!"</i></p><br/>
			</section>

			<section class="section3_media">
			<h2 class="title">Entertaining Extras</h2>
			<h4 class="title2_media">All work and no play is simply too much work.</h4><br/>
			<div class="section3_content_media">
				<div class="section3_first_media">
				<iframe class="responsive_iframe" src="https://www.youtube.com/embed/Jnb6uYAzuno" />
				</div>
				<div class="section3_second_media">
				<iframe class="responsive_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37482.68970297935!2d-2.8423424298868496!3d54.04415565975026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b6141d2138751%3A0xbea089595c0b389!2sLancaster!5e0!3m2!1sen!2suk!4v1685462407067!5m2!1sen!2suk" />
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

export default Media;
