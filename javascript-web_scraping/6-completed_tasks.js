#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const completedTask = {};
  const tasks = JSON.parse(body);
  for (const task of tasks) {
    if (task.completed === true) {
      if (completedTask[task.userId] === undefined) {
        completedTask[task.userId] = 1;
      } else {
        completedTask[task.userId] += 1;
      }
    }
  }
  console.log(completedTask);
});
