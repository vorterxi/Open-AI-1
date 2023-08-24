const { cmd, tlang, getAdmin } = require("../lib");
const Jimp = require("jimp");

cmd({
    pattern: "fullgpp",
    alias: ["fgp"],
    desc: "Set full screen profile picture",
    category: "group",
}, async (message, match, reply, {isCreator} ) => {
    const isGroup = message.isGroup;
    if (!isGroup) return await.reply(tlang()["chat"]);
    if(!isCreator) return citel.reply(tlang().owner);

    const quoted = message.quoted;
    if (!quoted || quoted.mtype !== "image") return await reply("Reply to an image");

    const groupAdmins = await getAdmin(message, quoted);
    const isAdminInGroup = groupAdmins.includes(message.sender) || false;

    if (!isAdminInGroup) return await.reply(tlang()["admin"]);

    const imageBuffer = await quoted.downloadMedia();
    
    try {
        const { query } = message;
        const { preview } = await generatePreview(imageBuffer);

        await query({
            tag: "iq",
            attrs: {
                to: message.chatId,
                type: "set",
                xmlns: "w:profile:picture"
            },
            content: [
                {
                    tag: "picture",
                    attrs: {
                        type: "image/jpeg"
                    },
                    content: preview
                }
            ]
        });

        await reply("Group Profile icon updated successfully.");
    } catch (error) {
        await reply("Error while updating group profile: " + error);
    }
    
    async function generatePreview(imageData) {
        const image = await Jimp.read(imageData);
        const width = image.getWidth();
        const height = image.getHeight();

        const croppedImage = image.crop(0, 0, width, height);
        const scaledImage = await croppedImage.scaleToFit(320, 720).getBufferAsync(Jimp.MIME_JPEG);

        const previewImage = await croppedImage.normalize().getBufferAsync(Jimp.MIME_JPEG);

        return {
            img: scaledImage,
            preview: previewImage
        };
    }
});