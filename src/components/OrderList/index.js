import React, { Component } from 'react'
import OrderItem from '../OrderItem'
//import imgUrl from '../../images/task1.png' //待webpack配置优化

export default class OrderList extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('/mock/orders.json').then(res => {
      if(res.ok){
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.data.map((item)=>{
            return <OrderItem key={item.id} data={item}
              onSubmit={this.handleSubmit} />
          })
        }
      </div>
    )
  }

  handleSubmit = (id, comment, stars) => {
    const newData = this.state.data.map(item => {
      return item.id === id ? 
      {
        ...item, comment, stars, ifCommented: true
      }: item;
    })
    this.setState({
      data: newData
    })
  }
}
