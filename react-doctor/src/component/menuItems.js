export const menuItems = [
    {
        title : 'Home',
        url : '/',
    },
    {
        title : 'About',
        url : '/about',
    },
    {
        title : 'Services',
        url : '/services',
    },
    {
        title : 'Departement',
        url : '/department',
        submenu: [
            {
                title: 'Departements',
                url: 'departements'
            },
            {
                title: 'Departement single',
                url: 'departement-single'
            },
            {
                title: 'Sub Menu',
                url: 'sub-menu'
            },
        ]
    },
    {
        title : 'Doctors',
        url : '/doctors',
        submenu: [
            {
                title: 'Doctors',
                url: 'doctors'
            },
            {
                title: 'Doctor single',
                url: 'doctor-single'
            },
            {
                title: 'Appointement',
                url: 'appoinment'
            },
            {
                title: 'Sub Menu',
                url: 'sub-menu'
            },
        ]
    },
    {
        title : 'Blog',
        url : '/blog',
        submenu: [
            {
                title: 'Blog with Sidebar',
                url: 'blog-with-sidebar'
            },
            {
                title: 'blog-single',
                url: 'blog-single'
            },
        ]
    },
    {
        title : 'Contact',
        url : '/contact',
    },
];