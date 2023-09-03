import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import "./icon.css";
function Icon(){
    return(
        <>
          <div className='main2'>
               <div className='git'>
                  <FontAwesomeIcon icon={faGithub} size='4x' color='white'/>
                  <p>GitHub</p>
               </div>
               <div className='paper'>
                  <FontAwesomeIcon icon={faNewspaper} size='4x' color='white'/>
                  <p>Paper</p>
               </div>
          </div>
        </>
    )
}
export default Icon