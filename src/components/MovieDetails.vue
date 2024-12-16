<script setup>
import { ref, watch } from 'vue'
import '../assets/tailwind.css';
import { useRouter } from 'vue-router';

const props = defineProps({
    movieSelected: {
        type: Object,
        required: false,
    },
});

const router = useRouter();

// watch(() => props.movieSelected, (newData) => {
//     console.log('SelectedMovie in Movie Details', newData);
// });

const goToMovieDetails = (id) => {
  router.push(`/movie-details/${id}`);
}

</script>

<template>
    <div class="flex flex-col">
        <h3>Movie Details</h3>
        <div v-if="movieSelected">
            <div
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="movieSelected.Poster" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                            movieSelected.Title }}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Type: {{ movieSelected.Type }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {{ movieSelected.Year }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">IMDB id : {{ movieSelected.imdbID }}
                    </p>
                    <a href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="goToMovieDetails(movieSelected.imdbID)">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.searchList {
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
}
</style>
