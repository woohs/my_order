import React, { Component } from 'react'
import './style.css'

export default class OrderItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || '',
      ifCommented: props.data.ifCommented || false,
    }
  }

  render() {
    const { shop, product, price, picture, ifCommented } =
      this.props.data;

    return (
      <div>
        <div className="orderItem">
          <div className="orderItem__picContainer">
            <img className="orderItem__pic" src={picture} />
          </div>
          <div className="orderItem__content">
            <div className="orderItem__product">
              {product}
            </div>
            <div className="orderItem__shop">{shop}</div>
            <div className="orderItem__detail">
              <div className="orderItem__price">{price}</div>
              <div>
                {
                  ifCommented ? (
                    <button className="orderItem__btn orderItem__btn--grey"
                      onClick={this.handleCheckComment}>已评价</button>
                  ) : (
                    <button className="orderItem__btn orderItem__btn--red"
                      onClick={this.handleOpenEditArea}>
                      评价
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    )
  }

  handleOpenEditArea = () => {
    this.setState({
      editing: true
    })
  }

  renderEditArea(){
    return(
      <div className="orderItem__commentContainer">
        <textarea className="orderItem__comment" 
          onChange={this.handleCommentChange} 
          value={this.state.comment} />
        {this.renderStars()}
        { 
          !this.props.data.ifCommented ? 
          (
            <button className="orderItem__btn orderItem__btn--red"
              onClick={this.handleSubmitComment}>提交</button>
          ): null
        }
        <button className="orderItem__btn orderItem__btn--grey"
          onClick={this.handleCancelComment}>取消</button>
      </div>
    )
  }

  renderStars(){
    const {stars} = this.state;
    return (
      <div>
        {
          [1,2,3,4,5].map((item, index) => {
            const light = stars >= item ?
              "orderItem_star--light": "";
            return (
              <span key={index} className={light}
                onClick={this.handleClickStars.bind(this, item)}>★</span>
            )
          })
        }
      </div>
    )
  }

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleClickStars = (stars) => {
    this.setState({
      stars: stars
    })
  }

  handleCancelComment = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.comment || '',
    })
  }

  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, stars } = this.state;
    this.setState({
      editing: false
    })
    this.props.onSubmit(id, comment, stars)
  }

  handleCheckComment = () => {
    this.setState({
      editing: true
    })
  }
}
