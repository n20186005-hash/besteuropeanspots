import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '勒罗斯采矿镇 Røros｜闯入挪威的彩色木屋童话与300年采矿传奇 - 最佳欧洲景点',
  description: '当火车缓缓驶入站台，你推开沉重的车门，第一口吸进的空气是那种清澈、凛冽、带着松木清香的冷。眼前的世界仿佛突然被调成了高对比度滤镜：厚厚的、洁白到刺眼的雪毯，无边无际地铺开，而在这片纯白之上，是密密麻麻、错落有致的深褐色木屋。屋顶是倾斜的，有的压着厚实的草皮，在严寒中倔强地保持着一点枯黄；烟囱里飘出淡...',
}

export default function RorosMiningTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '勒罗斯采矿镇', href: '/attractions/roros-mining-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`勒罗斯采矿镇・Røros・挪威・勒罗斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当火车缓缓驶入站台，你推开沉重的车门，第一口吸进的空气是那种清澈、凛冽、带着松木清香的冷。眼前的世界仿佛突然被调成了高对比度滤镜：厚厚的、洁白到刺眼的雪毯，无边无际地铺开，而在这片纯白之上，是密密麻麻、错落有致的深褐色木屋。屋顶是倾斜的，有的压着厚实的草皮，在严寒中倔强地保持着一点枯黄；烟囱里飘出淡青色的炊烟，笔直地升向钴蓝色的天空。这不是一个被精心修剪过的“景区”，而是一个在极地气候里挣扎、生存、繁荣了三百多年的生命体。脚下的雪被压实，发出“咯吱咯吱”的声响，那是小镇对你到来的唯一欢迎词。
你顺着主街慢慢走，木头房子的外墙因为几百年的风霜雨雪和矿石粉尘，呈现出炭黑、深棕和灰褐交织的颜色，像一块块巨大的巧克力。窗户却小小的，镶着白色的窗框，窗台上往往摆着一盏暖黄色的灯，或者一盆正在开放的仙客来，那一点鲜红或粉紫，在极简的黑白世界里，显得无比温柔而有力。空气中除了冷，还有一丝若有若无的、从门缝里飘出来的咖啡香，混合着燃烧松木壁炉的烟味。当地人穿着厚重的羊毛衫，从你身边匆匆走过，点头说一句“God dag”（日安），神情平静而务实。你会瞬间明白，这里的核心魅力不在于某个恢弘的建筑，而在于整个社区在严酷自然与厚重历史夹缝中，所凝结出的那种坚韧、自给自足且充满人情味的整体氛围。
勒罗斯最动人的，是它的“真实”。这里仍有居民世代居住，木屋里传出孩子的笑声和电视节目的声音。冬季，男人可能还在附近的森林里伐木，为过冬做准备；夏天，女人会在屋前的小花园里种上土豆和胡萝卜。采矿业早已停止，但那种与土地、与气候、与历史紧密相连的生活方式，却像深埋在地下的矿脉一样，从未真正断绝。它不是一个被时间冻结的琥珀，而是一棵年轮清晰、仍在缓慢生长的大树。你来到这里，不是参观一个标本，而是闯入了一个仍在呼吸的、关于生存与家园的古老故事里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当火车缓缓驶入站台，你推开沉重的车门，第一口吸进的空气是那种清澈、凛冽、带着松木清香的冷。眼前的世界仿佛突然被调成了高对比度滤镜：厚厚的、洁白到刺眼的雪毯，无边无际地铺开，而在这片纯白之上，是密密麻麻、错落有致的深褐色木屋。屋顶是倾斜的，有的压着厚实的草皮，在严寒中倔强地保持着一点枯黄；烟囱里飘出淡青色的炊烟，笔直地升向钴蓝色的天空。这不是一个被精心修剪过的“景区”，而是一个在极地气候里挣扎、生存、繁荣了三百多年的生命体。脚下的雪被压实，发出“咯吱咯吱”的声响，那是小镇对你到来的唯一欢迎词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你顺着主街慢慢走，木头房子的外墙因为几百年的风霜雨雪和矿石粉尘，呈现出炭黑、深棕和灰褐交织的颜色，像一块块巨大的巧克力。窗户却小小的，镶着白色的窗框，窗台上往往摆着一盏暖黄色的灯，或者一盆正在开放的仙客来，那一点鲜红或粉紫，在极简的黑白世界里，显得无比温柔而有力。空气中除了冷，还有一丝若有若无的、从门缝里飘出来的咖啡香，混合着燃烧松木壁炉的烟味。当地人穿着厚重的羊毛衫，从你身边匆匆走过，点头说一句“God dag”（日安），神情平静而务实。你会瞬间明白，这里的核心魅力不在于某个恢弘的建筑，而在于整个社区在严酷自然与厚重历史夹缝中，所凝结出的那种坚韧、自给自足且充满人情味的整体氛围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`勒罗斯最动人的，是它的“真实”。这里仍有居民世代居住，木屋里传出孩子的笑声和电视节目的声音。冬季，男人可能还在附近的森林里伐木，为过冬做准备；夏天，女人会在屋前的小花园里种上土豆和胡萝卜。采矿业早已停止，但那种与土地、与气候、与历史紧密相连的生活方式，却像深埋在地下的矿脉一样，从未真正断绝。它不是一个被时间冻结的琥珀，而是一棵年轮清晰、仍在缓慢生长的大树。你来到这里，不是参观一个标本，而是闯入了一个仍在呼吸的、关于生存与家园的古老故事里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`勒罗斯采矿镇`} />
                <InfoRow label="英文名称" value={`Røros`} />
                <InfoRow label="正式名称" value={`Røros Mining Town`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`勒罗斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界文化遗产地，是斯堪的纳维亚半岛保存最完好的矿业城镇，见证了欧洲工业化前夜的艰苦与繁荣。`} />
                <InfoRow label="建筑特色" value={`由近2000栋未经油漆的深褐色原木房屋构成的有机聚落，屋顶覆盖着厚重的草皮或石板，在极寒环境中呈现出独特而坚韧的美学。`} />
                <InfoRow label="建筑风格" value={`独特的挪威矿业城镇本土建筑风格，融合了实用主义与朴素美感，被称为“黑色黄金”的木屋建筑群。`} />
                <InfoRow label="文化价值" value={`它不仅是一个露天博物馆，更是一个持续呼吸的活态社区，完整保留了17-19世纪基于铜矿开采而形成的整套社会结构、生活方式和文化传统。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要博物馆（Rørosmuseet）及景点开放时间因季节变化极大：夏季（6月至8月）通常为每天10:00-18:00；春秋季（5月、9月）缩短为11:00-16:00，且周一可能闭馆；冬季（10月至次年4月）开放时间非常有限，通常只在周三至周六的12:00-15:00开放，或仅接受预约参观。重要节日如圣诞节和复活节期间有特殊市场，但博物馆可能关闭。务必行前在官网核实。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。联合门票（Rørosmuseet Pass）涵盖主要博物馆、矿工小屋、熔炼厂等景点：成人约180挪威克朗，儿童/学生/老人有优惠。单馆门票约80-100克朗。冬季的“历史穿越”导览游价格另计，约250克朗/人。持有挪威文化遗产卡可免费进入部分场馆。`} />
              <InfoRow label="地址" value={`Røros, 7530 Røros, Norway`} />
              <InfoRow label="交通方式" value={`从奥斯陆出发最方便。火车：从奥斯陆中央车站乘坐Dovrebanen线路列车，约4-4.5小时直达勒罗斯火车站。班次较少，通常每天2-4班，冬季可能受天气影响，务必提前在Vy官网购票并选座。飞机：可飞至特隆赫姆机场（TRD），再转乘机场大巴或火车前往勒罗斯，车程约2.5-3小时。自驾：从奥斯陆沿E6号公路转Rv30公路，冬季需配备冬季轮胎，全程约370公里，耗时约5小时。小镇内所有景点均可步行抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1646年说起。那一年，几个农民在奥拉河畔的沼泽地里，偶然发现了闪闪发光的铜矿石。消息很快传到了当时统治挪威的丹麦-挪威王国国王克里斯蒂安四世耳中。对于急需财富来支撑战争的王国来说，这无异于天降横财。国王立刻宣布此地的所有矿产资源为王权所有，并授予来自德国的矿业大亨“采矿特权”。于是，一股由商人、工程师、矿工和囚犯组成的洪流，涌向了这片当时被称为“荒原”的苦寒之地。最初的岁月是难以想象的艰苦。冬季长达八个月，气温可降至零下四十度。来自萨克森和波西米亚的矿工们，在冻土上搭起简易的木棚，用最原始的工具向地下掘进。他们的报酬不是金钱，而是用“矿石券”兑换生活必需品。一个基于铜矿的、高度封闭且等级森严的微型社会，在北极圈的边缘悄然诞生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的繁荣伴随着巨大的代价。矿工们的寿命很短，事故、肺病和严寒是常客。但铜，这种被称为“红色黄金”的金属，源源不断地被开采出来，经过小镇边缘巨大的熔炼厂，变成铸币、屋顶和火炮的原料，支撑着王国的经济命脉。小镇的格局也由此定型：靠近矿场和熔炼厂的是工人们低矮密集的黑色木屋，而成排的、稍显气派的二层商人住宅则沿着主街建立，彰显着财富与地位。整个城镇就像一台精密的机器，每一个部件——从教堂、市场、住宅到仓库——都围绕着采矿这个核心运转。这里甚至发展出了自己的货币体系和独特的方言，几乎是一个国中之国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运从不吝啬于给予考验。1678年，瑞典军队在“斯堪尼亚战争”中横扫而至，将整个城镇付之一炬。大火烧毁了几乎所有的木构建筑。但勒罗斯的脊梁没有被烧断。劫后余生的人们，利用遍地可取的木材，遵循着古老的建造智慧，迅速地重建了家园。他们学会了用更厚的原木，建造倾斜的屋顶以承受积雪，并且不再给木头上漆，让时间与自然赋予它们最本真的保护色。于是，我们今天看到的这座“黑色城镇”，其实是从灰烬中涅槃重生的版本，它比之前更加坚韧、更加适应这片严酷的土地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪，随着工业革命的深入和海外更廉价铜矿的发现，勒罗斯的矿业开始走向衰落。但有意思的是，正是这种衰落，意外地成为了它得以完整保存的原因。因为没有资本进行大规模的现代化改造，那些古老的木屋、狭窄的街巷和旧式的熔炼厂，都被原封不动地保留了下来。当世界其他地方都在拥抱钢铁和混凝土时，勒罗斯却像一位隐居的老人，固执地守护着过去的模样。转折点发生在1977年，挪威政府意识到了这座活化石的独一无二，开始对其进行系统的保护和修复。1980年，联合国教科文组织将勒罗斯采矿镇列入世界文化遗产名录，理由是它“为欧洲工业化时代一个重要的采矿社区提供了独特而完整的见证”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的勒罗斯，采铜已成为历史书中的章节。但遗产的保护并未让小镇变成空洞的展览品。当地居民积极参与到旅游、手工艺和可持续农业中。他们依旧住在祖传的木屋里，在冬天烧着壁炉，在夏天翻修屋顶的草皮。每年的二月，这里会举办盛大的“勒罗斯集市”，那是从1854年延续至今的传统，人们穿着民族服装，在冰天雪地里交易、欢庆，仿佛三百年的时光只是一瞬间。历史在这里不是被陈列的，而是被生活的。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少安排一整天（最好是一晚两天）来沉浸其中。最佳抵达时间是上午十点前，此时光线柔和，游客稀少，小镇刚刚苏醒的氛围最为原汁原味。整体游览节奏宜慢不宜快，核心是“漫步”与“体验”。上午侧重历史探索，走访博物馆和标志性建筑，理解小镇的骨架；下午则深入街巷，感受它的呼吸与脉搏，或许钻进一家咖啡馆或手工作坊；如果过夜，晚上参与一次壁炉旁的导览故事会，次日清晨再去矿场遗址感受旷野的寂静。这样的安排能让你从宏观到微观，从历史到当下，全方位地读懂勒罗斯。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`冬季来访务必穿戴专业的防滑防水靴，小镇街道积雪结冰是常态，美观的皮鞋寸步难行。
小镇部分博物馆和小店在非旅游旺季（尤其是春秋季）开放极其随性，甚至可能店主出门喝咖啡了就临时关门，请保持随遇而安的心态。
尊重私人住宅的隐私，那些美丽的木屋大多是民宅，拍照时请勿凑近窗户或踏入院内。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从游客中心拿一份地图并了解当日活动，让身穿传统服饰的工作人员为你勾勒出小镇的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着鹅卵石铺就的伯格斯塔德主街缓缓上行，用手指触摸那些被时光打磨得光滑而冰凉的深色原木墙板。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那条通往“矿工小道”的狭窄岔路，去参观那间按照1850年代原样布置的矿工家庭小屋，感受当年一家七八口人挤在斗室中的生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇子最高点的勒罗斯教堂停留，这座形似熔炼厂的“工”字形木教堂内部简朴有力，登上钟楼俯瞰全镇棋盘般的黑色屋顶与白色雪原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到小镇边缘的世遗标识牌处，回望整个聚落，理解它如何与背后的山峦、河流和矿坑遗址构成一个不可分割的整体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐就去主街上的老字号餐馆尝尝“勒罗斯烤肉”，一种用慢火在铸铁锅里炖煮数小时的羊肉或驯鹿肉传统菜肴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午的时间留给“迷失”，随意钻进任何一条小巷，观察那些门廊上雕刻的幸运符号、窗台上的小雪人和堆着柴火的院子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，参加一个前往“奥拉夫矿坑”的导览游，戴上安全帽，走进阴冷的地下巷道，亲耳听听滴水声，亲手触摸矿脉。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`勒罗斯教堂后方高处的墓地围墙边`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或日落前一小时，阳光以低角度照射，能将全镇层层叠叠的黑色木屋、袅袅炊烟与远山一同纳入取景框，构成一幅冷暖对比强烈的全景画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“斯莫尔海特”老街区的一条东西向小巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点左右的侧光能完美勾勒出木屋山墙的质感、屋顶草皮的纹理以及挂在门上的老旧铸铁门环，适合拍摄有故事感的细节特写。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`奥拉夫矿坑遗址的废矿石堆上`}</h4>
                  <p className="text-sm text-gray-700">{`站在矿渣形成的小丘上，以广角镜头拍摄，前景是粗糙的、色彩斑驳的矿石，中景是巨大的熔炼厂遗址的红色砖墙，背景是宁静的小镇，画面充满工业遗产的沧桑力量。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`冬季的镇外小桥上`}</h4>
                  <p className="text-sm text-gray-700">{`在蓝调时刻（日落后的半小时），小镇灯光初亮，天空呈深蓝色，河道积雪反光，架好三脚架长曝光，能拍到木屋温暖灯光与冷峻夜空的静谧合影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`冬季拍摄注意相机电池保暖，低温耗电极快，多备一块电池并贴身存放。逆光拍摄时，雪地反光强烈，建议酌情使用偏振镜或后期调整高光。无人机飞行在挪威受到严格管制，特别是在文化遗产地和居民区上空，飞行前务必查阅并遵守挪威民航局的具体规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`地道体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋受保护的历史木屋民宿，房东可能就住在隔壁，屋里是吱呀作响的原木地板、烧得正旺的铸铁壁炉和手织的羊毛毯，晚上能听到屋顶积雪滑落的簌簌声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品之选`}</h4>
                  <p className="text-sm text-green-800">{`由古老商人住宅改造的精品酒店，房间保留了原始的梁柱结构，但配备了地暖和高品质的卫浴，在历史感与现代舒适间找到了绝妙平衡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色营地`}</h4>
                  <p className="text-sm text-yellow-800">{`夏季不妨尝试小镇附近的荒野小屋或露营地，在午夜阳光下自己生火做饭，体验当年矿工们面对的自然环境，清晨在鸟鸣和溪流声中醒来。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于小镇边缘一座独立山丘上的高级酒店，所有房间都拥有无敌全景落地窗，桑拿房正对荒野，在极光季节甚至可以直接在房间内守候绿色女神的光临。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`冬季是勒罗斯的旅游旺季（尤其是圣诞集市期间），住宿非常紧张，必须提前数月预订。夏季房源相对宽松，但同样建议早定。大部分历史民宿不设24小时前台，需与房东明确抵达和入住时间。小镇治安极好，夜晚独自散步也很安全，但冬季天黑得早，道路漆黑结冰，出门建议携带手电筒。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开勒罗斯许久，那股混合着冷空气、松木烟和咖啡香的味道，还会偶尔钻进记忆。它带给我的触动，远不止于眼睛看到的风景。那是一种关于“韧性”的深刻教育。在纬度如此之高、环境如此苛刻的地方，人类不是以一种对抗的姿态，而是以一种谦卑又智慧的方式，与自然达成了某种共生协议。他们向大山索取铜矿，也用大山的木材建造家园；他们畏惧严寒，却也学会了利用冰雪和寂静来沉淀生活。这里的一切都显得那么实在，没有浮夸的装饰，没有多余的语言，每一根木头、每一块石头都指向生存与传承。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度、迷恋新潮的世界里，勒罗斯像一位沉默的智者。它提醒着我们，有一种价值叫做“持续”，有一种美来源于“实用”，有一种强大深植于“社区”。它不仅仅是一个旅游目的地，更是一个让人内心沉静下来、思考何为家园、何为根基的精神坐标。每一位热爱深度游的旅人，都应该来勒罗斯住上一晚，在壁炉的火光里，听一听风雪敲打窗棂的声音，感受一下时间在这里缓慢流淌的节奏。你会明白，真正的财富，有时不是闪闪发光的金属，而是那种能让一个社区在北极圈旁，温暖而坚定地站立三百年的、看不见的力量。这趟旅程，是一次对坚韧生命的朝圣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nidaros-cathedral-trondheim" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特隆赫姆尼达罗斯主教座堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nidaros Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bryggen-wharf" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卑尔根鱼市附近古建</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bryggen Wharf（布吕根码头古建群）</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alesund-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥勒松老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ålesund Old Town</p>
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
