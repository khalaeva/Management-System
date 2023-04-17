<template>
    <RouterView>
    <div class="v-products">
        <div class="v-products-add">
            <h3 class="v-products-add__text">Товары</h3>
            <RouterLink to="addProduct" class="v-products-add__link"><button type="button" class="btn btn-secondary">Добавить товар</button></RouterLink>    
            <RouterLink to="productPosting" class="v-products-add__link"><button type="button" class="btn btn-secondary">Оприходование</button></RouterLink>    
        </div>
        <div class="v-products_table">
            <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Код</th>
                    <th scope="col">Наименование товара</th>
                    <th scope="col">Описание</th>
                    <th scope="col">Единица измерения</th>
                    <th scope="col">Закупочная цена</th>
                    <th scope="col">Цена продажи</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in PRODUCTS" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.unit }}</td>
                    <td>{{ product.purchasePrice }}</td>
                    <td>{{ product.sellingPrice }}</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
    </RouterView>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-products',
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ])
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss" scoped>
.v-products {
    width: 90%;
    margin: auto;
    &-add {
        display: flex;
        &__text {
            margin: 20px;
        }
        &__link {
            margin: 20px;
        }
    }    
}
</style>