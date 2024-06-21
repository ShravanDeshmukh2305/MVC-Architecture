import Blog from "../models/blog.model.js";


export const getAllBlogs = async(req,res)=>{
    try {
        const data = await Blog.find();
        res.status(201).send(data);
    } catch (error) {
        res.status(503).send(error);
    }

}

export const createBlog = async(req,res)=>{
    const blogData = req.body;
    try {
        const data = await Blog.create(blogData);
        res.status(201).send(data);
    } catch (error) {
        res.status(503).send(error);
    }
}

export const getBlogDetail =async(req,res)=>{
    const {blogId} = req.params;
    try {
        const data = await Blog.findById(blogId);
        res.status(201).send(data);
    } catch (error) {
        res.status(503).send(error);
    }   
}

export const renderBlogs= async(req,res)=>{
    const blogs = await Blog.find();
    res.render('blogList',{blogs});
}

export const renderblogDetails = async(req,res)=>{
    const {blogId}=req.params;
    const blog =await Blog.findById(blogId);
    res.render("blogDetail",{blog});
    }