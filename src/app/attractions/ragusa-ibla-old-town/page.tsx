import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉古萨老城 Ragusa Ibla｜悬崖上的巴洛克双城记，品味西西里最甜蜜的蜂蜜色梦境 - 最佳欧洲景点',
  description: '朋友，想象一下，你转过一个山坳，眼前豁然展开的景象：两座“城市”像戏剧般堆叠在深谷两侧的山脊上，一座在上，现代而规整；一座在下，古老而稠密，被阳光浸泡成一大块流动的蜂蜜和奶油色。这就是拉古萨给你的第一眼震撼。空气里有干燥的石粉味，混杂着远处阳台飘来的罗勒香和咖啡香。你开始向下，走向那个被称为“伊布拉...',
}

export default function RagusaIblaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉古萨老城', href: '/attractions/ragusa-ibla-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉古萨老城・Ragusa・意大利・拉古萨（西西里大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你转过一个山坳，眼前豁然展开的景象：两座“城市”像戏剧般堆叠在深谷两侧的山脊上，一座在上，现代而规整；一座在下，古老而稠密，被阳光浸泡成一大块流动的蜂蜜和奶油色。这就是拉古萨给你的第一眼震撼。空气里有干燥的石粉味，混杂着远处阳台飘来的罗勒香和咖啡香。你开始向下，走向那个被称为“伊布拉”的老城核心。
沿着著名的斯卡利尼台阶一步步往下，鞋底摩擦着被几个世纪脚步打磨得温润的石头。耳边是错落的声响：上方新城公路隐约的车流，下方老城广场咖啡馆的杯碟轻碰，还有不知从哪扇虚掩的门后传来的、用当地方言进行的激烈交谈。你不是在“参观”一个景点，而是在坠入一个巨大的、立体的蜂窝。每条窄巷都陡得惊人，石阶在阴影与阳光的切割下明暗交替，两侧的巴洛克宫殿外墙，那些雕刻着滑稽面具、丰满天使和华丽卷草的阳台，几乎要探到你的鼻尖。触手可及，是石头历经三百年阳光烘烤后留下的温热。
这里的时间流速是奇特的。午后，整个伊布拉会陷入一种甜蜜的昏睡。阳光把广场的每一块石板都晒得发白，猫在圣乔治教堂的台阶上摊成一张毛皮。但傍晚五点，魔法苏醒。本地人开始“散步”，穿着讲究的老先生拄着手杖缓缓走过，主妇们提着购物袋在熟食店前相遇聊天。你坐在教堂前的圆顶咖啡馆，点一份奶油甜馅煎饼卷，看着金色的夕阳一寸寸爬上对面宫殿的立面，将那些石雕的每一个褶皱都涂上神迹般的光辉。这一刻，你明白了，这座从废墟中重生的城市，它的灵魂从未离开，就日常地、鲜活地居住在这些美丽的石头里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你转过一个山坳，眼前豁然展开的景象：两座“城市”像戏剧般堆叠在深谷两侧的山脊上，一座在上，现代而规整；一座在下，古老而稠密，被阳光浸泡成一大块流动的蜂蜜和奶油色。这就是拉古萨给你的第一眼震撼。空气里有干燥的石粉味，混杂着远处阳台飘来的罗勒香和咖啡香。你开始向下，走向那个被称为“伊布拉”的老城核心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着著名的斯卡利尼台阶一步步往下，鞋底摩擦着被几个世纪脚步打磨得温润的石头。耳边是错落的声响：上方新城公路隐约的车流，下方老城广场咖啡馆的杯碟轻碰，还有不知从哪扇虚掩的门后传来的、用当地方言进行的激烈交谈。你不是在“参观”一个景点，而是在坠入一个巨大的、立体的蜂窝。每条窄巷都陡得惊人，石阶在阴影与阳光的切割下明暗交替，两侧的巴洛克宫殿外墙，那些雕刻着滑稽面具、丰满天使和华丽卷草的阳台，几乎要探到你的鼻尖。触手可及，是石头历经三百年阳光烘烤后留下的温热。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的时间流速是奇特的。午后，整个伊布拉会陷入一种甜蜜的昏睡。阳光把广场的每一块石板都晒得发白，猫在圣乔治教堂的台阶上摊成一张毛皮。但傍晚五点，魔法苏醒。本地人开始“散步”，穿着讲究的老先生拄着手杖缓缓走过，主妇们提着购物袋在熟食店前相遇聊天。你坐在教堂前的圆顶咖啡馆，点一份奶油甜馅煎饼卷，看着金色的夕阳一寸寸爬上对面宫殿的立面，将那些石雕的每一个褶皱都涂上神迹般的光辉。这一刻，你明白了，这座从废墟中重生的城市，它的灵魂从未离开，就日常地、鲜活地居住在这些美丽的石头里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉古萨老城`} />
                <InfoRow label="英文名称" value={`Ragusa`} />
                <InfoRow label="正式名称" value={`拉古萨伊布拉（Ragusa Ibla）`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`拉古萨（西西里大区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1693年毁灭性大地震后，西西里巴洛克建筑艺术复兴的巅峰之作与活化石，代表了贵族与平民在灾难后关于“重建于故土还是开拓新高地”的历史抉择。`} />
                <InfoRow label="建筑特色" value={`依险峻山势而建的双层城市结构，上城（新城）与下城（老城）通过陡峭的台阶和桥梁戏剧性相连，建筑由本地蜂蜜色的石灰华石砌成，装饰着繁复卷曲的阳台、铁艺和面具雕刻。`} />
                <InfoRow label="建筑风格" value={`西西里巴洛克风格（晚期巴洛克）的杰出典范，融合了当地传统石匠工艺、西班牙统治时期的建筑元素，以及地震后涌现出的夸张、动感、充满戏剧性的艺术表达。`} />
                <InfoRow label="文化价值" value={`一座活着的露天建筑博物馆，不仅展现了18世纪城市规划的智慧，更凝固了西西里乡土社会结构、宗教信仰以及人们在巨大创伤后重建家园的顽强生命力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区域全天24小时开放。内部的主要教堂和宫殿博物馆等独立景点有各自的开放时间，通常为上午9:30至下午1:00，下午3:30至晚上7:00（夏季会延长）。周一多数小型博物馆闭馆。重要的宗教节日（如圣乔治节）期间，教堂开放时间会延长并有特殊活动。`} />
              <InfoRow label="门票价格" value={`进入拉古萨伊布拉老城本身免费。参观内部景点需单独购票：圣乔治主教座堂（Duomo di San Giorgio）免费（可自愿捐赠）；伊布拉的贵族宫殿（如Palazzo La Rocca, Palazzo Donnafugata）门票约5-8欧元；联票较少见。建议随身准备零钱用于教堂捐赠和小型博物馆。`} />
              <InfoRow label="地址" value={`Ragusa Ibla, 97100 Ragusa RG, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是卡塔尼亚丰塔纳罗沙机场（CTA），距离约100公里。从机场：最方便的是租车自驾，沿A18/E45高速公路转SS114公路，约1小时45分钟车程。公共交通：先从机场乘坐Alibus到卡塔尼亚中央火车站，转乘Interbus公司或AST公司的长途巴士直达拉古萨（车程约2.5小时，班次有限，建议提前在Interbus官网查时刻表）。从拉古萨新城（Ragusa Superiore）的下车点，可乘坐当地的M1或M2路小巴士（约10分钟一班）盘旋下山进入伊布拉老城，或者更有趣的是，沿着著名的斯卡利尼台阶（Scalinata della Scale）步行下去，约15分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂拉古萨的石头在诉说怎样的故事，我们必须回到1693年1月11日那个可怕的夜晚。一场估计高达7.4级的大地震，几乎将整个西西里东南部夷为平地，古老的拉古萨也未能幸免。无数生命消逝，宏伟的诺曼和哥特式建筑化为齑粉。灾难过后，幸存者站在废墟上，面临一个深刻的分歧：是留在祖先生活的谷地（伊布拉）重建，还是转移到更高、更安全的山脊（帕特罗山）上去？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个分歧，最终以一场现实版的“分家”告终。贵族、教士和富有的中产阶级，大多选择上山，建造了规划整齐、街道宽阔的“上城”（Ragusa Superiore），象征着理性、秩序与新的开始。而农民、工匠和更传统的市民，则执着地留在了原址，在古老的伊布拉废墟之上，一砖一瓦地重建家园。于是，一座城市戏剧性地分裂成了两个行政实体，甚至拥有两座主保圣人教堂（上城献给圣约翰，下城献给圣乔治），这种“双头”格局持续了超过两个世纪，直到1927年才正式合并。这不仅仅是地理的分隔，更是社会阶层与文化认同的一次物理定格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而重建的过程，恰恰催生了艺术史上的一朵奇葩——西西里巴洛克。来自当地的建筑大师，如罗萨里奥·加agliardi、文森佐·西纳特拉，他们没有简单地复制过去的风格，而是将劫后余生的强烈情感、对神恩的感激与对世俗生活的热爱，全部倾注到了设计之中。他们利用本地柔软易雕的石灰华石，创造了前所未见的动态立面。教堂的正面不再是平板，而是大胆地凸出弯曲，像舞台帷幕一样将广场拥入怀中。阳台的托架被雕刻成扭曲的巨人、大笑的太阳面具和丰饶的水果，这些充满生命力的形象，仿佛是对死亡与毁灭最直白、最旺盛的反抗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`伊布拉的重建，更像是一种有机的生长。没有僵硬的网格规划，街道顺着古老的地基和陡峭的地形自然蜿蜒，形成无数隐秘的角落和令人惊叹的视野。贵族们虽然住在山上，但许多仍在老城建造了华丽的府邸，作为其影响力的展示。于是，在平民住宅的簇拥下，像拉罗卡宫、科斯梅蒂宫这样的华厦拔地而起，它们的铁艺阳台精美绝伦，成为家族炫耀的“舞台”。你可以想象，几个世纪前，贵族小姐们就在这些阳台上俯视着下方的市井生活，而巷子里的喧哗与香气，也同样飘入她们的窗棂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿梭在今天上下城之间的桥梁与台阶上，你走的正是历史的分界线。1927年的行政合并，以及后来修建的连接道路，最终将这对“双胞胎”城市物理上缝合在一起。但裂痕与差异，早已化为独特的美学与城市肌理。1993年，拉古萨与诺托谷地的其他七座城镇一起被列入世界遗产名录，联合国教科文组织的评语精准地捕捉了它的灵魂：“代表了欧洲巴洛克艺术最后的辉煌，其卓越的建筑质量与城市设计，都达到了极高的艺术成就。” 拉古萨的故事，是一个关于毁灭、抉择、分歧与最终在时间中达成和解的史诗，而这一切，都写在了它每一块蜂蜜色的石头上。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受拉古萨的双城魅力，建议安排一整天。最佳节奏是“自上而下，再由下及上”。上午约9点从新城（上城）的现代城区边缘开始，俯瞰全景并感受“新”的部分，然后沿着最具历史感的步行路线深入伊布拉（下城）迷宫。下午完全沉浸在西西里巴洛克的心脏地带，逛小店、喝咖啡、参观宫殿内部。傍晚时分，再次攀登至连接处，捕捉金色时刻的双城光影，最后在新城享用晚餐。这样安排既能避开中午暴晒时徒步上下坡，又能领略城市在晨昏不同光线下的多变表情，体验从宏观到微观，再从历史回归现代的完整循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的步行鞋，这里的台阶和坡道超乎想象的多且陡峭，高跟鞋是“自杀行为”。
午餐后（约下午1-4点）很多小型博物馆和宫殿会关门午休，规划室内参观时请务必提前查好时间或避开此时段。
老城巷子如迷宫，但不用担心迷路，所有小路最终都会引向圣乔治教堂或主广场，这也是当地人给你指路时最常用的地标。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`早上先从新城圣约翰教堂前的广场出发，在清澈的晨光中远眺对面山脊上伊布拉老城如积木般错落的金色全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的维克多·埃马努埃莱二世路下行，在第一个大拐弯处找到那条隐藏的古老阶梯“斯卡利尼台阶”，开始你的时空下行之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当台阶将你直接送达伊布拉的腹地——和谐广场时，停下来，坐在长椅上好好端详对面圣乔治教堂那令人屏息的弧形立面与巨大圆顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身钻进教堂左侧那条窄巷（Via del Mercato），用嗅觉寻找那家传统面包店，买一个刚出炉的“面包圈”（Tavulieri），边吃边看巷子里日常的买卖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上圣乔治教堂的右侧钟楼（如果开放），从制高点审视老城错综复杂的屋顶迷宫与远处辽阔的西西里乡村。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方寻路前往伊布拉公共花园，在古树下休息，并找到花园边缘那个可以同时看到上下城的绝佳观景露台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访至少一座贵族宫殿内部，比如拉罗卡宫，亲手触摸那些华丽的石膏装饰，从它的阳台望出去，想象贵族眼中的市井世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，从伊布拉沿着另一条较平缓的小路（如Via Roma）慢慢散步回新城，感受光线变化如何将整座城市点燃。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣乔治教堂台阶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光，站在台阶底部向上拍摄，能将行人、古老的石阶与教堂宏伟的弧形立面一同纳入画面，构成完美的纵深与层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`连接上下城的圣玛丽亚阶梯桥`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在桥的中间段，用长焦镜头压缩空间，可以将前景的桥栏、中景伊布拉老城的密集屋顶与远景的新城建筑拍出超现实的叠层效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`伊布拉公共花园观景露台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在这个免费露台上架起三脚架，可以拍摄到温暖的夕阳同时染黄上下两座城市，以及山谷中渐渐亮起的灯火，是全景摄影的黄金点位。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`拉罗卡宫阳台细节`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时虽不适合拍大景，但却是捕捉阳台铁艺与石雕面具光影质感的绝佳时机，使用大光圈镜头近距离特写那些笑脸或鬼脸雕刻。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`窄巷光影游戏`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有陡峭台阶的窄巷（如Via Cap. Bocchieri），在上午十点或下午三点左右，等待阳光斜射进巷子，在墙面投下迷人的光影分割线，捕捉当地人上下台阶的生活瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄阳台或门窗内景时务必征得同意，许多阳台仍是私人住宅的一部分。教堂内部通常允许拍照，但禁止使用闪光灯和三脚架（除非特殊许可），保持肃静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在伊布拉老城心脏地带由18世纪宫殿改造的精品酒店，早上在挂着家族肖像画的沙龙里享用早餐，晚上听着广场传来的隐约人声入睡，彻底成为“临时居民”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`视野之王`}</h4>
                  <p className="text-sm text-green-800">{`选择新城边缘正对伊布拉老城的悬崖酒店，房间带有一个面朝深谷的露台或大窗，你将拥有一幅24小时不停变换的拉古萨全景动态画，尤其是夜景无比璀璨。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园梦境`}</h4>
                  <p className="text-sm text-yellow-800">{`住在拉古萨郊外一座经过修复的古老农庄（Masseria），被橄榄树和角豆树环绕，体验纯粹的西西里乡村宁静，白天开车十分钟进城探索，夜晚在星空下品尝庄园自产的葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算友好`}</h4>
                  <p className="text-sm text-purple-800">{`新城中心靠近巴士站的家庭式公寓，由热情的主人经营，他们会给你手绘地图，推荐只有本地人才知道的小餐馆，让你像邻居一样融入当地日常生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城（伊布拉）的住宿非常有特色但数量有限，尤其在夏季和节假日必须提前数月预订。如果选择郊外农庄，请确保有自驾车，否则夜间出行会非常不便。无论住哪里，都要做好“爬坡”的心理和体力准备，这是体验拉古萨的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉古萨许久，我闭上眼，脑海里浮现的不是某个单一的教堂穹顶或宫殿立面，而是一种整体的感觉：那种坚硬的石头与温暖的光线交织出的矛盾温柔，那种在垂直空间中上下求索的疲惫与惊喜，那种在某个街角突然与一段凝固的辉煌历史撞个满怀的感动。这座城市教会我，美可以在裂痕中生长。那场将一切归零的大地震，没有带来终结，反而催生了一种更澎湃、更接地气的艺术爆发。上城与下城的分歧，最终没有走向对立，而是在时光的流淌中，化为了彼此映照、缺一不可的风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇尚推平重建的时代，拉古萨的存在像一个温柔的启示。它告诉我们，传统与变革可以比邻而居，集体的记忆值得用最精美的形式去承载。那些蜿蜒的台阶，不仅是连接两个城区的道路，更像是连接过去与现在、贵族与平民、创伤与复兴的脉络。每一位真正热爱深度游的旅人，都应该来走一走这些台阶，亲手触摸这些有温度的石头。在这里，你寻找的不仅是巴洛克艺术的课本范例，更是一场关于生命韧性与社区精神的生动课。它不张扬，不喧嚣，只是静静地躺在西西里的阳光下，等你来读一部用石头写就的、关于希望的双城记。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/civita-di-bagnoregio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    白
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">白露里治奥古城（天空之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Civita di Bagnoregio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ascoli-piceno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯科利皮切诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ascoli Piceno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/narni-medieval-hill-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni</p>
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
