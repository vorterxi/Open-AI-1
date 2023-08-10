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
    if (commits.total === 0) { return 'You already have the latest version installed.'; } 
    else {
      const app = await heroku.get(`/apps/${process.env.HEROKU_APP_NAME}`);
      const gitUrl = app.git_url.replace('https://', `https://api:${process.env.HEROKU_API_KEY}@`);
      try { await git.addRemote('heroku', gitUrl); } catch(e) { console.log('Heroku remote adding error');  }
      await git.push('heroku', 'main');
      return 'Bot updated. Restarting.';
    }
  }
    //---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "misc",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
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
  //-------------------------------------------------------------
if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY )
{
 
cmd({
                 pattern: "un",
                 desc: "Shows repo\'s refreshed commits.",
                 category: "tools",
                 filename: __filename
             },
        async(Void, citel, text,{ isCreator }) => {
            if(!isCreator) return await citel.reply("Only Owner Can Use This Command")
            let commits = await DB.syncgit()
            if (commits.total === 0) return await citel.reply(`YOU HAVE LATEST VERSION INSTALLED!`)
            let update = await DB.sync()
            let buttonMessaged = 
            {
                 text:" *> Please Wait Updater Started...!*\n  *───────────────────────────*\n"+update +"\n  *───────────────────────────*",
                 footer: 'UPDATER --- sᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo',
                 headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged);
            await require("simple-git")().reset("hard",["HEAD"])
            await require("simple-git")().pull()
            await citel.reply("*Successfully updated. Now You Have Latest Version Installed!*")
            process.exit(0);
     })
}
