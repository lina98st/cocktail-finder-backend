module.exports = {
    'secretKey': process.env.SECRET_KEY || '12345-67890-09876-54321',
    'mongoUrl': process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/cocktailfinder',
    'google': {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
}