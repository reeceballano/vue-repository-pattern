<template>
    <section class="suspense">
        <Suspense>
            <template #default>
                <SuspensePosts />
            </template>
            <template #fallback>
                <div>fetching posts...</div>
            </template>
        </Suspense>
            
    </section>
</template>

<script>
import SuspensePosts from '@/components/SuspensePosts';


export default {
    name: 'Suspense',
    components: {
        SuspensePosts
    },
    setup() {

        return {

        }
    }
}
</script>

<style>

</style>