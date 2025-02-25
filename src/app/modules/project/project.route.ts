import express, { NextFunction, Request, Response } from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/create-project',ProjectControllers.createProject,);
  router.get('/:productId', ProjectControllers.getSingleProject);
  router.get('/', ProjectControllers.getAllProjects);
  router.delete('/:projectId', ProjectControllers.deleteProject);
  
  router.patch( '/:projectId',ProjectControllers.updateProject);
  
  export const ProjectRouter = router;