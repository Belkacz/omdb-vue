<script setup>
import { ref, watch } from 'vue'
import '../assets/tailwind.css';

const props = defineProps({
    movieData: {
        type: Object,
        required: false,
    },
});

const emit = defineEmits();

const imgIconClass = {
    width: '35px',
    height: '35px',
}

const selectMovie = (movie) => {
    // console.log("klik: " + movie)
    emit('movieSelected', movie); // Wysyłanie wybranego filmu do komponentu rodzica
};

// watch(() => props.movieData, (newData) => {
//     console.log('movieData w SearchResult.vue:', newData);
// });

</script>

<template>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 w-80" aria-labelledby="dropdown-button">
        <li v-for="(movie, index) in props.movieData" :key="index" class="searchList" @click="selectMovie(movie)">
            <img :style="imgIconClass" :src="movie.Poster">
            <button type="button"
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
                    movie.Title }}</button>
        </li>
    </ul>
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
