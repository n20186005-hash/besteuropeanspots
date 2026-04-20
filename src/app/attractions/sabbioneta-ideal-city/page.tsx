import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨比奥内塔 Sabbioneta｜文艺复兴的纸上城邦走入现实 - 最佳欧洲景点',
  description: '穿过那道厚重的城门，就像穿过了一个时间的虫洞。外头是意大利北部伦巴第平原上那种懒洋洋的、被阳光晒得发白的乡村风景，而门内，瞬间，一切都不同了。光线似乎被规整过，笔直地洒在同样笔直的街道上，切割出棱角分明的阴影。空气里有种奇特的寂静，不是荒凉，而是一种精心安排后的肃穆，混合着古老石头被晒暖后散发出的干...',
}

export default function SabbionetaIdealCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '萨比奥内塔', href: '/attractions/sabbioneta-ideal-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨比奥内塔・Sabbioneta・意大利・萨比奥内塔（位于曼图亚省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过那道厚重的城门，就像穿过了一个时间的虫洞。外头是意大利北部伦巴第平原上那种懒洋洋的、被阳光晒得发白的乡村风景，而门内，瞬间，一切都不同了。光线似乎被规整过，笔直地洒在同样笔直的街道上，切割出棱角分明的阴影。空气里有种奇特的寂静，不是荒凉，而是一种精心安排后的肃穆，混合着古老石头被晒暖后散发出的干燥气味，以及偶尔从某扇百叶窗后飘出的、若有若无的咖啡香。你站在主广场——兵器广场上，会感到一阵轻微的眩晕。不是因为拥挤，恰恰相反，是因为空旷。广场如此完美，六角形的布局，四周环绕着比例精准的柱廊和宫殿，地面是浅色的石块，一切都对称得令人难以置信。几个老人坐在长椅上，看着报纸，他们的存在让这座“舞台”有了呼吸，但你依然会觉得自己像个不小心闯入了某个戏剧布景的观众。
这里就是萨比奥内塔，一座从图纸上直接搬下来的城市。它的核心魅力，不在于某一件惊世骇俗的艺术品，而在于“整体”。这是文艺复兴时期一位公爵的疯狂梦想：建造一座完美的、属于他个人的乌托邦。走在它的街道上，你每一步踏出的，都是对“秩序”、“理性”和“美”的极端追求。街道相交永远是直角，视线总能无阻地通向某个纪念性建筑，每栋房子的高度和立面都经过精心设计，以确保整体的和谐。它不像那些自然生长了千百年的意大利老城那样杂乱、喧闹、充满生活的褶皱。这里的一切都熨帖平整，像一本刚刚装订好的精装书。
然而，正是这种完美，赋予它一种动人的、甚至略带忧伤的诗意。你会感觉到，那位建造者试图用石头和几何来凝固时间，创造永恒。但城市和人一样，需要混乱、需要意外、需要烟火气才能真正“活”过来。萨比奥内塔太完美了，完美得仿佛一直屏着呼吸。当下午的阳光把建筑的影子拉得老长，当广场上只剩下你自己的脚步声在回荡，你会清晰地听到这种“屏息”的声音。它是一座献给理想的纪念碑，也是一个关于理想与现实距离的、沉默的寓言。在这里，你能触摸到文艺复兴时期人类那份澎湃的自信——认为凭借理性和艺术，可以在地上建造天国。同时，你也能感受到这份雄心背后，那不可避免的、微妙的孤独。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道厚重的城门，就像穿过了一个时间的虫洞。外头是意大利北部伦巴第平原上那种懒洋洋的、被阳光晒得发白的乡村风景，而门内，瞬间，一切都不同了。光线似乎被规整过，笔直地洒在同样笔直的街道上，切割出棱角分明的阴影。空气里有种奇特的寂静，不是荒凉，而是一种精心安排后的肃穆，混合着古老石头被晒暖后散发出的干燥气味，以及偶尔从某扇百叶窗后飘出的、若有若无的咖啡香。你站在主广场——兵器广场上，会感到一阵轻微的眩晕。不是因为拥挤，恰恰相反，是因为空旷。广场如此完美，六角形的布局，四周环绕着比例精准的柱廊和宫殿，地面是浅色的石块，一切都对称得令人难以置信。几个老人坐在长椅上，看着报纸，他们的存在让这座“舞台”有了呼吸，但你依然会觉得自己像个不小心闯入了某个戏剧布景的观众。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里就是萨比奥内塔，一座从图纸上直接搬下来的城市。它的核心魅力，不在于某一件惊世骇俗的艺术品，而在于“整体”。这是文艺复兴时期一位公爵的疯狂梦想：建造一座完美的、属于他个人的乌托邦。走在它的街道上，你每一步踏出的，都是对“秩序”、“理性”和“美”的极端追求。街道相交永远是直角，视线总能无阻地通向某个纪念性建筑，每栋房子的高度和立面都经过精心设计，以确保整体的和谐。它不像那些自然生长了千百年的意大利老城那样杂乱、喧闹、充满生活的褶皱。这里的一切都熨帖平整，像一本刚刚装订好的精装书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，正是这种完美，赋予它一种动人的、甚至略带忧伤的诗意。你会感觉到，那位建造者试图用石头和几何来凝固时间，创造永恒。但城市和人一样，需要混乱、需要意外、需要烟火气才能真正“活”过来。萨比奥内塔太完美了，完美得仿佛一直屏着呼吸。当下午的阳光把建筑的影子拉得老长，当广场上只剩下你自己的脚步声在回荡，你会清晰地听到这种“屏息”的声音。它是一座献给理想的纪念碑，也是一个关于理想与现实距离的、沉默的寓言。在这里，你能触摸到文艺复兴时期人类那份澎湃的自信——认为凭借理性和艺术，可以在地上建造天国。同时，你也能感受到这份雄心背后，那不可避免的、微妙的孤独。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨比奥内塔`} />
                <InfoRow label="英文名称" value={`Sabbioneta`} />
                <InfoRow label="正式名称" value={`Sabbioneta`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`萨比奥内塔（位于曼图亚省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`文艺复兴时期第一座完全按照人文主义理想规划建造的“理想城市”，与曼图亚一同被列为联合国教科文组织世界遗产。`} />
                <InfoRow label="建筑特色" value={`严格遵循几何对称与透视法则的“星形堡垒”城镇布局，内部街道笔直相交，公共建筑宏伟而协调。`} />
                <InfoRow label="建筑风格" value={`纯粹的晚期文艺复兴风格（曼图亚学派），深受其建造者维琴佐·斯卡莫齐等建筑师的影响，风格统一而和谐。`} />
                <InfoRow label="文化价值" value={`作为活态的人文主义教科书，展现了将乌托邦理论变为现实的罕见案例，是建筑、城市规划和贵族权力表达的完美融合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要室内景点（公爵宫、画廊、剧院等）开放时间通常为周二至周日，上午9:30至下午1:00，下午2:30至6:00（夏季可能延长至7:00）。周一普遍闭馆，但节假日安排可能有变，冬季（11月至2月）部分景点开放时间会缩短。具体请务必在行前查询每个独立场馆的官方网站，因为管理方不同。`} />
              <InfoRow label="门票价格" value={`小镇无需门票进入。参观主要景点通常购买联票更划算：“萨比奥内塔全景点通票”约12欧元，有效期为一天，涵盖公爵宫、美术馆、古代剧场、教堂等。单馆票价约5-8欧元。26岁以下欧盟学生及18岁以下青少年有优惠，6岁以下儿童免费。每月第一个周日部分国立博物馆免费，但私人管理的景点可能不参与。`} />
              <InfoRow label="地址" value={`Piazza d‘Armi, 1, 46018 Sabbioneta MN, Italy`} />
              <InfoRow label="交通方式" value={`萨比奥内塔没有火车站。最近的主要交通枢纽是曼图亚（Mantova）和克雷莫纳（Cremona）。从米兰中央火车站乘坐区域火车到曼图亚（约2小时），或到克雷莫纳（约1.5小时）。从这两个城市出发，最方便的方式是乘坐当地巴士（APAM公司运营），但班次非常稀疏，通常一天只有几班，车程约1小时，务必提前查好时刻表。最推荐的方式是自驾，从曼图亚出发约40分钟车程，从克雷莫纳出发约30分钟。小镇外有免费停车场。若从博洛尼亚或维罗纳出发，自驾也均在1.5小时左右。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一个人讲起，他叫韦斯帕夏诺·贡扎加。不是那个大名鼎鼎的罗马皇帝，而是16世纪意大利北部一位没那么走运，却充满幻想的贵族领主。他出身于统治曼图亚的贡扎加家族，但属于旁支，分到的领地只有萨比奥内塔这片当时不起眼的边境土地。命运对他不算友好，幼年丧父，在宫廷阴谋中成长，身体也不算强健。但或许正是这种边缘的地位和敏感的天性，催生了他内心一个无比宏大的蓝图：既然我不能继承一个伟大的王国，那我就亲手创造一个。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1554年左右，韦斯帕夏诺开始将他脑海中盘旋已久的构想付诸实践。这并非一时兴起。他是一位典型的人文主义王子，精通古典文学、艺术、军事工程，还是古物收藏家。他深受当时流行的“理想城市”理论影响——那些由阿尔伯蒂、菲拉雷特等理论家提出的，融合了维特鲁威古典原则、透视法、防御需求和美学追求的乌托邦城市规划。他要建造的，不仅仅是一个加固的庄园，而是一件完整的艺术品，一个体现其智慧、权力与品味的“新城”。他聘请了当时顶尖的建筑师和工程师，包括后来以《理想城市》一书闻名的维琴佐·斯卡莫齐（尽管斯卡莫齐更多是总结和传播了这里的经验）。萨比奥内塔的规划核心是军事防御与美学展示的结合。星形的城墙和堡垒是为了抵御外敌（这片土地当时是战略要冲），而城内笔直的街道、中心广场、对称分布的公共建筑，则是为了展示一个开明、有序、文明的理想邦国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`韦斯帕夏诺将自己视为这座城市的“灵魂”与“导演”。他建造了宏伟的“公爵宫”（Palazzo Ducale），并非作为寻常住所，而是作为政府的象征和接待贵宾的殿堂，里面布满了寓意深刻的壁画，歌颂着他的美德与统治。他修建了“花园宫”（Palazzo del Giardino），那是他私人的享乐与沉思之所，内部的房间装饰极尽奢华与奇巧，其中著名的“地图大厅”绘满了当时已知的世界，展现了他放眼全球的胸怀。而最能体现他人文主义理想的，是那座令人叹为观止的“奥林匹克剧院”（Teatro all‘Antica）。这是意大利第一个专门为戏剧演出而建（非临时搭建）的室内剧院，也是欧洲最古老的封闭式剧院之一。它的设计完全模仿古罗马剧场，有固定的透视布景舞台和半圆形的阶梯座位。在这里，韦斯帕夏诺希望复兴古典戏剧，用艺术教化他的“理想公民”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的吊诡在于，这座为他理想中的“公民”建造的城市，却几乎没有真正的公民。萨比奥内塔的居民主要是他的廷臣、士兵、工匠和服务人员。城市更像一个巨大而精美的舞台，而韦斯帕夏诺是唯一的主角与观众。1591年，随着他的去世，城市的灵魂仿佛也被抽走了。他的继承人缺乏他的热情与远见，且债务缠身。这座璀璨的“明星之城”迅速黯淡，被遗忘在伦巴第的平原上，成为地图上一个不起眼的小点。正是这种被遗忘，意外地保存了它。因为没有经历后来大规模的城市化改造和战争破坏，萨比奥内塔就像一颗时间胶囊，将那个文艺复兴晚期的“理想城市”梦，原封不动地封存了四百多年，直到现代世界重新发现它的价值。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个参观安排为悠闲的半天。最佳抵达时间是下午两点半左右，这时室内景点刚重新开放，上午的游客团已散去，而午后阳光为建筑投下富有戏剧性的长影，非常适合拍照和感受氛围。整体游览节奏应保持舒缓，重在“沉浸”而非“打卡”。先从外围感受城市轮廓，再深入核心探索内部空间。预计整体耗时3-4小时，包括在广场咖啡馆发呆的时间。这样安排的原因在于，萨比奥内塔的魅力需要静心体会，匆忙赶路会完全错过它那份独特的、沉思般的气质。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必避开周一，否则所有主要场馆都吃闭门羹，只能在外面看建筑。夏季参观记得戴帽子和备足水，小镇街道缺少树荫，正午阳光非常炙热。参观居民区时请保持安静，尊重当地人的隐私，这里不是迪士尼，而是真实生活着的（尽管人不多）社区。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从 Porta Vittoria 胜利门进入，立刻在门洞的阴影里停一会儿，感受从城外乡村到城内“剧场”那种突如其来的场景切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着笔直的维托里奥·埃马努埃莱二世街慢慢走向兵器广场，留意街道两侧建筑立面的统一高度和节奏，体会被规划过的视线引导。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在空旷的兵器广场中心站定，缓缓旋转一圈，让眼睛依次掠过公爵宫、长廊、圣母升天教堂，理解这个空间作为城市“客厅”的绝对核心地位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进公爵宫，不要错过那些装饰繁复的天花板和充满象征意义的壁画，试着解读韦斯帕夏诺公爵想要向世界传达的自我形象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场，步入狭小的古代美术馆，在那些冷清的展柜前想象公爵当年狂热收集古罗马雕像和钱币时，是如何用古代荣光来装点他的现代理想。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最重要的压轴戏留在奥林匹克剧院，轻轻推开那扇门，让自己被那个完整、完美、仿佛凝滞了时间的剧场空间瞬间击中，试着想象这里举行首演时的辉煌与后来的漫长寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从小镇的任意一个出口走上城墙散步道，在黄昏时分回望这座星形城池的剪影，看它如何从一座充满雄心的堡垒，变成平原上一件孤独的艺术品。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`胜利门门洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，站在城门内侧，利用深远的门洞作为天然画框，拍摄门外绿意盎然的乡村景色，形成理想国与自然世界的强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`兵器广场透视长廊`}</h4>
                  <p className="text-sm text-gray-700">{`利用广场一侧的柱廊，拍摄纵深透视感极强的照片，最佳光线在晴天的上午或傍晚，斜射光会让柱廊的韵律和阴影格外迷人。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`奥林匹克剧院二楼看台`}</h4>
                  <p className="text-sm text-gray-700">{`登上剧院侧面的贵族专用看台，从高处向下俯拍整个剧场，能将完美的半圆形座位、舞台和永恒天空壁画一同囊括，构图极具震撼力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`星形城墙角堡之上`}</h4>
                  <p className="text-sm text-gray-700">{`从任何一段城墙步道，走上一个突出的棱堡，用广角镜头拍摄小镇内规整的屋顶格局和远处地平线，展现其几何规划与广阔平原的关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内场馆大多允许拍照但不允许使用闪光灯和三脚架（除非特别许可），请使用大光圈镜头应对昏暗光线。无人机飞行在意大利受到严格管制，在小镇上空飞行很可能需要提前申请并被视为侵扰居民隐私，强烈不建议。最好的光线永远是黄金小时，即日出后和日落前一小时。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在几公里外宁静农庄里的“农业旅游”民宿，主人会端上自家酿的葡萄酒和伦巴第奶酪，夜晚能看见完整的银河，与萨比奥内塔的人工完美形成有趣对话。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`小镇城墙内仅有的几家由古老宫殿改造的精品酒店，房间可能有裸露的原始砖墙和横梁，让你在寂静的夜晚独占整个文艺复兴的梦境。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往附近曼图亚湖畔的豪华历史别墅酒店，在铺着古老镶嵌地板的套房里，一边泡澡一边回味白天在萨比奥内塔感受到的那份极致的秩序与宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨比奥内塔本身夜生活为零，入夜后极为安静，适合追求静谧的旅行者。若喜欢热闹，建议以曼图亚为住宿基地。夏季和周末建议提前很久预订城内极少数的住宿。该地区治安非常好，但无论住在哪里，保管好贵重物品都是常识。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨比奥内塔的时候，我总有一种奇怪的感受，不是通常旅行结束后的满足或疲惫，而是一种清醒的怅然若失。它像一个太过精美的答案，摆在那里，反而让你对问题本身产生了更深的困惑。那个问题是：人类对于“完美”的追求，究竟能将我们带向何处？韦斯帕夏诺公爵用石头、几何和艺术，给出了他那个时代最极致的回答。但走在这座空荡荡的完美城池里，你不得不承认，真正打动人的，或许不是完美本身，而是那份试图达到完美的、近乎悲壮的执着，以及完美达成之后，那挥之不去的、人性化的寂寞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个推崇效率、拥抱混乱、崇尚“网红打卡”的快节奏世界里，萨比奥内塔的存在，是一种温柔的叛逆。它不提供即时刺激的感官盛宴，它要求你慢下来，用眼睛去阅读街道的语法，用心去倾听寂静中的历史回响。它告诉你，曾经有人如此认真地相信，美和秩序可以塑造更好的灵魂与社会。尽管这个实验在某种程度上“失败”了——它从未成为繁荣的中心，但它作为一种思想、一个梦境的纯粹表达，却奇迹般地成功了，并且完整地留存至今。对于每一位真正热爱深度游的旅人而言，来到这里，就像翻开了一本立体而沉默的哲学书。它不给你轻松的答案，却赠予你一个安静的空间，去追问关于理想、权力、艺术与生命本质的永恒问题。这，或许就是它值得被列入一生必访清单的、无可替代的理由。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/perugia-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁贾老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Perugia Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ascoli-piceno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯科利皮切诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ascoli Piceno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/narni-medieval-hill-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni</p>
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
