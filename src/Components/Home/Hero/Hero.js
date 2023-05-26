import React from 'react'
import './Hero.css'
import Img1 from '../../Images/img1.png'
import Img2 from '../../Images/Img2.png'
import Fa from '../../Images/fa.png'
import Tw from '../../Images/tw.png'
import Li from '../../Images/li.png'
import In from '../../Images/in.png'
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';

function Hero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
  return (
    <>
        <section className='HeroContainer'>
            {/* <div className='Hero1'>
                Registration for The Curve cohort 2.0 is now open!
            </div> */}
            <div className='Bottom'>
                <div className='BottomWrap'>
                    <div className='HeroLeft'>
                        <div className='HeroText'>
                            Become an Expert in Software Engineering for 
                            <div className='free'>FREE</div>
                        </div>
                        <p className='HeroPara'>
                            Join The Curve Academy today, learn and acquire hands on experience,
                            build amazing portfolio and you might have the opportunity for an internship on completion,
                            all for free!
                        </p>
                        <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank'><button className='HeroBtn'>Apply Now!</button></a>
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
                    </div>

                    <img  className='HeroRight' src={Img1} alt='Avatar'/>
                    <img  className='HeroRight2' src={Img2} alt='Avatar'/>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero