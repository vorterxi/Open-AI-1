const mongoose = require('mongoose');
let [date, time] = new Date()
        .toLocaleString("en-pk", { timeZone: "Asia/karachi" })
        .split(",");
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "@pp *@pp *Hi,* @user \n*Welcome in*\n @gname \n*Member count*\n @count th\n*Joined*\n @date"},
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
