import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布拉索夫黑教堂 Black Church of Brasov｜被烈火洗礼的哥特史诗与传奇管风琴 - 最佳欧洲景点',
  description: '你从布拉索夫老城那条著名的共和街拐过来，一抬头，它就在那里——不是想象中的那种洁白神圣，而是一种沉静的、近乎威严的深灰与墨黑。那种黑，不是油漆，是历史本身烧灼后留下的疤痕。阳光很好，打在广场彩色的文艺复兴风格房屋外墙上，明快又活泼，但这座教堂就像一位沉默的、穿着深色长袍的老者，静静地看着眼前几个世纪...',
}

export default function BlackChurchBrasovPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '布拉索夫黑教堂', href: '/attractions/black-church-brasov' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布拉索夫黑教堂・Black Church of Brasov・罗马尼亚・布拉索夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从布拉索夫老城那条著名的共和街拐过来，一抬头，它就在那里——不是想象中的那种洁白神圣，而是一种沉静的、近乎威严的深灰与墨黑。那种黑，不是油漆，是历史本身烧灼后留下的疤痕。阳光很好，打在广场彩色的文艺复兴风格房屋外墙上，明快又活泼，但这座教堂就像一位沉默的、穿着深色长袍的老者，静静地看着眼前几个世纪的人来人往。空气里有咖啡香，有游客的低语，但当你走近那扇厚重的木门，一种混合着古老木头、陈年织物和一丝清冷石头的气息扑面而来，瞬间就把外面的喧嚣隔开了。
走进中殿，光线陡然变暗，你的眼睛需要几秒钟适应。然后，你会被那种向上的力量所攫取。高耸的肋状拱顶如同巨树的枝干，在头顶无尽延伸，最终消失在阴影里。柱子是粗砺的，上面没有繁复的雕刻，只有哥特式建筑那种纯粹的、指向苍穹的线条感。这里很安静，静到你几乎能听到灰尘在从彩色玻璃窗透进来的光束中缓缓飘落的声音。但你知道吗？这种静是“满”的，里面填满了管风琴金属音管的低沉吟唱、几个世纪以来信徒的祈祷、还有大火燃烧时木梁爆裂的遥远回响。它不是一座死去的建筑，每个周末，悠扬的圣歌依然会在这里回荡。
最动人的，是看到当地人如何对待它。它不仅仅是景点。你会看到一位穿着朴素的老太太，静静地坐在长椅上，握着念珠，阳光在她花白的头发上镀了一层金边。你会看到年轻的学生，仰着头，仔细辨认着墙上某块石碑上古老的拉丁文铭刻。教堂外的小广场，是孩子们的游乐场，是恋人们约会碰头的老地方。这座“黑教堂”，早已褪去了纯粹的宗教外壳，深深地织进了布拉索夫这座城市日常生活的肌理里。它的核心魅力，就在于这种反差——外表是烈火与苦难留下的粗粝黑色印记，内里却守护着无与伦比的精致艺术（比如那些华丽的地毯），以及人们平静的、持续不断的信仰与生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从布拉索夫老城那条著名的共和街拐过来，一抬头，它就在那里——不是想象中的那种洁白神圣，而是一种沉静的、近乎威严的深灰与墨黑。那种黑，不是油漆，是历史本身烧灼后留下的疤痕。阳光很好，打在广场彩色的文艺复兴风格房屋外墙上，明快又活泼，但这座教堂就像一位沉默的、穿着深色长袍的老者，静静地看着眼前几个世纪的人来人往。空气里有咖啡香，有游客的低语，但当你走近那扇厚重的木门，一种混合着古老木头、陈年织物和一丝清冷石头的气息扑面而来，瞬间就把外面的喧嚣隔开了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进中殿，光线陡然变暗，你的眼睛需要几秒钟适应。然后，你会被那种向上的力量所攫取。高耸的肋状拱顶如同巨树的枝干，在头顶无尽延伸，最终消失在阴影里。柱子是粗砺的，上面没有繁复的雕刻，只有哥特式建筑那种纯粹的、指向苍穹的线条感。这里很安静，静到你几乎能听到灰尘在从彩色玻璃窗透进来的光束中缓缓飘落的声音。但你知道吗？这种静是“满”的，里面填满了管风琴金属音管的低沉吟唱、几个世纪以来信徒的祈祷、还有大火燃烧时木梁爆裂的遥远回响。它不是一座死去的建筑，每个周末，悠扬的圣歌依然会在这里回荡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的，是看到当地人如何对待它。它不仅仅是景点。你会看到一位穿着朴素的老太太，静静地坐在长椅上，握着念珠，阳光在她花白的头发上镀了一层金边。你会看到年轻的学生，仰着头，仔细辨认着墙上某块石碑上古老的拉丁文铭刻。教堂外的小广场，是孩子们的游乐场，是恋人们约会碰头的老地方。这座“黑教堂”，早已褪去了纯粹的宗教外壳，深深地织进了布拉索夫这座城市日常生活的肌理里。它的核心魅力，就在于这种反差——外表是烈火与苦难留下的粗粝黑色印记，内里却守护着无与伦比的精致艺术（比如那些华丽的地毯），以及人们平静的、持续不断的信仰与生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布拉索夫黑教堂`} />
                <InfoRow label="英文名称" value={`Black Church of Brasov`} />
                <InfoRow label="正式名称" value={`Black Church of Brasov`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`布拉索夫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`特兰西瓦尼亚地区最大、最重要的哥特式路德宗教堂，见证了布拉索夫作为“撒克逊七城堡”之一的核心商贸地位与数百年的风雨变迁。`} />
                <InfoRow label="建筑特色" value={`因1689年一场毁灭性的大火，其外墙被浓烟熏成深色，由此得名“黑教堂”，拥有中欧最大、最重的教堂管风琴和珍贵的东方地毯收藏。`} />
                <InfoRow label="建筑风格" value={`晚期哥特式风格为主，融合了部分巴洛克式内部装饰元素。`} />
                <InfoRow label="文化价值" value={`是德国撒克逊移民文化、匈牙利王权、奥斯曼帝国影响与罗马尼亚本土精神在这片土地上共生与交融的活态纪念碑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至10月）：周一闭馆，周二至周六上午10:00至下午5:00，周日下午12:00至下午5:00。冬季（11月至3月）：周一闭馆，周二至周六上午10:00至下午3:30，周日下午12:00至下午3:30。请注意，教堂内举行宗教仪式或音乐会期间可能临时关闭部分区域或调整开放时间，建议出发前在其官方网站查看最新公告。每年圣诞节和复活节期间开放时间有特殊调整。`} />
              <InfoRow label="门票价格" value={`成人票：15罗马尼亚列伊（约3欧元）。学生票（需持有效国际学生证）：10罗马尼亚列伊。7岁以下儿童免费。持有布拉索夫城市卡可享受9折优惠。门票包含进入主教堂、小型博物馆区域及导览手册（多种语言可选）。请注意，教堂内部拍照需单独购买摄影许可（约10列伊），但手机拍照通常被允许。`} />
              <InfoRow label="地址" value={`Curtea Johannes Honterus 2, Brașov 500025, Romania`} />
              <InfoRow label="交通方式" value={`布拉索夫本身没有大型国际机场。最近的主要国际机场是布加勒斯特的亨利·科安德国际机场（OTP）。从布加勒斯特机场出发，最佳方式是乘坐火车或巴士前往布拉索夫。在机场乘坐火车需先搭乘机场快线或出租车到布加勒斯特北站（Gara de Nord），车程约30-40分钟。从布加勒斯特北站到布拉索夫火车站（Gara Brașov）的火车班次频繁，约每1-2小时一班，车程约2.5至3.5小时（快车/慢车差异），建议提前在罗马尼亚铁路官网购买车票以确保座位。抵达布拉索夫火车站后，黑教堂位于老城中心，步行是最佳方式。从火车站出口径直向西，穿过公园和共和国街（Strada Republicii），步行约15-20分钟即可抵达教堂广场。城内也有公交线路可达，但步行才能真正感受这座中世纪古城的魅力。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从中世纪的特兰西瓦尼亚讲起。那时候，这里可不是罗马尼亚人的天下，而是匈牙利王国的东部边疆。为了保卫边疆、发展经济，匈牙利国王从12世纪开始，引进了大批被称为“特兰西瓦尼亚撒克逊人”的德语移民。这些勤劳又精于贸易的撒克逊人，在喀尔巴阡山脚下建立了七座坚固的城堡城市，布拉索夫就是其中最繁荣、最强大的一座。到了14世纪末，富裕的撒克逊社区决定，他们要建造一座配得上自己财富和信仰的宏伟教堂。于是，在原来一座更小教堂的基址上，他们开始了一项长达一个多世纪的工程。用的都是本地最好的石材，请来的工匠融合了来自德国、波西米亚和本地的技艺。想象一下，在那个没有机械的年代，一块块巨石被运来，一点点垒砌成指向天空的尖拱和飞扶壁，那不仅是建筑，更是一个新兴市民阶级雄心勃勃的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂的命運在1689年徹底改變。那一年，哈布斯堡王朝的軍隊正在與奧斯曼帝國交戰，戰火波及了布拉索夫。一場原因至今眾說紛紜的大火席卷了整個老城，這座尚未完全竣工（塔樓部分還在修建）的教堂成了重災區。木質的屋頂結構、長椅、祭壇……几乎一切可以燃烧的东西都化为了灰烬。大火烧了多久，没人说得清，但当浓烟散去，人们看到原本浅色的石灰岩外墙，被熏染成了一片触目惊心的焦黑色。这场灾难几乎摧毁了这座城市的精神象征。然而，布拉索夫人没有放弃。在随后的几十年里，他们用惊人的毅力开始了重建。资金来自社区的捐赠，来自贸易的利润。重建没有简单地复原，而是融入了新的时代风格——巴洛克元素被小心翼翼地添加进来，比如那个华丽的主祭坛。而教堂的外墙，人们决定保留那层黑色。为什么不呢？这黑色是伤疤，是记忆，是这座城市历经劫难却依然屹立不倒的最有力证明。“黑教堂”的名字，从此不胫而走，从一個悲劇的暱稱，變成了驕傲的標誌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大火虽然毁掉了许多珍宝，却也阴差阳错地让另一些瑰宝更加耀眼。其中最传奇的，莫过于那架巨大的管风琴。它是由著名管风琴制造师布赫holz在19世纪打造的，拥有惊人的4000根音管和4排手鍵盤。当乐师演奏时，低沉浑厚的低音能让你感觉胸腔都在共鸣，清脆如铃的高音则仿佛来自天堂。它不仅是乐器，更是工程学的奇迹，至今仍是中欧最重、最大的教堂管风琴之一。另一个宝藏，是教堂侧廊里悬挂的一系列安纳托利亚地毯。这些精美的东方织物，是当时富有的撒克逊商人从奥斯曼帝国贸易得来的珍贵商品。他们将这些价值连城的地毯捐赠给教堂，不是为了铺地，而是用来装饰冰冷的石墙，既显示虔诚，也炫耀财富与品味。这些来自“异教徒”世界的艺术品，能悬挂在基督教教堂里，本身就是一个关于贸易、文化交流与实用主义的有趣注脚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，黑教堂见证了这个地区更加剧烈的风云变幻。两次世界大战的炮火在它身边轰鸣，政權更迭，布拉索夫的主体人口也从撒克逊人逐渐变成了罗马尼亚人。二战后，大部分德裔撒克逊人离开了这里，但黑教堂作为路德宗教堂的功能却奇迹般地保留了下来，即使在齐奥塞斯库时期也未遭严重破坏。它像一个中立的观察者，看着帝国兴起又衰落，看着民族来来去去，而它本身，已经从一座单纯的“德国人的教堂”，演变成了属于所有布拉索夫人、所有罗马尼亚人，乃至所有来访者的共同文化遗产。今天，当你触摸它黑色的墙壁，你触摸的不再仅仅是德国撒克逊的历史，而是层层叠加的匈牙利、奥斯曼、罗马尼亚文化烙印，是火灾、战争与重建的生命循环，是一首用石头、音乐和信仰写成的，关于坚韧与共生的厚重史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味黑教堂，请务必安排一个完整的上午或午后。建议在开放后一小时左右抵达（比如夏季的11点），这时晨间的旅游团尚未涌入，光线也从东侧逐渐照亮教堂内部，气氛最为清静神圣。整体游览建议预留至少2-3小时，节奏宜慢不宜快。先从外部开始，感受它的整体气势与广场氛围，再进入内部进行深度探索，最后在周边小巷漫步消化所见所感。这样的顺序能让你由远及近、由表及里地建立起对这座建筑的立体认知，避免一进门就被宏伟的内部冲击而忽略了外部细节。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日中午前后常有礼拜活动，虽然可以参观但请保持绝对安静并避免在仪式区域走动，如果想获得完整安静的游览体验请避开这个时间段。教堂内部地面是古老的石砖，有些地方不平，建议穿一双舒适防滑的鞋子。注意教堂内禁止使用闪光灯和三脚架（除非获得特别许可），手机静音是基本的尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`迎着清晨第一缕阳光走进老城广场，你会看到那座黑色的巨人沉默地矗立在彩色房屋的尽头，先别急着进去，绕到它的东侧端详一下那座被脚手架和岁月共同塑造的高耸塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门那扇厚重的、带有精美铁艺装饰的木门进入中殿，立刻在门内的长椅上坐几分钟，让你的眼睛适应昏暗，也让感官慢慢接收这里独有的混合着历史尘埃与木头清香的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着右侧的侧廊缓缓前行，仰头仔细欣赏那些悬挂在石墙上的、色彩依旧鲜艳的土耳其安纳托利亚地毯，想象几个世纪前载着它们的商队穿越巴尔干山脉的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到教堂最深处的主祭坛前，抬头仰望那精美的巴洛克式华盖，然后留意祭坛附近地面上的特殊墓石板，上面刻着早已模糊的家族纹章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着指示牌找到那架巨大的布赫霍尔茨管风琴，试着想象它在周日礼拜或音乐会期间轰鸣作响时，整个石造空间随之共振的磅礴气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了参观侧翼的小型博物馆，那里陈列着从火灾废墟中抢救出来的中世纪石雕碎片和古老的宗教器皿，它们是灾难的亲历者。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主建筑后，到教堂南侧外壁下寻找那个著名的“流浪儿雕像”，触摸一下他被无数旅人摸得发亮的头顶，听当地人说这会带来重返布拉索夫的运气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，穿过广场，在对面的咖啡馆找一个露天座位，点一杯浓郁的罗马尼亚咖啡，从这个最佳视角再次静静凝视黑教堂的全貌，让所有印象在脑海中沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂广场东南角咖啡馆的露台`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光会以侧光勾勒出教堂黑色立面的质感，将广场上的行人和咖啡桌作为前景，能拍出极具生活气息和层次感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂内部中殿的尽头回望正门`}</h4>
                  <p className="text-sm text-gray-700">{`选择在上午十一点左右，当阳光从正门上方的高窗射入，在空气中形成清晰的光柱，站在主祭坛附近向门口拍摄，能捕捉到光影切割昏暗空间的神圣戏剧性场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`侧廊仰拍彩色玻璃窗与地毯`}</h4>
                  <p className="text-sm text-gray-700">{`利用窗户透入的彩色光线作为光源，聚焦于某一幅悬挂的地毯细节，将古老的石墙和拱顶作为模糊背景，能拍出充满历史质感和色彩对比的静物特写。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂北侧的小巷`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点前，这条小巷通常安静无人，从这里仰拍教堂巨大的飞扶壁和布满岁月痕迹的黑色石墙，可以避开人群，获得一张充满建筑力量感和孤独氛围的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`寻找外部墙上的“面包师标记”`}</h4>
                  <p className="text-sm text-gray-700">{`在教堂外壁的石砖上，仔细寻找那些中世纪石匠和行会留下的特殊符号标记，用微距镜头拍摄这些沧桑的刻痕，是记录建筑背后人文故事的精妙角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄请务必关闭闪光灯，不仅出于礼貌，也因为闪光会彻底破坏这里幽暗神圣的自然氛围，高感光度和稳定手持是关键。拍摄当地人或是正在祈祷的信徒时，请先征得对方同意，或使用长焦镜头在不打扰的前提下捕捉氛围。罗马尼亚的日照在夏季非常强烈，正午时分教堂外部黑白对比过于生硬，并非最佳拍摄时间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏的历史公寓`}</h4>
                  <p className="text-sm text-blue-800">{`推开窗就是黑教堂的塔楼，清晨在管风琴隐约的试音声中醒来，晚上看着灯光为黑色外墙镀上金边，感觉自己成了中世纪故事的居民。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特兰西瓦尼亚风情精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋撒克逊商人老宅改造，房间里有裸露的原始木梁和古董家具，步行到教堂只需三分钟，并提供地道的本地早餐，包括香甜的“帕帕纳西”奶酪甜品。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`舒适经济的家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一个安静的庭院内，由一对热情的罗马尼亚老夫妇经营，房间干净温馨，主人会给你手绘地图并讲述他们童年记忆中黑教堂的故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山林景观设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在坦帕山脚下，距离老城步行约15分钟，房间拥有巨大的玻璃窗直面山林，在喧嚣的游览之后，这里能提供绝对的宁静与充满绿意的休憩。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布拉索夫老城中心区域非常安全，夜晚散步氛围很好，但预订时请注意有些古老建筑的房间窗户隔音可能一般，对声音敏感者可以选择庭院内侧的房间。夏季和圣诞集市期间是绝对旺季，务必提前数月预订。如果想体验当地生活，老城外围步行可达的住宅区也有不少优质的民宿选择，价格更实惠。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布拉索夫很久以后，我脑海里最清晰的画面，不是某一块具体的地毯，也不是管风琴的某一个音符，而是那一片沉静而包容的黑色。它不像很多光鲜亮丽的教堂那样，试图用辉煌直接将你征服。它更像一位历经沧桑的智者，不急于诉说，只是静静地在那里，等着你走近，去阅读它身上每一道火焰的纹路、每一处风雨的凿痕。这种魅力是慢热的，是深沉的，需要你付出一点时间和耐心，才能与之对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、滤镜美景的时代，黑教堂提供了一种截然不同的旅行价值。它告诉我们，美不一定是完美无瑕的，力量可以来自伤疤，永恒可能源于一次毁灭后的重生。它矗立在东西方文化的十字路口，身上叠加着德语、匈牙利语、罗马尼亚语的历史层积，却最终成为了一个超越民族的、属于所有人的精神地标。每一位热爱深度游的旅人都该来感受一下，在喀尔巴阡山的微风里，触摸这片温暖的黑色。它会让你明白，真正的文化遗产，从来不是玻璃罩里的标本，而是一棵即使被雷火劈中过，却依然向着天空生长，并且让鸟儿继续在枝头歌唱的、活生生的树。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trier-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔主教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/craiova" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Craiova</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-craiova" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town Craiova</p>
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
