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
if (!text) return citel.sendMessage(citel.chat,{text:'ᴘʟᴇᴀsᴇ, ɢɪᴠᴇ ᴍᴇ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ʟɪɴᴋ'}) 
if (!(text && text.match(/drive\.google/i))) citel.sendMessage(citel.chat,{text:'ᴘʟᴇᴀsᴇ, ɢɪᴠᴇ ᴍᴇ ᴠᴀʟɪᴅ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ʟɪɴᴋ'})
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
			caption : "\t  ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ  \n" + data
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
        if(!text )return citel.reply(`*ɢɪᴠᴇ ᴍᴇ ᴀᴘᴘ ɴᴀᴍᴇ*\nᴇɢ:- ${prefix}ᴀᴘᴋ ᴡʜᴀᴛsᴀᴘᴘ`);

	const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
	let randomName = getRandom(".apk");
	const filePath = `./${randomName}`;     // fs.createWriteStream(`./${randomName}`)
        const {  search , download } = require('aptoide-scraper')
	let searc = await search(text);          //console.log(searc);
	let data={};
	if(searc.length){ data = await download(searc[0].id); }
	else return citel.send("*ᴀᴘᴘ ɴᴏᴛ ғᴏᴜɴᴅ, ᴛʀʏ ᴏᴛʜᴇʀ ᴀᴘᴘ ɴᴀᴍᴇ*");
	
	
	const sɪɢᴍᴀ_apkSize = parseInt(data.size);
	if(sɪɢᴍᴀ_apkSize > 150) return citel.send(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴀɴ 200ᴍʙ`);
       const url = data.dllink;
	 let  Zubair  ="┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ •ᴀᴘᴘ ɴᴀᴍᴇ• " +data.name;
         Zubair +="\n┃✗ •ᴀᴘᴘ sɪᴢᴇ• "    +data.size;
	 Zubair +="\n┃✗ •ᴠᴇʀsɪᴏɴ• ꜱɪɢᴍᴀ";	
	 Zubair +="\n┃✗ •ᴅᴇᴠᴇʟᴏᴘᴇʀ•  ᴍ ᴢᴜʙᴀɪʀ ♕";
	 Zubair +=`\n┗━━━━━━━━━━⦿\n*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`
         

axios.get(url, { responseType: 'stream' })
  .then(response => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }).then(() => {
	
	let Maher = {
                        document: fs.readFileSync(filePath),
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: data.name+`.apk`,
                        text : Zubair,
                        footer: tlang().footer,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                            title: `${Gname}`,
                            body: "Easy to Use",
                            thumbnail: log0,
                            mediaType: 4,
                            mediaUrl: '',
                            sourceUrl: `${waUrl}`,}}}                   
                    
                  Void.sendMessage(citel.chat, Maher, { quoted: citel })

    console.log('File downloaded successfully');

  
    fs.unlink(filePath, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
  }) .catch(error => {
	fs.unlink(filePath)
    return citel.send('*ᴀᴘᴋ ɴᴏᴛ ғᴏᴜɴᴅ, sᴏʀʀʏ*')//:', error.message);
  });
	}
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
            if (!text) return citel.reply(`ᴇɢ:- ${prefix}ᴘʟᴀʏ sᴜʀᴀʜ ʀᴇʜᴍᴀɴ`);
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            let Maher = {
                image: {
                    url: anu.thumbnail,
                },
                caption: `
┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿
┃✗ ${Config.botname} 
┃✗ •ʏᴏᴜ-ᴛᴜʙᴇ ᴘʟᴀʏᴇʀ•
┃✗ •ᴅᴜʀᴀᴛɪᴏɴ• ${anu.timestamp}
┃✗ •ᴠɪᴇᴡᴇʀs• ${anu.views}
┃✗ •ᴜᴘʟᴏᴀᴅᴇᴅ• ${anu.ago}
┃✗ •ᴀᴜᴛʜᴏʀr• ${anu.author.name}
┃✗ •ᴜʀʟ•
${anu.url}
┃✗ •ᴅᴇᴠᴇʟᴏᴘᴇʀ• ᴍ ᴢᴜʙᴀɪʀ ♕
┗━━━━━━━━━━⦿\n*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*
`,
                footer: tlang().footer,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                    title: `${Gname}`,
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: `${waUrl}`,}}};
            return Void.sendMessage(citel.chat, Maher, {
                quoted: citel,
            });
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
            if (!text) return citel.reply(`ᴘʟᴇᴀsᴇ ɢɪᴠᴇ ᴍᴇ ᴛᴇxᴛ ᴛᴏ ᴄʜᴀɴɢᴇ ɪɴᴛᴏ ᴀᴜᴅɪᴏ.\nᴇɢ:- ${prefix}ᴛᴛs ɪ'ᴍ sɪɢᴍᴀ ᴍᴀʟᴇ`)
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
        if (!text) return citel.reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix}ʏᴛs sᴜʀᴀʜ ʀᴇʜᴍᴀɴ`);
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
	    if (!text) return citel.reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix}ᴠɪᴅᴇᴏ sᴜʀᴀʜ ғᴀᴛᴇʜ`);
            let search = await yts(text);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`ᴠɪᴅᴇᴏ ғɪʟᴇ ᴛᴏᴏ ʙɪɢ!`);
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
                    let Maher = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
			
                        mimetype: 'video/mp4',
                        caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: `${Gname}`,
                                body: `easy to use`,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 4,
                                mediaUrl: ``,
                                sourceUrl: `${waUrl}`,
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, Maher, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴇɴ 100ᴍʙ..`);
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
            if (!text) return citel.reply(`ᴇxᴀᴍᴘʟᴇ: ${prefix}ʀɪɴɢᴛᴏɴᴇ sᴜʀᴀʜ ʀᴇʜᴍᴀɴ`)
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
            if (!text) return citel.reply(`ᴡʜᴀᴛ ᴘɪᴄᴛᴜʀᴇ ᴀʀᴇ ʏᴏᴜ ʟᴏᴏᴋɪɴɢ ғᴏʀ?\nᴇɢ:- ${prefix}ᴘɪɴᴛ ᴄʀᴏᴡɴ`) && Void.sendMessage(citel.chat, {
                react: {
                    text: '👑',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let Maher = {
                    image: {
                        url: result
                    },
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `${Gname}`,
                            body: ``,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: `${waUrl}`
                        }
                    }
                }
                return Void.sendMessage(citel.chat, Maher, {
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
            if (!text) return citel.reply(`Give link`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`ᴛʜᴇ ʟɪɴᴋ ʏᴏᴜ ᴘʀᴏᴠɪᴅᴇᴅ ɪs ɪɴᴠᴀʟɪᴅ`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*ғɪʟᴇ ᴏᴠᴇʀ ʟɪᴍɪᴛ* " + util.format(baby1));
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
                .catch((err) => reply("ᴄᴏᴜʟᴅ ɴᴏᴛ ғᴏᴜɴᴅ ᴀɴʏᴛʜɪɴɢ"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "song",
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
	    if (!text) return citel.reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix}sᴏɴɢ ᴍʏ ʙᴀʙʏ ɪ ʟᴏᴠᴇ ʏᴏᴜʀ ᴠᴏɪᴄᴇ`);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`ᴀᴜᴅɪᴏ ғɪʟᴇ ᴛᴏᴏ ʙɪɢ!`);
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
                let Maher = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    text: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `${Gname}`,
                            body: ``,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: `${waUrl}`,
                            
                        },
                    },
                }
                await Void.sendMessage(citel.chat, Maher, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴇɴ 100ᴍʙ.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "audio",
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
	    if (!text) return citel.reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix}sᴏɴɢ ᴍʏ ʙᴀʙʏ ɪ ʟᴏᴠᴇ ʏᴏᴜʀ ᴠᴏɪᴄᴇ`);
            let search = await yts(text);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`ᴀᴜᴅɪᴏ ғɪʟᴇ ᴛᴏᴏ ʙɪɢ!`);
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
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: `${Config.ownername}`,
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
                citel.reply(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴇɴ 100ᴍʙ.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
//------------------------------------------------------------------------------

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
                citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ʟɪɴᴋ`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`ɢɪᴠᴇ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ!`);
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`ᴠɪᴅᴇᴏ ғɪʟᴇ ᴛᴏᴏ ʙɪɢ!`);
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
                        caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                        fileName: `${titleYt}.mp4`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: `${Config.ownername}`,
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
                    citel.reply(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴇɴ 100ᴍʙ.`);
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
            citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ʟɪɴᴋ \nSend ${prefix}ʏᴛᴍᴘ3 ʟɪɴᴋ`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`ɢɪᴠᴇ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`ɪ ᴄᴀɴ'ᴛ ᴅᴏᴡɴʟᴏᴀᴅ ᴛʜᴀᴛ ʟᴏɴɢ ᴀᴜᴅɪᴏ!`);
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
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: `‌${Config.ownername}`,
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
                citel.reply(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴇɴ 100ᴍʙ.`);
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
             reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ʟɪɴᴋ \nSend ${prefix}ʏᴛᴅᴏᴄ ʟɪɴᴋ`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`ɢɪᴠᴇ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`ɪ ᴄᴀɴ'ᴛ ᴅᴏᴡɴʟᴏᴀᴅ ᴛʜᴀᴛ ʟᴏɴɢ ᴀᴜᴅɪᴏ!`);
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
                    caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: `‌${Config.ownername}`,
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
                citel.reply(`ғɪʟᴇ sɪᴢᴇ ʙɪɢɢᴇʀ ᴛʜᴇɴ 100ᴍʙ.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)
