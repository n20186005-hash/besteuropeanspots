import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博斯科维采 Boskovice｜漫步摩拉维亚的时光褶皱，探秘中欧最完整的犹太街区与山巅城堡遗梦 - 最佳欧洲景点',
  description: '火车缓缓驶离布尔诺的现代风景，窗外的田园变得越来越柔和，山丘的线条也愈加分明。当“Boskovice”的站牌出现时，你踏入的仿佛不是一个车站，而是一部老旧电影的开场。空气里有种特别的混合气味——刚割过的青草香，从老房子石缝里渗出的、略带潮湿的泥土味，或许还有一丝若有若无的、从某家咖啡馆飘出的烘焙甜香',
}

export default function BoskoviceJewishQuarterCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '博斯科维采', href: '/destinations/europe' },
            { label: '博斯科维采', href: '/attractions/boskovice-jewish-quarter-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博斯科维采・Boskovice・捷克・博斯科维采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶离布尔诺的现代风景，窗外的田园变得越来越柔和，山丘的线条也愈加分明。当“Boskovice”的站牌出现时，你踏入的仿佛不是一个车站，而是一部老旧电影的开场。空气里有种特别的混合气味——刚割过的青草香，从老房子石缝里渗出的、略带潮湿的泥土味，或许还有一丝若有若无的、从某家咖啡馆飘出的烘焙甜香。这种气味，是中欧小镇特有的、缓慢而扎实的时间的味道。
拖着行李走在通往老城中心的缓坡上，脚下的石板路被几个世纪的行人磨出了温润的光泽。你的视线会不由自主地被牵引向上：在城镇尽头的绿色山丘之巅，一片红褐色石墙的残骸以某种倔强的姿态刺向天空，那就是博斯科维采城堡的废墟。它不像那些修复一新的宫殿那样精致，却有一种原始的、戏剧性的力量，像个沉默的巨人守护着下方的屋顶之海。而就在山丘脚下，一片色调更为沉稳、排列异常密集的矮层建筑群悄然铺开，那是犹太区。它的寂静与主广场的闲适形成了微妙对比，仿佛一片自成一体、被时光封存的岛屿。
最打动人的，正是这种层次分明的共存感。在镇中心广场，你能看到典型的捷克巴洛克式教堂，市民们坐在长椅上晒太阳、聊天，生活气息浓郁。只需拐过一个街角，走进一条名为“Plátenícká”的狭窄小巷，氛围瞬间转换。阳光被高耸的山墙切割成细长的光带，投在斑驳的黄色、粉色墙面上，窗户窄小，门楣低矮，许多门上还保留着希伯来语铭文的痕迹或放置门柱圣卷的凹槽。这里几乎没有商业喧嚣，只有你自己的脚步声在回荡，以及风吹过屋顶瓦片的细微声响。你能感觉到，这里曾是一个充满烟火气的社区，如今这份宁静之下，沉淀着沉重的历史回响。博斯科维采的魅力，不在于任何一个单一的宏伟建筑，而在于这整个城镇就是一册立体的、可以触摸的历史书，每一页都写着不同的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车缓缓驶离布尔诺的现代风景，窗外的田园变得越来越柔和，山丘的线条也愈加分明。当“Boskovice”的站牌出现时，你踏入的仿佛不是一个车站，而是一部老旧电影的开场。空气里有种特别的混合气味——刚割过的青草香，从老房子石缝里渗出的、略带潮湿的泥土味，或许还有一丝若有若无的、从某家咖啡馆飘出的烘焙甜香。这种气味，是中欧小镇特有的、缓慢而扎实的时间的味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拖着行李走在通往老城中心的缓坡上，脚下的石板路被几个世纪的行人磨出了温润的光泽。你的视线会不由自主地被牵引向上：在城镇尽头的绿色山丘之巅，一片红褐色石墙的残骸以某种倔强的姿态刺向天空，那就是博斯科维采城堡的废墟。它不像那些修复一新的宫殿那样精致，却有一种原始的、戏剧性的力量，像个沉默的巨人守护着下方的屋顶之海。而就在山丘脚下，一片色调更为沉稳、排列异常密集的矮层建筑群悄然铺开，那是犹太区。它的寂静与主广场的闲适形成了微妙对比，仿佛一片自成一体、被时光封存的岛屿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，正是这种层次分明的共存感。在镇中心广场，你能看到典型的捷克巴洛克式教堂，市民们坐在长椅上晒太阳、聊天，生活气息浓郁。只需拐过一个街角，走进一条名为“Plátenícká”的狭窄小巷，氛围瞬间转换。阳光被高耸的山墙切割成细长的光带，投在斑驳的黄色、粉色墙面上，窗户窄小，门楣低矮，许多门上还保留着希伯来语铭文的痕迹或放置门柱圣卷的凹槽。这里几乎没有商业喧嚣，只有你自己的脚步声在回荡，以及风吹过屋顶瓦片的细微声响。你能感觉到，这里曾是一个充满烟火气的社区，如今这份宁静之下，沉淀着沉重的历史回响。博斯科维采的魅力，不在于任何一个单一的宏伟建筑，而在于这整个城镇就是一册立体的、可以触摸的历史书，每一页都写着不同的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博斯科维采`} />
                <InfoRow label="英文名称" value={`Boskovice`} />
                <InfoRow label="正式名称" value={`Boskovice`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`博斯科维采`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座承载了捷克-德意志-犹太三种文化数百年交融与创伤的微观标本，见证了中欧小镇从中世纪繁荣到二十世纪剧变的完整历程。`} />
                <InfoRow label="建筑特色" value={`三种截然不同的建筑层理清晰共存：山巅粗犷的哥特式城堡废墟、山下规整大气的帝国风格贵族庄园、以及蜿蜒其间的密集而古朴的犹太住宅与会堂。`} />
                <InfoRow label="建筑风格" value={`以哥特式城堡废墟、文艺复兴与巴洛克基础混合帝国风格的贵族庄园、以及简朴实用的中欧传统犹太建筑为主体，形成独特的风格拼贴画。`} />
                <InfoRow label="文化价值" value={`其保存完好的犹太街区规模在摩拉维亚首屈一指，是理解中东欧犹太社区“意第绪”生活形态及其悲剧性终结的露天教科书，也是平静反思复杂历史的最佳场所。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`犹太区、城堡及庄园的开放时间依季节和具体建筑而定，通常夏季（4月至10月）主要景点每日开放，冬季部分室内场馆开放时间缩短或仅周末开放。犹太会堂和博物馆一般在上午9点至下午5点开放，城堡废墟全天可进入但塔楼有指定时间。贵族庄园的导览团通常每小时或每两小时一次。强烈建议出行前查看各场馆官网，并注意捷克公共假日可能闭馆。`} />
              <InfoRow label="门票价格" value={`犹太区通票（包含犹太会堂、仪式浴室及部分住宅）约180捷克克朗。城堡废墟免费进入，登塔楼费用约50克朗。博斯科维采庄园（城堡）导览游约200克朗。常有家庭套票、学生及老年折扣。部分小型博物馆单独售票，价格在30-80克朗之间。`} />
              <InfoRow label="地址" value={`Boskovice, 680 01, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发最便捷。在布拉格主要巴士站（如Florenc）乘坐直达巴士，车程约2.5-3小时，班次每日数班，可通过RegioJet或FlixBus网站预订。从布尔诺出发更近，火车或巴士约1小时即可抵达，班次频繁。小镇内部所有核心景点均可轻松步行到达，火车站和巴士站距离老城广场约15分钟步行路程。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博斯科维采的故事始于那座山丘。早在13世纪，一座坚固的哥特式城堡就已经矗立在那里，它的主人是强大的博斯科维采家族，掌控着摩拉维亚南部的重要贸易路线。城堡不仅是军事要塞，也是权力中心，山下的定居点因此逐渐繁荣。到了16世纪，随着贵族家族的更迭，城堡经历了文艺复兴风格的改造，增添了更舒适的居住空间，但它战略地位的重要性始终未减。然而，历史的转折点往往充满偶然。18世纪的一场灾难性大火吞噬了城堡的大部分木结构，令其严重受损。而当时城堡的主人—— Dietrichstein 家族——已经将生活的重心转移到了山下那座新建的、更符合当时时尚潮流的舒适庄园里。于是，城堡被遗弃了，任凭风雨侵蚀，慢慢变成了我们今天看到的浪漫废墟。这份“不修复”的残缺，反而赋予它一种悲剧英雄式的美感，成为小镇最显著的地标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而在城堡阴影之下，另一个平行的世界正在悄然生长，那就是犹太区。它的起源可以追溯到15世纪，当时犹太人被限制在特定区域居住。令人惊叹的是，在博斯科维采，这个区域不仅被保存下来，而且其规模和完整性在整个摩拉维亚都极为罕见。到19世纪中叶，这里的犹太人口占到了全镇居民的三分之一以上，形成了一个繁荣、自治的文化与商业中心。漫步在犹太区，你会看到超过80栋原址保存的房屋，它们紧密相连，构成了迷宫般的街巷网络。这里曾有学校、医院、贫民院、以及不止一座犹太会堂。最大的那座巴洛克风格犹太会堂建于1639年，内部精美的 Torah 壁龛和墙壁上残留的希伯来文彩绘，依然在无声诉说着往昔的虔诚与社区生活的富足。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪是属于贵族庄园的时代。Dietrichstein 家族建造的新庄园是一座典型的帝国风格建筑，线条简洁大气，气质庄严。它象征着新时代的世俗权力与审美趣味，与山上中世纪的军事堡垒和山下封闭的宗教社区形成了鲜明对比。庄园拥有优雅的法式花园和广阔的英式公园，代表了启蒙运动后欧洲贵族对自然与文明的理想化融合。这个时期，三种文化——统治城堡与庄园的德意志贵族文化、小镇主体的捷克市民文化、以及犹太区的犹太文化——在博斯科维采达到了一种动态的、尽管并非完全平等的平衡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，20世纪的暴风骤雨彻底撕裂了这幅画面。二战期间，纳粹占领了捷克。博斯科维采的犹太社区被系统性摧毁，超过300名犹太居民被送往特雷津集中营，最终大多死于灭绝营，仅有极少数幸存。犹太区被洗劫一空，陷入了死寂。战后，共产主义政权接管了庄园，将其用作各种机构，而犹太区的建筑则逐渐破败，几乎被人遗忘。城堡的废墟，在冷战时期，成了当地年轻人秘密聚会和冒险的场所，增添了一层新的民间记忆。直到1989年天鹅绒革命后，这个小镇才开始慢慢正视和修复自己多层次的历史伤疤。犹太区得到了小心翼翼的保存和部分修复，不是将其变成喧闹的旅游区，而是作为一个纪念与教育的空间。今天，当你走在这里，你能感受到的不仅是对逝去世界的哀悼，更是一个社区努力理解自身复杂过去、并试图让沉默的石头重新开口说话的勇气。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少8小时）进行深度游览，从清晨至傍晚，充分体验光线变化下不同区域的气质差异。早晨光线柔和，人迹稀少，最适合沉浸式探索犹太区的静谧街巷，感受其未经打扰的氛围。上午十点后，阳光充沛，是探访城堡废墟、登高望远的最佳时机，体力消耗也适中。午后略显慵懒，可以安排参观室内场馆，如贵族庄园的导览游或犹太会堂博物馆，避开日头的同时吸收历史信息。傍晚时分，则留给小镇广场和咖啡馆，像当地人一样观察日落时分的街景。这样的节奏张弛有度，兼顾了外部探索、内部学习与纯粹的感受时光。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`犹太区内部分小型博物馆开放时间可能不固定，最好在游客中心一次性确认并拿取地图。穿一双绝对舒适的步行鞋至关重要，因为上下城堡山的路是原始土石路，且犹太区石板路不平。尊重当地氛围，特别是在犹太区，请保持低声交谈，避免喧哗。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站选在游客中心尚未开门的清晨，独自拐进U Vážné studny小巷，用手触摸那些冰冷而斑驳的犹太住宅外墙，寻找门框上几乎被磨平的门柱圣卷凹槽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着陡峭的、被森林覆盖的Zámecká小路向山顶跋涉，在气喘吁吁中突然从树梢间隙瞥见城堡巨大废墟的全貌，那种震撼无以言表。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡主塔的残垣断壁上，迎着山风，俯瞰脚下如模型般铺开的整个小镇，清晰辨认出犹太区密集的屋顶、庄园规则的几何花园和广场的教堂尖顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后走进那座巨大的巴洛克犹太会堂，让眼睛适应内部的昏暗，然后抬头凝视祭坛上方精美却残损的希伯来文装饰，静立片刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加一场博斯科维采庄园的导览团，在导游的讲述中想象 Dietrichstein 家族在此举办舞会的场景，并透过高大的窗户回望山上的城堡废墟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城广场的Masarykovo náměstí找一家有露天座位的咖啡馆，点一杯正宗的捷克啤酒或咖啡，看着当地老人带着狗经过，生活如常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前，再次漫步犹太区，此时夕阳的金色光芒会以极低的角度射入狭窄的街道，为那些黄色的墙面涂上蜂蜜般温暖而短暂的光泽。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡山南侧葡萄园远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从镇外南边的乡村小路回望，可以拍到城堡废墟雄踞于翠绿山巅、山下小镇炊烟袅袅的经典全景，长焦镜头能压缩空间感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`犹太会堂内部仰拍穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光从天窗射入的时段，使用广角镜头低角度仰拍，捕捉光线照亮内部木结构穹顶和希伯来铭文的神圣感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Plátenícká 小巷纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入巷子时，站在巷口用引导线构图，将蜿蜒狭窄的巷道、两侧彩色的墙面和尽头的光亮一同收入镜中，充满故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`庄园法式花园对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线清朗时，站在花园中轴线的一端，拍摄修剪整齐的树篱、雕塑与后方庄重典雅的帝国风格建筑立面，体现秩序之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从城堡废墟窗口俯瞰犹太区`}</h4>
                  <p className="text-sm text-gray-700">{`利用城堡塔楼残存的石窗作为天然画框，拍摄下方密集的犹太区红色屋顶海洋，画面既有框架构图，又具历史纵深。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在犹太会堂内部拍摄前，请务必确认是否允许拍照（通常允许，但禁用闪光灯）。使用三脚架在室内可能需额外许可。拍摄当地居民，尤其是长者，建议先微笑致意或征得同意，这是一种基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城广场旁一栋17世纪联排别墅的顶楼公寓，房东太太会为你准备地道的摩拉维亚早餐，并分享小镇不为人知的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史住宅`}</h4>
                  <p className="text-sm text-green-800">{`犹太区内经精心修复的百年老屋，内部保留了原始的木梁和壁炉，现代舒适设施一应俱全，提供独一无二的沉浸式居住体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园景观酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇边缘一座安静花园中的四星级酒店，部分房间拥有直接面对山巅城堡废墟的完美视角，尤其日出日落时分景色绝伦。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园农庄`}</h4>
                  <p className="text-sm text-purple-800">{`距离小镇几分钟车程的传统农庄，提供宽敞的房间和自家酿制的果酒，夜晚极其安静，可以看见清晰的银河，适合追求宁静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（夏季和初秋周末）建议提前数周预订，特别是犹太区内的特色住宿非常抢手。小镇整体治安极好，夜晚独自步行也很安全。住在老城中心固然方便，但郊区住宿更能体验摩拉维亚田园的宁静，且价格通常更优。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开博斯科维采时，我的背包里没有多少纪念品，但心里却装满了沉甸甸的“感受”。这份感受不是单一的愉悦或震撼，而是一种复杂的、多层次的回响。它让我想到，真正的历史从来不是教科书上单线条的叙述，而是像这个小镇的地形一样，是层叠的、交织的、有时甚至是相互对峙的。你可以同时看到权力的炫耀（城堡）、启蒙的秩序（庄园）与信仰的坚守（犹太区），它们共同构成了一幅完整但充满张力的中欧心灵图景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求效率、习惯于非黑即白判断的世界里，博斯科维采提供了一种珍贵的“慢下来”与“复杂性教育”。它不急于给你答案，不刻意营造欢乐的旅游氛围，只是平静地展示着自己的伤疤与美丽。它要求你用心去走，用眼睛去看，用想象去填补空白。在这里，你学到的不是某个历史事实，而是一种观看历史的方式——一种充满同理心、承认矛盾、并珍惜幸存之物的方式。对于任何不满足于打卡、而渴望通过旅行更深刻理解欧洲文化血脉与记忆伤痕的旅人来说，博斯科维采都不应仅仅是一个目的地，它更像是一面镜子，一次静默的对话，一堂关于生命、 resilience 与记忆的必修课。它提醒我们，有些地方的存在，是为了让记忆保持温度，让对话得以延续。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trosky-castle-cesky-raj" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗斯克城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trosky Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lednice-valtice-cultural-landscape" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采-瓦尔季采文化景观</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kuks-hospital-czechia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库克堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuks Hospital</p>
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
