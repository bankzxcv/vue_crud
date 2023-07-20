<template>
  <v-app>
    <header>
      <AppBar />
    </header>
    <v-main>
      <!-- <HelloWorld /> -->
      <Drawer></Drawer>
      <Title></Title>
      <Filter></Filter>
      <Table></Table>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script setup>
// import HelloWorld from "@/components/HelloWorld.vue"
import AppBar from "@/components/AppBar.vue"
import Footer from "@/components/Footer.vue"
import Table from "@/components/Table.vue"
import Drawer from "@/components/Navi.vue"
import Title from "@/components/Title.vue"
import Filter from "@/components/Filter.vue"
</script>

<style scoped></style>
