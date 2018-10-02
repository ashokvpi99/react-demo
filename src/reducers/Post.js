const initState = {
    posts: [],
    post: {},
    isError: false,
    isLoading: false,
    error: null
};

const postReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_ALL_POST': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_ALL_POST_FAIL': {
            return {
                ...state,
                isLoading: false,
                error: action.data
            }
        }
        case 'GET_ALL_POST_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                posts: action.data
            }
        }
        default:
            return {
                ...state
            }
    }
};

export default postReducer;