<template>
	<div>
		<button>
			{{ post.likes }}
		</button>
		<Hashtag v-for="tag in post.hashtags" :key="tag" :hashtag="tag" />
	</div>
</template>

<script>
import Hashtag from "./Hashtag.vue";
export default {
	props: {
		post: {
			type: Object,
		},
	},
	components: {
		Hashtag,
	},
};
</script>

<style scoped>
</style>