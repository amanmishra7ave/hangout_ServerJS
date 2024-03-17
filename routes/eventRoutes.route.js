const express=require("express");
const router=express.Router();
const {
    getAllEvents,
    createEvent,
}=require("../controller/eventController");

router.route("/getAllEvents").get(getAllEvents);
router.route("/createEvent").post(createEvent);

module.exports=router;