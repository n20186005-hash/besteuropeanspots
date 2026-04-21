import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维米奥苏 Vimioso｜探秘葡萄牙边境失落的中世纪城堡与米兰德斯牧羊文化 - 最佳欧洲景点',
  description: '车子驶离主干道，拐进通往维米奥苏的乡间小路时，世界仿佛瞬间被调了速。窗外不再是整齐的葡萄园，而是大片赭石色与墨绿色交织的荒地，零星点缀着倔强的橄榄树和栓皮栎。空气中弥漫着干草、尘土和远处牲畜栏混合的、属于边境的粗粝气味。然后，它就在地平线上出现了——不是想象中童话般的尖塔，而是一堆巨大的、沉默的、黄',
}

export default function VimiosoPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '维米奥苏（布拉干萨区）', href: '/destinations/europe' },
            { label: '维米奥苏', href: '/attractions/vimioso-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维米奥苏・Vimioso・葡萄牙・维米奥苏（布拉干萨区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离主干道，拐进通往维米奥苏的乡间小路时，世界仿佛瞬间被调了速。窗外不再是整齐的葡萄园，而是大片赭石色与墨绿色交织的荒地，零星点缀着倔强的橄榄树和栓皮栎。空气中弥漫着干草、尘土和远处牲畜栏混合的、属于边境的粗粝气味。然后，它就在地平线上出现了——不是想象中童话般的尖塔，而是一堆巨大的、沉默的、黄褐色石块，像一头疲惫巨兽的骨骸，匍匐在隆起的山丘上。那就是维米奥苏城堡，你的第一眼感觉不是震撼，而是一种沉甸甸的荒凉与宁静。
停好车，顺着缓坡向上走。脚下是滚烫的碎石和顽强从缝隙里钻出的野草。风毫无遮挡地吹过，带着哨音，卷起尘土，让你真切地感受到这里是海拔近八百米的高原边缘。走进废墟内部，阳光毫无保留地倾泻下来，在残垣断壁上切割出锐利的光影。你触摸那些石块，能感受到数百年烈日与寒风的打磨，光滑与粗糙并存。这里没有游客的喧哗，只有风声、远处几声寥落的羊铃，或许还有一两个本地老人坐在阴影里，用你完全听不懂的、柔软而古老的语言低声交谈。那就是米兰德斯语，不是葡萄牙语的方言，而是一门源自古老莱昂语系的独立语言，是这片土地的活灵魂。
城堡脚下，小镇的红色瓦顶建筑懒散地铺开。生活的节奏慢得惊人。下午三点，主街上可能空无一人，大家都在午休。但清晨或黄昏，你会看到穿着旧夹克、手持弯曲牧杖的老人赶着羊群穿过镇边的小道，羊脖子上的铃铛发出沉闷而有节奏的叮当声。咖啡馆里，人们喝的与其说是咖啡，不如说是漫长闲聊的借口。维米奥苏的核心魅力，不在于一座辉煌的建筑，而在于一种濒临消失的生活方式在这里得以喘息。它是一座建筑的废墟，却是一种文化的堡垒。你来这里，不是为了看某个完美的景点，而是为了感受时间在这里沉淀出的另一种质地——粗糙、真实、固执地美丽着。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离主干道，拐进通往维米奥苏的乡间小路时，世界仿佛瞬间被调了速。窗外不再是整齐的葡萄园，而是大片赭石色与墨绿色交织的荒地，零星点缀着倔强的橄榄树和栓皮栎。空气中弥漫着干草、尘土和远处牲畜栏混合的、属于边境的粗粝气味。然后，它就在地平线上出现了——不是想象中童话般的尖塔，而是一堆巨大的、沉默的、黄褐色石块，像一头疲惫巨兽的骨骸，匍匐在隆起的山丘上。那就是维米奥苏城堡，你的第一眼感觉不是震撼，而是一种沉甸甸的荒凉与宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，顺着缓坡向上走。脚下是滚烫的碎石和顽强从缝隙里钻出的野草。风毫无遮挡地吹过，带着哨音，卷起尘土，让你真切地感受到这里是海拔近八百米的高原边缘。走进废墟内部，阳光毫无保留地倾泻下来，在残垣断壁上切割出锐利的光影。你触摸那些石块，能感受到数百年烈日与寒风的打磨，光滑与粗糙并存。这里没有游客的喧哗，只有风声、远处几声寥落的羊铃，或许还有一两个本地老人坐在阴影里，用你完全听不懂的、柔软而古老的语言低声交谈。那就是米兰德斯语，不是葡萄牙语的方言，而是一门源自古老莱昂语系的独立语言，是这片土地的活灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡脚下，小镇的红色瓦顶建筑懒散地铺开。生活的节奏慢得惊人。下午三点，主街上可能空无一人，大家都在午休。但清晨或黄昏，你会看到穿着旧夹克、手持弯曲牧杖的老人赶着羊群穿过镇边的小道，羊脖子上的铃铛发出沉闷而有节奏的叮当声。咖啡馆里，人们喝的与其说是咖啡，不如说是漫长闲聊的借口。维米奥苏的核心魅力，不在于一座辉煌的建筑，而在于一种濒临消失的生活方式在这里得以喘息。它是一座建筑的废墟，却是一种文化的堡垒。你来这里，不是为了看某个完美的景点，而是为了感受时间在这里沉淀出的另一种质地——粗糙、真实、固执地美丽着。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维米奥苏`} />
                <InfoRow label="英文名称" value={`Vimioso`} />
                <InfoRow label="正式名称" value={`Vimioso`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`维米奥苏（布拉干萨区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座13世纪的边境城堡曾是葡萄牙对抗卡斯蒂利亚王国、捍卫东北领土完整的关键军事前哨。`} />
                <InfoRow label="建筑特色" value={`如今是一座充满沧桑感的庞大废墟，仅存部分城墙、塔楼基座和一座修复后的主塔（Torre de Menagem），与周边粗犷的橄榄园和牧场融为一体。`} />
                <InfoRow label="建筑风格" value={`典型的葡萄牙中世纪军事建筑风格，兼具罗马式建筑的厚重与哥特式后期为适应火炮出现的防御改进雏形。`} />
                <InfoRow label="文化价值" value={`是活态文化遗产“米兰德斯语言与文化区”（Tierra de Miranda）的核心重镇，保存着欧洲极少数被官方承认的地方语言之一——米兰德斯语，以及与之共生的古老牧羊传统。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡遗址及周边公共区域全天24小时开放。镇上的米兰德斯文化解说中心（Centro de Interpretação da Cultura Mirandesa）开放时间为周二至周日上午10点至下午1点，下午2点至6点；周一及公共节假日闭馆。冬季（11月至2月）部分设施开放时间可能缩短，建议行前在镇议会官网查询。`} />
              <InfoRow label="门票价格" value={`进入维米奥苏镇及城堡遗址本身完全免费。米兰德斯文化解说中心门票约为2欧元，学生及65岁以上长者半价，12岁以下儿童免费。镇上偶尔组织的牧羊文化导览或传统工作坊需额外付费，约5-10欧元，具体视活动而定。`} />
              <InfoRow label="地址" value={`Castelo de Vimioso, 5230-311 Vimioso, Portugal`} />
              <InfoRow label="交通方式" value={`维米奥苏位置偏远，公共交通不便，强烈建议自驾。从波尔图（Porto）国际机场出发，沿A4高速公路向东，转入IP2国道向北，车程约2.5小时。从布拉干萨（Bragança）市出发，沿N218公路向西南行驶，车程约40分钟。若选择公共交通，可从波尔图Campanhã火车站乘坐区域性火车至波科-德莫尔加多（Pocinho，约2.5小时），然后换乘每天仅有2-3班的区域巴士前往维米奥苏（约1小时），全程耗时且班次衔接不稳定，务必提前在葡萄牙铁路（CP）和地区巴士公司网站查好时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维米奥苏的故事，始于地图上一条看不见的线。公元13世纪，葡萄牙王国正在努力向东扩张，巩固疆域，而与西侧的卡斯蒂利亚王国（今西班牙主体）的边境争端，是贯穿整个中世纪的主旋律。1230年左右，国王桑乔二世决定在这片战略高地上建立一座坚固的城堡，它的使命从一开始就无比清晰：镇守边境，瞭望敌情，保护后方新开拓的领土和往来商旅。最初的城堡很可能是一座相对简单的木质防御工事，但在迪尼斯一世国王统治时期（1279-1325年），这位以大兴土木巩固国防著称的“农夫国王”，下令用坚固的花岗岩重建了维米奥苏城堡，赋予了它今天我们所能看到的石头身躯的雏形。它成为了连接布拉干萨、米兰达等更大边境要塞的重要节点，城堡的卫戍官手握重权，是国王在边疆的耳目与利剑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的几个世纪，维米奥苏见证了无数次边境摩擦和小规模冲突。城墙上的烽火台不知点燃过多少次，召集农民兵拿起武器。生活在这里的人们，在葡萄园与麦田之外，还必须学会时刻警惕。正是这种长期的军事化和相对隔离的状态，意外地孕育和保存了独特的文化。来自莱昂地区的早期定居者带来的语言，在与世隔绝的社区中代代相传，逐渐演变成独特的米兰德斯语。牧羊成为最重要的生计，因为羊群可以在冲突发生时快速转移，而广袤贫瘠的高原也正适合放牧。城堡不仅是军事堡垒，也逐渐成为这个语言与文化共同体的精神象征。然而，随着1494年《托尔德西里亚斯条约》的签订和后续边境协议的明确，葡萄牙与西班牙的边界大体稳定，维米奥苏的军事重要性开始缓慢但不可逆转地下降。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争的阴云并未彻底远离。17世纪葡萄牙恢复独立战争期间，以及后来的七年战争、半岛战争，这座边境城堡再次被卷入战火。尤其是1807-1814年的半岛战争，拿破仑的军队曾一度占领这一区域，城堡很可能遭受了炮击和破坏，加速了它的衰败。19世纪初期，随着现代国家边界的确立和军事技术的革新，中世纪城堡彻底失去了战略价值。它被遗弃了，石头被当地人悄悄拆去建造房屋或羊圈，风雨无情地侵蚀着剩下的部分。维米奥苏似乎要和他古老的城堡一样，慢慢被时代遗忘，沉入历史的尘埃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但文化的生命力有时比石头更顽强。20世纪末，随着欧洲一体化进程和对少数族裔文化保护的日益重视，奇迹发生了。1999年，葡萄牙议会正式承认米兰德斯语为第二官方语言，拥有受保护的地位。这门曾被嘲笑为“乡下土话”的语言，终于登堂入室，进入了学校教育和官方文件。维米奥苏，作为米兰德斯文化的核心区，突然被推到了文化复兴的前沿。城堡的废墟不再仅仅代表衰落，更象征着一种文化的坚韧与幸存。主塔得到了谨慎的加固，不是为了恢复原貌，而是为了留住记忆。今天，当你站在废墟上，眺望边境两侧如今已和平相连的土地，你看到的是一部生动的边疆史：它始于剑与盾的碰撞，却在羊铃与古老诗篇的吟唱中，找到了自己永恒的归宿。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受维米奥苏的灵魂，请务必安排一整天时间，并做好“慢下来”的心理准备。建议清晨八点左右抵达，这时柔和的阳光最适合拍摄城堡废墟的沧桑质感，小镇也刚刚苏醒，你能看到最本真的日常生活场景。整个游览节奏应松散而沉浸，上午专注于城堡遗址和古镇街巷的探索，中午享用一顿漫长的当地午餐，下午深度体验牧羊文化和米兰德斯语的独特世界，傍晚时分再次返回城堡，在落日余晖中与这片土地告别。这样的安排避开了理论上并不存在的“人流高峰”，让你有充足的时间与本地人进行目光交流甚至简短攀谈，也让你的感官能充分吸收这里的光、风、气味和声音，完成一次深度的时空穿梭。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇服务中心和餐馆在下午两点至五点间很可能关门午休，务必提前安排好午餐或自备零食饮水。这里的居民内向但友善，拍照前尤其是拍摄人物时，请务必先用眼神或手势征得同意，一个微笑是最好的通行证。春秋季早晚温差极大，且废墟上风大，务必采用洋葱式穿衣法，准备一件防风外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从城堡东侧被野花覆盖的斜坡开始攀登，让第一缕阳光将你和古老城墙的漫长影子一起投在草地上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用手掌贴在那座修复后的主塔冰冷而粗糙的石面上，想象七百年前卫兵在此眺望边境烽火时心跳的节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着蜿蜒而下的小径走入老镇中心，在唯一的主街上用步伐丈量宁静，留意门楣上可能刻着的米兰德斯语词汇或古老符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家家庭式咖啡馆坐下，点一杯“café”并尝试用简单的葡萄牙语（或微笑）与店主交流，听听周围老人们用音乐般的米兰德斯语闲聊的韵律。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`驱车或步行前往镇外两三公里的传统牧场（Quinta），如果运气好，能看到牧羊人正在用传承数个世纪的方式管理羊群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访米兰德斯文化解说中心，花一小时聆听那些用古老语言吟唱的民歌录音，看那些描绘牧羊生活的朴素展品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏前重返城堡废墟，找一处朝西的断墙坐下，看着如燃烧的炭火般的落日缓缓沉入西班牙方向的远山与牧野之中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡废墟西南侧仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在城墙外较低的牧场上，用广角镜头将苍凉的城堡废墟、孤零零的主塔与漫天绚烂的晚霞一同纳入画面，塑造史诗般的孤寂感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光垂直照射时，站在主塔内部残存的拱门下，向外拍摄框架内的小镇红色屋顶和远方的原野，强烈的明暗对比能突出历史的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老镇街道纵深捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`清晨九点前后，阳光斜射入狭窄的主街，站在街道一端，利用两侧古朴的石屋引导视线，捕捉一位当地老人蹒跚行走或羊群穿街而过的瞬间，画面充满生活故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`牧场牧羊人工作场景`}</h4>
                  <p className="text-sm text-gray-700">{`下午牧羊人工作时，保持尊重距离，用长焦镜头捕捉牧羊人与羊群互动、牧羊犬飞奔的动感瞬间，背景是辽阔的高原和城堡远景，展现文化与自然的共生。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`米兰德斯语标识特写`}</h4>
                  <p className="text-sm text-gray-700">{`寻找镇上手工店、面包房或古老门牌上的米兰德斯语双文标识，在柔和侧光下拍摄特写，将这种古老文字的独特字形与斑驳的载体一同记录。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里的“风景”包含大量动态的人文元素，耐心等待往往比刻意摆拍能得到更动人的画面。无人机飞行在当地并无特殊禁令，但鉴于空旷多风的环境和尊重居民隐私的考虑，起飞前请务必谨慎评估，并绝对避免在牧场和羊群上空飞行，以免引起不必要的麻烦。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村民宿体验`}</h4>
                  <p className="text-sm text-blue-800">{`选择镇子周边由世代务农家庭经营的“Turismo Rural”农庄民宿，睡在厚实的羊毛毯下，清晨在公鸡啼鸣和新鲜羊奶的香气中醒来，主人或许会邀请你共进家庭晚餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心公寓`}</h4>
                  <p className="text-sm text-green-800">{`租住老镇中心一栋石砌老宅楼上的自助式公寓，木头地板吱呀作响，从狭长的窗口望出去就是城堡山，让你完全融入古镇缓慢的昼夜节律。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`荒野设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇二十分钟车程、藏身于自然保护区边缘的现代设计酒店，用巨大的玻璃窗将荒野景观引入室内，在极简舒适中反思白天所见的粗粝与古老，体验强烈的时空碰撞。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布拉干萨城区酒店`}</h4>
                  <p className="text-sm text-purple-800">{`若对住宿便利性要求更高，可入住附近中心城市布拉干萨的历史酒店，以这里为放射状探索基地，将维米奥苏作为当日深度往返的一站，享受夜晚更多的餐饮选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维米奥苏本地住宿选择极其有限且设施质朴，夏季和传统节日期间需很早预订。如果选择住在布拉干萨，虽然牺牲了沉浸感，但能确保住宿舒适度，并可将该区域其他中世纪村落（如马塞达、米兰达）串联游览，更适合时间有限的旅人。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开维米奥苏许久，那片荒原上的风声和羊铃的叮当，还会不时在脑海里回响。它没有给你任何可以炫耀的精致明信片画面，却给了你一种沉静而坚实的力量。在这个追求高效、光滑、同质化的世界里，维米奥苏像一个固执的“错误”，它残破、缓慢、说着外人听不懂的话，遵循着太阳和季节的古老指令。但正是这种“错误”，提醒着我们世界本该有的丰富样貌。这座城堡的石头会继续风化，但它所守护的语言、歌声和与土地相连的生活方式，却因为人们的珍视而获得了新的生命力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，你来维米奥苏，不是为了消费一个景点，而是为了见证一种“存活”。它告诉你，边境不仅是划分领土的线，也可以是文化沉淀最深厚的褶皱；废墟不仅是终结的象征，也可以是某种开始的基石。在这里，你会放下相机，更多地使用眼睛去凝视，用耳朵去倾听，用皮肤去感受风的温度。你会重新思考“旅行”的意义——或许最美的风景，不是那些被完美修复的宫殿，而是一块有故事的残垣，一句古老的语言，一个牧羊人望向山丘的沉默背影。维米奥苏是一片需要用心而非仅用脚丈量的土地，它值得每一位厌倦了浅尝辄止、渴望触碰欧洲古老而真实脉动的旅人，前来进行一场安静而深刻的对话。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/evora-bone-chapel-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃武拉人骨教堂与古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Evora Bone Chapel and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vinhais-portugal-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尼亚什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vinhais</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
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
