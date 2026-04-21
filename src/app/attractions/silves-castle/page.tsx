import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡尔维什城堡 Silves Castle｜摩尔人红砂岩传奇，阿尔加维被遗忘的皇冠 - 最佳欧洲景点',
  description: '车子驶离海岸，开进阿尔加维的内陆丘陵，空气里的咸湿海风逐渐被烤热的岩石和桉树干燥的香气取代。然后，毫无预警地，它就出现在地平线上——一座用整块夕阳雕刻出来的堡垒，巍然盘踞在山顶，通体是那种浓烈到不真实的赭红色，仿佛大地渗出的血液凝固成了永恒的防御。这就是锡尔维什城堡给我的第一眼震撼。它不是童话里精致...',
}

export default function SilvesCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '锡尔维什城堡（红砂岩城堡）', href: '/attractions/silves-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡尔维什城堡（红砂岩城堡）・Silves Castle・葡萄牙・锡尔维什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离海岸，开进阿尔加维的内陆丘陵，空气里的咸湿海风逐渐被烤热的岩石和桉树干燥的香气取代。然后，毫无预警地，它就出现在地平线上——一座用整块夕阳雕刻出来的堡垒，巍然盘踞在山顶，通体是那种浓烈到不真实的赭红色，仿佛大地渗出的血液凝固成了永恒的防御。这就是锡尔维什城堡给我的第一眼震撼。它不是童话里精致脆弱的宫殿，而是一个坚硬、沉默、充满土地力量的巨人。
沿着鹅卵石小径往上走，脚下砾石的摩擦声和稀疏的蝉鸣是唯一的伴奏。当你亲手触碰到城墙，那粗糙、温热、颗粒分明的红砂岩质感会瞬间将你拉回现实，又或者说，拉入历史。这种石头，葡萄牙人叫它“grés de Silves”，在正午的烈日下会发烫，在黄昏时分会吸收天光，变得像一块巨大的、半透明的琥珀。空气中弥漫着一种特殊的尘土气味，混合着野生迷迭香和苦杏仁树的气息。你会发现，这里并非只有游客；有老夫妇牵着狗在城墙下的阴影里慢走，有画家支着画板试图捕捉塔楼轮廓线的颤动，它依然是这座宁静山城日常生活背景里的一部分。
走进城堡内部，喧嚣骤然退去。你站在空旷的中央广场，四周是高达数米的厚实城墙，切割出一片近乎完美的方形蓝天。那种静谧是压倒性的，你能听见自己的呼吸，听见风穿过城墙垛口时发出的低鸣。这里没有繁复的装饰，没有奢华的房间，只有纯粹的空间、体积和光影。最动人的是那些蓄水池的开口，像大地沉默的眼睛，向下望去是深不见底的幽暗，曾经维系着整座城堡的生命线。站在这里，你瞬间明白，这座城堡的魅力不在于金碧辉煌，而在于这份历经千年、褪尽一切浮华后留下的坚实骨架和磅礴气势。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离海岸，开进阿尔加维的内陆丘陵，空气里的咸湿海风逐渐被烤热的岩石和桉树干燥的香气取代。然后，毫无预警地，它就出现在地平线上——一座用整块夕阳雕刻出来的堡垒，巍然盘踞在山顶，通体是那种浓烈到不真实的赭红色，仿佛大地渗出的血液凝固成了永恒的防御。这就是锡尔维什城堡给我的第一眼震撼。它不是童话里精致脆弱的宫殿，而是一个坚硬、沉默、充满土地力量的巨人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着鹅卵石小径往上走，脚下砾石的摩擦声和稀疏的蝉鸣是唯一的伴奏。当你亲手触碰到城墙，那粗糙、温热、颗粒分明的红砂岩质感会瞬间将你拉回现实，又或者说，拉入历史。这种石头，葡萄牙人叫它“grés de Silves”，在正午的烈日下会发烫，在黄昏时分会吸收天光，变得像一块巨大的、半透明的琥珀。空气中弥漫着一种特殊的尘土气味，混合着野生迷迭香和苦杏仁树的气息。你会发现，这里并非只有游客；有老夫妇牵着狗在城墙下的阴影里慢走，有画家支着画板试图捕捉塔楼轮廓线的颤动，它依然是这座宁静山城日常生活背景里的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡内部，喧嚣骤然退去。你站在空旷的中央广场，四周是高达数米的厚实城墙，切割出一片近乎完美的方形蓝天。那种静谧是压倒性的，你能听见自己的呼吸，听见风穿过城墙垛口时发出的低鸣。这里没有繁复的装饰，没有奢华的房间，只有纯粹的空间、体积和光影。最动人的是那些蓄水池的开口，像大地沉默的眼睛，向下望去是深不见底的幽暗，曾经维系着整座城堡的生命线。站在这里，你瞬间明白，这座城堡的魅力不在于金碧辉煌，而在于这份历经千年、褪尽一切浮华后留下的坚实骨架和磅礴气势。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡尔维什城堡（红砂岩城堡）`} />
                <InfoRow label="英文名称" value={`Silves Castle`} />
                <InfoRow label="正式名称" value={`Castelo de Silves`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`锡尔维什`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座宏伟的红砂岩城堡是葡萄牙阿尔加维地区保存最完好的摩尔人军事建筑典范，被誉为“阿尔加维的皇冠”。`} />
                <InfoRow label="建筑特色" value={`城堡完全由当地特有的红砂岩砌成，庞大的防御体系与山丘地形完美融合，拥有巍峨的城墙、11座塔楼和复杂的地下蓄水池系统。`} />
                <InfoRow label="建筑风格" value={`伊斯兰摩尔式军事建筑风格，后期融入了哥特式和曼努埃尔式元素。`} />
                <InfoRow label="文化价值" value={`它是伊比利亚半岛上基督教与伊斯兰文明碰撞与交融的活化石，见证了阿尔加维作为“阿尔-安达卢斯”一部分的黄金时代。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（6月至9月）：上午9:00 - 晚上8:00，最后入场时间为晚上7:30。
冬季（10月至5月）：上午9:00 - 下午5:30，最后入场时间为下午5:00。
城堡全年开放，包括周末，但会在1月1日、12月25日以及当地重要的宗教节日（如锡尔维什城市节当天上午）关闭。请注意，开放时间可能在极端天气（如罕见暴雨）时临时调整。`} />
              <InfoRow label="门票价格" value={`成人票：2.90欧元。
优惠票（65岁以上老人、持有效学生证者）：1.45欧元。
儿童票（13岁以下）：免费。
家庭票（两位成人带两名13-18岁青少年）：7欧元。
每月第一个周日对所有游客免费开放。
门票可在城堡入口处的售票亭现场购买，支持现金和信用卡支付。`} />
              <InfoRow label="地址" value={`Castelo de Silves, 8300-135 Silves, Portugal`} />
              <InfoRow label="交通方式" value={`从法鲁国际机场出发：最方便的方式是租车自驾。取车后沿A22高速公路向北行驶，在Silves出口下，全程约60公里，耗时45分钟到1小时，沿途有清晰的棕色旅游指示牌指向“Castelo”。公共交通稍显复杂：先从法鲁机场乘坐16号或14号巴士到法鲁火车站，然后搭乘火车前往阿尔戈维线路的“Tunes”站，在此换乘前往“Silves”站的区域火车。抵达锡尔维什火车站后，出站步行上山约20分钟即可到达城堡脚下。火车班次每小时约1-2班，总耗时约2小时。如果从拉各斯出发，自驾仅需30分钟，也有定期的地区巴士连接两地。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂锡尔维什的石头诉说的故事，你得把时钟拨回到公元8世纪。当摩尔人的浪潮从北非席卷伊比利亚半岛，他们一眼就相中了这座俯瞰着阿尔拉德河的战略山丘。这里不仅是天然要塞，山下肥沃的河谷更是丰饶粮仓。到了11世纪，锡尔维什（当时叫“Xelb”）迎来了它的高光时刻，成为阿尔加维地区最强大、最富庶的王国——阿尔加维泰法王国的都城。那时的城堡，在红砂岩的基座上不断扩建，城内宫殿、花园、清真寺林立，学者、诗人和商人汇聚，是足以与科尔多瓦、塞维利亚比肩的文化明珠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的命运与一个充满传奇又略带悲剧色彩的人物紧密相连：伊本·卡西。这位出生于锡尔维什的穆拉比特王朝将军，却有着苏菲派神秘主义者的灵魂。他在12世纪中叶一度几乎统一了南葡萄牙的穆斯林势力，却因严苛的宗教改革和神秘主义倾向树敌众多。传说他的统治中心就在这座城堡里，最终，他在一场内部叛乱中被刺杀。他的故事为这些红墙增添了一层哲学与命运交织的悲剧色彩。伊本·卡西死后不久，基督教的收复失地运动兵临城下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1189年，在第三次十字军东征的背景下，一位大胆的葡萄牙国王桑乔一世，在一支由北欧十字军组成的舰队帮助下，对锡尔维什发动了猛攻。那是一场极其惨烈的围城战，持续了数月之久。传说中，守城的摩尔人顽强抵抗，最终基督教军队切断了城堡赖以生存的地下水源，才得以破城。然而，葡萄牙人的占领只持续了短短四年，摩尔人的大军又卷土重来，直到1249年，阿方索三世才最终为葡萄牙夺回了这座城堡，阿尔加维全境由此并入葡萄牙版图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`收复之后，城堡的角色开始转变。基督教国王们加固了它，增建了哥特式的拱门和后来的曼努埃尔式窗饰，中心建起了圣母教堂的遗址。但它作为边境要塞的军事重要性逐渐降低。真正给予它沉重一击的，是1755年那场摧毁里斯本的大地震。剧烈的震动严重损毁了城墙、塔楼和内部的宫殿建筑，城堡从此走向衰败，一度沦为采石场，当地居民甚至来此搬走石头去盖自家的房子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你或许会问，为何今天我们看到的城堡依然如此完整壮观？这要归功于20世纪40年代开始的一场漫长而细致的修复工程。当时的修复者秉持着“修旧如旧”的理念，尽可能使用原始的红砂岩材料和传统的工艺，清除了后来附加的杂乱建筑，让摩尔时代城堡的核心格局重见天日。所以，我们今天漫步其间的，是一个剔除了后来冗余、回归其军事建筑本质的、庄严而赤裸的伟大遗迹。它不再是都城宫殿，而是一件被时光打磨得棱角分明的、关于权力、信仰与生存的巨大雕塑。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的游览体验始于清晨开门时分或傍晚闭馆前两小时。清晨光线柔和，气温凉爽，红砂岩城墙呈现出迷人的金粉色，而且游客稀少，能独享城堡的宁静。傍晚则能邂逅阿尔加维最壮丽的日落，看着城堡从炽烈的红色渐变为温柔的紫罗兰色。整体游览建议预留至少2.5至3小时，节奏宜慢不宜快。先从外围感受它的雄姿，再进入内部沉浸于历史和空间感，最后登高望远，完成从宏观到微观，再到全景的完整体验。千万别匆匆赶路，这里的每一处阴影和光斑都值得驻足。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的徒步鞋，城堡内的地面是原始的砾石和岩石，高跟鞋或凉鞋会让你寸步难行且非常危险。夏季游览一定要携带充足的水和帽子，城墙上几乎没有遮阴处，正午的阳光非常暴烈。避开周末下午的高峰时段，那时可能会遇到较多的旅行团，破坏城堡应有的静谧氛围。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门“Porta da Cidade”进入，仰头感受那巨大拱门和吊闸槽洞带来的压迫感，想象古代士兵从此通过的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着左侧城墙开始顺时针漫步，用手触摸那被八百年风雨打磨得或粗糙或光滑的红砂岩墙面，感受其温度与纹理的细微变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个深藏不露的“蓄水池”，俯身在那圆形井口，对着深处的黑暗喊一声，聆听那悠长而湿润的回音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到城堡西北角的“Torre de Menagem”主塔楼遗址，站在曾是宫殿核心的地基上，俯瞰下方错落的橙红色屋顶和老教堂的钟楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过中央空旷的广场，在东侧城墙找一个面向山谷的垛口，静静地看一会儿盘旋的鹰隼和如绿色缎带般蜿蜒的阿尔拉德河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访广场北侧圣母升天教堂的考古遗址，看看那些混杂着罗马、摩尔和基督教元素的石柱和地基，触摸文明的断层。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在闭馆前登上南侧最高的城墙，找一块被夕阳晒得温暖的石头坐下，看着整个锡尔维什老城和远方蒙希克山脉被落日染成一片辉煌的金红。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主城门仰拍机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳初升时，站在城门内几米处向外仰拍，能拍到阳光勾勒出门洞轮廓，并将门洞外老城的房屋作为背景框入画中，形成深邃的景深。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`蓄水池光影角落`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，蓄水池方形入口的光斑会投射在井沿和内壁，形成强烈的几何明暗对比，适合拍摄极简主义和光影构图的特写。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼遗址俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光角度变低，站在主塔楼区域向东拍摄，可以拍到城堡自身的多重城墙剪影与远处绿色山谷的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`南城墙全景长焦`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，使用长焦镜头从南城墙中段，对准远处老城大教堂的哥特式尖顶和成片的红瓦屋顶，用城堡的垛口做前景，压缩出充满故事感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡外葡萄园远眺`}</h4>
                  <p className="text-sm text-gray-700">{`并非在城堡内，而是开车或步行到城堡对面山丘的葡萄园小路，在日出时分拍摄城堡沐浴在晨雾与金色阳光中的全景，这是获得明信片角度的地方。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`红砂岩在强光下反射的红色光可能会影响相机自动白平衡，建议使用RAW格式拍摄以便后期精细调整色温，或手动设置白平衡偏向冷调以平衡过多的红色。无人机飞行在城堡上空需要特别许可，通常禁止飞行，请务必遵守规定。尊重其他游客和当地人的隐私，避免将镜头长时间对准在城墙边休息的当地居民。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河边历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`住在阿尔拉德河畔由18世纪贵族宅邸改造的精品酒店，清晨在潺潺水声中醒来，推开木窗就能看到倒映在水中的城堡雄姿。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心公寓`}</h4>
                  <p className="text-sm text-green-800">{`租住锡尔维什大教堂广场旁的石砌老公寓，体验真正的本地生活，下午跟着邻居老太太去街角面包店买刚出炉的“Dom Rodrigo”甜点。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡间田园度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`选择城堡视线可及的郊外山坡上的白色农庄，拥有私人泳池和无边橄榄园，夜晚在绝对的寂静和璀璨星空下回味白天的历史震撼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感葡萄园酒店`}</h4>
                  <p className="text-sm text-purple-800">{`位于几公里外自家葡萄园内的现代设计酒店，将阿尔加维的粗犷自然与极简美学结合，享用以城堡为背景的露天晚餐和本地产葡萄酒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡尔维什老城中心街道狭窄且多为单行，自驾入住酒店前务必确认是否有停车位或代客泊车服务。夏季（7-8月）是阿尔加维的绝对旺季，务必提前数月预订心仪的住宿，尤其是特色酒店。老城夜晚非常安全宁静，但娱乐选择相对有限，喜欢夜生活的游客可能需要调整预期，这里的夜晚属于星空、虫鸣和历史沉思。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡尔维什城堡很久以后，闭上眼睛，掌心似乎还能回忆起那种粗糙而温热的触感。它不是那种会让你惊呼“好美”的地方，而是一种让你沉默，让你不由自主深呼吸的存在。在遍地都是海滩度假村的阿尔加维，它像一个沉静而有力的反问，提醒着我们这片土地有着远比阳光沙滩更为深厚、更为复杂的肌理。这里回荡着的，是剑与犁的碰撞，是古兰经与圣经的低语，是诗人与战士的梦想，全部被时光夯实，浇筑进这一块块不言不语的红色石头里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时快乐和浮光掠影打卡的时代，锡尔维什城堡提供了一种截然不同的旅行价值：一种关于“重量”与“时间”的体验。它不讨好你，不娱乐你，只是坦然地将自己千年的沧桑摊开在你面前。你需要付出一点体力去攀登，付出一点耐心去阅读光影的变迁，付出一点想象力去聆听风中的回响。而当你最终站在落日余晖中，看着这红色巨兽与温柔暮色融为一体时，你会感到一种奇特的平静。仿佛那些现代生活的琐碎焦虑，在这庞大的历史尺度面前，变得轻盈了。来这里，不只是看一座城堡，更是完成一次与自己内心深处的、对永恒与坚实的隐秘渴望的对话。这，正是深度旅行的意义所在。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-meung-sur-loire" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meung-sur-L-Loire</p>
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
              <a href="/attractions/ferrara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara Castle</p>
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
