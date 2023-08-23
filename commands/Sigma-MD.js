const {smd} = require("../lib")
//made with love🤍by Tshephang 

smd({
	pattern: "teddy",
	fromMe: true, 
	desc: "take with credit 🤣💝"
},
async(Void,citel, text)=>{
let emo = ["💔", "😣", "😭", "💝", "🥺", " 💗", "🌹"];
const {key} = await citel.reply("look🧸")

  for (const emoji of emo) {
  
 await sleep(2000)//delay code 👌
 
  let s = "" // for joining the emojis in 🧸💗
 let teddy = `
(\\_/)
( •.•)
/>🤍`; 

teddy = teddy.replace("🤍", emoji)
  s = s + teddy;
    
   await Void.sendMessage(citel.chat, s, quoted: citel})
  }
})
