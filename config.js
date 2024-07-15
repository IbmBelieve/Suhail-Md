const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_18_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpQXh5a3ViVEJ0QndlT1NkRHRpNnRrNC9GNmlRUkx2Z3FhNVJBU2lleWp3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTE2MDkwMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFGMDczOURFNzc1MDU3Rjg1NTE5OUFBQTEyQ0U3ODdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA2MzkyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwdFRIUEE0Z1JFaU9FT1JGdGVWOW1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjMGUyNmU0LTQ0YzctNDM1OC1hNTg5LTQ3YWQ4NjE2MmJkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxNzIsXG4gICAgICAxMyxcbiAgICAgIDE4NixcbiAgICAgIDIwMixcbiAgICAgIDMyLFxuICAgICAgMjQsXG4gICAgICAyMTAsXG4gICAgICAxMTgsXG4gICAgICA1OSxcbiAgICAgIDQyLFxuICAgICAgNjksXG4gICAgICAyNTMsXG4gICAgICA0LFxuICAgICAgMjYsXG4gICAgICAyMjAsXG4gICAgICAxNjMsXG4gICAgICAxOTAsXG4gICAgICAxOTksXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTkzLFxuICAgICAgMzcsXG4gICAgICAyMjQsXG4gICAgICA4MixcbiAgICAgIDIxOSxcbiAgICAgIDg0LFxuICAgICAgODYsXG4gICAgICAxMDUsXG4gICAgICAxNDIsXG4gICAgICA0NCxcbiAgICAgIDIxNSxcbiAgICAgIDkyLFxuICAgICAgMjQ0LFxuICAgICAgMTIxLFxuICAgICAgMTU5LFxuICAgICAgMTQ2LFxuICAgICAgMTUxLFxuICAgICAgNzQsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzVNNUhGMTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTE2MDkwMDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMzEwNjA1NTk0ODQxOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+kq1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMcmpiQUZFUEN6MWJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1oyREk1eFpuSC8xR1Vnd0hIUDFTZThlVmNDa044MENxNmw4VFFQS3hXaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrOHhWMEJEWFRGV0U3enVXeGZZN3lRZHJpb1A4aGEwZVYrbUNRUXlneDFCb0tjcEx5TCtwWkI5WUZMbitSazFNVEZMTTRxbWVQOENQazhhdjE1MHdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWc1ZBWU9mMW5yNnFHNU5ldXJrWVNpV0plNzZHc2xjZTN0RStuM0VlSllkZFQ1b1FtS1AzMG5DUzhxSnliTDMyWlhFYlVqNW9wSzhIMmpHMkI1Tm1EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUxNjA5MDAzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNjM5MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdE5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU10Ti5qc29uIjogIntcImtleURhdGFcIjpcIjEwd3RZSXVVaEF5anR1cEo4bzByMEE2Y2JDQ2JxeFBSYU5TT3cxS3NzdFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0MzA2NzMxNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDYzNTA4MTk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
