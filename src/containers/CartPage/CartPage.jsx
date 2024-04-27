import { useSelector, useDispatch } from 'react-redux'

import Card from '@components/CartPage/Card'
import LinkBack from '@components/CartPage/LinkBack'
import shopSvg from '@assets/CartPage/shop.svg'
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteALL, deleteAllCount } from '@store/actions'

import styles from './CartPage.module.css'

const CartPage = () => {
    const dispatch = useDispatch()
    const storeData = useSelector(state => state.cartReducer)

    const deleteCards = () => {
        dispatch(deleteALL())
        dispatch(deleteAllCount())
    }

    return (
        <div className={styles.container}>
            <div className={styles.title__block}>
                <h1 className={styles.title}>
                    <img src={shopSvg} alt="shop" />
                    Корзина
                </h1>
                <button onClick={() => deleteCards()} className={styles.button__clean}>
                    <RiDeleteBinLine />
                    Очистить корзину
                </button>
            </div>
            
            <div className={styles.cards__wrapper}>
                {
                    storeData.cartItems.length !== 0 ?
                        storeData.cartItems.map((item, index) => (
                            <Card 
                                key={index}
                                id={item.id}
                                count={item.count}
                                img={item.img}
                                price={item.price}
                                size={item.sizes}
                                type={item.types}
                                name={item.name}
                            />
                        ))
                    :
                        <>Пусто</>
                }

            </div>

            <h3 className={styles.total__count}> <span>Всего пицц {storeData.totalCount}</span> <span>Сумма заказа: {storeData.totalPrice}</span></h3>

            <LinkBack />
        </div>
    )
}

export default CartPage;