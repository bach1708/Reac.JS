import React, { Component } from 'react'
import NvbProductList from './components/NvbProductList';
import NvbProductAdd from './components/NvbProductAdd';

export default class App extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      products : [
        { title: 'Nông Văn Bách', id: 2210900003 , status:1},
        { title: 'Cabbage', id: 1,  status:1},
        { title: 'Garlic', id: 2 , status:0},
        { title: 'Apple', id: 3,  status:0},
        { title: 'Samsung', id: 4,  status:1},
      ]
    }
  }

  nvbHandleSubmit = (param)=>{
    console.log("App:",param);
    //thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })

  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nông Văn Bách - Render Data - Event Form</h1>
        <hr/>
        <NvbProductList renderProducts={this.state.products}/>
        <hr/>
        <NvbProductAdd onSumit = {this.nvbHandleSubmit}/> 
      </div>
    )
  }
}
