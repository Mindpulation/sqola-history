const config = require('config');
const Mongo = require('mongooo').Mongooo;
const { save } = require('mongooo').Save;
const { del } = require('mongooo').Delete;
const { find } = require('mongooo').Find;
const { set } = require('mongooo').Update;
const {uuid : uuidv4} =  require('uuid');

const mongo = new Mongo();

let con;
(async () => {
    con = await mongo.setup(config.get('mongoDbUrl'), config.get('mongoDbase'), config.get('mongoDbCol'));
})();

const createHistory = async (payloadData) => {
    const result = {
        "err" : true,
        "message" : "Failed to create new history"
    };
    try{
        const RanId = Date.now();
        const uid = Math.floor(RanId);
        const payloads = {
            ...payloadData.data,
            "CreatedAt" : new Date(),
            "id" : uid,
        }

        const dbResult = await save(con, payloads)
        if(dbResult == false){
            result.err = true,
            result.message = "Failed to create new history"
        }else{
            result.err = false,
            result.message = "Success to create new history"
        }
        
    }catch (e) {
        const tickets = uuidv4;
        result.err = true,
        result.message = "Something went wrong"
        result.ticketId = tickets
        new Error(`Error : ${e}, ticketId : ${tickets}`);
        console.log(`command-newHistory [x] Error : ${e}, \nTicketId : ${tickets}`);
    }
    return result;
}

const updateHistory = async (payloadData) => {
    const result = {
        "err" : true,
        "message" : "Failed to update history"
    };
    try{

        const payloads = {
            ...payloadData.data
        }

        const dbResult = await set(con, {"id" : payloadData.data.id}, payloads);
        if(!dbResult){
            result.err = true,
            result.message = "Failed to update history"
        } else {
            result.err = false,
            result.message = "Success to update"
        }

    }catch (e) {
        const tickets = uuidv4;
        result.status = false,
        result.result = "Something went wrong"
        result.ticketId = tickets
        new Error(`Error : ${e}, ticketId : ${tickets}`);
        console.log(`command-updateHistory [x] Error : ${e}, \nTicketId : ${tickets}`);
    }
    return result;
}

const deleteDataHistory = async (payloadData) => {
    const result = {
        "err" : true,
        "message" : "Failed to delete History"
    };
    try{
        const dbResult = await del(con, payloadData.data)
        if(dbResult == null || dbResult == undefined || dbResult == ""){
            result.err = true,
            result.message = "id not found"
        } else {
            result.err = false,
            result.message = "Success to delete this history ", payloadData.data;
        }
    }catch (e) {
        const tickets = uuidv4;
        result.err = true,
        result.message = "Something went wrong"
        result.ticketId = tickets
        new Error(`Error : ${e}, ticketId : ${tickets}`);
        console.log(`command-deleteData [x] Error : ${e}, \nTicketId : ${tickets}`);
    }
    return result;
}

const findHistory = async (payloadData) => {
    const result = {
        "err" : true,
        "message" : "Failed to find history"
    };
    try{
        const dbResult = await find(con, payloadData.data, {});
        if(dbResult == null || dbResult == undefined || dbResult == ""){
            result.err = true,
            result.message = "Data not found"
        } else {
            result.err = false,
            result.message = dbResult;
        }
    }catch (e) {
        const tickets = uuidv4;
        result.err = true,
        result.message = "Something went wrong"
        result.ticketId = tickets
        new Error(`Error : ${e}, ticketId : ${tickets}`);
        console.log(`command-findHistory [x] Error : ${e}, \nTicketId : ${tickets}`);
    }
    return result;
}

module.exports = {
    createHistory,
    updateHistory,
    deleteDataHistory,
    findHistory
}
