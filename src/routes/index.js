import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: require('../views/Index.vue'),
		children: [
			{
				path: 'message',
				component: require('../components/Message.vue')
			},
			{
				path: '',
				component: require('../components/Content.vue')
			}
		]
	},
	{
		path: '*',
		component: require('../views/404.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;