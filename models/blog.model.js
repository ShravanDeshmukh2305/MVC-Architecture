import { Schema, model } from "mongoose";


const BlogSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    authorName:{
        type:String,
        required:true,
    },
},{
    timestamps:true
}); 


const Blog = model('Blog', BlogSchema);
export default Blog;