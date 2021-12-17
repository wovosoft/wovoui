export default [
    {
        name: 'Index',
        path: '/',
        component: () => import("./pages/Index.vue")
    },
    {
        name: 'Badges',
        path: '/badges',
        component: () => import("./pages/Badges/Index.vue")
    },
    {
        name: 'Breadcrumbs',
        path: '/breadcrumbs',
        component: () => import("./pages/Breadcrumbs/Index.vue")
    },
    {
        name: 'Buttons',
        path: '/buttons',
        component: () => import("./pages/Buttons/Buttons.vue")
    },
    {
        name: 'Button Toolbar',
        path: '/button-toolbar',
        component: () => import("./pages/Buttons/Toolbar.vue")
    },
    {
        name: 'Button Groups',
        path: '/button-groups',
        component: () => import("./pages/Buttons/Groups.vue")
    },
    {
        name: 'Card',
        path: '/card',
        component: () => import("./pages/Cards/Index.vue")
    },
    {
        name: 'Collapse',
        path: '/collapse',
        component: () => import("./pages/Collapse/Index.vue")
    },
    {
        name: 'Dropdown',
        path: '/dropdown',
        component: () => import("./pages/Dropdown/Index.vue")
    },
    {
        name: 'Input',
        path: '/form-input',
        component: () => import("./pages/Form/FormInput.vue")
    },
    {
        name: 'Table',
        path: '/table',
        component: () => import("./pages/Table/Table.vue")
    },
    {
        name: 'Datatable',
        path: '/datatable',
        component: () => import("./pages/Table/DataTable.vue")
    },
]