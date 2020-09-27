import { reactive } from 'vue';

class Store {
    constructor() {
        this.state = reactive({
            posts: [
                {
                    id: 1,
                    title: 'My Post',
                    content: 'This is a post'
                }
            ]
        })
    }
}

export const store = new Store();