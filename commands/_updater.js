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


const sɪɢᴍᴀ_DB = require('../lib/scraper')
const { tlang, Config, prefix,cmd , botpic} = require('../lib')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');

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
            let sɪɢᴍᴀ_commits = await sɪɢᴍᴀ_DB.syncgit()
            if (sɪɢᴍᴀ_commits.total === 0) {
                citel.reply(`ʜᴇʏ ${citel.pushName}. ʏᴏᴜ ʜᴀᴠᴇ ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ ɪɴsᴛᴀʟʟᴇᴅ.`)
            } else {
                let sɪɢᴍᴀ_update = await sɪɢᴍᴀ_DB.sync()
                  let Maher = {
                    image: { url: await botpic() },
                    text: sɪɢᴍᴀ_update,
                    footer: 'UPDATER',
                    headerType: 4,
                   contextInfo: {
                       externalAdReply: {
                       title: `${Gname}`,
                       body: "Easy to Use",
                       thumbnail: log0,
                       mediaType: 4,
                       mediaUrl: '',
                       sourceUrl: `${waUrl}`,}}}
                
                return await Void.sendMessage(citel.chat, Maher);}
            

        }
    )
