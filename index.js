
require("dotenv").config()
const express = require("express");
const rwClient = require("./twitterclient");
const scheduleDM = require('node-schedule');

const start = ()=> {

    const app = express();
    const port = process.env.PORT;
    app.listen (port,()=>{
        console.log(`server connected to port: ${port}`)
    })
}
start();



const userId = "860128607108161536-1095227047025115137";
const test = async(msg)=> {
    try {
        await rwClient.v2.sendDmInConversation(userId, {text:msg});
    } catch (error) {
        console.log(error);
    }
}

const rule = new scheduleDM.RecurrenceRule();
rule.hour =14;
rule.minute =45;
rule.second =0;
rule.tz = 'Etc/GMT-8';

const job = scheduleDM.scheduleJob(rule,()=>{
    console.log('tite');
});