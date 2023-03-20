<template>
    <div class="wrapper"> 
        <div class="red">1</div> 
        <div class="green">2</div> 
        <div class="blue">3</div> 
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .wrapper { 
        display: flex; 
        flex-wrap: wrap; 
        background-color: beige; 
        height: 100vh; 
    } 
    .wrapper > div { 
        padding: 10px; 
        width: 100%; 
        font-size: 4vw; 
        color: white; 
    } 
    .red { 
        background: orangered; 
    } 
    .green { 
        background: yellowgreen; 
    }
    .blue { 
        background: steelblue; 
    } 
    body { 
        margin: 0; 
    }
</style>