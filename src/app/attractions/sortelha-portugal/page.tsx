import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '索特利亚 Sortelha｜时光在花岗岩上凝固，葡萄牙最古老村落的全景巡礼 - 最佳欧洲景点',
  description: '车子沿着山路盘旋而上，当那个灰褐色、像一群巨兽匍匐在山巅的影子跃入眼帘时，你知道，索特利亚到了。停好车，穿过那道低矮却坚实的石拱门，瞬间，现代世界的喧嚣被彻底隔绝在外。脚下是巨大花岗岩板铺就的路，被几个世纪的人来人往磨得光滑如镜，倒映着葡萄牙东部清澈到近乎锋利的阳光。空气里有种特别的味道——岩石在午...',
}

export default function SortelhaPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '索特利亚', href: '/attractions/sortelha-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`索特利亚・Sortelha・葡萄牙・瓜达区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着山路盘旋而上，当那个灰褐色、像一群巨兽匍匐在山巅的影子跃入眼帘时，你知道，索特利亚到了。停好车，穿过那道低矮却坚实的石拱门，瞬间，现代世界的喧嚣被彻底隔绝在外。脚下是巨大花岗岩板铺就的路，被几个世纪的人来人往磨得光滑如镜，倒映着葡萄牙东部清澈到近乎锋利的阳光。空气里有种特别的味道——岩石在午后的热度下散发出的干燥矿物气息，混杂着远处某户人家飘出的炖菜香，以及墙脚苔藓的淡淡湿意。
这里安静得能听到自己的心跳。不是死寂，而是一种被岁月浸透的、沉甸甸的宁静。偶尔，一阵风吹过狭窄的“街道”（如果那些宽度仅容一人通过的石缝能被称为街道的话），发出呜呜的回响，仿佛在模仿古代卫兵的低语。你看到一扇厚重的橡木门半掩着，门楣上刻着建造年份：1573。一只花猫在门前的石阶上慵懒地伸着懒腰，它对你这名闯入者毫不在意，因为它才是这里时间的主人。索特利亚最打动人心的，正是这份活着的厚重感。它不是一座被精心围起来、仅供观赏的博物馆，而是一个依然有十几户老居民生活的家园。他们的生活痕迹——晾晒的床单、窗台的花盆、门边的柴火——与十三世纪的城墙、十六世纪的教堂奇迹般地共生着。
走到村落中心的微型广场，你会看到那根著名的曼努埃尔式石柱（Pelourinho），雕刻着绳索和海洋元素的纹样，象征着葡萄牙大航海时代的遥远荣光。这精致的符号与周围粗粝蛮荒的花岗岩形成奇妙的对话，告诉你即使在这个被遗忘的山巅，历史的浪潮也曾轻轻拍打过。抬头望向最高处，城堡的废墟轮廓在蓝天映衬下格外清晰。攀登的过程本身就是一种仪式，每一步都在靠近那个曾经决定生死的瞭望点。当你最终站在城堡的残垣上，360度的狂风呼啸而来，眼前是无限延伸的丘陵与巨石平原，那一刻你忽然明白：建造这里，不是为了舒适，而是为了生存和瞭望。这种原始、坚韧的美，是索特利亚无可替代的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着山路盘旋而上，当那个灰褐色、像一群巨兽匍匐在山巅的影子跃入眼帘时，你知道，索特利亚到了。停好车，穿过那道低矮却坚实的石拱门，瞬间，现代世界的喧嚣被彻底隔绝在外。脚下是巨大花岗岩板铺就的路，被几个世纪的人来人往磨得光滑如镜，倒映着葡萄牙东部清澈到近乎锋利的阳光。空气里有种特别的味道——岩石在午后的热度下散发出的干燥矿物气息，混杂着远处某户人家飘出的炖菜香，以及墙脚苔藓的淡淡湿意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里安静得能听到自己的心跳。不是死寂，而是一种被岁月浸透的、沉甸甸的宁静。偶尔，一阵风吹过狭窄的“街道”（如果那些宽度仅容一人通过的石缝能被称为街道的话），发出呜呜的回响，仿佛在模仿古代卫兵的低语。你看到一扇厚重的橡木门半掩着，门楣上刻着建造年份：1573。一只花猫在门前的石阶上慵懒地伸着懒腰，它对你这名闯入者毫不在意，因为它才是这里时间的主人。索特利亚最打动人心的，正是这份活着的厚重感。它不是一座被精心围起来、仅供观赏的博物馆，而是一个依然有十几户老居民生活的家园。他们的生活痕迹——晾晒的床单、窗台的花盆、门边的柴火——与十三世纪的城墙、十六世纪的教堂奇迹般地共生着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到村落中心的微型广场，你会看到那根著名的曼努埃尔式石柱（Pelourinho），雕刻着绳索和海洋元素的纹样，象征着葡萄牙大航海时代的遥远荣光。这精致的符号与周围粗粝蛮荒的花岗岩形成奇妙的对话，告诉你即使在这个被遗忘的山巅，历史的浪潮也曾轻轻拍打过。抬头望向最高处，城堡的废墟轮廓在蓝天映衬下格外清晰。攀登的过程本身就是一种仪式，每一步都在靠近那个曾经决定生死的瞭望点。当你最终站在城堡的残垣上，360度的狂风呼啸而来，眼前是无限延伸的丘陵与巨石平原，那一刻你忽然明白：建造这里，不是为了舒适，而是为了生存和瞭望。这种原始、坚韧的美，是索特利亚无可替代的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`索特利亚`} />
                <InfoRow label="英文名称" value={`Sortelha`} />
                <InfoRow label="正式名称" value={`Sortelha`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`瓜达区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙中世纪防御体系的活化石，见证了王国诞生初期在边境线上的挣扎与巩固。`} />
                <InfoRow label="建筑特色" value={`依山而建的花岗岩迷宫，房屋、街道与城墙浑然一体，仿佛从巨岩中生长而出。`} />
                <InfoRow label="建筑风格" value={`典型的罗马式与曼努埃尔式元素混合的中世纪防御村落风格。`} />
                <InfoRow label="文化价值" value={`一个保存了完整中世纪生活空间结构和社区记忆的“时间胶囊”，展示了人类如何与严酷的自然环境和历史动荡共处。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落为开放式区域，全天可进入漫步。主要的城堡（主塔）和部分有管理的遗址开放时间通常为上午9点至下午6点（夏季可能延长至7点），冬季（约10月至3月）可能提前至下午5点关闭。每周一及主要节假日（如1月1日、12月25日）可能关闭。建议出发前查询当地旅游信息中心的最新公告。`} />
              <InfoRow label="门票价格" value={`进入索特利亚村落本身完全免费。若想进入城堡主塔内部或某些特定修复的展览空间，可能需要支付小额门票（通常在2-3欧元左右）。12岁以下儿童、持有效证件的学生和65岁以上老人通常有折扣。村落内的教堂一般免费开放，欢迎自愿捐款。`} />
              <InfoRow label="地址" value={`Largo do Pelourinho, Sortelha, 6320-000, Portugal`} />
              <InfoRow label="交通方式" value={`最便捷的方式是自驾。从里斯本出发，沿A23高速公路向东北方向行驶，在瓜达（Guarda）附近转入N18-3/EU266公路，全程约300公里，需3.5-4小时。若使用公共交通，可先乘火车或巴士抵达最近的城市瓜达（Guarda）。从瓜达市中心，可以乘坐当地巴士（班次稀少，一天可能只有1-2班，需精确查询时间表），或者更实际的是预订一辆出租车，车程约25分钟，费用在20-30欧元之间。最推荐的方式是租车，因为这样可以自由探索周边同样迷人的“历史村庄”网络。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`索特利亚的故事，要从葡萄牙这个国家还在襁褓中说起。12世纪末，当阿方索·恩里克斯国王忙着从摩尔人手中收复南方的土地时，东部与莱昂王国接壤的边境线却危机四伏，充满不确定性。这片被称为“贝拉”（Beira）的边疆地区，遍布着嶙峋的花岗岩山峰，易守难攻。大约在12世纪90年代，国王桑乔一世决定在此建立一座坚固的前哨。选择这座海拔760米的石山是天才之举，它的天然地形本身就是一道难以逾越的屏障。最初的防御工事可能只是简陋的木栅和石垒，但已经足以宣示：“这里属于葡萄牙王国。”`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了13世纪，随着王国政权巩固，索特利亚的重要性与日俱增。国王阿方索二世或桑乔二世授予了它特许状，使其成为一座拥有自治权的城镇。我们现在看到的雄伟石墙和城堡主体，大多是在这个时期扩建和加固的。石匠们没有从远方运来材料，而是就地取材，将山体本身的花岗岩切割成块。于是，城墙与山岩融为一体，房屋仿佛是从大地里生长出来的，这种建筑方式赋予了索特利亚独一无二的“有机”面貌。它成了边境防御链上关键的一环，与附近的贝尔蒙特、蒙桑托等石头村落遥相呼应，共同构成了一道沉默而坚固的防线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`15世纪末到16世纪初，葡萄牙迎来了它的黄金时代——大航海时代。虽然索特利亚深处内陆，与航海看似无关，但时代的烙印依然悄然降临。那个矗立在广场上的曼努埃尔式石柱（耻辱柱）就是证明。这种以绳索、浑天仪等为特征的华丽风格，是国王曼努埃尔一世时期的标志，象征着海洋带来的财富与权力。石柱的建立，或许意味着这个边疆村落也间接分享到了帝国的荣光，或者至少，王室希望将它的权威象征植入每一寸国土。与此同时，村落中心的圣玛利亚教堂也进行了改建，增加了那个时期典型的门户装饰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，辉煌并未持久。随着边境的稳定和防御意义的下降，索特利亚的战略地位逐渐衰落。更大的打击来自地理大发现后葡萄牙经济重心向沿海的转移，以及后来一系列战争的破坏。特别是19世纪初的半岛战争，拿破仑的军队可能途经或在此驻扎，给村落带来了创伤。人口开始缓慢但持续地流失，年轻人奔向城市或海岸寻找机会，只留下老人们守着祖辈的花岗岩家园。到了20世纪中期，它几乎沦为被遗忘的鬼城，许多房屋坍塌，野草在街道上蔓生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪末。葡萄牙政府启动了“历史村落”振兴计划，索特利亚因其无与伦比的完整性和原始风貌被列入其中。修复工作小心翼翼地展开，原则是“修旧如旧”，绝不添加任何破坏整体感的现代元素。电线被埋入地下，坍塌的房屋得到结构性加固，但墙面的斑驳和岁月的痕迹却被最大程度地保留。更可贵的是，计划并没有将原住民清空，而是鼓励他们留下，并改善他们的生活设施。于是，我们今天看到的索特利亚，不是一个冰冷的遗址，而是一个伤口被温柔愈合、灵魂依然在缓慢呼吸的古老生命。它从一座防御要塞，最终变成了一座守护时间本身的堡垒。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的索特利亚之旅，需要至少半天时间，最好能预留三到四个小时。强烈建议在上午9点前或下午3点后抵达，以避开可能的一日游小高峰（尽管这里从未真正拥挤），并捕捉到最佳的光线——清晨的斜阳会让花岗岩泛起金光，而傍晚的侧光则能勾勒出建筑无比深邃的轮廓与质感。游览节奏一定要“慢”。这里不适合打卡疾走，而应用脚步丈量每一块石头，在每一个转角停下感受。路线是一个自然而然的环形：从主城门进入，在迷宫般的小巷中向上探索至城堡顶峰，再以俯瞰的视角漫步而下，完成一次从“进入”到“俯瞰”再到“融入”的完整体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对防滑、支撑性好的徒步鞋，潮湿或结霜的花岗岩路面非常滑。
村落内没有商业餐厅，只有可能有一两家小咖啡吧，建议自备饮用水和简单零食。
尊重居民的隐私，拍照时尽量避免直接对准住户的门窗内部，保持安静是基本的礼貌。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那道刻有王家盾徽的低矮石拱门，让自己正式踏入中世纪的时间隧道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在小镇中心的微型广场驻足，仔细端详那根雕刻着航海绳索的曼努埃尔式石柱，想象它见证过的市集与审判。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进简朴的罗马-哥特风格的圣玛利亚教堂，让眼睛适应内部的昏暗，感受石砌空间的宁静与清凉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由自己迷失在那些宽度不足一米的、蜿蜒如河流的“街道”中，用手触摸两边冰冷却充满生命力的花岗岩墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访那些仍有老人居住的门户，如果门开着，可以礼貌地点头微笑，他们褶皱里的笑容是村落最好的注解。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要奋力爬上城堡废墟的顶端，站在曾经的瞭望塔位置，让狂风拍打脸颊，将无边无际的巨石平原尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条小路，或许会经过那口古老的公共水井，听听是否还有水声回荡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，回望一眼整个村落镶嵌在山巅的轮廓，把这个画面深深印在脑海里。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主城门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在门内回头拍摄拱门框住的外界风景，能形成强烈的古今时空对比构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡顶端全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，阳光将村落染成暖金色，用广角镜头捕捉村落与远处无尽荒原的壮阔关系。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“吻之屋”小巷`}</h4>
                  <p className="text-sm text-gray-700">{`中午时分，阳光直射入最狭窄的那条巷子（Casas do Beijo），能拍出戏剧性的明暗对比和岩石纹理。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`曼努埃尔石柱特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用下午的侧光，聚焦石柱上精美的航海绳索雕刻，让粗糙的花岗岩背景虚化，突出细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村落远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`驱车离开时，在通往萨布加尔（Sabugal）的路上有几个转弯处，可以停车拍摄索特利亚全景，晨雾弥漫时尤其梦幻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`偏振镜（CPL）在这里非常有用，可以减少花岗岩表面的反光，让色彩和纹理更饱和清晰。`}</li>
                <li>• {`尝试拍摄一些细节：门环、古老的锁孔、墙角的野花、光影切割的地面，这些是比全景更能传递情感的画面。`}</li>
                <li>• {`使用无人机前务必谨慎，需尊重居民隐私并确认当地法规，强风天气也不适合飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式历史民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在村落内由古老石屋改造的民宿，夜晚当游客散尽，你能独享整个中世纪星空的寂静与狗吠声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`舒适乡村客栈`}</h4>
                  <p className="text-sm text-green-800">{`选择山下几分钟车程的乡村客栈（Quinta），享受现代化的舒适、丰盛的当地早餐和主人关于本地历史的滔滔不绝。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色农庄体验`}</h4>
                  <p className="text-sm text-yellow-800">{`入住周边乡间的传统石砌农庄，参与橄榄采摘或学习制作当地奶酪，深度体验贝拉地区的内陆农耕文化。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`瓜达城市基地`}</h4>
                  <p className="text-sm text-purple-800">{`若想有更多餐饮选择，可住在最近的城市瓜达，那里有从古堡酒店到现代设计酒店的各种选择，白天再开车上山探访。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若选择住在村落内，请务必确认住宿提供取暖设备，山间夜晚即使在夏季也可能很凉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`预订村落内民宿可能需要通过本地网站或直接电话联系，大型国际预订平台选择较少。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的住宿体验核心是宁静与隔绝，追求夜生活或丰富娱乐设施的旅行者可能更适合以瓜达为基地。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开索特利亚许久，手指似乎还能回忆起那种触摸花岗岩的粗糙冰凉感。它不像那些宏伟的大教堂或宫殿，用奢华与尺度让你惊叹；相反，它用一种极致的质朴与坚韧，悄悄叩击你的内心。在这里，你感受到的不是人类征服自然的骄傲，而是人类如何智慧地顺应自然、利用每一寸地形来求得生存的谦卑与顽强。每一块石头都承载着具体的生活记忆——士兵的守望、主妇的炊烟、孩子的嬉戏、老人的凝望。它是一个关于“家园”最原始、最坚韧的隐喻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个一切都在追求光滑、快速和迭代的世界里，索特利亚的存在本身就是一个温柔的抵抗。它提醒我们，有些价值在于持久，在于与土地的深深连结，在于社群记忆的代代相传。它告诉你，美可以不是精致的，而是粗粝的；伟大可以不是喧嚣的，而是沉默的。对于每一位渴望在旅行中寻找不同于都市节奏、触碰历史真实肌理的深度旅者来说，索特利亚不是景点，而是一次心灵的沉淀。来这里，不是为了收集另一个地名，而是为了让自己慢下来，在巨石与天空之间，聆听时间本身缓慢流淌的声音，并从中获得一种面对纷繁世界的、古老的定力。这，或许就是它被列入一生必去清单的真正理由。`}</p>
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
              <a href="/attractions/braganca-castle-old-town-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉干萨城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bragança Old Town and Castle</p>
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
