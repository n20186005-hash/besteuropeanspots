import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛夫琴山陵寝 Lovćen Mausoleum｜攀登五百级天梯，在云端之巅遇见黑山的民族灵魂 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下，你开车在洛夫琴山那九曲十八弯的盘山道上，一边是陡峭的岩壁，另一边是深不见底的峡谷，窗外的风带着松针和远方亚得里亚海的一丝咸味。当你以为旅程的终点就是那个小小的停车场时，向导会指向上方云雾缭绕之处——真正的朝圣，从那里才开始。你需要徒步攀登461级台阶，没错，他们会精确地告诉你这个...',
}

export default function LovcenMausoleumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '洛夫琴山陵寝', href: '/attractions/lovcen-mausoleum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛夫琴山陵寝・Lovćen Mausoleum・黑山・采蒂涅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下，你开车在洛夫琴山那九曲十八弯的盘山道上，一边是陡峭的岩壁，另一边是深不见底的峡谷，窗外的风带着松针和远方亚得里亚海的一丝咸味。当你以为旅程的终点就是那个小小的停车场时，向导会指向上方云雾缭绕之处——真正的朝圣，从那里才开始。你需要徒步攀登461级台阶，没错，他们会精确地告诉你这个数字。每一级台阶都像是在丈量黑山这个国家艰难而骄傲的历史高度。爬到一半，你会气喘吁吁地停下来，不是因为累，而是被眼前的景象钉在原地：脚下是翻滚的云海，云隙间偶尔露出科托尔湾那翡翠般的峡湾一角，而那座漆黑的花岗岩建筑，如同一个沉默而威严的巨人，正从云端俯视着你。那种视觉上的压迫感和神圣感，瞬间会让你忘了小腿的酸痛。
当你终于抵达陵墓入口，推开那扇沉重的青铜大门，外面的风声骤歇，取而代之的是一种绝对的、有质量的寂静。空气里是石头阴凉的气息，混合着一丝淡淡的、来自访客手中鲜花的清香。阳光从顶部精心设计的缝隙和天窗中射入，在打磨得如镜面般的黑色地面上投下不断移动的光斑。最震撼的时刻，是抬头看见那座巨大的、由一整块黑色花岗岩雕刻而成的涅戈什雕像。他端坐着，目光深邃，仿佛能穿透石壁，望向黑山的山河与未来。那一刻，你不再觉得自己是一个游客，而像是一个闯入了一场持续了两个世纪的、无声对话的倾听者。你能“听”到石头的语言，和回荡在空旷殿堂里的民族呼吸。
这里对黑山人来说，远不止一个旅游景点。你会看到穿着传统服装的老人，拄着拐杖，一级一级虔诚地向上挪动；你会看到年轻的父母，低声向孩子讲述“涅戈什爷爷”的故事；你会看到士兵在此肃立敬礼。这座陵寝，是他们的精神祠堂，是国歌里吟唱的“洛夫琴的灰色岩石”，是每个黑山人心中的一座山。它的核心魅力，就在于这种极致的物理攀登与深沉的精神朝圣的合二为一。你不是在参观一个死去的遗迹，而是在参与一个民族活着的记忆。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下，你开车在洛夫琴山那九曲十八弯的盘山道上，一边是陡峭的岩壁，另一边是深不见底的峡谷，窗外的风带着松针和远方亚得里亚海的一丝咸味。当你以为旅程的终点就是那个小小的停车场时，向导会指向上方云雾缭绕之处——真正的朝圣，从那里才开始。你需要徒步攀登461级台阶，没错，他们会精确地告诉你这个数字。每一级台阶都像是在丈量黑山这个国家艰难而骄傲的历史高度。爬到一半，你会气喘吁吁地停下来，不是因为累，而是被眼前的景象钉在原地：脚下是翻滚的云海，云隙间偶尔露出科托尔湾那翡翠般的峡湾一角，而那座漆黑的花岗岩建筑，如同一个沉默而威严的巨人，正从云端俯视着你。那种视觉上的压迫感和神圣感，瞬间会让你忘了小腿的酸痛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于抵达陵墓入口，推开那扇沉重的青铜大门，外面的风声骤歇，取而代之的是一种绝对的、有质量的寂静。空气里是石头阴凉的气息，混合着一丝淡淡的、来自访客手中鲜花的清香。阳光从顶部精心设计的缝隙和天窗中射入，在打磨得如镜面般的黑色地面上投下不断移动的光斑。最震撼的时刻，是抬头看见那座巨大的、由一整块黑色花岗岩雕刻而成的涅戈什雕像。他端坐着，目光深邃，仿佛能穿透石壁，望向黑山的山河与未来。那一刻，你不再觉得自己是一个游客，而像是一个闯入了一场持续了两个世纪的、无声对话的倾听者。你能“听”到石头的语言，和回荡在空旷殿堂里的民族呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里对黑山人来说，远不止一个旅游景点。你会看到穿着传统服装的老人，拄着拐杖，一级一级虔诚地向上挪动；你会看到年轻的父母，低声向孩子讲述“涅戈什爷爷”的故事；你会看到士兵在此肃立敬礼。这座陵寝，是他们的精神祠堂，是国歌里吟唱的“洛夫琴的灰色岩石”，是每个黑山人心中的一座山。它的核心魅力，就在于这种极致的物理攀登与深沉的精神朝圣的合二为一。你不是在参观一个死去的遗迹，而是在参与一个民族活着的记忆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛夫琴山陵寝`} />
                <InfoRow label="英文名称" value={`Lovćen Mausoleum`} />
                <InfoRow label="正式名称" value={`Petar II Petrović-Njegoš Mausoleum at Lovćen`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`采蒂涅`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`黑山最重要的民族圣地，是黑山民族身份与独立精神的象征。`} />
                <InfoRow label="建筑特色" value={`一座由黑色花岗岩筑成的现代主义陵墓，傲然矗立在洛夫琴山第二高峰的峰顶。`} />
                <InfoRow label="建筑风格" value={`现代主义与象征主义相结合，风格冷峻、庄严而充满力量感。`} />
                <InfoRow label="文化价值" value={`这里存放着黑山最受尊敬的民族英雄、统治者和诗人彼得二世·彼得罗维奇·涅戈什的遗骸，是凝聚黑山民族精神的灯塔。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月至9月）每天上午8:00至晚上20:00开放；冬季（10月至次年4月）开放时间缩短为上午9:00至下午17:00，且极端恶劣天气（如大雪、强风）时会临时关闭。国家法定假日（如5月21日独立日）通常照常开放，但人会非常多。`} />
              <InfoRow label="门票价格" value={`成人票价5欧元；学生、65岁以上老人持有效证件可享3欧元优惠价；12岁以下儿童免费。门票在登山步道起点的售票亭购买，只接受现金（欧元），请提前备好零钱。`} />
              <InfoRow label="地址" value={`Lovćen National Park, Cetinje 81250, Montenegro`} />
              <InfoRow label="交通方式" value={`从最近的蒂瓦特机场或波德戈里察机场出发，自驾是最佳选择。从蒂瓦特机场租车，沿E65/E80公路向采蒂涅方向行驶，转入通往洛夫琴国家公园的盘山路，全程约1.5小时。从波德戈里察出发则需要约2小时。公共交通不便：每天仅有1-2班从采蒂涅小镇中心发出的季节性小巴前往山腰停车场，车程40分钟，班次不稳定且受天气影响。强烈建议提前租车或预订包含交通的一日游。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这座陵墓为何如此重要，你得先认识长眠于此的那个人——彼得二世·彼得罗维奇·涅戈什。他不是普通的国王，他是19世纪黑山（当时还是黑山公国）的统治者和主教，更是一位伟大的诗人。你可以把他想象成黑山的“哲人王”。在他统治的短短几十年里，这个被奥斯曼帝国重重包围的山地小国，硬是靠着顽强的战斗精神保持了独立。但涅戈什最打动后人的，或许不是他的武功，而是他的文治与思想。他的史诗《山地花环》就像黑山的《伊利亚特》，用最磅礴的诗句歌颂自由、英雄主义与牺牲精神，深深塑造了黑山的民族性格。他生前就深深眷恋洛夫琴山，曾留下遗愿希望长眠于此，好永远凝视他深爱的土地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，他的身后事却一波三折。他最初被安葬在采蒂涅的一座小教堂里。直到他去世约60年后，才由他的继任者尼古拉一世国王主持，在洛夫琴山巅建造了第一座小礼拜堂，并将他的遗骸迁葬于此。那座最初的小教堂朴实无华，却正好契合了黑山人与高山一样质朴而坚韧的气质。但命运总是多舛，这座位于战略要地的山峰在两次世界大战中都无法幸免。特别是在第二次世界大战期间，占领黑山的意大利军队竟然炸毁了那座小教堂！你能想象吗？一个民族的精神象征被炮火摧毁，这对黑山人来说是巨大的创伤和侮辱。战后，遗骸被暂时移走安放。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在南斯拉夫社会主义时期。尽管意识形态不同，但铁托领导下的政府认识到涅戈什作为反侵略斗争象征的意义，决定在原址上重建一座更宏伟、更永久的纪念建筑。他们举办了一场全国性的设计竞赛，最终，克罗地亚裔的雕塑家伊万·梅什特罗维奇的设计方案脱颖而出。梅什特罗维奇是20世纪最伟大的雕塑家之一，他的设计充满了象征主义：黑色的花岗岩代表着黑山（“黑山”即“黑色的山”）的岩石与坚毅；简洁有力的几何线条，象征着现代性与永恒。建造过程本身就是一项工程奇迹，所有的建筑材料都是靠人力和简易索道，一点一点运上这海拔1600多米的绝顶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1974年，新陵墓落成，涅戈什的遗骸在隆重的仪式中第三次，也是最后一次被安放于此。从此，这座现代主义的建筑与古老的山峰、传奇的人物完全融合在了一起。黑山独立后，这里更被赋予了新的意义，成为国家主权和独特文化身份的至高象征。所以，你攀登的每一步，踏过的不仅是石阶，更是这个民族从封建公国到王国，从战火到和平，从联邦到独立的漫长而崎岖的道路。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最完整的体验，强烈建议安排大半天（至少4-5小时）给这里。最佳抵达时间是清晨（夏季8点一开门就进去），这样可以避开一日游团的人潮，享受云雾未散时陵墓若隐若现的仙境感，并且有充足的时间应对高山天气的变化。整体节奏应该是“慢上-静观-缓下”。先以平和的心态完成那461级台阶的攀登，把它当作冥想的一部分，中途可在观景台充分休息和拍照。进入陵墓后，预留至少45分钟到1小时静静感受，不要匆忙。下山后如果体力允许，可以在国家公园内的徒步小径走一小段，从不同角度回望这座云端圣殿。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着防滑的徒步鞋或运动鞋，台阶在潮湿时非常滑，且山顶常年风大，防风外套必不可少。
山上没有任何商店或餐馆，出发前一定要在采蒂涅准备好充足的饮用水和简单的能量零食。
高原天气瞬息万变，可能上一分钟晴空万里，下一分钟就浓雾锁山，保持灵活心态，安全第一，如果天气突变应放弃登顶。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从采蒂涅小镇出发，沿着标志清晰的盘山公路一路向上，摇下车窗感受逐渐变凉的空气和越来越浓的松木香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在山腰的指定停车场，在小小的售票亭买好票，深吸一口气，正式踏上那条著名的461级花岗岩台阶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个大转角处的观景平台停下脚步，回望来路，看蜿蜒的台阶如何像一条细线垂入云海，调整呼吸并拍下陵墓的第一个仰角全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开陵墓入口那对雕刻着雄鹰图案的沉重青铜大门，让眼睛适应内部昏暗的光线，然后缓缓走向中央那座令人屏息的巨大涅戈什花岗岩坐像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕着雕像静静走一圈，观察光线从头顶天窗洒落，在雕像肩头和光洁地板上形成的神圣光斑，感受空间里绝对的寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过雕像后方简洁的通道，进入安放黑色石棺的墓室，这里气氛更加肃穆，通常会有当地人来此默默献上一束野花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿内部螺旋阶梯登上陵墓的屋顶观景台，当360度的狂风吹拂你的头发时，科托尔湾、斯库台湖乃至阿尔巴尼亚边境的群山尽收眼底，这一刻所有的攀登都值了。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时换一条稍缓的小径，途中会经过最初的小教堂遗址，几块残存的基石静静躺在草地上，诉说着被炸毁的往事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`停车场仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，从停车场向上仰拍，利用长焦镜头压缩空间，让蜿蜒的台阶直通漆黑的陵墓，背景是辽阔的天空或翻滚的云海，构图极具冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`台阶中段侧方平台`}</h4>
                  <p className="text-sm text-gray-700">{`在攀登大约三分之一处的一个向外凸出的平台，可以横向构图，将一部分台阶作为引导线，陵墓作为远景，另一侧则是深邃的峡谷，画面层次感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`陵墓内部雕像光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光垂直射入天窗时，找准角度拍摄光线正好打在涅戈什雕像面部或肩膀的瞬间，利用明暗对比突出雕塑的庄严与神圣感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`屋顶观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，将观景台上的人物作为前景剪影，背景是如地图般铺展的黑山全景，山海交织，气势磅礴。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`日落时分远眺剪影`}</h4>
                  <p className="text-sm text-gray-700">{`从国家公园内另一条徒步小径上，在日落前半小时，拍摄陵墓在金色夕阳下的黑色剪影，它如同一个孤独的守望者矗立于世界之巅。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`陵墓内部通常允许拍照，但请务必关闭闪光灯，保持安静和尊重，避免直接拍摄正在祈祷或默哀的当地人。`}</li>
                <li>• {`山顶风力强劲，拍摄时注意握稳相机或手机，使用更快的快门速度以防画面模糊。`}</li>
                <li>• {`无人机飞行在洛夫琴国家公园内受到严格管制，未经特别许可严禁起飞，请勿冒险尝试。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在采蒂涅小镇中心由19世纪贵族官邸改建的精品酒店，房间有挑高的天花板和老式家具，推开窗就能看到昔日的皇宫，沉浸于黑山旧都的宁静氛围。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山居疗愈体验`}</h4>
                  <p className="text-sm text-green-800">{`选择洛夫琴山半山腰的独家传统石屋民宿，用古老的壁炉取暖，晚上在没有光污染的天空下看银河，清晨被森林里的鸟鸣和炊烟气息唤醒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海湾全景享受`}</h4>
                  <p className="text-sm text-yellow-800">{`住在科托尔湾畔佩拉斯特或科托尔的高端酒店，白天上山朝圣，晚上回到峡湾的怀抱，在阳台一边享用海鲜晚餐一边回味日间在云端的震撼体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`探险者大本营`}</h4>
                  <p className="text-sm text-purple-800">{`在国家公园入口附近的简朴但干净的家庭客栈，主人是热情的徒步向导，能为你提供最地道的登山建议和家酿的蜂蜜白兰地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`采蒂涅的住宿更具文化气息但夜生活安静；若想兼顾夜生活和便利，住在科托尔是更热闹的选择，但需承担每天约1小时车程上山。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`山区民宿在冬季（10月-4月）可能歇业或只接受预订，夏季则非常紧俏，务必提前数月计划。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`无论住在哪里，黑山整体治安良好，民风淳朴，但山区夜间行车需格外小心野生动物和复杂路况。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我最终走下最后一级台阶，双腿微微发抖地坐回车里，回头望向那座重新隐入云雾的山峰时，一种前所未有的平静感包裹了我。洛夫琴山陵寝给予我的，不是一张简单的打卡照片，而是一次全身心的“重置”。在那个近乎与天相接的地方，风声、自己的心跳声、历史的回声交织在一起，让你不得不从日常的琐碎中抽离出来，去思考一些更宏大、更本质的东西——关于一个民族如何凭意志在岩石缝中求生，关于一个人如何用诗歌与思想赢得比王冠更持久的尊敬。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速消费、一切体验都趋于扁平化的时代，这样一个需要你付出体力、汗水，需要你虔诚攀登才能抵达的地方，显得如此珍贵。它拒绝被轻易征服。它用那461级台阶作为过滤器，筛掉了喧嚣与浮躁，只留下那些愿意慢下来、愿意去感受和理解的灵魂。这不是一个景点，这是一堂关于地理、历史、文学和精神的沉浸式大师课。如果你渴望一次真正能走入内心、而不仅仅是走入镜头的旅行，那么，请来黑山，来攀登这座山。在云端之巅，你遇见的将不仅是壮丽的风景，更是一个小而伟大的民族，那坚硬如花岗岩、又自由如山巅之风的灵魂。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sveti-stefan" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣斯特凡岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sveti Stefan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kolasin-montenegro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科拉欣</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolašin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perast-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩拉斯特古镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Perast</p>
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
