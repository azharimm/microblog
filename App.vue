<template>
    <div>
        <input type="text" :value="currentHashtag" @input="setHashtag">
        <Card v-for="post in filteredPost" :key="post">
            <template v-slot:title>
				{{post.title}}
			</template>
			<template v-slot:content>
	            {{ post.content }}
			</template>
			<template v-slot:description>
                <Controls :post="post"/>
			</template>
        </Card>
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
        const filteredPost = computed(() => {
            if(!store.state.currentHashtag) {
                return store.state.posts;
            }
            return store.state.posts.filter(post => post.hashtags.includes(store.state.currentHashtag))
        });

        const setHashtag = (event) => {
            store.setHashtag(event.target.value);
        }

        return {
            filteredPost,
            currentHashtag: computed(() => store.state.currentHashtag),
            setHashtag
        }
    }
}
</script>