import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布特林特 Butrint｜隐没在森林与湿地交响中的古希腊/古罗马活化石 - 最佳欧洲景点',
  description: '如果你以为考古遗址就是一片裸露在烈日下的枯燥石头，那布特林特会彻底颠覆你的想象。车子驶离萨兰达的滨海喧嚣，转入一条被夹竹桃和橄榄树簇拥的乡间小路，空气渐渐变得潮湿，夹杂着湖水、泥土和野生迷迭香的复杂气息。当你站在公园入口，眼前不是开阔的平原，而是一片深邃的、由森林、芦苇荡和宁静的布特林特湖共同守护的...',
}

export default function ButrintNationalParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '阿尔巴尼亚', href: '/destinations/albania' },
            { label: '布特林特', href: '/attractions/butrint-national-park' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布特林特・Butrint・阿尔巴尼亚・萨兰达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你以为考古遗址就是一片裸露在烈日下的枯燥石头，那布特林特会彻底颠覆你的想象。车子驶离萨兰达的滨海喧嚣，转入一条被夹竹桃和橄榄树簇拥的乡间小路，空气渐渐变得潮湿，夹杂着湖水、泥土和野生迷迭香的复杂气息。当你站在公园入口，眼前不是开阔的平原，而是一片深邃的、由森林、芦苇荡和宁静的布特林特湖共同守护的秘境。你的第一感觉不是震撼，而是一种被邀请进入某个沉睡世界的宁静。
沿着被苔藓微微覆盖的碎石小径往里走，耳边是交响乐般的自然之声：不知名的鸟鸣从密林深处传来，蝉鸣是永恒的背景音，脚下落叶发出细碎的咔嚓声，偶尔还有湖水轻轻拍岸的微响。然后，就在一个转弯处，它毫无征兆地出现了——那宏伟的古希腊剧院半圆形的石阶，不是孤零零地矗立着，而是被巨大的榕树和气生根温柔地包裹、拥抱。阳光透过浓密的树冠，在泛着青苔的古老石座上投下斑驳晃动的光点，那一刻，时间的概念模糊了。你分不清是文明占领了自然，还是自然最终温柔地回收了文明。
这里不像那些被精心修复、界限分明的景点。在布特林特，历史是“活”的。你会看到当地的老人在遗址边的长椅上静静地坐着，不是为了参观，只是日常的一部分；蜥蜴在罗马马赛克地砖上飞快地爬过；野鸭在曾是古港口的平静水面上划出涟漪。这种“共生感”是布特林特最打动人心的魅力。它没有被做成标本，它依然在呼吸，在生长，在随着四季变幻容颜——春天野花会在剧场的台阶上绽放，秋天的藤蔓会把罗马城墙染成火红。
最核心的体验，是一种穿越多重时空的恍惚。你可能在十分钟内，从祭祀医神阿斯克勒庇俄斯的古希腊圣所，漫步到铺着精美海洋生物图案马赛克的罗马贵族别墅废墟，再抬头望见山丘上威尼斯人为了防御奥斯曼帝国而建的棱堡塔楼。所有这些层叠的文明，都安静地躺在一片郁郁葱葱的湿地生态系统之中，被联合国教科文组织同时认定为文化遗产和自然遗产。这里没有喧嚣的旅行团，只有微风、历史和你自己的脚步声，共同谱写着一首关于时间与遗忘的悠长诗歌。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你以为考古遗址就是一片裸露在烈日下的枯燥石头，那布特林特会彻底颠覆你的想象。车子驶离萨兰达的滨海喧嚣，转入一条被夹竹桃和橄榄树簇拥的乡间小路，空气渐渐变得潮湿，夹杂着湖水、泥土和野生迷迭香的复杂气息。当你站在公园入口，眼前不是开阔的平原，而是一片深邃的、由森林、芦苇荡和宁静的布特林特湖共同守护的秘境。你的第一感觉不是震撼，而是一种被邀请进入某个沉睡世界的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着被苔藓微微覆盖的碎石小径往里走，耳边是交响乐般的自然之声：不知名的鸟鸣从密林深处传来，蝉鸣是永恒的背景音，脚下落叶发出细碎的咔嚓声，偶尔还有湖水轻轻拍岸的微响。然后，就在一个转弯处，它毫无征兆地出现了——那宏伟的古希腊剧院半圆形的石阶，不是孤零零地矗立着，而是被巨大的榕树和气生根温柔地包裹、拥抱。阳光透过浓密的树冠，在泛着青苔的古老石座上投下斑驳晃动的光点，那一刻，时间的概念模糊了。你分不清是文明占领了自然，还是自然最终温柔地回收了文明。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像那些被精心修复、界限分明的景点。在布特林特，历史是“活”的。你会看到当地的老人在遗址边的长椅上静静地坐着，不是为了参观，只是日常的一部分；蜥蜴在罗马马赛克地砖上飞快地爬过；野鸭在曾是古港口的平静水面上划出涟漪。这种“共生感”是布特林特最打动人心的魅力。它没有被做成标本，它依然在呼吸，在生长，在随着四季变幻容颜——春天野花会在剧场的台阶上绽放，秋天的藤蔓会把罗马城墙染成火红。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最核心的体验，是一种穿越多重时空的恍惚。你可能在十分钟内，从祭祀医神阿斯克勒庇俄斯的古希腊圣所，漫步到铺着精美海洋生物图案马赛克的罗马贵族别墅废墟，再抬头望见山丘上威尼斯人为了防御奥斯曼帝国而建的棱堡塔楼。所有这些层叠的文明，都安静地躺在一片郁郁葱葱的湿地生态系统之中，被联合国教科文组织同时认定为文化遗产和自然遗产。这里没有喧嚣的旅行团，只有微风、历史和你自己的脚步声，共同谱写着一首关于时间与遗忘的悠长诗歌。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布特林特`} />
                <InfoRow label="英文名称" value={`Butrint`} />
                <InfoRow label="正式名称" value={`Butrint`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`萨兰达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在地中海历史长河中，历经希腊殖民、罗马繁荣、拜占庭坚守、威尼斯争夺乃至最终被遗忘又重见天日的，层层叠压的露天文明史书。`} />
                <InfoRow label="建筑特色" value={`自然与文明深度融合的奇迹，遗址的石头与蔓延的藤蔓、平静的湖水与古老的剧场，共同构成了一幅动态生长的考古画卷。`} />
                <InfoRow label="建筑风格" value={`跨越两千多年的建筑风格大熔炉，从简洁的希腊式剧院、恢弘的罗马浴室、精巧的早期基督教洗礼堂，到坚固的中世纪威尼斯城堡，在这里共生于同一片天地。`} />
                <InfoRow label="文化价值" value={`不仅是阿尔巴尼亚，更是整个巴尔干半岛和地中海世界文明连续性的一个罕见而鲜活的见证，被誉为“地中海的庞贝”，却比庞贝多了一份野性的生命力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公园全年开放，但开放时间随季节变化。夏季（4月1日至10月31日）通常为上午8点至晚上7点，最后入场时间为下午6点。冬季（11月1日至3月31日）开放时间缩短为上午8点至下午4点，最后入场时间为下午3点。部分雨天或特殊维护日可能临时关闭，建议出发前通过官网或当地游客中心核实。圣诞节和新年当天通常关闭。`} />
              <InfoRow label="门票价格" value={`成人票：1000阿尔巴尼亚列克（约合10欧元）。学生票（需出示有效国际学生证）：500列克。儿童（12岁以下）免费。家庭套票（2名成人+最多3名儿童）有优惠。门票包含遗址区和布特林特博物馆的入场。门票在公园入口处的售票亭购买，仅接受现金（列克或欧元），建议备好零钱。`} />
              <InfoRow label="地址" value={`Butrint National Park, Butrint, Vlorë County, Albania. （邮编：9706）`} />
              <InfoRow label="交通方式" value={`最近的主要城市是萨兰达。从萨兰达市中心出发，最便捷的方式是自驾或乘坐出租车，沿SH81公路向南行驶约18公里，车程25-30分钟，出租车费用约15-20欧元单程。也可以从萨兰达公交总站乘坐前往“Ksamil”方向的本地小巴，告诉司机在“Butrint”下车，车程约35-40分钟，票价低廉但班次不固定（约每小时一班）。从首都地拉那出发，可乘坐长途巴士先到萨兰达（车程约4-5小时），再按上述方式前往。公园入口处有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布特林特的故事，始于一个希腊神话。传说，特洛伊战争结束后，预言家赫勒诺斯带领一批幸存者向西航行，最终在这里登陆，建立了新的家园。虽然这是传说，但考古证据确凿地告诉我们，早在公元前8世纪，来自希腊的殖民者就看中了这个战略要地——它坐落在一个小半岛上，通过一条狭窄的海峡与地中海相连，易于防守，又有丰富的淡水资源和肥沃的土地。最初的布特林特，是一个崇拜医神阿斯克勒庇俄斯的朝圣中心，那个被森林环抱的剧院，最初很可能就是用于举行与治疗仪式相关的演出。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间跳到公元前2世纪，布特林特已经是一个繁荣的城邦。然而，地中海的巨浪总是席卷着小国的命运。罗马的崛起改变了一切。公元前2世纪末，罗马军队在一次战役后，将布特林特作为战利品奖赏给了士兵。这看似是征服，却意外带来了黄金时代。在罗马帝国治下的和平时期，布特林特迎来了它的鼎盛。它成了罗马殖民地，获得了市政特权。我们今天看到的大部分壮观遗迹——广场、浴室、别墅、精致的马赛克——都源于这个时期。富商和退役军官在这里建造起带有中央庭院、描绘着海神、海豚和鱼类图案马赛克的豪华宅邸，享受着从帝国心脏罗马源源不断带来的文明与安逸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但繁荣并非永恒。公元3世纪后，罗马帝国动荡，布特林特也遭遇了地震等灾难的打击。有趣的是，它并没有就此湮没，而是完成了又一次转型。随着基督教成为国教，布特林特摇身一变，成了一个重要的主教区。那个遗址里最精美、最常出现在明信片上的建筑——拥有华丽马赛克铺就的圆形洗礼池的大教堂——就是这段拜占庭时期辉煌的见证。你能想象在公元6世纪，信徒们在这里接受洗礼，光影透过高窗，照亮地面上象征救赎的孔雀和羔羊图案吗？这里曾经回荡着圣歌，而非罗马宴会的喧闹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪的地中海是争夺的战场。布特林特先后被拜占庭帝国、伊庇鲁斯专制国和西西里的安茹王朝控制，其重要性更多体现在军事上。直到14世纪末，威尼斯的商人和舰队看中了这个控制科孚海峡的据点。他们在半岛的最高点，用坚固的石头修建了那座至今仍然俯瞰全境的三角形城堡。然而，威尼斯的统治也未能持久，随着商路改变和疟疾在周边湿地的蔓延，曾经熙熙攘攘的城市生活逐渐凋零。居民们陆续离开，建筑被废弃，茂密的森林和芦苇悄然覆盖了街道和广场。布特林特就这样，从历史的地图上“消失”了数百年，只活在少数探险家和学者的记述里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重见天日，要归功于20世纪20年代的意大利考古学家。随后，阿尔巴尼亚的本国学者也加入了发掘。更幸运的是，在阿尔巴尼亚较为封闭的霍查政权时期，这里因地处偏远，反而躲过了激进的城市化开发，得以保存其原始的考古层叠状态和生态环境。1992年，它被列入世界遗产名录，并在2000年扩展为国家公园。今天的布特林特，不再是被争夺的据点，而是一个让现代人沉思文明兴衰、感受自然伟力的和平圣地。它的每一层废墟，都像书页一样，记录着从神话到帝国，从信仰到贸易，再到最终归于宁静泥土的完整史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少5-6小时）给布特林特，才能真正体会它的节奏。最好的抵达时间是公园一开门就进去，也就是早上8点，这时候光线柔和，气温凉爽，鸟类活跃，而且几乎能独享整个遗址。游览节奏一定要“慢”，这不是打卡景点，而是沉浸式的时间旅行。从入口购票后，先别急着冲进去，在码头边静静看看湖水和对岸的湿地，调整好心情。整个遗址呈环形分布，建议按照逆时针方向，从古希腊剧院开始，逐步探访各个时期的遗迹，最后登上威尼斯城堡俯瞰全局，再参观博物馆将零散的见闻系统化。中午可以在景区内的休息区（自带简餐）或在出口处的小咖啡馆简单解决。这样的安排能让你由古至今，由细节到全景，层层深入地理解这片土地。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必携带强效驱蚊液并穿着长裤，湿地地区的蚊虫非常活跃。穿一双舒适防滑的步行鞋至关重要，因为小径遍布碎石和树根，且有些区域潮湿。园区内只有入口处有小型咖啡馆，建议自备充足的饮用水和一点能量零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口沿着林荫道走到豁然开朗处，让自己第一时间被那座被巨大榕树根须缠绕的希腊化时期露天剧场震撼，试着在最高一排石阶上坐下，想象两千多年前这里上演的悲喜剧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过剧场背后的树林，去探访献给医神阿斯克勒庇俄斯的圣所与神庙遗迹，感受古希腊人将健康寄托于神祇与自然的精神世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入古罗马城市的核心区，绕着长方形的广场遗址走一圈，仔细观察地面残存的柱础和台阶，这里曾是市民集会、审判和商业活动的中心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要弯腰走进那栋保存着“海洋生物马赛克”的罗马别墅（特里布勒别墅）遗址，在保护棚下近距离凝视地板上五彩斑斓的海豚、鳗鱼和各类鱼虾镶嵌画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访布特林特的基督教灵魂——规模宏大的6世纪大教堂与洗礼堂，绕着那个标志性的圆形洗礼池走一圈，辨认地面上依然鲜艳的拜占庭马赛克纹饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡一路向上，朝着那座醒目的威尼斯三角形城堡前进，穿过它的拱门和城墙，体会从中世纪战士视角审视整个遗址与湖泊的防御心态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在参观完城堡后，一定不要错过布特林特博物馆，那里系统地陈列着从遗址出土的各时期珍贵文物，将你刚才亲眼所见的碎片串联成完整的历史故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`希腊剧院全景与树根`}</h4>
                  <p className="text-sm text-gray-700">{`站在剧院舞台中央，用广角镜头向上拍摄，将半圆形石阶、包裹看台的巨大榕树气生根以及后方绿意盎然的山林一同纳入画面，最佳时间是上午9-10点，阳光能斜射入剧场。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“狮子门”特写`}</h4>
                  <p className="text-sm text-gray-700">{`在罗马时期的城墙遗迹中，找到那块雕刻着狮子吞噬公牛浮雕的过梁石（原为希腊神庙构件，后被罗马人复用），利用侧光（上午或傍晚）拍摄，突出石头的纹理和古老沧桑的质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从威尼斯城堡俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`爬上城堡的最高点，向西拍摄，将前景的城堡石墙、中景漫布的绿色遗址废墟以及远景平静如镜的布特林特湖与远山收纳进一幅画面，晴朗的下午顺光拍摄色彩最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`浴场拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`在罗马公共浴场遗址，找到一个保存完好的砖砌拱门，等待阳光以较低角度（清晨或黄昏）穿过拱门，在内部墙壁或地面上投下强烈的几何形光斑，此时拍摄极具戏剧张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`博物馆窗景`}</h4>
                  <p className="text-sm text-gray-700">{`在布特林特博物馆内，找到一个面向遗址的窗口，以窗框为画框，拍摄窗外绿树掩映下的某处遗迹（如教堂墙壁），形成一种“将历史装入镜框”的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少树叶和水面的反光，让森林的绿色和天空的蓝色更加饱和。航拍需特别谨慎，务必提前了解阿尔巴尼亚关于国家公园内无人机飞行的最新法规，通常需要特殊许可。请永远记住，不要为了拍照而踩踏或移动任何遗迹碎片，这里的每一块石头都是受保护的历史。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`萨兰达市中心或Ksamil海滩沿线的家庭旅馆或小型精品酒店，价格亲民，晚上可以享受海滨晚餐和热闹的步行街，第二天轻松出发前往遗址。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸自然之选`}</h4>
                  <p className="text-sm text-green-800">{`布特林特国家公园周边几公里内的乡村民宿或生态旅馆，醒来推开窗就是橄榄园和远山，夜晚极其宁静，能听到真正的自然之声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感体验`}</h4>
                  <p className="text-sm text-yellow-800">{`萨兰达海滨那些由共产主义时期建筑改造的现代设计酒店，将历史感与舒适度结合，通常拥有屋顶酒吧，可以遥望布特林特方向的海峡。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华放松之选`}</h4>
                  <p className="text-sm text-purple-800">{`萨兰达以南、通往布特林特公路沿线的某处僻静山腰上的高端度假村或别墅，拥有无边泳池和私人露台，将爱奥尼亚海的全景尽收眼底。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是萨兰达和Ksamil的绝对旺季，住宿价格飙升且一房难求，务必提前数月预订。如果选择住在偏僻的乡村民宿，最好确保租车自驾，否则交通会非常不便。萨兰达市区夜生活丰富，但需注意保管好随身财物。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布特林特的时候，我的鞋子上沾着湿地的泥，衣服上带着森林的草木气息，但心里却装满了一种罕见的宁静。这种宁静，不是空洞的安逸，而是一种在目睹了文明如此宏大的生、住、异、灭循环之后，产生的深切了悟。在这里，伟大的神庙会坍塌，豪华的别墅终成废墟，坚固的城堡也难逃被遗弃的命运。然而，当人类退场，自然便悄然登场，用藤蔓包裹伤口，用树木撑开裂缝，用湖泊映照天空。它没有抹去历史，而是以一种更强大、更恒久的方式，将人类的故事编织进了地球本身的故事里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷打卡、沉迷于光鲜表面的世界里，布特林特像一位沉默的智者。它不提供即时的感官刺激，却给予你漫长回味的深度。它教会我们，真正的伟大不是永恒的耸立，而是坦然接受变迁，并在变迁中留下可供后人触摸、思考和感怀的层次。每一位热爱深度游的旅人，都应该来一次布特林特。不仅仅是为了看几处古希腊或古罗马的石头，更是为了体验一次心灵的“地质勘探”——亲手触摸时间的断层，感受文明与自然那场持续了数千年的、时而激烈时而温柔的对话。当你走出那片森林与湿地，你会带走一片属于你自己的、关于永恒与瞬间的深邃寂静。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gjirokastra-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（千阶之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/berat-albania-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gjirokaster-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
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
