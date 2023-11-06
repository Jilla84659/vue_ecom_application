import HomePage from "./pages/HomePage.vue";
import ProductPage from "./pages/ProductPage.vue";

export default [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/product/:id',
        component: ProductPage,
        name: 'product',
        props: true
    }
]