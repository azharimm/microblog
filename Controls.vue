<template>
	<div>
		<button>
			{{ post.likes }}
		</button>
		<Hashtag v-for="tag in post.hashtags" :key="tag" :hashtag="tag" @setHashtag="setHashtag" />
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
	setup(props, ctx) {
        const setHashtag = (tag) => {
            console.log(tag);
            ctx.emit('setHashtag', tag);
        }

        return {
            setHashtag
        }
	},
};
</script>

<style scoped>
</style>