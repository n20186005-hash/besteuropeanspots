import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞雷 Serres｜探索群山环抱的拜占庭古城与震撼地下堡垒 - 最佳欧洲景点',
  description: '车子驶离高速公路，拐进群山怀抱的谷地时，你会立刻明白为什么拜占庭的将军们选择了这里。塞雷不是那种贴着爱琴海明信片标签的希腊城市。空气是清冽的，带着松针和远处农田的干燥气味，四周的山峦像沉默的巨人手臂，将这个城市温柔而坚定地拢在掌心。第一眼望去，它有些低调，甚至朴素，但你的视线很快会被城市尽头那座隆起',
}

export default function SerresByzantineAcropolisRoupelFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '塞雷', href: '/destinations/europe' },
            { label: '塞雷', href: '/attractions/serres-byzantine-acropolis-roupel-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塞雷・Serres・希腊・塞雷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离高速公路，拐进群山怀抱的谷地时，你会立刻明白为什么拜占庭的将军们选择了这里。塞雷不是那种贴着爱琴海明信片标签的希腊城市。空气是清冽的，带着松针和远处农田的干燥气味，四周的山峦像沉默的巨人手臂，将这个城市温柔而坚定地拢在掌心。第一眼望去，它有些低调，甚至朴素，但你的视线很快会被城市尽头那座隆起的山丘吸引——那里，在午后的阳光下，一片斑驳的土黄色遗迹如王冠般嵌在山顶，那就是古老的卫城，它不像雅典卫城那样喧嚣夺目，而是像一位打盹的老者，与山体几乎融为一体。
走在塞雷的老街区，你会听到一种奇妙的混响。咖啡店里传来清脆的希腊语交谈声和杯碟碰撞声，而远处教堂的钟声浑厚悠长，偶尔夹杂着摩托车驶过卵石路的突突声。这里的节奏很慢，老人们坐在广场的梧桐树下，一局棋可以下一个下午。但你若仔细观察，会发现在这些日常景象的背后，历史从未远离。面包店隔壁可能就是一堵嵌着罗马碎石的墙基；晾晒着床单的阳台上，可能正对着奥斯曼时期某位帕夏宅邸的雕花木窗。塞雷的魅力，就在于这种历史与生活的无缝编织，它不专门为你表演，它就在那里生活着。
而当你驱车向北，朝着与北马其顿接壤的边境山脉进发时，景色的气质陡然一变。田园风光被陡峭的岩壁和密林取代，山路盘旋，气氛变得肃穆。直到你看见那些几乎与山石同色的混凝土入口，像巨兽的鼻孔般隐藏在山体褶皱里——鲁佩尔堡垒到了。这里的感觉与山下温吞的古城截然不同，一种冷凝的、金属般的历史重量压在肩头。走进地下堡垒阴冷的通道，呼吸着混杂着铁锈和旧混凝土的独特气味，你会瞬间被拉入另一个时空。塞雷最打动人心的，正是这种极致的反差：阳光下绵延千年的日常生活，与深埋山体中那一段浓墨重彩、关乎存亡的激烈历史，在此地形成了震撼人心的对话。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离高速公路，拐进群山怀抱的谷地时，你会立刻明白为什么拜占庭的将军们选择了这里。塞雷不是那种贴着爱琴海明信片标签的希腊城市。空气是清冽的，带着松针和远处农田的干燥气味，四周的山峦像沉默的巨人手臂，将这个城市温柔而坚定地拢在掌心。第一眼望去，它有些低调，甚至朴素，但你的视线很快会被城市尽头那座隆起的山丘吸引——那里，在午后的阳光下，一片斑驳的土黄色遗迹如王冠般嵌在山顶，那就是古老的卫城，它不像雅典卫城那样喧嚣夺目，而是像一位打盹的老者，与山体几乎融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在塞雷的老街区，你会听到一种奇妙的混响。咖啡店里传来清脆的希腊语交谈声和杯碟碰撞声，而远处教堂的钟声浑厚悠长，偶尔夹杂着摩托车驶过卵石路的突突声。这里的节奏很慢，老人们坐在广场的梧桐树下，一局棋可以下一个下午。但你若仔细观察，会发现在这些日常景象的背后，历史从未远离。面包店隔壁可能就是一堵嵌着罗马碎石的墙基；晾晒着床单的阳台上，可能正对着奥斯曼时期某位帕夏宅邸的雕花木窗。塞雷的魅力，就在于这种历史与生活的无缝编织，它不专门为你表演，它就在那里生活着。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你驱车向北，朝着与北马其顿接壤的边境山脉进发时，景色的气质陡然一变。田园风光被陡峭的岩壁和密林取代，山路盘旋，气氛变得肃穆。直到你看见那些几乎与山石同色的混凝土入口，像巨兽的鼻孔般隐藏在山体褶皱里——鲁佩尔堡垒到了。这里的感觉与山下温吞的古城截然不同，一种冷凝的、金属般的历史重量压在肩头。走进地下堡垒阴冷的通道，呼吸着混杂着铁锈和旧混凝土的独特气味，你会瞬间被拉入另一个时空。塞雷最打动人心的，正是这种极致的反差：阳光下绵延千年的日常生活，与深埋山体中那一段浓墨重彩、关乎存亡的激烈历史，在此地形成了震撼人心的对话。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塞雷`} />
                <InfoRow label="英文名称" value={`Serres`} />
                <InfoRow label="正式名称" value={`Serres`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`塞雷`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了拜占庭帝国荣光、奥斯曼统治与二战烽火的希腊北方战略重镇，其边境堡垒是希腊现代史上“Ohi Day”（说不日）精神的象征地。`} />
                <InfoRow label="建筑特色" value={`山顶卫城遗迹与自然山岩融为一体，而庞大的钢筋混凝土地下堡垒群则隐藏于边境山脉之中，构成地上千年古迹与地下现代工事并存的奇观。`} />
                <InfoRow label="建筑风格" value={`拜占庭时期防御工事基础与奥斯曼时期改造痕迹混杂，而鲁佩尔堡垒则是20世纪早期混凝土军事建筑的典型代表。`} />
                <InfoRow label="文化价值" value={`它不仅是希腊马其顿地区鲜为人知的历史文化宝库，更是理解希腊近代民族抗争、巴尔干复杂地缘政治的活态教科书。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`拜占庭卫城遗迹区域全天开放，但建议在日出至日落期间游览以确保安全。鲁佩尔堡垒博物馆及地下部分开放时间为每周三至周日上午9:00至下午4:00，周一和周二闭馆。冬季（11月至3月）开放时间可能缩短至下午3:00关闭。具体安排可能因天气和特殊纪念活动临时调整，建议出行前查阅当地市政网站。`} />
              <InfoRow label="门票价格" value={`拜占庭卫城遗迹免费参观。鲁佩尔堡垒及博物馆门票价格为：全票8欧元，65岁以上长者及学生票5欧元，12岁以下儿童免费。持有希腊考古卡可免费进入。每月第一个周日为免费开放日。门票包含地下堡垒群导览图一份。`} />
              <InfoRow label="地址" value={`拜占庭卫城：Oreines Periohes, Serres 621 00, Greece
鲁佩尔堡垒：Roupel Fortress, Serres-Macedonia Border, 621 00, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是塞萨洛尼基马其顿国际机场。从机场出发，最便捷的方式是租车自驾，沿E90/A2高速公路向东北方向行驶约90公里，车程1小时15分钟即可抵达塞雷市中心。也可在塞萨洛尼基火车站乘坐城际巴士，班次约每小时一班，车程约1小时45分钟。从塞雷市中心前往鲁佩尔堡垒，需向北驱车约25公里，沿途山路蜿蜒，建议驾驶经验丰富的司机操作，全程约40分钟。本地无公共交通直达堡垒，建议参加当地旅行社组织的半日游小团（通常上午9点从市中心发车）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞雷的故事，始于它无可替代的地理位置。这座躺在一条丰饶河谷中的城市，被沃蒂山和克迪尼亚山紧紧护卫，自古就是连接爱琴海与巴尔干内陆的咽喉要道。早在公元前5世纪，这里就有色雷斯人定居的痕迹。但真正让它登上历史舞台的，是拜占庭帝国。大约在9世纪，或许更早，帝国的战略家们看中了这座易守难攻的山丘，开始修筑坚固的城墙和塔楼，将其打造成帝国北方防线“克来苏拉”体系中的重要一环。你如今在卫城看到的那些巨大的、不规则的石块垒砌的墙基，大多就源于那个帝国鼎盛的时代。当时的塞雷，不仅是军事堡垒，也是繁荣的行政和宗教中心，山脚下兴起的市集，商队往来不绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点出现在1204年，第四次十字军东征的混乱中，帝国都城君士坦丁堡陷落。塞雷也未能幸免，在拉丁帝国、保加利亚帝国与残存的拜占庭势力之间反复易手，城墙在一次次的围城战中破损又修补。1345年，它最终落入了强大的塞尔维亚帝国君主斯特凡·杜尚之手，这位野心勃勃的统治者甚至一度计划在此加冕为“塞尔维亚人与希腊人的皇帝”。这段塞尔维亚统治时期，为城市留下了独特的文化印记。但巴尔干的权力游戏从未停歇，1430年，奥斯曼帝国的大军经过长期围困，最终征服了塞雷。在奥斯曼漫长的统治下，城市的面貌被深刻改变。卫城的军事功能逐渐减退，山脚下发展出了典型的奥斯曼式街区：带有内庭的宅邸、公共浴室、繁华的巴扎和数座清真寺的尖塔加入了天际线。城市成为了一个多元的商贸中心，希腊人、土耳其人、犹太人、保加利亚人比邻而居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正将塞雷深深烙入现代希腊国家记忆的，是20世纪的风云激荡。1913年，在两次巴尔干战争后，它终于成为希腊的一部分。但和平短暂，随着二战阴云密布，希腊的梅塔克萨斯政权为了抵御北方的轴心国威胁，启动了宏大的边境防线工程。于是，在塞雷以北的鲁佩尔山口，这个自古以来的兵家必争之地，一场秘密而浩大的工程开始了。从1936年到1940年，数千工人在极端保密的状态下，利用山体的天然岩石结构，浇筑了庞大如迷宫般的钢筋混凝土地下堡垒群。指挥部、营房、医院、弹药库、炮台，一切都被深埋在山腹之中，通过数公里长的隧道相连。它的设计极其先进，能够承受重炮的直接轰击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1940年10月28日，意大利独裁者墨索里尼向希腊发出最后通牒，要求允许意军进入希腊领土。希腊总理梅塔克萨斯给出了那个载入史册的回答：“Ohi！”（不！）几个小时后，战争在包括鲁佩尔在内的希腊-阿尔巴尼亚边境全线爆发。鲁佩尔堡垒的守军凭借坚固的工事和惊人的勇气，顶住了敌军优势兵力的猛攻，成了希腊军队顽强抵抗的象征。这场胜利极大地鼓舞了同盟国的士气。尽管希腊最终未能抵挡住后来德军的大规模进攻，但“Ohi Day”和鲁佩尔的精神，至今仍是希腊民族尊严和抵抗精神的最高象征。战后，堡垒部分区域被保留下来作为博物馆和爱国主义教育基地，那些冰冷的混凝土墙和生锈的炮管，无声地诉说着当年那份掷地有声的“不”。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受塞雷的双重灵魂，建议安排一整天的深度游览。最佳方式是上午探访拜占庭卫城，感受历史的悠长脉络与城市的全景；下午则驱车深入北部山区，沉浸于鲁佩尔堡垒那令人窒息的近代史现场。建议早上8点左右抵达卫城山脚，此时光线柔和，游客稀少，可以静静聆听古城的苏醒。在山顶和古城街区漫步约3-4小时。午后1点前返回市中心用一顿轻松的午餐。下午2点驱车前往鲁佩尔堡垒，山路驾驶需时，预留约40分钟。在堡垒博物馆和地下工事中沉浸式参观需要至少2.5小时。傍晚时分返回，正好可以在日落时分从远处回望笼罩在金色余晖中的卫城，完成一次从古到今、再从今溯古的精神循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`鲁佩尔堡垒地下温度常年低于15度，且通道潮湿，务必带上一件保暖外套和防滑的鞋子。参观堡垒最好提前通过当地旅游信息中心预约英语导览，否则可能错过很多隐藏房间和精彩解说。自驾山路务必谨慎，春季和秋季午后山区易起雾，建议尽早出发。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从卫城西侧缓坡开始徒步，踩着被露水微微打湿的碎石小路，看第一缕阳光将巨大城墙的阴影投在脚下的橄榄树林`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上卫城制高点，倚靠着千年石墙，顺时针环视一圈，将脚下红瓦老城、远处平畴沃野与四面如屏的群山尽收眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着城墙的残垣断壁慢慢向东探索，寻找那些被嵌在墙体内、刻着十字架和模糊文字的拜占庭时期砖石`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后钻进山脚迷宫般的奥斯曼老街区，任由自己在狭窄的巷弄里“迷失”，邂逅一个转角处突然出现的古老喷泉或爬满九重葛的院落`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城区中心广场的百年咖啡馆坐下，点一杯苦涩的希腊咖啡，看当地人如何将历史遗迹作为日常生活的背景板`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后驾车沿着蜿蜒的山路向北，感受窗外的景色从田园诗切换成险峻的边境山脉，气氛逐渐变得肃穆`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进鲁佩尔堡垒那如同巨兽咽喉的混凝土入口，瞬间被地下的阴冷和寂静包裹，只能听见自己脚步的回声和远处隐约的滴水声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在堡垒最深处的地下指挥所里，触摸那些冰冷的通讯设备和泛黄的地图，想象1940年秋天这里弥漫的紧张与决绝`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卫城全景捕捉点`}</h4>
                  <p className="text-sm text-gray-700">{`在卫城东侧下方约200米处的一片古老橄榄园中，用长焦镜头压缩空间，将沧桑的城墙、老城的红瓦屋顶与背景连绵的群山框入同一画面，最佳时间是日出后一小时，侧光让石头纹理毕现`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老城烟火气街角`}</h4>
                  <p className="text-sm text-gray-700">{`位于Agios Nikolaos教堂背后的小巷，下午四点的光线斜射进来，拍摄当地老人坐在门廊下阅读报纸，前景是斑驳的彩色木门，背景是隐约可见的卫城山体`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`堡垒入口的压迫感`}</h4>
                  <p className="text-sm text-gray-700">{`站在鲁佩尔堡垒主入口外约十米处，使用广角镜头仰拍，将混凝土掩体粗粝的质感和上方嶙峋的山岩一同纳入，阴天时更能突出其冷峻、沉重的氛围`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下长廊的纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`进入堡垒主隧道后，找到一个有零星应急灯照明的笔直段落，将相机放在地面低机位拍摄，利用隧道灯光的渐灭效果和地面的反光，营造出深邃无尽、引人探究的视觉效果`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`边境瞭望台的远眺`}</h4>
                  <p className="text-sm text-gray-700">{`在堡垒上方开放的露天观测平台，使用中焦段拍摄，将前景生锈的瞭望仪器、中景希腊的森林与远景北马其顿的领土山脉进行分层构图，日落时分天空色彩最为丰富`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在鲁佩尔堡垒内部，严格禁止使用闪光灯，一方面保护历史遗迹，另一方面也是为了保持那份应有的肃穆感。拍摄当地居民，尤其是长者，请务必先微笑致意，获得默许后再举起相机，这是一种基本的尊重。边境区域设有军事禁区标识，切勿拍摄任何军事设施或边防人员。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心遗产酒店`}</h4>
                  <p className="text-sm text-blue-800">{`由一座19世纪的新古典主义商宅改造而成，房间挑高极高，保留了原始的彩绘天花板和厚重的木地板，开窗就能看到卫城的侧影，夜晚无比宁静`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭式传统石屋`}</h4>
                  <p className="text-sm text-green-800">{`坐落在卫城山脚下的老街区里，由热情的老夫妇经营，石头小屋带有小小的庭院，早餐能吃到自家制作的果酱和新鲜羊奶酪，仿佛住在希腊亲戚家`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山区隐居小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于前往鲁佩尔堡垒半途的山村中，独立的小木屋拥有面对森林峡谷的无敌露台，夜晚只有星空和溪流声作伴，是深度自然爱好者的完美选择`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感精品公寓`}</h4>
                  <p className="text-sm text-purple-800">{`位于塞雷现代城区边缘的LOFT公寓，由旧仓库改造，工业风设计中巧妙融入了拜占庭图案元素，提供自行车租赁，方便探索城市的不同面貌`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果主要目标是探访鲁佩尔堡垒，强烈建议选择山区小屋，可以节省次日大量往返交通时间，并体验绝美的山间晨昏。老城区的住宿周末可能较热闹（本地人也会来度假），但周日夜晚会回归宁静。旺季（7-8月）建议提前一个月预订，尤其是特色住宿非常抢手。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开塞雷许久，两种截然不同的触感依然留在记忆里：一种是午后卫城石墙上阳光的温热，粗糙却踏实；另一种是鲁佩尔堡垒地下通道里混凝土墙壁的沁凉，坚硬而沉重。这座城市教会我的，是历史的层次感并非总是清晰分明地上下叠压，它也可以是并置的、交织的、对话的。你可以在同一个白天，上午漫步于千年帝国的残垣，听风声讲述着商队与传教士的故事；下午则潜入山腹，在绝对的寂静中感受不到一个世纪前，一个民族为了说“不”而将意志浇筑进钢筋混凝土的瞬间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、崇尚光滑表面的时代，塞雷显得有点“不合时宜”。它没有精心包装的游客区，它的荣耀与伤痕都赤裸地呈现着，需要你用自己的脚步去丈量，用自己的呼吸去感受。但正是这份“不合时宜”，让它成为了深度旅行者的一剂良药。它让我们明白，真正的历史不是教科书上扁平的文字，而是山风的味道、石头的温度、地下通道里回响的脚步声，以及生活在其间的人们那从容不迫的眼神。如果你厌倦了那些被拍烂的明信片角度，渴望一场与土地、记忆和坚韧精神的真实对话，那么，请来塞雷。这里群山环抱，故事深埋，它等待的，正是一个愿意侧耳倾听的旅人。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kastoria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯托里亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastoria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chania-venetian-port-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚威尼斯港</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Venetian Port of Chania</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monemvasia-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫奈姆瓦夏</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monemvasia</p>
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
