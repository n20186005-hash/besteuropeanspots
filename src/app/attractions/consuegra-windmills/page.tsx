import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '孔苏埃格拉风车群 Consuegra Windmills｜追逐堂吉诃德的梦幻战场，迷失在拉曼查的苍穹与白色巨人之间 - 最佳欧洲景点',
  description: '车子刚拐出平原上的小镇，那片景象就像从褪色的故事书里直接跳了出来——一整排白色的“巨人”，戴着深灰色的圆锥形“帽子”，沉默而威严地站立在褐黄色的、波浪般起伏的山脊线上。拉曼查的天空是一种近乎残酷的、没有边际的蔚蓝，干燥的风卷着尘土和干草的气息扑面而来，呼呼作响，仿佛就是几百年前吹动那些巨大帆布风车叶...',
}

export default function ConsuegraWindmillsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '孔苏埃格拉风车群', href: '/attractions/consuegra-windmills' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`孔苏埃格拉风车群・Consuegra Windmills・西班牙・托莱多省孔苏埃格拉镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐出平原上的小镇，那片景象就像从褪色的故事书里直接跳了出来——一整排白色的“巨人”，戴着深灰色的圆锥形“帽子”，沉默而威严地站立在褐黄色的、波浪般起伏的山脊线上。拉曼查的天空是一种近乎残酷的、没有边际的蔚蓝，干燥的风卷着尘土和干草的气息扑面而来，呼呼作响，仿佛就是几百年前吹动那些巨大帆布风车叶片的同一阵风。那一刻你突然就懂了塞万提斯，在这片天地之间，那些安静的风车看起来是多么像准备冲锋的巨人啊。
沿着碎石路往上走，感官逐渐被打开。脚下是滚烫的石头和稀疏的、扎人的荆棘植物。风的声音是这里永恒的背景乐，有时是低吼，有时是尖锐的口哨，穿过风车石墙的缝隙和木制框架。你能闻到阳光烘烤泥土的味道，混合着远处橄榄林一丝微苦的清香。偶尔有一两个风车内部开放参观，推开门，里面是昏暗的、充满历史尘埃的空间，巨大的石磨盘静静躺在那里，空气中仿佛还悬浮着当年磨坊主辛勤劳作时扬起的、细密的面粉尘。
但孔苏埃格拉最动人的，远不止是这片明信片般的风景。你会在某个风车的阴影下，遇到一位牵着驴子的当地老人，他会用带着浓重口音的西班牙语告诉你，他的祖父曾如何经营其中一个风车。你会看到来自世界各地的游客，举着书，兴奋地比划着堂吉诃德冲锋的姿势，而本地人则可能只是开车上山，在日落时分静静坐在车里，看着这片他们早已习以为常、却依然深爱的土地。这里既是全球文青的朝圣地，也是拉曼查人生活记忆里一个寻常又骄傲的坐标。
它的核心魅力，就在于这种虚实交织的魔力。你脚下是真实的、粗糙的土地，眼前是真实存在的、曾经用于劳作的古老机器。但你的脑海里，却奔涌着文学虚构的狂想——一个落魄骑士的悲壮冲锋，一场与幻想巨人的荒谬战斗。现实与传说在这里碰撞、融合，让这片粗犷的土地散发出一种不可思议的、浪漫而忧伤的诗意。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐出平原上的小镇，那片景象就像从褪色的故事书里直接跳了出来——一整排白色的“巨人”，戴着深灰色的圆锥形“帽子”，沉默而威严地站立在褐黄色的、波浪般起伏的山脊线上。拉曼查的天空是一种近乎残酷的、没有边际的蔚蓝，干燥的风卷着尘土和干草的气息扑面而来，呼呼作响，仿佛就是几百年前吹动那些巨大帆布风车叶片的同一阵风。那一刻你突然就懂了塞万提斯，在这片天地之间，那些安静的风车看起来是多么像准备冲锋的巨人啊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着碎石路往上走，感官逐渐被打开。脚下是滚烫的石头和稀疏的、扎人的荆棘植物。风的声音是这里永恒的背景乐，有时是低吼，有时是尖锐的口哨，穿过风车石墙的缝隙和木制框架。你能闻到阳光烘烤泥土的味道，混合着远处橄榄林一丝微苦的清香。偶尔有一两个风车内部开放参观，推开门，里面是昏暗的、充满历史尘埃的空间，巨大的石磨盘静静躺在那里，空气中仿佛还悬浮着当年磨坊主辛勤劳作时扬起的、细密的面粉尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但孔苏埃格拉最动人的，远不止是这片明信片般的风景。你会在某个风车的阴影下，遇到一位牵着驴子的当地老人，他会用带着浓重口音的西班牙语告诉你，他的祖父曾如何经营其中一个风车。你会看到来自世界各地的游客，举着书，兴奋地比划着堂吉诃德冲锋的姿势，而本地人则可能只是开车上山，在日落时分静静坐在车里，看着这片他们早已习以为常、却依然深爱的土地。这里既是全球文青的朝圣地，也是拉曼查人生活记忆里一个寻常又骄傲的坐标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种虚实交织的魔力。你脚下是真实的、粗糙的土地，眼前是真实存在的、曾经用于劳作的古老机器。但你的脑海里，却奔涌着文学虚构的狂想——一个落魄骑士的悲壮冲锋，一场与幻想巨人的荒谬战斗。现实与传说在这里碰撞、融合，让这片粗犷的土地散发出一种不可思议的、浪漫而忧伤的诗意。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`孔苏埃格拉风车群`} />
                <InfoRow label="英文名称" value={`Consuegra Windmills`} />
                <InfoRow label="正式名称" value={`Molinos de Viento de Consuegra`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`托莱多省孔苏埃格拉镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拉曼查地区最具标志性的景观，是西班牙文学巨著《堂吉诃德》中主人公大战“巨人”的灵感来源与现实原型。`} />
                <InfoRow label="建筑特色" value={`十一座雪白的圆柱形风车与一座中世纪城堡，沿着绵长的山脊线一字排开，构成一幅极具冲击力的史诗画面。`} />
                <InfoRow label="建筑风格" value={`传统的拉曼查地区风车，属于后中世纪至近代的民用工业建筑，造型简朴、功能至上。`} />
                <InfoRow label="文化价值" value={`它已超越其原始的磨坊功能，成为西班牙黄金时代文学与骑士精神的永恒象征，是理解西班牙民族精神的一把钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`风车群所在的 Cerro Calderico 山丘全天24小时开放，可自由参观。山丘上的城堡（Castillo de Consuegra）开放时间较为固定：夏季（4月至9月）通常为上午10:00至晚6:30，冬季（10月至3月）为上午10:00至下午5:30。每周一通常闭馆（节假日除外），圣诞节、元旦及当地重要节庆日也可能关闭，建议出行前查看官网确认。`} />
              <InfoRow label="门票价格" value={`进入风车群所在的山丘区域完全免费。参观城堡需要购买门票，普通票价约5欧元。通常有针对学生、65岁以上老人及儿童（7-12岁）的优惠票价，约3-4欧元。7岁以下儿童可能免费。部分节假日或特定文化活动期间可能有特殊票价。`} />
              <InfoRow label="地址" value={`Cerro Calderico, s/n, 45700 Consuegra, Toledo, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发是最常见的选择。首先抵达马德里巴哈拉斯机场（MAD）或马德里阿托查火车站。自驾是最灵活的方式，沿A-4/E5高速公路向南行驶约130公里，转CM-42公路，车程约1小时45分钟。若无自驾，可从马德里Plaza Elíptica汽车站乘坐ALSA公司的大巴前往孔苏埃格拉，车程约2小时，但班次有限，通常每天2-3班，务必提前查好时刻表并预留充足时间。从托莱多古城出发自驾约1小时。小镇内可步行上山，或搭乘本地出租车至山脚。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲孔苏埃格拉风车的故事，就不能只讲风车。得先从山丘顶上那座黄褐色的、有些残破的城堡讲起。那是摩尔人在公元10世纪左右建造的，名为“Consuegra Castle”，是控制拉曼查平原的战略要地。在基督徒收复失地的漫长岁月里，这座城堡几经易手，见证了无数冲突与鲜血。风车们，是在更和平的年代才陆续登上历史舞台的。大约从16世纪开始，利用风力研磨谷物成为这片肥沃平原上的重要产业，这些实用的“白色巨人”才沿着城堡脚下的山脊线被建造起来。鼎盛时期，山脊上曾有超过三十座风车日夜不休地转动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正让这些沉默的磨坊名垂青史的，并非谷物，而是一位穷困潦倒的作家和他笔下疯癫的骑士。米格尔·德·塞万提斯·萨维德拉在17世纪初创作《堂吉诃德》时，拉曼查平原上这些高耸的风车已是寻常景象。文学研究者普遍认为，孔苏埃格拉这排位置醒目、造型雄壮的风车，极有可能就是激发塞万提斯灵感的直接来源。书中，堂吉诃德将风车幻想成“可怕的巨人”，并催动驽骍难得挺矛冲锋，结果被旋转的叶片狠狠摔到地上。这个荒诞又悲壮的场景，成了世界文学史上最经典的意象之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着工业革命的推进，风力磨坊逐渐被更高效的蒸汽机和电力取代，风车们陆续停止了转动，帆布被收起，巨大的木质骨架慢慢腐朽。它们像被时代遗忘的退役老兵，静静地站在山丘上，任凭风雨剥蚀。直到20世纪中后期，人们才开始重新认识到它们的价值——不是经济价值，而是历史与文化价值。当地政府开始有系统地修复这些风车，不是让它们重新磨面，而是让它们作为文化遗产活下来。其中一座风车“博拉多”（Bolero）的内部被精心修复，恢复了磨面功能，偶尔会为游客演示；另一座“桑丘潘萨”（Sancho Panza）则被改造成了一个小巧的游客中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，这十一座风车大多都有自己的名字，取自《堂吉诃德》中的人物或相关词汇，比如“鲁西恩达”（Rucio）、“卡拉斯科”（Carrasco）等。每年十月，小镇还会举办“藏红花玫瑰节”，风车会成为节庆的华丽背景。它们不再产出面粉，却产出了更宝贵的东西：关于一个时代的记忆，和一份跨越国界的文学共鸣。从实用的农业工具，到文学想象的催化剂，再到永恒的文化地标，孔苏埃格拉风车的变迁，本身就是一部微缩的西班牙文化史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排一整个下午来游览孔苏埃格拉，将行程的黄金时间留给日落。最好在午后三点左右抵达山脚，此时最猛烈的日头已过，光线开始变得柔和。整体游览耗时约3-4小时，节奏宜缓不宜急。先从山脚慢慢向上步行，近距离感受风车的庞大体量，参观内部开放的风车。然后登上城堡，从制高点俯瞰风车群与无垠平原构成的绝景。最后，在日落前选好一个最佳位置，静静等待一天中最魔幻的时刻降临。这样的安排能让你充分体验从细节到全景、从历史现实到文学意境的层层递进，并最终以最壮丽的日落作为高潮收尾。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`拉曼查夏季阳光极其暴烈，务必携带充足饮用水、防晒霜、帽子和太阳镜，山脊上毫无遮荫。春秋季风可能非常大，需备防风外套。穿着绝对要选择舒适耐走的平底鞋，山路多为碎石和土路。小镇餐馆关门较早，若计划晚餐，最好提前安排或返回托莱多/马德里。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的停车场出发，沿着那条被无数脚步磨亮的土黄色小路开始缓坡上行，让第一座风车“桑丘潘萨”由远及近，逐渐占据你的整个视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进“博拉多”风车内部，触摸冰凉粗糙的石壁，仰头看那错综复杂的木质传动结构，想象当年磨盘轰隆转动、面粉飞扬的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着山脊线漫步，用手掌感受每一座风车白色灰泥墙体的不同质感，辨认它们各自的名字铭牌，寻找《堂吉诃德》书中角色的对应关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上山顶的城堡废墟，站在古老的城垛边，让旷野的风猛烈吹拂，看那十一座白色风车如士兵列队般在脚下延伸向地平线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡阴影下的石阶上小坐片刻，喝一口自带的水，看盘旋的飞鸟划过蔚蓝天幕，感受历史沧桑与当下宁静交织的复杂心绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山，选择一个位于风车群中段的侧面位置，最好能同时将两三座风车和城堡纳入视野，静候太阳向地平线沉去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当日轮变成橙红色的火球，将风车的白墙染成金黄、继而变成绯红剪影时，慢慢沿着来时路下山，回望身后逐渐沉入暮色的山脊轮廓线。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西北角城墙缺口处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，从此处向西拍摄，可以将数座风车作为前景，远方无尽的平原和绚烂的晚霞作为背景，构图极具纵深感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`风车“鲁西恩达”的背面`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，站在风车投下的长长阴影边缘，拍摄风车巨大的石砌基座和木制框架的局部特写，质感与光影对比强烈。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`山脊线东侧低洼处仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳刚升起时，从此位置用广角镜头向上拍摄，能同时囊括数座风车、城堡以及湛蓝的天空，画面干净雄伟，富有几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从“卡拉斯科”风车门洞内向外框景`}</h4>
                  <p className="text-sm text-gray-700">{`将相机置于风车内部的门框或窗框处，以门洞为画框，拍摄外部另一座风车或城堡的局部，形成有趣的画中画效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇边缘某条小巷的尽头`}</h4>
                  <p className="text-sm text-gray-700">{`利用长焦镜头，从镇里某条狭窄街道的尽头远眺山丘上的风车群，能将当地日常生活与远方的传奇地标压缩在同一画面中，充满生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`日落后的“蓝色时刻”（Blue Hour）是拍摄风车剪影和深邃蓝调天空的绝佳时机，别急着离开。使用无人机前务必查清当地法规，该区域可能因靠近城堡古迹有飞行限制。尊重当地居民隐私，避免将镜头对准私人住宅的窗户或院内。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济实用之选`}</h4>
                  <p className="text-sm text-blue-800">{`孔苏埃格拉镇上由家族经营的乡村旅馆（Casa Rural），房间简朴干净，早餐能尝到主人自制的果酱和当地奶酪，晚上能听到小镇宁静的呼吸声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸体验之选`}</h4>
                  <p className="text-sm text-green-800">{`托莱多古城内的百年历史建筑改造的精品酒店，住在世界文化遗产里，白天去风车群朝圣，晚上回到中世纪街巷中享用晚餐，穿越感十足。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`奢华放松之选`}</h4>
                  <p className="text-sm text-yellow-800">{`拉曼查平原腹地、由古老橄榄庄园改造的五星级酒店，拥有无边泳池和全景露台，在星空下品尝当地葡萄酒，将田园诗意与现代舒适完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特冒险之选`}</h4>
                  <p className="text-sm text-purple-800">{`预订附近乡村的“风车屋”——真正由古老风车塔楼改造的迷你住宅，空间紧凑但充满奇趣，圆形的房间里入睡，体验一把当“桑丘”或“堂吉诃德”的感觉。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`孔苏埃格拉镇本身很小，住宿选择有限且条件相对简单，旺季务必提前数月预订。若追求更多的餐饮和夜生活便利，建议以托莱多古城为基地进行一日游。选择乡村住宿时，最好有自驾车，否则交通会极为不便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开孔苏埃格拉的时候，你的背包里可能没有带走一片砖石，但心里一定装走了一些别的东西。也许是那片土地特有的、混合着干草与尘土的旷野气息，也许是风穿过耳边时，仿佛带来的古老骑士的叹息。这个地方教会我们的，是一种“有厚度的观看”。你看到的不仅仅是十一座旧风车，你看到的是一整部西班牙的农耕史，一场文学史上最著名的错觉与战斗，以及拉曼查人民数百年来与这片严酷而美丽土地相依为命的生活方式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求效率、追求“打卡”的快节奏时代，孔苏埃格拉的存在像一种温柔的抵抗。它邀请你慢下来，用脚步丈量山脊，用皮肤感受风与阳光，用想象力去填补历史与文学留下的空白。它不提供惊险的游乐设施，不售卖浮华的纪念品，它只提供一片天空、一阵风、一排白色的沉默巨人，和无穷无尽的故事空间。正是在这种近乎原始的简单与空旷中，我们反而有机会触碰到自己内心那些关于冒险、关于理想、关于与现实温柔或激烈对抗的永恒冲动。这，正是每一位渴望深度游的灵魂，所应追寻的旅行真谛。来这里，不只是为了看风车，更是为了在堂吉诃德战斗过的天空下，找回一点点属于自己的、可能有点傻气却无比珍贵的骑士梦想。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alquezar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔克萨尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alquézar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ronda-cliff-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    龙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">龙达悬崖小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ronda</p>
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
