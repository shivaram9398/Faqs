import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {hide: true}

  show = () => {
    this.setState(prev => ({hide: !prev.hide}))
  }

  render() {
    const {hide} = this.state
    const {details} = this.props
    const {questionText, answerText} = details
    return (
      <li className="item-con">
        <div className="text">
          <h1 className="para">{questionText}</h1>
          <button className="button" onClick={this.show}>
            {hide ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            )}
          </button>
        </div>
        {hide ? null : <hr />}
        {hide ? null : <p className="answer">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
