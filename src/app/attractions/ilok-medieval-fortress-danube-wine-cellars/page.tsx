import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊洛克 Ilok｜克罗地亚边境的时光胶囊，在多瑙河畔的古堡与百年酒窖中沉醉 - 最佳欧洲景点',
  description: '车子沿着舒缓的坡道向上盘旋，当多瑙河那宽阔的、带着泥土和远方森林气息的灰蓝色河面猛然闯入视野时，你会不由自主地屏住呼吸。伊洛克就这么猝不及防地出现了——它不是一座突兀的山，更像是一个从潘诺尼亚平原肥沃黑土中自然隆起的高贵额头，而那座赭石色的城堡，就是额头上最威严的王冠。风很大，带着河水的湿润和草原的',
}

export default function IlokMedievalFortressDanubeWineCellarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '伊洛克', href: '/attractions/ilok-medieval-fortress-danube-wine-cellars' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊洛克・Ilok・克罗地亚・武科瓦尔-斯里耶姆县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着舒缓的坡道向上盘旋，当多瑙河那宽阔的、带着泥土和远方森林气息的灰蓝色河面猛然闯入视野时，你会不由自主地屏住呼吸。伊洛克就这么猝不及防地出现了——它不是一座突兀的山，更像是一个从潘诺尼亚平原肥沃黑土中自然隆起的高贵额头，而那座赭石色的城堡，就是额头上最威严的王冠。风很大，带着河水的湿润和草原的旷远，吹得人衣角猎猎作响。四周安静极了，只能听见风声，和偶尔从河谷深处传来的、不知名鸟类的悠长鸣叫。这里就是克罗地亚的“天涯海角”，国境线在几步之遥的河对岸蜿蜒，时间却仿佛在此凝固。
走进古堡下的老城，又是另一番景象。石板路被岁月磨得温润发光，两旁是色彩柔和、有些剥落的巴洛克式民居。空气里飘着一丝柴火和烤面包的暖香，夹杂着从某家院子探出头来的蔷薇花香。老人们坐在门廊下的藤椅里，用你听不懂的当地方言缓慢地交谈，看到陌生人，会投来温和而略带好奇的一瞥。这里的节奏，慢得像多瑙河在晴天下的水流。你立刻就能感觉到，堡垒不仅仅是给游客看的古迹，它至今仍是这个小镇精神上的靠山，是居民们每日抬头就能看见的守护神。
但伊洛克最摄人心魄的魅力，却藏在地表之下。当你跟随向导，推开一扇厚重的木门，沿着潮湿阴凉的台阶螺旋而下，一股混合着陈年橡木、石头霉菌和浓郁酒香的复杂气息扑面而来。你的眼睛需要时间适应昏暗，随后，一个由古老砖拱构成的、看不到尽头的幽深世界在烛光中显现。这就是闻名遐迩的奥代斯卡酒窖。指尖触摸墙壁，是冰冷刺骨的湿润，耳边只有自己的呼吸和滴水声。在这里，你能品尝到的不仅是葡萄酒，更是被封存在橡木桶里的、数百年的光阴与战争间隙的和平。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着舒缓的坡道向上盘旋，当多瑙河那宽阔的、带着泥土和远方森林气息的灰蓝色河面猛然闯入视野时，你会不由自主地屏住呼吸。伊洛克就这么猝不及防地出现了——它不是一座突兀的山，更像是一个从潘诺尼亚平原肥沃黑土中自然隆起的高贵额头，而那座赭石色的城堡，就是额头上最威严的王冠。风很大，带着河水的湿润和草原的旷远，吹得人衣角猎猎作响。四周安静极了，只能听见风声，和偶尔从河谷深处传来的、不知名鸟类的悠长鸣叫。这里就是克罗地亚的“天涯海角”，国境线在几步之遥的河对岸蜿蜒，时间却仿佛在此凝固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进古堡下的老城，又是另一番景象。石板路被岁月磨得温润发光，两旁是色彩柔和、有些剥落的巴洛克式民居。空气里飘着一丝柴火和烤面包的暖香，夹杂着从某家院子探出头来的蔷薇花香。老人们坐在门廊下的藤椅里，用你听不懂的当地方言缓慢地交谈，看到陌生人，会投来温和而略带好奇的一瞥。这里的节奏，慢得像多瑙河在晴天下的水流。你立刻就能感觉到，堡垒不仅仅是给游客看的古迹，它至今仍是这个小镇精神上的靠山，是居民们每日抬头就能看见的守护神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但伊洛克最摄人心魄的魅力，却藏在地表之下。当你跟随向导，推开一扇厚重的木门，沿着潮湿阴凉的台阶螺旋而下，一股混合着陈年橡木、石头霉菌和浓郁酒香的复杂气息扑面而来。你的眼睛需要时间适应昏暗，随后，一个由古老砖拱构成的、看不到尽头的幽深世界在烛光中显现。这就是闻名遐迩的奥代斯卡酒窖。指尖触摸墙壁，是冰冷刺骨的湿润，耳边只有自己的呼吸和滴水声。在这里，你能品尝到的不仅是葡萄酒，更是被封存在橡木桶里的、数百年的光阴与战争间隙的和平。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊洛克`} />
                <InfoRow label="英文名称" value={`Ilok`} />
                <InfoRow label="正式名称" value={`Ilok`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`武科瓦尔-斯里耶姆县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座俯瞰多瑙河的边境堡垒，是克罗地亚最东端的守护者，见证了中世纪王国、奥斯曼帝国与哈布斯堡王朝数百年的血腥争夺与文明交融。`} />
                <InfoRow label="建筑特色" value={`山顶的城堡建筑群融合了中世纪防御工事的厚重、巴洛克宫殿的优雅与奥斯曼风格的痕迹，其下更隐藏着欧洲最古老、最绵长的皇家酒窖系统之一。`} />
                <InfoRow label="建筑风格" value={`混合风格，以中世纪堡垒为基础，融合了哥特式、文艺复兴、巴洛克以及奥斯曼帝国的建筑元素。`} />
                <InfoRow label="文化价值" value={`它是一个活着的边境文化层，天主教教堂的钟声、东正教影响的痕迹、以及奥斯曼时期留下的生活智慧在此共存，更以顶级的弗兰科瓦卡葡萄美酒定义了克罗地亚的葡萄酒版图。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`伊洛克城堡及博物馆：夏季（4月至10月）每日上午9点至晚上7点开放；冬季（11月至3月）开放时间缩短为上午10点至下午4点，周一通常闭馆。宏伟的圣伊万卡皮斯特兰教堂全年开放，但内部参观最好在每日弥撒时间之外（通常为上午8点至中午，下午4点至6点）。奥代斯卡酒窖的导览品酒体验需要提前预约，夏季每天有数个固定场次，冬季场次减少。重要提示：许多设施在1月和2月可能进行维护，开放时间极不稳定，出行前务必在官网二次确认。`} />
              <InfoRow label="门票价格" value={`伊洛克城堡与市立博物馆联票：成人约40库纳（约合5.3欧元），学生及65岁以上老人享有半价优惠，7岁以下儿童免费。仅参观城堡庭院免费。圣伊万卡皮斯特兰教堂免费进入，但欢迎捐款以维护古迹。奥代斯卡酒窖的经典导览品酒体验价格约为120库纳（约16欧元），包含参观地下酒窖和历史讲解，以及品尝3-4款当地代表性葡萄酒。部分高级品酒体验或包含传统餐点的套餐价格在200-350库纳不等。`} />
              <InfoRow label="地址" value={`Trg Sv. Ivana Kapistrana 4, 32236 Ilok, 克罗地亚`} />
              <InfoRow label="交通方式" value={`伊洛克位置相对偏远，最适合自驾探索。从首都萨格勒布出发，沿A3高速公路向东，转入D2公路，全程约250公里，车程3-3.5小时，沿途是广袤的平原农田风光。若使用公共交通：从萨格勒布中央火车站乘坐火车抵达武科瓦尔（Vukovar，约4-5小时，班次不多），再从武科瓦尔汽车站换乘前往伊洛克的本地巴士（车程约45分钟，每天班次有限，周末大幅减少）。最近的国际机场是塞尔维亚首都贝尔格莱德的尼古拉·特斯拉机场，从机场租车出发，向北穿越边境（请确保护照及车辆文件齐全），约1.5小时即可抵达伊洛克。边境检查通常很迅速，但节假日可能排队。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊洛克的故事，是一部用石头、葡萄酒和鲜血写成的边境史诗。早在罗马时代，这里就是一个战略前哨。但真正赋予它灵魂的，是13世纪的匈牙利-克罗地亚国王。他将这片土地赐予了伊利克家族，小镇也因此得名。家族在此修建了第一座坚固的堡垒，俯瞰着多瑙河这条欧洲的“女王大道”，向过往商船征收赋税，小镇逐渐繁荣。那时的地窖里，已经开始储藏从周边丘陵收获的葡萄佳酿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的急转弯发生在16世纪。奥斯曼帝国的铁骑如洪流般西进，1526年莫哈奇战役的惨败，让整个克罗地亚暴露在土耳其人的兵锋之下。伊洛克，这座最东端的堡垒，成为了基督教世界摇摇欲坠的前线。经过惨烈的围攻，它最终陷落，并在此后长达150年的时间里，处于奥斯曼帝国的统治之下。你可以想象，教堂的钟声沉默了，取而代之的是清真寺宣礼塔的召唤。城堡被加固、改造，融入了奥斯曼的军事建筑特点。但有趣的是，当地的葡萄种植和酿酒传统并未断绝，也许征服者也难以抗拒弗兰科瓦卡的美味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "改变历史的钟声再次敲响是在17世纪末。哈布斯堡王朝的杰出元帅——尤金亲王，领导基督教联军一路高歌猛进，从土耳其人手中收复了失地。1697年，伊洛克重回基督教世界。立下赫赫战功的亲王，将伊洛克封赏给了忠心耿耿的萨克森-劳恩堡公爵。新的统治者带来了巴洛克时代的审美，他们在中世纪堡垒的核心之上，修建起了如今我们看到的、拥有优雅立面与华丽大厅的宫殿。小镇广场上矗立起雄伟的圣伊万卡皮斯特兰教堂，钟声再次响彻多瑙河上空。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，和平依旧脆弱。20世纪的战火同样残酷地撕裂了这里。1991年至1995年的克罗地亚独立战争，武科瓦尔-斯里耶姆县是伤亡最惨烈的战场之一。伊洛克虽未遭受如邻居武科瓦尔那般彻底的摧毁，但也伤痕累累。战争结束后，小镇的人们以惊人的坚韧和耐心，一砖一瓦地修复了他们的城堡、教堂和家园。今天，当你漫步在整洁的街道上，几乎看不到伤痕，只有从一些当地中年以上居民眼神里偶尔闪过的深沉，才能隐约感知那段并不遥远的过去。如今，城堡塔楼上飘扬的是克罗地亚红白格子旗，地下酒窖里的弗兰科瓦卡酒正被运往世界各地，伊洛克静静地伫立着，如同一位饱经沧桑却依然从容的老兵，守护着多瑙河畔来之不易的宁静与醇香。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味伊洛克，你需要预留一整天的时间，并抱着闲散漫步的心态。建议在上午9点左右抵达，这时旅游团还未涌入，晨光正温柔地洒在古堡墙壁上。整个游览节奏应是“先高后低，由外入内”：上午精力充沛时，探索城堡高地与老城街道，感受宏观的历史气势与小镇生活气息；下午则将节奏放慢，深入地下酒窖，进行一场感官与味觉的深度沉浸。傍晚时分，务必留在城堡平台或河畔，等待多瑙河上史诗般的日落。这样的安排既能避开人流高峰，又能完整经历从视觉震撼到味觉享受，再到内心沉思的完美旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇餐厅下午普遍有较长的休息时间（约下午3点到6点），计划午餐不要太晚。参观酒窖地下部分温度常年只有12-14度，即便盛夏也务必带一件薄外套。边境地区移动网络信号可能自动跳转到塞尔维亚运营商，建议提前关闭数据漫游或购买本地SIM卡，避免产生高额费用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早先从古城门进入，沿着蜿蜒的上坡小路走向城堡，让多瑙河全景随着你的脚步一点点展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡庭院里触摸那些来自不同时代、粗糙与光滑并存的石墙，寻找上面可能存在的古老刻痕或炮弹印记。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进市立博物馆，别错过那些展示奥斯曼时期生活与独立战争伤痛的展柜，它们是小城沉默的记忆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的侧门走出，沿着残留的中世纪城墙漫步，从另一个角度俯瞰红色屋顶的老城与远处无垠的平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午就在广场旁找一家家庭餐馆，点一盘炖鹿肉或淡水鱼汤，配上一杯本地出产的清爽格拉塞维纳白葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`预约下午的奥代斯卡酒窖导览，跟着向导的烛光深入地下，让寒意包裹你，听他讲述酒窖在战乱中保存下来的传奇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`品酒结束后，漫步到圣伊万卡皮斯特兰教堂内部，在静谧中欣赏华丽的巴洛克祭坛，点燃一支蜡烛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一定要回到城堡西侧的观景平台，找一张长椅坐下，看着夕阳将多瑙河染成一条流动的金色熔岩，对岸塞尔维亚的风景渐渐融入暮色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西侧悬崖观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以波澜壮阔的多瑙河大拐弯为背景，将城堡的塔楼作为 silhouette（剪影）置于画面一侧，捕捉天空从金黄到紫红的渐变。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`奥代斯卡酒窖深处`}</h4>
                  <p className="text-sm text-gray-700">{`在导览允许的情况下，请同伴用手机或相机的低光模式，从一条幽长拱廊的尽头向你拍摄，人物手持烛光成为焦点，两侧无尽的酒桶消失在黑暗中，营造出神秘而深邃的时空感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城石板路仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右的阳光刚好能照亮爬满藤蔓的巴洛克建筑外墙，站在低处向上拍摄蜿蜒的小路与尽头的城堡塔尖，让画面充满引导线和故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣伊万卡皮斯特兰教堂内部`}</h4>
                  <p className="text-sm text-gray-700">{`利用三脚架（如果允许）或依靠稳固的柱子，在光线从侧窗射入时拍摄主祭坛，将教堂长椅的纵深感与华丽的巴洛克装饰一同纳入镜头，注意调整曝光以避免高光过曝。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必了解当地法规，这里是边境敏感区域，未经批准飞行可能带来严重麻烦。拍摄当地居民，尤其是老人，请务必先微笑并取得对方同意，一个友好的手势比镜头更重要。酒窖内通常禁用闪光灯，以免影响葡萄酒品质，可靠的高感光度相机或手机夜景模式是你的好朋友。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋17世纪石头房子改造的民宿里，女主人会为你准备丰盛的本地早餐，傍晚可以坐在私密的小庭院，听着教堂钟声品酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`由古老贵族宅邸修复而成的精品酒店，房间拥有裸露的原始石墙和古董家具，浴室却配备现代水疗设施，在历史感与现代舒适间找到完美平衡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园环绕之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城堡后方丘陵上的家庭式农庄旅馆，房间窗户正对着成片的弗兰科瓦卡葡萄园，清晨在鸟鸣中醒来，步行即可开启一天的探索。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`极致视野之选`}</h4>
                  <p className="text-sm text-purple-800">{`为数不多的、直接位于多瑙河岸边的现代风格酒店，拥有全落地的玻璃窗，躺在床上就能看到河上往来的船只和对岸的异国风光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和初秋葡萄收获季节是旺季，住宿需提前数周预订。老城内的住宿多为古老建筑，隔音可能一般，但氛围无可替代。如果自驾，预订时务必确认停车位置，老城内部停车位非常紧张。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开伊洛克的时候，我车里带着两瓶在酒窖买的弗兰科瓦卡甜酒，舌尖还残留着它如琥珀般晶莹、混合着蜂蜜与杏干味的余韵。但比酒更醉人的，是那份盘旋在心头的、关于“边界”的复杂感触。这里的一切都存在于边界之上：地理的边界，国家的边界，文明的边界，乃至时间的边界——中世纪与巴洛克，战争与和平，废墟与重生，都如此清晰地分层共存，没有彼此覆盖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求高效、喜欢标签化一切的世界里，伊洛克像一个温柔的提醒。它告诉你，有些地方无法被匆匆掠过，它的故事需要你慢下来，用皮肤去感受地窖的阴冷，用耳朵去听风声里的寂静，用舌头去品尝历史酿出的甜涩，才能略懂一二。它不是最华丽的，也不是最便捷的，但正是这份略带倔强的偏远与沉默，保存了一种最珍贵的旅行质感：真实的触碰与沉静的思考。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了那些被过度曝光、充满喧嚣的欧洲热点，渴望一次真正走进历史肌理与生活深处的旅程，请来伊洛克。坐在多瑙河畔的夕阳里，你会感到自己不仅仅是一个游客，更像是一个偶然的聆听者，听到了这片土地在长河、美酒与烽烟中，低吟了数百年的、关于坚韧与滋味的叙事诗。这是一生中值得专程为它拐个弯的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/baroque-varazdin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦拉日丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Varaždin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar</p>
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
