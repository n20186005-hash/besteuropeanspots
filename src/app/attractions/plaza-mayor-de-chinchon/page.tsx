import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '钦琼主广场 Plaza Mayor de Chinchón｜在马德里周边邂逅西班牙最独特的圆形剧场式广场 - 最佳欧洲景点',
  description: '嘿，朋友，如果你在马德里的城市森林里待得有些审美疲劳，想找一个地方瞬间呼吸到最地道的卡斯蒂利亚乡村空气，那我必须把你拉到钦琼来。车子刚驶入这个小镇，那种红瓦白墙、宁静悠闲的调子就扑面而来，但真正的震撼，总是留到最后。当你穿过狭窄的老街巷，脚步踏上主广场边缘那一瞬间——相信我，你会不由自主地“哇”出声...',
}

export default function PlazaMayorDeChinchonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '钦琼', href: '/destinations/spain' },
            { label: '钦琼', href: '/attractions/plaza-mayor-de-chinchon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`钦琼・Chinchón・西班牙・钦琼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你在马德里的城市森林里待得有些审美疲劳，想找一个地方瞬间呼吸到最地道的卡斯蒂利亚乡村空气，那我必须把你拉到钦琼来。车子刚驶入这个小镇，那种红瓦白墙、宁静悠闲的调子就扑面而来，但真正的震撼，总是留到最后。当你穿过狭窄的老街巷，脚步踏上主广场边缘那一瞬间——相信我，你会不由自主地“哇”出声来。
眼前展开的，是一个巨大、完整、令人目眩神迷的圆形剧场。不，它不是古罗马遗址，而是一个“活着”的广场。234个木质小阳台，像蜂巢一样密密麻麻、整整齐齐地环绕着这个巨大的圆形空间，被漆成绿色、蓝色、赭石色的木窗和栏杆，在伊比利亚半岛明烈的阳光下闪闪发光。空气里有种混合的味道：旁边餐馆飘来的烤乳猪和蒜油大虾的焦香，古老木头上阳光烘烤后的干燥气味，还有从广场石板缝里透出的、几百年来人来人往积淀下的尘土气息。广场中央是碎石子铺成的地面，空旷，宁静，只有几个老人坐在长椅上晒太阳，鸽子扑棱着翅膀飞过。你立刻就能感觉到，这个广场不是一个仅供参观的景点，它就是小镇跳动的心脏，是所有故事的起点和终点。
最打动人的，是那种强烈的戏剧感与日常生活的奇妙交融。那些层层叠叠的阳台，是天然的“包厢”。你可以想象，几个世纪以来，小镇居民就是推开自家那扇吱呀作响的木门，走到阳台上，俯视着广场上发生的一切：周日的集市上农妇们叫卖着新鲜果蔬，复活节时庄严的宗教游行队伍缓缓穿过，夏日夜晚临时搭建的舞台上上演着古典戏剧，甚至是在沙土铺就的广场中央举行的、充满野性与激情的民间斗牛。你在广场中央站着，仿佛能听到历史的回声与当下生活的声音交织在一起——孩子的笑闹，酒杯的碰撞，弗拉明戈吉他的零星弦音。这里没有恢弘的穹顶，没有奢金的装饰，它的魅力全在于这种独一无二的、将建筑转化为社群生活舞台的 genius loci（场所精神）。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你在马德里的城市森林里待得有些审美疲劳，想找一个地方瞬间呼吸到最地道的卡斯蒂利亚乡村空气，那我必须把你拉到钦琼来。车子刚驶入这个小镇，那种红瓦白墙、宁静悠闲的调子就扑面而来，但真正的震撼，总是留到最后。当你穿过狭窄的老街巷，脚步踏上主广场边缘那一瞬间——相信我，你会不由自主地“哇”出声来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`眼前展开的，是一个巨大、完整、令人目眩神迷的圆形剧场。不，它不是古罗马遗址，而是一个“活着”的广场。234个木质小阳台，像蜂巢一样密密麻麻、整整齐齐地环绕着这个巨大的圆形空间，被漆成绿色、蓝色、赭石色的木窗和栏杆，在伊比利亚半岛明烈的阳光下闪闪发光。空气里有种混合的味道：旁边餐馆飘来的烤乳猪和蒜油大虾的焦香，古老木头上阳光烘烤后的干燥气味，还有从广场石板缝里透出的、几百年来人来人往积淀下的尘土气息。广场中央是碎石子铺成的地面，空旷，宁静，只有几个老人坐在长椅上晒太阳，鸽子扑棱着翅膀飞过。你立刻就能感觉到，这个广场不是一个仅供参观的景点，它就是小镇跳动的心脏，是所有故事的起点和终点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种强烈的戏剧感与日常生活的奇妙交融。那些层层叠叠的阳台，是天然的“包厢”。你可以想象，几个世纪以来，小镇居民就是推开自家那扇吱呀作响的木门，走到阳台上，俯视着广场上发生的一切：周日的集市上农妇们叫卖着新鲜果蔬，复活节时庄严的宗教游行队伍缓缓穿过，夏日夜晚临时搭建的舞台上上演着古典戏剧，甚至是在沙土铺就的广场中央举行的、充满野性与激情的民间斗牛。你在广场中央站着，仿佛能听到历史的回声与当下生活的声音交织在一起——孩子的笑闹，酒杯的碰撞，弗拉明戈吉他的零星弦音。这里没有恢弘的穹顶，没有奢金的装饰，它的魅力全在于这种独一无二的、将建筑转化为社群生活舞台的 genius loci（场所精神）。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`钦琼`} />
                <InfoRow label="英文名称" value={`Chinchón`} />
                <InfoRow label="正式名称" value={`Plaza Mayor de Chinchón`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`钦琼`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自中世纪起就作为小镇生活、市集与庆典核心的“露天剧场”，其独特的圆形剧场式建筑格局在西班牙乃至欧洲都极为罕见。`} />
                <InfoRow label="建筑特色" value={`由234座连续不断、高度统一的三层木制阳台廊屋围合而成的完美圆形空间，建筑立面色彩明快，形成浑然一体的剧场式观景台。`} />
                <InfoRow label="建筑风格" value={`以质朴的民间建筑为基础，融合了中世纪、文艺复兴及巴洛克元素，呈现出典型的卡斯蒂利亚乡村建筑风格。`} />
                <InfoRow label="文化价值" value={`不仅是一个建筑奇观，更是一个持续运转了数个世纪的西班牙乡村社群生活的活态博物馆，见证了从市集、斗牛到戏剧表演的日常与节庆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`广场本身为公共空间，全天24小时开放。环绕广场的建筑底层商铺、酒吧和餐馆的营业时间各不相同，通常为上午10点至深夜。广场上举办的集市、节庆或文化活动时间不定，建议行前查询当地旅游局官网。`} />
              <InfoRow label="门票价格" value={`进入广场免费。广场上时常举办的活动（如中世纪集市、圣诞市场）可能免费或收取小额入场费。环绕广场的联排房屋阳台是绝佳观景位，通常只有在楼上餐馆或酒吧消费（人均消费约15-30欧元）才能进入。`} />
              <InfoRow label="地址" value={`Plaza Mayor, s/n, 28370 Chinchón, Madrid, España`} />
              <InfoRow label="交通方式" value={`从马德里出发最方便。自驾：从马德里市中心沿A-3高速公路向东南行驶约40公里，从Arganda del Rey出口下，转M-311公路，再转入M-313公路，全程约45分钟。公共交通：从马德里Conde de Casal公交站搭乘337路大巴（由Autoperiferia公司运营），班次约为每小时一班，车程约1小时，终点站即为钦琼镇中心，下车后步行5分钟可达主广场。建议使用公交卡或上车购票，可提前在网站查询时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲钦琼广场的故事，我们得把时钟拨回很久以前。这个地方的名字最早出现在文献里，还是基督徒从摩尔人手中收复失地的年代。但广场的雏形，大概在15世纪左右才真正形成。那时候，这里就是个天然的集市聚集地，位于几条道路的交汇处，农夫、牧羊人、手工艺人每周都来这里交易。你可以想象，最初那些房子只是随意地围了一圈，给赶集的人歇脚、拴牲口。真正的转折点，可能发生在1499年，天主教双王（费迪南德和伊莎贝拉）将钦琼封给了他们的重臣，钦琼的第一任伯爵。贵族势力的入驻，给小镇带来了规划和秩序的需要。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但让这个广场变成今天这副“剧场”模样的，并不是某个建筑师一张宏伟的蓝图，而更像是一场持续了数百年的、由实用主义驱动的“共同创作”。从16世纪到18世纪，广场周边的房子被不断地重建、加高、统一。为什么是三层？为什么是带木阳台？答案就藏在生活里。小镇地处平原，夏季酷热，冬季寒冷，那个巨大的、没有顶棚的圆形广场中心，就是最好的公共活动空间。而环绕它的房子，则需要既能观看广场活动，又能提供荫蔽和私人空间的“看台”。于是，带顶棚的木质阳台成了最佳选择——它们提供了绝佳的视野，又能遮阳避雨。一代又一代的居民，在重建自家房子时，都默契地遵循了这个“潜规则”：高度一致，样式统一，围绕中心。这就像一场没有指挥的合唱，最终唱出了和谐无比的乐章。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，历史从不只有平和的建造。战争也曾在这里留下伤痕。1808年，拿破仑的军队入侵西班牙，钦琼这座战略小镇未能幸免。法国士兵曾占领广场，并把一些建筑作为营房和马厩。据说，广场上的圣玛丽亚教堂的钟楼被炮火严重损毁，后来重建时，干脆因地制宜，把钟楼建在了旁边的老城堡遗址上，形成了今天教堂与钟楼“分居两地”的奇特景观。这或许也是广场命运的一个隐喻：它总是能被实用主义地修复，继续承载生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了19世纪，广场迎来了它最“西班牙”的高光时刻——成为斗牛场。没有专门的斗牛场？没关系，把广场中央铺上沙子，四周的阳台就是现成的、能容纳上千人的“看台”！这种临时斗牛场的形式，反而让它更具野性和民间魅力。传说连西班牙的国王都曾亲临这里的阳台观看斗牛。这种功能一直延续到后来，甚至20世纪中叶，一些电影导演也相中了这个天然的、无需搭景的完美“片场”，在这里拍摄了多部西部片和历史片。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，斗牛活动已不多见，但广场的“舞台”属性丝毫未减。它变成了圣诞市场、中世纪集市、夏季音乐会、露天戏剧和最重要的“钦琼大蒜节”的举办地。每一扇木窗后面，可能依然住着世代生活于此的家庭；每一个阳台上，夏天会摆上餐桌成为浪漫的露天餐厅。它的历史，不是躺在博物馆玻璃柜里的标本，而是像广场中央那口老井里的水，依然在汩汩流动，滋养着每一天的日出与日落。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受钦琼主广场的魅力，我强烈建议你安排一整天的时间，从清晨待到夜晚。节奏应该是慵懒而沉浸的。早上十点左右抵达最佳，这时旅行团大军还未杀到，阳光温柔，你能看到小镇苏醒的样子。先用上午的时间探索广场本身和周边的巷弄，中午在广场边的餐馆享用漫长的西班牙午餐，下午去探访教堂和城堡遗迹，傍晚时分再次回到广场，看光影变幻，最后在阳台餐厅享用晚餐，见证广场从黄昏的金色陷入夜晚温暖的灯火中。这样的安排能让你像当地人一样，体验广场在不同时段截然不同的氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日广场周边常有跳蚤市场，虽然热闹但有部分商铺关门，若追求宁静建议避开周日。
广场地面是碎石子，穿一双舒适耐走的平底鞋或靴子至关重要，高跟鞋在这里会是一场灾难。
小心广场上过于热情招呼你进餐厅的人，通常性价比最高的馆子都低调地藏在侧面小巷里，多做比较。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先别急着冲进广场中心，而是绕着广场外围走一圈，仰头数数那些颜色各异的木质阳台，听听本地居民推开窗、拉起卷帘门开始一天生活的声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场北侧任意一个拱门走进中央的碎石子地，静静地站一会儿，感受这个圆形空间带来的包裹感与宁静，观察阳光如何慢慢爬满对面的一整排阳台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家正对广场的古老餐馆，登上它的二楼或三楼阳台，点一杯咖啡或鲜榨橙汁，像拥有私人包厢一样，俯瞰整个空旷的广场全貌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午十点后，逛逛广场周边的小巷，特别是那些卖手工草编篮、陶器和当地特色大蒜制品的小店，和店主聊上几句。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的小路步行至山顶的圣母升天教堂和相邻的洛佩·德·维加剧院遗址，从高处回望，你会看到广场像一个完美的圆嵌在红瓦屋顶的海洋中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午两三点，加入当地人的“午休”节奏，找一家有荫蔽的广场边餐厅，享用一顿以烤乳羊、炖野味或大蒜汤为特色的漫长午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏前再次回到广场中央，这时光线变得金黄而柔和，是观察阳台阴影与建筑立面色彩对比最绝妙的时候，拍下的照片会充满故事感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后，选择一家阳台餐厅晚餐，当广场四周的建筑纷纷亮起暖黄色的灯光，广场中央也可能被活动点缀，你将看到这个“剧场”最浪漫、最有生命力的模样。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场北侧某栋建筑的二楼/三楼阳台俯拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是上午十点前或下午五点后，阳光斜射能让阳台栏杆的阴影形成美妙的线条，构图时尽量将广场的圆形弧度收全，并带上部分对面的阳台，形成深邃的景深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从广场任意一个拱形入口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`站在入口的阴影里，对准阳光照耀下的广场中心和对面的亮色建筑，可以拍出明暗对比强烈、充满神秘感和引导感的框架构图照片，人物小小地走在光中会格外有感觉。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`黄昏时在广场中心低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，天空呈现蓝调时刻，广场四周建筑的灯光陆续亮起，用相机低角度仰拍，能将温暖的灯光窗口、深蓝色的天空和建筑的剪影一同纳入画面，充满静谧的生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从广场东南角的小斜坡向上拍圣玛丽亚教堂的独立钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`这个角度可以将广场一侧的阳台作为前景，远处山顶上敦实的钟楼作为背景，构成一幅极具西班牙乡村风情的错落画面，下午侧光时拍摄最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`在广场周边小巷里寻找能瞥见部分广场圆形弧线的缝隙`}</h4>
                  <p className="text-sm text-gray-700">{`这种局部视角有时比全景更动人，能捕捉到阳台、鲜花与广场局部结合的生活瞬间，需要你耐心地在小巷里穿梭发现。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用35mm或50mm定焦镜头能很好地捕捉广场的建筑细节和人文氛围，广角镜头在阳台上拍摄全景时必不可少。`}</li>
                <li>• {`尊重当地居民隐私，避免用长焦镜头直接拍摄阳台或窗户内的私人生活场景，如需拍摄人物，最好先微笑征得同意。`}</li>
                <li>• {`广场的光影对比在正午时非常强烈，拍摄人像可能会面临脸上阴影过重的问题，建议利用建筑物的阴影边缘或选择在黄金时段拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`地道体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住广场周围那些带历史阳台的私人公寓或小旅馆，推开木窗就能将整个广场收入眼底，晚上听着楼下隐约的人声入睡，感觉自己成了小镇故事的一部分。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡村庄园`}</h4>
                  <p className="text-sm text-green-800">{`选择镇外不远处由古老农庄或酒庄改造而成的乡间酒店，被橄榄树和葡萄园环绕，拥有宁静的花园和泳池，适合想要在游览后彻底放松、享受田园时光的旅人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`精品设计`}</h4>
                  <p className="text-sm text-yellow-800">{`镇中心由老房子改造的精品设计酒店，完美保留了石墙、木梁等原始结构，但内部装修是现代简约风，提供舒适的床品和精致的早餐，是历史感与舒适度的完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高性价比`}</h4>
                  <p className="text-sm text-purple-800">{`选择离广场步行5-10分钟范围的家庭式民宿或小型酒店，价格亲民，通常由热情的主人经营，能给你最地道的吃喝玩乐建议，体验家一般的温暖。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果预算允许，务必选择一间带“面向广场的阳台”的房间，这是钦琼住宿体验的精髓，多花点钱绝对值得。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇非常安全宁静，但老房子隔音可能一般，如果对声音敏感，可以准备一副耳塞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（特别是夏季周末和节庆期间）阳台房非常抢手，务必提前数月预订，平日则选择余地大很多。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开钦琼很久以后，那个圆形的广场依然会清晰地印在脑海里。它让我思考，什么才是一个地方真正动人的灵魂？不是极致的奢华，不是庞大的规模，而是那种将人的生活、社群的情感与建筑空间完美融合的智慧。钦琼广场就是一个这样伟大的“容器”。它没有试图去震撼你，而是温柔地包裹你，邀请你成为它日常戏剧的观众，甚至是一瞬间的演员。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏、追求网红打卡点的世界里，钦琼提供了一种截然不同的旅行价值——一种关于“参与感”和“慢观察”的深度体验。它告诉你，最美的风景有时不是孤立的 monument（纪念碑），而是一个持续运转的 system（系统），一个承载着欢笑、交易、祈祷、庆祝与平凡日子的生命场。在这里，你收获的不是一张标准化的风景明信片，而是一种独特的空间记忆，一种对西班牙乡村生活脉搏的真切触摸。所以，如果你厌倦了走马观花，渴望一场有温度、有呼吸、能走进画面里的旅行，请一定要来钦琼，坐在它的阳台上，发一会儿呆，看一场生活。你会发现，旅行的意义，有时就藏在一个完美的圆里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/segovia-aqueduct" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞哥维亚罗马水道桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segovia Aqueduct</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/girona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫罗纳古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/baeza-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴埃萨古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baeza Old Town</p>
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
