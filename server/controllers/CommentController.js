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

        let commentsObj = {};

        comments.forEach(element => {
            commentsObj[element._id] = element;
        });

        res.json(commentsObj);
    }

    static upvote = async (req, res) => {
        const { commentID } = req.body;

        const userID = req.user;

        let upvotedComment = comment.incrementLikes(commentID);

        let likingUser = await user.addLikedComment(userID, commentID);

        if(likingUser.dislikedComments.get(commentID)) { 
            upvotedComment = comment.incrementLikes(commentID);

            likingUser = user.removeDislikedComment(userID, commentID); 
        }   

        res.json({ message: 'success' });

        // res.json({ user: { auth: true, user: likingUser } });
    }

    static unupvote = async (req, res) => {
        const { commentID } = req.body;

        const userID = req.user;

        const unupvotedComment = comment.decrementLikes(commentID);

        const unlikingUser = user.removeLikedComment(userID, commentID);

        res.json({ message: 'success' });
        // res.json({ user: { auth: true, user: unlikingUser } });
    }

    static downvote = async (req, res) => {
        const { commentID } = req.body;

        const userID = req.user;

        let downvotedComment = comment.decrementLikes(commentID);

        let dislikingUser = await user.addDislikedComment(userID, commentID);

        if(dislikingUser.likedComments.get(commentID)) { 
            downvotedComment = comment.decrementLikes(commentID);

            dislikingUser = user.removeLikedComment(userID, commentID); 
        }

        res.json({ message: 'success' });

        // res.json({ user: { auth: true, user: dislikingUser } });
    }

    static undownvote = (req, res) => {
        const { commentID } = req.body;

        const userID = req.user;

        const undownvotedComment = comment.incrementLikes(commentID);

        const undislikingUser = user.removeDislikedComment(userID, commentID);

        res.json({ message: 'success' });
        // res.json({ user: { auth: true, user: undislikingUser } });
    }
}

module.exports = CommentController;