const { Telegraf, Markup, session } = require('telegraf')
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`Привет, ${ctx.session.name}!\nНапиши мне своё имя и фамилию.\n(Пример: Иван Иванов)`))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('message', (ctx) => ctx.reply("Упс. Что-то пошло не так ;)"))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
