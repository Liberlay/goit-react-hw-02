import styles from './Description.module.scss'

export default function Description({ title, caption }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.caption}>{caption}</h2>
    </div>
  )
}
