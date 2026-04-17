import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔莫罗城堡 Almourol Castle｜塔霍河上的孤岛骑士团要塞 - 最佳欧洲景点',
  description: '第一眼看到阿尔莫罗城堡，你会怀疑自己是不是误入了某个神话故事的扉页插图。它就这么孤零零地、却又无比坚定地站在塔霍河中央一块巨大的花岗岩上，四周是宽阔平静、微微泛着银光的河水。没有桥，没有路，它就像一个被时间遗忘的石头哨兵，与两岸葱郁的平原和远处低矮的山丘都保持着一段矜持的距离。你得把车停在岸边的沙砾...',
}

export default function AlmourolCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿尔莫罗城堡', href: '/attractions/almourol-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔莫罗城堡・Almourol Castle・葡萄牙・圣塔伦区，维拉诺瓦德巴尔卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到阿尔莫罗城堡，你会怀疑自己是不是误入了某个神话故事的扉页插图。它就这么孤零零地、却又无比坚定地站在塔霍河中央一块巨大的花岗岩上，四周是宽阔平静、微微泛着银光的河水。没有桥，没有路，它就像一个被时间遗忘的石头哨兵，与两岸葱郁的平原和远处低矮的山丘都保持着一段矜持的距离。你得把车停在岸边的沙砾空地上，等着那位面色红润的船夫大叔，跳上他那条油漆斑驳的小木船。发动机“突突”响起，划破午后的宁静，河水特有的、混合着水草与湿润泥土的气息扑面而来。船越靠近，城堡那由泛黄石块垒成的、近乎方正的轮廓就越发清晰、越发具有压迫感，你仿佛能听见几百年前，站在塔楼上的哨兵对你发出的无声盘问。
踏上小岛，脚下是粗糙的岩石和缝隙里钻出的顽强野花。穿过那道低矮的拱形城门，你便彻底与21世纪隔绝了。城堡内部是出乎意料的空旷，阳光毫无遮拦地倾泻下来，照亮了中央庭院里每一块被岁月磨平棱角的石头。风在这里变得具体可感，它穿过箭孔，拂过城垛，发出一种低沉、持续的呜咽声，像是古老石头在集体吟唱。你听不到汽车声，听不到人语喧哗，只有风声、水声，偶尔夹杂着远处不知名水鸟的啼叫。爬上一段狭窄陡峭的螺旋石阶时，请一定用手触摸墙壁，那石头冰冷而粗糙，带着几个世纪以来阳光和雨水共同作用形成的独特质感。
这里最动人的，或许不是建筑的宏伟——它其实不算巨大——而是那种极致的孤独与宁静所蕴含的力量。它不是一座仅供观赏的博物馆，而是一个巨大的、会呼吸的空间容器。你能想象圣殿骑士们在此守望长河、篝火映亮他们盔甲的场景；也能感受到它在被遗弃的漫长岁月里，与日月星辰、潮涨潮落为伴的那份寂寥。如今，它成了葡萄牙人心中一个关于勇气与孤傲的图腾。你常能看到本地人情侣来这里，并不急着拍照，只是并肩坐在某段矮墙上，看着河水静静流淌，一待就是一下午。这座城堡教会人们的，或许就是如何在喧嚣世界的中央，守护自己内心的那座“孤岛”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到阿尔莫罗城堡，你会怀疑自己是不是误入了某个神话故事的扉页插图。它就这么孤零零地、却又无比坚定地站在塔霍河中央一块巨大的花岗岩上，四周是宽阔平静、微微泛着银光的河水。没有桥，没有路，它就像一个被时间遗忘的石头哨兵，与两岸葱郁的平原和远处低矮的山丘都保持着一段矜持的距离。你得把车停在岸边的沙砾空地上，等着那位面色红润的船夫大叔，跳上他那条油漆斑驳的小木船。发动机“突突”响起，划破午后的宁静，河水特有的、混合着水草与湿润泥土的气息扑面而来。船越靠近，城堡那由泛黄石块垒成的、近乎方正的轮廓就越发清晰、越发具有压迫感，你仿佛能听见几百年前，站在塔楼上的哨兵对你发出的无声盘问。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`踏上小岛，脚下是粗糙的岩石和缝隙里钻出的顽强野花。穿过那道低矮的拱形城门，你便彻底与21世纪隔绝了。城堡内部是出乎意料的空旷，阳光毫无遮拦地倾泻下来，照亮了中央庭院里每一块被岁月磨平棱角的石头。风在这里变得具体可感，它穿过箭孔，拂过城垛，发出一种低沉、持续的呜咽声，像是古老石头在集体吟唱。你听不到汽车声，听不到人语喧哗，只有风声、水声，偶尔夹杂着远处不知名水鸟的啼叫。爬上一段狭窄陡峭的螺旋石阶时，请一定用手触摸墙壁，那石头冰冷而粗糙，带着几个世纪以来阳光和雨水共同作用形成的独特质感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最动人的，或许不是建筑的宏伟——它其实不算巨大——而是那种极致的孤独与宁静所蕴含的力量。它不是一座仅供观赏的博物馆，而是一个巨大的、会呼吸的空间容器。你能想象圣殿骑士们在此守望长河、篝火映亮他们盔甲的场景；也能感受到它在被遗弃的漫长岁月里，与日月星辰、潮涨潮落为伴的那份寂寥。如今，它成了葡萄牙人心中一个关于勇气与孤傲的图腾。你常能看到本地人情侣来这里，并不急着拍照，只是并肩坐在某段矮墙上，看着河水静静流淌，一待就是一下午。这座城堡教会人们的，或许就是如何在喧嚣世界的中央，守护自己内心的那座“孤岛”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔莫罗城堡`} />
                <InfoRow label="英文名称" value={`Almourol Castle`} />
                <InfoRow label="正式名称" value={`Castelo de Almourol`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`圣塔伦区，维拉诺瓦德巴尔卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙建国初期，守卫塔霍河防线、象征基督教王国南扩边界的关键军事要塞。`} />
                <InfoRow label="建筑特色" value={`一座完美矗立于塔霍河中央孤岩上的中世纪城堡，与世隔绝，仅能靠船抵达。`} />
                <InfoRow label="建筑风格" value={`罗马式与早期哥特式军事建筑的融合，体现了圣殿骑士团的简约与坚固美学。`} />
                <InfoRow label="文化价值" value={`是葡萄牙民族认同中“收复失地”精神的浪漫化身，见证了骑士团、航海与传奇交织的历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至9月）开放时间为上午10点至下午1点，下午2点半至晚上7点；冬季（10月至次年3月）开放时间为上午10点至下午1点，下午2点半至下午5点半。每周一闭馆，部分葡萄牙公共假日（如元旦、复活节、圣诞节）也会关闭，建议出行前在其官网或当地旅游局再次确认。`} />
              <InfoRow label="门票价格" value={`登岛参观城堡门票为2欧元。65岁以上老人及持有有效学生证的游客可享受半价优惠（1欧元）。12岁以下儿童免费。门票包含从岸边到城堡岛的短程渡船费用。`} />
              <InfoRow label="地址" value={`Castelo de Almourol, 2260 Vila Nova da Barquinha, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发是最佳选择。自驾车沿A23高速公路向北行驶，在Vila Nova da Barquinha出口下，随后根据路标指示前往城堡停车场，车程约1.5小时。搭乘公共交通的话，可从里斯本的圣阿波隆尼亚火车站乘坐火车至Entroncamento站（车程约1小时，班次频繁），然后转乘前往Vila Nova da Barquinha的当地巴士或出租车（约10-15分钟车程）。抵达城堡所在的河岸后，需在指定码头等候小船摆渡上岛，船程仅2-3分钟，通常人满即发或按固定班次运行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要读懂阿尔莫罗的石头，你得先把手放在塔霍河的水里，感受它的流向。这条河自古就是伊比利亚半岛的一条命脉，也是文明与冲突的分界线。早在罗马人时期，这块河中央易守难攻的巨岩就被看中了，他们可能在此建立过一个简陋的前哨，监视着水道。但真正让这块石头开始“书写”历史的，是公元8世纪之后南下的摩尔人。精于军事工程和水利的摩尔人，无疑在此修筑了防御工事，它的阿拉伯语旧名“Almorolan”便是明证，意为“高耸的岩石”。那时的塔霍河两岸，是伊斯兰教与基督教世界相互拉锯、渗透与共存的前沿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到12世纪，历史的聚光灯打在了一位传奇国王和一支神秘军团身上。1147年，在葡萄牙首位国王阿方索·恩里克斯的带领下，基督教军队从摩尔人手中夺回了里斯本。为了巩固这来之不易的南方边界，国王将塔霍河中游一系列战略要塞的守卫任务，交给了当时叱咤风云的圣殿骑士团。骑士团大师圭拉尔梅斯·德·阿塔拉亚接到了命令。于是，在1171年的文献中，我们第一次看到了城堡以“Almourol”这个名字被记载，它已经是圣殿骑士团领地的一部分。我们现在看到的城堡主体，正是在摩尔人旧堡垒的基址上，由这些“白袍骑士”重建起来的。他们采用了当时最实用的军事建筑风格：厚重的石墙、方正的塔楼、窄小的窗户和高耸的城垛。一切为了防御，一切为了持久。这里没有繁复的雕花装饰，有的只是石块本身的庄严与力量，这正是圣殿骑士团精神的物化——虔诚、简朴、坚韧如铁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几个世纪，随着葡萄牙王国版图的稳固和向南扩张，阿尔莫罗城堡的战略意义逐渐减弱。它从一个烽火连天的前线要塞，慢慢转变为河道的管理站和象征性的地标。圣殿骑士团解散后，它先后归属于基督骑士团和葡萄牙王室。它见证了葡萄牙航海时代的黎明，那些从里斯本出发的大帆船或许曾从它身边驶过，船上满载着对未知世界的渴望。它也经历了王朝的兴衰与自然的侵蚀。尤其是1755年那场摧毁里斯本的大地震，也对这座河心城堡造成了损伤，塔楼部分坍塌，但它奇迹般地没有倒下，就像这个民族一样顽强。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让它陷入漫长沉睡的，是军事技术的彻底革新。大炮的出现，让这种中世纪石头城堡的防御价值归零。它被遗忘了，废弃了，只剩下藤蔓与飞鸟与它为伴。直到19世纪浪漫主义思潮席卷欧洲，人们开始重新审视中世纪的遗产，将骑士、城堡与民族精神联系起来。阿尔莫罗城堡那孤绝、凄美而又雄伟的形象，完美契合了这种想象。它被重新“发现”，并被小心翼翼地修复，不是为了战争，而是为了成为一个民族的记忆符号和灵魂栖息地。从军事要塞到浪漫象征，阿尔莫罗城堡的每一块石头，都浸透了塔霍河的水汽与葡萄牙近千年的历史风云。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览阿尔莫罗的精髓在于“沉浸”与“等待”。强烈建议在下午晚些时候抵达，比如春夏季节的下午4点后，秋冬季节的下午2点后。这样既能避开可能的中午旅行团，又能将游览的高潮完美地对接到日落时分。整个行程（包含往返交通、登岛探索、拍照和静坐）建议预留至少3到4小时。节奏一定要慢，这不是打卡景点，而是一场穿越时空的冥想。先乘船，用外部视角感受它的孤傲；再登岛，用触觉和脚步去丈量它的历史；最后，一定要留出至少半小时，什么也不做，只是坐在城墙上看光影在河面上变幻，直到夕阳为城堡披上金色的斗篷。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双防滑、结实的平底鞋，城堡内的石阶非常陡峭且不规则，有些地方还有砂砾。摆渡小船通常只收现金（欧元），记得提前备好零钱。留意最后一班返回岸边的渡船时间，尤其是在冬季，别让自己被困在“孤岛”上。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在河岸东侧的沙地停车场，先别急着上船，走到水边找个长椅坐下，远观城堡的全貌，看云影在它石墙上缓缓移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上那艘仿佛从旧时光里驶来的小木船，在短暂的渡河过程中感受自己逐渐脱离现代岸边的奇妙抽离感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`伸手推开那扇厚重的木质城门，伴随着吱呀的声响，踏入城堡内部那片被阳光烤得暖融融的中央庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地找到主塔楼的入口，顺着狭窄昏暗的螺旋石阶小心向上攀登，让掌心紧贴着冰凉粗糙的石壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上主塔楼的顶部平台，360度环绕一圈，将塔霍河如玉带般蜿蜒、两岸田园如画卷般铺展的景色尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主塔二层的石室间慢慢穿行，留意那些古老的石砌壁炉和狭小的窗口，想象骑士们在此生活的寒暑与日夜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下塔楼，在内墙根下寻找一块被午后阳光晒得最暖和的石头坐下，闭上眼睛，只听风声与水声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，登上面向西方的城墙，找一个垛口坐下，看着夕阳将整个城堡、河流和你的影子一同拉长、染红。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡对岸的东北侧河畔`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时至日落后蓝调时刻，将城堡作为视觉中心，利用河面的倒影和前景的芦苇构图，能拍出极具氛围感的孤寂大片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主城门洞内向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`站在城门内侧的阴影里，向外框住一小片波光粼粼的河面和对岸的绿树，形成强烈的明暗与内外对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼顶层的箭孔或窗口`}</h4>
                  <p className="text-sm text-gray-700">{`利用这些天然的画框，拍摄塔霍河的一段或对岸的风景，照片立刻有了中世纪的窥视感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西南角城墙的剪影`}</h4>
                  <p className="text-sm text-gray-700">{`在日落时分，以绚丽的晚霞天空为背景，拍摄城堡城墙或塔楼清晰的黑色剪影，充满戏剧张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`乘船离岛时从船尾回望`}</h4>
                  <p className="text-sm text-gray-700">{`在船行进中拍摄逐渐远去的城堡全景，能捕捉到它重归宁静、与世隔绝的动态瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一个偏振镜（CPL），可以有效减少河面的反光，让天空更蓝、城堡的石色更饱和。无人机飞行在葡萄牙受到严格管制，尤其在历史古迹上空，未经许可切勿起飞。在狭窄的塔楼内拍照时，请耐心等待其他游客通过，避免拥堵，也为了获得更干净的画面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔田园诗`}</h4>
                  <p className="text-sm text-blue-800">{`住在维拉诺瓦德巴尔卡小镇上由百年老宅改造的客栈，推开木窗就能看见晨曦中的城堡剪影，晚上能听到潺潺水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`骑士主题沉浸`}</h4>
                  <p className="text-sm text-green-800">{`选择附近古镇托马尔由古老修道院或贵族府邸修复的精品酒店，沉浸在完整的圣殿骑士团历史氛围中，驱车至城堡仅20分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在城堡上游几公里处、坐落在橄榄园与软木林之间的乡村庄园酒店，享受绝对的静谧，在无边泳池边就能眺望到远方的塔霍河。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代设计据点`}</h4>
                  <p className="text-sm text-purple-800">{`若想以里斯本为基地，可以选择里斯本阿尔法玛区一家充满设计感的精品酒店，白天租车轻松往返城堡，晚上则享受首都的夜生活与美食。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在城堡附近的小镇，请务必提前预订晚餐，当地的餐馆不多且关门较早。旺季（6月至8月）时，无论是附近民宿还是里斯本的酒店，都建议至少提前一个月预订。体验当地生活的最佳方式，是在小镇的面包店买一个刚出炉的“帕斯蒂斯”蛋挞，带到河岸边，就着城堡的风景慢慢享用。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔莫罗城堡，乘船回到“现代”的岸边，你会感到一阵轻微的恍惚。那座石头岛屿在暮色中渐渐变成一个深色的剪影，但它所传递的那种沉静的力量感，却留在了心里。在这个信息爆炸、万物互联的时代，我们似乎已经忘记了“孤立”所能带来的珍贵价值。阿尔莫罗城堡像一位沉默的哲人，用它的存在告诉我们：真正的力量，有时正来源于这种选择性的隔绝，来源于在湍急的时间之河中，找到一块属于自己的岩石，并牢牢扎根。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它不是一个关于征服与炫耀的故事，而是一个关于守望与坚持的寓言。它见证了刀光剑影，也拥抱过漫长寂寞。如今，它向我们这些过客慷慨地分享着这份寂寞所带来的宁静与清晰。在这里，你会不由自主地关掉手机，放下杂念，只是去听、去看、去感受。你会重新发现，历史不仅是书本上的文字，更是吹过垛口的风的温度，是河水拍打岩石的节奏，是阳光在古老石面上移动的轨迹。每一位热爱深度游的旅人都应该来这里，不仅仅是为了看一座漂亮的城堡，更是为了体验一次精神的“离线”，完成一场与自己内心的、跨越千年的对话。在塔霍河水的流淌声中，你会找到那份久违的、属于远方的宁静与勇气。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/guimaraes-historical-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉马良斯历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Guimarães Historical Centre</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
