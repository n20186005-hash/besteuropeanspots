import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采格莱德加尔文派大教堂 Cegléd Calvinist Great Church｜匈牙利大平原上的信仰丰碑与革命回响 - 最佳欧洲景点',
  description: '当你从采格莱德火车站走出来，第一眼望向城市天际线时，一定会被那个巨大的、墨绿色的穹顶牢牢抓住视线。它像一颗沉稳的、生长在匈牙利广袤无垠大平原（Alföld）心脏地带的巨树树冠，有一种安定人心的力量。朝着它走去，城市的喧嚣渐渐被抛在身后，街道两旁的黄墙红瓦房子低矮而宁静。越走近，越能感受到这座建筑的磅',
}

export default function CegledCalvinistGreatChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '采格莱德加尔文派大教堂', href: '/attractions/cegled-calvinist-great-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`采格莱德加尔文派大教堂・Cegléd Calvinist Great Church・匈牙利・采格莱德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从采格莱德火车站走出来，第一眼望向城市天际线时，一定会被那个巨大的、墨绿色的穹顶牢牢抓住视线。它像一颗沉稳的、生长在匈牙利广袤无垠大平原（Alföld）心脏地带的巨树树冠，有一种安定人心的力量。朝着它走去，城市的喧嚣渐渐被抛在身后，街道两旁的黄墙红瓦房子低矮而宁静。越走近，越能感受到这座建筑的磅礴体量——它绝不是精致玲珑的那种美，而是一种近乎粗犷的、来自土地深处的庄严。
推开那扇厚重的木门，外面的世界瞬间安静下来。最先迎接你的不是繁复的装饰，而是一种空旷、明亮又肃穆的空间感。巨大的厅堂里，成排的深色木长椅向前延伸，尽头是简朴的讲坛。阳光从高侧窗和穹顶的天窗倾泻而下，在浅黄色的墙壁和石质地板上投下清晰的光影界限。空气里有一种好闻的、陈旧的味道，混合了老木头、灰尘和经年累月烛火的气息。偶尔有当地老人静静地坐在角落长椅上，闭目祈祷，他们的存在让这个空间不再仅仅是景点，而是流淌着真实生活与信仰的河流。
最打动人的，或许是它的“沉默的诉说”。这里没有天主教堂里那些令人眼花缭乱的圣像和镀金装饰，加尔文派的极简美学让每一处线条、每一束光都充满了精神性的张力。你的目光会被那高达53米的穹顶内部所吸引，它的简洁曲线仿佛直接通往天空。你会不自觉地压低声音，放慢脚步，仿佛怕惊扰了某种沉淀了数百年的集体记忆。这座教堂的基石下，埋藏的不只是砖石，更是整个匈牙利民族在近代史上追求自由与独立的炽热灵魂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你从采格莱德火车站走出来，第一眼望向城市天际线时，一定会被那个巨大的、墨绿色的穹顶牢牢抓住视线。它像一颗沉稳的、生长在匈牙利广袤无垠大平原（Alföld）心脏地带的巨树树冠，有一种安定人心的力量。朝着它走去，城市的喧嚣渐渐被抛在身后，街道两旁的黄墙红瓦房子低矮而宁静。越走近，越能感受到这座建筑的磅礴体量——它绝不是精致玲珑的那种美，而是一种近乎粗犷的、来自土地深处的庄严。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的木门，外面的世界瞬间安静下来。最先迎接你的不是繁复的装饰，而是一种空旷、明亮又肃穆的空间感。巨大的厅堂里，成排的深色木长椅向前延伸，尽头是简朴的讲坛。阳光从高侧窗和穹顶的天窗倾泻而下，在浅黄色的墙壁和石质地板上投下清晰的光影界限。空气里有一种好闻的、陈旧的味道，混合了老木头、灰尘和经年累月烛火的气息。偶尔有当地老人静静地坐在角落长椅上，闭目祈祷，他们的存在让这个空间不再仅仅是景点，而是流淌着真实生活与信仰的河流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，或许是它的“沉默的诉说”。这里没有天主教堂里那些令人眼花缭乱的圣像和镀金装饰，加尔文派的极简美学让每一处线条、每一束光都充满了精神性的张力。你的目光会被那高达53米的穹顶内部所吸引，它的简洁曲线仿佛直接通往天空。你会不自觉地压低声音，放慢脚步，仿佛怕惊扰了某种沉淀了数百年的集体记忆。这座教堂的基石下，埋藏的不只是砖石，更是整个匈牙利民族在近代史上追求自由与独立的炽热灵魂。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`采格莱德加尔文派大教堂`} />
                <InfoRow label="英文名称" value={`Cegléd Calvinist Great Church`} />
                <InfoRow label="正式名称" value={`Ceglédi Református Nagytemplom`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`采格莱德`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利最大的加尔文派教堂，也是1848年匈牙利革命的精神象征地之一。`} />
                <InfoRow label="建筑特色" value={`体量庞大、气势恢宏的新古典主义建筑，拥有令人过目难忘的巨型绿色铜制穹顶和简洁有力的柱廊。`} />
                <InfoRow label="建筑风格" value={`新古典主义风格，融合了匈牙利民族复兴时期的建筑元素。`} />
                <InfoRow label="文化价值" value={`不仅是宗教圣地，更是匈牙利民族认同与自由斗争历史的活态纪念碑。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂内部开放时间较为灵活，通常为周一至周六上午9点至下午4点。周日主要供礼拜使用，游客可在礼拜前后（通常下午1点后）安静参观。请注意，开放时间可能因宗教活动、婚礼或特殊节庆临时调整，冬季（11月至次年3月）开放时间可能略微缩短。建议前往前查看当地旅游信息中心公告。`} />
              <InfoRow label="门票价格" value={`参观免费，欢迎自愿捐赠以支持教堂维护。登上钟楼俯瞰全城需支付少量费用（约500匈牙利福林），捐款箱通常位于入口处。`} />
              <InfoRow label="地址" value={`Cegléd, Kossuth Lajos u. 4, 2700 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯李斯特·费伦茨国际机场出发，最便捷的方式是乘坐机场巴士100E线到达布达佩斯市中心德亚克广场地铁站，随后转乘M2线（红色）地铁前往布达佩斯东站（Keleti pályaudvar）。从东站乘坐前往索尔诺克（Szolnok）或塞格德（Szeged）方向的城际列车（IC）或区间列车，约50-60分钟即可抵达采格莱德火车站。列车班次频繁，每小时至少有1-2班。从采格莱德火车站出站后，教堂巨大的绿色穹顶便是最醒目的地标，步行约10-15分钟即可轻松到达。建议购买匈牙利国铁（MÁV）的电子车票，方便快捷。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采格莱德这座教堂的故事，得从一场失败但伟大的革命说起。时间回到1848年，欧洲大陆革命浪潮风起云涌，匈牙利也在科苏特·拉约什的领导下，掀起了反对哈布斯堡王朝统治、争取独立自由的革命。采格莱德，这个位于平原的城镇，成为了重要的革命据点。就在现在的教堂广场上，科苏特发表了激动人心的演说，点燃了人们的斗志。然而，革命最终被奥地利与俄罗斯的联军镇压。硝烟散尽后，悲愤与不屈的情绪却在这片土地上深深扎下了根。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了十九世纪后半叶，随着奥匈帝国的妥协与匈牙利获得一定自治权，一种被称为“民族复兴”的文化自信浪潮席卷全国。采格莱德虔诚的加尔文派社区决定，要建造一座配得上他们信仰、也配得上他们城市历史的宏伟教堂，以纪念那段光荣与伤痛并存的岁月。他们不要维也纳宫廷流行的巴洛克或洛可可风，他们要的是能体现匈牙利人刚直、朴素与崇高理想的形制。于是，新古典主义成为了不二之选，这种源于古希腊罗马的建筑风格，其追求的理性、秩序与宏大，正好契合了当时匈牙利民族构建自身身份的需求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建造过程本身就是一场信仰与社区力量的展示。从1912年奠基到1930年最终落成，历时近二十年。资金主要来自本地信徒的捐款，一砖一瓦都凝聚着社区的心血。设计师约瑟夫·霍弗里希特巧妙地赋予了它标志性的巨型穹顶，其规模在当时的中欧地区都堪称罕见。你可以想象，在平坦如砥的大平原上，竖起这样一座擎天柱般的建筑，对于生活在这里的人们意味着什么——它是一座灯塔，一个永不熄灭的精神坐标。它不仅用于礼拜，更从建成之初就是市民集会的中心，是公共生活的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的命运始终与国家的命运交织。在二战炮火和其后的社会主义时期，它依然屹立不倒。穹顶上的绿色铜锈一年年加深，如同历史的包浆。当时局艰难时，它那沉默而坚固的身影就是一种无声的抵抗与慰藉。1989年体制变革前后，这里再次成为人们讨论国家未来、追求民主转型的聚集地。今天，当你抚摸那些被无数人手掌磨得光滑的木质长椅靠背，或仰望讲坛上方简单的十字架时，你触摸到的是一部立体的匈牙利近代史。它没有玻璃展柜，没有解说牌，但每一寸空气都在述说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，这座教堂远不止是一个宗教场所。它是采格莱德的“城市客厅”，是婚礼钟声响起、节日音乐会举办的地方；它更是整个匈牙利民族心灵地图上的一个等高线密集处。来到这里，你会在一种近乎原始的宏伟与宁静中，读懂匈牙利人性格中那份深沉的骄傲、坚韧，以及他们对于“自由”二字刻骨铭心的理解。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议选择一个晴朗的上午（最好是周二至周五）开始你的探索，整体游览时间约2-3小时。上午光线最佳，既能拍摄教堂外部宏伟的立面，进入内部时又能享受从高窗洒入的柔和顶光，神圣感十足。首先从远处欣赏并走近教堂，感受其体量带来的压迫感与美感，然后进入内部进行沉浸式参观，重点感受空间与光影。之后若有精力且钟楼开放，可攀登俯瞰平原城市全景。这样的节奏由外至内，由宏观至细节，最后以全景视野收尾，能让你层层深入地理解这座建筑的精髓。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日前往请绝对保持安静，尊重礼拜活动，最好在下午仪式完全结束后再进入参观。
教堂内部虽然空旷，但夏季也十分凉爽，甚至有些阴冷，建议带一件薄外套。
采格莱德以温泉闻名，参观完教堂不妨将当地的温泉浴场（如Ceglédi Gyógy- és Strandfürdő）纳入行程，体验一把匈牙利人的沐浴文化。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站前的广场开始，就以那个巨大的绿色穹顶为导航，穿过种着栗子树和菩提树的宁静居民区街道慢慢向它靠近。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕教堂走一圈，从各个角度欣赏它新古典主义立面的简洁力量与巨大穹顶在不同光线下的色彩变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门高大的柱廊下进入，在门槛处停留片刻，让眼睛适应从明亮到相对幽暗的光线变化，感受那股混合着历史与信仰的独特气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花些时间静静坐在中殿侧面的长椅上，抬头凝视那高不可及的穹顶内部，观察阳光如何像舞台追光一样移动，照亮不同的区域。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走到教堂前部的讲坛附近，看看上面摆放的朴素圣经和简单的装饰，体会加尔文派神学“因信称义”核心教义在建筑上的体现。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找教堂内关于科苏特·拉约什和1848年革命的纪念铭牌或简单展览，将眼前的建筑与那段波澜壮阔的历史连接起来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果钟楼开放，沿着旋转石阶爬上顶层，体验一次将整个采格莱德红瓦屋顶与无垠大平原尽收眼底的豁然开朗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，在教堂前的大广场（科苏特广场）的长椅上坐坐，看看来往的当地人，想象这里在重大节日时人头攒动的场景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂南侧街道仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出教堂巨大的穹顶与主体结构的轮廓，将路人纳入构图可对比出建筑的惊人尺度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在主入口内侧，利用两排长长的深色木长椅作为引导线，将视线引向尽头的讲坛和管风琴，拍摄出极具几何美感和空间深度的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`穹顶内部特写`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，仰拍穹顶内部的藻井结构和从天窗射入的光束，最佳时间是临近正午，阳光垂直射入时效果最震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`科苏特广场全景`}</h4>
                  <p className="text-sm text-gray-700">{`从广场对面的建筑物二楼咖啡馆窗户（如有可能），拍摄教堂全貌与广场上市民生活的结合，傍晚时分温暖的色调会让画面充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`钟楼俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`在钟楼顶层，将教堂巨大的绿色穹顶作为前景，聚焦于远方绵延至天际线的匈牙利大平原，展现建筑与地理环境的共生关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部允许非闪光灯摄影，但务必保持绝对安静，切勿使用三脚架影响他人。`}</li>
                <li>• {`拍摄当地人时请务必先微笑示意并获得同意，匈牙利人普遍友善但注重礼仪。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温泉酒店体验`}</h4>
                  <p className="text-sm text-blue-800">{`就在城镇边缘的采格莱德温泉疗养浴场酒店，入住后可以无限次浸泡在温暖的药用温泉池中，洗去旅途疲惫，阳台正对开阔的田园风光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中心广场精品旅馆`}</h4>
                  <p className="text-sm text-green-800">{`位于科苏特广场一角，由一栋百年历史建筑改造，房间天花板保留着原始彩绘，早上在飘着咖啡香的小阳台上就能看着教堂穹顶享用早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`大平原农家乐民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`在离城几公里外的典型匈牙利“楚arda”农庄，住进白色的农舍，晚上享受一顿地道的古拉什炖肉，在绝对的星空寂静中入眠，深度体验平原乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布达佩斯当日往返基点`}</h4>
                  <p className="text-sm text-purple-800">{`如果你以布达佩斯为大本营，可以选择住在布达佩斯东站附近的现代设计酒店，搭乘早班火车轻松抵达采格莱德，一日游后晚上回到首都享受繁华夜生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采格莱德是安全宁静的小城，但住宿选择相对有限，若逢重大宗教节日或暑期温泉旺季，建议提前数周预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择乡村民宿需考虑交通，最好具备自驾条件，但获得的体验绝对是独一无二的。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开采格莱德，火车再次驶入那片仿佛没有尽头的平原时，我脑海里反复回响的不是某段具体的解说词，而是那座教堂给予我的那份沉重的宁静。在这个追求瞬时刺激、视觉爆炸的时代，它显得如此“不合时宜”——没有炫技般的装饰，没有曲折离奇的故事，甚至有些过于朴素和严肃。但恰恰是这种“不合时宜”，构成了它最强大的力量。它像一位历经沧桑却沉默寡言的老者，不需要言语，只需伫立在那里，就能镇住一整片土地的心神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于我们这些来自喧嚣世界的旅人而言，这里是一次精神的“减负”之旅。它让我们明白，伟大有时并非源于叠加，而是源于抉择与舍弃；震撼不一定来自繁复，也可以来自一种纯粹到极致的空间与信念。它连接着土地、历史与日常，告诉我们纪念碑也可以是有温度、可触摸、仍在使用的生活场景。如果你厌倦了那些被过度消费的欧洲经典，渴望一次触及灵魂深处的旅行，那么，请来采格莱德吧。站在这座大教堂的穹顶之下或平原之上，你会听到风吹过匈牙利历史的低语，并找到一片属于自己的、广袤而宁静的内心风景。这不仅仅是一次观光，更是一场与坚韧、信仰和寂静的深刻对话。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gyor-baroque-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔巴洛克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baroque Old Town of Győr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fuzer-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲泽尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Füzér Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/keszthely-festetics-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯斯特海伊（费斯泰蒂奇宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Keszthely (Festetics Palace)</p>
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
