/*
  * DannTeam
  * ig: @dannalwaysalone
*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text.includes('|')) throw `Tidak ada teks untuk survei\n\nContoh: *${usedPrefix + command}hai|kak|cantik*`

  var name = await conn.getName(m.sender)
  var a = []
  var b = text.split('|')
  for (let c = 1 || 0; c < b.length; c++) {
  a.push([b[c]])
}

return conn.sendPoll(m.chat, `Survei ini diminta oleh ${name}\n\nPesan: ${text.split('|')[0]}`, a, m)
}

handler.command = handler.help = ['poll', 'polling']
handler.tags = ['group']
handler.group = true

module.exports = handler