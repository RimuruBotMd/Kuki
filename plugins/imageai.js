let { Configuration, OpenAIApi } = require("openai")
let fetch = require("node-fetch")
let { generateWAMessageFromContent } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
            if (!text) return m.reply(`Membuat gambar dari AI.\n\nContoh:\n${usedPrefix}${command}  Wooden house on snow mountain`);
            conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
            const configuration = new Configuration({
              apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            console.log(response.data.data[0].url)
            conn.sendFile(m.chat, response.data.data[0].url, text);
            }
handler.help = ['imageai']
handler.tags = ['tools']
handler.command = /^(img|imgai|imageai)$/i
module.exports = handler