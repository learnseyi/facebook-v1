import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

const NavBar = ()=>{
  return(
    <MDBNavbar expand='lg' light style={{ backgroundColor: '#FFF176' }}>
      <MDBContainer fluid >
      <MDBNavbarBrand href='#'>
            
            </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
           <MDBInput  label='Search' id='formControlSm' type='text' size='sm'  />
            <MDBIcon className='mx-3' icon='search' fas style={{cursor:'pointer'}} />
           <MDBCol size='3'className='ml-5'>
           
           </MDBCol>
           <MDBCol className='flex-fill'>
              <MDBNavbarNav className='d-flex flex-row'>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <span className='badge rounded-pill bg-danger position-relative' style={{fontSize:'10px',bottom:'7px',left:'5px'}}>2</span>
              <MDBIcon fas icon='home'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <MDBIcon fas icon='flag'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <MDBIcon fas icon='video'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <span className='badge rounded-pill bg-danger position-relative' style={{fontSize:'10px',bottom:'7px',left:'5px'}}>1</span>
            <MDBIcon fas icon='envelope'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <MDBIcon fas icon='users'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
           </MDBCol>
           <MDBCol >
              <MDBNavbarNav className='d-flex flex-row'>
               <MDBNavbarItem className='me-3 me-lg-0 dropdown'>
            <MDBNavbarLink href='#'>
              <MDBIcon fas icon='comments'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0 dropdown'>
            <MDBNavbarLink href='#'>
              <MDBIcon fas icon='bell'/>
            </MDBNavbarLink>
          </MDBNavbarItem>
          
          <MDBNavbarItem className='me-3 me-lg-0 dropdown'>
           
            <a
                className='nav-link dropdown-toggle hidden-arrow'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                <MDBIcon fas icon='user'/>
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li><a className='dropdown-item' href='#!'>Action</a></li>
                <li><a className='dropdown-item' href='#!'>Another action</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className='dropdown-item' href='#!'>Something else here</a></li>
              </ul>
          </MDBNavbarItem>
         
        </MDBNavbarNav>
           </MDBCol>
      
        </div>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default NavBar;

// <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Link</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem className='dropdown'>
//               <a
//                 className='nav-link dropdown-toggle'
//                 href='#!'
//                 id='navbarDropdown'
//                 role='button'
//                 data-toggle='dropdown'
//                 aria-expanded='false'
//               >
//                 Dropdown
//               </a>
//               <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
//                 <li>
//                   <a className='dropdown-item' href='#!'>
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className='dropdown-item' href='#!'>
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className='dropdown-divider' />
//                 </li>
//                 <li>
//                   <a className='dropdown-item' href='#!'>
//                     Something else here
//                   </a>
//                 </li>
//               </ul>