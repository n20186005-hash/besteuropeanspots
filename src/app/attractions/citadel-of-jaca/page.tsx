import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈卡城塞 Citadel of Jaca｜走进保存完好的五角星形堡垒，触摸西班牙北境的军事脉搏 - 最佳欧洲景点',
  description: '还记得我第一次走近哈卡城塞的那个下午。阳光好得不像话，把庇里牛斯山脚下这片平原晒得暖烘烘的，空气里有种干草和远方松林混合的清爽气味。它不像那些高踞山巅、充满戏剧性的城堡，而是稳稳地“坐”在平地上，被一圈宽阔的、长满了青草的护城河温柔地环抱着。从远处看，它那低矮的、土黄色的城墙线条干净利落，五个棱角像...',
}

export default function CitadelOfJacaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '哈卡城塞', href: '/attractions/citadel-of-jaca' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈卡城塞・Citadel of Jaca・西班牙・韦斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次走近哈卡城塞的那个下午。阳光好得不像话，把庇里牛斯山脚下这片平原晒得暖烘烘的，空气里有种干草和远方松林混合的清爽气味。它不像那些高踞山巅、充满戏剧性的城堡，而是稳稳地“坐”在平地上，被一圈宽阔的、长满了青草的护城河温柔地环抱着。从远处看，它那低矮的、土黄色的城墙线条干净利落，五个棱角像星星的光芒一样伸展开来，有种奇异的、充满现代感的几何之美，安静，内敛，却充满了不容置疑的力量。走近了，才听见护城河里野鸭划水的声音，还有风掠过城墙垛口时细微的呼啸。几个当地人在护城河外的步道上慢跑，孩子们在草地上踢球，这座曾经让人望而生畏的军事堡垒，早已融入了哈卡人日常生活的背景里，变成了一座巨大的、有故事的社区公园。
跨过那座厚重的石桥，穿过城门洞，世界瞬间安静了下来。里面是另一个天地——一个巨大的、被高大城墙严密包裹着的五边形广场。地面是踩实了的泥土和碎石，空旷得能听见自己的脚步声在回荡。想象一下，几百年前，这里可能站满了整装待发的士兵，回响着战马的嘶鸣和武器的铿锵；而此刻，只有无尽的阳光洒下来，把城墙的影子拉得老长。那份空旷感本身就极具冲击力，它不靠华丽的装饰打动你，而是用纯粹的、巨大的空间和沉默的历史重量，让你瞬间屏住呼吸。你可以把手贴在那些被岁月打磨得粗糙而温热的石墙上，感受阳光留在上面的温度。
而它最打动人心的魅力，恰恰在于这种强烈的反差与融合。一方面是冰冷、精确、为战争而生的建筑逻辑；另一方面，是如今弥漫在其中的、近乎田园诗般的宁静与生活气息。你在城墙的射击孔里，望出去的不是假想敌，而是护城河里优游的天鹅，和对面上方覆着皑皑白雪的庇里牛斯山脉。这种从“防御”到“接纳”的转变，让哈卡城塞拥有了一种独特的温度。它不是一座仅供凭吊的废墟，而是一个仍然在呼吸、在与当下对话的生命体。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得我第一次走近哈卡城塞的那个下午。阳光好得不像话，把庇里牛斯山脚下这片平原晒得暖烘烘的，空气里有种干草和远方松林混合的清爽气味。它不像那些高踞山巅、充满戏剧性的城堡，而是稳稳地“坐”在平地上，被一圈宽阔的、长满了青草的护城河温柔地环抱着。从远处看，它那低矮的、土黄色的城墙线条干净利落，五个棱角像星星的光芒一样伸展开来，有种奇异的、充满现代感的几何之美，安静，内敛，却充满了不容置疑的力量。走近了，才听见护城河里野鸭划水的声音，还有风掠过城墙垛口时细微的呼啸。几个当地人在护城河外的步道上慢跑，孩子们在草地上踢球，这座曾经让人望而生畏的军事堡垒，早已融入了哈卡人日常生活的背景里，变成了一座巨大的、有故事的社区公园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`跨过那座厚重的石桥，穿过城门洞，世界瞬间安静了下来。里面是另一个天地——一个巨大的、被高大城墙严密包裹着的五边形广场。地面是踩实了的泥土和碎石，空旷得能听见自己的脚步声在回荡。想象一下，几百年前，这里可能站满了整装待发的士兵，回响着战马的嘶鸣和武器的铿锵；而此刻，只有无尽的阳光洒下来，把城墙的影子拉得老长。那份空旷感本身就极具冲击力，它不靠华丽的装饰打动你，而是用纯粹的、巨大的空间和沉默的历史重量，让你瞬间屏住呼吸。你可以把手贴在那些被岁月打磨得粗糙而温热的石墙上，感受阳光留在上面的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的魅力，恰恰在于这种强烈的反差与融合。一方面是冰冷、精确、为战争而生的建筑逻辑；另一方面，是如今弥漫在其中的、近乎田园诗般的宁静与生活气息。你在城墙的射击孔里，望出去的不是假想敌，而是护城河里优游的天鹅，和对面上方覆着皑皑白雪的庇里牛斯山脉。这种从“防御”到“接纳”的转变，让哈卡城塞拥有了一种独特的温度。它不是一座仅供凭吊的废墟，而是一个仍然在呼吸、在与当下对话的生命体。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈卡城塞`} />
                <InfoRow label="英文名称" value={`Citadel of Jaca`} />
                <InfoRow label="正式名称" value={`Ciudadela de Jaca`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`韦斯卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是欧洲保存最完好、至今仍在运作的文艺复兴时期五角星形防御工事之一，是西班牙在庇里牛斯山地区军事防御体系的关键一环。`} />
                <InfoRow label="建筑特色" value={`一座完美的星形棱堡，拥有五座突出的三角形棱角和深邃的护城河，从空中俯瞰犹如一颗坠落在绿色平原上的几何星辰。`} />
                <InfoRow label="建筑风格" value={`文艺复兴晚期的军事建筑风格，融合了当时最先进的意大利防御工事设计理念，外观简洁而极具几何力量感。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事要塞，更是承载了哈卡乃至整个阿拉贡地区数百年边防历史、战争记忆与和平时期转型的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常为周一至周日，上午10:30至下午14:30，下午16:30至晚上20:00（夏季至21:00）。请注意，冬季（约11月至次年2月）的开放时间可能缩短，且每周一上午闭馆。具体开放时间可能因季节、国定假日（如1月1日、12月25日）或特殊活动临时调整，强烈建议出行前在其官方网站上确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`普通门票价格约为6欧元。优惠票价（如学生、65岁以上老人、团体等）约为4欧元。12岁以下儿童在成人陪同下可能免费入场。门票通常包含进入城堡主体、城墙步道以及“小型军事博物馆”（Museo de Miniaturas Militares）的参观。有时会推出与哈卡市其他博物馆（如大教堂博物馆）的联票，价格更优。`} />
              <InfoRow label="地址" value={`Ciudadela de Jaca, Av. del Primer Viernes de Mayo, s/n, 22700 Jaca, Huesca, Spain`} />
              <InfoRow label="交通方式" value={`从萨拉戈萨机场出发，最便捷的方式是租车自驾。沿A-23高速公路向北行驶，转入A-1205公路直抵哈卡，全程约160公里，耗时约1小时45分钟。若乘坐公共交通，可从萨拉戈萨的德拉伊斯车站乘坐ALSA长途巴士前往哈卡，车程约2.5-3小时，班次频率中等，建议提前在线购票。火车选择较少。到达哈卡小镇后，城塞就位于镇边，从镇中心步行约15-20分钟即可轻松抵达，沿途标识清晰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从16世纪下半叶说起。那时的欧洲，火药武器彻底改变了战争规则，中世纪那种高耸的、容易被炮火轰塌的塔楼城堡已经过时了。西班牙的国王菲利普二世，是个忧心忡忡的统治者。他的帝国疆域辽阔，而北边的法国始终是个巨大的威胁，庇里牛斯山脉的隘口，特别是哈卡这个通往阿拉贡王国的重要门户，必须被牢牢锁住。于是，一个宏大的计划诞生了：沿着国境线建造一系列最先进的、意大利式的棱堡防御体系。哈卡，成为了这条钢铁链条上的关键一环。1589年，工程在军事工程师蒂贝里奥·斯帕诺基的督造下动工了。想想看，在那个没有重型机械的年代，工人们是如何一砖一石，用纯粹的几何计算和人力，在这片平原上勾勒出一颗完美的五角星的？它不是为了美观，每一个角度、每一段城墙的倾斜度，都经过了精确计算，以确保没有任何射击死角，让来犯的敌军在任何方向都会暴露在交叉火力之下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，堡垒的修建并非一帆风顺，资金、劳工、技术难题层出不穷。它就像个慢吞吞的巨人，断断续续建了很多年。但它生逢其时，很快就迎来了真正的考验——17世纪的加泰罗尼亚起义和接连不断的西法战争。哈卡城塞成为了西班牙军队在北方最坚实的支点，囤积粮草，驻扎精锐。它像一个沉默的磐石，目睹了军队的进进出出，见证了边境线上无数次紧张的摩擦与小规模冲突。那些石墙第一次尝到了硝烟的味道，但它的设计是如此成功，在它漫长的军事生涯中，从未被敌军以武力正面攻陷过。这本身就是对其设计者最高明的致敬。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到19世纪初，整个欧洲都被拿破仑的铁蹄撼动。西班牙独立战争期间，哈卡城塞落入了法国军队之手。据说，法国人也被这座工事的精妙所折服，并对其进行了加固和使用。战争结束后，它重回西班牙怀抱，继续履行边防职责。但时代在变，国界的概念在固化，大规模入侵的威胁逐渐远去。城堡的角色开始发生微妙的变化。它的一部分区域被用作军营，另一部分则开始承担起新的文化功能。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在20世纪。西班牙内战期间，它再次被卷入同胞相残的悲剧，成为了关押政治犯的监狱，洁白的石墙上或许又增添了许多无声的伤痕。战后，随着军事技术的又一次飞跃，这样一座古老的堡垒在国防上的实际价值已经微乎其微。它面临着被废弃、甚至被拆除的命运。幸运的是，有识之士看到了它无与伦比的历史与建筑价值。一场“拯救城堡”的运动展开了。军方向文化部门移交了部分管理权。人们清理了护城河，修复了城墙，并将那些空旷的营房和仓库，巧妙地改造成为展厅。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，你今天看到的哈卡城塞，是数百年军事史层累的结果，也是一次成功文化转型的典范。驻军仍然存在（它是世界上少数仍有现役部队驻扎的古堡之一），但已与博物馆和文化活动和谐共存。古老的壁垒内，举办着古典音乐会、艺术展览和历史重现活动。那颗为战争而生的星辰，终于将自己的光芒，温柔地投向了和平与艺术。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午，大约10点左右抵达。这个时间光线最佳，既能避开西班牙午后最灼热的太阳，又能拍到护城河与城墙沐浴在金色阳光中的美景。整体游览建议预留至少3-4小时，节奏可以放得很慢。先别急着进去，花半小时沿着护城河外围走半圈，从不同角度欣赏这座几何杰作的全貌，感受它如何与周围环境融合。然后进入城堡内部，按照先外后内、先宏观后微观的顺序，依次参观城墙、广场和博物馆。这样的安排能让你逐步从外部印象深入到历史细节，最后在博物馆里把所有线索串联起来，完成一次完整的时空穿越。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`护城河边的步道是公共区域，全天免费开放，即使城堡内部闭馆也值得一来。城堡内部某些地下区域可能因维护或安全原因不定期关闭，请以当日公告为准。穿着舒适的步行鞋至关重要，因为需要大量在石板路和斜坡上行走。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门石桥前开始，顺时针沿着长满青草和野花的护城河漫步，从每一个棱角的正对面抬头仰望，感受堡垒威严而优美的几何线条。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过石桥进入主城门，在门洞的阴凉里驻足片刻，触摸那些冰冷厚重的木门和石壁，想象士兵们从此出入的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入巨大的五边形中心广场，站在正中央缓缓转一圈，让空旷与寂静包裹你，抬头看天空被城墙切割成的完美形状。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着斜坡走上宽阔的城墙步道，以守卫者的视角巡视一周，远眺哈卡小镇的红屋顶和远方若隐若现的雪山峰顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下城墙，去探访那些改造自旧营房的展厅，特别是“小型军事博物馆”，那里有令人叹为观止的微缩战争场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找通往地下储藏室或古老炮位的通道（如果开放），感受一下地底深处的阴凉与密闭空间带来的历史压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间刚好，可以去听听广场上可能举行的露天音乐会排练，或在城堡内的小咖啡馆喝一杯，看阳光在古老地砖上移动。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角外侧`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点的侧光时分，能将星形棱堡的一个完整棱角、倒映着天空的护城河水以及远处的山峰一同纳入镜框，构图极具层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中心广场仰望天空`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在广场中心将镜头垂直向上，可以拍下城墙切割出的纯净蓝色五边形天空，几何感极强，画面简洁有力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙步道射击孔视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，将镜头贴近某个面向雪山的射击孔，以古老的石孔为画框，聚焦远处清晰的庇里牛斯山雪顶，形成强烈的时间与空间对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主城门洞内部纵深`}</h4>
                  <p className="text-sm text-gray-700">{`利用门洞形成的天然隧道式构图，在阳光斜射入洞口时（上午最佳），拍下光线照亮空气中微尘、石壁纹理深邃的纵深感画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前务必提前咨询管理方并获得许可，因为这里是现役军事区域的一部分，有严格的空域管制。拍摄驻军士兵或仍在使用的军事设施内部通常是被禁止的，请保持尊重并留意相关标识。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城故事`}</h4>
                  <p className="text-sm text-blue-800">{`住在哈卡古镇中心由百年石屋改造的精品酒店，推开木窗就能看到古老的圣佩德罗大教堂钟楼，夜晚在铺着鹅卵石的寂静小巷散步回“家”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`要塞景观`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在城堡护城河外不远处、正对城堡棱角的现代风格旅馆，在房间的阳台或露台上就能独享整个星形堡垒的日出与日落美景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山居岁月`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往城外几公里处庇里牛斯山脚下的乡村旅馆，享受绝对的宁静，白天探索城堡，晚上归来在壁炉边喝一杯当地产的红酒，听山风低语。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客聚点`}</h4>
                  <p className="text-sm text-purple-800">{`古镇入口处气氛友好的国际青年旅舍，由老建筑改造，有一个种满花草的庭院，是结识来自世界各地徒步者和旅行者的好地方。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`哈卡是通往庇里牛斯山诸多国家公园和滑雪胜地的门户，夏季徒步和冬季滑雪旺季时住宿非常紧俏，价格也会飙升，务必提前数月预订。小镇治安非常好，夜晚独自步行也很安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈卡城塞时，我的背包好像重了一些。那里面装着的，不是具体的纪念品，而是一种非常独特的感受——关于“边界”的沉思。这座堡垒，本身就是“边界”的物理化身：国家与国家的边界，战争与和平的边界，过去与现在的边界。但奇妙的是，当你真正置身其中，这些看似坚硬的边界反而变得模糊而富有弹性。冰冷的城墙拥抱了温暖的阳光，军事禁地化身为市民公园，战争的记忆被微缩模型和艺术展览温柔地诉说。它没有试图隐藏自己诞生的目的，却以一种开阔的胸怀，完成了自我的超越。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个越来越倾向于筑起高墙、无论是实体还是心灵上的时代，哈卡城塞提供了一个截然不同的范例。它告诉我们，真正的力量或许不在于永恒的戒备和封闭，而在于拥有坚实内核的同时，依然能够向改变敞开，与时间和解，最终将用于对抗的壁垒，转化为连接历史与当下、隔离与共融的独特场所。它不再是一把锁，而成为了一扇门，一扇通往复杂历史与宁静当下的门。对于每一个渴望在旅行中触摸历史真实肌理、而不仅仅是打卡拍照的深度旅人来说，哈卡城塞绝对值得你专程而来。在这里，你会看到的不仅仅是一座城堡，更是一段关于生存、适应与永续的，沉默而磅礴的史诗。它安静地坐落在那里，就像庇里牛斯山一样，成为时间本身的一个刻度，等待着每一个愿意停下来阅读的人。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/avila-walls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Walls of Ávila</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salamanca-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉曼卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salamanca Old Town</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
