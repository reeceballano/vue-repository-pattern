<template>
    <div class="user">
        <h2>User Info:</h2>
        {{ user }}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

export default {
    name: 'User',
    setup() {
        const router = useRoute();
        const store = useStore();
        
        onMounted(() => {
            console.log(router.params.id);
            store.dispatch('user/fetchUser', router.params.id);
        })

        const user = computed(() => {
            return store.getters['user/getUser'];
        })

        return {
            user
        }
    }
}
</script>

<style>

</style>