import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多克姆深度旅游攻略：六角形水上迷城与风车朝圣古镇漫步指南',
  description: '探索荷兰弗里斯兰省的多克姆Dokkum，一座拥有完美六角形护城河与巨大风车的朝圣古镇。这份深度游攻略带你避开人潮，解锁十一城的水乡魅力。',
}

export default function DokkumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '多克姆', href: '/attractions/dokkum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`多克姆・Dokkum・荷兰・弗里斯兰省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你对荷兰的印象还停留在阿姆斯特丹的运河与郁金香，那今天这份多克姆私藏旅游攻略，可要好好收下了。想象一下：你站在一座被几何级完美的六边形水道温柔环抱的古镇里，身边是咿呀转动的巨大风车，脚下是通往北方朝圣之路的古老石板。这里就是多克姆，弗里斯兰“十一城”中一颗被水路精心雕琢的明珠。它不像热门景点那样喧闹，却藏着荷兰北部最原汁原味的水乡生活与历史层叠的印记。作为你的专属向导，这份自由行指南将带你深入这座“水上堡垒”的肌理，从如何沿着护城河漫步，到在哪家咖啡馆能拥有风车的最佳视野，再到如何理解它作为圣博尼法斯殉道之地的沉重与宁静。这是一份带着温度的避坑指南，更是一次通往时光深处的邀请。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你对荷兰的印象还停留在阿姆斯特丹的运河与郁金香，那今天这份多克姆私藏旅游攻略，可要好好收下了。想象一下：你站在一座被几何级完美的六边形水道温柔环抱的古镇里，身边是咿呀转动的巨大风车，脚下是通往北方朝圣之路的古老石板。这里就是多克姆，弗里斯兰“十一城”中一颗被水路精心雕琢的明珠。它不像热门景点那样喧闹，却藏着荷兰北部最原汁原味的水乡生活与历史层叠的印记。作为你的专属向导，这份自由行指南将带你深入这座“水上堡垒”的肌理，从如何沿着护城河漫步，到在哪家咖啡馆能拥有风车的最佳视野，再到如何理解它作为圣博尼法斯殉道之地的沉重与宁静。这是一份带着温度的避坑指南，更是一次通往时光深处的邀请。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`多克姆`} />
                <InfoRow label="英文名称" value={`Dokkum`} />
                <InfoRow label="正式名称" value={`Dokkum`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`弗里斯兰省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`多克姆的历史地位，紧紧缠绕着两条主线：贸易与信仰。作为弗里斯兰“十一城”之一，它在中世纪是北海贸易网络中的一个活跃节点，其发达的航运和盐业为这座小城积累了最初的财富。然而，让它真正铭刻在欧洲史册上的，是公元754年发生在这里的一场悲剧：圣博尼法斯，这位致力于在日耳曼地区传播基督教的“日耳曼使徒”，在前往多克姆为信徒施坚信礼的途中，与随行人员一同被杀害。这一事件震动了整个基督教世界，使得多克姆瞬间成为北欧重要的朝圣地之一，无数信徒沿着水路和陆路前来瞻仰。尽管在16世纪的荷兰独立战争中，城市几乎被西班牙军队摧毁，但随后重建的星形堡垒系统（即那著名的六角形护城河）又赋予了它全新的军事防御地位。可以说，多克姆是一部微缩的史诗，从异教与基督教的冲突，到汉萨同盟的商贸繁荣，再到近代的军事工程，层层叠叠的历史都在这一池碧水和环绕的土墙上留下了无声的注脚。`} />
                <InfoRow label="建筑特色" value={`多克姆的建筑，是“水陆交融”一词最诗意的注解。最令人过目不忘的，无疑是那条如手绘般精准的六角形护城河。它不是自然形成的弯曲水道，而是经过精密计算的几何杰作，碧绿的河水像一条光滑的丝带，将老城区严丝合缝地包裹其中。河岸是缓坡草坪，点缀着古老的榆树，倒影清晰得让整个城市仿佛漂浮在水上。城内，蜿蜒的街道引向中心广场，那里矗立着重建后的市政厅，其红砖立面与白色窗框是典型的弗里斯兰风格，庄重而不失亲切。而城市天际线的统治者，无疑是那座名为“德兹万”的巨大风车。它建于1862年，暗红色的木质塔身庞大而敦实，四片巨大的帆翼在北海吹来的风中缓缓转动，吱呀声是小镇永恒的背景音。这些建筑——几何的水、砖砌的屋、木制的风车——共同构成了一幅和谐而稳固的画面，色彩是低饱和度的砖红、墨绿与天蓝，材质是历经风霜的木头与砖石，在北方清透的光线下，散发出一种沉静而坚实的美感。`} />
                <InfoRow label="建筑风格" value={`多克姆的整体建筑风格可以概括为 “弗里斯兰传统风格” ，这是一种深受地理和历史影响的北方实用主义美学。由于地处低地且多水，建筑普遍敦实、防风、注重功能性。你看到的那些沿河或街边的住宅，大多有着经典的 “阶梯山墙” 。这种山墙的顶部呈阶梯状收缩，最初是为了减少风阻，同时方便用滑轮将货物吊运至顶楼仓库（因为狭窄的楼梯不便搬运），后来演变为一种装饰性极强的特色符号。砖石是绝对的主角，多为深红或暗橙色，砌工精细。窗户通常又高又窄，分成许多小格玻璃，白色窗框格外醒目，这不仅是为了采光，也是为了在视觉上打破大片砖墙的沉闷感。城内一些重要建筑，如老市政厅，则带有一些文艺复兴风格的细节，但整体依然克制。而那条星形堡垒护城河本身，就是荷兰黄金时代军事防御工程风格的杰出代表，强调对称、角度和开阔的射界，将实用性的军事设计升华为了令人惊叹的城市景观艺术。在这里，风格不是炫技，而是生活与历史共同书写的、恰到好处的答案。`} />
                <InfoRow label="文化价值" value={`对于现代的多克姆人而言，他们的城市是身份认同的双重锚点：水上家园与精神故乡。那条完美的护城河不仅是旅游名片，更是社区生活的中心。夏天，人们在此游泳、划船；冬天，若运河结上厚冰，这里便可能成为传奇的“冰上十一城巡回赛”的一站，那是融入每个弗里斯兰人血液的盛大节日。圣博尼法斯的殉道故事，则转化为一种持续的文化滋养。每年的六月，相关的纪念活动会让小镇沉浸在历史剧与宗教仪式的氛围中，提醒着人们这片土地的信仰深度。同时，作为“北方朝圣之路”上的重要一站，多克姆迎接着来自欧洲各地、背负行囊的现代朝圣者，他们为小镇带来了静谧的、流动的能量。这里的文化不是博物馆里的陈列，而是活着的——在风车依然可以磨谷物的转动中，在本地人骑自行车掠过水边桥廊的日常里，在咖啡馆里人们用喉音很重的弗里斯兰语交谈的瞬间。它证明了，一个地方可以同时是坚固的堡垒、繁荣的商埠、神圣的遗址，最终归于一个宁静而自足的当代家园。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 多克姆一日游路线攻略：从水上护城河到朝圣古迹的完美漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行步行游览路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条一日游路线，就像解开一个水上谜题，让你轻松打卡所有精华。上午，我们从最具象征意义的东门（De Zijl）开始，这里是古城的入口，也是拍摄六角形水道与风车同框的绝佳点位。然后，顺时针沿着护城河外侧的步道漫步半圈，感受这座“星堡”的几何魔力，呼吸青草与河水的清新气息。从北边的桥进入老城，穿过宁静的住宅区，抵达市政厅广场，不妨进去看看当地的博物馆（Het Admiraliteitshuis），快速了解城市脉络。中午，就在广场附近的咖啡馆享用一顿简单的荷兰三明治午餐。下午，深入老城核心，拜访圣博尼法斯教堂，感受那份历史的肃穆。随后前往不远处的殉教纪念碑静思片刻。接着，走向城市的另一明星——德兹万风车，如果开放，一定要登上内部，看看巨大的木质齿轮结构。最后，沿着护城河内侧的另一半散步返回，光影在下午会变得尤为柔和。傍晚，在东门附近找一家靠水的餐厅，点一杯本地啤酒，看着风车帆翼被夕阳染成金色，为这一天画上完美句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  六角形水角的几何魔法：一定要走到护城河的其中一个“角”上，比如东北角。站在那里，你会发现视线可以沿着笔直的水道望向两个方向，形成完美的夹角。水面像一面巨大的镜子，倒映着对岸色彩柔和的房屋、蓝天和流云。仔细看，水边的石砌堤岸并非垂直，而是有一个舒缓的斜坡伸入水中，长满了青苔，偶尔有野鸭顺着斜坡笨拙地爬上岸。这种精确到冷酷的几何图形，与自然生长出的柔软草木、荡漾的波光结合在一起，产生一种奇妙的、近乎神性的和谐感，你会瞬间理解荷兰人如何将水利工程变为美学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  德兹万风车的内部心跳：如果风车开放参观，请务必进去。昏暗的光线里，首先闻到的是陈年木头与谷物粉尘混合的温暖气息。抬起头，巨大的中轴木柱如同大树的躯干，贯穿上下。周围是层层叠叠的木质齿轮、传动杆和石磨，它们沉默着，却仿佛蓄积着风的力量。把手轻轻放在粗糙的木梁上，当风车在外界风力的推动下开始转动时，你能感觉到整个塔楼内部传来一阵轻微的、有节奏的震颤，伴随着木头摩擦的“嘎吱”声，仿佛这栋建筑是一个活着的巨兽，正缓慢而有力地呼吸、心跳。这是工业革命前，人类智慧与自然力量最直接、最雄伟的对话现场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  老城门下的石板回声：东门（De Zijl）是进入古城的主要通道。穿过门洞时，留意脚下被岁月磨得光滑甚至有些凹陷的石板路。抬起头，门洞内侧的砖石上可能还有当年吊桥铁链摩擦留下的痕迹。光线从圆拱形的门洞另一端透进来，形成一道光廊。站在这儿，你能清晰听到两种声音的回响：门外，是现代自行车轮胎驶过柏油路的沙沙声；门内，是老城静谧中传来的咖啡杯轻碰声和自己的脚步声。这一门之隔，如同一个时间的过滤器，将喧嚣滤去，只留下古镇缓慢的脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  殉教纪念碑旁的微妙光影：在圣博尼法斯教堂附近的殉教地纪念碑，通常是一个简洁的十字架或雕塑。请选择一个晴朗的下午前往。你会发现，北欧低角度的阳光穿过旁边大树的枝叶，在纪念碑粗糙的石材表面投下晃动、破碎的光斑。光斑随着微风轻轻跳跃、移动，时而在冰冷的石头上，时而在旁边的绿草地上。这种动态的光影游戏，与纪念碑所代表的、凝固于历史那一刻的沉重死亡，形成了一种无声而强大的对话。它不像宏伟教堂那样令人震撼，却以一种更私密、更自然的方式，让你感受到时间对记忆的冲刷与抚慰。`}</p>
            </div>
          </Section>

          <Section title={`5. 多克姆自由行避坑指南与实用贴士`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`首先，最佳游览时间是春季（5-6月）和初秋（9月）。此时天气温和，游人相对较少，护城河边的花草也正茂盛。盛夏虽然热闹，但住宿紧张且价格较高；冬季则风大湿冷，许多小店可能提前关门。穿着建议至关重要：无论什么季节，务必准备一双舒适防滑的步行鞋！老城内的石板路凹凸不平，河边步道也可能潮湿。外加一件防风外套，弗里斯兰的天气说变就变。如何避开人流？核心秘诀是“早”和“绕”。大多数一日游旅行团会在上午10点后涌入主广场和风车。你可以反其道而行，清晨8-9点先去护城河外围漫步，享受无人的宁静。午餐时间（12:30-13:30）反而是参观教堂和博物馆的好时机。另外，强烈建议租一辆自行车！这是融入本地的最佳方式，可以轻松骑行环绕整个六角形护城河，甚至探索城外广阔的田园风光，租车点在火车站或旅游中心附近很容易找到。最后，安全与财物方面，多克姆非常安全，但游览时仍需看管好随身物品，尤其在拥挤的咖啡馆或市场。`}</p>
            </div>
          </Section>

          <Section title={`6. 多克姆住宿与美食攻略：住在水边，品味弗里斯兰`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想沉浸式体验多克姆的晨昏，不妨在古城内或护城河畔住一晚。推荐寻找一家由老房子改造的精品B&B，通常主人会热情地为你介绍那些旅行指南上没有的角落。如果想位置绝佳，可以选择护城河沿岸的历史酒店，清晨推开窗就是水光潋滟与风车景观。餐饮方面，一定要尝尝弗里斯兰本地风味。午餐可以去广场边的 ‘t Heerenlogement 这类传统餐馆，点一份“Suikerbrood”（一种香甜的弗里斯兰糖面包）配咖啡，或者尝尝扎实的荷兰煎饼。晚餐推荐 Eetcafé De Hoekstien，氛围轻松，提供用本地食材烹制的现代荷兰菜，比如新鲜的北海鱼。别忘了喝一杯弗里斯兰本地啤酒，如‘Us Heit’。在德兹万风车脚下，还有一家可爱的茶室，坐在室外，风车巨大的影子缓缓从你身上移过，搭配一块苹果派，是下午茶的不二之选。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`多克姆的魅力，也在于它身处弗里斯兰十一城的网络之中。如果你有余力，有两个周边小众景点值得延伸探索。一是北边约20分钟车程的霍尔沃德（Holwerd），这是一个宁静的渔港小镇，从这里可以乘渡轮前往阿默兰岛——一个几乎无车的世外桃源，拥有宽阔的沙滩和自然保护区，非常适合喜欢荒野徒步和观鸟的人，这是一日逃离的完美选择。二是向南约25公里，抵达弗里斯兰省的首府吕伐登（Leeuwarden）。这座更大的城市拥有精彩的弗里斯博物馆、倾斜的老霍夫大厦，以及遍布运河的繁华街景，与多克姆的静谧形成有趣互补。两地之间公共交通便利，可以用大半天时间感受省会的活力，再返回多克姆的宁静水岸。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`多克姆的灵魂，藏在那道完美到不真实的六角形水线与缓慢转动的风车叶片的节奏里。它是一座用几何学构筑的水上迷宫，却盛满了关于信仰、贸易与生存的柔软故事。在这里，你会发现，最深刻的宁静并非源于与世隔绝，而是源于一种历经风暴与变迁后，找到的与水和风共存的、从容不迫的平衡。它不急于诉说，只等你沿着它的边缘，慢慢走成一个圈。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/haarlem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈勒姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haarlem Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/staphorst-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯塔福斯特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Staphorst</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hoorn-netherlands" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍伦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hoorn</p>
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
