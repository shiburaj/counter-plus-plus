import {createStore} from 'redux';

const initialState = {
    counter : {
        basic: 0,
        smart: 0,
        dangerous: 0
    },
    counterType: 'basic'
};


function reducer(state = initialState, action){

    if(action.type === 'counting'){
        return {...state, 
                    counter: {...state.counter, [state.counterType]: state.counter[state.counterType]+action.payload.amount}
                };
    } else if(action.type === 'reset'){
        return {...state, 
            counter: {
                basic: 0,
                smart: 0,
                dangerous: 0
            }
        };
    } else if(action.type === 'selectCounter'){
        return {...state, 
            counterType: action.payload.value
        };
    }

    return state;
}





const store = createStore(reducer);

export default store;