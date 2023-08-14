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


 const { sck,sck1,cmd, getAdmin, tlang, prefix } = require('../lib')
 const Config = require('../config')
 
     //---------------------------------------------------------------------------
 cmd({
         pattern: "deact",
         desc: "Switches for varios works.",
         category: "group",
         filename: __filename
     },
     async(Void, citel, text,{ isCreator }) => {
         //-----------------------------------------	
         if (!citel.isGroup) return citel.reply(tlang().group);
         const groupAdmins = await getAdmin(Void, citel)
         const botNumber = await Void.decodeJid(Void.user.id)
         const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
         const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
         //-----------------------------------------  
         if (!citel.isGroup) return citel.reply("ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪɴ ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ.")
         if (!text) return citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴛᴇʀᴍ ʟɪᴋᴇ ʟɪᴋᴇ\n1-ᴇᴠᴇɴᴛs\n2-ᴀɴᴛɪʟɪɴᴋ\n3-ɴsғᴡ\n4-ᴄᴀʀᴅɢᴀᴍᴇ\n5-ʙᴏᴛ`)
         if (!isAdmins) return citel.reply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ")
         switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "false" })
                            .save()
                        return citel.reply('ᴀɴᴛɪʟɪɴᴋ ᴅɪsᴀʙʟᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ')
                    } else {
                        if (checkgroup.antilink == "false") return citel.reply("ᴀɴᴛɪʟɪɴᴋ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ.")
                        await sck.updateOne({ id: citel.chat }, { antilink: "false" })
                        citel.reply('ᴅɪsᴀʙʟᴇᴅ ᴀɴᴛɪʟɪɴᴋ ɪɴ ᴄᴜʀʀᴇɴᴛ ᴄʜᴀᴛ.')
                        return
                    }
                }
                break
                       case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "false" })
                            .save()
                        return citel.reply('ᴇᴄᴏɴᴏᴍʏ ᴅɪsᴀʙʟᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ')
                    } else {
                        if (checkgroup.economy == "false") return citel.reply("ᴇᴄᴏɴᴏᴍʏ ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ.")
                        await sck.updateOne({ id: citel.chat }, { economy: "false" })
                        citel.reply('ᴅɪsᴀʙʟᴇᴅ ᴇᴄᴏɴᴏᴍʏ ɪɴ ᴄᴜʀʀᴇɴᴛ ᴄʜᴀᴛ.')
                        return
                    }
                }
                break
                case 'events':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, events: "false" })
                                .save()
                            return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *ᴇᴠᴇɴᴛs*")
                        } else {
                            if (checkgroup.events == "false") return citel.reply("*ᴇᴠᴇɴᴛs* ᴀʀᴇ ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ")
                            await sck.updateOne({ id: citel.chat }, { events: "false" })
                            return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *ᴇᴠᴇɴᴛs*")
                        }
                    }
                    break
                case 'cardgame':
                    {
                        let checkgroup = sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, cardgame: "deactive" })
                                .save()
                            return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *ᴄᴀʀᴅ ɢᴀᴍᴇ*")
                        } else {
                            if (checkgroup.cardgame == "deactive") return citel.reply("*ᴄᴀʀᴅ ɢᴀᴍᴇ* ᴡᴀs ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ")
                            await sck.updateOne({ id: citel.chat }, { cardgame: "deactive" })
                            return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *ᴄᴀʀᴅ ɢᴀᴍᴇ*")
                        }
                    }
                    break
                case 'nsfw':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, nsfw: "false" })
                                .save()
                            return citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *ɴsғᴡ*")
                        } else {
                            if (checkgroup.nsfw == "false") return citel.reply("*ɴsғᴡ* ɪs ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ")
                            await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
                            citel.reply("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ *ɴsғᴡ*")
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
