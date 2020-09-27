<template>
    <div>
        <Card v-for="post in filteredPost" :key="post">
            <template v-slot:title>
				{{post.title}}
			</template>
			<template v-slot:content>
	            {{ post.content }}
			</template>
			<template v-slot:description>
                <Controls :post="post" @setHashtag="setHashtag" />
			</template>
        </Card>
        {{ currentHashtag }}
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { store } from './store'
import Card from './Card.vue'
import Controls from './Controls.vue'
export default {
    components: {
        Card,
        Controls
    },
    setup() {
        const currentHashtag = ref();
        const setHashtag = (tag) => {
            currentHashtag.value = tag;
        }

        const filteredPost = computed(() => {
            if(!currentHashtag.value) {
                return store.state.posts;
            }
            return store.state.posts.filter(post => post.hashtags.includes(currentHashtag.value))
        });

        return {
            filteredPost,
            setHashtag,
            currentHashtag
        }
    }
}
</script>