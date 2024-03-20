import React from 'react';
import logo from '../images/Logo.svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterraneran restaurant, focused on tradiation recipies served with a modern twist.</p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 84th Ave. 16, USA</li>
                        <li>Phone: <br/> (123) 214-0287</li>
                        <li>Email: <br/> name@email.org</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;