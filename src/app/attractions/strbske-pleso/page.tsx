import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '什特尔布斯凯普莱索 Štrbské Pleso｜高塔特拉山之巅的冰川之眼，聆听万年冰河的低语 - 最佳欧洲景点',
  description: '你第一眼看见Štrbské Pleso时，会瞬间忘记呼吸。那不是夸张，是真的。车子沿着山路盘旋，窗外的冷杉林像墨绿色的厚毯子快速掠过，然后，在一个毫无预兆的转弯后，它就这样突然撞进你的视野——一整片沉静到近乎庄严的湖面，躺在群山坚实的臂弯里。湖水是那种无法调出的、带着冷感的翡翠色，边缘泛着些许矿物质...',
}

export default function StrbskePlesoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '什特尔布斯凯普莱索', href: '/attractions/strbske-pleso' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`什特尔布斯凯普莱索・Štrbské Pleso・斯洛伐克・高塔特拉山 Štrbské Pleso 度假村`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见Štrbské Pleso时，会瞬间忘记呼吸。那不是夸张，是真的。车子沿着山路盘旋，窗外的冷杉林像墨绿色的厚毯子快速掠过，然后，在一个毫无预兆的转弯后，它就这样突然撞进你的视野——一整片沉静到近乎庄严的湖面，躺在群山坚实的臂弯里。湖水是那种无法调出的、带着冷感的翡翠色，边缘泛着些许矿物质的乳白，像一块巨大的、未经雕琢的玉石。空气瞬间变得不一样了，清冽、纯粹，带着针叶林被阳光晒过后松脂的微香，和从湖面升腾起来的、湿润的凉意，直直钻进你的肺腑。
湖边没有喧哗，只有风声。那不是城市里那种呜咽的风，是高山上的风，它掠过湖面，再穿过岸边那些高大笔直、树皮皲裂的欧洲赤松和云杉，发出一种低沉的、持续的“沙沙”声，像大地在缓慢而深沉地呼吸。你会看到当地人，他们很少像游客那样举着相机四处奔跑。他们穿着专业的徒步服，牵着狗，或者只是一个人，静静地坐在湖畔的长椅上，望着湖对岸那座轮廓锋利、名叫“佩特洛峰”的山峦。对他们而言，这里不是景点，是生活的一部分，是周末充电的“加油站”，是无需言语就能与自然对话的圣殿。
它的核心魅力，就在于这种极致的“静”与“净”。这种静，不是死寂，而是一种充满生命力的安宁。你可以清楚地听见自己的脚步声踩在木质栈道上的“咚咚”声，听见不知名的山鸟在林中短促的鸣叫，甚至能听见远处冰川融水汇入湖中那极其细微的潺潺声。阳光好的时候，光线毫无遮拦地倾泻下来，湖面像被打碎的镜子，闪烁着亿万片细碎的金光；而当山岚升起，薄雾像轻纱一样缠绕在半山腰，湖水又变得深邃而神秘，倒映着云雾和森林的轮廓，虚实难辨，仿佛另一个平行世界的人口。
在这里，时间似乎被高山和湖水重新校准了。你会不自觉地放慢脚步，降低声音，连思绪都变得清澈起来。那份从冰河时期留存至今的古老与纯洁，有着不可思议的抚慰力量。它不向你炫耀什么，只是静静地存在着，便足以让所有远道而来的、躁动的心灵，找到片刻的栖息之地。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看见Štrbské Pleso时，会瞬间忘记呼吸。那不是夸张，是真的。车子沿着山路盘旋，窗外的冷杉林像墨绿色的厚毯子快速掠过，然后，在一个毫无预兆的转弯后，它就这样突然撞进你的视野——一整片沉静到近乎庄严的湖面，躺在群山坚实的臂弯里。湖水是那种无法调出的、带着冷感的翡翠色，边缘泛着些许矿物质的乳白，像一块巨大的、未经雕琢的玉石。空气瞬间变得不一样了，清冽、纯粹，带着针叶林被阳光晒过后松脂的微香，和从湖面升腾起来的、湿润的凉意，直直钻进你的肺腑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`湖边没有喧哗，只有风声。那不是城市里那种呜咽的风，是高山上的风，它掠过湖面，再穿过岸边那些高大笔直、树皮皲裂的欧洲赤松和云杉，发出一种低沉的、持续的“沙沙”声，像大地在缓慢而深沉地呼吸。你会看到当地人，他们很少像游客那样举着相机四处奔跑。他们穿着专业的徒步服，牵着狗，或者只是一个人，静静地坐在湖畔的长椅上，望着湖对岸那座轮廓锋利、名叫“佩特洛峰”的山峦。对他们而言，这里不是景点，是生活的一部分，是周末充电的“加油站”，是无需言语就能与自然对话的圣殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的“静”与“净”。这种静，不是死寂，而是一种充满生命力的安宁。你可以清楚地听见自己的脚步声踩在木质栈道上的“咚咚”声，听见不知名的山鸟在林中短促的鸣叫，甚至能听见远处冰川融水汇入湖中那极其细微的潺潺声。阳光好的时候，光线毫无遮拦地倾泻下来，湖面像被打碎的镜子，闪烁着亿万片细碎的金光；而当山岚升起，薄雾像轻纱一样缠绕在半山腰，湖水又变得深邃而神秘，倒映着云雾和森林的轮廓，虚实难辨，仿佛另一个平行世界的人口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，时间似乎被高山和湖水重新校准了。你会不自觉地放慢脚步，降低声音，连思绪都变得清澈起来。那份从冰河时期留存至今的古老与纯洁，有着不可思议的抚慰力量。它不向你炫耀什么，只是静静地存在着，便足以让所有远道而来的、躁动的心灵，找到片刻的栖息之地。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`什特尔布斯凯普莱索`} />
                <InfoRow label="英文名称" value={`Štrbské Pleso`} />
                <InfoRow label="正式名称" value={`Štrbské Pleso`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`高塔特拉山 Štrbské Pleso 度假村`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`高塔特拉山脉最高、最著名的冰川湖，是斯洛伐克自然皇冠上最璀璨的明珠。`} />
                <InfoRow label="建筑特色" value={`非人造建筑，是冰川运动雕刻出的天然杰作，呈规整的椭圆形，宛如一面被松林环抱的明镜。`} />
                <InfoRow label="建筑风格" value={`自然冰川地貌风格。`} />
                <InfoRow label="文化价值" value={`不仅是重要的自然遗产，更是斯洛伐克民族精神的象征，承载着登山文化、自然崇拜与宁静疗愈的深厚内涵。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年全天开放（湖区自然步道）。周边游客中心、餐厅及缆车运营时间通常为夏季（5月至9月）上午8:00至下午6:00，冬季（12月至次年3月）上午9:00至下午4:00，具体可能因天气和季节微调，建议出行前查阅官网。国家公园核心区域建议在日出后至日落前游览以确保安全。`} />
              <InfoRow label="门票价格" value={`进入Štrbské Pleso湖区及周边国家公园自然步道免费。如需使用周边收费设施如缆车、博物馆或参与向导徒步团，则需额外购票。缆车票价约成人单程15欧元，往返25欧元。6岁以下儿童、65岁以上老人及持国家公园年卡者享有折扣。`} />
              <InfoRow label="地址" value={`Štrbské Pleso, 062 01 Vysoké Tatry, Slovakia`} />
              <InfoRow label="交通方式" value={`从最近的波普拉德-塔特拉国际机场出发：驾车或搭乘出租车，沿E50公路向西北行驶约30公里，耗时约35-40分钟。
最便捷的公共交通是从波普拉德火车站乘坐塔特拉电气铁路前往Štrbské Pleso火车站，车次频繁（约每小时一班），行程约50分钟，沿途风景绝佳。从科希策或布拉迪斯拉发也有直达长途巴士，但班次较少，建议提前查询时刻表。自驾车可停放在度假村的大型收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂Štrbské Pleso的故事，你得先把时钟拨回到一万多年前的末次冰期。那时候，整个高塔特拉山还被巨大的冰盖所覆盖，像一顶沉默的白色王冠。气候转暖，冰川这位史上最伟大的雕塑家开始缓缓后退，但它并非悄然离去，而是用无比沉重的身躯，在这里进行着最后的创作。它用冰舌有力地刨蚀着山体基岩，像一把巨勺，硬生生挖出了一个巨大的洼地。当冰川彻底消融，融水汇聚，便留下了这个最深可达20米、海拔高度达1346米的“冰斗湖”。所以，你眼前这一汪碧水，其实是地球上一次剧烈气候变迁的“胎记”，是远古寒冬留下的一滴眼泪，封存了上万年的光阴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类发现并记录它的历史，则要晚得多。尽管当地的牧羊人和猎户可能早已熟知这个高山湖泊，但它第一次出现在文献地图上，已经是19世纪下半叶的事了。那时，欧洲正兴起一股阿尔卑斯式的登山与疗养热潮。Štrbské Pleso得天独厚的自然风光和纯净空气，迅速吸引了探险家、科学家和寻求健康的富人们的目光。1872年，第一间旅游小屋在湖边建起，虽然简陋，却标志着一个新时代的开始。很快，铁路修到了山下，让这片秘境不再遥不可及。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正塑造了它今天面貌的关键人物，是一位名叫Jozef Szentiványi的医生兼企业家。他不仅在这里投资兴建了更舒适的酒店，更是一位充满远见的保护者。他深知这片自然的脆弱与珍贵，在开发旅游的同时，极力倡导保护周围的原始森林和生态。正因为有这样早期的远见，Štrbské Pleso才能在旅游开发的浪潮中没有迷失本心，始终保持着那份野性而纯净的基调。上世纪中叶，它更是成为了冬季运动的焦点，1970年世界北欧滑雪锦标赛在这里举办，让它的名字登上了国际舞台。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，它的命运也并非一帆风顺。作为自然的一部分，它时刻承受着气候变化的直接影响。科学家们持续监测着湖水温度、水质和周边的冰川遗迹，它们是地球健康状况最敏感的晴雨表。与此同时，如何在持续增长的游客压力与生态保护之间取得平衡，一直是当地管理者和社区思考的核心议题。幸运的是，斯洛伐克人对此有着深厚的自觉。你可以看到清晰标识的步道系统，引导人们在不伤害脆弱地表植被的前提下亲近自然；湖边没有任何过度商业化的喧嚣，只有必要的设施和沉静的木屋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，Štrbské Pleso早已超越了单纯的地理概念。它出现在斯洛伐克的文学、诗歌和电影中，成为民族身份认同的一部分。它代表着这个中欧小国所珍视的东西：对山野的敬畏，对宁静的追求，以及在现代化进程中坚守自然本色的智慧。它的故事，是一部自然与人文交织的漫长史诗，从冰川的怒吼开始，历经牧羊人的足迹、探险家的惊叹、保护者的努力，一直延续到今天每一个站在湖边，为之屏息的旅人心中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要深度体验Štrbské Pleso，我强烈建议你预留完整的一天，并选择在清晨抵达。早晨的湖面通常最为平静，倒影如画，光线柔和，且游客稀少，你能独享那份天地初开般的宁静。整体游览节奏应是“由静至动，由近及远”：先从环湖步道开始，与湖水亲密接触，感受它的静谧；之后可以选择一条上山步道，从更高处俯瞰全景，体验山野活力。这样安排既能沉浸式欣赏湖光山色，又能从宏观视角领略其作为冰川地貌的壮阔，最后在傍晚时分回到湖畔，看日落金山，完美收官。总耗时约6-8小时，包括徒步、休息和拍照时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`高海拔地区天气瞬息万变，即便夏季也务必携带防风防雨外套和保暖 layers，穿着专业防滑的徒步鞋。
请严格遵守国家公园规定，始终走在标记步道上，不打扰野生动物，不采摘植物，并将所有垃圾带下山。
湖边不设商业摊点，提前在度假村的小超市备好足够的饮用水和能量零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从湖西侧的主停车场出发，沿着平坦的木质环湖步道顺时针缓行，让第一缕阳光将你和对岸的佩特洛峰一同照亮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在湖南岸一片开阔的砾石滩停下脚步，亲手触摸冰凉彻骨的湖水，感受来自冰川时代的温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转入步道东侧那条深入原始针叶林的小径，倾听脚下松针的沙沙作响，呼吸混合着泥土与树脂的浓郁芬芳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`奋力攀爬一段陡峭但设有扶手的小路，抵达湖南面的一处岩石高地，这里是俯瞰整个湖泊椭圆形状和度假村全景的绝佳观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标志清晰的红色步道向更高的“索利斯科山鞍部”进发，回望时Štrbské Pleso已化作群山怀抱中一块小小的翡翠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，继续前行至佩特洛峰下的草甸，夏季这里野花盛开，宛如空中花园，与下方冰冷的湖水形成奇妙对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后绕到湖北侧那个伸入水中的小半岛，坐在长椅上静静等待黄昏，看夕阳将雪峰染成金红色，再渐渐褪为沉寂的黛紫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到度假村中心的经典木制建筑“塔特里昌卡”前，喝一杯热腾腾的草本茶，仿佛完成了一次与自然对话的庄严仪式。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖西南侧木质栈道开端处`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，利用平静湖面拍摄佩特洛峰及其倒影的完美对称构图，前景可带入栈道栏杆增加纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`深入东侧森林小径中段`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光穿透高大笔直的松林形成耶稣光时，以布满苔藓的巨石和盘根错节的树根为前景，拍摄湖泊若隐若现的远景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`攀爬上湖南面岩石高地的途中`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，从这个倾斜的角度拍摄，能同时捕捉到湖水的翡翠色、森林的墨绿以及远处山坡的肌理，层次极为丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`前往索利斯科山鞍部步道的第一个大转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，使用长焦镜头压缩空间，将湖泊、度假村的红色屋顶和更远方层叠的山峦压缩在同一画面中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`湖北部小半岛的尽头`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，以广角镜头拍摄，将半岛的轮廓、观景的人群剪影、荡漾的波光与漫天绚烂的晚霞一同囊括，故事感极强。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`最佳光线出现在日出后和日落前一小时，正午顶光会使湖面反光过强，缺乏层次。秋冬季节的晨雾和低角度阳光能营造出梦幻般的氛围。使用偏振镜可以有效消除湖面反光，让湖水颜色更显深邃。拍摄时请保持安静，避免惊扰在此栖息的鸟类和其他动物。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`Štrbské Pleso度假村内由家庭经营的温馨公寓，推开窗就能嗅到松林的气息，房东会热情地为你推荐只有本地人才知道的徒步小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`湖边那些有着百年历史的传统山地木屋风格酒店，房间铺着厚实的羊毛毯，壁炉里燃着柴火，晚上可以听着木头噼啪声入眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在山坡上、享有无遮挡湖景与山景的五星级温泉酒店，在落地窗旁的浴缸里泡个澡就能将雪山冰川湖尽收眼底，徒步归来还可享受专业的水疗护理。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验`}</h4>
                  <p className="text-sm text-purple-800">{`远离度假村中心、藏身于更高处森林边缘的生态小木屋，需要徒步一小段才能到达，真正实现与世隔绝，夜晚的星空银河璀璨到令人落泪。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季徒步旺季和冬季滑雪季的住宿非常紧俏，务必提前数月预订。住在度假村内虽然方便，但价格较高；也可以考虑住在山下的波普拉德或旧斯莫科夫茨小镇，乘火车上山一日游，性价比更高。山区夜晚温度很低，即使夏季，预订时也请确认住宿是否有完善的供暖设施。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开Štrbské Pleso许久后，我发现自己最怀念的，不是某一张漂亮的照片，而是那种全身心被一种巨大的宁静所包裹的感觉。在这个被信息轰炸、被效率驱赶的时代，我们的感官其实已经麻木了，习惯了喧嚣、色彩和快速的切换。但在这里，自然用它最纯粹的形式——一湖水、一片林、一座山——强行给你的生活按下了减速键。它让你重新学习如何用眼睛去观察光线在水面的移动，用耳朵去分辨风声与鸟鸣的合奏，用皮肤去感受海拔一千多米上清冽的空气。这是一种深刻的感官重启。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以必须列入深度旅行的清单，正是因为它提供了一种稀缺的“体验净值”。它不靠辉煌的历史建筑让你惊叹，也不靠热闹的市集让你兴奋。它的价值在于一种“存在性”的证明——证明地球上有这样未被修饰的美丽，证明寂静可以如此丰盈，证明人类依然可以与自然保持一种敬畏且和谐的距离。当你沿着湖边走，看到那些带着孩子来认识花草的父亲，那些默默清理步道上零星垃圾的徒步者，你会明白，Štrbské Pleso不仅仅是一个景点，它是一所露天的学堂，教会每一个到访者关于永恒、脆弱与平衡的哲理。来这里，不是为了收集一个地名，而是为了在心里存下一片永恒的、翡翠色的宁静。当世界再次变得嘈杂时，你可以在记忆中回到那片湖边，听一听万年冰河，那悠长而平静的低语。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trnava-slovak-rome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔纳瓦（斯洛伐克的小罗马）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trnava</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/banska-bystrica-leaning-clock-tower-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡-比斯特里察老城广场与倾斜钟塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Bystrica Old Town Square & Leaning Clock Tower</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/devin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德文城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Devín Castle</p>
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
