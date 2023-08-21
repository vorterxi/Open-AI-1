/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : ᴏᴘᴇɴ ᴀⁱ ♕
 * @author : 𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕ <https://github.com/Mehar-Zubair>
 * @description : ᴏᴘᴇɴ ᴀⁱ ♕,A Multi-functional whatsapp bot.
 * @version 1.0.3 
 **/
const axios = require('axios');
const { tlang,smd } = require('../lib')
const Config = require('../config')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')


//----------------------------------------------------------------------------------------------------------------------------------------------------
smd(
  {
    pattern: "updatenow",
    alias: ["unow"],
    desc: "update bot with main repo.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
    async function updatedb() {	
      const simpleGit = require('simple-git')	
          const git = simpleGit();	
        const Heroku = require('heroku-client');	
        const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })	
          await git.fetch();	
              var commits = await git.log(['main' + '..origin/' +'main']);	
              if (commits.total === 0) {	
                return 'ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...'	
              } else {	
                    var app = await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)	
                   //   await Void.sendMessage(citel.chat,{text:'*ᴜᴘᴅᴀᴛɪɴɢ...*'})	
                  git.fetch('upstream', 'main');	
                  git.reset('hard', ['FETCH_HEAD']);	
      
                  var git_url = app.git_url.replace(	
                    "https://", "https://api:" + process.env.HEROKU_API_KEY + "@"	
                  )   	
                  try {	
                    await git.addRemote('heroku', git_url);	
                  } catch { console.log('heroku remote adding error'); }	
                  await git.push('heroku', 'main');	
      
                  return '*ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ...*\nʀᴇsᴛᴀʀᴛɪɴɢ'	
      
      
              }	
            }	
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const DB = require('../lib')
        let commits = await DB.syncgit()
        if (commits.total === 0)  {
         citel.reply(`ʜᴇʏ ${citel.pushName}. ʏᴏᴜ ʜᴀᴠᴇ ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ ɪɴsᴛᴀʟʟᴇᴅ.`)
          } else { 
             citel.reply('ʙᴜɪʟᴅ sᴛᴀʀᴛᴇᴅ...')
            let update = await DB.updatedb()
              citel.reply(update)
          }

       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...\nᴄᴜʀʀᴇɴᴛʟʏ 2 ɪɴsᴛᴀɴᴄᴇs ᴀʀᴇ ʀᴜɴɴɪɴɢ ɪɴ ᴋᴏʏᴇʙ,ᴡᴀɪᴛ ᴛᴏ sᴛᴏᴘ ᴏɴᴇ ᴏғ ᴛʜᴇᴍ.')
       let data = await redeploy();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
smd(
  {
    pattern: "getvar",
    desc: "get desired var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        if (!text.split(' ')[0]) return citel.reply(`ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ᴠᴀʀ ɴᴀᴍᴇ, ${tlang().greet}`)
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
          token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
  let h = await heroku.get(baseURI+'/config-vars')
  for (vr in h) {
  if(text.split(' ')[0]===vr) return citel.reply('ʏᴏᴜʀ ᴠᴀʀ.\n'+vr+': '+h[vr])	
  }
       }
       if(!text) return citel.reply('ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴋᴇʏ.\nᴇɢ: .ɢᴇᴛᴠᴀʀ ᴡᴏʀᴋᴛʏᴘᴇ')
       let data = await getvar(text);
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
smd(
  {
    pattern: "getallvar",
    desc: "get all vars from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
let h = await heroku.get(baseURI+'/config-vars')
let str = '*ᴀʟʟ ʏᴏᴜʀ ʜᴇʀᴏᴋᴜ ᴠᴀʀs*\n\n'
for (vr in h) {
str+= vr+':'+h[vr]+'\n'
}
citel.reply(str)
       }
       let data = await getallvar();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
smd(
  {
    pattern: "setvar",
    desc: "set var in koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text.split(':')[1]) return citel.reply('*ᴡʀᴏɴɢ ғᴏʀᴍᴀᴛ.*\ɴᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴋᴇʏ ᴀɴᴅ ᴠᴀʟᴜᴇ.\nᴇɢ: .sᴇᴛᴠᴀʀ ᴛʜᴇᴍᴇ:ᴍᴢ')
       if (Config.heroku=true){
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
          token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
          body: {
                  [text.split(':')[0]]: text.split(':')[1],
          },
        });
        await citel.reply(`ᴠᴀʀ ${text.split(':')[0]} : ${text.split(':')[1]} ʜᴀs ʙᴇᴇɴ sᴇᴛ sᴜᴄᴄᴇssғᴜʟʟʏ.`);
       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...\nᴄᴜʀʀᴇɴᴛʟʏ 2 ɪɴsᴛᴀɴᴄᴇs ᴀʀᴇ ʀᴜɴɴɪɴɢ ɪɴ ᴋᴏʏᴇʙ,ᴡᴀɪᴛ ᴛᴏ sᴛᴏᴘ ᴏɴᴇ ᴏғ ᴛʜᴇᴍ.')
       let data = await change_env(text)
       return citel.reply(data)
  })

//----------------------------------------------------------------------------------------------------------------------------------------------------
smd(
  {
    pattern: "delvar",
    desc: "delete var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text) return citel.reply('ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴋᴇʏ\nᴇɢ: .ᴅᴇʟᴠᴀʀ ᴘᴏʀᴛ')
       let check = await get_deployments()
       if(check==='true') return citel.reply('ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...\nᴄᴜʀʀᴇɴᴛʟʏ 2 ɪɴsᴛᴀɴᴄᴇs ᴀʀᴇ ʀᴜɴɴɪɴɢ ɪɴ ᴋᴏʏᴇʙ,ᴡᴀɪᴛ ᴛᴏ sᴛᴏᴘ ᴏɴᴇ ᴏғ ᴛʜᴇᴍ.')
       let data = await delvar(text)
       return citel.reply(data)
  })
//-------------------------------------------------------------------------------------------------------------------------------

