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


const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix,parsedJid } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const Jimp = require("jimp");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const sɪɢᴍᴀ_ᴍᴅ  = require('../lib/commands')
//---------------------------------------------------------------------------
cmd({
            pattern: "join",
            desc: "joins group by link",
            category: "owner",
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.reply(`ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴀ ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ ʟɪɴᴋ ${tlang().greet}`);
            if (!text.split(" ")[0] && !text.split(" ")[0].includes("whatsapp.com"))
                citel.reply("ʟɪɴᴋ ɪɴᴠᴀʟɪᴅ, ᴘʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴠᴀʟɪᴅ ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ ʟɪɴᴋ!");
            let result = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await Void.groupAcceptInvite(result)
                .then((res) => citel.reply("ɢʀᴏᴜᴘ ᴊᴏɪɴᴇᴅ"))
                .catch((err) => citel.reply("ᴇʀʀᴏʀ ɪɴ ᴊᴏɪɴɪɴɢ ɢʀᴏᴜᴘ"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "invite",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);	
var str1 = await Void.groupInviteCode(citel.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return citel.reply("ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ ɪs ʜᴇʀᴇ \n*"+mergedString+"*");
	
    }
	)
//----------------------------------------------------------------------------
cmd({
        pattern: "revoke",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(Void, citel, text,{ isCreator }) => {
	    if (!citel.isGroup) return citel.reply(tlang().group);

var code = await Void.groupRevokeInvite(citel.chat)
return citel.reply("*ɢʀᴏᴜᴘ ʟɪɴᴋ ʀᴇᴠᴏᴋᴇᴅ sᴜᴄᴄᴇsғᴜʟʟʏ*");
	
    }
	)
//---------------------------------------------------------------------------
cmd({
  pattern: "disable",
  desc: "disable cmds in Group.!",
  category: "group",
  filename: __filename
},
async(Void, citel, text, {isCreator}) => {

  if(!citel.isGroup) return citel.reply(tlang().group);
  
  const groupAdmins = await getAdmin(Void, citel);
  
  const botNumber = await Void.decodeJid(Void.user.id);
  
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  
  const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;

  if(!isAdmins && !isCreator) return citel.reply(tlang().admin);

  let checkInfo = await sck.findOne({id: citel.chat}) || await new sck({id: citel.chat}).save();
  
  let textSplit = text ? text.toLowerCase().trim() : false;
  
  let cmdName = textSplit ? textSplit.split(' ')[0] : '';

  if(!cmdName) return citel.reply(`Provide cmd name to disable in group\nEx ${prefix}disable tag (to disabled 'tag' cmd)`);

  else {

    if(cmdName.startsWith('enable') || cmdName.startsWith('admin')) {
      return citel.send(checkInfo.disablecmds === "false" ? `_Uhh Dear, Theres no cmd disabled in current group_` : `_Disable cmds :_ \`\`\`${checkInfo.disablecmds.replace('false,','')}\`\`\``);
    } 
    
    else {

      if(cmdName.startsWith('disable') || cmdName.startsWith('list')) {
        return citel.reply(`_Uhh Dear, Provided cmd already in disable cmds_`);
      } 
      
      else {
      
        if(cmdName) {
        
          const cmds = sɪɢᴍᴀ_ᴍᴅ.commands.filter(c => c.pattern === cmdName) || sɪɢᴍᴀ_ᴍᴅ.commands.filter(c => c.alias && c.alias.includes(cmdName));

          if(cmds) {
          
            let newCmd = cmds.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let regex = new RegExp('\\b'+newCmd+'\\b');

            if(regex.test(checkInfo.disablecmds)) return citel.reply(`_Uhh Dear, I can't disable that cmd_`);

            let newDisableCmd = checkInfo.disablecmds + ',' + cmds.pattern;
            
            await sck.updateOne({id: citel.chat}, {disablecmds: newDisableCmd});
            
            let lists = newDisableCmd.replace('false','');
            
            return citel.reply(`_"${cmdName}" Succesfully added in disable cmds_${lists === '' ? '' : '\n*Disable cmds :*\n```' + lists + '```'}`);
            
          } else return citel.reply(`_*'${cmdName}' is not a bot cmd, Provide valid cmd_*`);
          
        }

      }

    }

  }

})
//-------------------------------------------------------------------------------
cmd({
  pattern: "enable",
  desc: "enable a cmd in Group.!",
  category: "group",  
  filename: __filename
}, 

async (Void, citel, text, {isCreator}) => {

  if(!citel.isGroup) return citel.reply(tlang().admin);
  
  const groupAdmins = await getAdmin(Void, citel);
  const botNumber = await Void.decodeJid(Void.user.id);
  
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;

  if(!isAdmins && !isCreator) return citel.reply(tlang().admin);

  let checkinfo = await sck.findOne({'id': citel.chat}) || await new sck({'id': citel.chat}).save();
  
  let textt = text ? text.toLowerCase().trim() : false;
  let cmdName = textt ? ',' + textt.split(' ')[0] : '';
  let ReplaceCmd = cmdName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let regex = new RegExp('\\b'+ReplaceCmd+'\\b');

  if(!cmdName || cmdName === '') {
    return await citel.reply(`*Please provide disabled cmd name to enable it*
*Ex ${prefix}enable tag(if 'tag' cmd disabled)/all(reset disables)*`);
  
  } else {

    if(cmdName.startsWith('all')) {
      await sck.updateOne({'id': citel.chat}, {'disablecmds': false});
      return await citel.reply(`*_All disable cmds succesfully enabled_*`);
    
    } else {
    
      if(regex.test(checkinfo.disablecmds) && checkinfo.disablecmds.includes(cmdName)) {
        let newCmds = checkinfo.disablecmds.replace(regex, '');
        await sck.updateOne({'id': citel.chat}, {'disablecmds': newCmds});
        return await citel.reply(`*_"\x22${cmdName.replace(',','')}\x22 Succesfully removed from disable cmds_*`);
        
      } else {
        return await citel.reply(`*_There's no cmd disabled with *${cmdName.replace(',','')}* name_*`);
      }
    }
  }

});
//-------------------------------------------------------------------------------
cmd({
    pattern: "gdesc",
    alias : ['setgdesc'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: '<enter Description Text>',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*Provide Description text, You wants to Set*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateDescription(citel.chat, text);
        citel.reply('*_✅Group description Updated Successfuly.!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"Error While Updating Group Description\nReason : " + e, } ,{quoted : citel})   }
}
)
//----------------------------------------------------------------------------------
cmd({
    pattern: "gname",
    alias : ['setgname','gname'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: '<enter Description Text>',
},
async(Void, citel, text,{ isCreator }) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    if(!text) return await citel.reply("*Uhh Dear, Give text to Update This Group Name*")
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        await Void.groupUpdateSubject(citel.chat, text)
        citel.reply('*_✅Group Name Updated Successfuly.!_*') 
        return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
    } catch(e) { return await Void.sendMessage(users , {text :"_Error While Updating Group Name_\nReason : " + e, } ,{quoted : citel})   }
}
)
//-----------------------------------------------------------------------------------
    /*cmd({
        pattern: "antidemote",
        desc: "Detects Promote and Automaticaly demote promoted person.", 
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antidemote == 'true') return await citel.reply("*Anti_Demote Already Enabled In Current Chat!*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'true' });
        return await citel.reply("*Anti_Demote Enable Succesfully! _No One Demote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antidemote == 'false') return await citel.reply("*Anti_Demote Already Disabled In Current Chat!*")
        await sck.updateOne({ id: citel.chat }, { antidemote : 'false' });
        return await citel.reply("*Anti_Demote Disable Succesfully!*")
      }
      else return await citel.reply(`*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To Enable & Disable Stop Demoting Peoples!_*`)
})*/ 
//-----------------------------------------------------------------------------------
/*cmd({
        pattern: "antipromote",
        desc: "Detects Promote and Automaticaly demote promoted person.", 
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            
      let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
      if (text.toLowerCase().startsWith("on") || text.toLowerCase().startsWith("act") || text.toLowerCase().startsWith("enable") ) {
        if (checkinfo.antipromote == 'true') return await citel.reply("*Anti_Promote Already Enabled In Current Chat!*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'true' });
        return await citel.reply("*Anti_Promote Enable Succesfully! _No One Promote Here Now_.*")
      }else if (text.toLowerCase().startsWith("off") || text.toLowerCase().startsWith("deact") || text.toLowerCase().startsWith("disable") ) {
        if (checkinfo.antipromote == 'false') return await citel.reply("*Anti_Promote Already Disabled In Current Chat!*")
        await sck.updateOne({ id: citel.chat }, { antipromote : 'false' });
        return await citel.reply("*Anti_Promote Disable Succesfully!*")
      }
      else return await citel.reply(`*Uhh Dear, Please Toggle between "On" And "Off".* \n*_To Stop Promoting Peoples in Chat_*`)
});*/
//-----------------------------------------------------------------------------------
cmd({
        pattern: "kik",
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*Provide Me Country Code. Example: .kik 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) citel.reply("*Hey Owner, You Are not Admin Here*")
		else return citel.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*These Users Not Kicked* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Void.decodeJid(Void.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await citel.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await citel.reply(`*_Ahh, There Is No User Found With ${find} Country Code_*`)
        else return await citel.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked_*`)
})
//-----------------------------------------------------------------------------------
cmd({
        pattern: "num",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*Provide Me Country Code. Example: .num 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*List Of Users With ${find} Country Code*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*There Is No Users With ${find} Country Code*` }
	else { nums += num+config.caption}
	await citel.reply(nums)		
})
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
cmd({
    pattern: "antibot",
    desc: "kick Bot Users from Group.!",
    category: "group",
    filename: __filename
},
async(Void, citel, text , { isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel)    
  const botNumber = await Void.decodeJid(Void.user.id)
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
  if (!isAdmins && !isCreator) return citel.reply(tlang().admin)
  let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
  let textt = text ? text.toLowerCase().trim() : false;
  let action = textt ? textt.split(" ")[0] : false;
  
  if(!action) return await citel.reply(`*Antibot Currently ${checkinfo.antibot==="false"?"Disabled" : 'Enabled'} ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ!*\n *ᴛᴏɢɢʟᴇ: ${prefix}ᴀɴᴛɪʙᴏᴛ ᴏɴ/ᴏғғ*`) 
  else if (action.startsWith("off") || action.startsWith("deact") || action.startsWith("disable") ){
    if (checkinfo.antibot === 'false') return await citel.reply("*ᴀɴᴛɪʙᴏᴛ ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ ɪɴ ᴄᴜʀʀᴇɴᴛ ᴄʜᴀᴛ*") 
    await sck.updateOne({ id: citel.chat }, { antibot : 'false' });
    return await citel.reply(`*ᴀɴᴛɪʙᴏᴛ sᴜᴄᴄᴇsғᴜʟʟʏ ᴅɪsᴀʙʟᴇ ɪɴ ɢʀᴏᴜᴘ!*`)
  }else if (action.startsWith("on") || action.startsWith("act") || action.startsWith("enable") ){
    if (checkinfo.antibot === 'true') return await citel.reply("*ᴀɴᴛɪʙᴏᴛ ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ ɪɴ ᴄᴜʀʀᴇɴᴛ ᴄʜᴀᴛ*")
    if (isBotAdmins) {
      await sck.updateOne({ id: citel.chat }, { antibot : 'true' });
      return await citel.reply(`*ᴀɴᴛɪʙᴏᴛ sᴜᴄᴄᴇsғᴜʟʟʏ sᴇᴛ ᴛᴏ ᴋɪᴄᴋ ʙᴏᴛ ᴜsᴇʀs!*`)
    }else return await citel.reply(`*ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀᴅᴍɪɴ ʀᴏʟᴇ!*`)
  }else return await citel.reply(`*ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴠᴀʟɪᴅ ɪɴsᴛʀᴜᴄᴛɪᴏɴ*\n*ᴇɢ: ${prefix}ᴀɴᴛɪʙᴏᴛ ᴏɴ/ᴏғғ*`) 
})
//---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "sticker",
            alias: ["s"],
            desc: "Makes sticker of replied image/video.",
            category: "group",
            use: '<reply to any image/video.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ.!*`);
            let mime = citel.quoted.mtype
            pack = Config.packname
            author = Config.author
            if (citel.quoted) {
                let media = await citel.quoted.download();
                citel.reply("*ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇǫᴜᴇsᴛ*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            } else if (/video/.test(mime)) {
                if ((quoted.msg || citel.quoted)
                    .seconds > 20) return citel.reply("ᴄᴀɴɴᴏᴛ ғᴇᴛᴄʜ ᴠɪᴅᴇᴏs ʟᴏɴɢᴇʀ ᴛʜᴀɴ *20 sᴇᴄᴏɴᴅs*");
                let media = await quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL, // The sticker type
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 70, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });
            } else {
                citel.reply("*ᴍᴇɴᴛɪᴏɴ ᴀɴʏ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ.!*");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text, {isCreator}) => {
        citel.reply(`*ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴘᴍ ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ *•ɢʀᴏᴜᴘ ɴᴀᴍᴇ•* \n┃✗ *•xxxx-sᴜᴘᴘᴏʀᴛ•* \n┃✗ *•ɢʀᴏᴜᴘ ʟɪɴᴋ•* https://chat.whatsapp.com/xxxxxxxxxxx\n┃✗ *•ᴀᴜᴛʜᴏʀ•* 𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫\n┗━━━━━━━━━━⦿`,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
  pattern: "warn",
  desc: "Warns user in Group.", 
  category: "group",
  filename: __filename,
  use: '<quote|reply|number>',
},

async(Void, citel, text, {isCreator}) => {

  if (!citel.isGroup) return citel.reply("This command is for groups");

  const groupAdmins = await getAdmin(Void, citel);

  const isAdmin = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

  if (!isAdmin) return citel.reply("This command is only for group admins!");

  if(!citel.quoted) return citel.reply("Please quote a user to warn");

  const currentTime = moment().format("HH:mm:ss");

  moment.tz.setDefault("Asia/Karachi");

  try {

    let metadata = await Void.groupMetadata(citel.group);

    await new warndb({
      id: citel.quoted.participant + "@s.whatsapp.net",
      reason: text,
      group: metadata.subject,
      warnedby: citel.sender,
      date: currentTime
    }).save();

    let mentioned = citel.quoted;

    Void.sendMessage(citel.chat, {
      text: `*----Warn----*\nUser: @${mentioned.participant}\nWith Reason: ${text}\nWarned by: ${citel.sender}`,
      mentions: [mentioned]
    }, {
      quoted: citel
    });

    let warns = await warndb.find({
      id: citel.quoted.participant + "@s.whatsapp.net"
    });

    const maxWarns = require("../config");

    if(warns.length > maxWarns.warncount){

      let text = `Removing User because Warn limit exceeded\n\n*All Warnings.*\n`;

      let warns = await warndb.find({
        id: citel.quoted.participant + "@s.whatsapp.net"  
      });

      text += `There are total ${warns.length} warnings.\n`;

      for(let i = 0; i < warns.length; i++) {
        text += `\n*${i+1}. Date:-* ${warns[i].date}\n`;
        text += `│ *🔰Time:-* ${warns[i].time}\n`;
        text += `│ *⚠️Warned by:-* ${warns[i].warnedby}\n`;
        text += `│ _📍Reason:_ ${warns[i].reason}_\n`;
        text += `╰─────────────◆\n`;
      }

      citel.reply(text);

      await Void.groupParticipantsUpdate(citel.chat, [citel.quoted.participant], "remove");

    }

  } catch (err) {
    console.log(err);
  }

})
    //---------------------------------------------------------------------------
cmd({
            pattern: "unblock",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) citel.reply(tlang().owner);
            let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : false ;
            if(!users)  return await citel.reply("*Uhh dear, reply/mention an User*")
	    let num = users.replace("@s.whatsapp.net","")
            await Void.updateBlockStatus(users, "unblock")
                .then((res) => citel.send(`*@${num} Unblocked Succesfully..!*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "ujid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(tlang().owner)
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
		const participants = citel.isGroup ? await groupMetadata.participants : "";
    let textt = `ʜᴇʀᴇ ɪs ᴊɪᴅ ᴀᴅᴅʀᴇss ᴏғ ᴀʟʟ ᴜsᴇʀs ᴏғ\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `♕ ${mem.id}\n`;
        }
      citel.reply(textt)

    }
)

    //---------------------------------------------------------------------------
cmd({
        pattern: "tagall",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        let textt = `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ •ᴍᴇssᴀɢᴇ• ${text ? text : "blank"}\n\n
┃✗ •ᴀᴜᴛʜᴏʀ• •𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫• 👑
┗━━━━━━━━━━⦿
`
        for (let mem of participants) {
            textt += `♕ @${mem.id.split("@")[0]}\n
`;
        }
        Void.sendMessage(citel.chat, {
            text: textt,
            mentions: participants.map((a) => a.id),
        }, {
            quoted: citel,
        });
    }
)

//---------------------------------------------------------------------------
cmd({
            pattern: "request",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example : ${
        prefix + command
      } ʜᴇʟʟᴏ ᴅᴇᴠ ᴘʟᴇᴀsᴇ ᴀᴅᴅ ᴀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ғᴇᴀᴛᴜʀᴇ`);
            textt = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n              *| ʀᴇǫᴜᴇsᴛ |* `;
            teks1 = `\n┃✗ •ᴜsᴇʀ• @${
    citel.sender.split("@")[0]
  }\n┃✗ •ʀᴇǫᴜᴇsᴛ• ${text}\n┗━━━━━━━━━━⦿`;
            teks2 = `\n\n┃✗ •ʜɪ ${citel.pushname} ,ʏᴏᴜʀ•\n┃✗ •ʀᴇǫᴜᴇsᴛ ʜᴀs ʙᴇᴇɴ•\n┃✗ •ғᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ•\n┃✗ •ᴍʏ ᴏᴡɴᴇʀ•`;
            for (let i of owner) {
                Void.sendMessage(i + "923004373535@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [citel.sender],
                }, {
                    quoted: citel,
                });
            }
            Void.sendMessage(citel.chat, {
                text: textt + teks2 + teks1,
                mentions: [citel.sender],
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "retrive",
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ᴍᴇssᴀɢᴇ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ!");
            let mime = citel.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(citel.chat, msgs, { quoted: citel });
                await Void.relayMessage(citel.chat, prep.message, { messageId: prep.key.id });
            } else {
                await citel.reply("ᴘʟᴇᴀsᴇ, ʀᴇᴘʟʏ ᴛᴏ ᴠɪᴇᴡ ᴏɴᴄᴇ ᴍᴇssᴀɢᴇ");
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "rwarn",
            desc: "Deletes all previously given warns of quoted user.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text,{isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.quoted) return citel.reply('ᴍᴇɴᴛɪᴏɴ ᴀ ᴜsᴇʀ.')
            await warndb.deleteOne({ id: citel.quoted.sender.split('@')[0] + 'warn' });
            return citel.reply('ʀᴇᴍᴏᴠᴇᴅ ᴀʟʟ ᴘʀᴇᴠɪᴏᴜs ᴡᴀʀɴs ᴏғ ᴛʜɪs ᴜsᴇʀ')
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2) return await citel.reply(`${prefix}ᴘᴏʟʟ ǫᴜᴇsᴛɪᴏɴ;ᴏᴘᴛɪᴏɴ1,ᴏᴘᴛɪᴏɴ2,ᴏᴘᴛɪᴏɴ3.....`);
            let options = [];
            for (let i of opt.split(',')) {  options.push(i);  }
            await Void.sendMessage(citel.chat, { poll: { name: poll,  values: options } })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "profile",
            desc: "Shows profile of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
            let meh = citel.sender;
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD";
            if (lvpoints <= 2) {
                var role = "Citizen";
            } else if (lvpoints <= 4) {
                var role = "Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "Wizard";
            } else if (lvpoints <= 8) {
                var role = "Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "Mage";
            } else if (lvpoints <= 14) {
                var role = "Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "Nobel";
            } else if (lvpoints <= 20) {
                var role = "Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "Elite";
            } else if (lvpoints <= 24) {
                var role = "Ace I";
            } else if (lvpoints <= 26) {
                var role = "Ace II";
            } else if (lvpoints <= 28) {
                var role = "Ace Master";
            } else if (lvpoints <= 30) {
                var role = "Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "Supreme I";
            } else if (lvpoints <= 38) {
                var role = "Supreme Ii";
            } else if (lvpoints <= 40) {
                var role = "Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "Legend III";
            } else if (lvpoints <= 44) {
                var role = "Legend II";
            } else if (lvpoints <= 46) {
                var role = "Legend";
            } else if (lvpoints <= 55) {
                var role = "•𝐊𝐈𝐍𝐆•👑";
            }
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/karachi')
                .locale('id')
            try {
                pfp = await Void.profilePictureUrl(citel.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿	    
┃✗ •ᴘʀᴏғɪʟᴇ ɪɴғᴏʀᴍᴀᴛɪᴏɴ• 
┃✗ •ᴜsᴇʀɴᴀᴍᴇ• ${citel.pushName}
┃✗ •ʙɪᴏ• ${bioo}
┃✗ •ʀᴏʟᴇ• ${role}
┃✗ •ʟᴇᴠᴇʟ• ${userq.level}
┃✗ •ᴛᴏᴛᴀʟ ᴍᴇssᴀɢᴇ• ${ttms}
┃✗ •ᴀᴜᴛʜᴏʀ• ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ
┃✗ •ᴘᴏᴡᴇʀᴇᴅ ʙʏ• sɪɢᴍᴀ ᴹᴰ
┗━━━━━━━━━━⦿
`;
            let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
/*
cmd({
            pattern: "rank",
            desc: "Sends rank card of user.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text) => {
            const userq = await Levels.fetch(citel.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD";
            if (lvpoints <= 2) {
                var role = "Citizen";
            } else if (lvpoints <= 4) {
                var role = "Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "Wizard";
            } else if (lvpoints <= 8) {
                var role = "Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "Mage";
            } else if (lvpoints <= 14) {
                var role = "Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "Nobel";
            } else if (lvpoints <= 20) {
                var role = "Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "Elite";
            } else if (lvpoints <= 24) {
                var role = "Ace I";
            } else if (lvpoints <= 26) {
                var role = "Ace II";
            } else if (lvpoints <= 28) {
                var role = "Ace Master";
            } else if (lvpoints <= 30) {
                var role = "Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "Supreme I";
            } else if (lvpoints <= 38) {
                var role = "Supreme Ii";
            } else if (lvpoints <= 40) {
                var role = "Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "Legend III";
            } else if (lvpoints <= 44) {
                var role = "Legend II";
            } else if (lvpoints <= 46) {
                var role = "Legend";
            } else if (lvpoints <= 55) {
                var role = "•𝐊𝐈𝐍𝐆•👑";
            }
            let disc = citel.sender.substring(3, 7);
            let textr = '';
            textr += `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •Hii• ${tlang().greet}, ${citel.pushName}\n`;
            let ttms = `${userq.xp}` / 8;
            textr += `┃✗ •Role• ${role} \n┃✗ •Exp• ${userq.xp} / ${Levels.xpFor(
    userq.level + 1
  )}\n┃✗ •Level• ${userq.level}\n┃✗ •Total Messages• ${ttms}\n┗━━━━━━━━━━⦿`;
            try {
                ppuser = await Void.profilePictureUrl(citel.sender, "image");
            } catch {
                ppuser = THUMB_IMAGE;
            }
                    Void.sendMessage(citel.chat, {
                        image: await getBuffer(ppuser),
                        caption: textr,
                    }, {
                        quoted: citel,
                    });
        }
    )
*/
    //---------------------------------------------------------------------------
cmd({
            pattern: "leaderboard",
            alias: ["deck"],
            desc: "To check leaderboard",
            category: "general",
            filename: __filename,
        },
        async(Void, citel, {isCreator}) => {
	    if (!isCreator) return citel.reply(tlang().owner)
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● LeaderBoard ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "GOD✨";
                if (lvpoints <= 2) {
                    var role = "🏳Citizen";
                } else if (lvpoints <= 4) {
                    var role = "👼Baby Wizard";
                } else if (lvpoints <= 6) {
                    var role = "🧙‍♀️Wizard";
                } else if (lvpoints <= 8) {
                    var role = "🧙‍♂️Wizard Lord";
                } else if (lvpoints <= 10) {
                    var role = "🧚🏻Baby Mage";
                } else if (lvpoints <= 12) {
                    var role = "🧜Mage";
                } else if (lvpoints <= 14) {
                    var role = "🧜‍♂️Master of Mage";
                } else if (lvpoints <= 16) {
                    var role = "🌬Child of Nobel";
                } else if (lvpoints <= 18) {
                    var role = "❄Nobel";
                } else if (lvpoints <= 20) {
                    var role = "⚡Speed of Elite";
                } else if (lvpoints <= 22) {
                    var role = "🎭Elite";
                } else if (lvpoints <= 24) {
                    var role = "🥇Ace I";
                } else if (lvpoints <= 26) {
                    var role = "🥈Ace II";
                } else if (lvpoints <= 28) {
                    var role = "🥉Ace Master";
                } else if (lvpoints <= 30) {
                    var role = "🎖Ace Dominator";
                } else if (lvpoints <= 32) {
                    var role = "🏅Ace Elite";
                } else if (lvpoints <= 34) {
                    var role = "🏆Ace Supreme";
                } else if (lvpoints <= 36) {
                    var role = "💍Supreme I";
                } else if (lvpoints <= 38) {
                    var role = "💎Supreme Ii";
                } else if (lvpoints <= 40) {
                    var role = "🔮Supreme Master";
                } else if (lvpoints <= 42) {
                    var role = "🛡Legend III";
                } else if (lvpoints <= 44) {
                    var role = "🏹Legend II";
                } else if (lvpoints <= 46) {
                    var role = "⚔Legend";
                } else if (lvpoints <= 55) {
                    var role = "🐉Immortal";
                }
                let data = await sck1.findOne({ id: fetchlb[i].userID })
                let namew = fetchlb[i].userID
                let ttms = fetchlb[i].xp / 8
                leadtext += `*${i + 1}●Name*: ${data.name}\n*●Level*: ${fetchlb[i].level}\n*●Points*: ${fetchlb[i].xp}\n*●Role*: ${role}\n*●Total messages*: ${ttms}\n\n`;
            }
            return citel.reply(leadtext)
        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text ,{ isCreator }) => {	
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
	        if (!isBotAdmins) return citel.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return await citel.send("*_Uhh Dear, Reply/Mention to an User_*");
                await Void.groupParticipantsUpdate(citel.chat, [users], "promote");
                await citel.reply(`*User promoted Succesfully!*`)
                return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
            } catch(e) {
                console.log("Promote error : " , e )
                await Void.sendMessage(citel.chat, { react: { text: '❌', key: citel.key }});
                return await citel.reply(tlang().botAdmin);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "kick",
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(Void, citel, text ,{ isCreator }) => {
	//if (!isCreator) return citel.reply("*_Only My Owner Can Use This Command_*")
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return citel.reply(tlang().admin);
            
            try {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return citel.send("*_Uhh Dear, Reply/Mention to an User_*");
                await Void.groupParticipantsUpdate(citel.chat, [users], "remove");
                await citel.reply(`*Hurray, User Kicked Succesfully!*`)
                return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
            } catch(e) {
                console.log("Kick error : " , e )
                await Void.sendMessage(citel.chat, { react: { text: '👑', key: citel.key }});
                return await citel.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------
/*
cmd({
            pattern: "memegen",
            desc: "Write text on quoted image.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!/image/.test(mime)) return citel.reply(`Reply to Photo With Caption *text*`)
            mee = await Void.downloadAndSaveMediaMessage(citel.quoted)
            mem = await TelegraPh(mee)
            meme = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
            let buttonMessage = {
                image: meme,
                caption: "Here we go",
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
            await fs.unlinkSync(mee)

        }
    )
*/
    //---------------------------------------------------------------------------
cmd({
            pattern: "group",
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text, {isCreator}) => {
	    if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!citel.isGroup) return citel.reply(tlang().group);
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            if (!isAdmins) return citel.reply(tlang().admin);
            if (text.split(" ")[0] === "close") {
                await Void.groupSettingUpdate(citel.chat, "ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ")
                    .then((res) => reply(`Group Chat Muted :)`))
                    .catch((err) => console.log(err));
            } else if (text.split(" ")[0] === "open") {
                await Void.groupSettingUpdate(citel.chat, "ɴᴏᴛ_ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ")
                    .then((res) => reply(`Group Chat Unmuted :)`))
                    .catch((err) => console.log(err));
            } else {

                return citel.reply(`┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •ɢʀᴏᴜᴘ ᴍᴏᴅᴇ•\n┃✗ ${prefix}ɢʀᴏᴜᴘ ᴏᴘᴇɴ ᴛᴏ ᴏᴘᴇɴ\n┃✗ ${prefix}ɢʀᴏᴜᴘ ᴄʟᴏsᴇ ᴛᴏ ᴄʟᴏsᴇ\n┗━━━━━━━━━━⦿`);
            }
        }
    )
    //---------------------------------------------------------------------------
/*
cmd({
            pattern: "grouppic",
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text, {isCreator}) => {
	    if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            let mime = citel.quoted.mtype
            if (!citel.isGroup) citel.reply(tlang().group);
            if (!isAdmins) citel.reply(tlang().admin);
            if (!isBotAdmins) citel.reply(tlang().botadmin);
            if (!citel.quoted) return citel.reply(`Send/Reply Image With Caption ${command}`);
            if (!/image/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
            if (/webp/.test(mime)) return citel.reply(`Send/Reply Image With Caption ${command}`);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            await Void.updateProfilePicture(citel.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            citel.reply(tlang().success);

        }
    )
*/
    //---------------------------------------------------------------------------
cmd({
            pattern: "tag",
            alias:["hidetag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text , {isCreator}) => {
	if(!text && !citel.quoted) return citel.reply(`*Example : ${prefix}tag Hi Everyone, How are you Doing*` )
	    if(!text){text = citel.quoted.text;}
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
            const participants = citel.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Void, citel)
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
            if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
            Void.sendMessage(citel.chat, { text: text, mentions: participants.map((a) => a.id)}, { quoted: citel});
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(Void, citel, text,{isCreator}) => {
	    if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.isGroup) return citel.reply(tlang().group);
            const groupAdmins = await getAdmin(Void, citel)
            const botNumber = await Void.decodeJid(Void.user.id)
            const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;

            if (!text) return citel.reply("ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ɴᴜᴍʙᴇʀ.");
            if (!isCreator) return citel.reply(tlang().owner)
            if (!isBotAdmins) return citel.reply(tlang().botAdmin);
            let users = citel.mentionedJid[0] ? citel.mentionedJid[0] : citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await Void.groupParticipantsUpdate(citel.chat, [users], "add");

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "getjids",
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let getGroups = await Void.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `ᴀʟʟ ɢʀᴏᴜᴘs ᴊɪᴅ\n\n`
            citel.reply(`ғᴇᴛᴄʜɪɴɢ ᴊɪᴅ ғʀᴏᴍ ${anu.length} ɢʀᴏᴜᴘs`)
            for (let i of anu) {
                let metadata = await Void.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
                jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            citel.reply(jackhuh)

        }
    )
    //---------------------------------------------------------------------------
cmd({
    pattern: "demote",
    desc: "Demotes replied/quoted user from group",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
async(Void, citel, text,{ isCreator }) => {
//if (!isCreator) return citel.reply("```Only My Owner Can Use This Command```")
    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)
    const botNumber = await Void.decodeJid(Void.user.id)
    const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
    if (!isBotAdmins) return await citel.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return citel.reply(tlang().admin);
    
    try {
        let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return await citel.send("*_Uhh Dear, Reply/Mention to an User_*");
        await Void.groupParticipantsUpdate(citel.chat, [users], "demote");
        await citel.reply(`*User demoted Succesfully!*`)
        return await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});
    } catch(e) {
        console.log("Demote error : " , e )
        await Void.sendMessage(citel.chat, { react: { text: '❌', key: citel.key }});
        return await citel.reply(tlang().botAdmin);    
    }

}
)
//---------------------------------------------------------------------------
cmd({
            pattern: "del",
            alias: ["delete"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(Void, citel, text, {isCreator}) => {
	    if (!isCreator) return citel.reply(tlang().owner)
            if (citel.quoted.Bot) {
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })

            }
            if (!citel.quoted.isBot) {
                if (!citel.isGroup) return citel.reply(tlang().group)
                const groupAdmins = await getAdmin(Void, citel)
                const botNumber = await Void.decodeJid(Void.user.id)
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (!isAdmins) return citel.reply('ᴏɴʟʏ ᴀᴅᴍɪɴs ᴀʀᴇ ᴀʟʟᴏᴡᴇᴅ ᴛᴏ ᴅᴇʟᴇᴛᴇ ᴏᴛʜᴇʀ ᴘᴇʀsᴏɴs ᴍᴇssᴀɢᴇ.')
                if (!isBotAdmins) return citel.reply('ɪ ᴄᴀɴ\'ᴛ ᴅᴇʟᴇᴛᴇ ᴀɴʏᴏɴᴇs ᴍᴇssᴀɢᴇ ᴡɪᴛʜᴏᴜᴛ ɢᴇᴛᴛɪɴɢ ᴀᴅᴍɪɴ ʀᴏʟᴇ.')
                if (!citel.quoted) return citel.reply(`ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ ᴍᴇssᴀɢᴇ. ${tlang().greet}`);
                let { chat, fromMe, id } = citel.quoted;
                const key = {
                    remoteJid: citel.chat,
                    fromMe: false,
                    id: citel.quoted.id,
                    participant: citel.quoted.sender
                }
                await Void.sendMessage(citel.chat, { delete: key })
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "checkwarn",
            desc: "Check warns",
	    alias: ["cwarn"],
            category: "group",
            filename: __filename,
            use: '<quoted/reply user.>',
        },
        async(Void, citel, text, {isCreator}) => {
	    if (!isCreator) return citel.reply(tlang().owner)
            if (!citel.isGroup) return citel.reply('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘs!')
            if (!citel.quoted) return citel.reply('ᴍᴇɴᴛɪᴏɴ ᴀ ᴜsᴇʀ ')
            teskd = `*All Warnings.*\n\n`
            let h = await warndb.find({ id: citel.quoted.sender.split('@')[0] + 'warn' })
            console.log(h)
            teskd += `*ᴛʜᴇʀᴇ ᴀʀᴇ ᴛᴏᴛᴀʟ ${h.length}  ᴡᴀʀɴɪɴɢs.*\n`
            for (let i = 0; i < h.length; i++) {
                teskd += `*${i+1}*\n┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •ɪɴ ɢʀᴏᴜᴘ• ${h[i].group}\n`
                teskd += `┃✗ •ᴛɪᴍᴇ• ${h[i].date}\n`
                teskd += `┃✗ •ᴡᴀʀɴᴇᴅ ʙʏ• ${h[i].warnedby}\n`
                teskd += `┃✗ •ʀᴇᴀsᴏɴ• ʙᴀᴅ ʙᴇʜᴀᴠɪᴏᴜʀ\n┗━━━━━━━━━━⦿\n\n`
            }
            citel.reply(teskd)
        }

    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "block",
        desc: "blocks that person",
        fromMe: true,
        category: "owner",
        filename: __filename,
        use: '<quote/reply user.>'
    },
    async(Void, citel, text,{isCreator}) => {
        if (!isCreator) citel.reply(tlang().owner);
        let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid[0] ? citel.mentionedJid[0] : "";
        if(!users)  return await citel.reply("*Uhh dear, reply/mention an User*")
        await Void.updateBlockStatus(users, "block")
            .then((res) => { return Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }});    })		    //console.log(jsonformat(res))
            .catch((err) => console.log(jsonformat(err)));

    }
)
    //---------------------------------------------------------------------------
cmd({
        pattern: "broadcast",
        alias: ["bc"],
        desc: "Bot makes a broadcast in all groups",
        fromMe: true,
        category: "group",
        filename: __filename,
        use: '<text for broadcast.>',
    },
    async(Void, citel, text, {isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        let getGroups = await Void.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        citel.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${
          anu.length * 1.5
        } second`);
        for (let i of anu) {
            await sleep(1500);
            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Author:* ${citel.pushName}\n\n${text}`;
            let buttonMessaged = {
                image: log0,
                caption: txt,
                footer: citel.pushName,
                headerType: 1,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: 'Broadcast by ' + citel.pushName,
                        body: tlang().title,
                        thumbnail: log0,
                        mediaUrl: '',
                        mediaType: 2,
                        sourceUrl: gurl,
                        showAdAttribution: true,
                    },
                },
            };
            await Void.sendMessage(i, buttonMessaged, {
                quoted: citel,
            });
        }
        citel.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------
if(Config.WORKTYPE!=='private'){
cmd({ on: "text" }, async(Void, citel) => {
    const randomXp = 8;
    let usrname = citel.pushName
    const hasLeveledUp = await Levels.appendXp(citel.sender, "RandomXP", randomXp);
    if (hasLeveledUp) {
        const sck1 = await Levels.fetch(citel.sender, "RandomXP");
        const lvpoints = sck1.level;
        var role = "GOD";
        if (lvpoints <= 2) {
            var role = "Citizen";
        } else if (lvpoints <= 4) {
            var role = "Baby Wizard";
        } else if (lvpoints <= 6) {
            var role = "Wizard";
        } else if (lvpoints <= 8) {
            var role = "Wizard Lord";
        } else if (lvpoints <= 10) {
            var role = "Baby Mage";
        } else if (lvpoints <= 12) {
            var role = "Mage";
        } else if (lvpoints <= 14) {
            var role = "Master of Mage";
        } else if (lvpoints <= 16) {
            var role = "Child of Nobel";
        } else if (lvpoints <= 18) {
            var role = "Nobel";
        } else if (lvpoints <= 20) {
            var role = "Speed of Elite";
        } else if (lvpoints <= 22) {
            var role = "Elite";
        } else if (lvpoints <= 24) {
            var role = "Ace I";
        } else if (lvpoints <= 26) {
            var role = "Ace II";
        } else if (lvpoints <= 28) {
            var role = "Ace Master";
        } else if (lvpoints <= 30) {
            var role = "🎖Ace Dominator";
        } else if (lvpoints <= 32) {
            var role = "Ace Elite";
        } else if (lvpoints <= 34) {
            var role = "Ace Supreme";
        } else if (lvpoints <= 36) {
            var role = "Supreme I";
        } else if (lvpoints <= 38) {
            var role = "Supreme Ii";
        } else if (lvpoints <= 40) {
            var role = "Supreme Master";
        } else if (lvpoints <= 42) {
            var role = "Legend III";
        } else if (lvpoints <= 44) {
            var role = "Legend II";
        } else if (lvpoints <= 46) {
            var role = "Legend";
        } else if (lvpoints <= 55) {
            var role = "ᴋɪɴɢ 👑";
        } else {
            var role = "Kiddo";
        }
        if (Config.levelupmessage !== 'false') {
            await Void.sendMessage(citel.chat, {
                image: {
                    url: await botpic(),
                },
                caption: `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ •ᴡᴏᴡ,sᴏᴍᴇᴏɴᴇ ᴊᴜsᴛ•
┃✗ •ʟᴇᴠᴇʟᴇᴅ ᴜᴘ ʜᴜʜ•
┃✗ •ɴᴀᴍᴇ• ${citel.pushName}
┃✗ •ʟᴇᴠᴇʟ• ${sck1.level}🍭
┃✗ •ᴇxᴘ• ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
┃✗ •ʀᴏʟᴇ• *${role}*
┃✗ •ᴀᴜᴛʜᴏʀ• ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ
┗━━━━━━━━━━⦿
`,
            }, {
                quoted: citel,
            });
        }
    }

})
}
