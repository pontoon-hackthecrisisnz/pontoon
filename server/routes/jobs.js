const express = require('express');
const router = express.Router();
const db = require('../db/jobs');

router.use(express.json())

router.get('/jobs', (req, res) => {
  db.getJobs()
    .then(res => {
      console.log('you have reached the router')
      res.json(res);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Something is broken' });
    });
});

module.exports = router