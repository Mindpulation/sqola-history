const command = require('./command');

const createDataHistory = (payloadDataCreate) => {
    return command.createHistory(payloadDataCreate);
}

const updateDataHistory = (payloadDataUpdate) =>{
    return command.updateHistory(payloadDataUpdate)
}

// const deleteDataHistory = (payloadDataDelete) => {
//     return command.deleteDataHistory(payloadDataDelete)
// }

const findDataHistory = (payloadDataFind) => {
    return command.findHistory(payloadDataFind)
}

module.exports = {
    createDataHistory,
    updateDataHistory,
    // deleteDataHistory,
    findDataHistory
}
