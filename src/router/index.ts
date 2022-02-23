import { RouteConfig } from 'react-router-config'
import ReportCenter from '../page/ReportCenter'
import DataSource from '../page/DataSource'
import ReportView from '../page/ReportCenter/Report'
import ReportEdit from '../page/ReportCenter/ReportEdit'

const routes: RouteConfig[] = [
    {
        path: '/',
        component: ReportCenter,
        exact: true,
        // routes: [
        //     {
        //         path: '/report/:id',
        //         exact: true,
        //         component: ReportView
        //     },
        //     {
        //         path: '/report/edit/:id',
        //         exact: true,
        //         component: ReportEdit
        //     }
        // ]
    },
    {
        path: '/data-source',
        component: DataSource
    },
    {
        path: '/report/:id',
        exact: true,
        component: ReportView
    },
    {
        path: '/report/edit/:id',
        exact: true,
        component: ReportEdit
    }
]

export default routes;