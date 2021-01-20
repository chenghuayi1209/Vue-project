import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login/')
},
{
    path:'/',
    component:()=>import('@/views/layout/'),
    children:[
        {
            path:'', //默认子路由
            name:'home',
            component:()=>import('@/views/home/')
        },
        {
            path:'/category', //默认子路由
            name:'category',
            component:()=>import('@/views/category/')
        },
        {
            path:'/cart', //默认子路由
            name:'cart',
            component:()=>import('@/views/cart/')
        },
        {
            path:'/my', //默认子路由
            name:'my',
            component:()=>import('@/views/my/')
        },
    ]
}
]
const router=new VueRouter({
    routes
})

export default router