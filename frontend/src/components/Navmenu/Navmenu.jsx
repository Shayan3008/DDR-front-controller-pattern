import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Navmenu.css'
import Logo from "../../assets/Logo.svg"
import UserNavMenu from "../../assets/UserNavMenu.svg"
import ProductNavMenu from "../../assets/ProductNavMenu.svg"
import CategoryNavMenu from "../../assets/CategoryNavMenu.svg"
// import AdvertismentNavMenu from "../../assets/AdvertismentNavMenu.svg"
// import ShopNavMenu from "../../assets/ShopNavMenu.svg"
// import ParkingNavMenu from "../../assets/ParkingNavMenu.svg"
// import StaffNavMenu from "../../assets/StaffNavMenu.svg"
// import Entertainment from "../../assets/Entertainment.svg"
// import EmergencyNavMenu from "../../assets/EmergencyNavMenu.svg"
// import CustomerNavMenu from "../../assets/CustomerNavMenu.svg"

export default function Navmenu() {
  return (
      <div className='Navmenu'>
        <div className='navlink'>
          <Link to="/user" ><img className='User' id='Navmenuicon'        src={UserNavMenu} ></img></Link>
          <Link to="/product" ><img className='Product' id='Navmenuicon'                src={ProductNavMenu} ></img> </Link>
          <Link to="/category" ><img className='Category' id='Navmenuicon'             src={CategoryNavMenu} ></img></Link>
          
        </div>
    </div>  
  )
}



// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';



// const Navmenu = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
  
//         <NavMenu>
//           <NavLink to='/about' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/events' activeStyle>
//             Events
//           </NavLink>
//           <NavLink to='/annual' activeStyle>
//             Annual Report
//           </NavLink>
//           <NavLink to='/team' activeStyle>
//             Teams
//           </NavLink>
//           <NavLink to='/blogs' activeStyle>
//             Blogs
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };
  
// export default Navmenu;





// export default function Navmenu() {
//   return (
//     <Router>
//       <div className='Navmenu'>
//           <Link to="/advertisment"><img id='navimage' className='Advertisment'  src={AdvertismentNavMenu}/></Link>
//           <Link to="/shop"><img id='navimage' className='Shop'   src={ShopNavMenu}/></Link>
//           <Link to="/parking"><img id='navimage' className='Parking' src={ParkingNavMenu}/></Link>
//           <Link to="/staff"><img id='navimage' className='Staff'  src={StaffNavMenu}/></Link>
//           <Link to="/emergency"><img id='navimage' className='Emergency' src={EmergencyNavMenu}/></Link>
//           <Link to="/customer"><img id='navimage' className='Customer' src={CustomerNavMenu}/></Link>
//       </div>
//     </Router>
//   );
// }
