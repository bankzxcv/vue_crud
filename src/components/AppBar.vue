<template>
  <v-app-bar :elevation="1">
    <template v-slot:append>
      <div class="">
        <v-text-field label="Label" variant="outlined" class="w-auto pa-10"></v-text-field>
      </div>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<style>
</style>
