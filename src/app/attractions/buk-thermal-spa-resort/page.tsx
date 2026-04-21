import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比克疗养地 Bükfürdő｜沉醉于匈牙利平原的“奇迹之泉” - 最佳欧洲景点',
  description: '当你从匈牙利广袤无垠的平原公路上拐进比克时，第一印象可能不是震撼，而是一种舒缓的宁静。没有巍峨的山峦，没有古老的城堡，目之所及是整齐的森林、平整的道路和低矮舒适的度假屋。空气里有一种独特的、淡淡的硫磺味，并不刺鼻，更像是大地沉稳的呼吸，暗示着脚下蕴藏的秘密。这里不像布达佩斯那样游客如织，更多的是穿着',
}

export default function BukThermalSpaResortPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '比克（Bük）', href: '/destinations/europe' },
            { label: '比克疗养地', href: '/attractions/buk-thermal-spa-resort' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比克疗养地・Bükfürdő・匈牙利・比克（Bük）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从匈牙利广袤无垠的平原公路上拐进比克时，第一印象可能不是震撼，而是一种舒缓的宁静。没有巍峨的山峦，没有古老的城堡，目之所及是整齐的森林、平整的道路和低矮舒适的度假屋。空气里有一种独特的、淡淡的硫磺味，并不刺鼻，更像是大地沉稳的呼吸，暗示着脚下蕴藏的秘密。这里不像布达佩斯那样游客如织，更多的是穿着浴袍、趿拉着拖鞋，从容穿梭于林荫道间的本地人、德国或奥地利游客。他们脸上带着一种卸下疲惫的松弛感，仿佛时间在这里自动调慢了流速。
穿过一片高大的树木，眼前豁然开朗。巨大的玻璃穹顶在阳光下闪闪发光，那是温泉中心的主体建筑。但更吸引人的，是环绕其周围、星罗棋布的大小泳池，像一块块蓝绿色的宝石，镶嵌在草坪与沙地之间。蒸腾的热气在微冷的平原空气中袅袅上升，与远处森林的薄雾交织在一起。耳边是多种语言交织的、低低的谈笑声，孩童戏水的欢呼，以及水流从各式各样按摩喷头中涌出的、节奏不一的哗啦声。这里不是一个需要你仰望的景点，而是一个邀请你沉浸、放松和融入的“水域”。
当地人把这里称为“奇迹之泉”，这份感激是发自内心的。在半个多世纪前，这里还是一个默默无闻、以农业为主的小村庄。一切改变都源于那场始于1960年代的地质勘探。当钻头深入地下两千多米，炽热、富含矿物质的地热水喷涌而出时，比克的命运齿轮开始转动。这不仅仅意味着一处旅游资源的发现，更意味着就业、繁荣和一种全新生活方式的可能。今天的比克，整个社区的脉搏都与这温泉息息相关，它既是经济的引擎，也是居民的后花园和社交中心。傍晚时分，你常能看到一家老小一起来泡个晚汤，或者在池边的躺椅上，就着一杯饮料，看夕阳把天空染成粉紫色。
它的核心魅力，正在于这种“疗愈”的二重性。一方面是物理上的：那高达58摄氏度的原汤，富含钠、钙、镁、氟和 metasilicic acid 等多种矿物质，对运动系统、关节炎和慢性炎症有着公认的舒缓效果。另一方面则是精神上的：在开阔的平原天空下，将自己完全交给温暖的泉水，让身心从内到外得到舒缓和平静。它不是一处让你匆匆打卡的风景，而是一个需要你停下脚步，花上一天甚至几天，去真正体验“修复”意义的地方。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你从匈牙利广袤无垠的平原公路上拐进比克时，第一印象可能不是震撼，而是一种舒缓的宁静。没有巍峨的山峦，没有古老的城堡，目之所及是整齐的森林、平整的道路和低矮舒适的度假屋。空气里有一种独特的、淡淡的硫磺味，并不刺鼻，更像是大地沉稳的呼吸，暗示着脚下蕴藏的秘密。这里不像布达佩斯那样游客如织，更多的是穿着浴袍、趿拉着拖鞋，从容穿梭于林荫道间的本地人、德国或奥地利游客。他们脸上带着一种卸下疲惫的松弛感，仿佛时间在这里自动调慢了流速。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过一片高大的树木，眼前豁然开朗。巨大的玻璃穹顶在阳光下闪闪发光，那是温泉中心的主体建筑。但更吸引人的，是环绕其周围、星罗棋布的大小泳池，像一块块蓝绿色的宝石，镶嵌在草坪与沙地之间。蒸腾的热气在微冷的平原空气中袅袅上升，与远处森林的薄雾交织在一起。耳边是多种语言交织的、低低的谈笑声，孩童戏水的欢呼，以及水流从各式各样按摩喷头中涌出的、节奏不一的哗啦声。这里不是一个需要你仰望的景点，而是一个邀请你沉浸、放松和融入的“水域”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人把这里称为“奇迹之泉”，这份感激是发自内心的。在半个多世纪前，这里还是一个默默无闻、以农业为主的小村庄。一切改变都源于那场始于1960年代的地质勘探。当钻头深入地下两千多米，炽热、富含矿物质的地热水喷涌而出时，比克的命运齿轮开始转动。这不仅仅意味着一处旅游资源的发现，更意味着就业、繁荣和一种全新生活方式的可能。今天的比克，整个社区的脉搏都与这温泉息息相关，它既是经济的引擎，也是居民的后花园和社交中心。傍晚时分，你常能看到一家老小一起来泡个晚汤，或者在池边的躺椅上，就着一杯饮料，看夕阳把天空染成粉紫色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，正在于这种“疗愈”的二重性。一方面是物理上的：那高达58摄氏度的原汤，富含钠、钙、镁、氟和 metasilicic acid 等多种矿物质，对运动系统、关节炎和慢性炎症有着公认的舒缓效果。另一方面则是精神上的：在开阔的平原天空下，将自己完全交给温暖的泉水，让身心从内到外得到舒缓和平静。它不是一处让你匆匆打卡的风景，而是一个需要你停下脚步，花上一天甚至几天，去真正体验“修复”意义的地方。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比克疗养地`} />
                <InfoRow label="英文名称" value={`Bükfürdő`} />
                <InfoRow label="正式名称" value={`Bükfürdő Thermal Spa and Resort`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`比克（Bük）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因一口深井而彻底改变命运的匈牙利平原村庄，被誉为欧洲中部最重要的现代温泉疗养地之一。`} />
                <InfoRow label="建筑特色" value={`将现代化的玻璃钢结构温泉综合体与精心设计、绿意盎然的园林景观完美融合，功能性极强。`} />
                <InfoRow label="建筑风格" value={`现代主义风格为主，融合了匈牙利本土的休闲度假建筑元素。`} />
                <InfoRow label="文化价值" value={`体现了匈牙利人“与水共生”的千年传统在现代社会的成功转型，是社区复兴与健康生活方式的典范。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`温泉公园全年开放，每日上午9:00至晚上8:00。室内温泉区开放至晚上10:00。请注意，各个特色浴池（如医疗浴池、儿童区）的开放时间略有不同，部分理疗服务需提前预约，且冬季（11月至次年3月）室外部分池区可能根据天气情况调整。具体的开放时间表建议在官网或游客中心查询确认。`} />
              <InfoRow label="门票价格" value={`基础日票（3小时）成人约为6000匈牙利福林，全日通票约为7500福林。3-14岁儿童、学生及65岁以上老人享有优惠票价。家庭套票（2大2小）性价比很高。如需使用特定的医疗温泉池或参加泥浴、按摩等理疗项目，需额外付费。门票支持在线购买，可避免旺季排队。`} />
              <InfoRow label="地址" value={`Bükfürdő, 9737 Bük, Középső út 5, 匈牙利`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最方便：在布达佩斯火车南站（Déli pályaudvar）乘坐火车前往塞克什白堡（Székesfehérvár），然后换乘前往比克的区间火车，总车程约2.5-3小时。也可以从布达佩斯尼盖利什巴士站（Népliget Bus Station）乘坐直达比克的长途巴士，车程约2小时。自驾是最灵活的选择，从布达佩斯沿M1高速公路向维也纳方向行驶，在“Bük”出口下高速，再行驶约10分钟即可抵达，全程约200公里，路况良好。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比克的故事，是一部典型的现代“点石成金”的传奇，而其序幕，竟始于一个看似毫不相关的国家项目。上世纪六十年代，匈牙利政府为了寻找石油和天然气资源，在全国范围内展开了大规模的地质勘探。在比克这片平坦的、以农田和零星牧场为主的土地下，钻机日夜轰鸣。村民们或许曾期待黑色的黄金，但命运却给了他们一份更珍贵、也更持久的礼物——热水。1962年，当钻探深度突破2000米时，一股强大的热流以每小时数万升的流量、超过50度的温度喷涌而出。最初的兴奋过后，是淡淡的失望：这不是石油。但很快，水样分析结果带来了更大的惊喜：这地下热水矿物质含量异常丰富，极具医疗价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，从一口发现矿泉的勘探井，到一个世界级的疗养胜地，中间隔着巨大的鸿沟。七十年代的匈牙利，基础设施和资金都有限。最初的开发是缓慢而朴素的：先建起几个简单的露天池子，搭起更衣棚，主要服务本地和周边居民。但温泉的声誉，像水中的涟漪一样，逐渐扩散开去。人们口口相传，来到这里泡一泡，关节的疼痛似乎减轻了，皮肤的病症也有了改善。比克温泉的初步成功，引起了国家疗养与旅游部门的注意，一个更具雄心的蓝图开始绘制。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在八十年代，尤其是1985年。匈牙利政府决定将比克作为国家重点温泉疗养项目进行投资开发。资金和技术开始涌入，现代化的温泉治疗中心、室内外复合泳池群、配套的酒店和度假公寓拔地而起。设计理念在当时非常超前：它不再是简陋的“澡堂子”，而是一个集医疗、康复、休闲、度假于一体的综合性健康公园。园林设计师巧妙地利用原有地貌和植被，将大大小小几十个功能各异的温泉池、滑水道、儿童乐园，错落有致地安置在森林和草坪之间，让建筑与自然和谐共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "九十年代东欧剧变后，比克面临着新的挑战与机遇。国有化管理模式终结，但温泉的价值已被市场广泛认可。它成功地转型为由专业公司运营的现代化度假区，并吸引了大量来自奥地利、德国、斯洛伐克等邻近富裕国家的游客。投资持续不断，设施不断升级：增加了奢华的SPA区、高标准的水疗护理、更丰富的餐饮选择和更高端的住宿设施。它精准地定位了自己——不仅是医疗目的地，更是中欧地区一个高品质的短途休闲度假选择。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，当你漫步在绿树成荫的疗养公园，看着三代同堂的家庭其乐融融，或是专注于康复疗程的老人面色安宁，你看到的不仅仅是一个旅游景点。你看到的，是一个社区凭借大自然偶然的馈赠，通过数代人的远见和努力，将自己从地图上的一个普通名字，书写成为欧洲温泉版图上不可或缺的闪亮地标的故事。这口深井，真正涌出的，是比克的未来。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间（至少8小时）来充分享受比克。最好的节奏是“松弛有度”。上午10点左右抵达，此时阳光正好，人流尚未达到峰值。建议先从户外温泉公园开始，适应水温，享受自然氛围；午后转入室内综合区，体验更多样化的水疗设施或预约专业的理疗项目；傍晚时分再次回到户外，在夕阳和晚霞中享受泡汤的极致惬意，看着天空从湛蓝变为橙红再坠入深蓝。这样的安排既能避开最拥挤的时段，又能体验到不同光线下温泉的魅力，并给身体充分的放松和恢复时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必自备或租赁防水拖鞋，池边地面可能湿滑且硌脚。贵重物品尽量存放在入口处的电子储物柜中，不要带到池边。如果主要目的是医疗理疗，请务必提前在官网预约医生咨询和具体疗程，不要现场盲目尝试。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午先从公园东侧的“静谧池”开始你的温泉初体验，那里水温适中，绿树环绕，能让你安静地适应并感受泉水独特的滑腻质感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的木栈道探索不同主题的户外池，一定要试试高温的“原汤池”和气泡翻涌的“按摩池”，感受矿物质对身体的不同触动`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在棕榈树温室下的餐厅享用一顿简单的匈牙利午餐，推荐尝一尝当地特色的鱼汤或炖牛肉，为下午的活动储备能量`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后移步至宏伟的玻璃穹顶主建筑内，在巨大的冒险泳池里游几圈，或是让孩子（或内心的孩子）在刺激的滑水道上尽情欢笑`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`预留至少一小时给自己，在安静的“医疗温泉区”静静浸泡，观察水中升腾的细微气泡，彻底放空思绪`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏前，前往公园西侧拥有开阔视野的“景观池”，找一个人少的角落，看夕阳将天际线、森林剪影和蒸腾的水汽染上温暖的金色`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`天色渐暗后，体验被灯光点亮的“夜间温泉”，蓝紫色的光影倒映在水面上，与星空交相辉映，氛围格外魔幻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后在出口处的饮品站买一杯热腾腾的草本茶或当地苹果汁，带着一身温暖和松弛，慢慢走回住处`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`玻璃穹顶航拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`在温泉公园中央的草坪上，使用无人机或寻找高处，在下午顺光时拍摄，能获得现代建筑与自然园林完美融合的几何构图大片`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`夕阳剪影池`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，在西侧的“景观池”，以暖色调的天空为背景，拍摄泡在池中的人的黑色剪影，画面充满故事感和温暖氛围`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`蒸汽弥漫的原汤池`}</h4>
                  <p className="text-sm text-gray-700">{`在清冷的早晨或傍晚，靠近高温的原汤池边，利用蒸腾的浓厚白色水汽作为前景，拍摄远处若隐若现的森林和建筑，营造仙境之感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`棕榈温室内部`}</h4>
                  <p className="text-sm text-gray-700">{`白天在温室餐厅内，利用巨大的玻璃窗和茂盛的绿植作为框架，拍摄人们在池边休闲的场景，色彩明亮，充满生机`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`儿童水乐园动态抓拍`}</h4>
                  <p className="text-sm text-gray-700">{`在阳光充足的午后，使用高速快门，捕捉孩子从彩色滑水道冲入水中的瞬间，飞溅的水花和快乐的表情极具动感`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`请务必尊重他人隐私，拍摄他人时尽量选取远景或背影，避免特写。部分室内理疗区域和桑拿房明确禁止拍照，请留意标识。水汽会对相机镜头造成影响，建议做好防护或使用防水设备。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`紧邻温泉公园的公寓式酒店，房间带小厨房和阳台，适合家庭或三五好友，下楼步行两分钟就能跃入温泉，自己做饭还能节省餐饮开支`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色温泉酒店`}</h4>
                  <p className="text-sm text-green-800">{`公园内自带的四星级酒店，拥有直通温泉区的专属通道，部分房间的阳台下就是泳池，晚上可以穿着浴袍直接回房，享受最大便利`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林静谧小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于温泉区外围森林中的独立小木屋，被高大的树木包围，私密性极佳，晚上只能听到风声和虫鸣，适合追求绝对宁静的情侣或疗养者`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端全包度假村`}</h4>
                  <p className="text-sm text-purple-800">{`距离温泉公园几分钟车程的五星级度假村，提供全套的豪华SPA服务、高尔夫球场和精致餐饮，适合想要将温泉疗养与奢华假期结合的客人`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（夏季7-8月及冬季圣诞新年假期）的住宿非常紧俏，务必提前数月预订。尽管比克非常安全，但选择住在温泉公园内部或紧邻的酒店，在晚间活动后返回会更加方便。许多住宿提供与温泉门票捆绑的优惠套餐，预订时别忘了询问。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开比克的时候，你的皮肤或许还留着泉水那种独特的、滑润的触感，身体里则蓄满了一种深沉的倦意与放松——那不是劳累，而是一种被彻底抚慰后的柔软。你带走的不是几张风景明信片，而是一种关于“修复”的切身记忆。在这个追求效率、充斥噪音的世界里，比克提供了一种古老而简单的解药：回到水中，让大地深处的热量和矿物质包裹你，让时间暂时失去刻度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个地方之所以特别，正是因为它不故作古老，也不标榜传奇。它坦诚地展示着自己的现代性与功能性，却又在骨子里继承了匈牙利民族千百年来对温泉疗愈文化的信仰。它告诉我们，奇迹不一定藏在深山古堡里，它可能就在一片平凡的平原之下，等待着被唤醒，然后温柔地改变一个地方，以及所有到访这里的人。对于每一位真正的旅行者而言，比克不是一个需要“征服”的景点，而是一个值得你“交付”身心的驿站。在这里，你学会的或许不是一段历史知识，而是一种在现代生活中日益稀缺的能力——如何真正地、毫无愧疚地停下来，专注于自身的修复与安宁。这，或许是最珍贵的旅行纪念品。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/eger-castle-bulls-blood-wine-region" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格尔城堡与公牛血产区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eger Castle and Bull's Blood Region</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sumeg-castle-hungary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    许
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">许迈格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sümeg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/s-rospatak-renaissance-castle-and-college" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙罗什保陶克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sárospatak</p>
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
