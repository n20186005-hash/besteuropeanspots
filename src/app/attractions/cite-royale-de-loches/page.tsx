import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛什王家古堡 Cité Royale de Loches｜一半宫殿一半监狱，聆听法国中世纪王权最真实心跳 - 最佳欧洲景点',
  description: '车子驶入洛什小镇，远远地，你就看见了它。不是想象中童话般的尖顶城堡，而是一座沉默、巨大、近乎严峻的岩石堡垒，盘踞在山丘之巅，以绝对压迫感的姿态俯瞰着脚下红瓦屋顶的宁静小镇。空气里有一股特别的混合气味——是石板路被清晨微雨打湿后的清凉土腥，夹杂着远处面包店飘来的黄油焦香。当你开始沿着蜿蜒的古老街道向上...',
}

export default function CiteRoyaleDeLochesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '洛什王家古堡', href: '/attractions/cite-royale-de-loches' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛什王家古堡・Royal Citadel of Loches・法国・安德尔-卢瓦尔省，洛什镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶入洛什小镇，远远地，你就看见了它。不是想象中童话般的尖顶城堡，而是一座沉默、巨大、近乎严峻的岩石堡垒，盘踞在山丘之巅，以绝对压迫感的姿态俯瞰着脚下红瓦屋顶的宁静小镇。空气里有一股特别的混合气味——是石板路被清晨微雨打湿后的清凉土腥，夹杂着远处面包店飘来的黄油焦香。当你开始沿着蜿蜒的古老街道向上攀登，脚步声在狭窄的巷道里回响，四周安静得能听见自己的呼吸和远处教堂的钟声。当地人推着自行车与你擦肩而过，神态悠闲，仿佛那座庞然大物只是他们日常风景里的一部分。
走到城堡入口的吊桥前，那种对比感更强烈了。一边是生机勃勃、挂着鲜花篮的小镇生活，另一边是深不可测、布满箭孔的巨大石墙。穿过门洞的瞬间，温度似乎都下降了几度，光线变得幽暗。你首先面对的是那座令人望而生畏的主塔，它叫做“囚堡”。墙面厚重得仿佛能吸收所有声音，只有风穿过高处窗洞的呜咽。而几步之遥的另一侧，却是线条相对柔和、开着精美窗棂的皇家宅邸。这种并置本身就充满了戏剧张力：极致的权力与极致的囚禁，荣耀与屈辱，阳光与阴影，被一道城墙强行框在了一起。
最打动人的，正是这种毫不掩饰的真实感。这里没有后来凡尔赛宫那种刻意营造的、用来炫耀的浮华。这里的每一块石头都浸透着实实在在的历史重量。你能触摸到囚室里囚徒刻在墙上的绝望划痕，也能在国王的寝宫里想象烛光下决定国家命运的密谈。它不是一座仅供观赏的博物馆，而是一个曾经剧烈跳动过的权力心脏，如今虽然静止，但当你置身其中，依然能感受到它昔日的脉搏，沉重、复杂，带着铁与血的味道。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶入洛什小镇，远远地，你就看见了它。不是想象中童话般的尖顶城堡，而是一座沉默、巨大、近乎严峻的岩石堡垒，盘踞在山丘之巅，以绝对压迫感的姿态俯瞰着脚下红瓦屋顶的宁静小镇。空气里有一股特别的混合气味——是石板路被清晨微雨打湿后的清凉土腥，夹杂着远处面包店飘来的黄油焦香。当你开始沿着蜿蜒的古老街道向上攀登，脚步声在狭窄的巷道里回响，四周安静得能听见自己的呼吸和远处教堂的钟声。当地人推着自行车与你擦肩而过，神态悠闲，仿佛那座庞然大物只是他们日常风景里的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到城堡入口的吊桥前，那种对比感更强烈了。一边是生机勃勃、挂着鲜花篮的小镇生活，另一边是深不可测、布满箭孔的巨大石墙。穿过门洞的瞬间，温度似乎都下降了几度，光线变得幽暗。你首先面对的是那座令人望而生畏的主塔，它叫做“囚堡”。墙面厚重得仿佛能吸收所有声音，只有风穿过高处窗洞的呜咽。而几步之遥的另一侧，却是线条相对柔和、开着精美窗棂的皇家宅邸。这种并置本身就充满了戏剧张力：极致的权力与极致的囚禁，荣耀与屈辱，阳光与阴影，被一道城墙强行框在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这种毫不掩饰的真实感。这里没有后来凡尔赛宫那种刻意营造的、用来炫耀的浮华。这里的每一块石头都浸透着实实在在的历史重量。你能触摸到囚室里囚徒刻在墙上的绝望划痕，也能在国王的寝宫里想象烛光下决定国家命运的密谈。它不是一座仅供观赏的博物馆，而是一个曾经剧烈跳动过的权力心脏，如今虽然静止，但当你置身其中，依然能感受到它昔日的脉搏，沉重、复杂，带着铁与血的味道。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛什王家古堡`} />
                <InfoRow label="英文名称" value={`Royal Citadel of Loches`} />
                <InfoRow label="正式名称" value={`Cité Royale de Loches`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`安德尔-卢瓦尔省，洛什镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国保存最完好的中世纪防御工事群之一，集皇家宫殿与国家监狱于一身，是法国王权从中世纪向文艺复兴过渡的关键见证地。`} />
                <InfoRow label="建筑特色" value={`由一座高达36米的巨大矩形主塔（囚堡）和一座相对优雅的皇家宅邸共同构成，兼具军事防御的粗犷与宫廷生活的精致。`} />
                <InfoRow label="建筑风格" value={`以厚重的罗马式军事建筑为基础，融合了早期哥特式和火焰哥特式的装饰元素，展现了建筑功能决定形式的鲜明对比。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑杰作，更是一部石头写就的权力与囚禁、荣耀与阴谋的史诗，深刻影响了法国历史进程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡建筑群全年开放，但开放时间随季节变化。通常4月至9月为9:30-19:00，10月至次年3月为9:30-17:00。最后入场时间关闭前1小时。主塔（囚堡）在恶劣天气（如强风）或特定维护期间可能临时关闭。每年1月1日、5月1日和12月25日关闭。具体日程建议行前在其官网或当地旅游局核实。`} />
              <InfoRow label="门票价格" value={`成人票（参观全部遗迹，包括主塔、皇家宅邸和圣乌尔斯教堂）约为10.5欧元。优惠票（学生、18-25岁青年及10人以上团体）约为8.5欧元。18岁以下青少年及欧盟内26岁以下学生免费。提供家庭套票。门票可在入口处购买，旺季建议提前在线预订以避免排队。`} />
              <InfoRow label="地址" value={`5 Pl. Charles VII, 37600 Loches, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发：最便捷的方式是从巴黎蒙帕纳斯火车站乘坐TGV高速列车至圣皮埃尔德科尔站（Saint-Pierre-des-Corps，靠近图尔），车程约1小时。然后在此站换乘TER区域列车前往洛什站（Loches），车程约30-40分钟，班次大约每小时一班。从洛什火车站步行至城堡约15分钟，一路上坡，沿途可欣赏小镇风光。
自驾：从巴黎出发沿A10高速公路向南，在图尔附近转A85，再根据指示牌前往洛什，全程约2.5-3小时。城堡附近有付费停车场（如Place de la Marne）。
从图尔出发：图尔是最近的交通枢纽，有多班TER列车和公交车前往洛什，车程约40-50分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`洛什的故事，得从一个叫富尔克·内拉的安茹伯爵说起。这位十世纪的“黑伯爵”是个狠角色，他选择了这座石灰岩山丘，建起了第一座木制堡垒，用来抵御诺曼人的侵袭和巩固自己的势力。最初的动机纯粹是军事和生存。但地理位置太关键了，它扼守着安德尔河谷，是安茹伯爵领地的战略要冲。石头城堡逐渐取代了木头，到了十一世纪，那座标志性的巨大矩形主塔拔地而起，成为当时欧洲最令人印象深刻的防御工事之一。它厚实的墙壁（有些地方厚达三米多）不是为了美观，而是为了在投石机和围攻中存活下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点发生在12世纪。通过联姻和继承，安茹的亨利成为了英格兰国王亨利二世，建立了横跨英吉利海峡的“安茹帝国”，洛什也成了金雀花王朝在法国的重要据点。但法国国王岂能坐视？于是，洛什成了英法百年战争前期激烈争夺的棋子。战争的硝烟最终催生了洛什最传奇的篇章——它与圣女贞德的紧密联系。1429年，在奥尔良取得辉煌胜利后，贞德来到洛什，力劝当时的法国王储查理（后来的查理七世）前往兰斯进行加冕，以正名分。正是在洛什的这座城堡里，年轻的王储被这位农家少女的信念点燃，做出了改变法国命运的决定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`查理七世加冕后，洛什从军事要塞转变为皇家住所。他为心爱的情妇阿涅丝·索蕾修建了那栋优雅的宅邸，引入了当时新兴的火焰哥特式窗饰和更宜居的空间布局。你可以想象，当国王在此居住时，庭院里该是怎样一番车马喧嚣、衣香鬓影的景象。然而，他的儿子路易十一，那位以冷酷和多疑著称的“蜘蛛王”，却赋予了洛什另一个更黑暗的职能——国家监狱。那座坚不可摧的主塔，成了关押重要政治犯的理想之地。权力在这里展现了它的双面性：一面是宫殿里的权谋与享乐，另一面是几十米外塔楼深处的镣铐与呻吟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后数百年，洛什的囚堡声名狼藉。它关押过公爵、主教、阴谋家，包括路易十一自己的亲信，失宠后也被扔了进来。最著名的囚徒之一是米兰公爵卢多维科·斯福尔扎，这位文艺复兴时期著名的艺术赞助人（曾雇佣达·芬奇），在战争中被俘后在此度过了人生最后八年。传说他将囚室墙壁绘满壁画以保持心智。法国大革命期间，它甚至关押过保皇党人和疑似贵族。直到1926年，它才彻底结束了作为监狱的使命。如今，当我们走在那些阴暗的囚室和宽阔的庭院之间，仿佛能同时听到宫廷乐师的鲁特琴声和铁链拖过石地的刺耳摩擦，这种时空交错感，正是洛什独一无二的魅力源泉。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受洛什的魂，我强烈建议你安排一整天时间。最好在早上九点半开门时就抵达，这时晨光斜照，游客稀少，你能独自享受城堡苏醒时的静谧。整体游览大约需要4-5小时，节奏宜慢不宜快。推荐的路线是先“苦”后“甜”：从最沉重、最需要想象力的囚堡开始，沉浸到中世纪最幽暗的历史深处；然后来到相对明亮开阔的皇家宅邸和教堂，感受权力光明的一面；最后在城堡花园或下山到小镇午餐，让心情慢慢平复。这样的顺序能让你对历史的复杂层次有更深刻的体会，情感体验也会有一个完整的起伏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`主塔的旋转楼梯非常狭窄陡峭且光线不足，务必穿一双防滑舒适的鞋子，上下楼时请抓紧扶手。
城堡内大部分区域没有暖气且石墙吸湿，即使夏天内部也可能阴凉，建议带一件薄外套。
部分解说牌只有法文，可在入口处租用英文语音导览器，或者提前下载相关的导览APP，这对理解深厚的历史至关重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的吊桥进入城堡外墙，立刻右转去面对那座高达十层楼的巨大矩形主塔，感受其作为军事堡垒最初的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄旋转的石阶登上主塔顶层，在开阔的平台上迎着风俯瞰整个安德尔河谷和洛什小镇如棋盘般的红色屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`深入主塔内部逐层探索那些阴冷的囚室，蹲下来仔细辨认石壁上被绝望囚徒刻下的十字架、日历和模糊不清的姓名。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主塔的阴影中走出，穿过铺着碎石的庭院，走进相对明亮轻盈的皇家宅邸，欣赏火焰哥特式窗户和复原的十五世纪宫廷房间布置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宅邸二楼的国王大厅里驻足，想象查理七世在此接见圣女贞德并被她说服前往兰斯加冕的那个决定性时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访紧邻宅邸的圣乌尔斯教堂，抬头仰望其精致的扇形拱顶，并在昏暗的光线下寻找阿涅丝·索蕾那雕刻精美的石棺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到城堡东侧的花园和城墙步道，从这里回望整个城堡建筑群的全景，看阳光如何在不同质感的石墙上移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山回到洛什老城，在城堡脚下的共和国广场找一家咖啡馆坐下，点一杯咖啡，看着头顶的庞然大物，消化刚刚经历的一切。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`囚堡仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡第一进庭院靠近吊桥的位置，用广角镜头仰拍主塔的全身，最佳时间是上午十点前或下午四点后，侧光能让石墙的纹理和质感毕露无遗。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙视角看小镇`}</h4>
                  <p className="text-sm text-gray-700">{`从皇家宅邸东侧的花园或城墙步道上，以小镇的红色屋顶和远处的田园风光为背景，将城堡的一部分石墙作为前景框架，营造出历史与生活交融的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`囚室光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个有高窗的囚室（如上层囚室），在正午时分阳光直射入内时，捕捉光线切割黑暗空间、尘埃在光柱中飞舞的强烈对比瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`庭院拱门构图`}</h4>
                  <p className="text-sm text-gray-700">{`在连接不同庭院的门洞或拱廊下，利用其天然的画框效果，拍摄对面建筑（如圣乌尔斯教堂的侧影或主塔的一角），增加画面的层次感和纵深感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部光线普遍较暗，提高感光度或使用大光圈镜头是必要的，但请务必关闭闪光灯以保护古老的壁画和文物。`}</li>
                <li>• {`拍摄当地人或在教堂内请保持尊重，最好先微笑示意或询问是否允许，尤其是在进行较为近距离的肖像拍摄时。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在洛什老城中心由老房子改造的舒适民宿，清晨被面包店的铃声唤醒，推开窗就能看见城堡塔楼的尖顶，老板会给你讲镇上人才知道的历史趣闻。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择距离洛什十分钟车程、由一座十九世纪庄园改造的精品酒店，房间里有复古家具和花园景观，晚餐可以品尝到用卢瓦尔河谷本地食材烹制的法国家常菜。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在图尔市郊一座被葡萄园和森林环绕的豪华城堡酒店，享受水疗和米其林餐盘推荐餐厅，白天驱车前往洛什探索历史，晚上则沉浸在绝对的宁静与奢华之中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`中转便利`}</h4>
                  <p className="text-sm text-purple-800">{`图尔火车站附近的现代设计酒店，交通四通八达，适合想要以图尔为基地，一日内游览洛什、舍农索等多个卢瓦尔河谷城堡的忙碌旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`洛什小镇本身非常安全宁静，但夜晚娱乐活动较少，喜欢夜生活的游客可能更倾向于住在大本营图尔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）和节假日是卢瓦尔河谷的旅游旺季，住宿非常紧俏且价格高昂，务必提前至少两到三个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择自驾，许多乡村住宿提供免费停车，而老城内的酒店停车位可能有限且需额外付费，预订时需确认清楚。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开洛什的时候，我脑子里挥之不去的，是那种巨大的、沉默的“完整性”。它没有试图去讨好谁，没有把自己装扮成一副仅供拍照的漂亮背景板。它诚实地展示着权力的全部面貌：既有决定王国命运的宏大叙事，也有囚徒在暗夜中刻下的卑微痕迹；既有为爱人修建精美宅邸的浪漫，也有将敌人（甚至友人）投入地牢的冷酷。这种不加修饰的呈现，反而赋予它一种直击人心的力量。你会意识到，历史从来不是单线程的光荣进化，而是光明与黑暗永恒交织的复杂织锦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速消费、热衷打卡“网红”景点的时代，洛什这样的地方显得格外珍贵。它要求你慢下来，付出一点体力去攀登，付出一点心力去想象。它不会给你即时、浅薄的快乐，却可能在你心里埋下一颗沉思的种子。当你触摸那些冰凉的石头，站在当年贞德站立过的大厅，或是凝视囚室里一道不知名的刻痕时，你会感觉到自己与一段真实、粗粝、充满张力的过去产生了连接。这种连接，超越了简单的观光，它是一次深刻的历史对话。对于一个真正的深度旅者来说，洛什王家古堡不是旅途中的一个景点，而是一堂关于权力、人性与时间的必修课，值得你专程前来，安静地听它讲述所有未曾被磨平的故事。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arles-amphitheatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔勒古罗马竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arles Amphitheatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roussillon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁西永（红土城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roussillon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conques-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques Abbey</p>
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
