import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
function Socialicon() {
  return (
    <div>
       <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter"><BsTwitter/></a>
            <a href="#" className="facebook"><BsFacebook/></a>
            <a href="#" className="instagram"><BsInstagram/></a>
            <a href="#" className="linkedin"><BsLinkedin/></a>
        </div>
    </div>
  )
}

export default Socialicon
