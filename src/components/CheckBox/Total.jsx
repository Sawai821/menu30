import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Total({ value }) {
    const { data } = value;
    const { setClear } = value;
    console.log(data,'data');
    
    const [ allTotal, setAllTotal ] = useState(0);
    const [ allTax, setAllTax ] = useState(0);
    let sub = 0;
    data.map(item => (sub += item.total));
    const tax = sub * 0.1;
    const tax2 = tax.toFixed();
    const tax3 = Number(tax2);
    console.log(sub,'sub=合計');
    console.log(tax3,'tax');
    
    return (
        <div className="container d-flex justify-content-center">
            <div className="row row my-1text-captalize text-center align-items-center border-bottom shadow-sm">
                <Link to='/' className='btn btn-outline-warning col-sm'>
                <button className='btn warning col-sm'
                onClick={() => setClear() }>
                    全削除
                </button>
                </Link>
                <div className="container">
                    <div className="row">
                    <h3 className='col'>

                        <span className='btn btn-outline-primary col col-lg-3' 
                        onClick={()=>{
                            setAllTotal(sub) 
                            setAllTax(tax3)}}
                            >PUSH</span>
                        <span className='col col-lg-2'>
                            消費税 : {allTax}
                        </span>

                        <span className='col col-lg-2'>
                            全合計 : {allTotal}
                        </span>
                    </h3>
                    </div>
                </div>

            </div>
        </div>
      
    )
}
