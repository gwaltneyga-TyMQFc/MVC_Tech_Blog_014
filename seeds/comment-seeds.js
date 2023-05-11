const { Comment } = require('../models');

const commentData = [{
        comment_text: "How can we explain the MVC Framework?",
        user_id: 1,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;