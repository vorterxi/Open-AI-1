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

const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,cmd } = require('../lib')
//---------------------------------------------------------------------------
cmd({
        pattern: "plugins",
        alias :['plist'],
        category: "owner",
        desc: "Shows list of all externally installed modules",
        filename: __filename
    },
    async(Void, citel, text, { isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        let allmodtext = `*ᴀʟʟ ɪɴsᴛᴀʟʟᴇᴅ ᴘʟᴜɢɪɴs ᴀʀᴇ:-*\n\n`
        allmodtext += await plugins()
        return citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "remove",
        alias :['uninstall','rmv'],
        category: "owner",
        desc: "removes external plugins.",
        filename: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(text==='all') {
         await plugindb.collection.drop()
         return citel.reply('ᴅᴇʟᴇᴛᴇᴅ ᴀʟʟ ᴘʟᴜɢɪɴs ғʀᴏᴍ sɪɢᴍᴀ ᴹᴰ.')
        }
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        return citel.reply(kill)
    }
)

//---------------------------------------------------------------------------
cmd({
        pattern: "install",
        category: "owner",
        desc: "Installs external modules..",
        filename: __filename
    },
    async(Void, citel, text, {isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);

let trl=text?text:citel.quoted&&citel.quoted.text?citel.quoted.text:citel.reply_message;for(let Url of isUrl(trl)){try{var url=new URL(Url);}catch{citel.reply('Invalid url_');}let fs=require('fs'),{data}=await axios.get(url.href);let lp=/pattern: ["'](.*)["'],/g.exec(data);let lj=lp[1].split(' ')[0]||Math.random().toString(36).slice(-5);l=lj.replace(/[^A-Za-z]/g,'');await fs.writeFileSync(__dirname+'/'+l+'.js',data,'utf8');try{require(__dirname+'/'+l+'.js');}catch(err){return fs.unlinkSync(__dirname+'/'+l+'.js'),citel.reply('Invalid Plugin\n'+err+'```');}const {plugindb}=require('../lib');let plugin={};plugin['id']=l;plugin['url']=url;await new plugindb(plugin).save();citel.reply('Installed '+l+('.js saved in '+__dirname+' )');

}

})
