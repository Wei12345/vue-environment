import type from './mutation-type.js';

export default{
	changeMessage({ commit }, message){
		commit(type.RECEIVE_MESSAGE, message);
	}
}