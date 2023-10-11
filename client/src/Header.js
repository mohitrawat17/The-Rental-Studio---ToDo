import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {


  return (
    <div className='font-bold px-20 max-sm:px-6 text-lg flex justify-between'>
     <div> The Rental<span className='text-orange-500'> Studio</span></div>
   
      <LogoutIcon/>
     
    </div>
  )
}

export default Header
