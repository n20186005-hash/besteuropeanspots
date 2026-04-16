import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '旺多姆广场 Place Vendôme｜巴黎奢华之心与历史柱的完美交融 - 最佳欧洲景点',
  description: '第一次走到旺多姆广场，那种扑面而来的奢华与规整感，简直像走进了另一个巴黎。这里没有蒙马特的文艺随性，也没有拉丁区的热闹喧嚣，取而代之的是一种沉静、古典又极度精致的气场。广场呈完美的八角形，四周环绕着清一色的新古典主义建筑立面，底层全是闪闪发光的顶级珠宝店和高级酒店的门面。最震撼的是广场中央那根高耸入...',
}

export default function PlaceVendomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '旺多姆广场', href: '/attractions/place-vendome' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">旺多姆广场</h1>
          <p className="text-xl text-gray-600 mb-4">Place Vendôme</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">法国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">巴黎</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一次走到旺多姆广场，那种扑面而来的奢华与规整感，简直像走进了另一个巴黎。这里没有蒙马特的文艺随性，也没有拉丁区的热闹喧嚣，取而代之的是一种沉静、古典又极度精致的气场。广场呈完美的八角形，四周环绕着清一色的新古典主义建筑立面，底层全是闪闪发光的顶级珠宝店和高级酒店的门面。最震撼的是广场中央那根高耸入云的旺多姆圆柱，青铜螺旋浮雕在阳光下闪着暗金色的光，拿破仑的故事仿佛就刻在上面。空气中弥漫着一种混合了昂贵香水、咖啡香和历史尘埃的味道，耳边是豪车低沉的引擎声和皮鞋踩在石板路上的清脆回响。在这里，你更能感受到巴黎作为世界时尚与奢华之都的那一面，庄严又迷人。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">广场为开放式公共空间，随时可进入。需要注意的是，广场中央的旺多姆圆柱（Colonne Vendôme）仅可外部参观，不对外开放攀登。广场周边的建筑多为私人财产（如丽兹酒店、各大珠宝工坊），游客通常只能欣赏其宏伟的外观。部分高级珠宝店允许预约参观，但通常有严格的安保和着装要求。广场在夜间有灯光照明，夜景别有一番风味。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">旺多姆广场的故事，可以说是法国权力与荣耀变迁的一个缩影。它的诞生要追溯到太阳王路易十四时代。1699年，国王为了彰显王权，决定建造一个宏伟的广场，并以他的曾祖父——旺多姆公爵凯撒·德·波旁的名字命名。最初的设计雄心勃勃，打算为王室成员和贵族们建造宅邸，但工程一度因资金问题停滞。直到18世纪初，在建筑师朱尔斯·哈杜安-曼萨尔的监督下，广场才最终成型，那些整齐划一、带有拱廊的立面，定义了巴黎新古典主义建筑的早期典范。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，广场最著名的标志——那根44米高的旺多姆圆柱，则要等到拿破仑时代。1806年，为了纪念奥斯特里茨战役的胜利，拿破仑下令用缴获的1200门大炮熔铸成青铜，包裹在石柱表面，并雕刻上描绘那场战役的螺旋形浮雕。柱顶最初立着拿破仑本人穿着罗马皇帝服饰的雕像，这野心勃勃的形象不言而喻。随着政权的更迭，柱顶的雕像也命运多舛——波旁王朝复辟后换成了百合花徽，路易·菲利普时期又换成了拿破仑的三角帽和大衣雕像，最后在1871年巴黎公社时期，整个柱子曾被革命者拉倒，认为它是“军国主义和虚假荣耀的象征”。不过仅仅几年后，它又被原样重建了起来。如今柱顶立着的是拿破仑的另一个雕像。漫步广场，抚摸那些冰凉的青铜浮雕，你能真切地触摸到法国近三百年来跌宕起伏的历史温度。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览旺多姆广场以漫步和观赏建筑外观为主，建议用时30-60分钟。可以从北侧的卡普辛大街（Rue de la Paix）入口进入广场，顺时针或逆时针绕行广场一周，欣赏建筑立面与精品店橱窗，最后在中央圆柱处驻足细看。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从和平街入口步入广场，感受八角形广场的对称与宏伟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  顺时针漫步，欣赏丽兹酒店（Hôtel Ritz）的传奇门面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  浏览沿街顶级珠宝店（如尚美、宝诗龙）的奢华橱窗。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  走近广场中央的旺多姆圆柱，观察其精美的螺旋浮雕。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  从不同角度仰望圆柱，并与背后的古典建筑合影。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从南侧出口离开，前往杜乐丽花园或歌剧院方向。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">广场地面为石板路，建议穿着舒适的步行鞋。无需专门导航，广场布局一目了然。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **广场西北角**：最佳拍摄时间为晴朗的下午，阳光能照亮圆柱和建筑立面。以圆柱为前景，拍摄其与后方整齐建筑群的纵深关系，构图极具几何美感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **丽兹酒店对面**：清晨人少时拍摄，可以将旺多姆圆柱与传奇的丽兹酒店门面一同纳入镜头，捕捉巴黎奢华生活的经典画面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **和平街入口处**：利用街道的延伸感，将目光引导至广场中央的圆柱，能拍出很有故事感的街景照片。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重周边店铺和酒店的隐私，避免对着店内或酒店入口长时间拍摄。使用广角镜头可以更好地捕捉广场的全貌。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **奢华之选**：入住广场上的巴黎丽兹酒店，体验海明威、香奈儿曾居住过的传奇。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **高端之选**：选择广场周边第一区的五星级酒店，如杜乐丽花园附近的酒店，步行即可到达。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **性价比之选**：住在第二区或第九区，靠近老佛爷百货的区域，搭乘地铁或步行十多分钟可至广场。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **特色之选**：选择塞纳河左岸拉丁区的精品酒店，感受不同风格的巴黎，通过地铁轻松往来。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">旺多姆广场位于巴黎核心一区，周边住宿价格普遍较高，但交通和购物极其方便。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">旺多姆广场就像一枚精心切割的钻石，镶嵌在巴黎的心脏。它不仅仅是奢华品牌的聚集地，更是一座露天的历史博物馆。站在那根承载了无数故事的青铜柱下，你能同时感受到帝国的野心、艺术的追求和时尚的脉动。来这里，不一定要消费，只需带着眼睛和心，静静感受这份独属于巴黎的、庄严而璀璨的浪漫。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共广场，全天24小时开放。广场中央的纪念柱区域可随时参观，但无法攀登。" />
                <InfoRow icon="🎫" label="门票" value="免费参观广场及外部区域。" />
                <InfoRow icon="📍" label="地址" value="Place Vendôme, 75001 Paris, France" />
                <InfoRow icon="🚌" label="交通" value="从巴黎戴高乐机场出发：乘坐RER B线至Châtelet - Les Halles站，换乘地铁1号线至Tuileries站或Concorde站，步行约5-10分钟可达。全程约50-60分钟。
从巴黎北站出发：乘坐地铁7号线至Opéra站，步行约5分钟可达。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
