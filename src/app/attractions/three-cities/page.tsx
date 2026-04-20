import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '三姐妹城 The Three Cities｜圣约翰骑士团最初的海防线 - 最佳欧洲景点',
  description: '船从瓦莱塔缓缓驶出，大港平静湛蓝的水面像一块巨大的绸缎。但当你靠近对岸，景象陡然不同——那不是一座温柔的城市，而是一堵堵由蜂蜜色石灰岩垒砌的、高耸入云的巨大城墙，沉默、冷峻、带着不容侵犯的威严扑面而来。这就是三姐妹城给你的第一眼震撼。海风带着咸湿的气息和淡淡的柴油味，耳边是渡船引擎的突突声和海鸥的清...',
}

export default function ThreeCitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '三姐妹城', href: '/attractions/three-cities' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`三姐妹城・The Three Cities・马耳他・马耳他大港区（科斯皮夸、森格莱阿、维托里奥萨）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船从瓦莱塔缓缓驶出，大港平静湛蓝的水面像一块巨大的绸缎。但当你靠近对岸，景象陡然不同——那不是一座温柔的城市，而是一堵堵由蜂蜜色石灰岩垒砌的、高耸入云的巨大城墙，沉默、冷峻、带着不容侵犯的威严扑面而来。这就是三姐妹城给你的第一眼震撼。海风带着咸湿的气息和淡淡的柴油味，耳边是渡船引擎的突突声和海鸥的清啸，而那座由城墙围起的古老城池，仿佛一头沉睡的巨兽，静静卧在水边。
登上码头，走进森格莱阿的城门，时间流速瞬间改变。喧嚣的港口被隔绝在外，里面是一个由陡峭坡道、狭窄台阶和无数岔路组成的迷宫。阳光被高高的石墙切割成锐利的光束，打在脚下被数百年脚步磨得发亮的石板上。空气中飘着邻居家炖菜的香味，某扇敞开的门里传来马耳他语的电视声，阳台上晾晒的彩色床单在微风中飘动。这里的居民依然在这里生活、祈祷、买卖，教堂的钟声定时敲响，回荡在错综复杂的小巷里，提醒你这里首先是一个家，然后才是一个景点。
最打动人的，正是这份活生生的历史感。你不会觉得自己是一个闯入博物馆的游客，而像是一个不小心走进别人家后院的访客，带着些许歉意和巨大的好奇。孩子们在古老的广场上踢球，老人们坐在门前的彩绘瓷椅上晒太阳、闲聊，眼神平静地掠过你。这份日常的烟火气，与周遭那些刻着骑士团徽章、布满炮眼和弹痕的宏伟城墙形成了奇妙的共生。它们不是供人瞻仰的死物，而是社区血脉和记忆的一部分，坚固、沉默地守护着一代又一代人的生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`船从瓦莱塔缓缓驶出，大港平静湛蓝的水面像一块巨大的绸缎。但当你靠近对岸，景象陡然不同——那不是一座温柔的城市，而是一堵堵由蜂蜜色石灰岩垒砌的、高耸入云的巨大城墙，沉默、冷峻、带着不容侵犯的威严扑面而来。这就是三姐妹城给你的第一眼震撼。海风带着咸湿的气息和淡淡的柴油味，耳边是渡船引擎的突突声和海鸥的清啸，而那座由城墙围起的古老城池，仿佛一头沉睡的巨兽，静静卧在水边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`登上码头，走进森格莱阿的城门，时间流速瞬间改变。喧嚣的港口被隔绝在外，里面是一个由陡峭坡道、狭窄台阶和无数岔路组成的迷宫。阳光被高高的石墙切割成锐利的光束，打在脚下被数百年脚步磨得发亮的石板上。空气中飘着邻居家炖菜的香味，某扇敞开的门里传来马耳他语的电视声，阳台上晾晒的彩色床单在微风中飘动。这里的居民依然在这里生活、祈祷、买卖，教堂的钟声定时敲响，回荡在错综复杂的小巷里，提醒你这里首先是一个家，然后才是一个景点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这份活生生的历史感。你不会觉得自己是一个闯入博物馆的游客，而像是一个不小心走进别人家后院的访客，带着些许歉意和巨大的好奇。孩子们在古老的广场上踢球，老人们坐在门前的彩绘瓷椅上晒太阳、闲聊，眼神平静地掠过你。这份日常的烟火气，与周遭那些刻着骑士团徽章、布满炮眼和弹痕的宏伟城墙形成了奇妙的共生。它们不是供人瞻仰的死物，而是社区血脉和记忆的一部分，坚固、沉默地守护着一代又一代人的生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`三姐妹城`} />
                <InfoRow label="英文名称" value={`The Three Cities`} />
                <InfoRow label="正式名称" value={`The Three Cities`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`马耳他大港区（科斯皮夸、森格莱阿、维托里奥萨）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是圣约翰骑士团抵达马耳他后最早的定居点和第一道海防线，比后来的首都瓦莱塔历史更悠久，堪称“马耳他骑士团历史的摇篮”。`} />
                <InfoRow label="建筑特色" value={`由连绵的巨型石灰岩防御城墙、堡垒、密集的巴洛克式教堂和迷宫般的窄巷民居构成，宛如一座直接从岩石中生长出来的巨大海上堡垒。`} />
                <InfoRow label="建筑风格" value={`以16-17世纪军事防御建筑为核心，融合了中世纪晚期、文艺复兴及巴洛克风格的民用和宗教建筑。`} />
                <InfoRow label="文化价值" value={`是马耳他大围攻历史的活化石，保留了未被大规模旅游业改造的、最原汁原味的马耳他本土社区生活气息。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`三姐妹城是开放的居住区，全天24小时可自由漫步。其内部的多个博物馆（如海事博物馆、宗教艺术博物馆）及历史建筑（如圣劳伦斯教堂、胜利圣母教堂）通常开放时间为周一至周日，上午9:00至下午5:00。部分小型博物馆周一闭馆。最重要的军事要塞——圣安杰洛堡的开放时间较为多变，建议行前在其官网核实最新时间。夏季（6月至9月）开放时间通常更长。`} />
              <InfoRow label="门票价格" value={`漫步古城本身完全免费。进入单个博物馆或历史建筑门票约5-10欧元不等。圣安杰洛堡门票约15欧元，通常包含语音导览。学生、老年人及儿童通常享有折扣优惠。建议购买“马耳他遗产通行证”，可进入多个景点，更为划算。`} />
              <InfoRow label="地址" value={`The Three Cities, Grand Harbour, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场出发，最推荐乘坐出租车或预约接机服务，车程约20-30分钟，费用20-30欧元，是最省时省力的方式。若从首都瓦莱塔出发，体验最佳的方式是在瓦莱塔的码头（如下巴拉卡花园下方）乘坐当地的“dghajsa”（传统木质贡多拉）摆渡船，5分钟即可横跨大港抵达三姐妹城的码头，船票仅需2-3欧元，班次频繁。也可从瓦莱塔乘坐公交线路1、2、3等，穿过隧道，约15分钟到达科斯皮夸的公交总站。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1522年说起。被奥斯曼帝国从罗德岛赶出的圣约翰骑士团，在海上漂泊了七年，终于在1530年从神圣罗马帝国皇帝查理五世手中获得了马耳他这块贫瘠的岩岛作为封地。当他们驾船驶入这座天然良港时，眼前只有两座光秃秃的半岛：伯尔古和森格莱阿。骑士团的大团长决定，这里就是他们的新家。他们立刻开始加固原有的简陋防御，将伯尔古半岛命名为“维托里奥萨”（意为“胜利之城”），并在森格莱阿和后来发展的科斯皮夸修筑城墙和堡垒。这里，成了骑士团在地中海上最前沿的军事据点，也是未来辉煌的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的试炼在1565年到来。奥斯曼帝国苏丹苏莱曼大帝派出了史上最庞大的舰队，誓要拔掉这颗眼中钉。这场惨烈的“马耳他大围攻”的主战场，正是三姐妹城。数月间，炮弹如雨点般倾泻在这些新建的城墙上，骑士和守军伤亡惨重，城内的平民挤在地下室里，忍受着饥饿和恐惧。最危急的时刻，奥斯曼军队几乎突破了森格莱阿的城墙。传说，当时的总督为了激励士气，将自己华丽的披风和珠宝扔下城墙，喊道：“战士们，这是留给勇敢者的奖赏！”正是这种决绝，加上后来从西西里赶来的援军，最终击退了敌人。战争结束后，满目疮痍的三姐妹城赢得了不朽的荣光，但也让骑士团意识到需要一座更强大、更现代化的堡垒城市，于是便有了隔海相望的瓦莱塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`尽管荣耀被新城分享，三姐妹城并未沉寂。在整个骑士团统治时期，它始终是重要的海军基地和造船中心，圣安杰洛堡更是骑士团海军司令的官邸。这里的船坞日夜不停地建造和维护着骑士团的战舰。拿破仑在1798年短暂占领马耳他时，也曾在此驻扎。到了二战时期，它再次因马耳他重要的战略位置而成为轴心国空袭的重点目标。1942年，一枚炸弹直接击中了胜利圣母教堂的穹顶，将其几乎摧毁，直到多年后才得以重建。这些层层叠加的伤痕，都刻在了城市的石头里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走入今天的维托里奥萨，你仍能看到战争与和平交织的痕迹。庄严的圣劳伦斯教堂（骑士团最初的教堂）对面，可能就是一个摆满塑料椅和遮阳伞的家庭小酒吧。宏伟的海事博物馆（前身是皇家海军面包房）里讲述着辉煌的航海史，而门口的老码头区，私家游艇和传统的渔船并排停靠。政府和非营利组织正在进行精心的修复，不是为了打造一个旅游盆景，而是为了延续它的生命，让新一代的马耳他人能继续在这些有故事的城墙内，书写属于自己的、平静的日常篇章。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少6-8小时）来深度探索三姐妹城。最佳抵达时间是上午9点左右，从瓦莱塔搭乘渡船过来，人少且光线柔和。游览节奏应该是“先宏观看线，再微观探点”：先从高处和外围把握它的防御体系轮廓，再钻进迷宫般的内城，用脚步去丈量细节。上午精力充沛时，可以攀登城墙和堡垒；下午则适合在阴影下穿梭小巷，探访教堂和博物馆，并找个本地餐馆体验午餐。傍晚时分，一定要回到水边，看夕阳的金辉把整片石灰岩城墙染成炽烈的金色，这是全天的高光时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小巷错综复杂且上下坡多，务必穿着舒适防滑的步行鞋，高跟鞋在这里是灾难。很多小巷没有明确的指示牌，迷路是体验的一部分，不必慌张，大致朝着高处或水边的方向走总能找到出路。当地人非常友善，用简单的微笑和问候语“Bongu”（白天好）或“Bonswa”（晚上好）开启对话，他们常常乐意指路。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从瓦莱塔码头跳上那漆成鲜艳颜色的传统小渡船，感受五分钟横渡大港时海风拂面的畅快，并在船上获得三姐妹城城墙全景的第一印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在森格莱阿码头上岸后，不要立刻钻进小巷，而是向右沿着水边漫步，仰望高耸的森格莱阿城墙和绵延的防御工事，体会它作为海上壁垒的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着坡道爬上森格莱阿的观景平台，在这里可以清晰地看到三座城市（森格莱阿、维托里奥萨、科斯皮夸）如三根手指般伸入大港的地理格局，并与对岸的瓦莱塔遥遥相对。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接森格莱阿和维托里奥萨的城门，径直前往城市制高点——圣安杰洛堡，花上两个小时探索这座庞大堡垒的各个层级、炮台、骑士厅堂和俯瞰整个大港的无敌视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从堡垒下来，钻进维托里奥萨核心区迷宫般的小巷，放任自己迷路，用眼睛捕捉那些精美的门廊雕刻、色彩鲜艳的窗台、墙壁上的神龛和突然出现在转角的小广场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在维托里奥萨主街找一家家庭经营的餐厅，点一份炖兔子或新鲜的 Lampuki（鬼头刀鱼）馅饼，搭配当地葡萄酒，看着街景享用一顿漫长的马耳他风味午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后参观宏伟的圣劳伦斯教堂和旁边的海事博物馆，了解从骑士团时代到英国统治时期的航海史诗，感受这座城市与海洋血脉相连的基因。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当日光变得柔和，漫步到科斯皮夸的码头区，坐在水边的石阶上，看归航的渔船和嬉戏的孩子，等待夕阳将整个港口和城墙染成一片温暖而恢弘的金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瓦莱塔上巴拉卡花园的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，用长焦镜头拍摄对岸三姐妹城的全景，城墙、教堂穹顶和港口船只构成层次分明的壮丽画卷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`森格莱阿水畔步道仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午侧光时，站在码头附近仰拍高耸的城墙和堡垒，利用水面倒影，能拍出极具力量和历史感的对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`维托里奥萨“秘密花园”门洞`}</h4>
                  <p className="text-sm text-gray-700">{`午后在古城深处寻找那些被花丛淹没的古老彩色木门，从门洞向内拍摄，门框成为天然画框，框住院落一角的光影和生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`科斯皮渔村码头黄昏`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，在科斯皮夸的小码头，拍摄暖色调阳光笼罩下的传统渔船、彩色房子和闲暇的居民，捕捉最生活化的马耳他瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣安杰洛堡顶层炮位`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡顶端的古老炮位旁，以生锈的铁炮为前景，拍摄对面瓦莱塔的巴洛克天际线和繁忙的大港，画面充满故事张力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人和小孩时，请务必先微笑示意并获得对方默许，尊重他们的隐私。三姐妹城很多小巷光线对比强烈，建议使用RAW格式拍摄以便后期调整阴影和高光细节。飞无人机前必须了解马耳他严格的空域管制规定，尤其这里靠近港口和军事历史区域，未经许可擅自飞行可能面临重罚。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`本地生活沉浸`}</h4>
                  <p className="text-sm text-blue-800">{`住在维托里奥萨城墙内由百年老宅改造的精品小酒店，房间有裸露的石墙和拱顶，早晨在种满三角梅的小阳台上，就能听到教堂的钟声和邻居的寒暄。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-green-800">{`森格莱阿码头附近由古老仓库改建的设计师酒店，完美融合了粗砺的工业历史感和现代极简美学，部分房间拥有直面瓦莱塔的私人露台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于三姐妹城区域边缘、由骑士时代贵族宫殿修复而成的五星级酒店，拥有静谧的花园和泳池，提供无与伦比的私密感和历史氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实惠民宿`}</h4>
                  <p className="text-sm text-purple-800">{`科斯皮夸当地居民出租的带小露台的公寓，设施简单但干净温馨，下楼就是充满生活气息的街道和杂货店，体验真正“像当地人一样生活”。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`三姐妹城整体治安非常好，夜晚独自在小巷行走也很安全，但部分小巷照明较暗，建议携带小手电。住在古城内意味着需要拖着行李走一段石板路和台阶，预订时最好确认酒店是否能提供行李搬运协助。夏季（7-8月）马耳他非常炎热，选择有游泳池或空调给力的住宿会大大提升幸福感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开三姐妹城时，我的背包里没有带回什么纪念品，但心里却装得沉甸甸的。那种重量，不是石头的物理重量，而是一种时间的密度。在这里，历史不是教科书上扁平的文字，而是你能用手触摸到的、布满凿痕的冰冷城墙；是你能用鼻子闻到的、海风与古老石头混合的潮湿气味；是你能用耳朵听到的、穿越了数个世纪依然准时响起的教堂钟鸣。它向你展示了历史最真实的样貌：不仅是英雄的史诗，更多的是普通人在巨变的缝隙中，日复一日经营生活的坚韧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求新奇和效率的世界里，三姐妹城像一位沉默而睿智的老者。它不急于向你证明什么，也不刻意讨好你的镜头。它只是在那里，带着一身伤痕与荣光，继续着它的日常。这种“活着的古迹”的状态，才是最珍贵的旅行财富。它提醒我们，文明的传承不在于建造多么辉煌的纪念碑，而在于人能否在历史的基石上，持续地、有尊严地生活下去。对于每一位厌倦了走马观花、渴望触摸历史真实纹理的旅人来说，三姐妹城不是一站，而是一次深刻的沉浸。在这里，你会忘记时间的线性流动，真切地感受到自己正站在数个时代的交汇点上，而那感觉，无比震撼，又无比宁静。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mdina-silent-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    姆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">姆迪纳静寂之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mdina</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cittadella-citadel-gozo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维多利亚城堡（戈佐岛城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cittadella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/marsaxlokk-fishing-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔萨什洛克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Marsaxlokk</p>
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
