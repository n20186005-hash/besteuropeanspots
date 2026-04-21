import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '达罗卡深度旅游攻略：探秘西班牙峡谷中世纪的摩尔与基督教交融要塞',
  description: '探索西班牙达罗卡(Daroca)深度游攻略。这座被4公里宏伟城墙环绕的中世纪要塞，是摩尔与基督教文化交融的活化石。获取门票、交通及一日游打卡全指南。',
}

export default function DarocaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '萨拉戈萨', href: '/destinations/spain' },
            { label: '达罗卡', href: '/attractions/daroca' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`达罗卡・Daroca・西班牙・萨拉戈萨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了巴塞罗那和马德里的人潮，今天这份 达罗卡私藏旅游攻略 ，就带你躲进西班牙阿拉贡腹地的一个惊天秘密里。想象一下：车子在荒凉的红土高原上行驶，突然，一道深邃的峡谷裂开大地，一座完整的、蜂蜜色的中世纪城池，像一条沉睡的巨龙，紧紧盘踞在悬崖与城墙之中。这就是达罗卡。它不是什么热门打卡地，而是一个被时间遗忘的、活着的博物馆。作为你的专属向导，这份 自由行指南 将带你穿过它那史诗般的四公里城墙，走进摩尔商人与基督教骑士共同书写的传奇街道，并告诉你如何避开所有旅行团，独享这份穿越千年的宁静与震撼。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了巴塞罗那和马德里的人潮，今天这份 达罗卡私藏旅游攻略 ，就带你躲进西班牙阿拉贡腹地的一个惊天秘密里。想象一下：车子在荒凉的红土高原上行驶，突然，一道深邃的峡谷裂开大地，一座完整的、蜂蜜色的中世纪城池，像一条沉睡的巨龙，紧紧盘踞在悬崖与城墙之中。这就是达罗卡。它不是什么热门打卡地，而是一个被时间遗忘的、活着的博物馆。作为你的专属向导，这份 自由行指南 将带你穿过它那史诗般的四公里城墙，走进摩尔商人与基督教骑士共同书写的传奇街道，并告诉你如何避开所有旅行团，独享这份穿越千年的宁静与震撼。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`达罗卡`} />
                <InfoRow label="英文名称" value={`Daroca`} />
                <InfoRow label="正式名称" value={`Daroca`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`萨拉戈萨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`达罗卡的历史，就是一部浓缩的伊比利亚半岛边境史诗。公元8世纪，摩尔人发现了这个易守难攻的峡谷要冲，筑起最初的堡垒，并赋予它名字“Daroca”（可能与阿拉伯语有关）。它迅速成为连接半岛南北的重要商贸节点。12世纪，阿拉贡国王阿方索一世从摩尔人手中夺取此地，但它并未就此“基督教化”，而是成为了一个罕见的“穆德哈尔”文化熔炉——信仰基督的统治者，允许留下的穆斯林工匠和商人继续居住、工作。这种奇特的共存，让达罗卡在随后几百年里繁荣无比，城墙不断扩建，最终达到了惊人的四公里，被誉为“西班牙城墙最长的城市之一”。它不仅是军事要塞，更是文化、商业和宗教交流的十字路口，这种复杂的身份，在欧洲中世纪城镇中独具一格。`} />
                <InfoRow label="建筑特色" value={`达罗卡的建筑是一场关于石头、光影与地形的宏大交响乐。最震撼的无疑是那道 长达四公里的城墙。它不是平整的一块，而是随着山脊的起伏而蜿蜒，像给山体镶上了一条巨大的、粗粝的石质绶带。走近看，墙体的石头是温暖的土黄色和赭石色，在西班牙炽烈的阳光下，会反射出蜂蜜般的光泽。城墙上有数十座塔楼，但每一座都形态各异：有的方正敦实，是纯粹的军事碉堡；有的则带着些许摩尔风格的拱形窗痕。城墙与下方陡峭的峡谷岩壁几乎融为一体，让人分不清哪里是天然，哪里是人力。而城内的房屋，也都由同色的石材建成，屋顶铺着暗红色的瓦片，狭窄的街道用鹅卵石铺就，光影切割出强烈的明暗对比，仿佛每一步都踩在中世纪的棋盘上。`} />
                <InfoRow label="建筑风格" value={`在这里，你找不到纯粹的哥特或文艺复兴，主导一切的是 “防御性建筑” 和独特的 “穆德哈尔风格” 。防御性体现在一切细节：极窄的街道（为了巷战）、高耸且少有窗户的房屋外墙、复杂的城门系统（如著名的“铁门”和“瓦伦西亚门”）。而 穆德哈尔风格 ，正是基督教与伊斯兰艺术交融的结晶。它最直观的体现，在那些教堂的钟楼上。比如圣玛丽亚教堂的塔楼，远看是基督教教堂的钟塔，但细看其砖砌的几何图案、蜂窝状的装饰浮雕、马蹄拱的痕迹，都是穆斯林工匠的手艺。这种风格不是简单的拼接，而是征服后，胜利者允许被征服者用自己最精湛的技艺，来装饰新的信仰殿堂，形成了全世界只在西班牙可见的、矛盾又和谐的建筑美学。`} />
                <InfoRow label="文化价值" value={`对当地人而言，达罗卡不是化石，而是他们呼吸和生活着的家园。每年的 “圣体圣血节” 是这座城市灵魂的集中爆发。这个起源于13世纪的节日，与城市从瘟疫中得救的传说相关。游行中，当地人会用城墙上的古老火炮发射礼炮，轰鸣声在峡谷中回荡数里，震撼至极。它保留了慢节奏的、社区紧密相连的生活方式。小巷里的铁匠铺、面包房仍在营业，老人们坐在广场上聊天，时间仿佛被城墙锁住，流淌得更慢。对于现代社会，它是一个珍贵的提醒：关于不同文化如何在一道城墙内寻找共处之道，关于辉煌如何在不张扬的坚韧中得以延续。来到这里，你消费的不是商品，而是一段沉浸的、未被过度包装的时间。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 达罗卡完美一日游打卡路线攻略：从城墙漫步到地道酒馆`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行经典步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，收起地图，跟着我走这条精华路线。上午，别急着进城！把车停在城外的观景台，先震撼于全景。然后，从最壮观的 “瓦伦西亚门” 进入，这是古城的正门，双层拱门气势非凡。穿过它，你就正式踏入了中世纪。沿着主街“卡拉马约尔街”向上，右手边会经过 圣玛丽亚教堂，别错过其穆德哈尔风格的塔楼。中午，在主广场“西班牙广场”找家咖啡馆坐下，点杯咖啡，看广场上的生活剧。午餐就在这里解决，尝尝当地的烤羊肉。下午，是重头戏—— 徒步一段城墙。从“铁门”附近可以登上城墙步道，沿着城墙走一小段，俯瞰峡谷和红屋顶的景色，无比壮阔。下来后，去探访 “地窖”博物馆，了解城市历史。傍晚，一定要走到城墙西端的观景点，看夕阳把整个城池和峡谷染成金红色，这是达罗卡一天中最魔幻的时刻。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  瓦伦西亚门的双重面孔：站在门下抬头看，你会发现它有两套拱门系统。外层是粗犷的防御性尖拱，布满铆钉的巨大木门仿佛仍能落下；内层却是装饰性的、更精致的拱门。这一道门，完美诠释了达罗卡“外刚内柔”的性格——对外是坚不可摧的堡垒，对内是繁荣文明的市集。阳光从门洞穿过，在地上拉出长长的光带，时光在这里有了形状。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  圣玛丽亚教堂的“混血”塔楼：仔细看它的钟楼，下半部分是敦实的石砌基座，而上半部分则由红砖砌成。那些砖块被排列成复杂的菱形、十字形和星形几何图案，这不是基督教符号，而是典型的伊斯兰装饰艺术。站在小巷中仰视，鸽子绕着塔楼飞舞，你会瞬间明白什么是“穆德哈尔”——两种彼此争斗的文化，在砖石的缝隙里达成了沉默而永恒的和解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  城墙步道上的“峡谷之风”：当你走上城墙步行道，触摸那些被风蚀数百年、变得温润的石头护栏时，一定要停下来感受。从赫卡尔河峡谷吹来的风，毫无阻挡地扑面而来，带着干燥的灌木与岩石的气息。顺着你的目光，城墙如刀锋般切入赭色的岩壁，下方是几乎垂直的落差。这一刻，你不仅在看风景，你正站在历史上防御者站过的位置，呼吸着同样的风，理解了他们为何选择在此扎根。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  小巷中的水槽之声：避开主街，钻进一条名叫“Calle de la Grajera”的安静小巷。这里藏着古老的公共洗衣水槽。石制的水槽长满青苔，清澈的泉水从狮子头形状的石雕口中泊泊流出，发出持续的、宁静的叮咚声。几百年来，达罗卡的妇女们就在这里洗衣、闲聊。这水声是城市的背景音，是活着的历史心跳，远比任何博物馆的解说都更有生命力。`}</p>
            </div>
          </Section>

          <Section title={`5. 达罗卡自由行避坑指南与行前关键须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`首先，时间就是一切。绝对要避开盛夏（7-8月）的正午，峡谷地形像个烤箱，城墙徒步会变得痛苦。最佳游览季节是春（4-6月）秋（9-10月），气候温和，光影绝美。一天中最好早晨或傍晚活动。其次，穿上你的战靴！达罗卡是立体的，街道全是鹅卵石上坡下坡，舒适的防滑徒步鞋是必需品，高跟鞋在这里是“刑具”。关于 避开人流：这里本就小众，但周末和节日（如圣体圣血节）本地游客会增多。若想享受包场般的宁静，请选择工作日前来。最后，交通与补给：自驾是最佳方式，小镇停车场免费但位置有限，早点到。公共交通班次极少，务必提前查好时刻表。城内餐馆不多，且下午2点后午餐、晚上9点后晚餐是西班牙常态，规划好用餐时间，随身带瓶水。这里治安很好，但标准防盗意识要有。`}</p>
            </div>
          </Section>

          <Section title={`6. 达罗卡周边住宿与地道美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想在达罗卡住一晚？那你会收获星空下的静谧古城。推荐一家由古老石屋改建的旅馆 “Hostería de la Dolores” ，它就在城墙边，房间保留了原始的石头墙壁和木梁，设施却很现代，老板能给你讲很多本地故事。餐饮方面，主广场的“Mesón de la Dolores” 是体验地道风味的首选。必须尝试 “Ternasco de Aragón” （阿拉贡烤乳羊），用当地黑胡椒和香草慢火烤制，外皮酥脆，肉质鲜嫩多汁。搭配一杯 “Garnacha” 红酒，产自附近的卡拉塔尤德产区，果香浓郁。前菜可以点“ migas”（用面包屑、蒜和香肠炒制的传统牧民食物），滋味十足。早餐就去街角面包房，买一个刚出炉的“长笛面包”，简单却美味。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从达罗卡驱车约20分钟，就能到达另一个惊艳的 “悬空小镇”卡拉塔尤德。它同样拥有穆德哈尔风格的珍宝—— 圣玛丽亚教堂 的塔楼被联合国列为世界遗产，其砖雕之复杂精美，堪称一部立体的伊斯兰几何学教科书。小镇也建在山崖上，风景壮阔。如果对葡萄酒感兴趣，这片区域正是 卡拉塔尤德产区 的核心，可以寻访一家家庭酒庄，品尝浓郁的歌海娜老藤葡萄酒。这样组合，一天探索两个风格相近又各具特色的中世纪古镇，加上美酒品鉴，会让你的阿拉贡 深度游 层次更加丰富。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`达罗卡的灵魂，不在于某个单独的教堂或宫殿，而在于那道将整整一个世界环抱起来的、沉默而坚固的城墙。它教会我们，真正的力量不是侵略与征服，而是在天险与人力共同铸就的界限内，让不同的生命、信仰与文明，找到一种复杂而坚韧的共生方式，并随着时光，沉淀成土地上最温暖的颜色。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/altea-old-town-white-coast" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔特亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Altea</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarazona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉索纳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarazona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/casas-colgadas-cuenca" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昆卡悬空之屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Casas Colgadas</p>
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
