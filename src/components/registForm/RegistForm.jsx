import  { useState } from 'react'
import styles from './RegistForm.module.css'

function RegistForm() {
    const [check,setCheck] = useState(false)
    
    console.log(check);

  return (
    <div>
        <form action="" className={styles.formD}>
            <input className={styles.inp} disabled={check} type="text" name="name" placeholder='name' />
            <input className={styles.inp} disabled={check} type="text" name="surname" placeholder='surname' />
            <label className={styles.lab} htmlFor="check">
                Согласен(-сна) с условиями
                <input type="checkbox" id='check' checked={check} onChange={()=>{setCheck(!check)}}  name="condition" placeholder='согласен' />
            </label>
            <button  disabled={!check}>Send</button>
        </form>
    </div>
  )
}

export default RegistForm