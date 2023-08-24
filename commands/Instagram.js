const { smd , prefix,Config} = require('../lib')
const ig = require('instagram-url-dl')


smd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,) => {
if(!text) return citel.reply('ɢɪᴠᴇ ᴍᴇ ɪɴsᴛᴀ ᴘᴏsᴛ ʟɪɴᴋ')
let response = await ig(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}`, citel)
}
    });
