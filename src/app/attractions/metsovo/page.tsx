import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希腊小众旅行攻略｜迈措翁实用指南，新手轻松出行 - 最佳欧洲景点',
  description: '迈措翁是希腊西北部品都斯山脉里的一个高山小镇，海拔1100多米，地处约阿尼纳和迈泰奥拉之间，历史上是商旅要道和瓦拉几人的聚居中心。说实话这地方跟希腊海岛完全不是一个画风，满眼是石头房子、石板巷、木阳台...',
}

export default function MetsovoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '迈措翁', href: '/attractions/metsovo' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">迈措翁</h1>
          <p className="text-xl text-gray-600 mb-4">Metsovo</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">希腊</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">迈措翁</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁是希腊西北部品都斯山脉里的一个高山小镇，海拔1100多米，地处约阿尼纳和迈泰奥拉之间，历史上是商旅要道和瓦拉几人的聚居中心。说实话这地方跟希腊海岛完全不是一个画风，满眼是石头房子、石板巷、木阳台，空气里飘着松香和烤奶酪味，没有游客扎堆的热闹，多的是当地大爷在广场梧桐树下喝咖啡闲聊的烟火气。迈措翁以手工织毯、烟熏奶酪和葡萄酒闻名，是希腊小众深度游里很特别的一站，尤其适合迈措翁人文慢逛、迈措翁自驾游和希腊山区小众旅行。</p>
            </Section>
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁是全年开放的山区小镇，巷子和广场随便走没有限制。博物馆的开放时间要留意，Tositsa民俗博物馆夏季周五到周三9:00-13:00和16:00-18:00，冬季只有15:00-17:00，周四闭馆。亲测周三下午三点多到的，门口阿姨很热情地说今天还能看。Averoff画廊夏季周三到周一10:00-18:30，冬季10:00-16:00，周二闭馆，这个别像我一样忘了查闭馆日白跑。Agia Paraskevi老教堂在主广场边，白天门开着随时可以进。Agios Nikolaos修道院有十七世纪壁画，得按门铃，看守人阿姨来开门，夏天一般到晚上七点半。</p>
            </Section>
            <Section title="最佳游览季节">
              <p className="text-gray-700 leading-relaxed mb-4">6月、9月：气温20–25℃，体感舒适，适合长时间步行。</p>
              <p className="text-gray-700 leading-relaxed mb-4">7–8月：游客略多，中午石板路升温明显，建议早晚出行。</p>
              <p className="text-gray-700 leading-relaxed mb-4">10月中下旬：秋色最佳，枫树、橡树变色，傍晚光线适合摄影。</p>
              <p className="text-gray-700 leading-relaxed mb-4">12–2月：雪季，滑雪氛围浓，但部分小巷积雪封闭。</p>
              <p className="text-gray-700 leading-relaxed mb-4">4月：残雪未消，新芽初发，空气清新。</p>
            </Section>
            <Section title="建议游览时长">
              <p className="text-gray-700 leading-relaxed mb-4">半天：仅主街与广场，比较仓促。</p>
              <p className="text-gray-700 leading-relaxed mb-4">1天：基本覆盖核心景点，但体验较浅。</p>
              <p className="text-gray-700 leading-relaxed mb-4">2天1夜：推荐。可游览博物馆、老教堂、城堡遗址，并前往周边酒庄或修道院。</p>
              <p className="text-gray-700 leading-relaxed mb-4">3天：适合徒步爱好者，可走品都斯山深处的森林路线。</p>
            </Section>
            <Section title="注意事项">
              <p className="text-gray-700 leading-relaxed mb-4">镇内多石阶与坡道，不建议携带大型拉杆箱，推荐背登山包或软包。</p>
              <p className="text-gray-700 leading-relaxed mb-4">石板路一下雨就滑，别穿白底帆布鞋，走一圈脏得没法看，最好穿防滑的平底鞋。冬天有些小巷积雪没人清，走不通，出发前最好查查路况。</p>
              <p className="text-gray-700 leading-relaxed mb-4">镇上好多小店只收现金。我就在一个老奶奶的摊子前看上几双手工羊毛袜，翻遍包没找到现金，尴尬得不行，只好跑去广场ATM取钱再折回去。另外夏天下午2点到5点很多店午休关门，吃饭买东西别赶这个点。这边海拔高，晚上凉得快，就算夏天也得带件长袖。</p>
              <p className="text-gray-700 leading-relaxed mb-4">迈措翁挺有人文味，适合一个人慢慢逛，也适合情侣或者带孩子的家庭。不用爬山，老人小孩走石板路也没问题，晃晃悠悠很舒服。</p>
            </Section>
            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">历史背景嘛——走在巷子里，脚下石头被几百年脚步磨得发亮，两边的石墙摸着扎手，墙缝里长满青苔。小镇的根扎在拜占庭时代，真正长起来是奥斯曼时期，作为品都斯山脉的商路咽喉成了商队和牧民的集散地。这里的居民主要是瓦拉几人，说一种跟罗马尼亚语很像的Aromanian方言，几百年来以牧羊、织毯和经商为生。走在老城区，石墙摸上去粗粝硌手，偶尔一扇老木门半开，能瞥见院子里堆着的劈柴和晾着的腌肉，那种几百年来没怎么变过的生活感扑面而来，比读任何历史书都真实。十七十八世纪很多迈措翁人到海外做生意发了财，回来建了那些大石头宅子和教堂，比如Tositsa家族和Averoff家族，后来成了希腊的知名富商和慈善家，现在镇上最好的博物馆和画廊就是他们家族的宅邸改造的。</p>
            </Section>
            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">我从镇口停车场顺着主街往上走，两边是卖乳制品、手工织毯、银饰的小店。逛着逛着闻到一股烤羊奶的焦香味，顺着走过去是家卖Metsovone奶酪的铺子，老板切了一片递过来，烟熏味重，咸香带点羊膻。继续往前走大概十分钟到中央广场，广场不大，石板铺地，几棵老梧桐树遮出一片阴凉，中间有一座双熊雕塑，很多游客在那儿拍照，树下坐着喝希腊咖啡的老人，偶尔冒出几句我听不懂的Vlach话。从广场西侧的小巷往上走十来分钟，到了Agia Paraskevi老教堂，门脸不大，但里面十七世纪的木雕圣像屏保存得很好，银吊灯晃着暖光。教堂后面有条碎石路通向山顶城堡遗址，爬上去大概十五分钟，没有栏杆，有几处台阶窄得只容一人过。到了顶上视野豁然开朗，整个迈措翁和远处品都斯山脉尽收眼底，红瓦屋顶一层层铺下去。下山后顺着南侧小巷绕到Tositsa民俗博物馆，馆里复原了十七世纪富商家的起居室、厨房和织布作坊，木地板踩上去咯吱咯吱响，墙上的手织毯颜色饱满得不像几百年前的东西。傍晚六点多绕回广场附近找家烤肉店坐下，听着隔壁桌老头用希腊语聊天，教堂钟声偶尔响起，一天就这么慢悠悠过去了。</p>
            </Section>
            <Section title="拍照机位">
              <p className="text-gray-700 leading-relaxed mb-4">第一个机位在中央广场西侧通往Agia Paraskevi教堂的石阶底部，往上走五级台阶回头拍，能把整条石板巷和两侧石头房子的层次感全拍进去，上午9-11点顺光，墙面纹理清晰，人像出片率高。第二个机位在城堡遗址正前方的观景台，下午5-6点逆光拍，红瓦屋顶被暖金色光线勾勒出轮廓，山间开始起薄雾，氛围感超绝，手机也能拍出明信片效果。第三个机位在Tositsa民俗博物馆门口那条窄巷子，石板路有明显的高低起伏，从巷子中间蹲下来低角度拍，能把石头墙面几百年风化肌理和脚下石板反光一并收进去，适合拍细节特写。第四个机位在主街卖Metsovone奶酪的老店门口，挂着成串的烟熏奶酪和铜铃，傍晚暖黄灯光亮起来，很有乡村市场的生活感。双熊雕塑广场上的雕塑也是必拍的，上午光线打在青铜雕塑上有金属质感，背后是石头房子和梧桐树，构图很饱满。</p>
            </Section>
            <Section title="附近景点">
              <p className="text-gray-700 leading-relaxed mb-4">Agios Nikolaos修道院离镇中心大概三公里多，建于拜占庭时代，有十七世纪壁画，开车过去十分钟，走路的话下坡半小时但回来全是上坡得一个小时，真心不建议走路去。看守修道院的是一位阿姨，不会说英语但特别热情，会指着壁画比划，临走还能买她自己织的手工毯子。Aoos人工湖在镇北边大概二十分钟车程，湖面平静，倒映着山色和树林，秋天红叶映在水里特别美，绕湖走一圈大概五十分钟。Katogi Averoff酒庄也在镇外开车十分钟的地方，可以品酒参观酒窖，橡木桶的味道很重，红葡萄酒单宁偏硬但果味足，品酒加参观大概8欧元。如果时间多还可以去Politses滑雪中心，冬天滑雪夏天徒步，视野开阔能看到整条品都斯山脉。逛完迈措翁古城顺道去这些地方都很方便，开车十来分钟的事。</p>
            </Section>
            <Section title="住宿小贴士">
              <p className="text-gray-700 leading-relaxed mb-4">亲测住在老城区体验最好，晚上推开窗能看到层层叠叠的石板屋顶和远处山脊线，早上被教堂钟声叫醒的感觉挺特别的。但老城区民宿普遍有个问题，楼梯窄得吓人，有的旋转石梯只容一个人侧身过，大行李箱绝对是噩梦。我住的那家在一栋十九世纪老宅里，房间不大但窗台很宽，铺着手工织的羊毛毯，墙上挂的铜盘擦得锃亮，厚石墙隔音特别好，晚上安静得只听见风声。真心建议订房前一定看照片确认有没有电梯，没有的话想清楚自己能不能接受爬楼梯。另外老城区停车很麻烦，巷子窄得车根本进不去，得停在镇口公共停车场再走七八分钟进去。淡季11月到3月房价便宜很多，五六十欧能住到很不错的老宅民宿，旺季七八月得翻倍，提前一个月订比较稳妥。郊区有些新盖的旅馆便宜但晚上去镇上吃饭得开车或摸黑走山路，沿途没几盏路灯，不太方便。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="Tositsa民俗博物馆夏季（5月到10月）周五到周三9:00-13:00和16:00-18:00，冬季（11月到4月）只开放15:00-17:00，周四全天闭馆。Averoff画廊夏季（7月15日到9月14日）周三到周一10:00-18:30，冬季（9月15日到7月14日）10:00-16:00，周二闭馆。小镇本身和广场随时可逛，但中午14:00-17:00不少小店午休关门，买东西要错开这个时间段。城堡遗址全天开放但没有夜间照明，天黑别上去。" />
                <InfoRow icon="🎫" label="门票" value="小镇免费逛。Tositsa民俗博物馆成人票3欧元，学生半价1.5欧元，12岁以下免费，周四闭馆不开放。Averoff画廊成人票3欧元，学生和65岁以上老人2欧元，12岁以下免费，周二闭馆。Agios Nikolaos修道院不收门票，但你进去看壁画看完临走可以在门口小盒子里投一点钱当捐款，不强制。" />
                <InfoRow icon="📍" label="地址" value="Metsovo，442 00，Greece。小镇中心就是中央广场那一片，整个镇子不大，从一头走到另一头大概十五到二十分钟，所有景点都在步行范围内。Google Maps直接搜Metsovo Square就能定位到主广场。" />
                <InfoRow icon="🚌" label="交通" value="说实话迈措翁的公共交通不算特别方便，但慢慢来也能到。从雅典出发没有直达大巴，得在约阿尼纳转车。雅典KTEL Kifissou车站坐大巴到约阿尼纳一天五班，票价大概35-45欧元，车程五个半小时。到了约阿尼纳KTEL车站再转当地大巴到迈措翁，一天大概两三班，票价5-6欧元，车程五十分钟左右。踩过的小坑：约阿尼纳到迈措翁的回程大巴下午只有一班，别像我一样差点错过，到了约阿尼纳先去KTEL窗口问清楚第二天回程的准确时间。自驾的话从约阿尼纳走Egnatia Odos高速公路往东，大概五十分钟能到，路况不错但冬天山上会下雪，12月到3月一定要带防滑链。镇内全程走路就行，真心没必要打车，车可以停在镇口的公共停车场，免费。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
