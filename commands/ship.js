const { tlang } = require('../lib')
const Sigma_MD = require('../lib/commands')
Sigma_MD.cmd({ pattern: "ship" , category: "fun" }, async(Void, citel, text) => {
   if (!citel.isGroup) return citel.reply(tlang().group);
   
   const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	 const participants = citel.isGroup ? await groupMetadata.participants : "";
   let members = participants.map(u => u.id)
   const percentage = Math.floor(Math.random() * 100)
    async function couple(percent) {
         var text;
        if (percent < 25) {
            text = `\t\t\t\t\t*sʜɪᴘᴄᴇɴᴛ : ${percentage}%* \n\t\tᴛʜᴇʀᴇ's ɴᴇᴇᴅ ᴛɪᴍᴇ ᴛᴏ ʀᴇᴄᴏɴsɪᴅᴇʀ ʏᴏᴜʀ ᴄʜᴏɪᴄᴇs`
        } else if (percent < 50) {
            text = `\t\t\t\t\t*sʜɪᴘᴄᴇɴᴛ : ${percentage}%* \n\t\t ɢᴏᴏᴅ ᴇɴᴏᴜɢʜ, ɪ ɢᴜᴇss!`
        } else if (percent < 75) {
            text = `\t\t\t\t\t*sʜɪᴘᴄᴇɴᴛ : ${percentage}%* \n\t\t\tsᴛᴀʏ ᴛᴏɢᴇᴛʜᴇʀ ᴀɴᴅ ʏᴏᴜ'ʟʟ ғɪɴᴅ ᴀ ᴡᴀʏ`
        } else if (percent < 90) {
            text = `\t\t\t\t\t*sʜɪᴘᴄᴇɴᴛ : ${percentage}%* \n\tᴀᴍᴀᴢɪɴɢ! ʏᴏᴜ ᴀɴᴅ ᴍᴇ ᴡɪʟʟ ʙᴇ ᴀ ɢᴏᴏᴅ ᴄᴏᴜᴘʟᴇ`
        } else {
            text = `\t\t\t\t\t*sʜɪᴘᴄᴇɴᴛ : ${percentage}%* \n\tᴡᴇ ɴᴇᴇᴅ ᴛᴏ ʙᴇ ᴛᴏɢᴇᴛʜᴇʀ`
        }
        return text
        }
       var user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
       var shiper;
       if (user) {
       shiper = user
       } else {
       shiper = members[Math.floor(Math.random() * members.length)]
       }
       let caption = `\t    ❣️ *ᴍᴀᴛᴄʜ-ᴍᴀᴋɪɴɢ...* ❣️ \n`
        caption += `\t\t✯────────────────────✯\n`
        caption += `@${citel.sender.split('@')[0]}  x  @${shiper.split('@')[0]}\n`
        caption += `\t\t✯────────────────────✯\n`
        caption += await couple(percentage)
        if(citel.sender.split('@')[0]===shiper.split('@')[0]) return citel.reply('```'+'ᴡᴀɪᴛ... ᴡʜᴀᴛ!!!,ʏᴏᴜ ᴡᴀɴɴᴀ ᴅᴏ ᴍᴀᴛᴄʜᴍᴀᴋɪɴɢ ᴡɪᴛʜ ʏᴏᴜʀsᴇʟғ'+'```')
        await Void.sendMessage(citel.chat,{text: caption,mentions: [citel.sender,shiper]},{quoted:citel})
   }
)
