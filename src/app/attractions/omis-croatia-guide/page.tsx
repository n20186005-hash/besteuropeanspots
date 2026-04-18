import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥米什深度旅游攻略：海盗峡谷与塞蒂纳河自由行全指南',
  description: '探索克罗地亚奥米什（Omiš）——中世纪海盗巢穴与塞蒂纳河峡谷的奇迹。本攻略涵盖深度游路线、避坑贴士、一日游打卡攻略，带你解锁亚得里亚海岸小众秘境。',
}

export default function OmisCroatiaGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奥米什', href: '/attractions/omis-croatia-guide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥米什・Omiš・克罗地亚・斯普利特-达尔马提亚县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你已经看腻了杜布罗夫尼克的人潮，今天这份奥米什私藏旅游攻略，就带你躲开喧嚣，跳进一个真正“野性”的达尔马提亚小镇。想象一下：碧玉般的塞蒂纳河以雷霆万钧之势，从高达五十米的灰白色喀斯特峡谷中咆哮冲出，汇入宝石蓝色的亚得里亚海。而就在这河海交汇的悬崖之上，密布着石屋小巷，这里曾是让整个威尼斯共和国商船闻风丧胆的海盗巢穴。作为你的专属向导，这份自由行指南不仅要带你攀上中世纪堡垒俯瞰山海，还要教你如何乘皮划艇驶入峡谷秘境、在哪家老餐馆吃到最鲜美的河鱼。准备好了吗？我们的海盗小镇深度探险，就此启航！`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友！如果你已经看腻了杜布罗夫尼克的人潮，今天这份奥米什私藏旅游攻略，就带你躲开喧嚣，跳进一个真正“野性”的达尔马提亚小镇。想象一下：碧玉般的塞蒂纳河以雷霆万钧之势，从高达五十米的灰白色喀斯特峡谷中咆哮冲出，汇入宝石蓝色的亚得里亚海。而就在这河海交汇的悬崖之上，密布着石屋小巷，这里曾是让整个威尼斯共和国商船闻风丧胆的海盗巢穴。作为你的专属向导，这份自由行指南不仅要带你攀上中世纪堡垒俯瞰山海，还要教你如何乘皮划艇驶入峡谷秘境、在哪家老餐馆吃到最鲜美的河鱼。准备好了吗？我们的海盗小镇深度探险，就此启航！`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥米什`} />
                <InfoRow label="英文名称" value={`Omiš`} />
                <InfoRow label="正式名称" value={`Omiš`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`斯普利特-达尔马提亚县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`说到奥米什在欧洲历史中的独特地位，它可不是个普通的海边度假村。从13到15世纪，这里盘踞着欧洲历史上最令人头疼的海上势力之一——奥米什海盗。他们可不是电影里那种戴着独眼罩的卡通形象，而是组织严密、战术高超的斯拉夫贵族与自由民。利用塞蒂纳河天险作为天然屏障和藏身之所，他们的轻快战船（“萨格纳”和“布里格”船）神出鬼没，专劫掠威尼斯共和国和奥斯曼帝国满载财富的商船。威尼斯人曾多次派舰队围剿，都因峡谷地形复杂、海盗据点易守难攻而失败。奥米什海盗甚至与匈牙利王国结盟，一度成为平衡亚得里亚海势力的重要棋子。这段历史让奥米什超越了单纯的“小镇”概念，它是中世纪地中海权力博弈中的一个独立而强悍的符号，是海洋自由与反抗强权精神的缩影，至今仍在当地的文化血脉中搏动。`} />
                <InfoRow label="建筑特色" value={`奥米什的建筑是山、石、海的粗暴融合，毫无矫饰。小镇主体蜷缩在峡谷口的狭窄地带，房子像害怕坠海似的紧紧依偎着陡坡。建筑材料清一色是本地开采的灰白色喀斯特石灰岩，经过海风百年侵蚀，表面粗糙多孔，在正午阳光下泛着象牙白的光泽，黄昏时则被染成蜜糖金色。最震撼的是两座俯瞰全镇的中世纪堡垒：山顶的星堡（Fortica） 像一顶巨人的岩石王冠，城墙依山脊锯齿状延伸，垛口参差；半山腰的米拉贝拉堡垒（Mirabella） 更显险峻，几乎是直接从悬崖上长出来的方形塔楼，墙体厚重，只有少数狭长的箭窗。老城区的民宅屋顶覆盖着厚重的陶土红瓦，狭窄石阶小巷（“kalelarga”）仅容两人侧身而过，石墙缝隙间探出粉紫色的九重葛。圣米迦勒教堂的罗马式钟楼方正敦实，与背后狰狞的灰色山岩形成奇妙的对话。整个小镇的色彩就是岩石的灰白、海浪的蔚蓝、与屋顶的砖红，纯粹而富有力量感。`} />
                <InfoRow label="建筑风格" value={`奥米什的建筑风格是实用主义防御建筑与后期文艺复兴、巴洛克元素的混血儿。其核心是中世纪达尔马提亚防御建筑风格。这体现在一切以防御为先：街道极度狭窄且曲折，是为了巷战；房屋外墙几乎没有窗户，或只有高处的窄窗；堡垒的设计完全服从地形，不追求对称美观，而是利用每一处凸起的岩石作为天然基座和屏障。到了15世纪后期，随着海盗活动被压制和威尼斯影响力的渗透，文艺复兴风格开始出现在一些贵族宅邸的窗框和门楣上，你能看到简单的雕刻装饰和对称设计。而17世纪的圣米迦勒教堂内部，则出现了鲜明的巴洛克风格：华丽镀金的祭坛、充满动态感的雕塑（如飞舞的天使）、以及色彩鲜艳的壁画。但这种巴洛克是“克制版”的，被小镇粗粝的整体气质所中和，更像是在坚硬海盗外壳上，绽开的一朵柔美小花。这种风格的叠层，恰恰见证了奥米什从无法无天的海盗共和国，逐渐融入主流文明的历史轨迹。`} />
                <InfoRow label="文化价值" value={`对现代奥米什人而言，海盗历史绝非羞于启齿的往事，而是身份认同的核心与文化旅游的金矿。每年七月举办的达尔马提亚克拉帕歌曲节（Klapa），其根源就与渔民和水手的合唱传统紧密相连。而重头戏——奥米什海盗之夜（Omiš Pirate Night），则将历史直接“复活”：当地人穿上仿古皮甲、手持木盾长矛，在街头重现海盗与威尼斯人的“战斗”，最后以盛大的河上火炬游行和烟花结束。这不仅吸引了游客，更是年轻一代连接祖辈记忆的仪式。小镇的手工艺品店里，海盗船模型是绝对主角。更重要的是，那段对抗威尼斯的自由历史，塑造了当地人独立、强悍而又热情幽默的性格。同时，壮丽的塞蒂纳河峡谷也从天险变成了自然宝藏，激流漂流和皮划艇探险成为现代奥米什的另一个灵魂，象征着从历史上的武力征服，到如今对自然力量的敬畏与娱乐。历史与自然，在此完成了奇妙的共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 奥米什一日游打卡路线攻略：从海盗堡垒到峡谷激流`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，收好这份路线图，咱们用一天时间，把海盗小镇的精髓一网打尽！上午（9:00-12:30）：精力最充沛时，先去挑战！从老城广场出发，沿着陡峭的“Put do Mirabele”小径，气喘吁吁地爬上米拉贝拉堡垒。在这座海盗瞭望塔的窗口，像当年的哨兵一样，360度俯瞰红瓦老城、河海交汇口和远山。下山后，逛逛老城狭窄的主街，在圣米迦勒教堂感受内部的巴洛克宁静。中午（12:30-14:30）：直奔河边餐馆！在能看到塞蒂纳河水的露台，享用一顿以新鲜河鱼（比如鳟鱼）或海鲜为主的午餐，记得配上一杯本地白葡萄酒“Pošip”。下午（14:30-18:00）：探险时间！选择你的最爱：A. 刺激派：参加塞蒂纳河峡谷激流漂流（需提前预订），在清凉的河水中穿梭于百米高的绝壁之间。B. 休闲派：租一条皮划艇或站立桨板，平静地划向上游，静静欣赏峡谷的壮美。傍晚（18:00以后）：回到老城，在河畔找一家咖啡馆，看着夕阳将堡垒和山峰染成金色。如果恰逢夏季周末，你很可能偶遇一场热闹的克拉帕合唱或海盗主题市集，完美收官！`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  米拉贝拉堡垒的箭窗光影：爬进堡垒塔楼内部，一定要找到一个朝东的狭长箭窗。下午三四点的阳光会像一把金色的光剑，斜斜地刺入昏暗的石室内，无数尘埃在光柱中飞舞。你趴在窗沿向外望，视野被石框精准地切割成一幅“活画”：近处是错落的红瓦屋顶，中间是丝带般的塞蒂纳河，远方是浩渺的亚得里亚海。那一刻，你完全能理解海盗哨兵的心情——这扇窗，就是守护整个王国财富与安危的“眼睛”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  塞蒂纳河入海口的“水线”：站在河口旁的堤岸或桥上仔细观察。你会发现，翡翠绿色的河水与宝蓝色的海水之间，有一条清晰可见、蜿蜒扭动的分界线，仿佛两种不同质地的液态宝石在缓慢交融。这是因为河水来自内陆山泉，富含矿物质且温度较低，密度与温暖的咸海水不同。这个细节是奥米什地理奇迹最直观的展示，也是摄影师最爱的画面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  老城石阶上的“海盗”浮雕：在主街旁某段不起眼的古老石阶墙壁上，留心寻找一块嵌在墙里的石雕。它非常古朴，线条粗犷，刻画了一艘中世纪单桅帆船的侧面，船首似乎还有怪兽雕刻。这不是现代旅游装饰，而是某个世纪前当地人留下的“涂鸦”。用手轻轻触摸那些被磨得光滑的刻痕，仿佛能听到斧凿的叮当声，和海浪拍打木船的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  拉德曼磨坊的水车声：沿塞蒂纳河向上游步行约15分钟，你会来到一片叫“Radmanove Mlinice”的绿洲。这里保留着几座古老的木制水车磨坊。站在旁边，闭上眼睛：耳边是水车转动的“吱呀”声、水流持续不断的哗啦声、还有林中鸟鸣。这是数百年来，峡谷除了战斗与航行之外，另一种平和的生活节奏，混合着木头、水和青苔的清新气味。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与人流：最佳游览时间是5-6月和9月，天气宜人且避开了7-8月欧洲度假人潮和酷热。如果想玩漂流，务必提前网上预订，现场很可能满员。一日游的话，尽量避开周六，当天从斯普利特来的本地游客最多。建议早晨9点前到达，能享受宁静的老城和充足的停车位（小镇停车位紧张，建议停在河对岸的大型收费停车场）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备：鞋子！鞋子！鞋子！ 重要的事情说三遍。爬堡垒和逛老城都是陡峭的石阶路，务必穿防滑性能极好的运动鞋或登山鞋。女生千万别穿高跟鞋或平底凉鞋。如果参加漂流，景区会提供专业装备，但自己务必带好防晒霜、泳衣（穿在里面）、防水袋（装手机）和一套换洗衣物。峡谷水很凉，即使是夏天。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  防盗与消费：奥米什治安总体很好，但夏季游客区仍需防范扒手，背包前背。在河边餐馆点鱼时，一定要问清楚是“按公斤计价”还是“按份计价”，避免产生误解和天价账单。购买纪念品，老城小巷里的家庭作坊比主街大店更有特色和性价比。自驾的话，注意小镇许多区域是交通限制区（Zona），误入会被罚款，请严格遵循路标。`}</p>
            </div>
          </Section>

          <Section title={`6. 奥米什周边住宿与美食攻略：睡在峡谷畔，吃在海盗家`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿：想拥有绝佳视野，推荐Hotel Plaža，它就在海滨，部分房间阳台正对峡谷入口和堡垒，醒来就像住在一幅风景画里。追求性价比和本地氛围，可以选择老城内的石头公寓民宿，很多由历史建筑改建，晚上听着海浪入睡，别有风味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`餐饮：午餐强烈推荐河畔的Konoba Čelinka或Konoba Kaštil Slanica。它们都是家庭经营的“konoba”（传统小酒馆）。必点菜：“Brudet”（用多种鱼和海鲜慢炖的浓汤，配玉米糊）、烤新鲜章鱼、以及塞蒂纳河特产的烤鳟鱼。告诉老板你的口味，他们常会根据当日最新鲜的渔获给出建议。配上一杯本地达尔马提亚葡萄酒，如“Plavac Mali”红葡萄酒或“Pošip”白葡萄酒。晚餐后，去老城广场的Caffe Bar Volat喝一杯，和当地人一起享受凉爽的晚风。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  斯普利特（Split）：从奥米什沿海岸公路向西北驱车仅需30分钟，就能抵达达尔马提亚的首府。这里有着举世闻名的戴克里先宫——一座活着的罗马宫殿。建议把奥米什的野性自然与斯普利特的辉煌历史结合起来，安排一次完美的海岸线文化之旅。可以早上逛斯普利特，下午来奥米什玩漂流。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  赫瓦尔岛（Hvar Island）：如果时间充裕，可以从奥米什南边的德瑞尼什（Drvenik）码头乘坐渡轮，约1小时抵达赫瓦尔镇。从粗犷的海盗峡谷，切换到被誉为“亚得里亚海阳光岛”的奢华优雅氛围，感受薰衣草田、威尼斯式广场和 vibrant 的夜生活，体验克罗地亚海岸线的多元魅力。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥米什的灵魂，是一曲由岩石的坚硬、海水的自由与历史的叛逆谱成的三重奏。它不像其他精致的海滨小镇只给你温柔的度假感，而是用它嶙峋的峡谷、陡峭的堡垒和奔腾的河水，直接而有力地告诉你：生活，可以如此充满原始的张力与勇敢的选择。在这里，你不仅是游客，更是片刻的“海盗”与“探险家”。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mirogoj-cemetery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米罗戈伊公墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mirogoj Cemetery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bale-istria-dinosaur-fossil-stone-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴莱（伊斯特拉半岛的恐龙化石与石屋小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bale / Valle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ibenik" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik</p>
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
