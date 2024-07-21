import { lazy } from 'react';

const DetailUser = lazy(() => import('../pages/DetailUser'));
const Tables = lazy(() => import('../pages/Tables'));
const Summary = lazy(() => import('../pages/Summary'));
const Segmentation = lazy(() => import('../pages/Segmentation'));


const coreRoutes = [
  {
    path: '/segmentation',
    title: 'Segmentation',
    component: Segmentation,
  },
  {
    path: '/summary',
    title: 'Summary',
    component: Summary,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/detail-user',
    title: 'Detail User',
    component: DetailUser,
  },
];

const routes = [...coreRoutes];
export default routes;
