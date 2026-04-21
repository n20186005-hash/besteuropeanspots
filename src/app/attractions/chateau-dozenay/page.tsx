import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥兹奈城堡 Château d’Ozenay｜沉睡在勃艮第葡萄园间的时光琥珀 - 最佳欧洲景点',
  description: '车子拐下主干道，驶入一条被高大椴树荫蔽的小路，两边是整齐的葡萄藤，正在九月的阳光下泛着金绿的光。然后，它就那样出现了——没有恢弘的远景，没有咄咄逼人的尖塔，就像一位身着旧式天鹅绒外套的老绅士，只是安静地坐在自家花园里。奥兹奈城堡的第一眼，是一种沉静的蜜糖色。那种石头经过四百年风雨和日光亲吻后特有的温',
}

export default function ChateauDozenayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '奥兹奈', href: '/destinations/france' },
            { label: '奥兹奈城堡', href: '/attractions/chateau-dozenay' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥兹奈城堡・Château d'Ozenay・法国・奥兹奈`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主干道，驶入一条被高大椴树荫蔽的小路，两边是整齐的葡萄藤，正在九月的阳光下泛着金绿的光。然后，它就那样出现了——没有恢弘的远景，没有咄咄逼人的尖塔，就像一位身着旧式天鹅绒外套的老绅士，只是安静地坐在自家花园里。奥兹奈城堡的第一眼，是一种沉静的蜜糖色。那种石头经过四百年风雨和日光亲吻后特有的温润色泽，与背后更苍翠的山林和面前如镜的一池碧水，构成了完美的勃艮第乡村三重奏。空气里有割过的青草香，远处偶尔传来一声牛羊的哞叫，除此之外，只有风穿过树林的沙沙声，和时间本身流淌的静谧。
推开那扇厚重的橡木门，仿佛不是进入一座建筑，而是踏入了一个尚未完全醒来的旧梦。室内的光线是幽暗而温柔的，从高高的、窗户较小的窗口斜射进来，在磨得发亮的陶土地砖上投下菱形的光斑。空气中有一股好闻的、复杂的旧时光气味：是古老橡木梁柱散发出的淡淡木香，是石墙在夏日里沁出的微微凉意，是书架上皮革封面的气息，还隐约混合着从厨房方向飘来的、昨天烤面包留下的酵母甜香。这里没有博物馆那种冰冷的警戒线和刺眼的射灯，每一件家具、每一幅褪色的家族肖像画，都像是在昨天还有人使用过。你会感觉到，这座城堡依然在呼吸，它不是一个被展示的标本，而是一个依然有脉搏的生命体。
最动人的莫过于那个被U形建筑环抱的水池庭院。它不像凡尔赛的喷泉那样炫耀力量，而是一方平静的、倒映着天空和云影的矩形水面。水池边是随意摆放的几把铁艺椅子，漆面斑驳。你可以坐在这里，看蜻蜓点水，看城堡斜坡屋顶那独特的“勃艮第顶”在池中的倒影如何随着微风轻轻破碎又重组。这里没有游客的喧哗，你几乎能听到几个世纪以前，城堡的女主人也许就坐在相同的位置，做着针线活，听着孩子们在庭院里嬉戏的笑声。这种宁静不是空旷的寂静，而是一种被生活沉淀填满的、丰盈的安静。
奥兹奈的魅力，正在于它的“未完成感”或者说“非完美性”。墙面的石头有些许风化，木地板的吱呀声讲述着真实的年龄，家具的摆设透着家常的随意。它坦然展示着时间的痕迹，不试图去伪装成它初建时的崭新模样，也不迎合现代人对“复古”的精致想象。这种毫不矫饰的真实，这种与周围葡萄园、村庄和四季轮转紧密相连的接地气的高贵，让它在众多修缮一新的城堡中脱颖而出。它让你相信，历史不是教科书上冰冷的章节，而是可以触摸、可以感受的，带着温度和气味的连续体。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下主干道，驶入一条被高大椴树荫蔽的小路，两边是整齐的葡萄藤，正在九月的阳光下泛着金绿的光。然后，它就那样出现了——没有恢弘的远景，没有咄咄逼人的尖塔，就像一位身着旧式天鹅绒外套的老绅士，只是安静地坐在自家花园里。奥兹奈城堡的第一眼，是一种沉静的蜜糖色。那种石头经过四百年风雨和日光亲吻后特有的温润色泽，与背后更苍翠的山林和面前如镜的一池碧水，构成了完美的勃艮第乡村三重奏。空气里有割过的青草香，远处偶尔传来一声牛羊的哞叫，除此之外，只有风穿过树林的沙沙声，和时间本身流淌的静谧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的橡木门，仿佛不是进入一座建筑，而是踏入了一个尚未完全醒来的旧梦。室内的光线是幽暗而温柔的，从高高的、窗户较小的窗口斜射进来，在磨得发亮的陶土地砖上投下菱形的光斑。空气中有一股好闻的、复杂的旧时光气味：是古老橡木梁柱散发出的淡淡木香，是石墙在夏日里沁出的微微凉意，是书架上皮革封面的气息，还隐约混合着从厨房方向飘来的、昨天烤面包留下的酵母甜香。这里没有博物馆那种冰冷的警戒线和刺眼的射灯，每一件家具、每一幅褪色的家族肖像画，都像是在昨天还有人使用过。你会感觉到，这座城堡依然在呼吸，它不是一个被展示的标本，而是一个依然有脉搏的生命体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的莫过于那个被U形建筑环抱的水池庭院。它不像凡尔赛的喷泉那样炫耀力量，而是一方平静的、倒映着天空和云影的矩形水面。水池边是随意摆放的几把铁艺椅子，漆面斑驳。你可以坐在这里，看蜻蜓点水，看城堡斜坡屋顶那独特的“勃艮第顶”在池中的倒影如何随着微风轻轻破碎又重组。这里没有游客的喧哗，你几乎能听到几个世纪以前，城堡的女主人也许就坐在相同的位置，做着针线活，听着孩子们在庭院里嬉戏的笑声。这种宁静不是空旷的寂静，而是一种被生活沉淀填满的、丰盈的安静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥兹奈的魅力，正在于它的“未完成感”或者说“非完美性”。墙面的石头有些许风化，木地板的吱呀声讲述着真实的年龄，家具的摆设透着家常的随意。它坦然展示着时间的痕迹，不试图去伪装成它初建时的崭新模样，也不迎合现代人对“复古”的精致想象。这种毫不矫饰的真实，这种与周围葡萄园、村庄和四季轮转紧密相连的接地气的高贵，让它在众多修缮一新的城堡中脱颖而出。它让你相信，历史不是教科书上冰冷的章节，而是可以触摸、可以感受的，带着温度和气味的连续体。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥兹奈城堡`} />
                <InfoRow label="英文名称" value={`Château d'Ozenay`} />
                <InfoRow label="正式名称" value={`Château d'Ozenay`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`奥兹奈`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座跨越四个世纪、由同一家族精心守护的勃艮第乡间贵族宅邸，是法国省级历史古迹的典范，未被过度旅游开发的活态历史见证。`} />
                <InfoRow label="建筑特色" value={`典型的17世纪早期勃艮第斜坡屋顶（“勃艮第顶”）住宅城堡，主体呈U形围合宁静水池庭院，建筑立面古朴厚重，几乎未经历代风格叠加，保存了最初的建筑材料与比例。`} />
                <InfoRow label="建筑风格" value={`法式文艺复兴晚期风格与强烈的勃艮第本土建筑传统融合，展现出一种去除了宫廷浮华、根植于土地的庄重与实用主义美学。`} />
                <InfoRow label="文化价值" value={`它并非皇家宫殿，却更珍贵地体现了法国旧制度下地方乡绅的生活哲学、与土地共生的智慧，以及一个家族通过低调的持续守护所承载的文化记忆传承。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年4月1日至10月31日对外开放，开放日为每周三、周六及周日的下午2点至6点。7月和8月的暑期，增加周二下午开放。内部参观严格由城堡管家带领导览，每日仅安排2-3场，每场时长约1.5小时，强烈建议提前在官网预订。城堡冬季（11月至次年3月）闭门维护，不接待游客，但其壮丽的外部景观与庭院仍可在公共道路上远观。`} />
              <InfoRow label="门票价格" value={`成人票12欧元。65岁以上长者及持有效学生证学生10欧元。12至18岁青少年8欧元。12岁以下儿童在成人陪同下免费。家庭套票（2成人+2儿童）30欧元。门票价格已包含强制性的法语导览服务，如需英文讲解小册子，可额外支付2欧元租借。门票收入全部用于城堡的日常维护与保护。`} />
              <InfoRow label="地址" value={`Château d'Ozenay, 71700 Ozenay, France`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是里昂圣埃克絮佩里机场（LYS）或第戎勃艮第火车站。从里昂机场出发，最便捷的方式是租车自驾，沿A6高速公路向北行驶，在“Tournus”出口驶出，随后跟随“Ozenay”的棕色旅游指示牌，穿过连绵的葡萄园和宁静的村庄，约1小时15分钟车程可达。若乘坐火车，可从巴黎里昂车站乘TGV高速列车至马孔-洛什火车站（Mâcon-Loché），车程约1小时40分钟，然后转乘前往图尔尼（Tournus）方向的区域巴士（line 310），在Ozenay村中心下车，步行约20分钟即到城堡门口，巴士班次稀疏，一天仅3-4班，务必提前查询SNCF或当地勃艮第公交时刻表。自驾是探索此区域最推荐的方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从17世纪初的法国说起。那时，波旁王朝的亨利四世刚刚结束了宗教战争，整个国家渴求和平与重建。在勃艮第这片富饶的土地上，贵族们不再需要把家修建得像军事堡垒一样森严，他们开始追求一种既能彰显地位、又适宜田园生活的宅邸。大约在1605年到1610年间，一位名叫艾蒂安·德·拉盖特的地方领主，决定在奥兹奈这个俯瞰索恩河河谷的小山丘上，建造他的新家。他请来的石匠和木匠，用的都是本地的材料：来自附近采石场的暖黄色石灰石，森林里砍伐的坚实橡木。他们设计的样式，既吸收了当时从意大利传来的文艺复兴对称美学，又顽固地保留了勃艮第本土最鲜明的标志——那个巨大、陡峭、覆盖着扁平石板瓦的“勃艮第顶”。这种屋顶坡度缓和，屋檐深远，非常适合当地多雨雪的气候。于是，一座有着优雅比例、却又充满乡土力量感的建筑诞生了，它就像从这片土地上自然生长出来的一样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡建成后，在拉盖特家族手中传承了几代人，见证了这个家族在当地政治与宗教生活中的起落。到了18世纪，它通过联姻，转入了弗勒里奥家族。这个家族与城堡的缘分更为深远。18世纪是启蒙的世纪，也是享受生活的世纪。城堡的内部装饰增添了一些那个时代的轻快元素，比如更精致的石膏线脚，更明亮的壁纸，以及从东方进口的瓷器。但家族的主人们并没有进行大刀阔斧的“现代化”改造，他们似乎深爱着这座建筑最初的样子，只是温柔地为它添上时代的注脚。庭院里的那个矩形水池，很可能就是在这一时期修砌的，它为刚硬的石建筑群注入了一抹灵动的诗意，也满足了那个时代对“自然情趣”的追求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国大革命的狂风暴雨席卷全国时，奥兹奈城堡奇迹般地躲过了被没收、拍卖甚至毁坏的命运。这很大程度上得益于它地处偏远的乡村，且当时的家族主人并非极端显赫、引人注目的大贵族，他们更接近于与农民和土地紧密联系的地方乡绅。动荡过后，城堡虽然得以保存，但家族财富已大不如前。整个19世纪和20世纪上半叶，它就像进入了沉睡。没有资金进行大规模的改建或装饰，这反而成了一种幸运。它没有被加上拿破仑三世时期浮夸的装饰，也没有被装上现代的暖气管道而凿得千疮百孔。它只是静静地坐在那里，在葡萄园的环绕下，任由光阴在石墙上留下印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的守护神出现在20世纪中叶。现任城堡主人的祖父母，在二战后接手了这座日渐衰败的祖产。面对屋顶的渗漏、木结构的虫蛀，他们没有选择将其改造成酒店或豪华别墅，而是做出了一个充满远见和勇气的决定：进行“保守性修复”。这意味着，他们只修复破损危及建筑安全的部分，尽可能使用原始工艺和材料，保留所有历史痕迹——墙上的涂鸦、地板的磨损、门框的凹陷。他们的目标不是让城堡“焕然一新”，而是让它“健康地老去”。这种修复哲学在当时是超前的，它尊重了建筑作为历史载体的每一层真实信息。正是这份克制与深情，让奥兹奈城堡得以将17世纪初建时的灵魂，几乎原封不动地带到了我们面前。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你漫步其中，你能触摸到的，是四个世纪以来，一个法国家族不间断的眷恋与守望。每一任主人都像是这栋建筑虔诚的管家，而非随心所欲的主人。战争、社会变革、经济潮汐在它身上留下了淡淡的擦痕，却从未改变它的本质。它是一部用石头、木材和生活方式写成的家族史诗，低调、绵长，却拥有直击人心的力量。它告诉你，真正的传承不在于固守辉煌，而在于理解并呵护那份历经时间沉淀后的、不完美的完美。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略奥兹奈城堡的灵魂，请务必安排一个完整的下午。建议在下午1点45分前抵达，先在城堡外的公共区域漫步，适应周围宁静的田园氛围。官方导览通常在下午2点整开始，这是进入建筑内部的唯一方式，全程约1.5小时。导览结束后，不要急着离开，利用日落前最柔和的黄金时刻（夏季大约在下午5点后），在水池庭院和城堡后的法式花园里独自徜徉，这是感受城堡静谧魔力的最佳时刻。整体游览节奏应是“先听故事，后享宁静”，导览提供历史的骨架与细节，而独自的漫步则让你用自己的呼吸去填充血肉，完成与这座古老空间的私人对话。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在城堡官网预订导览位置，现场几乎不可能有空位，尤其是周末和暑期。参观内部时必须穿着舒适的平底鞋，部分老地板不平且楼梯陡峭。尊重城堡依然是私宅的事实，未经允许不要触摸家具和摆件，室内通常禁止拍照，但管家会在允许拍摄的房间明确告知。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`提前一刻钟抵达，先从城堡铁门外沿着碎石小径走一圈，远眺它被葡萄园簇拥的完整侧影和标志性的勃艮第斜坡屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随管家从主入口进入，让眼睛适应室内幽暗的光线，首先感受门厅那古老陶土地砖的冰凉触感和空气中混合着旧木头与干花的独特气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主人的小客厅里驻足，听管家讲述壁炉上那幅17世纪家族肖像画的故事，并观察阳光如何从高侧窗斜射在磨损的丝绒座椅上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地走上那条通往二层的原始木楼梯，聆听脚下每一级台阶发出的、独一无二的嘎吱声，仿佛踩着时间的音符。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二层的长廊里，透过一扇未装玻璃的菱形小窗向外望，你会收获一个如画框般定格的水池庭院与远处丘陵的景致。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，独自回到水池边，选一张斑驳的铁椅坐下，什么也不做，只是看云看倒影，直到看守的猫儿慵懒地从你脚边走过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有余力，一定要绕到城堡建筑后方，探索那个略显野趣、未经刻意修剪的法式花园，那里是眺望整个庄园及远方村庄的绝佳高点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，再次回到城堡正面的林荫道回望，与初到时的心境对比，你会发现这座蜜糖色的石头建筑已然在你心中有了温度。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`水池庭院东南角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光会为城堡主立面镀上金黄，此时蹲低身子，以水池的平静水面为前景，拍摄建筑与天空的完美倒影，构图力求对称。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡后方花园的矮石墙边`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，站在这里可以拍摄到城堡厚重的勃艮第顶与远处层叠的葡萄园、散落的村庄构成的典型勃艮第乡村全景，使用长焦镜头压缩空间感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`建筑侧面爬满藤蔓的石墙`}</h4>
                  <p className="text-sm text-gray-700">{`利用侧光（上午东侧墙，下午西侧墙），突出石材质感和藤蔓的纹理，可以尝试加入一个路过的人物剪影，以增加画面的故事性和尺度感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从主林荫道即将走出树荫的瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`这个机位可以拍出城堡在道路尽头豁然出现的引导线构图，最佳光线是清晨或日落前，让林荫道形成光影交错的长廊。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`内部允许拍摄的房间窗台`}</h4>
                  <p className="text-sm text-gray-700">{`如果有幸遇到允许拍照的内室，将镜头对准窗台，聚焦于一件日常旧物（如一把生锈的钥匙、一个褪色的花瓶），透过它和窗外的绿意，讲述时光的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`内部摄影禁令请严格遵守，这是出于对隐私和文物保护的尊重。在外部拍摄时，请尽量使用自然光，避免使用闪光灯破坏古堡宁静的氛围。尝试用镜头捕捉细节：一扇门上的铁艺纹章、一片屋顶石板瓦的苔藓、水池边一只停留的蜻蜓，这些比单纯的大景更能传达此地的神韵。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在奥兹奈村内由农舍改造的“葡萄园之家”，主人会与你分享家酿的桃红葡萄酒，清晨在鸡鸣和面包香气中醒来，步行十分钟即可抵达城堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡车程15分钟的图尔尼小镇上，有一家由15世纪修道院客房改建的精品酒店，石拱顶房间充满冥想氛围，晚上可以听到远处教堂的钟声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端田园奢享`}</h4>
                  <p className="text-sm text-yellow-800">{`隐匿在城堡附近另一片山丘上的五星级庄园酒店，拥有无边泳池和米其林推荐餐厅，每个房间都直面无垠的葡萄园，是体验勃艮第精致乡村生活的终极之选。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`马孔或图尔尼火车站附近的设计感商务酒店，交通便利，适合作为探索整个勃艮第南部酒庄与古迹的基地，自驾前往城堡也非常方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）和葡萄收获季（9月底至10月初）是勃艮第的绝对旺季，住宿务必提前至少两个月预订。选择住在村庄里能获得更完整的静谧乡村体验，但晚餐选择有限，许多餐馆需要提前预约。区域治安极好，但乡村道路夜间缺乏照明，自驾需谨慎。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开奥兹奈的时候，我的手里没有拿着什么纪念品，但心里却好像被填满了一些更厚重的东西。那不是一个关于王权与荣耀的故事，而是一个关于“守护”的漫长叙事。在这个追求效率、热衷改造、喜欢把一切历史都打磨得光鲜亮丽以供消费的时代，奥兹奈的存在，像一句温柔的提醒。它告诉我们，有些价值在于“不变”，有些高贵在于“克制”，有些美丽恰恰在于它被允许安然地老去，并带着所有皱纹与斑点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡之所以能如此深刻地打动一个远道而来的旅人，正是因为它拒绝成为舞台布景。它不是被抽离出来的“景点”，而依然是土地、家族与记忆交织的生命体。在这里，你能触摸到历史的质地——它不是光滑的，而是粗糙的、温润的、有裂隙的。它让你思考，我们风尘仆仆地旅行，究竟是为了收集更多华丽的图片，还是为了在某些这样的时刻，让过快的心跳慢下来，去聆听时间本身低沉而宏伟的脉搏？对于每一位厌倦了打卡、渴望真正“抵达”的深度旅人来说，奥兹奈城堡就是这样一处值得你专程前往、静静坐上半日的灵魂栖所。它不会给你瞬间的震撼，却会给予你一种持久的内心的宁静，那是穿越四百年时光，依然未被磨损的生活的诗意。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/obernai" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥贝奈</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Obernai</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rochefort-en-terre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗什福尔昂泰尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rochefort-en-Terre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/montagne-sainte-victoire" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣维克多山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Montagne Sainte-Victoire</p>
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
