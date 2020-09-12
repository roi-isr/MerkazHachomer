const initialState = {
    searchList: "הכל"
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ITEM_CHANGE') {
        return {
            searchList: action.value
        }
    }
    return state;
};

export default reducer;