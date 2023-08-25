

const axios = require('axios')
const { fetchJson,smd, GIFBufferToVideoBuffer} = require('../lib')
    //---------------------------------------------------------------------------
smd({
            pattern: "bite",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/bite`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ʙɪᴛᴛᴇɴ ᴛᴏ  @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ʙɪᴛᴛᴇɴ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "blush",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/blush`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ʙʟᴜsʜᴇᴅ ᴛᴏ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ʙʟᴜsʜᴇᴅ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "punch",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/kick`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴘᴜɴᴄʜᴇᴅ ᴛᴏ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴘᴜɴᴄʜᴇᴅ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "pat",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/pat`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴘᴀᴛᴛᴇᴅ ᴡɪᴛʜ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴘᴀᴛᴛᴇᴅ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "kiss",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/kiss`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴋɪssᴇᴅ ᴛᴏ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴋɪssᴇᴅ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "kill",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/kill`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴋɪʟʟᴇᴅ @${users.split("@")[0]}. `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴋɪʟʟᴇᴅ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ ᴏᴠᴇʀ ʜᴇʀᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "happy",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ғᴇʟᴛ ʜᴀᴘᴘʏ ᴡɪᴛʜ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ғᴇʟᴛ ʜᴀᴘᴘʏ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "dance",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴅᴀɴᴄᴇᴅ ᴡɪᴛʜ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴅᴀɴᴄᴇᴅ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "yeet",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/yeet`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ʏᴇᴇᴛᴇᴅ ᴛᴏ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ʏᴇᴇᴛᴇᴅ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "wink",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/wink`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴡɪɴᴋᴇᴅ ᴡɪᴛʜ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴡɪɴᴋᴇᴅ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "slap",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/slap`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} sʟᴀᴘᴘᴇᴅ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} sʟᴀᴘᴘᴇᴅ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "bonk",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {
            var bite = await fetchJson(`https://api.waifu.pics/sfw/bonk`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ʙᴏɴᴋᴇᴅ ᴛᴏ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ʙᴏɴᴋᴇᴅ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ. `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "bully",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/bully`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ʙᴜʟʟɪᴇᴅ ᴛᴏ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ʙᴜʟʟɪᴇᴅ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "cringe",
            category: "reaction",
            use: '<quote|reply|tag>',
        },
        async(Void, citel) => {

            var bite = await fetchJson(`https://api.waifu.pics/sfw/cringe`);
            const response = await axios.get(bite.url, {
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(response.data, "utf-8");
            let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
            let gif = await GIFBufferToVideoBuffer(buffer);
            if (users) {
                let cap = `@${citel.sender.split("@")[0]} ᴄʀɪɴɢᴇᴅ ᴀᴛ @${users.split("@")[0]} `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
            } else {
                let cap = `@${citel.sender.split("@")[0]} ᴄʀɪɴɢᴇᴅ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
                Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
            }
        }
    )
    //---------------------------------------------------------------------------
smd({
        pattern: "cuddle",
        category: "reaction",
        use: '<quote|reply|tag>',
    },
    async(Void, citel) => {

        var bite = await fetchJson(`https://api.waifu.pics/sfw/cuddle`);
        const response = await axios.get(bite.url, {
            responseType: "arraybuffer",
        });
        const buffer = Buffer.from(response.data, "utf-8");
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
        let gif = await GIFBufferToVideoBuffer(buffer);
        if (users) {
            let cap = `@${citel.sender.split("@")[0]} ᴄᴜᴅᴅʟᴇ ᴡɪᴛʜ @${users.split("@")[0]} `;
            Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
        } else {
            let cap = `@${citel.sender.split("@")[0]} ᴄᴜᴅᴅʟᴇ ᴡɪᴛʜ ᴇᴠᴇʀʏᴏɴᴇ `;
            Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
        }
    }
)
