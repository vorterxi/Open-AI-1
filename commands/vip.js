//-----------[F B D L D O W N]----

const bocil = require('@bochilteam/scraper');
const {
    fetchBuffer
} = require("../lib/module/function.js");
module.exports = {
    name: "fb",
    description: "To download Facebook",
    category: "Download",
    start: async(vorterx, m, {
        prefix, toReact, text, args
    }) => {
        try {
            if (!text) {
                await toReact("⛔");
                return m.reply(`Please Provide a Valid Facebook Video Link`);
            } else {
                await toReact("📺");
                bocil.facebookdlv2(`${text}`).then(async (data) => {

                    let aztec = `╭────❰ F A C B K - D W N  L D\n  
❒ TITLE: FACBOOK\n
❒ HD QUALTY: 720p\n
╰─────────────⭓`;
                    vorterx.sendMessage(m.from, {
                        video: {
                            url: data.result[0].url
                        }, caption: aztec
                    }, {
                        quoted: m
                    })
                })}
        } catch (error) {
            vorterx.sendMessage(m.from, {
                text: "Error occurred while processing"})
        }
    }
};