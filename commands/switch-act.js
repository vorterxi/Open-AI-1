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


function _0x354a(_0x3deb04,_0x5aa2a2){const _0x11ef4f=_0x45ac();return _0x354a=function(_0x5ff07d,_0x92257b){_0x5ff07d=_0x5ff07d-0x7f;let _0x1fae2b=_0x11ef4f[_0x5ff07d];return _0x1fae2b;},_0x354a(_0x3deb04,_0x5aa2a2);}const _0x348fa8=_0x354a;(function(_0x495de5,_0x455e04){const _0x376134=_0x354a,_0x5321c1=_0x495de5();while(!![]){try{const _0x4821e4=parseInt(_0x376134(0x8c))/0x1*(-parseInt(_0x376134(0x81))/0x2)+-parseInt(_0x376134(0x89))/0x3+-parseInt(_0x376134(0x8f))/0x4+parseInt(_0x376134(0x8b))/0x5+parseInt(_0x376134(0x8e))/0x6*(-parseInt(_0x376134(0x91))/0x7)+-parseInt(_0x376134(0x8d))/0x8+parseInt(_0x376134(0x8a))/0x9;if(_0x4821e4===_0x455e04)break;else _0x5321c1['push'](_0x5321c1['shift']());}catch(_0x392b57){_0x5321c1['push'](_0x5321c1['shift']());}}}(_0x45ac,0x7f5a1));const _0x1a3ce4=(function(){let _0xd3be66=!![];return function(_0x552e46,_0x652a8b){const _0x17b7fb=_0xd3be66?function(){const _0x2eaad8=_0x354a;if(_0x652a8b){const _0x41db8c=_0x652a8b[_0x2eaad8(0x97)](_0x552e46,arguments);return _0x652a8b=null,_0x41db8c;}}:function(){};return _0xd3be66=![],_0x17b7fb;};}()),_0x49435b=_0x1a3ce4(this,function(){const _0x5a3d37=_0x354a;return _0x49435b[_0x5a3d37(0x88)]()[_0x5a3d37(0x86)](_0x5a3d37(0x99))['toString']()[_0x5a3d37(0x98)](_0x49435b)['search']('(((.+)+)+)+$');});_0x49435b();const _0x92257b=(function(){let _0xa60876=!![];return function(_0x198ec2,_0x5e0366){const _0x14aeb8=_0xa60876?function(){const _0x3c5b14=_0x354a;if(_0x5e0366){const _0x405212=_0x5e0366[_0x3c5b14(0x97)](_0x198ec2,arguments);return _0x5e0366=null,_0x405212;}}:function(){};return _0xa60876=![],_0x14aeb8;};}()),_0x5ff07d=_0x92257b(this,function(){const _0x3faee8=_0x354a;let _0x4705b0;try{const _0x8c7a68=Function(_0x3faee8(0x87)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4705b0=_0x8c7a68();}catch(_0x490fd5){_0x4705b0=window;}const _0x16a145=_0x4705b0[_0x3faee8(0x84)]=_0x4705b0[_0x3faee8(0x84)]||{},_0x1bfc47=[_0x3faee8(0x9a),_0x3faee8(0x94),_0x3faee8(0x83),_0x3faee8(0x7f),_0x3faee8(0x92),_0x3faee8(0x90),_0x3faee8(0x9b)];for(let _0x153864=0x0;_0x153864<_0x1bfc47[_0x3faee8(0x85)];_0x153864++){const _0x372d81=_0x92257b['constructor'][_0x3faee8(0x96)][_0x3faee8(0x82)](_0x92257b),_0x22c641=_0x1bfc47[_0x153864],_0x5c58e3=_0x16a145[_0x22c641]||_0x372d81;_0x372d81[_0x3faee8(0x93)]=_0x92257b[_0x3faee8(0x82)](_0x92257b),_0x372d81[_0x3faee8(0x88)]=_0x5c58e3[_0x3faee8(0x88)][_0x3faee8(0x82)](_0x5c58e3),_0x16a145[_0x22c641]=_0x372d81;}});function _0x45ac(){const _0xf25341=['64769meecKE','841008AFljrN','5258052UYmxXl','1075184wxcbId','table','7EEkYKO','exception','__proto__','warn','../lib','prototype','apply','constructor','(((.+)+)+)+$','log','trace','error','../config','2ARkUvm','bind','info','console','length','search','return\x20(function()\x20','toString','2374644QqMimn','15188391oqKcCt','4703075PYGXAV'];_0x45ac=function(){return _0xf25341;};return _0x45ac();}_0x5ff07d();const {smd,sck,sck1,getAdmin,tlang,prefix}=require(_0x348fa8(0x95)),Config=require(_0x348fa8(0x80));
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
