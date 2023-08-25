let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/80468997fbc9b2392571c.jpg'
let kemii = `Hai *${name}* 👋\n\nAda yang bisa *${namebot}* bantu?`
conn.sendMessage(m.chat, {
text: kemii,
contextInfo: {
externalAdReply: {
title: "Kikuchanj is online",
body: "Ketik .menu untuk mengakses Bot.",
thumbnailUrl: thumb,
sourceUrl: "https://wa.me/6288980870067",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^(bot|bot?|bott)$/i
handler.command = new RegExp

module.exports = handler