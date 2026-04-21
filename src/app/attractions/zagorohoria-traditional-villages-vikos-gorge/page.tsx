import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '扎戈里霍里亚 Zagorohoria｜探秘维科斯峡谷深处46座天空之城，行走在千年石板古道上的时光之旅 - 最佳欧洲景点',
  description: '车子在盘山公路上不知转了多少个弯，窗外的风景从郁郁葱葱的河谷骤然变得险峻。然后，就在某个山口，它们突然撞进你的视野——一片仿佛被巨人随意撒在墨绿色天鹅绒褶皱里的灰黑色积木。那就是扎戈里霍里亚，维科斯峡谷怀抱中的四十六个石头村落。第一印象是绝对的寂静，只有风穿过巨大松林发出的低吼，以及遥远山谷底传来几',
}

export default function ZagorohoriaTraditionalVillagesVikosGorgePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '伊庇鲁斯大区，约阿尼纳州', href: '/destinations/europe' },
            { label: '扎戈里霍里亚（维科斯峡谷传统村落群）', href: '/attractions/zagorohoria-traditional-villages-vikos-gorge' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`扎戈里霍里亚（维科斯峡谷传统村落群）・Zagorohoria (Vikos Gorge)・希腊・伊庇鲁斯大区，约阿尼纳州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在盘山公路上不知转了多少个弯，窗外的风景从郁郁葱葱的河谷骤然变得险峻。然后，就在某个山口，它们突然撞进你的视野——一片仿佛被巨人随意撒在墨绿色天鹅绒褶皱里的灰黑色积木。那就是扎戈里霍里亚，维科斯峡谷怀抱中的四十六个石头村落。第一印象是绝对的寂静，只有风穿过巨大松林发出的低吼，以及遥远山谷底传来几乎听不见的、如丝线般的溪流声。空气冷冽而清新，带着松针、湿润苔藓和远处柴火烟混合的复杂气味。
走近任何一个村子，比如莫利沃斯，时间立刻慢了下来，甚至粘稠了起来。脚下是被无数代人的鞋底、马蹄和羊蹄打磨得光滑如镜的青石板路，缝隙里长着顽强的青草。那些房子不是“建”在那里，它们仿佛是从山体里生长出来的，用的是同一种灰色的片岩，屋顶是厚重的石板，压得低低的，透着一种沉默的坚韧。你偶尔会遇见一位裹着黑色头巾的老妇人，静静地坐在门廊的阴影里，她的目光平静地掠过你，仿佛你只是另一阵偶然吹过的山风。教堂的钟声在黄昏时分响起，声音清越，在峡谷间来回碰撞，最后消散在暮霭里。这里没有景点的喧嚣，它本身就是生活本身，一种延续了数百年的、与大山相互依存的生活节奏。
而连接这一切的，是更令人惊叹的人类杰作——那些横跨在咆哮激流之上的单拱石桥。它们被称为“鬼斧神工”毫不为过。巨大的石板精准地咬合在一起，没有任何水泥的痕迹，完全依靠力学和古老的智慧屹立数百年。走在这些桥上，脚下的深渊传来隆隆水声，手心摸着冰凉粗糙的石头，你会真切地感觉到，你正行走在一部活生生的史诗的脊梁上。这些桥和蜿蜒其间的古道，就像这个失落世界的血管和神经，将分散的村落联结成一个呼吸与共的有机体。这才是扎戈里霍里亚最核心的魅力：它不是一堆静止的博物馆展品，而是一个由山、石、桥、路和人共同构成的，依然在轻微搏动着的完整生命。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在盘山公路上不知转了多少个弯，窗外的风景从郁郁葱葱的河谷骤然变得险峻。然后，就在某个山口，它们突然撞进你的视野——一片仿佛被巨人随意撒在墨绿色天鹅绒褶皱里的灰黑色积木。那就是扎戈里霍里亚，维科斯峡谷怀抱中的四十六个石头村落。第一印象是绝对的寂静，只有风穿过巨大松林发出的低吼，以及遥远山谷底传来几乎听不见的、如丝线般的溪流声。空气冷冽而清新，带着松针、湿润苔藓和远处柴火烟混合的复杂气味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近任何一个村子，比如莫利沃斯，时间立刻慢了下来，甚至粘稠了起来。脚下是被无数代人的鞋底、马蹄和羊蹄打磨得光滑如镜的青石板路，缝隙里长着顽强的青草。那些房子不是“建”在那里，它们仿佛是从山体里生长出来的，用的是同一种灰色的片岩，屋顶是厚重的石板，压得低低的，透着一种沉默的坚韧。你偶尔会遇见一位裹着黑色头巾的老妇人，静静地坐在门廊的阴影里，她的目光平静地掠过你，仿佛你只是另一阵偶然吹过的山风。教堂的钟声在黄昏时分响起，声音清越，在峡谷间来回碰撞，最后消散在暮霭里。这里没有景点的喧嚣，它本身就是生活本身，一种延续了数百年的、与大山相互依存的生活节奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而连接这一切的，是更令人惊叹的人类杰作——那些横跨在咆哮激流之上的单拱石桥。它们被称为“鬼斧神工”毫不为过。巨大的石板精准地咬合在一起，没有任何水泥的痕迹，完全依靠力学和古老的智慧屹立数百年。走在这些桥上，脚下的深渊传来隆隆水声，手心摸着冰凉粗糙的石头，你会真切地感觉到，你正行走在一部活生生的史诗的脊梁上。这些桥和蜿蜒其间的古道，就像这个失落世界的血管和神经，将分散的村落联结成一个呼吸与共的有机体。这才是扎戈里霍里亚最核心的魅力：它不是一堆静止的博物馆展品，而是一个由山、石、桥、路和人共同构成的，依然在轻微搏动着的完整生命。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`扎戈里霍里亚（维科斯峡谷传统村落群）`} />
                <InfoRow label="英文名称" value={`Zagorohoria (Vikos Gorge)`} />
                <InfoRow label="正式名称" value={`扎戈里霍里亚地区传统村落`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伊庇鲁斯大区，约阿尼纳州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是奥斯曼帝国统治时期，希腊山地民族坚守其文化、信仰与建筑传统的最后堡垒之一，被誉为“希腊的隐秘之心”。`} />
                <InfoRow label="建筑特色" value={`完全由当地灰色片岩砌成的坚固石屋，拥有陡峭的石板屋顶、厚重的木门和狭小的窗户，形成一种为防御严酷气候和过往历史动荡而生的独特建筑语汇。`} />
                <InfoRow label="建筑风格" value={`伊庇鲁斯本土山地建筑风格，深受拜占庭后期民居建筑影响，并融合了奥斯曼时期某些功能性元素。`} />
                <InfoRow label="文化价值" value={`一个保存完好的、由自然景观、古老工程（石桥、古道）和活态社区共同构成的完整文化生态系统，是了解希腊大陆深处传统生活方式的活态窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落群全年开放，户外空间可自由探访。各村落内的小型民俗博物馆、特定教堂或历史宅邸的开放时间不固定，通常为每日上午10点至下午3点，冬季可能缩短或仅周末开放。建议在白天时间内游览，夜间山路照明有限。`} />
              <InfoRow label="门票价格" value={`进入村落群及徒步古道免费。少数由私人维护的博物馆或特色宅邸可能收取少量捐赠费（通常2-5欧元）。维科斯-阿奥斯国家公园的官方游客中心免费入场。`} />
              <InfoRow label="地址" value={`Zagorohoria, Epirus, Greece。主要枢纽村落莫利沃斯（Molyvos）的坐标可参考：莫利沃斯广场，440 07`} />
              <InfoRow label="交通方式" value={`最近的国际机场是约阿尼纳国家机场（Ioannina National Airport，IOA），从雅典有直飞航班（约1小时）。从约阿尼纳市中心乘车前往扎戈里霍里亚地区的主要门户村落（如莫利沃斯或帕平戈）约需1.5至2小时车程。公共交通班次稀疏，每天仅有1-2班巴士从约阿尼纳巴士站发往主要村落，强烈建议租车自驾，以获得最大灵活性。道路多为蜿蜒的山路，驾驶需谨慎但风景绝佳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解扎戈里霍里亚为何是今天这个样子，你得把时钟拨回到奥斯曼帝国统治希腊大陆的那几百年。对于平原地区的人们来说，那是段沉重的岁月，但险峻的品都斯山脉和深邃的维科斯峡谷，却意外地成了自由的庇护所。从大约14世纪开始，不愿屈服的人们开始向这些“无法到达”的山谷迁移。他们不是来隐居的，他们是来建造堡垒的——不是军事堡垒，而是文化和生活的堡垒。石头，成了他们最可靠的盟友。从山体开采出巨大的片岩，建造起这些低矮、坚固、窗户狭小的房屋，不仅仅是为了抵御漫长严寒的冬季，更是一种低调的防御姿态，让这些社区在山峦的褶皱里保持必要的匿名与安全。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些村落的繁荣，与一条古老的贸易路线紧密相连。这里曾是连接伊庇鲁斯沿海与内陆塞萨利平原的重要商道。驮着香料、织物和思想的骡队，需要穿越维科斯峡谷的天险。于是，从17世纪到19世纪初，一个伟大的桥梁建筑时代到来了。当地技艺高超的石匠家族（他们的名字大多已失传），运用传承自古希腊甚至更早时代的精密几何与力学知识，在激流之上架起了一座座单拱石桥。著名的“科克里斯桥”、“鬼桥”等都是那个时代的产物。建造这些桥没有图纸，全靠口传心授的经验和一代代石匠对石头“性格”的深刻理解。每一块巨石都被精心雕琢，相互楔合，依靠纯物理的平衡跨越空间。这些桥不仅是工程奇迹，更是经济命脉，使得分散的村落得以交换货物、通婚、共享信息，最终凝聚成一个独特而紧密的山地社会网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静的岁月并非永恒。第二次世界大战和随后的希腊内战，给这片土地带来了深重的创伤。扎戈里霍里亚由于其战略位置和人们的抵抗精神，成为了激烈战斗的战场。许多石桥被炸毁，村落遭到严重破坏，人口开始大量流失，年轻人为寻找生计涌向城市或远渡重洋。从20世纪中叶起，这里一度濒临成为“鬼域”的边缘。石头房子开始坍塌，古道被荒草淹没，只有最固执的老人留了下来，守着祖先的家园和记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在大约三十年前。希腊政府意识到了这里无与伦比的自然与文化价值，将维科斯峡谷及周边区域划为国家公园。同时，一种新的意识在觉醒：那些离开的村民的后代，以及外来的学者、艺术家，开始重新审视这些即将消逝的珍宝。缓慢而精细的修复工作开始了，原则是“修旧如旧”，必须使用传统的材料和技术。一些被遗弃的石屋被改造成了精致的民宿和旅馆。更重要的是，那些古老的徒步古道被重新清理和标记，吸引了世界各地的徒步爱好者。旅游业没有以暴风骤雨的形式到来，而是像山涧溪流一样，缓慢地、可持续地滋润着这片土地。如今，你看到的扎戈里霍里亚，是一个奇迹般的平衡：它保留了历史的灵魂与样貌，却又悄然注入了新的生命力。老人们依然坐在广场上，而他们的子孙可能正在经营一家家庭旅馆，向客人讲述着石桥的传说。历史在这里不是书本上的文字，而是你呼吸的空气、脚下的路，和每一次与当地人目光交汇时感受到的坚韧与温暖。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略扎戈里霍里亚的精髓，你需要至少完整的一天，并抱着徒步探索的心态。建议清晨就从约阿尼纳或住在附近村落出发，趁着山间晨雾未散、光线柔和的黄金时段开始游览。整体的节奏应该是缓慢的、沉浸式的，目标不是“打卡”所有46个村子（那不可能），而是深度体验两到三个代表性村落，并步行连接它们的古道与石桥。这样的安排能让你同时感受到建筑群的静态美和古道网络的动态脉络，理解这个社区如何作为一个整体运作。下午时分，可以驾车到一个能俯瞰峡谷全景的观景台，感受大自然的磅礴，最后在其中一个村落的传统小酒馆结束完美的一天。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿结实防滑的徒步鞋，古石板路在潮湿时非常滑，且部分小道路况原始。大多数村落小店和餐馆只收现金，务必提前备好欧元零钱。尊重当地居民隐私，拍照前尤其是拍摄人物时，请务必先微笑示意并征得同意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站抵达莫利沃斯小镇，把车停在村口，徒步穿过迷宫般静谧的、挂着天竺葵的石板小巷，感受村庄刚刚苏醒的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着水声走到村外的“科克里斯石桥”，站在桥上抚摸冰凉的巨石，俯瞰桥下翡翠般的清澈深潭和奔流的溪水。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从石桥另一端沿着明显的标识踏上古老的石板徒步小道，向着另一个村落帕平戈进发，途中在森林的怀抱里聆听鸟鸣和自己的脚步声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达美丽的帕平戈村（分上下两村），探索其中心广场，在那棵巨大的梧桐树下喝一杯希腊咖啡，看孩子们嬉戏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一条上坡的小径，徒步约40分钟前往“奥斯峡谷观景台”，这里是拍摄维科斯峡谷——这个号称世界最深峡谷之一——的经典机位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回帕平戈，如果有余力且时间允许，可以探访一下村子边缘的小型民俗博物馆，里面陈列着传统农具和服饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分驱车前往另一个特色村落季佩罗，那里的石屋建筑群在夕阳下会呈现出温暖的金褐色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在季佩罗一家由老石头房改造的家庭式小酒馆用晚餐，品尝慢炖羊肉和本地野菜，结束充实的探索日。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`魔鬼桥（Kokoris Bridge）仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚低角度光线时，从下游的河床位置向上拍摄，可以将宏伟的单拱石桥与背景的密林、山峦一同纳入构图，展现其凌空飞渡的气势。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`帕平戈村石板广场光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射过广场周边的石屋，在光滑如镜的石板地上拉出长长的影子，捕捉村民走过或鸽子飞起的动态瞬间，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`维科斯峡谷观景台（从帕平戈出发）`}</h4>
                  <p className="text-sm text-gray-700">{`最好在晴朗日落的黄金一小时前往，利用长焦镜头压缩空间，拍出峡谷层层叠叠、深不见底的纵深感，如果有薄雾则为上佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`莫利沃斯村小巷纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有蜿蜒阶梯的小巷，站在较低处向上拍，利用两侧高耸的石墙形成天然的画框，引导视线至巷子尽头的一扇彩门或一盆鲜花。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古老石桥的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`近距离拍摄石桥拱腹处巨石的肌理和咬合方式，侧光能突出石头历经风雨的沧桑质感，诉说无言的工程史诗。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`山间天气变化极快，建议随身携带塑料袋保护相机，防雨防尘。无人机飞行在村落和峡谷上空理论上需要申请许可，且强劲的山谷乱风对飞行器是巨大挑战，请谨慎评估。人文摄影贵在真诚，尝试与当地人简短交流后再拍摄，往往能得到更生动、不设防的瞬间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`隐匿石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择帕平戈村一栋完全由传统工艺修复的石头房子，壁炉是客厅的中心，夜晚可以听到柴火噼啪声，露台正对着寂静的山谷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭式传统旅馆`}</h4>
                  <p className="text-sm text-green-800">{`住在莫利沃斯中心广场旁一家三代人经营的旅馆里，早餐是女主人自制的果酱、蜂蜜和新鲜奶酪，能获得最地道的旅行建议和家庭般的温暖。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感隐居之所`}</h4>
                  <p className="text-sm text-yellow-800">{`位于某个更偏远小村的精品酒店，由数栋相连石屋改造而成，设计极简而尊重原生环境，拥有无敌峡谷景观的私人露台和热水浴池，适合寻求宁静与舒适兼具的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`徒步者山林小屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果你是硬核徒步爱好者，可以选择峡谷徒步路线中段、仅能步行抵达的山区避难所式小屋，体验最原始的山居夜晚，与星辰和松涛为伴。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些民宿和旅馆规模通常很小（只有几间房），且在夏季徒步旺季和秋季色彩斑斓时非常抢手，务必提前数月预订。冬季（11月至3月）许多住宿会关闭，出行前需再三确认。村落夜晚极其安静黑暗，准备一个小手电筒会非常有用。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开扎戈里霍里亚许久之后，在我脑海里反复回放的，不是某一张具体的明信片风景，而是一种综合的“感觉”。那是石头冰凉的触感，是空气中清冽的松香，是脚步声在峡谷中的微小回响，是当地老人那平静深邃、仿佛能看穿时间的一瞥。这个地方有一种强大的“镇定”力量。它不讨好你，不喧哗，只是沉默而骄傲地存在着，用它历经风雨的灰色身躯，向你展示着一种截然不同的时间尺度与生命韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一切都追求快速、光滑、即时的现代社会，扎戈里霍里亚像一颗来自过去的坚硬宝石。它提醒我们，美可以来自粗粝与质朴，社区的力量在于相互联结（无论是通过石桥还是古道），而真正的奢华或许是拥有宁静、拥有与自然深刻联结的生活方式。每一位热爱深度游的旅人，都应该来这里走一走。不仅仅是为了看看“世界最深的峡谷”或“古老的石头村”，更是为了让自己有机会行走在那条时间的古道上，重新校准内心对于何为重要、何为永恒的感知。在这里，你会明白，有些东西，比如这些用双手和智慧砌入山体的家园，是不会轻易随潮流逝去的。它们静静地等着，等待那些愿意拐进山路深处，前来聆听石头细语的人。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/veria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦里亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mystras-byzantine-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯拜占庭遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/loutro-crete" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢特罗</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Loutro</p>
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
