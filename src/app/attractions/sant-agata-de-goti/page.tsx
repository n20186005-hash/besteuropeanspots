import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣阿加塔德戈蒂旅游攻略：悬崖上的秘密与凝灰岩峡谷漫步指南',
  description: '探索意大利坎帕尼亚的圣阿加塔德戈蒂(Sant‘Agata de’ Goti)。本深度游攻略带你走进悬崖小城，揭秘与凝灰岩峡谷融为一体的建筑奇迹，提供实用路线与避坑贴士。',
}

export default function SantAgataDeGotiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '圣阿加塔德戈蒂', href: '/attractions/sant-agata-de-goti' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣阿加塔德戈蒂・Sant‘Agata de’ Goti・意大利・坎帕尼亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下：车子在那不勒斯北部的丘陵间拐了几个弯，一片仿佛从大地裂缝中生长出来的小镇，猝不及防地撞进你的视野。这就是圣阿加塔德戈蒂给我的第一眼震撼——那些蜜糖色、赭石色的房屋外墙，不是建在悬崖上，而是与脚下垂直的、刀削斧劈般的凝灰岩峡谷峭壁，完美地“长”在了一起，浑然天成。它不像阿马尔菲海岸那样喧嚣，而是坎帕尼亚腹地一颗被严重低估的宝石。今天这份**圣阿加塔德戈蒂私藏旅游攻略**，就是你的专属向导，带你躲开庞贝和卡普里岛的人潮，深入这片时间仿佛凝固的秘境。这不止是一份打卡指南，更是一份关于如何真正感受它灵魂的**深度自由行手册**。准备好，我们一起走进这个悬崖上的梦。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下：车子在那不勒斯北部的丘陵间拐了几个弯，一片仿佛从大地裂缝中生长出来的小镇，猝不及防地撞进你的视野。这就是圣阿加塔德戈蒂给我的第一眼震撼——那些蜜糖色、赭石色的房屋外墙，不是建在悬崖上，而是与脚下垂直的、刀削斧劈般的凝灰岩峡谷峭壁，完美地“长”在了一起，浑然天成。它不像阿马尔菲海岸那样喧嚣，而是坎帕尼亚腹地一颗被严重低估的宝石。今天这份<strong>圣阿加塔德戈蒂私藏旅游攻略</strong>，就是你的专属向导，带你躲开庞贝和卡普里岛的人潮，深入这片时间仿佛凝固的秘境。这不止是一份打卡指南，更是一份关于如何真正感受它灵魂的<strong>深度自由行手册</strong>。准备好，我们一起走进这个悬崖上的梦。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣阿加塔德戈蒂`} />
                <InfoRow label="英文名称" value={`Sant‘Agata de’ Goti`} />
                <InfoRow label="正式名称" value={`Sant‘Agata de’ Goti`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`坎帕尼亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看它现在宁静得像一幅画，圣阿加塔德戈蒂的历史可是层层叠叠，写满了故事。它的历史可以追溯到古罗马时代，小镇就坐落在重要的古罗马道路 Via Latina 附近，是连接内陆与海岸的咽喉。不过，让它真正“成型”并得名的，是中世纪的那些事儿。“圣阿加塔”是为了纪念一位殉道的圣女，而“德戈蒂”（de‘ Goti）这个后缀，直指哥特人（Goti）。不过，这里有个有趣的误会：名字并非直接源于东哥特人，而是来自后来统治这里的诺曼家族——德戈托（de Got）家族。诺曼人在这里修建了坚固的城堡，小镇在伦巴第人、诺曼人、安茹王朝的交替统治下，始终是这一片区域的军事和行政重镇。它像一位沉默的哨兵，俯瞰着下方的 Martorano 和 Riello 溪流冲刷出的深邃峡谷，见证着从南意大利诸王国到现代意大利的千年变迁。走在它的石板路上，你踩着的，是比许多知名古城更原汁原味、未被过度修饰的历史地层。`} />
                <InfoRow label="建筑特色" value={`这里的建筑，是与自然一场惊心动魄的“合作”。最令人叹为观止的，就是小镇外侧那一排排房屋。它们的外墙，直接利用凝灰岩峭壁作为天然地基和部分墙体。这种淡黄色、多孔隙的火山岩，在阳光下泛着温暖的光泽。建筑师们巧妙地将人工砌筑的石墙与天然的岩壁无缝衔接，你常常分不清哪里是悬崖的结束，哪里是房子的开始。窗户和阳台就像是从岩石里凿出来的一样。建筑色彩是典型的南意暖调：赭石黄、陶土红、熟褐，被常春藤和鲜艳的九重葛点缀着。许多拱门和巷子极其狭窄，光线从高处落下，在斑驳的石墙上切割出明暗交错的几何图形。当傍晚的金色阳光斜射过来，整个小镇就像一块被点亮的、巨大的蜂蜜蛋糕，而那些深邃的窗户，则是蛋糕上神秘的孔洞。`} />
                <InfoRow label="建筑风格" value={`圣阿加塔德戈蒂的建筑风格是一场和谐的“混搭”，核心是朴素而坚固的**中世纪民间建筑**，叠加了后续的**巴洛克**装饰。小镇的整体布局和大部分住宅，都是典型的中世纪风格：适应险峻地形，布局紧凑，街道蜿蜒如迷宫，一切以实用和防御为先。建筑材料就是本地的凝灰岩，质朴无华。然而，当你走到中心的**主教堂（Duomo）** 和几座重要的教堂（如**圣天使教堂Chiesa di San Menna**）时，巴洛克风格的华丽便扑面而来。这种17-18世纪盛行的风格，在这里体现为教堂内部繁复的灰泥装饰、镀金的祭坛、栩栩如生的雕塑和充满戏剧性的壁画。圣天使教堂内那个令人瞠目的“透视穹顶”壁画，就是巴洛克艺术追求视觉幻象和动态感的极致体现。这种对比很有意思：外表是粗犷、与岩石共生的中世纪堡垒，内里却藏着精雕细琢、充满神性光辉的巴洛克珍宝，仿佛在诉说着小镇在战乱防御与和平繁荣之间的双重身份。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，圣阿加塔德戈蒂不仅仅是一个家乡，更是一种与险峻自然共处的生活方式哲学。这里的“慢”是刻在骨子里的——因为地势所限，一切都需要更精细的规划和生活智慧。小镇是坎帕尼亚深厚农业传统的代表，周边环绕着著名的葡萄酒产区和果园（尤其是桃子和樱桃）。它的文化价值在于保存了一种几乎绝迹的**中世纪山城生活样本**，而且没有沦为纯粹的博物馆。你依然能看到老太太在古老的石盆前聊天，工匠在小小的工作室里忙碌，酒馆里飘出家常菜的香气。它也是许多意大利电影和电视剧偏爱的取景地，那种未经雕琢的、带有史诗感的沧桑面貌，是任何影棚都无法复制的。来到这里，你感受到的是一种坚韧而宁静的“南方精神”，它教会人们如何在高处，在边缘，诗意地栖居。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 圣阿加塔德戈蒂一日游路线攻略：漫步悬崖与时光长廊`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份**自由行指南**请收好！我们这样安排一天，既能打卡精华，又能沉浸体验。**上午**（9:30-12:30）：把车停在镇外的大型免费停车场（这是**避坑关键**，小镇内部街道极窄禁行），从**主城门（Porta San Marco）** 步入。立刻你就进入了中世纪世界。沿着 **Corso Roma** 这条主街慢慢走，两旁的古老宫殿和拱门会让你不停举起相机。先去参观**主教堂（Duomo）**，看看里面珍藏的14世纪壁画。然后拐进小巷，目标是**诺曼城堡（Castello Normanno）** 的遗迹，虽然现在是市政厅，但其雄伟的轮廓和俯瞰峡谷的视野绝对震撼。**中午**（12:30-14:30）：就在城堡附近的**加里波第广场（Piazza Gramsci）** 找一家餐馆，享受一顿悠长的坎帕尼亚午餐，尝尝用当地红酒烹制的“野猪肉酱面”。**下午**（14:30-18:00）：重头戏来了——去探寻小镇的“灵魂视角”。从广场往西，找到那些通向**悬崖观景台**的小径。最著名的一处是从**圣方济各教堂（Chiesa di San Francesco）** 旁边下去，那里你能看到房屋与凝灰岩峭壁融合的奇观全景。之后，去拜访小而精美的**圣天使教堂（Chiesa di San Menna）**，被其内部的巴洛克幻象穹顶惊艳。傍晚时分，一定要回到主街某个靠崖的咖啡馆，点一杯柠檬酒，看夕阳把整个峡谷和对面的山峦染成金红色。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>“无界”的中央拱门（Arco di San Marco附近）</strong>：站在主城门内第一个大拱门下回望，你会看到一个电影画面般的景深：拱门框出了远处蜿蜒的街道、错落的屋顶，以及更远方朦胧的山峦。但最妙的是阳光在古老石砖上移动的轨迹，上午和下午的光线会在这里上演完全不同的光影戏剧，是摄影的绝佳点位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>峡谷俯瞰点的“融合”奇迹</strong>：当你站在西侧的观景台，屏住呼吸向下看。找一栋最边缘的房子，仔细观察它的底部。你会发现房子的基础部分完全就是原生的、带有纵向侵蚀条纹的凝灰岩体，而上部才是人工砌筑的规整石墙。岩石的肌理和砖石的纹理在此交汇，常春藤从岩缝爬上窗台，这是人类建筑向自然地形做出的最谦卑又最聪明的“致敬”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>圣天使教堂的“天堂幻境”</strong>：走进小巧的圣天使教堂，抬头看主祭坛上方的穹顶。艺术家用精湛的透视法，在平面的天花板上画出了一个仿佛向上无限延伸、立柱林立的恢弘穹顶，天使在云端飞舞。那种瞬间被拉入另一维度的眩晕感，是巴洛克艺术“欺骗眼睛”的巅峰之作，安静却极具冲击力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>小巷尽头的“一线天”与生活气</strong>：随意钻进一条非主街的小巷（比如Via Caudina沿线）。巷子窄得几乎仅容一人通过，两侧石墙高耸，抬头只见一线蓝天。但就在这幽深之处，你会突然遇到一扇敞开的木门，门内传来收音机里的歌剧声和烹饪的香味；或者看见一盆盛放的天竺葵，摆在斑驳的窗台上，背后是幽暗的室内。这些瞬间，比任何宏伟建筑都更能让你触摸到小镇温热的脉搏。" }} />
            </div>
          </Section>

          <Section title={`5. 圣阿加塔德戈蒂自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>交通与停车是头等大事</strong>：小镇中心历史区（ZTL）严格禁止外来车辆进入，乱开进去罚款昂贵。<strong>务必</strong>使用镇外指示清晰的免费大型停车场（例如“Parcheggio Sant‘Agata de’ Goti”），然后步行5-10分钟进城。这是这份<strong>避坑指南</strong>里最重要的一条！从那不勒斯或卡塞塔过来，乘坐火车到“Sant‘Agata de’ Goti”站再转乘短途巴士或打车也很方便。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>鞋子和时间的选择</strong>：小镇全是凹凸不平的石头路和上下陡坡，<strong>绝对不要</strong>穿高跟鞋或薄底鞋！一双舒适防滑的徒步鞋或运动鞋是你的最佳伴侣。<strong>最佳游览时间</strong>是春季（4-6月）和秋季（9-10月），气候宜人，花草繁茂。夏季中午较热，尽量安排午间在室内或阴凉处休息。如果想拍出无人空旷感，建议<strong>工作日</strong>前来，周末会有更多本地游客。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>探索安全与细节</strong>：悬崖观景台通常没有过于夸张的防护栏，拍照时务必注意脚下安全，看好小孩。一些通往最佳观景位置的小径可能略显隐蔽且湿滑，行走时需小心。小镇餐厅的营业时间很“意大利”，午餐大约12:30-15:00，晚餐19:30后才开始，非饭点可能找不到吃的，最好自备一点零食。这里治安很好，但依然建议看管好随身物品。" }} />
            </div>
          </Section>

          <Section title={`6. 圣阿加塔德戈蒂住宿与美食攻略：悬崖边的味蕾盛宴`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然作为<strong>一日游</strong>目的地很完美，但如果你想体验入夜后和清晨无人时的小镇魔力，住一晚是值得的。小镇有几家由古老宫殿改建的<strong>B&B民宿</strong>，比如“Palazzo Rainone”，石头拱顶客房充满历史感，主人通常会提供丰盛的 homemade 早餐。餐饮方面，一定要尝试坎帕尼亚的乡土味道。推荐广场旁的 <strong>“Ristorante Zi’ Rita”</strong>，家庭经营，氛围亲切。必点“<strong>Paccheri alla Nerano</strong>”（一种粗管面配炸西葫芦和奶酪），或者“<strong>Coniglio all’Ischitana</strong>”（伊斯奇亚风味的炖兔肉）。甜品试试“<strong>Pastiera</strong>”（谷物乳酪蛋糕）或“<strong>Delizie al limone</strong>”（柠檬 delight）。配上一杯当地产的红酒<strong>Aglianico</strong>或白葡萄酒<strong>Falanghina</strong>，这顿悬崖边的晚餐将是你味蕾上的高潮。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>“圣母岩洞”教堂（Santuario della Madonna delle Grotte）</strong>：从小镇出发，沿着指示牌步行约20-30分钟（或驾车很快），可以到达这个神奇的朝圣地。它完全建在一个巨大的天然凝灰岩洞穴内，内部有古老的壁画和祭坛。前往这里的路上，你可以从另一个截然不同的角度，远眺圣阿加塔德戈蒂全景——它像一座空中楼阁矗立在悬崖之巅，景象无比壮丽。这个洞穴教堂本身幽静而灵性，是深度探索该地区地质与宗教文化的绝佳补充。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>卡塞塔皇宫（Reggia di Caserta）</strong>：如果自驾，约30分钟车程即可到达这座被誉为“意大利凡尔赛”的宏伟宫殿（世界文化遗产）。上午游览完古朴的中世纪山城，下午去感受一下18世纪波旁王朝的极致奢华与规整园林，会是一种非常有趣的历史与风格对冲体验。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣阿加塔德戈蒂的灵魂，在于那份“岿然不动的宁静”。它不像其他景点急切地想要向你证明什么，它只是在那里，与它的悬崖、它的岩石、它的缓慢时光长在了一起。当你离开时，带走的不只是照片，更是人类如何在自然的鬼斧神工中，找到立足之地并创造美的那份古老智慧与从容。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mantua" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    曼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">曼托瓦古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mantua</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/teatro-farnese" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法尔内塞剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Farnese</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rossano-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗萨诺大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rossano Cathedral</p>
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
