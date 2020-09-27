<template>
    <div>
        <div v-for="post in store.state.posts" :key="post">
            {{ post.title }}
        </div>
    </div>
</template>

<script>
import { store } from './store'
export default {
    setup() {
        return {
            store
        }
    }
}
</script>