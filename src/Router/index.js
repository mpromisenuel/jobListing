import { createRouter,createWebHistory } from "vue-router";
import HomeViews from '@/Views/HomeViews.vue'
import JobsViews from '@/Views/JobsViews.vue'
import NotFoundViews from "@/Views/NotFoundViews.vue"
import JobViews from "@/Views/JobViews.vue";
import AddJobViews from "@/Views/AddJobViews.vue"
import EditJobViews from "@/Views/EditJobViews.vue"
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"Home",
            component:HomeViews
        },
        {
            path:"/jobs",
            name:"jobs",
            component:JobsViews
        },
        {
            path:"/jobs/:id",
            name:"job",
            component:JobViews
        },
        {
            path:"/jobs/add",
            name:"addJob",
            component:AddJobViews
        },
        {
            path:"/jobs/edit/:id",
            name:"editJob",
            component:EditJobViews
        },
        {
            path:"/:catchAll(.*)",
            name:"notFound",
            component:NotFoundViews
        },
        
    ]
})
export default router