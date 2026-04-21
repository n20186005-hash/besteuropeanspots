import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣若昂-达佩什凯拉深度旅游攻略：探秘杜罗河谷最古老产酒村的避世之旅',
  description: '探索葡萄牙圣若昂-达佩什凯拉（São João da Pesqueira），杜罗河谷最隐秘古老的产酒村落深度游攻略，包含梯田徒步、酒庄体验与实用避坑指南。',
}

export default function SaoJoaoDaPesqueiraDuoroValleyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '圣若昂-达佩什凯拉', href: '/attractions/sao-joao-da-pesqueira-duoro-valley' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣若昂-达佩什凯拉・São João da Pesqueira・葡萄牙・维塞乌区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了波尔图酒窖里熙攘的游客，想找一片真正属于葡萄藤、河流与寂静时光的土地，那今天这份 圣若昂-达佩什凯拉私藏旅游攻略 ，就是为你准备的。它不像河畔那些名声在外的酒庄小镇，而是像一颗被上帝遗忘、又精心藏在杜罗河谷巨大褶皱里的宝石。村子小到地图上几乎看不见，却被层层叠叠、令人屏息的葡萄梯田死死环抱，仿佛一个沉睡在中世纪酿酒梦里的秘密。作为你的专属向导，这份 自由行指南 将带你绕过常规旅游巴士的路线，深入这片土地的脉搏，告诉你如何用一天时间，尝到最质朴的酒，看到最壮丽的景，以及如何避开那些只有当地人才知道的“小陷阱”。准备好，我们出发吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了波尔图酒窖里熙攘的游客，想找一片真正属于葡萄藤、河流与寂静时光的土地，那今天这份 圣若昂-达佩什凯拉私藏旅游攻略 ，就是为你准备的。它不像河畔那些名声在外的酒庄小镇，而是像一颗被上帝遗忘、又精心藏在杜罗河谷巨大褶皱里的宝石。村子小到地图上几乎看不见，却被层层叠叠、令人屏息的葡萄梯田死死环抱，仿佛一个沉睡在中世纪酿酒梦里的秘密。作为你的专属向导，这份 自由行指南 将带你绕过常规旅游巴士的路线，深入这片土地的脉搏，告诉你如何用一天时间，尝到最质朴的酒，看到最壮丽的景，以及如何避开那些只有当地人才知道的“小陷阱”。准备好，我们出发吧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣若昂-达佩什凯拉`} />
                <InfoRow label="英文名称" value={`São João da Pesqueira`} />
                <InfoRow label="正式名称" value={`São João da Pesqueira`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`维塞乌区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`说起圣若昂-达佩什凯拉在葡萄牙乃至欧洲葡萄酒版图上的地位，那绝对是一位“扫地僧”级别的存在。这里被许多历史学家和酿酒师认为是杜罗河谷产区的发源地与心脏，其酿酒历史可以追溯到古罗马时期，甚至更早。当1756年，葡萄牙首相庞巴尔侯爵为保护波特酒品质，划定了世界上第一个葡萄酒原产地命名保护区时，圣若昂-达佩什凯拉及其周边区域就是绝对的核心区。这意味着，早在近270年前，这里的风土就已经被官方盖章认定为“顶级”。数百年来，这里的农民用几乎不变的方式，在险峻的片岩山坡上雕刻出令人惊叹的梯田（他们称为“socalcos”），种植着酿造波特酒和优质干型葡萄酒的本地品种。它见证了杜罗河谷从默默无闻到享誉全球的全过程，却始终保持着一份与世无争的谦卑，这种“深藏功与名”的历史厚重感，是你在商业化酒庄里绝对感受不到的。`} />
                <InfoRow label="建筑特色" value={`这里的建筑，是大地色彩的延伸，是功能主义与自然融合的典范。站在村子高处俯瞰，房屋仿佛是直接从片岩山体中生长出来的。墙壁多用当地开采的黄褐色片岩砌成，粗糙而坚实，在午后阳光下泛着温暖的金色光泽。屋顶是经典的陶土红瓦，经年累月的风雨洗刷，让颜色沉淀成一种深沉的砖红或斑驳的灰褐。房屋结构简单低矮，窗户小巧，是为了抵御夏季的酷热和冬季河谷的寒风。最迷人的是那些散落在梯田之间的古老石屋“quintas”（农庄）和酒窖“lagares”。它们没有华丽的装饰，只有厚重木门上被岁月磨出光泽的铁环，以及墙壁上攀爬的凌霄花或葡萄藤。当你走近一栋老屋，指尖划过冰冷粗糙的石墙，鼻尖闻到从门缝里飘出的、混合了橡木桶、酒香和一丝霉味的复杂气息，你会瞬间明白，建筑在这里不是为了被观赏，而是生活与劳作本身的一部分。`} />
                <InfoRow label="建筑风格" value={`严格来说，圣若昂-达佩什凯拉没有恢弘的哥特教堂或繁复的巴洛克立面，它的建筑风格就是“杜罗河谷乡土风格”。这是一种纯粹由地理、气候和生计需求催生的风格，朴实无华，却震撼人心。它的核心体现就是 梯田系统 。这无疑是世界上最伟大、最艰辛的“大地建筑”之一。人们用双手将一片片页岩垒成墙，从狂暴的杜罗河岸开始，一级一级向上“雕刻”山脉，直到山顶。这些石墙不仅是葡萄园的边界，更是调节微气候、防止水土流失的生命线。从建筑美学看，它们形成了无比和谐的几何线条与光影韵律。清晨，阳光将梯田的轮廓一刀一刀刻出来，明暗对比强烈，充满雕塑感；黄昏时，整片山谷沐浴在蜜糖色的光里，梯田的曲线变得柔和，像大地的等高线谱。村中的民居和教堂（如简洁的 Igreja Matriz 主教堂）也呼应了这种风格，采用罗马风与曼努埃尔风格的简化元素，线条敦实，装饰极少，一切都让位于功能性，与周遭的梯田景观浑然一体，展现了一种“人地合一”的至高智慧。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，圣若昂-达佩什凯拉不仅仅是一个村庄，它是一种活着的文化遗产，一种与土地生死相依的生活方式。这里的文化价值深植于“社群”与“传统”。葡萄酒酿造是集体记忆的核心，每年的葡萄收获季（Vindima）仍是全村乃至整个家族的大事，人们会像几个世纪前一样互助采收。许多家庭仍保留着小规模的传统酿酒法，在花岗岩槽（lagares）里脚踩葡萄，这种古老的仪式连接着过去与现在。这里影响着现代社会的方式是“启示”而非“输出”。它向世界展示了一种可持续的、与自然深度协作的农业模式，在急功近利的时代如同一面镜子。对于来访者，它的价值在于提供了一种“减速”和“沉浸”的可能——在这里，时间是按葡萄的生长周期和酒的陈年来计算的。它守护着杜罗河谷最本真、最坚韧的酿酒灵魂，提醒着我们，最好的味道，往往来自最艰难的土地和最耐心的等待。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 圣若昂-达佩什凯拉一日游打卡路线攻略：从梯田日出到酒庄日落`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行徒步与品酒路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，收好这份为你量身定制的 一日游路线 。上午，别睡懒觉！趁清晨凉爽，直接驱车或步行前往村子西侧的 Miradouro de São Salvador do Monte 观景台。这里是迎接杜罗河谷日出的绝佳剧场，看阳光如何一寸寸点燃层层梯田和蜿蜒的河流，拍下无人打扰的大片。随后，沿着观景台附近的步道向下，开启一段轻量级的 梯田徒步 ，亲身走进那片绿色的迷宫，触摸片岩的温热。中午，返回村子中心，在 Largo do Pelourinho（ pillory广场）找家小餐馆，比如 Tasquinha da Quinta，享用一顿地道的山村午餐，尝尝烤山羊肉或炖豆子。下午的重头戏是 深度游 的灵魂——拜访一家家庭式酒庄。提前预约 Quinta do Romeu 或 Quinta da Silveira，让庄主带你走进他们的小酒窖，听听家族故事，品尝直接从桶里取出的、未经过度修饰的波特酒和干红。傍晚，再次登上另一个观景台 Miradouro da Senhora da Lapa，看夕阳为整个山谷镀上金边，结束完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  片岩墙上的生命纹路：走近任何一道梯田的石墙，别只是远观。蹲下来，仔细看那些片岩的缝隙。你会发现这里是一个微缩生态系统：顽强的多肉植物从石缝中钻出，蜥蜴快速掠过，古老的苔藓在背阴处染上墨绿。这些石墙不是死物，它们呼吸着，随着季节变换色调。用手掌贴上去，你能感受到白天储存的阳光的余温，以及岩石本身沉静而恒久的力量，这是数百年人与自然角力后又和解的证明。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  村口老酒馆的门帘后：广场旁那些看似不起眼的老酒馆（Tasca），掀开厚重的布门帘进去。光线瞬间暗下来，空气中弥漫着浓缩咖啡、红酒橡木塞和一点点鳕鱼干的味道。留意看柜台后面那些泛黄的老照片，可能是几十年前的丰收节；墙上挂着的铜制量酒器；还有角落木桶上坐着的老人们，他们脸上的皱纹和梯田一样深。在这里点一杯便宜的 house wine，滋味可能直白得惊人，这是村庄未被包装的原始味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  圣所教堂内的蓝瓷砖画：村子高处的 Senhora da Lapa 小教堂内部别有洞天。安静走入，让你的眼睛适应昏暗。随后，墙壁上17-18世纪的 azulejos（蓝白瓷砖画）会缓缓浮现。画中讲述着宗教故事，但仔细看，你会发现工匠偷偷画上了杜罗河的船只、葡萄丰收的场景。那一抹在幽暗中静静发亮的钴蓝色，与窗外漫山遍野的绿和金，形成了神圣与世俗、室内与室外绝妙的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  酒窖里的橡木桶呼吸声：下午参观家庭酒窖时，请求庄主让你在桶陈室单独待上一分钟。关上门，所有的声音被隔绝。然后，你会开始听到一种极其微弱但持续的“嗡嗡”声或“嘶嘶”声——那是成千上万升葡萄酒在橡木桶中缓慢陈化、轻微发酵所产生的二氧化碳透过木纹孔隙排出的声音。这是酒在“呼吸”，是时间流逝的声音。混合着橡木、酒香和地窖湿气的空气包裹着你，那一刻，你仿佛听到了这片土地的心跳。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  交通与时机是最大关键：这里没有火车直达，公共交通极少。最推荐自驾，但山路（如N222）蜿蜒狭窄，驾驶需格外小心，且旺季（7-9月）可能遇到农用车辆。务必使用离线地图，部分路段信号弱。最佳游览时间是5-6月（绿意盎然、野花盛开）和9-10月（丰收季、气候宜人），避开7-8月午后极端炎热。一日游的话，务必早到，才能享受清晨宁静的梯田和光线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备绝非小事：千万别穿凉鞋或皮鞋！一定要穿防滑、支撑性好的徒步鞋或运动鞋，因为探索梯田步道时，坡陡、碎石多。帽子、太阳镜、高倍数防晒霜是保命装备，梯田几乎毫无遮荫。即使是夏天，也带一件薄外套，山间和酒窖里可能会凉。一个小背包里装好水和零食，村庄商店不多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  体验预订与消费提示：想参观有深度的家庭式酒庄，必须提前至少几天通过邮件或电话预约，他们不接待突然到访的客人。品酒收费可能比大酒庄便宜，但请尊重这份体验，适量购买一些酒作为支持。村里餐馆选择有限，价格实在，但周日晚上或周一中午很多店休息，提前查好。整体消费水平不高，但请备好一些现金，小地方信用卡不一定畅通。`}</p>
            </div>
          </Section>

          <Section title={`6. 圣若昂-达佩什凯拉周边住宿与特色美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住宿方面，强烈建议你 住在村里或周边的乡村客栈（Turismo Rural），才能完整感受从日落到星空的静谧。Casa Agricola da Levada 是一座由古老石屋改造的精致客栈，拥有直面梯田的无敌泳池，主人热情好客。更经济的选择有 Residencial Dom Quixote，简单干净，位于村中心。美食是接地气的山野味道。午餐推荐 Restaurante O Caçador，尝试“Cabrito Assado no Forno”（烤炉山羊）或“Feijoada à Transmontana”（一种丰盛的芸豆炖肉），味道浓郁扎实。想找点有情调的，Quinta do Vallado 的餐厅（需短途车程）提供在优美环境下的现代葡萄牙料理。晚上，就在村里广场的咖啡馆外坐着，喝一杯波特酒或当地的“Espumante”（起泡酒），看星星慢慢亮起来，这才是杜罗河谷之夜的精华。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你还有半天时间，强烈推荐两个驾车不远的小众延伸点：一是 Foz do Sabor，这里是萨布尔河（Sabor）汇入杜罗河的河口，景色壮阔野性，有一条废弃的铁路桥，是摄影爱好者的秘密基地，能感受到杜罗河谷更为荒凉、原始的一面。二是前往附近的 Pinhão 小镇（约30分钟车程），那里有经典的杜罗河畔火车站，站内精美的蓝瓷砖画描绘了葡萄收获场景，是另一种风格的打卡点。你也可以在Pinhão码头参加一个 短途的杜罗河游船，从水上回望你刚刚徒步过的梯田山脉，视角完全不同，会让人对这片地貌的宏伟有全新的认知。这两个地方都能让你的杜罗河谷 深度游 层次更加丰富。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣若昂-达佩什凯拉的灵魂，就藏在那一道道用汗水与耐心垒起的片岩石墙里，藏在每一桶在幽暗地窖中静静呼吸的酒里。它告诉你，真正的伟大不是征服自然，而是学会在嶙峋的陡坡上，与土地达成一份古老的协议，用数百年的时光，酿出一口醇厚与苍茫。这里没有捷径，只有季节；没有喧嚣，只有回声。它是一片让你慢下来、沉下去的土地，最终给你的，是一口风土最本真、也最复杂的滋味。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/santuario-nossa-senhora-remedios-lamego" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉梅古朝圣所</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sanctuary of Nossa Senhora dos Remédios</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mafra-national-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马夫拉宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mafra National Palace</p>
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
