<template>
    <div class="v-products">
        <div class="v-products-add">
            <h3 class="v-products-add__text">Покупатели</h3>
            <RouterLink to="addBuyers" class="v-products-add__link"><button type="button" class="btn btn-secondary">Добавить покупателя</button></RouterLink>    
        </div>
        <div class="v-products_table">
            <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">№</th>
                    <th scope="col">Имя Фамилия</th>
                    <th scope="col">Номер</th>
                    <th scope="col">email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="buyer in BUYERS" :key="buyer.id">
                    <th scope="row">{{ buyer.id }}</th>
                    <td>{{ buyer.name }} {{ buyer.lastName }}</td>
                    <td>{{ buyer.phone }}</td>
                    <td>{{ buyer.email }}</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-buyers',
    computed: {
        ...mapGetters([
            'BUYERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_BUYERS_FROM_API'
        ])
    },
    mounted() {
        this.GET_BUYERS_FROM_API()
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