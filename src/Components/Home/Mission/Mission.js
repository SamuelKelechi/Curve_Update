import React from 'react'
import './Mission.css'
import Img6 from '../../Images/img6.png'
import Bulb from '../../Images/bulb.png'
import Fa from '../../Images/fa.png'
import Tw from '../../Images/tw.png'
import Li from '../../Images/li.png'
import In from '../../Images/in.png'
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';

function Mission() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <section className='MissionCont'>

            <img className='Img6' src={Img6} alt='Avatar' />

            <div className='MissionRight'>
                <div className='MissionTop'>
                    <div className='MissionTitle'>
                        Our <br/> Mission <br/> & Vision
                    </div>

                    <img src={Bulb} alt='Bulb' className='Bulb'/>
                </div>
                <p className='MissionPara'>
                    To equip Africans with a strong foundation in different Tech related fields to solve real-world problems. We are on a mission to train over 10,000 youths on Tech across Africa in 10 years.
                    <br/>
                    <br/>
                    At The Curve we ensure that after the completion of 5 months intensive training and six months internship, our trainee are fully equipped with knowledge required for their future careers.
                </p>
                <button className='MissionBtn' onClick={handleOpen}>Join cohort 2.0</button>
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
                                    <span>COHORT 2 APPLICATION CLOSED</span>: Registration for The Curve cohort 2.0 is now closed. Shortlisted candidate will be contacted soon. KINDLY FOLLOW US ON SOCIAL MEDIA TO ALWAYS GET UPDATES. THANKS.
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

        </section>
    </>
  )
}

export default Mission