import { ADD_ITEM_TO_CART, DECREMENT, DELETE_CARD, DELETE_ALL } from '@store/constants/actionTypes'

const initialState = {
    totalCount: 0,
    totalPrice: 0,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const existingItem = state.cartItems.find(item => 
                item.id === action.payload.id &&
                item.types === action.payload.types &&
                item.sizes === action.payload.sizes
            )

            if (existingItem) {
                return {
                    ...state,
                    totalCount: state.totalCount + 1,
                    totalPrice: state.totalPrice + action.payload.price,
                    cartItems: state.cartItems.map(item =>
                        item.id === existingItem.id &&
                        item.types === existingItem.types &&
                        item.sizes === existingItem.sizes ? 
                            { ...item, count: item.count + 1 } : item
                    )
                }
            } else {
                return {
                    ...state,
                    totalCount: state.totalCount + 1,
                    totalPrice: state.totalPrice + action.payload.price,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        case DECREMENT:
            return {
                ...state,
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - action.payload.price,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id &&
                    item.types === action.payload.types &&
                    item.sizes === action.payload.sizes ? 
                        { ...item, count: item.count - 1 } : item
                )
            }
        case DELETE_CARD: 
            const updatedCartItems = state.cartItems.filter(item => 
                item.id !== action.payload.id || 
                item.types !== action.payload.types || 
                item.sizes !== action.payload.sizes
            );
            return {
                ...state,
                totalCount: state.totalCount - action.payload.count,
                totalPrice: state.totalPrice - (action.payload.price * action.payload.count),
                cartItems: updatedCartItems
            }
        case DELETE_ALL:
            return{
                ...state,
                totalCount: 0,
                totalPrice: 0,
                cartItems: []
            }
        default:
            return state
    }
}

export default cartReducer