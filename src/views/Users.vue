<template>
    <div class="users">
        <h2>Users</h2>
        {{ users }}
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
    setup() {
        const store = useStore();        

        const users = computed(() => {
            return store.getters['user/getUsers'];
        })

        onMounted(() => {
            store.dispatch('user/fetchUsers');
        })

        return {
            users,
        }
    },
}
</script>
