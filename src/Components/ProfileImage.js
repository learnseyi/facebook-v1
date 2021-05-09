import React from 'react';
import image from './karyn.jpg';
import bgImage from './karyn-bg.jpg';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  } from 'mdb-react-ui-kit';


const ProfileImage = ()=>{
  return(
    <MDBContainer>
    <div
        className='p-5 text-center bg-image shadow-1-strong rounded-bottom'
        style={{ backgroundImage: `url(${bgImage})`, height: 400 }}
      >
        
      </div>
      <div className='d-flex justify-content-center'>
      <img
                tag="img"
                src={image}
                className="rounded-circle shadow-3-strong position-absolute"
                alt="Sample avatar"
                style={{width:'168px', marginTop:'-140px'}}
              />
              </div>
              <section className='bg-white'>
                <MDBContainer className='mt-5 text-center border-bottom'>
                <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='6'>
                <h2><strong>Karyn Bjornson</strong></h2>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
              </section>
      </MDBContainer>

  )
} 

export default ProfileImage;