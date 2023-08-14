
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

const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "question",
            desc: "Random Question.",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "truth",
            desc: "truth and dare(truth game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "dare",
            desc: "truth and dare(dare game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "fact",
        desc: "Sends fact in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*Fact:* ${data.fact}\n\n*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ* ♕`)   
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "quotes",
        desc: "Sends quotes in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        var _0x44db3e=_0x2e53;(function(_0x463d09,_0x18a440){var _0x3d4c18=_0x2e53,_0x3417b2=_0x463d09();while(!![]){try{var _0x4936ce=-parseInt(_0x3d4c18(0x1cf))/0x1*(parseInt(_0x3d4c18(0x1d1))/0x2)+-parseInt(_0x3d4c18(0x1d4))/0x3*(-parseInt(_0x3d4c18(0x1d0))/0x4)+parseInt(_0x3d4c18(0x1cc))/0x5*(parseInt(_0x3d4c18(0x1d2))/0x6)+-parseInt(_0x3d4c18(0x1c9))/0x7+parseInt(_0x3d4c18(0x1d5))/0x8+-parseInt(_0x3d4c18(0x1c7))/0x9*(parseInt(_0x3d4c18(0x1ce))/0xa)+parseInt(_0x3d4c18(0x1cb))/0xb;if(_0x4936ce===_0x18a440)break;else _0x3417b2['push'](_0x3417b2['shift']());}catch(_0x4e7485){_0x3417b2['push'](_0x3417b2['shift']());}}}(_0x3539,0xca3a2));function _0x3539(){var _0x1f9f10=['author','11322437WTwnxY','data','21004533OeJpvu','20TpvLRs','https://favqs.com/api/qotd','865610acBJcB','4EDnnVl','5292VDbmqM','581018AGExLP','1418466csUBOr','get','1839ajIlTa','11305920ZuxaKm','body','153SkRMyL'];_0x3539=function(){return _0x1f9f10;};return _0x3539();}function _0x2e53(_0xba86d,_0x59af74){var _0x3539ec=_0x3539();return _0x2e53=function(_0x2e5364,_0x49ac95){_0x2e5364=_0x2e5364-0x1c7;var _0x3d924d=_0x3539ec[_0x2e5364];return _0x3d924d;},_0x2e53(_0xba86d,_0x59af74);}var quoo=await axios[_0x44db3e(0x1d3)](_0x44db3e(0x1cd));const replyf='\x0a┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20*•Content•*\x20'+quoo[_0x44db3e(0x1ca)]['quote'][_0x44db3e(0x1d6)]+'\x0a┃✗\x20*•Author•*\x20'+quoo['data']['quote'][_0x44db3e(0x1c8)]+'\x20\x20\x0a┗━━━━━━━━━━⦿\x20';return citel['reply'](replyf);
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "define",
        desc: "urban dictionary.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
