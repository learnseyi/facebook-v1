import React from 'react';
import {
   MDBBtn,
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBDropdown, 
   MDBDropdownMenu, 
   MDBDropdownToggle, 
   MDBDropdownItem, 
   MDBDropdownLink,
   MDBIcon
   } from 'mdb-react-ui-kit';

const ProfileLinks = ()=>{
  return(
    <section className='mt-2 pb-3'>
    <MDBContainer>
    <MDBRow className='d-flex justify-content-center'>
    <MDBCol size='md-6 sm-12' className='d-flex  justify-content-sm-center justify-content-start'>
     <MDBBtn className='blue-text px-1 'color='link'>Posts</MDBBtn>
     <MDBBtn className='text-reset' color='link'>Friends<small className='text-muted'>&nbsp;25</small></MDBBtn>
     <MDBBtn className='text-reset' color='link'>Photos</MDBBtn>
     <MDBDropdown >
      <MDBDropdownToggle className='text-reset px-0' color='link'>More</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Another action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
     </MDBCol>
     <MDBCol size='md-6 sm-12' className=' d-flex justify-content-sm-center justify-content-end'>
     <MDBBtn color="light" className='mr-4'><MDBIcon className='mr-4'icon="edit" />Edit Profile</MDBBtn>
     <MDBBtn color="light"className='mr-4 '>Elegant</MDBBtn>
     <MDBBtn color="light" className='mr-4 '>Elegant</MDBBtn>
     </MDBCol>
     </MDBRow>
     </MDBContainer>
     

     </section>
  )
}

export default ProfileLinks;