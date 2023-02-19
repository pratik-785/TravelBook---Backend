const express = require("express");
const router = express.Router();
const TripDetails = require('../models/TripDetails')

// Route 1: Get all the staff details
router.get('/fetchalltrips', async (req, res) => {
    try {
        const trip = await TripDetails.find().sort({ createdAt: -1 });
        res.json({ status: 200, data: trip })
    } catch (error) {
        console.log(error)
    }
})

// Route 2: Add new staff
router.post('/addnewtrip', async (req, res) => {
    try {
        const { title, contact, typeOfTrip, start, startDateTime, destination, endDateTime,
            totalDistance, kmCharges, stayCharges, tip, discount, dieselCost, tolls, carMaintain,
            fines, misc, commission } = req.body;

        const trip = new TripDetails({
            title, contact, typeOfTrip, start, startDateTime, destination, endDateTime,
            totalDistance, kmCharges, stayCharges, tip, discount, dieselCost, tolls, carMaintain,
            fines, misc, commission
        })
        const savedTrip = await trip.save()
        res.json({ status: 200, data: savedTrip._id })
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;