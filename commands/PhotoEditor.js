
const { smd,getBuffer, tlang, botpic, prefix, Config,fancytext } = require('../lib')

const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');
const {TelegraPh} = require('../lib/scraper')

//=====================================================================
async function Create_Url(Void, citel, name = 'ad' )
{
const _0x1dace8=_0x367a;function _0x26f1(){const _0xc64de5=['13444AIecxl','*ᴇʀʀᴏʀ\x20ᴡʜɪʟᴇ\x20ᴇᴅɪᴛɪɴɢ\x20ɪᴍᴀɢᴇ*\x0a*ᴇʀʀᴏʀ\x20ʀᴇᴀsᴏɴ:*\x20','decodeJid','73960soGYOX','1575683OEYqHN','downloadAndSaveMediaMessage','441OEclfF','2919707oQNBfX','2013754aJnIXK','1431KTrARE','chat','https://api.popcat.xyz/','log','414405PoGxef','102nAAbWk','sendMessage','caption','25900960cLaQwa','user'];_0x26f1=function(){return _0xc64de5;};return _0x26f1();}(function(_0x329471,_0x5242ae){const _0x5c4371=_0x367a,_0x3e57c8=_0x329471();while(!![]){try{const _0x5ee4e5=-parseInt(_0x5c4371(0x1ae))/0x1+-parseInt(_0x5c4371(0x1b2))/0x2+-parseInt(_0x5c4371(0x1b0))/0x3*(-parseInt(_0x5c4371(0x1aa))/0x4)+parseInt(_0x5c4371(0x1b7))/0x5*(parseInt(_0x5c4371(0x1b8))/0x6)+parseInt(_0x5c4371(0x1b1))/0x7+-parseInt(_0x5c4371(0x1ad))/0x8*(parseInt(_0x5c4371(0x1b3))/0x9)+parseInt(_0x5c4371(0x1bb))/0xa;if(_0x5ee4e5===_0x5242ae)break;else _0x3e57c8['push'](_0x3e57c8['shift']());}catch(_0xc85b5d){_0x3e57c8['push'](_0x3e57c8['shift']());}}}(_0x26f1,0xd167e));function _0x367a(_0x360a35,_0x1b3585){const _0x26f1a0=_0x26f1();return _0x367a=function(_0x367ac4,_0x26bfaf){_0x367ac4=_0x367ac4-0x1a9;let _0x294bf7=_0x26f1a0[_0x367ac4];return _0x294bf7;},_0x367a(_0x360a35,_0x1b3585);}try{let media=await Void[_0x1dace8(0x1af)](citel['quoted']),sᴜʜᴀɪʟ_ᴍᴅ=await TelegraPh(media);try{await fs['unlinkSync'](media);}catch(_0x5c9f39){}return await Void[_0x1dace8(0x1b9)](citel[_0x1dace8(0x1b4)],{'image':{'url':_0x1dace8(0x1b5)+name+'?image='+sᴜʜᴀɪʟ_ᴍᴅ},'caption':Config[_0x1dace8(0x1ba)]},{'quoted':citel});}catch(_0x4b7516){console[_0x1dace8(0x1b6)](_0x4b7516);const botNumber=await Void[_0x1dace8(0x1ac)](Void[_0x1dace8(0x1a9)]['id']);return await Void[_0x1dace8(0x1b9)](botNumber,{'text':_0x1dace8(0x1ab)+_0x4b7516},{'quoted':citel});}

} 
smd({ pattern: "ad", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text , { cmdName,args, isCreator, body, budy }) => {
    if (!citel.quoted) return await citel.reply(`${fancytext("reply to an image",1)} ${this.cmd}`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ")
    await Create_Url(Void, citel , 'ad'); 
})
//=============================================================================
smd({ pattern: "jail", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'jail'); 
})
//=============================================================================
smd({ pattern: "uncover", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'uncover'); 
})
//=============================================================================
smd({ pattern: "clown", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'clown'); 
})
//=============================================================================
smd({ pattern: "mnm", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'mnm'); 
})
//=============================================================================
smd({ pattern: "pett", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'pet'); 
})
//=============================================================================
smd({ pattern: "greyscale", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'greyscale'); 
})
//=============================================================================
smd({ pattern: "invert", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'invert'); 
})
//=============================================================================
smd({ pattern: "blur", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'blur'); 
})
//============================================================================
smd({ pattern: "drip", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'drip'); 
})
//=============================================================================
smd({ pattern: "colorify", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'colorify'); 
})
//=============================================================================
smd({ pattern: "gun", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'gun'); 
})
//=============================================================================
smd({ pattern: "wanted", category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ");
    await Create_Url(Void, citel , 'wanted'); 
})
//=============================================================================

















