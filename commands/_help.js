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

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const speed = require('performance-now')
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "👑",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs.");
                else arr.push(`┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.pattern}`);
                if (cmd.category) arr.push(`┃✗ •ᴄᴀᴛᴇɢᴏʀʏ• ${cmd.category}`);
                if (cmd.alias) arr.push(`┃✗ •ᴀʟɪᴀs• ${cmd.alias}`);
                if (cmd.desc) arr.push(`┃✗ •ᴅᴇsᴄʀɪᴘᴛɪᴏɴ• ${cmd.desc}\n┗━━━━━━━━━━⦿`);
                if (cmd.use) arr.push(`•ᴜsᴀɢᴇ•\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
            timestampe = speed();
            latensie = speed() - timestampe;
               let [date, time] = new Date()
        .toLocaleString("en-pk", { timeZone: "Asia/karachi" })
        .split(",");
                let total = await sck1.countDocuments()
                let str = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━━⦿
┃✗ •ᴏᴡɴᴇʀ• ${Config.ownername}
┃✗ •ʙᴏᴛ-ɴᴀᴍᴇ• ${tlang().title}
┃✗ •ᴛʜᴇᴍᴇ• ${tlang().theme}
┃✗ •ᴍᴏᴅᴇ• ${Config.WORKTYPE}
┃✗ •ᴛɪᴍᴇ• ${time}
┃✗ •ᴅᴀᴛᴇ• ${date}
┃✗ •ᴍᴇᴍ• ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✗ •ᴜᴘᴛɪᴍᴇ• ${runtime(process.uptime())}
┃✗ •ᴘʟᴜɢɪɴs• ${commands.length}
┃✗ •sᴘᴇᴇᴅ• ${latensie.toFixed(4)} ᴍs
┃✗ •ᴘʟᴀᴛꜰᴏʀᴍ• ᴍᴀᴄ-ᴏs
┃✗ •ᴜsᴇʀs• ${total}
┃✗ •ᴠᴇʀsɪᴏɴ• sɪɢᴍᴀ
┃✗ •ʙʀᴀɴᴄʜ• ${Config.BRANCH}
┃✗ •ᴀᴜᴛʜᴏʀ• 𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕
┃✗ •ᴅᴇᴠᴇʟᴏᴘᴇʀ• ᴍ ᴢᴜʙᴀɪʀ ♕
┗━━━━━━━━━━━⦿


` + ''
                for (const category in cmds) 
                {
                   str += `┌──『 ${tiny(category)} 』──❖\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╭─────❏ ${tiny(category)} ❏\n` ;      
                        for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                        str += `└────────────◉\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                         str += `└────────────◉\n`  ; 
                   }
  
                }
                str+= `•ᴛʏᴘᴇ• ${prefix}ʜᴇʟᴘ ᴄᴍᴅ ɴᴀᴍᴇ ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅ.\n*•ᴇɢ•* ${prefix}ʜᴇʟᴘ ʀᴇᴘᴏ\n          |°؁🅼♥︎❚❚♥︎🆉؁°| `
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        alias:["mz"],
        desc: "To find owner number",
        category: "general",
        react: "👑",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Message me',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "👑",
    filename: __filename
},
 async(Void, citel, text ,{isCreator }) => {
  const _0x2cef43=_0x2b70;(function(_0x2abcff,_0x113526){const _0x5c2db2=_0x2b70,_0x201fdf=_0x2abcff();while(!![]){try{const _0x5944e5=-parseInt(_0x5c2db2(0x123))/0x1*(parseInt(_0x5c2db2(0x121))/0x2)+-parseInt(_0x5c2db2(0x131))/0x3*(parseInt(_0x5c2db2(0x12d))/0x4)+parseInt(_0x5c2db2(0x12b))/0x5*(parseInt(_0x5c2db2(0x137))/0x6)+-parseInt(_0x5c2db2(0x12a))/0x7*(parseInt(_0x5c2db2(0x126))/0x8)+parseInt(_0x5c2db2(0x139))/0x9*(parseInt(_0x5c2db2(0x135))/0xa)+-parseInt(_0x5c2db2(0x12f))/0xb+-parseInt(_0x5c2db2(0x12c))/0xc*(-parseInt(_0x5c2db2(0x138))/0xd);if(_0x5944e5===_0x113526)break;else _0x201fdf['push'](_0x201fdf['shift']());}catch(_0x2df79b){_0x201fdf['push'](_0x201fdf['shift']());}}}(_0x414d,0x6dbec));function _0x414d(){const _0xcb737f=['../lib','toString','filename','197194VvgHcT','*PLease,\x20Provide\x20A\x20Command/Directory*','7hyRCyg','*Sorry,\x20Only\x20Owner\x20Can\x20Use\x20This\x20Command*','find','93672XSoDgN','*-------------\x20FILE\x20MANAGER\x20-------------*\x0a','startsWith','toLowerCase','455GSenTu','1135XWBUIS','636XNfWpu','4WcSvJh','reply','8922947lcEVWC','pattern','2246253BqYWwf','push','┃✗\x20•Type•\x20','join','10jQzKaU','*❌No\x20Such\x20commands.*','6954ECuGAc','763321Zzeied','770526isKHgC','┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20•Command•\x20','category'];_0x414d=function(){return _0xcb737f;};return _0x414d();}if(!isCreator)return citel[_0x2cef43(0x12e)](_0x2cef43(0x124));if(!text)return citel[_0x2cef43(0x12e)](_0x2cef43(0x122));if(text[_0x2cef43(0x128)]('.')){let res=_0x2cef43(0x127);try{const files=await readDirectory(text);files['forEach'](_0x9df3e4=>{res+=_0x9df3e4+'\x0a';}),await citel[_0x2cef43(0x12e)](res[_0x2cef43(0x11f)]());}catch(_0x230af6){citel[_0x2cef43(0x12e)](_0x230af6);}return;}const {commands}=require(_0x2cef43(0x11e));function _0x2b70(_0x35ffce,_0x37c91a){const _0x414db4=_0x414d();return _0x2b70=function(_0x2b7002,_0x511356){_0x2b7002=_0x2b7002-0x11d;let _0x2d4cac=_0x414db4[_0x2b7002];return _0x2d4cac;},_0x2b70(_0x35ffce,_0x37c91a);}let arr=[];const cmd=commands[_0x2cef43(0x125)](_0x2037e1=>_0x2037e1[_0x2cef43(0x130)]===text['split']('\x20')[0x0][_0x2cef43(0x129)]());if(!cmd)return await citel['reply'](_0x2cef43(0x136));else arr[_0x2cef43(0x132)](_0x2cef43(0x13a)+cmd['pattern']);if(cmd[_0x2cef43(0x11d)])arr['push'](_0x2cef43(0x133)+cmd[_0x2cef43(0x11d)]);if(cmd[_0x2cef43(0x120)])arr[_0x2cef43(0x132)]('┃✗\x20•FileName•\x20'+cmd['filename']+'\x0a┗━━━━━━━━━━⦿');return await citel['reply'](arr[_0x2cef43(0x134)]('\x0a'));
  
  
  })
  
