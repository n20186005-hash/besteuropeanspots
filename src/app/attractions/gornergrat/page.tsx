import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈尔内格拉特 Gornergrat｜搭乘百年前齿轮齿条铁路攀登、直面马特洪峰的最佳平台 - 最佳欧洲景点',
  description: '朋友，如果你问我，在阿尔卑斯山那么多令人屏息的美景中，哪一个瞬间最具有“仪式感”，我会毫不犹豫地告诉你：是坐在那列深红色的齿轮火车里，听着“咔嗒、咔嗒”有节奏的声响，看着窗外的松林和木屋缓缓下降，而前方，那座金字塔状的、如同从地球深处直接刺向苍穹的黑色岩峰——马特洪峰，正变得越来越大，越来越清晰。那...',
}

export default function GornergratPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '戈尔内格拉特', href: '/attractions/gornergrat' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈尔内格拉特・Gornergrat・瑞士・采尔马特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你问我，在阿尔卑斯山那么多令人屏息的美景中，哪一个瞬间最具有“仪式感”，我会毫不犹豫地告诉你：是坐在那列深红色的齿轮火车里，听着“咔嗒、咔嗒”有节奏的声响，看着窗外的松林和木屋缓缓下降，而前方，那座金字塔状的、如同从地球深处直接刺向苍穹的黑色岩峰——马特洪峰，正变得越来越大，越来越清晰。那种感觉，不像是在旅行，更像是在被一列时光列车，庄严地护送去朝圣。车厢里混合着温暖的阳光、旧皮革和淡淡的松木气味，当火车攀爬过最后一段陡坡，哐当一声驶入终点站时，你推门下车，瞬间灌入肺里的，是海拔3100米处清冽、锐利得像冰刀一样的空气。
站台之外，就是一个仿佛被巨人用冰与石精心布置过的沙盘。你站定的地方叫戈尔内格拉特，脚下是灰白色的碎石。正前方，毫无遮挡，马特洪峰就那样杵在那儿，近得让你几乎能看清它岩壁上每一道风霜切割的纹理。它不像照片里那么遥不可及，它是有压迫感的，沉默的，带着君临天下的威严。你的左边，是泛着幽蓝光泽、布满深邃裂隙的戈尔内冰川，像一条被瞬间冻结的巨龙；向右望去，则是连绵不绝的、顶着皑皑白雪的群峰，罗莎峰、利斯卡姆峰……名字或许记不住，但那份磅礴，会直接烙印在你的视网膜上。耳边只有呼啸的风声，和远处冰川内部传来的、隐约如叹息般的“嘎吱”声。
你会发现，这里不只有游客。穿着全套专业登山服、背着巨大行囊的人，正仔细检查冰爪和绳索，他们的眼神聚焦在那些陡峭的山脊线上，那里是他们的战场。穿着雪板、抱着单板的年轻人，则兴奋地讨论着哪条雪道粉雪最厚。而在观景台一角的露天咖啡座，几位头发花白的本地老人，只是静静地坐着，看着那座他们看了一辈子的山峰，手里捧着一杯热气腾腾的咖啡。这一刻你突然明白，马特洪峰对于世界，是明信片；对于他们，是生活的背景、是工作的场所、是信仰的图腾。戈尔内格拉特这个平台，奇妙地连接了观光客的惊叹、登山者的梦想和当地人的日常。
最打动我的，是那种极致的“对比”与“抵达”。一列诞生于1898年的古老火车，用最传统、最机械的方式，将你送到这个充满未来感、近乎外星地貌的景观面前。人类的巧思（铁路）与自然的鬼斧神工（山峰冰川）在这里平等对话。你无需成为专业的登山家，付出艰苦的汗水和巨大的风险，就能获得站在世界之巅附近的特权视角。这种“可抵达的极致”，正是戈尔内格拉特无可替代的核心魅力。它谦逊地提供了一条路径，让每个人都能亲身感受阿尔卑斯之心那令人敬畏的跳动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，如果你问我，在阿尔卑斯山那么多令人屏息的美景中，哪一个瞬间最具有“仪式感”，我会毫不犹豫地告诉你：是坐在那列深红色的齿轮火车里，听着“咔嗒、咔嗒”有节奏的声响，看着窗外的松林和木屋缓缓下降，而前方，那座金字塔状的、如同从地球深处直接刺向苍穹的黑色岩峰——马特洪峰，正变得越来越大，越来越清晰。那种感觉，不像是在旅行，更像是在被一列时光列车，庄严地护送去朝圣。车厢里混合着温暖的阳光、旧皮革和淡淡的松木气味，当火车攀爬过最后一段陡坡，哐当一声驶入终点站时，你推门下车，瞬间灌入肺里的，是海拔3100米处清冽、锐利得像冰刀一样的空气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站台之外，就是一个仿佛被巨人用冰与石精心布置过的沙盘。你站定的地方叫戈尔内格拉特，脚下是灰白色的碎石。正前方，毫无遮挡，马特洪峰就那样杵在那儿，近得让你几乎能看清它岩壁上每一道风霜切割的纹理。它不像照片里那么遥不可及，它是有压迫感的，沉默的，带着君临天下的威严。你的左边，是泛着幽蓝光泽、布满深邃裂隙的戈尔内冰川，像一条被瞬间冻结的巨龙；向右望去，则是连绵不绝的、顶着皑皑白雪的群峰，罗莎峰、利斯卡姆峰……名字或许记不住，但那份磅礴，会直接烙印在你的视网膜上。耳边只有呼啸的风声，和远处冰川内部传来的、隐约如叹息般的“嘎吱”声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里不只有游客。穿着全套专业登山服、背着巨大行囊的人，正仔细检查冰爪和绳索，他们的眼神聚焦在那些陡峭的山脊线上，那里是他们的战场。穿着雪板、抱着单板的年轻人，则兴奋地讨论着哪条雪道粉雪最厚。而在观景台一角的露天咖啡座，几位头发花白的本地老人，只是静静地坐着，看着那座他们看了一辈子的山峰，手里捧着一杯热气腾腾的咖啡。这一刻你突然明白，马特洪峰对于世界，是明信片；对于他们，是生活的背景、是工作的场所、是信仰的图腾。戈尔内格拉特这个平台，奇妙地连接了观光客的惊叹、登山者的梦想和当地人的日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种极致的“对比”与“抵达”。一列诞生于1898年的古老火车，用最传统、最机械的方式，将你送到这个充满未来感、近乎外星地貌的景观面前。人类的巧思（铁路）与自然的鬼斧神工（山峰冰川）在这里平等对话。你无需成为专业的登山家，付出艰苦的汗水和巨大的风险，就能获得站在世界之巅附近的特权视角。这种“可抵达的极致”，正是戈尔内格拉特无可替代的核心魅力。它谦逊地提供了一条路径，让每个人都能亲身感受阿尔卑斯之心那令人敬畏的跳动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈尔内格拉特`} />
                <InfoRow label="英文名称" value={`Gornergrat`} />
                <InfoRow label="正式名称" value={`Gornergrat`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`采尔马特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最早开通的露天齿轮铁路之一，一个多世纪以来，一直是普通人近距离仰望阿尔卑斯山群峰与冰川最经典、最便捷的途径。`} />
                <InfoRow label="建筑特色" value={`位于海拔3135米处的现代观景平台与历史悠久的库尔姆酒店，与29座海拔4000米以上的山峰和戈尔内冰川构成无与伦比的360度全景画卷。`} />
                <InfoRow label="建筑风格" value={`功能性至上的现代阿尔卑斯山建筑风格，观景台设计与自然环境力求和谐，山顶的历史酒店部分保留了上世纪初的探险家驿站风貌。`} />
                <InfoRow label="文化价值" value={`它不仅是一个观景点，更是瑞士精密工程与无畏探险精神拥抱自然的象征，见证了阿尔卑斯山旅游业从精英探险走向大众体验的演变。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`戈尔内格拉特登山铁路全年运行，但班次和运营时间随季节调整。夏季（约6月至9月）首班车约早上7点从采尔马特出发，末班车从山顶返回约晚上8点，高峰时段每24分钟一班。冬季（约11月至4月）运营时间稍短，首班车约8点，末班车约下午5点，且可能因极端天气临时调整或停运。圣诞节及新年期间通常照常运营，但建议出行前务必在官网核查当日确切时刻表。`} />
              <InfoRow label="门票价格" value={`从采尔马特到戈尔内格拉特的往返车票，夏季标准票价为126瑞士法郎（约合115欧元），持有瑞士旅行通票（Swiss Travel Pass）可享受五折优惠，即63瑞士法郎。6-16岁儿童享有半价优惠，持有半价卡（Half-Fare Card）同样适用。家庭票、单程票以及包含滑雪通行证的冬季套票另有具体定价。强烈建议提前在线购票以节省排队时间，并留意包含餐食或观星活动的特别套票。`} />
              <InfoRow label="地址" value={`Gornergrat Bahn AG, Bahnhofplatz 7, 3920 Zermatt, Switzerland`} />
              <InfoRow label="交通方式" value={`从最近的大型国际机场（苏黎世或日内瓦）出发，需先乘坐火车前往采尔马特。从苏黎世机场火车站乘坐直达或换乘一次的IC列车，约3小时15分钟可达采尔马特；从日内瓦机场出发则需约3小时45分钟。瑞士铁路系统准时高效，班次频繁。抵达采尔马特火车站后，出站步行约3分钟，即可看到标志性的棕色木制戈尔内格拉特火车站。注意，采尔马特是无汽车城镇，只能通过火车或出租车抵达。建议使用瑞士联邦铁路（SBB）官方App规划火车行程并购买电子票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从19世纪末说起。那时候，阿尔卑斯山不再是令人恐惧的蛮荒之地，而逐渐成为欧洲贵族和冒险家们彰显勇气与品味的游乐场。采尔马特，这个原本默默无闻的山谷小村，因为1865年爱德华·温珀首登马特洪峰那场轰动世界又悲剧性的成功，一跃成为登山运动的“麦加”。然而，攀登马特洪峰毕竟是极少数人的游戏。更多的人，尤其是那些穿着华丽长裙、手持阳伞的淑女和绅士，他们渴望的是一种更优雅、更安全的方式，来亲近这座传奇山峰。于是，一个大胆的想法诞生了：建一条铁路，直通可以全景欣赏马特洪峰的山脊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下在几乎没有重型机械的1890年代，在陡峭的山体上修建一条齿轮铁路是多么疯狂的工程壮举。主导这条铁路建设的工程师们，面对的是破碎的岩壁、莫测的天气和艰巨的物流。铁轨需要一寸一寸地向山上推进，枕木和建材全靠人力和骡马驮运。但瑞士人的精密与执着战胜了一切。他们采用了当时先进的“阿布特式”齿轮系统，确保火车能在高达200‰的陡坡上安全攀爬。当1898年8月20日，第一列蒸汽机车喷着浓浓的白烟，成功抵达海拔3089米的终点站时（当时车站略低于现在位置），它不仅创造了一项工程奇迹，更是彻底改变了阿尔卑斯山旅游的形态。从此，山峰的壮美不再是探险家的专属。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`铁路的开通，像一把钥匙，为采尔马特和整个区域带来了繁荣。山顶很快建起了第一座旅馆——库尔姆酒店，为不畏寒冷的旅客提供简单的住宿。富豪们乘火车上来，在露台享用香槟，欣赏日落金山。更重要的是，它让冰川研究与高山气象观测成为可能。早期的科学家们可以相对方便地将仪器运送到这个绝佳的观测点。铁路也成了山区物资运输的生命线，支撑着更高处登山小屋的运营。在两次世界大战期间，这条铁路甚至扮演了战略角色，瑞士军队利用它进行高山巡逻和布防。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着技术进步，蒸汽机车在二十世纪中叶被更高效、环保的电力机车取代，旅程变得更加舒适宁静。观景平台不断扩建和现代化，但那条蜿蜒向上的铁轨，那“咔嗒咔嗒”的齿轮啮合声，却忠实地保留了下来，成为体验的一部分。上世纪后期兴起的滑雪运动，又为戈尔内格拉特赋予了新的活力，冬季它成为了滑雪爱好者的天堂门户。如今，铁路公司还推出了“星轨之旅”，在晴朗的夜晚开行特别列车，让游客能在几乎没有光污染的山顶，仰望震撼的银河，将百年前的工程奇迹与宇宙的浩瀚连接起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`回顾这一切，戈尔内格拉特铁路的历史，其实就是一部微缩的“人类如何与高山相处”的历史。从恐惧到征服，从征服到欣赏，再从欣赏到力求和谐共处。它没有试图去削弱山峰的威严，而是巧妙地搭建了一座桥梁。今天，当你乘坐这列火车时，你不仅仅是在移动，你是在参与一个延续了125年的传统，一趟穿越工程史、旅游史和自然崇拜史的旅程。车轮碾过的是铁轨，也是时光。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的戈尔内格拉特之旅，应该是一场从容不迫的“光影追逐”。强烈建议搭乘早上8点至9点之间从采尔马特发出的班车（夏季更早），这时旅行团大军尚未抵达，车厢相对空旷，清晨的阳光恰好以柔和的角度照亮马特洪峰的东壁，是拍摄“日照金山”反射在冰川湖上的绝佳时机。整个行程建议预留至少5-6小时，其中上山火车约33分钟，下山同样。在山顶的游览时间至少安排2-3小时，节奏宜慢不宜快，给自己足够的时间去发呆、去徒步一小段、去适应高海拔。这样的安排既能避开中午可能出现的云雾和人流高峰，又能让你有机会体验山顶从清晨的冷冽到午间的明朗的不同氛围。下山后，还有充裕的时间在采尔马特小镇悠闲逛逛，完美衔接。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山顶紫外线极强且风大，即使夏天也必须携带防晒霜、太阳镜、帽子和一件防风外套。高海拔地区行动请放缓节奏，避免剧烈跑跳，如有不适及时休息。下山火车在下午时段可能排队，建议预留弹性时间，或提前查询最后一班车时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在采尔马特车站旁的古老木制站厅，透过巨大的玻璃窗看着深红色火车缓缓进站，买一杯热可可带上车`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上车后尽可能选择行驶方向右侧的靠窗座位，火车开动后不久，马特洪峰便会如约出现在车窗右前方，全程陪伴`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`火车会在中途的罗腾博登站短暂停留，这里是拍摄马特洪峰倒映在利菲尔湖中的经典明信片角度的起点，别贪睡记得下车`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达终点后不要急于冲向最大的观景台，先在站台静静站立一分钟，让3100米的清冷空气和360度的山峰环绕感彻底洗礼你`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标识清晰的徒步小径向海拔略低的利菲尔湖方向走一段，换个角度仰望，你会听到冰川融水潺潺和登山靴踩在碎石上的嘎吱声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到山顶，在库尔姆酒店的全景餐厅或阳光露台，点一份用当地奶酪制作的“拉可雷特”烤奶酪，就着无敌山景慢慢享用`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观旁边的天文台与“圣山2015”展览，了解这片山川的科学与人文故事，触摸那些百年登山历史的实物遗存`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午阳光变得金黄时，乘坐火车下山，再次欣赏侧窗中不断变换角度的马特洪峰，完成一次圆满的告别巡礼`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗腾博登站下车后步行约10分钟到达的利菲尔湖畔`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚无风时分，可以拍摄马特洪峰及其倒影在碧蓝湖中的完美对称画面，使用偏光镜可以减少水面反光`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`戈尔内格拉特观景台西侧边缘`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，顺光拍摄马特洪峰与前景中蜿蜒向下的齿轮铁路轨道同框，体现人与自然的尺度对比`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从山顶向罗莎峰方向徒步约15分钟的一处无名山脊`}</h4>
                  <p className="text-sm text-gray-700">{`这里能将以库尔姆酒店为前景、背后是浩瀚冰川与连绵雪峰的壮丽全景收入镜头，适合广角`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`火车行进途中，经过森林与裸露岩壁交界处`}</h4>
                  <p className="text-sm text-gray-700">{`从车厢内向外拍摄，以车窗为画框，捕捉快速移动中马特洪峰与车窗构成的动态构图`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重山区环境，不要为了拍照而偏离指定小径或踏入脆弱的高山草甸。拍摄登山者或当地人时，请先微笑示意并获得同意。冬季雪地拍摄注意相机保暖，防止电池过快耗尽。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在采尔马特小镇中心步行可达火车站的家庭式公寓，自己烹饪一顿晚餐，清晨推开窗就能看到马特洪峰尖顶`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`预订戈尔内格拉特山顶的库尔姆酒店，这是欧洲海拔最高的酒店之一，在游客散去的傍晚和清晨，独享整片山峰与星空的私密时刻`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择采尔马特隐于山林间的五星级木屋度假村，拥有直面马特洪峰的恒温露天泳池，在雪松的香气中感受极致的阿尔卑斯奢华`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`徒步者之家`}</h4>
                  <p className="text-sm text-purple-800">{`住在高山徒步路径沿线的传统山间小屋，体验与登山者共进晚餐、分享故事的独特氛围，感受最地道的阿尔卑斯山居文化`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`采尔马特住宿价格不菲且非常紧俏，尤其是夏季和滑雪季，务必提前数月预订。山顶酒店数量极少，需要更早规划。小镇治安极好，但夜间部分小路照明有限，建议携带小手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开戈尔内格拉特很久以后，我时常想起的，不是那张最完美的马特洪峰照片，而是火车齿轮那稳定而有力的“咔嗒”声。那声音有一种奇妙的安抚力量，它似乎在说：别急，我们正在用最踏实的方式，一步一个齿地，带你上去。在这个凡事追求瞬间直达、虚拟体验的时代，这种“过程的质感”变得格外珍贵。它提醒我们，有些风景，值得你花时间，用一种古老的、略带笨拙的方式去接近。旅程本身，就是意义的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最终，戈尔内格拉特给予我的，并非征服高山的虚荣，而是一种深沉的谦卑。站在那片由冰川、岩石和万年时光构筑的宏大剧场中，人类引以为傲的铁路，细如银线；我们喧嚣的存在，顷刻间便被呼啸的山风吞没。然而，正是在这种巨大的自然威仪面前，那份由百年工程智慧所成就的、温柔的“抵达”，才显得如此动人。它告诉我们，人类或许无法征服自然，但可以怀着敬意，创造与之对话的可能。这趟旅程，是一次视觉的盛宴，更是一次心灵的校准。对于每一位不满足于匆匆一瞥，渴望理解阿尔卑斯山灵魂的旅人来说，戈尔内格拉特不是选项，而是答案。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/thun-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chur-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur Old Town</p>
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
