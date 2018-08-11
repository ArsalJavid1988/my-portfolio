import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "My Portfolio Website",
    'href': "https://portfolio.ajonlineinfo.com",
    'desc': "This is my first attempt at building a website. In the course of getting this website to point where you can view it, I have had the opportunity to introduce myself to the following tools/technologies: HTML, CSS, Javascript, ReactJS, NodeJS, Babel, Python, WebPack, Mocha, Latte, Jest, Choco Package Installer, Github, AWS S3, AWS Route 53, AWS Cloudfront, AWS Lambda, AWS CodeBuild, AWS CodePipeline. By levaraging this all these technologies, I am now able to host a serverless dynamic website where the effort taken to release any updates to the webpage has been taken out of the equation. The process from updating the source code all the way until it presented on the internet is fully automated once I upload the code to my GitHub repository.",
    'image': {
      'desc':"example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Portfolio BoilerPlate",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    'image': {
      'desc':"A Serverless Portfolio",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  'image': {
      'desc':"example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181"`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
