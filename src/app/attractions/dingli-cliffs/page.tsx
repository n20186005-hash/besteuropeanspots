import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '丁利悬崖 Dingli Cliffs｜地中海心跳的悬崖，马耳他离天空最近的日落观景台 - 最佳欧洲景点',
  description: '车子刚停下，一阵猛烈而纯粹的风就裹挟着海盐与野生百里香的粗粝气息扑面而来，瞬间卷走了所有车内的沉闷。你听到的第一个声音，不是人声，是风永恒的呼啸，还有从那深渊之下隐隐传来的、节奏稳如心跳的海浪拍岸声。往前走几步，脚下的土地戛然而止，世界在你眼前被一分为二：一边是坚实、粗糙、泛着蜂蜜色的石灰岩土地，上...',
}

export default function DingliCliffsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '丁利悬崖', href: '/attractions/dingli-cliffs' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`丁利悬崖・Dingli Cliffs・马耳他・丁利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚停下，一阵猛烈而纯粹的风就裹挟着海盐与野生百里香的粗粝气息扑面而来，瞬间卷走了所有车内的沉闷。你听到的第一个声音，不是人声，是风永恒的呼啸，还有从那深渊之下隐隐传来的、节奏稳如心跳的海浪拍岸声。往前走几步，脚下的土地戛然而止，世界在你眼前被一分为二：一边是坚实、粗糙、泛着蜂蜜色的石灰岩土地，上面零星点缀着顽强的仙人掌和低矮的石墙；另一边，则是毫无过渡、垂直跌向下方250米处的、广阔无垠的靛蓝色地中海。那种视觉的断裂感如此强烈，让你不由自主地屏住呼吸，仿佛站在了世界的尽头。
这里看不到太多游客的喧嚣，更多是当地人的日常。你会遇见慢跑者戴着耳机从身边掠过，他们的背影融入海天一色的地平线；会看到情侣或老夫妻并肩坐在悬崖边的矮墙上，什么也不说，只是静静地看着海平面上缓缓移动的货轮光点；偶尔还有一两位画家，支着画架，试图用颜料捕捉那瞬息万变的光影。丁利悬崖不是被供奉起来的景点，它是马耳他人呼吸、漫步、思考甚至只是“待着”的一个地方。它慷慨地提供着无限的视野，也苛刻地要求你直面自然最原始的力量。
最打动人心的，是这里的黄昏。当太阳开始西沉，一切都变了。蜂蜜色的岩石被染上金红，平静的海面铺开一条碎钻般的粼粼光路。风似乎也温柔了些。人们从各处聚拢到面朝西方的崖边，像参加一场无声的仪式。没有人大声喧哗，只有相机轻微的咔嚓声和低语般的赞叹。当太阳最终触碰到海平线并缓缓下坠时，整个天空上演着一场疯狂的色彩爆炸——从橙红、紫粉到深邃的宝蓝。那一刻，你感受到的并非单纯的壮丽，而是一种巨大的、令人心安的空寂。仿佛所有的烦恼都被这海风与落日稀释，吹散到了浩瀚的地中海里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚停下，一阵猛烈而纯粹的风就裹挟着海盐与野生百里香的粗粝气息扑面而来，瞬间卷走了所有车内的沉闷。你听到的第一个声音，不是人声，是风永恒的呼啸，还有从那深渊之下隐隐传来的、节奏稳如心跳的海浪拍岸声。往前走几步，脚下的土地戛然而止，世界在你眼前被一分为二：一边是坚实、粗糙、泛着蜂蜜色的石灰岩土地，上面零星点缀着顽强的仙人掌和低矮的石墙；另一边，则是毫无过渡、垂直跌向下方250米处的、广阔无垠的靛蓝色地中海。那种视觉的断裂感如此强烈，让你不由自主地屏住呼吸，仿佛站在了世界的尽头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里看不到太多游客的喧嚣，更多是当地人的日常。你会遇见慢跑者戴着耳机从身边掠过，他们的背影融入海天一色的地平线；会看到情侣或老夫妻并肩坐在悬崖边的矮墙上，什么也不说，只是静静地看着海平面上缓缓移动的货轮光点；偶尔还有一两位画家，支着画架，试图用颜料捕捉那瞬息万变的光影。丁利悬崖不是被供奉起来的景点，它是马耳他人呼吸、漫步、思考甚至只是“待着”的一个地方。它慷慨地提供着无限的视野，也苛刻地要求你直面自然最原始的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是这里的黄昏。当太阳开始西沉，一切都变了。蜂蜜色的岩石被染上金红，平静的海面铺开一条碎钻般的粼粼光路。风似乎也温柔了些。人们从各处聚拢到面朝西方的崖边，像参加一场无声的仪式。没有人大声喧哗，只有相机轻微的咔嚓声和低语般的赞叹。当太阳最终触碰到海平线并缓缓下坠时，整个天空上演着一场疯狂的色彩爆炸——从橙红、紫粉到深邃的宝蓝。那一刻，你感受到的并非单纯的壮丽，而是一种巨大的、令人心安的空寂。仿佛所有的烦恼都被这海风与落日稀释，吹散到了浩瀚的地中海里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`丁利悬崖`} />
                <InfoRow label="英文名称" value={`Dingli Cliffs`} />
                <InfoRow label="正式名称" value={`Dingli Cliffs`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`丁利`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这片见证了地中海数千年航运、战争与祈祷的石灰岩绝壁，是马耳他群岛抵御外海与守望家园的天然疆界。`} />
                <InfoRow label="建筑特色" value={`并非人造建筑，其“特色”在于由大自然鬼斧神工雕琢出的、高达约250米的垂直崖壁，以及崖顶平缓开阔、遍布历史痕迹的石灰岩高原。`} />
                <InfoRow label="建筑风格" value={`纯粹的自然地貌，展现典型的地中海喀斯特地形特征，岩石嶙峋，植被低矮。`} />
                <InfoRow label="文化价值" value={`对于马耳他人而言，这里既是地理上的制高点，也是精神上的瞭望塔，承载着岛民与海洋共生的坚韧历史和对家园的深沉凝视。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天24小时开放。但建议在日出至日落后一小时内游览，夜间缺乏照明且海风强劲，存在安全风险。景区内的小教堂（圣玛利亚小教堂）通常仅在白天开放，具体时间可能随季节微调。`} />
              <InfoRow label="门票价格" value={`完全免费，无需门票。这是一个开放的公共自然景观区域。`} />
              <InfoRow label="地址" value={`Dingli Cliffs, Triq Panoramika, Ħad-Dingli, Malta, DGL 9010`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场出发是最佳选择。在机场外的公交枢纽乘坐52路公交车，方向为“Rabat”，车程约30分钟。在Rabat总站下车后，换乘201路公交车，直接前往“Dingli Cliffs”站。全程约1-1.5小时。公交车次在工作日较为频繁（约每30-45分钟一班），周末及公共假日班次会大幅减少，务必提前在马耳他公交官网或车站查看时刻表。不建议从瓦莱塔等主要城市直接前往，需要多次换乘，耗时过长。最自由的方式是租车自驾，沿着清晰的路标即可轻松抵达悬崖旁的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`丁利悬崖的故事，远比任何一座城堡都要古老。它的基石可以追溯到数百万年前，当时这片区域还沉睡在古地中海的海底。地壳的运动将它高高托起，而随后千万年的风雨侵蚀，像一位最有耐心的雕塑家，用风和雨水细细雕琢，最终形成了这道几乎垂直的、令人望而生畏的天然壁垒。在人类尚未踏足之前，这里只是飞鸟的领地和风的通道。最早将目光投向这里的，或许是公元前前来贸易的腓尼基水手，他们将这道不可逾越的悬崖视为航行的天然地标，也可能是危险的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到中世纪，马耳他进入了骑士团时代。对于统治岛屿的圣约翰骑士团来说，丁利悬崖的战略意义变得至关重要。它不仅是岛屿西南面天然的防御屏障，阻挡了来自那片开阔海域的潜在入侵（尤其是令人闻风丧胆的巴巴里海盗），更是一个无可替代的瞭望点。骑士们很可能在崖顶设置了观察哨，日夜监视着广阔的海域。你能想象，一个年轻的骑士哨兵，在无数个漫长的夜晚，听着崖下永恒的海浪声，紧盯着漆黑的海面，任何一点异常的船影火光都可能意味着战斗的警报。这里的风，曾裹挟过烽火台上的硝烟味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`悬崖顶上那座小巧朴素的圣玛利亚小教堂，则诉说着另一重历史。它最早建于文艺复兴时期，几经毁坏与重建。对于世代居住在内陆丁利村的农民来说，悬崖既是土地的尽头，也是精神的延伸。这座教堂是他们向大海的祈福，祈祷出海捕鱼的亲人平安，祈祷恶劣的风暴不要降临。它没有主岛那些大教堂的恢弘装饰，却有着最直接、最质朴的信仰力量。在二战期间，马耳他作为盟军关键的据点遭受了轴心国猛烈的轰炸，这道高高的悬崖再次扮演了角色——盟军的雷达站曾设立于此，这片空旷的高地成为了监视敌机的眼睛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，战争的硝烟早已散尽，雷达站也成了往事。丁利悬崖的使命，从军事防御、生存守望，悄然转变为了心灵的庇护所。它不再需要警惕敌人的船帆，而是为每一个来访者提供审视自我、对话自然的空间。那些古老的石灰岩步道，曾被农夫和士兵踩踏，如今迎来了徒步爱好者与追寻宁静的旅人。历史在此处沉淀下的，不是厚重的砖石，而是一种由高度、海风与孤独混合而成的永恒气息。它静静地告诉你，无论时代的浪潮如何翻涌，总有一些地方，保持着最初瞭望的姿态。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最完整的体验，强烈建议在下午中段（例如夏季的下午4点左右）抵达。这样你有充足的时间在明亮的光线下探索悬崖全景，感受白日里海风的力度，然后悠闲地漫步至最佳日落观测点，等待一天的高潮。整体游览节奏应放得非常慢，这不是打卡景点，而是沉浸式体验。预留至少3到4小时，从停车场出发，先向内陆方向走一小段，探访小教堂和周边田园，再缓缓移向悬崖边缘，沿着步道由南向北漫步，最终在西向的突出部安定下来，完成从探索到静候的完美过渡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着结实防滑的徒步鞋或运动鞋，悬崖边缘的岩石常年被海风侵蚀，可能湿滑且不平整，绝对不要为了拍照冒险靠近没有护栏的极端边缘。马耳他的阳光非常猛烈，即使有风，也一定要涂抹高倍数防晒霜并戴好帽子和太阳镜，悬崖上几乎没有遮阴处。建议带上一件防风外套，即使夏日傍晚，海风也会很凉。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场先别急着冲向悬崖，反方向走上几分钟去探访那座被古老石墙环绕、有着蓝色圆顶的圣玛利亚小教堂，感受它在旷野中的宁静`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着教堂后方的小径穿过一片典型的马耳他乡村景致，看看那些分割田野的干石墙和偶尔冒头的史前 cart ruts（古代车辙印记）`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢踱回主路，选择面向大海的悬崖步道起点，深吸一口咸湿的空气，让眼睛逐渐适应那无边无际的蓝色画布`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一处安全的突出岩石坐下（切记保持安全距离），静静聆听至少十分钟，分辨风声、远处村庄的微弱狗吠、以及不同层次的海浪回响`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着修缮良好的步道向北漫步，观察脚下岩缝中顽强生长的野花和草药，比如那香气浓郁的野生百里香`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在步道中途的几处信息牌前驻足，了解眼前这片海域的历史名称与古老传说，将眼前的风景与历史连接起来`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当太阳开始明显降低时，向雷达站遗址（现在是一片白色圆顶建筑）附近移动，那里是公认的、视野最开阔的西向日落观景台`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落之后别急着离开，回头望向东边的岛内，看陆地上星星点点的灯火渐次亮起，与头顶渐浓的夜幕星河交相辉映`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`悬崖边缘低角度仰拍人像`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，让人物坐在安全的悬崖内陆边缘，以低角度拍摄，将人物与广阔的天空及身后的崖壁一同纳入画面，营造天地辽阔之感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣玛利亚小教堂与旷野全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂东侧稍远的田野中，用广角镜头将古朴的教堂、黄色的石灰岩地面、绿色的农田以及远处深蓝的海平面收纳进一幅画面，最佳光线在清晨或日落前黄金一小时`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`雷达站圆顶与落日剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，以白色的雷达站圆顶为前景，对准正在沉入海平面的夕阳，拍摄极具科幻感与自然美结合的剪影照片`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`垂直崖壁与海岸线航拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果你有无人机（飞行前务必确认当地法规），从悬崖正前方平行于崖壁飞行，可以拍下令人眩晕的垂直断面与下方翡翠般海水撞击岩石的白色浪花带`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`傍晚蓝调时刻的悬崖长曝光`}</h4>
                  <p className="text-sm text-gray-700">{`日落后约20-30分钟的“蓝调时刻”，使用三脚架，用小光圈和慢速快门（如10-30秒）拍摄，可以将海面雾化如丝绸，天空呈现深邃蓝色，崖上灯光点缀，画面静谧而魔幻`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`长焦镜头在这里非常有用，可以压缩海面与天空的距离，捕捉遥远货轮的细节，或者拍摄悬崖地质纹理的特写。风大时务必握稳相机，使用更高的快门速度以防抖动。尊重当地人的隐私，如果拍摄到正在祈祷或沉思的当地人，最好事先征得同意或避免正面特写。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡土情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在丁利村（Dingli Village）中心的家庭式宾馆，醒来就能闻到房东烤制传统“hobż”（面包）的香气，傍晚和 locals 在村里唯一的广场酒吧喝杯当地啤酒`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文化沉浸之选`}</h4>
                  <p className="text-sm text-green-800">{`选择附近古城姆迪纳（Mdina）或拉巴特（Rabat）的精品酒店，这些由古老宅邸改造的住所充满历史感，白天游玩悬崖，夜晚漫步在静谧的“寂静之城”中世纪街道`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风尚之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于悬崖沿线、拥有无敌海景的现代设计酒店，房间拥有整面落地窗和私人阳台，让你在私密空间里就能独享地中海的日出与星空`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自主灵活之选`}</h4>
                  <p className="text-sm text-purple-800">{`租下悬崖附近乡村一栋带花园的传统石屋（farmhouse），自己从市场采购食材烹饪，体验几天真正的岛民生活，享受绝对宁静的夜晚`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马耳他主岛不大，但公共交通在晚间和郊区不太便利，如果选择住在丁利或更偏远的乡村，强烈建议租车，否则出行会受很大限制。旺季（6-9月）的住宿非常紧俏，尤其是特色房源，务必提前数月预订。住在古城姆迪纳或拉巴特虽然离悬崖有一段车程，但餐饮和夜生活选择丰富得多，能获得更平衡的体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开丁利悬崖好几天后，耳边仿佛还回响着那里的风声。那是一种奇特的感受——它没有给你留下某件具体的纪念品，却在你心里拓开了一片空间。在这个信息爆炸、注意力被无限切割的时代，这样一个地方显得尤为珍贵。它不提供娱乐设施，不讲述复杂的故事，甚至没有太多“可做”的事情。它只是存在在那里，以其亘古不变的巨大存在感，要求你停下来，只是看，只是听，只是感受。这种“无为”的体验，恰恰是现代旅行中最稀缺的奢侈品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该把丁利悬崖列入清单。不仅仅是为了那张惊艳的日落照片，更是为了去体验一种“地理的清醒”。站在欧洲南端的这片高崖上，你会清晰地意识到自己在世界上的位置——一个被蔚蓝包围的微小点。这种认知既让人谦卑，也让人释然。它提醒我们，在人类所有的喧嚣、创造与纷争之外，还有一种更古老、更宏大的节奏，那就是潮汐的起落、风的轨迹与星辰的轮转。来这里，就是赴一场与这种古老节奏的约会，让自己重新校准。当你看过丁利悬崖的日落后，或许会明白，有些风景，不是为了被征服，而是为了被守望；而有些旅途，是为了找到那个能让自己静静守望的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spoleto-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/erice-hill-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃里切山城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Erice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/motovun-istria-croatia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫托文</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Motovun</p>
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
