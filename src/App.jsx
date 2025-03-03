import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

import { useEffect, useState } from 'react'

import './App.module.scss'
import styles from './App.module.scss'

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const keys = window.localStorage.getItem('keys')

    return keys ? JSON.parse(keys) : { good: 0, neutral: 0, bad: 0 }
  })

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100)

  const updateFeedback = (type) => {
    setFeedback((obj) => ({
      ...obj,
      [type]: (obj[type] += 1),
    }))
  }

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  useEffect(() => {
    window.localStorage.setItem('keys', JSON.stringify(feedback))
  }, [feedback])

  return (
    <div className={styles.container}>
      <Description
        title={'Sip Happens Café'}
        caption={'Please leave your feedback about our service by selecting one of the options below.'}
      />
      <Options
        feedbacks={feedback}
        total={totalFeedback}
        setFeedback={setFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback feedbacks={feedback} total={totalFeedback} positive={positivePercentage} />
      ) : (
        <Notification text={'No feedback yet'} />
      )}
    </div>
  )
}
