//-----------[F B D L D O W N]----
//Copright: @aztec-md
//github: https://github.com/Vorterx

const { smd, getBuffer} = require("../lib");
const bocil = require('@bochilteam/scraper');
smd ({
       pattern: "facebook",
       alias: ["fb"],
       category: "downloader",
       filename: __filename,
       use: '<add fb url.>'
    },
    async(Void, citel, text) => {
    { 
        try {
            if (!text) 
                       return citel.reply(`Please Provide a Valid Facebook Video Link`);
            } else {
                await toReact("📺");
                bocil.facebookdlv2(`${text}`).then(async (data) => {

                    let aztec = `F A C E B - D O W N\n  
Title: FACBOOK\n\n`;
                    Void.sendMessage(citel.chat, {
                        video: {
                            url: data.result[0].url
                        }, caption: aztec
                    }, {
                        quoted: citel
                    })
                })}
        } catch (error) {
            Void.sendMessage(citel.chat, {
                text: "Error occurred while processing"})
        };
