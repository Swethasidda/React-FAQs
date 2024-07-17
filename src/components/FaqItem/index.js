// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {detailsButton: true}

  onStatusChange = () => {
    const {detailsButton} = this.state
    this.setState({detailsButton: !detailsButton})
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText, answerText} = faqsDetails
    const {detailsButton} = this.state
    const imgUrl = detailsButton
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const imgAlt = detailsButton ? 'plus' : 'minus'
    return (
      <li className="faq-container">
        <div className="qustion-container">
          <h1 className="qustion-heading">{questionText}</h1>
          <button
            type="button"
            className="button1"
            onClick={this.onStatusChange}
          >
            <img src={imgUrl} alt={imgAlt} className="image" />
          </button>
        </div>
        <hr className="answer-container" />
        {detailsButton ? null : <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
