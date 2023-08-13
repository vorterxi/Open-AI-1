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
function _0x3727(){const _0x3ee425=['\x0a┃✗\x20•Plugins•\x20','11ByfdoN','\x0a┃✗\x20•Date•\x20','push','map','1396535rqrRBv','ownername','use','4790202uhkVcR','desc','category','../lib','204478vusPHn','Asia/karachi','\x0a┃✗\x20•Time•\x20','1197Cdrtcx','en-pk','\x0a┃✗\x20•Theme•\x20','└────────────◉\x0a','\x0a┃✗\x20•Users•\x20','7708630QSSHlv','592508ZvPnZC','toLocaleString','5GYWKVH','uptime','*•Type•*\x20','pattern','\x0a┃✗\x20•Uptime•\x20','alias','totalmem','sendMessage','┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━━⦿\x0a┃✗\x20•Owner•\x20','```','20294844GaBSAJ','*❌No\x20Such\x20commands.*','•Usage•\x0a\x20```','\x0a┗━━━━━━━━━━━⦿\x0a\x0a\x0a','46808rqVbvv','reply','┌──『\x20*','┃✗\x20•Description•\x20','help\x20cmd\x20name\x20to\x20know\x20more\x20about\x20specific\x20command.\x0a*Eg:*\x20','9Hmvavq','chat','title','4dAGekK','split','dontAddCommandList','┃✗\x20•Alias•\x20'];_0x3727=function(){return _0x3ee425;};return _0x3727();}const _0x212ed2=_0x1bba;(function(_0x5622b6,_0x24e2fb){const _0x329a5e=_0x1bba,_0x4f3b3b=_0x5622b6();while(!![]){try{const _0x2d1dd2=parseInt(_0x329a5e(0x111))/0x1*(parseInt(_0x329a5e(0x121))/0x2)+parseInt(_0x329a5e(0x10e))/0x3*(-parseInt(_0x329a5e(0x12a))/0x4)+parseInt(_0x329a5e(0x12c))/0x5*(parseInt(_0x329a5e(0x11d))/0x6)+-parseInt(_0x329a5e(0x11a))/0x7+-parseInt(_0x329a5e(0x13a))/0x8*(-parseInt(_0x329a5e(0x124))/0x9)+parseInt(_0x329a5e(0x129))/0xa+parseInt(_0x329a5e(0x116))/0xb*(-parseInt(_0x329a5e(0x136))/0xc);if(_0x2d1dd2===_0x24e2fb)break;else _0x4f3b3b['push'](_0x4f3b3b['shift']());}catch(_0x3555f1){_0x4f3b3b['push'](_0x4f3b3b['shift']());}}}(_0x3727,0x66d7e));const {commands}=require(_0x212ed2(0x120));function _0x1bba(_0x4f6b60,_0x1b14b5){const _0x3727a1=_0x3727();return _0x1bba=function(_0x1bba21,_0x5310a9){_0x1bba21=_0x1bba21-0x10a;let _0x45b5b7=_0x3727a1[_0x1bba21];return _0x45b5b7;},_0x1bba(_0x4f6b60,_0x1b14b5);}if(text[_0x212ed2(0x112)]('\x20')[0x0]){let arr=[];const cmd=commands['find'](_0x475e32=>_0x475e32['pattern']===text[_0x212ed2(0x112)]('\x20')[0x0]['toLowerCase']());if(!cmd)return await citel[_0x212ed2(0x10a)](_0x212ed2(0x137));else arr['push']('┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20•Command•\x20'+cmd[_0x212ed2(0x12f)]);if(cmd[_0x212ed2(0x11f)])arr[_0x212ed2(0x118)]('┃✗\x20•Category•\x20'+cmd[_0x212ed2(0x11f)]);if(cmd[_0x212ed2(0x131)])arr[_0x212ed2(0x118)](_0x212ed2(0x114)+cmd[_0x212ed2(0x131)]);if(cmd[_0x212ed2(0x11e)])arr[_0x212ed2(0x118)](_0x212ed2(0x10c)+cmd[_0x212ed2(0x11e)]+'\x0a┗━━━━━━━━━━⦿');if(cmd[_0x212ed2(0x11c)])arr[_0x212ed2(0x118)](_0x212ed2(0x138)+prefix+cmd[_0x212ed2(0x12f)]+'\x20'+cmd[_0x212ed2(0x11c)]+_0x212ed2(0x135));return await citel[_0x212ed2(0x10a)](arr['join']('\x0a'));}else{const cmds={};commands[_0x212ed2(0x119)](async(_0x40e9cc,_0xb49b17)=>{const _0x2857f7=_0x212ed2;if(_0x40e9cc[_0x2857f7(0x113)]===![]&&_0x40e9cc['pattern']!==undefined){if(!cmds[_0x40e9cc[_0x2857f7(0x11f)]])cmds[_0x40e9cc['category']]=[];cmds[_0x40e9cc[_0x2857f7(0x11f)]][_0x2857f7(0x118)](_0x40e9cc['pattern']);}});let [date,time]=new Date()[_0x212ed2(0x12b)](_0x212ed2(0x125),{'timeZone':_0x212ed2(0x122)})[_0x212ed2(0x112)](','),total=await sck1['countDocuments'](),str=_0x212ed2(0x134)+Config[_0x212ed2(0x11b)]+_0x212ed2(0x126)+tlang()[_0x212ed2(0x110)]+_0x212ed2(0x123)+time+_0x212ed2(0x117)+date+_0x212ed2(0x115)+commands['length']+'\x0a┃✗\x20•Mem•\x20'+formatp(os[_0x212ed2(0x132)]()-os['freemem']())+'/'+formatp(os[_0x212ed2(0x132)]())+_0x212ed2(0x130)+runtime(process[_0x212ed2(0x12d)]())+_0x212ed2(0x128)+total+_0x212ed2(0x139)+'';for(const category in cmds){str+=_0x212ed2(0x10b)+tiny(category)+'*\x20』──❖\x0a';if(text['toLowerCase']()==category['toLowerCase']()){str='╭─────❏\x20*'+tiny(category)+'*\x20❏\x0a';for(const plugins of cmds[category]){str+='│\x20'+fancytext(plugins,0x1)+'\x0a';}str+='└────────────◉\x0a';break;}else{for(const plugins of cmds[category]){str+='│\x20'+fancytext(plugins,0x1)+'\x0a';}str+=_0x212ed2(0x127);}}str+=_0x212ed2(0x12e)+prefix+_0x212ed2(0x10d)+prefix+'help\x20attp\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|°؁🅼♥︎❚❚♥︎🆉؁°|\x20';let buttonMessaged={'image':{'url':await botpic()},'caption':str};return await Void[_0x212ed2(0x133)](citel[_0x212ed2(0x10f)],buttonMessaged);}})


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
  const _0x2cef43=_0x2b70;(function(_0x2abcff,_0x113526){const _0x5c2db2=_0x2b70,_0x201fdf=_0x2abcff();while(!![]){try{const _0x5944e5=-parseInt(_0x5c2db2(0x123))/0x1*(parseInt(_0x5c2db2(0x121))/0x2)+-parseInt(_0x5c2db2(0x131))/0x3*(parseInt(_0x5c2db2(0x12d))/0x4)+parseInt(_0x5c2db2(0x12b))/0x5*(parseInt(_0x5c2db2(0x137))/0x6)+-parseInt(_0x5c2db2(0x12a))/0x7*(parseInt(_0x5c2db2(0x126))/0x8)+parseInt(_0x5c2db2(0x139))/0x9*(parseInt(_0x5c2db2(0x135))/0xa)+-parseInt(_0x5c2db2(0x12f))/0xb+-parseInt(_0x5c2db2(0x12c))/0xc*(-parseInt(_0x5c2db2(0x138))/0xd);if(_0x5944e5===_0x113526)break;else _0x201fdf['push'](_0x201fdf['shift']());}catch(_0x2df79b){_0x201fdf['push'](_0x201fdf['shift']());}}}(_0x414d,0x6dbec));function _0x414d(){const _0xcb737f=['../lib','toString','filename','197194VvgHcT','*PLease,\x20Provide\x20A\x20Command/Directory*','7hyRCyg','*Sorry,\x20Only\x20Owner\x20Can\x20Use\x20This\x20Command*','find','93672XSoDgN','*-------------\x20FILE\x20MANAGER\x20-------------*\x0a','startsWith','toLowerCase','455GSenTu','1135XWBUIS','636XNfWpu','4WcSvJh','reply','8922947lcEVWC','pattern','2246253BqYWwf','push','┃✗\x20•Type•\x20','join','10jQzKaU','*❌No\x20Such\x20commands.*','6954ECuGAc','763321Zzeied','770526isKHgC','┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20•Command•\x20','category'];_0x414d=function(){return _0xcb737f;};return _0x414d();}if(!isCreator)return citel[_0x2cef43(0x12e)](_0x2cef43(0x124));if(!text)return citel[_0x2cef43(0x12e)](_0x2cef43(0x122));if(text[_0x2cef43(0x128)]('.')){let res=_0x2cef43(0x127);try{const files=await readDirectory(text);files['forEach'](_0x9df3e4=>{res+=_0x9df3e4+'\x0a';}),await citel[_0x2cef43(0x12e)](res[_0x2cef43(0x11f)]());}catch(_0x230af6){citel[_0x2cef43(0x12e)](_0x230af6);}return;}const {commands}=require(_0x2cef43(0x11e));function _0x2b70(_0x35ffce,_0x37c91a){const _0x414db4=_0x414d();return _0x2b70=function(_0x2b7002,_0x511356){_0x2b7002=_0x2b7002-0x11d;let _0x2d4cac=_0x414db4[_0x2b7002];return _0x2d4cac;},_0x2b70(_0x35ffce,_0x37c91a);}let arr=[];const cmd=commands[_0x2cef43(0x125)](_0x2037e1=>_0x2037e1[_0x2cef43(0x130)]===text['split']('\x20')[0x0][_0x2cef43(0x129)]());if(!cmd)return await citel['reply'](_0x2cef43(0x136));else arr[_0x2cef43(0x132)](_0x2cef43(0x13a)+cmd['pattern']);if(cmd[_0x2cef43(0x11d)])arr['push'](_0x2cef43(0x133)+cmd[_0x2cef43(0x11d)]);if(cmd[_0x2cef43(0x120)])arr[_0x2cef43(0x132)]('┃✗\x20•FileName•\x20'+cmd['filename']+'\x0a┗━━━━━━━━━━⦿');return await citel['reply'](arr[_0x2cef43(0x134)]('\x0a'));
  
  
  })
  
