# NTU Line Bot （臺大 Line Bot）
其實這原本只是我的面試題，但我真的不知道要做什麼題目加上我剛好報名了新生書院的隊輔，所以想說可以搞一個 Line Bot 來讓學弟/妹們對學校有更近一步的認識。

## Feature Request
如果您想要加任何功能的話，請開一個 Issue，並詳細記錄下 User Scenario，畢竟我不會通靈。
### Good:
- 主題：尋找最近的吃飯地點
- 情境：當使用者點擊或是輸入「吃飯」，即可依使用者當前位置列出餐廳。（可選擇由**近到遠**或**評價由高到低**）。
- 參考資料：
  - [PostGIS](https://postgis.net/)
  - [Line Bot Location Action](https://developers.line.biz/en/reference/messaging-api/#location-action)

### Bad:
- 主題：新增 NPC 位置
- 情境：列出任何有 NPC 的地方
- 參考資料：無

這會是 Bad 的原因: 我怎麼知道哪裡有 NPC 啦？？？？？？？

## Pull Request
非常歡迎大家自幹功能，唯一的要求就是遵守 Standard JS 的規範，不然你的 Pull Request 不會被通過。

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Dev Howto

### Environment Variables
These environment variables are required. Please copy and paste them into the `.env` file, If you don't have that file, create one.
```
WEBHOOK_SECRET=
LINE_CHANNEL_ID=
LINE_CHANNEL_SECRET=
LINE_CHANNEL_ACCESS_TOKEN=
```

### Folder Structure
```
├── config
│   ├── default.js          # Each config property (Even is an environment variable) should be stored in this file. (With a default value is a plus)
├── app.js                  # Application entry file
├── utils                   # Strong-function-based functions (Ex. messageGenerator)
└── services                # Message handlers
```

### Improvement TODOs
- Add **Sentry** to handle errors.