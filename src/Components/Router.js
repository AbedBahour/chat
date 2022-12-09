import { createRouter , createWebHistory } from 'vue-router';
import DefaultLayout from './Views/DefaultLayout.vue'
import CreateAgreement from './DashChat/ChatPopups/CreateAgreement.vue'
import SendFilePopups from './DashChat/ChatPopups/SendFilePopups.vue'
import ReportingPopups from './DashChat/ChatPopups/ReportingPopups.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children : [
            {path: '/Agreement', name: 'Agreement',component: CreateAgreement},
            {path:'/SendFile',name:"SendFile",component:SendFilePopups},
            {path: '/Reporting',name: 'Reporting',component: ReportingPopups},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;