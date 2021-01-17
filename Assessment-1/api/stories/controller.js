const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('././db.json');
const db = low(adapter);

let stories = [];

function getStories() {
    return stories;
}
function getStory() {
    const found = stories.filter(story => id === story.id);
    return found.length ? found[0] : {};
}
function createStory(story) {


    // Add a post
    db.get('stories')
        .push(story)
        .write();

    stories.push(story);

}
function deleteStory(id) {
    stories = stories.filter(story => id !== story.id);
}

module.exports = {

    getStory,
    getStories,
    createStory,
    deleteStory,
};
