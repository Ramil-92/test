import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { 
    countOfCart, 
    addCardReducer, 
    decrementCount, 
    countOfCartDecrement, 
    deleteCard, 
    deleteCountOfCard 
} from '@store/actions'
import deleteSvg from '@assets/CartPage/delete.svg'

import styles from './Card.module.css'

const Card = ({
    id,
    name,
    img,
    count,
    type,
    size,
    price,
}) => {
    const dispatch = useDispatch()

    const setCountToCardDecrement = (id) => {
        if(count <= 1){
            return
        }
        dispatch(decrementCount({
            id,
            types: type,
            sizes: size,
            price
        }))
        dispatch(countOfCartDecrement(id))
    }

    const setCountToCardIncrement = (id) => {
        dispatch(addCardReducer({
            id,
            types: type,
            sizes: size,
            price
        }))
        dispatch(countOfCart(id))
    }

    const deleteCardFromCart = (id, type, size, price, count) => {
        dispatch(deleteCard({
            id,
            types: type,
            sizes: size,
            price,
            count
        }))
        dispatch(deleteCountOfCard({
            id,
            count
        }))
    }

    return (
        <div className={styles.card__block}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className={styles.card__img_block}>
                    <img className={styles.card__img} src={img} alt={name} />
                </div>

                <div className={styles.card__desc}>
                    <h3 className={styles.card__title}> {name}</h3>
                    <p className={styles.card__types}> {type} тесто, {size} </p>
                </div>
            </div>

            <div className={styles.card__control}>
                <button className={styles.decrement__button} onClick={() => setCountToCardDecrement(id)}>-</button>
                <p className={styles.card__count}> {count} </p>
                <button className={styles.increment__button} onClick={() => setCountToCardIncrement(id)}>+</button>
            </div>

            <p className={styles.card__price}> {price*count} ₽ </p>

            <button onClick={() => deleteCardFromCart(id, type, size, price, count)} className={styles.card__delete}>
                <img src={deleteSvg} alt="delete" />
            </button>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    count: PropTypes.number,
    type: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.number
}

export default Card;