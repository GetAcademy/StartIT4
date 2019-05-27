<template>
<div>
  <input v-if="this.$router.currentRoute.name == 'Messages'" @keydown.enter="AddChat" type="text" v-model="ChatBox"/>
  <button v-if="this.$router.currentRoute.name == 'Messages'" class="Send" @click="AddChat">Send</button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
