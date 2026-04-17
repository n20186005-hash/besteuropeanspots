import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科洛西城堡 Kolossi Castle｜探秘十字军骑士的坚固塔楼与塞浦路斯甜酒发源地 - 最佳欧洲景点',
  description: '车子驶离利马索尔喧嚣的海滨大道，拐进一条被柑橘园和葡萄田包围的乡间小路。空气中立刻弥漫开甜腻的橙花香和干燥泥土的气息，远远地，你就看到了它——科洛西城堡。它不像童话里那种尖顶繁复的宫殿，而更像一个沉默的、棱角分明的黄色巨石，敦实地蹲在迈萨奥里亚平原上，被一片橄榄树林和仙人掌丛恭敬地环绕着。第一眼的感',
}

export default function KolossiCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科洛西城堡', href: '/attractions/kolossi-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科洛西城堡・Kolossi Castle・塞浦路斯・利马索尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离利马索尔喧嚣的海滨大道，拐进一条被柑橘园和葡萄田包围的乡间小路。空气中立刻弥漫开甜腻的橙花香和干燥泥土的气息，远远地，你就看到了它——科洛西城堡。它不像童话里那种尖顶繁复的宫殿，而更像一个沉默的、棱角分明的黄色巨石，敦实地蹲在迈萨奥里亚平原上，被一片橄榄树林和仙人掌丛恭敬地环绕着。第一眼的感觉是粗犷，甚至有点笨拙，但那种历经八百年日晒风蚀后依然绷紧的肌肉感，会让你瞬间屏住呼吸。
走近了，护城河早已干涸，长满了倔强的野草和艳红的罂粟花。穿过石桥，站在塔楼巨大的阴影下，触手可及是石头表面被岁月和战火磨出的粗砺质感。四周安静得能听到风声穿过雉堞的呜咽，以及远处村庄偶尔传来的狗吠。这里没有游客的喧嚣，只有几个本地老人坐在不远处的树荫下聊天，他们的生活似乎早已与这座古堡的节奏融为一体。你忽然意识到，这不是一个被供奉起来的博物馆展品，它依然是这片土地生活背景的一部分。
而这座城堡最奇妙的灵魂，不在冰冷的石头里，而在空气中那一丝若有若无的、甜蜜的发酵气息里。就在城堡围墙外，那些蔓延的葡萄园，正生长着制作Commandaria甜酒的古老品种：黑玛拉和西尼特丽。公元十二世纪，圣约翰骑士团的骑士们就是在这里，用日晒法浓缩葡萄汁，酿出了被誉为“世界最古老名酒”的甜酒。当你用手抚过塔楼底部那些曾经用作酿酒室和糖坊的拱形石窖门框时，指尖仿佛还能感受到一丝黏稠的甜香。军事的冷酷与美酒的醇厚，就这样在科洛西奇妙地共生，构成了它独一无二的、刚柔并济的魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离利马索尔喧嚣的海滨大道，拐进一条被柑橘园和葡萄田包围的乡间小路。空气中立刻弥漫开甜腻的橙花香和干燥泥土的气息，远远地，你就看到了它——科洛西城堡。它不像童话里那种尖顶繁复的宫殿，而更像一个沉默的、棱角分明的黄色巨石，敦实地蹲在迈萨奥里亚平原上，被一片橄榄树林和仙人掌丛恭敬地环绕着。第一眼的感觉是粗犷，甚至有点笨拙，但那种历经八百年日晒风蚀后依然绷紧的肌肉感，会让你瞬间屏住呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，护城河早已干涸，长满了倔强的野草和艳红的罂粟花。穿过石桥，站在塔楼巨大的阴影下，触手可及是石头表面被岁月和战火磨出的粗砺质感。四周安静得能听到风声穿过雉堞的呜咽，以及远处村庄偶尔传来的狗吠。这里没有游客的喧嚣，只有几个本地老人坐在不远处的树荫下聊天，他们的生活似乎早已与这座古堡的节奏融为一体。你忽然意识到，这不是一个被供奉起来的博物馆展品，它依然是这片土地生活背景的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这座城堡最奇妙的灵魂，不在冰冷的石头里，而在空气中那一丝若有若无的、甜蜜的发酵气息里。就在城堡围墙外，那些蔓延的葡萄园，正生长着制作Commandaria甜酒的古老品种：黑玛拉和西尼特丽。公元十二世纪，圣约翰骑士团的骑士们就是在这里，用日晒法浓缩葡萄汁，酿出了被誉为“世界最古老名酒”的甜酒。当你用手抚过塔楼底部那些曾经用作酿酒室和糖坊的拱形石窖门框时，指尖仿佛还能感受到一丝黏稠的甜香。军事的冷酷与美酒的醇厚，就这样在科洛西奇妙地共生，构成了它独一无二的、刚柔并济的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科洛西城堡`} />
                <InfoRow label="英文名称" value={`Kolossi Castle`} />
                <InfoRow label="正式名称" value={`Kolossi Castle`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`利马索尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是十字军东征时期圣约翰骑士团在塞浦路斯最重要的军事与行政中心之一，见证了地中海东岸复杂的权力更迭。`} />
                <InfoRow label="建筑特色" value={`一座威严的三层方形塔楼，由厚重的黄色石灰石砌成，外围环绕着深深的护城河遗迹，是军事防御建筑的典范。`} />
                <InfoRow label="建筑风格" value={`坚固朴素的军事哥特式风格，注重实用性与防御功能，内部结构展现了中世纪城堡的生活格局。`} />
                <InfoRow label="文化价值" value={`不仅是军事历史的见证，更是塞浦路斯国酒——Commandaria甜葡萄酒的诞生地与命名来源，承载着岛屿的农业与贸易史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常为每日开放，夏季（4月-9月）上午9:00至下午7:00，冬季（10月-3月）上午9:00至下午5:00。最后入场时间为关闭前半小时。具体时间可能因季节或特殊维护略有调整，建议出行前查阅官网确认。`} />
              <InfoRow label="门票价格" value={`成人票约为2.5欧元，儿童及学生票有优惠。可能提供家庭套票。具体票价以现场公告为准。`} />
              <InfoRow label="地址" value={`Kolossi 77, Kolossi 4632, Cyprus`} />
              <InfoRow label="交通方式" value={`从拉纳卡国际机场出发，最佳方式是租车自驾，沿A1高速公路向利马索尔方向行驶，转入B6路，车程约40-50分钟。从利马索尔市中心搭乘巴士（如16路巴士）前往“Kolossi”站，车程约20-30分钟，班次较为稀疏，建议提前查好时刻表。出租车从利马索尔市中心出发约15-20分钟车程。自驾是最推荐的方式，城堡外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科洛路斯这片土地的命运，早在十字军到来之前就已波澜起伏。最初，这里只是一片肥沃的平原，由拜占庭帝国统治。直到1191年，英格兰国王“狮心王”理查在前往第三次十字军东征的途中征服了塞浦路斯，这片岛屿的命运齿轮开始猛烈转动。理查很快将塞浦路斯转卖给了圣殿骑士团，随后又落到了耶路撒冷的圣约翰骑士团（又称医院骑士团）手中。科洛西，因其战略位置和丰饶的农业资源，被选为骑士团在塞浦路斯的重要据点。最初的城堡建于1210年左右，但今天我们看到的雄伟塔楼，却诞生于一段充满了复仇与重建意志的岁月。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1454年，是科洛西城堡重生的一年。当时，骑士团在塞浦路斯的指挥官是路易斯·德·马尼亚克。在他的主持下，原有的防御工事被彻底重建，建成了我们现在看到的这座高达21米的方形主塔楼。你可以想象，在那个时代，地中海东岸风云诡谲，阿拉伯的舰队时常威胁海岸线，坚固的防御是第一要务。这座塔楼的设计完全为战争服务：墙壁厚达惊人的2.5米，底层没有窗户，入口高悬在二层，需要通过一座可收起的木桥才能进入。骑士们囤积粮草，在塔顶架设弩炮，将这里打造成一个几乎无法攻破的堡垒。塔楼内部，每一层都有巨大的壁炉，即便是战时，骑士们也能在厚重的石墙内维持体面的生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，骑士团在科洛西留下的不朽遗产，并非只有军事。他们极富远见地将这里发展成了一个庞大的、高度组织化的农业与工业生产中心。城堡周边广阔的领地，被系统地规划成葡萄园、甘蔗田和橄榄林。骑士们引入了先进的灌溉技术和酿酒工艺，尤其是一种独特的甜酒酿造法：将葡萄在藤上晾晒至浓缩，再行压榨发酵，酿出的酒浓稠如蜜，甘甜醇厚。因为骑士团最高首领被称为“大团长”（Grand Commander），这款酒便被命名为“Commandaria”，即“团长之酒”。它不仅成为骑士团财富的重要来源，更随着商船远销欧洲各国，成为欧洲王室宴席上的珍品，科洛西也因此成了塞浦路斯甜酒名副其实的摇篮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`权力的游戏从未停歇。1570年，奥斯曼帝国的大军席卷塞浦路斯，利马索尔沦陷，科洛西城堡的军事使命走到了尽头。骑士团撤离，城堡被奥斯曼人接管，随后在漫长的岁月里逐渐荒废，变成了当地农民的仓库和羊圈。厚厚的墙壁默默承受着时间的剥蚀，葡萄园却依然在四季轮回中生长结果，Commandaria的酿造传统在周边的村庄里奇迹般地保留了下来。直到二十世纪，塞浦路斯政府开始对这座具有双重象征意义的历史遗迹进行系统的考古研究和修复，才让这座沉默的巨石再次开口，向我们讲述那些关于信仰、战争、贸易与甜蜜的复杂往事。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午三点后抵达，此时地中海炙热的阳光开始变得柔和，光线为城堡的石灰石墙面镀上温暖的金色。整体游览时间大约需要两到三个小时，节奏宜缓不宜急。先从外部感受它的整体气势和与周边田园的共生关系，再进入塔楼内部探索中世纪生活的细节，最后在日落时分登顶，收获最壮丽的风景。这样的安排既能避开正午的暴晒，又能捕捉到一天中最美的光影，并留出足够的时间去品味历史和酒香交织的独特氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部的旋转楼梯非常陡峭且狭窄，请务必穿防滑的平底鞋，上下楼时注意安全。塞浦路斯日照强烈，即便是下午，也请准备好帽子、太阳镜和充足的饮用水。城堡内部除了解说牌几乎没有其他设施，建议提前了解其历史或考虑聘请一位当地导游，会让你的游览体验深刻十倍。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场沿着开满野花的小径走近，首先在干涸的护城河边驻足，仰视塔楼全貌，感受其作为防御工事的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过石桥进入内院，触摸外墙粗糙的石灰石，寻找石头上可能遗留的古老刻痕或弹孔痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从二层的主入口进入塔楼内部，让眼睛适应昏暗的光线，仔细观看一层大厅巨大的拱顶和壁炉，想象骑士们在此集会的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的旋转石阶小心翼翼地登上二楼，参观曾经的领主大厅，留意石窗旁保存完好的石凳和精美的十字军徽章雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续攀爬至屋顶平台，这里是旅程的高潮，360度环视迈萨奥里亚平原、远处的特罗多斯山脉以及利马索尔海岸线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，不要错过西侧附属建筑的遗迹，那里是曾经的酿酒室、糖坊和马厩，试着在废墟间嗅闻一丝历史的甜香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，漫步到城堡外围的古老橄榄树下，坐在阴凉里，看着夕阳将塔楼的影子慢慢拉长，彻底融入这片宁静的风景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出塔楼硬朗的轮廓和石头的肌理，将前景的野花或橄榄树枝纳入构图，增添生机与层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`塔楼二层拱窗框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`从室内透过厚实的石窗框向外拍摄，将窗外的葡萄园或远山作为画中画，深刻体现“守望”的意境。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`屋顶平台西北角俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从此处可以拍到城堡长长的影子投在田野上的画面，同时将远方利马索尔城市的现代轮廓纳入镜中，形成古今对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`酿酒室废墟门洞`}</h4>
                  <p className="text-sm text-gray-700">{`利用残存的拱形石门作为天然画框，对准中心的主塔楼，营造出深邃的透视感和故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`黄金拍摄时间是日出后一小时和日落前一小时，此时的“魔法光线”能让石灰石城堡呈现迷人的蜜糖色。多利用前景，如仙人掌、古老的陶罐碎片或葡萄藤，来增加画面的叙事性。请尊重遗址，避免使用无人机（可能受限制），也不要为了拍照而攀爬禁止进入的脆弱遗迹。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`利马索尔市中心靠近老港口的经济型公寓或家庭旅馆，交通便利，晚上可以漫步在海滨长廊，感受现代塞浦路斯的活力。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`选择科洛西村或附近皮拉村由传统石屋改造的精品民宿，清晨在鸟鸣和咖啡香中醒来，步行即可抵达城堡，享受真正的乡村宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史氛围`}</h4>
                  <p className="text-sm text-yellow-800">{`利马索尔老城内由威尼斯时期建筑修复的五星级酒店，置身于历史街区，提供顶级服务，部分房间可能拥有海景或古城景观。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华田园牧歌`}</h4>
                  <p className="text-sm text-purple-800">{`特罗多斯山麓附近的葡萄酒庄园酒店，坐拥自家葡萄园，不仅可以品尝到最地道的Commandaria甜酒，还能在露台上远眺科洛西城堡的模糊身影。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果希望深度体验城堡的晨昏之美，强烈建议住在科洛西或邻近的村庄，但夜间娱乐和餐饮选择较少。利马索尔市区选择更多，生活便利，且治安良好。夏季（6-8月）是旅游旺季，住宿需提前预订，春季和秋季气候更宜人，是游览和住宿的完美季节。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科洛西的时候，我的手里没有剑，也没有盾，但舌尖却仿佛萦绕着Commandaria甜酒那复杂而绵长的滋味——那是无花果、蜜枣与焦糖混合的香气，是阳光浓缩的味道，也是时间沉淀的精华。这座城堡用它最独特的方式告诉我，历史从来不是单一的面孔。它既是金铁交鸣的战场，也是流淌着蜜液的酒窖；它歌颂勇武，也铭记创造。那些骑士们，一手紧握长剑守护信仰，一手持着酒杯敬颂生活，这种矛盾中的统一，让科洛西摆脱了单纯石头堡垒的冰冷，拥有了血肉的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速打卡、浮光掠影的世界里，科洛西像一位沉默的智者。它不迎合，不喧哗，只是静静地站在橄榄树下，等待着那些愿意慢下来、细细品读的旅人。来这里，你不是为了收集又一个“世界遗产”的图章，而是为了完成一次触碰——用掌心触摸晒得发烫的古老石头，用鼻腔呼吸混杂着历史尘土与葡萄甜香的空气，用眼睛丈量从雄浑塔楼到静谧田园的视野切换。它会让你明白，最深度的旅行，是让一个地方的多重灵魂，在你的记忆里发酵，最终酿成只属于你自己的、回味无穷的那一杯“团长之酒”。这，正是科洛西不可替代的理由。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bauska-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    包
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">包斯卡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bauska Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-fougeres" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    富
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">富热尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Fougères</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lichtenstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利希滕施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lichtenstein Castle</p>
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
