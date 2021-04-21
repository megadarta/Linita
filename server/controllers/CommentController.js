const Comment = require('../models/Comment');
const Story = require('../models/Story');
const User = require('../models/User');

const comment = new Comment();
const story = new Story();
const user = new User();

class CommentController {
    static addComment = async (req, res) => {
        const { content, storyID } = req.body;
        const userID = req.user._id;

        const document = {
            user: userID,
            story: storyID,
            content
        };

        const postedComment = await comment.postComment(document);

        const commentedStory = await story.receivedComment(storyID, postedComment._id);

        const commentingUser = await user.addComent(userID, postedComment._id);
        
        res.json({ comment: postedComment, story: commentedStory, user: commentingUser });
    }

    static getComments = async (req, res) => {
        const { storyId } = req.params; 
        const comments = await comment.getAllfromStory(storyId);

        res.json(comments);
    }
}

module.exports = CommentController;