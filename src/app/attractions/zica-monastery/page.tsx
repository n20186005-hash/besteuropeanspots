import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '日查修道院 Žiča Monastery｜塞尔维亚的“红墙”加冕圣地与精神摇篮 - 最佳欧洲景点',
  description: '车子驶离克拉列沃的城区，拐进一片被低矮山丘环抱的宁静谷地。第一眼看见日查修道院时，我愣住了。那不是我想象中灰白色、略显沧桑的石头建筑，而是一堵无比醒目、温暖而厚重的赭红色高墙，像从大地深处生长出来的巨大陶器，在塞尔维亚湛蓝得有些不真实的天穹下，散发着沉稳而灼热的光芒。那红色，不是娇艳的朱红，也不是暗',
}

export default function ZicaMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞尔维亚', href: '/destinations/serbia' },
            { label: '拉什卡州，塞尔维亚', href: '/destinations/serbia' },
            { label: '日查修道院', href: '/attractions/zica-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`日查修道院・Žiča Monastery・塞尔维亚・拉什卡州，塞尔维亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离克拉列沃的城区，拐进一片被低矮山丘环抱的宁静谷地。第一眼看见日查修道院时，我愣住了。那不是我想象中灰白色、略显沧桑的石头建筑，而是一堵无比醒目、温暖而厚重的赭红色高墙，像从大地深处生长出来的巨大陶器，在塞尔维亚湛蓝得有些不真实的天穹下，散发着沉稳而灼热的光芒。那红色，不是娇艳的朱红，也不是暗沉的砖红，是一种混合了铁锈、陶土和夕阳余晖的独特赭红，充满了原始的生命力。周围是绿得发亮的草地和树林，这抹红色就这样霸道又和谐地嵌入其中，瞬间就抓住了你的全部视线。
走近了，那股混合着古老石头、潮湿泥土和淡淡焚香的气味便飘了过来。围墙很高，带着明显防御工事的特征，提醒着你这里不仅仅是祈祷之所。穿过低矮的门洞，仿佛一下子从明媚的室外踏入了另一个时空。内部庭院不大，地面是磨得光滑的石头，中央就是那座核心的教堂——献予基督升天。外面的红墙在这里转化为内部深沉、温暖的色调。光线透过狭小的窗户吝啬地投入，空气中飘浮着微尘，让一切都显得静谧而肃穆。你能听到的最清晰的声音，可能是自己轻轻的脚步声，或是远处某位修士黑袍拂过石板的沙沙声。这里没有嘈杂的游客团，时间仿佛流淌得特别慢。
最打动我的，是那种“活着”的质感。这不只是一个博物馆式的遗迹。你能看到晾晒在庭院一角的简单衣物，闻到从某个小厨房飘出的朴素饭食的味道。偶尔有身着黑袍的修士匆匆走过，眼神平静而专注。这座修道院，自13世纪初建以来，它的脉搏就从未真正停止跳动。它曾是王冠加冕、钟磬齐鸣的权力与信仰中心，也曾在战火中数次被焚毁、劫掠，却又一次次如同它墙体的红色一样，从灰烬中顽强重生。今天，它依然是修士们清修的家，是当地人前来点亮蜡烛、寻求内心平静的场所。那堵红墙，看遍了加冕的荣耀、奥斯曼帝国的铁蹄、战争的硝烟，如今只是静静地立在那里，守护着一种恒久而坚韧的塞尔维亚精神。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离克拉列沃的城区，拐进一片被低矮山丘环抱的宁静谷地。第一眼看见日查修道院时，我愣住了。那不是我想象中灰白色、略显沧桑的石头建筑，而是一堵无比醒目、温暖而厚重的赭红色高墙，像从大地深处生长出来的巨大陶器，在塞尔维亚湛蓝得有些不真实的天穹下，散发着沉稳而灼热的光芒。那红色，不是娇艳的朱红，也不是暗沉的砖红，是一种混合了铁锈、陶土和夕阳余晖的独特赭红，充满了原始的生命力。周围是绿得发亮的草地和树林，这抹红色就这样霸道又和谐地嵌入其中，瞬间就抓住了你的全部视线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，那股混合着古老石头、潮湿泥土和淡淡焚香的气味便飘了过来。围墙很高，带着明显防御工事的特征，提醒着你这里不仅仅是祈祷之所。穿过低矮的门洞，仿佛一下子从明媚的室外踏入了另一个时空。内部庭院不大，地面是磨得光滑的石头，中央就是那座核心的教堂——献予基督升天。外面的红墙在这里转化为内部深沉、温暖的色调。光线透过狭小的窗户吝啬地投入，空气中飘浮着微尘，让一切都显得静谧而肃穆。你能听到的最清晰的声音，可能是自己轻轻的脚步声，或是远处某位修士黑袍拂过石板的沙沙声。这里没有嘈杂的游客团，时间仿佛流淌得特别慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种“活着”的质感。这不只是一个博物馆式的遗迹。你能看到晾晒在庭院一角的简单衣物，闻到从某个小厨房飘出的朴素饭食的味道。偶尔有身着黑袍的修士匆匆走过，眼神平静而专注。这座修道院，自13世纪初建以来，它的脉搏就从未真正停止跳动。它曾是王冠加冕、钟磬齐鸣的权力与信仰中心，也曾在战火中数次被焚毁、劫掠，却又一次次如同它墙体的红色一样，从灰烬中顽强重生。今天，它依然是修士们清修的家，是当地人前来点亮蜡烛、寻求内心平静的场所。那堵红墙，看遍了加冕的荣耀、奥斯曼帝国的铁蹄、战争的硝烟，如今只是静静地立在那里，守护着一种恒久而坚韧的塞尔维亚精神。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`日查修道院`} />
                <InfoRow label="英文名称" value={`Žiča Monastery`} />
                <InfoRow label="正式名称" value={`Žiča Monastery`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`拉什卡州，塞尔维亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`塞尔维亚中世纪第一个独立的牧首区所在地，七位塞尔维亚国王在此加冕的“塞尔维亚的威斯敏斯特”。`} />
                <InfoRow label="建筑特色" value={`由醒目的赭红色砖石砌成的坚固堡垒式建筑群，融合了教堂、防御塔和僧侣生活区的复合体。`} />
                <InfoRow label="建筑风格" value={`塞尔维亚中世纪宗教建筑的典范，属于“拉什卡学派”，兼具拜占庭的集中式布局与罗马式的坚固结构。`} />
                <InfoRow label="文化价值" value={`塞尔维亚民族身份、东正教信仰和王权合法性的三位一体象征，是理解塞尔维亚灵魂的钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院通常在每天上午8点至下午6点向游客开放。教堂内部的参观时间可能受到日常宗教仪式（如晨祷、晚祷）的影响而暂时关闭，尤其在周末和重要宗教节日期间。修道院博物馆或特定区域的开放时间可能更短，例如上午10点到下午4点。冬季（11月至3月）日照时间短，关门时间可能会提前至下午5点。建议在参观前查看最新信息，或抵达时在门口确认当日安排。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂和庭院通常是免费的，但欢迎游客进行自愿捐赠以支持修道院的维护，捐赠箱通常设在入口处。如果设有小型博物馆或特别展览，可能会收取象征性的门票费用，约合2-3欧元。修士们有时会出售修道院自产的蜂蜜、葡萄酒或宗教书籍，这也是一种支持方式。`} />
              <InfoRow label="地址" value={`Žiča bb, 36 310, Kraljevo, Serbia`} />
              <InfoRow label="交通方式" value={`日查修道院位于塞尔维亚中部，距离首都贝尔格莱德约170公里。最方便的起点是附近最大的城市克拉列沃。
从贝尔格莱德出发：在贝尔格莱德中央巴士站乘坐前往克拉列沃的长途汽车，车程约2.5-3小时，班次频繁。或乘坐火车至克拉列沃火车站，车程稍长，约3-4小时，但沿途风景更佳。
从克拉列沃出发：抵达克拉列沃后，最佳方式是乘坐出租车前往修道院，车程约15-20分钟，费用不高且方便。也可以咨询当地是否有前往“Manastir Žiča”的本地巴士，但班次可能较少，需提前在巴士站确认时刻表。自驾是最灵活的方式，从克拉列沃沿363号公路向西南方向行驶，路标清晰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个传奇的兄弟组合说起。13世纪初，塞尔维亚的斯特凡·尼曼雅二世国王，后世尊称为“首冠者斯特凡”，刚刚巩固了国家的独立。而他的弟弟，圣萨瓦，是一位学识渊博的修士，曾在遥远的阿索斯山修行。圣萨瓦梦想着为塞尔维亚的教会建立一个坚实的心脏，一个不仅能举行宗教仪式，更能作为国家精神支柱和独立象征的中心。于是，在大约1208到1219年之间，在斯特凡国王的大力支持下，圣萨瓦主持在战略要地“日查”开始了修道院的建造。他们选择了坚固的红色石材，设计上不仅有宏伟的教堂，还有高墙和塔楼，因为它从诞生起，就注定要承载非凡的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1219年，一个改变塞尔维亚历史的时刻在这里发生。经过圣萨瓦的努力，君士坦丁堡的牧首终于承认了塞尔维亚教会的自治地位。圣萨瓦本人就在这所他亲手参与建造的修道院里，被祝圣为塞尔维亚第一位大主教。日查，由此成为了塞尔维亚第一个独立的牧首区所在地。这不仅仅是宗教事件，它意味着塞尔维亚在政治和文化上彻底摆脱了拜占庭的直接影响，拥有了完全独立的民族身份。圣萨瓦无疑是这里的灵魂人物，据说他亲自为教堂的墙壁绘制了最初的湿壁画，并在这里建立了著名的塞尔维亚抄经学校，让知识如同烛火般在这里点燃并传递。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，日查最辉煌、最让它赢得“塞尔维亚威斯敏斯特”美誉的篇章，紧随其后。从“首冠者斯特凡”开始，一连七位塞尔维亚国王选择在这里，在这座红色教堂的穹顶下，由塞尔维亚自己的大主教为他们戴上王冠。想象一下那个场景：教堂内烛火通明，墙上描绘着基督和圣徒的壁画仿佛在注视着一切。国王跪在圣像前，大主教手持王冠，庄严的圣咏回荡在石拱之间。每一次加冕，都是王权与神权的再次结合，是对国家独立与正统的强化宣誓。那堵红墙之内，见证了尼曼雅王朝最鼎盛时期的荣光，空气里都曾弥漫着权力、信仰与希望的混合气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但荣耀与苦难总是一体两面。塞尔维亚的地理位置决定了它必然是各方势力争夺的走廊。14世纪后期，奥斯曼帝国的阴影开始笼罩巴尔干。1389年科索沃战役的悲剧之后，塞尔维亚的国势急转直下。日查这座显赫的加冕教堂，成为了侵略者首要打击的目标。它第一次被奥斯曼人严重破坏。随后在15世纪和16世纪，它又数次遭遇火灾和劫掠。那些璀璨的湿壁画被烟熏火燎，珍贵的圣物和文献散失，屋顶坍塌。僧侣们被迫流离失所，红色围墙内只剩下断壁残垣和荒草。它从权力的巅峰跌落，沉寂在历史的尘埃中，仿佛一个被遗忘的古老誓言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折发生在19世纪，随着塞尔维亚民族复兴运动的兴起，人们重新将目光投向了这些承载着民族记忆的圣地。日查修道院的重建，成为了一项民族使命。从1855年到1925年，断断续续进行了多次大规模的修复。人们依照中世纪的样式和格局，小心翼翼地重建教堂、修复壁画。最令人动容的是，他们坚持使用了当地特有的那种赭红色石材，让修道院重新披上了那身标志性的“红衣”。这不是一次简单的复古，而是一次庄严的宣告：塞尔维亚的民族精神，如同这红墙，可以被摧毁，但永远不会被消灭。今天我们所见的日查，正是这次民族复兴的生动结晶，它的每一块红石，都诉说着毁灭与重生的史诗。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受日查修道院的灵魂，建议你在一个工作日的上午抵达，这时游客最少，阳光正好将红墙照得通透温暖。整个深度游览大约需要2到3小时，节奏宜缓不宜急。先从外部整体感受它的气势与色彩，然后进入内部沉浸于其神圣与历史氛围，最后在宁静的庭院中回味。这样的安排让你能由远及近、由表及里地，完整体验这座修道院从视觉震撼到内心触动的全过程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`女士请务必准备一条头巾或围巾，在进入教堂时遮盖头部，这是对东正教传统的尊重。保持安静，尤其在教堂内，避免使用闪光灯拍照，以免打扰祈祷者和破坏壁画。尽量避开周末的宗教节日，那时会有大量本地信徒前来，虽然能感受浓厚的宗教氛围，但会影响你安静参观的体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在修道院前方的空地上，先别急着进去，后退几十米，从远处静静欣赏那堵在绿野中拔地而起、极具视觉冲击力的赭红色高墙与塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的木门进入内部庭院，让眼睛适应一下光线的变化，感受从外面世界的明媚瞬间转入内部静谧神圣空间的微妙过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入教堂主殿，在昏黄的光线下仰头寻找13世纪珍贵的湿壁画残迹，感受那穿越八百年依然动人的线条与色彩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到教堂中央穹顶之下，想象七百年前塞尔维亚国王们就是在此处跪地，在圣咏声中接受加冕的历史性场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细观看教堂内珍贵的圣像屏，特别是那些年代久远的圣像画，观察其独特的塞尔维亚拜占庭艺术风格。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并参观教堂内保存的古老石棺或纪念石碑，它们通常与尼曼雅王朝的贵族或重要主教有关。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在庭院中漫步，观察修士们日常生活的痕迹，如简朴的居所、小菜园，聆听可能从某扇窗后传来的诵经声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放，参观修道院附属的小型博物馆或纪念品处，那里可能收藏着出土的雕刻碎片或讲述修道院历史的资料。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`修道院对面山坡上的小路`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落时分，阳光斜射，从这里可以拍到修道院红色建筑群被金色阳光笼罩、背后衬着远山和森林的全景，色彩对比极其壮丽。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂内部侧廊仰望穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光从高处小窗射入时，站在侧廊角落，可以捕捉到光束如圣光般穿透昏暗空间，照亮部分古老壁画的神圣瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`庭院一角拍摄红墙与绿植`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或雨后，靠近围墙基部，用广角镜头仰拍，将局部赭红色斑驳墙体与墙头生长出的野草、藤蔓一同构图，表现历史与生命的交融。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院入口拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在庭院内，以古老的石制拱门为画框，将门外明亮的自然风景和部分红墙塔楼纳入框中，形成一幅生动的“景中景”。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部壁画非常脆弱，绝对禁止使用闪光灯，尽量调高相机感光度并使用大光圈镜头。拍摄修士或当地信徒时，务必先征得对方明确同意，以示尊重。塞尔维亚的蓝天饱和度很高，与红墙是绝配，使用偏振镜可以让色彩更加纯净、对比更鲜明。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`克拉列沃市中心的老式家庭旅馆，主人能为你冲泡一杯地道的塞尔维亚黑咖啡，并热情地指点附近地道的烤肉馆子。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`修道院附近村庄由传统石屋改造的民宿，夜晚极其静谧，可以听到远处森林的风声和近处的虫鸣，清晨在公鸡打鸣中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端避世之选`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约半小时可达的西部山区生态度假村，独栋木屋拥有面对森林的私人露台，提供有机餐食和 spa，适合在历史之旅后彻底放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉什卡州整体治安良好，民风淳朴。住在克拉列沃城区生活便利，但若想获得更独特的宁静体验，推荐选择周边村庄的民宿。夏季和九月的旅游旺季最好提前预订，尤其是周末。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开日查修道院很久之后，我眼前依然会浮现那抹沉静而热烈的红色。它不像那些精致奢华到令人屏息的宫殿，也不像那些仅作为历史标本存在的遗址。日查的魅力，在于它的“韧性”。那红色，是泥土与火焰的颜色，是大地的底色，也是历经劫难后生命依然炽热的证明。站在它的庭院里，你触摸到的不是冰冷的石头，而是一个民族跌宕起伏的心跳——从加冕时的雄心万丈，到被征服时的屈辱与坚守，再到复兴时小心翼翼的修复与重拾。这种完整的、活生生的历史层次感，在别处很难如此真切地体会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速消费、打卡即走的世界里，日查修道院是一个让你不得不慢下来的地方。它偏僻，甚至有些不起眼地藏在一个山谷里，没有喧闹的旅游设施。但正是这种“不便”，过滤掉了浮光掠影的游客，留下了真正愿意倾听它故事的人。来这里，你不是为了拍一张标准明信片照片，而是为了理解塞尔维亚这个民族为何如此，他们的骄傲与伤痛源自何处。它用一堵红墙，一部无言的石砌史诗，告诉你什么是真正的“深度”。每一位渴望在旅行中触碰历史灵魂，而不仅仅是收集地标的旅人，都应该来日查，让这抹红色，也染进你自己的记忆深处。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/echternach-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Echternach Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stari-ras-and-sopocani-serbian-cradle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维帕扎尔与斯塔里拉斯（塞尔维亚的中世纪摇篮）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novi Pazar and Stari Ras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/painted-churches-moldavia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    苏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">苏恰瓦彩绘修道院群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Painted Churches of Moldavia</p>
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
