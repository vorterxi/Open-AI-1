
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

const {cmd,botpic} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const sɪɢᴍᴀ_Config = require('../lib')
cmd({
        pattern: "pastebin",
        alias: ["pbin"],
        desc: "create paste of text",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel,text) => {
        if(!citel.quoted) return citel.reply('ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴀɴʏ ᴛᴇxᴛ ᴛᴏ ɢᴇᴛ ʟɪɴᴋ.')
        let data = await pastebin.createPaste(citel.quoted.text, "sɪɢᴍᴀ ᴹᴰ-Pastebin")
        
        
        let Maher = {
            image: { url: await botpic() },
            text: data,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: `${Gname}`,
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `${waUrl}`,}}}
        citel.reply(Maher)
    }
);
