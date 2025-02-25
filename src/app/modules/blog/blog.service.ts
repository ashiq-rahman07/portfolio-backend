import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlog= async ( blogData: IBlog) => {
    
    const result = await Blog.create(blogData);
    return result;
  };
const getAllBlogs= async () => {
    
    const result = await Blog.find();
  return result;
  };
const getSingleBlog= async (id: string) => {
    
    const result = await Blog.findById(id);
  return result;
  };

  const deleteBlog = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;
  };
  
  const updateBlog = async (id: string, payload: Partial<IBlog>) => {
    const result = await Blog.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };


  export const BlogServices = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
    updateBlog
  };







  