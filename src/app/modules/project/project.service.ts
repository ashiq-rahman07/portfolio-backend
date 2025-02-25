import { IProject } from "./project.interface";
import { Project } from "./project.model";

const createProject= async ( projectData: IProject) => {
    
    const result = await Project.create(projectData);
    return result;
  };
const getAllProjects= async () => {
    
    const result = await Project.find();
  return result;
  };
const getSingleProject= async (id: string) => {
    
    const result = await Project.findById(id);
  return result;
  };

  const deleteProject = async (id: string) => {
    const result = await Project.findByIdAndDelete(id);
    return result;
  };
  
  const updateProject = async (id: string, payload: Partial<IProject>) => {
    const result = await Project.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };


  export const ProjectServices = {
    createProject,
    getAllProjects,
    getSingleProject,
    deleteProject,
    updateProject
  };







  