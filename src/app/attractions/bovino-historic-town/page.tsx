import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博维诺古城 Bovino｜被时光遗忘的意大利山顶中世纪宝石 - 最佳欧洲景点',
  description: '你第一眼看到博维诺，会觉得它不像一个地方，而像一个古老的、沉睡的梦。车子沿着最后一段“之”字形山路奋力向上爬升，突然一个转弯，整座石头小镇就毫无预警地、完整地铺陈在你眼前。它紧紧地抓着一座青灰色山丘的脊背，那些用当地石灰岩砌成的房子，屋顶是温暖的陶土红，层层叠叠，错落有致，像一堆被孩童精心垒起的积木...',
}

export default function BovinoHistoricTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '普利亚大区福贾省', href: '/destinations/italy' },
            { label: '博维诺古城', href: '/attractions/bovino-historic-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博维诺古城・Bovino・意大利・普利亚大区福贾省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到博维诺，会觉得它不像一个地方，而像一个古老的、沉睡的梦。车子沿着最后一段“之”字形山路奋力向上爬升，突然一个转弯，整座石头小镇就毫无预警地、完整地铺陈在你眼前。它紧紧地抓着一座青灰色山丘的脊背，那些用当地石灰岩砌成的房子，屋顶是温暖的陶土红，层层叠叠，错落有致，像一堆被孩童精心垒起的积木，却又有着历经千年风雨后的沉稳气度。空气中有一股清冽的、混合着石头、苔藓和远处森林的气息，安静得能听见自己的脚步声在狭窄巷弄里的回响，以及不知从哪家院子里传来的、隐隐约约的狗吠。
走进古老的圣塞韦里诺门，你就踏入了另一个时间维度。脚下的石板路被无数代人的脚步打磨得光滑如镜，在正午的阳光下反射出温润的光泽。这里没有旅游团的喧嚣，甚至很少见到游客。你遇到的，可能是胳膊下夹着长面包慢悠悠回家的老爷爷，或是坐在自家门槛上眯着眼晒太阳的老奶奶，她们会用好奇而友善的目光打量你，然后继续沉浸在自己的世界里。生活的节奏在这里被放慢了十倍，你能闻到从某扇虚掩的门后飘出的炖菜香气，听到咖啡馆里银勺轻碰瓷杯的清脆声响。博维诺的魅力，不在于某个惊世骇俗的单一景点，而在于它整体的、不可分割的氛围——一种被时间厚爱并小心保存下来的“日常的永恒”。
它的心脏，是那座诺曼式的杜卡莱城堡和与之相邻的圣母升天教堂。城堡雄踞在城镇的最高点，灰色的石墙威严而沉默，俯瞰着脚下绵延至天际的达乌尼亚山谷。而教堂则更为亲切，它的罗马式立面简洁有力，内部却藏着意想不到的巴洛克式华丽。这种对比本身就很有趣：一边是防御与权力，一边是信仰与艺术，它们并肩站立了九个世纪，共同定义了这座城镇的精神轮廓。在城堡的瞭望台上，当傍晚的风吹过，看着山谷被染成金色，你会瞬间明白，为什么历代征服者和贵族都要争夺这里——它不仅是一个要塞，更是一个可以凝视整个世界的“阳台”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到博维诺，会觉得它不像一个地方，而像一个古老的、沉睡的梦。车子沿着最后一段“之”字形山路奋力向上爬升，突然一个转弯，整座石头小镇就毫无预警地、完整地铺陈在你眼前。它紧紧地抓着一座青灰色山丘的脊背，那些用当地石灰岩砌成的房子，屋顶是温暖的陶土红，层层叠叠，错落有致，像一堆被孩童精心垒起的积木，却又有着历经千年风雨后的沉稳气度。空气中有一股清冽的、混合着石头、苔藓和远处森林的气息，安静得能听见自己的脚步声在狭窄巷弄里的回响，以及不知从哪家院子里传来的、隐隐约约的狗吠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进古老的圣塞韦里诺门，你就踏入了另一个时间维度。脚下的石板路被无数代人的脚步打磨得光滑如镜，在正午的阳光下反射出温润的光泽。这里没有旅游团的喧嚣，甚至很少见到游客。你遇到的，可能是胳膊下夹着长面包慢悠悠回家的老爷爷，或是坐在自家门槛上眯着眼晒太阳的老奶奶，她们会用好奇而友善的目光打量你，然后继续沉浸在自己的世界里。生活的节奏在这里被放慢了十倍，你能闻到从某扇虚掩的门后飘出的炖菜香气，听到咖啡馆里银勺轻碰瓷杯的清脆声响。博维诺的魅力，不在于某个惊世骇俗的单一景点，而在于它整体的、不可分割的氛围——一种被时间厚爱并小心保存下来的“日常的永恒”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的心脏，是那座诺曼式的杜卡莱城堡和与之相邻的圣母升天教堂。城堡雄踞在城镇的最高点，灰色的石墙威严而沉默，俯瞰着脚下绵延至天际的达乌尼亚山谷。而教堂则更为亲切，它的罗马式立面简洁有力，内部却藏着意想不到的巴洛克式华丽。这种对比本身就很有趣：一边是防御与权力，一边是信仰与艺术，它们并肩站立了九个世纪，共同定义了这座城镇的精神轮廓。在城堡的瞭望台上，当傍晚的风吹过，看着山谷被染成金色，你会瞬间明白，为什么历代征服者和贵族都要争夺这里——它不仅是一个要塞，更是一个可以凝视整个世界的“阳台”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博维诺古城`} />
                <InfoRow label="英文名称" value={`Bovino`} />
                <InfoRow label="正式名称" value={`Bovino`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚大区福贾省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从古罗马时代便屹立于此的战略要塞，见证了从罗马帝国到诺曼王朝，再到中世纪贵族更迭的完整历史图景。`} />
                <InfoRow label="建筑特色" value={`完美融合了诺曼军事建筑的粗犷与中世纪平民建筑的质朴，层层叠叠的石屋仿佛从岩石中生长出来，与山体浑然天成。`} />
                <InfoRow label="建筑风格" value={`以中世纪风格为基底，杂糅了罗马式、诺曼式及后期巴洛克装饰的独特混合体。`} />
                <InfoRow label="文化价值" value={`被誉为“亚平宁山脉的阳台”，是保存完好的“意大利最美村庄”之一，活生生地展示了一种近乎停滞的、以社区和传统为核心的山地生活哲学。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天开放。核心景点如杜卡莱城堡、圣母升天教堂的开放时间一般为上午9:30至下午1:00，下午3:30至晚上7:00（夏季可能延长）。教堂周一上午通常不对外开放。建议行前查阅当地旅游局最新信息，因为意大利小镇的开放时间常有微调。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。杜卡莱城堡内部参观通常收取约5欧元门票，学生及65岁以上老人享有折扣。教堂免费进入，但欢迎自愿捐赠以支持维护。部分小型博物馆或有临时展览会收取2-3欧元费用。`} />
              <InfoRow label="地址" value={`Via Roma, 1, 71023 Bovino FG, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是巴里机场或那不勒斯机场。从巴里中央火车站乘坐区间火车前往福贾，车程约1.5-2小时，班次较频繁。抵达福贾后，前往博维诺是最大的挑战——公共交通班次稀少。最推荐的方式是自驾，从福贾沿SS90公路开车约40分钟即可抵达山脚下的城镇，然后沿着蜿蜒的山路盘旋而上。如果坚持公交，可在福贾寻找前往博维诺的少数班次巴士（一天可能只有3-4班），务必提前在烟草店或信息中心确认时刻表。另一种浪漫但昂贵的方式是从福贾预订出租车，单程约需50-60欧元。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`博维诺的故事，得从它的脚下说起。早在公元前，萨姆尼特人就看中了这座扼守山谷通道的战略山丘。但真正为它奠定城市基业的，是古罗马人。他们在这里建立了一个名为“Vibinum”的殖民点，你至今仍能在古城的一些地基和散落的石块上找到罗马工程的痕迹。罗马帝国衰落后的黑暗时代，这里像亚平宁半岛上的许多地方一样，经历了蛮族入侵、拜占庭与伦巴第人拉锯的混乱时期，城镇在摧毁与重建中艰难存续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点出现在公元十一世纪，随着诺曼骑士的铁蹄席卷南意大利。这些来自北方的征服者，是杰出的军事工程师，他们一眼就相中了博维诺无与伦比的防御位置。大约在1050年左右，诺曼领主德罗戈·德·奥特维尔下令，在古罗马遗址的核心位置，建造了那座标志性的杜卡莱城堡。这不是一座用来炫耀奢华的行宫，而是一件纯粹的战争机器：厚实的城墙，高耸的塔楼，狭窄的窗户，一切都为了生存和统治。城堡的建立，就像一根定海神针，让博维诺在混乱的中世纪早期稳定下来，并逐渐发展为区域中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几个世纪，博维诺随着南意大利的权杖易主而不断换姓。它先后成为霍亨斯陶芬王朝（神圣罗马帝国）、安茹王朝的领地。每一次政权更迭，都会在城堡和城镇上留下些许印记，可能是加固一段城墙，也可能是增建一座小礼拜堂。但真正让博维诺的形态固定下来的，是封建贵族的长时期统治。当地领主将土地分封给效忠的骑士和家族，这些家族便在城堡周围修建自己的石屋宅邸，形成了一条条蜿蜒的巷弄和一个个小小的广场。这种有机生长的模式，造就了今天我们看到的、迷宫般迷人又和谐的城市肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十七、十八世纪，当战争威胁逐渐远离，博维诺迎来了一段和平而精致的时光。财富积累使得当地贵族和教会有了装饰生活的意愿。于是，你在很多古老石屋的内部，可能会发现精美的巴洛克灰泥装饰；而那座外表朴素的圣母升天教堂，也在内部进行了华丽的巴洛克化改造，增添了金碧辉煌的祭坛和壁画。这个时期，博维诺更像一个悠闲的乡村贵族领地，而非军事前线。然而，随着意大利统一和现代工业化的进程，这座偏居山巅的小镇不可避免地走向了沉寂和人口外流，却也因祸得福，意外地将数百年前的风貌几乎原封不动地保存了下来，直到今天被重新发现为“时光胶囊”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点左右抵达，这时晨雾可能还未完全散去，阳光斜射，为古城披上一层柔和的滤镜，而且本地居民刚开始一天的活动，游客罕至，体验最为纯粹。整体游览大约需要5-6小时，节奏务必放慢，以“迷失”和“发现”为主旨。路线设计为一条环线，从主城门进入，逐步爬升到城堡，再穿越最迷人的老街区，最后在至高点俯瞰全景后，悠闲地走下坡，完成一次从外部到内核，再到宏观视野的完整体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的徒步鞋，这里的每一级台阶和石板路都可能有几百年历史，凹凸不平。小镇几乎没有商业化的旅游陷阱，但餐馆下午1点后午餐可能停止接待，务必规划好用餐时间。周日和周一上午，很多小店和博物馆可能关门，但古城本身的宁静氛围反而更浓。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的圣塞韦里诺门进入，用手触摸那冰凉而粗糙的千年石拱，感受穿越时空的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街科尔索-翁贝托一世缓步上行，留意两旁石墙上不同年代的家族徽章和古老的门环。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街角不起眼的“千年面包房”买一个还在冒热气的普利亚特色面包“佛卡夏”，边走边吃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达中心的加富尔广场，在露天咖啡馆坐下，点一杯意式浓缩，看广场上的老人下棋、主妇们寒暄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场旁的圣母升天教堂，在从昏暗门厅进入明亮中殿的瞬间，感受巴洛克艺术的视觉冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上攀登，探索杜卡莱城堡的庭院和部分开放的厅室，想象诺曼骑士在此巡逻的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后方的小径绕出，钻进名为“骑士区”的迷宫般巷弄，完全凭直觉选择左右，享受迷路的乐趣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后一定要找到位于城镇西侧的“观景台”，在黄昏时分，看金色的阳光将整个达乌尼亚山谷变成一幅巨画。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣塞韦里诺门逆光拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在城门内侧向外拍，逆光能勾勒出门洞完美的圆形轮廓和行人剪影，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`加富尔广场俯角`}</h4>
                  <p className="text-sm text-gray-700">{`从广场边通往小巷的台阶上向下拍，能捕捉到咖啡馆阳伞、行人、教堂立面与远山共同构成的层次丰富的日常生活画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“骑士区”巷弄纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有强烈透视感的狭窄巷子，利用两侧高大的石墙作为引导线，等待一个当地居民（最好是穿着深色的老人）走入画面远端，营造深邃的时空隧道感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`杜卡莱城堡瞭望台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，用广角镜头将城堡的石墙作为前景框，拍摄脚下红瓦屋顶层层跌落、最终融入广阔金色山谷的壮丽全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`隐秘的楼梯与鲜花`}</h4>
                  <p className="text-sm text-gray-700">{`留意那些被忽视的转角，一段古老的石阶旁突然出现一盆盛放的天竺葵，用大光圈镜头贴近拍摄，让鲜艳的花朵与沧桑的石材形成充满生命力的对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人非常注重隐私，拍摄居民（尤其是正面特写）前请务必微笑并征得同意，一个简单的手势和“Foto？”通常就能获得善意回应。日落后的“蓝色时刻”是拍摄古城灯光初亮、天空呈深蓝色的魔幻时刻，但巷弄内光线很暗，需准备三脚架。许多小巷非常狭窄，使用超广角镜头时要注意避免畸变过度破坏建筑线条的美感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`“岩石之间”民宿，由一对老夫妇经营，房间就在一栋有400年历史的老石屋里，木梁天花板，窗户正对着一条静谧的小巷，早餐能吃到家制的果酱和刚挤的羊奶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`杜卡莱城堡附属的精品住宿，虽然只有寥寥几个房间，但你能真正睡在诺曼城堡的厚墙之内，夜晚安静得能听到风声掠过塔楼的声音，仿佛成了城堡的临时主人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城边缘一处修复的18世纪贵族别墅“山谷视野”，拥有一个可以俯瞰无限风景的露台花园，房间内饰是现代设计与古董家具的完美结合，提供顶级的普利亚地区葡萄酒和美食体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居选择`}</h4>
                  <p className="text-sm text-purple-800">{`古城下方山腰处的农庄“橄榄林之家”，被自家的橄榄树和果园环绕，需要开车一小段路上山，但能享受绝对的宁静和满天繁星，主人会带你去参观古老的橄榄油压榨坊。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿通常需要提着行李走一段台阶路，预订时最好确认房东是否能提供搬运协助。夏季（7-8月）是当地节庆旺季，住宿紧张且价格上浮，建议提前数月预订。春秋两季气候宜人，是体验博维诺的最佳时节，还能避开人潮。冬季非常安静冷清，部分民宿可能歇业，但如果你追求极致的静谧和壁炉旁的阅读时光，那将是独特的选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博维诺时，我的背包里没有多出什么纪念品，但心里却好像被填进了一些更厚重的东西。那是一种关于“时间”的全新体认。在我们习惯的世界里，时间是一列高速向前、不断抛弃旧物的火车。但在博维诺，时间更像一条深沉、缓慢流动的河，它冲刷一切，却也将最坚实的部分——那些石头、那些传统、那些人之间守望相助的温情——沉淀下来，层层累积，最终形成了这座山丘本身。你走在这里，不是在参观一个“景点”，而是在体验一种不同的时间维度，一种允许事物慢慢变老、并因年老而更显尊严的生存哲学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追逐新鲜与变化的时代，博维诺的存在本身就是一种温柔的抵抗。它提醒我们，有些价值不会过时：社区的纽带、手工的温度、与土地和季节的紧密连接、以及一份不慌不忙的从容。它可能永远不会成为旅游指南上的头条，但这恰恰是它的珍贵之处。它属于那些愿意绕一点远路、爬一段山坡、花一个下午无所事事只是看光影移动的旅行者。如果你也曾在某个瞬间，感到被现代生活的喧嚣所裹挟，那么，请来博维诺坐坐。在这个“世界的阳台”上，吹着亘古不变的山风，看着山谷里云卷云舒，你会重新听见自己内心最平静的声音。这不仅仅是一次旅行，更是一次时间中的深呼吸。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/koice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科希策老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Košice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schwabisch-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall</p>
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
