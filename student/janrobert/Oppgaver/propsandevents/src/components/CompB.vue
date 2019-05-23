<template>
<div>
    Dette er komponent B
    <button @click="nav">Til komponent A</button>
</div>
</template>

<script>
export default {
    name: 'CompB',
    methods: {
        nav: function() {
            this.$router.push('/b');
        }
    }
}
</script>