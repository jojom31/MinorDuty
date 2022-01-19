"use strict";

const express = require("express"),
  router = express.Router(),
  choreListModel = require("../models/choreListModel");

router.get("/", async (req, res, next) => {
  const chores_id = 2;
  const choreList = await choreListModel.getChoreList(chores_id);
  res.json(choreList).status(200);
});

router.put("/:chores_id", async (req, res) => {
  const { chores_id } = req.params;

  const choreData = await choreListModel.changeChores(chores_id);
  res.json(choreData).status(200);
});
// //router.get('/:user_id', async (req, res) => {
//     const { user_id } = req.params;

//     const userChoreData = await choreListModel.getUserChores(user_id);
//     res.json(userChoreData).status(200);

// //});

module.exports = router;
