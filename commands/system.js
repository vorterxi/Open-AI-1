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


const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, Config ,alive  } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');


//---------------------------------------------------------------------------
cmd({
    pattern: "rmbg",
    alias : ['removebg'],
    category: "misc",
    filename: __filename,
    desc: "Remove image Background."
},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*ʀᴇᴘʟʏ ᴀɴʏ ɪᴍᴀɢᴇ ᴛᴏ ʀᴇᴍᴏᴠᴇ ʙᴀᴄᴋɢʀᴏᴜɴᴅ*`)
    let mime = citel.quoted.mtype
    if(mime !='imageMessage' ) return await citel.reply("ᴘʟᴇᴀsᴇ, ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ")
    let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
    let anu = await TelegraPh(media);
    try { await fs.unlinkSync(media); } catch (error) {}            
    const formData = {  image_url: anu, size: 'auto', };
    axios.post("https://api.remove.bg/v1.0/removebg", formData, { headers: { 'X-Api-Key': Config.REMOVE_BG_KEY,  }, responseType: 'arraybuffer',})
      .then(response => {
        console.log("sending removebg image...!")
        const imageData = Buffer.from(response.data, 'binary');                
        return citel.reply(imageData, {caption:Config.caption},"image")              
      })
      .catch(error => {   return citel.reply(`*ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴠᴀʟɪᴅ ʀᴇᴍᴏᴠᴇʙɢ ᴋᴇʏ*\n\n Gᴇᴛ ʀᴇᴍᴏᴠᴇʙɢ ᴀᴘɪ ᴋᴇʏ ғʀᴏᴍ ʀᴇᴍᴏᴠᴇ.ʙɢ\n ᴛʜᴇɴ ᴘᴜᴛ ɪᴛ ɪɴ ᴠᴀʀ "REMOVE_BG_KEY"`);  });
    
})
//-----------------------------------------------------------------------------
cmd({
            pattern: "addnote",
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ᴀ ᴛᴇxᴛ ")
            await addnote(text)
            return citel.reply(`ɴᴇᴡ ɴᴏᴛᴇ ${text} ᴀᴅᴅᴇᴅ ɪɴ ᴍᴏɴɢᴏᴅʙ.`)

        }
    )
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "qr",
            category: "owner",
            filename: __filename,
            desc: "Sends CitelsVoid Qr code to scan and get your session id."
        },
        async(Void, citel, text, {isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (text) {
                let h = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)
                await Void.sendMessage(citel.chat, { image: h })
                return
            }
            let buttonMessaged = {
                image: { url: 'https://citel-x.herokuapp.com/session' },
                caption: `*sᴄᴀɴ ǫʀ ᴡɪᴛʜɪɴ 15 sᴇᴄᴏɴᴅs*\nʏᴏᴜ'ʟʟ ɢᴇᴛ sᴇssɪᴏɴ ɪᴅ ɪɴ ʏᴏᴜʀ ʟᴏɢ ɴᴜᴍʙᴇʀ.`,
                footer: ` Session`,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: 'sɪɢᴍᴀ ᴹᴰ Session',
                        body: 'Get you Session ID',
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },

                },

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,

            });
            await sleep(20 * 1000)
            return citel.reply('ʏᴏᴜʀ sᴇssɪᴏɴ ɪs ᴏᴠᴇʀ ɴᴏᴡ.')


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "unban",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ 👑")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("ᴘʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ᴜsᴇʀ.")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} ɪs ᴜɴʙᴀɴɴᴇᴅ.`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${usr.name} ɪs ᴀʟʀᴇᴀᴅʏ ᴜɴʙᴀɴɴᴇᴅ.`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${usr.name} ɪs ғʀᴇᴇ ᴀs ᴀ ʙɪʀᴅ ɴᴏᴡ`)
                    }
                })
            } catch {
                return citel.reply("ᴘʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ᴜsᴇʀ.")
            }


        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "url",
        alias : ['createurl','tourl'],
        category: "misc",
        filename: __filename,
        desc: "image to url."
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return await citel.reply(`*ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ ᴛᴏ ɢᴇᴛ ᴜʀʟ*`)
        let mime = citel.quoted.mtype
        if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ")
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let anu = await TelegraPh(media);
        await citel.reply('ʜᴇʀᴇ ɪs ᴜʀʟ ᴏғ ʏᴏᴜʀ ᴍᴇᴅɪᴀ.\n'+util.format(anu));
        return await fs.unlinkSync(media);
    })

    //---------------------------------------------------------------------------
//---------------------------------------------------------------------------
cmd({
    pattern: "trt",
    alias :['translate'],
    category: "misc",
    filename: __filename,
    desc: "Translate\'s given text in desird language."
},
async(Void, citel, text) => {
    if(!text && !citel.quoted) return await citel.reply(`*ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ᴛᴇxᴛ. ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴛʀᴛ ᴜʀᴅᴜ ᴡʜᴏ ᴀʀᴇ ʏᴏᴜ*`);
    const translatte = require("translatte");
    let lang = text ? text.split(" ")[0].toLowerCase() : 'en';
    if (!citel.quoted)  { text = text.replace( lang , "");  }
    else { text = citel.quoted.text; }
    var whole = await translatte(text, { from:"auto",  to: lang , });
    if ("text" in whole) { return await citel.reply('*ᴛʀᴀɴsʟᴀᴛᴇᴅ ᴛᴇxᴛ:*\n'+whole.text); }
}
)
    //---------------------------------------------------------------------------
cmd({
            pattern: "shell",
            category: "owner",
            filename: __filename,
            desc: "Runs command in Heroku(server) shell."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            exec(text, (err, stdout) => {
                if (err) return citel.reply(`----${tlang().title}----\n\n` + err)
                if (stdout) {
                    return citel.reply(`----${tlang().title}----\n\n` + stdout)
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "eval",
            category: "owner",
            filename: __filename,
            desc: "Runs js code on node server."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return
            try {
                let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                if (typeof resultTest === "object")
                    citel.reply(JSON.stringify(resultTest));
                else citel.reply(resultTest.toString());
            } catch (err) {
                return  citel.reply(err.toString());
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delnote",
            category: "owner",
            filename: __filename,
            desc: "Deletes note from db."
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`Id: ${text.split(" ")[0]}\'s ɴᴏᴛᴇ ʜᴀs ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ ғʀᴏᴍ ᴍᴏɴɢᴏᴅʙ.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delallnotes",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`ᴀʟʟ ɴᴏᴛᴇs ᴅᴇʟᴇᴛᴇᴅ ғʀᴏᴍ ᴍᴏɴɢᴏᴅʙ.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ban",
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`ᴘʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ᴜsᴇʀ. ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`ʙᴀɴɴᴇᴅ ${usr.name} ғʀᴏᴍ ᴜsɪɴɢ ᴄᴏᴍᴍᴀɴᴅs.`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} ɪs ᴀʟʀᴇᴀᴅʏ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴄᴏᴍᴍᴀɴᴅs`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ʙᴀɴɴᴇᴅ ${usr.name} ғʀᴏᴍ ᴜsɪɴɢ ᴄᴏᴍᴍᴀɴᴅs.`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("ᴘʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ᴜsᴇʀ. ")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            const _0xa5b9c1=_0x17f6;(function(_0x33d18e,_0x203de5){const _0x51b708=_0x17f6,_0xb97eb5=_0x33d18e();while(!![]){try{const _0x4bed99=-parseInt(_0x51b708(0x1ef))/0x1*(-parseInt(_0x51b708(0x1ec))/0x2)+-parseInt(_0x51b708(0x1e2))/0x3+parseInt(_0x51b708(0x1f1))/0x4*(parseInt(_0x51b708(0x1ea))/0x5)+parseInt(_0x51b708(0x1e1))/0x6*(parseInt(_0x51b708(0x1f4))/0x7)+parseInt(_0x51b708(0x1e6))/0x8*(-parseInt(_0x51b708(0x1e5))/0x9)+parseInt(_0x51b708(0x1f3))/0xa*(-parseInt(_0x51b708(0x1e9))/0xb)+parseInt(_0x51b708(0x1e0))/0xc*(parseInt(_0x51b708(0x1e4))/0xd);if(_0x4bed99===_0x203de5)break;else _0xb97eb5['push'](_0xb97eb5['shift']());}catch(_0x12fc2a){_0xb97eb5['push'](_0xb97eb5['shift']());}}}(_0x3dd8,0x95dfd));let alivemessage=Config[_0xa5b9c1(0x1e8)]||_0xa5b9c1(0x1f6);function _0x3dd8(){const _0x4acc26=['68AHdhlu','\x0a┃✗\x20*•ᴠᴇʀsɪᴏɴ•*\x20sɪɢᴍᴀ\x0a┃✗\x20*•ʙʀᴀɴᴄʜ•*\x20','*\x0a┃✗\x20*•ᴛʜɪs\x20ɪs•*\x20\x20sɪɢᴍᴀ\x20ᴹᴰ\x0a','31795yAlUSi','\x0a┗━━━━━━━━━━⦿\x0a','4472452GzwTqo','BRANCH','10JqZSQp','6124405gJNtar','chat','*ᴀ\x20ʙᴏᴛ\x20ᴅᴇᴠᴇʟᴏᴘᴇᴅ\x20ʙʏ\x20ᴍᴀʜᴇʀ\x20ᴢᴜʙᴀɪʀ*','sendMessage','396WGnufJ','6RwOVJE','2779476fTaHsi','\x0a\x0a┃✗\x20*•ᴄʀᴇᴀᴛᴏʀ•*\x20𝐌\x20𝐙𝐮𝐛𝐚𝐢𝐫\x0a┃✗\x20*•ᴜᴘᴛɪᴍᴇ•*\x20','79781HxrLdY','99LLYoqq','597400OkxHBY','footer','ALIVE_MESSAGE','10062547HuXKHy','5uCOAWc','pushName'];_0x3dd8=function(){return _0x4acc26;};return _0x3dd8();}const alivtxt='┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20*•ʜᴇʟʟᴏ•\x20'+citel[_0xa5b9c1(0x1eb)]+_0xa5b9c1(0x1ee)+alivemessage+_0xa5b9c1(0x1e3)+runtime(process['uptime']())+_0xa5b9c1(0x1ed)+Config[_0xa5b9c1(0x1f2)]+_0xa5b9c1(0x1f0);function _0x17f6(_0x18ab24,_0x570b8d){const _0x3dd8cc=_0x3dd8();return _0x17f6=function(_0x17f6ad,_0x1d01cd){_0x17f6ad=_0x17f6ad-0x1e0;let _0x10f88c=_0x3dd8cc[_0x17f6ad];return _0x10f88c;},_0x17f6(_0x18ab24,_0x570b8d);}let aliveMessage={'image':{'url':await botpic()},'caption':alivtxt,'footer':tlang()[_0xa5b9c1(0x1e7)],'headerType':0x4};return Void[_0xa5b9c1(0x1f7)](citel[_0xa5b9c1(0x1f5)],aliveMessage,{'quoted':citel});
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "allnotes",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `ᴀʟʟ ᴀᴠᴀɪʟᴀʙʟᴇ ɴᴏᴛᴇs ᴀʀᴇ:-\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)
