import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥比杜什 Óbidos｜活着的童话书，漫步在中世纪城墙与白色小巷里的时光胶囊 - 最佳欧洲景点',
  description: '车子刚转过一个弯，奥比杜什就像一本突然摊开的立体童话书，“哗啦”一声撞进你的视野。远处是绵延的丘陵，而它就那样毫无征兆地、骄傲地盘踞在一座平顶山丘上，一道完整的、巧克力奶油色的城墙把它严丝合缝地包裹起来，仿佛一个过于珍贵的礼物，不舍得被外界触碰。那种第一眼的震撼，不是来自宏大，而是来自一种近乎梦幻的...',
}

export default function ObidosPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奥比杜什', href: '/attractions/obidos-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥比杜什・Óbidos・葡萄牙・莱里亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚转过一个弯，奥比杜什就像一本突然摊开的立体童话书，“哗啦”一声撞进你的视野。远处是绵延的丘陵，而它就那样毫无征兆地、骄傲地盘踞在一座平顶山丘上，一道完整的、巧克力奶油色的城墙把它严丝合缝地包裹起来，仿佛一个过于珍贵的礼物，不舍得被外界触碰。那种第一眼的震撼，不是来自宏大，而是来自一种近乎梦幻的完整和静谧。
穿过那道著名的圣玛利亚城门，时光的流速立刻变了。脚下是历经七百年被无数鞋底打磨得温润光滑的黑色碎石板路，窄得只容两人错身。道路两旁，是两排高耸的、雪白雪白的房子，门窗边框却被漆成阳光一样的鹅黄或天空一般的湛蓝。空气里有股好闻的混合气息：潮湿石头苔藓的微腥，从某扇虚掩的门后飘出的烤杏仁甜香，还有无处不在的、从墙上攀援而下的九重葛那淡紫色的花香。你的脚步声在巷弄里发出清晰的回响，偶尔与远处教堂悠扬的钟声，或是某家瓷器店门铃清脆的“叮咚”声交织在一起。
这里不是一个被抽干灵魂的遗址。老太太们会从二楼的蓝色小窗探出身来，抖落手中的地毯；面包店老板正在把新鲜出炉的、撒着糖霜的“奥比杜什枕头”面包摆上橱窗；穿着校服的孩子们背着书包，叽叽喳喳地从主街跑过，冲向城墙脚下的秘密基地。这座城墙保护的，不只是一堆古老的石头，而是一整套延续至今、不慌不忙的生活方式。它最打动人的，正是这种“活着”的历史感——你不是在参观一个景点，而是在拜访一个仍然在从容跳动的中世纪心脏。
最核心的魅力，在于你可以用双脚亲自丈量它的“王冠”——那全长约1.5公里的城墙步道。当你小心翼翼地沿着狭窄的垛口行走，一侧是城内红瓦白墙、如积木般可爱的屋顶海洋，另一侧则是豁然开朗的平原、果园和远方的潟湖。风毫无阻挡地吹过，那一刻，你既是这座城的守卫者，也是它的欣赏者。这种独一无二的沉浸式视角，是任何博物馆都无法给予的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚转过一个弯，奥比杜什就像一本突然摊开的立体童话书，“哗啦”一声撞进你的视野。远处是绵延的丘陵，而它就那样毫无征兆地、骄傲地盘踞在一座平顶山丘上，一道完整的、巧克力奶油色的城墙把它严丝合缝地包裹起来，仿佛一个过于珍贵的礼物，不舍得被外界触碰。那种第一眼的震撼，不是来自宏大，而是来自一种近乎梦幻的完整和静谧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道著名的圣玛利亚城门，时光的流速立刻变了。脚下是历经七百年被无数鞋底打磨得温润光滑的黑色碎石板路，窄得只容两人错身。道路两旁，是两排高耸的、雪白雪白的房子，门窗边框却被漆成阳光一样的鹅黄或天空一般的湛蓝。空气里有股好闻的混合气息：潮湿石头苔藓的微腥，从某扇虚掩的门后飘出的烤杏仁甜香，还有无处不在的、从墙上攀援而下的九重葛那淡紫色的花香。你的脚步声在巷弄里发出清晰的回响，偶尔与远处教堂悠扬的钟声，或是某家瓷器店门铃清脆的“叮咚”声交织在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是一个被抽干灵魂的遗址。老太太们会从二楼的蓝色小窗探出身来，抖落手中的地毯；面包店老板正在把新鲜出炉的、撒着糖霜的“奥比杜什枕头”面包摆上橱窗；穿着校服的孩子们背着书包，叽叽喳喳地从主街跑过，冲向城墙脚下的秘密基地。这座城墙保护的，不只是一堆古老的石头，而是一整套延续至今、不慌不忙的生活方式。它最打动人的，正是这种“活着”的历史感——你不是在参观一个景点，而是在拜访一个仍然在从容跳动的中世纪心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最核心的魅力，在于你可以用双脚亲自丈量它的“王冠”——那全长约1.5公里的城墙步道。当你小心翼翼地沿着狭窄的垛口行走，一侧是城内红瓦白墙、如积木般可爱的屋顶海洋，另一侧则是豁然开朗的平原、果园和远方的潟湖。风毫无阻挡地吹过，那一刻，你既是这座城的守卫者，也是它的欣赏者。这种独一无二的沉浸式视角，是任何博物馆都无法给予的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥比杜什`} />
                <InfoRow label="英文名称" value={`Óbidos`} />
                <InfoRow label="正式名称" value={`Óbidos`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`莱里亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙保存最完好的中世纪防御城镇典范，是历代葡萄牙国王赠予王后的传统结婚礼物，被誉为“王后的村镇”。`} />
                <InfoRow label="建筑特色" value={`由完整的锯齿状城墙严密环绕，城内是迷宫般的陡峭石板小巷与粉刷得雪白的房屋，门窗点缀着明黄或蔚蓝色的边框。`} />
                <InfoRow label="建筑风格" value={`以中世纪军事建筑为核心，融合了曼努埃尔式、哥特式及摩尔式影响的地方建筑风格。`} />
                <InfoRow label="文化价值" value={`一座仍在呼吸的活态博物馆，完美封存了12至16世纪葡萄牙小镇的生活图景与浪漫传奇，是葡萄牙民族身份与浪漫主义的象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天24小时开放。主要景点如奥比杜什城堡（现为酒店）、圣玛利亚教堂、城墙等有各自的开放时间，通常为夏季（4月至10月）上午9:30至晚上7:00，冬季（11月至3月）上午9:30至下午5:00。城墙步行道可能在恶劣天气关闭。具体内部博物馆和小教堂的时间常有变动，建议出行前查看市政网站。多数商店和咖啡馆的营业时间为上午10点至傍晚。`} />
              <InfoRow label="门票价格" value={`进入奥比杜什古镇本身免费。登上城墙免费。参观圣玛利亚教堂免费。部分临时艺术展览或进入城堡的某些特定区域（如城堡主塔）可能需要支付小额费用，通常在2-5欧元之间。小镇推出的“奥比杜什卡”联票已取消，目前各景点独立售票。对于学生和65岁以上老人常有折扣。`} />
              <InfoRow label="地址" value={`Rua Direita, 2510-001 Óbidos, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发最为便捷。在里斯本的坎普利德（Campo Grande）或里斯本东方车站（Lisboa Oriente）乘坐Rede Expressos长途巴士，直达奥比杜什巴士站，车程约1小时，班次频繁，约每1-2小时一班，可在巴士公司官网或车站购买。若自驾，从里斯本沿A8高速公路向北，在Óbidos出口下，约45-60分钟车程，古镇外有多个收费停车场。火车亦可，从里斯本的Santa Apolónia或Oriente站乘至Óbidos站，但火车站距离古镇入口还有约1.5公里步行路程，可搭乘当地出租车或慢慢散步过去。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥比杜什的故事，始于罗马人，但真正为它奠定今天格局的，是公元8世纪后到来的摩尔人。这些来自北非的征服者一眼看中了这个易于防守的山丘，修筑了最初的防御工事，为这座小镇注入了迷宫般街巷的基因。直到1148年，葡萄牙的开国国王阿方索·亨利克斯经过艰苦的战斗，才从摩尔人手中夺取了这里。收复失地的荣耀，让奥比杜什从一开始就刻在了葡萄牙王国的诞生记忆里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让它从众多中世纪小镇中脱颖而出、染上浓郁浪漫色彩的，是1282年的一场婚礼。当时的葡萄牙国王迪尼斯，将奥比杜什作为结婚礼物，赠予了他的王后——阿拉贡的伊莎贝尔。这个充满爱意的举动，开创了一个延续数百年的王室传统：从此，奥比杜什成为了历代葡萄牙国王赠予他们王后的“专属礼物”，被正式纳入“王后村镇”的名单。这意味着，小镇的收入直接归王后支配，用于她的个人开销和慈善事业。你可以想象，因为这个身份，历代王后们对这里倾注了多少关爱与修缮，使它免受战乱和衰败的侵袭，始终保持着精致而完好的容颜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的定型与辉煌发生在16世纪的大航海时代。当时在位的曼努埃尔一世国王，用从香料贸易中获得的巨大财富，慷慨地装饰他的王国。奥比杜什的主城门——圣玛利亚门，就被改建成了华丽的曼努埃尔式风格，装饰着航海绳索、浑天仪等象征发现时代的石雕。城内的圣玛利亚教堂也进行了大规模重建，融合了哥特式的骨架与后来曼努埃尔式的华丽装饰。这个时期修建的许多房屋和喷泉，形成了今天我们看到的白色建筑群的基调。小镇达到了它中世纪生命的巅峰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它并非一直平静。1755年那场摧毁里斯本的巨大地震，也波及了这里，城墙和许多建筑受损严重。随后拿破仑军队的入侵，也给小镇带来了创伤。但每一次，它都像一位坚韧的贵妇，慢慢地修补自己的裙裾。20世纪，它被列为国家古迹，开始了系统性的修复和保护。最妙的一笔，莫过于将古老城堡的一部分改造为一家历史酒店，这非但没有破坏它的古韵，反而让城堡的厅堂和塔楼重新充满了人气和灯火，让每个游客都有机会真正“睡在历史里”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受奥比杜什的晨昏之美，建议安排一整天。最佳方式是前一晚住下，次日清晨在游客大军抵达前，独享古镇的宁静。上午九点前抵达，从主城门进入，先沿主街快速浏览，然后立即登上城墙完成环城漫步，此时光线柔和且人少。中午下到小巷深处探索特色店铺和教堂，享用午餐。下午可以参观小型博物馆或在城堡酒店喝下午茶，傍晚时分再次漫步，欣赏金色的夕阳洒满白色墙壁。这样的节奏张弛有度，既能拍到无人空镜，也能深入体验当地生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城墙步道非常狭窄且没有护栏，部分路段陡峭，务必穿防滑舒适的平底鞋，风雨天气绝对不要攀登。
小镇节庆（如七月的中世纪集市、十月的巧克力节）期间人山人海，体验独特但住宿难求，需提前数月预订。
购买著名的樱桃酒“Ginjinha”时，可以选择装在巧克力小杯里的版本，一口喝掉酒再吃掉杯子，是最地道的吃法。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从气势恢宏的圣玛利亚城门下穿过，抬头细看门洞上方曼努埃尔风格的精致石雕和阳台`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着热闹的Rua Direita主街慢慢逛，让两侧售卖樱桃酒和手绘瓷砖的小店橱窗留住你的脚步`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地找到登上城墙的台阶，用大约一小时时间，在狭窄的步道上完成一次环绕古镇的“天空漫步”`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙下来后拐进一条僻静的小巷，寻找那家有着百年历史的“奥比杜什枕头”面包房，买一个刚出炉的尝尝`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进简朴而庄严的圣玛利亚教堂，在宁静中欣赏内部华丽的蓝色瓷砖画和镀金木雕祭坛`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后在城堡酒店古老的石头拱廊下，点一杯当地产的干白葡萄酒，静静地看着中庭的光影移动`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢踱步到古城西北角的观景台，看夕阳把整个白色小镇和远处广阔的平原染成一片温暖的金黄`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`华灯初上时再次回到主街，推开一家传统餐馆的木门，在烛光下享用一顿用陶罐炖煮的葡式海鲜饭`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛利亚城门仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳刚升起时，从城门外的斜坡下向上拍摄，能拍到城门全景被金色的晨光照亮的威严感，城墙的锯齿状轮廓格外分明`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙中段俯瞰红瓦白墙`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，走在城墙北段，向下俯拍古镇内部，可以捕捉到层层叠叠的三角形红瓦屋顶和白色山墙构成的几何图案，画面充满韵律感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Rua Direita主街纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，站在主街中段，利用两侧彩框白墙的线条形成强烈的视觉引导线，将焦点引向远处高耸的教堂钟楼`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡酒店露台观落日`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚前赶到城堡酒店的露台或附近城墙角，向西拍摄，可以拍到夕阳为整个古镇镀上金边，并与远方平原上的风车和湖泊构成一幅宁静的田园诗画`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷局部特写`}</h4>
                  <p className="text-sm text-gray-700">{`随时留意那些不起眼的角落，比如一扇古老的木门配上鲜花的盆栽，或是透过蓝色窗框看到的内院，这些细节特写最能体现小镇的生活气息`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，拍摄居民或他们家的内院前，请先微笑示意并获得同意。使用无人机在古城上空飞行是严格禁止的，会被罚款。室内教堂和博物馆通常不允许使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式首选`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住奥比杜什城堡酒店，住在由古老石墙和拱顶围成的客房里，晚上听着寂静古城的声音入睡，清晨独享无人的城堡庭院`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色民宿体验`}</h4>
                  <p className="text-sm text-green-800">{`选择一家由15世纪老宅改造的家庭民宿，房间保留着原始的石墙和木梁，女主人会为你准备丰盛的 homemade 葡式早餐`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`住在城墙外步行几分钟可达的现代设计酒店，房间拥有直面古城全景的落地窗和露台，在私密空间里同时享受古老风景与现代舒适`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡村庄园之梦`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟入住周边葡萄园或橄榄林中的古老农庄改造的精品酒店，享受田园的绝对宁静和星空，同时方便多次进出古城`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古镇内的住宿数量极其有限且非常抢手，尤其是旅游旺季和节庆期间，务必提前至少3-4个月预订。住在古城内晚上非常安静，但可能受教堂钟声影响。古城外停车场附近的区域也很安全方便，且性价比往往更高。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥比杜什的时候，你会感觉自己的感官好像被仔细地清洗过、又温柔地填充了一遍。那些纯粹的白、蓝、黄，那些石板路的触感，樱桃酒的酸甜，钟声的悠远，共同构成了一种异常清晰而宁静的记忆。在这个凡事追求“更多、更快、更炫”的世界里，奥比杜什的存在本身就像一个温柔的“暂停键”。它不试图用奇观震撼你，而是用完整和宁静包裹你。它告诉你，生活可以有一种不慌不忙的密度，历史可以不是教科书上冰冷的文字，而是你脚下温热的石头和空气中飘散的面包香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来一次奥比杜什。它不仅仅是一个“很美的小镇”，更是一次关于时间和生活的启示。在这里，你漫步的每一步，都踩在几个世纪的故事上；你呼吸的每一口空气，都混合着过去与现在的气息。它让你相信，有些美好可以抵抗时间的洪流，以一种固执而优雅的姿态，持续地、生动地存在着。这份穿越时光却依然鲜活的生命力，足以治愈任何一颗在都市中奔波疲惫的心。这趟旅程，最终会成为你记忆里一枚闪闪发光的、名为“宁静”的宝石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-branco" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布朗库堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo Branco</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
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
