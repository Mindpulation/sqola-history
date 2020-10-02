require('dotenv').config()

module.exports = {
    pathHistoryEndpoint: process.env.PATH_HISTORY_ENDPOINT,
    ports: process.env.PORT,
}