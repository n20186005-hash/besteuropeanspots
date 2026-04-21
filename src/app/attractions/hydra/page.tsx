import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊兹拉岛旅游攻略：无车海岛时光漫步与悬崖豪宅深度游指南',
  description: '希腊伊兹拉岛深度游攻略。探秘全岛禁车的纯净海岛Hydra，漫步18世纪海绵商人的白色石头豪宅，体验最地道的爱琴海慢生活。',
}

export default function HydraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '阿提卡大区', href: '/destinations/greece' },
            { label: '伊兹拉岛', href: '/attractions/hydra' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊兹拉岛・Hydra・希腊・阿提卡大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下，你从雅典的喧嚣中跳上一艘快船，不到两小时，就踏入了一个时间静止的世界。欢迎来到伊兹拉岛——一个在全欧洲都堪称异类的神奇地方。这里没有汽车的轰鸣，没有摩托的突突声，唯一的交通工具是毛驴、骡子和你的双脚。今天这份伊兹拉岛私藏旅游攻略，就带你躲开那些只打卡拍照的旅行团，真正潜入这座岛屿的骨髓。它不仅仅是一个“网红”小岛，更是18世纪海绵贸易鼎盛时期留下的、一座活生生的露天建筑博物馆和生活方式样本。作为你的专属向导，这份自由行指南请收好，我们将一起用脚步丈量石头街道，用眼睛抚摸历史刻痕，感受被阳光和海风腌入味的慢灵魂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下，你从雅典的喧嚣中跳上一艘快船，不到两小时，就踏入了一个时间静止的世界。欢迎来到伊兹拉岛——一个在全欧洲都堪称异类的神奇地方。这里没有汽车的轰鸣，没有摩托的突突声，唯一的交通工具是毛驴、骡子和你的双脚。今天这份伊兹拉岛私藏旅游攻略，就带你躲开那些只打卡拍照的旅行团，真正潜入这座岛屿的骨髓。它不仅仅是一个“网红”小岛，更是18世纪海绵贸易鼎盛时期留下的、一座活生生的露天建筑博物馆和生活方式样本。作为你的专属向导，这份自由行指南请收好，我们将一起用脚步丈量石头街道，用眼睛抚摸历史刻痕，感受被阳光和海风腌入味的慢灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊兹拉岛`} />
                <InfoRow label="英文名称" value={`Hydra`} />
                <InfoRow label="正式名称" value={`Hydra`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`阿提卡大区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`伊兹拉岛在欧洲航海与商业史上，扮演过一个极为富庶且关键的角色。18世纪中后期到19世纪初，岛上的船主家族凭借精明的商业头脑和勇敢的航海精神，建立了庞大的海绵捕捞与贸易网络，他们的船队远赴北非海岸，将珍贵的海绵运回欧洲，积累了惊人的财富。这使得伊兹拉岛在当时的爱琴海诸岛中一跃成为经济巨擘，其繁荣程度堪比一个小型海上共和国。更重要的是，在19世纪希腊反抗奥斯曼帝国统治的独立战争（1821-1829年）中，富有的伊兹拉岛船主们贡献了巨大的财力，并出动了自己的舰队，成为了革命的“金库”和“海军”之一。岛上也诞生了多位重要的革命领袖和海战英雄。这段“商而优则仕则革命”的历史，为岛屿披上了一层浓厚的英雄主义与爱国主义色彩，那些用贸易财富建造的坚固石宅，也因此不仅是家，更是一个辉煌时代的纪念碑。`} />
                <InfoRow label="建筑特色" value={`伊兹拉岛的建筑是极致的“石头的诗歌”。抛弃一切花哨，只有最本质的材料：灰白色或淡黄色的本地石材，垒成厚重、坚固的墙。这些豪宅通常有三到四层，线条方正而威严，像从山岩中自然生长出来一样，阶梯式地攀附在环绕港口的峭壁上。最大的特色是那些巨大的、带有精美铁艺栏杆的拱形玻璃窗和宽敞的阳台，当年船主们就站在这里，眺望归航的船只。门廊高大，双开的木门厚重，门楣上常饰有简单的浮雕或家族的徽记。色彩？主色调就是石头原色、深棕色的木门和湛蓝的天空与海。阳光在粗粝的石墙表面移动，产生丰富微妙的光影变化，正午时白得晃眼，黄昏时则染上蜜糖与玫瑰色的光晕。触摸那些墙壁，你能感受到海风侵蚀的颗粒感，和几个世纪积蓄下的、阳光的温度。`} />
                <InfoRow label="建筑风格" value={`岛上的核心建筑风格可以定义为“爱琴海岛屿新古典主义”，但带着强烈的本地化和实用主义印记。它吸收了新古典主义的对称、庄重与简洁，去掉了过多的华丽装饰，一切都为适应海岛气候和船主需求服务。高耸的立面和平整的屋顶线条体现了古典的秩序感；那些连续排列的拱形长窗，不仅提供了无敌海景，其结构也展现了理性的建筑美学。然而，它又绝非教科书式的刻板。为了抵御强烈的海风和日照，墙壁异常厚重，窗户虽大但装有结实的木百叶。内部空间高大开阔，通常围绕一个中央庭院或巨大的客厅布置，便于通风和社交。这种风格的本质，是巨富商贾们用最稳重、永恒的形式，来宣告他们的财富、品味以及与大海不可分割的联系。它不张扬，却充满力量，是商业资本与地中海美学结合出的独特果实。`} />
                <InfoRow label="文化价值" value={`对现代人而言，伊兹拉岛最核心的文化价值在于它坚定捍卫的 “另一种生活可能” 。全岛禁车的法律（岛上仅有几辆垃圾车是特例）不仅保护了历史景观，更从根本上塑造了一种社区文化：人们步行或骑驴相遇，在狭窄的巷子里必须侧身礼让，交谈自然发生。这里没有快递车的呼啸，所有货物都由骡队驮运，叮当作响的骡铃是背景音。这种“强制性的缓慢”催生了深厚的社区纽带和极强的本地认同感。同时，岛屿自20世纪50年代起就吸引了众多艺术家、作家和音乐家（如科恩兄弟曾居于此），他们被这里的宁静与纯粹所吸引，进一步丰富了其文化层次。对游客来说，伊兹拉岛像一个巨大的沉浸式剧场，让你体验到一个基于步行、面对面交流、与自然节奏同步的社会是如何运作的，这是一种对高度机械化现代生活的温柔反思与珍贵补充。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 伊兹拉岛一日游打卡路线攻略：从港口豪宅到隐秘修道院的完美动线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我们这样安排一天：早晨乘第一班船抵达，阳光正好。下船后别急着走，先在港口区转一转，看看彩色的渔船和忙碌的卸货骡队，感受海岛清晨的活力。接着，我们从港口西侧开始向上探索“豪宅区”，沿着蜿蜒的石头阶梯，拜访几座最具代表性的船长大宅（外观），让想象驰骋在昔日的辉煌里。中午，找一家悬崖边的传统小酒馆，面对无限海景享用一顿鲜鱼大餐。下午的行程需要一点体力，我们沿着海边步道向东徒步约40分钟，前往普罗菲蒂斯·伊利亚斯修道院，这段路风景绝佳，且避开了大部分人流。在修道院享受宁静后，慢慢溜达回港口。傍晚时分，港口堤坝是最好的日落观景台。入夜后，港口边的咖啡馆亮起暖黄的灯，喝杯希腊咖啡，看月亮升起，完美结束这一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  港口钟楼与骡队交响曲：港口那座优雅的白色钟楼是伊兹拉岛的视觉中心。但请别只看它，坐下来，听。骡夫吆喝的低沉嗓音、骡子蹄铁磕在石板路上清脆的“哒哒”声、拴在骡子脖颈上铜铃规律而悠远的“叮当”声，以及搬运工相互喊话的片段，共同构成了一首永不停歇的、充满生命力的海岛交响曲。仔细观察骡子如何熟练地上下陡坡，背负着从矿泉水到建筑材料的各种物资，你会瞬间理解“禁车”不是噱头，而是流淌在血液里的生活逻辑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  “蓝门豪宅”的沧桑门楣：在爬上西侧山丘的小径上，你会遇到一栋特别显眼的豪宅，因其标志性的深蓝色木门而被游客私下命名。请驻足细看那石材门楣：上面雕刻着一艘张满帆的三桅帆船浮雕，线条因岁月风雨已有些模糊，但船的雄姿依旧。帆船下方，是一圈橄榄枝图案。这简练的雕刻，是一个家族全部的荣誉自述——他们的财富来自大海，他们的信仰与和平（橄榄枝象征）也由大海守护。阳光斜射时，浮雕的阴影深深嵌入石壁，历史的分量触手可及。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  修道院的寂静庭院与猫：徒步至普罗菲蒂斯·伊利亚斯修道院，推开那扇朴素的木门，喧嚣瞬间被隔绝。庭院中央是一棵巨大的棕榈树，投下清凉的阴影。地面上铺着白色的鹅卵石，被僧侣或访客的长年行走磨得光滑温润。这里总是栖息着几只慵懒的猫，它们在阳光下梳理毛发，或是在古老的石凳下打盹，眼神淡然，仿佛才是这里真正的主人。这份极致的宁静，只有风声、偶尔的鸟鸣和远处极细微的海浪声，是洗涤城市浮躁灵魂的最佳良药。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  黄昏时分的港口光影魔法：一定要在日落前回到港口。当太阳沉向伯罗奔尼撒半岛的山后，光线变得金黄而温柔。这时，看阳光如何为西侧山崖上层层叠叠的白色石屋镶上耀眼的金边，而建筑的侧面则陷入深邃的蓝灰色阴影中。海水的颜色从湛蓝变为紫金，再变为墨水般的深蓝。港口的船只变成黑色的剪影，灯火逐一亮起，倒映在平静如镜的水面上。这一刻，整个伊兹拉岛像被施了魔法，从白日的明信片，变成了一幅古典的油画，充满温暖而怀旧的情绪。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`首先，时间就是金钱（和体验）。夏季（7-8月）是绝对旺季，船票紧张，物价最高，狭窄的港口主街摩肩接踵。想要获得这份攻略里描述的宁静体验，强烈建议选择五月、六月或九月前往，天气暖和，游客较少，海水已可游泳。其次，鞋子！鞋子！鞋子！ 重要的事情说三遍。岛上全是凹凸不平的石头路和陡峭的阶梯，绝对不要为了好看穿高跟鞋或硬底鞋。一双舒适耐磨的防滑运动鞋或徒步鞋是你最好的伙伴。第三，关于“交通”：岛上没有出租车，你的主要交通工具是双腿。如果需要搬运大件行李从港口到酒店，可以雇佣骡子或搬运工，务必提前谈好价格。另外，虽然岛民淳朴，但港口人多处仍需注意看管随身物品。最后，尊重隐私：很多美丽的豪宅仍是私人住宅，拍照时请避免对准窗户或院内，静静欣赏外观就好。`}</p>
            </div>
          </Section>

          <Section title={`6. 伊兹拉岛周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿方面，伊兹拉岛没有大型连锁酒店，多是家族经营的精品酒店或由历史豪宅改造的奢华民宿。推荐住在港口附近或西侧山腰上，前者方便，后者View无敌。比如一些改造自船长宅邸的酒店，保留了原始的石头拱顶和厚墙，配以现代设计家具，住在里面本身就是一种历史体验。餐饮是重头戏。午餐可以去港口东侧那些不在主街正面、需要下几步台阶的家庭式海鲜小馆，价格更实在，往往能吃到当天清晨捕获的最新渔获，简单的烤鱼撒上橄榄油和柠檬就足够鲜美。晚餐则推荐尝试“Moussaka”（羊肉茄子派）或“Gemista”（番茄或甜椒塞米饭） 这类传统希腊家常菜。别忘了点一瓶本地的松香味白酒“茴香烈酒”，兑水后变成奶白色，配着夕阳和海风，味道正好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间充裕，强烈推荐进行一场半岛徒步探索。从港口出发，沿着清晰的小径向南或向北海岸线行走，不到一小时，你就会发现自己身处完全不同的世界：荒芜的岩石海岸，清澈见底的隐秘小海湾（非常适合游泳），以及散落在山坡上的、更为破败古朴的古老石屋遗迹。这里几乎没有游客，只有山羊和海鸟为伴。另一个方向，可以探访岛上的艺术家工作室或小型画廊。伊兹拉岛的艺术氛围浓厚，许多艺术家在此定居创作，他们的工作室有时会对访客开放，你能看到以海岛为灵感的画作、陶瓷或雕塑，这是理解岛屿当代文化脉搏的绝佳方式。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`伊兹拉岛的魂，不在明信片般的风景里，而在那 enforced slowness（被强制执行的缓慢）中，在骡铃与海浪的合奏里，在石头吸纳了数个世纪阳光后散发出的温润质感里。它是一场对“效率至上”现代生活的、温柔而坚定的叛逃，告诉你生活还可以有另一种节奏——以脚步丈量，以目光收藏，以一颗被海风吹得空旷而宁静的心去感受。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dimitsana-gunpowder-mills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪米察纳（伯罗奔尼撒的火药加工中心遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dimitsana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-street-of-the-knights-rhodes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    骑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">骑士街</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Street of the Knights</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ioannina-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    约
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">约阿尼纳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ioannina Old Town</p>
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
