import React from 'react'
import {Button} from './Button'
import './Hero.css'
import '../App.css'
import {Socialbutton} from './Socialbutton';
const Title="Jerome's Web";
const subTitle= "Created by Moi"
function Hero()
{
    return(
        <div className='hero-container'> {/*A hero image is a website design term used to describe an oversized banner image at the top of a website. */}


            <h1 > {Title}</h1>
            <p>{subTitle}</p>
            <div className='hero-btns'>
                <Socialbutton className='btn' referenceplace= 'https://jcala09.github.io/portfolio/'buttonStyle= 'btn--outline' buttonSize='btn--large'>
                    Learn More About Me 
                    </Socialbutton>
                    
                    <Socialbutton className='btn' referenceplace= 'https://www.youtube.com/channel/UCoDsFX7oej_D0DLQea74Xfw' buttonStyle= 'btn--primary' buttonSize='btn--large'>
                    Watch my projects lul <i className='far fa-play-circle' />
                    </Socialbutton>
                    </div>   
            </div>
    )
}
export default Hero