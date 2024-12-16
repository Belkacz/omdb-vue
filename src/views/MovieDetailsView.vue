<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import MovieDetailsFull from '../components/MovieDetailsFull.vue'
import Search from '../components/Search.vue'
import { useRoute } from 'vue-router';
import { getMovieByID } from '../services/movieService';


const route = useRoute();
const movieId = route.params.id;


console.log(movieId)
const movieData = ref(null);
const isLoading = ref(true);
const errorMessage = ref('');


const fetchMovieData = async () => {
    console.log("movieId " + movieId)
    try {
        isLoading.value = true;
        const data = await getMovieByID(movieId);
        movieData.value = data;
        console.log(data)
    } catch (error) {
        errorMessage.value = 'Error fetching movie details: ' + error;
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchMovieData();
});


</script>

<template>
    <main class="flex wrapper flex-col lg:flex-row movies-container">
        MovieDetalisView
        <MovieDetailsFull :movie="movieData"></MovieDetailsFull>
    </main>
</template>

<style scoped>
.movies {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: start;
}

.movies-container {
    min-height: 100vh;
    min-width: 100vw;
}
</style>
