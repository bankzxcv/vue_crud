<template>
  <v-app-bar app :elevation="2">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <div class="ml-4 d-flex flex-row">
      <div class="d-flex justify-center align-center">
        <div>IMAGE</div>
      </div>
      <div class="mx-2 d-flex flex-column align-center">
        <v-toolbar-title>Company Bar</v-toolbar-title>
        <div>Slogan of the Company</div>
      </div>
    </div>

    <v-spacer></v-spacer>
    <div class="d-flex flex-row align-center justify-center my-0 mx-0 py-0 px-0">
      <!-- <v-text-field variant="outlined"  append-icon="mdi-magnify" solo></v-text-field> -->
      <v-text-field
        hide-details
        placeholder="Search"
        variant="solo"
        filled
        rounded
        dense
        single-line
        prepend-inner-icon="mdi-magnify"
        class="mx-0 my-0 py-0 px-0"
      >
      </v-text-field>

      <!-- <v-btn icon="mdi-magnify"></v-btn> -->
      <v-btn icon="mdi-chat-outline"></v-btn>
      <v-btn icon="mdi-bell-circle-outline"></v-btn>
      <v-btn icon="mdi-help-circle-outline"></v-btn>
      <v-btn icon="mdi-list-box"></v-btn>
      <v-btn icon="mdi-account"></v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.v-text-field {
  margin-top: 1.5rem;
  width: 300px;
  border-radius: 100%;
  /* max-height: 0.5px; */
}
</style>
