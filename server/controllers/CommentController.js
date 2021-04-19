const Comment = require('../models/Comment');
const Story = require('../models/Story');
const User = require('../models/User');

const comment = new Comment();
const story = new Story();
const user = new User();

class CommentController {
    static addComment = async (req, res) => {
        const { body } = req.body;

        const postedComment = await comment.postComment(body);

        const commentedStory = await story.receivedComment(body.storyID, postedComment._id);

        const commentingUser = user.addComent(body.userID, postedComment._id);

        res.json({ comment: postedComment, story: commentedStory, user: commentingUser });
    }
}

module.exports = CommentController;