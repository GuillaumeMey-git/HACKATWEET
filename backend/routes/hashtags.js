var express = require('express');
var router = express.Router();
const Hashtag = require('../models/hashtags');
const Hashtag_tweet = require('../models/hashtag_tweet');
const Tweet = require('../models/tweets');




// Recup tout les #
router.get("/", (req, res) => {
    Hashtag.find({}).then((data) => {
        res.json({ result: true, hashtag: data });
    });
});


// // recuperer les tweet qui mon le #
// router.post('/search', async (req, res) => {
//     const hashtagName  = req.body.hashtag;
//     //  trouver le hashtag
//     Hashtag.findOne({ hashtagName : hashtagName })
//     .then(data => {
//         console.log(data);
//         res.json(data);
//     })
//     console.log('etape1 terminer')

//     // //  trouver les liens entre ce hashtag et les tweets
//     // Hashtag_tweet.find({ hashtag: hashtag._id }).populate('tweet')
//     // .then(data=>console.log(data));
//     // console.log('etape2 terminer')

//     // retourner les tweets
//     // res.json();

// });


module.exports = router;
