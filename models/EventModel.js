const mongoose=require("mongoose");

const eventSchema=mongoose.Schema(
    {
        event_type:{
            type:String,
            require:[true,"Please add event type"],
        },
        title:{
            type:String,
            require:[true,"Please add title of event"]
        },
        date_of_event:{
            type:Date,
            require:[true,"Please add the date of event"]
        }, 
        number_of_people:{
            type:Number,
            require:[true,"Please add the number of people"]
        },
        contribution_needed:{
            type: Boolean,
            require:[true,"Please add the boolean"],
        }

    }, 
    {
        timestamps:true,
    }
);

module.exports=mongoose.model("Event",eventSchema);