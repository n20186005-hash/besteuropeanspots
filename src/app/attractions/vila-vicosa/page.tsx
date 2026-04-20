import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维拉维索萨深度旅游攻略：大理石小镇与布拉干萨王朝的奢华漫游指南',
  description: '探索葡萄牙维拉维索萨（Vila Viçosa）的深度游攻略。揭秘布拉干萨王朝发源地，漫步于绝美大理石街道，沉浸于宫殿与广场的奢华之中。',
}

export default function VilaVicosaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '维拉维索萨', href: '/attractions/vila-vicosa' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维拉维索萨・Vila Viçosa・葡萄牙・埃武拉区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了里斯本的人潮，想找一个真正“闪亮”的葡萄牙隐藏宝石，那今天这份维拉维索萨私藏旅游攻略，就是为你准备的。它不在海边，却拥有一种更震慑人心的“奢华”——整座小镇仿佛是从一块巨大的、温润的白色大理石中雕刻出来的。街道、台阶、窗台、乃至宏伟的宫殿立面，触目所及，皆是光滑如脂、纹理细腻的大理石。这里曾是强大布拉干萨王朝的摇篮和心爱的避居地，空气中弥漫着皇室贵气与乡间宁静交织的奇妙气息。作为你的专属向导，这份自由行指南将带你穿行于这些会反光的街道，告诉你哪里能触摸到最真实的历史，以及如何完美规划你的一日游路线，避开那些旅行团不会告诉你的小陷阱。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了里斯本的人潮，想找一个真正“闪亮”的葡萄牙隐藏宝石，那今天这份维拉维索萨私藏旅游攻略，就是为你准备的。它不在海边，却拥有一种更震慑人心的“奢华”——整座小镇仿佛是从一块巨大的、温润的白色大理石中雕刻出来的。街道、台阶、窗台、乃至宏伟的宫殿立面，触目所及，皆是光滑如脂、纹理细腻的大理石。这里曾是强大布拉干萨王朝的摇篮和心爱的避居地，空气中弥漫着皇室贵气与乡间宁静交织的奇妙气息。作为你的专属向导，这份自由行指南将带你穿行于这些会反光的街道，告诉你哪里能触摸到最真实的历史，以及如何完美规划你的一日游路线，避开那些旅行团不会告诉你的小陷阱。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维拉维索萨`} />
                <InfoRow label="英文名称" value={`Vila Viçosa`} />
                <InfoRow label="正式名称" value={`Vila Viçosa`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`埃武拉区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`维拉维索萨在欧洲历史版图上的地位，完全是由布拉干萨家族定义的。这个家族最初是葡萄牙最有权势的公爵，而这座小镇就是他们雄心的起点和坚实的后盾。15世纪，第一任布拉干萨公爵选择在此建立其庞大的领地核心，不仅仅是出于战略考虑，更是因为这里富饶的大理石矿藏——财富与权力的最直观象征。1640年，第八任公爵若昂在这里被拥立为葡萄牙国王（若昂四世），领导了反抗西班牙统治的复国运动，开启了长达两百多年的布拉干萨王朝统治时期。从此，维拉维索萨从一方诸侯的堡垒，升格为孕育了整个王国君主的“龙兴之地”。即便在里斯本成为政治中心后，历代国王仍将这里的宫殿视为精神家园和最喜爱的夏宫，持续不断地建设与装饰，使得小镇虽处内地，却始终与王国的核心脉搏紧密相连。它不是战场的前线，却是王朝权力最稳定、最华丽的基石。`} />
                <InfoRow label="建筑特色" value={`踏入维拉维索萨，第一眼的冲击力绝对来自材质。这不是点缀，而是彻底的覆盖。地面由巨大的灰白色大理石板铺就，经过数个世纪鞋底的打磨和阳光的亲吻，表面泛出一种柔和如绸缎的光泽，雨天时会倒映出两侧建筑的倒影，宛如行走在水面上。公爵宫（Paço Ducal）的立面是这种奢华感的极致体现：它不是单一的白色，而是由来自当地不同采石场的多种大理石拼接而成——奶油白、浅玫瑰色、带着灰色脉络的……这些巨大的石块被切割得无比精准平整，在阳光下呈现出细微而丰富的色彩层次。建筑的线条简洁有力，但每一扇窗户的边框、每一处徽章雕刻，都极尽精雕细琢之能事，展现出一种内敛的豪奢。广场（Terreiro do Paço）的尺度惊人，开阔地面全由小块的白色大理石碎石铺成马赛克图案，踩上去有细微的沙沙声，站在中央环顾四周被大理石立面环绕，仿佛置身于一个露天的大型石首饰盒内部，纯净、冷冽又无比壮观。`} />
                <InfoRow label="建筑风格" value={`维拉维索萨的核心建筑风格是融合了晚期哥特式与曼努埃尔式，并逐渐向文艺复兴过渡的“素雅文艺复兴”风格。与里斯本那些华丽张扬的巴洛克建筑不同，这里的建筑美学深受其材料——大理石的影响，呈现出一种庄严、纯净、几何感强烈的面貌。公爵宫是典范：整体结构对称恢弘，窗户排列整齐，属于文艺复兴对秩序与比例的追求。但仔细观察窗楣、门框上的装饰，你会发现曼努埃尔风格的影子——那些缠绕的绳索、浑天仪等航海元素被简化、几何化，与大理石的坚硬质感相结合，变成了一种更为抽象和硬朗的浮雕。这种风格在这里显得尤为贴切，它没有过多的曲线和金色，而是让大理石本身的纹理、光泽和永恒的质感成为绝对的主角。它诉说的不是神的荣耀，而是世俗王权的稳固、财富的坚实与一种近乎傲慢的自信：我们无需过度装饰，因为承载我们的土地和石材，本身就是最伟大的财富。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，大理石远不止是一种建筑材料，它是身份认同的基石，是流淌在血液里的骄傲。几个世纪以来，开采、雕刻大理石的技术代代相传，小镇的男性多以石匠为荣。走在街上，你可能会听到某户人家后院传来轻微的敲击声，那可能不是装修，而是某位老匠人在雕刻一件家传的手工艺品。这种与石头的亲密关系，塑造了小镇居民沉稳、实在的性格。在现代社会，维拉维索萨的文化价值一方面作为“活着的博物馆”，向世人展示着一个王朝如何用最本土、最珍贵的资源构建其权力美学；另一方面，它也成为葡萄牙“大理石文化”的象征。每年，这里吸引着建筑师、设计师和石材爱好者前来朝圣，研究这些古老石材应用在现代设计中的可能性。小镇的节庆活动，也常常与大理石相关，它已经从皇室的历史遗产，沉淀为深入日常肌理的地域文化符号。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 维拉维索萨一日游打卡路线攻略：从宫殿到街角的奢华漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟紧我，咱们开始这趟大理石王国的一日深度游。上午（9:00-12:30），精力最充沛时，直接献给重头戏——公爵宫。请务必在网上提前订好门票，躲开可能的小旅行团。花上两三个小时，慢慢穿过那挂满挂毯的冰冷长廊、装饰着蓝白瓷砖的礼拜堂，想象国王一家夏日在此避暑的场景。中午（12:30-14:00），从宫殿侧门出来，就是宏伟的大理石广场（Terreiro do Paço）。别急着找餐厅，先在广场中央感受一下被大理石360度环绕的震撼，拍拍照片。然后钻进广场东侧或旁边小巷里，找一家本地小餐馆。下午（14:00-17:00），开启“扫街”模式。从广场向北，随意拐进任何一条小巷，比如Rua dos Oleiros 或 Rua da Misericórdia。你的目标是发现细节：被磨得圆润的街角石、大理石砌成的窗台花盆、古老的门环。别忘了去圣奥古斯丁修道院教堂看看，那里安放着布拉干萨公爵们的心脏（是的，是心脏！）。最后，步行约15分钟，登上小镇边缘的城堡。这里游人更少，是俯瞰整个白色小镇和周围橄榄园的最佳观景台，黄昏时分光影绝美。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  宫殿立面徽章雕刻：在公爵宫正门上方，集中了复杂的大理石纹章雕刻。凑近看，你会发现航海用具（浑天仪、船锚）、战争盔甲与自然枝叶缠绕在一起。最妙的是阳光在一天中不同时刻照射其上：正午时，雕刻棱角分明，阴影锐利；傍晚时分，斜阳为它们镀上一层暖金色，冰冷的石头瞬间有了温度，那些数百年前匠人的凿痕仿佛在光影中重新苏醒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  广场地面的“沙沙声”：一定要脱掉鞋子感受一下（如果不怕硌脚的话），或者至少放轻脚步聆听。无数细小的大理石碎石被紧密铺设，走上去会发出一种非常独特、清脆又密集的“沙沙”声，像是踩在压实的雪上，又像是无数细小的贝壳在低语。这是专属于维拉维索萨的背景音，它告诉你，你所站立的地方，是一座由“碎石荣耀”铺就的舞台。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  小巷中的“发光”窗台：随意走进一条窄巷，阳光被两侧建筑挤成一道光柱。这时，注意看那些民居的窗台。几乎家家户户都用整块大理石雕出窗台，上面常年摆放着几盆天竺葵或绿植。白色或浅灰色的大理石在日光照射下，仿佛自身在微微发光，衬托得红泥土陶盆里的花朵颜色格外鲜艳夺目。这个平凡的生活场景，却是小镇奢华本质最不动声色的流露。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  城堡瞭望孔的视野：爬上城堡的塔楼，从一个狭窄的方形瞭望孔望出去。这个石框完美地框住了一幅画：近处是小镇层层叠叠的橙红色屋顶，中间是公爵宫巨大的白色立面像一艘石船停泊在屋顶的海洋中，远处是无边无际、在阳光下呈现银绿色的阿连特茹平原橄榄园。这个视角，正是当年公爵审视自己领地的视角，权力与疆域，尽收于此一孔之间。`}</p>
            </div>
          </Section>

          <Section title={`5. 维拉维索萨自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间就是避开人潮的利器：小镇核心景点（公爵宫）在平日上午10点后和周末下午可能会有小型旅行巴士抵达。最佳避坑方案是：工作日一开门（通常9点）就进入公爵宫，享受近乎包场的清净。参观完宫殿（约11点），此时广场上团队游客可能刚到，你正好逆流钻进小巷探索。下午晚些时候（4点后）再回到广场拍照，光线柔和且人潮已退。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  脚底与头顶的防御：鞋子！鞋子！鞋子！ 重要的事情说三遍。务必穿一双鞋底有良好抓地力的舒适步行鞋。打磨光滑的大理石路面，特别是稍有坡度或雨天时，堪比溜冰场。同时，阿连特茹地区阳光猛烈，广场和街道毫无遮挡，帽子、太阳镜和高倍数防晒霜是保命必备。这里不是海滩，但“大理石反光晒伤”可能比海边更厉害。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与购物的冷静期：小镇很小，完全依靠步行，不需要任何市内交通。如果自驾，停车场很好找，但注意 “Zona de Estacionamento Condicionado” 标志，可能需要在中控台放置临时停车盘（通常在租车公司就有）。购物方面，镇上有不少卖大理石小工艺品（镇纸、象棋、餐具）的店。不必在景点门口的店急着买，多比较几家小巷里的作坊式小店，价格更实在，也可能淘到独一无二的手工品。`}</p>
            </div>
          </Section>

          <Section title={`6. 维拉索萨周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想真正沉浸在大理石之城的夜晚静谧中，建议在这里住一晚。广场附近就有几家由古老贵族宅邸改造的精品旅馆，比如 “Hotel Convento do Espinheiro” 虽不在镇中心但由修道院改建，氛围绝佳；或者选择镇内的 “Casa de Vila Viçosa” 等家庭客栈，更能体验本地生活。晚餐，一定要尝试阿连特茹地区的风味。推荐广场旁的 “Restaurante O Touro” 或小巷里的 “Taberna do Gabão”。必点 “Ensopado de Borrego”（阿连特茹风味羔羊炖汤），用面包蘸着浓汤吃，鲜美无比。“Porco Preto”（黑猪肉）的各种做法也是顶级享受。配上一杯当地产的 “Redondo” 或 “Reguengos” 产区的红酒，醇厚有力，完美适配乡野佳肴。早餐，可以去街角的老咖啡馆，点一杯浓咖啡和一个“Marmelada”（木瓜酱）涂抹的烤面包，甜腻中开启新一天。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间有富余，强烈推荐两个方向：一是向北驱车约30分钟，抵达边境小镇埃尔瓦斯（Elvas）。它拥有星形堡垒的世界遗产，与维拉维索萨的奢华形成鲜明对比，展现了葡萄牙军事工程的巅峰，那种粗犷的泥土防御工事与大理石宫殿的精致反差极大。二是向东南方向探索，你会真正进入 “大理石国度”，路过如 “博尔巴（Borba）” 这样的城镇，看到露天的大型石采石场——巨大的白色断面如同山体的伤口，震撼地揭示了维拉维索萨所有美丽的源头。你可以参观那里的石材工坊，看看现代机器如何切割这些古老的岩石，完成一次从“成品”回溯到“原料”的深度认知循环。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`维拉维索萨的灵魂，在于一种“内敛的奢华”。它不是将金银披挂在身上，而是将整片土地最珍贵的骨骼——大理石，铺陈在脚下，垒砌成家园。走在它的街上，你能触摸到一个王朝用最实在的方式书写的自信：我们的永恒，就铸在这些温润而坚硬的石头里。这份骄傲，至今仍在每一寸反光的街面上静静流淌。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/braganca-castle-old-town-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉干萨城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bragança Old Town and Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/silves-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡尔维什城堡（红砂岩城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Silves Castle</p>
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
