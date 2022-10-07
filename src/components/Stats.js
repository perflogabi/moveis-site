import React from 'react';
import { stats } from '../data';

const Stats = () => {
    return (
        <div className='bg-accent roumded-[20px] p-12'>
            <div className='flex'>
                {stats.map((item, index) => {
                    return (
                        <div>
                            <div>{item.value}</div>
                            <div>{item.text}</div>
                        </div>
                    )
                })}
            </div>   
        </div>
        
    )
}

export default Stats;