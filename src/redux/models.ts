// import initialState from "./initialState.json";
import initialState from './signIn.json';

export const config = {
	state: JSON.stringify(initialState), // initial state
	reducers: {
		setConfig(state: string, payload: string) {
			return payload;
		},
		resetConfig(state: string, payload: string) {
			return '';
		},
	},
};

export const error = {
	state: '', // initial state
	reducers: {
		setError(state: string, payload: string) {
			return payload;
		},
		resetError() {
			return '';
		},
	},
};

export const validationError = {
	state: [], // initial state
	reducers: {
		setValidationError(state: [], payload: []) {
			return payload;
		},
		resetValidationError() {
			return [];
		},
	},
};
