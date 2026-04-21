import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博伊尼采城堡 Bojnice Castle｜走进现实版童话书，斯洛伐克最浪漫的梦幻城堡 - 最佳欧洲景点',
  description: '你得穿过一片高大安静的栗子树和菩提树林，才能慢慢接近它。突然，一个拐角，它就像从最华丽的童话绘本里直接蹦出来一样，毫无预警地占据了你全部的视野。那种感觉太不真实了——奶油色与赭石色的墙体，高低错落、仿佛要刺破天空的深蓝色尖顶，还有那些爬满古老石墙的常春藤。它不是庄严到令人敬畏，而是美得让你屏住呼吸，...',
}

export default function BojniceCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '博伊尼采', href: '/destinations/slovakia' },
            { label: '博伊尼采城堡', href: '/attractions/bojnice-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博伊尼采城堡・Bojnice Castle・斯洛伐克・博伊尼采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得穿过一片高大安静的栗子树和菩提树林，才能慢慢接近它。突然，一个拐角，它就像从最华丽的童话绘本里直接蹦出来一样，毫无预警地占据了你全部的视野。那种感觉太不真实了——奶油色与赭石色的墙体，高低错落、仿佛要刺破天空的深蓝色尖顶，还有那些爬满古老石墙的常春藤。它不是庄严到令人敬畏，而是美得让你屏住呼吸，嘴角不自觉地上扬，心里有个声音在说：“原来梦里那个城堡，是真的存在的。”
走近了，空气里的味道也在变化。森林的湿土和草木清气，渐渐混入了古老石头在阳光下散发出的、略带凉意的矿物气息。你可以听到自己的脚步声在通往城堡大门的坡道上回响，混杂着远处花园里孩子们的嬉笑声，以及不知从哪个塔楼窗口飘出的、若有似无的古典音乐。这座城堡并不是孤零零的展览品，它就扎根在这个叫博伊尼采的温泉小镇的生活里。你会看到穿着婚纱的新娘在庭院里拍照，老人牵着狗在城堡公园的长椅上休息，一切都那么自然，仿佛这座梦幻般的建筑，生来就是为了给平凡日子点缀上魔法的光晕。
而它最核心的魅力，就在于这种“可实现的梦境”感。它没有维也纳美泉宫那种帝国式的磅礴距离感，也没有一些废墟城堡的苍凉忧伤。博伊尼采城堡是温暖的、生动的、充满细节的。你会幻想自己不是游客，而是受邀前来参加舞会的宾客，沿着华丽的楼梯盘旋而上，手指划过光滑的木栏杆，想象着烛光摇曳中，裙摆扫过拼花大理石地面的沙沙声。它满足了你对“城堡”一切最浪漫、最美好的想象，而且如此慷慨地呈现在你面前，邀请你走进这个故事里，成为它的一部分。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你得穿过一片高大安静的栗子树和菩提树林，才能慢慢接近它。突然，一个拐角，它就像从最华丽的童话绘本里直接蹦出来一样，毫无预警地占据了你全部的视野。那种感觉太不真实了——奶油色与赭石色的墙体，高低错落、仿佛要刺破天空的深蓝色尖顶，还有那些爬满古老石墙的常春藤。它不是庄严到令人敬畏，而是美得让你屏住呼吸，嘴角不自觉地上扬，心里有个声音在说：“原来梦里那个城堡，是真的存在的。”`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，空气里的味道也在变化。森林的湿土和草木清气，渐渐混入了古老石头在阳光下散发出的、略带凉意的矿物气息。你可以听到自己的脚步声在通往城堡大门的坡道上回响，混杂着远处花园里孩子们的嬉笑声，以及不知从哪个塔楼窗口飘出的、若有似无的古典音乐。这座城堡并不是孤零零的展览品，它就扎根在这个叫博伊尼采的温泉小镇的生活里。你会看到穿着婚纱的新娘在庭院里拍照，老人牵着狗在城堡公园的长椅上休息，一切都那么自然，仿佛这座梦幻般的建筑，生来就是为了给平凡日子点缀上魔法的光晕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最核心的魅力，就在于这种“可实现的梦境”感。它没有维也纳美泉宫那种帝国式的磅礴距离感，也没有一些废墟城堡的苍凉忧伤。博伊尼采城堡是温暖的、生动的、充满细节的。你会幻想自己不是游客，而是受邀前来参加舞会的宾客，沿着华丽的楼梯盘旋而上，手指划过光滑的木栏杆，想象着烛光摇曳中，裙摆扫过拼花大理石地面的沙沙声。它满足了你对“城堡”一切最浪漫、最美好的想象，而且如此慷慨地呈现在你面前，邀请你走进这个故事里，成为它的一部分。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博伊尼采城堡`} />
                <InfoRow label="英文名称" value={`Bojnice Castle`} />
                <InfoRow label="正式名称" value={`Bojnice Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`博伊尼采`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克最著名、访问量最大的城堡之一，被誉为“斯洛伐克的童话”。`} />
                <InfoRow label="建筑特色" value={`一座完美融合了罗马式、哥特式与浪漫主义风格的宏伟建筑，高耸于石灰岩山丘之上，拥有标志性的尖塔和错综复杂的屋顶轮廓线。`} />
                <InfoRow label="建筑风格" value={`以19世纪末20世纪初的浪漫主义重建风格为主导，融入了哥特复兴与文艺复兴元素。`} />
                <InfoRow label="文化价值" value={`不仅是一座博物馆，更是斯洛伐克国家认同的重要象征和文化活动中心，其传奇的爱情故事与建筑美学深深植根于国民情感中。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但开放时间随季节变化。夏季（5月至9月）通常为9:00-17:00；冬季（10月至次年4月）通常为10:00-15:00。城堡内部参观必须跟随导览团，英语团次每日有限，建议提前在官网查询具体时间表。每年1月通常有为期两周的维护闭馆期。城堡公园全天开放。`} />
              <InfoRow label="门票价格" value={`门票分为多种组合。仅参观公园门票约3欧元。标准导览游（包含主要大厅、小教堂、地宫）成人票约10欧元，学生及老人票约6欧元，家庭票有优惠。包含所有特别展览和宝库的“全包”票约15欧元。6岁以下儿童免费。门票建议在线提前购买，尤其在夏季周末和节假日。`} />
              <InfoRow label="地址" value={`Zámok a okolie 1, 972 01 Bojnice, Slovakia`} />
              <InfoRow label="交通方式" value={`从布拉迪斯拉发出发最为方便。从布拉迪斯拉发机场或主火车站，乘坐火车前往普列维扎火车站，车程约1.5-2小时，班次频繁。抵达普列维扎后，在站前广场换乘本地巴士（线路通常为1、2或11路），约15分钟即可直达博伊尼采小镇，城堡是终点地标，下车即见。也可以从普列维扎打车，10分钟内到达，费用约8-10欧元。自驾车可将车停在小镇外围的公共停车场，步行5分钟上山前往城堡。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起来，这片石灰岩山丘上最早出现防御工事，可以追溯到12世纪，那时还是个不起眼的木质堡垒。但真正让城堡命运发生转折的，是13世纪末，当时强大的匈牙利贵族马图什·恰克接管了这里，开始用石头重建，赋予了它最初的坚固形态。接下来的几百年里，它就像一件珍贵的传家宝，在多个显赫的匈牙利贵族家族手中流转，每个主人都根据自己的喜好添砖加瓦，哥特式的塔楼、文艺复兴式的庭院慢慢出现，但它始终保持着中世纪堡垒的实用面貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的“童话变身”，要完全归功于最后一位私人所有者——帕尔菲伯爵。这位19世纪末的超级贵族，是个不折不扣的浪漫主义者和艺术收藏狂人。传说他疯狂地爱上了一位法国贵族小姐，为了赢得美人心，他决心把这座古老的家族城堡，改造成配得上她、也能惊艳整个欧洲的梦幻宫殿。他周游列国，痴迷地研究法国卢瓦尔河谷的香波堡、德国的巴伐利亚城堡，把看到的一切最浪漫、最华丽的元素都记在心里。回到博伊尼采，他聘请了最好的建筑师和工匠，开始了浩大的重建工程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在原有中世纪核心的基础上，新的童话诞生了：高耸的哥特复兴式塔楼被竖立起来，屋顶铺上了彩色的格拉巴克瓦瓷砖，在阳光下闪闪发光；内部则被打造得极尽奢华，从法国定制的家具、威尼斯的水晶吊灯、东方来的地毯、还有伯爵从全世界搜罗来的艺术珍品和古怪收藏（包括著名的埃及木乃伊！），填满了每一个房间。他甚至为心爱的人打造了一个纯金浴缸。可惜，这个故事有个悲伤的结尾：那位法国小姐最终并没有嫁给他。但这座因爱而生的城堡，却作为他炽热情感的永恒纪念碑留存了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`帕尔菲伯爵去世后，城堡的命运依然多舛。二战期间曾被纳粹占领，战后被收归国有。1950年一场灾难性的大火几乎将它吞噬，内部珍贵的木制结构和无数收藏化为灰烬。但斯洛伐克人没有放弃他们的“童话”。一场全国性的、长达数十年的精心修复工程展开了，人们根据照片、图纸和记忆，一砖一瓦、一画一幔地将其复原。今天你看到的华丽内景，绝大部分都是这次“凤凰涅槃”的成果。它不再属于某个家族，而成为了整个斯洛伐克民族的珍宝，一个关于爱、梦想与坚韧的国家象征。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你一大早就出发，最好能在上午十点前抵达小镇。这样你有充足的时间先在城堡外围的公园和山坡下漫步，享受晨光中城堡最清新的样子，避开随后到来的旅游团人潮。整体的深度游览需要预留至少4-5小时。节奏应该是松弛有度的：先用一个小时在外围感受环境和拍照，然后参加一个约一小时的中文或英文导览团深入城堡内部，听那些生动的故事。之后，花一个多小时在城堡地宫和花园里自由探索，最后留些时间在公园的长椅上发呆，或是去小镇上找家咖啡馆坐坐。这样的安排能让你由远及近、由表及里地完整体验城堡的魔力，而不只是匆匆打卡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末和节假日人流量巨大，强烈建议提前在线预订指定语言的导览门票，否则可能需要在门口排队数小时甚至白跑一趟。参观内部必须跟随导览团，无法自由走动，请遵守规定。城堡内部分楼梯陡峭且光滑，地宫潮湿，务必穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过小镇中心色彩柔和的街道，在面包店新鲜出炉的甜香中慢慢走向那座从树梢后浮现的童话剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过横跨护城河的石桥，在桥上停留片刻，低头看水中天鹅游过城堡倒影的完美画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员踏入铺着红毯的宏伟门厅，让眼睛适应从明亮到幽深的光线变化，准备开启时空穿越。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在小礼拜堂里仰头凝视那精美的星穹状蓝色拱顶和金箔装饰，感受寂静中弥漫的虔诚气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在著名的“黄金大厅”里想象一场盛大的舞会，手指轻轻触碰那些精致繁复的木雕墙板与华丽壁炉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄蜿蜒的楼梯深入阴凉的地宫，在昏暗灯光下寻找那具拥有千年历史的埃及木乃伊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧门走出，来到城堡后方静谧的英式花园，在玫瑰丛和古老树木的环绕中喘口气，回味刚才的视觉盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后绕到城堡东侧的远景台，从这里回望城堡全景，看夕阳如何为它的尖塔和屋顶镀上温暖的金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡前方草坪远景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在城堡公园入口附近的大片草坪上，用长焦镜头压缩空间，将城堡、前景的绿树和可能入镜的天鹅一同纳入画面，构成一幅经典的童话明信片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`护城河石桥倒影`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮城堡正面时，站在石桥中央，放低机位贴近水面，捕捉城堡主体与其在水面清晰对称的倒影，注意等待天鹅或鸭子游过为画面增添生机。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡庭院仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`进入内庭后，寻找庭院中心位置，抬头垂直向上拍摄，将四周高耸的、色彩斑斓的塔楼与一角蓝天框入镜头，展现建筑的宏伟与奇幻感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`骑士厅的拱形窗框`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，当阳光斜射进骑士厅时，站在室内，以精美的石雕拱窗为画框，拍摄窗外城堡其他部分的塔楼或花园，营造“画中画”的深邃效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`后方花园仰望城堡背侧`}</h4>
                  <p className="text-sm text-gray-700">{`从英式花园的较低处，拍摄城堡背立面在茂密树丛中耸立的景象，这里游客较少，能拍到更自然、更具层次感的建筑与自然融合的照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分区域严禁使用闪光灯和三脚架（除非有特殊许可），以保护珍贵的古董和壁画。请务必遵守规定。利用室内柔和的自然光和灯光，尝试提高ISO来拍摄内部细节。航拍爱好者请注意，城堡上空属于禁飞区，未经许可是不能使用无人机的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在博伊尼采小镇中心一栋百年老房子改造的民宿里，房东老奶奶会为你准备地道的斯洛伐克早餐，从窗户就能瞥见城堡的塔尖。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`入住普列维扎市中心由古老修道院改造的精品设计酒店，感受厚重石墙与现代设计的碰撞，去城堡只需一趟短途巴士。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`疗愈放松之选`}</h4>
                  <p className="text-sm text-yellow-800">{`选择博伊尼采著名的温泉酒店，白天逛城堡，晚上泡在具有疗效的温泉水里消除疲惫，享受真正的度假节奏。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园风光隐居`}</h4>
                  <p className="text-sm text-purple-800">{`租住城堡附近村庄里的传统木屋或田园公寓，享受绝对的宁静，夜晚在星空下远眺被灯光点亮的梦幻城堡，如同私享的风景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`博伊尼采小镇非常安全宁静，但夜生活相对简单。如果喜欢更多餐馆和酒吧选择，可以住在大一些的邻镇普列维扎。夏季和圣诞市场期间住宿非常紧俏，务必提前数月预订。许多本地民宿不接待只住一晚的客人，预订时需留意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博伊尼采城堡很久之后，你脑海里可能还会反复闪现它的样子。你会发现，它打动你的，不仅仅是视觉上的惊艳。更深层的，是它像一座桥梁，连接了我们成年人内心深处那个从未消失的、相信童话和奇迹的小孩。在这个追求效率和实用的世界里，它固执地、华丽地存在着，证明着人类除了生存，还有做梦、创造美和为爱付出一切的巨大热情。帕尔菲伯爵那份可能无果的深情，最终通过石头、木材和艺术，凝结成了能够跨越时间、温暖无数陌生人的永恒礼物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来这里看看。它不仅仅是一个景点，更是一次心灵的按摩。它温柔地提醒你：世界可以不像看上去那样坚硬现实，它也可以被想象和情感塑造成童话的模样。在博伊尼采城堡的塔楼下，你会重新获得一种相信的力量——相信浪漫不死，相信梦想可建，相信那些最真挚的情感，最终都能找到属于自己的、不朽的存在方式。这份触动，足以让你在回归日常生活的轨道后，依然保有一片闪着微光的内心景观。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/regensburg-stone-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷根斯堡石桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Regensburg Stone Bridge</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beckov-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹道城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beckov Castle</p>
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
