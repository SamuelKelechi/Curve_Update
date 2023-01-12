import React from 'react'
import './Footer.css'
import Img7 from '../Images/img7.png'
import Fa from '../Images/fa.png'
import Tw from '../Images/tw.png'
import Li from '../Images/li.png'
import In from '../Images/in.png'
import Logo from '../Images/curve2.png'
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';

import {Link} from 'react-router-dom'
import Gmail from '../Images/gmail.png'
import Phone from '../Images/phone.png'

function Footer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let date = new Date().getFullYear();

  return (
    <>
        <section className='FooterContainer'>

            <div className='FooterLogo'><img src={Logo} alt='Logo' className='Logs'/></div>

            <div className='FooterContent'>
                <div className='LeftContent'>
                    <h4>Get in touch</h4>
                    <p className='GmailHold'><img src={Phone} alt='gmail' />+2348137253138</p>
                    <p className='GmailHold'><img src={Phone} alt='gmail' />+2348186793482</p>
                    <div className='GmailHold'><img src={Gmail} alt='gmail' /> thecurveafrica@gmail.com</div>
                    <img className='Img7' src={Img7} alt='avatar' />
                </div>

                <div className='MiddleContent'>
                    <h4>Social Media</h4>
                    <div className='SocialLinks'>
                        <a href='https://fb.me/thecurveafrica' target='blank'><img src={Fa} alt='fa' className='Social'/></a>
                        <a href='https://twitter.com/thecurveafrica' target='blank'><img src={Tw} alt='tw' className='Social'/></a>
                        <a href='https://www.linkedin.com/company/the-curve-africa/' target='blank'><img src={Li} alt='li' className='Social'/></a>
                        <a href='https://instagram.com/thecurveafrica?igshid=YmMyMTA2M2Y=' target='blank'><img src={In} alt='in' className='Social'/></a>
                    </div>
                    @thecurveafrica
                </div>

                <div className='FooterBtnContain'>
                   <button onClick={handleOpen} className='FooterBtn'>Apply Now!</button>
                </div>
            </div>

            <>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >

                                <Box>
                                <p className='PopUp'> 
                                    <p style={{cursor:"pointer", width:'20px'}}><CancelIcon onClick={handleClose}/></p>
                                    <span>COHORT 2 APPLICATION</span>: HURRAY! THE CURVE COHORT 2.0 APPLICATION WILL COMMENCE ON MONDAY 16 JANUARY 2023. KINDLY FOLLOW US ON SOCIAL MEDIA TO ALWAYS GET UPDATES. THANKS.
                                    <br/>
                                    <br/>
                                    <div className='SocialLinks'>
                                    <a href='https://fb.me/thecurveafrica' target='blank'><img src={Fa} alt='fa' className='Social'/></a>
                                    <a href='https://twitter.com/thecurveafrica' target='blank'><img src={Tw} alt='tw' className='Social'/></a>
                                    <a href='https://www.linkedin.com/company/the-curve-africa/' target='blank'><img src={Li} alt='li' className='Social'/></a>
                                    <a href='https://instagram.com/thecurveafrica?igshid=YmMyMTA2M2Y=' target='blank'><img src={In} alt='in' className='Social'/></a>
                                    </div>
                                </p>
                                </Box>
                                
                            </Modal>
                        </>

            <div className='FooterLine'></div>

            <div className='FooterBottom'> ©{date} The Curve | All rights reserved</div>


        </section>

    </>
  )
}

export default Footer