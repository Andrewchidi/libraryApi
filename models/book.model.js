import mongoose from "mongoose";


 const bookSchema = new mongoose.Schema({
   title :{
    type : String,
    required : true,

   },

   author :{
    type : [String],
    required : true,
    validate : function (value) {
      return Array.isArray (value)|| typeof value === "string";
      
    },
    message: "Author must be a string or an array of string",

   },

   genre :{
    type : [String],
    required : true,
    validate : function (value) {
      return Array.isArray (value)|| typeof value === "string";
      
    },

   },

   copiesAvalibale :{
    type : Number,
    default: 0,
   },

   totalCopies :{
    type : Number,
    default: 0,
   },

   borrowedBy:{
    type: mongoose.Schema.Types.ObjectId,
    required: true, //ONE TO MANY RELATIONS
    ref: "User",
   }

 })


 const Book= mongoose.model("Book", bookSchema);
 export default Book;