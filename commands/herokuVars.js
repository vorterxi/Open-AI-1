const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');

if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY ){
        
         cmd({
             pattern: "setsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("Number Already Exist In Sudo");
    global.sudo += ',' + user ;
const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*${user} Added Succesfully.*\nSudo Numbers : ${newVarValue}`); })
.catch(error => citel.reply('Error While Adding new Sudo :'+ error));

         })

//--------------------------------------------------------------------
 cmd({
             pattern: "getsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
async(Void, citel, text) => {  return await  citel.reply(global.sudo);})
//-------------------------------------------------------------------------

 cmd({
             pattern: "delsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
  async(Void, citel, text) => {
    
if(!citel.quoted) return citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("User not found in the Sudo List\n Sudo Numbers : " + global.sudo );



const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => 
      { 
   console.log(data);
   return citel.reply(`*${user} Deleted Succesfully.*\nSudo Numbers : ${newVarValue}`);
      })
  
.catch(error => {     return citel.reply('Error While Adding new Sudo :'+ error);      })
 
})     
        }
