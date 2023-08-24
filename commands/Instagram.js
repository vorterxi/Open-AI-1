const {smd, prefix,ig} = require('../lib')
const sigma_config = require('..config')

smd({
        pattern: "ig",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,) => {
if(!text) return citel.reply('ɢɪᴠᴇ ᴍᴇ ɪɴsᴛᴀ ᴘᴏsᴛ ʟɪɴᴋ')
const link = "https://www.instagram.com/p/Ctv11DiPfV5/?igshid=NTc4MTIwNjQ2YQ=="

ig(link)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
    });
