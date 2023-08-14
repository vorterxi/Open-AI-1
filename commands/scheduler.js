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

 const { tlang,sck,prefix,cmd } = require('../lib')
 cmd({
     pattern: "amute",
     desc: "sets auto mute time in group.",
     category: "moderation",
 },
 async(Void, citel, text,{ isCreator }) => {
     if (!isCreator) return citel.reply(tlang().owner)
     if(!citel.isGroup) return citel.reply(tlang().group)
     if(!text.split(':')[1]) return citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴄᴏʀʀᴇᴄᴛ ғᴏʀᴍ.\nᴇɢ: sᴇᴛᴍᴜᴛᴇ ${prefix}22:00`)
     //if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
     //if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
           let Group = await sck.findOne({ id: citel.chat })
             if (!Group) {
                 await new sck({ id: citel.chat, mute: text }).save()
                 return citel.reply('ᴍᴜᴛᴇ ᴀᴅᴅᴇᴅ.')
             } else {
                 await await sck.updateOne({ id: citel.chat }, { mute:text })
                 return citel.reply(`ᴍᴜᴛᴇ ᴀᴅᴅᴇᴅ ғᴏʀ ${text} sᴜᴄᴄᴇssғᴜʟʟʏ.`)     
             }      
 }
 )

 //--------------------------------------------------------------------------------
 cmd({
    pattern: "unmute",
    desc: "sets unmute time in group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
    if(!text.split(':')[0]) return citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴄᴏʀʀᴇᴄᴛ ғᴏʀᴍ.\nᴇɢ: ᴜɴᴍᴜᴛᴇ ${prefix}22:00`)
   // if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
   // if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, unmute: text }).save()
                return citel.reply('ᴜɴᴍᴜᴛᴇ ᴀᴅᴅᴇᴅ.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:text })
                return citel.reply(`ᴜɴᴍᴜᴛᴇ ᴀᴅᴅᴇᴅ ғᴏʀ ${text} sᴜᴄᴄᴇssғᴜʟʟʏ.`)
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dunmute",
    desc: "Delete unmute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('ᴛʜᴇʀᴇ\'s ɴᴏ ᴜɴᴍᴜᴛᴇ sᴇᴛ ɪɴ ɢʀᴏᴜᴘ.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:'false' })
                return citel.reply('ᴜɴᴍᴜᴛᴇ ᴅᴇʟᴇᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dmute",
    desc: "Delete mute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('ᴛʜᴇʀᴇ\'s ɴᴏ ᴍᴜᴛᴇ sᴇᴛ ɪɴ ɢʀᴏᴜᴘ.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { mute:'false' })
                return citel.reply('ᴍᴜᴛᴇ ᴅᴇʟᴇᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
