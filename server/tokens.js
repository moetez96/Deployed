const twilio = require('twilio');
const config = require("./config/default.json");
const AccessToken = twilio.jwt.AccessToken;
const {VideoGrant} = AccessToken;

const generateToken = () => {
    return new AccessToken(
        config.TWILIO_ACCOUNT_SID,
        config.TWILIO_API_KEY,
        config.TWILIO_API_SECRET
    );
};

const videoToken = (identity, room) => {
    let videoGrant;
    if (typeof room !== 'undefined') {
        videoGrant = new VideoGrant({room});
    } else {
        videoGrant = new VideoGrant();
    }
    const token = generateToken();
    token.addGrant(videoGrant);
    token.identity = identity;
    return token;
};

module.exports = {videoToken};
