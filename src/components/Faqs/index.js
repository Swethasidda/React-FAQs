// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="big-container">
        <div className="small-container">
          <h1 className="heading">FAQs</h1>
          <ul className="each-container">
            {faqsList.map(each => (
              <FaqItem faqsDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
