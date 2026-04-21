import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱德尼采-瓦尔季采文化景观 Lednice–Valtice Cultural Landscape｜贵族打造的梦幻“欧洲花园” - 最佳欧洲景点',
  description: '想象一下，你骑着自行车，拐过一片高大橡树林荫道，眼前突然毫无征兆地出现了一座带有银色新月标志的“清真寺”尖塔，倒映在宁静的池塘里。而你所在的地方，是捷克的心脏地带。这就是莱德尼采-瓦尔季采文化景观给我的第一击——一种时空错置的、童话般的惊喜。这里没有围墙，没有明确边界，当你以为自己在普通的乡间骑行时...',
}

export default function LedniceValticeCulturalLandscapePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '莱德尼采-瓦尔季采文化景观', href: '/attractions/lednice-valtice-cultural-landscape' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱德尼采-瓦尔季采文化景观・Lednice–Valtice Cultural Landscape・捷克・南摩拉维亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你骑着自行车，拐过一片高大橡树林荫道，眼前突然毫无征兆地出现了一座带有银色新月标志的“清真寺”尖塔，倒映在宁静的池塘里。而你所在的地方，是捷克的心脏地带。这就是莱德尼采-瓦尔季采文化景观给我的第一击——一种时空错置的、童话般的惊喜。这里没有围墙，没有明确边界，当你以为自己在普通的乡间骑行时，一座新哥特式的华丽城堡会从湖对岸的树丛后缓缓现身；当你漫步于看似天然的森林时，会撞见一座献给罗马狩猎女神狄安娜的古典神庙。这不是一个“景点”，而是一个被铺展开的、可以生活其中的梦。
空气里混合着割过的青草香、古老池塘的湿润水汽，以及从远处葡萄园飘来的、南摩拉维亚特有的甜美气息。耳朵里听到的不是游客的喧哗，而是绵延不绝的鸟鸣、风吹过百年古树树冠的沙沙声，和自行车轮碾过沙石小径有节奏的轻响。当地人在这里跑步、遛狗、野餐，孩子们在城堡前的草地上追逐，老人在长椅上看着湖泊发呆。这片巨大的景观，早已褪去了贵族私产的疏离感，无缝编织进了当代的日常生活里，成为人们呼吸的一部分。
它的核心魅力，正在于这种极致的“沉浸感”与“人工的自然”。你会意识到，眼前每一处看似偶然的风景——蜿蜒的小河、起伏的草坡、树林的开口——都是两百年前最顶尖的园林设计师、建筑师们，像画家构图一样，精心计算和塑造的结果。不是为了炫耀，而是为了创造美，创造一种理想的生活哲学。它邀请你不是来“参观”，而是来“漫游”，来迷失，在一次次的转角邂逅中，自己拼凑出一个已然消逝的贵族时代的宏大想象力与温柔情怀。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你骑着自行车，拐过一片高大橡树林荫道，眼前突然毫无征兆地出现了一座带有银色新月标志的“清真寺”尖塔，倒映在宁静的池塘里。而你所在的地方，是捷克的心脏地带。这就是莱德尼采-瓦尔季采文化景观给我的第一击——一种时空错置的、童话般的惊喜。这里没有围墙，没有明确边界，当你以为自己在普通的乡间骑行时，一座新哥特式的华丽城堡会从湖对岸的树丛后缓缓现身；当你漫步于看似天然的森林时，会撞见一座献给罗马狩猎女神狄安娜的古典神庙。这不是一个“景点”，而是一个被铺展开的、可以生活其中的梦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气里混合着割过的青草香、古老池塘的湿润水汽，以及从远处葡萄园飘来的、南摩拉维亚特有的甜美气息。耳朵里听到的不是游客的喧哗，而是绵延不绝的鸟鸣、风吹过百年古树树冠的沙沙声，和自行车轮碾过沙石小径有节奏的轻响。当地人在这里跑步、遛狗、野餐，孩子们在城堡前的草地上追逐，老人在长椅上看着湖泊发呆。这片巨大的景观，早已褪去了贵族私产的疏离感，无缝编织进了当代的日常生活里，成为人们呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种极致的“沉浸感”与“人工的自然”。你会意识到，眼前每一处看似偶然的风景——蜿蜒的小河、起伏的草坡、树林的开口——都是两百年前最顶尖的园林设计师、建筑师们，像画家构图一样，精心计算和塑造的结果。不是为了炫耀，而是为了创造美，创造一种理想的生活哲学。它邀请你不是来“参观”，而是来“漫游”，来迷失，在一次次的转角邂逅中，自己拼凑出一个已然消逝的贵族时代的宏大想象力与温柔情怀。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱德尼采-瓦尔季采文化景观`} />
                <InfoRow label="英文名称" value={`Lednice–Valtice Cultural Landscape`} />
                <InfoRow label="正式名称" value={`Lednice–Valtice Cultural Landscape`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南摩拉维亚州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最大的人造景观区，被誉为“欧洲花园”，是理想主义园林艺术的巅峰之作。`} />
                <InfoRow label="建筑特色" value={`将宏伟的新哥特式城堡、巴洛克式宫殿与充满异域风情的仿古典主义“小建筑”完美融入自然风景。`} />
                <InfoRow label="建筑风格" value={`以浪漫主义风格为主导，融合了新哥特式、巴洛克式及新古典主义等多种风格。`} />
                <InfoRow label="文化价值" value={`见证了列支敦士登家族数百年的财富、权力与艺术品味，是自然与人文和谐共生的不朽典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`核心区域（莱德尼采城堡、瓦尔季采城堡及主要景点）的开放时间因季节和具体建筑而异，通常夏季（4月至10月）每天上午9点至下午5点开放，冬季开放时间缩短或部分建筑关闭。广阔的花园、公园及散布的“小建筑”全年24小时开放，但建筑内部仅在温暖季节开放。强烈建议出行前查询官方网站，确认具体景点的当日开放安排，部分小型建筑仅在周末或预约后开放。`} />
              <InfoRow label="门票价格" value={`这片景观区采用分散售票模式。莱德尼采城堡游览路线（含主要房间、温室、花园）成人票价约320捷克克朗，学生及老人有优惠。瓦尔季采城堡票价类似。单个小型建筑（如清真寺尖塔、狩猎小屋）门票通常在50-100捷克克朗之间。最推荐购买“莱德尼采-瓦尔季采区域通票”，可在多日内游览多个主要景点，性价比最高。公园和连接道路本身免费进入。`} />
              <InfoRow label="地址" value={`Lednice 1, 691 44 Lednice, Czechia / Zámek 1, 691 42 Valtice, Czechia`} />
              <InfoRow label="交通方式" value={`从维也纳国际机场出发最为便捷。在机场火车站乘坐区域火车（ÖBB）前往布雷奇拉夫站，车程约1小时，班次频繁。从布雷奇拉夫换乘当地巴士或出租车前往莱德尼采镇或瓦尔季采镇，车程约30分钟。从捷克布拉格出发，可乘火车或长途巴士先抵达布尔诺，再转乘当地交通前往，总耗时约3小时。最理想的深度游览方式是自驾，可以自由穿梭于广阔的景观区各个节点之间，在沿途任意停车探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个富可敌国的家族说起——列支敦士登家族。早在13世纪，这个家族就在南摩拉维亚地区扎根，但真正让这片土地脱胎换骨的，是17世纪以后。通过精明的政治联姻和对艺术的狂热赞助，列支敦士登家族积累了惊人的财富，成为神圣罗马帝国内举足轻重的力量。他们把莱德尼采和瓦尔季采两座城堡作为主要的夏宫和统治中心。起初，这里也是规整的巴洛克花园，彰显着对称与控制的力量，就像当时欧洲所有贵族所做的那样。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但18世纪末到19世纪，一股新的风潮席卷欧洲——浪漫主义。人们开始厌倦僵硬的几何线条，转而向往自然的、如画的、充满情感冲击的风景。列支敦士登家族的几位亲王，特别是阿洛伊斯一世和约翰一世，正是这股潮流的引领者和实践家。他们心中有一个无比雄心勃勃的计划：将莱德尼采和瓦尔季采这两座相距数公里的城堡及其之间的广袤土地，打造成一个统一的、前所未有的风景公园。这不再仅仅是修饰城堡的后花园，而是以大地为画布，创作一幅可以走入的立体画卷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，持续近一个世纪的宏大工程开始了。他们请来了当时欧洲最好的园林建筑师，比如伯恩哈德·佩特里。河流被重新疏导，挖出湖泊，堆起缓坡，种植了来自世界各地的珍奇树木。更天才的一笔，是在这精心布置的自然中，点缀一系列被称为“小建筑”的观赏性建筑。这些建筑风格各异：有模仿罗马水渠的“水榭”，有献给阿波罗的古典神庙，有中东风格的清真寺尖塔（其实只是个观景塔），还有哥特式风格的狩猎小屋。每一座都不是实用的住所，而是一个“视点”，一个引发诗情和遐想的焦点。它们像一串珍珠，被精心设计的小路和视觉轴线串联起来，引导着游客的视线和脚步，在移动中不断发现新的画面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个家族的野心与品味，不仅体现在景观上，也体现在两座主城堡的改造中。原本巴洛克式的莱德尼采城堡，在19世纪中期被彻底改建为令人惊叹的英国新哥特式风格，象牙色的外墙、精美的镂空石雕，让它看起来像从童话书中直接搬出来的一样，内部则配备了当时最先进的科技，比如中央供暖和冲水马桶。而瓦尔季采城堡则保留了更多巴洛克的庄严，成为家族丰富的艺术收藏馆。这两座气质不同的城堡，一南一北，共同锚定了这片梦幻之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历经两次世界大战的动荡，列支敦士登家族失去了这片领地，但它作为一件完整的艺术品被幸运地保存下来，并在1996年荣获联合国教科文组织世界遗产的称号。今天，当我们在这里漫游，我们走过的每一步，看到的每一景，都是在阅读一个家族用数代人的时间、财富与梦想写就的，关于自然、艺术与生活之美的长篇诗歌。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略这片景观的精髓，强烈建议安排至少完整一天，甚至两天时间。最佳方式是前一晚住在莱德尼采或瓦尔季采小镇，第二天一早开始探索。上午光线柔和，游客较少，适合参观核心建筑内部和拍照。整体的节奏应该是“慢”和“散”，以骑行或长距离步行为主，在城堡、小建筑和自然风光之间交替，让自己有足够的时间发呆和感受。建议以莱德尼采城堡为起点，因为它最为惊艳，能立刻将你带入氛围，然后向瓦尔季采方向漫游，最后在瓦尔季采城堡结束，并在小镇的酒窖品尝当地葡萄酒，为一天画上完美句号。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在镇上租好自行车，这是探索这片广阔区域唯一正确的方式，步行范围太有限。部分碎石小路雨后可能泥泞，建议选择山地车或穿戴合适的鞋子。园区内餐厅和咖啡馆分布稀疏，出发前最好在镇上超市备好充足的饮用水和简餐零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨骑着租来的自行车沿着白杨夹道的老路从莱德尼采城堡出发，让微风和露水伴随你开始这场绿色探险。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在莱德尼采城堡内部流连于那些新哥特式的木雕天花板和奢华房间，别忘了走下华丽的螺旋楼梯去参观种满热带植物的巨大棕榈温室。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后方码头跳上一条平底小船，让船夫撑着长篙带你缓缓穿过芦苇荡，驶向宁静的迪耶河上游，从水面上欣赏庄园的倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上岸后骑车穿过一片茂密的森林，突然在路的尽头发现那座三拱门的古典主义“水榭”建筑优雅地立在池塘边，仿佛古罗马遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向前找到隐藏在树林中的“清真寺”尖塔，沿着狭窄的螺旋楼梯登上塔顶，在呼啸的风中360度俯瞰整个文化景观的无边绿意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在田野间的某条长椅上午餐休整后，朝着瓦尔季采方向骑行，你会经过美丽的“圣休伯特礼拜堂”和广阔的鹿苑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达气派的巴洛克式瓦尔季采城堡，用一下午时间漫步其法式花园，并参观内部辉煌的骑士大厅和艺术收藏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，在瓦尔季采小镇一家传统的酒窖里，点一杯本地产的雷司令或绿维特利纳白葡萄酒，用味蕾记住南摩拉维亚的馈赠。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`莱德尼采城堡湖对岸的草坪`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，将城堡与其在水中的完美倒影一同收入镜中，使用广角镜头捕捉全景，等待天鹅或小船划入画面增添生机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“边界城堡”前的长长林荫道`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，站在道路中央，利用两侧笔直高耸的树木形成的强烈透视引导线，拍摄人物走向远方城堡的孤独感与纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“清真寺”尖塔内部螺旋楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用塔内窗户射入的光束，拍摄螺旋线条的明暗对比与几何美感，需要调高感光度并保持稳定。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`瓦尔季采城堡法式花园的对称轴线`}</h4>
                  <p className="text-sm text-gray-700">{`从花园远端回拍城堡，将修剪整齐的绿植、雕塑和喷泉作为前景，营造极致的秩序与庄严之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前务必查清当地法规，文化遗产核心区可能有飞行限制。许多“小建筑”内部空间狭小且光线昏暗，建议携带大光圈镜头。尊重环境，不要为了拍照攀爬古迹或践踏受保护的花圃。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济精选`}</h4>
                  <p className="text-sm text-blue-800">{`莱德尼采城堡旁步行三分钟的温馨家庭旅馆，房间虽小但一尘不染，老板会热情地为你手绘骑行地图并推荐隐秘的野餐地点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在瓦尔季采小镇一座由古老酒窖改造的石拱顶公寓里，夜晚能闻到从砖缝中渗出的、经年累月的葡萄酒香，体验真正的摩拉维亚风情。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于景观区中心地带一座经过现代设计的精品酒店，巨大的落地窗让你在房间里就能将森林与草甸的四季变幻当作流动的壁画。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华享受`}</h4>
                  <p className="text-sm text-purple-800">{`下榻在瓦尔季采城堡附属的豪华酒店，住在拥有历史壁画的天花板下，清晨可以独占还未对公众开放的后花园，享受亲王般的私密与宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和葡萄收获季（9-10月）是绝对旺季，住宿非常紧张，务必提前数月预订。小镇治安极好，夜晚非常安静。选择住宿地点时，可以根据你想重点探索的区域来决定，莱德尼采端更具童话感，瓦尔季采端则更富酒乡文化。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莱德尼采-瓦尔季采很多天后，那片无边的绿色还会在闭眼时浮现。它给我的，与其说是对某座具体建筑的震撼，不如说是一种关于“可能”的温柔慰藉。它证明人类对美的追求，可以如此宏大、持久，且最终与自然达成和解而非征服。列支敦士登家族用几代人的时间，不是为了建造一座纪念碑，而是创造了一个可供漫步、思考、相爱、生活的美梦。这个梦没有随着帝国和贵族时代的落幕而消失，反而被交给了每一个普通人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切都被快速消费的时代，这片景观的存在本身就像一个优雅的反叛。它邀请你慢下来，用一天的时间，仅仅去做一件事：在一片被精心爱抚过的风景里，漫无目的地游荡。它告诉你，旅行的意义，有时候不在于收集了多少个著名地标，而在于你是否允许自己迷失在某条不知名的小径上，是否愿意为一棵形状奇特的古树或一道穿过森林的光柱而停留。在这里，你不仅是在游览一个世界遗产，更是在体验一种早已稀缺的、专注于感知与内心宁静的生活方式。它是一位深度旅者修复灵魂的绿洲，一个值得你专程前往，并愿意一再回访的、活着的诗篇。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/olomouc-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥洛穆茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olomouc Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlovy-vary-spa-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vary</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/holasovice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍拉肖维采古罗马村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Holašovice</p>
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
