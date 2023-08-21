/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : ᴏᴘᴇɴ ᴀⁱ ♕
 * @author : 𝐌𝐚𝐡𝐞𝐫 𝐙𝐮𝐛𝐚𝐢𝐫 ♕ <https://github.com/Mehar-Zubi>
 * @description : ᴏᴘᴇɴ ᴀⁱ ♕,A Multi-functional whatsapp bot.
 * @version 1.0.3 
 **/


const moment = require('moment-timezone')
const {fetchJson,cmd, tlang,Config,fancytext } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

    //---------------------------------------------------------------------------
cmd({
            pattern: "imdb",
            category: "search",
            desc: "Sends image of asked Movie/Series.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`_Name a Series or movie ${tlang().greet}._`);
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            let imdbt = "";
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
            imdbt += "🎬Title      : " + fids.data.Title + "\n";
            imdbt += "📅Year       : " + fids.data.Year + "\n";
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
            imdbt += "📆Released   : " + fids.data.Released + "\n";
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
            imdbt += "🌐Language   : " + fids.data.Language + "\n";
            imdbt += "🌍Country    : " + fids.data.Country + "\n";
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
            imdbt += "🏙️Production : " + fids.data.Production + "\n";
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
            Void.sendMessage(citel.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "weather",
            category: "search",
            desc: "Sends weather info about asked place.",
            use: '<location>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("ɢɪᴠᴇ ᴍᴇ ʟᴏᴄᴀᴛɪᴏɴ.!!");
         try{
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let sigma = ``;
            sigma += `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n         ${fancytext("*Weather of*",1)} ${text}\n`;
            sigma += `┃✗ ${fancytext("•weather•",1)} ${wdata.data.weather[0].main}\n`;
            sigma += `┃✗ ${fancytext("•description•",1)} ${wdata.data.weather[0].description}\n`;
            sigma += `┃✗ ${fancytext("*•avg temp•*",1)} ${wdata.data.main.temp}\n`;
            sigma += `┃✗ ${fancytext("*•feels like•*",1)} ${wdata.data.main.feels_like}\n`;
            sigma += `┃✗ ${fancytext("*•pressure•*",1)} ${wdata.data.main.pressure}\n`;
            sigma += `┃✗ ${fancytext("*•humidity•*",1)} ${wdata.data.main.humidity}\n`;
            sigma += `┃✗ ${fancytext("*•humidity•*",1)} ${wdata.data.wind.speed}\n`;
            sigma += `┃✗ ${fancytext("*•latitude•*",1)} ${wdata.data.coord.lat}\n`;
            sigma += `┃✗ ${fancytext("*•longitude•*",1)} ${wdata.data.coord.lon}\n`;
            sigma += `┃✗ ${fancytext("*•country•*",1)} ${wdata.data.sys.country}\n┗━━━━━━━━━━⦿\n*╰┈➤𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`;

            let king = {
                image: { url: await botpic() },
                text: sigma,
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
            Void.sendMessage(
                citel.chat, {
                    text: king,
                }, {
                    quoted: citel,});
         
         }catch {citel.reply(`${fancytext("invalid location, give me valid location",1)}`)}

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "horo",
            category: "search",
            desc: "Gives horoscope info of user.",
            use: '<sign>\n:Example: horo libra',
            filename: __filename,
        },
        async(Void, citel, text, ) => {
            if (!text) return citel.reply("ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ sɪɢɴ!")
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        citel.reply(text)
                    });

            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "google",
        alias :['search','gsearch'],
        category: "search",
        desc: "Sends info of given query from Google Search.",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text,) => {
        if (!text) return citel.reply(`ɢɪᴠᴇ ᴍᴇ ᴀ ᴛᴇxᴛ\nᴇxᴀᴍᴘʟᴇ : .ɢᴏᴏɢʟᴇ ᴡʜᴏ ɪs ᴋɪɴɢ.`);
        let google = require('google-it');
        google({ 'query': text}).then(res => {
            let msg= `Google Search From : ${text} \n\n`;
            for (let g of res) {
                msg+= `➣ Title : ${g.title}\n`;
                msg+= `➣ Description : ${g.snippet}\n`;
                msg+= `➣ Link : ${g.link}\n\n────────────────────────\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
)
    //---------------------------------------------------------------------------
cmd({
            pattern: "image",
            category: "search",
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text, ) => { 
            if (!text) return citel.reply("ɢɪᴠᴇ ᴍᴇ ᴀ ᴛᴇxᴛ ᴛᴏ sᴇᴀʀᴄʜ ɪᴍᴀɢᴇ")
            if (!text) return reply("ʜᴇʏ ᴘʟᴇᴀsᴇ ᴛᴇʟʟ ᴍᴇ ғᴏʀ ᴡʜɪᴄʜ ᴘɪᴄ ʏᴏᴜ'ʀᴇ ʟᴏᴏᴋɪɴɢ");
            let name1 = text.split("|")[0]
            let name2 = text.split("|")[5] || `5`
            citel.reply(`sᴇɴᴅɪɴɢ ${name2} ɪᴍᴀɢᴇ(s) ᴏғ ${name1} ɪɴ ᴄʜᴀᴛ`)
            let nn = name2
            for (let i = 0; i < nn; i++) {

                let n = await gis(name1)
                images = n[Math.floor(Math.random() * n.length)].url;
                    let buttonMessage = {
                        image: {
                            url: images,
                        },
                        caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*`,
                        headerType: 4,
                    };
                    Void.sendMessage(citel.chat, buttonMessage, {
                        quoted: citel,
                    });
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "couplepp",
            category: "search",
            desc: "Sends two couples pics.",
            filename: __filename,
        },
        async(Void, citel, text) => {
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*` }, { quoted: citel })
            Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}*` }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "iswa",
        category: "search",
        desc: "Searches in given rage about given number.",
        use: '9112345678xx',
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        if (!isCreator) return citel.reply(tlang().owner)
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply('ʏᴏᴜ ᴅɪᴅ ɴᴏᴛ ᴀᴅᴅ x\n ᴇxᴀᴍᴘʟᴇ: ɪsᴡᴀ 9212345678xx')
        citel.reply(`sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ᴡʜᴀᴛsᴀᴘᴘ ᴀᴄᴄᴏᴜɴᴛ ɪɴ ɢɪᴠᴇɴ ʀᴀɴɢᴇ...`)

        function countInstances(string, word) {
            return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text = `*--『 ʟɪsᴛ ᴏғ ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀs 』--*\n\n`
        var nobio = `\n*ʙɪᴏ:* || \nʜᴇʏ ᴛʜᴇʀᴇ! ɪ ᴀᴍ ᴜsɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ.\n`
        var nowhatsapp = `\n*ɴᴜᴍʙᴇʀs ᴡɪᴛʜ ɴᴏ ᴡʜᴀᴛsᴀᴘᴘ ᴀᴄᴄᴏᴜɴᴛ ᴡɪᴛʜɪɴ ᴘʀᴏᴠɪᴅᴇᴅ ʀᴀɴɢᴇ.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) {
                random = `${status1}`
            } else if (random_length == 2) {
                random = `${status1}${status2}`
            } else if (random_length == 3) {
                random = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Void.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text += `🧐 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*Bio :* ${anu1.status}\n🍁*Last update :* ${moment(anu1.setAt).tz('Asia/Karachi').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        citel.reply(`${text}${nobio}${nowhatsapp}`)

    }
)
