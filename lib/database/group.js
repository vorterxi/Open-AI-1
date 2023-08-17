const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "@pp *┌─❖│「 𝗛𝗶 👋 」└┬❖ 「  @user  」│✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 │✑  🔰 | @gname | 🔰│✑  𝗠𝗲𝗺𝗯𝗲𝗿 : │✑ @count│✑  𝗝𝗼𝗶𝗻𝗲𝗱 : │✑ 23:44:17 17/08/2023└───────────────┈ ⳹" },
goodbye:{ type: String, default: "@pp *Another one bits dust.*\nUser: @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
economy: { type: String, default: "false" },
antibot : { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck } 
