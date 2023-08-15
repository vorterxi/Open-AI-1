
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

const { tlang, botpic, cmd, prefix, runtime, Config , sleep , parsedJid  } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------

//===============================================
async function getDateTime() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toLocaleTimeString();
  return { date, time };
}
//====================================================================
const sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg = {}
let isAnnonyMsgAlive = '';
let cmdName = 'rcg';
const { parseJid} =require("../lib")



const _0x2b42ca=_0x59a4;function _0x5b2c(){const _0x16b3fd=['info','2945100QotfTw','sɪɢᴍᴀ ᴹᴰ\x20•\x20ᴀɴɴᴏɴʏᴍᴏᴜs\x20ᴍsɢ','length','replace','sender','senderMsg','includes','startsWith','31444MIFEel','1522605QPSiUe','floor','\x27\x20public\x20Whatsapp\x20bot\x0aᴜsᴇʀ\x20ɴᴏᴛ\x20ᴡᴀɴᴛs\x20ᴛᴏ\x20ᴇxᴘᴏsᴇ\x20ɪᴛsᴇʟғ\x20ᴛᴏ\x20sᴇɴᴅ\x20ᴛʜᴀᴛ\x20ᴍᴇssᴀɢᴇ\x0a\x20\x20\x0a\x20\x0aɪғ\x20ʏᴏᴜ\x20ᴡᴀɴɴᴀ\x20ʀᴇᴘʟʏ\x20ᴛʜᴀᴛ\x20ᴜsᴇʀ,\x0a*sᴇɴᴅ\x20ᴍsɢ\x20ʙʏ\x20ʀᴇᴘʟʏ\x20ᴀʙᴏᴠᴇ\x20ᴍᴇssᴀɢᴇ*\x0a*ᴛʏᴘᴇ\x20ʟɪᴋᴇ:*\x20ʀᴇᴘʟʏ,\x20ᴛʏᴘᴇ_ʏᴏᴜʀ_ᴍᴇssᴀɢᴇ\x0a*ᴇxᴀᴍᴘʟᴇ:*\x20ʀᴇᴘʟʏ,\x20ᴄᴀɴ\x20ʏᴏᴜ\x20ʀᴇᴘʟʏ\x20ᴍᴇ\x20ғʀᴏᴍ\x20ʏᴏᴜʀ\x20ɴᴜᴍʙᴇʀ\x0a\x20','*ʙᴀsɪᴄᴀʟʟʏ\x20ɪᴛ\x20ɪs\x20ᴀɴ\x20ᴀɴᴏɴʏᴍᴏᴜs\x20ᴍᴇssᴀɢᴇ*\x0a\x0aᴍsɢ_ɪᴅ:\x20','*Anonymous\x20Chat\x20Recivers*\x0a','*\x0a*ᴍsɢ_ɪᴅ:\x20','random','trim','reply','\x0a*ʏᴏᴜ\x20ᴄᴀɴ\x20ʀᴇᴘʟʏ\x20ᴏɴᴇ\x20ᴍᴏʀᴇ\x20ᴛɪᴍᴇ*','3SsxRgk','\x0asᴇɴᴅᴇᴅ\x20ʙʏ
\x20\x27','toLowerCase','msgStatus','_\x0a\x0a*ᴍᴇssᴀɢᴇ:*\x20','ᴍsɢ_ɪᴅ','@s.whatsapp.net','9097794XOzmqH','tellinfo','*ᴛʜᴇʀᴇ\x20ɪs\x20ɴᴏ\x20ᴀɴᴏɴʏᴍᴏᴜs\x20ᴄʜᴀᴛ\x20ᴄʀᴇᴀᴛᴇᴅ\x20ʏᴇᴛ*','caption','*ᴘʀᴏᴠɪᴅᴇ\x20ɴᴜᴍʙᴇʀ\x20ᴡɪᴛʜ\x20ᴍsɢ\x20ᴛᴏ\x20sᴇɴᴅ\x20ᴀɴᴏɴʏᴍᴏᴜsʟʏ.*\x20\x0a*ᴇxᴀᴍᴘʟᴇ\x20','slice','text','reciever','\x0a\x0a\x0a','2894712HIKBoT','15VWZtwe','ᴘʀᴏᴠɪᴅᴇᴅ\x20ɴᴜᴍʙᴇʀ\x20ɪs\x20ɪɴᴠᴀʟɪᴅ,\x20ᴘʟᴇᴀsᴇ\x20ɢɪᴠᴇ\x20ᴠᴀʟɪᴅ\x20ɴᴜᴍʙᴇʀ\x20ᴡɪᴛʜ\x20ᴄᴏʀʀᴇᴄᴛ\x20ғᴏʀᴍᴀᴛ','sendMessage','*ᴀɴᴏɴʏᴍᴏᴜs\x20ᴍᴇssᴀɢᴇ\x20sᴇɴᴛ\x20sᴜᴄᴄᴇssғᴜʟʟʏ*','<ʜɪ,\x20ᴍᴀʜᴇʀ\x20ᴢᴜʙᴀɪʀ>','title','*ᴍsɢ_ɪᴅ:*\x20','ᴀɴᴏɴʏ-ᴍsɢ-','10FocMEF','quoted','split','indexOf','\x0a*ᴛɪᴍᴇ:*\x20','howmanyreply','610532nghubX','3233304mRjUXi','error\x20:\x20','*\x0a\x0a*ᴍᴇssᴀɢᴇ:*\x20','anonychat'];_0x5b2c=function(){return _0x16b3fd;};return _0x5b2c();}function _0x59a4(_0x4caf13,_0x33d87c){const _0x5b2c29=_0x5b2c();return _0x59a4=function(_0x59a4b4,_0x548955){_0x59a4b4=_0x59a4b4-0x11e;let _0x3b9705=_0x5b2c29[_0x59a4b4];return _0x3b9705;},_0x59a4(_0x4caf13,_0x33d87c);}(function(_0x1c8d7b,_0x2ad074){const _0x65db7a=_0x59a4,_0x21012a=_0x1c8d7b();while(!![]){try{const _0x14d41a=parseInt(_0x65db7a(0x13b))/0x1*(parseInt(_0x65db7a(0x11f))/0x2)+-parseInt(_0x65db7a(0x12a))/0x3*(-parseInt(_0x65db7a(0x149))/0x4)+-parseInt(_0x65db7a(0x14f))/0x5+-parseInt(_0x65db7a(0x13a))/0x6+-parseInt(_0x65db7a(0x120))/0x7+parseInt(_0x65db7a(0x14a))/0x8+-parseInt(_0x65db7a(0x131))/0x9*(-parseInt(_0x65db7a(0x143))/0xa);if(_0x14d41a===_0x2ad074)break;else _0x21012a['push'](_0x21012a['shift']());}catch(_0xed0401){_0x21012a['push'](_0x21012a['shift']());}}}(_0x5b2c,0x7d9c9));class AnonymousMsg{constructor(){const _0x60dc7e=_0x59a4;this['id']='',this[_0x60dc7e(0x153)]='',this[_0x60dc7e(0x138)]='',this[_0x60dc7e(0x154)]='',this[_0x60dc7e(0x132)]=0x0,this[_0x60dc7e(0x148)]=0x0;}}cmd({'pattern':'anonymsg','alias':['recognition','anonymous',_0x2b42ca(0x14d)],'desc':'send message to a number through bot number anonimously','category':'AI','use':_0x2b42ca(0x13f),'filename':__filename},async(_0x3f3bd3,_0x53872c,_0x3a968f,{cmdName:_0x4f405,isCreator:_0x32056c})=>{const _0x1f8060=_0x2b42ca;if(!_0x3a968f)return await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x135)+(prefix+_0x4f405)+'\x2092123456789,ʏᴏᴜʀ_ᴍᴇssᴀɢᴇ*');if(_0x32056c&&_0x3a968f===_0x1f8060(0x14e))return await _0x53872c[_0x1f8060(0x128)](isAnnonyMsgAlive==''?_0x1f8060(0x133):_0x1f8060(0x124)+isAnnonyMsgAlive+'_');const _0x21b6ef=_0x3a968f[_0x1f8060(0x146)](',');if(_0x21b6ef===-0x1)return await _0x53872c[_0x1f8060(0x128)]('*ɪɴᴠᴀʟɪᴅ\x20ғᴏʀᴍᴀᴛ.\x20ᴘʟᴇᴀsᴇ\x20ᴘʀᴏᴠɪᴅᴇ\x20ʙᴏᴛʜ\x20ɴᴜᴍʙᴇʀs\x20ᴀɴᴅ\x20ᴍᴇssᴀɢᴇ\x20sᴇᴘᴀʀᴀᴛᴇᴅ\x20ʙʏ\x20ᴀ\x20ᴄᴏᴍᴍᴀ.*');let _0x1ebb12=_0x3a968f[_0x1f8060(0x136)](0x0,_0x21b6ef)['trim']()+_0x1f8060(0x130),_0x41b958=_0x3a968f['slice'](_0x21b6ef+0x1)[_0x1f8060(0x127)](),_0x1b5497=await parsedJid(_0x1ebb12);if(_0x1b5497[0x0]){if(_0x1b5497[0x0]===_0x53872c[_0x1f8060(0x153)])return await _0x53872c[_0x1f8060(0x128)]('*ᴘʀᴏᴠɪᴅᴇ\x20ᴀɴᴏᴛʜᴇʀ\x20ɴᴜᴍʙᴇʀ\x20ɪɴsᴛᴇᴀᴅ\x20ᴏғ\x20ʏᴏᴜʀs,\x20ɪᴅɪᴏᴛ*');const {date:_0x2faccb,time:_0x4c9c08}=await getDateTime(),_0x3fc014=_0x1f8060(0x142)+Math[_0x1f8060(0x121)](0x186a0+Math[_0x1f8060(0x126)]()*0xdbba0);sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x3fc014]=new AnonymousMsg();let _0x4a7cbd=sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x3fc014];return _0x4a7cbd['id']=_0x3fc014,_0x4a7cbd[_0x1f8060(0x153)]=_0x53872c[_0x1f8060(0x153)],_0x4a7cbd['reciever']=_0x1b5497[0x0],_0x4a7cbd[_0x1f8060(0x12d)]=!![],_0x4a7cbd[_0x1f8060(0x154)]=_0x53872c,_0x41b958='*sɪɢᴍᴀ ᴹᴰ\x20•\x20ᴀɴɴᴏɴʏᴍᴏᴜs\x20ᴍsɢ*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a*ᴍsɢ-ɪᴅ:*\x20'+_0x4a7cbd['id']+'\x0a*ᴅᴀᴛᴇ:*\x20_'+_0x2faccb+_0x1f8060(0x147)+_0x4c9c08+_0x1f8060(0x12e)+_0x41b958+_0x1f8060(0x139)+Config[_0x1f8060(0x134)],isAnnonyMsgAlive=isAnnonyMsgAlive+','+_0x4a7cbd[_0x1f8060(0x138)],await _0x3f3bd3['sendMessage'](_0x4a7cbd['reciever'],{'text':_0x41b958}),await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x13e));}else return await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x13c));}),cmd({'on':_0x2b42ca(0x137)},async(_0x26c792,_0x4e9817,_0x4c2c89)=>{const _0x483f8e=_0x2b42ca;if(_0x4e9817[_0x483f8e(0x144)]&&isAnnonyMsgAlive['includes'](_0x4e9817[_0x483f8e(0x153)])&&_0x4e9817[_0x483f8e(0x137)][_0x483f8e(0x151)]>0x2){const _0x2c63ae=_0x4e9817[_0x483f8e(0x144)]['text'][_0x483f8e(0x145)]('\x0a');if(_0x2c63ae[_0x483f8e(0x151)]<0x3)return;if(_0x4e9817[_0x483f8e(0x144)][_0x483f8e(0x137)][_0x483f8e(0x155)](_0x483f8e(0x150))&&_0x2c63ae[0x0][_0x483f8e(0x155)](_0x483f8e(0x150))&&_0x2c63ae[0x2][_0x483f8e(0x155)](_0x483f8e(0x12f))){let _0x4ec172=''+_0x2c63ae[0x2][_0x483f8e(0x152)](_0x483f8e(0x141),'')['trim'](),_0xf03dfb=sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x4ec172];if(!_0xf03dfb)return;try{if(_0xf03dfb){let _0x4d7eeb=_0x4e9817['text'][_0x483f8e(0x145)](',')[0x0][_0x483f8e(0x127)]();if(_0x4d7eeb[_0x483f8e(0x12c)]()[_0x483f8e(0x11e)](_0x483f8e(0x128))){_0xf03dfb[_0x483f8e(0x148)]+=0x1;const _0x13c455=_0x4e9817['text'][_0x483f8e(0x146)](',');let _0x76f73d='*sɪɢᴍᴀ ᴹᴰ\x20•\x20ʏᴏᴜʀ\x20ᴀɴᴏɴʏ-ᴍsɢ\x20ʀᴇᴘʟʏ*\x0a\x0a*_From\x20@'+_0xf03dfb[_0x483f8e(0x138)][_0x483f8e(0x145)]('@')[0x0]+_0x483f8e(0x125)+_0xf03dfb['id']+_0x483f8e(0x14c)+_0x4e9817['text']['slice'](_0x13c455+0x1)['trim']()+'\x0a\x0a\x0a\x0a'+Config[_0x483f8e(0x134)];return _0xf03dfb[_0x483f8e(0x148)]>=0x2&&(isAnnonyMsgAlive=isAnnonyMsgAlive[_0x483f8e(0x152)](','+_0x4e9817[_0x483f8e(0x153)],'')),await _0x26c792['sendMessage'](_0xf03dfb[_0x483f8e(0x153)],{'text':_0x76f73d,'mentions':[_0xf03dfb['reciever']]},{'quoted':_0xf03dfb[_0x483f8e(0x154)]}),_0xf03dfb[_0x483f8e(0x148)]>=0x2&&(isAnnonyMsgAlive=isAnnonyMsgAlive['replace'](','+_0x4e9817[_0x483f8e(0x153)],''),delete sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x4ec172]),await _0x4e9817['reply']('*ʏᴏᴜʀ\x20ᴍᴇssᴀɢᴇ\x20sᴜᴄᴄᴇssғᴜʟʟʏ\x20ᴅᴇʟɪᴠᴇʀ\x20ᴛᴏ\x20ᴛʜᴀᴛ\x20ᴜsᴇʀ*\x20'+(_0xf03dfb[_0x483f8e(0x148)]==0x1?_0x483f8e(0x129):'')+'\x20');}else{if(_0xf03dfb[_0x483f8e(0x132)]===0x0){_0xf03dfb[_0x483f8e(0x132)]=0x1;let _0x4175f0=_0x483f8e(0x123)+_0xf03dfb['id']+_0x483f8e(0x12b)+tlang()[_0x483f8e(0x140)]+_0x483f8e(0x122)+Config[_0x483f8e(0x134)];return await _0x26c792[_0x483f8e(0x13d)](_0xf03dfb[_0x483f8e(0x138)],{'text':_0x4175f0},{'quoted':_0x4e9817});}else{if(_0xf03dfb[_0x483f8e(0x132)]===0x1)return _0xf03dfb[_0x483f8e(0x132)]=0x2,_0x4e9817[_0x483f8e(0x128)]('*ᴘʟᴇᴀsᴇ\x20ғᴏʟʟᴏᴡ\x20ᴛʜᴇ\x20ғᴏʀᴍᴀᴛ\x20ɪғ\x20ʏᴏᴜ\x20ᴡᴀɴɴᴀ\x20ʀᴇᴘʟʏ*\x0a*ᴛʏᴘᴇ\x20ʟɪᴋᴇ:*\x20ʀᴇᴘʟʏ,\x20ᴛʏᴘᴇ_ʏᴏᴜʀ_ᴍᴇssᴀɢᴇ*');else return;}}}}catch(_0x1ecb74){console['log'](_0x483f8e(0x14b),_0x1ecb74);}}}});


//---------------------------------------------------------------------------
cmd({
  pattern: "cpu",
  desc: "To check bot status",
  category: "general",
  filename: __filename,
},
async(Void, citel,{isCreator}) => {
const { formatp, runtime } = require("../lib");
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Runtime : ${runtime(process.uptime())}`
  

  let resp2 = `💻 Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  NodeJS Memory Usaage
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `Total CPU Usage
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
      `.trim()

      return await citel.reply(respon+resp2 )
})
//--------------------------------------------------------------------------------
cmd({
    pattern: "chat",
    alias :['gpt'],
    desc: "chat with an AI(GPT)",
    category: "AI",
    use: '<Hii,ᴏᴘᴇɴ ᴀⁱ>',
    filename: __filename,
},
async(Void, citel,text) => {
    let zx = text.length;
    if (zx < 8) {
        let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
        return citel.reply(data.cnt);  
    }
    if (!text) return citel.reply(`ʜᴇʏ ᴛʜᴇʀᴇ! ${citel.pushName}. ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ ᴅᴏɪɴɢ ᴛʜᴇsᴇ ᴅᴀʏs?`);
    // const { Configuration, OpenAIApi } = require("openai");
    // const configuration = new Configuration({
    //     apiKey: Config.OPENAI_API_KEY || "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",
    // });
    // const openai = new OpenAIApi(configuration);
    // const completion = await openai.createCompletion({
    //     model: "text-davinci-002",
    //     prompt: text,
    //     temperature: 0.5,
    //     max_tokens: 80,
    //     top_p: 1.0,
    //     frequency_penalty: 0.5,
    //     presence_penalty: 0.0,
    //     stop: ['"""'],
    // });
    // citel.reply(completion.data.choices[0].text);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", 
      messages: [{ role: "system", content: "You" }, { role: "user", content: text }],
    }),
  });

  const data = await response.json();
  console.log("GPT REPONCE : ",data); 
  if (!data.choices || data.choices.length === 0) {citel.reply("*ɪɴᴠᴀʟɪᴅ ᴄʜᴀᴛ-ɢᴘᴛ ᴀᴘɪ ᴋᴇʏ, ᴘʟᴇᴀsᴇ ᴘᴜᴛ ɴᴇᴡ ᴋᴇʏ*"); }
  return await  citel.reply(data.choices[0].message.content)
	
}
)

cmd({
    pattern: "dalle",
    alias : ['dall','dall-e'],
    desc: "Create Image by AI",
    category: "AI",
    use: '<an astronaut in mud.>',
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => 
{
//if (!isCreator) return citel.reply(tlang().owner)
if (Config.OPENAI_API_KEY=='') return citel.reply('ʏᴏᴜ ᴅᴏ ɴᴏᴛ ʜᴀᴠᴇ ᴏᴘᴇɴᴀɪ-ᴀᴘɪ ᴋᴇʏ \nᴘʟᴇᴀsᴇ ᴄʀᴇᴀᴛᴇ ᴏᴘᴇɴᴀɪ-ᴀᴘɪ ᴋᴇʏ ғʀᴏᴍ ɢɪᴠᴇɴ ʟɪɴᴋ \nhttps://platform.openai.com/account/api-keys');
if (!text) return citel.reply(`*ɢɪᴠᴇ ᴍᴇ ᴀ ᴛᴇxᴛ ᴛᴏ ɢᴇᴛ ᴅᴀʟʟ-ᴇ ʀᴇᴘᴏɴᴄᴇ ?*`); 
const imageSize = '256x256'
const apiUrl = 'https://api.openai.com/v1/images/generations';
const response = await fetch(apiUrl, {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${Config.OPENAI_API_KEY}`
},
body: JSON.stringify({
  model: 'image-alpha-001',
  prompt: text,
  size: imageSize ,
  response_format: 'url'
})
});

const data = await response.json();
let buttonMessage = {
    image:{url:data.data[0].url},
    caption : '*---ʏᴏᴜʀ ᴅᴀʟʟ-ᴇ ʀᴇsᴜʟᴛ---*'

}

Void.sendMessage(citel.chat,{image:{url:data.data[0].url}})
}
)

//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel, {isCreator}) => {
	timestampe = speed();
        latensie = speed() - timestampe;
        let { data } = await axios.get('https://api.github.com/repos/Mehar-Zubi/Open-AI')
        let cap = `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ •ᴛᴏᴛᴀʟ sᴛᴀʀs• ${data.stargazers_count} sᴛᴀʀs
┃✗ •ғᴏʀᴋs• ${data.forks_count} ғᴏʀᴋs
┃✗ •sᴘᴇᴇᴅ• ${latensie.toFixed(4)} ᴍs 
┃✗ •ᴠᴇʀsɪᴏɴ• sɪɢᴍᴀ
┃✗ •ᴅᴇᴠᴇʟᴏᴘᴇʀ• 𝐌 𝐙𝐮𝐛𝐚𝐢𝐫
┃✗ •ᴀᴜᴛʜᴏʀ• 𝐌 𝐙𝐮𝐛𝐚𝐢𝐫 
┃✗ •ɢɪᴛ•
https://github.com/Mehar-Zubi/Open-AI
┗━━━━━━━━━━⦿`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "sɪɢᴍᴀ ᴹᴰ-ʀᴇᴘᴏ",
                    body: "ᴛᴀᴘ ʜᴇʀᴇ ғᴏʀ ʀᴇᴘᴏ",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `https://github.com/Mehar-Zubi/Open-AI`,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about","sts"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ *•ᴀᴜᴛʜᴏʀ•* 𝐌 𝐙𝐮𝐛𝐚𝐢𝐫 ♕
┃✗ *•ᴜᴘᴛɪᴍᴇ•* ${runtime(process.uptime())}
┃✗ *•sᴘᴇᴇᴅ•* ${latensie.toFixed(4)} ᴍs 
┃✗ *•ᴘʟᴀᴛғᴏʀᴍ•* ᴍᴀᴄ-ᴏs
┃✗ *•ᴠᴇʀsɪᴏɴ•* sɪɢᴍᴀ 
┃✗ *•ᴘᴏᴡᴇʀᴇᴅ ʙʏ•* sɪɢᴍᴀ ᴹᴰ
┗━━━━━━━━━━⦿
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: `sɪɢᴍᴀ ᴹᴰ`,
                    body: `ʙᴏᴛ-sᴛᴀᴛᴜs`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    desc: "To find all themes",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str="┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿ \n┃✗   •ᴀᴠᴀɪʟᴀʙʟᴇ ᴛʜᴇᴍᴇs•\n"
str+=`┃✗ SECKTOR\n┃✗ ADAM\n┃✗ AYANOKOJI\n┃✗ EDITH\n┃✗ FRIDAY\n┃✗ GENOS\n┃✗ GIDEON\n┃✗ GOKU\n┃✗ LUFFY\n┃✗ NARUTO\n┃✗ NEZUKO\n┃✗ MZ\n┃✗ ZEROTWO\n┃✗ ${prefix}setvar THEME:MZ\n┗━━━━━━━━━━⦿`
return citel.reply(str)
    
}
)
