
import { Router } from 'express';
import { ProjectRouter } from '../modules/project/project.route';

const router = Router();

const moduleRoutes = [
  // {
  //   path: '/auth',
  //   route: UserRoutes,
  // },
  {
    path: '/project',
    route: ProjectRouter,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;