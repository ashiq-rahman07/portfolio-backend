
import { Router } from 'express';
import { ProjectRouter } from '../modules/project/project.route';
import { BlogRouter } from '../modules/blog/blog.route';

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
  {
    path: '/blog',
    route: BlogRouter,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;