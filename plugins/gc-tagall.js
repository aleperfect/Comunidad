let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*ANOTATE CRIATURA DEL SEÑOR SINO CUPO:* ${pesan}`
let teks = `¿ ‼️Deseas un bot para tu grupo‼️ ? Wa.me/56940831045
*⺀👻Madrugar se hace más fácil contigo a mi lado⺀*\n\n🟩 ${oi}\n\n🟩 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┊🐲 @${mem.id.split('@')[0]}\n`}
teks += `⚡@𝐄𝐕𝐄𝐍𝐓𝐎𝐒_𝐏𝐀𝐆𝐀_𝟏𝟑`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|eventos13|adan13|ep13)$/i
handler.admin = true
handler.group = true
export default handler