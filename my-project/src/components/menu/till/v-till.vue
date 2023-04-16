<template>
    <div class="v-till">
        <div class="v-till-add">
            <h3 class="v-till-add__text">Заказы</h3>
            <div style="margin-top: 20px" class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Открыть кассу
                </button>
                <ul 
                    class="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton1"
                    >
                  <li v-for="(store, index) in STORAGES" :key="index"><RouterLink :to="store.name" class="dropdown-item" href="#">{{ store.name }}</RouterLink></li>
                </ul>
            </div>
            <!-- <RouterLink to="addTill" class="v-till-add__link"><button type="button" class="btn btn-secondary">Открыть кассу</button></RouterLink>     -->
        </div>
        <vTillTables v-for="store in STORAGES" :key="store.id"
        :storeName="store.name"/>
        <!-- <table class="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Время</th>
                <th scope="col">Покупатель</th>
                <th scope="col">Сумма</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in ORDERS" :key="order.id">
                <th scope="row">{{ order.id }}</th>
                <td>{{ order.data }}</td>
                <td>{{ order.buyer.name }} {{ order.buyer.lastName }}</td>
                <td>{{ order.totalSum }} </td>
              </tr>
            </tbody>
        </table> -->
        <!-- <div>{{ BUYERS[0].name }}</div> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTillTables from './v-till-tables.vue';

export default {
    name: 'v-till',
    components: {
        vTillTables
    },
    computed: {
        ...mapGetters([
            'STORAGES',
            'ORDERS',
            //'BUYERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_ORDERS_FROM_API',
            //'GET_BUYERS_FROM_API'
        ]),
    },
    mounted() {
        this.GET_ORDERS_FROM_API()
        //this.GET_BUYERS_FROM_API()
    }
}
</script>

<style lang="scss" scoped>
.v-till {
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