import React from 'react';
import { hero } from '../data';

const Hero = () => {
    const {title, subtitle, buttonText} = hero;
    return (
        <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white'>
          <div className='container mx-auto text-center'>
            <h1 className='text-2x1 mx-auto font-semibold mb-[30px] 1g:text-[64px] 1g:leading-tight 1g:max-w-[888px]'>{title}</h1>
            <h2 className='mb-[30px] max-w-[627px] max-auto 1g:mb-[65px] 1g:text-x1'>{subtitle}</h2>
            <button className='bg-[rgba(255,255,255, 0.4) hover:bg-[rgba(255,255,255, 0.5)] px-[35px] py-[9px] mb-[160px] text-x1 rounded-md backdrop-blur-md transition 1g:px-[80px] 1g:mb-[194px]'>{buttonText}</button>
          </div>  
        </section>
        
    )
}

export default Hero;