import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米罗戈伊公墓 Mirogoj Cemetery｜被常春藤覆盖的艺术圣殿，欧洲最美墓园漫步指南 - 最佳欧洲景点',
  description: '当106路电车缓缓爬上山坡，把你从萨格勒布老城的喧闹中剥离出来，第一个映入眼帘的，是一堵看不到尽头的、温暖的赭红色高墙。那不是城墙，而是连绵的拱廊，像一位沉默巨人的臂弯，温柔地环抱着一整座山丘。走近了，你会被一种奇异的静谧所笼罩——那不是死寂，而是一种丰盈的、充满生命力的宁静。空气里有刚修剪过的青草...',
}

export default function MirogojCemeteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '米罗戈伊公墓', href: '/attractions/mirogoj-cemetery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米罗戈伊公墓・Mirogoj Cemetery・克罗地亚・萨格勒布`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当106路电车缓缓爬上山坡，把你从萨格勒布老城的喧闹中剥离出来，第一个映入眼帘的，是一堵看不到尽头的、温暖的赭红色高墙。那不是城墙，而是连绵的拱廊，像一位沉默巨人的臂弯，温柔地环抱着一整座山丘。走近了，你会被一种奇异的静谧所笼罩——那不是死寂，而是一种丰盈的、充满生命力的宁静。空气里有刚修剪过的青草味，混合着远处树林传来的、湿漉漉的泥土芬芳。
穿过那道巨大的、饰有精美雕塑的中央拱门，你便进入了一个截然不同的世界。眼前展开的，是一条被高大拱廊无限延伸的庄严通道。而最令人震撼的，是覆盖了几乎每一寸砖石与穹顶的常春藤。它们不是点缀，而是这里真正的主人。春天，它们是嫩绿的、毛茸茸的新毯；夏天，是浓得化不开的墨绿瀑布；到了秋天，则燃烧成一片金红与赭石色的火焰，把整个拱廊染成一首光的诗。阳光透过拱顶和藤叶的缝隙洒下来，在光滑的石板路上投下不断摇曳的光斑，仿佛时间的秒针在这里变成了可见的、温柔的东西。
你会看到许多萨格勒布本地人。他们并非都是来扫墓的。有老人坐在拱廊下的长椅上安静地读报，有情侣牵着手在如公园般开阔的草坪墓区间慢慢散步，有艺术系的学生捧着速写本，对着某座雕塑墓碑凝神勾勒。在这里，生与死的界限被一种优雅的日常感模糊了。死亡不再是一个讳莫如深的禁忌，而是融入了城市呼吸的一部分，成为了生活背景里一段深沉而美丽的低音。
米罗戈伊最打动人心的，正是这种“生者的花园”般的氛围。它用无与伦比的建筑之美和自然之力，将哀思升华为宁静，将缅怀转化为对生命与艺术之美的持久凝视。在这里漫步，你感受不到阴森与恐惧，只会觉得内心变得无比澄澈和平静，仿佛踏入了一个为灵魂准备的、巨大的露天沙龙。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当106路电车缓缓爬上山坡，把你从萨格勒布老城的喧闹中剥离出来，第一个映入眼帘的，是一堵看不到尽头的、温暖的赭红色高墙。那不是城墙，而是连绵的拱廊，像一位沉默巨人的臂弯，温柔地环抱着一整座山丘。走近了，你会被一种奇异的静谧所笼罩——那不是死寂，而是一种丰盈的、充满生命力的宁静。空气里有刚修剪过的青草味，混合着远处树林传来的、湿漉漉的泥土芬芳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道巨大的、饰有精美雕塑的中央拱门，你便进入了一个截然不同的世界。眼前展开的，是一条被高大拱廊无限延伸的庄严通道。而最令人震撼的，是覆盖了几乎每一寸砖石与穹顶的常春藤。它们不是点缀，而是这里真正的主人。春天，它们是嫩绿的、毛茸茸的新毯；夏天，是浓得化不开的墨绿瀑布；到了秋天，则燃烧成一片金红与赭石色的火焰，把整个拱廊染成一首光的诗。阳光透过拱顶和藤叶的缝隙洒下来，在光滑的石板路上投下不断摇曳的光斑，仿佛时间的秒针在这里变成了可见的、温柔的东西。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会看到许多萨格勒布本地人。他们并非都是来扫墓的。有老人坐在拱廊下的长椅上安静地读报，有情侣牵着手在如公园般开阔的草坪墓区间慢慢散步，有艺术系的学生捧着速写本，对着某座雕塑墓碑凝神勾勒。在这里，生与死的界限被一种优雅的日常感模糊了。死亡不再是一个讳莫如深的禁忌，而是融入了城市呼吸的一部分，成为了生活背景里一段深沉而美丽的低音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`米罗戈伊最打动人心的，正是这种“生者的花园”般的氛围。它用无与伦比的建筑之美和自然之力，将哀思升华为宁静，将缅怀转化为对生命与艺术之美的持久凝视。在这里漫步，你感受不到阴森与恐惧，只会觉得内心变得无比澄澈和平静，仿佛踏入了一个为灵魂准备的、巨大的露天沙龙。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米罗戈伊公墓`} />
                <InfoRow label="英文名称" value={`Mirogoj Cemetery`} />
                <InfoRow label="正式名称" value={`Mirogoj Cemetery`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`萨格勒布`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座超越死亡意义的“露天博物馆”与国家圣殿，凝聚了克罗地亚百年民族记忆与艺术成就。`} />
                <InfoRow label="建筑特色" value={`标志性的长达数百米的新文艺复兴风格红砖连拱廊、壮丽的圆顶教堂与覆盖一切、四季变幻的常春藤之海完美融合。`} />
                <InfoRow label="建筑风格" value={`以新文艺复兴风格为基调，完美融入了新古典主义与拜占庭元素。`} />
                <InfoRow label="文化价值" value={`这里不仅是安息之地，更是萨格勒布的城市灵魂客厅，是市民散步、沉思、与历史和艺术对话的宁静绿洲。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放。墓园大门区域：每日上午6:00至晚上8:00（夏季可能延长至晚9:00）。中央纪念大厅（连拱廊下）及部分名人墓地区域：通常为上午9:00至下午5:00。请注意，11月1日万圣节期间开放时间会大幅延长，且人流量极大。具体时间建议出行前查看官网或当地公告。`} />
              <InfoRow label="门票价格" value={`进入墓园本身完全免费。若需参加由萨格勒布市旅游局组织的官方主题导览团（如“艺术与建筑”、“名人安息地”等），需支付约80-150库纳（约合10-20欧元）的导游费用。导览需提前在官网或游客中心预约。`} />
              <InfoRow label="地址" value={`Mirogojska cesta, 10000, Zagreb, Croatia`} />
              <InfoRow label="交通方式" value={`从萨格勒布中央火车站或主广场（Ban Jelačić Square）出发最为方便。在广场东侧的电车站，乘坐106路电车（终点站即为Mirogoj），车程约15-20分钟，班次频繁（约每10-15分钟一班）。上车前在报亭购买ZET交通卡或单次票（有效时间内可换乘）。下车后，穿过一条宁静的林荫道，步行约3分钟即抵达墓园气势恢宏的主入口。不建议自驾，因附近停车场极其有限。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从19世纪下半叶说起。那时的萨格勒布正经历着一次“觉醒”，从一座奥斯曼帝国边境的沉闷城镇，向着一个现代化的欧洲首都迈进。城市需要一座新的中央公墓，来统一当时散布各处的教会墓地。1867年，一位名叫莉迪亚·米罗戈伊的显赫女士捐出了她位于梅德韦德尼察山脚下的家族土地，公墓便以她的名字命名。但最初，它只是一个布局简单的草地墓园，直到一个人的出现，才赋予了它不朽的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个人就是赫尔曼·波莱，一位才华横溢的奥地利建筑师。1876年，他的设计方案在竞标中胜出。波莱的愿景是宏大的：他要建造的不是一个普通的墓地，而是一座“死者之城”，一个能与生活之城平等对话的艺术与建筑圣殿。他的核心设计便是那令人过目不忘的连拱廊——不仅是为了美观，更是为了提供一个遮风避雨的庄严空间，安放家族墓室和纪念雕塑，让哀悼成为一种有尊严的仪式。中央的圆顶教堂（圣基督君王教堂）则是整个建筑群的心脏，融合了文艺复兴的和谐与拜占庭的穹顶，象征着信仰的永恒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`工程从1879年持续到1929年，跨越了半个世纪。波莱倾注了毕生心血，甚至亲自监督每一块砖石的烧制和雕刻。然而，命运多舛。1892年，一场毁灭性的地震袭击了萨格勒布，已经建起一部分的拱廊严重受损。波莱没有放弃，他修改了设计，加固了结构，让建筑在灾难后变得更加坚韧。可惜他未能看到全部完工，于1894年去世。他的儿子们继承了他的遗志，继续推进这项伟大的工程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的战火也未能将这里摧毁。在1991-1995年的克罗地亚独立战争期间，萨格勒布多次遭到炮击，米罗戈伊公墓也未能幸免。一些精美的雕塑和穹顶被弹片击中损坏。但战争一结束，修复工作立即开始。克罗地亚人像修复自己的心脏一样修复它，因为他们知道，这里安息着从诗人、科学家到政治家等无数塑造了国家身份的灵魂，这座公墓本身就是一部用石头和生命写就的克罗地亚史诗。今天，我们看到的一些浅色修补痕迹，并非瑕疵，而是历史留下的、被温柔抚摸过的伤疤，见证着它的 resilience（复原力）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，米罗戈伊安息着超过30万灵魂，其中包含数百位克罗地亚最著名的艺术家、作家、运动员和政治家。它早已超越了最初的葬礼功能，成为了一个活着的文化机构，定期举办音乐会、艺术展览和文学活动。从莉迪亚女士的捐赠，到波莱父子的执着，再到战后人民的修复，米罗戈伊的故事，就是一个关于馈赠、匠心、坚韧与永恒记忆的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受米罗戈伊的魔力，请至少预留3-4小时。最佳抵达时间是工作日的清晨（9点左右）或午后（2点以后），以避开周末的家庭扫墓人流和正午的强光。建议从主入口开始，先沉浸在中央拱廊的宏伟与光影中，然后向外探索开阔的公园式墓区，最后回到拱廊深处寻找那些艺术珍宝。这样的路线由内而外，再由外及内，能让你逐步领略其从建筑震撼到人文细节的层层魅力。请放慢脚步，这里适合沉思，不适合赶路。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`请务必保持肃静与尊重，不要踩踏墓碑或抚摸雕塑，拍照时尽量避免拍到正在扫墓的家属。
穿着舒适的步行鞋，因为墓区面积很大且有不少缓坡。
可以带一瓶水，但请不要在墓园内饮食或丢弃垃圾。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口的宏伟拱门进入，让自己完全沉浸在那条延伸向远方的、被常春藤包裹的中央长廊所带来的初始震撼里`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在信息处拿一份免费地图，先不急着深入，而是向左或右拐入侧翼拱廊，近距离观察那些镶嵌在墙内的家族墓室门上各不相同的浮雕与铭文`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中央轴线缓缓走向尽头的圣基督君王教堂，抬头仰望其巨大的绿色圆顶，感受从穹顶天窗洒下的神圣光束`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入教堂内部，感受其简洁而肃穆的拜占庭风格内饰，点燃一支蜡烛，享受片刻绝对的宁静`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，选择一条小径步入开阔的草坪墓区，像当地人一样在如公园般的林间与雕塑间随意漫步，发现那些设计感惊人的现代墓碑`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据地图指引，寻找几位你最感兴趣的克罗地亚名人的长眠之地，比如诗人安东·古斯塔夫·马托什或雕塑家伊万·梅什特罗维奇的作品`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到连拱廊下，找一张阳光斑驳的长椅坐下，静静观察光影在红砖与藤蔓上的移动，听风声穿过无数拱券的细微回响`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，再次穿过中央拱门，回望这片生与死和谐共处的土地，将那份深邃的宁静打包进记忆`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中央拱廊中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的斜阳将拱廊的一侧照亮，另一侧陷入深邃的阴影，此时站在廊道中间仰拍，能捕捉到红砖、光影与无限延伸的拱券构成的强烈透视与几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`常春藤覆盖的穹顶特写`}</h4>
                  <p className="text-sm text-gray-700">{`在侧翼拱廊寻找一个被常春藤完全包裹的穹顶角落，利用长焦镜头压缩空间，让阳光照亮藤叶的纹理，拍出如油画般浓墨重彩的细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从草坪墓区回望连拱廊`}</h4>
                  <p className="text-sm text-gray-700">{`走到墓园东侧较高的草坪上，将连绵的红色拱廊、绿色圆顶教堂与远处萨格勒布城市景观一同纳入镜头，展现墓园与城市的共生关系。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`名人艺术墓碑局部`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦某座由著名艺术家设计的墓碑雕塑，如梅什特罗维奇创作的“沉思”雕像，利用大光圈虚化背景，突出雕塑的线条与情感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`拱门下的人物剪影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，请同伴站在拱门入口处，以内部幽深的长廊为背景拍摄剪影，能讲述一个关于进入与沉思的生动故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用好“黄金时刻”（日出后和日落前一小时）的柔和光线，这是塑造米罗戈伊魔幻氛围的最佳时机。`}</li>
                <li>• {`尽量避免使用闪光灯，以免打扰他人，自然光已足以展现这里的所有美感。`}</li>
                <li>• {`拍摄墓碑雕塑时，心怀敬意，构图以展现艺术性为主，而非猎奇。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在萨格勒布上城区（Gradec）的复古风格公寓，开窗就能看见圣马可教堂的彩瓦屋顶，早晨在石板巷弄的咖啡香中醒来，乘电车15分钟即达米罗戈伊。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术设计爱好者之选`}</h4>
                  <p className="text-sm text-green-800">{`下城区一家由印刷厂改造的设计酒店，房间充满工业复古与克罗地亚当代艺术元素，步行至电车站仅5分钟，无缝连接你的城市探索与墓园静思之旅。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`沉浸式宁静体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于梅德韦德尼察山脚下的精品民宿，被森林环绕，拥有直面自然的大露台，你可以像本地人一样，从山间小径慢慢散步至公墓的后门，开启一段与众不同的拜访。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端全景享受`}</h4>
                  <p className="text-sm text-purple-800">{`萨格勒布最高建筑顶层的高档酒店，房间拥有全景落地窗，夜晚可以俯瞰万家灯火与远处山丘的轮廓，你会感慨生者之城的繁华与静谧的米罗戈伊之间那动人的对话。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨格勒布治安良好，上、下城区都很安全。建议选择靠近电车106路站点的住宿，会为你的往返提供极大便利。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想在万圣节（11月1日）期间体验米罗戈伊万人烛海的盛况，务必提前至少三个月预订住宿，这是萨格勒布一年中最繁忙的时段之一。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开米罗戈伊的时候，我的背包里没有带走任何实物，却感觉比来时沉重了许多。那份沉重不是负担，而是一种被填满的丰盈。它让我重新思考“墓地”这个词的含义。在我们惯常的认知里，墓地是生命的终点，是告别与悲伤的场所。但米罗戈伊告诉我，它可以是另一重起点——是记忆永续的起点，是艺术永恒的起点，更是生者获得内心平静、反思生命意义的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在加速、信息爆炸的时代，米罗戈伊提供了一种珍贵的“慢”与“深”。它不逃避死亡，而是用极致的美学将死亡接纳为生命自然的一部分，并将其升华为一座供所有人使用的、沉思的花园。它提醒我们，伟大的城市不仅关心生者的衣食住行，也庄严地安顿逝者的尊严，并通过这种安顿，滋养了整个城市的文化品格与精神厚度。对于每一位热爱深度游的旅人而言，拜访米罗戈伊，不仅仅是在看一个景点，更是在完成一次与自己内心的深刻对话。你会明白，有些地方，真的能让灵魂歇歇脚。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rovinj-coastal-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗维尼海滨古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rovinj</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/walls-of-ston" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯通古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Walls of Ston</p>
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
