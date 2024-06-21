import  express  from "express";
import BlogRoutes from './routes/blog.routes.js';
import connectToDB from "./config/dbConnection.js";
import { renderBlogs } from "./controllers/blog.controller.js";
import { renderblogDetails } from "./controllers/blog.controller.js";
import { config } from "dotenv";
config();

const app = express();
app.set(`view engine`,`ejs`); //for view
app.use(express.json()); // Middleware for parsing JSON



app.get('/ping', (req,res)=>{
    res.status(200).send('app is working')
})

app.get('/blogs', renderBlogs);
app.get("/blogs/:blogId", renderblogDetails);


app.use('/api/blog', BlogRoutes);

app.all('*',(req,res)=>{
    res.status(404);
    res.send('page Not Found');
})

const port = 5040;

app.listen(port, async () => {
    try {
        await connectToDB();
        console.log('Server is running on http://localhost:5040');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
