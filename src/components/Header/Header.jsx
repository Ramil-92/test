import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import logo from '../../assets/Header/PizzaLogo.svg'
import cart from '../../assets/Header/iconfinder_shopping-cart_2561279 1.svg'

import styles from './Header.module.css'

const Header = () => {
    const location = useLocation().pathname

    const storeData = useSelector(state => state.cartReducer)


    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
            <NavLink className={styles.logo__link} to="/" exact="true">
                <img src={logo} alt="logo" />
            </NavLink>
            <div className={styles.header__inf}>
                <h2 className={styles.header__title}>React Pizza</h2>
                <p className={styles.header__desc}> самая вкусная пицца во вселенной</p>
            </div>
        </div>

        {
            location == '/' && 
            <NavLink className={styles.header__cart} to='/cart'>
                <span className={styles.sum}>{storeData.totalPrice} ₽</span>
                <span className={styles.line}></span> 
                <span className={styles.count}>
                    <img src={cart} alt="cart" />
                    {storeData.totalCount}
                </span>
            </NavLink>
                
        }
        </div>
    )
}

export default Header;