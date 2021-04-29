const Story = require('../models/Story');
const User = require('../models/User');

const story = new Story();
const user = new User();

class StoryController {
    static index = async (req, res) => {
        const stories = await story.getAll();

        res.json(stories);
    }

    static view = async (req, res) => {
        const { id } = req.params;

        const foundStory = await story.getOneById(id);

        res.json(foundStory);
    }

    static create = async (req, res) => {
        const { anonimity, title, content } = req.body;

        const author = req.user._id;

        const document = {
            author, 
            anonimity, 
            title, 
            content
        };

        const postedStory = await story.create(document);

        const postingUser = await user.addStory(author, postedStory);

        res.json({ story: postedStory, user: postingUser });
    }

    static like = (req, res) => {
        const { storyID } = req.body;
        const userID = req.user._id;

        const likedStory = story.giveLike(storyID);

        const likingUser = user.addLikedStory(userID, storyID);

        res.json({message: 'success'});

        // res.json({ story: likedStory, user: { auth: true, user: likingUser } });
    }

    static unLike = (req, res) =>  {
        const { storyID } = req.body;

        const userID = req.user._id;

        const unlikedStory = story.removeLike(storyID);

        const unlikingUser = user.removeLikedStory(userID, storyID);

        res.json({message: 'success'});

        // res.json({ story: unlikedStory, user: { auth: true, user: unlikingUser } });
    }

    static topThree = async (req, res) => {
        const stories = await story.topThree();

        res.json(stories);
    }

    static delete = async (req, res) => {
        const { storyID } = req.body;

        const userID = req.user._id;
        
        story.delete(storyID);

        await user.deleteStory(userID, storyID);

        res.redirect('/');
    }
}

module.exports = StoryController;