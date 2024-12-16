<script setup lang="ts">
import { ref, watch } from 'vue'
import MovieDetails from '../components/MovieDetails.vue'
import Search from '../components/Search.vue'

const props = defineProps({
    movieData: {
        type: Object,
        required: false,
    },
    searchPhrase: {
        type: String,
        required: false,
    }
});

const emit = defineEmits();

const movieSelected = ref(null);
const handleMovieSelection = (movie) => {
    movieSelected.value = movie;
    // console.log("Wybrany film:", movieSelected.value);
};

// Funkcja do aktualizacji searchPhrase
const updateSearchPhrase = (newSearchPhrase: string) => {
    // Przekazujemy zmienioną wartość do rodzica
    emit('update:searchPhrase', newSearchPhrase);
};

// Watch dla searchPhrase, aby reagować na zmiany
// watch(() => props.searchPhrase, (newData) => {
//     console.log('searchPhrase w MovieView.vue:', newData);
// });
</script>

<template>
    <main class="flex wrapper flex-col lg:flex-row movies-container">
        <div class="movies p-5">
            <Search :movieData="movieData" :searchPhrase="searchPhrase" @searchPhrase="updateSearchPhrase"
                @movieSelected="handleMovieSelection" />
        </div>
        <MovieDetails class="p-5" :movieSelected="movieSelected"></MovieDetails>
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
