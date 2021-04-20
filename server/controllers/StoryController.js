const Story = require('../models/Story');
const User = require('../models/User');

const story = new Story();
const user = new User();

class StoryController {
    static addStory = async (req, res) => {
        const { anonimity, title, content } = req.body;

        const author = req.user._id;

        const document = {
            author, 
            anonimity, 
            title, 
            content
        };

        const postedStory = await story.postStory(document);

        const postingUser = await user.addStory(author, postedStory);

        res.json({ story: postedStory, user: postingUser });
    }

    static addLike = async (req, res) => {
        const { userID, storyID } = req.body;

        const likedStory = await story.giveLike(storyID);

        const likingUser = await user.addLikedStory(userID, storyID);

        res.json({ story: likedStory, user: likingUser });
    }

    static unLike = async (req, res) =>  {
        const { userID, storyID } = req.body;

        const unlikedStory = await story.removeLike(storyID);

        const unlikingUser = await user.removeLikedStory(userID, storyID)

        res.json({ story: unlikedStory, user: unlikingUser });
    }

    static oneStory = async (req, res) => {
        const { id } = req.params;

        const foundStory = await story.getOne(id);

        res.json(foundStory);
    }

    static allStories = async (req, res) => {
        const stories = await story.getAll();

        res.json(stories);
    }
}

module.exports = StoryController;