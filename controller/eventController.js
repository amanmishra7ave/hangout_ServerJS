const asyncHandler=require("express-async-handler");
const Events=require("../models/EventModel");
const { Error } = require("mongoose");

const getAllEvents = asyncHandler(async (req, res) => {
    const events = await Events.find({});
    res.status(200).json(events);
});

const createEvent=asyncHandler(async(req,res)=>{
    console.log("The request body is :",req.body);
    const {event_type,title,date_of_event,number_of_people,contribution_needed}=req.body;
    if(!event_type || !title || !date_of_event ||!number_of_people ||!contribution_needed==undefined) {
        res.status(400);
        throw new Error(Error);
    }
    const event=await Events.create({
        event_type,
        title,
        date_of_event,
        number_of_people,
        contribution_needed,
    });

    res.status(201).json(event);
});

module.exports={
    getAllEvents,
    createEvent,
};

 