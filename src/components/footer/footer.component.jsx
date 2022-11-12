import './footer.component.styles.css';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-items'>
                <div  className='footer-logo-col'>
                    <div>
                    <Link className='logo' to='/'>Logo</Link>
                    </div>
                    <p className='copyright'>Copyright &copy; 2022 by Rebecca, Inc. All rights reserved.</p>
                </div>
                <div>
                    <p className='footer-heading'>Contact us</p>
                    <address className='contacts'>
                    <p className='address'>623 Harrison St., 3rd Floor, San Francisco, CA 94107</p>
                    <p>
                    <Link className='footer-link' to="tel:234-201-777">234-201-777</Link>
                    <br />
                    <Link className='footer-link' to="mailto:shopHere@gmail.com">shopHere@gmail.com</Link>
                    </p>
                    </address>
                    
                </div>
                <div>
                    <p className='footer-heading'>Account</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">Create an account</Link>
                        <Link className='footer-link' to="/">Sign in</Link>
                        <Link className='footer-link' to="/">iOS app</Link>
                        <Link className='footer-link' to="/">Android app</Link>
                        </ul>
                </div>
                <div>
                <p className='footer-heading'>Company</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">About Virtual Store</Link>
                        <Link className='footer-link' to="/">For Business</Link>
                        <Link className='footer-link' to="/">Partners</Link>
                        <Link className='footer-link' to="/">Careers</Link>
                        </ul>
                </div>
                <div>
                <p className='footer-heading'>Resources</p>
                        <ul className='footer-links'>
                        <Link className='footer-link' to="/">Help center</Link>
                        <Link className='footer-link' to="/">Privacy & terms</Link>
                        <Link className='footer-link' to="/">Faqs</Link>
                        </ul>
                </div>
            </div>
        </div>
    )
}



export default Footer;



// Account

// Create account
// Sign in
// iOS app
// Android app
// Company

// About Omnifood
// For Business
// Cooking partners
// Careers
// Resources

// Recipe directory
// Help center
// Privacy & terms