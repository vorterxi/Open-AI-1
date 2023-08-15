
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

const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        alias: ["pbin"],
        desc: "To check ping",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴀɴʏ ᴛᴇxᴛ ᴛᴏ ɢᴇᴛ ʟɪɴᴋ.')
        let data = await pastebin.createPaste(citel.quoted.text, "sɪɢᴍᴀ ᴹᴰ-Pastebin")
        citel.reply(`ʜᴇʀᴇ ɪs ʏᴏᴜʀ ʟɪɴᴋ \n${data}\n╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 sɪɢᴍᴀ ᴹᴰ`)
    }
);
