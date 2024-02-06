import { Box } from '@mui/system'
import React from 'react'
import './footer.css'
export default function Footer() {
    return (      
            <Box>
            <div className='bottom'>
                <div className='footer'>
                    <img src='/images/logo.png' alt='' className='nsclogo' />
                    <img src='/images/psu-logo.png' alt='' className='psulogo' />
                </div>
                <div className='footer'>
                    ©Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University
                </div>
            </div>
            </Box>
    )
}
