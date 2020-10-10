import * as actionTypes from '../actions/actions'



const initialState = {
    cart_items: []
}

const cart_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let newArr = [];

            newArr = state.cart_items.map(item => item.item);
            let index = newArr.indexOf(action.value.item);
            if (index !== -1) {
                let tempArr = [...state.cart_items];
                tempArr[index].amount += action.value.amount;
                tempArr[index].price += action.value.price;
                return { ...state, cart_items: tempArr }
            }

            return { ...state, cart_items: state.cart_items.concat(action.value) };
        default:
            return state;
    }
};

export default cart_reducer;