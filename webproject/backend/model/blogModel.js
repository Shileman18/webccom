let mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
      },
     
      description: {
      type: String,
      required: true,
    },
    
      category: {
       type:String,
      },
      numViews: {
        type:Number,
        default:0,
      },
      isLiked: {
        type:Boolean,
        default:false,
      },
      disLiked: {
        type:Boolean,
        default:false,
      },
      Likes:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
    ],
    disLikes:[ {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
    ],
     images: {
        type: String,
        default:"......image",
      }    ,

},
{
  
timestamps:true,
},
)

const Blog= mongoose.model("Blog", blogSchema);
module.exports=Blog
