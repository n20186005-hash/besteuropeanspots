import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔马格罗历史溯源｜黄金剧院与骑士团的尘封往事，西班牙冷门遗产的前世今生',
  description: '探秘西班牙“黄金时代”活化石。深入阿尔马格罗，揭开全球唯一完整运作的露天古典剧院传奇，与卡拉特拉瓦骑士团治下小镇的百年沉浮。',
}

export default function AlmagroMedievalTheaterHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '雷阿尔城', href: '/destinations/europe' },
            { label: '阿尔马格罗', href: '/attractions/almagro-medieval-theater-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔马格罗・Almagro・西班牙・雷阿尔城`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拉曼查平原的腹地，时间仿佛被施了魔法。阿尔马格罗，这座小镇的名字与一位充满争议的殖民者相连，而其灵魂，却镌刻在一座于粮仓中沉睡了几个世纪的露天剧院里。它是西班牙“黄金时代”戏剧唯一的、仍在呼吸的“活化石”，也是一方被中世纪骑士团铁律所塑造的土地。抛开游玩攻略，走进阿尔马格罗的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔马格罗`} />
                <InfoRow label="英文名称" value={`Almagro`} />
                <InfoRow label="正式名称" value={`Almagro`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`雷阿尔城`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿尔马格罗的诞生，与伊比利亚半岛上基督教与伊斯兰势力长达数个世纪的拉锯战紧密相连。其地名本身便是一把钥匙：<strong>“Al-magra”</strong>，源于阿拉伯语，意为“红色的黏土”。这直指当地独特的赭红色土壤与地质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "13世纪初，随着基督教王国向南“再征服”的步伐，这片土地从摩尔人手中被夺取。真正赋予小镇雏形与灵魂的，是强大的军事修会——<strong>卡拉特拉瓦骑士团</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1222年，骑士团将此地确立为其主要据点之一。他们的统治并非仅仅为了战争，更是一种缜密的领土管理与殖民。骑士团在此建立行政中心，规划城镇格局，并大力发展农业与畜牧业。小镇的主广场——<strong>市长广场</strong>，其最初的矩形格局与廊柱设计，便深深烙印着骑士团务实、秩序至上的精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座从军事前沿成长起来的定居点，其最初的“用途”即是作为基督教王国巩固边疆、管理产业的堡垒与行政枢纽。它的名字从阿拉伯语的自然特征，过渡为基督教统治下的地理标识，默默诉说着这片土地上权力与文化的更迭。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿尔马格罗的历史并非由连绵的战火写就，而是被两个看似迥异，却深刻定义其面貌的力量所雕刻：<strong>宗教裁判所的严酷</strong>与<strong>黄金时代戏剧的辉煌</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16世纪，小镇因骑士团产业与羊毛贸易而富庶。正是这财富，引来了<strong>西班牙宗教裁判所</strong>在此设立常设法庭。那座朴素的<strong>宗教裁判所宫殿</strong>（Palacio de los Fúcares）看似低调，内部却曾裁决过无数“异端”的命运。它的存在如同一片阴云，让小镇在虔诚与恐惧中前行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，就在同一时期，另一股截然不同的力量悄然萌发。约在1628年，一位名叫<strong>莱昂纳多·德·奥万多</strong>的富商，为了给季节性涌入的纺织工人提供娱乐，在自家产业的附属建筑——一个旧粮仓里，奇迹般地建造了一座剧院。这便是传奇的<strong>阿尔马格罗露天剧场</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们被告知，在这个用于存放小麦的厅堂里，将上演洛佩·德·维加的喜剧……墙壁被挂毯覆盖，舞台上方的天穹画着诸神与云彩。”——某位17世纪观众的旅行札记片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "剧院在鼎盛时期后，竟被逐渐遗忘，沦为仓库。直到1954年，工人在修缮建筑时，意外凿开一面墙，<strong>尘封的巴洛克观众席、画布天穹和松木舞台重见天日</strong>。这不仅是考古发现，更是一次历史的“复活”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，每年七月在此举办的<strong>古典戏剧节</strong>，让卡尔德隆、洛佩·德·维加的作品在原汁原味的舞台上演。砖石与木料中回响的台词，让这座小镇从宗教的沉寂，一跃成为西班牙文化遗产中最鲜活的心脏。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 迭戈·德·阿尔马格罗：名不副实的“缔造者”与征服者的悲剧</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇最著名的“冠名者”，却是一位从未在此长久居住的过客。<strong>迭戈·德·阿尔马格罗</strong>（约1475-1538），一位出身卑微的私生子，在美洲征服史上与皮萨罗齐名。然而，历史开了一个玩笑：他极可能并非出生于此地，“阿尔马格罗”只是他随了故乡的名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的生涯是征服时代贪婪与残酷的缩影。在秘鲁，他与皮萨罗并肩作战，又因分赃不均反目成仇。1535-1537年，他率队进行了一次史诗般艰苦却徒劳的远征，深入智利，寻找另一个“秘鲁”，最终只带回疲惫与失望。与皮萨罗兄弟的权力斗争最终使他被捕，并在库斯科被处决。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇与他真实的联系，更多来自其子。小迭戈·德·阿尔马格罗在父亲被处决后曾逃回西班牙，可能短暂居于此地，并试图利用家族的财富与名望施加影响。但这段联系短暂而暗淡。尽管如此，<strong>主广场上那座身披铠甲、目光望向远方的雕像</strong>，依然将这座内陆小镇与浩瀚太平洋彼岸的征服、黄金与血腥传奇性地捆绑在一起，成为一个充满矛盾的历史注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 弗朗西斯科·德·阿尔塞：本土人文主义者的星光</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与张扬的征服者不同，<strong>弗朗西斯科·德·阿尔塞</strong>（1534-1593）代表了阿尔马格罗另一种精神传承。他是一位本土出生的人文主义者、诗人与历史学家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是“萨拉曼卡派”的重要成员，精通拉丁语、希腊语与希伯来语。他的杰作《帝王记》试图以古典史诗的笔法描绘哥特人统治西班牙的历史，展现了文艺复兴思潮如何在这个骑士团小镇中扎根发芽。他并非仅仅埋头故纸堆，也曾担任过公证人，深度参与小镇的公共生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故居至今仍保存在老城之中，虽不显赫，却是小镇拥有自身学术血脉的 quiet testimony（安静证明）。在征服者的巨像阴影下，阿尔塞这样的人物提醒我们，阿尔马格罗的底蕴，也同样来自对知识与古典文化的默默追寻。他与黄金时代剧院的的精神是相通的——那是对言语、修辞与人性深度的崇尚。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔马格罗，历史与传说在街角交织。最著名的传说围绕<strong>市长广场</strong>上那些独特的绿色窗棂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中一个流传甚广的故事与<strong>宗教裁判所</strong>的威严有关。据说，在一次公开的“信仰行动”（即异端审判大会）中，一名被指控的犯人坚定地宣称自己无罪，并向上天呼求证明。突然，广场一侧建筑上一根沉重的铁制窗棂无故松脱落下，却<strong>悬在半空，既未坠落伤人，也未能被放回原处</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一幕被民众视为神圣干预的征兆，犯人最终被赦免。而那扇窗户，从此被永远固定为打开的样子，窗棂也被漆成醒目的绿色，以资纪念。这个传说，无疑为宗教裁判所那段压抑的历史，添加了一抹充满人性希望的、戏剧性的色彩。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“那铁栏在空中静止，仿佛被无形的手握住。所有人都屏住了呼吸，连法官也面色苍白。自那以后，那扇窗便再也关不上了。”——当地老人口中的传说版本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这抹“阿尔马格罗绿”，如今成了小镇的标志色彩，装饰着广场四周的窗扉。它从一个残酷司法机构的背景中浮现，化为了奇迹、正义与生命力的民间象征，生动地诠释了历史如何在人民的记忆中转化与延续。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在阿尔马格罗，你踏足的不仅是石板路，更是一层层叠加的时间光谱。这里没有熙攘的游客大军，只有深巷中回荡的寂静与主广场廊柱下流动的光影。它的魅力不在于地标罗列，而在于那种<strong>整体性的、沉浸式的历史体验</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从骑士团规整的网格街道，到宗教裁判所宫殿冰冷的石墙，再到露天剧院里那声穿越四百年的开场白，阿尔马格罗将中世纪的神权秩序、文艺复兴的人文渴望与巴洛克的艺术激情，浓缩在方寸之间。它告诉你，西班牙的“黄金时代”并非遥不可及的教科书概念，而是一种仍可触摸、可聆听的当下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这座城，便是读懂一段被主流历史叙事边缘化，却无比完整、自洽的欧洲小镇生命史。它提醒我们，真正的遗产，是依然在呼吸、在演出的生活本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/osuna-andalusia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥苏纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Osuna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albarracin-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔瓦拉辛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albarracín</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/covadonga-shrine-sanctuary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科瓦东加（隐没在皮科斯欧洲山脉中的圣母朝圣山洞与大教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Covadonga</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
