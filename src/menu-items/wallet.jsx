// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const wallet = {
    id: 'group-dashboard',
    title: 'Wallet',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dash/setting',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
        ,
        {
            id: 'notifications',
            title: 'Notifications',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
        ,
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'activity',
            title: 'Activity',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'promocodes',
            title: 'Promocodes',
            type: 'collapse',
            icon: icons.DashboardOutlined,
            children: [
                {
                    id: 'deposite',
                    title: 'Deposit',
                    type: 'item',
                    url: '/',
                },
                {
                    id: 'bonus',
                    title: 'Client Funnel',
                    type: 'item',
                    url: '/pages/register/register3',
                    // target: true    when uncomment this it will always open in new tab
                }
            ]
        },
        {
            id: 'sportsbook',
            title: 'Sportsbook',
            type: 'collapse',
            icon: icons.DashboardOutlined,
            children: [
                {
                    id: 'single slip',
                    title: 'Single Slip',
                    type: 'item',
                    url: '/',
                },
                {
                    id: 'multislip',
                    title: 'Multi Slips',
                    type: 'item',
                    url: '/pages/register/register3',
                    // target: true    when uncomment this it will always open in new tab
                }
            ]
        },
        {
            id: 'telegram',
            title: 'Telegram',
            type: 'collapse',
            icon: icons.DashboardOutlined,
            children: [
                {
                    id: 'templates',
                    title: 'Templates',
                    type: 'item',
                    url: '/',
                },
            ]
        },

    ]

};

export default wallet;