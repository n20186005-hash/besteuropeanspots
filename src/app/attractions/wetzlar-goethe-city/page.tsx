import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦茨拉尔 Wetzlar｜歌德的“少年维特之城”与徕卡镜头下的世界 - 最佳欧洲景点',
  description: '还记得我第一次站在拉恩河那座敦实的旧石桥上望向韦茨拉尔老城时的感觉吗？那不像是在“参观”一个景点，更像是无意中闯进了一本泛黄小说里的插页。河水在桥墩下哗哗作响，带着一股清冽的、属于山林和石头的气息。视线掠过河岸的垂柳，对岸层层叠叠的木筋屋就那样毫无预警地撞进眼里——不是整齐划一的明信片，而是高高低低...',
}

export default function WetzlarGoetheCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '韦茨拉尔（歌德之城）', href: '/attractions/wetzlar-goethe-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦茨拉尔（歌德之城）・Wetzlar・德国・韦茨拉尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次站在拉恩河那座敦实的旧石桥上望向韦茨拉尔老城时的感觉吗？那不像是在“参观”一个景点，更像是无意中闯进了一本泛黄小说里的插页。河水在桥墩下哗哗作响，带着一股清冽的、属于山林和石头的气息。视线掠过河岸的垂柳，对岸层层叠叠的木筋屋就那样毫无预警地撞进眼里——不是整齐划一的明信片，而是高高低低、歪歪扭扭，每一栋的颜色都因年代久远而变得沉静：烟熏般的赭石色、苔藓般的灰绿色、被岁月舔舐成奶油色的白墙。黑色的木梁纵横交错，像老人手背上凸起的筋络，固执地支撑着几百年的光阴。就在这片静谧之上，大教堂那座仿佛被突然掐断的、从未封顶的塔楼沉默地耸立着，给人一种奇异的、未完成的诗意。
你很快就会发现，这座小城的空气里飘荡着两种截然不同的频率。在那些迷宫般的小巷里，比如“铁匠巷”或“骑士巷”，你的脚步踏在光滑的鹅卵石上发出清脆的回响，转角可能就遇上一块铭牌，告诉你歌德在1772年曾如何在这扇窗后忧郁地凝视夏绿蒂·布夫的家。面包房飘出刚出炉的“弗兰肯风味”面包的焦香，混合着从某家古老酒馆门缝里溢出的苹果酒酸涩味。当地人推着自行车与你擦肩而过，神情闲适，仿佛生活在时间之外。这是一种属于文学和旧时光的、慢悠悠的浪漫频率。
但只要你稍微将目光放远，或是走进城南的“光学区”，另一种频率便会悄然响起。那是一种精密、冷静、充满现代力量的脉搏。你能在博物馆里看到世界上第一台便携式相机“徕卡I型”那冰冷的金属机身，也能在城市的某些角落，看到行色匆匆的工程师。正是从这里，韦茨拉尔的工匠精神催生了徕卡、蔡司、米铱这些光学巨头，用镜头精准地捕捉了整个世界。这种文学感性与工程理性的共生，就是韦茨拉尔最让人着迷的核心魅力——它既是你心中那个为爱烦恼的“少年维特”，也是那位一丝不苟地打磨镜片的“光学工匠”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次站在拉恩河那座敦实的旧石桥上望向韦茨拉尔老城时的感觉吗？那不像是在“参观”一个景点，更像是无意中闯进了一本泛黄小说里的插页。河水在桥墩下哗哗作响，带着一股清冽的、属于山林和石头的气息。视线掠过河岸的垂柳，对岸层层叠叠的木筋屋就那样毫无预警地撞进眼里——不是整齐划一的明信片，而是高高低低、歪歪扭扭，每一栋的颜色都因年代久远而变得沉静：烟熏般的赭石色、苔藓般的灰绿色、被岁月舔舐成奶油色的白墙。黑色的木梁纵横交错，像老人手背上凸起的筋络，固执地支撑着几百年的光阴。就在这片静谧之上，大教堂那座仿佛被突然掐断的、从未封顶的塔楼沉默地耸立着，给人一种奇异的、未完成的诗意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快就会发现，这座小城的空气里飘荡着两种截然不同的频率。在那些迷宫般的小巷里，比如“铁匠巷”或“骑士巷”，你的脚步踏在光滑的鹅卵石上发出清脆的回响，转角可能就遇上一块铭牌，告诉你歌德在1772年曾如何在这扇窗后忧郁地凝视夏绿蒂·布夫的家。面包房飘出刚出炉的“弗兰肯风味”面包的焦香，混合着从某家古老酒馆门缝里溢出的苹果酒酸涩味。当地人推着自行车与你擦肩而过，神情闲适，仿佛生活在时间之外。这是一种属于文学和旧时光的、慢悠悠的浪漫频率。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但只要你稍微将目光放远，或是走进城南的“光学区”，另一种频率便会悄然响起。那是一种精密、冷静、充满现代力量的脉搏。你能在博物馆里看到世界上第一台便携式相机“徕卡I型”那冰冷的金属机身，也能在城市的某些角落，看到行色匆匆的工程师。正是从这里，韦茨拉尔的工匠精神催生了徕卡、蔡司、米铱这些光学巨头，用镜头精准地捕捉了整个世界。这种文学感性与工程理性的共生，就是韦茨拉尔最让人着迷的核心魅力——它既是你心中那个为爱烦恼的“少年维特”，也是那位一丝不苟地打磨镜片的“光学工匠”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦茨拉尔（歌德之城）`} />
                <InfoRow label="英文名称" value={`Wetzlar`} />
                <InfoRow label="正式名称" value={`Wetzlar`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`韦茨拉尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因歌德的《少年维特之烦恼》而永载文学史册，同时又是世界精密光学与测量技术工业心脏的传奇小城。`} />
                <InfoRow label="建筑特色" value={`完美保存了中世纪晚期的城市肌理，以密集的木筋屋（Fachwerkhaus）、狭窄蜿蜒的卵石巷、高耸的大教堂未完成塔楼以及横跨拉恩河的古老石桥为标志。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期至文艺复兴时期的木筋房风格为主，夹杂着巴洛克和古典主义的装饰元素，整体呈现出一种未经刻意修饰的、生活化的历史厚重感。`} />
                <InfoRow label="文化价值" value={`文学浪漫主义的精神故乡与德国工业精确性的现实基石在此奇妙交融，塑造了独一无二的双重灵魂。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`韦茨拉尔老城作为开放区域全天可游览。城内主要博物馆（如市立博物馆、韦茨拉尔博物馆、徕卡体验馆）及历史建筑（如歌德故居）的开放时间通常为周二至周日上午10点至下午5点，周一闭馆。圣诞节、新年及部分公共假日可能关闭或缩短开放时间，建议行前在官网核实具体日期。`} />
              <InfoRow label="门票价格" value={`进入韦茨拉尔老城免费。各景点单独售票：歌德故居成人票约5欧元，市立博物馆联票约6欧元，徕卡体验馆门票约10欧元。通常提供家庭票及学生、老人优惠票。持有“浪漫之路”或“黑森州卡”可能有折扣。`} />
              <InfoRow label="地址" value={`Wetzlar Tourist Information, Domplatz 8, 35578 Wetzlar, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场出发最为便捷。在机场火车站乘坐区域快车（RB）或城市快铁（S-Bahn）前往法兰克福中央火车站（约15分钟）。换乘开往多特蒙德或锡根方向的IC或RE列车，约40-50分钟即可直达韦茨拉尔中央火车站。班次非常频繁，几乎每半小时一班。从火车站步行15分钟或乘坐市内公交（如线路10、12）即可抵达老城中心。建议使用德国铁路（DB）APP提前购票，可获折扣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起韦茨拉尔的故事，得从一条河和一座铁矿开始。拉恩河在这里拐了个弯，河边的山丘富含铁矿。早在罗马时代，这里就有了定居点。但真正让它登上历史舞台的，是神圣罗马帝国皇帝腓特烈一世，也就是著名的“红胡子巴巴罗萨”。1180年，他授予韦茨拉尔帝国自由城市的地位，这意味着它直接听命于皇帝，不受任何地方领主管辖。财富随之涌来，来自欧洲各地的商人在此交易铁器、布匹，城市迅速扩张，修建了坚固的城墙和那座雄心勃勃的、计划建成德意志最大教堂之一的圣殿。然而，资金和命运的捉弄让大教堂的塔楼永远停留在了“未完成”的状态，这个遗憾反而成了它日后最独特的标志。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`帝国的光环在17世纪逐渐黯淡。三十年战争的创伤深重，韦茨拉尔失去了往日的政治重要性。然而，历史总是充满了意外的转折。1693年，神圣罗马帝国最高法院——“帝国皇家最高法院”迁至韦茨拉尔。你可以想象，这座安静的小城 suddenly变成了帝国的司法中心。贵族、律师、讼棍、寻梦者从四面八方涌入，带来了金钱、虚荣、阴谋和大量的公文。城里的贵族宅邸和巴洛克式建筑多了起来，但更多的是各种小旅馆和出租公寓，用来安置那些等待一纸判决可能就要数年的诉讼当事人及其家眷。整个城市弥漫着一种奇特的、焦灼而又无所事事的氛围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`就在这时，一个名叫约翰·沃尔夫冈·歌德的年轻法律实习生，在1772年的春天来到了这里。他对法律实务兴趣寥寥，却深深陷入了这座城市的社交生活和情感漩涡。他爱上了最高法院同事的未婚妻，夏绿蒂·布夫。这场无望的恋情，叠加他在韦茨拉尔目睹的帝国官僚机构的腐朽与庸碌，以及年轻灵魂无处安放的苦闷，最终发酵成了文学史上那颗著名的“炸弹”——《少年维特之烦恼》。1774年小说出版，轰动了整个欧洲。无数青年模仿维特的穿着与忧郁，来到韦茨拉尔寻找“绿蒂之家”和维特自杀的遗迹（尽管那是文学虚构）。韦茨拉尔一夜之间，从一座沉闷的司法城，变成了浪漫主义运动的圣地与“朝圣”地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮继续向前。19世纪，帝国法院解散，韦茨拉尔似乎要重归沉寂。但埋藏在这片土地深处的工匠基因开始觉醒。一位名叫恩斯特·莱茨的精密机械师在此建立了工厂，专注于显微镜和科学仪器。他的儿子，恩斯特·莱茨二世，更是极具远见。20世纪初，在工程师奥斯卡·巴纳克的协助下，他们革命性地将电影胶片用于静态摄影，于1925年推出了徕卡（Leica）相机，彻底改变了摄影术，让“瞬间捕捉”成为可能。从此，韦茨拉尔的命运与“光学精密”紧密相连，蔡司、米铱等顶级品牌相继在此扎根。二战中，老城部分受损，但战后，人们精心修复了那些木筋屋，同时让光学工业在城南蓬勃发展。于是，歌德的爱情叹息与徕卡快门清脆的“咔嚓”声，在这座小城的上空，完成了一场跨越两个世纪的、不可思议的对话。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味韦茨拉尔的双重灵魂，我建议你安排一整天的悠闲时光。最好在上午九点左右抵达，这时游客尚少，晨光斜照，老城的木筋屋会呈现出最柔和的色彩。整体的游览节奏应该是“慢”的，像散步一样，允许自己迷路，在巷口发呆。路线可以规划为一个环线：从拉恩河与老城的交界处开始，深入迷宫般的老城核心，探访文学印记，再登上制高点俯瞰全景，最后体验其工业精髓。这样大约需要4-5小时，剩下的时间可以留给一家舒适的咖啡馆或啤酒花园，静静消化这座城的复杂滋味。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城的鹅卵石路对高跟鞋和行李箱轮子极不友好，务必穿一双舒适结实的平底鞋。
许多小型博物馆午间可能有短暂的休息时间，建议行前在旅游局官网或现场确认具体开放时段。
不要只盯着知名景点，韦茨拉尔的美往往藏在无名小巷的转角、某扇彩绘的窗户或一个爬满藤蔓的静谧庭院里。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从拉恩河上那座有着古老雕塑的“旧桥”开始你的旅程，站在桥中央同时眺望下游的工业遗迹与上游的童话般的老城轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让脚步带你随意拐进从大教堂广场辐射出去的任意一条小巷，比如狭窄得几乎只能容一人通过的“铁匠巷”，用手触摸那些被岁月打磨得温润的木梁和石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并走进那座外墙刷成黄色的“歌德故居”，在他当年写作的小房间里感受一下从1772年照射进来的、似乎从未改变过的光线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“骑士之家”那布满精美木雕的立面下驻足，想象当年帝国最高法院的律师和贵族们在此高谈阔论的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上大教堂未完成的塔楼（如果开放），在眩晕的旋转楼梯尽头，收获一个将红色屋顶的海洋、蜿蜒的拉恩河与远处现代工业区尽收眼底的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂的阴影里走出来，让嗅觉带领你找到一家传统的苹果酒酒馆，点一杯地道的“Äbbelwoi”，就着焦香四溢的“手撕奶酪”听邻桌老人的聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将下午的时光留给“徕卡体验馆”，不只是看相机，更要试着透过那些传奇的镜头，重新观察你刚刚走过的老城街景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分回到拉恩河畔，沿着“光学小径”散步，读一读介绍光学科技发展的展板，看着夕阳为对岸的木筋屋和这边的工厂建筑同时镀上金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`旧桥中央偏东侧位置`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，利用拉恩河作为前景，可以拍摄到大教堂未完成塔楼与层层叠叠木筋屋在水中的倒影，构图稳重而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大教堂塔楼顶部观景台`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的上午，光线最好，使用广角镜头可以拍下老城密如蛛网的红色屋顶与远处绿色山丘、现代厂房的对比，展现城市双重性格。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`铁匠巷中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，小巷两侧高耸的木筋屋会在巷道上空形成一道狭窄的“光之裂缝”，站在巷中向上拍摄，能获得极具戏剧张力的纵深感构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`徕卡体验馆内的观景窗`}</h4>
                  <p className="text-sm text-gray-700">{`馆内设有面向老城的巨大玻璃窗，窗框被设计成相机取景器样式，在此拍摄，能将古老的城市风景巧妙地“装进”一个现代的摄影语境中，寓意深刻。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`拉恩河对岸的“光学小径”上`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，以河水和垂柳为前景，拍摄对岸老城灯光初上的景象，长曝光下灯光与倒影交织，静谧而浪漫。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`老城小巷光线复杂，明暗对比强烈，建议使用RAW格式拍摄以便后期调整阴影和高光细节。`}</li>
                <li>• {`拍摄居民或商店内部时，请务必先微笑示意并获得同意，德国人非常重视隐私。`}</li>
                <li>• {`如果想拍摄大教堂塔楼全景，河对岸的公园草地是更宽松、构图更灵活的选择。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋有500年历史的木筋屋家庭旅馆里，楼梯吱呀作响，房间低矮温馨，早晨会被教堂的钟声和面包房的香气温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计格调`}</h4>
                  <p className="text-sm text-green-800">{`选择拉恩河畔由旧厂房改造的精品设计酒店，房间是极简的工业风，却拥有直面古城的最美视角，古今对话就在一窗之间。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻位于城市边缘森林中的古堡酒店，享受绝对的宁静，在水疗中心放松后，在橡木装饰的餐厅里品尝黑森州时令佳肴。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`实用便捷`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近的现代商务酒店，交通便利，性价比高，适合自驾或需要频繁往返法兰克福的旅客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和重要的文化节期间（如“韦茨拉尔节”），老城内的特色住宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在老城，请做好房间可能较小、隔音一般且无法停车的心理准备，但这正是沉浸式体验的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多家庭旅馆的早餐异常丰盛，是体验当地腌肉、奶酪和手工果酱的绝佳机会，不要错过。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦茨拉尔好些日子了，我发现自己最常回味的，不是某个具体的建筑或展品，而是一种感觉。一种走在光滑鹅卵石上，突然在某个寂静的巷口，同时听见远处隐约的现代交通声与近处几百年前木头发出的细微收缩声的感觉。这座城像一个精密的双面绣，一面是用热情与绝望绣出的浪漫诗篇，另一面是用冷静与执着绣出的工程蓝图。它告诉我们，深情与理性，怀旧与创新，从来不是非此即彼的选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求单一标签、快节奏的世界里，韦茨拉尔的存在是一种温柔的提醒。它证明了一个地方可以拥有复杂而协调的灵魂，一个人也可以同时拥抱感性的冲动和理性的创造。在这里，你既能找到那个渴望不朽爱情、内心柔软的“少年维特”，也能找到那个专注打磨镜头、追求极致精确的“工匠自我”。这趟旅程，因此变成了一次与自我多重可能性的对话。所以，如果你也厌倦了浮光掠影，渴望一场能同时触动心灵与智识的旅行，请一定来韦茨拉尔住上几天。让它用木筋屋的阴影和徕卡镜头的光学，为你讲述一个关于“完整”而非“片面”的、深邃的欧洲故事。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lindau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burg-eltz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃尔茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Eltz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔主教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Cathedral</p>
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
