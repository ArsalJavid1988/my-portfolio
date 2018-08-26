import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


class Slideshow extends React.Component {
  render(){
 let content = this.props.content;
    return(
     /* App = () => ( */
	<div>
		<Header />
		<div className="wrapper">
			<h1>react-animated-slider</h1>
			<p>
				<a href="https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master"><img src="https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master.svg?style=shield" alt="CircleCI" /></a>
				<a href="https://www.npmjs.com/package/react-animated-slider"><img src="https://img.shields.io/npm/v/react-animated-slider.svg" alt="version" /></a>
				<a href="https://www.npmjs.com/package/react-animated-slider"><img src="https://img.shields.io/npm/dt/react-animated-slider.svg" alt="downloads" /></a>
				<a href="https://github.com/erichbehrens/react-animated-slider"><img src="https://img.shields.io/github/stars/erichbehrens/react-animated-slider.svg?style=social&amp;label=Stars" /></a>
			</p>
		</div>
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	</div>
/* ) */
)
}
}
export default SlideShow;
