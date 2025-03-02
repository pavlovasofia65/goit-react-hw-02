import { useState, useEffect } from 'react'
import './App.css'
import Options from '../Options/Options'
import Description from '../Description/Description'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

export default function App() {
  const [count, setCount] = useState(() => {
    const savedInfo = window.localStorage.getItem('feedback');
    return savedInfo ? JSON.parse(savedInfo) : { good: 0, neutral: 0, bad: 0 };
  })

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(count));
  }, [count])

  const updateFeedback = feedbackType => {
    if (feedbackType !== 'reset') {
      setCount(prevCount => ({
        ...prevCount,
        [feedbackType]: prevCount[feedbackType] + 1
      }));
    } else {
      setCount({good: 0, neutral: 0, bad: 0});
    }
  };
  const totalFeedback = count.good + count.neutral + count.bad;
  const positive = Math.round((count.good / totalFeedback) * 100);

  return (
    <div className='app'>
      <Description></Description>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}></Options>
      {totalFeedback > 0 && 
      (<Feedback good={count.good} neutral={count.neutral} bad={count.bad} positive={positive} total={totalFeedback}></Feedback>)}
            {totalFeedback == 0 && 
      (<Notification></Notification>)}
    </div>
  )
  
}