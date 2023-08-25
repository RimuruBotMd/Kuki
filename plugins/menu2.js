let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumDate } = db.data.users[m.sender]
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
📮 _Bot is an automated system that is ready to become your virtual assistant._

乂  *I N F O R M A T I O N*

◦ Name : ${name}
◦ Runtime : ${uptime}
◦ Mode : Public
◦ Date : ${week}, ${date}
◦ Time : ${time}

乂  *SUB - MENU*

◦ [ Coming soon ]
◦ [ Coming soon ]
◦ [ Coming soon ]
◦ [ Coming soon ]

🚩 to go to all commands type _*.allmenu*_`
await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await conn.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await conn.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }})
  conn.sendMessage(m.chat, {
text: menyu,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `🐰 KIKUCHANJ - AUTH BY SAZUMI KEMII`,
body: '2023 © Kemii Lèarning',
thumbnailUrl: ppUrl,
sourceUrl: "https://chat.whatsapp.com/EHvO9j6JMHb9roHNTvtbdy",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menu|help|tod|menunya)$/i;
handler.register = false;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}