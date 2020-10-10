export const ITEM_CHANGE = 'ITEM_CHANGE'
export const SEARCH_ITEM = 'SEARCH_ITEM'
export const ADD_TO_CART = 'ADD_TO_CART'


export const item_change = (val) => {
    return {
        type: ITEM_CHANGE,
        value: val
    }
}

export const search_item = (key) => {
    return {
        type: SEARCH_ITEM,
        value: key
    }
}

export const add_to_cart = (items) => {
    return {
        type: ADD_TO_CART,
        value: items
    }
}