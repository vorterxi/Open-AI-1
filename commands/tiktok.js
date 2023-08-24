const { tlang, cmd,fetchJson, getBuffer, prefix, Config } = require('../lib')
const cheerio = require('cheerio')
const axios= require('axios');

//---------------------------------------------------------------------------
async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};




//---------------------------------------------------------------------------

cmd({
            pattern: "tiktok",
	          alias :  ['tt','ttdl'],
            desc: "Downloads Tiktok Videos Via Url.",
            category: "downloader",
            filename: __filename,
            use: '<add tiktok url.>'
        },

        async(Void, citel, text) => {
 if(!text) return await citel.reply(`Please Give me Tiktok Video Link`);
 let txt = text ? text.split(" ")[0]:'';
 if (!/tiktok/.test(txt)) return await citel.reply(`Please, Give me Valid Tiktok Video Link!`);
 const { status ,thumbnail, video, audio } = await tiktokdl(txt)
 //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
 if (status) return await Void.sendMessage(citel.chat, {video : {url : video } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ* ♕` } , {quoted : citel });
 else return await citel.reply("Error While Downloading Your Video") 


})