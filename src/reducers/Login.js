const initState = {
    login: {},
    isError: null,
    isLoading: false,
    error: null
};

const loginReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DO_LOGIN': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'DO_LOGIN_FAIL': {
            return {
                ...state,
                isLoading: false,
                error: action.data,
                isError: true
            }
        }
        case 'DO_LOGIN_SUCCESS': {
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

export default loginReducer;