const Story = require('../models/Story');
const story = new Story();

class StoryController {
    static postStory = async (req, res) => {
        const { body } = req;

        const postedStory = await story.postStory(body);

        await story.addStoryToAuthor(postedStory);

        res.json(postedStory);
    }

    static giveLove = async (req, res) => {
        const { id } = req.body;
        
    }
}

module.exports = StoryController;