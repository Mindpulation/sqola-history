require('dotenv').config()

module.exports = {
    HistoryEndpoint: process.env.endpoint,
    dnsSentryUrl: process.env.DSN_SENTRY_URL,
    ports: process.env.PORT,
    mongoDbUrl: process.env.MONGO_URL,
    mongoDbase: process.env.MONGO_DB,
    mongoDbCol: process.env.MONGO_COL,
}
