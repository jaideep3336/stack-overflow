import React from 'react'
import {Link} from "react-router-dom"
import moment from 'moment';

const Questions = ({question}) => {

  if (!question) {
    return null; // or handle it in a way that makes sense for your application
  }

  // Destructure properties with default values to avoid undefined errors
  const { votes = 0, noOfAnswers = 0, id, questionTitle, questionTags, askedOn, userPosted } = question;

  return (
    <div className='display-question-container'>
<div className='display-votes-ans'>
  <p>{question.upVote.length - question.downVote.length}</p>
  <p>votes</p>
</div>
<div className='display-votes-ans'>
  <p>{question.noOfAnswers}</p>
  <p>answers</p>
</div>
<div className='display-question-details'>
  <Link to = {`/Questions/${question.id}`} className="question-title-link">{question.questionTitle}</Link>
  <div className='display-tags-time'>
    <div className='display-tags'>
      {
        question.questionTags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))  
      }
    </div>
<p className='display-time'>
  asked {moment(question.askedOn).fromNow()} {question.userPosted}
</p>
  </div>
</div>
    </div>
  )
}

export default Questions