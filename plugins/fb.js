/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


var api = require('api-dylux');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `*Example*: .fb https://www.facebook.com/xxxxxxx`;
  }

  try {
    var response = await api.fbdl(text);
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', response.title, m);
  } catch (error) {
    console.log(error);
    m.reply('There seems to be a problem downloading the video.');
  }
};

handler.help = ['facebook'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
module.exports = handler;
