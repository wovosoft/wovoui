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
        name: 'Radio',
        path: '/form-radio',
        component: () => import("./pages/Form/FormRadio.vue")
    },
    {
        name: 'Rating',
        path: '/form-rating',
        component: () => import("./pages/Form/FormRating.vue")
    },
    {
        name: 'Select',
        path: '/form-select',
        component: () => import("./pages/Form/FormSelect.vue")
    },
    {
        name: 'Spin Button',
        path: '/form-spin-button',
        component: () => import("./pages/Form/FormSpinButton.vue")
    },
    {
        name: 'Textarea',
        path: '/form-textarea',
        component: () => import("./pages/Form/FormTextarea.vue")
    },
    {
        name: 'Input Group',
        path: '/input-group',
        component: () => import("./pages/Form/FormInputGroup.vue")
    },
    {
        name: 'List Group',
        path: '/list-group',
        component: () => import("./pages/ListGroups/ListGroups.vue")
    },
    {
        name: 'Modals',
        path: '/modals',
        component: () => import("./pages/Modals/Modals.vue")
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