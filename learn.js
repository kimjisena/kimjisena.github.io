// a simple redux implementation

class State {
    constructor(state) {
        this.state = state;
    }
}

function incrementX (state, action) {
    if (action.type == 'incremented/X') {
        console.log('incrementing x...');
        return new State(
            {
                ...state.state, x: state.state.x + 1
            }
        );
    }

    return state;
}

function incrementY (state, action) {
    if (action.type == 'incremented/Y') {
        console.log('incrementing y...');
        return new State(
            {
                ...state.state, y: state.state.y + 1
            }
        );
    }

    return state;
}

function decrementXY (state, action) {
    if (action.type == 'decremented/XY') {
        console.log('derementing x and y...');
        return new State(
            {
                ...state.state, x: state.state.x - 1, y: state.state.y - 1
            }
        );
    }

    return state;
}

class Store {
    constructor () {
        this.state = new State({root: 'root', x: 1, y: 2});
        this.reducers = [];
    }

    addReducer (reducer) {
        this.reducers.push(reducer);
    }

    dispatch (action) {
        for (let reducer of Object.keys(this.reducers)) {
            let newState = this.reducers[reducer](this.state, action);
            this.state = newState;
        }
    }

    getState() {
        return this.state;
    }
}

let store = new Store();
store.addReducer(incrementX);
store.addReducer(incrementY);
store.addReducer(decrementXY);

// get initial state
console.log(store.getState());

// dispatch actions to the store
store.dispatch({type: 'incremented/X'});
console.log(store.getState());

store.dispatch({type: 'incremented/Y'});
console.log(store.getState());

store.dispatch({type: 'decremented/XY'});
console.log(store.getState());