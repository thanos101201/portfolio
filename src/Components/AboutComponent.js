import React from 'react'
import NavComponent from './NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardHeader, Card, CardImg, CardTitle, CardBody, CardText, Label } from 'reactstrap'
import Sarvaha from '../assets/sarvaha.jpg';
import Dalhousie from '../assets/Dalhousie.png';
import SIH from '../assets/sih.png';
import Aeons from '../assets/Aeons.jpg';

function About() {

  const project = [
    {
      title: 'Easy Monitoring Agent',
      Description : 'Application to monitor various electronic devices/sensors connected to in a network at a remote location',
      Techstack : 'Asp.Net Core, Blazor, Entity Framework',
      Location : 'Sarvaha Systems',
      Role: 'Full stack Developer'
    },
    {
      title: 'IT Asset Management Software',
      Description : 'Application to manage and track the usage of different IT Services and Asset of any organization',
      Techstack : 'Python, Flask',
      Location : 'Sarvaha Systems',
      Role: 'Backend Developer'
    },
    {
      title: 'Step Game',
      Description : 'Game for the employees of Sarvaha System to promote physical activities',
      Techstack : 'React Js, Mongo DB, Express Js, Node Js, Google Apis',
      Location : 'Sarvaha Systems',
      Role: 'Full stack Developer'
    },
    {
      title: 'Step Game',
      Description : 'Game for promoting physical activites among different individuals and gathering their vote data for research purpose',
      Techstack : 'React Native, Mongo DB, Express Js, Node Js, Google Apis',
      Location : 'Dalhousie University',
      Role: 'Full stack Developer'
    },
    {
      title: 'Restaurant Automation System',
      Description : 'Application to automate the operations carried out at any restaurant',
      Techstack : 'React Js, Mongo Db, Express Js, Node Js, Git',
      Location : 'Shri Guru Gobind Singhji Institute of Engineering and Technology',
      Role: 'Full stack Developer'
    },
    {
      title: 'Capture',
      Description : 'Application for connecting friends and file sharing',
      Techstack : 'React Js, MySql Db, Express Js, Node Js, Git' ,
      Location: 'Shri Guru Gobind Singhji Institute of Engineering and Technology',
      Role: 'Full stack Developer'
    },
    {
      title: 'RNXG Website',
      Description : 'Website for the official website for the official robotics club of Shri Guru Gobind Singhji Institute of Engineering and Technology',
      Techstack: 'React Js, Material UI' ,
      Location : 'Shri Guru Gobind Singhji Institue of Engineering and Technology',
      Role: 'Frontend Developer'
    },
    {
      title: 'Of The Day',
      Description : 'A social media application for promoting different of the day entities of users such as outfit of the day, shoes of the day etc',
      Techstack : 'React Native, Express Js, Node Js, Mongo Db, Git',
      Location : 'Aeons Technology',
      Role: 'Backend Developer'
    }
  ]

  const renderProjects = () => {
    return project.map((e,key) => {
      return(
        <div className='col-12 col-md-5 col-xl-3 d-flex align-items-center m-3'>
          <Card style={{backgroundColor:'black', boxShadow:'0 0 10px rgba(255, 255, 255, 1)', width: '190%', height: '100%', alignContent:'center'}}>
            <CardHeader>
              <CardTitle>
                <h3 style={{color:'white'}}>
                  {e.title}
                </h3>
              </CardTitle>
            </CardHeader>
            <CardBody style={{alignContent:'center'}}>
              <p style={{color:'white'}}>
                {e.Description}
              </p>
              <ul>
                <li className='mt-2'>
                  <div className='row d-flex justify-content-left'>
                    <div className='col-10 col-md-6 col-lg-8 col-xl-6 d-flex align-items-center'>
                      <Label style={{color:'white'}}><strong>Tech Stack :</strong></Label>
                    </div>
                    <div className='col-10 col-md-6 col-lg-8 col-xl-6 d-flex align-items-center'>
                      <Label style={{color:'white'}}><strong>{e.Techstack}</strong></Label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row d-flex justify-content-left'>
                    <div className='col-10 col-md-6 d-flex align-items-center'>
                      <Label style={{color:'white'}}><strong>Location :</strong></Label>
                    </div>
                    <div className='col-10 col-md-6 d-flex align-items-center'>
                      <Label style={{color:'white'}}><strong>{e.Location}</strong></Label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row d-flex justify-content-left gx-5'>
                    <div className='col-10 col-md-6 d-flex align-items-center'>
                      <Label style={{color:'white'}}><strong>Role :</strong></Label>
                    </div>
                    <div className='col-10 col-md-6 d-flex align-items-center'>
                      <Label style={{color:'white'}}><strong>{e.Role}</strong></Label>
                    </div>
                  </div>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      );
    })
  }

  const renderTech = () => {
    const tech = [ 'Python', 'Javascript', 'React JS', 'Node JS', 'Express JS', 'GraphQL', 'MySQL', 'SQL', 'Mongo DB', 'Docker', 'Kubernetes', 'React Native' ]

    return tech.map((e,key) => {
      return(
        <div key={key} className='col-12 col-md-3'>
          <Card style={{backgroundColor:'black'}}>
            <CardHeader>
              <CardTitle>
                <h5 style={{color:'white'}}>{e}</h5>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      );
    })
  }

  return (
    <div style={{backgroundColor: 'black'}}>
      <NavComponent />
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <h4 style={{color:'white'}}>Work Experience</h4>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card className='shadow' style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'4rem', width:'4rem'}} src={Sarvaha} />
              </CardHeader>
            </Card>
          </div>
          <div className='col-10 col-md-8 d-flex align-items-center'>
            <p style={{color:'white'}}>
              <h4>Sarvaha Systems</h4>
              <h5>Software Development Engineer</h5>
              <h6><i>July 2023</i> to <i>Present</i></h6>
              Responsibilities :
              <ul>
                <li>Design structure of plugin which will be integrated to the monitoring system</li>
                <li>Implement the designed plugin and integrate the plugin to the monitoing system</li>
                <li>Maintain the fitness game application</li>
                <li>Tech stack : ASP.NET, React Js, Node JS, Express JS, Mongo DB, MySQL, Docker, Kubernetes, Convolutional Neural Network</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
            <h4>Aeons Technologies</h4>
              <h5>Co-Founder</h5>
              <h6><i>Augst 2023</i> to <i>Present</i></h6>
              Responsibilities :
              <ul>
                <li>Manage the client products as well as design the solutions based on the client requirements</li>
                <li>Manage the development of the solution based on the proposed design based on the client requirement</li>
                <li>Tech stack and paradigms : DevOps, Git, React Js, Node JS, Express JS, Mongo DB, MySQL, Docker, Kubernetes, Convolutional Neural Network</li>
              </ul>
            </p>
          </div>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'4rem', width:'4rem'}} src={Aeons} />
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'4rem', width:'4rem'}} src={Sarvaha} />
              </CardHeader>
            </Card>
          </div>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
            <h4>Sarvaha Systems</h4>
              <h5>Software Development Intern</h5>
              <h6><i>January 2023</i> to <i>July 2023</i></h6>
              Responsibilities :
              <ul>
                <li>Develop accelerator modules for tracking the usage of different IT services and assets done by any organization</li>
                <li>Test and maintain the accelerator modules based on different real life scenarios</li>
                <li>Tech stack and paradigms : DevOps, Git, Python, Tensorflow Docker, Kubernetes, Convolutional Neural Network</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
            <h4>Dalhousie University, Halifax Canada</h4>
              <h5>Research Intern</h5>
              <h6><i>June 2022</i> to <i>September 2022</i></h6>
              Responsibilities :
              <ul>
                <li>Develop mobile game to promote physical activities among different individuals of different age group</li>
                <li>Manage the data gathered by the game, and prepare it for analysis</li>
                <li>Tech stack : React Native, Express Js, Node JS, Google Apis, Mongo Db</li>
              </ul>
            </p>
          </div>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'6rem', width:'6rem'}} src={Dalhousie} />
              </CardHeader>
            </Card>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <h4 style={{color:'white'}}>Awards and Accomplishments</h4>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'4rem', width:'4rem'}} src={SIH} />
              </CardHeader>
            </Card>
          </div>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
            <h5>Smart India Hackathon 2022</h5>
              Responsibilities :
              <ul>
                <li>Develop mechanism for spreading information related to government schemes in rural areas of India</li>
                <li>Manage the data gathered by the game, and prepare it for analysis</li>
                <li>Tech stack : React Native, Express Js, Node JS, Google Apis, Mongo Db</li>
              </ul>
            </p>
          </div>
        </div>
        <br></br>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
          <p style={{color:'white'}}>
            <h5>Smart India Hackathon 2020</h5>
              Responsibilities :
              <ul>
                <li>Develop voice based interface for enabling access of website of Ministry of Rural Development, India for physically disabled persons</li>
                <li>Gathering data from the website of Ministry of Rural Development and integrating the data with the interface</li>
                <li>Tech stack : Python, Flask, Django, Beautiful Soup</li>
              </ul>
            </p>
          </div>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'4rem', width:'4rem'}} src={SIH} />
              </CardHeader>
            </Card>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <h4 style={{color:'white'}}>Tech Stack</h4>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          {renderTech()}
        </div>
        <br></br>
        <br></br>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <h4 style={{color:'white'}}>Projects</h4>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          {renderProjects()}
        </div>
      </div>
    </div>
  )
}

export default About