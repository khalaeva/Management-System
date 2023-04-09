import { createRouter, createWebHistory} from "vue-router";
import vLogin from '../components/v-login.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/', 
            name: 'index', 
            component: vLogin,
        }
    ]
})

export default router;