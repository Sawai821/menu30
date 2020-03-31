import React, { Component } from 'react';
import {MenuConsumer} from '../../Context';
import CheckData from './CheckData';
// import Total from './Total';
import Title from '../Title';
import Total from './Total';

  
/* Product */
class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            total:0,
            tax: 0,
        };
        this.incriment = this.incriment.bind(this);
        this.decriment = this.decriment.bind(this);
    }

    handleTotal(){
        
    }

    incriment() {
        this.setState({
        num: this.state.num + 1
        });
        //this.props.handleTotal(this.props.price);
    }

    decriment() {
        this.setState({
        num: this.state.num - 1
        });
        //this.props.handleTotal(-this.props.price);
    }

    handleDelete(id){
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({ items: items });
        // const toList = data.map(item => {
        //     return <CheckList  
        //         key={item.id} 
        //         value={item}
        //         data={value}
        //         // onDelete={(id) => {
        //         //     const items = data.filter(item => item.id !== id);
        //         //     this.setState({ data: items });
        //         // }}
        //     />
        // })
    };

    // delete(){

    // }

    render() {

        return (
            <section>
                <MenuConsumer>
                    {value => {
                        const { data } = value;
                        // const {id} = value.data;
                        // const datas = Object.values(data);
                        if(data.length > 0){
                            return(
                                <React.Fragment>
                                    <CheckData value={value}/>
                                    <Total value={value}/>
                                </React.Fragment>
                            )
                        }else{
                            return( 
                                <div className="py-5 container">
                                <div className='d-flex justify-content-center'>
                                    <Title name='選択せれてません'  />
                                </div>
                                </div>
                            )
                        };
                    }}
                </MenuConsumer>
            </section>
        )
    }
}
export default Check;