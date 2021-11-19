const dao = require('./tweet-dao');
module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const createTweet = (req, res) =>
        dao.createTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet));

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));

    const likeTweet = (req, res) =>
        dao.likeTweet(req.params.id, req.body)
        .then(status => res.send(status));

    app.put('/tweets/tweeter-service/:id/like', likeTweet);
    app.delete('/tweets/tweeter-service/:id', deleteTweet);
    app.post('/tweets/tweeter-service/tweets', createTweet);
    app.get('/tweets/tweeter-service', findAllTweets);

};
