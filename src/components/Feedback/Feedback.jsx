import styles from './Feedback.module.scss'

export default function Feedback({ feedbacks, total, positive }) {
  return (
    <div className={styles.container}>
      <div className={styles.feedbacks}>
        {Object.entries(feedbacks).map(([name, value]) => (
          <p key={name}>
            {name}: {value}
          </p>
        ))}
      </div>
      <div className={styles.statistic}>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
      </div>
    </div>
  )
}
