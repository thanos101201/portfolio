import React from 'react'
import NavComponent from './NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardHeader, Card, CardImg, CardTitle, CardBody } from 'reactstrap'
import Sarvaha from '../assets/sarvaha.jpg';
import Dalhousie from '../assets/Dalhousie.png';
import SIH from '../assets/sih.png';
import Aeons from '../assets/Aeons.jpg';

function About() {

  const project = [
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    },
    {
      title: 'Title',
      Description : 'dfjvndfnjsdjovn jfbv sjdfkvnjdsf jefbvjdfvnjdlsfnvjsdfvjksdfjvnsdfjvnsd kdsjfv sdjfv djofvjd vjsdf vjksdfvjks dfkjbsdfjbv sdo bjdkbsd'
    }
  ]

  const renderProjects = () => {
    return project.map((e,key) => {
      return(
        <div className='col-12 col-md-3 d-flex align-items-center m-1'>
          <Card style={{backgroundColor:'black', boxShadow:'0 0 10px rgba(255, 255, 255, 1)'}}>
            <CardHeader>
              <CardTitle>
                <h3 style={{color:'white'}}>
                  {e.title}
                </h3>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <p style={{color:'white'}}>
                {e.Description}
              </p>
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
              bvdfkjvnjdlf
              dfkhbvsdkjflvnksd
              dbjvbdfkvjdfsv
              djvbdfjkjsdfv
              ndfjvbdfjkad
              djfvbhsdkjsdv
              dfkjvnlsdfv
              dfvbkshdjfvnjldsfv'
              dfjbvdhfvkhsdjvsdf
              dfnvkljdsfjvn
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
              bvdfkjvnjdlf
              dfkhbvsdkjflvnksd
              dbjvbdfkvjdfsv
              djvbdfjkjsdfv
              ndfjvbdfjkad
              djfvbhsdkjsdv
              dfkjvnlsdfv
              dfvbkshdjfvnjldsfv'
              dfjbvdhfvkhsdjvsdf
              dfnvkljdsfjvn
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
              bvdfkjvnjdlf
              dfkhbvsdkjflvnksd
              dbjvbdfkvjdfsv
              djvbdfjkjsdfv
              ndfjvbdfjkad
              djfvbhsdkjsdv
              dfkjvnlsdfv
              dfvbkshdjfvnjldsfv'
              dfjbvdhfvkhsdjvsdf
              dfnvkljdsfjvn
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
              bvdfkjvnjdlf
              dfkhbvsdkjflvnksd
              dbjvbdfkvjdfsv
              djvbdfjkjsdfv
              ndfjvbdfjkad
              djfvbhsdkjsdv
              dfkjvnlsdfv
              dfvbkshdjfvnjldsfv'
              dfjbvdhfvkhsdjvsdf
              dfnvkljdsfjvn
            </p>
          </div>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'4rem', width:'4rem'}} src={Dalhousie} />
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
                <CardImg style={{height:'7rem', width:'7rem'}} src={SIH} />
              </CardHeader>
            </Card>
          </div>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
              bvdfkjvnjdlf
              dfkhbvsdkjflvnksd
              dbjvbdfkvjdfsv
              djvbdfjkjsdfv
              ndfjvbdfjkad
              djfvbhsdkjsdv
              dfkjvnlsdfv
              dfvbkshdjfvnjldsfv'
              dfjbvdhfvkhsdjvsdf
              dfnvkljdsfjvn
            </p>
          </div>
        </div>
        <br></br>
        <div className='row d-flex justify-content-center m-3'>
          <div className='col-10 col-md-8 m-3 d-flex align-items-center'>
            <p style={{color:'white'}}>
              bvdfkjvnjdlf
              dfkhbvsdkjflvnksd
              dbjvbdfkvjdfsv
              djvbdfjkjsdfv
              ndfjvbdfjkad
              djfvbhsdkjsdv
              dfkjvnlsdfv
              dfvbkshdjfvnjldsfv'
              dfjbvdhfvkhsdjvsdf
              dfnvkljdsfjvn
            </p>
          </div>
          <div className='col-10 col-md-3 m-3 d-flex align-items-center'>
            <Card style={{height:'4rem', width:'4rem', backgroundColor:'black'}}>
              <CardHeader>
                <CardImg style={{height:'7rem', width:'7rem'}} src={SIH} />
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