import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦茨旅游攻略：多瑙河畔的巴洛克珍宝与神秘地下城指南',
  description: '探索匈牙利瓦茨(Vác)的巴洛克教堂与神秘干尸地下室，这份深度游攻略带你避开人流，漫步于多瑙河湾的绝美古城。',
}

export default function VacBaroqueCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瓦茨', href: '/attractions/vac-baroque-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦茨・Vác・匈牙利・佩斯州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经看腻了布达佩斯的人山人海，想找一处安静又震撼的“宝藏小城”，那今天这份瓦茨私藏旅游攻略，请你一定收好。它就在多瑙河那个优雅的大转弯处，距离布达佩斯不过半小时车程，却像被时光遗忘的博物馆。这里没有汹涌的旅行团，只有街道两旁如同奶油蛋糕般精致的柠檬黄、淡粉色巴洛克建筑，和一座藏着惊人秘密的教堂地下室——那里沉睡着18世纪、面容栩栩如生的“巴洛克干尸”。作为你的专属向导，这份自由行指南将带你穿透华丽的表面，触摸一段关于信仰、死亡与艺术复兴的厚重历史。准备好，我们一起躲开人潮，开启这场多瑙河畔的深度时光漫步。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你已经看腻了布达佩斯的人山人海，想找一处安静又震撼的“宝藏小城”，那今天这份瓦茨私藏旅游攻略，请你一定收好。它就在多瑙河那个优雅的大转弯处，距离布达佩斯不过半小时车程，却像被时光遗忘的博物馆。这里没有汹涌的旅行团，只有街道两旁如同奶油蛋糕般精致的柠檬黄、淡粉色巴洛克建筑，和一座藏着惊人秘密的教堂地下室——那里沉睡着18世纪、面容栩栩如生的“巴洛克干尸”。作为你的专属向导，这份自由行指南将带你穿透华丽的表面，触摸一段关于信仰、死亡与艺术复兴的厚重历史。准备好，我们一起躲开人潮，开启这场多瑙河畔的深度时光漫步。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦茨`} />
                <InfoRow label="英文名称" value={`Vác`} />
                <InfoRow label="正式名称" value={`Vác`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`佩斯州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瓦茨的历史，是一部典型的东欧城市兴衰史诗。它早在11世纪就已建立，并很快成为重要的主教座堂城市，其宗教地位在匈牙利王国时期举足轻重。然而，它的命运在16世纪被彻底改写：奥斯曼帝国的大军席卷而来，瓦茨被占领并遭受了严重破坏，往日的荣光几乎被抹去。直到18世纪，随着奥斯曼势力的退却和哈布斯堡王朝统治的巩固，瓦茨才迎来了凤凰涅槃般的“巴洛克复兴”。这场重建不是简单的修复，而是一次雄心勃勃的城市规划与艺术宣言。当时的精英们决心用当时欧洲最流行、最富表现力的巴洛克风格，将瓦茨从废墟中重建为一座展示天主教胜利与新秩序的理想城市。因此，我们今天看到的瓦茨，其城市肌理与核心建筑群，本质上是一座18世纪的“新建”巴洛克城市。它不像许多欧洲古城那样是层层累积的历史拼贴画，而是一气呵成的时代作品，这在整个多瑙河流域乃至中欧都极为独特，使其成为研究后奥斯曼时期城市重建与巴洛克艺术传播的绝佳活标本。`} />
                <InfoRow label="建筑特色" value={`漫步在瓦茨的主教座堂广场，你会瞬间被眼前的色彩与韵律俘获。这里的巴洛克建筑绝非冰冷石材的堆砌，而是带着匈牙利平原阳光温度的“温柔巨作”。最核心的圣米哈伊大教堂，其立面是明快而温暖的柠檬黄色，在阳光下仿佛一块巨大的、正在融化的黄油。立面被巨大的白色壁柱优雅地分割，形成强烈的垂直动势，直指苍穹。顶部精心设计的弧形山墙并非平直，而是如同戏剧帷幕般起伏，中央镶嵌着精致的宗教雕塑。最引人注目的是教堂两侧那一对洋葱头式的钟楼，它们不像维也纳或德累斯顿的巴洛克穹顶那样浑圆霸气，而是更显修长、秀气，顶上覆盖着深绿色的铜锈，在蓝天映衬下宛如童话中的尖顶帽。建筑表面的石膏装饰（Stucco）异常丰富，卷曲的草叶、丰满的天使、飘逸的衣带，所有这些装饰都不是呆板的雕刻，而是充满了弹性和动感，仿佛下一秒就会从墙面上流淌下来。建筑的色彩是统一的暖色调“合唱”：淡鹅黄、奶油白、陶土红，彼此和谐共鸣，让整座城市像一盒打开的、甜蜜的马卡龙。`} />
                <InfoRow label="建筑风格" value={`瓦茨是“巴洛克风格”在东欧地区一次极具地方特色的精彩演绎。巴洛克艺术的核心是“动感、戏剧性与情感渲染”，旨在用令人惊叹的视觉效果激发信徒的虔诚。在瓦茨，这种风格被诠释得淋漓尽致，但又带上了一丝匈牙利本土的质朴与庄严。首先看动态感：无论是教堂波浪形的立面山墙，还是街道建筑立面那些凹凸有致的曲线设计，都拒绝直线的平庸，引导你的视线不断跳跃、游走。其次是戏剧性的光线运用：教堂内部，光线并非均匀洒入，而是通过高侧窗精心设计，集中照亮镀金的祭坛和栩栩如生的圣像，让核心区域如同舞台被追光灯点亮，营造出神圣而崇高的氛围。最后是情感的直击：建筑内外大量的雕塑，人物表情极度丰富——圣徒的狂喜、天使的欢愉、甚至苦难的痛楚，都刻画得入木三分，直接与观者的情感对话。不过，瓦茨的巴洛克少了些维也纳式的极度奢华与金碧辉煌，多了一份属于小镇的规整、明朗与色彩趣味，可称之为“乡土巴洛克”或“改革巴洛克”，它更注重整体城市的和谐与宜居感，而不仅仅是单体建筑的炫技。`} />
                <InfoRow label="文化价值" value={`对于匈牙利人而言，瓦茨远不止是一个旅游景点，它是一枚重要的民族精神徽章。它象征着在经历外族占领的“黑暗时期”后，匈牙利民族与文化通过艺术与信仰进行的伟大复兴与自我确认。这些巴洛克建筑，是收复失地后，用石头书写的一篇篇胜利宣言和希望诗篇。它们塑造了这座城市乃至该地区人们的美学基因，那种对明快色彩、优雅曲线和精致细节的偏爱，至今影响着当地人的生活方式和审美情趣。而那个举世罕见的“干尸地下室”，则从另一个更幽暗、更哲学的层面，参与构建了本地文化中对生命、死亡与记忆的独特认知。它不是一个恐怖猎奇的场所，而是一个庄重的纪念地，迫使一代代来访者直面生命的有限与永恒的议题。在现代社会，瓦茨成功地将这份沉重的历史与独特的遗产转化为一种温和而深刻的文化吸引力。它提醒人们，历史不仅有王侯将相的丰功伟业，也有普通个体的生老病死；辉煌不仅体现在皇宫剧院，也凝结在这些宁静小镇的教堂广场上。它让每个到访者都能在惊叹于建筑之美时，也沉思生命之秘。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 瓦茨一日游打卡路线攻略：从阳光教堂到神秘地下的完美动线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，跟着我的这份自由行指南，我们把一天时间高效而悠闲地交给瓦茨。上午（10:00-13:00）： 行程的起点毫无悬念，就是城市心脏——主教座堂广场（Székesegyházi tér）。先别急着进教堂，在广场中央转个圈，感受一下被糖果色巴洛克宫殿环抱的幸福感。然后，重点拜访圣米哈伊大教堂（Váci Székesegyház），花至少一个小时细细品味内部炫目的主祭坛和侧廊小祭坛。出来后，参观隔壁的主教宫（Püspöki Palota），现在它是城市博物馆，能帮你快速梳理瓦茨的历史脉络。中午（13:00-14:30）： 从广场辐射出的康科迪亚街（Concordia utca） 是找午餐的好地方。选一家有户外座位的餐厅，点一份地道的匈牙利炖牛肉（Gulyás），看着街上零星的行人和有轨电车慢悠悠地驶过。下午（14:30-17:00）： 重头戏来了！步行几分钟，前往多米尼加教堂与修道院（Dominikánus templom és kolostor）。你的目标不是地面教堂（虽然也很美），而是它底下的干尸地下室（Momia sírkamrák）。请预留足够时间，这里的震撼需要慢慢消化。出来后，如果需要平复心情，可以漫步到不远处的圣安娜教堂（Szent Anna-templom），它的内部是纯净的白色与金色，氛围宁静至极。傍晚（17:00以后）： 一定要走到多瑙河畔。沿河散步，看夕阳将河水和对岸的远景染成金色，回想这一天所见的光影与幽暗，这才是完整的瓦茨体验。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  大教堂的“洋葱头”与日光之舞：请一定在晴天的上午仰望圣米哈伊大教堂的双子钟楼。阳光照射在柠檬黄的立面和墨绿色的洋葱头顶上，会产生一种奇妙的光晕。仔细看，洋葱头顶的瓦片排列和装饰线条并非完全对称，每个弧面反射光线的角度都略有不同，这让整个塔楼在静态中充满了微妙的动态视觉，仿佛随着日移而轻轻呼吸。它是瓦茨天际线最温柔的冠冕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  主祭坛的“戏剧高潮”：进入大教堂内部，径直走向主祭坛。这组庞大的镀金木雕作品是巴洛克戏剧性的巅峰。中心是天使簇拥着圣米哈伊屠龙的场景，但最精彩的是上方那一片“荣耀云”。雕刻的云朵翻滚涌动，众多小天使（Putti）从云中探出身子，姿态各异，有的吹号，有的撒花。所有人物衣袂飘飘，充满了向上的升腾感。站在正前方，你会感觉整个祭坛仿佛正在挣脱墙壁的束缚，向天堂飞升，极具情感冲击力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  干尸地下室的一张面孔：在地下室昏暗的灯光下，一具具身着18世纪服饰的干尸躺在玻璃棺中。不要因为害怕而匆匆走过。请在其中一具（特别是那位保存极好、被称为“市政官”的干尸）前驻足片刻。仔细观察他的面部：皮肤已成为深褐色皮革质地，但五官轮廓清晰，甚至还能看到胡须的根根纤维。最触动人心的是他微微张开的嘴，仿佛叹息刚刚停止。你会瞬间忘记这是一具“尸体”，而感觉是一位沉睡中的古人，时间的残酷与奇迹在此凝固。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  圣安娜教堂的“静谧之光”：作为下午行程的缓冲，圣安娜教堂内部是另一番天地。这里没有炫目的镀金，主色调是洁白与浅金。阳光透过高处的窗户，被内部的繁复石膏装饰过滤、打散，变成柔和漫射的光，均匀地铺满整个空间。祭坛上的圣母像面容慈和，光线恰好落在她的脸颊上。坐下来静默五分钟，只能听到自己的呼吸和远处隐约的脚步声，上午的视觉喧嚣和地下室的阴郁感在此被彻底净化。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想让你的瓦茨之旅完美无忧，这几个坑一定要避开，这份避坑指南请收好：第一，时间选择是王道。 最佳游览季节是春末（5-6月）和初秋（9-10月），天气宜人，色彩最美。务必避开周一！因为干尸地下室和城市博物馆等重要室内场馆周一通常闭馆，你会错过核心体验。第二，穿着与装备有讲究。 参观教堂（尤其是地下室）要求衣着得体（避免背心、短裤、超短裙）。教堂内部和古老街道多为石板或光滑地砖，请务必穿一双绝对舒适、防滑的平底鞋。另外，干尸地下室内部温度较低且湿度感知明显，即使夏天也建议带一件薄外套。第三，巧避人流与门票陷阱。 瓦茨本身游客不多，但干尸地下室空间狭小，旅行团可能在上午10点后抵达。建议将地下室参观安排在下午刚开门（通常14:00）或闭馆前一小时，体验最佳。购买门票时，可以询问是否有包含大教堂、博物馆和地下室的“联票”，通常更划算。大教堂主体部分免费，但祭坛区或塔楼可能单独收费，看清标识。最后，常规安全不可忘。 瓦茨治安很好，但在游客集中的广场和电车上，仍需看管好随身钱包和手机。多瑙河畔散步时，注意脚下，部分区域护栏较低。`}</p>
            </div>
          </Section>

          <Section title={`6. 瓦茨周边住宿与美食攻略：住在巴洛克老城里的秘诀`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`虽然瓦茨可以从布达佩斯轻松一日往返，但如果你想过一个宁静的夜晚，沉浸在小城的暮色与晨光中，老城区内就有不错的选择。住宿方面，可以寻找由巴洛克老宅改建的精品酒店或公寓（Panzió），它们通常隐藏在内院，房间挑高很高，有着古老的木梁和厚实的墙壁，住在里面本身就是一种历史体验。推荐围绕主教座堂广场或康科迪亚街附近寻找。美食是匈牙利之旅的亮点。午餐可以试试 “Kéhli Vendéglő” 或其附近的传统餐馆，除了必点的炖牛肉，一定要尝试当地特色的鱼汤（Halászlé）——多瑙河的馈赠，汤色鲜红，味道浓郁辛辣。甜点方面，找一家咖啡馆，点一份匈牙利奶油蛋糕（Dobos torta），其焦糖顶和巧克力奶油与巴洛克风格的甜蜜感异曲同工。晚餐后，无需特定目的地，就在那些暖色调的建筑巷弄里随意走走，灯光亮起，窗棂的影子投在石子路上，你会发现白日里喧嚣的广场空无一人，整座古城仿佛是你的私人庭院。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果意犹未尽，有两个地方可以轻松延伸你的探索：一是多瑙河滨水步道的北端。 从市中心往北沿河漫步约15分钟，你会看到一座古老的石桥遗迹和一片更开阔的河景。这里通常是本地人遛狗、跑步的地方，对岸是郁郁葱葱的森林和远处的山峦轮廓，视角与市中心迥异，格外开阔宁静。二是探索主教宫背后的花园与小巷。 主教宫并非孤立的建筑，其后方连接着一片不为人知的小花园和迷宫般的宁静住宅区。这里的建筑色彩更为朴素，生活气息更浓，阳台上盛开着天竺葵。随便挑一条小巷走进去，你可能会偶遇一个静谧的小广场，或者一扇装饰着精美铁艺的大门，这种“探险”能让你触碰到瓦茨作为生活城镇而非旅游景点的真实脉搏。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦茨的灵魂，在于它用一种近乎天真的明媚色彩，包裹住了关于重生与死亡的所有沉思。它告诉你，历史不总是灰暗的，它可以被涂成柠檬黄和淡粉色；而生命终局也未必阴森，它可以被庄重地保存、凝视，成为理解永恒的一扇窗。在这座小城，辉煌的巴洛克与沉寂的地下室仅一砖之隔，多瑙河的浩荡水流与教堂的静谧钟声日夜交响——它教会我们的，正是在光的极致与影的深邃之间，找到那份平静行走的勇气。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kalocsa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monostor-fortress-komarom" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科马罗姆巨型要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monostor Fortress (Komárom)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eger-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃格尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eger Castle</p>
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
