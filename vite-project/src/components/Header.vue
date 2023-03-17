<template>
 <header class="header">
    <div class="header-catalog">
        Catalog
    </div>
    <div class="header-links">
        <div class="header-links__user">
            User
        </div>
        <div class="header-links__cart">
            Cart
        </div>
    </div>
</header>
</template>

<script>

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 120px;
	background: #D8E3AB;
    position: fixed; 
    &-links {
        list-style: none;
        position: absolute;
        top: 10px;
        right: 100px;
    }
}


</style>