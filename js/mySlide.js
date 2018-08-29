import React from 'react';
import Slider from 'react-animated-slider';
require('react-animated-slider/build/horizontal.css');
require('./slider-animations.css');
require('./styles.css');
const content = [
	{
		title: 'This is my first Slide',
		description:
		'Let us see if this works',
	//	button: 'Read More',
		image: '../images/islamabad.jpg',
		user: 'Arsal Javid',
		userProfile: '../images/test.png'
	},
	{
		title: 'This is my second Slide',
		description:
		'Time to move',
	//	button: 'Discover',
		image: '../images/khyber.jpg',
		user: 'Arsal Javid',
		userProfile: '../images/test.png'
	},
	{
		title: 'Slide Number 3 coming right up',
		description:
		'Done and Dusted',
	//	button: 'Buy now',
		image: '../images/gram.png',
		user: 'Arsal Javid',
		userProfile: '../images/test.png'
	}
];

class SlideShow extends React.Component {
  render(){
     return(
       <span>
       <section class="section">
         <h2 class="color--black margin--none section__text--centered">
           REACT ANIMATED SLIDER GOES HERE!
         </h2>
         </section>
</span>
)}}
class MySlidesShow extends React.Component {
  render(){
    return(
      <span>

      <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
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


</span>
    )
  }
}
//export default SlideShow;
export default MySlidesShow;
