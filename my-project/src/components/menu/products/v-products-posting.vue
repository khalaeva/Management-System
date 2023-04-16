<template>
    <div class="v-products">
        <div class="v-products-add">
            <h3 class="v-products-add__text">Оприходования</h3>
            <div style="margin-top: 20px" class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Создать
                </button>
                <ul 
                    class="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton1"
                    >
                  <li v-for="(store, index) in STORAGES" :key="index"><RouterLink :to="store.name" class="dropdown-item" append>{{ store.name }}</RouterLink></li>
                </ul>
            </div>
            <!-- <RouterLink to="productPostingForm" class="v-products-add__link"><button type="button" class="btn btn-secondary">Создать</button></RouterLink>     -->
        </div>
        <div class="v-products_table">
            <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Код</th>
                    <th scope="col">Время</th>
                    <th scope="col">На склад</th>
                    <th scope="col">Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr v-for="product in PRODUCTS" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.unit }}</td>
                    <td>{{ product.purchasePrice }}</td>
                    <td>{{ product.sellingPrice }}</td>
                    <td>{{ product.storageName }}</td>
                  </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-products-posting',
    methods: {
        ...mapActions([
            'GET_STORAGES_FROM_API'
        ])
    },
    computed: {
        ...mapGetters([
            'STORAGES'
        ])
    },
    mounted() {
        this.GET_STORAGES_FROM_API()
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