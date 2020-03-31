import React from 'react';
// import React,{ useState } from 'react';



export default function CheckList({ data, value }) {
    const { id } = data;
    const { handleDelete } = value;
    // const [remove, setRemove] = useState([]);
    // function handleDelete(id){
    //     let box = [...data];
    //     const items = data.filter(item => item.id !== id);
    //     const index = items.indexOf(box);
    //     setRemove(index);
    //     console.log(remove)
    // }
    console.log(data);

    return (
        <div className="px-0 mx-0 py-1 container">
            <div className='row my-1 text-captalize text-center align-items-center border-bottom shadow-sm p-2 mb-1 bg-white rounded'>
                <div className="col-10 px-0 max-auto col-lg-2 ">
                {data.name}
                </div>
                <div className="col-10 px-0 max-auto col-6 ">
                    <span className='d-lg-nono'>値段 :</span>
                    {data.price}
                </div>

                <div className="col-10 px-0 max-auto col-6 ">
                    <span className='d-lg-nono'>個数 :</span>
                    {data.count}
                </div>
                
                {/* <div className="col-10 px-0 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="btn btn-outline-primary justify-cotent-center"
                        onClick={() => setCounts( prevCount => prevCount - 1 )}>
                        -1
                        </span>
                        <span className="justify-cotent-center">
                        個数: {counts}
                        </span>
                        <span className="btn btn-outline-primary justify-cotent-center"
                        onClick={()=> setCounts( prevCount => prevCount + 1 )}>
                        +1
                        </span>
                    </div>
                </div> */}

                <div className="col-10 px-0 max-auto col-6 ">
                    <span className='fa fa-trash-o btn btn-outline-primary justify-cotent-center'
                    onClick={() =>{ handleDelete(id)}}
                    >
                    </span>
                </div>

                <div className="col-10 px-0 max-auto col-6 ">
                    <span className='d-lg-nono'>合計 :</span>
                    <strong>
                        {data.total}
                    </strong>
                </div>
            </div>
        </div>
    )
}
