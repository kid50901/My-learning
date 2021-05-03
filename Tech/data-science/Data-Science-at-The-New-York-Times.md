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
Data science 應用比較成熟的產業是網路平台業，如Facebook、Google、Amazon...，我們可以觀察這些巨頭公司對於 Data science 職位的 [job description](https://www.amazon.jobs/en/job_categories/data-science?offset=0&result_limit=10&sort=relevant&distanceType=Mi&radius=24km&latitude=&longitude=&loc_group_id=&loc_query=&base_query=&city=&country=&region=&county=&query_options=&) 來研究，一個成熟的資料科學體系需要什麼樣的組織分工。一般來說 Data science team 會有三種工程師(Data Engineer、Data analyst、Data scientist)，可以用[Monica Rogati](https://www.linkedin.com/in/mrogati)提出的 data science pyramid 來區分。
![alt text](https://github.com/kid50901/My-learning/blob/master/img/1_7IMev5xslc9FLxr9hHhpFw.png?raw=true)
如同馬斯洛需求金字塔的概念，data science pyramid 同樣也是由下往上進行條件滿足，換句話說，滿足下層才能往上層走。。
* Data Engineer : 主要負責最下面兩層collect、store/move，是資料科學應用在產業的基礎建設所以他非常重要，所需投資的人力也最多。主要工作內容有建立資料庫、建立資料通道、將演算法落地系統並優化效能。技能要求偏向傳統的 computer science，比較接近IT，使用程式python、SQL、JAVA、PHP、HTML...。
 * Data analyst : 為資料科學家的入門職位，主要負責exlore/transform、aggregate/label層，主要工作為資料清洗與基礎的資料分析(資料聚合、切片、篩選...)，可能也會進行簡單的建模工作(call model)，通常一般碩士統計數學相關科系畢業即可，使用程式python、SQL、R、SAS、EXCEL...。
* Data scientist : 負責金字塔頂端的工作，負責ML/DL的演算法開發，優化現有模型、建立新演算法，一般由 PHD 擔任此工作，需要極強的數學統計基礎，且需時常study論文，跟上最新的 ML 趨勢，使用程式 python..，有些公司會把Data analyst 、Data scientist 統稱 Data scientist。

 一個產業若想應用 Data science 且有所成就，須由下往上找尋適合的人才，並從金字塔基底做起，可以沒有ML/DL，但不可以沒有Database、pipline、systom，否則演算法再好也沒有對應的資料與落地的場域。以youtube 為例，如果yt沒有效能最好、最友善的 web 介面，即使有超強的推薦演算法，也無法從介面蒐集到資料，更沒有可以放置演算法的殼。data science 可以創造價值，但他必須基於computer science 之上。


