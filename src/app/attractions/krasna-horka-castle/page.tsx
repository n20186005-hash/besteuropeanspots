import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉斯纳霍卡城堡旅游攻略：揭秘山顶要塞与不朽传说自由行指南',
  description: '探索斯洛伐克克拉斯纳霍卡城堡深度游攻略，包含14世纪山顶要塞、不朽木乃伊之谜、交通门票与一日游路线，带你开启一场中世纪时空穿越之旅。',
}

export default function KrasnaHorkaCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '克拉斯纳霍卡城堡', href: '/attractions/krasna-horka-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克拉斯纳霍卡城堡・Krásna Hôrka Castle・斯洛伐克・科希策州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：车子在斯洛伐克东部连绵的丘陵间盘旋而上，一个转弯，那座传说中的城堡就像从大地骨骼里生长出的巨岩，赫然耸立在620米高的火山岩山巅。阳光给它古老的石墙镀上一层蜂蜜色的光晕，这就是克拉斯纳霍卡城堡，一个光是名字就充满诗意（意为“美丽的小山”）的地方。但别被它的美丽名字欺骗，今天这份克拉斯纳霍卡城堡私藏旅游攻略，就带你躲开人潮，去触摸它坚不可摧的防御工事，并直面那个让无数人既敬畏又好奇的终极秘密——玻璃棺中沉睡超过350年的“不朽”伯爵夫人。这不是普通的观光，而是一次关于权力、死亡与自然奇迹的深度探秘。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：车子在斯洛伐克东部连绵的丘陵间盘旋而上，一个转弯，那座传说中的城堡就像从大地骨骼里生长出的巨岩，赫然耸立在620米高的火山岩山巅。阳光给它古老的石墙镀上一层蜂蜜色的光晕，这就是克拉斯纳霍卡城堡，一个光是名字就充满诗意（意为“美丽的小山”）的地方。但别被它的美丽名字欺骗，今天这份克拉斯纳霍卡城堡私藏旅游攻略，就带你躲开人潮，去触摸它坚不可摧的防御工事，并直面那个让无数人既敬畏又好奇的终极秘密——玻璃棺中沉睡超过350年的“不朽”伯爵夫人。这不是普通的观光，而是一次关于权力、死亡与自然奇迹的深度探秘。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克拉斯纳霍卡城堡`} />
                <InfoRow label="英文名称" value={`Krásna Hôrka Castle`} />
                <InfoRow label="正式名称" value={`Krásna Hôrka Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`科希策州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克拉斯纳霍卡城堡的故事始于14世纪（具体可追溯到1333年），它不仅仅是一座贵族宅邸，更是匈牙利王国时代（斯洛伐克当时属于匈牙利）防御体系中的一颗关键棋子。它所在的战略位置，正好扼守通往富庶的矿业城镇（如附近的格尼拉）的要道。在奥斯曼帝国铁蹄威胁中欧的动荡岁月里，这座城堡因其地势险要、易守难攻，成为周边地区最重要的避难所和军事堡垒，从未被武力攻破过，赢得了“坚不可摧”的声誉。几个世纪以来，它一直属于强大的安多夫家族（Andrássy），见证了这个家族的荣耀与兴衰。颇具戏剧性的是，这座从未被战争摧毁的堡垒，却在2012年遭遇了一场毁灭性的火灾（起因是两名孩童不当用火），主堡内部严重受损。随后长达数年的精心修复，本身就是它历史篇章中浓墨重彩的一笔——一场与现代灾难的抗争。这份坎坷，让它从单纯的中世纪军事遗迹，升华为一个承载着坚韧与重生精神的活态历史纪念碑。`} />
                <InfoRow label="建筑特色" value={`走近城堡，首先震撼你的是它与山体融为一体的磅礴气势。巨大的不规则多边形围墙完全依循山顶火山岩的轮廓修建，墙体由本地开采的深灰色安山岩垒成，粗粝而坚实，历经风雨侵蚀呈现出斑驳的灰黑、赭石与苔藓的暗绿色。城堡主体由高低错落的数座塔楼和宫殿建筑围合而成，其中最醒目的是高大的主塔楼（要塞塔），它是城堡最初的建筑核心，墙面厚实，窗户窄小如箭缝。建筑群屋顶铺着暗红色的陶瓦，在绿树环抱中形成鲜明对比。修复后的部分，新石材与原石在色彩和纹理上刻意区分，形成一种“时间的对话”。整体外观没有浮华的装饰，每一块凸起的石头、每一处陡峭的悬崖护墙，都在无声地诉说着纯粹的防御功能主义，一种在乱世中求存的、近乎冷酷的实用之美。`} />
                <InfoRow label="建筑风格" value={`克拉斯纳霍卡城堡主要体现了晚期哥特式风格向文艺复兴早期风格过渡的特点。其军事核心部分（如主塔、城墙）是典型的哥特式实用主义：强调垂直线条、厚重的墙体、拱顶结构和狭小的防御窗口，一切为了坚固和防御。而后来增建的居住宫殿部分，则开始流露出文艺复兴的微风。你可以留意那些已经过火损但修复后的窗户，它们虽然仍相对保守，但相比纯粹的箭窗已更加开阔，允许更多光线进入生活空间。城堡内部修复后的某些大厅（如骑士厅），其拱顶结构和壁炉的设计，也隐约可见文艺复兴对对称与古典比例的追求。这种风格混合非常真实——它并非一座一次性设计完成的艺术宫殿，而是一个随着家族财富、审美变化和战争威胁减弱而不断“生长”和“软化”的家，是一部用石头写就的建筑演化史教科书。`} />
                <InfoRow label="文化价值" value={`对于斯洛伐克人，尤其是科希策地区的居民而言，克拉斯纳霍卡城堡远远超出一个旅游景点。它是地域身份的象征，是家乡地平线上最坚毅的轮廓。那场大火曾让无数当地人心碎，而随后的全民关注与漫长修复，更凝聚了一种共同的文化守护情感。如今，城堡作为斯洛伐克国家博物馆的一部分，它不仅展示中世纪贵族生活与军事历史，更通过“不朽的伯爵夫人”这一独特现象，引发了关于历史、民俗学、甚至早期医学和地质学的公共讨论。这个略显神秘的故事，已成为当地文化叙事中不可或缺的一环，吸引着好奇者、研究者和灵异故事爱好者。它教会人们以更复杂的眼光看待历史：不仅是宏大的战争与政治，也有关于个体命运、丧葬习俗以及自然力量的微观叙事。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 克拉斯纳霍卡城堡一日游打卡路线攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行动线，从要塞探索到传说揭秘`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份自由行指南请收好！建议你安排一整天给这里，从容不迫。上午（10:00-12:30）：从科希策自驾或乘坐巴士抵达山脚停车场。换乘城堡的小巴或选择徒步（约25分钟登山小径，风景佳但略耗体力），直接抵达城堡外墙。先别急着进核心区，沿着外围步道走半圈，从不同角度仰望这座庞然大物，感受它的压迫感。然后进入城堡庭院，领取语音导览设备（有中文选项！）。参观顺序建议从下层展厅开始，那里用模型和出土文物介绍了城堡建筑史和2012年火灾的惊人对比。中午（12:30-13:30）：在城堡庭院的小咖啡馆简单解决午餐，尝尝斯洛伐克特色的羊奶酪饺子，坐在露天座位，俯瞰山下如绿色地毯般的田园风光。下午（13:30-16:00）：重头戏来了。进入主堡建筑内部，依次参观骑士厅、小教堂、家族起居室，感受中世纪贵族的生活空间。最后，做好心理准备，前往那个特殊的陵墓礼拜堂，与“不朽的伯爵夫人”面对面。这个环节可能需要一些时间消化情绪。之后，可以登上主塔楼的观景台，这是全天的高潮，360度无死角的绝美风光是对你一天探索的最佳奖赏。傍晚（16:00后）：慢慢下山，如果自驾，不妨在回科希策的路上，绕道附近宁静的村庄看看，结束这趟穿越之旅。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  主塔楼之巅的“上帝视角”：爬上狭窄的螺旋石阶，当你从塔楼顶端的垛口探出身时，整个世界仿佛在你脚下铺开。近处是城堡锯齿状的屋顶和庭院，远处是斯洛伐克天堂国家公园起伏的山峦线条和如积木般散落的红色屋顶村庄。风毫无阻挡地呼啸而过，你瞬间就明白了守卫者当年的心境——这种掌控全局的视野，本身就是最强大的武器。记得用相机捕捉这壮阔的全景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  礼拜堂内的玻璃凝视：在阴凉、肃穆的小礼拜堂内，光线透过高窗变得朦胧。那里安放着那具著名的玻璃棺。凑近看（需要一点勇气），伯爵夫人西多妮娅（Sidonia）的遗体静静地躺在锦缎上，皮肤因自然风干而呈深褐色，紧贴在骨骼上，五官轮廓依然清晰可辨。她的双手交叠，姿态安详。最触动人的是那些陪葬的细节：她身穿的精致连衣裙，以及身旁放置的玫瑰、念珠。这不是恐怖的展览，而是一种极其私密又公开的、关于永恒与逝去的静默对话，你会不自觉地压低呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  小教堂的文艺复兴彩窗光影：在参观路线上，不要错过城堡内的小教堂。虽然规模不大，但在火灾后修复时，精心还原了彩绘玻璃窗。当下午的阳光以特定角度照射进来时，彩色的光影会投射在古老的石地板和墙壁上，形成流动的、梦幻般的光斑。这一刻，军事要塞的刚硬被一抹神圣的柔美所中和，静静诉说着居住于此的人们对心灵慰藉的需求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  骑士厅的武器阵列与穹顶：走进骑士厅，你的目光首先会被墙上陈列的各种中世纪武器和铠甲所吸引——战斧、长剑、锁子甲，金属表面泛着冷冽的光泽。但请记得抬头看！大厅的石拱顶是建筑艺术的亮点。复杂的肋拱结构交织延伸，虽然在火灾中受损严重，但修复后的状态依然能让人想象鼎盛时期的壮观。这些石头肋拱仿佛大树的枝干，撑起了整个空间，将哥特式的建筑力量美学展现得淋漓尽致。`}</p>
            </div>
          </Section>

          <Section title={`5. 克拉斯纳霍卡城堡自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  交通与时间避坑：公共交通从科希策出发的班车次数有限，务必提前在车站查好往返时刻表，错过一班可能就要等很久。强烈建议自驾，灵活性最高。城堡开放时间随季节变化（冬季可能关闭或缩短），出发前一定要上官网二次确认。最佳游览季节是春末到初秋（5月-9月），天气晴好，视野开阔。尽量避开周末和公共假期，上午早到可以避开旅游团大巴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备避坑：这是一次真正的“爬山”参观！务必穿舒适防滑的徒步鞋，城堡内外部是凹凸不平的石阶和坡道。山上风大，温度常比山下低几度，即便是夏天也带一件防风外套。参观木乃伊所在的礼拜堂内部空间较窄小且安静，请衣着得体，保持肃静，避免使用闪光灯拍照（通常禁止），这是对逝者的基本尊重。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  游览与安全避坑：购买门票时，询问是否包含登上主塔楼的费用（有时需另购）。城堡部分区域仍在进行修复工作，请严格遵守指示路线和警示标志，不要进入围挡区域。虽然斯洛伐克治安良好，但在游客集中的地方（如售票处、咖啡馆）仍需看管好个人财物。如果对“不朽遗体”有强烈的心理不适或携带年幼儿童，可提前了解展览位置，自行决定是否跳过该部分。最后，别忘了在山下停车场附近通常有干净的免费洗手间，上山前可以先解决一下。`}</p>
            </div>
          </Section>

          <Section title={`6. 克拉斯纳霍卡城堡周边住宿与当地美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡本身不提供住宿，但山脚及周边村庄的氛围值得你考虑停留一晚，享受宁静的中世纪之夜。推荐住在距离城堡约10分钟车程的罗日尼亚瓦（Rožňava）小镇，这里有几家舒适的民宿和精品酒店，例如由老房子改建的“Penzión pri vinici”，自带一个漂亮的小花园，主人热情好客。餐饮方面，在城堡内的咖啡馆可以解决简餐。下山后，强烈建议在罗日尼亚瓦找一家传统酒馆（Koliba）体验正宗斯洛伐克菜。必点“Bryndzové halušky”（羊奶酪土豆面疙瘩），口感绵密，带着独特的羊奶醇香。搭配一碗“Kapustnica”（酸菜汤）和一杯本地产的弗兰科酒（Frankovka，一种红葡萄酒），就是完美的慰藉。如果时间充裕，科希策市内的选择就更多样了，从高级餐厅到热闹的啤酒馆应有尽有。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科希策州是宝藏之地，如果时间允许，强烈推荐这两个延伸目的地：1. 斯洛伐克天堂国家公园：从城堡驱车向北不到一小时即可抵达。这里是户外爱好者的天堂，拥有令人惊叹的峡谷、瀑布和 via ferrata（铁索攀岩小径）。最经典的路线是徒步穿越“Suchá Belá”峡谷，需要在木梯和铁链上攀爬，穿梭于水声轰鸣的瀑布之间，是与城堡的历史厚重感截然不同的自然野性体验。2. 历史名城科希策：作为你的交通枢纽，这座欧洲文化之都绝对值得花半天深度游览。不要错过拥有独特哥特式与巴洛克混合风格的圣伊丽莎白大教堂，以及其旁边精致的圣米迦勒礼拜堂。在老城散步，逛逛主干道，感受东斯洛伐克充满活力的现代脉搏与深厚历史底蕴的交融。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`克拉斯纳霍卡城堡的灵魂，在于它那近乎矛盾的二元性：它既是象征武力与征服的、冰冷坚硬的岩石要塞，又守护着一个关于肉身不朽的、柔软而神秘的生命谜题。它告诉我们，历史不仅仅是城墙的厚度，也可能是一具静默的躯体所承载的、关于时间、记忆与自然力量的永恒追问。在这里，你触摸到的，是石头般的刚毅，也是如风般不可捉摸的传说。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vychylovka-forest-railway-museum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维希洛夫卡（露天博物馆）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vychylovka</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cachtice-castle-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    恰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">恰赫季采城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cachtice Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bojnice-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博伊尼采城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bojnice Castle</p>
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
