const wrapper = require('../../helpers/utils/wrapper');
const validator = require('../../helpers/utils/validator');
const { create, update, remove, find } = require('../repositories/commands/command_model')
const { createDataHistory, updateDataHistory, deleteDataHistory, findDataHistory } = require('../repositories/commands/command_handler');

const NewHistory = async (req, res) => {

    const validate = validator.isValidPayload(req.body, create);
    const postRequest = async (result) => {
        console.log("\nIni Result : ", result)
        if (result.err) {
            return result;
        }
        const output = await createDataHistory(result);
        console.log("Ini output : ", output)
        return output;
    };
    const sendResponse = async (result) => {
        (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
            : wrapper.response(res, 'success', result, result.message, 201);
        console.log("\nIni Result : ", result)

    };
    sendResponse(await postRequest(validate));

}

const UpdateHistory = async (req, res) => {
    const validate = validator.isValidPayload(req.body, update);
    const postRequest = async (result) => {
        console.log("\nIni Result : ", result)
        if (result.err) {
            return result;
        }
        const output = await updateDataHistory(result);
        console.log("Ini output : ", output)
        return output;
    };
    const sendResponse = async (result) => {
        (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
            : wrapper.response(res, 'success', result, result.message, 200);
        console.log("\nIni Result : ", result)

    };
    sendResponse(await postRequest(validate));
}

const DeleteHistory = async (req, res) => {
    const validate = validator.isValidPayload({id : req.params.historyId}, remove);
    const postRequest = async (result) => {
        console.log("\nIni Result : ", result)
        if (result.err) {
            return result;
        }
        const output = await deleteDataHistory(result);
        console.log("Ini output : ", output)
        return output;
    };
    const sendResponse = async (result) => {
        (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
            : wrapper.response(res, 'success', result, result.message, 200);
        console.log("\nIni Result : ", result)

    };
    sendResponse(await postRequest(validate));
}

const FindHistory = async (req, res) => {
    const validate = validator.isValidPayload(req.body, find);
    const postRequest = async (result) => {
        console.log("\nIni Result : ", result)
        if (result.err) {
            return result;
        }
        const output = await findDataHistory(result);
        console.log("Ini output : ", output)
        return output;
    };
    const sendResponse = async (result) => {
        (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
            : wrapper.response(res, 'success', result, result.message, 200);
        console.log("\nIni Result : ", result)

    };
    sendResponse(await postRequest(validate));
}

module.exports = {
    NewHistory,
    UpdateHistory,
    DeleteHistory,
    FindHistory
}
