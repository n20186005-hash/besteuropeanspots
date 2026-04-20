import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦莱尔圣母大教堂 Basilique de Valère｜雄踞山巅的千年瑰宝，聆听世界上最古老风琴的低语 - 最佳欧洲景点',
  description: '你得先穿过锡永老城那些被阳光晒得暖洋洋的窄巷，一抬头，它就在那里——不是优雅地伫立，而是像从山岩里生长出来的一部分，坚硬、沉默、带着某种不容置疑的威严。开始爬山吧，脚下的石板路被无数朝圣者和游客的步履打磨得光滑，空气里是干燥的蒿草气息和远处葡萄园飘来的隐约清香。越往上走，城市的喧嚣就越是沉到脚下，只...',
}

export default function BasiliqueDeValerePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瓦莱尔圣母大教堂', href: '/attractions/basilique-de-valere' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦莱尔圣母大教堂・Basilique de Valère・瑞士・锡永`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得先穿过锡永老城那些被阳光晒得暖洋洋的窄巷，一抬头，它就在那里——不是优雅地伫立，而是像从山岩里生长出来的一部分，坚硬、沉默、带着某种不容置疑的威严。开始爬山吧，脚下的石板路被无数朝圣者和游客的步履打磨得光滑，空气里是干燥的蒿草气息和远处葡萄园飘来的隐约清香。越往上走，城市的喧嚣就越是沉到脚下，只剩下自己的呼吸声和风吹过古老石墙缝隙的呜咽。当你终于喘着气站到城堡平台边缘，转过身，整个罗纳河谷像一幅巨大的、流动的画卷在你眼前轰然铺开，那一瞬间，攀登的所有辛苦都化为了胸腔里一声无声的惊叹。
走进教堂内部，感觉瞬间变了。外面是耀眼的阳光和开阔的世界，里面却是一片沁入骨髓的清凉与幽暗。眼睛需要几秒钟来适应。空气里有淡淡的、好闻的旧木头、石头和燃烧过的蜡烛混合的味道。最震撼的是你的耳朵——如果运气好，恰逢管风琴试音或小型音乐会，你会听到一种你从未听过的声音。那不是现代管风琴洪亮辉煌的轰鸣，而是一种更纤细、更古朴，甚至带点“嘶哑”的音色，像一位沧桑的老者在低语，音符仿佛裹着六个世纪的尘埃，直接振动你的胸腔。阳光透过高处狭小的罗马式窗户，在斑驳的石壁上切割出明亮的光柱，你能看见光柱里缓慢舞动的微尘。
这里绝不是一个冰冷的博物馆。你会看到当地人安静地走进来，在长椅上坐一会儿，画个十字，然后悄然离开。每年夏天的国际古风琴音乐节，这些古老的音符会重新被赋予生命。它既是锡永人精神信仰的古老坐标，也是他们日常文化生活中活生生的一部分。它的魅力，就在于这种奇特的混合体：一半是壁垒森严、俯瞰众生的军事堡垒，充满了力量与征服的故事；另一半则是内省、幽深、用音乐与神灵对话的祈祷之所。这种矛盾，让它无比真实，也无比动人。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你得先穿过锡永老城那些被阳光晒得暖洋洋的窄巷，一抬头，它就在那里——不是优雅地伫立，而是像从山岩里生长出来的一部分，坚硬、沉默、带着某种不容置疑的威严。开始爬山吧，脚下的石板路被无数朝圣者和游客的步履打磨得光滑，空气里是干燥的蒿草气息和远处葡萄园飘来的隐约清香。越往上走，城市的喧嚣就越是沉到脚下，只剩下自己的呼吸声和风吹过古老石墙缝隙的呜咽。当你终于喘着气站到城堡平台边缘，转过身，整个罗纳河谷像一幅巨大的、流动的画卷在你眼前轰然铺开，那一瞬间，攀登的所有辛苦都化为了胸腔里一声无声的惊叹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进教堂内部，感觉瞬间变了。外面是耀眼的阳光和开阔的世界，里面却是一片沁入骨髓的清凉与幽暗。眼睛需要几秒钟来适应。空气里有淡淡的、好闻的旧木头、石头和燃烧过的蜡烛混合的味道。最震撼的是你的耳朵——如果运气好，恰逢管风琴试音或小型音乐会，你会听到一种你从未听过的声音。那不是现代管风琴洪亮辉煌的轰鸣，而是一种更纤细、更古朴，甚至带点“嘶哑”的音色，像一位沧桑的老者在低语，音符仿佛裹着六个世纪的尘埃，直接振动你的胸腔。阳光透过高处狭小的罗马式窗户，在斑驳的石壁上切割出明亮的光柱，你能看见光柱里缓慢舞动的微尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不是一个冰冷的博物馆。你会看到当地人安静地走进来，在长椅上坐一会儿，画个十字，然后悄然离开。每年夏天的国际古风琴音乐节，这些古老的音符会重新被赋予生命。它既是锡永人精神信仰的古老坐标，也是他们日常文化生活中活生生的一部分。它的魅力，就在于这种奇特的混合体：一半是壁垒森严、俯瞰众生的军事堡垒，充满了力量与征服的故事；另一半则是内省、幽深、用音乐与神灵对话的祈祷之所。这种矛盾，让它无比真实，也无比动人。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦莱尔圣母大教堂`} />
                <InfoRow label="英文名称" value={`Basilique de Valère`} />
                <InfoRow label="正式名称" value={`Basilique de Valère`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`锡永`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是欧洲少数将神圣教堂与军事城堡完美融合于一体、并持续使用超过八百年的罕见建筑杰作，也是瑞士瓦莱州权力与信仰交织的历史见证。`} />
                <InfoRow label="建筑特色" value={`如同一艘自中世纪驶来的巨石方舟，巍然矗立于孤山之上，其不对称的双塔楼、厚重的防御石墙与内部精致的晚期罗马式拱廊形成了强烈的视觉与功能对比。`} />
                <InfoRow label="建筑风格" value={`以晚期罗马式风格为基调，巧妙融入了早期哥特式的元素，并在后世修复中谨慎保留了其古朴、厚重甚至略显粗犷的原始军事气质。`} />
                <InfoRow label="文化价值" value={`这里珍藏着全世界仍在定期演奏的最古老的管风琴（约1430年），其琴声穿越六个世纪，是活着的音乐考古与精神遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂内部开放时间依季节和宗教活动变化，通常为每年四月至十月，周二至周日上午10:00至下午5:00，冬季开放时间缩短或仅周末开放。山顶城堡区域的外部庭院和防御工事常年可自由探访。请注意，教堂内部在举行弥撒或音乐会期间会暂停游客参观，行前务必查询官网的最新日程表。冬季（十一月到次年三月）参观限制较多，计划冬季出行需格外留意。`} />
              <InfoRow label="门票价格" value={`进入教堂内部及附属的历史博物馆需购买联票，成人票价约为12瑞士法郎。持有瑞士旅行通票（Swiss Travel Pass）可享受折扣或免费入场优惠。仅游览外部城堡区域和观景平台免费。6至16岁青少年及学生享有优惠票价，6岁以下儿童免费。门票可在山脚下的旅游信息中心或山顶入口处购买。`} />
              <InfoRow label="地址" value={`Rue des Châteaux 14, 1950 Sion, Switzerland`} />
              <InfoRow label="交通方式" value={`从日内瓦机场出发，乘坐直达的区间火车（IR或RE）前往锡永（Sion）火车站，车程约1小时45分钟，班次频繁每小时至少一班。从洛桑或蒙特勒出发则更近，约40-60分钟车程。抵达锡永火车站后，出站步行约15分钟即可到达瓦莱尔山脚下。你可以选择沿着清晰的指示牌，徒步攀登约20-30分钟蜿蜒而上的石板小径抵达山顶教堂；也可以选择乘坐便捷的观光小火车（Petit Train），它从山脚的Place de la Planta广场发车，轻松将你送至山顶附近，节省体力且沿途有语音讲解。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要回到遥远的12世纪末。那时的锡永，是通往意大利圣伯纳德山口的重要驿站，也是主教与世俗领主权力博弈的棋盘。主教们需要一座既能彰显神权、又能抵御威胁的坚固据点。于是，他们选中了这座俯瞰整个河谷的岩石山丘。最初的建造者，我们已不知道他们的名字，只知道他们是一群技艺高超的石匠。他们就地取材，用山上的石头垒起高墙，不是精细的雕琢，而是追求一种磐石般的稳固。教堂的核心部分，那厚重的墙壁和敦实的柱子，就在那个年代一点点竖立起来。它从诞生之初就带着双重使命：上帝的殿堂，也是主教的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到15世纪，一件奇迹般的事情为这座石头城堡注入了灵魂。大约在1430年左右，一位无名的工匠，或许是来自勃艮第或德国地区的大师，在教堂西侧的楼廊上，开始制作一架管风琴。他用橡木雕刻音管，用铅锡合金制作簧片，以当时最精妙的工艺，将数百个零件组装起来。没人能想到，这架为了丰富宗教仪式而造的乐器，会穿越战火与岁月，成为六个世纪后全世界最古老的、仍能演奏的管风琴。它就像一个时间的胶囊，封存了中世纪晚期的声音密码。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，几百年的日子不可能总是平静的。宗教改革的浪潮席卷瑞士时，瓦莱州经历了剧烈的动荡。教堂内的许多圣像和装饰在“破除圣像”运动中被损毁，墙壁上的彩绘被石灰覆盖。城堡的防御功能在火炮时代逐渐失效，但它依然是权力的象征。它见证了主教的更迭、平民的起义、以及瓦莱州最终加入瑞士联邦的漫长历程。它就像一个沉默的哨兵，身上的每一块石头都浸透了历史的雨水和硝烟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入现代，人们开始用新的眼光审视这座珍宝。19世纪末和20世纪中叶的修复工作异常谨慎，学者们像侦探一样，剥去后来添加的涂层，试图还原它最初的模样。他们发现了被掩盖的壁画碎片，加固了风雨侵蚀的墙体，但决定保留那种沧桑的历史质感，而不是将其修复得“焕然一新”。最重要的，是那架古风琴得到了最精心的保护和修复，采用“冻结式修复”理念，即只维持其可演奏状态，绝不改变其原始结构和音色特质。于是，每年夏天，古老的琴键再次被按下，让来自15世纪的声音，重新回荡在21世纪的石壁之间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，你今天看到的瓦莱尔，并非某个固定年代的定格快照。它是层层叠加的历史本身：罗马式的厚重、哥特式窗户透进的微光、宗教改革时期的朴素、以及现代保护理念的克制。它没有被制成木乃伊，而是在小心翼翼的保护下，继续呼吸、继续歌唱，继续担任着连接锡永过去与现在的、最坚实也最动人的那座桥梁。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午，大约十点前抵达山脚下。这个时间既能避开午后可能的热浪与较大的旅游团队，又拥有侧光拍摄建筑的绝佳光线。整体游览需要预留至少3到4小时，这包括了上山下山的时间、在教堂内外的沉浸体验，以及必不可少的、在山顶平台发呆俯瞰河谷的奢侈时光。节奏应该是慢的，带着探秘而非打卡的心情。先征服山路，用身体的疲惫换取抵达时的豁然开朗；再进入教堂的幽静，让感官从宏大的视觉转向细腻的听觉与内心体验；最后在城堡的壁垒间漫步，想象中世纪的烽烟。这样的安排，能让你由外至内、由动至静，完整地感受瓦莱尔的多重性格。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部严禁使用闪光灯，并且对大型背包和三脚架有严格限制，轻装简行为佳。夏季午后人流较多，且教堂内部可能因音乐会排练临时关闭，行前务必查看官网公告。攀登山路请务必穿一双舒适防滑的鞋子，部分路段石板光滑且无护栏。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城中心的旅游信息中心拿份地图，然后沿着标志清晰的“通往城堡”指示，开始一段约二十分钟的、微微喘息的徒步攀登，感受脚下石板路的坡度与历史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在蜿蜒山路的一个拐角处记得停下来，回头俯瞰锡永老城红色的屋顶与更远处图里永城堡的孪生身影，拍下它们与河谷同框的经典画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开那扇厚重的木门踏入教堂中殿，立刻让眼睛适应昏暗，然后径直走向西侧楼廊下方，仰望那架镶嵌在古老木雕框架中的世界最古老风琴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花时间静静坐在中殿的长椅上，观察阳光如何随着时间推移，在高窗与柱廊间移动，在斑驳的石壁上描绘出变幻莫测的光影壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索教堂侧面的小礼拜堂与回廊遗迹，用手触摸那些冰凉且凹凸不平的罗马式柱头雕刻，上面简朴而有力的纹饰诉说着最初的信仰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，到外围的城堡防御工事和城墙上去走走，从垛口眺望截然不同的远景，感受山风呼啸而过，想象士兵在此守望的日与夜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着另一条舒缓的小径下山，这条路会带你穿过一片宁静的葡萄园，并途经山下那座可爱的圣基斯小教堂，完成一次从神圣到世俗的过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到老城，在广场边的咖啡馆点一杯本地的菲丹白葡萄酒，就着坚果，让瓦莱尔的轮廓在夕阳的金光中，慢慢沉淀为你记忆里的一座剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山脚葡萄园仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚日落前一小时，从山西侧的葡萄田小径上，用长焦镜头压缩空间，将教堂城堡与背后雄伟的阿尔卑斯山峦叠在一起，构成力量感十足的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂内逆光剪影`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，当阳光从西面高窗射入中殿，站在中殿东端面向风琴楼廊拍摄，可以将参观者的身影、长椅的线条与远方发光的窗框，拍成极具戏剧性和宗教感的剪影画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`古城门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下山后，在老城入口的石头拱门（Porte de Sion）内，以拱门为画框，将远处山巅的瓦莱尔教堂作为焦点拍摄，能获得一幅有景深有故事性的“画中画”。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡东侧的城墙垛口处，将相机贴近古老的石砖，以砖石为前景引导线，俯瞰拍摄锡永城市脉络与罗纳河谷的壮阔平原，前景的历史质感与远景的生机形成对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`管风琴局部特写`}</h4>
                  <p className="text-sm text-gray-700">{`在教堂内获得管理员许可后，使用高感光度相机，捕捉古风琴那些历经数百年、纹理丰富的橡木雕花音管细节，诉说器物本身的时间故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部拍摄务必保持绝对安静，并完全关闭快门声音和一切可能的光源。使用三脚架通常需要提前申请特殊许可。每年夏季风琴音乐会期间，内部拍摄会受到严格限制甚至禁止，需提前确认。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在锡永火车站附近步行可达的现代风格酒店，交通便利，房间宽敞明亮，顶楼露台酒吧是欣赏双子城堡夜景的免费秘密据点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心特色民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择由百年老屋改造的家庭式公寓，裸露的石墙、古老的木梁配上现代化的设施，清晨推开窗就能闻到面包店的香气，并拥有步行至山脚的极致便利。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史体验`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻位于附近小镇的五星级古堡酒店，由真正的中世纪城堡改建，体验贵族般的住宿，在厚重的历史氛围中入眠，并享受米其林推荐的当地菜肴。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`葡萄庄园农舍`}</h4>
                  <p className="text-sm text-purple-800">{`租住瓦莱尔山脚下自家葡萄园里的传统“马泽”石屋农舍，与酿酒的庄主一家为邻，傍晚在私人露台一边品尝他们自产的美酒，一边独享毫无遮挡的城堡日落 view。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和音乐节期间，锡永的住宿非常紧张，务必提前数月预订。老城内的住宿更能感受古镇韵味，但夜间非常安静，喜欢夜生活的游客可能觉得冷清。冬季前往，选择提供暖气充足和交通便利的住宿更为重要，因为山区天气多变。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瓦莱尔很久以后，我发现自己最常想起的，不是那俯瞰山河的壮丽全景，也不是风琴声音带来的直接震撼，而是一种奇特的“静谧的坚固感”。在这个一切都追求快速迭代、轻盈流动的时代，这座山巅上的石头建筑，以一种近乎固执的笨拙姿态，提醒着我们一些不同的东西：关于扎根，关于守护，关于在时间的长河中缓慢地沉积价值。它不试图讨好谁，只是存在在那里，经历了战争、改革、忽视与重新发现，最终与它所处的土地、社区和传统声音，达成了一种深度的和解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，它绝不仅仅是一个“景点”。对于渴望深度的旅行者而言，瓦莱尔是一次心灵的校准。它让你用双脚踏实地攀登，去换取一片开阔；它让你在幽暗静默中等待，去捕捉一缕穿越世纪的光；它让你聆听一种并不“完美”却绝对“真实”的声音。它告诉你，真正的永恒，不是没有变化，而是在变化中牢牢守住了最核心的灵魂。来到这里，你带走的不只是照片，更是一种重量——那种知道有些事物，历经风雨，依然可以巍然屹立、继续歌唱的，沉甸甸的安慰。这或许就是我们穿越千里，总要寻访此类地方的最深原因。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/abbey-of-saint-gall-library" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣加仑修道院图书馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Saint Gall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fribourg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fribourg Old Town</p>
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
