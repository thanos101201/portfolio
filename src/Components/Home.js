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
              sdnjs
              sdvnasldkvasdv
              sndvalkvasvnjafsl
              sdnvjasldv m,adsfv
              sdlvjafsndvadfsv
              sjavl df,v adsflvnfdv
              kjdsvn asndflvn asndflvnsfsdk
              skjdvnasdlfvnlsdfv
              akdjfvansfjldvnaksvas
              dfskjvnasdflaksvk;asf;vitals
              sjklvnasljnvlksdklv;as;kvjlafsv
              dkjflvnaslfjkvmasfmv;as;vitalskjdfv
              kjdfvakjlsdfvljadsflkvnadsfkv
              jsdflvansldvlkasvklasfklvakldfvkandf
              kjasdnvlsdvlkasv;kjasdnvlsdvlkasvlsfvlnfsvladsf
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