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


const { smd,sck,sck1, getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')
    //---------------------------------------------------------------------------
smd({
        pattern: "act",
        desc: "Switches for varios works.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
        const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ")
        if (!text) return citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴛᴇʀᴍ ʟɪᴋᴇ ʟɪᴋᴇ\n1-ᴇᴠᴇɴᴛs\n2-ᴀɴᴛɪʟɪɴᴋ\n3-ɴsғᴡ\n4-ᴄᴀʀᴅɢᴀᴍᴇ\n5-ʙᴏᴛ`)
        if (!isAdmins) return citel.reply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ")
        switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply('ᴀɴᴛɪʟɪɴᴋ ᴇɴᴀʙʟᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("ᴀɴᴛɪʟɪɴᴋ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ ʜᴇʀᴇ.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('ᴇɴᴀʙʟᴇᴅ ᴀɴᴛɪʟɪɴᴋ ɪɴ ᴄᴜʀʀᴇɴᴛ ᴄʜᴀᴛ.')
                        return
                    }
                }
                break
          
                      case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply('ᴇᴄᴏɴᴏᴍʏ ᴇɴᴀʙʟᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("ᴇᴄᴏɴᴏᴍʏ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ.")
                        await sck.updateOne({ id: citel.chat }, { economy: "true" })
                        citel.reply('ᴇᴄᴏɴᴏᴍʏ ᴇɴᴀʙʟᴇᴅ ɪɴ ᴄᴜʀʀᴇɴᴛ ᴄʜᴀᴛ.')
                        return
                    }
                }
                break
            case 'events':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ᴇᴠᴇɴᴛs*")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("*ᴇᴠᴇɴᴛs* ᴀʀᴇ ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ᴇᴠᴇɴᴛs*")
                    }
                }
                break
            case 'cardgame':
                {
                    let checkgroup = sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, cardgame: "active" })
                            .save()
                        return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ᴄᴀʀᴅ ɢᴀᴍᴇ*")
                    } else {
                        if (checkgroup.cardgame == "active") return citel.reply("*ᴄᴀʀᴅ ɢᴀᴍᴇ* ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ")
                        await sck.updateOne({ id: citel.chat }, { cardgame: "active" })
                        return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ᴄᴀʀᴅ ɢᴀᴍᴇ.*")
                    }
                }
                break
            case 'nsfw':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, nsfw: "true" })
                            .save()
                        return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ɴsғᴡ*")
                    } else {
                        if (checkgroup.nsfw == "true") return citel.reply("*ɴsғᴡ* ɪs ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ")
                        await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
                        citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ *ɴsғᴡ*")
                        return
                    }
                }
                break
            default:
                {
                    citel.reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴛᴇʀᴍ ʟɪᴋᴇ ʟɪᴋᴇ\n1-ᴇᴠᴇɴᴛs\n2-ᴀɴᴛɪʟɪɴᴋ\n3-ɴsғᴡ\n4-ᴄᴀʀᴅɢᴀᴍᴇ\n5-ʙᴏᴛ")
                }
        }
    }
)
