<script setup>
import { ref, watch } from 'vue'
import '../assets/tailwind.css';
import { useRouter } from 'vue-router';

const props = defineProps({
    movie: {
        type: Object,
        required: false,
    },
});

const router = useRouter();

const goToSearch = () => {
  router.push(`/`);
}

</script>

<template>
    <div class="flex flex-col">
        <h3>Movie Details</h3>
        <div v-if="movie">
            <a href="#" @click.prevent="goToSearch"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Back to search
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="movie.Poster" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                            movie.Title }}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Plot: {{ movie.Plot }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Actors: {{ movie.Actors }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Genre : {{ movie.Genre }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Released : {{ movie.Released }}</p>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>

</style>
