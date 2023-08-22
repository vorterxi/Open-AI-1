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

 const _0x589658=_0x4542;(function(_0x248b6b,_0x2e65b7){const _0x1418b9=_0x4542,_0x38ae8f=_0x248b6b();while(!![]){try{const _0x3138c9=parseInt(_0x1418b9(0xae))/0x1+-parseInt(_0x1418b9(0xab))/0x2+-parseInt(_0x1418b9(0xb8))/0x3+-parseInt(_0x1418b9(0xba))/0x4*(-parseInt(_0x1418b9(0xbf))/0x5)+parseInt(_0x1418b9(0xb4))/0x6*(parseInt(_0x1418b9(0xa6))/0x7)+parseInt(_0x1418b9(0xaf))/0x8*(-parseInt(_0x1418b9(0xad))/0x9)+parseInt(_0x1418b9(0xb0))/0xa;if(_0x3138c9===_0x2e65b7)break;else _0x38ae8f['push'](_0x38ae8f['shift']());}catch(_0x2c43d9){_0x38ae8f['push'](_0x38ae8f['shift']());}}}(_0x60ed,0x19187));const _0x3fcf86=(function(){let _0x39ad58=!![];return function(_0x135f46,_0x4b55b7){const _0x4890e1=_0x39ad58?function(){const _0x1b3202=_0x4542;if(_0x4b55b7){const _0x2d42f7=_0x4b55b7[_0x1b3202(0xb2)](_0x135f46,arguments);return _0x4b55b7=null,_0x2d42f7;}}:function(){};return _0x39ad58=![],_0x4890e1;};}()),_0x3f0619=_0x3fcf86(this,function(){const _0x105963=_0x4542;return _0x3f0619[_0x105963(0xb3)]()['search'](_0x105963(0xc0))[_0x105963(0xb3)]()['constructor'](_0x3f0619)[_0x105963(0xa8)](_0x105963(0xc0));});function _0x60ed(){const _0x5033fa=['318952xvfZOf','189620hZepZr','console','apply','toString','932784ywIfHe','trace','bind','error','534120YshAQJ','__proto__','28388OvLPeU','constructor','prototype','warn','../lib','5VYgEXJ','(((.+)+)+)+$','{}.constructor(\x22return\x20this\x22)(\x20)','7nSwjBB','exception','search','table','info','72640BaNysv','length','9pKCpch','175497YbQReI'];_0x60ed=function(){return _0x5033fa;};return _0x60ed();}function _0x4542(_0x2f8824,_0x458c16){const _0x260f3a=_0x60ed();return _0x4542=function(_0x3d2bb4,_0x1e11f9){_0x3d2bb4=_0x3d2bb4-0xa5;let _0x30109e=_0x260f3a[_0x3d2bb4];return _0x30109e;},_0x4542(_0x2f8824,_0x458c16);}_0x3f0619();const _0x1e11f9=(function(){let _0x39706e=!![];return function(_0x4c6949,_0x5b7784){const _0x4f2e4c=_0x39706e?function(){const _0x531217=_0x4542;if(_0x5b7784){const _0x35df99=_0x5b7784[_0x531217(0xb2)](_0x4c6949,arguments);return _0x5b7784=null,_0x35df99;}}:function(){};return _0x39706e=![],_0x4f2e4c;};}()),_0x3d2bb4=_0x1e11f9(this,function(){const _0xebd3e4=_0x4542,_0x353d85=function(){const _0x276bd6=_0x4542;let _0x51c54d;try{_0x51c54d=Function('return\x20(function()\x20'+_0x276bd6(0xa5)+');')();}catch(_0x24b649){_0x51c54d=window;}return _0x51c54d;},_0x4c04fe=_0x353d85(),_0x4eb622=_0x4c04fe[_0xebd3e4(0xb1)]=_0x4c04fe[_0xebd3e4(0xb1)]||{},_0x17a6ab=['log',_0xebd3e4(0xbd),_0xebd3e4(0xaa),_0xebd3e4(0xb7),_0xebd3e4(0xa7),_0xebd3e4(0xa9),_0xebd3e4(0xb5)];for(let _0x20b67c=0x0;_0x20b67c<_0x17a6ab[_0xebd3e4(0xac)];_0x20b67c++){const _0x3da1ae=_0x1e11f9[_0xebd3e4(0xbb)][_0xebd3e4(0xbc)]['bind'](_0x1e11f9),_0x538bde=_0x17a6ab[_0x20b67c],_0x3114a0=_0x4eb622[_0x538bde]||_0x3da1ae;_0x3da1ae[_0xebd3e4(0xb9)]=_0x1e11f9['bind'](_0x1e11f9),_0x3da1ae['toString']=_0x3114a0[_0xebd3e4(0xb3)][_0xebd3e4(0xb6)](_0x3114a0),_0x4eb622[_0x538bde]=_0x3da1ae;}});_0x3d2bb4();const {tlang,sck,prefix,smd}=require(_0x589658(0xbe));
 smd({
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
 smd({
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
 smd({
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
 smd({
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
