import './Socialbutton.css';
import React from 'react';

const STYLES= ['btn--primary', 'btn--outline'];
const SIZES= ['btn--medium', 'btn--large'];


export const Socialbutton=  //button that can be implemented for lots of stuff
({children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    platform,
    referenceplace},
    ) => 
    {
    const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize= SIZES.includes(buttonSize) ? buttonStyle : SIZES[0]
    

    return(
        <a href= {`${referenceplace}`}>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize} ${platform}` }
                 onclick={onClick} 
                 type={type}>
                {children} 
            </button>
        
            </a>
    )
}