import { dataCard } from '@data/data'
import { COUNT_OF_CARD, COUNT_OF_CARD_DECREMENT, DELETE_COUNT_OF_CARD, DELET_ALL_COUNT } from '@store/constants/actionTypes'

const initialState = dataCard

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_OF_CARD:
            return state.map(item => {
                if(item.id == action.payload){
                    return {
                            ...item, count: item.count+1
                        }
                }else{
                    return item
                }
            })
        case COUNT_OF_CARD_DECREMENT: 
            return state.map(item => {
                if(item.id == action.payload){
                    return {
                            ...item, count: item.count-1
                        }
                }else{
                    return item
                }
            })
        case DELETE_COUNT_OF_CARD:
            return state.map(item => {
                if(item.id == action.payload.id){
                    return {
                            ...item, count: item.count - action.payload.count
                        }
                }else{
                    return item
                }
            })
        case DELET_ALL_COUNT:
            return dataCard
        default:
            return state
    }
}

export default countReducer