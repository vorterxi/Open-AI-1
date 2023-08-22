const _0x472293=_0x3195;function _0x20f9(){const _0x175247=['11828750STvwiZ','log','toString','console','818668ktpqst','562203FtsExi','warn','return\x20(function()\x20','30sroKCt','109044lCOAYo','exception','length','bind','539DfTbXH','trace','(((.+)+)+)+$','constructor','secktor-pack','9592xEqoPJ','search','264081oWRgxI','{}.constructor(\x22return\x20this\x22)(\x20)','apply','error','__proto__','9vKtKiz','prototype','ytdl-secktor','../lib','284304SOhmVb','table'];_0x20f9=function(){return _0x175247;};return _0x20f9();}(function(_0x48be99,_0x57aff7){const _0x197ada=_0x3195,_0x51ad9c=_0x48be99();while(!![]){try{const _0x3bf0ba=-parseInt(_0x197ada(0x1ee))/0x1+parseInt(_0x197ada(0x1f2))/0x2+parseInt(_0x197ada(0x1de))/0x3+-parseInt(_0x197ada(0x1ed))/0x4+-parseInt(_0x197ada(0x1f1))/0x5*(parseInt(_0x197ada(0x1e7))/0x6)+parseInt(_0x197ada(0x1d7))/0x7*(parseInt(_0x197ada(0x1dc))/0x8)+-parseInt(_0x197ada(0x1e3))/0x9*(-parseInt(_0x197ada(0x1e9))/0xa);if(_0x3bf0ba===_0x57aff7)break;else _0x51ad9c['push'](_0x51ad9c['shift']());}catch(_0x22b77a){_0x51ad9c['push'](_0x51ad9c['shift']());}}}(_0x20f9,0x597ed));const _0x51834b=(function(){let _0x369cd8=!![];return function(_0x10cb37,_0x3cf383){const _0x31b122=_0x369cd8?function(){if(_0x3cf383){const _0x5cfbc2=_0x3cf383['apply'](_0x10cb37,arguments);return _0x3cf383=null,_0x5cfbc2;}}:function(){};return _0x369cd8=![],_0x31b122;};}()),_0x5bd496=_0x51834b(this,function(){const _0x17715a=_0x3195;return _0x5bd496[_0x17715a(0x1eb)]()[_0x17715a(0x1dd)]('(((.+)+)+)+$')[_0x17715a(0x1eb)]()[_0x17715a(0x1da)](_0x5bd496)[_0x17715a(0x1dd)](_0x17715a(0x1d9));});_0x5bd496();const _0x5b0fae=(function(){let _0x4fecfd=!![];return function(_0x5d69cd,_0x173497){const _0xb7855c=_0x4fecfd?function(){const _0x4a9919=_0x3195;if(_0x173497){const _0x53bf6c=_0x173497[_0x4a9919(0x1e0)](_0x5d69cd,arguments);return _0x173497=null,_0x53bf6c;}}:function(){};return _0x4fecfd=![],_0xb7855c;};}()),_0xca264d=_0x5b0fae(this,function(){const _0x8fc88a=_0x3195,_0x45f1fb=function(){const _0x3fb2a6=_0x3195;let _0x280814;try{_0x280814=Function(_0x3fb2a6(0x1f0)+_0x3fb2a6(0x1df)+');')();}catch(_0x288936){_0x280814=window;}return _0x280814;},_0x3e4ef1=_0x45f1fb(),_0x27e6a8=_0x3e4ef1[_0x8fc88a(0x1ec)]=_0x3e4ef1['console']||{},_0x352af2=[_0x8fc88a(0x1ea),_0x8fc88a(0x1ef),'info',_0x8fc88a(0x1e1),_0x8fc88a(0x1f3),_0x8fc88a(0x1e8),_0x8fc88a(0x1d8)];for(let _0x3f2e8d=0x0;_0x3f2e8d<_0x352af2[_0x8fc88a(0x1f4)];_0x3f2e8d++){const _0x2e0133=_0x5b0fae[_0x8fc88a(0x1da)][_0x8fc88a(0x1e4)]['bind'](_0x5b0fae),_0x1b88f3=_0x352af2[_0x3f2e8d],_0x1da563=_0x27e6a8[_0x1b88f3]||_0x2e0133;_0x2e0133[_0x8fc88a(0x1e2)]=_0x5b0fae[_0x8fc88a(0x1d6)](_0x5b0fae),_0x2e0133[_0x8fc88a(0x1eb)]=_0x1da563[_0x8fc88a(0x1eb)][_0x8fc88a(0x1d6)](_0x1da563),_0x27e6a8[_0x1b88f3]=_0x2e0133;}});_0xca264d();const {tlang,smd,sleep,getBuffer,prefix,Config}=require(_0x472293(0x1e6)),ytdl=require(_0x472293(0x1e5)),yts=require(_0x472293(0x1db)),fs=require('fs');function _0x3195(_0x4b6b3c,_0xaabe01){const _0x325f13=_0x20f9();return _0x3195=function(_0xca264d,_0x5b0fae){_0xca264d=_0xca264d-0x1d6;let _0x43ce3b=_0x325f13[_0xca264d];return _0x43ce3b;},_0x3195(_0x4b6b3c,_0xaabe01);}var videotime=0xea60,dlsize=0xfa;


smd({
            pattern: "playlist",
            desc: "Downloads video from playlist.",
            category: "downloader",
            filename: __filename,
            use: '<yt playlist url>',
        },
        async(Void, citel, text) => {
  
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴜʀʟ`);
                return;
            }
let urlYtt = text.split('=')[1]
console.log(urlYtt)
var opts = { listId: urlYtt }
yts( opts, async function ( err, playlist ) {
	if ( err ) throw err
  citel.reply('ᴛʜɪs ᴘʀᴏᴄᴇss ᴡɪʟʟ ᴛᴀᴋᴇ ᴀ ʙɪᴛ ᴛɪᴍᴇ.');
  for (let i=0;i<playlist.videos.length;i++){
    if(playlist.videos[i].videoId===undefined) continue
    let urlYt = playlist.videos[i].videoId
    try {
      
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) continue
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
                        fileName: `${titleYt}.mp4`,
                        caption: ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${fileSizeInMegabytes} MB`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: log0,
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: 'https://github.com/SamPandey001/Secktor-Md',
                                sourceUrl: 'https://github.com/SamPandey001/Secktor-Md'
                            }
                        }
                    }
                   Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                } else {
                    citel.reply(`❌ File size bigger than ${dlsize}mb.`);
                }

                fs.unlinkSync(`./${randomName}`);
            } catch (e) {
                console.log(e)
            }
            }})
        }
    )
