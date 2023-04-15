<template>
    <section class="dropdown-wrapper">
        <input 
            @click="isVisible = true"
            v-model="searchQuery" 
            type="text" 
            placeholder="Найти товар..." 
            autocomplete="off"
            style="width: 90%"
            class="form-control">
        <div v-if="isVisible" class="options">
            <ul class="list-group" style="position: absolute; width: 40%">
                <li 
                    class="list-group-item" 
                    @click="selectItem(prod); showCart(); isVisible = false;"
                    v-for="(prod, index) in filteredList"
                    :key="index"
                    >{{ prod.name }}</li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-search',
    data() {
        return {
            searchQuery: '',
            selectedItem: null,
            isVisible: false,
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),
        filteredList() {
            const query = this.searchQuery.toLocaleLowerCase();
            if (this.searchQuery === '') {
                return this.PRODUCTS;
            }
            return this.PRODUCTS.filter((prod) => {
                return Object.values(prod).some((word) =>
                    String(word).toLocaleLowerCase().includes(query)
                );
            })
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
        selectItem(prod){
            this.selectedItem = prod;
        },
        showCart() {
            this.$emit('showCart', this.selectedItem)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss" scoped>
.list-group-item {
    cursor: pointer;
    &:hover {
        background-color: lightgray;
    }
}
</style>