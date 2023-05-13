<template>
<div class="employ">
    <h3 style="margin-bottom: 40px">Сотрудники</h3>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Номер</th>
            <th scope="col">ФИО</th>
            <th scope="col">Номер</th>
            <th scope="col">Email</th>
            <th scope="col">Склад</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Якшибаева Кира</td>
            <td>+7 (989) 698-27-17</td>
            <td>kira.yakshibaeva@yandex.ru</td>
            <td>Основной склад</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Богоявленский Герасим</td>
            <td>+7 (924) 935-68-85</td>
            <td>gerasim12091979@mail.ru</td>
            <td>Склад Уренгой</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Краевская Надежда</td>
            <td>+7 (994) 441-58-96</td>
            <td>nadejda1996@outlook.com</td>
            <td>Склад Тюмень</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Фотина Ася</td>
            <td>+7 (994) 762-82-29</td>
            <td>asya8325@hotmail.com</td>
            <td>Склад Кострома</td>
            </tr>
        </tbody>
        </table>
        <button type="button" @click="addEmpl" class="btn btn-secondary">Добавить сотрудника</button>
        <div v-if="isActive" class="formempl">
            <form class="row g-3 add-storage">
                <h4 class="user_login__i">Добавить сотрудника</h4>
                <div class="col-md-6">
                    <label for="name" class="form-label">Имя</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="col-md-6">
                    <label for="unit" class="form-label">Фамилия</label>
                    <input type="text" class="form-control" id="unit">
                </div>
                <div class="col-12">
                    <label for="desc" class="form-label">Номер телефона</label>
                    <input type="text" class="form-control" id="desc">
                </div>
                <div class="col-md-6">
                    <label for="purchPr" class="form-label">Email</label>
                    <input type="text" class="form-control" id="purchPr">
                </div>
                <div class="col-md-6">
                    <label for="purchPr" class="form-label">Выберите склад</label>
                    <select class="form-select" aria-label="Default select example">
                        <option>
                            Основной Склад
                        </option> 
                    </select>
                </div>
                <div class="col-12">
                    <button @click="Save" class="btn btn-secondary">Сохранить</button>
                </div>
                </form>
        </div>
</div>
</template>

<script>
export default {
    name: 'v-empoyer',
    data() {
        return{
            isActive: false
        }
    },
    methods: {
        addEmpl() {
            this.isActive = true
        },
        Save() {
            this.isActive = false
        }
    }
}
</script>

<style scoped lang="scss">
.formempl {
    width: 850px;
    position: absolute;
    right: 150px;
    left: 512px;
    top: 200px;
    background-color: white;
    border: 1px solid lightgray;
}
.employ {
    width: 800px;
    margin-right: 150px;
}
</style>