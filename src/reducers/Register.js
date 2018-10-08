const initState = {
    register: {},
    isError: null,
    isLoading: false,
    error: null
};

const registerReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DO_REGISTER': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'DO_REGISTER_FAIL': {
            return {
                ...state,
                isLoading: false,
                error: action.data,
                isError: true
            }
        }
        case 'DO_REGISTER_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                register: action.data,
                isError: false
            }
        }
        default:
            return {
                ...state
            }
    }
};

export default registerReducer;