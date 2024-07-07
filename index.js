const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true })
const commands = [
  {
    command: "location", description: "քաղաքի կոորդինատներ",
  },
  {
    command: "history", description: "քաղաքի պատմություն",
  },
  {
    command: "hymn", description: "հիմն",
  },
  {
    command: "photos", description: "նկարներ",
  },
  {
    command: "weather", description: "եղանակը հիմա",
  },
  {
    command: "site", description: "պաշտոնական կայք",
  },
  {
    command: "khustup_mountain", description: "Խուստուփ լեռ",
  },
  {
    command: "vahanavank", description: "Վահանավանք",
  },
]
bot.setMyCommands(commands)
bot.on('text', (msg) => {
  const chatId = msg.chat.id

  if (msg.text === '/start') {
    bot.sendMessage(chatId, "Ողջույն 👋, ես քեզ կտրամադրեմ տեղեկություն Կապան քաղաքի մասին: Դե՛ ինչ, արի սկսենք մեր փոքրիկ ճամփորդությունը Հայաստանի հարավային մայրաքաղաքում🏞:")
  }
  else if (msg.text === '/location') {
    bot.sendMessage(chatId, "[Քաղաքի կոորդինատներ](https://www.google.com/maps/place/%D4%BF%D5%A1%D5%BA%D5%A1%D5%B6/@39.2085389,46.3114285,30143m/data=!3m1!1e3!4m6!3m5!1s0x40163df9e0f27477:0x9dbc9ed23fe3d3db!8m2!3d39.2077209!4d46.4067952!16zL20vMDNfOGxw?entry=ttu)", {
      parse_mode: "MarkdownV2"
    })
  }
  else if (msg.text === '/history') {
    bot.sendMessage(chatId, "Կապանի մասին առաջին հիշատակությունը վերաբերում է 5-րդ դարի վերջերին։ Ըստ երևույթին, այդ ժամանակ Կապանը սովորական բնակավայր էր։ 10-րդ դարից սկսած մատենագիրների մոտ Կապանն արդեն հիշատակվում է որպես քաղաք։ Կապանը 10-րդ դարի վերջին (հավանաբար 998-1001 թվականներին) դարձել է Սյունիքի թագավորության մայրաքաղաքը։ Կապանն ուներ դիրքային մի շարք առավելություններ։ Նրա արևմտյան կողմում գտնվող Բաղաբերդ և Բաղակու քար բերդերը ապահովում էին քաղաքի անվտանգությունն արևմտյան և հյուսիսարևմտյան կողմերից։ Քաղաքի հյուսիսային կողմով անցնում է Կապան գետը, որն այդ մասում առաջացրել է խոր կիրճ՝ խիստ զառիվեր և անտառապատ լանջով, իսկ դիմացը մի քանի հարյուր մետրի հասնող ժայռ է։ Հարավային կողմով ձգվում էին Արևիքի բարձրաբերձ և ժայռոտ լեռները, որոնք անմատչելի էին դարձնում քաղաքը հարավային կողմից։ Այս է եղել պատճառը, որ քաղաքը հարավային և հյուսիսային կողմերից հարկ չի եղել պարսպապատելու։ Համեմատաբար դյուրին էր քաղաք մտնել արևելյան կողմից, այդ պատճառով էլ քաղաքի այս մասը պարսպապատված է եղել։ Արագ զարգացող Կապանը 9-րդ դարի դարի վերջին և 10-րդ դարի սկզբին վերակառուցել ու պարսպապատել է Ջվանշիր Սիսակյանի որդին՝ Ձագիկ Գ իշխանը։ X դարի վերջից դարձել է Սյունիքի իշխանանիստը, ապա՝ թագավորության մայրաքաղաքը։ 1103 թվականին սելջուկյան թուրքերը՝ Չորթմանի առաջնորդությամբ, համառ կռիվներից հետո, թափանցել են քաղաքի պարսպից ներս, սակայն, հազարավոր սպանվածներ թողնելով միջնաբերդի մոտ, ավերել են քաղաքը և նահանջել։ Հետագայում, աստիճանաբար լքվելով բնակիչներից, անշուքացել և դարձել է ավերակ։ 1103 թվականին Կապանն ավերման է ենթարկվում սելջուկների կողմից։ Այնուհետև Կապանը մի քանի դար շարունակում է իր գոյությունը, բայց արդեն իբրև ոչ քաղաք, այլ սովորական բնակավայր։ Կապանի բնակչությունը ըստ երևույթին միատարր չի եղել։ Նա ուներ հրեաների հատուկ թաղ։ Կապանի մոտ գտնվող Հալիձորի բերդում տեղի են ունեցել ինքնապաշպանություններ 1720-ական թվականներին Դավիթ Բեկի մասնակցությամբ։ Վերջինիս պատվին քաղաքում դրված է մեծ արձան։ Հնամենի Կապանը 15-րդ դարի սկզբում ավերվել է, նրա անունը թուրքական աղավաղմամբ սկսեց արտասանվել Ղափան։ Այդ Ղափան անունն էլ ժառանգեց 19-րդ դարի 50-ական թվականներին այսօրվա քաղաքի տարածքում ձևավորվող նոր բնակավայրը, իսկ Հայաստանի անկախացումից հետո քաղաքը կրկին վերականգնեց իր պատմական Կապան անունը։", {
    })
  } else if (msg.text === '/hymn') {
    bot.sendMessage(chatId, "Start video uploading...")

    bot.sendVideo(chatId, './video.mp4')
  }
  else if (msg.text === '/photos') {
    bot.sendMessage(chatId, "Start photo uploading...")
    bot.sendPhoto(chatId, './Kapan.jpg')
    bot.sendMessage(chatId, "[Ավելին](https://hy.wikipedia.org/wiki/%D4%BF%D5%A1%D5%BA%D5%A1%D5%B6#%D5%8A%D5%A1%D5%BF%D5%AF%D5%A5%D6%80%D5%A1%D5%BD%D6%80%D5%A1%D5%B0)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
  } else if (msg.text === '/weather') {
    bot.sendMessage(chatId, "[Եղանակը հիմա](https://www.google.com/search?q=weather+in+kapan+armenia&rlz=1C5CHFA_enAM1117&oq=we&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYgAQyDQgDEC4YxwEY0QMYgAQyDQgEEC4YxwEY0QMYgAQyDQgFEC4YxwEY0QMYgAQyBggGEEUYPDIGCAcQRRg80gEJMTAxMThqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
  } else if (msg.text === '/site') {
    bot.sendMessage(chatId, "[Պաշտոնական կայք](https://www.kapan.am/Pages/Home/default.aspx)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
    bot.sendMessage(chatId, "[Ֆեյսբուքյան էջ](https://www.facebook.com/Kapanmunicipality/)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
  } else if (msg.text === '/khustup_mountain') {
    bot.sendMessage(chatId, "Start photo uploading...")
    bot.sendPhoto(chatId, './Khustup.jpg',)
    bot.sendPhoto(chatId, './Khustup1.jpeg',)
    bot.sendMessage(chatId, "[Խուստուփ լեռ](https://hy.wikipedia.org/wiki/%D4%BD%D5%B8%D6%82%D5%BD%D5%BF%D5%B8%D6%82%D6%83)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
    bot.sendMessage(chatId, "[Խուստուփ լեռի կոորդինատներ](https://maps.app.goo.gl/UtX3rpUGhyGSwa6p7)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
  } else if (msg.text === '/vahanavank') {
    bot.sendMessage(chatId, "Վահանավանք նաև Հովհաննավանք, միջնադարյան վանական համալիր Հայաստանում։ Գտնվում է Սյունիքի մարզկենտրոն Կապան քաղաքից 7 կմ արևմուտք՝ Ողջի գետի աջ կողմում, Տիգրանասարի լանջին։ Վանական համալիրի առաջին կառույցը՝ սուրբ Գրիգոր Լուսավորիչ եկեղեցին, կառուցվել է 911 թվականին՝ Տաթևի վանքի հանդիսավոր օծումից հինգ տարի անց։ Կառուցումը հովանավորել է Սյունիք նահանգի Բաղք գավառի իշխան Ձագիկի որդի Վահան Սյունին, ով եկեղեցուն նվիրաբերում է հսկայական կալվածքներ։ Ավելի ուշ՝ 11-րդ դարի երկրորդ կեսին, Վահանավանքի մոտ կատարվում են նոր կառուցումներ, մեծ եկեղեցուց 25 մետր հեռու կառուցվում է մի ավելի փոքր եկեղեցի՝ սուրբ Աստվածածինը։ Նրա արևելյան պատի ներսի կողմում, հիմքին մոտ գտնվող քարերից մեկի վրա պահպանվել է 1086 թվականին վերաբերվող մի արձանագրություն, որտեղ խոսվում է այդ եկեղեցու կառուցման մասին։ Վանքն ունեցել է շուրջ 100 միաբան, կից գործել է վանական դպրոցը, որի սաներից էր եղել եկեղեցու հիմնադիր Վահանի եղբորորդի Վահան Ա Սյունեցին։ Վահանավանքում են գտնվում Վահան իշխանի, Սահակ Սևադա Բ-ի, Սոփի թագուհու, Սյունիքի գահերեց իշխան Աշոտի, նրա թագակիր որդիներ Սմբատ Բ-ի և Գրիգոր Ա-ի, ինչպես նաև Սյունիքի թագավորության մնացած չորս թագավորների, Վաչագան իշխանի մայր Խաշուշի գերեզմանները։ 1966 թվականից կատարվում են պեղումներ, իսկ 1978 թվականից՝ վերականգնողական աշխատանքներ։ 2006-2009 թվականներին իրականացված վերականգնման աշխատանքների արդյունքում ամբողջովին վերականգնվել են սուրբ Գրիգոր Լուսավորիչ եկեղեցին և նրան կից գավիթը։ Սյունասրահը մասնակիորեն է վերականգնվել։ Համալիրի երկհարկ եկեղեցին")
    bot.sendPhoto(chatId, './Vahanavank.jpeg')
    bot.sendPhoto(chatId, './Vahanavank1.jpeg')
    bot.sendMessage(chatId, "[Վահանավանքի կոորդինատներ](https://maps.app.goo.gl/r9hM8YRXk3CFPBqf8)", {
      parse_mode: "MarkdownV2",
      disable_web_page_preview: true,
    })
  }
})


