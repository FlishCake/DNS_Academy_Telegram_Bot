const { Telegraf, Markup, session } = require('telegraf')
require("./dbUsers")
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(session())

bot.start((ctx) => {
  ctx.reply(`Привет, ${ctx.message.from.first_name}!\n`);
  
})

bot.help((ctx) => ctx.reply(''))

bot.on('message', (ctx) => {
  
  ctx.reply('По запросу, ${ctx.messege.text}, ничего не найдено')
  })

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))