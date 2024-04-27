import cn from 'classnames'
import { IoAlertCircle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

import styles from './Alert.module.css'

const Alert = ({ activeAlert, setActiveAlert }) => {
    return (
        <div className={cn(styles.alert, `${activeAlert ? styles.alert__show : styles.alert__hide}`)}>
            <div className={styles.alert__msg_block}>
                <span className={styles.alert__svg}> <IoAlertCircle /> </span>
                <span className={styles.alert__msg}>Warning: This is a warning alert!</span>
            </div>
            <span className={styles.close__svg} onClick={() => setActiveAlert(false)}> <RxCrossCircled /> </span>
        </div>
    )
}

export default Alert;