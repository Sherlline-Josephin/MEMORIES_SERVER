import mongoose from "mongoose";

const postSchema =mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostMessage=mongoose.model('PostMessage',postSchema);
//export a mongoose model from the post message file and later on that file we can do commands like create update delete etc.. 
export default PostMessage;