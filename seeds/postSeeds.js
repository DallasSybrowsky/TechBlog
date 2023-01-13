const { Post } = require("../models");
const sequelize = require('../config/connection');
const postData = [
  {
    title: "How to create a blog post",
    post_text:
      "Write a title and some text and click on the submit button. It's easy!",
    user_id: 1,
  },
  {
    title: "How to post a comment",
    post_text: "Click add a comment, type your comment, then click on the submit button.",
    user_id: 2,
  },
  {
    title: "How to create a user",
    post_text:
      "Click on the signup button, create a username and password, then click on the submit button.",
    user_id: 3,
  },
];
const seedGallery = () => Post.bulkCreate(postData);
module.exports = seedGallery;