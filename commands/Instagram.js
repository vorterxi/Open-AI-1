const {smd, prefix,ig} = require('../lib')
const sigma_config = require('..config')

smd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,) => {
if(!text) return citel.reply('ɢɪᴠᴇ ᴍᴇ ɪɴsᴛᴀ ᴘᴏsᴛ ʟɪɴᴋ')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 sɪɢᴍᴀ ᴹᴰ`, citel)
}
    });
