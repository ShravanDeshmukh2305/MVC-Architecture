// import mongoose from "mongoose";

// const connectToDB = async () => {
//   console.log(`mongodb+srv://shravanddeshmukh:${process.env.DATABADE_PASSWORD}@cluster0.azqksua.mongodb.net/shravan_db?retryWrites=true&w=majority&appName=Cluster0`)
//   const { connection } = await mongoose.connect(`mongodb+srv://shravanddeshmukh:1BqiK6DG8qWjNCep@cluster0.azqksua.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0`);
//   if (connection) {
//     console.log(`Database connected at ${connection.host}`);
//   }
// };

// export default connectToDB;


import mongoose from "mongoose";

const connectToDB = async () => {
  const { connection } = await mongoose.connect(`mongodb+srv://shravanddeshmukh:${process.env.DATABADE_PASSWORD}@cluster0.azqksua.mongodb.net/cyz?retryWrites=true&w=majority&appName=Cluster0`);
  if (connection) {
    console.log(`Database connected at ${connection.host}`);
  }
};

export default connectToDB;