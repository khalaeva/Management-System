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
                  <li v-for="(store, index) in STORAGES" :key="index"><RouterLink :to="{name: 'PostingForm', params: { productPosting: store.id }}" class="dropdown-item">{{ store.name }}</RouterLink></li>
                </ul>
            </div>
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
                    <tr v-for="post in POSTS" :key="post.id">
                        <th scope="row">{{ post.id }}</th>
                        <td>{{ post.data }}</td>
                        <td>{{ post.storageName }}</td>
                        <td>{{ post.totalSum }}</td>
                    </tr>
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
            'GET_STORAGES_FROM_API',
            'GET_POSTS_FROM_API'
        ])
    },
    computed: {
        ...mapGetters([
            'STORAGES',
            'POSTS'
        ])
    },
    mounted() {
        this.GET_STORAGES_FROM_API();
        this.GET_POSTS_FROM_API()
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