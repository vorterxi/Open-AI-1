const {command} = require("../lib")
//made with love🤍by Tshephang 

command({
	pattern: "teddy",
	fromMe: true, 
	desc: "take with credit 🤣💝"
},
async(message, m)=>{
let emo = ["💔", "😣", "😭", "💝", "🥺", " 💗", "🌹"];
const {key} = await message.reply("look🧸")

  for (const emoji of emo) {
  
 await sleep(2000)//delay code 👌
 
  let x = "" // for joining the emojis in 🧸💗
 let teddy = `
(\\_/)
( •.•)
/>🤍`; 

teddy = teddy.replace("🤍", emoji)
  x = x + teddy;
    
   await message.client.sendMessage(message.jid, {text: x, edit: key})
  }
})