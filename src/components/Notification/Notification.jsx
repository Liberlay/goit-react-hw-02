import styles from './Notification.module.scss'

export default function Notification({ text }) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  )
}
