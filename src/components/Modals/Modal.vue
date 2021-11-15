<template>
    <div class="modal-container">
        <div class="modal">
            <h2 class="text-2xl">Modal Title</h2>

            <div class="modal-content">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Suscipit minima praesentium natus non, quas dolores vitae magnam? 
                    Earum dolorum perferendis officia totam commodi. 
                    Beatae, incidunt molestias eius dolor reprehenderit placeat?
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style scoped>
    .modal-container {
        @apply fixed w-screen h-screen top-0 left-0 bg-gray-400 opacity-80;
    }

</style>