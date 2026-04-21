import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡塞拉维利亚深度旅游攻略：悬崖纯白村落的摩尔风情与潟湖漫步指南',
  description: '探索葡萄牙阿尔加维的秘密宝石Cacela Velha。这份深度游攻略带你走进悬崖上的纯白微型村落，领略摩尔风情，俯瞰壮丽潟湖，提供详尽的交通、路线与避坑指南。',
}

export default function CacelaVelhaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '阿尔加维', href: '/destinations/portugal' },
            { label: '卡塞拉维利亚', href: '/attractions/cacela-velha' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡塞拉维利亚・Cacela Velha・葡萄牙・阿尔加维`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：你从阿尔加维喧闹的海滩抽身，拐上一条不起眼的小路，爬上一个缓坡。突然，世界安静下来，眼前出现一片像被时光遗忘的纯白——这就是卡塞拉维利亚（Cacela Velha）。它不是什么大名鼎鼎的景点，地图上只是一个微小的点，只有几十座房子，高高地踞在砂岩悬崖上，像一群停歇的海鸥，静静守望着下方那一片梦幻的、蓝绿交织的利亚福尔摩沙潟湖（Ria Formosa）。今天这份私藏旅游攻略，就是你的专属向导。我会告诉你如何躲开人潮，用一整天的时间，真正“住进”这个村落的故事里。这不仅仅是一份打卡攻略，更是一份教你如何感受阿尔加维灵魂一角的避坑指南与深度游手册。准备好，我们要走进一幅活着的明信片了。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，想象一下：你从阿尔加维喧闹的海滩抽身，拐上一条不起眼的小路，爬上一个缓坡。突然，世界安静下来，眼前出现一片像被时光遗忘的纯白——这就是卡塞拉维利亚（Cacela Velha）。它不是什么大名鼎鼎的景点，地图上只是一个微小的点，只有几十座房子，高高地踞在砂岩悬崖上，像一群停歇的海鸥，静静守望着下方那一片梦幻的、蓝绿交织的利亚福尔摩沙潟湖（Ria Formosa）。今天这份私藏旅游攻略，就是你的专属向导。我会告诉你如何躲开人潮，用一整天的时间，真正“住进”这个村落的故事里。这不仅仅是一份打卡攻略，更是一份教你如何感受阿尔加维灵魂一角的避坑指南与深度游手册。准备好，我们要走进一幅活着的明信片了。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡塞拉维利亚`} />
                <InfoRow label="英文名称" value={`Cacela Velha`} />
                <InfoRow label="正式名称" value={`Cacela Velha`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`阿尔加维`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看卡塞拉维利亚如今宁静得只听得见风声，它的脚下，可是踩着一部层叠的史诗。它的名字“Cacela”可能源于阿拉伯语，暗示着摩尔人深刻的烙印。在公元8世纪到13世纪，摩尔人统治伊比利亚半岛时期，这里因其绝佳的悬崖地势，成了一个重要的防御前哨，监视着海岸线与潟湖的动静。13世纪，葡萄牙王国从摩尔人手中收复这片土地后，它作为边境要塞的地位依然关键。村子中心那座简朴的圣堂，就建在一座早期摩尔人城堡的废墟之上。到了16世纪，为了抵御北非海盗的频繁袭击，这里又修建了更多的防御工事。可以说，卡塞拉维利亚微小身躯里，浓缩了葡萄牙南部几个世纪以来的冲突、守护与融合。它不像首都里斯本那样书写着帝国的辉煌，而是以一座沉默哨兵的身份，见证了阿尔加维海岸线的烽火与和平，是欧洲南部基督教与伊斯兰文明交锋、共存的一个生动而具体的微观样本。`} />
                <InfoRow label="建筑特色" value={`这里的建筑之美，在于其极致的纯粹与和谐。所有的房屋都严格遵循着阿尔加维传统的乡土美学：外墙无一例外地刷着厚实的、耀眼的白色石灰。这种白不是冷冰冰的，而是在阿尔加维炽烈的阳光下，泛着温暖的光晕，与碧蓝的天空形成最经典的配色。房屋结构大多方正、低矮，线条简洁，屋顶是舒缓的四坡红瓦。最迷人的细节在于装饰：门窗的边框往往被涂成天空蓝、鹅蛋黄或赭石色，像给画面勾勒出的精致线条。许多烟囱造型古朴，带有镂空的装饰，这是摩尔工艺留下的痕迹。走在村里，脚下不是石板，而是用当地赭色砂岩碎石和白色碎贝壳混合铺就的小径，踩上去沙沙作响，在阳光下闪闪发光。围墙常常很低矮，露出院内探头的九重葛、三角梅，那泼洒般的紫红与艳粉，与纯净的白墙撞色，充满生命力。整个村落没有任何突兀的现代建筑干扰视线，色彩、材质、尺度都控制在一种惊人的和谐里，仿佛一个精心布置的模型，却又充满了生活真实的烟火气。`} />
                <InfoRow label="建筑风格" value={`卡塞拉维利亚的建筑风格，可以称之为“阿尔加维乡土风格”与“摩尔风格”的完美融合。它不属于那种恢弘的教堂或宫殿风格，而是民间的、实用的、适应当地气候与历史的智慧结晶。其鲜明的“摩尔风格”影响体现在几个方面：一是建筑的立方体结构和极简外观，利于防晒和保持室内凉爽；二是小而少的窗户，通常装有木百叶，也是为了隔热和隐私，这种内敛与摩尔文化一脉相承；三是随处可见的庭院（即使很小）和天井观念，住宅围绕内部小空间建造，这是伊斯兰住宅的典型特征。同时，它又是纯粹的“阿尔加维”风格：夸张的白色石灰外墙，是应对强烈阳光的实用选择，也形成了独特的地域标识；舒缓的陶土瓦屋顶，适应地中海气候；那些彩色的门窗边框，则是葡萄牙人乐观、热爱色彩的天性流露。在这里，你看不到复杂的巴洛克雕花或飞拱的哥特尖塔，你看到的是一种沉淀下来的、功能与美感高度统一的建筑哲学，是气候、历史与生活共同塑造的模样。`} />
                <InfoRow label="文化价值" value={`卡塞拉维利亚的文化价值，远远超越了它作为一个“漂亮村庄”的观光意义。首先，它是一个活态的社区，居住于此的少数居民维系着一种近乎“古董”般缓慢、宁静的生活方式。它抵抗着阿尔加维沿海地区过度旅游开发的浪潮，像一座孤岛，保存着地区原有的生活节奏和邻里关系。对于葡萄牙人，尤其是阿尔加维人而言，它是地方身份认同的一个象征，提醒着人们这片土地在成为度假天堂之前质朴、坚韧的模样。其次，它的存在本身就是对“慢生活”和“小即是美”哲学的一次致敬，吸引了无数艺术家、作家和寻求内心平静的访客。它的光影、色彩和空间比例，成为天然的创作源泉。更重要的是，它守护着悬崖之下那片珍贵的利亚福尔摩沙潟湖自然公园的景观视野，提醒着人类定居点与脆弱自然生态系统和谐共存的可能。在这个追求“更大、更快、更闹”的世界里，卡塞拉维利亚静静地证明着“微小、缓慢、宁静”所蕴含的深沉力量与文化深度。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 卡塞拉维利亚一日游打卡路线攻略：从晨曦潟湖到落日悬崖`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条**一日游路线**，宗旨就是“沉浸”而非“赶场”。建议你上午10点前抵达，这时旅行团的大巴还没上来，阳光也还温柔。把车停在村外免费停车场（这是第一个**避坑指南**，千万别开进村里狭窄的小路）。我们的探索从那条标志性的、铺满碎贝壳和砂岩的小径开始，慢慢向上走，让脚步和心情一起慢下来。第一站直奔悬崖边的观景台，在晨光中看清潟湖全貌和远处海上的塔维拉岛（Ilha de Tavira）。接着，转身走进村子中心的小广场，参观纯白的努萨桑哈达圣堂（Igreja de Nossa Senhora da Assunção），感受内部的清凉与宁静。上午余下的时间，就交给那些迷宫般的巷弄，无需地图，迷路就是最好的发现。午餐一定要留在村里，在广场边的家庭餐馆享用最地道的烤鱼。下午，你可以选择从悬崖一侧的小径下到潟湖的沙滩（注意潮汐时间！这是重要的**行前须知**），在浅滩上散步，或者就找一家有露台的咖啡馆，对着无敌 view 发呆、看书。傍晚，重回悬崖观景台，那是日落戏剧上演的时刻。天黑后，村子的灯光星星点点，与星空呼应，这时再心满意足地离开。这条**自由行指南**的路线，完美结合了自然、历史和放空。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>贝壳与砂岩小径</strong>：千万别匆匆走过这条进村的“迎宾道”。蹲下来仔细看，脚下赭红色的砂岩碎块中，混合着无数白色、米色的细小贝壳，在阳光下像撒了一层碎钻。这是用潟湖和海边的自然材料铺就的，踩上去的触感沙沙的，声音很治愈。它不仅仅是路，更是连接村落与海洋的生命线索，默默诉说着此地居民千百年来“靠海吃海”、与自然共生的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>圣堂内部的“光之洗礼”</strong>：走进努萨桑哈达圣堂，瞬间被静谧和凉爽包裹。它的内部异常简洁，没有繁复的金饰。但请抬头看主祭坛上方——通常有一扇圆窗或侧面的高窗。在特定时间（尤其是上午），阳光会像一道精准的光束射入，正好照亮圣坛上的十字架或圣母像，尘埃在光柱中飞舞。那一刻，朴素的空间充满了神性的戏剧感，是一种不张扬却直抵人心的建筑诗歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>一扇蓝边窗与一丛三角梅</strong>：在巷子里，你会邂逅无数这样的画面：一扇门或窗，被刷成饱和度极高的钴蓝色或天蓝色边框。就在这扇窗的墙角，一丛茂盛的三角梅（九重葛）汹涌地向上攀爬、向外绽放，瀑布般的紫红色几乎要淹没那抹蓝色。强烈的色彩对比——纯净的白、深邃的蓝、炽热的紫红——在阳光下碰撞，充满南欧的激情与生命力，是绝佳的摄影题材，也是阿尔加维灵魂的视觉浓缩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>悬崖观景台的“双重视野”</strong>：站在观景台的矮墙边，务必从左到右缓缓扫视。向左看，是利亚福尔摩沙潟湖错综复杂的水道、盐田、沙洲和绿洲，水色由翠绿渐变为深蓝，渔船和 kayak 像玩具一样点缀其中，充满生态的活力。向右看，则是浩瀚的大西洋，海天一色，无尽无涯。这个转角，将潟湖的内敛秀美与大洋的雄浑壮阔同时框进取景框，是大自然最慷慨的馈赠，也是理解此地地理核心的钥匙。" }} />
            </div>
          </Section>

          <Section title={`5. 卡塞拉维利亚自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份<strong>避坑指南</strong>请你务必收好：首先，<strong>最佳游览时间</strong>是春季（4-6月）和秋季（9-10月），气候完美，花草繁茂。夏季（7-8月）务必早到晚走，避开正午毒辣的太阳，悬崖上几乎无遮荫。其次，<strong>穿着建议</strong>：放弃高跟鞋和人字拖！村子是碎石和坡路，一双舒适防滑的平底鞋或运动鞋是保命的。同时准备帽子和防晒霜，紫外线极强。关于<strong>避开人流</strong>：绝大多数一日游团队会在上午11点至下午4点之间涌入，因此早10点前、晚5点后是享受宁静村落的黄金时段。村里没有大型商业设施，<strong>门票与交通</strong>方面：景点全免费，但公共交通不便，自驾是最佳选择。停车一定停在村口指定免费区域，切勿尝试开进巷子，那是司机的噩梦。最后，尊重当地居民：这里首先是家园，然后才是景点，拍照时避免打扰私人院落，保持安静。" }} />
            </div>
          </Section>

          <Section title={`6. 卡塞拉维利亚周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在悬崖村落住一晚？遗憾的是，村里几乎没有对外营业的民宿，但别担心。我推荐你住在车程10-15分钟的海滨小镇<strong>法罗（Faro）或可爱的塔维拉（Tavira）</strong>。塔维拉更有味道，沿河有许多精品客栈（Pousada），性价比很高。<strong>美食</strong>才是卡塞拉维利亚的重头戏！村里广场旁的<strong>“O Mirante”餐厅</strong>是必去之地。露台位置绝佳，直面潟湖。一定要点阿尔加维特色的<strong>烤鲈鱼（Robalo Grelhado）</strong> 或<strong>海鲜炖锅（Cataplana）</strong>，食材就来自眼皮底下的潟湖，鲜美无比。搭配一杯当地产的清爽白葡萄酒，看着日落，这就是天堂的模样。如果想吃简单点，村里小咖啡店的三明治和葡萄牙著名的“法国小女孩”三明治（Francesinha）也很有风味。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从卡塞拉维利亚出发，你的阿尔加维<strong>深度游</strong>可以轻松延伸：1. <strong>利亚福尔摩沙潟湖自然公园（Parque Natural da Ria Formosa）</strong>：直接从悬崖小径下到潟湖边，或开车几分钟到附近的Cacela Nova海滩，参加划船或观鸟之旅。这片巨大的湿地保护区是候鸟天堂，生物多样性极其丰富，与悬崖上的文化景观形成完美互补。2. <strong>塔维拉（Tavira）</strong>：向东车程仅10分钟，这座优雅的河边小镇被誉为“阿尔加维的威尼斯”。探索其摩尔城堡遗迹、罗马桥、以及无数美丽的教堂。它的氛围比卡塞拉维利亚更“城镇”，但依然保留了宁静的魅力，非常适合傍晚散步和晚餐，将悬崖村的遗世独立与河畔小镇的便利生活结合，是一天完美的句点。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡塞拉维利亚的灵魂，不在于它有多么惊天动地的历史遗迹，而在于它那份“凝固的时光感”和“绝对的宁静”。它教你用双脚丈量贝壳小径的粗糙，用眼睛收藏白墙与鲜花的碰撞，用皮肤感受悬崖上永不停歇的海风，然后，让你的心像脚下的潟湖一样，慢慢沉淀、开阔。它是一座微型的纪念碑，纪念着一种未被稀释的阿尔加维生活，提醒着我们：有时，最美的风景，就藏在最不起眼的转弯处，而最深的旅行，是学会在一座只有几十座房子的小村里，找到整个世界。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ponta-delgada-azores" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬塔德尔gada（黑白玄武岩拼花人行道与古典建筑交织的火山岛之都）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ponta Delgada</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-de-vide-judaica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo de Vide</p>
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
