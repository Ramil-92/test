import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import dropdown from '../../../assets/MainPage/dropdown.svg'

import styles from './Sort.module.css'



const Sort = ({
    options,
    onClickDropdown,
    setActiveDropDown,
    currentSort,
    activeDropdown,
    choosenOption
}) => {

    return (
        <div className={styles.sort}>
            <button 
                type='button' 
                className={styles.sort__button} 
                onClick={() => setActiveDropDown(!activeDropdown)}
            >
                <img src={dropdown} alt="dropdown" className={ activeDropdown ? styles.active : undefined} />
                <h3 className={styles.sort__title}>
                    Сортировка по:
                    <span className={styles.sort__title_choosen}>{currentSort}</span>
                </h3> 
            </button>
            <div className={cn(styles.sort__options, activeDropdown ? styles.sort__options_active : styles.sort__options_hide)}>
                {
                    options.map(({value, optionId}, id) => (
                        <div 
                            className={cn(styles.option, choosenOption == id ? styles.option__active : undefined)} 
                            key={optionId} 
                            onClick={() => onClickDropdown(value, optionId)}
                        >
                            {value}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

Sort.propTypes = {
    options: PropTypes.array,
    onClickDropdown: PropTypes.func,
    setActiveDropDown: PropTypes.func,
    currentSort: PropTypes.string,
    activeDropdown: PropTypes.bool,
    choosenOption: PropTypes.number
}

export default Sort;