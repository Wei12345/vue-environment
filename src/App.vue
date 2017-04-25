<template>
	<section class="main">
		<message class="message"></message>
	</section>
</template>
	
<script>
	import Message from './components/Message.vue';

	export default{
		components: {
			Message: Message,
		}
	}
</script>

<style lang="sass" scoped>
	.main{
		.message{
			text-align: center;
			margin-top: 35vh;
		}
	}
</style>