import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '潘普洛纳古城墙 Pamplona City Walls｜探秘奔牛节之外，一座被完好封存的文艺复兴军事杰作 - 最佳欧洲景点',
  description: '说实话，在来到潘普洛纳之前，我对这座城市的全部想象，都压在那条短短825米、充满了肾上腺素与尘土气息的奔牛之路上。然而，当我第一次真正站在这座城市的“边缘”——那绵延近五公里、如同巨兽脊骨般匍匐的古城墙脚下时，我才意识到自己错得多么离谱。这里没有喧嚣，只有风穿过古老石缝发出的、低沉而悠长的哨音，混合',
}

export default function PamplonaCityWallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '潘普洛纳古城墙', href: '/attractions/pamplona-city-walls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`潘普洛纳古城墙・Pamplona City Walls・西班牙・潘普洛纳（纳瓦拉自治区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在来到潘普洛纳之前，我对这座城市的全部想象，都压在那条短短825米、充满了肾上腺素与尘土气息的奔牛之路上。然而，当我第一次真正站在这座城市的“边缘”——那绵延近五公里、如同巨兽脊骨般匍匐的古城墙脚下时，我才意识到自己错得多么离谱。这里没有喧嚣，只有风穿过古老石缝发出的、低沉而悠长的哨音，混合着城墙脚下公园里松树与草坪的清新气息。
我选择从拉特哈达门开始我的漫步。阳光将棱堡锐利的阴影切在翠绿的草坪上，形成一幅巨大的、动态的几何素描。城墙不再是隔绝内外的屏障，而是变成了一个无比宽阔的空中公园。本地人在这里慢跑、遛狗、推着婴儿车闲聊，孩子们在曾经的炮位旁追逐嬉戏。你能触摸到那些被岁月打磨得温润的石块，凉意从指尖渗入，但整个空间却洋溢着温暖的、活生生的烟火气。这就是它最动人的魅力：历史的沉重与生活的轻盈，在这里达成了奇妙的和谐。
沿着宽阔的步道向上走，城市的红瓦屋顶在脚下缓缓铺开，而远方是纳瓦拉起伏的绿色丘陵。你会路过一个又一个棱堡，它们有着“国王”、“女王”、“圣巴尔托洛梅”这样充满故事性的名字。站在棱堡的顶点，360度的视野毫无遮挡，你可以清晰地看到整个星形防御系统的逻辑：每一个棱堡都能为相邻的墙面提供毫无死角的交叉火力。这种基于绝对理性计算的美，在和平年代的阳光下，显得既震撼，又有一丝超现实的荒诞感。在这里，你听到的不是公牛奔跑的轰鸣，而是历史深处精密的齿轮，在寂静中缓缓转动的声音。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在来到潘普洛纳之前，我对这座城市的全部想象，都压在那条短短825米、充满了肾上腺素与尘土气息的奔牛之路上。然而，当我第一次真正站在这座城市的“边缘”——那绵延近五公里、如同巨兽脊骨般匍匐的古城墙脚下时，我才意识到自己错得多么离谱。这里没有喧嚣，只有风穿过古老石缝发出的、低沉而悠长的哨音，混合着城墙脚下公园里松树与草坪的清新气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我选择从拉特哈达门开始我的漫步。阳光将棱堡锐利的阴影切在翠绿的草坪上，形成一幅巨大的、动态的几何素描。城墙不再是隔绝内外的屏障，而是变成了一个无比宽阔的空中公园。本地人在这里慢跑、遛狗、推着婴儿车闲聊，孩子们在曾经的炮位旁追逐嬉戏。你能触摸到那些被岁月打磨得温润的石块，凉意从指尖渗入，但整个空间却洋溢着温暖的、活生生的烟火气。这就是它最动人的魅力：历史的沉重与生活的轻盈，在这里达成了奇妙的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着宽阔的步道向上走，城市的红瓦屋顶在脚下缓缓铺开，而远方是纳瓦拉起伏的绿色丘陵。你会路过一个又一个棱堡，它们有着“国王”、“女王”、“圣巴尔托洛梅”这样充满故事性的名字。站在棱堡的顶点，360度的视野毫无遮挡，你可以清晰地看到整个星形防御系统的逻辑：每一个棱堡都能为相邻的墙面提供毫无死角的交叉火力。这种基于绝对理性计算的美，在和平年代的阳光下，显得既震撼，又有一丝超现实的荒诞感。在这里，你听到的不是公牛奔跑的轰鸣，而是历史深处精密的齿轮，在寂静中缓缓转动的声音。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`潘普洛纳古城墙`} />
                <InfoRow label="英文名称" value={`Pamplona City Walls`} />
                <InfoRow label="正式名称" value={`Pamplona City Walls`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`潘普洛纳（纳瓦拉自治区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西班牙乃至欧洲保存最完整、最壮观的文艺复兴时期“星形堡垒”城市防御体系典范。`} />
                <InfoRow label="建筑特色" value={`由五个巨大的棱堡（bastiones）与厚重的幕墙连接，构成一个近乎完美的五角星形，充满了冷峻而理性的几何美感。`} />
                <InfoRow label="建筑风格" value={`文艺复兴晚期军事工程学与早期巴洛克元素的结合，是“意大利式防御工事”在伊比利亚半岛的巅峰之作。`} />
                <InfoRow label="文化价值" value={`它不仅是一件军事古董，更是一个将历史遗迹成功转化为市民公园与公共文化空间的杰出案例，见证了从战争防御到和平生活的理念变迁。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙公园及步道全天24小时开放，免费进入。部分附属的堡垒和城门（如拉特哈达门）内部参观可能有特定开放时间，通常为周二至周六上午10点至下午2点，下午4点至7点，周日及节假日仅上午开放，周一闭馆。建议出发前查询纳瓦拉政府旅游官网获取最新信息，冬季部分时段可能因天气提前关闭。`} />
              <InfoRow label="门票价格" value={`城墙主体及公园步道完全免费。进入部分历史堡垒或登上特定城墙段（如通过市立博物馆入口）可能需要门票，票价约为2-3欧元，学生及65岁以上老人享有折扣，12岁以下儿童免费。部分纪念日（如文化遗产日）免费开放。`} />
              <InfoRow label="地址" value={`Ciudadela Avenue, s/n, 31002 Pamplona, Navarra, Spain`} />
              <InfoRow label="交通方式" value={`从潘普洛纳火车站（Estación de Pamplona）出发，步行是最佳方式。出站后沿Avenida de San Jorge大道向西直行约15分钟，穿过美丽的安塔尔祖亚公园，即可抵达城墙东南角的拉特哈达门（Portal de la Taconera），这是探索的完美起点。从潘普洛纳机场（Noain Airport）可乘坐机场巴士至市中心的“Plaza de la Paz”广场，车程约15分钟，班次与航班衔接，从广场步行至城墙约10分钟。城内游览全靠双脚，城墙周边公交线路不多。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`潘普洛纳的故事，从来都是一部“边界之城”的史诗。它坐落在比利牛斯山脚下，是通往法国和欧洲腹地的战略要冲，自古便是兵家必争之地。我们今天看到的这座宏伟的星形城墙，其实是一位“外来的国王”和一场迫在眉睫的危机共同催生的作品。时间回到十六世纪，西班牙正处于它的黄金时代，但北方的法兰西王国虎视眈眈。当时的国王费利佩二世，一个以谨慎和热衷于建筑工程著称的君主，决心将他帝国北部的门户打造成不可攻破的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一位名叫贾科莫·帕莱罗的意大利军事工程师被请到了潘普洛纳。他带来的，是文艺复兴后期欧洲最先进的军事建筑理念——“意大利式防御”或“星形堡垒”。传统的垂直高墙在威力日益强大的火炮面前不堪一击，而这种新体系的核心，就是用低矮、厚实、倾斜的墙体来吸收炮弹冲击，并用凸出的棱堡构成致命的交叉火力网，让进攻者暴露在来自至少两个方向的攻击下。帕莱罗和他的继任者们，几乎将整座老城包裹进了一个由泥土、砖石构成的几何怪兽体内。工程的规模浩大，持续了将近一个世纪，无数工匠和士兵的血汗，浇筑成了这个冰冷的、完美的五角星。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙建成后，它真正经受的考验来自拿破仑战争。1808年，法国军队入侵西班牙，潘普洛纳的星形堡垒成为了抵抗的象征。惨烈的围城战持续了数月，坚固的工事让法军付出了巨大代价。然而，历史的讽刺在于，这座为防御法国人而建的城墙，最终却在十九世纪因为城市发展的需要，而面临被拆除的危机。工业化带来了人口膨胀，老城像一颗被硬壳束缚的种子，急需破壳而出。拆墙的呼声一度很高。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但幸运的是，理智与对历史的尊重最终占据了上风。潘普洛纳人做出了一个超越时代的决定：不拆除，而是改造。从二十世纪初开始，他们逐步将城墙军事禁区转化为公共绿地，将深壕变成公园，将堡垒平台变为观景台。这个将防御工事“和平化”的过程，本身就是一个精彩的文化叙事。它没有让历史成为博物馆里僵死的标本，而是让它呼吸，让它生长，让它融入每一个市民散步的黄昏和孩童奔跑的清晨。今天，当你抚摸着那些石墙，你触摸的不仅是费利佩二世的帝国雄心，更是几代潘普洛纳人将历史伤疤转化为城市花园的智慧与温情。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整领略这座星形堡垒的宏大与精妙，我强烈建议你留出整整一个上午或一个下午（大约3-4小时），进行一场逆时针的慢速环游。最佳的起点是西南角的拉特哈达门及周边公园，这里地势平缓，景色优美，能让你轻松进入状态。选择逆时针方向，是因为这样你能在行程的后半段，当夕阳西下时，恰好走到西北侧的城墙段，那里是俯瞰老城屋顶和拍摄金色光影的绝佳位置。整个游览节奏应该是悠闲的漫步，不时停下来读一读解释牌，坐在长椅上发呆，或者钻进一个棱堡的内部感受它的空间。别忘了，这是一条“活”的路线，随时可以跟着感觉走，岔进公园深处，或者找个豁口走进老城喝杯咖啡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开七月初奔牛节期间游览城墙，那时人潮汹涌，完全失去了宁静漫步的本意。一定要穿一双绝对舒适的运动鞋，城墙步道虽然平坦，但全程较长，且上下坡和台阶不少。注意城墙边缘虽有护栏，但某些地段间隙较大，带小朋友的游客需要特别留意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从绿意盎然的拉特哈达公园出发，先别急着上墙，在护城河改造的玫瑰园里感受一下从下仰望棱堡带来的那种压迫性的宏伟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过缓坡正式登上城墙步道，向左转开始逆时针行走，让第一个迎接你的是拥有广阔草坪和优美拱廊的“女王棱堡”，这里适合坐下，看城市在眼前缓缓展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着笔直的城墙继续向北，你会经过“圣巴尔托洛梅棱堡”，注意寻找那些嵌入墙体的古老石炮和射击孔，想象士兵在此值守的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当步道开始出现一个明显的弧形拐弯时，你就进入了星形的一个“角”，这里是全程视野最开阔的地方，停下来，转一圈，看清整个五角星的几何逻辑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从北侧转向东侧，脚下的风景从郊野森林变为密集的老城屋顶，红瓦如波涛，远处大教堂的尖顶是最好的方向标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在靠近“拉维多利亚棱堡”附近，找一个向下的台阶或坡道，离开主步道，下到内侧的“城墙根”小径，体验被巨大石壁包裹的另一种微观感受。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终绕回起点附近，不要错过拉特哈达门内部的展示空间（如果开放），里面用模型和图纸清晰揭示了整个防御体系的建造秘密。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束环线后，一定要穿过城门，走进老城，在城墙阴影下的某家小酒馆点一杯纳瓦拉红酒，从内部再次回望你刚刚征服的庞然大物。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉特哈达公园仰拍棱堡全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，阳光斜射，站在公园草地中央用广角镜头向上拍摄，能将棱堡的锐利线条与天空的柔和云彩一同纳入，充满力量感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“星形之角”的270度视野`}</h4>
                  <p className="text-sm text-gray-700">{`在城墙东北方向的弧形拐角处，日落前一小时，利用城墙的自然曲线作为引导线，将老城建筑、远山和蜿蜒的城墙本身一同构图，画面层次极丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙内侧的深邃长廊`}</h4>
                  <p className="text-sm text-gray-700">{`从主步道下到内侧较低的石径，在正午阳光直射时，寻找那些由柱廊和厚重拱门形成的强烈明暗交替的走廊，拍摄剪影或光影对比的人文照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从老城小巷仰望城墙`}</h4>
                  <p className="text-sm text-gray-700">{`钻进城墙根下的居民区，比如靠近“拉维多利亚棱堡”的小街，傍晚时分，拍摄当地人生活与头顶巍峨石墙的对比，故事感瞬间拉满。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用好清晨和黄昏的侧光，它能极大增强石材的纹理质感和棱堡的体积感。拍摄时不妨等待一个行人或骑行者进入画面，能为冰冷的军事工程增添尺度和生命感。尊重当地居民隐私，避免用长镜头直接拍摄城墙脚下私人住宅的窗户或阳台。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙脚下的历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`选择老城区内一栋由16世纪贵族宅邸改造的精品酒店，厚重的石墙就是建筑本身，晚上躺在房间里都能感受到历史的静谧。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师的城墙观景台`}</h4>
                  <p className="text-sm text-green-800">{`寻找一家位于城墙东南侧现代公寓楼里的设计型民宿，拥有巨大的落地窗和私人阳台，能将整个星形堡垒的轮廓作为你早餐时的动态壁画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`公园边的舒适旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`预算有限的话，拉特哈达公园对面有几家家庭经营的三星级旅馆，干净温馨，开窗就是满眼绿意和城墙景观，性价比极高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外庄园的穿越之旅`}</h4>
                  <p className="text-sm text-purple-800">{`如果想体验反差，可以住到城外几公里处一座由古老修道院改建的乡村酒店，在绝对的宁静中回味白天所见的宏大防御工事。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿非常紧俏，尤其在非奔牛节的夏季周末，务必提前数月预订。住在城墙附近意味着夜晚极其安静，但也意味着去一些热闹的餐厅和酒吧需要步行一段距离，这正是体验本地人节奏的好机会。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开潘普洛纳很久以后，我记忆中最深刻的，反而不是城墙本身的壮观，而是那个下午，我看到一位头发花白的老先生，颤巍巍地扶着手杖，站在“国王棱堡”的顶点，静静地望着远方，看了很久。他没有拍照，只是站在那里。那一刻我忽然懂了，这座城墙对于潘普洛纳人来说，或许早已不是一处景点，而是一个精神的坐标，一个可以随时回来、与自己、与城市历史安静对话的“高处”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度、热衷打卡的世界里，潘普洛纳城墙提供了一种截然相反的旅行价值。它不提供瞬间的感官刺激，它要求你付出时间，用脚步去丈量它的每一个棱角，在漫长的行走中，让那种由几何学带来的理性震撼，以及由历史层叠带来的感性温度，慢慢渗入你的感知。它完美地诠释了什么是“深度的风景”——那不只是眼睛看到的，更是身体走过的，耳朵听到的风声，手指触碰的冰凉，以及心灵在空旷与厚重之间感受到的张力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也厌倦了浮光掠影，渴望一场能与大地和时间深刻连接的旅行，请一定要来这里。忘掉奔牛节那张喧嚣的名片，花上半天时间，独自或与挚友一起，走完这五公里的宁静循环。你会发现，最坚固的城墙，最终守护的，不是王国，而是平凡日子里那份可以自由漫步、抬头看云的诗意。这，或许才是它穿越五百年烽烟，留给我们这个时代，最珍贵的礼物。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sagunto-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨贡托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sagunto</p>
                  </div>
                </div>
              </a>
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
              <a href="/attractions/san-vicente-avila" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉圣文森特教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Vicente Ávila</p>
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
