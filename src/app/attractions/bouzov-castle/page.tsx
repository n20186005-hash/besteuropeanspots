import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博乌佐夫城堡 Bouzov Castle｜条顿骑士团打造的童话堡垒，捷克最浪漫的骑士梦 - 最佳欧洲景点',
  description: '第一眼看到博乌佐夫城堡，你可能会愣住，然后下意识地摸口袋找手机——因为它太像电影布景了，美得不真实。车子穿过莫拉维亚起伏的绿色丘陵和森林，一个转弯，它就像一座巨大的灰白色梦境，稳稳地坐在山丘之巅。四周是深绿色的松林，衬得那些尖塔和雄堞的剪影格外锋利。空气里有松针和湿润泥土的味道，安静得只能听见自己的...',
}

export default function BouzovCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '博乌佐夫城堡', href: '/attractions/bouzov-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博乌佐夫城堡・Bouzov Castle・捷克・博乌佐夫镇（Bouzov）， 奥洛穆茨州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到博乌佐夫城堡，你可能会愣住，然后下意识地摸口袋找手机——因为它太像电影布景了，美得不真实。车子穿过莫拉维亚起伏的绿色丘陵和森林，一个转弯，它就像一座巨大的灰白色梦境，稳稳地坐在山丘之巅。四周是深绿色的松林，衬得那些尖塔和雄堞的剪影格外锋利。空气里有松针和湿润泥土的味道，安静得只能听见自己的脚步声和远处不知名鸟儿的啼叫。走近了，你会发现它并非古老到摇摇欲坠，相反，每一块石头都仿佛经过精心计算，充满了戏剧性的张力：高耸的主塔直指天空，红色的屋顶在阳光下温暖明亮，多座副塔拱卫四周，一道深深的护城河环绕着坚固的城墙，吊桥是进入童话世界的唯一通道。这种“完美”，恰恰是它最迷人的秘密。
这座城堡在当地人心中，与其说是一个严肃的历史遗迹，不如说是一个关于骑士、公主和传奇的集体梦工厂。你会看到很多捷克家庭带着孩子来这里度周末，孩子们仰着头，指着那些滴水嘴兽和飘扬的旗帜，眼睛里闪着光。它也成了无数新婚夫妇拍摄婚纱照的首选地，白色的婚纱与古老的石墙形成奇妙的对比。在城堡脚下的咖啡馆，点一杯醇厚的捷克啤酒，你能听到邻桌的老爷爷在用捷克语给孙辈讲“很久很久以前，骑士团住在这里”的故事。那种感觉非常奇妙，历史在这里不是课本上枯燥的年份，而是变成了可以触摸、可以想象的生动画面。
那么，它的核心魅力究竟是什么？我想，是那种极致的浪漫主义情怀被砖石凝固的奇迹。它不像许多饱经风霜、只剩残垣断壁的古堡，用沧桑诉说苦难。博乌佐夫是积极的、昂扬的，甚至带着一丝天真。它代表了一个时代的人们，用最大的热情和财富，去“复原”甚至“创造”一个他们心目中理想的、充满荣誉与美的中世纪。走进它，你不是在凭吊废墟，而是在走进一本立体的、可以居住的骑士小说。每一个拱顶，每一幅壁画，每一件盔甲，都在大声呼喊着关于勇敢、忠诚与浪漫的价值观。这是一种精心营造的沉浸感，让你心甘情愿地暂时逃离现实。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到博乌佐夫城堡，你可能会愣住，然后下意识地摸口袋找手机——因为它太像电影布景了，美得不真实。车子穿过莫拉维亚起伏的绿色丘陵和森林，一个转弯，它就像一座巨大的灰白色梦境，稳稳地坐在山丘之巅。四周是深绿色的松林，衬得那些尖塔和雄堞的剪影格外锋利。空气里有松针和湿润泥土的味道，安静得只能听见自己的脚步声和远处不知名鸟儿的啼叫。走近了，你会发现它并非古老到摇摇欲坠，相反，每一块石头都仿佛经过精心计算，充满了戏剧性的张力：高耸的主塔直指天空，红色的屋顶在阳光下温暖明亮，多座副塔拱卫四周，一道深深的护城河环绕着坚固的城墙，吊桥是进入童话世界的唯一通道。这种“完美”，恰恰是它最迷人的秘密。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡在当地人心中，与其说是一个严肃的历史遗迹，不如说是一个关于骑士、公主和传奇的集体梦工厂。你会看到很多捷克家庭带着孩子来这里度周末，孩子们仰着头，指着那些滴水嘴兽和飘扬的旗帜，眼睛里闪着光。它也成了无数新婚夫妇拍摄婚纱照的首选地，白色的婚纱与古老的石墙形成奇妙的对比。在城堡脚下的咖啡馆，点一杯醇厚的捷克啤酒，你能听到邻桌的老爷爷在用捷克语给孙辈讲“很久很久以前，骑士团住在这里”的故事。那种感觉非常奇妙，历史在这里不是课本上枯燥的年份，而是变成了可以触摸、可以想象的生动画面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那么，它的核心魅力究竟是什么？我想，是那种极致的浪漫主义情怀被砖石凝固的奇迹。它不像许多饱经风霜、只剩残垣断壁的古堡，用沧桑诉说苦难。博乌佐夫是积极的、昂扬的，甚至带着一丝天真。它代表了一个时代的人们，用最大的热情和财富，去“复原”甚至“创造”一个他们心目中理想的、充满荣誉与美的中世纪。走进它，你不是在凭吊废墟，而是在走进一本立体的、可以居住的骑士小说。每一个拱顶，每一幅壁画，每一件盔甲，都在大声呼喊着关于勇敢、忠诚与浪漫的价值观。这是一种精心营造的沉浸感，让你心甘情愿地暂时逃离现实。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博乌佐夫城堡`} />
                <InfoRow label="英文名称" value={`Bouzov Castle`} />
                <InfoRow label="正式名称" value={`Bouzov Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`博乌佐夫镇（Bouzov）， 奥洛穆茨州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`条顿骑士团在中欧地区保存最完好、最具浪漫主义色彩且经过系统性重建的堡垒之一，是捷克共和国最受欢迎的婚礼和电影取景地。`} />
                <InfoRow label="建筑特色" value={`一座经过19世纪末至20世纪初近乎“完美”修复与浪漫化重建的中世纪风格堡垒，拥有高耸的塔楼、坚固的城墙、充满戏剧性的吊桥与护城河，内部装饰华丽，宛如直接从童话书中走出。`} />
                <InfoRow label="建筑风格" value={`主体为哥特式与浪漫主义风格的融合，其19世纪的重建严格遵循了当时对“理想中世纪城堡”的审美与想象。`} />
                <InfoRow label="文化价值" value={`不仅是历史建筑，更是一个时代（浪漫主义民族复兴时期）的精神象征与艺术创作，承载着捷克民族对自身历史与骑士传奇的文化投射。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间因季节和月份而异，通常分为夏季（4月至10月）和冬季（11月至3月）两个时段。夏季开放时间较长，一般为周二至周日 9:00-17:00（最后入场时间约16:00），周一可能闭馆或缩短开放。冬季开放时间大幅缩短，通常只在周末开放或需提前预约团队游览。城堡内部参观必须跟随捷克语或外语导览团（提供英语、德语等语音导览器），导览团每小时或每两小时发团一次。具体日期和时间每年可能微调，强烈建议在出行前于城堡官方网站上查询并确认当月时刻表。重大节假日（如复活节、圣诞节）期间开放安排特殊。`} />
              <InfoRow label="门票价格" value={`门票分为多种导览线路（不同开放区域）和套票。标准的主要导览线路（游览路线I）成人票价约为180捷克克朗（约7欧元）。优惠票（学生、儿童、老人、残疾人）约为120捷克克朗。家庭套票（2大+最多3小）约为480捷克克朗。其他特殊线路或塔楼登顶需额外付费，约为60-80克朗。只进入城堡外围庭院和部分咖啡馆区域免费。支持现场现金（捷克克朗）购票，但旺季热门时段强烈建议提前在官网预订指定时间的导览团，以免长时间等待或售罄。`} />
              <InfoRow label="地址" value={`Bouzov 8, 783 25 Bouzov, Czechia`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从最近的主要城市奥洛穆茨（Olomouc）出发。从奥洛穆茨主火车站或中央巴士站，搭乘前往Litovel或Mohelnice方向的地区巴士（如交通工具编号 800、805、810 等），在“Bouzov, rozcestí”或“Bouzov, zámek”站下车。车程约45分钟至1小时，班次在工作日较为频繁（约每小时一班），周末和节假日班次减少，务必提前在Idos.cz（捷克公共交通查询网站）上查好时刻表。下车后跟随指示牌步行约10-15分钟穿过宁静的小镇即可抵达城堡山脚。自驾是最灵活的选择，从奥洛穆茨沿道路Route 448/E442行驶约30公里，城堡设有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`博乌佐夫的故事，始于一个军事修会征服与经营的雄心。14世纪初，条顿骑士团——那个以白衣黑十字为标志、在波罗的海地区叱咤风云的德意志修会——将触角延伸至摩拉维亚。大约在1317年至1330年间，他们在此建造了一座早期的哥特式城堡，作为管理周边广阔领地的行政与军事中心。最初的它，功能性强于美观，是骑士团在这片土地上的权力象征。此后的两百年间，城堡在多位骑士团指挥官手中传承、加固，但规模始终有限。直到15世纪胡斯战争的风暴席卷波希米亚，这座堡垒因其坚固，成为了天主教贵族们的避难所，也因此经历了战火的初次洗礼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的齿轮转到16世纪，随着宗教改革和骑士团的衰落，城堡不再是军事前哨。1696年，它被卖给了哈布斯堡王朝显赫的利希滕斯坦家族。这个富可敌国的家族对城堡进行了巴洛克风格的改造，增加了居住的舒适性，但它本质上仍是一座古老的、有些过时的贵族庄园。真正的命运转折点发生在19世纪末。1900年，城堡迎来了它最痴迷也最慷慨的主人——欧根·冯·哈布斯堡大公，他是奥匈帝国皇帝弗朗茨·约瑟夫一世的堂兄弟。这位大公是一位狂热的艺术与历史爱好者，尤其迷恋中世纪骑士精神。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在欧根大公看来，当时的博乌佐夫不过是一座“平庸的乡村宅邸”，配不上他心中辉煌的骑士传说。于是，一场浩大而奢侈的“创作”开始了。他聘请了当时顶尖的建筑师和艺术家，目标不是简单的修缮，而是进行一场彻底的、浪漫主义的重建。他们要打造的，是一座“理想中的中世纪骑士堡垒”。原有的巴洛克元素被无情地拆除，代之以更“纯粹”的哥特式与早期文艺复兴风格。设计图纸参考了莱茵河地区的著名城堡。工程极尽考究：新的主塔拔地而起，复杂的防御体系（包括护城河、吊桥、多道城门）被精心构建，内部则用昂贵的木材、彩色玻璃、华丽的壁画和大量的古董家具、武器铠甲填充。大公甚至为城堡设计了完整的供水、供暖和电力系统，让这座“中世纪”城堡享受着现代的舒适。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这个华丽的梦与20世纪残酷的政治现实迎头相撞。第一次世界大战后奥匈帝国解体，作为哈布斯堡家族财产的城堡被新成立的捷克斯洛伐克国家没收。更具戏剧性的是二战期间，纳粹德国看中了它完美的中世纪外观和坚固结构，将其征用为党卫军的训练基地和仓库，据说还曾计划用于保存掠夺来的艺术珍品。幸运的是，城堡奇迹般地未遭战火严重破坏。战后，它顺理成章地成为捷克斯洛伐克的国家财产，并被确立为重要的文化纪念碑。政府对其进行了持续的专业修复与维护，并向公众开放。它因其无与伦比的“舞台感”，吸引了无数电影导演，成为了《吸血鬼女王》、《龙与地下城》等奇幻影视作品的天然片场。从条顿骑士的堡垒，到哈布斯堡大公的私人幻想，再到国家的文化遗产和大众的童话舞台，博乌佐夫层层叠加的身份，正是它最深厚的历史肌理。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受博乌佐夫的魅力，建议安排至少4-5小时的游览时间。最佳的抵达时间是上午10点前，此时旅游团大军尚未抵达，光线柔和，你能在宁静中细细品味城堡外观的每一个细节，并在护城河边拍到无人的经典照片。整体节奏建议“由外至内，由静至动”：先花一个小时在外围漫步、拍照，感受城堡的整体气势与环境；然后参加一场约75分钟的导览团（通常为路线I），沉浸于内部空间的华丽叙事；导览结束后，可以在城堡庭院或山脚下的咖啡馆休息、回味；如果体力充沛，最后可以登上观景塔（需额外购票）俯瞰整个莫拉维亚森林的壮丽景色。这样的安排既能满足视觉震撼，又能深入历史细节，张弛有度。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）的周末和节假日是人流高峰，导览团可能很快售罄且排队时间长，务必提前在线预订指定时间的门票。
城堡内部房间大多铺着古老的地板或铺设地毯，且楼梯陡峭盘旋，请务必穿着绝对舒适防滑的鞋子，高跟鞋会是一场灾难。
导览团以捷克语讲解为主，领取外语语音导览器后请务必在进入每个房间时对照墙上的编号手动按键播放，否则会错过大量精彩故事。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场穿过小镇的林荫道，第一眼望见城堡完整雄姿时，先别急着走近，在远处的小山坡上静静凝视几分钟，让那种童话般的震撼感完全沉淀下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的小路走到护城河外，听听风吹过水面和森林的沙沙声，从各个角度观察城堡倒映在水中的完美对称画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过吱呀作响的木质吊桥，穿过厚重的大门进入第一道庭院，触摸那些冰凉而光滑的仿古石材，感受建筑营造出的“穿越”仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员进入骑士大厅，让目光被巨大的石制壁炉、色彩斑斓的家族纹章天花板和墙上冷冽的古代兵器收藏所占据，想象这里曾举行过的盛大宴会。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在公爵的私人礼拜堂里驻足，仰头看阳光透过描绘着圣乔治屠龙故事的彩绘玻璃窗，在地上投下宝石般流动的光影，空气中有淡淡的旧木头和蜂蜡的味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿梭于迷宫般的走廊和客房，留意那些用珍贵木材雕刻的家具、华丽的挂毯以及看似随意摆放实则价值连城的瓷器和油画，体会欧根大公极度奢华的审美趣味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡的露天防御回廊，沿着城墙走一圈，从箭垛口眺望远处连绵不断的森林与田野，试着寻找中世纪哨兵守卫领土时的视角与心境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束走出城堡，别急着离开，在山脚下草坪找张长椅坐下，回头再看一眼沐浴在午后阳光中的城堡，与刚抵达时的印象对比，完成一次从外部想象到内部认知的完整循环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角外侧草坪`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光为城堡塔楼勾勒出金色轮廓时，利用护城河作为前景，拍摄城堡连同其完美倒影的全景，使用广角镜头能容纳更多天空与森林。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`第一庭院入口拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在第一道城门的内侧，利用厚重的石拱门形成天然画框，将对面的主塔楼和骑士雕像框入其中，营造深邃感和叙事性，上午的光线最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士大厅的壁炉与彩窗侧光`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，当阳光从西侧高窗斜射入骑士大厅，站在大厅中央偏东位置，捕捉光线照亮巨大石雕壁炉的细节，同时将另一侧色彩浓郁的彩绘玻璃窗纳入背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡北侧外墙的步行小径`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场通往小镇的路上有一段小径能仰拍到城堡最雄伟的防御城墙和主塔的侧面，使用长焦镜头压缩空间，突出石墙的纹理和建筑的陡峭感，全天均可但阴天更能体现凝重氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部大部分房间允许拍照但严禁使用闪光灯和三脚架，这是为了保护脆弱的古董织物和绘画，请务必遵守。`}</li>
                <li>• {`使用偏振镜可以有效减少城堡外墙石材和护城河水面的反光，让色彩更加饱和，尤其在晴天拍摄时效果显著。`}</li>
                <li>• {`航拍无人机在城堡及周边上空飞行受到严格限制，通常需要特殊许可，未经允许擅自放飞可能会被罚款并没收设备。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式首选`}</h4>
                  <p className="text-sm text-blue-800">{`城堡本身的附属旅馆，由古老的马厩建筑改造而成，房间古朴雅致，让你在游客散尽后独享城堡夜晚的静谧与星空，清晨在鸟鸣中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇风情`}</h4>
                  <p className="text-sm text-green-800">{`博乌佐夫镇上为数不多的家庭式民宿，房东老太太会为你准备丰盛的自制摩拉维亚早餐，从后院就能看到城堡塔尖，体验真正的小镇慢生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷城市基营`}</h4>
                  <p className="text-sm text-yellow-800">{`住在30分钟车程外的奥洛穆茨历史名城中心，选择一家由修道院改建的设计酒店，白天探访城堡，晚上享受世界遗产城市的繁华餐厅与酒吧，动静结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然疗愈`}</h4>
                  <p className="text-sm text-purple-800">{`位于城堡周边森林或丘陵间的田园风光酒店，拥有开阔的露台和温泉泳池，白天游览归来可以对着窗外的无敌绿意泡个澡，彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`博乌佐夫小镇本身非常迷你且宁静，住宿选择极其有限，如果追求丰富的夜生活或餐饮选择，强烈建议以奥洛穆茨为基地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安极好，但夜间照明有限，如果住在镇上，晚饭后散步回住处建议携带小手电。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡旅馆和镇上热门民宿在旅游旺季（特别是暑假和秋季红叶季）非常抢手，往往需要提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博乌佐夫很久以后，我脑海里反复回放的，不是某个具体的房间或盔甲，而是一种整体的、氤氲不散的氛围。那是一种被精心呵护的“理想”所散发出的温暖光泽。在这个处处讲求“原真性”、崇尚沧桑废墟美的时代，博乌佐夫坦诚地承认自己是一场“创作”，一场一百年前一位贵族用金钱和热情浇筑的梦。这非但没有减损它的价值，反而让它更加珍贵。因为它告诉我们，历史不止有残酷的战争与自然的消磨，还有人类对美、对秩序、对英雄传奇永不熄灭的向往与重构的勇气。这种浪漫主义的精神本身，就是历史最动人的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏、充满不确定性的世界里，博乌佐夫像一座坚固而美丽的“心灵避难所”。它不提供沉重的历史教训，而是慷慨地赠予你一场为期数小时的、高质量的梦境。你可以暂时放下现实的烦恼，化身为自己故事里的骑士或旅人，走过吊桥，触摸冰冷的城墙，在点燃无数蜡烛的大厅里想象一场盛宴。它唤醒的是我们内心深处对故事、对冒险、对某种更纯粹之美的原始渴望。每一位热爱深度游的旅人，都该来一次博乌佐夫，不仅仅是为了看一座漂亮的城堡，更是为了验证：无论时代如何变迁，人类建造梦、守护梦、并从梦中汲取力量的本能，从未改变。这里是童话的实体，也是理想主义者的圣殿。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castles-of-bellinzona" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝林佐纳三城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castles of Bellinzona</p>
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
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
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
