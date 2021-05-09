import React from 'react';
import 
{
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const Post = ()=>{
  return(
    <section style={{background:'rgb(238,238,238)'}}>
    <MDBContainer >
    <MDBRow style={{padding:0}}>
    <MDBCol size='sm-5' className='mt-3  d-flex justify-content-center'>
      <MDBCard style={{ width: "35rem" }}>
        <MDBCardBody>
          <MDBCardTitle><h6>Intro</h6></MDBCardTitle>
          <ul className='list-unstyled text-muted'>
           <li><MDBIcon className='pb-3'icon="briefcase" />&nbsp; &nbsp;&nbsp;&nbsp;business</li>
          <li><MDBIcon className='pb-3'icon="home" />&nbsp; &nbsp;&nbsp;&nbsp;business</li>
          <li><MDBIcon className='pb-3'icon="graduation-cap" />&nbsp; &nbsp;&nbsp;&nbsp;business</li>
          <li><MDBIcon className='pb-3'icon="rss" />&nbsp; &nbsp;&nbsp;&nbsp;business</li>
           <li><MDBIcon className='pb-3'icon="globe" />&nbsp; &nbsp;&nbsp;&nbsp;business</li>
         
          </ul>
          <MDBBtn rounded className='w-100 mb-4' color='light' href="#">MDBBtn</MDBBtn>
          <MDBBtn rounded className='w-100 mb-4' color='light' href="#">MDBBtn</MDBBtn>
         <MDBRow>
          <MDBCol size='4' className='mr-1'><img src='https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/96358873_10156891919396916_5062453268618149888_n.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_ohc=kFS1xhNyUFsAX9-cgX3&_nc_ht=scontent.fyyc3-1.fna&oh=a86cb270088e211fc9881d25e9798c3d&oe=6064285D' style={{width:'8.7rem'}}/></MDBCol>
          <MDBCol size='4' className='mr-1'><img  src='https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/82873359_10157995531705148_7893189951972442112_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8bfeb9&_nc_ohc=C6_fhDff7kwAX95M-2t&_nc_ht=scontent.fyyc3-1.fna&oh=c16f739af1d90c7cfe18ba7cd2d28b9e&oe=6064A6A9' style={{width:'8.7rem'}}/></MDBCol>
          <MDBCol size='4' className='mr-1' ><img src='https://scontent.fyyc3-1.fna.fbcdn.net/v/t1.0-9/96358873_10156891919396916_5062453268618149888_n.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_ohc=kFS1xhNyUFsAX9-cgX3&_nc_ht=scontent.fyyc3-1.fna&oh=a86cb270088e211fc9881d25e9798c3d&oe=6064285D' style={{width:'8.7rem'}}/></MDBCol>
          <MDBCol size='md-4'className='m-1'>foto-4</MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol >
    <MDBCol size='sm-7' className='mt-3'>
     <MDBCard >
        <MDBCardBody>
          <MDBCardTitle><h6>Intro</h6></MDBCardTitle>
          <ul className='list-unstyled text-muted'>
          <li><MDBIcon className='mr-5'icon="briefcase" />&nbsp; &nbsp;&nbsp;&nbsp;business</li>
          <li></li>
          <li></li>
          <li></li>
          </ul>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </section>
  )
}

export default Post;