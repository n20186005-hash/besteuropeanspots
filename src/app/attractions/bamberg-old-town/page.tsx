import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班贝格老城 Bamberg Old Town｜千年水城，未被战火触及的中世纪梦 - 最佳欧洲景点',
  description: '第一次走进班贝格老城，你不是在“参观”一个景点，而是不小心掉进了一本立体、会呼吸的中世纪故事书。脚下的碎石路被千年的脚步磨得温润发亮，七扭八拐的巷子像迷宫，空气里有种潮湿的、混合着雷格尼茨河的水汽、老房子木头梁柱的淡淡霉味，以及从某扇半掩门后飘出来的、新鲜出炉的“法兰克尼亚”面包的焦香。阳光在色彩斑...',
}

export default function BambergOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '班贝格老城', href: '/attractions/bamberg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`班贝格老城・Bamberg Old Town・德国・班贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次走进班贝格老城，你不是在“参观”一个景点，而是不小心掉进了一本立体、会呼吸的中世纪故事书。脚下的碎石路被千年的脚步磨得温润发亮，七扭八拐的巷子像迷宫，空气里有种潮湿的、混合着雷格尼茨河的水汽、老房子木头梁柱的淡淡霉味，以及从某扇半掩门后飘出来的、新鲜出炉的“法兰克尼亚”面包的焦香。阳光在色彩斑驳的山墙和凸窗上切割出明暗，你的耳朵会被教堂整点的浑厚钟声充满，那声音回荡在狭窄的街巷里，久久不散，仿佛在不断地提醒你时间的厚重。
这座城市最不可思议的地方在于，它不是冷冰冰的博物馆。那些有着几百年历史、外墙画着精美壁画的房子里，住着活生生的人。你会在挂着铸铁招牌的肉铺前看到主妇们聊天，在古老的“酒窖”餐馆里听到当地人用浓重的方言碰杯，而学生们则背着书包，嬉笑着跑过那座传奇的“老市政厅”桥。河水是这座城的灵魂，它不疾不徐地流过，将城市分割又连接。坐在“小威尼斯”的河边长椅上，看那些被鲜花装点的渔夫小屋倒映在粼粼波光中，你会觉得时间在这里不是向前奔流，而是优雅地打了个旋儿，然后静静地沉淀下来。
最打动我的，是一种近乎奢侈的“完整感”。因为幸运地躲过了二战的轰炸，班贝格的建筑、街道、乃至整个城市的气韵，都没有被粗暴地打断。从11世纪皇帝主教建立的宏伟教堂，到17、18世纪富裕市民修建的巴洛克豪宅，再到河边质朴的作坊，所有时代的层累都清晰可见，却又无比和谐。你不需要费力想象它过去的样子，因为它现在的样子，就是历史本身。这种跨越时空的连续感，让每一次转角都充满惊喜，也让你的心，不由自主地慢下来，变得柔软而敏锐。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次走进班贝格老城，你不是在“参观”一个景点，而是不小心掉进了一本立体、会呼吸的中世纪故事书。脚下的碎石路被千年的脚步磨得温润发亮，七扭八拐的巷子像迷宫，空气里有种潮湿的、混合着雷格尼茨河的水汽、老房子木头梁柱的淡淡霉味，以及从某扇半掩门后飘出来的、新鲜出炉的“法兰克尼亚”面包的焦香。阳光在色彩斑驳的山墙和凸窗上切割出明暗，你的耳朵会被教堂整点的浑厚钟声充满，那声音回荡在狭窄的街巷里，久久不散，仿佛在不断地提醒你时间的厚重。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市最不可思议的地方在于，它不是冷冰冰的博物馆。那些有着几百年历史、外墙画着精美壁画的房子里，住着活生生的人。你会在挂着铸铁招牌的肉铺前看到主妇们聊天，在古老的“酒窖”餐馆里听到当地人用浓重的方言碰杯，而学生们则背着书包，嬉笑着跑过那座传奇的“老市政厅”桥。河水是这座城的灵魂，它不疾不徐地流过，将城市分割又连接。坐在“小威尼斯”的河边长椅上，看那些被鲜花装点的渔夫小屋倒映在粼粼波光中，你会觉得时间在这里不是向前奔流，而是优雅地打了个旋儿，然后静静地沉淀下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是一种近乎奢侈的“完整感”。因为幸运地躲过了二战的轰炸，班贝格的建筑、街道、乃至整个城市的气韵，都没有被粗暴地打断。从11世纪皇帝主教建立的宏伟教堂，到17、18世纪富裕市民修建的巴洛克豪宅，再到河边质朴的作坊，所有时代的层累都清晰可见，却又无比和谐。你不需要费力想象它过去的样子，因为它现在的样子，就是历史本身。这种跨越时空的连续感，让每一次转角都充满惊喜，也让你的心，不由自主地慢下来，变得柔软而敏锐。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`班贝格老城`} />
                <InfoRow label="英文名称" value={`Bamberg Old Town`} />
                <InfoRow label="正式名称" value={`Bamberg Old Town`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`班贝格`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在“七丘”之上建立、完整保留了中世纪至巴洛克时期城市肌理，并在二战中奇迹般幸存的“弗兰肯罗马”。`} />
                <InfoRow label="建筑特色" value={`雷格尼茨河穿城而过，建筑依水而建，标志性的老市政厅如同“漂浮”在河心岛屿之上，构成了童话般的城市画卷。`} />
                <InfoRow label="建筑风格" value={`以罗马式和哥特式宗教建筑为基石，混搭着大量精美的市民建筑与文艺复兴、巴洛克风格的华丽宫殿，风格和谐交融。`} />
                <InfoRow label="文化价值" value={`不仅是建筑艺术的露天博物馆，更是活着的文化遗产，以其独特的烟熏啤酒文化和深厚的主教传统，持续塑造着本地人的生活方式。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区为开放区域，全天可自由漫步。内部主要景点如班贝格大教堂、新宫殿、历史博物馆等开放时间一般为周二至周日 10:00-17:00，部分景点周一闭馆。具体开放时间随季节（冬季可能缩短）及节假日（如圣诞节、元旦）调整，建议出行前在官网核实。`} />
              <InfoRow label="门票价格" value={`进入老城区免费。参观单个主要景点门票约5-8欧元。强烈推荐购买“班贝格卡”（Bamberg Card），价格约15欧元，有效期内可无限次乘坐市内公共交通并免费进入几乎所有博物馆和景点，性价比极高。`} />
              <InfoRow label="地址" value={`Bamberg Old Town, 96047 Bamberg, Germany`} />
              <InfoRow label="交通方式" value={`从最近的纽伦堡机场出发，乘坐机场巴士（约20分钟一班，车程15分钟）抵达纽伦堡中央火车站。转乘区域火车（RE或RB列车，班次频繁，约每半小时一班），约40-50分钟即可直达班贝格中央火车站。从火车站出来，步行约15-20分钟即可踏入老城核心区，或者乘坐市内公交车（901/910/931等多条线路）在“ZOB”或“Rathaus”站下车，即刻开始旅程。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`班贝格的故事，始于一位皇帝的雄心与一个主教的奇迹。公元1007年，神圣罗马帝国皇帝海因里希二世，也就是亨利二世，做了一个影响深远的决定。他与妻子库妮贡德没有子嗣，于是决定将他们巨大的财富和权力用于侍奉上帝。他们选中了雷格尼茨河畔的这片丘陵地带，决心建立一座新的主教城，作为帝国的权力中心和精神堡垒，并希望这里成为“第二个罗马”。海因里希二世亲自奠基了宏伟的班贝格大教堂，这座城市从诞生之初就带着帝国的荣光与宗教的神圣，这在德国城市中是极为罕见的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的辉煌随着海因里希二世夫妇的去世而短暂黯淡，但命运很快又为班贝格送来了另一位巨人。13世纪初，一位名叫埃克哈特的修士来到了这里，他后来被封为圣徒，并留下了大量神秘主义著作，让班贝格一度成为德语世界神秘思想的中心。更重要的是，从13世纪到18世纪，班贝格的主教们不仅是精神领袖，更是世俗的统治者。他们大兴土木，将罗马式的严谨逐步发展为哥特式的空灵，大教堂在一次次火灾与重建中，最终拥有了那四座标志性的高塔，以及那座举世闻名的“班贝格骑士”雕塑——一个充满人性困惑与神性追寻的完美形象，至今无人确知其真实含义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`宗教改革和随后的三十年战争，给这座天主教主教城带来了巨大冲击。城市被占领，建筑遭破坏，但坚韧的班贝格人挺了过来。战后的17、18世纪，迎来了一个建筑与艺术的“巴洛克狂欢”。手握大权的主教们聘请顶尖的建筑师和艺术家，建造了华丽的新宫殿、宏伟的圣米迦勒修道院，以及无数市民住宅。这个时期，城市超越了单纯的神权色彩，富裕的商人、酿酒师和行会成员也纷纷修建起精美的房屋，形成了今天我们看到的、那种庄严与世俗生活美妙交织的城市面貌。你看到的那些粉刷成黄色、粉色、绿色的立面，那些繁复的灰泥装饰，都是那个自信时代的产物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正让班贝格的血肉丰满起来的，是它的“液体面包”——烟熏啤酒。早在中世纪，修道院就获得了酿酒特权。由于没有空调，当时的酿酒师为了保存啤酒，意外发明了用山毛榉木烟熏麦芽的方法，从而酿制出了独一无二、带有熏肉般深邃风味的“班贝格烟熏啤酒”。这项技艺被一代代酿酒师传承下来，深深融入了城市的DNA。老城里散布着九家传统酿酒厂和无数家啤酒酒馆，本地人下班后去“喝一杯”的日常，和几百年前他们的祖先并无二致。这种舌尖上的传统，让历史不再是书本上的记载，而是一种可被品尝、可被分享的活生生的温暖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最后，不能不提的是班贝格在20世纪那不可思议的运气。二战期间，作为重要的交通枢纽和工业城市，它本应是轰炸的重点目标。然而，由于一位美国艺术史教授在轰炸目标清单上认出了它，并极力陈述其无与伦比的文化价值，盟军的轰炸机奇迹般地绕开了这座古城中心。当周围的许多德国城市化为废墟时，班贝格却毫发无损地进入了新时代。今天，当我们漫步在这完好的街巷中，所感受到的这份穿越千年的宁静与完整，是对历史偶然性的深深敬畏，也是对人类文化遗产得以幸存的一份珍贵礼物。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味班贝格，请务必留出完整的一天。建议在早晨九点前抵达，这时旅游团大军还未涌入，晨光柔和，是感受老城苏醒氛围的黄金时间。整体游览节奏宜慢不宜快，以“大教堂山”区域为起点，逐步向河岸及“小威尼斯”区域扩散，最后在傍晚时分回到河边，欣赏日落与华灯初上的景色。这样的安排符合地理走势，也暗合了从神圣到世俗、从历史到生活的体验脉络。全程步行即可，但需要一双舒适的鞋子，因为街道多是鹅卵石铺就，且有缓坡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是游客高峰期，老市政厅桥和主要小巷会非常拥挤，尽量错开。
许多小博物馆和教堂内部禁止使用闪光灯，且需要保持安静，请务必遵守。
鹅卵石路面湿滑，且上下坡多，务必穿防滑舒适的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宏伟的大教堂广场开始你的朝圣，仰视那四座刺破天空的灰色塔楼，并进入内部寻找那尊神秘而忧郁的“班贝格骑士”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着斜坡走下，你会看到那座仿佛漂浮在雷格尼茨河中的童话建筑——老市政厅，一定要走过上桥和下桥，从各个角度欣赏它画满错觉壁画的立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过市政厅桥，立刻钻进狭窄的“烤肉叉巷”，在弥漫着烟熏香气的“老啤酒店”里，点一杯深琥珀色的烟熏啤酒，像当地人一样站在木桌旁豪饮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河岸漫步至“小威尼斯”区，看彩色的小屋、停泊的小船和悠闲的天鹅，感受水城最温柔静谧的一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上半山腰的圣米迦勒修道院花园，在玫瑰与香草的气息中俯瞰整个老城的红色屋顶与蜿蜒河流，这是最经典的明信片视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访新宫殿及其背后的玫瑰园，在巴洛克式的对称与华丽中，想象昔日主教贵族们在此散步赏景的悠闲生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，随意找一家河边的传统餐馆，在烛光下享用一顿弗兰肯风味猪肘大餐，耳边是流水的潺潺声与人们的欢声笑语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕降临后，再次漫步到老市政厅附近，看灯光为古老的建筑披上金纱，倒映在黑色的河水中，仿佛一场永不结束的梦境。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老市政厅下桥的东侧`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前一个小时，利用河面的倒影拍摄市政厅全景，构图时将桥拱也纳入画面，形成完美的对称与框架。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣米迦勒修道院平台`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但下午光线最佳，使用广角镜头捕捉老城的全景，将蜿蜒的河流、密集的红屋顶与大教堂的塔楼一同收进画框。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大教堂内部中殿后方`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光充足的上午，站在中殿后方向前拍，可以捕捉到阳光透过高高的彩色玻璃窗，在古老的石柱和地板上投下梦幻光束的神圣时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“烤肉叉巷”入口仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光能照亮狭窄巷子的上半部分，仰拍老市政厅巨大的木桁架底部和古老的巷子招牌，能获得极具压缩感和故事感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小威尼斯河北岸长椅处`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，面对南岸的彩色渔夫小屋，等待灯光亮起，用长曝光拍摄水面平静的倒影与温暖的灯光，营造静谧浪漫的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`弗兰肯尼亚地区多云天气常见，这种柔和的散射光其实是拍摄建筑细节和街景的绝佳条件，不要因为阴天而沮丧。`}</li>
                <li>• {`河面反射的光线很强，拍摄倒影时建议使用偏振镜来消除反光，让水下的石块和倒影更清晰。`}</li>
                <li>• {`尊重当地居民隐私，拍摄“小威尼斯”民居时请勿对准窗户或私人庭院内部。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋16世纪木桁架建筑改造的精品酒店里，夜晚当游客散去，你推开吱呀作响的窗户，楼下石板路上回荡的只有你自己的脚步声和远处的教堂钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河景浪漫`}</h4>
                  <p className="text-sm text-green-800">{`选择雷格尼茨河畔拥有数百年历史的酒店，房间带有临河的小阳台，早晨在潺潺水声与天鹅的叫声中醒来，对着如画风景享用一杯鲜榨果汁。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温情`}</h4>
                  <p className="text-sm text-yellow-800">{`入住由本地家庭经营的传统客栈，主人会热情地为你介绍只有本地人才知道的啤酒馆和徒步小径，早餐品尝自家制作的果酱和法兰克尼亚白香肠。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华隐居`}</h4>
                  <p className="text-sm text-purple-800">{`下榻位于城市边缘山丘上的五星级度假酒店，这里由一座古典庄园改建，拥有无边泳池和全景露台，可将整个班贝格老城作为你房间的壮丽壁画。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店多为历史建筑，可能没有电梯，房间面积也相对较小，但历史氛围无与伦比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季、圣诞市场期间）住宿非常紧俏，价格也水涨船高，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在老城内虽然方便，但周末夜晚临街的房间可能能听到酒馆传来的细微喧闹声，浅眠者可以选择靠庭院或河岸一侧的房间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开班贝格好多天了，但我的感官记忆里，依然封存着那座城市特有的气味与声音。那不只是旅游手册上冰冷的“世界遗产”标签，而是一种整体的、弥漫在空气中的“场”。在这里，历史不是被锁在玻璃柜后的展品，而是你每天走过的桥，喝下的啤酒，听到的钟声，和擦肩而过的、那些在百年老屋里过着平常日子的居民。它让你相信，人类文明的延续，除了轰轰烈烈的变革，更有这种细水长流的、在日常中坚守的韧性。班贝格的存在，本身就是一个温柔的奇迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快、新、变的时代，班贝格固执地、优雅地慢着，旧着。它像一个时间琥珀，完好地保存了从罗马帝国到啤酒馆闲聊的千年层积。它告诉我们，真正的深度，不在于去了多少地方，而在于你是否允许自己在一个地方彻底沉静下来，用所有的感官去触摸时间的纹理。对于每一位厌倦了浮光掠影、渴望在旅途中与历史和自我对话的旅人来说，班贝格老城都不只是一个目的地，它是一剂良药，一场沉浸式的疗愈，一个让你重新学会“感受”而非仅仅“观看”的地方。它值得你专程前往，并为之停留，因为在这里，你会找到那份在别处早已遗失的、关于“完整”与“延续”的深深感动。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/meissen-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈森大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meissen Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/xanten-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑滕古罗马考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanten Archaeological Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/reichsburg-cochem" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科赫姆帝国城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cochem Castle</p>
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
