<template>
  <v-card>
    <v-navigation-drawer theme="dark" permanent>
      <div class="d-flex flex-row px-4 py-4">
        <div class="d-flex align-center justify-center">Contact</div>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-menu"></v-btn>
      </div>
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Contact Person List"></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Report"></v-list-item>
        <v-list-group prepend-icon="mdi-cog-outline" value="Setting" title="Setting">
          <!-- <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item> -->
          <!-- <v-list-item prepend-icon="mdi-account-box" title="Contact Person List"></v-list-item> -->
          <!-- <v-list-item prepend-icon="mdi-gavel" title="Report"></v-list-item> -->
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    }
  },
}
</script>
