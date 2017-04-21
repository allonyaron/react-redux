export default function courseReducer(state = [], action) {
	switch(action.type) {
		case 'CREATE_COURSE':
			return [...state, 
			Obejct.assign({}, action.course)]
		default: 
			return state;
	}
}