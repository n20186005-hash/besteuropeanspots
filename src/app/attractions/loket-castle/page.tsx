import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛克特城堡 Loket Castle｜探访“波西米亚的钥匙”，巨石之上囚禁过皇帝与文豪的千年要塞 - 最佳欧洲景点',
  description: '当我第一眼看到洛克特城堡时，它不像一座建筑，更像是一块被岁月和河水雕琢成城堡形状的巨型岩石，从大地深处生长出来。你得穿过那座童话般的中世纪小镇，石板路在脚下发出清脆的回响，空气中飘着烤烟囱卷的甜香和河边青苔湿润的气息。然后，奥赫热河突然在你面前拐了一个近乎完美的U形弯，像一条墨绿色的丝绒带子，温柔而...',
}

export default function LoketCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '洛克特', href: '/destinations/czech-republic' },
            { label: '洛克特城堡（波西米亚的钥匙）', href: '/attractions/loket-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛克特城堡（波西米亚的钥匙）・Loket Castle・捷克・洛克特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一眼看到洛克特城堡时，它不像一座建筑，更像是一块被岁月和河水雕琢成城堡形状的巨型岩石，从大地深处生长出来。你得穿过那座童话般的中世纪小镇，石板路在脚下发出清脆的回响，空气中飘着烤烟囱卷的甜香和河边青苔湿润的气息。然后，奥赫热河突然在你面前拐了一个近乎完美的U形弯，像一条墨绿色的丝绒带子，温柔而坚定地环抱起那块嶙峋的巨石。城堡就盘踞在巨石之顶，灰白色的墙壁与底下深色的岩体几乎融为一体，只有那些尖耸的塔楼和红瓦屋顶，宣告着人类文明的痕迹。那种感觉，不是“建造”了一座城堡，而是“驯服”了一块岩石。
走近了，才会发现它的威严。你得仰着头，沿着陡峭的坡道往上走，手边的岩石墙体冰冷粗糙，带着几个世纪的风霜触感。河水在下方几十米处静静流淌，反射着天空变幻的光。小镇色彩柔和的房屋像积木一样点缀在河湾对岸，与山顶城堡的冷峻形成奇妙的对话。这里不是一座孤立的纪念碑，而是小镇生活的绝对中心。你看那些在河岸咖啡馆晒太阳的当地人，他们聊天时，目光会不自觉地飘向山顶的城堡，仿佛那是一位沉默而备受尊敬的长辈，早已成为他们呼吸的一部分。
而它最打动我的，是那种“钥匙”般的双重性。从地理上看，它扼守河湾，确实是通往波西米亚腹地的门户钥匙。但从更深的层面，它像一把能够打开层层历史密室的钥匙。石头里封存着皇室的囚徒岁月，塔楼上镌刻着骑士的荣光与没落，地牢里回荡着囚犯的绝望低语，而图书馆里似乎还萦绕着歌德在此构思《浮士德》时的思想风暴。握紧这把“钥匙”，你仿佛能拧开一扇门，走进一个远比城堡石墙更加辽阔、充满故事的世界。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一眼看到洛克特城堡时，它不像一座建筑，更像是一块被岁月和河水雕琢成城堡形状的巨型岩石，从大地深处生长出来。你得穿过那座童话般的中世纪小镇，石板路在脚下发出清脆的回响，空气中飘着烤烟囱卷的甜香和河边青苔湿润的气息。然后，奥赫热河突然在你面前拐了一个近乎完美的U形弯，像一条墨绿色的丝绒带子，温柔而坚定地环抱起那块嶙峋的巨石。城堡就盘踞在巨石之顶，灰白色的墙壁与底下深色的岩体几乎融为一体，只有那些尖耸的塔楼和红瓦屋顶，宣告着人类文明的痕迹。那种感觉，不是“建造”了一座城堡，而是“驯服”了一块岩石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，才会发现它的威严。你得仰着头，沿着陡峭的坡道往上走，手边的岩石墙体冰冷粗糙，带着几个世纪的风霜触感。河水在下方几十米处静静流淌，反射着天空变幻的光。小镇色彩柔和的房屋像积木一样点缀在河湾对岸，与山顶城堡的冷峻形成奇妙的对话。这里不是一座孤立的纪念碑，而是小镇生活的绝对中心。你看那些在河岸咖啡馆晒太阳的当地人，他们聊天时，目光会不自觉地飘向山顶的城堡，仿佛那是一位沉默而备受尊敬的长辈，早已成为他们呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动我的，是那种“钥匙”般的双重性。从地理上看，它扼守河湾，确实是通往波西米亚腹地的门户钥匙。但从更深的层面，它像一把能够打开层层历史密室的钥匙。石头里封存着皇室的囚徒岁月，塔楼上镌刻着骑士的荣光与没落，地牢里回荡着囚犯的绝望低语，而图书馆里似乎还萦绕着歌德在此构思《浮士德》时的思想风暴。握紧这把“钥匙”，你仿佛能拧开一扇门，走进一个远比城堡石墙更加辽阔、充满故事的世界。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛克特城堡（波西米亚的钥匙）`} />
                <InfoRow label="英文名称" value={`Loket Castle`} />
                <InfoRow label="正式名称" value={`Loket Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`洛克特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被誉为“波西米亚的钥匙”，是守护捷克西部边境近千年的战略与权力中心。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于被奥赫热河马蹄形弯道环抱的巨大花岗岩礁石之上的罗马式城堡，岩石本身就是其最宏伟的基座。`} />
                <InfoRow label="建筑风格" value={`以12世纪罗马式风格为基础，历经哥特式加固与文艺复兴时期的改造，呈现出独特的混合风貌。`} />
                <InfoRow label="文化价值" value={`不仅是军事要塞，更是波西米亚历史的重要见证者，其地牢曾囚禁过未来皇帝，其厅堂曾启发过文学巨匠歌德。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但季节变化显著。四月至十月：每日上午9点至下午4点（最后入场时间）。十一月至三月：仅周末开放，时间为上午10点至下午3点，且部分内部区域（如刑具博物馆）可能关闭。重要提示：冬季天气恶劣时城堡可能临时关闭，出行前务必查看官网通知。全年每逢周一闭馆（若周一为公共节假日则顺延至周二闭馆）。`} />
              <InfoRow label="门票价格" value={`标准成人票：150捷克克朗。优惠票（学生、6-15岁儿童、65岁以上老人）：100捷克克朗。家庭票（2大+最多3小）：380捷克克朗。6岁以下儿童免费。门票包含所有常规开放区域导览，包括城堡博物馆、地牢、塔楼等。额外付费项目：英语或德语语音导览设备租赁（50克朗），特定主题的导游讲解团需提前预约，价格另计。`} />
              <InfoRow label="地址" value={`náměstí Jiráskových 96, 357 33 Loket, Czechia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是卡尔斯巴德机场（Karlovy Vary Airport，KLV），距离约15公里。从机场出发，最便捷的方式是乘坐出租车，车程约25分钟，费用约500-700捷克克朗。从布拉格出发，可乘火车或巴士。火车需在卡尔斯巴德（Karlovy Vary）换乘区域列车，总耗时约3.5小时，班次每小时1-2班。更推荐从布拉格乘坐直达巴士前往卡尔斯巴德（约2小时），再从卡尔斯巴德巴士总站换乘当地340路或15路巴士前往洛克特镇，车程约30分钟，班次频繁。自驾是最灵活的方式，沿E48公路从卡尔斯巴德驶出，有清晰路标，车程20分钟。城堡位于镇中心山顶，从巴士站步行上山约10分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于洛克特最早的传说，就带着王权与背叛的色彩。据说在10世纪，波西米亚公爵瓦茨拉夫（后来的圣瓦茨拉夫）曾被他的兄弟波列斯瓦夫囚禁在此。这个传说真假难辨，却为城堡奠定了它最初的角色基调——一个关乎权力、阴谋与禁锢的地方。真正有史料记载的坚固城堡，出现在12世纪中期。那时，普热米斯尔王朝的国王们需要一座坚不可摧的前哨，来守卫王国西部边境，抵御来自神圣罗马帝国的压力。于是，他们选中了奥赫热河这个天赐的拐弯。工匠们没有平地起高楼，而是巧妙地利用整块花岗岩礁石，在它的顶部和边缘修筑起厚重的罗马式城墙和塔楼。城堡由此得名“Loket”，在捷克语中正是“手肘”的意思，形象地描述了河道在此的急转弯。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡命运的转折点，与一位小男孩息息相关。那是在14世纪初，当时还是孩子的未来的皇帝查理四世，曾被他的父亲约翰带来洛克特城堡居住。然而，根据一些充满戏剧性的编年史记载，查理四世后来也曾一度被软禁于此。这段可能并不愉快的童年经历，反而让查理四世终生对这座城堡及其所在的地区怀有特殊感情。他登基后，颁布法令将洛克特城堡列为“不可割让的王室城堡”之一，并大力推动了其从军事要塞向宜居宫殿的转变，增加了哥特式的宫殿建筑。可以说，是查理四世亲手为这把“波西米亚的钥匙”镀上了皇家的金边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平与繁荣在波西米亚的土地上总是脆弱的。十五世纪的胡斯战争风暴席卷而来，作为天主教势力重要据点的洛克特城堡遭受了猛烈的围攻。城墙在炮火中崩塌又重建，见证了信仰冲突的残酷。战火平息后，城堡迎来了新的主人——富有而有权势的施利克家族。他们为城堡带来了文艺复兴的春风，将内部装饰得富丽堂皇，修建了优雅的拱廊。城堡从一个纯粹的军事堡垒，逐渐变成了一个展现家族财富与品味的高贵府邸。舞会的音乐曾在这里响起，取代了战场的号角。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史的车轮滚滚向前，城堡的军事价值在近代逐渐褪色。它甚至一度被改造成令人闻之色变的省级监狱，那些曾经举办盛宴的大厅变成了阴冷的牢房。有趣的是，正是在它作为监狱的“低谷”时期，却迎来了一位特殊的“文化囚徒”——1770年，据说大名鼎鼎的风流浪子兼作家贾科莫·卡萨诺瓦在逃亡途中，也曾在此短暂“做客”（或者说被拘留）。而更具文化意义的是，19世纪初，德国文豪歌德多次到访洛克特，被其深沉的历史氛围和浪漫的地理环境深深吸引。城堡的图书馆、地牢和周围嶙峋的岩石景观，都为他晚年创作《浮士德》第二部分提供了无尽的灵感。从囚禁皇帝的牢笼，到启迪文豪的缪斯，洛克特完成了它角色中最富诗意的一次转换。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整感受洛克特城堡的魂，建议安排至少4-5小时的深度游览。最佳抵达时间是上午9点开门时，既能享受清晨柔和的光线拍摄城堡全景，又能避开午后可能出现的旅游团人潮。整体节奏宜慢不宜快，因为这里需要你用脚步丈量历史的高度，用想象力填充石墙间的寂静。路线设计上，遵循由外及内、自下而上、再从历史沧桑回归小镇烟火的原则：先从河对岸远观全貌，然后进入城堡由底层阴暗的地牢开始，逐步向上探索生活区域和博物馆，最终登顶塔楼获得豁然开朗的视野，最后下山融入小镇的悠闲生活。这样的安排，如同一场精心编排的三幕剧，带你完整经历城堡的过去与现在。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内大部分通道和楼梯都非常狭窄陡峭且石面光滑，务必穿一双防滑舒适的鞋子，女士避免高跟鞋。
地牢和部分通道温度极低，即使夏天也感觉阴冷，建议随身带一件薄外套。
小镇和城堡区域内英语标识有限，提前下载好离线翻译软件或城堡的电子导览会对理解有很大帮助。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从河对岸“美洲”观景台起步，用长焦镜头或仅仅是双眼，捕捉城堡与河水、小镇共同构成的、如古典油画般的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石桥进入小镇，沿着上坡的主街漫步，让两侧糖果色的巴洛克小屋和空气中咖啡香为你铺垫情绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡售票处领取一份地图，然后毫不犹豫地先钻进阴凉潮湿、石壁滴水的地下牢房，感受那种瞬间袭来的、几个世纪都未散去的寒意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶向上，进入罗马式宫殿大厅，仰头观察那些幸存下来的古老肋拱，想象骑士们在此聚会的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在文艺复兴展厅停留，细看施利克家族留下的华丽瓷器和家具，对比地下监狱，体会城堡功能变迁的戏剧性。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个陈列着巨大铸铁钥匙的房间，亲手触摸一下“波西米亚钥匙”的复制品，感受其沉甸甸的历史分量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬最后一段最为陡峭的木梯，登上城堡主塔的瞭望台，让360度的风毫无遮拦地吹过，将整个河湾小镇尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后方的步道缓缓下山，直奔河畔那家最有名的露天咖啡馆，点一杯比尔森啤酒，对着城堡发一会儿呆。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河对岸“美洲”观景台（Vyhlídka Amerika）`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前两小时，阳光会为城堡岩石镀上金边，使用广角镜头将蜿蜒的河流与城堡全景一同纳入，前景可带入一些河岸绿植增加层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主塔楼顶部瞭望台`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分光线最好，适合拍摄小镇全景，可清晰拍到河流完美的马蹄形弯道和远处群山，建议用长焦镜头拉近拍摄小镇屋顶的细节与质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡内部拱廊庭院`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光斜射入庭院，在石柱和墙面上形成美妙的光影分割线，适合拍摄建筑结构与光影互动的极简风格作品，人物侧影会非常出彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下牢房区域`}</h4>
                  <p className="text-sm text-gray-700">{`利用手机或相机的夜间模式，在不使用闪光灯的前提下，拍摄那些由铁栏窗口透入的、投射在古老石壁上的束状光线，营造神秘而富有故事感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡外围城墙步道`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，从步道上拍摄城堡塔楼与下方陡峭岩石断面的结合部，突出其“生长于岩石”的惊人建筑特色，构图时可将一部分狰狞的原始岩石作为前景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分区域允许拍照，但禁止使用闪光灯和三脚架（小型八爪鱼支架或可通融），这是为了保护珍贵的壁画和展品。`}</li>
                <li>• {`无人机飞行在城堡及小镇上空有严格限制，需提前查询当地法规，通常未经许可是禁止飞行的，以避免对古建筑和游客安全造成影响。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在洛克特小镇中心的家庭式 Pension，推开木窗就能看见城堡塔尖，晚上能听到河水流淌的白噪音，主人会为你手绘一份只有本地人才知道的散步地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`尝试卡尔斯巴德（车程20分钟）的经典温泉酒店，享受一次传统的温泉疗养，晚上在华丽的柱廊下散步，感受波西米亚温泉之都的黄金时代余韵。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住洛克特周边森林里的木质度假小屋，拥有私人的桑拿房和面向森林的露台，清晨在鸟鸣中醒来，徒步即可到达城堡后山的隐秘观景小径。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端奢华`}</h4>
                  <p className="text-sm text-purple-800">{`下榻卡罗维发利（车程30分钟）五星级大饭店的歷史套房，仿佛置身于古典电影场景，酒店本身即是建筑艺术品，并提供专车接送前往洛克特城堡的尊享服务。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`洛克特小镇本身非常迷你且安静，夜间娱乐活动很少，适合寻求宁静时光的旅人；若喜欢更多餐饮和夜间生活选择，建议以卡尔斯巴德为住宿基地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）和圣诞市场期间是旺季，住宿紧张且价格上浮，务必提前数月预订，尤其是特色酒店和温泉酒店。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`该地区治安良好，但小镇夜间照明较暗，保存好住宿地址，以免在迷宫般的小巷中迷路。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开洛克特的时候，我手里仿佛真的握着一把无形的钥匙。它不是用来打开某扇具体的门，而是用来解开心中关于“历史”这个词的某种僵化印象。历史不总是博物馆玻璃柜后冰冷的知识点，也不仅仅是教科书上遥远的年份。在这里，历史是脚下被无数人磨得发亮的石阶的触感，是地牢石壁上渗出的水珠的凉意，是塔楼顶上吹过耳畔、也曾吹过查理四世和歌德脸庞的同一阵风。洛克特城堡用它沉默的巨石之躯告诉我们，历史是可触摸、可感受、甚至可以与之并肩站立的一段绵延至今的生命体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快、新、变的时代，洛克特的存在是一种温柔的抵抗。它提醒我们，有些价值需要站在一块坚硬的岩石上，经过千百年的河水冲刷、战火洗礼、王朝更迭，才能沉淀下来。它不仅仅是“波西米亚的钥匙”，更是打开我们与更深厚时间维度连接的一把钥匙。每一位热爱深度游的旅人都该来此，不是为了收集又一个城堡的打卡照，而是为了让自己静下来，听石头讲述那些关于禁锢与自由、权力与灵感、毁灭与重生的永恒故事。在这里，你会明白，真正的旅行，是让远方的风景，最终变成照见自己内心的一面古老而明亮的镜子。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesky-krumlov-castle-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁姆洛夫（CK小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cesky Krumlov</p>
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
