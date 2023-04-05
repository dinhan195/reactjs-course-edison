import styles from './styles.module.css'

export function FromLogin() {
  return (
      <form className={styles.formContainer}>
    
      <h2 className={styles.formTitle}>Login</h2>
      <div className={styles.formField}>
        <label htmlFor="" className={styles.formLabel}>Nhập email</label>
        <input className={styles.formInput} type="text" />
      </div>
      <div className={styles.formField}>
        <label htmlFor="" className={styles.formLabel}>Nhập password</label>
        <input className={styles.formInput} type="text" />
        </div>
        <input type="checkbox" name="" id="" />
        <span>I read and accept the privacy policy</span>
        <button className={styles.buttonSubmit}>Submit</button>
      
        </form>
    
  )
}