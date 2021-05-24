# NTU Line Bot （臺大 Line Bot）
其實這原本只是我的面試題，但我真的不知道要做什麼題目加上我剛好報名了新生書院的隊輔，所以想說可以搞一個 Line Bot 來讓學弟/妹們對學校有更近一步的認識。

# Feature Request
如果您想要加任何功能的話，請開 Ticket，並詳細記錄下 User Scenario，畢竟我不會通靈。
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