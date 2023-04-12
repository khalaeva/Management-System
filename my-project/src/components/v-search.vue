<template>
    <section class="dropdown-wrapper">
        <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Найти товар..." 
            autocomplete="off"
            style="width: 90%"
            class="form-control">
        <div v-if="searchQuery" class="options">
            <ul class="list-group" style="position: absolute; width: 40%">
                <li 
                    class="list-group-item" 
                    @click="selectItem(prod)"
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
            isVisible: false
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
            this.isVisible = false
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss" scoped>
    
</style>