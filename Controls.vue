<template>
	<div>
        <div class="like">
            <button @click="like">
                Like
            </button>
            <div>
                {{ post.likes }}
            </div>
        </div>
		<Hashtag v-for="tag in post.hashtags" :key="tag" :hashtag="tag" />
	</div>
</template>

<script>
import { store } from './store'
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
    setup(props) {
        const like = () => {
            store.incrementLike(props.post);
        }

        return {
            like
        }
    }
};
</script>

<style scoped>
.like {
    display: flex;
    justify-content: center;
    margin: 10px;
}
</style>