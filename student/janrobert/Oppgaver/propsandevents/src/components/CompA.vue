<template>
<div>
    Dette er komponent A
    <button @click="nav">Til komponent B</button>
</div>
</template>

<script>
export default {
    name: 'CompA',
    methods: {
        nav : function() {
            this.$router.push('/');
        }
    }
}
</script>