import { useNavigate } from 'react-router-dom'

import styles from './LinkBack.module.css'

const LinkBack = () => {
    const navigate = useNavigate()

    const handleGoBack = (event) => {
        event.preventDefault()
        navigate(-1)
    }

    return (
        <button className={styles.btn} type='button' onClick={(event) => handleGoBack(event)}>
            Вернуться назад
        </button>
    )
}


export default LinkBack;