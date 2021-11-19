const model = require('./tweet-model');

const findAllTweets = () => model.find();

const deleteTweet = (id) =>
    model.deleteOne({_id: id});

const createTweet = (tweet) =>
    model.create(tweet);

const likeTweet = (id, tweet) =>
    model.updateOne({_id: id},
        {$set: tweet});

module.exports = {
    findAllTweets, createTweet,
    deleteTweet, likeTweet
};
