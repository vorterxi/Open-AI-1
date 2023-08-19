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
const sɪɢᴍᴀ_Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const sɪɢᴍᴀ_readmore = long.repeat(4001)
const sɪɢᴍᴀ_speed = require('performance-now')
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
            timestampe = sɪɢᴍᴀ_speed();
            latensie = sɪɢᴍᴀ_speed() - timestampe;
               let [sɪɢᴍᴀ_date, sɪɢᴍᴀ_time] = new Date()
        .toLocaleString("en-pk", { timeZone: "Asia/karachi" })
        .split(",");
                let sɪɢᴍᴀ_total = await sck1.countDocuments()
                let zubair = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━━⦿
┃✗ •ᴏᴡɴᴇʀ• ${sɪɢᴍᴀ_Config.ownername}
┃✗ •ʙᴏᴛ-ɴᴀᴍᴇ• ${sɪɢᴍᴀ_Config.botname}
┃✗ •ᴘʀᴇғɪx• [ *${prefix}* ]
┃✗ •ᴛʜᴇᴍᴇ• ${tlang().theme}
┃✗ •ᴍᴏᴅᴇ• ${sɪɢᴍᴀ_Config.WORKTYPE}
┃✗ •ᴛɪᴍᴇ• ${sɪɢᴍᴀ_time}
┃✗ •ᴅᴀᴛᴇ• ${sɪɢᴍᴀ_date}
┃✗ •ᴍᴇᴍ• ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✗ •ʀᴜɴ-ᴛɪᴍᴇ• ${runtime(process.uptime())}
┃✗ •ᴘʟᴜɢɪɴs• ${commands.length}
┃✗ •sᴘᴇᴇᴅ• ${latensie.toFixed(4)} ᴍs
┃✗ •ᴘʟᴀᴛꜰᴏʀᴍ• ᴍᴀᴄ-ᴏs
┃✗ •ᴜsᴇʀs• ${sɪɢᴍᴀ_total}
┃✗ •ᴠᴇʀsɪᴏɴ• sɪɢᴍᴀ
┃✗ •ʙʀᴀɴᴄʜ• ${sɪɢᴍᴀ_Config.BRANCH}
┃✗ •ᴅᴇᴠᴇʟᴏᴘᴇʀ• ᴍ ᴢᴜʙᴀɪʀ ♕
┗━━━━━━━━━━━⦿

${sɪɢᴍᴀ_readmore}
` + ''
                for (const category in cmds) 
                {
                   zubair += `┌──『 ${tiny(category)} 』──❖\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ zubair = `╭─────❏ ${tiny(category)} ❏\n` ;      
                        for (const plugins of cmds[category]) { zubair += `│ ${fancytext(plugins,1)}\n` ; }
                        zubair += `└────────────◉\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { zubair += `│ ${fancytext(plugins,1)}\n` ; }
                         zubair += `└────────────◉\n`  ; 
                   }
  
                }
                zubair += `•ᴛʏᴘᴇ• ${prefix}ʜᴇʟᴘ ᴄᴍᴅ ɴᴀᴍᴇ ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅ.\n*•ᴇɢ•* ${prefix}ʜᴇʟᴘ ʀᴇᴘᴏ\n          |°؁🅼♥︎❚❚♥︎🆉؁°| `
                let Maher = {
                    image: { url: await botpic() },
                    caption: zubair,
                    footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                        title: `${Gname}`,
                        body: "ɢʀᴏᴜᴘ ᴄʜᴀᴛ ɪɴᴠɪᴛᴇ\ntap to join",
                        thumbnail: log0,
                        mediaType: 4,
                        mediaUrl: '',
                        sourceUrl: `${waUrl}`,
                }}};
                return await Void.sendMessage(citel.chat, Maher);
            }
        }
    )

    //---------------------------------------------------------------------------
sɪɢᴍᴀ_ᴍᴅ.cmd({
              pattern: "list",
              alias: ["listall"],
              desc: "list menu",
              category: "general",
              react: "👑"
           },
          async(Void, citel) => {
              const { commands } = require('../lib');
              timestampe = sɪɢᴍᴀ_speed();
              latensie = sɪɢᴍᴀ_speed() - timestampe;
              let [sɪɢᴍᴀ_date, sɪɢᴍᴀ_time] = new Date()
        .toLocaleString("en-pk", { timeZone: "Asia/karachi" })
        .split(",");
              let sɪɢᴍᴀ_total = await sck1.countDocuments()
              let Zubair = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━━⦿
┃✗ •ᴏᴡɴᴇʀ• ${sɪɢᴍᴀ_Config.ownername}
┃✗ •ʙᴏᴛ-ɴᴀᴍᴇ• ${sɪɢᴍᴀ_Config.botname}
┃✗ •ᴘʀᴇғɪx• *${prefix}*
┃✗ •ᴛʜᴇᴍᴇ• ${tlang().theme}
┃✗ •ᴍᴏᴅᴇ• ${sɪɢᴍᴀ_Config.WORKTYPE}
┃✗ •ᴛɪᴍᴇ• ${sɪɢᴍᴀ_time}
┃✗ •ᴅᴀᴛᴇ• ${sɪɢᴍᴀ_date}
┃✗ •ᴍᴇᴍ• ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✗ •ʀᴜɴ-ᴛɪᴍᴇ• ${runtime(process.uptime())}
┃✗ •ᴘʟᴜɢɪɴs• ${commands.length}
┃✗ •sᴘᴇᴇᴅ• ${latensie.toFixed(4)} ᴍs
┃✗ •ᴘʟᴀᴛꜰᴏʀᴍ• ᴍᴀᴄ-ᴏs
┃✗ •ᴜsᴇʀs• ${sɪɢᴍᴀ_total}
┃✗ •ᴠᴇʀsɪᴏɴ• sɪɢᴍᴀ
┃✗ •ʙʀᴀɴᴄʜ• ${sɪɢᴍᴀ_Config.BRANCH}
┃✗ •ᴅᴇᴠᴇʟᴏᴘᴇʀ• ᴍ ᴢᴜʙᴀɪʀ ♕
┗━━━━━━━━━━━⦿\n${sɪɢᴍᴀ_readmore}`
  
              for (let i = 0; i < commands.length; i++) 
              {
                   if(commands[i].pattern==undefined) continue
                   Zubair +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n`                // ${i+1} 
                   Zubair += `╰➛ ${fancytext(commands[i].desc,1)}\n`
              }
                    let Maher = {
            image: { url: await botpic() },
            caption: Zubair + sɪɢᴍᴀ_Config.caption,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: `${Gname}`,
                    body: `Easy to Use`,
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `${waUrl}`,}}}
              
   
   //Zubair += `Maher Zubair`
              return await Void.sendMessage(citel.chat, Maher)
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
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + sɪɢᴍᴀ_Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let Maher = {
            contacts: { displayName: sɪɢᴍᴀ_Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: sɪɢᴍᴀ_Config.ownername,
                    body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=ʜɪ ʙʀᴏ, ɪ ᴀᴍ ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, Maher, {
            quoted: citel,
        });

    }
)
//------------------------------------------------------------------------------------------------------------
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
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await citel.reply(res.toString());
      } catch (error) {  citel.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await citel.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.pattern}`);
          if (cmd.category) Maher.push(`┃✗ •ᴛʏᴘᴇ• ${cmd.category}`);
          if(cmd.filename) Maher.push(`┃✗ •ғɪʟᴇɴᴀᴍᴇ• ${cmd.filename}\n┗━━━━━━━━━━⦿\n      *•ᴘᴏᴡᴇʀᴇᴅ ʙʏ•* sɪɢᴍᴀ ᴹᴰ`)
          return await citel.reply(Maher.join('\n'));
  
      
  })


