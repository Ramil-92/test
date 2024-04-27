import PropTypes from 'prop-types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames'

import Alert from '@components/Alert';
import { countOfCart, addCardReducer } from '@store/actions'

import styles from './Card.module.css'

const Card = ({
    id,
    img,
    name,
    size,
    type,
    price,
    count,
    addToCart
}) => {
    const dispatch = useDispatch()
    const [categoryTypes, setCategoryTypes] = useState('')
    const [itemSize, setItemsize] = useState('')
    const [activeAlert, setActiveAlert] = useState(false)
    const [choosenSizePrice, setChoosenSizePrice] = useState(0)
    const [ableClick, setAbleClick] = useState(false)

    const setPrice = (itemSize) => {
        setItemsize(itemSize)
        let index = size.findIndex((sizeItem) => sizeItem === itemSize)
        setChoosenSizePrice(index)
    }

    const addToCartReducer = () => {
        if(!categoryTypes|| !itemSize){
            setTimeout(() => {
                setActiveAlert(true)
                setAbleClick(true)
                setTimeout(() => {
                    setActiveAlert(false)
                    setAbleClick(false)
                }, 3000)
            }, 0)
            return
        }
        addToCart(id)
        dispatch(countOfCart(id))
        dispatch(addCardReducer({
            id,
            name,
            img,
            sizes: itemSize,
            types: categoryTypes,
            price: price[choosenSizePrice],
            count: count+1
        }))
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__images_block}>
                <img className={styles.card__image} src={img} alt={name} />
            </div>

            <h5 className={styles.card__name}>{name}</h5>

            <div className={styles.card__main_inf}>
                <div className={styles.card__types_block}>
                    {
                        type.map(cardType => (
                            <button onClick={() => setCategoryTypes(cardType)} type='button' key={cardType} className={cn(styles.card__type, `${categoryTypes == cardType ? styles.card__type_active : undefined}` )}>
                                {cardType}
                            </button>
                        ))
                    }
                </div>

                <div className={styles.card__sizes_block}>
                    {
                        size.map(cardSize => (
                            <button onClick={() => setPrice(cardSize)} type='button' key={cardSize} className={cn(styles.card__size, `${itemSize == cardSize ? styles.card__size_active : undefined}` )}>
                                {cardSize}
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className={styles.card__add_to_cart_block}>
                <p className={styles.card__price}>от {price[choosenSizePrice]} ₽</p>
                <button disabled={ableClick} onClick={() => addToCartReducer()} type='button' className={styles.card__add}>
                    <svg className={styles.card__add_svg} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                    </svg>
                    Добавить
                    {
                        count !== 0 && <span className={styles.count}>{count}</span>
                    }
                </button>
            </div>

            <Alert 
                activeAlert={activeAlert}
                setActiveAlert={setActiveAlert}
            />
        </div>

    )
}

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.array,
    type: PropTypes.array,
    price: PropTypes.array,
    count: PropTypes.number,
    addToCart: PropTypes.func
}

export default Card;