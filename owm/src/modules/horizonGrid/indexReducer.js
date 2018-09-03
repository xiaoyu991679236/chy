const defaultState = {
};
const indexReducer = (state = defaultState, action = {}) => {
    const count = state.count;
    switch (action.type) {
    case "INCREASE":
        console.log(action.time);
        return Object.assign({}, state, {
        count: count + 1
        });
    default:
        return state;
    }
};
export default indexReducer;