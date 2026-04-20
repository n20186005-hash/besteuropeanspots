import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅尔图拉旅游攻略：穿越千年，探秘葡萄牙最后的摩尔人白色堡垒小镇',
  description: '探索葡萄牙梅尔图拉(Mértola)深度游攻略！这座瓜迪亚纳河畔的白色小镇，藏着伊斯兰风情的教堂与中世纪城墙，一份带你避开人潮、读懂历史的自由行指南。',
}

export default function MertolaGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '梅尔图拉', href: '/attractions/mertola-guide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`梅尔图拉・Mértola・葡萄牙・贝雅区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你厌倦了里斯本的人潮，想找一个时间仿佛静止、故事却无比丰厚的地方，那么今天这份梅尔图拉私藏旅游攻略，就是为你准备的。它不在常规旅游线上，却是我心中葡萄牙阿连特茹地区的珍珠。想象一下：开车穿过一片金色的平原，忽然，瓜迪亚纳河一道温柔的拐弯处，一座被高大石墙严密包裹的纯白小镇，像从历史书页中直接立起来一样，出现在悬崖之上。这里就是梅尔图拉。作为你的专属向导，这份自由行指南请收好——它不只是关于一个地点，更是一场穿越罗马、伊斯兰与基督教文明的时光漫步。我们会一起躲开那些商业化的陷阱，走进真正有血有肉的历史里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友！如果你厌倦了里斯本的人潮，想找一个时间仿佛静止、故事却无比丰厚的地方，那么今天这份梅尔图拉私藏旅游攻略，就是为你准备的。它不在常规旅游线上，却是我心中葡萄牙阿连特茹地区的珍珠。想象一下：开车穿过一片金色的平原，忽然，瓜迪亚纳河一道温柔的拐弯处，一座被高大石墙严密包裹的纯白小镇，像从历史书页中直接立起来一样，出现在悬崖之上。这里就是梅尔图拉。作为你的专属向导，这份自由行指南请收好——它不只是关于一个地点，更是一场穿越罗马、伊斯兰与基督教文明的时光漫步。我们会一起躲开那些商业化的陷阱，走进真正有血有肉的历史里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`梅尔图拉`} />
                <InfoRow label="英文名称" value={`Mértola`} />
                <InfoRow label="正式名称" value={`Mértola`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`贝雅区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`梅尔图拉的历史地位，用一句话概括就是：它曾是葡萄牙境内最后一个被基督教军队攻克的摩尔人（穆斯林）城镇，堪称“最后的摩尔人堡垒”。直到1238年，它才被圣地亚哥骑士团收复，这比南部的阿尔加夫地区晚了近一个世纪。但它的重要性远不止于此。早在罗马时代，这里就是重要的内河港口，利用瓜迪亚纳河将内陆的矿产和谷物运往大海。伊斯兰时期（8-12世纪），它达到了鼎盛，成为连接北非与伊比利亚半岛内陆的贸易与文化枢纽，一个繁荣的“商业共和国”。这段漫长的伊斯兰统治（超过500年）在它的文化基因上打下了不可磨灭的烙印。当你走在街上，那种氛围不同于葡萄牙其他任何地方。它不是被“修复”出来的历史街区，而是历史本身层层叠加、依然在呼吸的活化石。收复后，它逐渐衰落，却也因祸得福，将中世纪的肌理近乎原封不动地保存至今。`} />
                <InfoRow label="建筑特色" value={`梅尔图拉的建筑是简洁而有力的。最震撼的莫过于从河对岸眺望：一整片耀眼的白色房屋，像积雪一样从河岸层层堆叠到山顶的城堡，所有的屋顶都是温暖的陶土红，在阿连特茹炽热的阳光下，对比鲜明到令人屏息。走近看，城墙是粗糙的黄色砂岩，厚重、布满风化的痕迹，巨大的方塔沉默地矗立着。小镇内部的房屋墙壁被刷得雪白，不是为了时髦，而是传统——为了反射阳光，对抗酷暑。门窗边框则漆成靛蓝、明黄或赭石色，偶尔有铁艺的阳台，开着鲜红的天竺葵。一切都显得干净、有序，带着一种北非式的几何美感。街道狭窄而蜿蜒，是为了遮阴和防御，脚下的不是光滑的鹅卵石，而是更大块、更随性的石板，缝隙间长着顽强的青草。材质是朴素的：石灰、砂岩、木材和陶瓦，没有任何浮夸的装饰，却因岁月和阳光的打磨，充满了质感。`} />
                <InfoRow label="建筑风格" value={`在这里，你会遇到一个建筑风格的“混血奇迹”，核心就是梅尔图拉矩阵博物馆（原梅尔图拉主教堂）。从外面看，它是一座简朴的罗马式/哥特式基督教堂，有结实的扶壁和朴素的玫瑰窗。但走进去，你会瞬间恍惚——它完全保留了原伊斯兰清真寺的平面结构和灵魂。这是一个罕见的“叠加”案例，基督教征服者没有推倒重建，而是直接在清真寺的基础上改造。最突出的风格体现是朝向：内部祈祷厅的柱廊与麦加的方向（伊斯兰教的朝向）一致，而不是基督教建筑惯常的东西轴向。那些粗壮的石柱和马蹄形拱门，是典型的摩尔式建筑语言。祭坛所在的位置，原本是清真寺的“米哈拉布”（指示麦加方向的壁龛）。这种风格被称为“穆德哈尔式”，即在基督教王国统治下，由穆斯林工匠建造或深受伊斯兰艺术影响的建筑。在梅尔图拉，这不是装饰元素，而是整座建筑的“底片”，让你直观感受到两种文明如何在同一个空间里对话与共存。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，梅尔图拉的身份认同深深植根于这段独特的伊斯兰过往。这不是一个被刻意隐藏或商业化的历史，而是被当作骄傲的遗产来研究和展示。小镇拥有一个出色的“博物馆群落”，将整个古镇本身作为一个大博物馆来经营，从罗马到伊斯兰，每个历史层面都有专门的场馆（如伊斯兰艺术博物馆、罗马住宅遗址）。每年五月举办的“伊斯兰文化节”是小镇最盛大的活动，街上飘着北非香料的气味，响起阿拉伯音乐，人们穿着传统服饰， workshops里教授书法和手工艺。这不仅仅是一场旅游秀，更是社区对自身文化根源的主动追溯与庆祝。在现代葡萄牙，梅尔图拉像一位沉静的学者，提醒着人们伊比利亚半岛文化多元、交融的复杂本质，打破了单一的民族历史叙事。它告诉我们，历史不是非此即彼的替换，而更多时候是层叠与融合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 梅尔图拉一日游精华打卡路线与深度漫步攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`从城堡到河岸，不走回头路的完美动线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，攻略部分开始！我为你设计的这条一日游路线，能让你在一天内抓住梅尔图拉的精华，节奏张弛有度。上午，我们把车停在镇外（小镇内部路窄难停车），从古老的“城门”进入。别急着乱逛，先直奔山顶的城堡。清晨的光线柔和，登上城堡塔楼，360度视野无敌——俯瞰白色小镇的全景、蜿蜒的瓜迪亚纳河，以及无边的平原。这是建立空间感的最佳起点。中午，从城堡下来，慢慢逛进镇中心。午餐前，重点参观矩阵博物馆（主教堂），感受那份时空交错的神奇。然后在教堂广场附近找家小餐馆，尝尝阿连特茹炖菜。下午，是博物馆时间。强烈推荐伊斯兰艺术博物馆，馆藏虽小但极其精致，能看到本地出土的伊斯兰时期器物。之后，顺着蜿蜒的下坡路，向河边漫步。你会路过古老的洗衣房和码头遗址。在河岸边的长椅上坐一会儿，看倒影中的白色小镇，这是最宁静的时刻。最后，沿着河岸漫步道走一小段，从另一个角度回望悬崖上的小镇，结束完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  矩阵教堂内的“米哈拉布”痕迹：走进教堂，不要只看祭坛。请走到祭坛右侧的墙壁仔细看。在基督教壁画和装饰之下，墙壁的凹进结构依然清晰可辨——那就是原清真寺指示麦加方向的“米哈拉布”壁龛。想象一下，八百多年前，穆斯林信众就在你站立的位置，面向这里虔诚祈祷。阳光从侧面高窗射入，照亮空气中的微尘，那一刻，两种信仰的时空奇妙地重叠在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  城堡塔楼上的风向标：爬上城堡主塔的螺旋石阶，当你从狭小的出口探身到塔顶平台，猛烈的风会扑面而来。抬头看，塔尖上的风向标不是普通的公鸡，而是一只精致的鹳鸟模型。在葡萄牙，鹳鸟常在烟囱筑巢，被视为吉祥的象征。在这里，它立于千年军事堡垒之上，逆风而立，翅膀仿佛在颤动，为厚重的历史增添了一抹灵动的生命气息。以它为前景，拍摄小镇和河流的全景，画面会立刻生动起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  河畔的古老洗衣池：从镇中心往河边走的半路上，会经过一个带有顶棚的石砌水池。这里是过去几个世纪里，小镇妇女们聚集洗衣、交换新闻的社交场所。池水引自山泉，至今依然清澈流淌。用手触摸池边被磨得光滑如釉的石头，那是无数双手和流水经年累月打磨出的温润。闭上眼睛，几乎能听到昔日槌打衣物的声音和女人们的谈笑声，这是小镇最日常、最鲜活的历史脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  伊斯兰博物馆的青铜小鸟：在伊斯兰艺术博物馆里，不要错过一件小巧的青铜器——一只鸽子或猎鹰形状的香油瓶。它只有掌心大小，制作于11-12世纪，细节栩栩如生，羽毛纹路清晰，背部有注油孔。想象它曾经被某位摩尔贵族或商人使用，里面装着珍贵的玫瑰油或香水。历经千年，它沉默地卧在展柜中，却让你瞬间与那个崇尚科学、艺术与精致生活的摩尔时代，建立了最私人的联系。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间就是一切：务必避免盛夏（7-8月）的正午游览。阿连特茹地区夏季极端炎热，小镇石板路和白色墙壁反光吸热，体感温度极高，毫无遮阴的城堡上更是煎熬。最佳游览时间是春季（4-6月）和秋季（9-10月），气候宜人，光线绝佳。一日游的话，尽量早到，利用上午和傍晚，中午最热时安排室内博物馆或午餐休息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与行装：放弃时尚的硬底鞋吧！小镇全是起伏不平的石板路和陡坡，一双舒适防滑的步行鞋是保命神器。穿着以轻便、透气的棉麻衣物为佳，戴宽檐帽和太阳镜。葡萄牙阳光强烈，防晒霜必须足量涂抹。另外，小镇很多地方（尤其是博物馆内）没有空调，带把小扇子或便携风扇，幸福感会飙升。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  避开人流的秘诀：梅尔图拉本身不算大众，但周末和节假日葡萄牙本地游客会增多。尽量安排在工作日前往。旅行团大多匆匆停留2-3小时，主要集中在上午10点到下午2点。你可以反其道而行，下午抵达，住一晚，享受宁静的清晨和迷人的黄昏，这才是小镇最美的时刻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  交通与门票贴士：小镇内部禁止外来车辆通行，镇外有免费停车场，步行进入即可。几个主要博物馆（城堡、矩阵教堂、伊斯兰博物馆等）有联票出售，比单独购买划算得多，在任意一个场馆的售票处都能买到。门票与交通都不是问题，小镇完全可以用双脚探索。`}</p>
            </div>
          </Section>

          <Section title={`6. 梅尔图拉住宿与美食攻略：住在风景里，尝在地风味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想在梅尔图拉住一晚，我强烈推荐尝试一家名为 “Casa da Amieira” 的客栈。它由一栋古老石屋改造而成，位置绝佳，就在城堡脚下，部分房间拥有直接俯瞰瓜迪亚纳河谷的私人露台。早晨被鸟鸣和河谷的薄雾唤醒，夜晚看小镇灯光与星空交映，这份体验远超匆匆过客。主人非常亲切，会给你很多本地人才知道的小贴士。餐饮方面，一定要试试阿连特茹的特色。推荐广场附近的 “Restaurante Alengarve”（名字有点怪，但菜不错）。必点“Ensopado de Borrego”（羔羊面包汤）——用羊肉、面包、鸡蛋和薄荷炖成的浓汤，味道浓郁独特，是牧羊人文化的代表。或者尝尝“Açorda à Alentejana”（阿连特茹面包糊），用大蒜、香菜、橄榄油和溏心鸡蛋与掰碎的面包混合，看似简单却无比鲜美。配上一杯本地产的红酒，这才是地道的味道。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间充裕，我建议你花半天时间探索周边：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  城堡内的“考古遗址花园”：买城堡门票时就已经包含这里。在城堡围墙内，有一片露天区域，展示了从铁器时代到伊斯兰时期层层叠压的居住遗址，包括房屋地基、街道和水渠。走在架起的木栈道上，低头就能清晰看到跨越两千年的历史断层，比任何教科书都直观。它就在小镇核心，步行即达。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  瓜迪亚纳河生态漫步：从镇上的河边码头出发，可以沿着河岸向南漫步。这条路曾是古老的运输道，现在则是宁静的自然小径。你会看到丰富的鸟类（白鹭、翠鸟），河边茂密的植被，以及废弃的水车磨坊。走大约30-40分钟，可以到达一个宁静的河湾，那里是绝佳的野餐和发呆地点。它让你从厚重的历史中暂时抽离，融入葡萄牙南部宁静的田园风光。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`梅尔图拉的灵魂，不在于某个雄伟的单一建筑，而在于那份穿越时空的层叠感——罗马的实用、伊斯兰的精致、基督教的虔敬，以及阿连特茹土地的质朴，全部被阳光和河水调和，沉淀在这座白色悬崖小镇的每一块石头、每一道墙缝里。它教会我们，真正的文化深度，不是清除异己，而是学会在历史的痕迹上，继续生活，并心怀敬畏。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mafra-national-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马夫拉宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mafra National Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bom-jesus-do-monte-braga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加仁慈耶稣朝圣所</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bom Jesus do Monte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
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
