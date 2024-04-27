import { 
    COUNT_OF_CARD, ADD_ITEM_TO_CART, 
    DECREMENT, 
    COUNT_OF_CARD_DECREMENT, 
    DELETE_CARD, 
    DELETE_COUNT_OF_CARD,
    DELETE_ALL,
    DELET_ALL_COUNT
} from '@store/constants/actionTypes'

export const countOfCart = id => ({
    type: COUNT_OF_CARD,
    payload: id
})

export const countOfCartDecrement = id => ({
    type: COUNT_OF_CARD_DECREMENT,
    payload: id
})

export const addCardReducer = item => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const decrementCount = (item) => ({
    type: DECREMENT,
    payload: item
})

export const deleteCard = item => ({
    type: DELETE_CARD,
    payload: item
})

export const deleteCountOfCard = item => ({
    type: DELETE_COUNT_OF_CARD,
    payload: item
})

export const deleteALL = () => ({
    type: DELETE_ALL
})

export const deleteAllCount = () => ({
    type: DELET_ALL_COUNT
})