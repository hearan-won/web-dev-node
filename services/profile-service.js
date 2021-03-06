let profile = {
    "name": "Jose Annunziato",	"handle": "jannunzi",
    "profilePicture": "../../images/profile-default.png", 	"bannerPicture": "../../images/banner-default.jpg",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
    "followingCount": 312,	"followersCount": 180,
    "edit": false
}

module.exports = (app) => {
    const getCurrentProfile = (req, res) => res.json(profile);
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        console.log(req.body);
        profile = req.body;
        res.json(profile);
    }
    app.put('/api/profile', updateCurrentProfile);


};
