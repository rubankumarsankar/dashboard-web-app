import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fal fa-box-open',
    label: 'Products',
  },
  {
    routeLink: 'statistics',
    icon: 'fal fa-chart-bar',
    label: 'Statistics',
  },
  {
    routeLink: 'coupons',
    icon: 'fal fa-tags',
    label: 'Coupons',
    items: [
      {
        routeLink: 'coupons/list',
        label: 'List Coupons',
      },
      {
        routeLink: 'coupons/create',
        label: 'Create Coupons',
      },
    ],
  },
  {
    routeLink: 'pages',
    icon: 'fal fa-file',
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: 'fal fa-camera',
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
  },
];
