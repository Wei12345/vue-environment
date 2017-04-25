import type from './mutation-type.js';

export default{
	[type.RECEIVE_MESSAGE](state, message){
		state.message = message;
	}
}