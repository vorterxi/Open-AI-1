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


 const { tlang, getAdmin, prefix, Config, sck, sck1, fetchJson, runtime,cmd,getBuffer } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");



  //---------------------------------------------------------------------------
 cmd({
    pattern: "setwelcome",
    alias: ["swel"],
    desc: "sets welcome message in specific group.",
    category: "misc",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('ᴡᴇʟᴄᴏᴍᴇ ᴀᴅᴅᴇᴅ ғᴏʀ ᴛʜɪs ɢʀᴏᴜᴘ')
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('ᴡᴇʟᴄᴏᴍᴇ ᴜᴘᴅᴀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.')
                
            }      
}
)
 //---------------------------------------------------------------------------
cmd({
    pattern: "setgoodbye",
    alias: ["sbye"],
    desc: "sets goodbye message in specific group.",
    category: "misc",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('ɢᴏᴏᴅʙʏᴇ ᴀᴅᴅᴇᴅ ғᴏʀ ᴛʜɪs ɢʀᴏᴜᴘ.');
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('ɢᴏᴏᴅʙʏᴇ ᴜᴘᴅᴀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.');     
            }      
}
)
 //---------------------------------------------------------------------------
cmd({
            pattern: "whois",
            desc: "Makes photo of replied sticker.",
            category: "user",
            use: '<reply to any person>',
            filename: __filename
        },
async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴀ ᴘᴇʀsᴏɴ`);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
            catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
            
            let username = await sck1.findOne({ id: citel.quoted.sender });
            var tname = username.name;

            
         return await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ *•ᴘᴇʀsᴏɴ's ɪɴғᴏʀᴍᴀᴛɪᴏɴ•*
┃✗ *•ɴᴀᴍᴇ•* ${tname}
┃✗ *•ɴᴜᴍ•* ${num}
┃✗ *•ʙɪᴏ•*  ${bioo}
┃✗ *•sᴇᴛ-ᴀᴛ•* ${setAt}
┃✗   *•ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ•*
┃✗ *•ᴀᴜᴛʜᴏʀ•* ᴍ ᴢᴜʙᴀɪʀ
┃✗ *•ᴅᴇᴠᴇʟᴏᴘᴇʀ•* ᴍ ᴢᴜʙᴀɪʀ
┗━━━━━━━━━━⦿
`,
            },{quoted:citel});

        }
    )
//----------------------------------------------------------------------------
cmd({
            pattern: "devwarn",
            alias: ['dwarn'],
            desc: "sends warning from developer",
            category: "developer",
            use: '<reply to any person>',
            filename: __filename
        },
async(Void, citel, text,{isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.isGroup) return citel.reply(tlang().group);
            if (!citel.quoted) return citel.reply(`ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘᴇʀsᴏɴ`);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
            catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
            
            let username = await sck1.findOne({ id: citel.quoted.sender });
            var tname = username.name;

            
         return await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ *•ᴅᴇᴠᴇʟᴏᴘᴇʀ's ᴡᴀʀɴɪɴɢ•*
┃✗ *•ɴᴀᴍᴇ•* ${tname}
┃✗ *•ɴᴜᴍ•* ${num}
┃✗   *•ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ•*
┃✗ *•ᴅᴏɴ'ᴛ ᴀʙᴜsᴇ•*
┃✗ *•ᴅᴏɴ'ᴛ sᴘᴀᴍ•*
┃✗ *•ᴅᴏɴ'ᴛ ᴜsᴇ ʙᴏᴛ•*
┃✗ *•ᴅᴏɴ'ᴛ sᴇɴᴅ ʟɪɴᴋs•*
┃✗ *•ᴏᴛʜᴇʀ ᴡɪsᴇ•*
┃✗ *•ʏᴏᴜ ᴡɪʟʟ•*
┃✗ *•ʙᴇ ᴋɪᴄᴋᴇᴅ•*
┃✗ *•ᴀᴜᴛʜᴏʀ•* ᴍ ᴢᴜʙᴀɪʀ
┃✗ *•ᴅᴇᴠᴇʟᴏᴘᴇʀ•* ᴍ ᴢᴜʙᴀɪʀ
┗━━━━━━━━━━⦿
`,
            },{quoted:citel});

        }
    )
//--------------------------------------------------------------------------
 cmd({
             pattern: "vcard",
             desc: "Create Contact by given name.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴜsᴇʀ ᴡɪᴛʜ ɴᴀᴍᴇ*`);
if ( !text ) return citel.reply( `ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ᴜsᴇʀ ɴᴀᴍᴇ, \n *ᴇxᴀᴍᴘʟᴇ* : ${prefix}ᴠᴄᴀʀᴅ ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ `)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})
//---------------------------------------------------------------------------
 cmd({
             pattern: "attp",
             desc: "Makes glowing sticker of text.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
let a = await getBuffer(`https://citel-x.herokuapp.com/attp/${text}`)
 return citel.reply(a,{packname:'sɪɢᴍᴀ ᴹᴰ',author:'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ'},"sticker") 
         }
     )
 cmd({
             pattern: "ttp",
             desc: "Makes static sticker of text.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
let a = await getBuffer(`https://citel-x.herokuapp.com/ttp/${text}`)
 return citel.reply(a,{packname:'sɪɢᴍᴀ ᴹᴰ',author:'ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ'},"sticker") 
         }
     )
     //---------------------------------------------------------------------------
/* cmd({
             pattern: "exec",
             desc: "Evaluates quoted code with given language.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             try {
                 const code = {
                     script: citel.quoted.text,
                     language: text[1],
                     versionIndex: "0",
                     stdin: text.slice(2).join(" "),
                     clientId: '694805244d4f825fc02a9d6260a54a99',
                     clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
                 };
                 request({
                     url: "https://api.jdoodle.com/v1/execute",
                     method: "POST",
                     json: code
                 }, function(_error, _response, body) {
                    return citel.reply("> " + text[1] + "\n\n" + "```" + body.output + "```");
                 });
             } catch (error) {
                 console.log(error);
             }
         }
     )*/
     //---------------------------------------------------------------------------
 cmd({
             pattern: "readmore",
             desc: "Adds *readmore* in given text.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
            return await citel.reply(text.replace(/\+/g, (String.fromCharCode(8206)).repeat(4001)))
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "steal",
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`*ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ*`);
             let mime = citel.quoted.mtype
             var pack;
             var author;
             if (text) {
                 anu = text.split("|");
                 pack = anu[0] !== "" ? anu[0] : citel.pushName + '♥️';
                 author = anu[1] !== "" ? anu[1] : Config.author;
             } else {
                 pack = citel.pushName;
                 author = "♥️";
             }
                 let media = await citel.quoted.download();
                 citel.reply("*ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇǫᴜᴇsᴛ*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "uptime",
             alias: ["runtime","um"],
             desc: "Tells runtime/uptime of bot.",
             category: "user",
             filename: __filename,
         },
         async(Void, citel, text) => {
             const upt = runtime(process.uptime())
             return citel.reply(`ᴜᴘᴛɪᴍᴇ ᴏғ ${tlang().title} ɪs: ${upt}`)
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "wm",
             desc: "Makes wa.me of quoted or mentioned user.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            return citel.reply(`https://wa.me/${users}`)
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "pick",
             desc: "Picks random user from Group",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, match) => {
             if (!match) return citel.reply("*ᴡʜɪᴄʜ ᴛʏᴘᴇ ᴏғ ᴜsᴇʀ ʏᴏᴜ ᴡᴀɴᴛ?*");
             const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                 .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
             let member = participants.map((u) => u.id);
             let me = citel.sender;
             let pick = member[Math.floor(Math.random() * member.length)];
             Void.sendMessage(citel.chat, {
                 text: `ᴛʜᴇ ᴍᴏsᴛ ${match} ᴀʀᴏᴜɴᴅ ᴜs ɪs *@${pick.split("@")[0]}*`,
                 mentions: [pick],
             }, {
                 quoted: citel,
             });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "npm",
             desc: "searches npm packages",
             category: "search",
             use: '<package name>',
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ʟɪɴᴋ.')
             axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({ data }) => {
                 let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
                 citel.reply(txt)
             }).catch(e => console.log(e))
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "fliptext",
             alias: ["ftext"],
             desc: "Flips given text.",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text) => {
            var _0x58b762=_0x56f4;(function(_0x4aa7c8,_0x2bb717){var _0x54041f=_0x56f4,_0x33dc2c=_0x4aa7c8();while(!![]){try{var _0x14ed02=parseInt(_0x54041f(0x18d))/0x1*(-parseInt(_0x54041f(0x18f))/0x2)+-parseInt(_0x54041f(0x190))/0x3*(parseInt(_0x54041f(0x189))/0x4)+parseInt(_0x54041f(0x183))/0x5*(parseInt(_0x54041f(0x185))/0x6)+parseInt(_0x54041f(0x187))/0x7+-parseInt(_0x54041f(0x184))/0x8+-parseInt(_0x54041f(0x18c))/0x9*(parseInt(_0x54041f(0x191))/0xa)+-parseInt(_0x54041f(0x186))/0xb*(-parseInt(_0x54041f(0x18e))/0xc);if(_0x14ed02===_0x2bb717)break;else _0x33dc2c['push'](_0x33dc2c['shift']());}catch(_0x43aa28){_0x33dc2c['push'](_0x33dc2c['shift']());}}}(_0x31ba,0xb7149));function _0x56f4(_0x13600b,_0x4abfd6){var _0x31bafc=_0x31ba();return _0x56f4=function(_0x56f465,_0x46fc44){_0x56f465=_0x56f465-0x17f;var _0x21cc75=_0x31bafc[_0x56f465];return _0x21cc75;},_0x56f4(_0x13600b,_0x4abfd6);}if(!text)return citel['reply'](_0x58b762(0x18b)+prefix+_0x58b762(0x181));flipe=text[_0x58b762(0x18a)]('')['reverse']()[_0x58b762(0x182)](''),citel[_0x58b762(0x180)](_0x58b762(0x188)+text+_0x58b762(0x192)+flipe+_0x58b762(0x17f));function _0x31ba(){var _0x4fb92d=['367988QJcbQk','split','ᴇxᴀᴍᴘʟᴇ\x20:\x20','1162881LKWsFa','1iDRZRD','122436aHJXpC','911024MXqJpm','12iKTuYN','70tktvCg','\x0a┃✗\x20*•ғʟɪᴘᴇᴅ\x20ᴛᴇxᴛ•*\x0a┃✗\x20','\x0a┗━━━━━━━━━━⦿','reply','ғʟɪᴘ\x20ᴛᴇxᴛ\x20ɪ\x20ᴀᴍ\x20sɪɢᴍᴀ\x20ᴹᴰ','join','7468910eNUTjr','1042824OwixsW','6RUIwvu','737OihnQd','3015810KLoITQ','┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20```\x20\x20\x20•ᴛᴇxᴛ\x20ғʟɪᴘᴘᴇʀ\x20ᴛᴏᴏʟ•\x20\x20\x20```\x0a┃✗\x20*•ɢɪᴠᴇɴ\x20ᴛᴇxᴛ•*\x0a┃✗\x20'];_0x31ba=function(){return _0x4fb92d;};return _0x31ba();}
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "mp4fromurl",
             alias: ["m4u"],
             desc: "download mp4 from url.",
             category: "downloader",
             use: '<url>',
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ʟɪɴᴋ!`);
             Void.sendMessage(citel.chat, {
                 video: {
                     url: text.split(" ")[0],
                 },
                 caption: "╰┈➤𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 sɪɢᴍᴀ ᴹᴰ",
                 contextInfo: {
                     externalAdReply: {
                         title: tlang().title,
                         body: `ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ`,
                         thumbnail: log0,
                         mediaType: 2,
                         mediaUrl: ``,
                         sourceUrl: ``,
                     },
                 },
             }, {
                 quoted: citel,
             });
 
         }
     )
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "emix",
             desc: "Mixes two emojies.",
             category: "sticker",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix}ᴇᴍɪx 😅,🤔`);
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
             let emoji1 = text.split(",")[0] ;
             let emoji2 = text.split(",")[1];

  const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`);
  const data = await response.json();
  if(data.locale=="") return citel.reply(`ᴄᴀɴ'ᴛ ᴄʀᴇᴀᴛᴇ ᴍɪxᴛᴜʀᴇ, ᴘʟᴇᴀsᴇ ᴛʀʏ ᴏᴛʜᴇʀ ᴇᴍᴏᴊɪᴇs`)
  else {
let media =await getBuffer(data.results[0].url)

let sticker = new Sticker(media, {
                    pack: Config.packname, 
                    author: Config.author, 
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                });
const buffer = await sticker.toBuffer();
 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}
   
  
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "sigma",
             alias : ["chatbot","schat","sigmachatbot"],
             desc: "activates and deactivates chatbot.\nuse buttons to toggle.",
             category: "developer",
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib/');
             let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
             switch (text.split(" ")[0])
             {
                 case "on":
                     {
                         if (chatbott.worktype == "true") return citel.reply("*sɪɢᴍᴀ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ*")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         return await citel.reply('*sɪɢᴍᴀ ᴀᴄᴛɪᴠᴀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ*')   
                     }
                     break
                 case "off":
                     {
                                if (chatbott.worktype == "false") return citel.reply("*sɪɢᴍᴀ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ*")
                                await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                                return await citel.reply('*sɪɢᴍᴀ ᴅᴇ-ᴀᴄᴛɪᴠᴀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ*')
                     }
                     break
                 default:
                     {
                        if (chatbott.worktype == "false") return await citel.reply(`*sɪɢᴍᴀ ᴄʜᴀᴛʙᴏᴛ sᴛᴀᴛᴜs: ғᴀʟsᴇ* \n*sɪɢᴍᴀ ᴄʜᴀᴛʙᴏᴛ ᴅɪsᴀʙʟᴇᴅ ʏᴇᴛ, ᴛᴏ ᴇɴᴀʙʟᴇ ᴛʏᴘᴇ: ${prefix}sɪɢᴍᴀ ᴏɴ*`)
                        else return await citel.reply(`*sɪɢᴍᴀ ᴄʜᴀᴛʙᴏᴛ sᴛᴀᴛᴜs: ᴛʀᴜᴇ* \n*sɪɢᴍᴀ ᴄʜᴀᴛʙᴏᴛ ᴇɴᴀʙʟᴇᴅ ʏᴇᴛ, ᴛᴏ ᴅɪsᴀʙʟᴇ ᴛʏᴘᴇ: ${prefix}sɪɢᴍᴀ ᴏғғ*`)
                        /*
                            let buttons = [{  buttonId: `${prefix}chatbot on`,   buttonText: {   displayText: "Turn On" },  type: 1, },
                                          {   buttonId: `${prefix}chatbot off`,  buttonText: { displayText: "Turn Off" },   type: 1, }];
                                           
                            await Void.sendButtonText(citel.chat, buttons, `Lydea Status: ${chatbott.worktype} `, Config.botname, citel);
                        */
                     }
             }
 
 
      })
     //---------------------------------------------------------------------------
 cmd({
             pattern: "ebinary",
             desc: "encode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ʙᴇ ᴇɴᴄᴏᴅᴇᴅ.`);
 
                 let textt = text || citel.quoted.text
                 let eb = await eBinary(textt);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "dbinary",
             desc: "decode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ʙᴇ ᴅᴇᴄᴏᴅᴇᴅ.`);
                 let eb = await dBinary(text);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
cmd({
  pattern: "bot",
  desc: "activates and deactivates bot.\nuse buttons to toggle.",
  category: "misc",
  filename: __filename,
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return citel.reply(tlang().owner)
switch (text.split(" ")[0]) {
 case 'on':{
         let checkgroup = await sck.findOne({ id: citel.chat })
         if (!checkgroup) {
             await new sck({ id: citel.chat, botenable: "true" }).save()
             return citel.reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *${tlang().title}*`)
         } else {
             if (checkgroup.botenable == "true") return citel.reply("ʙᴏᴛ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ")
             await sck.updateOne({ id: citel.chat }, { botenable: "true" })
             return citel.reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *${tlang().title}*`)
         }
     }
  
 break
case 'off':{
            {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!checkgroup) {
                 await new sck({ id: citel.chat, botenable: "false" })
                     .save()
                 return citel.reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *${tlang().title}*`)
             } else {
                 if (checkgroup.botenable == "false") return citel.reply("ʙᴏᴛ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ")
                 await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                 return citel.reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *${tlang().title}*`)
             }
         }
}
break
default:{
let checkgroup = await sck.findOne({ id: citel.chat })
let buttons = [{
          buttonId: `${prefix}ʙᴏᴛ ᴏɴ`,
          buttonText: {
              displayText: "ᴛᴜʀɴ ᴏɴ",
          },
          type: 1,
      },
      {
          buttonId: `${prefix}ʙᴏᴛ ᴏғғ`,
          buttonText: {
              displayText: "ᴛᴜʀɴ ᴏғғ",
          },
          type: 1,
      },
  ];
  await Void.sendButtonText(citel.chat, buttons, `ʙᴏᴛ sᴛᴀᴛᴜs ɪɴ ɢʀᴏᴜᴘ: ${checkgroup.botenable}`, Void.user.name, citel);
}
}
})   
         
     //---------------------------------------------------------------------------
 cmd({
             pattern: "antilink",
             desc: "activates and deactivates antilink.\nuse buttons to toggle.",
             category: "group",
             filename: __filename,
         },
         async(Void, citel, text,{isCreator}) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
             if(!isCreator) return citel.reply(tlang().owner)
             const groupAdmins = await getAdmin(Void, citel)
             const botNumber = await Void.decodeJid(Void.user.id)
             const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins) return citel.reply(tlang().admin)
             if (!isBotAdmins) return citel.reply(tlang().botadmin)
             let buttons = [{
                     buttonId: `${prefix}ᴀᴄᴛ ᴀɴᴛɪʟɪɴᴋ`,
                     buttonText: {
                         displayText: "ᴛᴜʀɴ ᴏɴ",
                     },
                     type: 1,
                 },
                 {
                     buttonId: `${prefix}ᴅᴇᴀᴄᴛ ᴀɴᴛɪʟɪɴᴋ`,
                     buttonText: {
                         displayText: "ᴛᴜʀɴ ᴏғғ",
                     },
                     type: 1,
                 },
             ];
             await Void.sendButtonText(citel.chat, buttons, `ᴀᴄᴛɪᴠᴀᴛᴇ ᴀɴᴛɪʟɪɴᴋ:ᴅᴇʟᴇᴛᴇ ʟɪɴᴋs + ᴋɪᴄᴋ`, Void.user.name, citel);
         }
     )
     cmd({
        pattern: 'ss',
        alias :['webss' , 'fullss'],
        category: "search",
        desc: "Provides screenshot of given url",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text) => {
let limit = 5;
try {
if (!text) return citel.reply("ɢɪᴠᴇ ᴍᴇ ᴜʀʟ/ʟɪɴᴋ!");
let urll = `https://s.vercel.app/api?url=${text.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
let media  = await getBuffer(urll)
return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
}
catch (err) { return citel.reply("ᴇʀʀᴏʀ ᴡʜɪʟᴇ ғᴇᴛᴄʜɪɴɢ sɴᴀᴘsʜᴏᴛ")}
    }
)


     //---------------------------------------------------------------------------
 cmd({ on: "body" }, async(Void, citel) => {
     if (Config.autoreaction === 'true' && citel.text.startsWith(prefix)) {
         const emojis = ['👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑', '👑']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
 })
