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

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
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
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •Command• ${cmd.pattern}`);
                if (cmd.category) arr.push(`┃✗ •Category• ${cmd.category}`);
                if (cmd.alias) arr.push(`┃✗ •Alias• ${cmd.alias}`);
                if (cmd.desc) arr.push(`┃✗ •Description• ${cmd.desc}\n┗━━━━━━━━━━⦿`);
                if (cmd.use) arr.push(`•Usage•\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
               let [date, time] = new Date()
        .toLocaleString("en-pk", { timeZone: "Asia/karachi" })
        .split(",");
                let total = await sck1.countDocuments()
                let str = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━━⦿
┃✗ •Owner• ${Config.ownername}
┃✗ •Theme• ${tlang().title}
┃✗ •Time• ${time}
┃✗ •Date• ${date}
┃✗ •Plugins• ${commands.length}
┃✗ •Mem• ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✗ •Uptime• ${runtime(process.uptime())}
┃✗ •Users• ${total}
┗━━━━━━━━━━━⦿


` + ''
                for (const category in cmds) 
                {
                   str += `┌──『 *${tiny(category)}* 』──❖\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╭─────❏ *${tiny(category)}* ❏\n` ;      
                        for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                        str += `└────────────◉\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                         str += `└────────────◉\n`  ; 
                   }
  
                }
                str+= `*•Type•* ${prefix}help cmd name to know more about specific command.\n*Eg:* ${prefix}help attp\n          |°؁🅼♥︎❚❚♥︎🆉؁°| `
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
   if(!isCreator) return citel.reply("*Sorry, Only Owner Can Use This Command*")
   if(!text) return citel.reply("*PLease, Provide A Command/Directory*")
   if(text.startsWith("."))
   {
      let res="*------------- FILE MANAGER -------------*\n"
      try {
            const files = await readDirectory(text);
            files.forEach(file => { res += file + '\n'; });
            await citel.reply(res.toString());
      } catch (error) {  citel.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let arr = [];
          const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await citel.reply("*❌No Such commands.*");
          else arr.push(`┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •Command• ${cmd.pattern}`);
          if (cmd.category) arr.push(`┃✗ •Type• ${cmd.category}`);
          if(cmd.filename) arr.push(`┃✗ •FileName• ${cmd.filename}\n┗━━━━━━━━━━⦿`)
          return await citel.reply(arr.join('\n'));
  
  
  })
  
