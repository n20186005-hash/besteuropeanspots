import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝尔瑟尔 Beersel | 探秘14世纪红砖护城河城堡，品味传奇自然发酵啤酒Geuze的源头 - 最佳欧洲景点',
  description: '车子驶离布鲁塞尔喧嚣的街道，不到半小时，世界就彻底变了模样。当你沿着一条两旁种满栗子树的小路拐弯，它就这么毫无预警地撞进视野里——不是童话里那种尖顶轻盈的城堡，而是一座敦实、厚重、甚至有些严肃的深红色巨物，静静地倒映在三圈墨绿色的护城河水里。那是一种非常奇特的宁静，只有风吹过水面、野鸭划开涟漪的声音',
}

export default function BeerselCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '贝尔瑟尔 (弗拉芒布拉班特省)', href: '/destinations/europe' },
            { label: '贝尔瑟尔', href: '/attractions/beersel-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝尔瑟尔・Beersel・比利时・贝尔瑟尔 (弗拉芒布拉班特省)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离布鲁塞尔喧嚣的街道，不到半小时，世界就彻底变了模样。当你沿着一条两旁种满栗子树的小路拐弯，它就这么毫无预警地撞进视野里——不是童话里那种尖顶轻盈的城堡，而是一座敦实、厚重、甚至有些严肃的深红色巨物，静静地倒映在三圈墨绿色的护城河水里。那是一种非常奇特的宁静，只有风吹过水面、野鸭划开涟漪的声音，间或传来远处小镇教堂整点的钟鸣。空气里有一股潮湿的泥土味，混合着从附近老酒厂飘来的、若有似无的酸甜气息，那是正在沉睡的兰比克啤酒的味道。
走近了看，你会发现这座城堡的“皮肤”是如此特别。每一块砖都仿佛被数百年的雨水和风亲吻过，呈现出从铁锈红到暗紫褐色的丰富层次，砖缝里的苔藓像是时间的刺绣。它不像很多修复过度的景点那样精致完美，反而有种坦然的沧桑感。护城河上的木吊桥吱呀作响，仿佛在提醒你，这里不是一个冰冷的博物馆，而是一个有呼吸的古老生命。本地人对待它的态度也特别家常，你会看到遛狗的老人自然地穿过城堡门洞，跑步的年轻人沿着护城河岸热身，它就这么理所当然地嵌在人们的日常里，而不是被供奉在高高的围墙之后。
但贝尔瑟尔最打动人的，是它那种“双重灵魂”。白天，它是坚不可摧的军事堡垒，讲述着刀剑与盔甲的往事；可当夕阳西下，你走进城堡脚下或镇子里任何一家老酒馆，它的另一个灵魂就苏醒了。你会看到人们举着泛着金色气泡的Geuze啤酒，碰杯时发出清脆的响声，空气里弥漫着橡木、陈年酒香和欢谈的暖意。这座城堡守护的，从来不只是领土，更是一种需要时间、耐心和自然魔力才能酿成的生活哲学。砖石的冷硬与啤酒的鲜活，在这里达成了奇妙的共生。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离布鲁塞尔喧嚣的街道，不到半小时，世界就彻底变了模样。当你沿着一条两旁种满栗子树的小路拐弯，它就这么毫无预警地撞进视野里——不是童话里那种尖顶轻盈的城堡，而是一座敦实、厚重、甚至有些严肃的深红色巨物，静静地倒映在三圈墨绿色的护城河水里。那是一种非常奇特的宁静，只有风吹过水面、野鸭划开涟漪的声音，间或传来远处小镇教堂整点的钟鸣。空气里有一股潮湿的泥土味，混合着从附近老酒厂飘来的、若有似无的酸甜气息，那是正在沉睡的兰比克啤酒的味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了看，你会发现这座城堡的“皮肤”是如此特别。每一块砖都仿佛被数百年的雨水和风亲吻过，呈现出从铁锈红到暗紫褐色的丰富层次，砖缝里的苔藓像是时间的刺绣。它不像很多修复过度的景点那样精致完美，反而有种坦然的沧桑感。护城河上的木吊桥吱呀作响，仿佛在提醒你，这里不是一个冰冷的博物馆，而是一个有呼吸的古老生命。本地人对待它的态度也特别家常，你会看到遛狗的老人自然地穿过城堡门洞，跑步的年轻人沿着护城河岸热身，它就这么理所当然地嵌在人们的日常里，而不是被供奉在高高的围墙之后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但贝尔瑟尔最打动人的，是它那种“双重灵魂”。白天，它是坚不可摧的军事堡垒，讲述着刀剑与盔甲的往事；可当夕阳西下，你走进城堡脚下或镇子里任何一家老酒馆，它的另一个灵魂就苏醒了。你会看到人们举着泛着金色气泡的Geuze啤酒，碰杯时发出清脆的响声，空气里弥漫着橡木、陈年酒香和欢谈的暖意。这座城堡守护的，从来不只是领土，更是一种需要时间、耐心和自然魔力才能酿成的生活哲学。砖石的冷硬与啤酒的鲜活，在这里达成了奇妙的共生。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝尔瑟尔`} />
                <InfoRow label="英文名称" value={`Beersel`} />
                <InfoRow label="正式名称" value={`Beersel Castle (Kasteel van Beersel)`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`贝尔瑟尔 (弗拉芒布拉班特省)`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存最完好的中世纪红砖防御城堡之一，也是比利时传统自然发酵啤酒Geuze文化的摇篮与守护者。`} />
                <InfoRow label="建筑特色" value={`独特的深红色砖石结构，三道护城河层层环绕，四座巨大圆塔与高耸主楼构成的经典中世纪防御体系。`} />
                <InfoRow label="建筑风格" value={`布拉班特哥特式军事建筑典范，兼具佛兰德地区民用建筑的砖砌工艺特色。`} />
                <InfoRow label="文化价值" value={`活态的中世纪军事建筑标本与联合国教科文组织非物质文化遗产“比利时啤酒文化”的核心承载地。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院及外部区域全年免费开放，可随时漫步。城堡主楼及博物馆内部开放时间：每年四月至九月，每周三至周日下午1点至6点开放；十月至次年三月，仅周末下午1点至5点开放。每年一月份及部分比利时法定假日（如圣诞节、新年）闭馆。建议出行前在弗拉芒文化遗产官网核查最新时间。`} />
              <InfoRow label="门票价格" value={`进入城堡主楼及博物馆需购票。成人票8欧元，65岁以上长者及学生票6欧元，12-18岁青少年票4欧元，12岁以下儿童免费。持“布鲁塞尔卡”或“法兰德斯遗产护照”可享受相应折扣。门票包含语音导览（含中文选项）。`} />
              <InfoRow label="地址" value={`Lotsestraat 65, 1650 Beersel, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔中央车站(Brussels-Central)出发最为便捷。在车站乘坐开往“Braine-le-Comte”方向的S3或S8线近郊火车，约15分钟即可抵达“Beersel”站。火车班次频繁，约每20-30分钟一班，可在车站自动售票机购买“布鲁塞尔周边票”。出站后，跟随棕色旅游指示牌“Kasteel”步行，穿过宁静的居民区，约需15分钟即可抵达城堡。若从布鲁塞尔机场出发，可先搭乘火车至北站(Midi)再换乘上述线路，总耗时约40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝尔瑟尔城堡的故事，始于一个并不那么和平的年代。大约在1300年到1310年间，一位名叫“上帝保佑的”戈特弗里德的人，奉布拉班特公爵约翰二世的命令，在此地建造了这座要塞。你可能会想，为什么选在这里？摊开地图就明白了，它正位于当时富庶的布拉班特公国与佛兰德伯爵领地的边界线上，那条静静流淌的塞讷河成了天然疆界。这座红砖城堡，就像一个沉默而坚定的哨兵，盯着河对岸的动静，守护着通往布鲁塞尔的要道。最初的它，功能纯粹而强硬：驻军、收税、震慑。那些厚重的墙壁和深深的护城河，不是为了美观，而是为了在冷兵器时代活下去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的命运总是与战争和领主紧紧绑在一起。在接下来的几个世纪里，它像一枚棋子，在不同家族手中转赠、继承。其中最惊心动魄的一章，写在1489年。那一年，布鲁塞尔的市民因不满哈布斯堡王朝马克西米利安一世的统治而起义，叛军一路南下，将怒火倾泻在贝尔瑟尔城堡上。围攻、炮击、大火……当硝烟散去，这座骄傲的堡垒只剩下了被熏黑的外壳和残垣断壁。我们今天看到的城堡，绝大部分是那场灾难之后，由当时的主人——霍恩家族的路易斯勋爵主持重建的。你可以仔细观察那些砖块，或许能分辨出哪些是14世纪的原始风骨，哪些是15世纪末浴火重生后留下的“伤疤”。这次重建基本遵循了原样，但让城堡变得更加坚固，仿佛在向世界宣告：摧毁我一次，我会以更顽强的姿态站起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到17、18世纪，火炮技术的发展让高墙深池的防御意义大减，贝尔瑟尔城堡逐渐褪去军事色彩，被改造成了更为舒适的贵族住宅，甚至一度沦为农场和仓库。但就在它看似要默默老去的时候，另一场“文艺复兴”在它的墙根下悄然发生。这片土地——赞讷河谷，因其独特的、飘散着野生酵母的“空气”，成了酿造一种神奇啤酒的绝佳之地：兰比克啤酒。这是一种完全依靠空气中天然微生物进行自然发酵的啤酒，如同葡萄酒中的“风土”，每一瓶都承载着当地的气候与微生物图谱。而Geuze，正是将不同年份的兰比克啤酒混合二次发酵而成的“香槟啤酒”。19世纪末20世纪初，城堡周边及整个地区，家庭酒厂如雨后春笋，古老的城堡仿佛一位慈祥的祖父，俯瞰着新一代“液体黄金”的诞生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，经历了两次世界大战的动荡，城堡本身已破败不堪，面临被拆除的危险。是当地民众和文化遗产保护者的努力，在数次修缮中将它从废墟边缘拉回。而更妙的是，那些传承数代的Geuze啤酒厂，如城堡附近的“3 Fonteinen”（三泉），不仅存活下来，更将这种古老工艺推向了世界精品啤酒的殿堂。于是，今天的贝尔瑟尔形成了一幅迷人的图景：城堡作为历史的“硬件”被精心保存，而Geuze啤酒文化作为流淌的“软件”被活态传承。它们彼此证明，彼此滋养，共同讲述着一个关于坚守、重生与时间馈赠的完整故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你将整个行程安排成大半天，节奏宜缓不宜急。最好选择一个晴朗的周三至周五前往，既能进入城堡内部探秘，又能避开周末稍多的人流。理想的动线是“由外及内，由历史到风味”：上午十点左右抵达，先用一个多小时从容地绕行城堡外围，欣赏它在不同角度的雄姿与倒影，感受宁静的护城河氛围。接着在午后人稍多前进入城堡主楼参观博物馆和爬上塔楼，深刻理解其军事和历史。下午三点后，将时光交给味蕾，步行前往镇上的传统酒馆或附近的传奇酒厂，在阳光下享用一杯地道的Geuze啤酒，让历史的厚重与生活的甘醇完美交融。这样的安排张弛有度，能全方位体验贝尔瑟尔的精髓。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部的螺旋楼梯非常狭窄陡峭且光线昏暗，务必穿着舒适防滑的鞋子，上下楼时请特别小心。
参观酒厂前最好在其官网查看开放时间并预约导览，许多传统小酒厂并非每日对散客开放。
比利时火车票务系统复杂，从布鲁塞尔往返建议购买一张24小时内有效的“布鲁塞尔周边票”，比单次往返更划算且灵活。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从布鲁塞尔搭乘短途火车，在Beersel站下车后，沿着安静荫凉、布满民居花园的小路步行，让心情慢慢从都市节奏中抽离。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先抵达城堡东南侧的开阔草地，从这里可以完整欣赏城堡被三道护城河层层环绕、四座圆塔威严耸立的全景，并拍下第一张标准像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着最外圈的护城河小径顺时针漫步，从不同角度观察砖墙在不同光线下的色彩变化，倾听草丛里的虫鸣与河水流动的轻响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过吱呀作响的古老木吊桥进入城堡外墙内部，抚摸那些冰凉而粗糙的红砖，感受几个世纪前工匠的手泽与温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡主楼，攀爬狭窄陡峭的石砌螺旋楼梯，登上最高的塔楼，在瞭望口享受吹过脸庞的微风和俯瞰整个赞讷河谷田园风光的特权。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观塔楼内小巧但信息丰富的博物馆，通过模型、盔甲和古老文书，了解城堡建造者戈特弗里德的故事和1489年那场惨烈的围攻战。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来，沿着标志步行约十分钟，找到镇上那家有着老旧木质吧台的传统酒馆‘In de Rare Vos’，在户外栗子树下的座位坐下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`向酒保点一杯现开的、来自“3 Fonteinen”或“Boon”酒厂的陈年Geuze啤酒，仔细观察它金色的酒液和绵密的气泡，然后小口品尝那复杂而活泼的酸甜滋味。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧护城河外草地`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，利用夕阳的暖金色光线，低角度拍摄城堡塔楼及其在如镜水面上的完整倒影，画面宁静而富有史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主塔楼内部螺旋楼梯顶端`}</h4>
                  <p className="text-sm text-gray-700">{`中午时分光线从天窗射入时，站在楼梯底部向上仰拍，捕捉光线在古老石阶上形成的明暗交替的螺旋形几何光影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡西侧木桥入口处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨薄雾未散时（或雨后），利用长焦镜头压缩空间，拍摄木桥、门洞与后方主楼形成的深邃框架构图，雾气增添神秘感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`镇中心酒馆户外座位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右的“黄金时刻”，以举着金黄色Geuze啤酒杯的手部或朋友欢笑的侧脸为前景，虚化后方古老的城堡轮廓，讲述历史与当下交融的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`赞讷河畔远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡步行至河边，下午顺光时，将田野、河流、远处小镇房屋和城堡塔楼一同纳入画面，展现城堡与自然环境和谐共存的景象。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜（CPL）可以有效减少护城河水面及酒馆玻璃杯的反光，让城堡倒影和啤酒色泽更加纯净饱满。`}</li>
                <li>• {`在酒馆内部拍摄前，最好礼貌性地询问店主是否允许，尊重当地人的隐私和营业空间。`}</li>
                <li>• {`放飞无人机拍摄城堡全景在理论上是允许的，但务必远离人群并遵守比利时无人机法规，同时注意城堡周围常有鸟类栖息，避免惊扰。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`布鲁塞尔南郊宁静选择`}</h4>
                  <p className="text-sm text-blue-800">{`位于Linkebeek的精品设计酒店，由现代建筑师操刀，房间拥有整面玻璃窗可眺望绿意，乘坐公交车十分钟即可抵达贝尔瑟尔，享受都市便利与郊野宁静的完美平衡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡脚下历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`由城堡附属古老建筑改造的独家民宿，仅有两间客房，保留了原始的石墙和木梁，夜晚万籁俱寂时，你几乎能听到历史在墙壁里的低语。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`赞讷河谷酿酒师之家`}</h4>
                  <p className="text-sm text-yellow-800">{`入住附近村庄一家由Geuze酿酒师家族经营的舒适B&B，早晨在花园里享用 homemade 早餐，主人兴致好时甚至会带你参观他的私人小酒窖并讲解酿造奥秘。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布鲁塞尔市中心便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`选择布鲁塞尔圣吉尔区或弗拉芒广场附近的特色酒店，该区域充满艺术氛围和美食，晚上归来仍可享受首都夜生活，次日再轻松前往贝尔瑟尔。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果主要目标是深度体验贝尔瑟尔的宁静与啤酒文化，强烈建议在当地或附近村庄住一晚，夜晚和清晨的城堡氛围与白天截然不同，是专属深度游游客的福利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布鲁塞尔南郊及贝尔瑟尔地区治安非常好，但无论住在哪里，晚上独自步行时选择光线充足的主要道路仍是好习惯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（五月至九月及啤酒节期间）的本地特色住宿非常紧俏，务必提前数周甚至数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开贝尔瑟尔的时候，我的背包里除了记忆，还多了一瓶贴着手写标签的Geuze啤酒。酒厂的老酿酒师对我说，这瓶酒至少还需要在地窖里再沉睡三年，才能达到它风味的巅峰。我忽然觉得，这座城堡和这瓶酒，在本质上分享着同一种哲学。它们都不急于求成，都甘愿将自己交给时间——城堡用砖石承受风雨，啤酒用橡木桶等待微生物的魔法。在这个一切都追求“即时”和“效率”的世界里，这种缓慢的、近乎执拗的“等待”，本身就成了一种最奢侈的抵抗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，贝尔瑟尔教给我的，远不止一段中世纪历史或一种啤酒的品尝方法。它更像一个鲜活的隐喻，提醒着我们：真正的坚固，不是拒绝变化，而是在时间的冲刷中沉淀出自己的质地；真正的财富，不是快速的消费，而是历经等待后自然酿成的醇厚滋味。当你站在护城河边，看着这座既未倒塌也未变得浮夸的城堡，再啜饮一口杯中那复杂跳跃、带着古老土地气息的液体，你会感到一种深沉的安心。它告诉你，有些美好，注定快不了；而正因为慢，才如此值得你跨越山海，亲自来遇见。这，或许就是深度旅行最珍贵的意义——去寻找那些仍在耐心生长、并与时光温柔相处的灵魂。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lion-mound-waterloo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    滑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">滑铁卢狮子丘</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lion's Mound</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tournai-cathedral-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图尔奈大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tournai Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/japanese-garden-hasselt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈瑟尔特日本花园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Japanese Garden Hasselt</p>
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
