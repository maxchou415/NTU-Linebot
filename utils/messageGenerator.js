const lineTemplateMaker = require('./lineTemplateMaker')

module.exports = {
  unregisteredMessage: ({ actions }) => {
    return [lineTemplateMaker.makeBubbleTemplate(
      '很抱歉，我不明白您的意思 ＱＱ',
      '試試以下指令？',
      actions
    )]
  },
  lostStudentId: () => {
    return [lineTemplateMaker.makeBubbleTemplate(
      '學生證不見ㄌ ＱＱ',
      '步驟：至 myNTU 掛失 -> 註冊組繳費 $150（學士班繳費機繳費） -> 憑收據至註冊組辦理新證（當天可取）。',
      [
        lineTemplateMaker.makeUriAction('myNTU 掛失學生證', 'https://my.ntu.edu.tw/login.aspx?url=https://cms.cc.ntu.edu.tw/ntucms/default.aspx')
      ]
    )]
  },
  greetingMessageWithStudentId: ({ departmentName }) => {
    return `嗨，${departmentName} 的猴子 🐵 ～`
  },
  invalidStudentId: () => {
    return '您的猴子編號錯啦～\n\n*目前僅開放臺灣大學學士班學生申請（學號開頭必須為 B 或 T）！'
  },
  userOnFollow: ({ actions }) => {
    return [lineTemplateMaker.makeBubbleTemplate(
      '吱吱！',
      '你可以招喚本猴做以下的事情',
      actions
    )]
  },
  whatToEat: () => {
    return [lineTemplateMaker.makeBubbleTemplate(
      '臺大附近美食',
      '除了椰子還有活大以外，你還可以⋯⋯',
      [
        lineTemplateMaker.makeUriAction('追蹤吃貨台大！', 'https://www.facebook.com/ntueater')
      ]
    )]
  },
  teleportPoint: () => {
    return '聽說總圖自習室有傳送點可以傳到鐘塔上⋯⋯\n\n總圖地下室有 24 小時自習室喔！如果沒有地方睡覺的話可以⋯⋯\n\nhttps://www.youtube.com/watch?v=5VflcETEN0E'
  },
  listContributors: () => {
    return [lineTemplateMaker.makeBubbleTemplate(
      '碼農們',
      '賣肝當然是從大學開始啊',
      [
        lineTemplateMaker.makeUriAction('Max Chou', 'https://github.com/maxchou415')
      ]
    )]
  },
  minecraftNTU: () => {
    return [lineTemplateMaker.makeBubbleTemplate(
      'Minecraft NTU 臺大麥塊',
      '騎腳踏車逛臺大太累嗎？那就用飛的ＸＤ',
      [
        lineTemplateMaker.makeUriAction('馬上進入 Minecraft NTU ！', 'https://www.notion.so/jchiroto/MineNTU-FAQ-0cb56da5f4a6475c923a0b3cb35165ab')
      ]
    )]
  }
}
