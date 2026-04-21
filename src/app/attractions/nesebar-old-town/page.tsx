import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '内塞巴尔古城旅游攻略：探秘黑海之滨的“双世界遗产”风车之城',
  description: '保加利亚内塞巴尔(Nesebar)深度游攻略：一座遍布拜占庭教堂废墟与木屋的狭长半岛，被誉为“黑海明珠”。这份指南带你揭秘门票与交通，规划完美一日游。',
}

export default function NesebarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '保加利亚', href: '/destinations/bulgaria' },
            { label: '布尔加斯州', href: '/destinations/bulgaria' },
            { label: '内塞巴尔', href: '/attractions/nesebar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`内塞巴尔・Nesebar・保加利亚・布尔加斯州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你以为保加利亚只有酸奶和玫瑰谷，那你可就错过了它最璀璨的明珠。今天这份内塞巴尔私藏旅游攻略，就带你躲开人潮，去一个真正会呼吸的露天博物馆。想象一下：你乘船从海上靠近，眼前是一座由狭窄地峡连接大陆的岩石半岛，岛上密布着赭红色屋顶，十几座古老教堂的残破穹顶和钟楼如同石化的森林刺向天空——这就是内塞巴尔，一个让时间慢了三千年的地方。作为你的专属向导，这份自由行指南不仅会告诉你如何抵达、怎样避开旅行团，更会带你用脚步和心眼，去触摸那些风化的石墙、吱呀作响的木质阳台，去聆听黑海的风穿过教堂空窗时，那跨越千年的叹息。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你以为保加利亚只有酸奶和玫瑰谷，那你可就错过了它最璀璨的明珠。今天这份内塞巴尔私藏旅游攻略，就带你躲开人潮，去一个真正会呼吸的露天博物馆。想象一下：你乘船从海上靠近，眼前是一座由狭窄地峡连接大陆的岩石半岛，岛上密布着赭红色屋顶，十几座古老教堂的残破穹顶和钟楼如同石化的森林刺向天空——这就是内塞巴尔，一个让时间慢了三千年的地方。作为你的专属向导，这份自由行指南不仅会告诉你如何抵达、怎样避开旅行团，更会带你用脚步和心眼，去触摸那些风化的石墙、吱呀作响的木质阳台，去聆听黑海的风穿过教堂空窗时，那跨越千年的叹息。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`内塞巴尔`} />
                <InfoRow label="英文名称" value={`Nesebar`} />
                <InfoRow label="正式名称" value={`Nesebar`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`布尔加斯州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`内塞巴尔的历史厚度，在欧洲都堪称罕见。它可不是一个“普通”的中世纪古镇。早在公元前6世纪，希腊殖民者就在这里建立了“梅森布里亚”，这个名字本身就混合了其创始人“梅萨”和“布里亚”（意为城市）的故事。它的第一重地位，是作为黑海西岸至关重要的希腊贸易殖民地，与整个爱琴海世界血脉相连。罗马帝国将其纳入版图后，它继续繁荣。但真正奠定它不朽地位的，是拜占庭时期。从5世纪到15世纪，内塞巴尔是东正教在黑海地区最闪耀的灯塔之一。奥斯曼帝国征服后，它并未就此沉寂，保加利亚的民族复兴精神在这里的木构建筑上再次绽放。正因这层层叠叠、从未间断的历史沉积——从色雷斯、希腊、罗马、拜占庭到保加利亚复兴——联合国教科文组织罕见地授予了它“双世界遗产”称号：既是文化遗产，也是自然遗产（因其独特的半岛地理形态）。它是一部用石头和木头书写的、浓缩的东南欧文明史诗。`} />
                <InfoRow label="建筑特色" value={`这里的建筑，是一场石头与木头的视觉盛宴。最震撼的无疑是那些拜占庭教堂废墟。它们大多只剩下墙壁和穹顶的骨架，但正是这种残缺，放大了建筑的力度。红砖与白色石灰岩条带交替砌筑的“装饰性砌体”是标志，阳光下，墙体呈现出生动的条纹质感，像一件件巨大的、竖立起来的编织艺术品。石材粗糙而厚重，历经海风侵蚀，表面坑洼，却更显沧桑。许多教堂的穹顶已坍塌，但巨大的鼓楼和半圆拱窗依然挺立，框出一片片碧海蓝天。
与之形成温柔对比的，是19世纪保加利亚民族复兴时期的木结构房屋。它们通常是两层，底层用厚重的石块垒成，用于储物或店铺；上层则完全由深色木材搭建，向外大幅度悬挑，创造出宽敞的、被精细木雕栏杆环绕的阳台。这些木雕繁复极了，有太阳、葡萄藤、几何花纹，象征着丰饶与庇佑。房屋的外墙常被刷成白色、蓝色或鹅黄色，在黝黑木构的衬托下，明快又协调。而那些早已停转的古老风车，只剩下石头基座和木质骨架， silhouetted 在半岛尖端的天际线上，成了“风车之城”最诗意的注脚。`} />
                <InfoRow label="建筑风格" value={`内塞巴尔是两种核心风格的完美课堂：拜占庭风格和保加利亚民族复兴风格。
拜占庭风格在这里得到了最朴素的体现。走进任何一座教堂遗址（如圣约翰·阿利特吉托斯教堂），你会立刻认出其希腊十字平面——像一个等臂十字架，中心交汇处曾支撑着巨大的穹顶，象征天堂。建筑内部虽已露天，但残存的壁画痕迹、柱础和圣坛隔板（圣像屏）的位置，依然能让你想象出当年空间的神圣序列：从代表俗世的教堂前厅（纳尔忒克斯），到信徒所在的中殿，再到只有神职人员能进入的圣坛。装饰性砖砌不仅美观，更是承重结构的一部分，这是拜占庭建筑技术的直观展示。
而漫步在交错的小巷中，你则沉浸在后一种风格里。保加利亚民族复兴风格是对奥斯曼统治时期建筑文化的抵抗与再创造。那些夸张的悬挑木制上层，不仅是为了扩大居住面积，更是一种宣言：我们用自己森林的木材，构建我们的家园和生活。精雕细琢的阳台不是炫耀，而是家庭生活向外部的延伸，是邻里社交的中心。这种风格不追求宗教的崇高，而是洋溢着世俗的、温暖的、对美好生活的热爱，充满了独特的巴尔干民间艺术气息。`} />
                <InfoRow label="文化价值" value={`内塞巴尔的文化价值，在于它不是一个被“冻结”的博物馆，而是一个活态的社区。居民们仍然生活在这些有数百年历史的木屋里，在教堂废墟的阴影下晾晒衣物，在鹅卵石小巷里骑自行车。这种“与古迹共生”的状态，本身就是一种强大的文化传承。它告诉世界，文化遗产不必清空原住民变成景区，生活本身就是文化延续的一部分。对于保加利亚人而言，内塞巴尔是民族的骄傲与记忆锚点。那些教堂废墟，是东正教信仰在风雨中坚韧不拔的象征；而那些色彩明快的木屋，则代表了19世纪民族意识觉醒后，对自身身份和美学自信的追寻。今天，它吸引着艺术家和手工艺人，传统的陶器、蕾丝编织技艺在这里得以留存。同时，作为旅游胜地，它也成为了世界了解保加利亚复杂而迷人历史的一扇最生动的窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 内塞巴尔古城一日游打卡路线攻略：从教堂废墟到悬崖咖啡`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`半岛漫步精华路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份自由行指南为你规划了一条不走回头路的精华路线。上午：从连接大陆的地峡入口开始，你会看到古老的风车遗迹和欢迎石碑。穿过城门，正式进入古城。别急着钻小巷，先右转沿着临海步道走，让黑海的壮阔全景给你一个开场震撼。然后拐进主街，直奔半岛南端的考古博物馆，用一小时快速建立历史框架。接着，参观隔壁保存最完好的圣索菲亚教堂（旧大主教教堂）。中午：在主街或某条侧巷找一家看得见风景的悬崖餐厅（比如“维克多”），品尝烤鱼和当地白葡萄酒。下午：开启真正的探险。钻进迷宫般的小巷，寻找那些最美的木屋，特别是“穆萨拉那屋”。然后逐一探访散布的教堂遗迹：圣约翰浸信教堂（小巧完整）、圣帕拉斯科娃教堂（砖砌杰作）、圣天使长米迦勒和加百列教堂（壮观的废墟）。最后，在半岛最北端的圣约翰阿利特吉托斯教堂（最大最著名的废墟）结束教堂之旅。傍晚：坐在北端海边的岩石或咖啡馆，等待落日将教堂剪影和整个布尔加斯湾染成金色。这就是完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  圣索菲亚教堂的“玫瑰窗”光影：这座5世纪的巴西利卡教堂相对完整。中午时分，阳光会透过其半圆形后殿高处的狭窄窗户射入。灰尘在光柱中舞蹈，照亮地面上古老的马赛克残片。那一刻，光有了形状，时间有了重量。静静站在光里，你能感受到早期基督教教堂那种简约、肃穆而充满力量的空间氛围，这是与后来华丽拜占庭风格截然不同的体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  木屋小巷的色彩与雕刻：随机拐进一条无名小巷，比如“内贝日娜街”。抬头看，一座鹅黄色木屋的悬挑阳台底部，雕满了密密麻麻的葡萄藤与太阳纹。阳光透过藤蔓缝隙，在斑驳的石板路上投下摇曳的光斑。仔细观察，你会发现每家的雕刻都不同：有的是几何回纹，象征永恒；有的是象征丰收的麦穗。这些并非机械复制，而是屋主个性与匠人灵魂的体现，是凝固的民间诗歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  悬崖餐厅的视野：选择一家南侧临海的餐厅靠窗位置。当你的烤鲈鱼上桌时，视线越过古老的矮墙，下方是蔚蓝黑海拍打着嶙峋的礁石，海鸥盘旋。远处，现代化的阳光海滩度假区高楼林立，与眼前沧桑的古堡形成超现实的时空对话。这一口鲜美的鱼肉，就着千年风景咽下，是味觉与视觉的双重盛宴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  圣约翰阿利特吉托斯教堂的断壁残垣：站在这个半岛地标性废墟的中心，穹顶早已消失，你直接沐浴在天空下。触摸墙壁上红白相间的条纹砖石，它们在海风侵蚀下温润而粗糙。透过一个高大的拱窗望去，框景里是一艘正在航行的现代游艇。这种极致的残缺与永恒的动态大海并置，会产生一种难以言喻的哲学美感——关于毁灭、留存与时间的无尽流淌。`}</p>
            </div>
          </Section>

          <Section title={`5. 内塞巴尔自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间就是魔法：最佳游览时间是5-6月或9-10月。7-8月是噩梦，狭窄的主街上摩肩接踵，游轮大巴一团接一团，完全破坏了古城的宁静。尽量安排过夜，当一日游游客在下午5点后离开，古城才会露出它原本迷人、悠闲的面貌，日落和清晨的时光是无价的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿对鞋，就是成功的一半：古城的路面全是凹凸不平的鹅卵石，穿高跟鞋或薄底鞋简直是自虐。务必准备一双最舒适、防滑的行走鞋。同样，夏季海风大，日照强，帽子、防晒霜、一件防风外套是标配。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  避开人潮有技巧：旅行团大多从主街进出，集中在上午10点到下午4点。你的策略应该是 “早到迟走，主街快走，小巷慢游” 。一进城就先往两侧小巷或海边步道钻，把主街的商店匆匆掠过。下午晚些时候再回到主街，人会少很多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  财务与饮食贴士：古城内小偷不多，但人多时仍需看紧背包。餐饮价格比大陆略贵，但为风景付费值得。点餐前确认价格，特别是海鲜。想省钱，可以在大陆的“新内塞巴尔”区就餐后再进城。门票：进入古城免费，但单个教堂或博物馆需单独购票，建议买联票更划算。`}</p>
            </div>
          </Section>

          <Section title={`6. 内塞巴尔周边住宿与美食全攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿：追求极致体验，一定要住在古城内。这里有由传统木屋改造的家庭旅馆，如“伊万诺瓦之家”，房间虽小但充满风情，晚上和清晨独占半岛。缺点是可能隔音稍差，且拖着行李走鹅卵石路很吃力。更便捷的选择是住在地峡对岸的“新内塞巴尔”，这里是现代化的度假区，酒店选择多，设施新，步行15分钟即可进入古城，性价比更高。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`餐饮：古城内，推荐南侧悬崖边的“维克多餐厅”，视野无敌，烤鱼和海鲜拼盘非常新鲜。想体验更地道的氛围，可以去小巷里的“梅森布里亚酒馆”，提供用传统陶罐慢炖的“ gyuveche”（肉和蔬菜焗烤），味道浓郁。别忘了点一杯保加利亚国酒“拉基亚”（水果白兰地）或本地产的“迪米亚特”白葡萄酒佐餐。甜品可以试试“巴克拉瓦”（果仁蜜饼）。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  阳光海滩：从内塞巴尔地峡步行20分钟或乘车5分钟即达。这里与古城的时光凝滞感截然相反，是充满活力的现代度假天堂。长长的沙滩、热闹的酒吧、水上乐园和丰富的夜生活，是放松和体验保加利亚海滨度假文化的完美补充。适合安排在第二天的下午，晒晒太阳，游个泳，感受“另一个保加利亚”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  老内塞巴尔渔村氛围：其实，不用走远。在古城北端教堂群附近，有一些当地渔民仍在使用的小码头和棚屋。傍晚时分，这里没有游客，只有海鸥、旧渔船和海浪声。看着渔民整理渔网，你能感受到内塞巴尔在成为世界遗产之前，那个更原始、更质朴的渔村身份，这是一份意外的宁静收获。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`内塞巴尔的灵魂，在于那片海与石的永恒对话，以及木头在石头上开出的温暖花朵。它教会我们的不是征服时间，而是如何与时间的痕迹优雅共处——让废墟继续庄严地伫立，让生活继续在古迹旁炊烟袅袅。这座城市本身就是一首石头的史诗和一首木头的抒情诗，交织成保加利亚民族坚韧而浪漫的独特和声。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/plovdiv-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plovdiv Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rila-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里拉修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rila Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belogradchik-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝洛格拉奇克要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belogradchik Fortress</p>
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
