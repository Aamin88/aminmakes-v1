import '../../assets/styles/footer.css';

import Links from '../../shared/lnks';

import {  BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';



const Footer = () => {
    return(
        <footer className='footer'>
            <div className='content'>
                <div className='socials'>
                    <Links link ={'https://www.linkedin.com/in/amin-alhassan-042150161/'} icon={<BsLinkedin />} className='links'/>
                    <Links link={'https://github.com/Aamin887'} icon={<BsGithub />} className='links'/>
                    <Links link={'https://twitter.com/AminForkah'} icon={<BsTwitter className='links'/>} />
                </div>

                <div className='readMe'>
                    <p>Made with React. Inspired by <a target = 'new' href='https://katulie.vercel.app/' className='inspired-link'>Yusif</a></p>
                </div>
                
                <div>
                    Copyright © {new Date().getFullYear()} 
                </div>
            </div>
        </footer>
    )
}


export default Footer;