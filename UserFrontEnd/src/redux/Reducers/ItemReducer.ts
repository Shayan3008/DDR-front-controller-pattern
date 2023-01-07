
import { item } from '../../models/item'
import { ITEM_ACTIONS } from '../Actions/itemAction'

interface initialState {
    item: item[],
}

const init: initialState = {
    item: [],
}

const ItemReducer = (state: initialState = init
    , action: any) => {
    switch (action.type) {
        case ITEM_ACTIONS.GET:
            return action.item
        default:
            return state
    }
}

export default ItemReducer