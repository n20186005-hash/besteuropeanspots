import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '穆兰 Moulins｜波旁王朝的摇篮，时光停驻的古典法式小城 - 最佳欧洲景点',
  description: '说实话，在抵达穆兰之前，我对它的想象只是一座印在历史课本角落里、名字有点枯燥的小城。但当我拖着行李箱，走出小小的车站，第一眼看见那条笔直通向老城的林荫道时，某种奇特的静谧感就扑面而来。那不是死寂，而是一种被时光浸润过的、从容不迫的呼吸声。空气里有刚修剪过的草坪的清香，混着远处面包房飘来的黄油香。阳光',
}

export default function MoulinsBourbonHeartlandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/europe' },
            { label: '穆兰', href: '/destinations/europe' },
            { label: '穆兰', href: '/attractions/moulins-bourbon-heartland' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`穆兰・Moulins・法国・穆兰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在抵达穆兰之前，我对它的想象只是一座印在历史课本角落里、名字有点枯燥的小城。但当我拖着行李箱，走出小小的车站，第一眼看见那条笔直通向老城的林荫道时，某种奇特的静谧感就扑面而来。那不是死寂，而是一种被时光浸润过的、从容不迫的呼吸声。空气里有刚修剪过的草坪的清香，混着远处面包房飘来的黄油香。阳光透过高大的梧桐树叶，在灰蓝色的石板路上洒下晃动跳跃的光斑，安静得能听见自己脚步声的回响。
沿着Allier河慢慢走，老城的轮廓就在对岸渐渐清晰。最抢眼的，永远是那座戴着小尖顶“帽子”的钟楼，它像一位优雅而固执的老绅士，数百年如一日地俯瞰着流淌的河水和低矮的红色屋顶。真正走进老城，你会发现这里的时间流速是不同的。没有汹涌的人潮，没有刺眼的连锁店招牌。街角咖啡馆的露天座上，老先生戴着贝雷帽，就着一小杯浓缩咖啡看报纸，一坐就是一个上午。肉铺的老板娘会探出头来，用带着浓重乡音的法语和遛狗的邻居闲聊。穆兰的魅力，不在于某个惊世骇俗的地标，而在于这种整体性的、活生生的古典气韵。它就像是波旁家族辉煌史诗的一个温柔而坚毅的注脚，被小心翼翼地保存在这里，继续着日常的烟火。
而当你站在波旁公爵宫殿那仅存的宏伟侧翼——马拉特翼楼前时，那种震撼是无声却巨大的。想象中应该是一座庞大的宫殿，如今只剩下这一面精美绝伦的立面，背后是开阔的草地和花园。残破与完整，荣耀与落寞，在这里形成了极其强烈的对比。抚摸那些被风雨侵蚀的石雕，你能读到野心、战争、毁灭与重生。它不是一座被彻底博物馆化、仅供瞻仰的废墟，而是融入了城市肌理的一片“空缺”，这片空缺本身，就在诉说着最完整的故事。这里最打动我的，正是这种“逝去”与“存在”之间的张力，它让历史不再是冰冷的知识，而成了一种可以触摸、可以感受的体温。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，在抵达穆兰之前，我对它的想象只是一座印在历史课本角落里、名字有点枯燥的小城。但当我拖着行李箱，走出小小的车站，第一眼看见那条笔直通向老城的林荫道时，某种奇特的静谧感就扑面而来。那不是死寂，而是一种被时光浸润过的、从容不迫的呼吸声。空气里有刚修剪过的草坪的清香，混着远处面包房飘来的黄油香。阳光透过高大的梧桐树叶，在灰蓝色的石板路上洒下晃动跳跃的光斑，安静得能听见自己脚步声的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沿着Allier河慢慢走，老城的轮廓就在对岸渐渐清晰。最抢眼的，永远是那座戴着小尖顶“帽子”的钟楼，它像一位优雅而固执的老绅士，数百年如一日地俯瞰着流淌的河水和低矮的红色屋顶。真正走进老城，你会发现这里的时间流速是不同的。没有汹涌的人潮，没有刺眼的连锁店招牌。街角咖啡馆的露天座上，老先生戴着贝雷帽，就着一小杯浓缩咖啡看报纸，一坐就是一个上午。肉铺的老板娘会探出头来，用带着浓重乡音的法语和遛狗的邻居闲聊。穆兰的魅力，不在于某个惊世骇俗的地标，而在于这种整体性的、活生生的古典气韵。它就像是波旁家族辉煌史诗的一个温柔而坚毅的注脚，被小心翼翼地保存在这里，继续着日常的烟火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你站在波旁公爵宫殿那仅存的宏伟侧翼——马拉特翼楼前时，那种震撼是无声却巨大的。想象中应该是一座庞大的宫殿，如今只剩下这一面精美绝伦的立面，背后是开阔的草地和花园。残破与完整，荣耀与落寞，在这里形成了极其强烈的对比。抚摸那些被风雨侵蚀的石雕，你能读到野心、战争、毁灭与重生。它不是一座被彻底博物馆化、仅供瞻仰的废墟，而是融入了城市肌理的一片“空缺”，这片空缺本身，就在诉说着最完整的故事。这里最打动我的，正是这种“逝去”与“存在”之间的张力，它让历史不再是冰冷的知识，而成了一种可以触摸、可以感受的体温。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`穆兰`} />
                <InfoRow label="英文名称" value={`Moulins`} />
                <InfoRow label="正式名称" value={`Moulins`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`穆兰`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是统治过法国、西班牙、那不勒斯等多个欧洲王国的波旁家族的古老发源地与精神故乡。`} />
                <InfoRow label="建筑特色" value={`老城中心矗立着被誉为“法国最美钟楼之一”的雅克·科尔钟楼，与不远处仅存侧翼的波旁公爵宫殿遗迹形成奇妙的时空对话。`} />
                <InfoRow label="建筑风格" value={`以哥特式晚期火焰风格与文艺复兴早期风格为主导，杂糅了古典主义元素。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪与文艺复兴历史露天博物馆，也是法国国家舞台服装中心的所在地，见证了从军事强权到艺术庇护的文化传承。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`穆兰老城公共区域全天开放。核心景点波旁公爵宫殿遗迹及国家舞台服装中心博物馆开放时间为：夏季（4月至9月）每日10:00-18:00，冬季（10月至3月）周三至周一10:00-12:30, 14:00-17:00，周二闭馆。市政厅钟楼参观需参加导览团，通常于每日14:30和16:00各有一场，具体请提前至旅游局确认。节假日开放时间可能有调整。`} />
              <InfoRow label="门票价格" value={`波旁公爵宫殿遗迹与博物馆联票：全价8欧元，优惠价（学生、65岁以上）6欧元。仅参观遗迹花园免费。市政厅钟楼导览：5欧元。建议购买穆兰通票（12欧元），涵盖城内主要博物馆及一次钟楼导览。`} />
              <InfoRow label="地址" value={`波旁公爵宫殿：Place de l‘Ancien Palais， 03000 Moulins， France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最便捷。在巴黎Bercy巴士站乘坐FlixBus或Blablabus，约3小时直达穆兰巴士站（Gare Routière），巴士班次频繁，票价低廉，建议提前在线购票。若乘坐火车，需在巴黎奥斯特里茨火车站（Gare d‘Austerlitz）乘车至讷韦尔（Nevers），再转乘区域列车（TER）约20分钟抵达穆兰，总耗时约2.5小时，车票可在SNCF官网或APP购买。穆兰城内所有景点皆可步行抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲穆兰的故事，就绕不开“波旁”这个如雷贯耳的姓氏。这一切大约始于公元10世纪左右，一个名叫艾马尔的领主在Allier河畔的这片肥沃土地上，建起了一座磨坊（“Moulins”在法语里正是磨坊的意思），并围绕着它筑起了防御工事，这便是城市的雏形。命运的齿轮真正开始加速转动，是在13世纪，这片土地通过联姻，落入了波旁家族的手中。最初，他们只是法兰西王国里众多公爵中的一员，但穆兰作为他们领地的中心，开始积聚力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事的第一个高潮，与一位传奇公爵夫人——安娜·德·博热息息相关。那是15世纪末，她的丈夫波旁公爵皮埃尔二世去世后，她作为摄政，将穆兰变成了一个艺术与文化的璀璨中心。你可以想象一下当时的场景：来自弗拉芒和意大利的艺术家、音乐家、学者汇聚于此，公爵宫殿里夜夜笙歌，充满了人文主义的探讨。安娜公爵夫人本人就是一位极具品味的艺术赞助人，她下令制作了堪称国宝的《穆兰三联画祭坛画》（如今珍藏在卢浮宫），那柔和圣洁的光线与人物，定义了法国文艺复兴早期绘画的巅峰。那时的穆兰，不是政治风暴的中心，却是一处培育着美与思想的温柔乡，波旁家族的声望与软实力在此达到顶峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的剧本总是充满转折。到了16世纪，当时的波旁公爵查理三世卷入了反对法国国王弗朗索瓦一世的叛乱，这就是著名的“康斯塔布尔·德·波旁叛变”。叛乱失败后，国王震怒，作为惩罚，于1527年下令拆毁象征着波旁权力的穆兰公爵宫殿。那是一场系统性的摧毁，我们今天看到的巨大废墟，就是那场政治清算的残酷见证。宫殿的梁木被运走，石材散落，昔日的繁华中心沦为一片荒芜。这次毁灭，几乎掐断了穆兰作为公爵首府的命脉，波旁家族的重心也从此转移。穆兰就像一个曾经锦衣玉食、突然家道中落的贵族子弟，陷入了漫长的沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的几个世纪，穆兰在法国的历史大潮中起伏，但始终保持着一种外省小城的宁静。它经历了宗教战争的波及，见证了法国大革命的浪潮（幸运的是，那座美丽的钟楼没有被摧毁），也迎来了工业革命的火车汽笛。它不再扮演主角，却成为了一个忠实的记录者。时间来到20世纪，一次颇具远见的捐赠为小城注入了新的灵魂。1979年，法国著名舞台服装设计师雷内·阿里奥，将他毕生收藏的超过一万件从18世纪至今的剧院、歌剧、芭蕾舞剧服装捐赠给了家乡。于是，那座承载着破碎宫廷梦的波旁公爵宫殿遗迹旁，建起了“国家舞台服装中心”。历史在这里完成了一个奇妙的闭环：从权力的戏剧，转向了艺术的戏剧；从真实的宫廷兴衰，到舞台上演绎的悲欢离合。战争与毁灭的终点，竟开出了最绚丽的艺术之花。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味穆兰，你需要一整天，并把自己调整到“慢速档”。建议早晨9点左右抵达，这时阳光柔和，老城刚刚苏醒，店铺陆续开门，是最有生活气息的时候。整体游览可以围绕“历史轴线”与“生活脉络”两条线交织进行，预计耗时6-8小时，节奏宜慢不宜快。上午专注于老城核心的历史遗迹与建筑，下午则可以穿插河边漫步、咖啡馆小憩和探寻特色小店。这样的安排既能深刻理解其历史重量，又不失体验当下小城慵懒惬意的灵魂，避免走马观花式的疲惫。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观钟楼内部必须参加导览团，且台阶陡峭狭窄，务必穿着舒适防滑的鞋子。老城许多小商店和咖啡馆中午12点到下午2点会雷打不动地休息，规划行程时请注意避开这个“神圣”的午休时段。周日大部分商店和博物馆都不营业，最好选择工作日或周六前来。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅广场开始你的旅程，仰头仔细打量那座高达45米、装饰繁复如石制蕾丝的火焰哥特式钟楼，听它整点报时那沉稳悠远的钟声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着钟楼旁狭窄的Rue de l’Ancien Palais石板路往下走，让脚步带领你穿越时空，路的尽头豁然开朗处便是波旁公爵宫殿遗迹的震撼景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宫殿遗迹的马拉特翼楼前静立片刻，用手触摸冰凉的石灰岩，观察立面上海豚、绳结等精致的文艺复兴雕刻，想象它昔日的完整与辉煌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进遗迹花园，坐在长椅上，面对那片象征“失去”的空旷草地，读一读信息牌上的历史，让那段关于叛乱与毁灭的故事在脑海中上演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转入旁边的国家舞台服装中心博物馆，在幽暗而充满戏剧性的灯光下，近距离观赏那些华美至极、工艺惊人的芭蕾舞裙与歌剧戏服，完成从历史到艺术的感官切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开博物馆后，绕到老城背面，沿着宁静的Allier河岸散步，看野鸭嬉水，当地人 jogging，从另一个角度回望老城天际线上钟楼的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家老城中心的传统法式小馆享用午餐，比如Place d‘Allier附近的，务必点一道用本地夏洛莱牛肉烹制的菜肴，配上一杯来自卢瓦尔河谷的葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后在城里随意游荡，探访那些隐藏在小巷里的古董店、独立书店或手工巧克力作坊，和店主聊上几句，带走一点属于穆兰的 tangible 记忆。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Allier河对岸的Pont Régemortes桥上`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落时分，以此为前景，可以拍摄到老城建筑群（特别是钟楼）倒映在河水中的金色全景，光线温暖柔和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅钟楼脚下的仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光能照亮钟楼东立面，使用广角镜头从正下方向上拍摄，能极致展现其火焰式哥特风格扶壁与尖塔的冲天动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`波旁公爵宫殿马拉特翼楼侧面长廊`}</h4>
                  <p className="text-sm text-gray-700">{`利用长廊形成的天然框架，拍摄花园绿地和远处的城市房屋，构图极具纵深感，最佳光线在午后，光影对比强烈。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城小巷Rue des Orfèvres`}</h4>
                  <p className="text-sm text-gray-700">{`这条狭窄的古老街道铺着卵石，两侧是色彩斑驳的木筋墙老屋，在正午时分阳光直射时，能拍到明亮与阴影交织的、充满故事感的街景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`国家舞台服装中心博物馆内部（如允许）`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦于某一件精美服装的细节，如刺绣、珠片或裙撑，利用展柜的灯光，拍出极具质感和戏剧性的特写。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`法国对无人机飞行有严格规定，在老城和历史遗迹上空未经批准严禁飞行。拍摄当地人（尤其是市场里的摊主或咖啡馆里的老人）时，请务必先微笑示意，获得对方默许，这是基本的礼貌。室内博物馆拍摄前请确认是否允许使用闪光灯，为了保护珍贵的织物展品，通常都是禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河边的老磨坊改造客栈`}</h4>
                  <p className="text-sm text-blue-800">{`由一座真实的17世纪水磨坊改建，房间保留了原始的木梁和石墙，窗外就是潺潺流水与绿荫，夜晚安静得只能听见水声，性价比极高。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心的设计师小酒店`}</h4>
                  <p className="text-sm text-green-800">{`坐落在一栋经过精心修复的文艺复兴风格建筑里，内部装饰是现代法式简约风，下楼就是最热闹的广场和最好的咖啡馆，位置无敌。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外森林边的庄园民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`距离老城车程约10分钟，是一座19世纪的优雅庄园，拥有大片草坪和玫瑰花园，女主人会奉上自制的果酱和可颂早餐，体验纯粹的法国乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史宫殿遗迹旁的奢华套房`}</h4>
                  <p className="text-sm text-purple-800">{`位于一栋正对波旁公爵宫殿花园的贵族宅邸内，仅有三间套房，装饰极尽古典奢华，仿佛住进了历史里，阳台景观令人屏息。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穆兰的旅游业相对小众，住宿选择不算极多，尤其在夏季音乐节期间，热门酒店需要提前1-2个月预订。老城内的住宿大多由古老建筑改造，可能没有电梯，预订时如有需要请特别注意。选择住在老城内，夜晚和清晨独自漫步在空无一人的古老街巷，是体验穆兰灵魂的绝佳方式。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开穆兰好些天了，但心里总还萦绕着那里钟楼的钟声和石板路的气味。这座城市给我最大的触动，是一种关于“如何面对逝去”的智慧。它没有试图去重建那座辉煌的宫殿，去伪造一个不曾断裂的繁华梦。相反，它坦然地将那片废墟作为城市心脏的一部分，让缺失本身成为最有力的叙事者。这种坦荡，让它免于沦为一座空洞的历史主题公园，而是拥有了真实的生命厚度——有荣耀，有伤疤，有沉寂，也有在伤疤上开出的新的艺术之花。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、迷恋崭新与完整的时代，穆兰像一首舒缓的古老歌谣。它提醒着我们，真正的深度不在于打卡了多少地标，而在于你是否愿意停下来，去聆听石头诉说的往事，去感受一段伟大家族起源地的宁静，去理解辉煌与陨落本就是历史的一体两面。对于每一位厌倦了浮光掠影、渴望在旅途中进行一场安静时光对话的旅人来说，穆兰都不该被错过。它或许不会用惊心动魄的景色冲击你，但它会像一位温和的老朋友，用它沉淀了数个世纪的故事，轻轻叩响你的心门，并在你心里，留下一片沉静而富有力量的余韵。这里不是终点，而是一个关于法国、关于历史、关于我们自身文化寻根的，无比动人的起点。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hospices-de-beaune" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博讷主宫医院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hospices de Beaune</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ville-close-de-concarneau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔卡尔诺封闭之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ville Close de Concarneau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uzes-duchy-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽斯公国古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzès</p>
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
