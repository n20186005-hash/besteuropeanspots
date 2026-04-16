import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡塞雷斯老城 Cáceres｜时光凝滞的石头城，西班牙保存最完好的中世纪迷宫 - 最佳欧洲景点',
  description: '你从喧嚣的五月广场穿过圣马可拱门，仿佛一步跨过了某种无形的结界。声音首先被过滤了——外头咖啡馆的谈笑、车流声瞬间退去，只剩下你自己的脚步声，敲打在那些被岁月磨得光滑如镜的鹅卵石上，发出清脆又孤独的回响。空气里弥漫着一种特别的气味，是正午阳光炙烤古老花岗岩散发出的干燥暖香，混着一丝从某个隐秘庭院飘来的...',
}

export default function CaceresOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡塞雷斯老城', href: '/attractions/caceres-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡塞雷斯老城・Cáceres・西班牙・卡塞雷斯</h1>
          <p className="text-lg text-gray-600 mb-6">
            你从喧嚣的五月广场穿过圣马可拱门，仿佛一步跨过了某种无形的结界。声音首先被过滤了——外头咖啡馆的谈笑、车流声瞬间退去，只剩下你自己的脚步声，敲打在那些被岁月磨得光滑如镜的鹅卵石上，发出清脆又孤独的回响。空气里弥漫着一种特别的气味，是正午阳光炙烤古老花岗岩散发出的干燥暖香，混着一丝从某个隐秘庭院飘来的橙花和迷迭香的清冽。抬起头，视线立刻被挤压、被引导：两旁是几乎无缝衔接的金黄色石墙，高耸，严肃，窗户小而深，像一双双深邃的眼睛在打量你这个贸然闯入的时空旅人。
继续往里走，空间时而收紧为只容一人通过的巷弄，时而又豁然开朗，出现一个静谧的小广场。你会突然理解为什么这里被叫做“石头城”。一切都被石头包裹、定义。石头铺路，石头砌墙，石头雕出繁复的家族纹章，石头筑成防御的塔楼。但这不是冰冷的石头，在西班牙埃斯特雷马杜拉炽烈的阳光下，这些石头呈现出蜂蜜、金黄甚至淡玫瑰的色彩，温暖得不可思议。你会看到当地的老太太提着菜篮，不慌不忙地穿过这些见证了无数阴谋与荣耀的拱门；一只肥猫在文艺复兴式宫殿的门槛上打着盹，对墙上的盾徽毫不在意。历史在这里不是陈列品，就是日常生活的背景墙。
走到圣母广场，这里是老城跳动的心脏。站在广场中央转一圈，就像快速翻阅一本建筑史教科书：坚固的布哈科塔带着伊斯兰统治的遗风，圣母升天协教堂兼主教座堂融合了从哥特式到银匠式的演变，环绕广场的贵族宫殿立面争奇斗艳，展示着主人家族的财富与权势。但最动人的时刻，或许是黄昏。当游客渐渐散去，夕阳把最后的光辉涂抹在塔楼尖顶，整座城池被染成醉人的金色。窗户里陆续亮起温暖的灯光，石板路上拉出长长的影子，那一刻，你仿佛能听见石头在低声诉说，关于骑士、关于商旅、关于信仰碰撞与文化交融的千年往事。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你从喧嚣的五月广场穿过圣马可拱门，仿佛一步跨过了某种无形的结界。声音首先被过滤了——外头咖啡馆的谈笑、车流声瞬间退去，只剩下你自己的脚步声，敲打在那些被岁月磨得光滑如镜的鹅卵石上，发出清脆又孤独的回响。空气里弥漫着一种特别的气味，是正午阳光炙烤古老花岗岩散发出的干燥暖香，混着一丝从某个隐秘庭院飘来的橙花和迷迭香的清冽。抬起头，视线立刻被挤压、被引导：两旁是几乎无缝衔接的金黄色石墙，高耸，严肃，窗户小而深，像一双双深邃的眼睛在打量你这个贸然闯入的时空旅人。</p>
              <p className="text-gray-700 leading-relaxed mb-4">继续往里走，空间时而收紧为只容一人通过的巷弄，时而又豁然开朗，出现一个静谧的小广场。你会突然理解为什么这里被叫做“石头城”。一切都被石头包裹、定义。石头铺路，石头砌墙，石头雕出繁复的家族纹章，石头筑成防御的塔楼。但这不是冰冷的石头，在西班牙埃斯特雷马杜拉炽烈的阳光下，这些石头呈现出蜂蜜、金黄甚至淡玫瑰的色彩，温暖得不可思议。你会看到当地的老太太提着菜篮，不慌不忙地穿过这些见证了无数阴谋与荣耀的拱门；一只肥猫在文艺复兴式宫殿的门槛上打着盹，对墙上的盾徽毫不在意。历史在这里不是陈列品，就是日常生活的背景墙。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走到圣母广场，这里是老城跳动的心脏。站在广场中央转一圈，就像快速翻阅一本建筑史教科书：坚固的布哈科塔带着伊斯兰统治的遗风，圣母升天协教堂兼主教座堂融合了从哥特式到银匠式的演变，环绕广场的贵族宫殿立面争奇斗艳，展示着主人家族的财富与权势。但最动人的时刻，或许是黄昏。当游客渐渐散去，夕阳把最后的光辉涂抹在塔楼尖顶，整座城池被染成醉人的金色。窗户里陆续亮起温暖的灯光，石板路上拉出长长的影子，那一刻，你仿佛能听见石头在低声诉说，关于骑士、关于商旅、关于信仰碰撞与文化交融的千年往事。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="卡塞雷斯老城" />
                <InfoRow label="英文名称" value="Cáceres" />
                <InfoRow label="正式名称" value="Old Town of Cáceres" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="卡塞雷斯" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座历经罗马、伊斯兰、基督教和文艺复兴时期层层叠加，至今保存近乎完好的“活化石”中世纪城市典范。" />
                <InfoRow label="建筑特色" value="金黄色的花岗岩建筑群在阳光下熠熠生辉，狭窄的鹅卵石街巷、高耸的防御塔楼与宁静的贵族宫殿庭院形成鲜明对比。" />
                <InfoRow label="建筑风格" value="伊斯兰军事建筑、罗马式、哥特式、文艺复兴式以及银匠式风格罕见地交织共存，形成独特的“卡塞雷斯风格”。" />
                <InfoRow label="文化价值" value="见证了伊比利亚半岛上基督教与伊斯兰文明长达数个世纪的征服、共存与融合，是欧洲中世纪城市演变的无声史书。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城本身全天24小时开放，可自由漫步于街道广场。但城内的主要宫殿、塔楼和博物馆有各自独立的开放时间，通常为周二至周日上午10点至下午2点，下午5点至8点（夏季可能延长至晚上9点）。周一多数室内景点闭馆。部分重要建筑如主教宫、圣马特奥教堂塔楼仅在导览团时间开放，需提前查询。节假日（如圣诞节、元旦、当地守护神节）开放时间变化很大，建议行前在旅游局官网二次确认。" />
              <InfoRow label="门票价格" value="进入老城围墙区域完全免费。参观单个标志性建筑（如卡塞雷斯博物馆、奥迪埃尔宫、高尔费斯·德·阿巴霍宫）门票通常在2-5欧元之间。最划算的是购买“联合通票”，价格约10欧元，可在旅游局购买，涵盖5-7个主要宫殿和博物馆，有效期两天。学生、65岁以上老人及团体享有折扣，通常为票价的30%-50%。每周日部分国有博物馆免费入场。" />
              <InfoRow label="地址" value="Plaza Mayor, 1, 10003 Cáceres, Spain" />
              <InfoRow label="交通方式" value="从最近的主要交通枢纽出发：马德里巴拉哈斯机场。最佳选择是乘坐高速火车（AVE），从马德里查马丁火车站出发，约3小时直达卡塞雷斯火车站，每天有3-4班，建议提前在Renfe官网购票以获优惠。从卡塞雷斯火车站到老城，打车约10分钟（费用8-12欧元），也可乘坐L1路公交车至“Plaza Mayor”站。若选择大巴，从马德里南部车站出发，ALSA公司班次频繁，车程约3.5-4小时。自驾从马德里沿A-5高速公路向西行驶约300公里，出口指向“Cáceres Centro”，老城周边有多个付费停车场（如“Plaza de San Juan”地下停车场）。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要听懂石头的低语，我们得回到公元前。罗马人最早在这里留下了足迹，他们称这里为“诺尔巴·凯撒里娜”，坚固的城墙基座至今仍藏在某些建筑之下。但真正塑造了这座城市最初肌理的，是公元9世纪的摩尔人。他们在罗马废墟上建立了一座坚固的军事要塞，叫做“卡兹里斯”，高耸的城墙和错综复杂的街巷布局，都是为了防御。你现在看到的许多塔楼底部，那些巨大、质朴、没有窗子的石基，就是摩尔时期的遗产。他们在山上建城，掌控着埃斯特雷马杜拉平原的交通要道，这座城市生来就带着战争的基因。</p>
              <p className="text-gray-700 leading-relaxed mb-4">转机发生在1229年。莱昂国王阿方索九世从摩尔人手中夺下了这座城市，基督教时代开启了。然而，收复失地运动后的卡塞雷斯并未立刻繁荣，反而陷入了一种尴尬：它位于王国边缘，常受葡萄牙和敌对贵族势力的骚扰。于是，城里的贵族们做了一件决定城市未来面貌的事：他们被特许建造私人防御塔楼。一时间，“塔楼竞赛”开始了。奥特拉家族、乌略亚家族、卡瓦哈尔家族……一个个权势家族竞相建造更高、更坚固的塔楼，既为了防御外敌，也为了内部争斗和炫耀实力。老城的天际线由此变得犬牙交错，充满了剑拔弩张的气势，直到女王伊莎贝拉一世下令削平这些象征私斗的塔顶，才缓和了这种军事对峙的景观。</p>
              <p className="text-gray-700 leading-relaxed mb-4">和平带来了黄金时代。16世纪，无数卡塞雷斯子弟横渡大西洋前往美洲新大陆冒险，他们中的幸运儿带着滚滚财富归来，成为了“印第安诺”（美洲归来者）。这些新贵迫切需要用建筑来宣告自己的成功和融入旧贵族阶层的渴望。他们买下老宅，但不再修建防御塔楼，而是把财富倾注在建造华丽的宫殿、开阔的庭院和精美的立面上。文艺复兴风格和后来流行的银匠式风格席卷而来。你在高尔费斯·德·阿巴霍宫看到的那个令人屏息的回廊庭院，或是奥迪埃尔宫立面上雕刻细腻的家族纹章，都是这个“美洲黄金”催生的艺术结晶。新旧建筑在此叠加，防御工事旁建起了宜居的宫殿，城市的功能从堡垒悄然转变为贵族们的炫耀场与安乐窝。</p>
              <p className="text-gray-700 leading-relaxed mb-4">有趣的是，也正是从大约17世纪起，卡塞雷斯似乎被时间遗忘了。西班牙的经济政治中心转移，这座石头城的发展陷入了漫长的停滞。没有大规模的改建，没有工业化的侵袭，它就这样静静地沉睡在埃斯特雷马杜拉的阳光下。塞翁失马，焉知非福。这份“被遗忘”恰恰成了它最大的幸运。当欧洲许多古城在现代化浪潮中改头换面时，卡塞雷斯却将中世纪末到文艺复兴时期的城市风貌，近乎原封不动地保存了下来。每一块石头的位置，每一条小巷的走向，都凝固在了几百年前的样子。直到1986年，联合国教科文组织将整座老城列入世界遗产名录，人们才恍然发现，这里保存着一部如此完整、未经删节的中世纪城市史诗。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览卡塞雷斯老城，精髓在于“慢”和“错峰”。强烈建议你在老城内或紧邻城墙的住处住上一晚，这样就能独享清晨与黄昏这两个魔法时刻。理想的深度游览需要整整一天时间。上午九点前从五月广场进入，此时光线柔和，游客稀少，适合静静感受街道的空灵。上午着重探索主要广场和宫殿内部，了解其历史艺术。中午在广场边找家本地餐馆慢用午餐。下午则放任自己在迷宫中“迷失”，发现那些不为人知的角落和观景平台。傍晚前务必登上一处塔楼（如圣马特奥教堂塔楼），等待落日将全城染金。晚上则可参加“卡塞雷斯神秘之旅”夜间导览，听导游讲述那些关于鬼魂、贵族阴谋的传说，氛围感十足。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>穿一双绝对舒适、防滑的平底鞋，老城的鹅卵石路面美丽但凹凸不平，高跟鞋是“自杀行为”。
部分小巷和室内非常阴凉，即使盛夏也建议带一件薄外套，室内外温差可能很大。
警惕过于热情的“免费导游”带你参观某些“私人收藏”，这可能是骗局的开始，所有正规导览都应在旅游局预约或购买。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨从五月广场的圣马可拱门进入，用手抚摸那冰凉的石壁，感受从摩尔时代留存至今的城门厚度。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">径直走向圣母广场，在空旷的广场中央原地转一圈，让四周风格各异的塔楼、教堂和宫殿立面如全景电影般映入眼帘。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">推开高尔费斯·德·阿巴霍宫厚重的大门，在中庭那两层优雅的文艺复兴拱廊下驻足，想象当年美洲归来的富商在此举办宴会的场景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">挤进那条著名的“窄巷”，侧身通过两座古老宫殿间仅容一人通行的缝隙，体验中世纪城市空间的极限压迫感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">寻找圣马特奥教堂旁的售票处，攀爬狭窄的螺旋石梯登上塔楼顶，让整个金黄色石头城的屋顶海洋在眼前铺展开来。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在迷宫般的巷弄里“故意”迷路，直到偶然闯入一个无人小广场，坐在古老的石井栏边，听风声穿过拱门。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">黄昏时分回到圣母广场，找一家有露天座位的酒吧，点一杯本地产的卢埃达白葡萄酒，看光影在每一块石头上上演最后一幕戏剧。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">入夜后报名参加老城的夜间传说导览，在手提灯摇曳的光线下，听导游讲述发生在那些漆黑窗户后的古老鬼故事与家族秘辛。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 圣马特奥教堂塔楼顶端</h4>
                  <p className="text-sm text-gray-700">日落前一小时登顶，用长焦镜头捕捉夕阳为层层叠叠的红色屋顶和塔楼勾勒出的金色轮廓线，构图时可纳入远处广阔的平原。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣母广场东南角仰拍</h4>
                  <p className="text-sm text-gray-700">上午十点左右，阳光能照亮圣母升天教堂的塔楼和布哈科塔，采用广角镜头低角度仰拍，将宏伟的建筑与一小片蓝天一同纳入，凸显其巍峨。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. “窄巷”内部</h4>
                  <p className="text-sm text-gray-700">正午时分阳光几乎直射时进入巷子，光线可以照亮一部分巷壁，形成强烈的明暗对比，拍摄人物侧身通过的剪影或背影，极具故事感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 高尔费斯·德·阿巴霍宫回廊二楼</h4>
                  <p className="text-sm text-gray-700">下午三四点，阳光斜射入中庭，会在下层拱廊投下规律的光影，站在二楼廊道向下俯拍，能捕捉到几何光影与文艺复兴建筑的完美结合。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 从城墙外的现代街区远眺</h4>
                  <p className="text-sm text-gray-700">清晨有薄雾时最佳，在“Ronda de San Francisco”路附近，可以拍到老城建筑群从晨雾中升起的全景，犹如海市蜃楼。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用偏振镜可以有效减少古老石墙的反光，让建筑色彩更加饱和沉稳。</li>
                <li>• 尊重当地居民隐私，避免将镜头直接对准仍然有人居住的宫殿窗户或私人庭院内部。</li>
                <li>• 飞无人机在西班牙历史遗迹上空有严格限制，在老城区域飞行基本不被允许，务必提前查询法规。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">历史沉浸之选</h4>
                  <p className="text-sm text-blue-800">入住由16世纪贵族宫殿改造而成的国营古堡酒店，睡在带有原始石拱顶的房间，清晨在回廊庭院里享用早餐，仿佛自己就是宫殿的主人。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">文艺小众之选</h4>
                  <p className="text-sm text-green-800">藏在犹太区窄巷深处的设计师精品酒店，由几栋老房子打通而成，保留了裸露的石墙和木梁，但内饰极简现代，屋顶露台是欣赏老城日落的秘密基地。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">性价比之选</h4>
                  <p className="text-sm text-yellow-800">坐落在五月广场拱门旁的百年老字号旅馆，房间虽小但干净温馨，窗户正对进出老城的人流，下楼就能融入最本地化的市井生活。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">田园风光之选</h4>
                  <p className="text-sm text-purple-800">开车15分钟，住在埃斯特雷马杜拉平原上的乡间庄园酒店，四周是橡树林和牧场，在无边泳池里遥望远处山丘上的石头城剪影，享受静谧的乡村夜晚。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿多为历史建筑，隔音可能一般，但这份“与历史同眠”的体验无可替代。</p>
              <p className="text-gray-700 leading-relaxed mb-4">如果自驾，务必确认酒店是否提供停车场或有合作车场，老城内绝对无法停车。</p>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（春秋两季和周末）住宿非常紧俏，尤其是特色古堡酒店，建议至少提前两到三个月预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开卡塞雷斯好些天了，但闭上眼，手掌仿佛还能感受到那些花岗岩墙壁在日晒后残留的余温，鼻腔里似乎还萦绕着石头、橙花与古老木头发出的混合气息。这座城最神奇的地方，不在于它拥有某一件惊世骇俗的艺术品，而在于它提供了一种完整的、沉浸式的时空错位感。它没有将历史封装在博物馆的玻璃柜里，而是让历史成为你脚下踩着的路，成为你肩膀擦过的墙，成为你目光所及的整个生活剧场。在这里，你不是旁观者，你成了历史街景里一个移动的标点。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在一切都追求快速迭代、网红打卡的今天，卡塞雷斯的存在像一种温柔的抵抗。它倔强地保持着缓慢的节奏、恒定的样貌，告诉你有些价值在于“不变”，在于那份历经劫波后沉淀下来的从容与厚重。它复杂的历史层次——罗马的基座、伊斯兰的骨骼、基督教的血肉、文艺复兴的华服——没有变成一笔糊涂账，而是清晰可辨地长在了一起，形成了一种独特而和谐的美。这或许能给当下世界一些启示：不同的文明，在经过冲突、并存与漫长的磨合后，最终可以成就一个远比单一文化更丰富、更深刻的整体。每一位热爱深度游的旅人，都应该来这里住上两晚，不是为了收集又一个世界遗产的图章，而是为了让自己慢下来，在石头的沉默叙事中，重新感受时间的重量、文明的厚度，以及“家园”这个词，可以如何在几个世纪的风雨中，被一代代人用石头如此具体、如此坚固地建造和守护下来。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
