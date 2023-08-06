const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../lib')
if(!text) return citel.reply('Give Me Insta Post Link')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ* ♕`, citel)
}
    });
