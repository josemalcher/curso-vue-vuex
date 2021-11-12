<template>
  <div id="app">
    <p>User: {{$store.state.user}}</p>
    <User/>
    <Curso/>
  </div>
</template>

<script>

import User from "@/components/User";
import Curso from "@/components/Curso";

export default {
  name: 'App',
  components: {
    Curso,
    User

  }
}
</script>

<style>

</style>
