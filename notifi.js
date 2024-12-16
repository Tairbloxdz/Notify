// Remake By : Chủ Tọa Hayato(PhuongTran)

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;

noti_key = "Thk này béo thế"
console.log("Mẹ Mày Béo \nJoinDiscord: https://discord.gg/TFmhmbGjEE");
name_server = " Synet Hub"; 
invite_discord = " https://discord.gg/TFmhmbGjEE"; 

ping_role_id = {
  boss: "",
  sword: "",
  mirage: "",
  kitsune: "",
  haki: {
    normal: "",
    legend: ""
  },
  fullmoon: "",
  fruit_drop: "",
  fruit_mithical: "",
  fruit_legend: "",
  low_player: "",
  cursed_captain: "",
  dough_king: "",
  rip_indra: "",
  dark_beard: "",
  soul_repsear: "",
},

noti_config = {
  random_anime_picture: false,
  boss: true,
  sword: true,
  mirage: true,
  kitsune: true,
  haki: {
    normal: true,
    legend: true,
  },
  fullmoon: true,
  fruit_drop: true,
  fruit_mithical: true,
  fruit_legend: true,
  low_player: true,
  cursed_captain: true,
  dough_king: true,
  rip_indra: true,
  dark_beard: true,
  soul_repsear: true,
};

webhook_config = {
  boss: "https://discord.com/api/webhooks/1317885486118998016/IJM5fBBOyNR638V80NGTBt9t3obuOuOodDPvcvlvvf_GKNw2YRWOVwtwQHdcmH_ns5J6",
  sword: "https://discord.com/api/webhooks/1317884227777466418/ofKKvIX_m6lqNieZ85AxDTrfN3K7CbRJmUyp5o1EfDYIfFk-VSbnpf3id6YJu0hlHRQ9",
  mirage: "https://discord.com/api/webhooks/1317883742068408471/Bv9ylR3IDZo4maA-ug5SE8Jr0svDhTjRxUZrvv3YD8dWTDdIVmGs5vSlsDxuA0jIKN8N",
  kitsune: "https://discord.com/api/webhooks/1317884117219803186/oN206OoM83_LVO2UiOJghq9UAFcHE44TWdsM881YzWs55pYGCULyIIhPjXo9bG2b8I63",
  haki: {
    normal: "https://discord.com/api/webhooks/1317885831486242868/FtNIqmxhkmolUoAVsXbqnLxdMeJvX5ewkRIEDAfAvGhGq_64b42Uih3XcjsLc7WI3I7-",
    legend: "https://discord.com/api/webhooks/1317883986789269584/MJ7hKnj-zQ78B68y1fyK7_P93gPo9klcil0Hubs8X6iU4kb34u3MWXJu8xBvbyM6dmAl"
  },
  fullmoon: "https://discord.com/api/webhooks/1317883642923581470/UER2_kZIvTM8D-Qz_MIvomW1LOOLrKW9fz1cVk1r8kXHsOj8FrbrVQOBkKLhXmTFQcU4",
  fruit_drop: "https://discord.com/api/webhooks/1317885191557087282/zaPGkecY6VSIpjQHMpFHVL64LSqxQjDZ8YSfciUx1YwP0HRvpNPlu4ieCafUo83BcV6i",
  fruit_mithical: "https://discord.com/api/webhooks/1317885296053977088/Ta8Vy1zMXUkOXpvZ3qHbacWKo0AK98ePQ1U9ETr55xbBBhO2E-__RjgQEK8w37hW4cwc",
  fruit_legend: "https://discord.com/api/webhooks/1317885393911287908/JZefPrA-uAKxKuqrN5hzQ-vNg7ZJxH3JE1huOkejVQB4s4BrT-w2Wdj9Q8diIW-b6EHo",
  low_player: "https://discord.com/api/webhooks/1317885086103900190/LFzIFl0mLLbZTsWVyF4VN6G6oPgiv0_EperqfufxQaIaU-2XvSTay7sKfRjYdwbpVrck",
  cursed_captain: "https://discord.com/api/webhooks/1317884424066437291/2zNYMq7zwmPS2l_POYTJigy7mA9f8fjP91tuewt5yBPeLm7_B9loAQSLb1kjsjPskWQa",
  dough_king: "https://discord.com/api/webhooks/1317884560339632199/MucQZvQ6kdeLAIHCaIAH-vp_dH-F2HroQtYjSYm1Fzng-5ZYqWd1dKZS10mDGeluc9Js",
  rip_indra: "https://discord.com/api/webhooks/1317884308823867402/8TAMjHJ1ZEeahfexIeUKlbC2JMjTtl3Z_v34TeoUXrEpAJktb9snB4fs-EL5kexobJyb",
  dark_beard: "https://discord.com/api/webhooks/1317884653700382781/hznZGM3hdsAIMEeHPokE6hN5Cjrl4KU8JFur3iNkYREnSWs5WKnvGMNgYXQGsSCBeuQZ",
  soul_repsear: "https://discord.com/api/webhooks/1317884783749238865/CepPuUb1Q59b33yyoIUSEEpyo_5undlPpMrw_MUQuTLe02R906ve2jqGUkCd1-6ZzFy5",
};


token = "MTI5NzQ1ODU4NDY0ODQxNzMzMw .G6fU-0.Wy4W3IwAUAwugcTINEj3xtoHmh9YfbmAcn686Q";


try {
  require.resolve("discord.js-selfbot-v13");
} catch (e) {
  console.log("Please run: `npm install discord.js-selfbot-v13");
  process.exit(0);
}

try {
  require.resolve("discord.js");
} catch (e) {
  console.log("Please run: `npm install discord.js");
  process.exit(0);
}

try {
  require.resolve("axios");
} catch (e) {
  console.log("Please run: `npm install axios");
  process.exit(0);
}

const { Client, Intents } = require("discord.js-selfbot-v13");
const { WebhookClient, EmbedBuilder, Faces } = require("discord.js");
const client = new Client({
  intents: new Intents(7796),
  partials: [
    "USER",
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "GUILD_SCHEDULED_EVENT",
  ],
  checkUpdate: false,
});

const anime = async function (e) {
  e = e.toJSON();
  if (!noti_config.random_anime_picture) {
    return e;
  }
  const { data: sex_miku_hubb } = await require("axios").get("https://api.waifu.pics/sfw/waifu",);
  e.content = noti_config.content;
  e.image = { url: sex_miku_hubb.url };
  return e;
};




// dont edit some here ... pls
const ownerID = "<@1297458584648417333>"; // ignore = error
avtOwner = "https://media.discordapp.net/attachments/1317982415980990534/1318335390511534141/image0.gif?ex=6761f302&is=6760a182&hm=cba37a66b588e538b7ad21915ce9fc378d45065fa14b06b25c2a750b2dd520bd&";
nameOwner = ".taidepzai.";
client.on("ready", async () => {
  console.log(`Successfully: Code Started.`);
  client.user.setStatus("invisible");
  nameOwner = client.users.cache.get(ownerID).tag;
});



// discord.gg/h4yDsdem
const XeroId = {
  MirageChannel: 1190570935233814530,
  MoonChannel: 1230423385347981335,
  HakiColorLegendChannel: 1190482921727987735,
  HakiColorChannel: 1190483035817255003,
  BossChannel: 1226356041248280596,
  FruitChannel: 1190581854185721866,
  SwordChannel: 1190570953130901534,
  Kitsune: 1190482703343157408
}

// discord.gg/6mtRD6aVKS
const QuanTum = {
  MirageChannel: 1270006368773996666,
  MoonChannel: 1290980438407512064,
  Fruit_Mithical: 1277103810375843890,
  FruitChannel: 1270119865813958656,
  Fruit_Legend: 1277103869620518912,
  LowPlayer: 1277047599232323615,
  Cursed_Captain: 1277497073809494108,
  DoughKing: 1277506349516722287,
  SoulRepsear: 1281280355654959114,
  DarkBeard: 1279382305927860336,
  RipIndra: 1277488296003637279,
}

client.on("messageCreate", async (message) => {
const channel = message.channelId;
  if (channel == XeroId.BossChannel && noti_config.boss) {
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.boss });
    setTimeout(async() => {
      webhook.send({
        content: ping_role_id.boss,
        embeds: [
          await anime(new EmbedBuilder()
              .setTitle(" Boss Spawn" + name_server)
              .setURL(invite_discord)
              .addFields(
                { name: "**[👺] __Boss Name:__**", value: data[0].value.replace("True Form", "") },
                { name: "**[👤] __Players In Server:__**", value: data[1].value },
                { name: "**[🔗] __Job ID:__**", value: data[2].value },
                { name: "**[📜] __Script Join:__**", value: data[3].value }
              )
              .setTimestamp(Date.now())
              .setColor("ffffff")
              .setFooter({text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner,})
            ),
          ],
        });
      }, 700);
  } else if (channel == XeroId.SwordChannel && noti_config.sword) {
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.sword });
    setTimeout(async() => {
      webhook.send({
      content: ping_role_id.sword,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Sword Legend" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[⚔️] __Sword Name:__**", value: data[0].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🌊] __Sea World:__**", value: `\`\`\`2\`\`\`` },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
          ),
        ],
      });
    }, 700);
  } else if (channel == XeroId.SwordChannel && noti_config.sword) {
    // sword royx
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.sword });
    setTimeout(async() => {
      webhook.send({
      content: ping_role_id.sword,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Sword Legend" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[⚔️] __Sword Name:__**", value: data[0].value },
              { name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[2].value },
              { name: "**[🔗] __Job ID:__**", value: data[3].value },
              { name: "**[📜] __Script Join:__**", value: data[4].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    }, 700);
    
  } else if (channel == XeroId.MirageChannel && noti_config.mirage) {
    // mirage Xero
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
    setTimeout(async() => {
      webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Mirage Island" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🏝️] __Mirage Spawn:__**", value: data[0].value },
          //  { name: "**[⏳] __Server Time:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
          ),
        ],
      });
    }, 700);
  } else if (channel == QuanTum.MirageChannel && noti_config.mirage) {
    // mirage Xero
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
    setTimeout(async() => {
      webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Mirage Island" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🏝️] __Mirage Spawn:__**", value: data[1].value },
              { name: "**[⏳] __Server Time:__**", value: data[2].value },
              { name: "**[👤] __Players In Server:__**", value: data[3].value },
              { name: "**[🔗] __Job ID:__**", value: data[4].value },
              { name: "**[📜] __Script Join:__**", value: data[5].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
          ),
        ],
      });
    }, 700);
  } else if (channel == XeroId.HakiColorLegendChannel && noti_config.haki.legend) {
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.legend });
    setTimeout(async() => {
      webhook.send({
      content: ping_role_id.haki.legend,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Haki Legendary" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🌈] __Color Haki:__**", value: data[0].value },
          //  { name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    }, 700);
    
  } else if (channel == XeroId.HakiColorLegendChannel && noti_config.haki.legend) {
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.legend });
    setTimeout(async() => {
      webhook.send({
      content: ping_role_id.haki.legend,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Haki Legendary" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🌈] __Color Haki:__**", value: data[0].value },
          //  { name: "**[🌊] __Sea World:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    }, 700);
    
  }  else if (channel == XeroId.HakiColorChannel && noti_config.haki.normal) {
    // haki normal w-azure
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.normal });
    setTimeout(async() => {
          webhook.send({
      content: ping_role_id.haki.normal,
      embeds: [
        await anime(
          new EmbedBuilder()
          .setTitle(" Haki Normal" + name_server, )
            .setURL(invite_discord)
            .addFields(
              { name: "**[🎨] __Color Haki__**", value: data[0].value },
             // { name: "**[🌊] __Sea:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    }, 700);

  } else if (channel == XeroId.MoonChannel && noti_config.fullmoon) {
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.fullmoon });
    setTimeout(async() => {
       webhook.send({
      content: ping_role_id.fullmoon,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Full Moon" + name_server, )
            .setURL(invite_discord)
            .addFields(
              //  { name: "**[⏳] __Status:__**", value: data[0].value },
                  { name: "**[🌗] __ Moon Phase:__**", value: data[0].value },
                  { name: "**[👤] __Players In Server:__**", value: data[1].value },
                  { name: "**[🔗] __Job ID:__**", value: data[2].value },
                  { name: "**[📜] __Script Join:__**", value: data[3].value },
                )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    }, 700);
  }  else if (channel == QuanTum.MoonChannel && noti_config.fullmoon) {
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.fullmoon });
    setTimeout(async() => {
       webhook.send({
      content: ping_role_id.fullmoon,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Full Moon" + name_server, )
            .setURL(invite_discord)
            .addFields(
                  { name: "**[🎋] __Location:__**", value: data[1].value },
                  { name: "**[🌗] __ Moon Phase:__**", value: data[2].value },
                  { name: "**[👤] __Players In Server:__**", value: data[3].value },
                  { name: "**[🔗] __Job ID:__**", value: data[4].value },
                  { name: "**[📜] __Script Join:__**", value: data[5].value },
                )
            .setTimestamp(Date.now())
            .setColor("ffffff")
            .setFooter({
              text: `Created By: @${taidepzai}` + invite_discord,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    }, 700);
  } else if (channel == QuanTum.FruitChannel && noti_config.fruit_drop) {
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.fruit_drop });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.fruit_drop,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🎋] - __Location :__**", value: data[1].value},
            { name: "**[🥝] - __Fruit Name :__**", value: data[2].value },
            { name: "**[👥] - __Players In Server :__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
          )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${nameOwner}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.Fruit_Legend && noti_config.fruit_legend) {
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.fruit_legend });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.fruit_legend,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🎋] - __Location :__**", value: data[1].value},
            { name: "**[🥝] - __Fruit Name :__**", value: data[2].value },
            { name: "**[👥] - __Players In Server :__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
          )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.Fruit_Mithical && noti_config.fruit_mithical) {
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.fruit_mithical });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.fruit_mithical,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🎋] -__Location :__**", value: data[1].value},
            { name: "**[🥝] - __Fruit Name :__**", value: data[2].value },
            { name: "**[👥] - __Players In Server :__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
          )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
 } else if (channel == XeroId.Kitsune && noti_config.kitsune) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.kitsune });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.kitsune,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Kitsune Spawn " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🦊] -__Kitsune Spawn :__**", value: "```✅```"},
            { name: "**[🎋] -__Location :__**", value: "```Sea 3```"},
            { name: "**[👥] - __Players In Server :__**", value: data[0].value},
            { name: "**[🔗] - __Job ID :__**", value: data[1].value },
            { name: "**[📋] - __Script Join :__**", value: data[2].value }, 
            )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.LowPlayer && noti_config.low_player) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.low_player });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.low_player,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Low Player" + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🎋] -__Location :__**", value: data[1].value},
            { name: "**[👥] - __Players In Server :__**", value: data[2].value},
            { name: "**[🔗] - __Job ID :__**", value: data[3].value },
            { name: "**[📋] - __Script Join :__**", value: data[4].value }, 
            )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.Cursed_Captain && noti_config.cursed_captain) {
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.cursed_captain });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.cursed_captain,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🎋] - __Location :__**", value: data[1].value},
            { name: "**[👥] - __Name Boss :__**", value: data[2].value },
            { name: "**[👥] - __Players In Server :__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
          )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.DoughKing && noti_config.dough_king) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.dough_king });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.dough_king,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Dough King Spawn " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🍩] -__Dough King :__**", value: "```✅```"},
            { name: "**[🎋] - __Location :__**", value: data[1].value},
            { name: "**[👥] - __Name Boss :__**", value: data[2].value},
            { name: "**[🔗] - __Player In Server:__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
            )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.RipIndra && noti_config.rip_indra) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.rip_indra });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.rip_indra,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Rip Indra Spawn " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[👱] -__Rip Indra :__**", value: "```✅```"},
            { name: "**[🎋] -__Location :__**", value: data[1].value},
            { name: "**[👥] - __Name Boss :__**", value: data[2].value},
            { name: "**[🔗] - __Player In Server:__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
            )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.DarkBeard && noti_config.dark_beard) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.dark_beard });
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.dark_beard,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Dark Beard Spawn " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[👳] -__Dark Beard :__**", value: "```✅```"},
            { name: "**[🎋] -__Location :__**", value: data[1].value},
            { name: "**[👥] - __Name Boss :__**", value: data[2].value},
            { name: "**[🔗] - __Player In Server:__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
            )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} else if (channel == QuanTum.SoulRepsear && noti_config.soul_repsear) {
  // kitsune Xero
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.soul_repsear});
  setTimeout(async() => {
      webhook.send({
    content: ping_role_id.soul_repsear,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Soul Repsear Spawn " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[💀] -__Soul Repsear :__**", value: "```✅```"},
            { name: "**[🎋] -__Location :__**", value: data[1].value},
            { name: "**[👥] - __Name Boss :__**", value: data[2].value},
            { name: "**[🔗] - __Player In Server:__**", value: data[3].value },
            { name: "**[🔗] - __Job ID :__**", value: data[4].value },
            { name: "**[📋] - __Script Join :__**", value: data[5].value }, 
            )
          .setTimestamp(Date.now())
          .setColor("07f6da")
          .setFooter({ text: `Created By: @${taidepzai}` + invite_discord, iconURL: avtOwner, }),
      ),
    ],
  });
  }, 700);
} 
})

   

client.login(MTI5NzQ1ODU4NDY0ODQxNzMzMw .G6fU-0.Wy4W3IwAUAwugcTINEj3xtoHmh9YfbmAcn686Q);