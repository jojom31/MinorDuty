"use strict";

const express = require("express"),
  router = express.Router(),
  choreListModel = require("../models/choreListModel");

//get all chores
router.get("/", async (req, res, next) => {
  const chores_id = 2;
  const choreList = await choreListModel.getChoreList(chores_id);
  res.json(choreList).status(200);
});

//get a chore
router.get('/chores/:id', async (req, res) => {
  const { id } = req.params;

  const userChoreData = await choreListModel.getUserChores(id);
  res.json(userChoreData).status(200);

});


//add chores
router.post('add_chores', async(req, res, next) => {
    const {location, title, description, date, amount_paid, user_id} = req.body;

    const response = await choreListModel.addChores(location, title, description, date, amount_paid, user_id);

    if(response.rowCount >=1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})



//update/edit chores
router.put("/:chores_id", async (req, res) => {
  const { chores_id } = req.params;

  const choreData = await choreListModel.changeChores(chores_id);
  res.json(choreData).status(200);
});


//delete chores
router.delete('/id', async(req, res, next) => {
    const { id } = req.params;

    const response = await choreListModel.deleteChores(id);
    res.sendStatus(200);
})


module.exports = router;
