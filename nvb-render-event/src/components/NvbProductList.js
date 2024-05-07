import React, { Component } from 'react'

export default class NvbProductList extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let fnStatus = (param)=>{
      if(param===1){
        return 'Active';
      }
        return 'NonActive';
    }
    let elemenProduct = renderProducts.map((item,index)=>{
        return(
            <>
             <tr key= {index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                   {/* <td>{item.status ===1?'Ative':'NonAtive'}</td>*/}
                   <td>
                    {fnStatus(item.status)}
                   </td>
                </tr>
            </>
        )
            
        
    })

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
               {elemenProduct}
            </tbody>
        </table>
      </div>
    )
  }
}

