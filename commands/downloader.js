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


const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb


//-------------------------------------------------------------------------------------
cmd({
            pattern: "gdrive",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>'
        },

async(Void, citel, text) => {
const {GDriveDI} = require("../lib/scraper.js");
const fs = require("fs-extra");
const cheerio = require("cheerio")
if (!text) return citel.sendMessage(citel.chat,{text:'Uhh Please, Give me  Google Drive Url'}) 
if (!(text && text.match(/drive\.google/i))) citel.sendMessage(citel.chat,{text:'Please, Give me Valid Google Drive Url'})
let id =(text.match(/\/?id=(.+)/i) || text.match(/\/d\/(.*?)\//))[1]
if (!id) return citel.sendMessage(citel.chat,{text:'ID Not Found'});
try {
	GDriveDl(id).then(async (res) => 
	{ 
                let data  =  "File Name : "+ res.fileName ;
	            data +="\n*File Size :* " + res.size +"Mb" ;
	            data +="\n*File Type :* "+ res.mimetype.split('/')[1] +  "\n" + Config.caption;
	        let buttonMessage = 
		{
			document: { url: res.downloadUrl },
			fileName: res.fileName,
			mimetype: res.mimetype,
			caption : "\t  GOOGLE DRIVE DOWNLOADER  \n" + data
		}
	        return await Void.sendMessage(citel.chat,buttonMessage, { quoted: citel })
	})
 } catch (error) {  return citel.reply("File Not Found" ) }
})
//----------------------------------------------------------------------------
cmd({
            pattern: "apk",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },

        async(Void, citel, text) => {
       const _0x2902d0=_0x1e17;(function(_0x583762,_0x3fc28b){const _0x3a6e91=_0x1e17,_0x5eabbc=_0x583762();while(!![]){try{const _0x29ccbf=-parseInt(_0x3a6e91(0x151))/0x1+-parseInt(_0x3a6e91(0x140))/0x2+-parseInt(_0x3a6e91(0x133))/0x3+parseInt(_0x3a6e91(0x136))/0x4*(parseInt(_0x3a6e91(0x14a))/0x5)+parseInt(_0x3a6e91(0x15b))/0x6*(parseInt(_0x3a6e91(0x158))/0x7)+parseInt(_0x3a6e91(0x149))/0x8*(-parseInt(_0x3a6e91(0x156))/0x9)+-parseInt(_0x3a6e91(0x15c))/0xa*(-parseInt(_0x3a6e91(0x147))/0xb);if(_0x29ccbf===_0x3fc28b)break;else _0x5eabbc['push'](_0x5eabbc['shift']());}catch(_0xf82cc1){_0x5eabbc['push'](_0x5eabbc['shift']());}}}(_0xb814,0xa9937));if(!text)return citel[_0x2902d0(0x159)](_0x2902d0(0x150));const getRandom=_0x4ce72a=>{const _0x1ac6af=_0x2902d0;return''+Math['floor'](Math[_0x1ac6af(0x134)]()*0x2710)+_0x4ce72a;};let randomName=getRandom(_0x2902d0(0x14d));function _0x1e17(_0xf8711d,_0xa9a7a0){const _0xb814da=_0xb814();return _0x1e17=function(_0x1e17ed,_0x3dabec){_0x1e17ed=_0x1e17ed-0x133;let _0x47e731=_0xb814da[_0x1e17ed];return _0x47e731;},_0x1e17(_0xf8711d,_0xa9a7a0);}const filePath='./'+randomName,{search,download}=require(_0x2902d0(0x13a));let searc=await search(text),data={};function _0xb814(){const _0x2e3287=['1947762TGXKbV','random','Error\x20deleting\x20file:','6148xEAMna','*APP\x20not\x20Found,\x20Try\x20Other\x20Name*','\x0a┃✗\x20•Version•\x20ꜱɪɢᴍᴀ','then','aptoide-scraper','createWriteStream','size','*Apk\x20not\x20Found,\x20Sorry*','application/vnd.android.package-archive','name','1297056JqyQib','get','\x0a┗━━━━━━━━━━⦿','finish','stream','\x0a┃✗\x20•App\x20Size•\x20','dllink','4323ZUZgJw','File\x20deleted\x20successfully','1886264lnscWJ','4345aUVNmm','File\x20downloaded\x20successfully','pipe','.apk','chat','send','*Give\x20me\x20App\x20Name*','1298640CkVEuW','readFileSync','log','data','unlink','27ZeOXgl','error','7aMKhED','reply','❌\x20File\x20size\x20bigger\x20than\x20200mb.','4047084AIiUtV','50590cKxsxj'];_0xb814=function(){return _0x2e3287;};return _0xb814();}if(searc['length'])data=await download(searc[0x0]['id']);else return citel[_0x2902d0(0x14f)](_0x2902d0(0x137));const apkSize=parseInt(data[_0x2902d0(0x13c)]);if(apkSize>0x96)return citel[_0x2902d0(0x14f)](_0x2902d0(0x15a));const url=data[_0x2902d0(0x146)];let inf='┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20•App\x20Name•\x20'+data[_0x2902d0(0x13f)];inf+=_0x2902d0(0x145)+data[_0x2902d0(0x13c)],inf+=_0x2902d0(0x138),inf+='\x0a┃✗\x20•Owner•\x20\x20ᴍᴀʜᴇʀ\x20ᴢᴜʙᴀɪʀ',inf+=_0x2902d0(0x142),axios[_0x2902d0(0x141)](url,{'responseType':_0x2902d0(0x144)})[_0x2902d0(0x139)](_0x116fd8=>{const _0x6f63d=_0x2902d0,_0x409b02=fs[_0x6f63d(0x13b)](filePath);return _0x116fd8[_0x6f63d(0x154)][_0x6f63d(0x14c)](_0x409b02),new Promise((_0x415c34,_0x45445f)=>{const _0x5b01cc=_0x6f63d;_0x409b02['on'](_0x5b01cc(0x143),_0x415c34),_0x409b02['on'](_0x5b01cc(0x157),_0x45445f);});})[_0x2902d0(0x139)](()=>{const _0x3dd1aa=_0x2902d0;let _0x395880={'document':fs[_0x3dd1aa(0x152)](filePath),'mimetype':_0x3dd1aa(0x13e),'fileName':data[_0x3dd1aa(0x13f)]+'.apk','caption':inf};Void['sendMessage'](citel[_0x3dd1aa(0x14e)],_0x395880,{'quoted':citel}),console[_0x3dd1aa(0x153)](_0x3dd1aa(0x14b)),fs[_0x3dd1aa(0x155)](filePath,_0x108726=>{const _0x1a747b=_0x3dd1aa;_0x108726?console[_0x1a747b(0x157)](_0x1a747b(0x135),_0x108726):console['log'](_0x1a747b(0x148));});})['catch'](_0x468ddc=>{const _0x3dbdd6=_0x2902d0;return fs[_0x3dbdd6(0x155)](filePath),citel['send'](_0x3dbdd6(0x13d));});
	
	
	
	
	
	
	
	/*
  if(!text) return citel.reply(`*_Please Give Me App Name_*`);
let searc = await search(text);
//console.log(searc);
let data = await download(searc[0].id);
//console.log(data);

     let  inf  ="App Name : " +data.name;
         inf +="\n*App id        :* " +data.package;
         inf +="\n*App id        :* " +data.lastup;
         inf +="\n*App Size     :* " +data.size;
        // inf +="\n*App Link     :* " +data.dllink;
         
                        let buttonMessage = {
                        document: {url : data.dllink},
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: data.name+`.apk`,
                        caption : inf
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
*/}
)
//-------------------------------------------------------------------------------

cmd({
            pattern: "play",
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
function _0x5247(){const _0x2e6d81=['2364avqUDU','name','ago','thumbnail','7831990VxWbVi','views','\x0a┃✗\x20•Author•\x20','\x0a┃✗\x20•Url•\x0a','1927293SJGbHc','504170dCDSAQ','24123YEsfzm','\x0a┏━━⟪⟪\x20🅼♥︎❚❚♥︎🆉\x20⟫━⦿\x0a┃✗\x20','timestamp','videos','866485veQqCZ','Eg:-\x20','title','3266936pZgpLC','12HWaHYV','588114eLOELS','7foxiiI','chat','secktor-pack','\x0a┃✗\x20•Uploaded•\x20','sendMessage','1Aiodlp','Surah\x20Rehman','18SpitXp','reply','\x0a┗━━━━━━━━━━⦿\x0a*╰┈➤\x20𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈\x20ᴏᴘᴇɴ\x20ᴀⁱ*\x0a'];_0x5247=function(){return _0x2e6d81;};return _0x5247();}const _0x1d08e5=_0x4124;(function(_0x540c3b,_0x38e0c3){const _0x40ef80=_0x4124,_0x4ed2ef=_0x540c3b();while(!![]){try{const _0x41a099=-parseInt(_0x40ef80(0x166))/0x1*(parseInt(_0x40ef80(0x174))/0x2)+-parseInt(_0x40ef80(0x173))/0x3+parseInt(_0x40ef80(0x15f))/0x4*(parseInt(_0x40ef80(0x179))/0x5)+-parseInt(_0x40ef80(0x160))/0x6*(parseInt(_0x40ef80(0x161))/0x7)+parseInt(_0x40ef80(0x15e))/0x8*(parseInt(_0x40ef80(0x168))/0x9)+parseInt(_0x40ef80(0x16f))/0xa+-parseInt(_0x40ef80(0x175))/0xb*(parseInt(_0x40ef80(0x16b))/0xc);if(_0x41a099===_0x38e0c3)break;else _0x4ed2ef['push'](_0x4ed2ef['shift']());}catch(_0x96978e){_0x4ed2ef['push'](_0x4ed2ef['shift']());}}}(_0x5247,0xa9be4));if(!text)return citel[_0x1d08e5(0x169)](_0x1d08e5(0x17a)+prefix+_0x1d08e5(0x167));let yts=require(_0x1d08e5(0x163)),search=await yts(text),anu=search[_0x1d08e5(0x178)][0x0],buttonMessage={'image':{'url':anu[_0x1d08e5(0x16e)]},'caption':_0x1d08e5(0x176)+tlang()[_0x1d08e5(0x17b)]+'\x20\x0a┃✗\x20•Youtube\x20Player•\x0a┃✗\x20•Duration•\x20'+anu[_0x1d08e5(0x177)]+'\x0a┃✗\x20•Viewers•\x20'+anu[_0x1d08e5(0x170)]+_0x1d08e5(0x164)+anu[_0x1d08e5(0x16d)]+_0x1d08e5(0x171)+anu['author'][_0x1d08e5(0x16c)]+_0x1d08e5(0x172)+anu['url']+_0x1d08e5(0x16a),'footer':tlang()['footer'],'headerType':0x4};function _0x4124(_0x2b4a0c,_0x1811a2){const _0x524712=_0x5247();return _0x4124=function(_0x4124ec,_0x4e9974){_0x4124ec=_0x4124ec-0x15e;let _0x4d6f87=_0x524712[_0x4124ec];return _0x4d6f87;},_0x4124(_0x2b4a0c,_0x1811a2);}return Void[_0x1d08e5(0x165)](citel[_0x1d08e5(0x162)],buttonMessage,{'quoted':citel});

        }
    )
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------

//---------------------------------------------------------------------------


  //---------------------------------------------------------------------------

cmd({
            pattern: "tts",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me text to change into audio.')
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
     //---------------------------------------------------------------------------
     cmd({
        pattern: "yts",
        desc: "Gives descriptive info of query from youtube..",
        category: "downloader",
        filename: __filename,
        use: '<yt search text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        if (!text) return citel.reply(`Example : ${prefix}yts Surah Rehman`);
        let search = await yts(text);
        let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\nViews : ${i.views}\nDuration : ${
      i.timestamp
    }\nUpload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
        }
        return Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)

    //---------------------------------------------------------------------------
cmd({
            pattern: "video",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ*`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: `𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕‌`,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ringtone",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text, {isCreator}) => {
            if (!text) return citel.reply(`Example: ${prefix}ringtone Surah Rehman`)
            let anu = await ringtone(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            return Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("What picture are you looking for?") && Void.sendMessage(citel.chat, {
                react: {
                    text: '❌',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonMessage = {
                    image: {
                        url: result
                    },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ* ♕`,
                    footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `Here it is✨`,
                            body: `𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``
                        }
                    }
                }
                return Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel
                })
            } catch (e) {
                console.log(e)
            }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            desc: "Downloads zip from Mediafire.",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text, {isCreator}) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
            const result4 = `*Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* : ${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}`;
            reply(`${result4}`);
            return Void.sendMessage(citel.chat, {
                    document: {
                        url: baby1[0].link,
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                }, {
                    quoted: citel,
                })
                .catch((err) => reply("could not found anything"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "song",
            alias :['audio'],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            citel.reply('*Downloadig:* '+titleYt)
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ* ♕`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: `𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                            
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "ytmp4",
            alias: ["yt4"],
            desc: "Downloads video from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<yt video url>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply(`❌Please provide me a link`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`❌ Give youtube link!`);
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        caption: `╰┈➤𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ ♕`,
                        fileName: `${titleYt}.mp4`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: `𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕`,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ytmp3",
        alias: ["yt3"],
        desc: "Downloads audio by yt link.",
        category: "downloader",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`❌ Please Give me Link! \nSend ${prefix}ytmp3 Link`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: `╰┈➤𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ ♕`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: `𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕‌`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
cmd({
        pattern: "ytdoc",
        alias: ["ytd"],
        desc: "Downloads audio by yt link as document.",
        category: "downloader",
        use: '<ytdoc video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.
             reply(`❌ Link is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give me youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: `╰┈➤𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᴏᴘᴇɴ ᴀⁱ ♕`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: `𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕‌`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)
