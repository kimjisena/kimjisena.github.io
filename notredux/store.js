// a simple redux store implementation
export class State {
    constructor(state) {
        this.state = state;
    }
}

export class Store {
    constructor (root) {
        this.state = root();
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
        return this.state.state;
    }
}