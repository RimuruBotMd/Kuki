const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suska/i.test(m.quoted.text)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.susunkata[id][2]
            global.db.data.users[m.sender].money += 141098
            conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ba14f31a89695620007c7.png', m, { packname: "sticker by", author: "Kemii" })
      setTimeout(() => {
      conn.reply(m.chat, `*+ 141.098 Balance*`, m)
}, 3000)
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim())
        global.db.data.users[m.sender].money -= 141098
        else conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/6059151f81fb30d3a5351.png', m, { packname: "sticker by", author: "Kemii" })
        setTimeout(() => {
      conn.reply(m.chat, `*- 141.098 Balance*`, m)
}, 3000)
    }
    return !0
}
handler.exp = 0

module.exports = handler