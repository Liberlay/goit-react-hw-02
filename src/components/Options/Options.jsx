import styles from './Options.module.scss'

export default function Options({ feedbacks, setFeedback, total, hasReset }) {
  return (
    <div className={styles.container}>
      <div className={styles.feedbacks}>
        {Object.entries(feedbacks).map(([name, value]) => (
          <button
            className={styles.button}
            key={name}
            onClick={() => setFeedback((object) => ({ ...object, [name]: value + 1 }))}
          >
            {name}
          </button>
        ))}
      </div>
      {hasReset && !!total && (
        <button className={styles.button} onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>
          Reset
        </button>
      )}
    </div>
  )
}
