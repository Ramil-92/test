import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './Tabs.module.css'

const Tabs = ({ 
    categoryId, 
    category, 
    categoryActive, 
    onClickChange 
}) => {

    return (
        <>
            <li 
                className={cn(styles.tab, `${categoryId == categoryActive ? 
                              styles.tab__active : ''}`)} 
                onClick={() => onClickChange(categoryId)}
            >
                {category}
            </li>
        </>
    )
}

Tabs.propTypes = {
    categoryId: PropTypes.number,
    category: PropTypes.string,
    categoryActive: PropTypes.number,
    onClickChange: PropTypes.func,
}

export default Tabs;