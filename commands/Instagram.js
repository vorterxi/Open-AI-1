const { Insta, cmd , Config , prefix } = require('../lib')
cmd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Give Me Insta Post Link')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ* ♕`, citel)
}
    });

//----------------------------------------------------------------------------------
cmd({
    pattern: "insta2",
    desc: "Downloads Instagram videos.",
    category: "downloader",
    filename: __filename,
    use: '<add fb url.>'
},
async(Void, citel, text) => {
if(!text) return citel.reply('Give Me Insta Post Link')
let insta = await instagram(text)
for (let i = 0; i < insta.length; i++) {
const { instagram } = require('instagram-downloader')
await Void.sendFileUrl(citel.chat, insta[i], Config.send + Config.caption, citel)
}
});

