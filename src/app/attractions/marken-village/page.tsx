import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马肯 Marken｜探访“漂浮”在艾瑟尔湖上的童话渔村与绿黑色高脚屋 - 最佳欧洲景点',
  description: '车子驶过那条长长的堤坝，世界突然就安静了下来。左边是开阔如海面、泛着银灰色光泽的艾瑟尔湖，右边是整齐划一的草甸和缓缓转动的古老风车。然后，一片浓烈的色彩就撞进了眼里——不是五彩斑斓，而是一种深沉、稳重的绿与黑。一排排尖顶的木屋子，像一群踩着高跷的、穿着墨绿礼服的绅士，稳稳地站在水边，它们的倒影在平静',
}

export default function MarkenVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马肯', href: '/attractions/marken-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马肯・Marken・荷兰・马肯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶过那条长长的堤坝，世界突然就安静了下来。左边是开阔如海面、泛着银灰色光泽的艾瑟尔湖，右边是整齐划一的草甸和缓缓转动的古老风车。然后，一片浓烈的色彩就撞进了眼里——不是五彩斑斓，而是一种深沉、稳重的绿与黑。一排排尖顶的木屋子，像一群踩着高跷的、穿着墨绿礼服的绅士，稳稳地站在水边，它们的倒影在平静的港湾里微微颤动。这就是马肯给我的第一眼印象，不像真实的村落，倒像从某本泛黄的童话书里直接剪下来的立体插画。
关上车门，一股混合着湖水微腥、湿润木头和淡淡油漆味的气息扑面而来。耳边安静得能听见风穿过屋角旗杆的细微声响，以及远处几声慵懒的海鸥鸣叫。脚下的路不是石板，而是厚厚的木栈道，走在上面发出“空空”的、敦实的回响。村里的居民不多，偶尔有老人骑着老式自行车慢悠悠地经过，车篮里装着刚买的面包。他们向我点头微笑，那种友善是疏离而平静的，仿佛我只是他们日复一日宁静生活中一个寻常的过客。这里的节奏不是“慢”，而是近乎凝固，时间在这里似乎还停留在几十年前，只有游客手中相机的咔嚓声，偶尔提醒着你外部的世界正在飞速旋转。
但这些高脚屋最打动我的，不是它们奇特的外形，而是其中蕴含的那种无比务实又充满智慧的生活哲学。你凑近看，会发现每栋房子的底部木桩都粗壮无比，有的因常年浸泡而颜色深暗。房子的主体被高高抬起，下面形成的空间以前用来停放小船、存放渔网，现在可能变成了车库或储物间。历史上，当北海的怒潮一次次淹没这片土地时，马肯人就是靠着这些木桩，把整个家“举”过了洪水。这不是为了美观的艺术创作，而是生死攸关的生存策略。如今洪水威胁不再，但这份刻在基因里的、对水的敬畏与周旋，却化成了眼前这道独一无二的风景线，沉默而骄傲地讲述着人与自然的古老故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶过那条长长的堤坝，世界突然就安静了下来。左边是开阔如海面、泛着银灰色光泽的艾瑟尔湖，右边是整齐划一的草甸和缓缓转动的古老风车。然后，一片浓烈的色彩就撞进了眼里——不是五彩斑斓，而是一种深沉、稳重的绿与黑。一排排尖顶的木屋子，像一群踩着高跷的、穿着墨绿礼服的绅士，稳稳地站在水边，它们的倒影在平静的港湾里微微颤动。这就是马肯给我的第一眼印象，不像真实的村落，倒像从某本泛黄的童话书里直接剪下来的立体插画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关上车门，一股混合着湖水微腥、湿润木头和淡淡油漆味的气息扑面而来。耳边安静得能听见风穿过屋角旗杆的细微声响，以及远处几声慵懒的海鸥鸣叫。脚下的路不是石板，而是厚厚的木栈道，走在上面发出“空空”的、敦实的回响。村里的居民不多，偶尔有老人骑着老式自行车慢悠悠地经过，车篮里装着刚买的面包。他们向我点头微笑，那种友善是疏离而平静的，仿佛我只是他们日复一日宁静生活中一个寻常的过客。这里的节奏不是“慢”，而是近乎凝固，时间在这里似乎还停留在几十年前，只有游客手中相机的咔嚓声，偶尔提醒着你外部的世界正在飞速旋转。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但这些高脚屋最打动我的，不是它们奇特的外形，而是其中蕴含的那种无比务实又充满智慧的生活哲学。你凑近看，会发现每栋房子的底部木桩都粗壮无比，有的因常年浸泡而颜色深暗。房子的主体被高高抬起，下面形成的空间以前用来停放小船、存放渔网，现在可能变成了车库或储物间。历史上，当北海的怒潮一次次淹没这片土地时，马肯人就是靠着这些木桩，把整个家“举”过了洪水。这不是为了美观的艺术创作，而是生死攸关的生存策略。如今洪水威胁不再，但这份刻在基因里的、对水的敬畏与周旋，却化成了眼前这道独一无二的风景线，沉默而骄傲地讲述着人与自然的古老故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马肯`} />
                <InfoRow label="英文名称" value={`Marken`} />
                <InfoRow label="正式名称" value={`Marken`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`马肯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个曾与世隔绝数个世纪的岛屿渔村，其独特的高脚屋建筑是荷兰人民数个世纪以来与水抗争、并最终和谐共存的鲜活见证。`} />
                <InfoRow label="建筑特色" value={`标志性的绿黑色木质高脚屋，房屋底部由木桩高高架起，外墙涂着传统的暗绿色与黑色涂料，宛如从水中生长出来的积木城堡。`} />
                <InfoRow label="建筑风格" value={`典型的荷兰传统渔村木结构建筑，兼具实用性与装饰性，其高脚设计是为了抵御历史上频繁的洪水侵袭。`} />
                <InfoRow label="文化价值" value={`一座保存完好的“活态”文化遗产博物馆，不仅在于建筑，更在于延续至今的社区生活、传统服饰文化以及坚韧的岛屿身份认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全天开放。内部的主要博物馆“马肯博物馆”（Het Marker Museum）及部分向公众开放的特色高脚屋，开放时间通常为每年4月至10月，上午10点至下午5点，周一可能闭馆。冬季开放时间缩短或仅周末开放。具体日期每年略有调整，建议行前查询官网。`} />
              <InfoRow label="门票价格" value={`进入马肯村庄免费。参观马肯博物馆成人票约6欧元，儿童优惠。部分有居民经营的小型家庭博物馆或手工作坊体验可能需要支付少量费用（通常2-5欧元）。乘坐从沃伦丹（Volendam）出发的观光渡轮需单独购票。`} />
              <InfoRow label="地址" value={`Marken, 1156, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹出发最为便捷。从阿姆斯特丹中央火车站（Amsterdam Centraal）乘坐316路或315路公交巴士（Connexxion公司运营），终点站即为马肯。车程约40分钟，班次频繁（约每15-30分钟一班），可使用OV-chipkaart（荷兰公共交通卡）或上车购票。自驾前往可将车停在村庄入口处的大型免费停车场（P Marken），随后步行进入。另一种浪漫的方式是从邻近的渔村沃伦丹（Volendam）乘坐观光船（Marken Express）抵达，航程约30分钟，可欣赏艾瑟尔湖（Ijsselmeer）风光。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解马肯，你得先想象一张13世纪的地图。那时候，这里根本不是一个半岛，而是散布在狂暴的须德海（Zuiderzee）南部的几个零星小岛。最早的定居者是一群极其顽强的渔民和农夫，他们选择这里，某种程度上是一种与世隔绝的自我放逐。大海给了他们丰饶的渔获，也带来了无情的灾难。风暴、洪水是家常便饭，一场大潮就可能卷走半年的收成和半数的牲畜。就是在这样严酷的环境里，马肯人发展出了独特的社区文化和高脚屋建筑。这些房子不仅是家，更是诺亚方舟。每当水位预警传来，他们只需把贵重物品搬到阁楼，然后静静等待洪水漫过一楼，等水退去，清扫一下泥泞，生活又能继续。这种与洪水共舞的智慧，塑造了马肯人独立、内向而又无比坚韧的性格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几个世纪里，马肯就像大海中一个自给自足的孤岛王国。他们有自己的方言、独特的女帽装饰和色彩斑斓的传统服饰，甚至在宗教信仰上也与邻近的沃伦丹等地有所不同，保持着更严谨的新教加尔文主义传统。渔业是唯一的经济命脉，男人们乘着小船出海捕鲱鱼、鳗鱼，女人们则在家织补渔网、腌制鱼肉。这种封闭性一直持续到19世纪。随着旅游业的萌芽，一些来自阿姆斯特丹等城市的画家和好奇的旅行者开始乘船造访这个“奇异”的岛屿。他们被这里宛如中世纪的风情所震撼，画作和游记流传开来，马肯逐渐成为荷兰“如画风情”的象征之一。然而，真正的巨变发生在20世纪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1932年，那个改变了荷兰北部地理与命运的宏大工程——阿夫鲁戴克拦海大坝（Afsluitdijk）合龙了。狂暴的须德海变成了平静的艾瑟尔湖，海水变为淡水。对马肯而言，这意味着一场平静的革命：肆虐的洪水威胁基本解除，但赖以生存的咸水渔业也几乎瞬间消亡。更关键的是，随着大坝建成，一条连接马肯与大陆的堤坝公路也在1957年贯通。马肯，这个当了700多年“岛”的地方，一夜之间变成了“半岛”。公路带来了便利，也带来了冲击。许多年轻人选择去大陆寻找新工作，人口开始外流。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`面对生存危机，马肯人展现了惊人的适应力。既然不能打渔了，那就“展示”打渔的生活。他们敏锐地抓住了旅游业这个新的生命线。但不是那种破坏性的开发，而是一种精心的“自我博物馆化”。许多家庭将自己的高脚屋保持原样，甚至更刻意地维护那些传统细节：擦亮铜质的门环，精心描绘窗框上的白色纹饰，在门前种满鲜艳的天竺葵。妇女们会在特定日子穿上代代相传的精致传统服装，那绣满花纹的紧身胸衣和巨大的白色蕾丝头饰，本身就是一道流动的风景。他们向游客展示的，不是一个死去的标本，而是一个依然在呼吸的社区。如今，走在马肯，你依然能看到老人在修补木船，主妇在擦拭窗玻璃，孩子们在木栈道上奔跑。旅游是生计，但生活本身，依然是这里不可动摇的基石。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间给马肯，最佳抵达时间是上午9点至10点，此时旅游团大军尚未涌入，晨光柔和，村庄刚刚苏醒，最能体会其静谧的本真面貌。整体的游览节奏应该是“慢”和“散漫”，不要把这里当成一个需要打卡的景点集合，而是当作一个可以沉浸式生活的社区。从停车场进入村庄后，可以花2-3小时毫无目的地在小巷和木栈道间穿梭，用眼睛和相机记录细节。午后参观核心的马肯博物馆，深入了解历史。随后前往港口区域，看船只和湖景。傍晚时分，当一日游的游客渐渐离去，村庄重归宁静，这时沿着堤坝散步看日落，会是全天的高光时刻。这样的安排能让你体验马肯从晨间宁静、日间热闹到傍晚安详的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末或荷兰公共假日前往，那时人流量会大得多，破坏体验。
村庄内部完全步行，且木栈道和桥梁较多，请务必穿着舒适防滑的鞋子。
请尊重当地居民的隐私，很多高脚屋仍是私人住宅，拍照时避免将镜头对准窗户或院内，保持礼貌距离。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场沿着木栈道慢慢走进村庄中心，让两旁童话般的绿黑色高脚屋从四面八方将你包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进那些仅容一人通过的狭窄小巷，抬头看纵横交错的屋梁和悬挂在窗边的花盆，寻找居民们精心打理的生活痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进马肯博物馆，那本身就是一栋古老的高脚屋，里面陈列着传统服饰、渔船模型和老照片，听管理员用带口音的英语讲述“大坝修通那天”的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到村庄边缘的港口，看色彩鲜艳的小渔船轻轻摇晃，远处的白色灯塔和开阔的湖面构成一幅宁静的油画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着钟声找到村里的新教教堂，它朴实无华，但教堂墓地里的墓碑讲述着几个世纪以来与海搏斗的家族历史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家面向港口的小咖啡馆，点一杯咖啡和一块厚厚的荷兰苹果派，坐在室外看鸭子游过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`尝试找到那些不对公众完全开放、但可以从外部仔细观察的高脚屋底部，想象洪水来时这里被淹没的样子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前走到连接大陆的堤坝上，回望整个马肯村庄，看夕阳给那些墨绿的屋顶镶上金边，灯火次第亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口木桥仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在通往港口的主木桥上，以低角度仰拍一排排高脚屋及其在水中的倒影，能获得极具对称感和纵深感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`中午阳光直射时，寻找那些狭窄的小巷，阳光会在高脚屋的木质墙面和栈道上切割出强烈的明暗对比，非常适合拍摄富有质感的细节和几何构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`堤坝全景俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`从村庄步行至连接大陆的堤坝中段，下午侧光时分，可以拍摄到马肯村庄整体镶嵌在艾瑟尔湖中的全景，带上湖面的波纹和天空的云彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`特色门廊与窗景`}</h4>
                  <p className="text-sm text-gray-700">{`随时留意那些装饰着精美白色窗框、铜质门环和爆盆鲜花的房屋门口，这些充满生活气息的局部特写最能体现马肯的精致。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`黄昏灯火氛围`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，村庄路灯和民居窗户透出暖黄色的光，此时在港口附近拍摄，能捕捉到冷暖色调对比、充满故事感的氛围照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏光镜（CPL）可以极大消除水面的反光，让高脚屋的倒影更加清晰通透，湖面颜色也更饱满。`}</li>
                <li>• {`马肯的天气变化很快，一片云过来光线就截然不同，耐心等待往往能拍到戏剧性的光影效果。`}</li>
                <li>• {`如果遇到居民穿着传统服装，想拍摄人像务必先征得对方同意，通常他们会欣然接受，但礼貌是第一位的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在马肯岛上仅有的几家民宿之一，这些民宿本身就是历史悠久的高脚屋，晚上游客散尽后，你能独享整个村庄的静谧，倾听湖水拍打木桩的声音。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`便捷渔村双城记`}</h4>
                  <p className="text-sm text-green-800">{`选择住在邻近的沃伦丹（Volendam），那里有更多酒店和餐馆选择，白天可以轻松乘船或驾车往返马肯，一次旅程体验两个风格迥异的传统渔村。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`都市探索基地`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在阿姆斯特丹市中心，乘坐早班巴士前来，晚上返回繁华都市，享受极致的古今与动静对比之旅。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色船屋体验`}</h4>
                  <p className="text-sm text-purple-800">{`在艾瑟尔湖周边寻找可以住宿的复古船屋，晚上泊在靠近马肯的港湾，从水上的独特视角欣赏村庄的夜景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马肯岛上的住宿非常稀少且热门，务必提前数月预订，尤其是在夏季旅游旺季。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在阿姆斯特丹，请计算好往返交通时间，确保有充足的时间在马肯漫游，避免匆忙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`无论住在哪里，体验一次当地的“鲱鱼三明治”或烟熏鳗鱼是必须的，这是品味马肯历史最直接的方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马肯很久以后，我脑海里反复出现的，不是某一张具体的明信片般的照片，而是一种感觉。那是一种脚踩在厚实木栈道上的安稳感，是看着那些被木桩高高托起的房子时，心里生出的奇特的敬佩与安宁。这里没有恢弘的教堂，没有藏满名画的博物馆，它的全部财富，就是这种被时间浸透的、实实在在的“生活智慧”。马肯人没有把洪水当作需要彻底征服的敌人，而是学会了如何与之共处，如何把致命的威胁，转化成自己家园最独特的标识。这种智慧，在今天我们这个热衷于“改造一切”、“战胜一切”的时代，显得尤为珍贵和富有启示。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，马肯绝不仅仅是一个“好看”的旅游村。它是一个关于韧性、适应和身份的寓言。它告诉我们，文化遗产最美的状态不是被封存在玻璃柜里，而是像这些高脚屋一样，依然被使用、被热爱、被一代代人注入新的生命。当你走在那些安静的小巷里，你会感觉到，历史并没有远去，它就沉淀在每一块发亮的木头上，每一扇擦得透亮的窗户里。对于热爱深度游的旅人而言，马肯是一次难得的“心绪整理”。在这里，你可以暂时关掉外面的喧嚣，听一听风与水、木头与岁月对话的声音，重新思考什么是家园，什么是与这个世界温柔相处的方式。这大概就是为什么，这个小小的、曾经被世界遗忘的角落，值得我们跨越千里，来赴一场宁静之约。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德哈尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hoorn-netherlands" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍伦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hoorn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/willemstad-fortress-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    威
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">威廉斯塔德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Willemstad</p>
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
