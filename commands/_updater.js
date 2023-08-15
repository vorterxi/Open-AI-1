/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : ᴏᴘᴇɴ ᴀⁱ� ♕
 * @author : 𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕ <https://github.com/Mehar-Zubair>
 * @description : ᴏᴘᴇɴ ᴀⁱ� ♕,A Multi-functional whatsapp bot.
 * @version 1.0.3 
 **/


const DB = require('../lib/scraper')
const { tlang, Config, prefix,cmd } = require('../lib')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
//---------------------------------------------------------------------------

 


async function updateHerokuApp() {
    const heroku = new Heroku({ token: process.env.HEROKU_API_KEY });
    await git.fetch();
    const commits = await git.log(['main..origin/main']);
    if (commits.total === 0) { return 'ʏᴏᴜ ᴀʟʀᴇᴀᴅʏ ʜᴀᴠᴇ ᴛʜᴇ ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ ɪɴsᴛᴀʟʟᴇᴅ.'; } 
    else {
      const app = await heroku.get(`/apps/${process.env.HEROKU_APP_NAME}`);
      const gitUrl = app.git_url.replace('https://', `https://api:${process.env.HEROKU_API_KEY}@`);
      try { await git.addRemote('heroku', gitUrl); } catch(e) { console.log('ʜᴇʀᴏᴋᴜ ʀᴇᴍᴏᴛᴇ ᴀᴅᴅɪɴɢ ᴇʀʀᴏʀ');  }
      await git.push('heroku', 'main');
      return 'ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ. ʀᴇsᴛᴀʀᴛɪɴɢ...';
    }
  }
    //---------------------------------------------------------------------------
cmd({
            pattern: "update",
            alias: ["ud"],
            desc: "Shows repo\'s refreshed commits.",
            category: "misc",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`ʜᴇʏ ${citel.pushName}. ʏᴏᴜ ʜᴀᴠᴇ ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ ɪɴsᴛᴀʟʟᴇᴅ.`)
            } else {
                let update = await DB.sync()
                  let buttonMessaged = {
                    text: update,
                    footer: 'UPDATER',
                    headerType: 4
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }

        }
    )
