import { ProjectServices } from './project.service';
import  httpStatus  from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.createProject(req.body);
  
    sendResponse(res, {
      success: true,
      message: 'Project are created successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjects();
  
    sendResponse(res, {
      success: true,
      message: 'Project are retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const getSingleProject = catchAsync(async (req, res) => {
    const {projectId} = req.params;
    const result = await ProjectServices.getSingleProject(projectId);
  
    sendResponse(res, {
      success: true,
      message: 'Project are retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const updateProject = catchAsync(async (req, res) => {
    const {projectId} = req.params;
    const result = await ProjectServices.updateProject(projectId,req.body);
  
    sendResponse(res, {
      success: true,
      message: 'Project are update successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const deleteProject = catchAsync(async (req, res) => {
    const {projectId} = req.params;
     await ProjectServices.deleteProject(projectId);
  
    sendResponse(res, {
      success: true,
      message: 'Project are deleted successfully',
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  export const ProjectControllers = {
    createProject,
    getAllProjects,
    getSingleProject,
    deleteProject,
    updateProject
  };