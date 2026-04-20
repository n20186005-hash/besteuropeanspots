import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '于纳维旅游攻略：阿尔萨斯葡萄酒之路上的要塞教堂深度游',
  description: '探索法国于纳维(Hunawihr)独一无二的坚固防御教堂与漫山葡萄园。这份深度游攻略涵盖门票交通、一日游路线及小众打卡点，带你感受阿尔萨斯酒乡的灵魂。',
}

export default function HunawihrGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '于纳维', href: '/attractions/hunawihr-guide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`于纳维・Hunawihr・法国・上莱茵省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让你想象一座教堂，它既是虔诚的祈祷所，又是一座能抵御兵祸的坚固堡垒，你会想到什么样子？今天这份 **于纳维私藏旅游攻略** ，就带你躲开斯特拉斯堡和科尔马的人潮，钻到阿尔萨斯葡萄酒之路的腹地，找到一个叫于纳维的梦幻小镇。这里最震撼的，就是那座直接“长”在环形城墙上的**圣雅各-勒-米约尔防御教堂**。它不像普通教堂那样孤立存在，而是与城墙、民居、以及一望无际的葡萄藤海完全融为一体。作为你的专属向导，这份 **自由行指南** 会告诉你，如何用一天时间，读懂这座小镇用石头和葡萄写成的千年故事。别只满足于在观景台拍照，跟着我，咱们一起走进城墙里，摸摸那些冰凉的古老石砖，尝尝酒农刚酿出的雷司令，这才叫真正的 **深度游** 。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果让你想象一座教堂，它既是虔诚的祈祷所，又是一座能抵御兵祸的坚固堡垒，你会想到什么样子？今天这份 <strong>于纳维私藏旅游攻略</strong> ，就带你躲开斯特拉斯堡和科尔马的人潮，钻到阿尔萨斯葡萄酒之路的腹地，找到一个叫于纳维的梦幻小镇。这里最震撼的，就是那座直接“长”在环形城墙上的<strong>圣雅各-勒-米约尔防御教堂</strong>。它不像普通教堂那样孤立存在，而是与城墙、民居、以及一望无际的葡萄藤海完全融为一体。作为你的专属向导，这份 <strong>自由行指南</strong> 会告诉你，如何用一天时间，读懂这座小镇用石头和葡萄写成的千年故事。别只满足于在观景台拍照，跟着我，咱们一起走进城墙里，摸摸那些冰凉的古老石砖，尝尝酒农刚酿出的雷司令，这才叫真正的 <strong>深度游</strong> 。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`于纳维`} />
                <InfoRow label="英文名称" value={`Hunawihr`} />
                <InfoRow label="正式名称" value={`Hunawihr`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`上莱茵省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`于纳维的故事，几乎就是阿尔萨斯地区动荡历史的缩影。这片位于法德边境的富饶土地，历史上一直是兵家必争之地。小镇最早的记录可追溯到公元9世纪。而我们眼前这座独特的“城墙教堂”，其雏形建于14至15世纪。它的“双重身份”——既是宗教场所，又是军事要塞——直接源于阿尔萨斯在宗教改革时期及后续“三十年战争”（1618-1648）中的惨烈冲突。当时，新教与天主教势力在此拉锯，村庄屡遭劫掠。于是，村民们做出了一个极具智慧的决定：将他们的教堂加固，并用一道坚固的环形城墙将其围护起来。当战火或匪患来袭时，整个村庄的人都可以带着财物和牲畜躲进这座城堡般的教堂中固守。它不是一个领主或主教的城堡，而是一座属于全体平民的“人民要塞”，这在整个欧洲都极为罕见。它幸存了下来，见证了威斯特伐利亚和约的签订，也见证了阿尔萨斯在法德之间的数次易手，最终成为今天法德和平与融合的宁静象征。`} />
                <InfoRow label="建筑特色" value={`走近这座建筑，你的第一感觉会是“敦实”和“质朴”。它没有巴黎圣母院那种冲天而起的飞扶壁，也没有繁复得让人眼花缭乱的雕刻。它的美，在于一种与大地紧密相连的、防御性的力量感。教堂主体由当地开采的粗糙砂岩砌成，经数百年风雨洗礼，呈现出温暖的蜂蜜色与灰褐色交织的斑驳质感。最引人注目的，是那道几乎与教堂外墙合二为一的**环形城墙**。城墙高大厚重，底部石砖巨大，向上略有收分，显得无比稳固。墙上开有狭长的**射击孔**和观察窗，而不是用于采光的大窗，时刻提醒着你它的军事用途。教堂的**钟楼**从城墙中拔地而起，它同时也是瞭望塔，顶部是阿尔萨斯典型的陡峭木筋墙结构坡屋顶，覆盖着暗红色的陶瓦。整个建筑群就像从山丘和葡萄园中自然生长出来的巨大岩石，在阳光下，粗糙的石面光影分明，散发着沉着而温暖的光泽。`} />
                <InfoRow label="建筑风格" value={`这座防御教堂的建筑风格，可以概括为**晚期哥特式与防御性乡村建筑的融合**。走进教堂内部，哥特风格的基因清晰可见：**尖拱**形的门廊和窗户（尽管外部窗户很小）、简洁的**肋拱顶**，这些元素营造出向上和向内的神圣空间感。然而，这里的哥特式被极大地“简化”和“实用化”了。没有高耸入云的中殿，因为那不利于防御；也没有巨大的彩色玻璃花窗，因为那是城墙的薄弱点。取而代之的，是极其厚实的墙壁和狭小的窗口。这种务实主义的改造，形成了一种独特的“阿尔萨斯乡村哥特”风格。同时，环绕的城墙和防御塔楼，则属于典型的**中世纪防御工事建筑**。所以，你看到的不是一个纯粹风格的建筑，而是一个“混血儿”，是信仰需求与生存需求在特定历史时期碰撞出的独一无二的结晶。它不像大教堂那样歌颂神性的辉煌，而是诉说着普通人守护家园和信仰的坚韧决心。`} />
                <InfoRow label="文化价值" value={`对于于纳维乃至整个阿尔萨斯地区的人来说，这座教堂早已超越了单纯的宗教或历史遗迹的意义。它是**社区认同的活化石**。几个世纪以来，它不仅是做礼拜的地方，更是村民议事、节庆聚集、乃至危难时共度时艰的庇护所。这种“教堂-堡垒-社区中心”的三位一体功能，深深烙印在当地的文化记忆中。直到今天，它依然是村庄生活的核心地标。同时，于纳维小镇本身也是阿尔萨斯 **“葡萄酒文化”** 的绝佳代表。教堂被葡萄园360度包围的景象，本身就是一幅宣言：信仰与劳作（尤其是葡萄酒酿造这项神圣的劳作）在这里密不可分。酒农们日复一日地在教堂的注视下照料葡萄，教堂的钟声则为他们的劳作报时。此外，于纳维还因国际知名的**鹤类保护与复育中心**而闻名，这为小镇增添了强烈的自然保护与现代生态理念的色彩。古老的历史守护精神，与当代的环境守护精神，在这里奇妙地共鸣。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 于纳维一日游打卡路线攻略：从要塞教堂到鹳鸟乐园`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，路线规划好了，咱们就假装现在是阳光明媚的阿尔萨斯早晨，开始我们的一日漫步吧！**上午**：别急着冲进小镇，我们先当一回“宏观导演”。把车停在村子外围的免费停车场，然后跟着指示牌，走上那条环绕葡萄园的**城墙步道**。这是欣赏防御教堂全景的绝佳角度，看着它如何被绿浪般的葡萄藤托起。走完一圈，从小镇主入口进去，直奔**圣雅各-勒-米约尔教堂**。先在外围转一圈，摸摸城墙，找找射击孔，感受它的气势。然后进入内部，安静地坐一会儿，感受从狭小窗户射进来的光束，想象当年人们在此避难的心情。**中午**：从教堂出来，肚子该叫了。就在村子里找一家叫 **“Au Relais de Hunawihr”** 的家庭式餐馆（相信我，这里选择不多，但这家不会错）。务必点一份地道的**阿尔萨斯酸菜炖肉**，配一杯本地产的雷司令或琼瑶浆白葡萄酒，这才是灵魂搭配。**下午**：饭后的活动充满生机！步行前往镇边的**鹤类保护中心**。这里是欧洲最重要的鹤类复育基地之一，你可以近距离观察这些优雅的大鸟，了解它们的故事，如果季节合适，还能看到壮观的放飞训练。随后，你可以选择在村子里的窄巷随意逛逛，看看那些装饰着鲜花的半木结构房屋，或者找一家酒窖，直接向酒农买两瓶心仪的葡萄酒。傍晚时分，如果还有余力，可以再次走上葡萄园小径，看夕阳给教堂和漫山葡萄藤镀上金边。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>防御塔与彩窗的“矛盾”融合</strong>：走进教堂内部，一定要抬头看祭坛上方。在那里，你会看到晚期哥特式风格的<strong>网状肋拱顶</strong>，线条优雅而神圣。但就在这片神圣空间的侧上方，厚实的墙壁上却开着一个<strong>狭小的防御窗孔</strong>，窗外可能就是当年弓弩手守卫的位置。神圣与肃杀，美学与实用，在这一方空间里形成了无声却极其强烈的对话。一束光从那个小孔射入，照亮空气中漂浮的微尘，瞬间让你穿越百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>城墙上的葡萄园全景</strong>：一定要花时间走完那条环绕的城墙步道。当你走到教堂的侧面或后方时，会看到一个令人屏息的画面：教堂坚固的石基仿佛直接插入<strong>无边无际的葡萄藤梯田</strong>中。不同品种的葡萄藤排列出深浅不一的绿色条纹，像巨人的绒毯一直铺展到远处的孚日山脉脚下。春季是清新的翠绿，秋季是灿烂的金黄与酒红。这个角度，是理解“葡萄酒之路”精髓的绝佳视角，也是拍出明信片照片的经典机位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>圣坛的光影游戏</strong>：教堂内部的圣坛区域相对朴素，但如果你在<strong>接近正午或下午早些时候</strong>到访，会发现魔法。阳光透过南侧少数几扇稍大的彩绘玻璃窗（是后来修复时期安装的）投射进来，在地面和古老的木制长椅上洒下<strong>一片片斑斓的彩色光斑</strong>。红色、蓝色、绿色的光块在粗糙的石地板和深色木头上缓缓移动，给这个原本严肃、甚至有些沉重的空间，注入了片刻的、流动的生机与神性之美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>古老的墓园与飞翔的鹤</strong>：教堂外围的<strong>墓园</strong>也很有味道，古老的墓碑安静地立在葡萄园的边缘。而从这里望出去，你常常能看到从鹤类保护中心飞起的<strong>白鹳</strong>，它们巨大的翅膀掠过葡萄园上空，有时甚至会停在教堂的钟楼尖顶歇脚。生与死，古老守护与自由飞翔，在这一刻构成了一幅充满哲思的宁静画面，这也是于纳维独一无二的体验。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间就是一切，避开人潮有妙招</strong>：阿尔萨斯夏季（7-8月）是旅游旺季，葡萄酒之路上的大巴团很多。于纳维虽相对小众，但上午10点后也可能迎来小高峰。<strong>最佳游览时间是春季（5-6月）或秋季（9-10月初）的平日</strong>。秋季还能赶上葡萄收获季，氛围绝佳。尽量<strong>早上9点前抵达</strong>，你能独占安静的教堂和步道。另外，教堂可能中午会短暂关闭（通常12:00-14:00），注意查看门口时间或提前规划。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>鞋子比衣服更重要</strong>：小镇依山而建，城墙步道和葡萄园间的小路多是<strong>碎石子路或土坡</strong>。务必穿一双<strong>防滑、舒适、能应付轻微徒步的鞋子</strong>，绝对不要穿高跟鞋或光滑底的鞋。阿尔萨斯天气多变，即使是夏天，也建议带一件轻薄防风外套。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>交通与采购贴士</strong>：于纳维没有火车站，<strong>自驾是最方便</strong>的方式。村子里停车免费，但车位有限，早到早得。如果乘坐公共交通，可以从里博维莱（Ribeauvillé）搭乘少量班次的当地巴士，但班次稀疏，务必提前查好时刻表并预留充足时间。想买酒的话，直接找门口挂着“Degustation”（品酒）牌子的<strong>家庭式酒窖</strong>，比在景点商店买更有意思，也能听到酒农最地道的介绍。最后，教堂内部请保持安静，尊重这是一个仍在使用的礼拜场所。" }} />
            </div>
          </Section>

          <Section title={`6. 于纳维周边住宿与美食攻略：住在葡萄园里的梦幻体验`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在于纳维，你可能更想体验住在葡萄园里的感觉。小镇本身住宿选择非常有限（通常只有一两家民宿），但我强烈推荐你探索周边。开车10分钟范围内，<strong>里博维莱</strong>和<strong>贝格海姆</strong>这样更大的葡萄酒小镇有更多选择，从设计酒店到古老的半木结构民宿应有尽有。如果想获得极致体验，可以寻找由<strong>葡萄园农舍改造的“民宿”（Chambre d‘hôtes）</strong> ，醒来推开窗就是满眼葡萄藤，主人可能就是一位酒农，早餐会端上自家果酱和新鲜烘焙的面包。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮方面，前面提到的 <strong>“Au Relais de Hunawihr”</strong> 是村里的核心餐馆，提供扎实的阿尔萨斯风味。一定要试试 <strong>“Tarte flambée”</strong> （火焰薄饼，一种铺满奶油、洋葱和培根的薄底披萨）作为前菜。主菜自然是<strong>酸菜炖肉</strong>或<strong>炖小牛肘</strong>。葡萄酒单上基本都是本地佳酿，可以让服务员根据菜品推荐。如果想吃点更精致的，开车10分钟去里博维莱，选择会多很多。别忘了，在阿尔萨斯，<strong>奶酪配白葡萄酒</strong>也是一大享受， Munster奶酪是本地特色，味道浓烈，与琼瑶浆白葡萄酒是绝配。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从于纳维出发，你有两个绝佳且方向不同的延伸选择：<strong>里博维莱</strong>与<strong>贝格海姆</strong>。<strong>里博维莱</strong>（向北5分钟车程）被誉为“阿尔萨斯最美丽的村庄之一”，它拥有三条主街、更繁华的商店和餐馆，以及三座矗立在山顶的城堡遗迹（特别是<strong>圣于尔班城堡</strong>），你可以徒步上山，俯瞰另一番壮丽的葡萄园山谷全景，这里的历史氛围更浓，商业设施也更完善。<strong>贝格海姆</strong>（向南10分钟车程）则是另一番景象，它被称为“葡萄酒之都”，被完整的中世纪城墙环绕，城内布满错综复杂的童话小巷和缤纷的木筋屋，更有一种“活着的中世纪博物馆”感觉。两个小镇风格迥异，都值得花上半天时间探索，让你的葡萄酒之路旅程更加丰满。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于纳维教会我的，是一种“温柔的坚固”。它的石头是冷的、硬的，历经战火而屹立不倒；但包围它的葡萄园是柔软的、芬芳的，年复一年孕育着甜蜜的果实。这座小镇的灵魂，就在于这种 duality（双重性）——它既是保护生命的堡垒，也是庆祝生活的家园。在阿尔萨斯，历史不是压在教科书里的重量，而是你脚下踩着的石板，眼中望见的藤蔓，和杯中摇曳的金色酒液。来这里，喝一杯酒，听一阵钟声，看鹳鸟飞过古老的塔楼，你就懂了。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/talmont-sur-gironde" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉伦特河畔塔尔蒙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Talmont-sur-Gironde</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-josselin-brittany" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    若
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">若瑟兰城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Josselin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
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
