import { item } from "../../models/item"

const ITEM_ACTIONS = {
    GET: 'GET_ITEMS',
}

const getItems = (item: item[]) => {
    // console.log(category)
    return {
        type: ITEM_ACTIONS.GET,
        item: item
    }
}


export { getItems, ITEM_ACTIONS }