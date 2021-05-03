# Data Science at The New York Times
------------------
華柏維 2021/05/02
## 文章概述
* 2001年 William Cleveland 首次提議設立一個新的學科"data science"，直到今日，data science 已是各項產業中的爭相發展的領域。
*  Chris Wiggins 成功引入 data science 在 [New York Time](https://www.nytimes.com/)，這是第一個將data science 融入進報紙業的例子。
* data science 可以是 mindset 或 toolset，Wiggins 利用資料並開發ML工具，部屬在編輯部並協助解決商業問題。
  * mindset : the way you think
  * toolset : the tool you use
* data science 可以應用在商品或是流程上。
* Wiggins 在 New York Time 三種資料分析問題的解決方案
  1. Descriptive : 打造可視化 UI [Readerscoper](https://www.erincoughlin.com/nyt-readerscope)，呈現 who is reading what, where.
  2. Predictive : Wiggins ML 預測模型，提供可能利潤最高的報紙派送店鋪方式；另外也基於讀者回饋資料，建立廣告感受度模型，給出感受度最佳廣告在報紙中的擺放位置。
  3. Prescriptive :  Wiggins 的team 在 [Slack](https://slack.com/intl/zh-tw/) 製作的產品 [Blossom](https://blossom.co/index.html%3Fp=39.html)，以 ML 推送正確的文章給使用者。
  PS .文章內提到 curated 這個詞，大至的意思是負責篩選，整合與揉合資訊給他的讀者取用，如 youtube 以演算法篩選出你想看的影片。

------
## 個人對本篇文章的看法
 看完整篇文章並蒐集相關資料，我覺得這是一篇水份比較高的文章，本篇主旨想要表達資料科學在報紙業的應用，前半段這方面的用詞比較模糊，只簡單表達機器學習的應用協助 New York Time 解決許多商業問題。後半段有舉出實際的兩個工具例子。
* Readerscoper：這應該是給內部 editor 用來觀看各種用戶資訊的介面，例如用戶top 10感興趣項目、用戶地區分佈...屬資訊的可視化。為敘述型分析，有在網路上找到某員工的 [blog](https://www.erincoughlin.com/nyt-readerscope)  介紹相關介面功能。
*  Blossom：文章內敘述 Blossom 是由 New York Times 的 data science team 在 slack 所製作的工具，可以推薦 editors 在何時何地推送相關新聞內容。這我就比較困惑了，首先 slack 是一個非常受歡迎的teamwork 通訊軟體(有機會向大家介紹)。許多大公司用他來當公司內部通訊軟體 (ex. Uber、ORACLE、TIME...)。我去查 slack 的整合包的確有 Blossom 的相關"整合"。搜索網路發現 Blossom 是由一家公司所開發的專案管理app，客戶包含 facebook、apple...，產品功能不外乎是專案管理的一些任務分配、時程規劃安排等等，和本篇所敘述的相差甚大。  

整體來說，我認為這只是一個 New York Times 對外宣揚將 ML 應用在報紙業的報告。實際落地了多少我持保留態度。

----
## 個人對 Data science 在產業應用的看法
Data science 應用比較成熟的產業是網路平台業，如Facebook、Google、Amazon、阿里巴巴、騰訊...，我們可以觀察這些巨頭公司對於 Data science 職位的 job description 來研究，一個成熟的資料科學體系需要什麼樣的組織分工。一般來說 Data science team 會有三種工程師(Data Engineer、Data analyst、Data scientist)，用來區分這三個職位，可以用[Monica Rogati](https://www.linkedin.com/in/mrogati)的 data science pyramid



