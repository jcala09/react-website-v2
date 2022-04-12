import React from 'react';
import { Socialbutton } from '../Socialbutton';

function HeroSocial() {
    return(
        <div className='Social-container'>
  
    <div classname='social-btns>'>
    <p className='socials' ><Socialbutton className='btns' referenceplace= 'https://twitch.tv/voldethot'platform='twitch' buttonStyle= 'btn--primary' buttonSize='btn--large'>
                    Twitch <i className='fab fa-twitch' />
                    </Socialbutton></p>

    <p className='socials'><Socialbutton className='btns' referenceplace= 'https://instagram.com/jerome_cala' platform='instagram' buttonStyle= 'btn--primary' buttonSize='btn--large'>
                    Insta<i className='fab fa-instagram' />
                    </Socialbutton></p>
    
    <p className='socials'><Socialbutton className='btns' referenceplace= 'https://twitter.com/jcala9' platform='twitter' buttonStyle= 'btn--primary' buttonSize='btn--large'>
                    Twitter <i className='fab fa-twitter' />
                    </Socialbutton></p>
    
    <p className='socials'><Socialbutton className='btns' referenceplace= 'https://github.com/jcala09' platform='github' buttonStyle= 'btn--primary' buttonSize='btn--large'>
                    Github<i className='fab fa-github' />
                    </Socialbutton></p>

    <p className='socials'><Socialbutton className='btns' referenceplace= 'https://youtube.com/jcala09' platform='youtube' buttonStyle= 'btn--primary' buttonSize='btn--large'>
                   Youtube<i className='fab fa-youtube' />
                    </Socialbutton></p>
        </div>
        </div>
    
        
    )
}
export default HeroSocial