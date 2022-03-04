const { Telegraf, Markup, session } = require('telegraf')
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(session())

bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}!\nЗапрос на регистрацию отправлен.`))

bot.help((ctx) => ctx.reply(''))

bot.on('message', (ctx) => ctx.reply("Упс. Что-то пошло не так ;)"))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
