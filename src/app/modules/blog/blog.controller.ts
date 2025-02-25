
import  httpStatus  from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlog(req.body);
  
    sendResponse(res, {
      success: true,
      message: 'Blog are created successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogs();
  
    sendResponse(res, {
      success: true,
      message: 'Blogs are retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const getSingleBlog = catchAsync(async (req, res) => {
    const {projectId} = req.params;
    const result = await BlogServices.getSingleBlog(projectId);
  
    sendResponse(res, {
      success: true,
      message: 'Project are retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const updateBlog = catchAsync(async (req, res) => {
    const {projectId} = req.params;
    const result = await BlogServices.updateBlog(projectId,req.body);
  
    sendResponse(res, {
      success: true,
      message: 'Project are update successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
const deleteBlog = catchAsync(async (req, res) => {
    const {projectId} = req.params;
     await BlogServices.deleteBlog(projectId);
  
    sendResponse(res, {
      success: true,
      message: 'Project are deleted successfully',
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  export const BlogControllers = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
    updateBlog
  };