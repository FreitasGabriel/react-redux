const INITIAL_STATE = {
    loading: false,
    data: [],
};

export default function favorite(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_FAVORITE_REQUEST':
            return {...state, loading: true}
        case 'ADD_FAVORITE_SUCCESS':
            return {...state, loading: false, error: null, data: [...state.data, action.payload.data]};
        case 'ADD_FAVORITE_FAILURE':
            return {...state, loading: false, error: action.payload.error};
            
        default:
            return state;
    }
}