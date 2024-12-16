<script setup>
import { ref, watch } from 'vue'
import '../assets/tailwind.css';
import SearchResult from './SearchResult.vue';

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

const inputSearch = ref(props.searchPhrase || '');


const updateSearchPhrase = (newValue) => {
    emit('searchPhrase', newValue);
};

const handleMovieSelection = (movie) => {
    // console.log('handleMovieSelection w Search.vue:', movie);
    // selectedMovie.value = movie;
    emit('movieSelected', movie);
};

watch(() => inputSearch.value, (newValue) => {
    updateSearchPhrase(newValue);
});


</script>

<template>
    <form class="flex items-center max-w-sm mx-auto w-80">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="text" id="simple-search" v-model="inputSearch"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..." required />
        </div>
    </form>
    <SearchResult :movieData="movieData" @movieSelected="handleMovieSelection"></SearchResult>
</template>
