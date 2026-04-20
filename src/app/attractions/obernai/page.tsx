import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥贝奈 Obernai｜探访孚日山脚的双重城墙与木骨架童话镇 - 最佳欧洲景点',
  description: '车子刚拐下公路，远远地，你就看见它了——不是突兀的、博物馆式的景点，而是一片从翠绿平原上温柔升起的、由暖色屋顶组成的岛屿，背后是连绵的孚日山脉深蓝色的剪影。那种感觉不像“抵达”，更像是被一个古老的梦轻轻吸了进去。把车停在城墙外的林荫停车场，推开车门，第一口空气就带着惊喜：混合了刚修剪过的草坪的清香、...',
}

export default function ObernaiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥贝奈', href: '/attractions/obernai' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥贝奈・Obernai・法国・奥贝奈`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐下公路，远远地，你就看见它了——不是突兀的、博物馆式的景点，而是一片从翠绿平原上温柔升起的、由暖色屋顶组成的岛屿，背后是连绵的孚日山脉深蓝色的剪影。那种感觉不像“抵达”，更像是被一个古老的梦轻轻吸了进去。把车停在城墙外的林荫停车场，推开车门，第一口空气就带着惊喜：混合了刚修剪过的草坪的清香、远处面包房飘来的黄油焦香，还有一种潮湿的、来自古老石头的微微凉意。
穿过那道名为“钟楼门”的威严拱洞，时间“唰”地一下被调慢了。脚下是几个世纪以来被无数鞋履打磨得温润发亮的卵石路，硌着脚底，发出令人安心的细微声响。两边，便是那些让你挪不开眼的木骨架房子了。它们不是静止的，每一栋都像是有表情的老者。赭石色、鹅黄色、淡粉色的墙壁被深棕色的木梁分割成一个个菱形、十字形或太阳图案的格子，有些木梁已经弯曲，诉说着数百年的承重。二楼窗台外的天竺葵开得不管不顾，红得灼眼，瀑布般垂落下来。你几乎能听到木头在午后阳光下，发出满足的、极轻微的“咔吧”声。
最打动人的，是这里“活着”的质感。这不是一个仅供观赏的布景。井泉广场（Place du Marché）上，那个装饰着精美雕刻的六角形石井周围，总有当地人推着自行车驻足聊天，水流声潺潺不绝。肉铺（Boucherie）的橱窗里挂着一串串本地香肠，隔壁糕点店的杏仁奶油圆饼（Kouglof）刚刚出炉。你忽然明白，那两道著名的同心圆城墙，保护的从来不仅仅是一堆砖石木料，而是一种完整、自洽、缓慢流淌的生活方式。它的核心魅力，正在于这种坚不可摧的防御姿态与内部生活的丰盈柔软，所形成的奇妙张力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐下公路，远远地，你就看见它了——不是突兀的、博物馆式的景点，而是一片从翠绿平原上温柔升起的、由暖色屋顶组成的岛屿，背后是连绵的孚日山脉深蓝色的剪影。那种感觉不像“抵达”，更像是被一个古老的梦轻轻吸了进去。把车停在城墙外的林荫停车场，推开车门，第一口空气就带着惊喜：混合了刚修剪过的草坪的清香、远处面包房飘来的黄油焦香，还有一种潮湿的、来自古老石头的微微凉意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道名为“钟楼门”的威严拱洞，时间“唰”地一下被调慢了。脚下是几个世纪以来被无数鞋履打磨得温润发亮的卵石路，硌着脚底，发出令人安心的细微声响。两边，便是那些让你挪不开眼的木骨架房子了。它们不是静止的，每一栋都像是有表情的老者。赭石色、鹅黄色、淡粉色的墙壁被深棕色的木梁分割成一个个菱形、十字形或太阳图案的格子，有些木梁已经弯曲，诉说着数百年的承重。二楼窗台外的天竺葵开得不管不顾，红得灼眼，瀑布般垂落下来。你几乎能听到木头在午后阳光下，发出满足的、极轻微的“咔吧”声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里“活着”的质感。这不是一个仅供观赏的布景。井泉广场（Place du Marché）上，那个装饰着精美雕刻的六角形石井周围，总有当地人推着自行车驻足聊天，水流声潺潺不绝。肉铺（Boucherie）的橱窗里挂着一串串本地香肠，隔壁糕点店的杏仁奶油圆饼（Kouglof）刚刚出炉。你忽然明白，那两道著名的同心圆城墙，保护的从来不仅仅是一堆砖石木料，而是一种完整、自洽、缓慢流淌的生活方式。它的核心魅力，正在于这种坚不可摧的防御姿态与内部生活的丰盈柔软，所形成的奇妙张力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥贝奈`} />
                <InfoRow label="英文名称" value={`Obernai`} />
                <InfoRow label="正式名称" value={`Obernai`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`奥贝奈`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔萨斯葡萄酒之路上保存最完好的中世纪珍宝之一，以其罕见的双重同心圆防御城墙系统而闻名。`} />
                <InfoRow label="建筑特色" value={`色彩斑斓的木筋墙（木骨架）房屋与蜿蜒小巷构成核心肌理，被两圈完整的古城墙与高耸的钟楼门环抱。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔萨斯风格，深受德国半木结构建筑影响，并融合了法国文艺复兴的优雅细节。`} />
                <InfoRow label="文化价值" value={`一个活着的文化拼图，生动体现了阿尔萨斯地区在法德两大文化之间摇摆、冲突与最终融合的独特身份。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天24小时开放。镇内部分小型博物馆（如当地历史博物馆）及登塔项目开放时间一般为夏季（4月至10月）10:00-12:30 & 14:00-18:00，冬季时间缩短或仅周末开放。圣诞节市场期间（11月底至12月底）镇中心全天热闹非凡。建议行前查询官网确认具体场馆时间。`} />
              <InfoRow label="门票价格" value={`进入奥贝奈古镇本身完全免费。攀登钟楼（Kapellturm）或参观当地历史博物馆需单独购票，票价约3-5欧元。提供家庭套票。教堂免费进入。葡萄酒窖参观与品酒体验通常需提前预约并付费，价格约15-30欧元/人。`} />
              <InfoRow label="地址" value={`Place du Marché, 67210 Obernai, France`} />
              <InfoRow label="交通方式" value={`从斯特拉斯堡（Strasbourg）出发最为便捷。斯特拉斯堡是最近的交通枢纽，拥有国际机场（SXB）和法国高速铁路（TGV）车站。从斯特拉斯堡火车站（Gare de Strasbourg）乘坐TER（区域快铁）前往，车程约25-30分钟，班次频繁（每小时至少2班），票价低廉。抵达奥贝奈火车站后，步行约10-15分钟即可进入古镇中心。自驾则沿A35高速公路，从“Obernai”出口下，镇外有多个付费停车场（如P1、P2），建议将车停放在外围，步行游览古镇。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂奥贝奈的石头和木头在说什么，你得先把手放在它的城墙上。最外层的城墙，建于13到14世纪，那时候奥贝奈是神圣罗马帝国治下的自由市，富得流油，主要靠葡萄酒和贸易。有钱了就得保护自己，于是市民们齐心协力，筑起了这圈长达两公里的坚实壁垒，上面耸立着二十多座塔楼。你可能会想，这够了吧？但对于夹在历史旋涡中的阿尔萨斯来说，远远不够。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，故事来到了15世纪。战争的阴影越来越浓，为了给最重要的核心区域——也就是围绕市场和教堂的老城中心——加上一道终极保险，人们又在里面紧贴着建起了第二道城墙。这就是你今天看到的奇观：两道城墙，像树的年轮一样，清晰地标记出小镇在不同历史时期的焦虑与成长。走在两道城墙之间的林荫步道上，那种被双重呵护（或者说双重禁锢）的感觉异常强烈。这里曾住着园丁和手艺人，是危急时刻最后的缓冲区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的命运和一位传奇女性紧密相连，那就是圣奥迪利亚。她是阿尔萨斯的守护圣女，据传说出生于奥贝奈附近的一座城堡（现在的圣奥迪利亚山修道院）。尽管她天生失明却被父亲嫌弃，最终却凭借信仰创造了奇迹，并在此地建立了著名的修道院。奥贝奈一直视她为精神图腾，小镇的纹章上都有她的象征。中世纪的繁荣在十七世纪的“三十年战争”中戛然而止。军队反复蹂躏这片土地，奥贝奈被瑞典人占领，遭受重创。紧接着，随着《威斯特伐利亚和约》，它又落入了法兰西的版图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`法王的太阳照耀这里，带来了新的建筑风尚。你可以从一些木筋墙房子的石质门楣上，看到精致的文艺复兴风格雕刻，那是法国优雅气息的渗透。然而，骨子里的日耳曼魂并未消失。1870年普法战争后，它又成了德意志帝国的一部分，直到一战结束。这种法德之间的“拉锯”，没有撕裂它，反而像两种不同颜色的丝线，被精细地编织进了它的文化织物里。二战时，它奇迹般地躲过了大规模破坏，那些木骨架房子得以幸存。今天，当你坐在广场边喝着用本地葡萄酿造的雷司令，听着身边交谈声里混合的法语单词和阿尔萨斯方言的德语腔调时，你品尝的，正是一段复杂历史最终沉淀下来的、平和而醇厚的滋味。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受奥贝奈的双重灵魂，我强烈建议你留出整整一天时间。请务必在早上九点前抵达，这是小镇刚刚苏醒、旅游巴士还未涌入的黄金时段。整体游览节奏应“由外向内，再由内向外”：先从外围感受其宏大的防御格局，再深入迷宫般的老街巷品味生活细节，最后登高或漫步城墙，将一切景致收于眼底。这样的安排能让你像剥洋葱一样，层层深入理解这座小镇。上午精力充沛，适合步行探索外围城墙和攀登钟楼；下午则适合在街巷中悠闲穿梭，逛小店、品酒；黄昏时分的光线最为迷人，是拍照和城墙漫步的最佳时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免七月下旬和八月的周六前来，那是欧洲暑期度假高峰，小镇会异常拥挤。穿着绝对舒适的平底鞋，那些鹅卵石路对高跟鞋和薄鞋底极不友好。注意许多小餐馆和商店在下午两点到五点之间有午休闭门的习惯，规划午餐和购物时间需留意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从气势恢宏的钟楼门（Kapellturm）进入，用手触摸冰凉的石拱，仰头看门洞上方古老的机械钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往心脏地带井泉广场，围着那座雕刻着狮子、鹳鸟和圣徒的十六世纪精美喷泉绕行一圈，听水流潺潺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场南侧钻进如毛细血管般狭窄的“制革匠街”，让两侧倾斜的木筋墙房子几乎在你头顶相接，寻找墙壁上古老的行会标志。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并走上那连接着两段城墙的隐蔽木质步道，从高处俯瞰红瓦屋顶的海洋和远处孚日山脉的绵延线条。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访镇上最重要的圣彼得与圣保罗教堂，不在其恢弘内饰，而在其外部那座独立、倾斜且色彩斑驳的“西钟楼”，它是小镇最沧桑的地标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着保存完好的第二道内城墙根漫步，你会经过古老的肉店门和面包店门，这些拱门曾是不同行会的专用通道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午的暖阳下，随意走进一家临街的葡萄酒吧（Winstub），点一杯阿尔萨斯琼瑶浆，配上一盘酸菜腌肉锅，感受本地风味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有脚力，步行到镇外不远的“疯狂之山”小丘，那里是拍摄奥贝奈全景以及双重城墙结构的绝佳位置。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼门拱洞内向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的斜阳会将门洞外的广场和房屋染成金色，构图时将拱门作为画框，捕捉行人或马车经过的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`第二道城墙的木质步道上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，利用步道的栏杆作为引导线，拍摄前方层层叠叠、色彩各异的木筋墙屋顶与远处教堂钟楼同框的景象。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`制革匠街（Rue des Tanneurs）中段`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光难以直射时，利用街道本身的狭长与两侧房屋的纵深感，拍出木筋墙挤压出的奇幻线条，等待一个身穿传统服饰的当地人走过为画面点睛。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣彼得与圣保罗教堂的西钟楼下`}</h4>
                  <p className="text-sm text-gray-700">{`仰拍这座独立、倾斜、色彩剥落的钟楼，以一小片纯净蓝天为背景，突出其岁月的沧桑感和几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`镇外“疯狂之山”观景点`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分，可以拍到晨雾缭绕中古镇苏醒、两道城墙轮廓在逆光中清晰可辨的全景大片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿尔萨斯地区人们对于在私人住宅（即便外观很美）前长时间拍摄或对准窗户拍摄较为敏感，请保持礼貌距离，尊重隐私。利用雨后湿漉漉的鹅卵石地面反射天光和房屋倒影，能极大提升画面质感。一支焦距涵盖24-70mm的变焦镜头足以应对这里的绝大部分场景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城内由16世纪木筋墙房子改造的精品旅馆，楼梯吱呀作响，房间低矮温暖，早晨被对面面包店飘来的香气唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗选`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在镇外葡萄园环绕中的独立庄院，房间拥有直面孚日山脉的落地窗，提供主人的自制果酱和家庭酒窖的品酒体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古镇边缘一座安静街区里的老磨坊改建旅馆，带有绿意盎然的小花园和露天泳池，适合家庭入住，步行五分钟即到市中心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史感选`}</h4>
                  <p className="text-sm text-purple-800">{`下榻在由古老驿站改造的酒店，房间保留了原始的石墙和木梁，地下室就是曾经的酒窖，早餐在有着拱形天花板的石头大厅里享用。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（特别是圣诞市场期间和夏季）务必提前数月预订，老城内的住宿选择有限且极为抢手。奥贝奈治安非常好，夜晚独自在老城散步也很安全。如果追求绝对宁静，建议选择镇外葡萄园中的住宿，但需有自驾车代步。许多家庭旅馆的早餐本身就是一次文化体验，不要错过。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥贝奈的时候，我的背包里没有多出什么纪念品，但心里却仿佛被填进了一整个完整的世界。这个世界有自己的边界——那两道实实在在的城墙；有自己的节奏——井泉边不慌不忙的流水声和面包出炉的钟点；更有自己复杂而最终归于恬淡的表情。在这样一个全球化让所有小镇长得越来越像的时代，奥贝奈的“固执”显得如此珍贵。它固执地保留着两道城墙，固执地维护着木筋墙的缤纷色彩，固执地在法语区里说着带德语根的音调，固执地让现代生活以一种不突兀的方式，在古老的脉络里流淌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它让你明白，真正的力量有时不是锋芒毕露的进攻，而是这种温柔的坚韧。它历经争夺，却未变得尖刻；它被两种强大的文化塑造，却找到了自己独一无二的声音。在这里，你感受到的不是历史的沉重压迫，而是一种被时间充分腌制后的、宽厚而幽默的智慧。对于每一位厌倦了浮光掠影、渴望在旅行中触摸生活质地和历史纹理的旅人来说，奥贝奈都不是一个简单的“打卡点”。它是一个可以走进去的寓言，关于如何守护内在的丰饶，关于如何在变迁的洪流中保持自我的轮廓。专程为它而来，你会带走的，远比一张照片多得多。你会带走一片阿尔萨斯的天空，一种关于“家园”的、坚实而温暖的想象。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orange-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥朗日凯旋门与古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orange Roman Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-cirq-lapopie" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣锡尔克拉波皮</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Cirq-Lapopie</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
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
