import 'normalize.css';
import Vue from 'vue';
import store from './store/index.js';
import router from './routes/index.js';
import App from './App.vue';

new Vue({
	el: '#app',
	store,
	router,
	components: { 
		App: App 
	}
});