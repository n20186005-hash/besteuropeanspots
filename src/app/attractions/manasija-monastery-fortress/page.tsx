import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马纳西亚修道院 Manasija Monastery｜探秘塞尔维亚“壁画堡垒”，中世纪的信仰与雄心跳动 - 最佳欧洲景点',
  description: '车子转过最后一个弯道，那片巨大的、赭石色的堡垒围墙就这样猝不及防地撞进视线里。它不像那些精致纤巧的教堂，而是像一头匍匐在翠绿山谷中的巨兽，沉默，雄浑，带着未经修饰的粗砺感。十一座高矮不一的塔楼刺破天际，城墙厚重得仿佛能隔绝几个世纪的喧嚣。空气里是青草、泥土和被阳光晒暖的石头气息，远处只有风声和零星的...',
}

export default function ManasijaMonasteryFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '塞尔维亚', href: '/destinations/serbia' },
            { label: '马纳西亚修道院', href: '/attractions/manasija-monastery-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马纳西亚修道院・Manasija Monastery・塞尔维亚・波莫拉夫列州，代斯波托瓦茨镇附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子转过最后一个弯道，那片巨大的、赭石色的堡垒围墙就这样猝不及防地撞进视线里。它不像那些精致纤巧的教堂，而是像一头匍匐在翠绿山谷中的巨兽，沉默，雄浑，带着未经修饰的粗砺感。十一座高矮不一的塔楼刺破天际，城墙厚重得仿佛能隔绝几个世纪的喧嚣。空气里是青草、泥土和被阳光晒暖的石头气息，远处只有风声和零星的鸟鸣。那一刻你会明白，这不仅仅是一座修道院，这是一座为信仰而建的堡垒。
穿过厚重的堡垒主门洞，光线骤然变得柔和，一个静谧的、被高墙环绕的世界在你面前展开。中心矗立着圣母安息教堂，它的红色砖石在阳光下泛着温暖的光泽，与外围军事化的森严形成奇妙的对比。修士们穿着黑袍悄无声息地走过碎石小径，他们的存在让时间的流速仿佛都变慢了。这里的生活节奏依然遵循着数百年的韵律，钟声在固定的时辰敲响，召唤着祈祷。你能感觉到，这高墙之内，神圣的日常从未中断。
而真正的震撼，在你推开教堂那扇沉重的木门后才真正开始。外界的光被滤去，一种幽深、宁静，混合着古老蜡烛和木头气味的空气将你包裹。然后，你的眼睛适应了昏暗，墙壁和穹顶上那覆盖每一寸面积的壁画，便如同星河般缓缓亮起。数百年前的颜色——深蓝、绛红、金箔——在摇曳的烛光中闪烁。那些圣人的眼神深邃而宁静，仿佛能穿透时光凝视着你。最令人屏息的是南墙上一整列的“圣战士”，他们身披铠甲，手持利剑与十字架，神情庄严而勇毅，是中世纪塞尔维亚骑士精神在神学上的至高投射。站在这里，你能听见画笔落在湿石膏上的沙沙声，能听见修建者斯特凡大公的祈祷，能听见历史在石壁间沉重的呼吸。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子转过最后一个弯道，那片巨大的、赭石色的堡垒围墙就这样猝不及防地撞进视线里。它不像那些精致纤巧的教堂，而是像一头匍匐在翠绿山谷中的巨兽，沉默，雄浑，带着未经修饰的粗砺感。十一座高矮不一的塔楼刺破天际，城墙厚重得仿佛能隔绝几个世纪的喧嚣。空气里是青草、泥土和被阳光晒暖的石头气息，远处只有风声和零星的鸟鸣。那一刻你会明白，这不仅仅是一座修道院，这是一座为信仰而建的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过厚重的堡垒主门洞，光线骤然变得柔和，一个静谧的、被高墙环绕的世界在你面前展开。中心矗立着圣母安息教堂，它的红色砖石在阳光下泛着温暖的光泽，与外围军事化的森严形成奇妙的对比。修士们穿着黑袍悄无声息地走过碎石小径，他们的存在让时间的流速仿佛都变慢了。这里的生活节奏依然遵循着数百年的韵律，钟声在固定的时辰敲响，召唤着祈祷。你能感觉到，这高墙之内，神圣的日常从未中断。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正的震撼，在你推开教堂那扇沉重的木门后才真正开始。外界的光被滤去，一种幽深、宁静，混合着古老蜡烛和木头气味的空气将你包裹。然后，你的眼睛适应了昏暗，墙壁和穹顶上那覆盖每一寸面积的壁画，便如同星河般缓缓亮起。数百年前的颜色——深蓝、绛红、金箔——在摇曳的烛光中闪烁。那些圣人的眼神深邃而宁静，仿佛能穿透时光凝视着你。最令人屏息的是南墙上一整列的“圣战士”，他们身披铠甲，手持利剑与十字架，神情庄严而勇毅，是中世纪塞尔维亚骑士精神在神学上的至高投射。站在这里，你能听见画笔落在湿石膏上的沙沙声，能听见修建者斯特凡大公的祈祷，能听见历史在石壁间沉重的呼吸。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马纳西亚修道院`} />
                <InfoRow label="英文名称" value={`Manasija Monastery`} />
                <InfoRow label="正式名称" value={`马纳西亚修道院与拉扎列夫堡垒`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`波莫拉夫列州，代斯波托瓦茨镇附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`塞尔维亚中世纪“莫拉瓦学派”建筑的巅峰之作，是塞尔维亚专制君主斯特凡·拉扎列维奇时代国力与精神信仰的终极体现。`} />
                <InfoRow label="建筑特色" value={`一座被宏伟的、拥有11座高塔的环形堡垒严密守护着的修道院，是集宗教、文化、军事防御于一体的综合建筑群。`} />
                <InfoRow label="建筑风格" value={`塞尔维亚莫拉瓦学派建筑风格，融合了拜占庭传统与本地石砌工艺，带有明显的晚期中世纪防御工事特征。`} />
                <InfoRow label="文化价值" value={`其教堂内部的湿壁画是塞尔维亚中世纪艺术最辉煌的遗产之一，尤以《圣战士》系列壁画闻名，被誉为巴尔干半岛最精美的壁画宝库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂区域每日开放，夏季（4月至10月）通常为上午8点至下午7点；冬季（11月至3月）为上午9点至下午4点。堡垒城墙和塔楼区域开放时间可能缩短或根据天气情况临时关闭。修道院在塞尔维亚东正教重要宗教节日（如复活节、圣诞节）期间可能有特殊的礼仪时间，游客参观或受影响。建议行前查看官网或致电确认。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂和内部庭院免费。若需进入博物馆展室、登上部分堡垒城墙或塔楼，可能需要支付象征性费用，约300-500塞尔维亚第纳尔（约合2.5-4.5欧元）。学生、儿童及团体可能有优惠。讲解服务（如有）需额外预约和付费。`} />
              <InfoRow label="地址" value={`Manasija Monastery, Despotovac 12313, Serbia`} />
              <InfoRow label="交通方式" value={`马纳西亚位于塞尔维亚中部，公共交通需稍费周折但完全可行。最便捷的出发点是首都贝尔格莱德。
从贝尔格莱德乘坐长途巴士前往代斯波托瓦茨镇，车程约2.5-3小时，班次每天约3-4班，建议提前在贝尔格莱德汽车站购票。
抵达代斯波托瓦茨镇后，修道院位于镇外约6公里处，可乘坐当地稀少的出租车（最好让司机等候），或尝试联系当地民宿主人接送。
自驾是最灵活的方式：从贝尔格莱德沿E75/E761高速公路向东南方向行驶，转入地方道路前往代斯波托瓦茨，全程约140公里，路况良好，耗时约2小时。修道院入口处有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从15世纪初讲起，那时的塞尔维亚，正处于一个风雨飘摇又雄心勃勃的十字路口。奥斯曼帝国的阴影已经从东南方压境，而塞尔维亚的统治者们，在失去帝国的冠冕后，正试图在精神与文化上重塑民族的灵魂。我们的主角，斯特凡·拉扎列维奇，就是这样一位人物。他不仅是一位“专制君主”（Despot），更是一位学者、作家和虔诚的信仰者。马纳西亚，正是他为自己，也为整个民族打造的“精神堡垒”。他从1406年开始动工，倾尽国力，召集了当时最优秀的建筑师、石匠和，尤其是，来自各地的壁画大师。他想建的，远不止一座修道院，而是一个能够抵御外敌、保存塞尔维亚文化火种，并能进行学术研究的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，你看到了那令人叹为观止的双重设计：外围是足以应对火炮时代的、带有棱堡雏形的巨型防御墙和塔楼，这是肉体的盾牌；内里是精美绝伦的教堂和壁画，这是灵魂的圣殿。斯特凡大公甚至在这里建立了著名的“Resava 学派”抄写室，僧侣们在此不知疲倦地抄写、翻译和装饰珍贵的手稿，让马纳西亚成为了整个斯拉夫世界的文化灯塔。这里的壁画，尤其是“圣战士”系列，被艺术史家认为是塞尔维亚中世纪绘画的“文艺复兴”，人物的面部有了更细腻的心理刻画，色彩更加丰富饱满，金色的运用让整个空间充满了天堂般的光辉。它代表了塞尔维亚艺术在陷落前的最后一次，也是最辉煌的一次喷发。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的洪流残酷无情。1458年，在斯特凡大公去世几十年后，奥斯曼土耳其人的铁蹄最终还是踏破了这座坚固的堡垒。修道院被占领，部分建筑遭到破坏，那些璀璨的壁画被蒙上了灰尘，甚至因为被用作火药库而受到烟熏的侵蚀。往后的几个世纪，它时而衰落，时而得到部分修缮，但始终未能恢复最初的荣光。堡垒的墙壁上留下了多次争夺战的弹孔和损毁的痕迹，它们像伤疤一样，讲述着这片土地反复被战火洗礼的命运。你会发现，有些塔楼是完整的，有些只剩半截，这种残缺本身，就是一种沉重的叙事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在20世纪，尤其是二战之后。塞尔维亚的文物保护者开始系统性地拯救这座国宝。修复工作极其漫长且精细，如同一场与时间赛跑的战役。清理数百年的积尘和烟垢，加固松动的墙体，用最尖端的技术稳定那些脆弱得仿佛一碰即碎的壁画颜料。这是一个“再发现”的过程：当覆盖在壁画上的后期粗糙涂抹被小心剥离后，底下鲜艳如初的15世纪原画令人震撼不已。今天，我们能看到大部分壁画呈现出两种状态：一部分是历经沧桑、颜色沉淀后的古朴厚重；另一部分是经过科学清洗后焕发出的、惊人明亮的原色。这种对比，非但不突兀，反而像一场跨越时空的对话，让你同时看到了它的诞生与它的磨难。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，漫步在马纳西亚，你能触摸到三种层层叠叠的时间：斯特凡大公建造它的雄心时代，奥斯曼统治下的沉默与坚守时代，以及现代塞尔维亚人重新拥抱这份遗产的复兴时代。它不再是边境堡垒，但它依然是塞尔维亚民族精神的一座灯塔。每年都有朝圣者前来，也有如你我这样的旅人，只为站在那些壁画前，感受那种在绝境中依然要创造美、保存信仰的、无比坚韧的力量。这就是马纳西亚的故事，一个关于建造、摧毁与重生的故事，被永恒地砌在了石头和颜料之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排整整一个白天来沉浸于此。最好在上午九点左右抵达，这时晨雾散去，阳光正好洒在堡垒东侧，是拍照的黄金时间，且游客尚未大批到来。整体游览耗时约4-5小时，节奏宜慢不宜快。上午先专注于外围堡垒的宏大规模和教堂内部的壁画精髓，此时光线逐渐射入教堂窗户，有助于看清壁画细节。中午可以在修道院庭院中静坐体会氛围。下午再细细探索堡垒城墙的步行路径、博物馆（如开放）以及周边自然环境。这样的安排能让你由外至内、由宏观至微观，层层深入地理解这个地方的精神内核。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入教堂女性需遮盖头部（门口常备围巾），男女皆应穿着过膝的服装，以示尊重。
教堂内部严禁使用闪光灯拍照，部分珍贵壁画区域可能完全禁止拍摄，务必遵守规定，守护这些脆弱的瑰宝。
夏季带上饮用水和遮阳帽，城墙漫步路段毫无遮挡；春秋季则需备一件防风外套，山谷中风势有时较强。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场步行至堡垒巨大的主门楼下，仰头感受那近乎压迫性的防御气势，寻找石墙上岁月留下的刻痕与弹孔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直穿过门洞进入内部庭院，第一时间去拜访中心的主教堂，让你的眼睛在昏暗光线下慢慢适应并发现满壁生辉的古老湿壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时静静地坐在教堂长椅上，目光随着烛火游走，重点寻找南墙那幅著名的、描绘骑士圣人的《圣战士》组画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，在宁静的庭院中慢行一圈，观察修士们生活的侧楼、古老的石井，感受修道院日常的脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从庭院内的台阶登上连接部分塔楼的堡垒城墙，沿着垛口漫步，从防御者的视角俯瞰整个修道院布局和外面的绿色山谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放，去探访小小的博物馆或旧抄写室遗址，看看从这里拯救出来的手稿碎片和圣物，了解“Resava学派”的荣光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出堡垒，绕到建筑群的侧面或后方，从远处回望这座被森林和草地环抱的“石制城池”，体会它如何与自然地貌融为一体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分（如果留得够晚），等待夕阳将堡垒的塔楼和城墙染成金红色，这是它一天中最柔和也最壮美的时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`堡垒东侧草地仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时，阳光正面照亮堡垒，站在东侧开阔草地上用广角镜头拍摄，将雄伟的城墙、塔楼与天空一同纳入，构图时让墙体占据画面三分之二。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂内部壁画细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用从窗户射入的自然柔光（上午或下午斜射光为佳），将相机感光度调高，关闭闪光，专注拍摄壁画中圣人面孔或“圣战士”的铠甲纹样，注意捕捉壁画上金箔反光的细微闪烁。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西南角塔楼视角`}</h4>
                  <p className="text-sm text-gray-700">{`登上西南段城墙，以教堂的红色屋顶和金色十字架为前景，聚焦拍摄后方层叠的堡垒其他塔楼和远山，形成丰富的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院后方山坡俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`沿小路走到堡垒后方的小山坡上，下午顺光时，可以拍摄到修道院建筑群被完整环状城墙包围的独特全景，以及它与周围田园风光的关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支稳固的轻便三脚架，在教堂内昏暗光线下拍摄壁画细节时至关重要，同时能避免手震破坏画面。`}</li>
                <li>• {`尊重宗教场所的静谧，拍照时动作尽量轻缓，避免打扰正在祈祷的修士和访客。有些区域若立有“禁止拍照”标志，请务必遵守。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`修道院附近乡村民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择住在步行可达修道院的传统塞尔维亚乡村房子里，清晨在鸡鸣声中醒来，独享没有游客的堡垒静默时刻，主人通常会奉上自家酿的蜂蜜和 rakija（水果白兰地）。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`代斯波托瓦茨镇上舒适旅馆`}</h4>
                  <p className="text-sm text-green-800">{`镇上家庭经营的迷你旅馆，价格实惠，能体验到本地人的热情好客，晚上可以去镇中心的小餐馆品尝塞尔维亚烤肉和新鲜沙拉。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山林间传统木屋`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约20分钟进入附近的雷萨瓦山区，入住藏在森林边的原木小屋，夜晚只有星空和溪流声，白天则可以探索附近的雷萨瓦溶洞。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`贝尔格莱德城市基地`}</h4>
                  <p className="text-sm text-purple-800">{`如果计划串联塞尔维亚多处景点，不妨以贝尔格莱德为住宿基地，白天租车前来马纳西亚进行一日深度游，晚上享受首都的繁华夜生活与美食。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和重要宗教节日期间）乡村民宿非常紧俏，务必提前数周甚至数月预订。塞尔维亚乡间治安普遍良好，人民友善，但夜间驾车请注意照明不足的多间小路。许多乡村住宿只收现金（塞尔维亚第纳尔），需提前备好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马纳西亚许久，那混合着石头的冷峻与壁画辉煌的印象，依然在脑海里盘旋。它不像那些仅仅为了美观而存在的宫殿，它的每一块石头都浸透着一种沉重的使命感。那种感觉，就像触摸到了一段民族脊梁——在最危急的时刻，人们选择用最坚固的石头来守卫最柔软的心灵，用最艳丽的色彩来对抗最灰暗的恐惧。在这里，信仰不是虚无缥缈的，它被砌进了墙里，画在了穹顶之上，成了一种可以触摸、可以为之战斗的实体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都在快速迭代的世界里，马纳西亚像一座时间的孤岛。它提醒着我们，有些价值值得用最笨拙、最耗费心血的方式去建造和守护。它告诉我们，美可以在战火中诞生，文明可以在围墙内延续。对于每一位渴望深度游的旅人而言，来到这里，不仅仅是为了一睹中世纪的艺术高峰，更是为了完成一次精神的考古。你会在这里学会“慢下来”，用眼睛去阅读墙壁上的故事，用心去倾听石头间的沉默。当你站在那些目光沉静的圣战士壁画前，你会感受到一种超越时空的坚韧与宁静。这份触动，足以让漫长的旅途变得无比值得。这，就是马纳西亚独一无二的、无法被复制的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/novi-sad-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrovaradin Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nis-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尼什古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Niš Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/petrovaradin-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrovaradin Fortress</p>
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
