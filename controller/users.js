const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
// const express = require("express");

// MVC Model-View_controller

// Create  POST --- API  /products
exports.createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(res.body);
  res.status(201).json(req.body);
};

// Read GET /products --- 2 TYPES OF
exports.getAllUser = (req, res) => {
  console.log(req.params);
  res.json(users);
};

// Read GET API  /products/:id
exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

// Update  PUT API  /products/:id
exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  // res.json({product:"product _ updated "});

  res.status(201).json();
};

// Update  PATCH (API)  /products/:id
exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });

  res.status(201).json();
};

// Delete  DELETE API  /products/:id
exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);

  res.status(201).json(user);
};
