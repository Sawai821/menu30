import React from 'react'
import CheckList from './CheckList';
// import Total from './Total';

export default function CheckData({value}) {
    const { data }= value;

    return (
        <div className='py-5 container'>
            {data.map(item => {
                return <CheckList  
                key={item.id} 
                data={item}
                value={value}
                />
            })}
        </div>
    )
}
