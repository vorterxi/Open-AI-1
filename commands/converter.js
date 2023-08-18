/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : ᴏᴘᴇɴ ᴀⁱ ♕
 * @author : 𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕ <https://github.com/Mehar-Zubair>
 * @description : ᴏᴘᴇɴ ᴀⁱ ♕,A Multi-functional whatsapp bot.
 * @version 1.0.3 
 **/


const axios = require('axios')
const { sck1, tiny, fancytext,getBuffer, listall,cmd , TelegraPh , Config,ffmpeg} = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

    //---------------------------------------------------------------------------
    cmd({
        pattern: "photo",
        desc: "Makes photo of replied sticker.",
        category: "converter",
        use: '<reply to any gif>',
        filename: __filename
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!citel.quoted) return citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ sᴛɪᴄᴋᴇʀ`)
        let mime = citel.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
            let buffer = fs.readFileSync(media)
            Void.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
          
         fs.unlink(media, (err) => {
         if (err) { return console.error('File Not Deleted from From TOPHOTO AT : ' , media,'\n while Error : ' , err);  }
         else return console.log('File deleted successfully in TOPHOTO  at : ' , media);
         });
         
        })
        
} else return citel.reply ("ʀᴇᴘʟʏ ᴛᴏ ᴀ ɴᴏɴ ᴀɴɪᴍᴀᴛᴇᴅ sᴛɪᴄᴋᴇʀ")
    }
)
//---------------------------------------------------------------------------

cmd({
         pattern: "vv",
         alias : ['viewonce','retrive'],
         desc: "Flips given text.",
         category: "misc",
         use: '<query>',
         filename: __filename
     },
     async(Void, citel, text) => {
try {
const quot = citel.msg.contextInfo.quotedMessage.viewOnceMessageV2;
if(quot)
{
if(quot.message.imageMessage) 
{ console.log("Quot Entered") 
   let cap =quot.message.imageMessage.caption;
   let anu = await Void.downloadAndSaveMediaMessage(quot.message.imageMessage)
   return Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
if(quot.message.videoMessage) 
{
   let cap =quot.message.videoMessage.caption;
   let anu = await Void.downloadAndSaveMediaMessage(quot.message.videoMessage)
   return Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}
 
}
//else citel.reply("```This is Not A ViewOnce Message```") 
       
}  
     
catch(e) {  console.log("error" , e ) }     

       
if(!citel.quoted) return citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴀ ᴠɪᴇᴡ-ᴏɴᴄᴇ ᴍᴇssᴀɢᴇ")           
if(citel.quoted.mtype === "viewOnceMessage")
{ console.log("ViewOnce Entered") 
 if(citel.quoted.message.imageMessage )
{ 
  let cap =citel.quoted.message.imageMessage.caption;
  let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.imageMessage)
  Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
else if(citel.quoted.message.videoMessage )
{
  let cap =citel.quoted.message.videoMessage.caption;
  let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.videoMessage)
  Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}

}
else return citel.reply("ᴛʜɪs ɪs ɴᴏᴛ ᴀ ᴠɪᴇᴡ-ᴏɴᴄᴇ ᴍᴇssᴀɢᴇ")

})    //---------------------------------------------------------------------------
cmd({
            pattern: "quotely",
            desc: "Makes Sticker of quoted text.",
            alias: ["q"],
            category: "converter",
            use: '<reply to any message.>',
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ᴍᴇssᴀɢᴇ");
            let textt = citel.quoted.text;
            let pfp;
            try {
                pfp = await Void.profilePictureUrl(citel.quoted.sender, "image");
            } catch (e) {
                pfp = THUMB_IMAGE;
            }
            let todlinkf = ["#FFFFFF", "#000000"];
            let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(citel.quoted.sender)
            }
            let body = {
                type: "quote",
                format: "png",
                backgroundColor: todf,
                width: 512,
                height: 512,
                scale: 3,
                messages: [{
                    avatar: true,
                    from: {
                        first_name: tname,
                        language_code: "en",
                        name: tname,
                        photo: {
                            url: pfp,
                        },
                    },
                    text: textt,
                    replyMessage: {},
                }, ],
            };
            let res = await axios.post("https://bot.lyo.su/quote/generate", body);
            let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
            return citel.reply(img,{packname:'KING',author:'KING'},"sticker")

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "converter",
            use: '56 Sigma MALE',
            react: "👑",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "ғᴀɴᴄʏ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴏʀ\n\nᴇxᴀᴍᴘʟᴇ: .ғᴀɴᴄʏ 56 sɪɢᴍᴀ ᴍᴀʟᴇ \n\n"
                );
                listall("SIGMA MALE").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "tiny",
            desc: "Makes url tiny.",
            category: "converter",
            use: '<url>',
            react: "👑",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ʟɪɴᴋ ᴛᴏ sʜᴏʀᴛᴇɴ ɪᴛ')
            try {
                link = text.split(" ")[0];
                anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.reply(`*ʏᴏᴜʀ sʜᴏʀᴛᴇɴᴇᴅ ᴜʀʟ*\n\n${anu.data}\n\n        *•ᴘᴏᴡᴇʀᴇᴅ ʙʏ•* sɪɢᴍᴀ ᴹᴰ`);
            } catch (e) {
                console.log(e);
            }
        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    cmd({
        pattern: "circle",
        alias: ["circlestic","circlesticker","cs"],
        desc: "Makes sticker of replied image/video.",
        category: "sticker",
filename: __filename,
        use: '<reply to any image/video.>'
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ.*`);
      //console.log("Quoted Data here : ",citel.quoted);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
       if (mime =="imageMessage" || mime =="stickerMessage") {
            let media = await citel.quoted.download();
            //citel.reply("*Processing Your request*");
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: StickerTypes.CIRCLE ,
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        }else return citel.reply("*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ*");

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "crop",
        alias: ["cropstic","csticker","cropsticker","cr"],
        desc: "Makes sticker of replied image/video.",
        category: "sticker",
filename: __filename,
        use: '<reply to any image/video.>'
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ.*`);
      //console.log("Quoted Data here : ",citel.quoted);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
        if (mime =="imageMessage"  || mime =="stickerMessage") {
            let media = await citel.quoted.download();
            //citel.reply("*Processing Your request*");
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: StickerTypes.CROPPED,
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        }else return citel.reply("*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ*");

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "round",
        alias: ["roundstic","roundsticker","rd"],
        desc: "Makes sticker of replied image/video.",
        category: "sticker",
filename: __filename,
        use: '<reply to any image/video.>'
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return citel.reply(`*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ.*`);
      //console.log("Quoted Data here : ",citel.quoted);
        let mime = citel.quoted.mtype
        pack = Config.packname
        author = Config.author
       if (mime =="imageMessage" || mime =="stickerMessage") {
            let media = await citel.quoted.download();
            //citel.reply("*Processing Your request*");
            let sticker = new Sticker(media, {
                pack: pack, // The pack name
                author: author, // The author name
                type: StickerTypes.ROUNDED ,
                categories: ["🤩", "🎉"], // The sticker category
                id: "12345", // The sticker id
                quality: 75, // The quality of the output file
            });
            const buffer = await sticker.toBuffer();
            return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
        }else return citel.reply("*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ*");

    }
)
cmd({
    pattern: "toaudio",
    alias:['mp3','tomp3'],
    desc: "changes type to audio.",
    category: "converter",
    use: '<reply to any Video>',
    filename: __filename
},
async(Void, citel, text) => {
    if (!citel.quoted) return citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ᴠɪᴅᴇᴏ`);
    let mime = citel.quoted.mtype
if (mime =="audioMessage" || mime =="videoMessage")
{
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
     const { toAudio } = require('../lib');
     let buffer = fs.readFileSync(media);
    let audio = await toAudio(buffer);
    Void.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });
 

fs.unlink(media, (err) => {
if (err) { return console.error('File Not Deleted from From TOAUDIO AT : ' , media,'\n while Error : ' , err);  }
else return console.log('File deleted successfully in TOAUDIO MP3 at : ' , media);
});

}
else return citel.reply ("ᴘʟᴇᴀsᴇ, ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴅᴇᴏ")
}
)
