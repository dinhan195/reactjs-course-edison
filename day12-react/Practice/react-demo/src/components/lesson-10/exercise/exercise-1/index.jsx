import styles from './styles.module.css'

export default function LayoutModule() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>Left Side</div>
      <div className={styles.rightSide}>Fight Side</div>
    </div>
  )
}