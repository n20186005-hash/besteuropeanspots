import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特罗佩亚 Tropea｜悬崖上的甜蜜古镇与海上孤岛教堂 - 最佳欧洲景点',
  description: '车子沿着第勒尼安海的海岸线蜿蜒前行，当那片色彩突然撞进视野时，你会瞬间屏住呼吸。那不是普通的悬崖，而是一整块从碧蓝海水中拔地而起的、泛着蜜糖色泽的巨大砂岩。就在这悬崖之巅，密密匝匝地“长”出了一座城镇，赭石色、淡黄色、珊瑚粉的房屋像积木一样层层叠叠，窗户和阳台上绽放着热烈的九重葛。最惊人的是，在悬崖...',
}

export default function TropeaCalabriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '特罗佩亚', href: '/attractions/tropea-calabria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特罗佩亚・Tropea・意大利・卡拉布里亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着第勒尼安海的海岸线蜿蜒前行，当那片色彩突然撞进视野时，你会瞬间屏住呼吸。那不是普通的悬崖，而是一整块从碧蓝海水中拔地而起的、泛着蜜糖色泽的巨大砂岩。就在这悬崖之巅，密密匝匝地“长”出了一座城镇，赭石色、淡黄色、珊瑚粉的房屋像积木一样层层叠叠，窗户和阳台上绽放着热烈的九重葛。最惊人的是，在悬崖伸向大海的一处孤绝岩柱上，一座小小的、雪白的教堂——“圣玛利亚 dell‘Isola”——仿佛被一只神的手轻轻搁在那里，独自面对着永恒的波涛。这就是你对特罗佩亚的第一眼，像一幅不真实的画，美得近乎霸道。
走近它，感官才真正醒来。空气里有复杂的层次感：海风咸湿的清冽，混杂着从窄巷深处飘来的、新鲜油炸“nduja”辣香肠的浓郁焦香，还有某个院落里熟透的无花果坠地时迸发出的甜蜜气味。你的耳朵会被各种声音填满：海浪拍打悬崖下方隐秘洞穴的深沉回响，广场上老人们用快速、抑扬顿挫的卡拉布里亚方言争论昨日足球赛的高亢声线，以及远处渔船引擎突突的闷响。阳光在这里有了质感，上午它把教堂的白墙照得晃眼，午后则斜斜地切进“王子步道”上的拱廊，在古老方石路上投下长长的、令人心安的黑影。
特罗佩亚不是一座仅供观赏的博物馆。它的灵魂在于那种举重若轻的日常生活感。你会看到主妇们从布满水渍的百年石阶上走下，去悬崖底部岩石间亲手采摘做沙拉的野草；留着银色鬓角的渔夫在午后的小广场上，一边修补渔网一边对路过的每个熟人点头；孩子们的笑声从某个巴洛克式门廊的阴影里窜出来，追逐着滚动的足球。这座小镇奇迹般地将神圣与世俗、壮丽与琐碎无缝编织在一起。朝圣者来这里寻求心灵的慰藉，而当地人则在这里实践着一种被阳光和海风腌制过的、缓慢而扎实的生活哲学。
最打动人心的，或许是那种极致的反差与和谐。一边是深渊般湛蓝、深不可测的大海，象征着自然的无常与力量；另一边是悬崖上紧紧相依、色彩温暖的人间烟火，代表着人类社区的韧性、信仰与对美的执着追求。那座海中的孤岛教堂，正是连接这两种存在的精神桥梁。它让特罗佩亚的魅力超越了单纯的视觉震撼，变成了一种关于如何在天涯海角诗意栖居的深刻启示。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着第勒尼安海的海岸线蜿蜒前行，当那片色彩突然撞进视野时，你会瞬间屏住呼吸。那不是普通的悬崖，而是一整块从碧蓝海水中拔地而起的、泛着蜜糖色泽的巨大砂岩。就在这悬崖之巅，密密匝匝地“长”出了一座城镇，赭石色、淡黄色、珊瑚粉的房屋像积木一样层层叠叠，窗户和阳台上绽放着热烈的九重葛。最惊人的是，在悬崖伸向大海的一处孤绝岩柱上，一座小小的、雪白的教堂——“圣玛利亚 dell‘Isola”——仿佛被一只神的手轻轻搁在那里，独自面对着永恒的波涛。这就是你对特罗佩亚的第一眼，像一幅不真实的画，美得近乎霸道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，感官才真正醒来。空气里有复杂的层次感：海风咸湿的清冽，混杂着从窄巷深处飘来的、新鲜油炸“nduja”辣香肠的浓郁焦香，还有某个院落里熟透的无花果坠地时迸发出的甜蜜气味。你的耳朵会被各种声音填满：海浪拍打悬崖下方隐秘洞穴的深沉回响，广场上老人们用快速、抑扬顿挫的卡拉布里亚方言争论昨日足球赛的高亢声线，以及远处渔船引擎突突的闷响。阳光在这里有了质感，上午它把教堂的白墙照得晃眼，午后则斜斜地切进“王子步道”上的拱廊，在古老方石路上投下长长的、令人心安的黑影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`特罗佩亚不是一座仅供观赏的博物馆。它的灵魂在于那种举重若轻的日常生活感。你会看到主妇们从布满水渍的百年石阶上走下，去悬崖底部岩石间亲手采摘做沙拉的野草；留着银色鬓角的渔夫在午后的小广场上，一边修补渔网一边对路过的每个熟人点头；孩子们的笑声从某个巴洛克式门廊的阴影里窜出来，追逐着滚动的足球。这座小镇奇迹般地将神圣与世俗、壮丽与琐碎无缝编织在一起。朝圣者来这里寻求心灵的慰藉，而当地人则在这里实践着一种被阳光和海风腌制过的、缓慢而扎实的生活哲学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是那种极致的反差与和谐。一边是深渊般湛蓝、深不可测的大海，象征着自然的无常与力量；另一边是悬崖上紧紧相依、色彩温暖的人间烟火，代表着人类社区的韧性、信仰与对美的执着追求。那座海中的孤岛教堂，正是连接这两种存在的精神桥梁。它让特罗佩亚的魅力超越了单纯的视觉震撼，变成了一种关于如何在天涯海角诗意栖居的深刻启示。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特罗佩亚`} />
                <InfoRow label="英文名称" value={`Tropea`} />
                <InfoRow label="正式名称" value={`Tropea`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`卡拉布里亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`意大利南部“海岸明珠”，见证了从古希腊到现代的完整地中海文明层叠。`} />
                <InfoRow label="建筑特色" value={`人类建筑与天然岩石、碧海蓝天的完美共生典范。`} />
                <InfoRow label="建筑风格" value={`层叠的诺曼、巴洛克与地中海乡土风格在悬崖上的和谐交融。`} />
                <InfoRow label="文化价值" value={`凝聚了卡拉布里亚人坚韧、虔诚与甜蜜生活哲学的立体史诗。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。地标性建筑圣玛利亚 dell‘Isola教堂开放时间为每日上午9:00至下午1:00，下午3:00至日落（约晚上7点，夏季会延长）；冬季下午开放时间可能缩短至5点。教堂内部偶尔因宗教活动临时关闭，建议行前在本地旅游局官网确认。古镇内的诺曼大教堂开放时间约为上午8:30至中午12:30，下午3:30至7:30。`} />
              <InfoRow label="门票价格" value={`进入特罗佩亚古镇免费。圣玛利亚 dell‘Isola教堂免费参观，但欢迎自愿捐赠以维护古迹。诺曼大教堂免费进入。部分小型博物馆或私人历史建筑可能收取少量门票（约3-5欧元）。`} />
              <InfoRow label="地址" value={`Via Roma, 89861 Tropea VV, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是拉梅齐亚泰尔梅国际机场。从机场出来后，最便捷的方式是乘坐出租车直达特罗佩亚，车程约1小时，费用较高（约80-100欧元）。更经济的选择是乘坐机场巴士（或出租车）到拉梅齐亚泰尔梅中央火车站，然后搭乘火车前往特罗佩亚站。火车班次约每小时1-2班，车程约50分钟，票价低廉。从特罗佩亚火车站出来，古镇就在步行可及的悬崖上方，拖着行李可搭乘本地小型巴士或出租车（5分钟车程）。自驾是最灵活的方式，沿着壮丽的第勒尼安海沿岸公路SS522行驶即可抵达，但古镇中心为ZTL限行区，需将车停在外围的付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特罗佩亚的故事，得从神话和传说讲起。有人说，是希腊神话中的英雄赫拉克勒斯在完成他的十二项功绩后，回程途中创立了这里，将其作为从西班牙归来的歇脚地。更靠谱的历史则告诉我们，古希腊人确实在此活跃，但让特罗佩亚真正登上历史舞台的，是后来横扫地中海的罗马人。它位于第勒尼安海的重要位置，成为了罗马船队一个关键的中途站，悬崖上的瞭望点是监视海面的绝佳哨所。那些在悬崖内部开凿出的洞穴和隧道网络，据说最早就可以追溯到罗马时期，用于储藏、避难，或许还有更神秘的仪式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪才是特罗佩亚命运的锻造炉。公元九世纪前后，来自北非的萨拉森海盗频繁侵袭意大利海岸。为了躲避劫掠，居民们退守到这座天然要塞般的悬崖之上，高耸的地势成为他们最可靠的城墙。也正是在这个动荡时期，虔诚的修士们选择了悬崖外那座与世隔绝的岩柱，修建了最初的修道院，也就是今天“海上孤岛教堂”的前身。那里不仅是祈祷的静修所，更是危急时刻保存圣物与文书的安全堡垒。想象一下，在烽火连天的年代，修士们在惊涛拍岸的孤岩上，守着油灯抄写经卷，那需要何等的信念。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在诺曼人到来之后。这群来自法国北方的征服者，在十一世纪掌控了南意大利，给特罗佩亚带来了前所未有的秩序与繁荣。我们今天看到的古镇肌理——那些蜿蜒但有序的街巷，围绕中心广场的布局，以及坚固的诺曼风格大教堂的基底，都是在诺曼领主统治下奠定的。特罗佩亚成为了主教区，权势与财富随之增长。贵族们开始在悬崖边兴建宫殿，工匠和商人云集，它从一个防御性据点，蜕变成一个繁荣的港口和行政中心。圣玛利亚 dell‘Isola教堂也在此时被大规模扩建和美化，诺曼式的简洁有力与后来增补的装饰交织在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，特罗佩亚就像一颗被各方势力争夺的宝石，在西班牙阿拉贡王朝、法国安茹家族之间易手，经历过地震的摧残，也见证了瘟疫的阴影。但它总是一次次从废墟中站起来。巴洛克时代的春风终于吹到了这个天涯海角，给许多教堂的外立面和内部带来了华丽的雕塑、炫目的灰泥装饰和金色的祭坛。然而，它没有变成另一个过度修饰的巴洛克展厅，这里的巴洛克是克制的，与朴素的石墙、海天的背景达成了奇妙的平衡。十八、十九世纪，特罗佩亚一度成为周边地区的农业与贸易中心，特别是著名的“红洋葱”的集散地，这种洋葱的甜味，据说就源自海边悬崖独特的矿物土壤和充沛阳光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近现代的考验同样严峻。二战时期，它曾遭受轰炸。战后，像许多南意小镇一样，它经历了年轻人外出寻找工作的人口流失期。但转机恰恰来自于它曾被忽视的“偏远”。当人们开始厌倦大众化的海滨度假，寻找未被过度开发的“真意大利”时，特罗佩亚悬崖上的绝景、深厚的历史层次和未被打扰的生活节奏，一下子击中了世界旅行者的心。它没有因此变得迪士尼化，旅游业更像是一股活水，让老房子被精心修复，让传统手艺有了新市场，让那些关于赫拉克勒斯、关于海盗、关于诺曼骑士和隐修士的故事，重新在海风中生动地流传开来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味特罗佩亚，你需要至少完整的一天，并在此住上一晚。理想的节奏是从清晨开始，那时游客未至，阳光温柔，小镇属于本地人。建议早上八点左右抵达，直接前往圣玛利亚 dell‘Isola教堂，在宁静中独享它的神圣与孤绝。之后缓步上山，用整个上午迷路在古镇的蛛网小巷里，感受光影的变幻和生活的苏醒。正午前后参观诺曼大教堂，然后找一家悬崖餐厅享受漫长的午餐。午后是最佳的“甜蜜慵懒”时间，可以沿着“王子步道”散步消食，或直接下到海滩，跳进水晶般的海水里。傍晚时分，务必抢占一个悬崖边的位置，等待第勒尼安海吞噬太阳的辉煌时刻。入夜后，古镇灯火渐起，又是另一番魔幻景象。这样安排，你才能体验到特罗佩亚从晨祷到夜曲的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）是绝对的高峰，中午时分古镇小巷会非常拥挤炎热，尽量将户外活动安排在早晚。穿着舒适防滑的平底鞋至关重要，因为几乎所有路面都是光滑的古老石板或台阶。在餐厅点鱼时，如果菜单上没标价，务必事先问清“时价”是多少，避免误会。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着清晨第一批阳光洒在白色教堂上，沿着从悬崖凿出的蜿蜒石阶走下，成为今天第一个推开圣玛利亚 dell‘Isola教堂那扇厚重木门的访客。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂返回崖顶后，不要看地图，放任自己迷失在那些以拱廊相连、挂着晾衣绳、飘着咖啡香和新鲜面包气味的狭窄巷弄“vicoli”之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在古镇的至高点，走进那座融合了诺曼底座的雄伟特罗佩亚大教堂，在昏暗的光线下寻找拜占庭风格的“黑圣母”像以及据传由海难幸存者进献的古老船锚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐时间，必须选择一家拥有悬崖露台的餐厅，点一份用本地特产“红洋葱”制作的意面或焖菜，让味蕾和眼睛同时享受盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着被当地人称为“王子步道”的悬崖顶散步道缓缓而行，从各个不可思议的角度俯瞰脚下如绿松石般透明的海水和隐蔽的海蚀洞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着另一侧宽阔的阶梯下到“圣玛利亚”海滩，把双脚浸入清澈得令人难以置信的海水里，或干脆租一把遮阳伞，像意大利人一样无所事事地消磨一个下午。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在太阳开始西沉前一个小时，带上一杯开胃酒，回到悬崖边任何一个开放的观景平台，见证天空和大海从蔚蓝演变成金色、橘红再到紫罗兰色的完整魔法。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕降临后，再次走进古镇中心，在 Piazza Ercole 广场找一张室外餐桌，用一顿以新鲜海鱼为主的晚餐和一杯本地产的Cirò红酒，为这一天画上完美句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛利亚海滩仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，站在沙滩上面向悬崖和孤岛教堂，用广角镜头将金色的岩壁、雪白的教堂、碧海蓝天一同纳入，等待一艘小船划过点缀画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`孤岛教堂露台回望古镇`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏登上教堂后方的小露台，以教堂的石头围栏为前景，聚焦远处悬崖上色彩斑斓、层叠起伏的古镇建筑群，能拍出极具空间纵深感的明信片画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`古镇拱门光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，寻找那些连接两栋建筑的古老拱门“archi”，站在阴影里，对准拱门外被阳光照得发亮的石板路和一角蓝天，形成强烈的明暗对比构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via Boiano 街的经典巷景`}</h4>
                  <p className="text-sm text-gray-700">{`这条陡峭的阶梯小巷是标志性画面，最佳拍摄时间是晴日上午九点或下午五点，阳光斜射能照亮一侧墙壁的暖色调，让另一侧留在深邃的阴影里，增强立体感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从北部Belvedere观景台拍摄全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时驱车或步行至古镇北侧的Belvedere观景台，用长焦镜头压缩空间，可以拍到古镇、孤岛教堂与远处斯特龙博利火山轮廓同框的史诗级全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少海面反光，让海水颜色更加深邃碧蓝。拍摄当地人尤其是长者时，务必先微笑示意并获得默许，尊重他们的隐私。无人机飞行在意大利受到严格管制，在历史中心和教堂上空飞行基本被禁止，起飞前务必查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`悬崖边缘的浪漫栖所`}</h4>
                  <p className="text-sm text-blue-800">{`选择一间直接镶嵌在古老悬崖壁上的精品酒店，房间的露台仿佛悬浮在海面之上，夜晚枕着涛声入眠，清晨睁开眼就是无尽的地平线。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古镇中心的百年宫殿`}</h4>
                  <p className="text-sm text-green-800">{`入住由贵族宫殿改造的奢华民宿，踩着 original 的百年瓷砖，抚摸彩绘的天花板，主人会为你准备一篮本地特产的甜洋葱和葡萄酒作为欢迎礼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`安静街区的家庭式旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`在离中心广场几步之遥但异常宁静的小街里，找一家由家族经营的小旅馆，阳台对着内院的花园，早餐能吃到女主人自制的水果酱和 sfogliatella 酥皮点心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`海景阳台的舒适公寓`}</h4>
                  <p className="text-sm text-purple-800">{`对于家庭或小团体，租下一套带宽敞海景露台的公寓是最佳选择，你可以像本地人一样去早市采购海鲜，然后在自己的露台上烹饪并享受一顿日落晚餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季预订需提前数月，尤其是周末。悬崖边的酒店景色无与伦比，但要注意有些房间需要爬很多台阶才能到达。古镇中心区域夜晚可能比较热闹，喜欢绝对安静的游客可以选择靠近北部Belvedere区域的住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特罗佩亚许久之后，闭上眼，脑海里浮现的不是某个单一的风景明信片，而是一种完整的、多维度的氛围。是海风咸味混合着阳台九重葛花香的气息，是午后广场石凳上被阳光烘烤出的温暖触感，是红色洋葱在锅中慢炖时散发的丝丝甜香。这个地方教会我的，远不止如何欣赏一处绝世美景。它像一个活生生的寓言，展示着人类社群如何在与壮丽而严酷的自然环境的对话中，不仅生存下来，而且创造出了如此富有韧性、虔诚与生活美感的文化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求快速和效率的世界里，特罗佩亚的存在本身就是一种温和的反叛。它不慌不忙，按照太阳的起落、海潮的涨退、洋葱的生长周期来丈量时间。它的美丽不是被精心策划来“服务”旅游业的，而是从长达千年的层叠生活、信仰、劳作与艺术创造中自然生长出来的果实。每一个角落都刻着故事，每一次转角都可能遇见令人屏息的景色，但这一切，都自然而然地融入了老太太买菜的日常、孩童追逐的嬉笑和渔船归港的鸣笛声中。它提醒我们，最深度的旅行，不是去打卡，而是去沉浸，去让感官完全打开，去理解一片土地的心跳和呼吸。如果你也渴望一次能触及灵魂、而不仅仅是眼睛的旅程，那么，请把特罗佩亚列入你的清单，去那个悬崖上的小镇，找回生活本应有的、海阔天空的诗意。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/historic-centre-urbino" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌尔比诺历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Historic Centre of Urbino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fermo-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fermo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veiofro-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦纳夫罗古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veiofro Old Town</p>
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
