import React from 'react';
import {hero} from '../data';

const Hero = () => {
    const {title, subtitle, buttonText} = hero;
    return (
        <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white'>
          <div className='container mx-auto'>Hero</div>  
        </section>
        
    )
}

export default Hero;