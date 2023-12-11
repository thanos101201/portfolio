import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardHeader, CardImg } from 'reactstrap';
import NavComponent from './NavComponent';
import Pratik from '../assets/Pratik.jpg';

function Home() {
  return (
    <div style={{backgroundColor:'black'}}>
      <NavComponent />
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-6 d-flex align-items-center'>
            <p style={{color:'white'}}>
              I am Pratiksingh Rajeshsingh Thakur. I am working as a Software Development Engineer at Sarvaha Systems, Pune.
              I have completed my Bachelor's degree in Computer Science and Engineering from Shri Guru Gobind Singhji Institute
              of Engineering and Technology, Nanded. I am a Mitacs GRI scholar of batch 2022.
              <br></br>
              <br></br>
              During my internship at Dalhousie University, I worked at a mobile application for promoting physical activities
              among number of individuals of different age group. The application collected data related to different physical
              activites performed by different individuals. The data contained a trend with itself. This application bring my
              notice to the analysis such data can bring regarding the physical as well as mental health of individuals. Applications
              similar to the application I mentioned, can be used to gather data related to different physical activites, and sensor data
              related to emotions. Once these details can be gathered using the wearables and smart phones, the data can be used for training
              deep learning models such that it can be used to make predictions regarding mental health and physical health stability.
              <br></br>
              <br></br>
              For example the geographical co-ordinates of places visited by individuals can be used to learn how any individual visit different
              places. Frequency of places being visited by different individuals can help us to learn the tendency of people to spend their time.
              Similarly there can be more such activity data that can be used to analyze and make predictions regarding mental health and physical 
              health of different individuals.
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <Card>
              <CardHeader>
                <CardImg src={Pratik} />
              </CardHeader>
            </Card>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
</div>
  )
}

export default Home