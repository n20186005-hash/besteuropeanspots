import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马耳他克伦迪 Qrendi ｜隐秘村庄、史前门户与地质奇观 - 最佳欧洲景点',
  description: '车子驶离机场的嘈杂，转上通往南部的小路，当大片灰黄色岩地与零星的仙人掌掠过车窗，空气中开始弥漫一种干燥而温暖的、混合着野草与海风的气息时，克伦迪就到了。我的第一站永远是村子中心那个小小的广场，几把绿色的铁椅随意摆放，老人们坐在圣马蒂亚斯教区教堂巨大的阴影里，用马耳他语缓慢地闲聊，声音像远处的地中海一',
}

export default function QrendiVillageMaltaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马耳他', href: '/destinations/europe' },
            { label: '克伦迪（南部大区）', href: '/destinations/europe' },
            { label: '克伦迪', href: '/attractions/qrendi-village-malta' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克伦迪・Qrendi・马耳他・克伦迪（南部大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离机场的嘈杂，转上通往南部的小路，当大片灰黄色岩地与零星的仙人掌掠过车窗，空气中开始弥漫一种干燥而温暖的、混合着野草与海风的气息时，克伦迪就到了。我的第一站永远是村子中心那个小小的广场，几把绿色的铁椅随意摆放，老人们坐在圣马蒂亚斯教区教堂巨大的阴影里，用马耳他语缓慢地闲聊，声音像远处的地中海一样起伏而含糊。教堂钟声在整点敲响，浑厚而安宁，瞬间盖过了所有声响，然后又归于平静，只剩下咖啡店传来的杯碟轻碰声。你立刻就会明白，这里不是一个“景点”，而是一个呼吸着、生活着的家园的核心。
接着，让自己迷路吧。这是探索克伦迪唯一的方式。离开主广场，随便拐进任何一条巷子。两侧的石灰岩墙壁高耸，巷子窄得有时需要侧身，脚下的石板被数百年的脚步磨得中心微凹，光滑如脂。阳光在这里变成了奢侈品，只在正午时分才能垂直地洒下一道耀眼的金线，照亮墙上某一块斑驳的石头，或是某家窗台上盛开的天竺葵。你的指尖划过粗糙温暖的岩壁，能感觉到工匠凿刻的痕迹。偶尔，一扇古老的木门虚掩着，飘出炖煮食物的浓郁香气和电视节目的声音。转角处，一个装饰着鲜花和蜡烛的小神龛里，圣母玛利亚的瓷像静静俯视，这是马耳他村落最动人的灵魂印记。
克伦迪的魔力在于这种“之间”的状态。它本身就是一个完整而迷人的世界，拥有自己的节奏和秘密。同时，它又是通往更古老、更宏大存在的门户——步行可达的范围内，藏着史前人类的巨石神庙和地球开出的地质天坑。但村民们并不因此觉得自己是看门人，他们只是世代居住于此，神庙和天坑就像邻居家后院的古树一样，是生活背景的一部分。你会看到穿着拖鞋的当地人，提着购物袋，穿过那些被视为世界奇迹的地方回家做饭。这种神圣与日常的无缝交融，才是克伦迪最打动人心的内核。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离机场的嘈杂，转上通往南部的小路，当大片灰黄色岩地与零星的仙人掌掠过车窗，空气中开始弥漫一种干燥而温暖的、混合着野草与海风的气息时，克伦迪就到了。我的第一站永远是村子中心那个小小的广场，几把绿色的铁椅随意摆放，老人们坐在圣马蒂亚斯教区教堂巨大的阴影里，用马耳他语缓慢地闲聊，声音像远处的地中海一样起伏而含糊。教堂钟声在整点敲响，浑厚而安宁，瞬间盖过了所有声响，然后又归于平静，只剩下咖啡店传来的杯碟轻碰声。你立刻就会明白，这里不是一个“景点”，而是一个呼吸着、生活着的家园的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接着，让自己迷路吧。这是探索克伦迪唯一的方式。离开主广场，随便拐进任何一条巷子。两侧的石灰岩墙壁高耸，巷子窄得有时需要侧身，脚下的石板被数百年的脚步磨得中心微凹，光滑如脂。阳光在这里变成了奢侈品，只在正午时分才能垂直地洒下一道耀眼的金线，照亮墙上某一块斑驳的石头，或是某家窗台上盛开的天竺葵。你的指尖划过粗糙温暖的岩壁，能感觉到工匠凿刻的痕迹。偶尔，一扇古老的木门虚掩着，飘出炖煮食物的浓郁香气和电视节目的声音。转角处，一个装饰着鲜花和蜡烛的小神龛里，圣母玛利亚的瓷像静静俯视，这是马耳他村落最动人的灵魂印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克伦迪的魔力在于这种“之间”的状态。它本身就是一个完整而迷人的世界，拥有自己的节奏和秘密。同时，它又是通往更古老、更宏大存在的门户——步行可达的范围内，藏着史前人类的巨石神庙和地球开出的地质天坑。但村民们并不因此觉得自己是看门人，他们只是世代居住于此，神庙和天坑就像邻居家后院的古树一样，是生活背景的一部分。你会看到穿着拖鞋的当地人，提着购物袋，穿过那些被视为世界奇迹的地方回家做饭。这种神圣与日常的无缝交融，才是克伦迪最打动人心的内核。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克伦迪`} />
                <InfoRow label="英文名称" value={`Qrendi`} />
                <InfoRow label="正式名称" value={`Qrendi`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`克伦迪（南部大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座将马耳他数千年史前文明、中世纪生活与现代社区完美衔接的活态门户村落。`} />
                <InfoRow label="建筑特色" value={`由本地蜂蜜色石灰岩砌成的低矮房屋，构成蜿蜒如迷宫的狭窄小巷，间或点缀着色彩鲜艳的木质阳台和圣母神龛。`} />
                <InfoRow label="建筑风格" value={`鲜明的马耳他乡土建筑风格，朴实、坚固，与岛屿的地质地貌浑然一体。`} />
                <InfoRow label="文化价值" value={`它不仅是通往联合国教科文组织世界遗产的物理门户，更是理解马耳他乡村社区坚韧、虔诚与日常美学的文化窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全天开放。但作为前往哈加尔基姆（Ħaġar Qim）和姆纳耶德拉（Mnajdra）神庙遗址的门户，需注意神庙的开放时间（通常为夏季9:00-19:00，冬季9:00-17:00，具体随日照变化调整，周一至周日开放，节假日可能缩短）。马格鲁巴天坑为自然景观，可全天从外围观景，但深入坑底需谨慎并尊重私人领地指示。`} />
              <InfoRow label="门票价格" value={`探索克伦迪村庄本身完全免费。若前往哈加尔基姆和姆纳耶德拉史前神庙遗址，需购买门票（约15欧元，含两处神庙及游客中心）。马格鲁巴天坑为自然地质景观，无门票。`} />
              <InfoRow label="地址" value={`Main Square, Qrendi, QRD 2501, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（MLA）出发最为便捷。你可以在机场外的公交枢纽乘坐前往南部的线路，如74路公交，直接抵达克伦迪村中心，车程约30-40分钟，班次约每小时一班，建议提前在马耳他公共交通官网上查询最新时刻表。更灵活的方式是在机场乘坐预付费的白色出租车（如eCabs、Bolt），告诉司机去“Qrendi Square”，车程约20分钟，费用25-30欧元。在村庄内，所有探索全靠步行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲克伦迪的故事，我们不能从它本身开始，而得从它守卫的那些沉默的巨石说起。早在公元前3600年左右，也就是比埃及金字塔还要古老的年代，一群神秘的人们就在这片临海的台地上，竖立起了哈加尔基姆和姆纳耶德拉神庙。克伦迪这片土地，在当时很可能就是这些神庙建造者或守护者的居住地或活动范围。几千年的风沙和海盐几乎抹去了一切居住痕迹，但那种与神圣场所毗邻而居的基因，似乎刻在了这片土地的记忆里。中世纪时，随着马耳他群岛逐渐形成如今的村落格局，克伦迪开始作为一个独立的教区出现，它的名字可能源于阿拉伯语，意为“宁静之地”或“绿色之地”，这恰恰描绘了它介于岩地与有限耕地之间的特质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄的肌理真正成形于马耳他骑士团统治时期。骑士们带来的繁荣与秩序，使得乡村社区得以稳固发展。我们今天看到的那些蜂蜜色石灰岩房屋，其基本的建筑形式和材料运用，在那个时期被确定下来。石头来自本地采石场，厚重、隔热，能抵御地中海酷热的阳光和偶尔凛冽的季风。狭窄蜿蜒的街道布局，一方面是为了遮阴、防风，另一方面也源于家族土地分割和防御的考虑。圣马蒂亚斯教堂的雏形也在这个时期建立，并在后来几个世纪不断扩建，成为凝聚整个社区信仰与身份的巨大锚点。克伦迪就像一棵从岩缝中长出的橄榄树，根系紧紧抓住历史，缓慢而坚韧地生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的淬炼发生在近代，尤其是二战期间。由于马耳他处于战略要冲，克伦迪因其靠近卢卡机场和重要的海岸线，遭受了猛烈的空袭。炸弹不仅落在军事目标附近，也不可避免地摧毁了部分民居，给社区带来了深重的创伤。然而，正是这种共同的磨难，强化了村民之间血脉相连的纽带。战后的重建并非推倒重来，而是遵循着古老的方式，用同样的石头，在原址上修补、重建。你仔细看某些房子的墙面，或许能发现新旧石料细微的颜色差异，那是一段伤疤，也是一枚勋章。这段历史让克伦迪的美不再是田园牧歌式的单纯，而多了一层历经风雨后的沉静与韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最近几十年，全球化和旅游业的触角也伸到了这个南部村庄。年轻人曾一度向往瓦莱塔的繁华或海外的生活，但一种奇妙的回归正在发生。许多人发现，祖先留下的这种紧密的社区关系、缓慢的生活节奏以及与自然和历史遗迹的亲密接触，是无可替代的财富。一些老房子被精心修复，变成了舒适的民宿或艺术工作室；本地的小餐馆开始供应用祖传食谱烹饪的“炖兔子”（Fenek）；村民们也自豪地向好奇的游客指路，去参观“我们的神庙”。克伦迪没有在旅游大潮中迷失，它更像一个从容的长者，温和地向世界展示它本来的样子，并小心守护着那份连接史前与现代的“宁静”。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的克伦迪深度游应该从下午开始。这样你可以避开正午最灼热的阳光，在光线最柔和的时分探索迷宫般的小巷，感受村庄从午睡中苏醒的慵懒生机。整体耗时约4-5小时，节奏务必放慢，核心是体验而非赶路。建议先在村庄内部沉浸，然后在日落前步行至村庄边缘的高点，同时眺望神庙遗迹、地质天坑和浩瀚的地中海，最后伴着晚霞返回村庄中心享用晚餐。这样的安排能让你领略到克伦迪从细节到全景、从人文到自然的多层次魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的步行鞋，村里的石板路和通往观景点的野外小径都对鞋子是考验。
随身带一瓶水，村庄内小店不多，夏季干燥炎热，及时补水至关重要。
如果计划进入神庙遗址参观，请优先安排在上午，下午则以漫步村庄和外围景观为主，这样光线和温度都更合适。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从圣马蒂亚斯教堂前的主广场开始，先坐在长椅上发一会儿呆，看鸽子在喷泉边踱步，彻底让自己的心跳慢下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后毫不犹豫地拐进教堂侧面那条名为“Triq il-Kbira”（大意是“大街”，但其实很窄）的小巷，让直觉带领你在高墙与鲜花之间穿行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那面爬满九重葛的惊艳墙壁，火焰般的花朵从某个蓝色阳台倾泻而下，是绝佳的背景板。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着咖啡香找到广场旁那家老咖啡馆，点一杯“Kafè Malti”（马耳他式咖啡），像本地人一样站在柜台边一饮而尽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观圣马蒂亚斯教堂内部，留意那些精美的大理石雕刻和天花板壁画，感受乡村教堂惊人的华丽与虔诚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村庄西侧边缘沿着指示牌散步，大约15分钟，抵达能同时俯瞰哈加尔基姆神庙遗址和地中海波澜的观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在观景台附近，仔细寻找通往马格鲁巴天坑边缘的小径（注意安全），从上方凝视这个巨大而神秘的绿色沉坑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前回到村庄，或许能碰上傍晚弥撒结束，跟着人流再次融入广场，找一家家庭餐馆品尝当天的渔获或炖菜。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂钟楼仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在主广场东南角，利用广角镜头仰拍，将蜂蜜色的圣马蒂亚斯教堂钟楼与马耳他标志性的湛蓝天空一同构图，最佳时间是下午，阳光会给钟楼侧面镀上金光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`迷宫小巷的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条东西向的狭窄小巷，在日出后或日落前约两小时的“黄金时刻”拍摄，此时阳光会斜射入巷子，在石壁上拉出长长的、富有戏剧性的光影线条，等待一个当地人骑车或步行的身影作为点睛之笔。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`马格鲁巴天坑全景`}</h4>
                  <p className="text-sm text-gray-700">{`在天坑北侧的安全边缘（通常有矮墙），使用中焦段镜头拍摄，将天坑内茂密的植被、坑壁裸露的岩层以及远处克伦迪村庄的房屋轮廓一同纳入画面，阴天时色彩层次反而更显沉郁有力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`村庄至高点俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`在前往神庙观景台的路径上，有一段回头路可以俯瞰克伦迪全村，用长焦镜头压缩空间，捕捉那些层层叠叠的石灰岩屋顶在夕阳下泛着温暖蜜色的景象，炊烟袅袅时氛围最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`本地生活微镜头`}</h4>
                  <p className="text-sm text-gray-700">{`不要忽略细节，比如一扇斑驳的蓝色大门上的黄铜门环、窗台上的小猫、面包店橱窗里的传统“赫本”（ħobż）面包，使用大光圈近距离拍摄，这些画面充满了故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`马耳他的光线非常强烈，建议随身携带一块偏振镜，可以有效压暗蓝天、减少石头表面的反光，让色彩更饱和。`}</li>
                <li>• {`拍摄当地居民或他们的财产（如漂亮的门口）时，请务必先微笑示意并获得同意，马耳他人普遍友善，但尊重隐私是首要原则。`}</li>
                <li>• {`如果想拍摄神庙与村庄的同框全景，日落时分的光线最为理想，但需要计算好步行时间，并带上三脚架以备弱光环境。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古韵石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住由世代相传的百年石灰岩老宅改造的民宿，厚重的石墙带来天然的清凉，睡在古老的木梁下，清晨被邻居家院子的鸡鸣和教堂钟声温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭经营小旅馆`}</h4>
                  <p className="text-sm text-green-800">{`选择广场附近一家由家族经营的舒适小旅馆，老板娘会像对待远房亲戚一样为你准备丰盛的马耳他式早餐，并掏出地图给你画只有本地人才知道的秘密散步路线。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`农庄体验住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`在村庄外围找一间传统的农庄住宿（‘Razzett’），房间环绕着宁静的庭院，晚上可以躺在躺椅上仰望毫无光污染的璀璨星空，感受真正的乡村寂静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`精品设计酒店（需短途车程）`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多设计感和服务，可以住在几分钟车程外的海边小镇，那里有由历史建筑改造的精品酒店，但请确保每天都能留出足够时间回到克伦迪慢慢品味。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克伦迪本身的住宿选择以家庭式民宿为主，夏季非常紧俏，建议至少提前两个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在村里才能体验到当游客散去后，村庄恢复宁静本貌的魔力，夜晚的星空和清晨的空气是无价的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大部分民宿不提供电梯，且位于小巷深处，携带大型行李箱会有些不便，建议轻装简行。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开克伦迪好多天了，但我总记得那个傍晚，坐在广场边，看着孩子们在追逐，老人们还在聊天，教堂的阴影越拉越长，最终覆盖了整个广场。那一刻我突然觉得，我们长途跋涉寻找的“古老”和“真实”，并不总是藏在宏伟的神殿或博物馆的玻璃柜后面。它可能就存在于这样一个普通村庄的日常呼吸里，存在于石头被晒了一整天后散发出的余温里，存在于邻居间打招呼的方言里。克伦迪教会我的，不是关于某个遥远时代的知识，而是一种存在的方式——如何与历史比邻而居却不被其阴影吞噬，如何守护传统同时又从容地活在当下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都被加速、被标签化、被精心策划成“体验”的世界里，克伦迪是一种温柔的抵抗。它不急于向你展示什么，不设豪华的游客中心，没有纪念品大街。它只是在那里，按照自己的千年节奏，日复一日。它邀请你做的，只是慢下来，迷一次路，喝一杯咖啡，等待一次日落。然后你或许会明白，真正的深度旅行，不是收集了多少个景点打卡，而是在某个陌生的角落里，突然清晰地听到了自己内心的钟摆，并与另一片土地上古老而坚韧的生活节拍，产生了短暂的共鸣。这就是为什么，每一位不满足于浮光掠影的旅人，都应该来克伦迪住上几天——它不是终点，而是一扇门，通往一个更缓慢、更真实、更贴近土地的世界。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/three-cities-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    三
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">三姐妹城（圣约翰骑士团的最初海防线）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Three Cities</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/blue-grotto-malta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马耳他蓝洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blue Grotto</p>
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
