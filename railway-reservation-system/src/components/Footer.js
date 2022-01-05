import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
      <ul>
        <li>
        <Link className='links' to='/'>
           <button> Home</button>
          </Link>
        </li>
        <li>
          <button>Careers</button>
        </li>  
      </ul>
      </div>
      
      <div>
      <ul>
        <li>
          <button>Privacy Policy</button>
        </li>
        <li>
          <button>Disclaimer</button>
        </li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer
