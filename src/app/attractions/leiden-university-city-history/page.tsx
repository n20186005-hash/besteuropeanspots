import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱顿历史溯源｜自由与知识的摇篮，荷兰最古老大学城的前世今生与名人传奇',
  description: '探秘荷兰莱顿：从1574年英雄围城到伦勃朗的故乡，一座用“自由”换取大学的小城，如何成为思想革命的温床与黄金时代的灵魂。',
}

export default function LeidenUniversityCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '莱顿大学城', href: '/attractions/leiden-university-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱顿大学城・Leiden・荷兰・莱顿`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在荷兰西部，有一座将国家命运与知识之光紧密编织的城市。它的名字，<strong>莱顿</strong>，是荷兰独立战争的英雄符号，更是欧洲思想史上无法绕开的灯塔。这里没有阿姆斯特丹的喧嚣，却深藏着塑造现代世界的密码。1575年，为了表彰市民在围城战中宁死不屈的英勇，<strong>威廉一世</strong>亲王给予莱顿一个非凡的选择：免除赋税，或建立一所大学。莱顿选择了后者。自此，一座大学定义了一座城。抛开游玩攻略，走进莱顿的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱顿大学城`} />
                <InfoRow label="英文名称" value={`Leiden`} />
                <InfoRow label="正式名称" value={`Leiden`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`莱顿`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱顿的故事，远比它的大学更为古老。它的名字可能源于古罗马时期流经此地的“莱塔河”。公元九世纪左右，一座土制城堡在如今<strong>莱顿堡</strong>的山丘上建立，守护着这片河流交汇处的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡是抵御维京人袭击的前哨，也成为了聚落生长的核心。到了<strong>十二世纪</strong>，随着泥炭开采和纺织业的兴起，河畔的定居点迅速发展。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一条条运河被开凿，既用于排水造地，也构成了运输网络。羊毛纺织业让莱顿在<strong>十四世纪</strong>迎来了第一次繁荣，并获得了城市特许状。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正决定莱顿基因的，并非中世纪的商业，而是十六世纪那场席卷尼德兰的风暴。当反抗西班牙哈布斯堡王朝统治的浪潮涌起，莱顿因其战略位置和富裕程度，成为了风暴眼。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间流传，莱顿的盾徽上那对红色的狮子，并非来自贵族纹章，而是象征着围城期间市民如雄狮般赤红的、不屈的斗志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的名字“Leiden”，在荷兰语中与“带领”、“指引”一词同源。这仿佛一个历史的预言，预示它将在未来的世纪里，引领一个国家走向自由，引领一个时代步入理性。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1574年的围城战</strong>，是镌刻在莱顿骨血里的史诗。西班牙军队将这座城市重重围困，企图扼杀反抗者的精神。城内断粮，瘟疫横行，死亡阴影笼罩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但莱顿人拒绝投降。领导者<strong>威廉一世</strong>亲王试图水淹大地以解围城，但风向不利，计划一度濒临失败。传说中，全城人民在绝境中祈祷，最终狂风转向，海水涌入，荷兰舰队得以乘着小船驶过沼泽，击溃西班牙人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1574年10月3日</strong>，围城解除。一个名叫<strong>科内利斯·约普斯祖恩</strong>的小男孩，据说第一个发现了撤退的敌军，并发现了敌军遗弃的锅中仍在沸腾的胡萝卜、洋葱和肉——这成为了今日莱顿乃至荷兰庆祝“莱顿解放日”必吃的传统菜“烩菜”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争的创伤尚未抚平，嘉奖已然到来。威廉亲王信守承诺，给予莱顿选择。城市的执政者们做出了一个影响欧洲数百年的决定：<strong>建立一所大学</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1575年2月8日</strong>，荷兰王国第一所大学——<strong>莱顿大学</strong>正式诞生。它从建立之初就被赋予了“自由的堡垒”的使命。这里不审查思想，不限定信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "很快，它吸引了全欧最顶尖的学者。大学建筑散布全城，与民居、教堂、市场融为一体。<strong>学术楼</strong>的墙上，至今镌刻着一行拉丁文铭文：“自由之堡垒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一处不可磨灭的印记，是<strong>莱顿的纺织品贸易</strong>。十七世纪，随着信仰新教的南尼德兰工匠逃难至此，莱顿的纺织业，特别是呢绒和天鹅绒制造，达到了黄金巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "庞大的<strong>布匹大厅</strong>拔地而起，成为商业帝国的中心。财富涌入，催生了艺术与科学的赞助风潮。这座城市，同时被知识的逻辑与艺术的感性所浸润，为即将到来的天才辈出，铺就了温床。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步莱顿，你踩着的石板路，可能曾留下过改变世界之人的足迹。这座城市是思想家与艺术家的苗圃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是<strong>伦勃朗·哈尔曼松·凡·莱因</strong>。<strong>1606年</strong>，他出生在莱顿城西一个普通的磨坊主家庭。他的童年和青年时代都在这里度过，在<strong>莱顿拉丁学校</strong>接受启蒙，并最早在本地画家手下学艺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱顿的市井生活、运河光影、乃至他父亲磨坊的风车，都成为他最初观察世界的窗口。虽然他的辉煌在阿姆斯特丹绽放，但莱顿孕育了他对光线戏剧性运用的最初敏感。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的早期莱顿时期作品《石桥风云》中，那束穿透云层照亮风景的戏剧性光线，已初显大师端倪。艺术史家常感慨，是莱顿的运河与天空，教会了伦勃朗如何“雕刻”光线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为纯粹的“莱顿产物”，是哲学家<strong>巴鲁赫·德·斯宾诺莎</strong>。<strong>1632年</strong>，他出生于阿姆斯特丹一个葡萄牙犹太移民家庭，但他的思想成形期与莱顿紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因异端思想被犹太社区驱逐后，斯宾诺莎曾一度隐居在莱顿附近的莱茵斯堡。更重要的是，他在<strong>莱顿大学</strong>浸染了当时最前沿的科学与哲学思想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大学内的<strong>植物园</strong>是欧洲最早的科学花园之一，种植着来自东印度公司的奇花异草。这里的实证精神，冲击着经院哲学。斯宾诺莎深受笛卡尔学派学者（许多在莱顿任教）的影响，但他走得更远。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他匿名为莱顿大学的学生，私下授课，传播其理性主义思想。他的巨著《伦理学》中那种用几何学方式证明上帝与自然同一的冰冷而炽热的逻辑，其氛围正源自莱顿这座崇尚自由探究的学术之城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱顿大学还庇护了另一位“危险人物”：<strong>勒内·笛卡尔</strong>本人。尽管他的主要活动在法国和瑞典，但他于<strong>1630年代</strong>多次访问并短期居住在莱顿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，他找到了相对宽松的出版环境。他与莱顿的教授们通信、辩论，他的思想在此发酵、传播。可以说，莱顿为近代哲学革命提供了关键的避难所和讲堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了他们，还有解剖学先驱<strong>安德烈亚斯·维萨里</strong>曾在此学习（尽管大学当时在鲁汶），光学天才<strong>克里斯蒂安·惠更斯</strong>在此深造。莱顿的空气里，飘散着一种敢于质疑、勇于构建的独特气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市仿佛一个精密的孵化器，用它的自由、财富与宁静，将聪慧的头脑催化为照亮人类文明的火炬。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莱顿最动人的传说，始终围绕着那场决定命运的围城。其中一个故事，关乎勇气与代价。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在围城最艰苦的时刻，市长<strong>范德沃夫</strong>面临着西班牙将领的劝降。对方承诺，只要打开城门，就能保全全城性命。市长回到市政厅，召集了饥饿虚弱的市民代表。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他拿出一把刀和一块粗糙的面包。他说：“我们可以选择像狗一样活着，吃掉这块投降的面包。或者，我们可以选择战斗到底，哪怕最后需要用这把刀吃掉我们自己的手臂来充饥。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "市民们沉默片刻，然后发出了坚定的吼声。他们选择了后者。这个“面包与刀”的传说，成为了莱顿坚韧精神的永恒象征，至今被纪念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更显温情，与城市的地标<strong>哈勒姆门</strong>有关。据说围城期间，守军发现一个莱顿小男孩多次偷偷溜出城门，前往敌营方向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "起初他们怀疑他是间谍，直到一次将他抓获。男孩哭诉，他的母亲病重，唯一的药草生长在远处的河堤，他必须去采摘。守军队长被其孝心感动，反而派人保护他完成了采摘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事或许虚构，但它传递了围城中未曾泯灭的人性与希望。这些传说，与真实的历史交织，让莱顿的每一块城墙砖石，都仿佛有了呼吸与低语。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的莱顿，是一座活着的博物馆。它的历史并非封存在玻璃柜中，而是在运河的倒影里，在大学讲堂的辩论声中，在寻常百姓庆祝“解放日”的烩菜香气里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂莱顿，便是读懂荷兰黄金时代的一把钥匙。它告诉你，辉煌并非凭空而来，而是源于对自由视死如归的捍卫，和对知识不计功利的追求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里见证了近代国家的诞生，孵化了启蒙思想的火种，滋养了震撼世界的艺术。它不张扬，却底气深厚。每一座古老的建筑立面，都可能藏着一间世界顶级的实验室；每一家惬意的咖啡馆，都可能坐着一位诺贝尔奖得主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里旅行，是与理性、勇气和创造力的一次直接对话。莱顿提醒我们，最伟大的风景，往往是人类精神曾经达到的高度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hoorn-netherlands" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍伦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hoorn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gouda-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    豪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">豪达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gouda-cheese-market" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    豪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">豪达奶酪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouda</p>
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
