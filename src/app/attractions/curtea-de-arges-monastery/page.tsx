import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔杰什的库尔泰亚修道院 Curtea de Argeș Monastery｜“白色大理石的华丽哀歌”，罗马尼亚最具传奇色彩的王室陵寝 - 最佳欧洲景点',
  description: '朋友，想象一下，当你穿过一个宁静的罗马尼亚小镇，突然，一片象牙白与赭石色交织的建筑群撞入眼帘，在喀尔巴阡山南麓清澈的蓝天下，它不像一座沉重的堡垒，反而像一件被遗落凡间的、过于精美的首饰。这就是库尔泰亚德阿尔杰什修道院给你的第一眼震撼。空气里有股清冽的味道，混合着远处森林的松香、烛火熄灭后的淡淡蜡味，...',
}

export default function CurteaDeArgesMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿尔杰什的库尔泰亚修道院', href: '/attractions/curtea-de-arges-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔杰什的库尔泰亚修道院・Curtea de Argeș Monastery・罗马尼亚・阿尔杰什县，库尔泰亚德阿尔杰什市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你穿过一个宁静的罗马尼亚小镇，突然，一片象牙白与赭石色交织的建筑群撞入眼帘，在喀尔巴阡山南麓清澈的蓝天下，它不像一座沉重的堡垒，反而像一件被遗落凡间的、过于精美的首饰。这就是库尔泰亚德阿尔杰什修道院给你的第一眼震撼。空气里有股清冽的味道，混合着远处森林的松香、烛火熄灭后的淡淡蜡味，以及一种石头被正午阳光晒暖后散发的、古老而干燥的气息。
走近了，那种感官的冲击才真正开始。你的眼睛会忙不过来。主教堂的屋顶铺着光泽柔和的铅灰色瓦片，但墙体却被无数细小的、色彩斑斓的陶瓷片所覆盖——钴蓝、翡翠绿、明黄、深褐——它们拼成几何图案和藤蔓花纹，在阳光下闪烁着湿润般的光泽，这分明是摩尔人建筑的灵魂。然而，建筑的形体却是纯正的拜占庭式：中央巨大的穹顶，侧翼的小圆顶，构成一个庄重的十字。这种奇异的混搭，没有丝毫违和，反而产生了一种哀婉的华丽感，仿佛一位身穿东方绸缎的拜占庭公主。
你会发现，这里不只是游客的景点。在庭院的老树下，总有身着黑袍的修士静默走过，鞋底摩擦砂石路发出沙沙声。教堂门口，本地老妇人披着传统的绣花头巾，颤巍巍地点燃长长的细蜡烛，低声祷告。阳光透过高大的窗户，在教堂内部的金色圣像屏和壁画上切割出明暗交错的线条，空气中悬浮着微尘，只有祈祷的喃喃声在拱顶下轻柔回荡。它活着，深深地扎根于当地人的信仰与记忆之中。
而它最打动人心的，正是这种“华丽的哀伤”气质。它是一座陵寝，安息着罗马尼亚历史上最英明的君主之一。那份极致美丽的外部装饰，仿佛是为了抚慰永恒的死亡，是用最璀璨的人间艺术，向彼岸致以的最深情注目。你站在这里，感受到的不是阴森，而是一种深沉的、被艺术升华了的宁静与永恒。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你穿过一个宁静的罗马尼亚小镇，突然，一片象牙白与赭石色交织的建筑群撞入眼帘，在喀尔巴阡山南麓清澈的蓝天下，它不像一座沉重的堡垒，反而像一件被遗落凡间的、过于精美的首饰。这就是库尔泰亚德阿尔杰什修道院给你的第一眼震撼。空气里有股清冽的味道，混合着远处森林的松香、烛火熄灭后的淡淡蜡味，以及一种石头被正午阳光晒暖后散发的、古老而干燥的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，那种感官的冲击才真正开始。你的眼睛会忙不过来。主教堂的屋顶铺着光泽柔和的铅灰色瓦片，但墙体却被无数细小的、色彩斑斓的陶瓷片所覆盖——钴蓝、翡翠绿、明黄、深褐——它们拼成几何图案和藤蔓花纹，在阳光下闪烁着湿润般的光泽，这分明是摩尔人建筑的灵魂。然而，建筑的形体却是纯正的拜占庭式：中央巨大的穹顶，侧翼的小圆顶，构成一个庄重的十字。这种奇异的混搭，没有丝毫违和，反而产生了一种哀婉的华丽感，仿佛一位身穿东方绸缎的拜占庭公主。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里不只是游客的景点。在庭院的老树下，总有身着黑袍的修士静默走过，鞋底摩擦砂石路发出沙沙声。教堂门口，本地老妇人披着传统的绣花头巾，颤巍巍地点燃长长的细蜡烛，低声祷告。阳光透过高大的窗户，在教堂内部的金色圣像屏和壁画上切割出明暗交错的线条，空气中悬浮着微尘，只有祈祷的喃喃声在拱顶下轻柔回荡。它活着，深深地扎根于当地人的信仰与记忆之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的，正是这种“华丽的哀伤”气质。它是一座陵寝，安息着罗马尼亚历史上最英明的君主之一。那份极致美丽的外部装饰，仿佛是为了抚慰永恒的死亡，是用最璀璨的人间艺术，向彼岸致以的最深情注目。你站在这里，感受到的不是阴森，而是一种深沉的、被艺术升华了的宁静与永恒。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔杰什的库尔泰亚修道院`} />
                <InfoRow label="英文名称" value={`Curtea de Argeș Monastery`} />
                <InfoRow label="正式名称" value={`Curtea de Argeș Monastery`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`阿尔杰什县，库尔泰亚德阿尔杰什市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瓦拉几亚公国的摇篮，罗马尼亚现代国家认同的重要奠基者内戈·巴萨拉布大公的安息之地，被誉为“罗马尼亚的王室威斯敏斯特”。`} />
                <InfoRow label="建筑特色" value={`将拜占庭的十字穹顶与摩尔式精致繁复的石头雕刻、彩色瓷片镶嵌完美融合的“布伦科维内斯克风格”典范。`} />
                <InfoRow label="建筑风格" value={`16世纪瓦拉几亚建筑风格，深受拜占庭、摩尔和后期哥特式影响，常被称为“罗马尼亚文艺复兴”或“布伦科维内斯克风格”。`} />
                <InfoRow label="文化价值" value={`它不仅是东正教信仰的圣地，更是凝聚罗马尼亚民族灵魂、见证公国辉煌与悲怆的史诗级石质史书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院建筑群全年开放，具体时间随季节调整。夏季（4月至10月）通常为每天上午8:00至晚上20:00；冬季（11月至3月）为上午9:00至下午17:00。内部博物馆和王子教堂的开放时间可能更短，通常为上午10:00至下午16:00，周一可能闭馆。重要的宗教节日（如复活节、圣诞节）期间，开放时间会大幅延长以供礼拜，但游客参观可能会受限。建议出行前在其官方网站或当地旅游局核实最新时间。`} />
              <InfoRow label="门票价格" value={`进入修道院庭院和主教堂内部是免费的。若要参观附属的博物馆或更核心的历史区域，可能需要支付小额门票，约15-20罗马尼亚列伊（约合3-4欧元）。学生、老年人和团体通常享有折扣。捐款箱随处可见，为维护这处珍宝，投入几列伊是备受赞赏的善举。`} />
              <InfoRow label="地址" value={`Bulevardul Basarabilor 1, Curtea de Argeș 115300, Romania`} />
              <InfoRow label="交通方式" value={`最近的国际机场是首都布加勒斯特的亨利·科安德国际机场。从布加勒斯特出发，最便捷的方式是租车自驾，沿A1高速公路向北，转入DN7国道，全程约150公里，车程2小时左右，沿途是喀尔巴阡山麓的优美风景。乘坐火车也是一种经典体验：从布加勒斯特的Gara de Nord火车站搭乘前往皮特什蒂或锡比乌方向的列车，在库尔泰亚德阿尔杰什站下车，车程约2.5-3小时，班次较频繁但可能需转车。火车站距离修道院约1.5公里，可步行或乘坐当地出租车（很便宜）抵达。如果从锡比乌或布拉索夫等特兰西瓦尼亚城市出发，自驾是更灵活的选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一个人和一条河讲起。14世纪初，巴萨拉布一世建立了瓦拉几亚公国，而阿尔杰什河谷就是这颗心脏最初跳动的地方。这里成了公国最早的首都。但让这座修道院跻身传奇的，是他的后代——内戈·巴萨拉布大公。这位16世纪初的统治者，是一位在奥斯曼帝国巨大阴影下竭力周旋、保一方独立的雄主。他不仅骁勇善战，更是一位伟大的建设者和文化庇护者。大约在1512年至1517年间，他下令建造这座修道院，意图非常明确：它要成为一座“王室墓葬教堂”，一个彰显公国主权与基督教信仰的永恒象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就引出了整个巴尔干地区最浪漫也最悲情的建筑传说——关于大师马诺尔的故事。相传，内戈·巴萨拉布召集了最优秀的工匠，但工程屡屡受挫，墙壁建起又倒塌。大公威胁要处死工匠们。首席建筑师马诺尔在梦中得到启示：必须将第一个出现在工地的活物砌入墙中，建筑才能稳固。翌日清晨，前来送饭的马诺尔爱妻不幸成为了那个“活物”。她被砌入墙中，修道院果然顺利建成。而心碎的马诺尔在完成穹顶后，拆除了脚手架，让自己从高处坠落而亡。这个传说版本众多，但核心都一样：这座建筑的美丽，是以极致的爱与牺牲为代价的。它从一开始，骨子里就刻满了悲剧性的诗意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建筑本身，就是一部石头写就的外交与文化史。内戈·巴萨拉布时期，瓦拉几亚与特兰西瓦尼亚的萨克森城市以及匈牙利王国交往密切，同时也面对着南方的奥斯曼帝国。这种地缘政治，直接反映在建筑上。你看到的拜占庭式穹顶，是东正教世界的正统血脉；而那些复杂如蕾丝的石雕、尤其是绚丽的彩陶镶嵌，明显受到了摩尔风格（经由奥斯曼文化传递）以及来自中欧的晚期哥特式的影响。它不是单纯的模仿，而是一种天才的“融合创新”，后世学者专门为此创造了“布伦科维内斯克风格”一词。这仿佛是大公用建筑在宣称：我们立足于此，吸收四方精华，自成一体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`内戈·巴萨拉布大公去世后，如愿安葬于此。此后，它成了瓦拉几亚乃至后来罗马尼亚王室青睐的安息地。19世纪，罗马尼亚现代国家的两位奠基者——国王卡罗尔一世和王后伊丽莎白（笔名卡门·西尔瓦）也长眠于此。王后尤其钟爱这里，她动人的诗篇常以此为背景。然而，历史的风霜从未放过它。它经历了地震、火灾，最重要的结构曾在17世纪一次大规模修复中重建。但每一次，人们都竭力按照原样修复，因为它的形象已经深入民族灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的模样，很大程度上归功于20世纪初法国建筑师们的修复。他们以严谨的态度，恢复了其16世纪的辉煌外观。当你触摸那些凉滑的陶瓷片，你触摸的不仅是16世纪工匠的手泽，也是20世纪修复者试图凝固民族记忆的渴望。它从一座王室陵寝，演变成了整个罗马尼亚的国家纪念碑。在这里，艺术、爱情传说、政治谋略与民族命运，被奇妙地烧制进了同一片彩陶之中，在阳光下，冷静地讲述着一切。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要沉浸式体验这里，建议安排至少3-4小时。最好在一个工作日的上午（9点后）抵达，这时晨祷刚结束，游客未至，光线清澈柔和，氛围最为肃穆宁静。首先从外部整体欣赏和拍照，然后进入教堂内部感受其灵性空间，接着探访王室陵寝和附属博物馆了解其厚重历史，最后在庭院中静坐回味。节奏上宜缓不宜急，这是一个需要用心去“读”和“感”的地方，匆匆一瞥无法领略其复杂情感层次的十分之一。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入主教堂内部时，务必遵守东正教礼仪：女性最好准备一条头巾（入口处有时会提供），男女都应避免穿着短裤或无袖上衣。教堂内禁止使用闪光灯，且拍照时务必保持绝对安静，尊重正在祈祷的信徒。小镇的餐馆不多，可以自备一点饮用水和零食，但记得不要在修道院庭院内进食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院古朴的入口拱门进入，让自己的眼睛先适应那片被高墙围合的、洒满阳光的宁静庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺时针绕主教堂走一圈，仰头细细观察那些在阳光下闪烁的彩色瓷片镶嵌带和石雕窗棂上不可思议的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开主教堂沉重的木门，让内部幽暗的光线包裹你，静静地站在中殿，感受从高窗倾泻而下照亮金色圣像屏的神秘光束。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`俯身靠近内戈·巴萨拉布大公朴实的石棺，上面简短的铭文与教堂外部的华丽形成无声却震撼的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观侧翼的小型博物馆，那里陈列着修复过程中的建筑构件和历史文档，是理解其“前世今生”的钥匙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出主建筑，在庭院一角的古老榆树下长椅上坐下，看着修士缓步走过，消化刚才所看到的一切复杂情绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，步行到不远处的阿尔杰什王室宫廷遗址，那里是更早的公国权力中心，能让你对这片土地的历史层次有更完整的理解。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`修道院南侧外墙全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三到五点，太阳西斜，光线能完美勾勒出建筑轮廓并让彩陶片熠熠生辉，退到庭院对面用广角镜头捕捉其对称之美与蓝天背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主教堂穹顶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在中殿中央，将镜头对准高大的穹顶内部壁画，等待一束阳光从穹顶窗户射入形成“天堂之光”的效果，无需额外补光。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`彩陶细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`寻找外墙上一块色彩保存尤其鲜艳的瓷片区域（通常在背阴面，颜色更润泽），用长焦或微距镜头贴近拍摄，捕捉釉面的裂纹和泥土的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`陵寝石棺的静谧构图`}</h4>
                  <p className="text-sm text-gray-700">{`在允许拍摄的陵寝区域，利用室内昏暗的光线和石棺旁常设的长明烛台作为前景，营造出肃穆、哀思与永恒交织的画面感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`罗马尼亚东正教教堂内部通常对拍照比较宽容，但务必先观察是否有禁止标志或征询修士的同意。拍摄信徒或宗教仪式的特写是极大的冒犯。最好的照片往往诞生于耐心等待——等待一个无人的角落，等待一束恰到好处的光。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住修道院步行十分钟可达的镇中心家庭旅馆，房东老奶奶会为你准备丰盛的 homemade 果酱早餐，夜晚能听见远处教堂隐约的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山间疗愈体验`}</h4>
                  <p className="text-sm text-green-800">{`驱车十五分钟前往喀尔巴阡山脚下的传统木屋民宿，被松林环绕，早晨在露台喝咖啡时，能看到薄雾如腰带般缠绕着远方的修道院尖顶。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸之旅`}</h4>
                  <p className="text-sm text-yellow-800">{`住在约三十公里外、更繁华的皮特什蒂市，那里有由奥匈帝国时期老建筑改造的精品酒店，方便以此为基地探索整个阿尔杰什河谷的历史遗迹。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷过夜站`}</h4>
                  <p className="text-sm text-purple-800">{`对于自驾旅行的朋友，可以选择库尔泰亚德阿尔杰什出口附近干净现代的汽车旅馆，设施崭新，停车方便，适合只停留一晚的深度访客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`库尔泰亚德阿尔杰什本身是个安静的小镇，夜间几乎没有任何喧嚣，治安极好。夏季和宗教节日期间住宿会紧张，建议提前预订。如果你想获得更完整的体验，强烈建议至少住一晚，感受日落之后、晨曦之前，修道院脱离游客光环后那份本真的宁静与神圣。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开的时候，我回头望了它最后一眼。夕阳正把那些彩陶片染成蜂蜜般的金色，整座建筑温暖得像在自行发光。我突然明白了，它之所以如此动人，恰恰在于它的“不纯粹”。它不是一座血统纯正的拜占庭教堂，也不是一座异域风情的摩尔宫殿。它是一位在强权夹缝中求生存的王子，用他能接触到的一切美好事物——东方的、西方的、宗教的、世俗的——为自己和所属的土地，建造的一座永恒的“家”。那些炫目的装饰，是力证自身文明价值的宣言，也是对必然消亡的命运最温柔的抗争。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、风格趋同的世界里，库尔泰亚德阿尔杰什修道院倔强地提醒着我们：最美、最深刻的文化结晶，往往诞生于交汇与压力之下。它不是一个轻松愉快的观光点，它是一首需要你静心聆听的、用石头、色彩和传说写成的史诗。它会让你思考什么是忠诚，什么是牺牲，什么是艺术在绝望时刻所能带来的终极慰藉。如果你渴望一场超越风景、直抵历史与灵魂深处的旅行，那么，请务必来到这里，站在内戈·巴萨拉布的墓旁，感受时间如何被艺术驯服，悲歌如何化为永恒宁静的璀璨之光。这是一生中不可或缺的一次凝视。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/craiova-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Craiova Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibiu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡比乌</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibiu</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wooden-churches-maramures" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马拉穆列什木教堂群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wooden Churches of Maramureș</p>
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
