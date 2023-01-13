const { Comment } = require('../models');
// const sequelize = require('../config/connection');
const commentData = [
  {
    comment_text: "The new Apple iPhone 4 is great!",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "iOS 6 is the best!",
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: "VSCode is the best code editor!",
    post_id: 3,
    user_id: 3
  },
];
const seedGallery = () => Comment.bulkCreate(commentData);
module.exports = seedGallery;
