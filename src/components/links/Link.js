import React from 'react';
import '../links/Link.css'
import '../libs/fontawesome/all.min.css';

function Link() {
    return (
        <div className='main-link'>
            <div className='links-content'>
                <a href='#' target='_blank' className='links'>Link</a>
                <ul className='social-links'>
                    <li className='links-item'><a target='_blank' href='https://www.instagram.com'><i class="fab fa-instagram"></i></a></li>
                    <li className='links-item'><a target='_blank' href='https://www.facebook.com'><i class="fab fa-facebook-f"></i></a></li>
                </ul>
            </div>
        </div>

    );
}

export default Link;
