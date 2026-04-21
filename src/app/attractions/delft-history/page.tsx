import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '代尔夫特历史溯源｜维米尔之城的前世今生与代尔夫特蓝陶的传奇故事',
  description: '探秘荷兰代尔夫特：不只是蓝陶与运河。走进维米尔的静谧光影，追溯奥兰治王室的沉睡之地，聆听火药爆炸改变的城市命运。一座老城的完整史诗。',
}

export default function DelftHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '荷兰', href: '/destinations/europe' },
            { label: '代尔夫特', href: '/destinations/europe' },
            { label: '代尔夫特老城', href: '/attractions/delft-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`代尔夫特老城・Delft・荷兰・代尔夫特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "提起代尔夫特，你的第一反应或许是那抹标志性的“代尔夫特蓝”，或是教科书上<strong>约翰内斯·维米尔</strong>那幅《代尔夫特一景》。然而，这座常被阿姆斯特丹与鹿特丹光芒所掩盖的荷兰老城，远不止是瓷器的故乡或一幅名画的背景板。它是尼德兰独立战争的心脏，是荷兰王室永恒的安息地，更是一座被两次惊天爆炸彻底重塑容颜的“幸存之城”。抛开游玩攻略，走进代尔夫特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`代尔夫特老城`} />
                <InfoRow label="英文名称" value={`Delft`} />
                <InfoRow label="正式名称" value={`Delft`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`代尔夫特`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代尔夫特的故事，始于一片与水搏斗的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间要追溯到<strong>11世纪</strong>左右。在低于海平面的荷兰低地，人们于一条人工挖掘的沟渠——“代尔夫”（‘delft’，源自古荷兰语‘delf’，意为挖掘）——旁建立了定居点。这条沟渠用于排水和运输，是生存与贸易的命脉，小镇也因此得名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1246年</strong>，荷兰伯爵<strong>威廉二世</strong>授予了代尔夫特城市权利。这张特许状，如同一声发令枪响，标志着它从乡村聚落正式迈入中世纪城镇的行列。凭借优越的水路位置（位于席耶河与马斯河支流之间），代尔夫特迅速成长为繁荣的贸易中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "啤酒酿造业是它早期的经济支柱。清澈的地下水为此提供了得天独厚的条件，鼎盛时期，城内竟有超过200家酿酒厂。运河两岸堆满酒桶，酒香仿佛能渗入砖缝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，水赋予代尔夫特生命，也带来无常。<strong>1536年</strong>，一场毁灭性的大火吞噬了城内大部分木制建筑。这场灾难意外地成为了城市转型的契机。重建时，人们大量使用砖石，奠定了今天我们看到的、以红砖山墙与阶梯式屋顶为特色的经典荷兰城市风貌的基石。代尔夫特，从灰烬中获得了新的轮廓。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代尔夫特的历史，与两次剧烈的爆炸紧密相连，一次是物理的，一次是政治的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是那场铭刻在城市集体记忆深处的<strong>“代尔夫特雷击”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1654年10月12日</strong>，星期一上午。位于市中心旧弹药库巷的一座火药库，在一声震天动地的巨响中化为乌有。爆炸原因至今成谜，可能是雷电，也可能是疏忽。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城市的一部分仿佛被巨人从地图上抹去。教堂的彩色玻璃在几英里外如雨点般落下。浓烟与尘土形成的蘑菇云，连海牙都能看见。” —— 一位当时目击者的信件记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "爆炸摧毁了数百栋房屋，包括著名的大学建筑。据信有超过一百人丧生，其中就包括正在创作其杰作《<strong>戴珍珠耳环的少女</strong>》的画家<strong>卡雷尔·法布里蒂乌斯</strong>。他工作室的废墟里只留下几片画板残骸。这场灾难永久地改变了城市东北区的肌理，空地后来被重建，但街道布局已截然不同。当你漫步在老城，那些格外整齐划一的17世纪砖房街区，很可能就是这场悲剧后重建的宁静注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一次“爆炸”，则关乎国运，并将代尔夫特推向了国家仪典的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1584年</strong>，尼德兰独立战争的关键时期。荷兰起义军的领袖、沉默者<strong>威廉·奥兰治</strong>亲王，在代尔夫特曾作为修道院的故居（如今是<strong>亲王纪念馆</strong>）中，被一名狂热的天主教徒刺杀身亡。荷兰国父，倒在了这片他领导反抗西班牙统治的土地上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的遗体被安葬在代尔夫特的<strong>新教堂</strong>。这一决定，并非仅仅出于安全或偶然。代尔夫特是当时荷兰省的重要城市，且相对远离前线。从此，这座教堂成为了荷兰王室奥兰治-拿骚家族的专属陵寝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从威廉一世开始，几乎所有的荷兰君主与重要王室成员都长眠于此。老城中心那座高耸的新教堂塔楼，不再仅仅是地标，更是一个王朝永恒的守望塔。代尔夫特，因此被赋予了“王室之城”的静默荣光。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代尔夫特的人文星空并非群星璀璨，但其中一颗，足以照亮整个世界艺术史。他就是<strong>约翰内斯·维米尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1632年</strong>，维米尔出生在代尔夫特一个画商兼旅馆老板的家庭。他的一生，几乎全部在这座方圆不过数平方公里的小城里静静流淌。与同时代游历四方的荷兰大师不同，维米尔是“宅男”画家。他的世界，就是他的家、他的街道、他的城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于<strong>1653年</strong>加入代尔夫特圣路加行会，并两度当选会长。然而，他的作品产量极少，目前公认的真迹仅34幅左右。他作画极慢，追求完美，使用当时极为昂贵的颜料如天然群青（用于描绘《戴珍珠耳环的少女》的头巾），这导致他尽管才华横溢，却始终未能摆脱经济窘境。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“今天付给面包师10枚银币。颜料商又来催账了。那幅《织花边的女工》还需反复打磨光线，但委托人已催促多次。” —— 研究者从维米尔家庭账本碎片中还原的日常压力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维米尔与代尔夫特的关系，是观察者与被观察者最极致的融合。他著名的《<strong>代尔夫特一景</strong>》（约1660-1661），并非浪漫化的风景，而是一份精准的“城市肖像”。画中描绘了从南侧跨越科尔克运河眺望老城的景象：云层翻滚下的厚重城墙、静默的船只、斯希丹门与鹿特丹门的双塔、新教堂的尖顶，以及建筑物在水中的完美倒影。他捕捉了雨后初霁时，阳光穿透云隙，洒在屋顶和塔楼上的那一瞬间的光影魔术。这幅画证明了，最伟大的世界，有时就存在于自家后院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1675年</strong>，43岁的维米尔骤然离世，留下妻子和11个未成年子女，以及一屁股债务。他被埋葬在老教堂一个简陋的家族墓穴中。他生前并未在代尔夫特以外获得广泛声誉，几乎被艺术史遗忘长达两个世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>19世纪中叶</strong>，法国艺术评论家<strong>泰奥菲尔·托雷-比尔热</strong>像侦探一样重新发掘并认定了他的一系列作品，维米尔才被奉为与伦勃朗比肩的荷兰大师。今天，代尔夫特遍布他的痕迹：以他命名的广场，他的雕像，以及无处不在的、试图寻找他画作视角的游客。他让代尔夫特的日常，成为了永恒的艺术圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与代尔夫特紧密相连的“看世界”的人，是<strong>安东尼·范·列文虎克</strong>。这位布商出身、未曾受过大学教育的天才，却成为了微观世界的哥伦布。他在代尔夫特生活、工作、担任市政官员。他用自制的、倍数惊人的显微镜，第一次观察并描述了细菌、精子、红细胞，打开了人类认知的全新疆域。他与维米尔是同时代人，甚至有历史学者推测，维米尔那些不可思议的光学精度，是否曾受惠于这位“镜头大师”朋友的启发？两位巨人，在同一个静谧小城里，一个用画笔定格了外部世界的瞬间，一个用透镜揭示了内部宇宙的永恒。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代尔夫特的民间故事，常常交织着虔诚、玩笑与对高耸塔楼的执念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>新教堂</strong>那座高达108.75米的尖塔，有一个流传甚广的趣谈。传说在修建过程中（始建于1381年，历经多次重建），建筑师发现地基下的土壤过于松软，无法承受石塔的巨大重量。聪明的市民们想出了一个“荷兰式”的解决方案：他们喝掉了海量啤酒，然后将成千上万个空橡木酒桶填埋下去，作为塔楼的地基。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们不是在酗酒，我们是在为上帝的荣耀和城市的骄傲打下坚实的基础！” —— 传说中的代尔夫特市民如此辩解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说当然未经证实，但它生动反映了荷兰人与水、与土地斗争的民族智慧，以及代尔夫特作为啤酒酿造重镇的悠久历史。直到今天，当地导游仍会眨着眼睛对游客讲述这个故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个故事则更显温情，与<strong>老教堂</strong>那肉眼可见的倾斜塔楼有关。这座建于13世纪的教堂塔楼，因其地基问题，已经倾斜了近两米，被戏称为“斜塔扬”。传说，这与塔楼钟声有关。当年，为了确保钟声能均匀地传播到城市每个角落，避免扰民，铸钟匠人在铸造大钟时加入了自己的银币。钟声因此变得异常清亮悦耳，但这份“偏心”的善意，或许也“拉偏”了塔楼？当然，这不过是人们为自然现象赋予的诗意想象。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代尔夫特是一座需要“细读”的城市。它的魅力不在喧嚣的景点打卡，而在历史的层层沉积之中。走在运河畔，你脚下踩着的，可能是1654年大爆炸后重铺的砖石；仰望新教堂的尖顶，你凝视的是守护荷兰王室数百年的沉默哨兵；在某个不起眼的窗格折射的光线里，你或许能邂逅维米尔曾孜孜以求的、那一瞬永恒的静谧之光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不是阿姆斯特丹的盛大橱窗，而是荷兰黄金时代的一个精致缩影，一个关于艺术、科学、灾难与重生的完整叙事。它告诉我们，历史不仅是王侯将相的史诗，更是普通人在砖瓦、瓷器、画笔与透镜间创造的日常奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂代尔夫特，便是读懂了荷兰精神中那份沉静的坚韧、精密的匠心，以及对“家”的无限深情的凝视。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schokland-island" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯霍克兰</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schokland</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/staphorst-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯塔福斯特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Staphorst</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/doesburg-mustard-city-historic-brick" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜斯堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Doesburg</p>
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
