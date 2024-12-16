<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { ref, onMounted, watch } from 'vue'
import { fetchMovies } from './services/movieService'; // Import serwisu

const APIKEY = "5abb4eb6";
const searchPhrase = ref(''); // Początkowe zapytanie do API
const movieData = ref(null); // Przechowywanie danych z API
const isLoading = ref(false); // Flaga ładowania
const errorMessage = ref(''); // Przechowywanie błędów



watch(() => searchPhrase.value, (newData) => {
  if (searchPhrase.value.length > 0) {
    movieData.value = fetchMovies(newData);
  }
  // console.log('searchPhrase w App.vue:', newData);
});

const searchMovies = async (newSearchPhrase: string) => {
  if (searchPhrase.value.length > 0) {
    try {
      isLoading.value = true;
      errorMessage.value = '';
      const results = await fetchMovies(newSearchPhrase);
      movieData.value = results;
    } catch (error: any) {
      errorMessage.value = error.message || 'Unknown error occurred'
      console.log("my errorm = " +error)
    } finally {
      isLoading.value = false;
    }
  } else {
    movieData.value = null;
  }
};


const updateSearchPhrase = (newSearchPhrase: string) => {
  searchPhrase.value = newSearchPhrase;
  searchMovies(newSearchPhrase);


};
</script>

<template>
  <div class="column-display">
    <header>
      <div class="wrapper p-5">
        <NavBar></NavBar>
      </div>
    </header>

    <!-- Przekazanie movieData do RouterView -->
    <RouterView :movieData="movieData" :searchPhrase="searchPhrase" @update:searchPhrase="updateSearchPhrase" />
  </div>
</template>

<style scoped>
.column-display {
  display: flex;
  flex-direction: column;
}
</style>
