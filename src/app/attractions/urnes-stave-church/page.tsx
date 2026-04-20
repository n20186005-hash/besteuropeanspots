import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌尔内斯木板教堂 Urnes Stave Church｜北欧维京木雕绝唱与千年森林低语 - 最佳欧洲景点',
  description: '当你终于绕过吕斯特峡湾最后一个弯道，乌尔内斯木板教堂就那么安静地、几乎有些谦卑地矗立在森林与深蓝峡湾交界的一小片缓坡上。第一眼望去，它没有哥特式教堂刺破苍穹的野心，更像一座被时光遗忘的巨大、古朴的木制谷仓，深褐色的木墙饱经风霜，覆着墨绿色的苔藓。空气里是挪威西部特有的湿润——混合了云杉的树脂香、峡湾...',
}

export default function UrnesStaveChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '乌尔内斯木板教堂', href: '/attractions/urnes-stave-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌尔内斯木板教堂・Urnes Stave Church・挪威・韦斯特兰郡，吕斯特市镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你终于绕过吕斯特峡湾最后一个弯道，乌尔内斯木板教堂就那么安静地、几乎有些谦卑地矗立在森林与深蓝峡湾交界的一小片缓坡上。第一眼望去，它没有哥特式教堂刺破苍穹的野心，更像一座被时光遗忘的巨大、古朴的木制谷仓，深褐色的木墙饱经风霜，覆着墨绿色的苔藓。空气里是挪威西部特有的湿润——混合了云杉的树脂香、峡湾的微咸水汽，还有古老木头在雨后散发出的、略带甜味的腐朽气息。四下寂静，只有风声穿过森林树梢的沙沙声，以及远处山坡上清脆的羊铃叮当。
走近了，那种穿越千年的震撼才扑面而来。教堂的外墙木板，历经九百年雨雪，纹理像老人的皮肤一样深邃而布满故事。但真正的灵魂，藏在它那扇著名的南侧门廊上。你的视线会被那些缠绕的、充满力量的木雕彻底攫住。那不是中世纪圣徒肃穆的面孔，而是龙、蛇、四足兽，它们彼此撕咬、纠缠，形成一种令人屏息的动态漩涡。雕刻线条流畅而狂野，分明是维京长船上兽首的魂灵，却被巧妙地编织进基督教十字架的框架里。指尖轻轻拂过那些被无数代朝圣者触摸得光滑温润的浮雕，你能感受到刀斧的凿痕，仿佛能听见千年前那位无名工匠在挪威短暂的夏日阳光下，全神贯注呼吸的声音。
这座教堂至今不是冰冷的博物馆。在夏季有限的开放日里，你可能会遇到本地守护人的后代，他们用轻柔的挪威语向访客讲述家族与教堂的故事。阳光从高处狭小的窗户斜射进来，在古老的木地板上投下几道金色的光柱，灰尘在光中飞舞，像是被惊扰的时光碎片。没有电灯，没有暖气，只有木头、石头和信仰本身。这里的一切都提醒你，信仰最初的样子，可以如此质朴、如此有力，与脚下的土地和身后的森林血脉相连。它不像欧洲大陆那些巨石教堂宣扬着神权的无上，而是在北欧严酷的自然环境中，展现着人类用最本地材料，守护内心火种的执着与智慧。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于绕过吕斯特峡湾最后一个弯道，乌尔内斯木板教堂就那么安静地、几乎有些谦卑地矗立在森林与深蓝峡湾交界的一小片缓坡上。第一眼望去，它没有哥特式教堂刺破苍穹的野心，更像一座被时光遗忘的巨大、古朴的木制谷仓，深褐色的木墙饱经风霜，覆着墨绿色的苔藓。空气里是挪威西部特有的湿润——混合了云杉的树脂香、峡湾的微咸水汽，还有古老木头在雨后散发出的、略带甜味的腐朽气息。四下寂静，只有风声穿过森林树梢的沙沙声，以及远处山坡上清脆的羊铃叮当。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，那种穿越千年的震撼才扑面而来。教堂的外墙木板，历经九百年雨雪，纹理像老人的皮肤一样深邃而布满故事。但真正的灵魂，藏在它那扇著名的南侧门廊上。你的视线会被那些缠绕的、充满力量的木雕彻底攫住。那不是中世纪圣徒肃穆的面孔，而是龙、蛇、四足兽，它们彼此撕咬、纠缠，形成一种令人屏息的动态漩涡。雕刻线条流畅而狂野，分明是维京长船上兽首的魂灵，却被巧妙地编织进基督教十字架的框架里。指尖轻轻拂过那些被无数代朝圣者触摸得光滑温润的浮雕，你能感受到刀斧的凿痕，仿佛能听见千年前那位无名工匠在挪威短暂的夏日阳光下，全神贯注呼吸的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座教堂至今不是冰冷的博物馆。在夏季有限的开放日里，你可能会遇到本地守护人的后代，他们用轻柔的挪威语向访客讲述家族与教堂的故事。阳光从高处狭小的窗户斜射进来，在古老的木地板上投下几道金色的光柱，灰尘在光中飞舞，像是被惊扰的时光碎片。没有电灯，没有暖气，只有木头、石头和信仰本身。这里的一切都提醒你，信仰最初的样子，可以如此质朴、如此有力，与脚下的土地和身后的森林血脉相连。它不像欧洲大陆那些巨石教堂宣扬着神权的无上，而是在北欧严酷的自然环境中，展现着人类用最本地材料，守护内心火种的执着与智慧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌尔内斯木板教堂`} />
                <InfoRow label="英文名称" value={`Urnes Stave Church`} />
                <InfoRow label="正式名称" value={`Urnes Stave Church`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`韦斯特兰郡，吕斯特市镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是世界上最古老、保存最完好的木板教堂，是维京时代艺术与基督教信仰融合的唯一现存见证。`} />
                <InfoRow label="建筑特色" value={`完全由木材（松木和桦木）建造，采用复杂的“木板教堂”结构，以其入口门廊和山墙上精美绝伦、充满生命力的维京风格木雕而闻名于世。`} />
                <InfoRow label="建筑风格" value={`罗马式建筑风格，装饰上完美融合了前基督教时期的北欧动物艺术（乌尔内斯风格）与基督教十字架图案。`} />
                <InfoRow label="文化价值" value={`1997年被列入联合国教科文组织世界遗产名录，它不仅是挪威的国宝，更是理解北欧从异教信仰向基督教文明过渡的“活化石”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年6月中旬至8月下旬对外开放，具体时间为每日10:00至17:00。春季（5月-6月初）和秋季（9月）开放时间缩短，通常为周末或需预约参观。冬季（10月至次年4月）基本不对外开放。前往前务必在挪威文化遗产基金会官网核查最新开放日程。`} />
              <InfoRow label="门票价格" value={`成人票120挪威克朗。学生及老年人票90挪威克朗。家庭票（2大2小）300挪威克朗。持有挪威文化遗产基金会年卡者可免费进入。门票包含一份简短的印刷导览图。`} />
              <InfoRow label="地址" value={`Urnes, 6870 Ørsta, Norway`} />
              <InfoRow label="交通方式" value={`教堂坐落于松恩峡湾的支流吕斯特峡湾畔，交通本身即是一场探险。最近的交通枢纽是小镇“索尔瓦”（Sogndal）或“奥勒松”（Ålesund）。
从奥勒松出发：驾车沿E39号公路和Rv60公路行驶，约2.5小时，途中需搭乘两次汽车轮渡（Hareid-Sulesund和Festøy-Årvik），渡轮班次频繁，但务必提前查好时刻表。
从索尔瓦出发：驾车约1小时，需在“索尔瓦-菲耶兰”渡口搭乘渡轮横渡松恩峡湾主航道，抵达菲耶兰后，再沿风景壮丽的峡湾公路行驶约30分钟。最推荐的方式是夏季自驾，将这段旅程融入挪威西海岸的经典线路中。公共交通极其不便，班次稀少。
终极体验是从索尔瓦或附近的“卡于朋”乘坐观光船抵达乌尔内斯码头，步行5分钟即到，但船班每日仅1-2班。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解乌尔内斯，你必须先想象11世纪的挪威。维京时代渐近尾声，狂野的北欧海盗们开始从劫掠转向定居，基督教随着传教士和国王的权力从南方和英格兰传入这片土地。但旧的信仰——奥丁、托尔、那些关于世界树和巨狼的传说——仍然深深植根于人们的血液和艺术中。乌尔内斯教堂的建造，大约就在这个风云激荡的1130年左右。它并非凭空出现，考古发现证明，在现在这座教堂的地基上，至少还曾矗立过两座更早的木板教堂。如今我们看到的，是第三代，也是最辉煌的一代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`传说与一个叫“拉夫纳”的当地权贵家族紧密相连。他们可能既是这片峡湾土地的统治者，也是新信仰的积极推动者。教堂门廊上那些惊世骇俗的木雕，并非全新的创作。学者们震惊地发现，其中最重要的一块镶板（就是那条著名的、姿态优雅的“乌尔内斯风动物”）竟然是从前一座教堂的北墙上拆卸下来，翻转后重新安装到新教堂的门上的。这意味着什么？意味着建造者（或许是拉夫纳家族自己）有意地保存并强调了这些异教风格的遗产。这不是对过去的简单抛弃，而是一次深思熟虑的融合与对话。他们用维京人最擅长的木雕语言，来讲述一个新的、关于救赎的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂的建筑本身就是一部史诗。它采用了经典的“木板教堂”技术：巨大的木柱（“木板”）不是插入地面，而是立在横向的石基上，形成稳固的框架。墙壁由垂直的厚木板拼接而成，屋顶层层叠叠，像倒扣的船底——这技术无疑源自维京人登峰造极的造船工艺。在几乎没有金属钉子的时代，一切依靠精确的榫卯和木钉连接，以适应挪威冻土膨胀收缩的严酷环境。它能够幸存九百年，本身就是一个奇迹。它躲过了中世纪的宗教改革风暴（当时挪威许多木板教堂被拆毁），躲过了无数次峡湾的山体滑坡和严冬的暴雪，更躲过了现代化无差别的推土机。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的命运在19世纪迎来转折。随着浪漫民族主义的兴起，挪威人开始急切地寻找自己民族的根，这些古老、独特的木板教堂成为了国家认同的象征。乌尔内斯因其无与伦比的古老和艺术价值被推上神坛。艺术家、学者蜂拥而至，测量、临摹、研究。它不再仅仅是拉夫纳家族或当地教区的教堂，而成为了整个挪威的圣殿。19世纪70年代和20世纪初，它经历了两次重大的、审慎的修复，加固了结构，更换了严重腐朽的部件，但始终遵循“最小干预”的原则，保留了其灵魂。1997年，联合国教科文组织的金字招牌落下，正式确认了它属于全人类的地位。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你站在教堂内部，抬头仰望那些被烟熏黑的梁柱，你会明白它讲述的不仅是一部宗教史，更是一部生存史、一部艺术演变史。它见证了维京人如何放下战斧，拿起刨刀，将驰骋海洋的狂放精神，凝固成守护一方水土的永恒宁静。它是风暴过后，最深沉的回响。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天给乌尔内斯及其周边。最好在夏季一个晴朗的周三至周六前往（确保开放），上午10点前抵达。这样你能在第一批游客到来前，享受教堂外部和环境的绝对宁静。整体游览节奏宜慢不宜快，核心是“感受”而非“打卡”。先在外部环绕教堂两圈，从不同角度观察建筑与环境的融合。然后进入内部，沉浸至少45分钟，让眼睛适应昏暗光线，细品每一处细节。中午可在附近野餐或驱车前往附近小镇用餐。下午可进行轻松的峡湾畔徒步，从自然中回味上午的文化震撼。这样安排能让自然与人文体验相互滋养，获得完整的灵魂洗礼。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部严禁使用闪光灯，且空间狭小拥挤，大型背包需放在门口指定区域。
挪威西部天气变幻莫测，即使夏季也务必携带防风防水外套和一双适合走湿滑草地的鞋子。
教堂没有咖啡馆和商店，最近的餐饮和补给需驱车20分钟，请自备饮用水和简单零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在指定的绿地停车场，先别急着冲向教堂，沿着小路走到峡湾边的碎石滩，回望教堂在山水间的全貌，让第一印象被自然包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓步上坡，用手触摸教堂外墙那些粗糙而温润的古老木板，特别留意不同朝向木头的颜色和苔藓的差异。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必花至少二十分钟，沉浸在南门入口处那举世闻名的木雕门前，从左至右、从上到下细细观察每一只缠绕的动物和每一道流畅的刻痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开那扇厚重的木门，进入内部，在门槛处停留片刻，让眼睛适应昏暗，并深呼吸那独特的、混合了古老木头、蜡和时光的沉静气味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在中殿找个木长椅静静坐下，抬头看屋顶的桁架结构，聆听绝对的寂静或偶尔传来的风声，想象千百年来在此举行的婚礼、葬礼和弥撒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留意北墙附近那座简朴的讲坛和保存下来的中世纪壁画残片，感受与华丽南门截然不同的、内敛的宗教虔诚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，绕到建筑后方安静的墓地，读一读那些古老的墓碑，许多名字与看守教堂的家庭一脉相承。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着教堂旁的“历史小径”进行一段半小时的轻松森林徒步，这条路会带你经过教堂木材的原始取材地，并抵达一个可以俯瞰峡湾和教堂屋顶的观景台。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂南侧木雕门特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至中午的阳光能以最佳角度照亮门廊浮雕的立体感，蹲下以低角度拍摄，将一部分斑驳的木墙作为背景，突出雕刻的细腻与岁月痕迹。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从峡湾对岸的公路转弯处远眺`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头，在下午侧光时分（夏季约四五点），能将深色教堂、翠绿山坡、深蓝峡湾和倒影压缩在同一画面，构成经典挪威明信片视角。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`教堂内部中殿仰拍屋顶结构`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光从小窗射入时，站在中殿中央偏后位置，将相机对准屋顶交叉的梁木，等待一束光恰好照亮尘埃，能拍出极具神圣感和历史纵深的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`墓地角落望向教堂侧面`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚柔和光线下，以古老墓碑作为前景，聚焦后方教堂质朴的木墙和陡峭的屋顶，讲述生命与永恒的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`利用教堂东端小圆窗作为画框`}</h4>
                  <p className="text-sm text-gray-700">{`从教堂内部透过这扇唯一的小圆窗向外拍摄，将窗外的绿树和峡湾风景定格成一幅天然的动态油画。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在内部拍摄需极为谨慎，避免妨碍他人，且管理者可能禁止。`}</li>
                <li>• {`航拍器在挪威文化遗产地上空飞行有严格限制，未经许可以万不可在教堂上空放飞。`}</li>
                <li>• {`尊重隐私，避免正面拍摄在墓地旁沉思或祈祷的当地访客。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在半小时车程外的菲耶兰或索格达尔镇上的家庭式客栈或青旅，推开窗就是峡湾山景，晚上在公共厨房自己烹饪，能结识来自世界各地的徒步爱好者。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`预订吕斯特峡湾畔的百年农场改建的民宿，主人可能就曾是教堂的守护者家族后代，早餐能吃到自酿的果酱和新鲜羊奶酪，听主人用口音浓重的英语讲述祖辈的故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻奥勒松或巴勒斯特兰的精品设计酒店，这些酒店本身即是新艺术运动的建筑瑰宝，在享受现代舒适与绝美峡湾景观后，再专程驾车前往乌尔内斯朝圣，形成古今艺术的对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之梦`}</h4>
                  <p className="text-sm text-purple-800">{`在离教堂车程15分钟内的森林或峡湾边，租一间小而美的私人木屋，拥有全景落地窗和私人码头，白天探索教堂，夜晚在绝对的宁静中，看峡湾倒映星空，体会挪威人“深入自然”的生活哲学。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是挪威旅游旺季，韦斯特兰郡的优质住宿非常紧俏，务必提前至少3-4个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择峡湾边的住宿时，注意查看是否紧邻主要公路，如果对绝对安静有要求，建议选择需要乘船或深入支流小径才能抵达的隐秘之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这一带治安极好，民风淳朴，但所有住宿价格都偏高，这是体验挪威世界级风光与文化遗产的必然代价。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开乌尔内斯很久以后，那片深褐色木墙的影子，还会不时地浮现在眼前。它不像那些让人瞬间尖叫的宏伟地标，它的力量是内敛的、后劲十足的。在这个追求更高、更大、更炫目的世界里，它静静地告诉我们：永恒，有时源于谦卑地扎根于一方水土，源于勇敢地包容过去的自己。那些在门廊上撕咬的龙兽，最终没有吞噬这座教堂，反而成了它最坚固的铠甲、最独特的灵魂。这是一种何其智慧的生存之道——不彻底断裂，而是在传承中转化，在记忆里新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要千里迢迢，辗转轮渡，来看一座藏在挪威峡湾尽头的小小木教堂？因为在这里，你触摸到的不是一段被玻璃罩起来的历史，而是一个依然在呼吸的古老生命。你看到的是人类用最质朴的材料与最严酷的自然签订的千年契约，是不同文明在碰撞时所能产生的、最动人的艺术火花。它提醒每一位风尘仆仆的旅人：真正的深度，不在于收集了多少个世界遗产的印章，而在于你是否曾在一个地方安静地坐下，听懂了木头、石头和风讲述的语言。乌尔内斯就是这样一个地方，它值得你专程为它规划一次旅程，然后，用一整天的时间，陪它一起，在峡湾的风中，慢慢回想一千年的往事。这将成为你记忆里，一块沉静而温润的压舱石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourges-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔日大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourges Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amiens-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚眠大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amiens Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beauvais-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博韦大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beauvais Cathedral</p>
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
