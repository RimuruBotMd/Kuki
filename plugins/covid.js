var fetch = require("node-fetch")

async function handler(m) {
  var dann = await fetch(`https://api.dannteam.com/api/other/covid-world?apikey=m7ZA69jIZk`)
  var res = await dann.json()
  var hasil = `• Total Kasus: *${res.result.totalCases}*
• Total Pulih: *${res.result.recovered}*
• Total Kematian: *${res.result.deaths}*
• Kasus Aktif: *${res.result.activeCases}*
• Kasus Tutup: *${res.result.closedCases}*
• Last Update: *${res.result.lastUpdate}*
`
await m.reply(hasil)
}

handler.command = handler.help = ['covid']
handler.tags = ['internet']

module.exports = handler