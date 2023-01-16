import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Logo1 from '../Images/curve1.png'
import Logo2 from '../Images/curve2.png'
import Fa from '../Images/fa.png'
import Tw from '../Images/tw.png'
import Li from '../Images/li.png'
import In from '../Images/in.png'
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';


function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //State to Change Header Color When Scrolling
  const [color, setColor] = useState(false)

  // Function to Change Header Color When Scrolling
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)


  return (
    <>
        <section className={color ? 'HeaderContainer HeaderContainer-bg' : 'HeaderContainer'}>
            <div className='HeaderWrapper'>
                <Link to='/' style={{textDecoration:'none', color:'inherit', height:'100%'}}>
                  <div className='HeaderLogo'>
                    {color ? (<img src={Logo1} alt='Logo' className='Logs'/>):(<img src={Logo2} alt='Logo' className='Logs'/>)}
                  </div>
                </Link>
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
                <div className='Buttons'>
                    <a href='https://join.slack.com/t/thecurveafrica/shared_invite/zt-1etfl6ukx-IXKNy9N26lMQj7YT3OZGLw' target='blank' style={{textDecoration:'none', color:'inherit'}}><button className='HeaderBtn1'>Join our community</button></a>
                    <a href="https://forms.gle/JLx1YoXBfC53V7Rg8" target='blank'><button className='HeaderBtn2'>Register for Free!</button></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header