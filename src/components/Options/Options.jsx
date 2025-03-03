import styles from './Options.module.scss'

export default function Options({ feedbacks, total, updateFeedback, resetFeedback }) {
  return (
    <div className={styles.container}>
      <div className={styles.feedbacks}>
        {Object.entries(feedbacks).map(([name]) => (
          <button className={styles.button} key={name} onClick={() => updateFeedback(name)}>
            {name}
          </button>
        ))}
      </div>
      {!!total && (
        <button className={styles.button} onClick={() => resetFeedback()}>
          Reset
        </button>
      )}
    </div>
  )
}
