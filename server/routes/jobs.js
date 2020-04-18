const express = require('express');
const router = express.Router();
const db = require('../db/jobs');

router.use(express.json())

router.get('/', (req, res) => {
  db.getJobs()
    .then(jobs => {
      res.json(jobs);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Something is broken' });
    });
});

module.exports = router