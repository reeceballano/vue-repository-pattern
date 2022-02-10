<template>
    <div class="register">
        <section class="section">
            <div class="custom-container">
                <div class="md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Register</h2>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'Register',

    setup() {
        const userInfo = reactive([
            { id: 'field-email', type: 'email', label: 'Email', value: 'superuser@locahost.dev' },
            { id: 'field-password', type: 'password', label: 'Password', value: '1234' },
        ])

        return {
            userInfo
        }
    }

}
</script>

<style>

</style>