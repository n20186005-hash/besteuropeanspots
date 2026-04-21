import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图宾根老城 Tübingen Old Town｜内卡河畔的彩色时光胶囊与诗人之城 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下这个画面：你从火车站走出来，穿过几条寻常的街道，一个转弯，时间“唰”地一声就倒流了。扑面而来的，首先是颜色——芥末黄、草莓粉、薄荷绿、天空蓝，这些饱和度极高的色彩，不是刷在平整的墙面上，而是镶嵌在一栋栋歪歪扭扭、肩膀挨着肩膀的木桁架老房子的骨架上。黑色的木条是它们的肋骨，撑起几百年...',
}

export default function TuebingenOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '图宾根老城', href: '/attractions/tuebingen-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图宾根老城・Tübingen Old Town・德国・图宾根`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下这个画面：你从火车站走出来，穿过几条寻常的街道，一个转弯，时间“唰”地一声就倒流了。扑面而来的，首先是颜色——芥末黄、草莓粉、薄荷绿、天空蓝，这些饱和度极高的色彩，不是刷在平整的墙面上，而是镶嵌在一栋栋歪歪扭扭、肩膀挨着肩膀的木桁架老房子的骨架上。黑色的木条是它们的肋骨，撑起几百年的岁月，白色或彩色的泥灰填充其间，像一幅幅巨大的、立体的几何画。空气里有种淡淡的、混合着古老木料、河边水汽、还有从某扇虚掩的门后飘出的现磨咖啡香的味道。
接着，你的耳朵会捕捉到声音的层次。远处内卡河永不止息的、轻柔的哗哗声是永恒的底噪。石板路上行李箱轮子发出的咕噜声，很快就被学生的谈笑声、自行车的铃声所取代。是的，这里是图宾根，一座被大学“腌制”了五百多年的老城。那些色彩明媚的老房子，一楼可能是售卖复古眼镜的精品店，二楼可能藏着一间哲学研讨室，阁楼上或许正住着一个攻读中世纪文学的学生。历史不是被供奉在玻璃柜里，而是就晾晒在窗台盛开的天空葵旁边，就流淌在抱着书本、匆匆穿过拱门走廊的年轻人身上。
走到集市广场（Marktplatz），感官的盛宴达到高潮。每周几次的市集上，摊主们撑起红色的棚子，售卖着施瓦本地区当季的蔬果、巨大的白芦笋、还有各种香肠和奶酪。广场中央矗立着16世纪的哥特式喷泉，海神雕像的表情仿佛也在欣赏这鲜活的一幕。而这一切的背景板，是那座有着鲜红色陡峭屋顶和精美天文钟的老市政厅（Rathaus），它的外墙画满了星象图和寓言壁画，在阳光下闪闪发光。站在这里，你会感觉自己同时置身于一个中世纪的市镇、一个活跃的大学社区和一个充满生活气息的现代小镇——这三者毫无冲突，和谐得就像内卡河水自然绕过的那个小岛。
最动人的，或许是走到内卡河畔的瞬间。那座古老的木桥（Holzbrücke）连接着老城和对岸。站在桥上回望，整个老城如同一个精心搭建的彩色积木模型，沿着河岸的陡坡层层叠叠地爬升上去，最终以那座威严的图宾根城堡（Schloss Hohentübingen）作为句点。河里有标志性的“撑船”（Stocherkahn），一种平底长船，学生们会撑着长篙载着游客或自己庆祝。水流声、欢笑声、教堂的钟声交织在一起，你会明白为什么诗人会说这里的时间流淌得比别人慢。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下这个画面：你从火车站走出来，穿过几条寻常的街道，一个转弯，时间“唰”地一声就倒流了。扑面而来的，首先是颜色——芥末黄、草莓粉、薄荷绿、天空蓝，这些饱和度极高的色彩，不是刷在平整的墙面上，而是镶嵌在一栋栋歪歪扭扭、肩膀挨着肩膀的木桁架老房子的骨架上。黑色的木条是它们的肋骨，撑起几百年的岁月，白色或彩色的泥灰填充其间，像一幅幅巨大的、立体的几何画。空气里有种淡淡的、混合着古老木料、河边水汽、还有从某扇虚掩的门后飘出的现磨咖啡香的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接着，你的耳朵会捕捉到声音的层次。远处内卡河永不止息的、轻柔的哗哗声是永恒的底噪。石板路上行李箱轮子发出的咕噜声，很快就被学生的谈笑声、自行车的铃声所取代。是的，这里是图宾根，一座被大学“腌制”了五百多年的老城。那些色彩明媚的老房子，一楼可能是售卖复古眼镜的精品店，二楼可能藏着一间哲学研讨室，阁楼上或许正住着一个攻读中世纪文学的学生。历史不是被供奉在玻璃柜里，而是就晾晒在窗台盛开的天空葵旁边，就流淌在抱着书本、匆匆穿过拱门走廊的年轻人身上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到集市广场（Marktplatz），感官的盛宴达到高潮。每周几次的市集上，摊主们撑起红色的棚子，售卖着施瓦本地区当季的蔬果、巨大的白芦笋、还有各种香肠和奶酪。广场中央矗立着16世纪的哥特式喷泉，海神雕像的表情仿佛也在欣赏这鲜活的一幕。而这一切的背景板，是那座有着鲜红色陡峭屋顶和精美天文钟的老市政厅（Rathaus），它的外墙画满了星象图和寓言壁画，在阳光下闪闪发光。站在这里，你会感觉自己同时置身于一个中世纪的市镇、一个活跃的大学社区和一个充满生活气息的现代小镇——这三者毫无冲突，和谐得就像内卡河水自然绕过的那个小岛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的，或许是走到内卡河畔的瞬间。那座古老的木桥（Holzbrücke）连接着老城和对岸。站在桥上回望，整个老城如同一个精心搭建的彩色积木模型，沿着河岸的陡坡层层叠叠地爬升上去，最终以那座威严的图宾根城堡（Schloss Hohentübingen）作为句点。河里有标志性的“撑船”（Stocherkahn），一种平底长船，学生们会撑着长篙载着游客或自己庆祝。水流声、欢笑声、教堂的钟声交织在一起，你会明白为什么诗人会说这里的时间流淌得比别人慢。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图宾根老城`} />
                <InfoRow label="英文名称" value={`Tübingen Old Town`} />
                <InfoRow label="正式名称" value={`Tübingen Old Town`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`图宾根`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座将中世纪风貌与五百年大学精神完美融合、未经战火摧毁的活化石大学城。`} />
                <InfoRow label="建筑特色" value={`以木桁架（Fachwerk）房屋为主，色彩斑斓，紧密排列于内卡河陡坡上，形成错落有致的童话天际线。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期至文艺复兴时期的德国木桁架建筑风格为核心，混杂了哥特式教堂、巴洛克装饰元素和19世纪的浪漫主义改建。`} />
                <InfoRow label="文化价值" value={`德国浪漫主义的摇篮之一，诗人荷尔德林、黑格尔、谢林等思想巨匠曾在此生活，至今仍是知识与生活交织的“片刻永恒的缩影”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城街道与公共区域全天候开放。内部景点如荷尔德林塔、图宾根城堡博物馆、圣乔治教堂等有独立开放时间：一般为周二至周日10:00-17:00，周一休息。圣诞市场期间（十一月下旬至十二月下旬）整个老城开放至夜晚。部分小店周日可能不营业。`} />
              <InfoRow label="门票价格" value={`漫步老城本身免费。主要景点收费：图宾根城堡博物馆门票约5欧元，荷尔德林塔门票约3欧元，圣乔治教堂塔楼登顶约2欧元。学生及儿童享有折扣。建议购买“图宾根卡”，涵盖多处景点及公共交通。`} />
              <InfoRow label="地址" value={`Tübingen Altstadt, 72070 Tübingen, Germany`} />
              <InfoRow label="交通方式" value={`从斯图加特机场出发：乘坐S-Bahn（S2或S3线）直达图宾根主火车站，车程约1小时，班次频繁，每20分钟一班。从斯图加特主火出发：乘坐RE或IC火车，约40-50分钟可达。抵达图宾根主火车站后，老城就在步行范围内（约15分钟），也可乘坐公交1、2、3、4路到“Holzmarkt”或“Neckarbrücke”站。城内强烈推荐步行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`图宾根的故事，始于一个“堡”和一所“学校”。早在11世纪，霍亨索伦家族就在今天的城堡山上建立了一座堡垒，用以控制内卡河的要道。山脚下的定居点慢慢繁荣，在12世纪末被正式授予了城市权利。最初的图宾根，就是这么一个典型的、由领主城堡庇护下的中世纪集镇。石头城墙圈起一片安全区域，市民们在此交易、生活，修建起了最早的圣乔治教堂。那时的老城格局，其实已经大致定型——以集市广场为中心，放射出蜿蜒狭窄的小巷，房子用木材和黏土建造，紧密相依以抵御风寒和可能的侵袭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点，发生在命运般的1477年。符腾堡伯爵埃伯哈德五世（后来成为第一位符腾堡公爵）做了一件眼光极为长远的事：他创立了图宾根大学。在当时，这所大学就像一颗充满生命力的种子，被埋进了古老城镇的土壤里。一开始，大学散落在老城的各个建筑里，教授和学生与市民混居。知识的气息开始渗透进木桁架的缝隙和石板路的凹槽。宗教改革时期，图宾根成为了新教的重要中心，大学更是吸引了全欧洲的学者。那些我们今天觉得浪漫的、色彩缤纷的木桁架房子，很多就是在16到17世纪，随着大学和城市的繁荣而大量兴建或改建的。它们不是为游客准备的布景，而是当时蓬勃发展的市民阶层和学者社群实实在在的家园与活动场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`18世纪末到19世纪初，图宾根迎来了它的“星光时刻”。一股后来被称为“德国浪漫主义”的思潮在这里萌芽。而它的中心人物之一，是诗人弗里德里希·荷尔德林。他生命中最灰暗也最富创造力的时期，正是在图宾根度过的。你一定会去拜访的“荷尔德林塔”，那座矗立在河边的黄色塔楼，就是他朋友收留他、让他度过精神崩溃后三十多年余生地方。从塔楼的小窗望出去，就是内卡河与老城的景色，这片风景无疑慰藉了诗人，也化入了他的诗行。与此同时，年轻的黑格尔、谢林、以及诗人乌兰德，都曾在这所大学的“神学院”同窗共读，他们深夜在酒馆或宿舍里的激烈辩论，无形中为德国哲学和文学的星空点燃了最初的、最亮的几颗星。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`令人无比庆幸的是，图宾根老城奇迹般地躲过了两次世界大战的毁灭性轰炸。据说，是因为盟军飞行员接到命令，要保留这座重要的大学城。于是，当德国的许多历史名城都沦为废墟时，图宾根的中世纪心脏依然完好无损地跳动着。战后，城市的扩张主要在老城之外进行，这让老城得以完整保留其肌理。修缮工作遵循“修旧如旧”的原则，那些木桁架房子被精心维护，颜色被按照传统恢复，但内部则引入了现代化的生活设施。它没有变成博物馆式的空壳，大学一如既往地为其注入青春血液。市民、学生、学者、店主，依然在这里生活、工作、思考、庆祝，让这座“时光胶囊”里充满了鲜活的呼吸和温度。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的图宾根老城之旅，应该像品味一杯层次丰富的当地葡萄酒，需要从清晨到日暮，放慢脚步去感受。建议上午九点左右抵达，这时旅行团还未涌入，阳光正温柔地照亮东面的房屋，集市广场可能正开始摆摊，充满生机。整体游览可以安排一整天，节奏务必悠闲，以漫步和发呆为主。上午专注探索老城内部蜿蜒的小巷和核心广场，下午留给河畔风光、登高望远和文化景点。傍晚则是等待金色夕阳洒在内卡河与彩色房子上的 magic hour。这样的安排能让你同时感受到老城的静谧与喧闹、历史与当下。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午的集市非常热闹，是体验本地生活的好时机，但此时主街人也最多，若想安静拍照请错开此高峰。老城街道多为凹凸不平的鹅卵石路，请务必穿一双舒适耐走的平底鞋。部分小巷非常狭窄且安静，请尊重当地居民的隐私，拍照时注意不要将镜头对准别人家的窗户。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从集市广场（Marktplatz）开始你的旅程，摸一摸老喷泉冰凉的石壁，看鲜红屋顶的老市政厅天文钟指针移动，感受市集上刚摆出来的新鲜草莓的香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进圣乔治教堂（Stiftskirche）内部，让你的眼睛适应昏暗后，去寻找那些雕刻精美无比的胡桃木唱诗班座椅，上面布满讽刺而幽默的中世纪生活场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过挂满爱情锁的内卡河老木桥（Holzbrücke），到对岸的回望平台上，用最经典的视角为对岸那一片层层叠叠的彩色积木房子拍下第一张全景照。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身沿着“哲学家小径”（Philosophenweg）向上漫步一段，这是一条被绿荫覆盖的安静坡道，黑格尔们可能也曾在此散步思索，从高处缝隙间俯瞰老城别有风味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返老城，故意迷失在那几条最窄的小巷里，比如下街（Untere Gasse），抬头看那些几乎要碰到一起的凸窗，观察每一栋木桁架房子纹样的细微不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到集市广场附近的学生酒馆（如“Boulanger”或“Nordstadt”），点一份施瓦本地区的特色面食“Maultaschen”，就着一杯本地啤酒，融入当地学生的午餐氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午的时光留给荷尔德林塔（Hölderlinturm），轻轻走过吱呀作响的木地板，站在诗人当年眺望的小窗前，静静地看一会儿不变的河水流过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，去体验一次内卡河撑船（Stocherkahn），让自己漂在河心，看夕阳的金辉如何一点一点为老城墙和城堡山披上温暖的外衣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当暮色四合，街灯初上，再次游走在安静下来的小巷中，此时橱窗的灯光暖黄，石头路面泛着微光，你会听到历史在角落里的轻声细语。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`内卡河北岸木桥东侧岸边`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时至日落后蓝调时刻，利用河面倒影拍摄对岸老城与城堡山的全景，将撑船作为前景点缀画面，构图力求平衡宁静。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣乔治教堂塔楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后（需少量门票）在四个方向的不同拱窗后拍摄，特别是南向拱窗，能将老城密集的红色屋顶、远处的田野和内卡河湾一并纳入取景框，光线在下午最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`荷尔德林塔对面的河畔小径`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光照亮塔楼黄色的墙面时，以塔楼为主体，前景带入内卡河的一角与几片绿叶，营造出诗意而宁静的孤独感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`集市广场老市政厅侧面小巷（Kornhausstraße）`}</h4>
                  <p className="text-sm text-gray-700">{`利用小巷的纵深感，将色彩鲜艳的木桁架房子作为引导线，焦点对准远处市政厅华丽的壁画外墙，等待一个行人或骑自行车的人走过增添生气。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“下街”或“犹太巷”的狭窄处`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分当阳光从狭窄的天空直射下来时，仰拍两侧倾斜的木桁架房子和点缀其间的鲜花，获得极具戏剧张力的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`图宾根老城的光影变化极美，侧光能突出木桁架的立体纹理，而顺光则能完美展现房屋色彩的鲜艳。拍摄居民或学生时请务必先微笑询问，获得同意后再拍，他们通常很友好。使用广角镜头能捕捉小巷的纵深感，而一支长焦镜头则适合从河对岸捕捉建筑细节和人物瞬间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心的木梁阁楼`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在集市广场某栋16世纪木桁架建筑的顶层阁楼改造的公寓里，晚上听着钟楼报时入睡，清晨被透过斜窗的阳光和广场上的面包车声音唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`内卡河畔的家庭民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择河对岸非旅游核心区但步行可达的安静住宅区，房东可能是大学的退休教授，早餐时会和你聊荷尔德林，从房间窗户就能看到老城全景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`大学区的设计师小酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由老学生宿舍改造，风格简约现代又保留了老建筑的挑高和窗型，位置极佳，深入学生生活圈，晚上可以轻易找到有现场音乐的小酒馆。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡山下的浪漫花园酒店`}</h4>
                  <p className="text-sm text-purple-800">{`位于从老城上城堡的坡道旁，带一个隐秘的玫瑰花圃，房间装饰着复古家具，走累了一天回来可以在花园里喝杯雷司令，远离喧嚣但又不失方便。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`图宾根是大学城，学期期间（尤其是夏季学期）住宿相对紧张且价格可能上浮，建议提前数周预订。老城核心区的住宿可能需爬很多楼梯且夜晚酒吧区会有些喧闹，追求绝对安静请选择河对岸或山坡上的住处。周末和节假日通常有大量文化活动和学生庆典，既是体验的好时机，也意味着需要更早规划行程。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图宾根很久以后，我发现自己最怀念的，不是某一张明信片般的照片，而是那种“生活在别处”却无比真切的感觉。这座城市有一种神奇的魔法，它把厚重的历史、深邃的哲思和青春的活力，像编织一幅精美的挂毯一样，经纬交错地融合在一起。你踩着的每一块被磨得发亮的石子，可能都被数百年前的神学院学生、赶集的农妇、乃至荷尔德林本人在沉思中踱步踏过。然而，这历史并非沉甸甸的负担，而是被一代代骑着自行车的年轻人轻盈地承载着，继续向前。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切都被加速的世界里，图宾根老城像是一个温柔的“减速带”。它告诉你，知识可以在一座古老的塔楼里缓慢沉淀，生活可以在一条蜿蜒的河畔悠然展开，美可以被保存在日常的、彩色的、略显歪斜的木房子里。它不是一个仅供瞻仰的遗迹，而是一个依然在认真思考、热烈争论、真诚生活的有机体。来到这里，你会不自觉地放慢脚步，松开紧绷的神经，重新发现漫步、观察和无所事事地发呆的乐趣。它让你相信，有些美好的事物，确实可以穿越时间的洪流，完好无损地抵达现在，并且依然生机勃勃。这，或许就是每一位深度旅者所追寻的，那份连接过去与当下、触动心灵的“片刻永恒”吧。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/meiningen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈宁根老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meiningen Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wartburg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦尔特堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wartburg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hameln-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈默尔恩老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hameln Old Town</p>
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
