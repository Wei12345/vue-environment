<template>
	<section>
		<input type="text" v-model="message">
		<span>Message: {{ message }}</span>
	</section>
</template>

<script>
module.exports = {
	computed: {
		message: {
			get(){
				return this.$store.getters.message;
			},
			set(value){
				this.$store.dispatch('changeMessage', value);
			}
		}
	}
}
</script>

<style lang="sass" scoped>
</style>