<template>
    <div class="v-storages">
        <div class="v-storages-add">
            <h3 class="v-storages-add__text">Склады</h3>
            <RouterLink to="addStorage" class="v-storages-add__link"><button type="button" class="btn btn-secondary">Добавить склад</button></RouterLink>    
        </div>
        <div class="v-storages_table">
            <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Код</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Комментарий к адресу</th>
                    <th scope="col">Комментарий</th>
                    <th scope="col">Индекс</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="storage in STORAGES" :key="storage.id">
                    <th scope="row">{{ storage.id }}</th>
                    <td>{{ storage.name }}</td>
                    <td>{{ storage.addres }}</td>
                    <td>{{ storage.commAdress }}</td>
                    <td>{{ storage.comment }}</td>
                    <td>{{ storage.index }}</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-storages',
    computed: {
        ...mapGetters([
            'STORAGES'
        ])
    },
    methods: {
        ...mapActions([
            'GET_STORAGES_FROM_API'
        ])
    },
    mounted() {
        this.GET_STORAGES_FROM_API()
    }
}
</script>

<style lang="scss" scoped>
.v-storages {
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