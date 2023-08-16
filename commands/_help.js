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
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/commands')

    //---------------------------------------------------------------------------
sɪɢᴍᴀ_ᴍᴅ.cmd({
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
┃✗ •ᴘʀᴇғɪx• ${prefix}
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
sɪɢᴍᴀ_ᴍᴅ.cmd({
              pattern: "list",
              desc: "list menu",
              category: "general",
              react: "👑"
           },
          async(Void, citel) => {
              const { commands } = require('../lib');
              timestampe = speed();
              latensie = speed() - timestampe;
              let [date, time] = new Date()
        .toLocaleString("en-pk", { timeZone: "Asia/karachi" })
        .split(",");
              let str = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━━⦿
┃✗ •ᴏᴡɴᴇʀ• ${Config.ownername}
┃✗ •ʙᴏᴛ-ɴᴀᴍᴇ• ${tlang().title}
┃✗ •ᴘʀᴇғɪx• ${prefix}
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
┗━━━━━━━━━━━⦿\n`
  
              for (let i = 0; i < commands.length; i++) 
              {
                   if(commands[i].pattern==undefined) continue
                   str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n`                // ${i+1} 
                   str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
              }
  
              
   
   //str += `Maher Zubair`
              return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str + Config.caption ,footer: tlang().footer, headerType: 4 })
          }
      )
    //---------------------------------------------------------------------------
sɪɢᴍᴀ_ᴍᴅ.cmd({
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
                    body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=ʜɪ ʙʀᴏ, ɪ ᴀᴍ ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

sɪɢᴍᴀ_ᴍᴅ.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "👑",
    filename: __filename
},
 async(Void, citel, text ,{isCreator }) => {
   if(!isCreator) return citel.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return citel.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
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
          if (!cmd) return await citel.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else arr.push(`┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.pattern}`);
          if (cmd.category) arr.push(`┃✗ •ᴛʏᴘᴇ• ${cmd.category}`);
          if(cmd.filename) arr.push(`┃✗ •ғɪʟᴇɴᴀᴍᴇ• ${cmd.filename}\n┗━━━━━━━━━━⦿`)
          return await citel.reply(arr.join('\n'));
  
  
  })
