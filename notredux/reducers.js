// my reducer functions to handle navigation
import { State, Store } from "./store";

export function root () {
    return new State(
        {
            about: true,
            projects: false,
            blog: false,
            contact: false
        }
    );
}

export function about(state, action) {
    if (action.type === 'nav/about') {
        return new State({
            ...state.state, 
            about: true,
            projects: false,
            blog: false,
            contact: false
            }
        );
    }

    return state
}

export function projects(state, action) {
    if (action.type === 'nav/projects') {
        return new State({
            ...state.state,
            about: false,
            projects: true,
            blog: false,
            contact: false
            }
        );
    }

    return state
}

export function blog(state, action) {
    if (action.type === 'nav/blog') {
        return new State({
            ...state.state,
            about: false,
            projects: false,
            blog: true,
            contact: false
            }
        );
    }

    return state
}

export function contact(state, action) {
    if (action.type === 'nav/contact') {
        return new State({
            ...state.state,
            about: false,
            projects: false,
            blog: false,
            contact: true
            }
        );
    }

    return state
}