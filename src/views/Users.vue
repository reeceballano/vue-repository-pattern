<template>
    <section class="users">
        <div class="custom-container">
            <h2>Users</h2>
            
            <div class="user-list grid grid-cols-3 gap-4">

                <User v-for="user in users" :key="user.id" :user="user" />
            </div>
        </div>
    </section>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import User from '@/components/User';

export default {
    name: 'Users',
    components: {
        User
    },

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
