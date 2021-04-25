const Comment = require('../models/Comment');
const Story = require('../models/Story');
const User = require('../models/User');

const comment = new Comment();
const story = new Story();
const user = new User();

class CommentController {
    static create = async (req, res) => {
        const { content, storyID } = req.body;
        const userID = req.user._id;

        const document = {
            user: userID,
            story: storyID,
            content
        };

        const postedComment = await comment.create(document);

        const commentedStory = await story.addComent(storyID, postedComment._id);

        const commentingUser = await user.addComent(userID, postedComment._id);
        
        res.json({ comment: postedComment, story: commentedStory, user: commentingUser });
    }

    static storyComments = async (req, res) => {
        const { storyId } = req.params; 
        const comments = await comment.getAllFromStory(storyId);

        res.json(comments);
    }
}

module.exports = CommentController;