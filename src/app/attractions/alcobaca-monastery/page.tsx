import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔科巴萨修道院 Alcobaça Monastery｜见证葡萄牙最凄美王室爱情与最纯粹哥特建筑 - 最佳欧洲景点',
  description: '当你从阿尔科巴萨小镇那些挂着晾晒衣物的朴素民居间拐出来，突然直面它那两座高耸的塔楼和宽阔的淡金色石砌立面时，那种感觉不是惊艳，而是一种沉静的威严。它不像后来那些巴洛克教堂那样急着向你炫耀什么，只是静静地伫立在那里，像一位沉默的巨人。推开厚重木门走进中殿的瞬间，声音仿佛被吸走了，你会忍不住倒吸一口凉气...',
}

export default function AlcobacaMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '阿尔科巴萨修道院', href: '/attractions/alcobaca-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔科巴萨修道院・Alcobaça Monastery・葡萄牙・阿尔科巴萨镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从阿尔科巴萨小镇那些挂着晾晒衣物的朴素民居间拐出来，突然直面它那两座高耸的塔楼和宽阔的淡金色石砌立面时，那种感觉不是惊艳，而是一种沉静的威严。它不像后来那些巴洛克教堂那样急着向你炫耀什么，只是静静地伫立在那里，像一位沉默的巨人。推开厚重木门走进中殿的瞬间，声音仿佛被吸走了，你会忍不住倒吸一口凉气——不是因为装饰，恰恰是因为毫无装饰。你的目光被一股无形的力量牵引着，沿着世界上最高的哥特式拱顶之一，一直望向祭坛尽头那束从玫瑰花窗透下的、仿佛带着灰尘跳舞的光柱。空气里有股好闻的旧石头和木头混合的凉意，还有一丝极其微弱的、来自遥远年代的蜡油气息。
这里不只是游客的景点。你会看到一两个本地老人，独自坐在长椅上，对着空荡荡的祭坛发呆，一坐就是好久。对他们来说，这里就像社区里一个巨大的、神圣的客厅，是呼吸的一部分。周末弥撒时，管风琴的声音填满这个巨大空间，那种共鸣会让你觉得自己的肋骨都在微微震颤。而最动人的，往往是那些不经意的角落：回廊里一个被修士的脚步磨得中间凹陷的石阶；厨房窗外，小镇居民晾晒的彩色床单在微风里飘动，与院内永恒的肃穆形成奇妙的对话。
但这座修道院最核心的魔力，在于它承载了一个国家最深情也最黑暗的秘密。它不是关于神权的炫示，而是关于人类情感的极致——爱与死亡、忠诚与复仇。当你站在那两具精美的石棺前，看着上面相向而卧的雕像，你会突然明白，这整个宏大、空旷、冰冷的石头世界，其实是为了守护一个温暖的、属于两个人的故事。这种反差，是任何艺术都无法复制的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从阿尔科巴萨小镇那些挂着晾晒衣物的朴素民居间拐出来，突然直面它那两座高耸的塔楼和宽阔的淡金色石砌立面时，那种感觉不是惊艳，而是一种沉静的威严。它不像后来那些巴洛克教堂那样急着向你炫耀什么，只是静静地伫立在那里，像一位沉默的巨人。推开厚重木门走进中殿的瞬间，声音仿佛被吸走了，你会忍不住倒吸一口凉气——不是因为装饰，恰恰是因为毫无装饰。你的目光被一股无形的力量牵引着，沿着世界上最高的哥特式拱顶之一，一直望向祭坛尽头那束从玫瑰花窗透下的、仿佛带着灰尘跳舞的光柱。空气里有股好闻的旧石头和木头混合的凉意，还有一丝极其微弱的、来自遥远年代的蜡油气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不只是游客的景点。你会看到一两个本地老人，独自坐在长椅上，对着空荡荡的祭坛发呆，一坐就是好久。对他们来说，这里就像社区里一个巨大的、神圣的客厅，是呼吸的一部分。周末弥撒时，管风琴的声音填满这个巨大空间，那种共鸣会让你觉得自己的肋骨都在微微震颤。而最动人的，往往是那些不经意的角落：回廊里一个被修士的脚步磨得中间凹陷的石阶；厨房窗外，小镇居民晾晒的彩色床单在微风里飘动，与院内永恒的肃穆形成奇妙的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但这座修道院最核心的魔力，在于它承载了一个国家最深情也最黑暗的秘密。它不是关于神权的炫示，而是关于人类情感的极致——爱与死亡、忠诚与复仇。当你站在那两具精美的石棺前，看着上面相向而卧的雕像，你会突然明白，这整个宏大、空旷、冰冷的石头世界，其实是为了守护一个温暖的、属于两个人的故事。这种反差，是任何艺术都无法复制的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔科巴萨修道院`} />
                <InfoRow label="英文名称" value={`Alcobaça Monastery`} />
                <InfoRow label="正式名称" value={`Alcobaça Monastery`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`阿尔科巴萨镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙第一座哥特式建筑，其建立直接关联葡萄牙王国的巩固与天主教西多会在此地的精神统治。`} />
                <InfoRow label="建筑特色" value={`以惊人的尺度、极简的线条和纯粹的空间感震撼人心，尤其是其巨型的教堂中殿和庞大的修道院附属建筑群。`} />
                <InfoRow label="建筑风格" value={`早期哥特式风格，深受法国西多会建筑理念影响，摒弃繁复装饰，强调空间、光线与结构的和谐。`} />
                <InfoRow label="文化价值" value={`不仅是宗教建筑的杰作，更是葡萄牙国家身份与一段刻骨铭心爱情悲剧的永恒载体。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至10月）开放时间为每天上午9:00至晚上7:00，最后入场时间为下午6:30。
冬季（11月至次年3月）开放时间为每天上午9:00至傍晚6:00，最后入场时间为下午5:30。
修道院于1月1日、复活节周日、5月1日及12月25日全天闭馆。
请注意，部分附属区域（如旧宿舍区）的开放时间可能略有缩短，建议行前在官网复核。`} />
              <InfoRow label="门票价格" value={`标准门票为6欧元。
65岁以上长者及持有效学生证者享5折优惠，票价为3欧元。
12岁以下儿童免费入场。
持有“葡萄牙遗产通票”者可免费进入。
家庭票（2位成人+2位未成年人）价格为15欧元。
每月第一个周日对所有游客免费开放（如遇节假日顺延）。`} />
              <InfoRow label="地址" value={`Praça 25 de Abril, 2460-018 Alcobaça, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发最为便捷。在里斯本的圣阿波洛尼亚火车站或东方火车站乘坐直达阿尔科巴萨镇的区间火车，车程约为2小时，班次频率约为每2-3小时一班，建议提前在葡萄牙铁路官网购买车票以获取折扣。
若选择自驾，从里斯本沿A8高速公路向北，在阿尔科巴萨出口驶出，再跟随“Mosteiro”棕色旅游指示牌行驶约10分钟即可抵达，修道院附近有付费停车场。
从最近的机场里斯本机场出发，可先乘坐地铁或出租车至上述火车站，总耗时约3小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从12世纪说起，那时的葡萄牙还是一个正在摇篮里挣扎的新生王国。第一位国王阿方索·恩里克斯刚刚从摩尔人手中夺回大片土地，他急需一种强大的精神力量来巩固统治，并“文明化”这片边疆。于是，他做出了一个重大决定：将阿尔科巴萨这片富饶的土地赠予西多会。这不是普通的捐赠，这是一个战略盟约。西多会的修士们以纪律严明、学识渊博和擅长农业垦殖闻名，他们不仅是上帝的仆人，更是国王的“文化拓荒队”。1153年，修道院的奠基不仅仅是一座建筑的开始，更是葡萄牙将自己的灵魂与欧洲大陆天主教核心紧密相连的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的建筑工事缓慢而坚定，就像修士们的祈祷。他们从法国勃艮第地区引进了最纯粹的西多会建筑理念，也就是早期哥特式的风格。这意味着什么？意味着拒绝彩色玻璃，拒绝夸张的雕塑，拒绝一切他们认为会干扰与上帝直接沟通的“浮华”。他们要的是高度、是光线、是比例、是那种让人一走进去就心生敬畏、自觉渺小的空间感。当你今天仰望中殿那28米高的拱顶，你会发现上面几乎没有任何装饰，只有石头本身形成的、指向天堂的完美线条。这种极简，在13世纪那个年代，是一种大胆到近乎激进的美学宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让这座修道院永远烙印在葡萄牙人心中的，不是这些建筑成就，而是一段发生在14世纪的爱情悲剧。王子佩德罗（后来的佩德罗一世）爱上了他妻子来自西班牙的侍女伊内斯·德·卡斯特罗。这段禁忌之恋如火如荼，并生下了孩子。老国王阿方索四世深感恐惧，担心伊内斯的家族势力会影响葡萄牙王位继承，引发与卡斯蒂利亚王国的战争。在政治权衡下，国王趁佩德罗外出时，在科英布拉处决了伊内斯。据说，当佩德罗回来发现挚爱惨死，他的悲愤撼动了整个王国。数年后，当他终于登上王位，他做了一件惊世骇俗的事：他为伊内斯举行了盛大的追封王后仪式，并命令所有朝臣亲吻她已腐尸的手以示效忠。然后，他将伊内斯迁葬到了阿尔科巴萨修道院，并为自己预订了旁边的位置，下令雕刻了两座精美绝伦的石棺，脚对脚放置，这样当末日审判来临，他们复活坐起的第一眼，看到的就会是彼此。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`修道院的历史并非一直如此浪漫。它的权势在15、16世纪达到顶峰，拥有大片土地和巨大影响力，甚至设立了著名的修道院学校。但好景不长，1834年，葡萄牙所有修道院都被解散，阿尔科巴萨也未能幸免。它被洗劫、被忽视，甚至一度沦为市集、剧院和牛棚。那些华丽的手稿被撕毁，精美的雕塑被破坏。它就像一个被遗弃的巨人，在风雨中逐渐衰败。直到20世纪初，人们才重新认识到它的价值，开始了漫长而细致的修复。1998年，它被联合国教科文组织列为世界遗产，这不仅仅是对其建筑之美的肯定，更是对它作为葡萄牙民族情感与记忆基石地位的加冕。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在上午10点前抵达，这时大型旅游巴士还未涌入，你能享受修道院最宁静的晨间氛围。整个深度游览需要至少3到3.5小时，节奏宜慢不宜快。我们的路线将从外部广场的宏观感受开始，然后进入建筑内部，从最震撼的中殿逐步深入到最生活化的区域，最后以那段爱情悲剧的高潮作为终点。这样的安排能让你逐步从建筑的宏大叙事过渡到人性的细腻情感，体验会更有层次和深度。请务必留出至少30分钟，什么也不做，就静静地坐在回廊或中殿里发呆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开周三和周六的上午，这是当地学校组织和周边市场游客最多的时间段。
进入教堂和所有宗教区域时，请保持低声交谈，并穿着得体，避免过于暴露的服装。
修道院内部地面多为古老石砖，有些地方光滑不平，建议穿着舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从教堂正前方广场的长椅上坐一会儿，观察阳光如何一点点爬上那巨大的玫瑰窗和石雕门楣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开吱呀作响的巨门步入中殿，立刻在入口处站定几分钟，让你的眼睛和心灵适应这无与伦比的垂直空间与绝对的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北侧漫步至耳堂，仔细端详那些虽不华丽但刻画生动的文艺复兴时期雕塑与祭坛画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要穿过圣器室后方那不起眼的小门，闯入如宫殿般宏伟的国王厅，想象当年修士在此招待王室贵宾的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌走进整个修道院的心脏——沉默回廊，用手指触摸那些曼努埃尔式风格的精致石雕窗花，并留意柱子底座上有趣的浮雕故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从回廊一侧的拱门进入会让你惊掉下巴的巨型厨房，抬头看那中央烟囱以及引河水穿堂而过用于清洁和冷却食物的水槽设计。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，怀着一颗准备好的心，走下几级台阶进入创始人礼拜堂，在昏暗的光线里，面对面地凝视那两具承载了无尽传说的石棺。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中殿入口仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光从正门上方窗户斜射入内，站在中殿开头蹲下低角度拍摄，可以将两侧巨柱、高耸的拱顶和尽头祭坛的光束全部纳入镜头，形成强烈的纵深感与神圣感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`沉默回廊的几何构图`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光将回廊的拱廊影子投射在地面时，选择一个角落，聚焦于一层层重复的拱门与廊柱，利用黑白模式能拍出极具抽象美和韵律感的建筑大片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`厨房烟囱的仰望视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在厨房正中央抬头，用超广角镜头将巨大的锥形烟囱口和它周围被熏黑的石墙一起拍下，能完美展现这个空间的工业感尺度与戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`创始人礼拜堂的石棺侧影`}</h4>
                  <p className="text-sm text-gray-700">{`利用礼拜堂内昏暗的天然光线，避开直接照明，从侧面拍摄佩德罗与伊内斯石棺的轮廓，重点捕捉他们“相视而眠”的姿态与石棺上细腻的雕刻细节，营造忧伤而永恒的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内允许不使用闪光灯的摄影，但请绝对尊重正在祷告或沉思的他人，保持安静。`}</li>
                <li>• {`尝试捕捉光影对比，早期哥特式建筑的精髓在于光线在朴素石壁上的舞蹈，而非丰富的色彩。`}</li>
                <li>• {`在创始人礼拜堂拍摄时，请保持庄重，避免为了拍照而越过围栏或做出不敬的姿势。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古镇风情`}</h4>
                  <p className="text-sm text-blue-800">{`入住修道院步行五分钟内的老城区石屋客栈，房间天花板还保留着原始的木梁，晚上能听到广场上轻柔的吉他声，清晨被面包店的香气唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在阿尔科巴萨周边葡萄园与小丘陵间的乡村民宿，主人会热情邀请你品尝自酿的樱桃利口酒，并在露台上享用一顿能看到修道院尖顶的农家早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由一座19世纪贵族宅邸改造的精品酒店，房间宽敞且装饰着古典家具，酒店本身的花园就值得探索，仿佛住进了一部老电影。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高级农庄体验`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十五分钟前往附近山区的豪华农庄酒店，享受无边泳池、水疗中心和以当地食材烹制的米其林推荐美食，将一天的历史厚重感在静谧的自然中彻底融化。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔科巴萨镇本身很小，治安良好，夜晚非常安静。若追求更多餐厅和夜生活选择，可考虑住在车程半小时的海滨小镇纳扎雷，但会失去清晨独占修道院的清幽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旅游旺季（6月至9月）住宿相当紧俏，尤其是周末，务必提前数周甚至数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择乡村住宿时最好有自驾车，否则夜间交通会非常不便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔科巴萨修道院很久以后，我脑海中挥之不去的，不是那高耸的拱顶，也不是厨房惊人的烟囱，而是那份巨大的“空”里所盛满的“满”。它用石头写就了一首关于“少即是多”的史诗。在这个我们被信息、装饰和娱乐过度填充的时代，走进这样一个主动剥离了一切冗余的空间，本身就是一种精神上的深呼吸。它强迫你停下来，安静下来，与自己独处。那种空旷不是贫乏，而是一种富足，它为你自己的思考和情感腾出了地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这不仅仅是一座值得建筑爱好者朝圣的教堂，也不仅仅是历史迷探寻一段悲情罗曼史的目的地。它是一个能让任何现代人获得片刻“清醒”的地方。在这里，你能触摸到时间的重量，不是以轻盈的方式，而是以那种切实的、石头的质感。你能感受到，人类的两种最强大的力量——对信仰的追求与对爱情的执着——如何跨越八个世纪，依然在这四壁间剧烈地共振。它提醒我们，有些故事如此强烈，以至于需要一整座山脉般的石头来安放；有些情感如此纯粹，以至于任何华丽的装饰都是对它的打扰。阿尔科巴萨修道院，就是用这样一种沉默而庄严的方式，守护着葡萄牙的灵魂深处，那份最极致的简单与最复杂的深情。这趟旅程，是一次对眼睛的洗礼，更是对心灵的一次重访。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra Old Town</p>
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
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
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
