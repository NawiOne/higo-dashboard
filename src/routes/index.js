import { lazy } from 'react';


const DetailUser = lazy(() => import('../pages/DetailUser'));
const User = lazy(() => import('../pages/Tables'));
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
    path: '/user',
    title: 'User',
    component: User,
    children: [
      {
        path: 'detail',
        title: 'Detail User',
        component: DetailUser,
      },
    ]
  },

];

const routes = [...coreRoutes];
export default routes;
