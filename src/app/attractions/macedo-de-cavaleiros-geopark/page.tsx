import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马塞杜-迪卡瓦莱鲁什 Macedo de Cavaleiros｜地质公园秘境与内陆淡水天堂 - 最佳欧洲景点',
  description: '车子拐下高速公路，驶入蜿蜒的山丘道路，世界仿佛立刻被调成了静音模式。波尔图的咖啡香与电车声被彻底抛在脑后，取而代之的，是车窗灌进来的、带着松树与野草清冽气息的风，还有无边无际的、起伏如绿色绒毯的橄榄园与葡萄园。马塞杜-迪卡瓦莱鲁什不是那种第一眼就让你惊呼的“明星”。它静静地卧在山间盆地，红瓦屋顶在伊',
}

export default function MacedoDeCavaleirosGeoparkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '马塞杜-迪卡瓦莱鲁什（北部大区）', href: '/destinations/europe' },
            { label: '马塞杜-迪卡瓦莱鲁什', href: '/attractions/macedo-de-cavaleiros-geopark' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马塞杜-迪卡瓦莱鲁什・Macedo de Cavaleiros・葡萄牙・马塞杜-迪卡瓦莱鲁什（北部大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下高速公路，驶入蜿蜒的山丘道路，世界仿佛立刻被调成了静音模式。波尔图的咖啡香与电车声被彻底抛在脑后，取而代之的，是车窗灌进来的、带着松树与野草清冽气息的风，还有无边无际的、起伏如绿色绒毯的橄榄园与葡萄园。马塞杜-迪卡瓦莱鲁什不是那种第一眼就让你惊呼的“明星”。它静静地卧在山间盆地，红瓦屋顶在伊比利亚半岛炽烈得近乎透明的阳光下，泛着温暖而慵懒的光。你第一刻闻到的，是干燥石头被晒热后特有的矿物质气味，混杂着某家后院飘出的烤沙丁鱼的烟火气。
这里的时间流速不同。广场上的老人们在树荫下的长椅上，用你听不懂的北方方言缓慢地交谈，手里的报纸可能一上午都没翻动一页。他们的目光平静，对于偶尔出现的游客，只是投来一丝淡淡的好奇，旋即又回到自己的世界里。这就是它最动人的地方——它不是一个为游客搭建的舞台，而是一个鲜活呼吸着的、有着自己坚定心跳的葡萄牙“内地”生活样本。你来到这里，不是“参观”，而是“潜入”，潜入一种更古老、更贴近土地的生活节奏。
而它的魔力远不止于小镇街巷。当你驱车仅短短十分钟，一片湛蓝得不可思议的水域——阿齐博水库，会突然闯入视野。在干旱的葡萄牙内陆高原，这一汪由河流堰塞而成的湖水，犹如上天赐予的蓝宝石。湖边竟有着细软的沙滩，孩子们在浅水区嬉戏，那笑声和画面，恍惚间会让你觉得置身某个海岸度假地，但环顾四周，包围着湖水的却是连绵的丘陵与茂密的林地。这种反差与和谐并存的感觉，奇妙至极。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下高速公路，驶入蜿蜒的山丘道路，世界仿佛立刻被调成了静音模式。波尔图的咖啡香与电车声被彻底抛在脑后，取而代之的，是车窗灌进来的、带着松树与野草清冽气息的风，还有无边无际的、起伏如绿色绒毯的橄榄园与葡萄园。马塞杜-迪卡瓦莱鲁什不是那种第一眼就让你惊呼的“明星”。它静静地卧在山间盆地，红瓦屋顶在伊比利亚半岛炽烈得近乎透明的阳光下，泛着温暖而慵懒的光。你第一刻闻到的，是干燥石头被晒热后特有的矿物质气味，混杂着某家后院飘出的烤沙丁鱼的烟火气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的时间流速不同。广场上的老人们在树荫下的长椅上，用你听不懂的北方方言缓慢地交谈，手里的报纸可能一上午都没翻动一页。他们的目光平静，对于偶尔出现的游客，只是投来一丝淡淡的好奇，旋即又回到自己的世界里。这就是它最动人的地方——它不是一个为游客搭建的舞台，而是一个鲜活呼吸着的、有着自己坚定心跳的葡萄牙“内地”生活样本。你来到这里，不是“参观”，而是“潜入”，潜入一种更古老、更贴近土地的生活节奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的魔力远不止于小镇街巷。当你驱车仅短短十分钟，一片湛蓝得不可思议的水域——阿齐博水库，会突然闯入视野。在干旱的葡萄牙内陆高原，这一汪由河流堰塞而成的湖水，犹如上天赐予的蓝宝石。湖边竟有着细软的沙滩，孩子们在浅水区嬉戏，那笑声和画面，恍惚间会让你觉得置身某个海岸度假地，但环顾四周，包围着湖水的却是连绵的丘陵与茂密的林地。这种反差与和谐并存的感觉，奇妙至极。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马塞杜-迪卡瓦莱鲁什`} />
                <InfoRow label="英文名称" value={`Macedo de Cavaleiros`} />
                <InfoRow label="正式名称" value={`Macedo de Cavaleiros`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`马塞杜-迪卡瓦莱鲁什（北部大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处见证了葡萄牙东北部传统农业社会变迁、并因其独特地质遗产而被联合国教科文组织认证的全球地质公园的核心生活枢纽。`} />
                <InfoRow label="建筑特色" value={`小镇中心是典型的葡萄牙北方风情，白墙红瓦的民居错落有致，而散落在地质公园内的古老村庄则由巨大的花岗岩石块砌成，与大地浑然一体。`} />
                <InfoRow label="建筑风格" value={`融合了简朴的曼努埃尔式后期影响与坚实的民间 vernacular 建筑风格，一切以实用和抵御山地气候为出发点。`} />
                <InfoRow label="文化价值" value={`是理解葡萄牙“内地”（Interior）人民坚韧、质朴生活哲学以及人与自然深度依存关系的活态窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。核心自然景点（如地质公园观景步道、阿齐博水库）无时间限制，但建议日间游览。游客信息中心通常为工作日 上午9:00-下午5:30，周末及节假日时间可能缩短或关闭，夏季（6月至9月）会适当延长。具体博物馆或庄园宅邸等小景点有独立开放时间，行前需核实。`} />
              <InfoRow label="门票价格" value={`进入小镇、地质公园自然区域及阿齐博水库公共海滩区均免费。部分特定博物馆、导览团或参与地质公园组织的专项活动（如化石工作坊、四驱车游览）需付费，价格一般在5-15欧元之间。租赁水上运动设备、自行车等另算。`} />
              <InfoRow label="地址" value={`Largo do Município, 5340-218 Macedo de Cavaleiros, Portugal`} />
              <InfoRow label="交通方式" value={`最近的主要机场是波尔图机场（OPO）。从波尔图出发最推荐自驾，沿A4公路向东转A24/E82公路，车程约1小时45分钟至2小时，风景绝佳。公共交通较为周折：先从波尔图Campanhã火车站乘火车到雷阿尔城（Vila Real），耗时约1.5-2小时；再从雷阿尔城换乘区域性巴士前往马塞杜-迪卡瓦莱鲁什，巴士班次有限，每天约2-4班，全程公共交通总耗时可能超过3小时。强烈建议租车，自由度是探索这片广阔区域的关键。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起这片土地的故事，得把时间的尺度拉得无比宏大。首先登场的不是国王英雄，而是亿万年前的地质运动。我们今天看到的连绵山丘、奇特的岩石构造、以及蕴藏的丰富化石，都是古生代时期剧烈板块碰撞与海陆变迁的沉默证人。这也就是为什么联合国教科文组织将这里评定为“纳图特乔地质公园”的核心区域。在地质学家眼中，这里的每一块石头都是一本无字史书，记录着远比人类文明久远得多的地球往事。当地农民世代在田间劳作，偶尔翻出的奇异石片或贝壳印记，曾是令他们困惑的“上帝的玩笑”，如今却成了通往远古世界的钥匙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人类的故事则要晚近得多，但也同样浸透着坚韧。马塞杜-迪卡瓦莱鲁什作为定居点的历史可以追溯到中世纪。它的名字本身就带有军事起源的烙印，“Cavaleiros”意为“骑士”，暗示这里可能与收复失地运动中的军事命令或边防据点有关。在漫长的岁月里，这里的人们生活核心始终围绕着农业、畜牧业与橄榄种植。用当地巨大的花岗岩建造房屋、谷仓和围墙，不仅是为了取材方便，更是为了抵御严冬的寒风与夏日的酷热。这些石头建筑不是精致的艺术品，而是生存的盔甲，它们厚重、朴实，与土地的颜色完全融合，仿佛是从地里生长出来的一样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有经历过决定王国命运的著名战役，也没有诞生过载入史册的艺术巨匠。它的历史是一部典型的“小历史”，由无数普通家庭的口述记忆、田埂间的汗水、教堂的钟声和村庄的节庆构成。二十世纪中后期，像葡萄牙许多内陆地区一样，它也经历了年轻人涌向沿海城市和海外寻找机会的“空心化”阵痛。那些石头老屋一度面临废弃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在人们对自然遗产价值的重新发现。阿齐博水库的建设初衷是灌溉和供水，却意外创造了一个珍贵的生态与休闲乐园。而地质公园的认证，则为这片土地赋予了全新的科学教育与可持续旅游的维度。古老的石头和新兴的湖水，共同编织了新的未来。年轻人开始回归，不是回来重复祖辈的艰辛农耕，而是开办生态民宿、担任地质向导、经营水上运动。历史在这里，不是博物馆里的标本，而是一种循环再生的力量。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受这里的精髓，建议至少安排一整天，两天一夜最为从容。清晨从波尔图或附近城市出发，争取在上午十点左右抵达马塞杜小镇。先从高处和宏观视角入手，建立地理认知，再沉浸于自然细节，最后以湖畔的松弛时光收尾。这样的节奏张弛有度，既能满足探索的好奇心，又能享受到度假般的惬意。自驾是贯穿整个行程的生命线。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末阿齐博水库沙滩会非常热闹，建议平日前往或选择清晨傍晚时段。山里天气多变，即使夏季也请带一件防风外套。加油站和超市在小镇外才有，提前加好油备好水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇外高地，先不急着进镇，而是走到观景台俯瞰整个红瓦小镇被橄榄园和远山环抱的如画全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进小镇中心的共和广场，在市政厅建筑前感受朴素的曼努埃尔风格装饰，然后随意钻进一条斜坡小巷，触摸那些冰冷而粗糙的花岗岩墙壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家本地人聚集的“tasca”（小酒馆）吃午餐，必点一道用当地橄榄油和香料烹饪的“posta mirandesa”（米兰德拉牛排）或炖羊肉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后驱车前往地质公园的标识性观景点，比如弗莱舒斯化石阐释中心附近，徒步一段短程地质小径，亲手触摸亿万年前的海生化石岩层。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将一天的高光时刻留给阿齐博水库，在“普拉亚弗鲁阿尔”（Praia Fluvial）淡水沙滩脱下鞋袜，感受细沙的温热和湖水的清凉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，绕着湖边的部分徒步道走一段，从不同角度欣赏湖水颜色随光线变幻，从湛蓝到翡绿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分返回小镇边缘的某处山丘，等待落日将天空、小镇屋顶和远方的橄榄园染成一片温暖的金红。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后漫步几乎空无一人的静谧老街，聆听自己的脚步声在石板路上回响，仰望清澈夜空中的璀璨星河。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`小镇南侧山丘的N103公路旁无名弯道`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以蜿蜒的公路为前景，拍下小镇全景沐浴在金色夕阳光辉中的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿齐博水库东岸的瞭望台`}</h4>
                  <p className="text-sm text-gray-700">{`上午顺光时，利用长焦镜头压缩空间，将湛蓝湖水、金色沙滩、戏水人群与背景的深绿山丘层层叠入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地质公园步道上的特写镜头`}</h4>
                  <p className="text-sm text-gray-700">{`寻找有鲜明纹理的岩石断面、或镶嵌着清晰化石的岩块，在侧光（如清晨或傍晚）下拍摄，突出其沧桑的质感与科学的奇迹。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇花岗岩巷道的细节`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，捕捉光线在粗糙石墙、红色门框和天竺葵盆栽上形成的强烈光影对比，营造宁静的乡土生活氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重私人财产，拍摄民居内部或居民特写前请务必征得同意。使用无人机前需查清当地法规，部分自然保护区域可能禁飞。地质公园的化石严禁移动或破坏，只能拍摄留念。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡土沉浸`}</h4>
                  <p className="text-sm text-blue-800">{`入住地质公园范围内由百年石屋改造的乡村民宿，房东会端上用自家壁炉烤的面包和果园的果酱，夜晚静得只能听到风声和虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖畔休闲`}</h4>
                  <p className="text-sm text-green-800">{`选择阿齐博水库旁的旅游公寓或小型酒店，推窗即是湖光山色，可以随时下楼散步、游泳或划独木舟，享受内陆难得的亲水假期。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`小镇中心`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻共和广场附近翻新的传统旅馆，虽然设施简单，但位置绝佳，能最深切地感受小镇从清晨苏醒到夜晚沉眠的完整生活韵律。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`预算充足可预订周边葡萄酒庄园或橄榄油庄园的客房，在私人领地的露台上品着庄园自产的美酒，俯瞰连绵到天际线的农业景观。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "乡村民宿和特色庄园通常房间数很少，旺季（7-8月）务必提前数月预订。山区夜晚降温明显，即使夏季，选择住宿时也可询问是否有暖气或壁炉。这里的住宿体验核心是“宁静”，追求夜生活热闹的旅客可能会觉得过于安静。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开马塞杜-迪卡瓦莱鲁什后，我发现自己最怀念的，不是某一张惊艳的照片，也不是某一顿美味的大餐，而是一种全身心都被“简化”和“净化”后的状态。在这里，生活的选项似乎变少了，却也因此变得异常清晰和重要：无非是一餐一饭，一片遮阴的树荫，一汪可以跳进去清凉的湖水，一次与家人朋友的漫步。现代城市生活里那些无尽的焦虑、信息轰炸和选择困难症，在这片辽阔的天地间，神奇地失去了分量。地质公园的古老岩石无声地诉说着时间的浩瀚，让你那点烦恼瞬间显得微不足道；而阿齐博水库那纯粹至极的蓝，又像一面镜子，映照出内心最需要的那份平静与欢愉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了欧洲那些被精心包装、人流如织的热门目的地，渴望一次真正“落地”的旅行——双脚踩在真实的泥土上，双手触摸有温度的石头，眼睛看到的是当地人未经修饰的日常生活，那么，请把马塞杜-迪卡瓦莱鲁什放入你的清单。它不会给你戏剧性的狂欢，却能馈赠你一种久违的、扎实的宁静与充实。它教会你的，或许正是一种在快节奏世界里早已失传的能力：如何像这里的橄榄树一样，深深地扎根于一片土地，从最简单的阳光、雨水和石缝中，汲取生命最丰沛的养分。这是一次返回本源的旅程，不仅是在地理上深入葡萄牙的内陆，更是在心灵上，回归到生活最本质、最美好的样子。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/castelo-mendo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢门杜</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Mendo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery-history" className="block group">
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
