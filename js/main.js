import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
//import SlideShow from './mySlide';
import MySlidesShow from './mySlide';

const myWork = [
  {
    'title': "My Portfolio Website",
    'href': "http://portfolio.ajonline.info/demo2.html",
    'desc': "This is my first attempt at building a website. In the course of getting this website to point where you can view it, I have had the opportunity to introduce myself to the following tools/technologies: HTML, CSS, Javascript, ReactJS, NodeJS, Babel, Python, WebPack, Mocha, Latte, Jest, Choco Package Installer, Github, AWS S3, AWS Route 53, AWS Cloudfront, AWS Lambda, AWS CodeBuild, AWS CodePipeline and Amazon SNS. By levaraging this all these technologies, I am now able to host a serverless dynamic website where the effort taken to release any updates to the webpage has been taken out of the equation. The process from updating the source code all the way until it presented on the internet is fully automated once I upload the code to my GitHub repository. Disclaimer: This website has been built following guidelines outlined by training course designed for people to familiarise themselves with AWS products and basic Web Design concepts. This is purely a result of both following the course as well as troubleshooting and then adapting the website to reflect my efforts as well test out new ideas. Updated: 29/08/2018, Integated a Javascript react slider into webpage.",
    'image': {
      'desc':"example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Serverless Web Application",
    'href': "http://agc-arsal-test-site.s3-website-us-east-1.amazonaws.com",
    'desc': "The aim of this project was to build a serverless web application that shares videos to the public. An Authenticated user has the ability to add file to the video library. When the user uploads the file, it is transcoded in to a browser friendly format for the user to view. This project makes use of the following technologies: AWS S3 Static Webpage Hosting, Amazon Lambda, AWS Elastic Transcoder, Auth0 and Firebase. Disclaimer: This website has been built following guidelines outlined by training course designed for people to familiarise themselves with AWS products and basic Web Design concepts. This is purely a result of both following the course as well as troubleshooting and then adapting the website to reflect my efforts as well test out new ideas.",
    'image': {
      'desc':"A Serverless Portfolio",
      'src': "images/example2.png",
      'comment': ""
    }
  }
  {
    'title': "Android Application Prototype",
    'href': "https://example.com",
    'desc': "First Attempt at building an Android Application. The application is designed for students of Quranic Arabic. It is important to stress this is not a fully fledged app and is only a work in progress. The application begins by allowing a user to either log on or sign up to gain access. Once logged in, the user can select a module of choice and decide whether the wish to go over learning concepts or proceed straight to the quiz. Completion of the initial module will unlock the next available module (The Lock mechanism has not yet been implemented). The application has been designed and built using a combination of Android Studio, Figma, Java Programming and Parse Database API. Thi backend database is stored using an AWS EC2 instance of the Parse database. The database stores user details, learning material and user progress.",
  'image': {
      'desc':"Android Studio",
      'src': "images/android.jpg",
      'comment': `""`
    }
  }*/

]
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

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
ReactDOM.render(<MySlidesShow content={content}/>,document.getElementById('MySlidesShow'));
