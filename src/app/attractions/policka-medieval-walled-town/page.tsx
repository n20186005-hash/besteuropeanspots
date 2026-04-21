import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波利奇卡 Policka｜探秘被19座半塔楼守护的时光胶囊，漫步作曲家马尔蒂努的故乡 - 最佳欧洲景点',
  description: '车子缓缓驶近，远远地，你就看到了它——一个被深灰色石墙严严实实“箍”起来的城镇轮廓，像一枚被时光遗忘在绿色山丘间的古老戒指。那圈城墙太完整了，完整得几乎有些“蛮横”，19座敦实的半圆形塔楼如同忠诚的哨兵，间隔均匀地从墙头上探出圆圆的脑袋，沉默地宣告着“内”与“外”的古老界限。空气里有雨后青草和湿润石',
}

export default function PolickaMedievalWalledTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '波利奇卡', href: '/destinations/europe' },
            { label: '波利奇卡', href: '/attractions/policka-medieval-walled-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波利奇卡・Policka・捷克・波利奇卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶近，远远地，你就看到了它——一个被深灰色石墙严严实实“箍”起来的城镇轮廓，像一枚被时光遗忘在绿色山丘间的古老戒指。那圈城墙太完整了，完整得几乎有些“蛮横”，19座敦实的半圆形塔楼如同忠诚的哨兵，间隔均匀地从墙头上探出圆圆的脑袋，沉默地宣告着“内”与“外”的古老界限。空气里有雨后青草和湿润石头的味道，安静得能听见自己的脚步声在空旷的停车场回响。那一刻的感觉很奇妙，你不是走向一个景点，而是接近一个依然在自主呼吸的、有边界的完整世界。
穿过低矮的城门洞，光线一暗复又一明，你就进入了另一个时空。面前展开的长方形广场（他们叫它 náměstí）宽阔得让人心旷神怡，四周环绕着色彩柔和、立面装饰着壁画或浮雕的联排房屋，鹅黄色、淡粉色、薄荷绿，在阳光下显得温柔而宁静。广场中央的巴洛克式瘟疫柱静静矗立，几个老人坐在长椅上晒太阳，一只花猫慵懒地走过碎石路面。这里的生活节奏缓慢得近乎凝滞，咖啡馆里飘出研磨咖啡的香气，面包店的橱窗里陈列着传统的波西米亚甜点。城墙就在你的视线尽头，它不再是冰冷的阻隔，而是一个巨大的、令人安心的怀抱，把市井的烟火气稳稳地拢在其中。
然而，波利奇卡最打动人心的，是一种近乎矛盾的二元和谐。一边是坚不可摧、用于防御的刚硬骨骼（那些城墙和塔楼），另一边却是流淌在城镇血脉里的、极其柔软的艺术灵魂。广场一隅，一栋朴素的房子里，诞生了二十世纪最重要的捷克作曲家之一——博胡斯拉夫·马尔蒂努。你几乎可以想象，这个男孩童年时就在这些街道上奔跑，他的耳朵里最早听见的，也许是广场上的市声、教堂的钟鸣，还有从某扇窗户里飘出的、某个市民正在练习的提琴曲调。这种刚与柔的并存，让波利奇卡不仅仅是一个“保存完好”的标本，而是一个有体温、有呼吸、有故事的生命体。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子缓缓驶近，远远地，你就看到了它——一个被深灰色石墙严严实实“箍”起来的城镇轮廓，像一枚被时光遗忘在绿色山丘间的古老戒指。那圈城墙太完整了，完整得几乎有些“蛮横”，19座敦实的半圆形塔楼如同忠诚的哨兵，间隔均匀地从墙头上探出圆圆的脑袋，沉默地宣告着“内”与“外”的古老界限。空气里有雨后青草和湿润石头的味道，安静得能听见自己的脚步声在空旷的停车场回响。那一刻的感觉很奇妙，你不是走向一个景点，而是接近一个依然在自主呼吸的、有边界的完整世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过低矮的城门洞，光线一暗复又一明，你就进入了另一个时空。面前展开的长方形广场（他们叫它 náměstí）宽阔得让人心旷神怡，四周环绕着色彩柔和、立面装饰着壁画或浮雕的联排房屋，鹅黄色、淡粉色、薄荷绿，在阳光下显得温柔而宁静。广场中央的巴洛克式瘟疫柱静静矗立，几个老人坐在长椅上晒太阳，一只花猫慵懒地走过碎石路面。这里的生活节奏缓慢得近乎凝滞，咖啡馆里飘出研磨咖啡的香气，面包店的橱窗里陈列着传统的波西米亚甜点。城墙就在你的视线尽头，它不再是冰冷的阻隔，而是一个巨大的、令人安心的怀抱，把市井的烟火气稳稳地拢在其中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，波利奇卡最打动人心的，是一种近乎矛盾的二元和谐。一边是坚不可摧、用于防御的刚硬骨骼（那些城墙和塔楼），另一边却是流淌在城镇血脉里的、极其柔软的艺术灵魂。广场一隅，一栋朴素的房子里，诞生了二十世纪最重要的捷克作曲家之一——博胡斯拉夫·马尔蒂努。你几乎可以想象，这个男孩童年时就在这些街道上奔跑，他的耳朵里最早听见的，也许是广场上的市声、教堂的钟鸣，还有从某扇窗户里飘出的、某个市民正在练习的提琴曲调。这种刚与柔的并存，让波利奇卡不仅仅是一个“保存完好”的标本，而是一个有体温、有呼吸、有故事的生命体。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波利奇卡`} />
                <InfoRow label="英文名称" value={`Policka`} />
                <InfoRow label="正式名称" value={`Policka`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`波利奇卡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座罕见地保留了完整中世纪环形防御体系的中世纪城镇，是研究波西米亚地区民用防御建筑的活化石。`} />
                <InfoRow label="建筑特色" value={`由近1.3公里长的石砌城墙、19座保存完好的半圆形防御塔楼及两座城门构成的封闭式防御系统，环抱着规划整齐的矩形中心广场与棋盘状街道。`} />
                <InfoRow label="建筑风格" value={`以哥特式防御工事为核心，融合了后续文艺复兴及巴洛克时期民用建筑的装饰元素。`} />
                <InfoRow label="文化价值" value={`不仅是一座军事要塞的实体见证，更是捷克民族音乐瑰宝、作曲家博胡斯拉夫·马尔蒂努的精神原乡与灵感源泉。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城镇公共区域全天开放。主要博物馆（马尔蒂努博物馆、城墙博物馆）开放时间通常为周二至周日 9:00-17:00（冬季可能缩短至16:00），周一闭馆。具体塔楼和城墙段的开放参观时间较为灵活，建议在旅游信息中心确认当日导览团次。节假日开放时间可能有变。`} />
              <InfoRow label="门票价格" value={`进入城镇免费。登上城墙或参观塔楼通常需要购买联票，约150捷克克朗，包含多个防御塔和一个小型博物馆。学生及老人享有优惠票。马尔蒂努出生地博物馆门票约80捷克克朗。部分季节性导览游价格另计。`} />
              <InfoRow label="地址" value={`náměstí 517, 572 01 Policka, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发：最便捷的方式是从布拉格主火车站（Hlavní nádraží）乘坐火车或巴士前往帕尔杜比采（Pardubice），车程约1小时，班次频繁。抵达帕尔杜比采后，在中央巴士站换乘前往波利奇卡的 regional bus，车程约45分钟至1小时，每小时约有1-2班车。自驾是最灵活的选择，从布拉格沿D11/E67高速公路向东，转入35号公路，全程约140公里，1小时45分钟可达。小镇中心外围有停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波利奇卡的故事，始于13世纪中叶那场王室主导的“殖民”。当时，波西米亚国王普热米斯尔·奥托卡二世为了巩固王国东部边境，有规划地建立了一系列城镇，波利奇卡便是其中之一。它从一开始就被赋予了一个清晰的使命：成为一个坚固的前哨和区域中心。选址在一片略微隆起的高地上，本身就具备防御优势。最初的定居者按照国王特许状给出的“模子”，规划了整齐划一的矩形广场和棋盘格街道，而城镇的边界，从一开始就被注定要用石头来标记和守卫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的“铠甲”是在14到15世纪逐渐披挂上身的。尤其是胡斯战争期间及之后，动荡的局势让城镇公民深感不安。于是，他们倾注了巨大的财力和人力，开始修建那圈足以自保的石墙。这不是一蹴而就的工程，而是一代又一代人的持续投资。墙体用当地的石材砌成，厚实而坚固。最具特色的便是那19座半圆形塔楼，它们并非由领主或军队修建，而是由镇上的行会和各区市民分别出资、建造和维护的。因此，你仔细看，会发现这些塔楼在细部上略有差异，仿佛带着各自“家长”的性格烙印。它们均匀地分布在城墙沿线，没有死角，构成了一个无懈可击的防御闭环。在火器尚未主宰战场的年代，这套体系让波利奇卡成了名副其实的“硬骨头”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "讽刺的是，这座为战争而不断强化的堡垒，却在它最著名的围城战中经历了精神上的蜕变。那是在18世纪中叶，普鲁士军队兵临城下。然而，守卫城镇的并非职业军队，而是由当地市民、学生和农民组成的民兵。在一位名叫科钦的校长和一位名叫洛伦茨的牧师的激励下，这些普通人迸发出了惊人的勇气和韧性，竟然成功击退了强敌。这场胜利与其说是军事的，不如说是精神的。它让波利奇卡人坚信，他们的城墙守护的不仅是生命和财产，更是一种共同体身份和自由意志。从此，城墙从被动的防御工事，升华为城镇骄傲与自治精神的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当战争的阴云最终散去，和平年代来临，城墙的实用功能渐渐褪去。19世纪，欧洲许多古城开始拆毁城墙以拓展城市空间，但波利奇卡人选择了保留。这或许是因为他们的地理位置相对偏僻，发展压力不大；更深层的原因，可能是他们对这圈石头“摇篮”产生了情感上的依赖。它成了风景的一部分，是家园的轮廓。人们开始在城墙脚下种植花园，塔楼被用作仓库或作坊。它从“盾牌”变成了“相框”，框住了内部安宁的生活图景。直到现代文物保护意识兴起，人们才惊异地发现，他们习以为常的家园，竟是一件如此完整的稀世珍宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而在这幅由石头绘就的刚毅画卷中，1890年，一个温润的音符悄然加入。在广场边一栋并不起眼的房子里，鞋匠兼镇塔楼看守人的家里，一个男孩降生了，他就是博胡斯拉夫·马尔蒂努。他在这里度过了 formative years，直到去布拉格学习音乐。终其一生，尽管他漂泊于巴黎、纽约、瑞士，但他最杰出的作品——包括恢弘的《交响乐》和歌剧《希腊受难曲》——其精神根源和旋律灵感，都深深植根于波利奇卡的童年记忆、教堂钟声和摩拉维亚的民间旋律之中。于是，这座石头城镇的遗产，除了有形的城墙，又多了一层无形的、回荡在全世界音乐厅里的旋律遗产，刚毅的外壳下，跳动着一颗最敏感、最富创造力的心脏。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受波利奇卡的灵魂，建议安排整整一天时间。最好在上午九点前抵达，这时游客稀少，晨光温柔，最适合感受城墙的静谧威严和广场苏醒的刹那。游览节奏宜慢不宜快，核心思路是“由外而内，再由内而外”：先沿着城墙外围走一段，建立整体印象；然后深入城镇心脏，在广场和街巷中沉浸；最后，一定要攀爬至少一座塔楼，获得“守卫者”的视角，并将音乐家的故事作为情感收尾。整体耗时约6-8小时，包括悠闲的午餐和咖啡时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇餐厅不多且打烊较早，建议中午在广场附近解决午餐，或提前自备一些零食。攀爬塔楼的楼梯通常非常狭窄陡峭且光线昏暗，务必穿着舒适防滑的鞋子，并注意安全。除了马尔蒂努博物馆，小镇其他博物馆规模很小，如果时间有限，可将重点放在城墙体验和城镇氛围的沉浸上。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从帕尔杜比采门进入，用手触摸那冰冷厚重、带着数百年潮气的门洞石壁，完成进入中世纪“结界”的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在空旷宁静的长方形主广场上慢行一圈，仰头细看每一栋联排房屋立面上各不相同的壁画、浮雕和山花装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那家有着复古招牌的面包房，买一个新鲜的“波西米亚甜甜圈”或苹果卷，坐在广场长椅上像当地人一样享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从旅游信息中心获取地图，选择一段开放的城墙步行道，踏上曾经只有哨兵行走的步道，感受脚下城镇屋顶的起伏韵律。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬一座允许登顶的半圆塔楼（如“鞋匠塔”），在狭窄的螺旋石阶盘旋而上，从狭小的箭窗眺望内外截然不同的风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙脚下的环形绿地公园散步，从另一个温柔的角度仰望这些防御工事，看它们如何与自然草木融为一体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访博胡斯拉夫·马尔蒂努出生地纪念馆，在那间朴素的房间里静静聆听一段他的交响乐片段，感受空间与旋律的共鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前再次回到广场，找一家咖啡馆的露天座位，看金色的光线如何为石头城墙和彩色房屋披上最后一道温暖的纱衣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙东南角外侧草坪仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能极好地勾勒出城墙和半圆塔楼的立体轮廓与石材质感，用广角镜头可以收纳多座塔楼，展现其连绵的防御姿态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从“鞋匠塔”顶的箭窗向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`将古老的石窗框作为前景，框住窗外如积木般色彩斑斓的城镇屋顶和远处的教堂尖顶，形成强烈的古今画框感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主广场北侧房屋二楼视角（有些咖啡馆或民宿可能有此视野）`}</h4>
                  <p className="text-sm text-gray-700">{`利用长焦镜头压缩空间，拍摄广场全景和尽头矗立的城门，捕捉人物与宏大历史场景的生动比例。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`马尔蒂努故居门口的石板路`}</h4>
                  <p className="text-sm text-gray-700">{`在雨后湿润的清晨，蹲低身体，将湿漉漉、反光的鹅卵石路面作为前景，引导视线至那扇朴素的绿色木门和门牌，讲述一个伟大开始的平凡起点。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城墙步行道中段向内俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`午后顺光时，站在城墙步道上，拍摄城墙内民居宁静的后花园、晾晒的衣物和玩耍的孩子，展现防御工事内鲜活的生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在当地可能有严格限制，因涉及历史保护区和私人住宅，起飞前务必查询当地法规并尊重居民隐私。室内博物馆通常禁止使用闪光灯，拍摄马尔蒂努故居内部陈列时请注意标志。最好的光线往往在清晨和黄昏，正午阳光强烈，容易使城墙石材色彩发白，缺乏层次。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`灵魂栖所`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住由中世纪塔楼或城墙内历史建筑改造的独家公寓，睡在古老的石墙环抱中，夜晚聆听绝对的寂静，清晨独享无人打扰的城墙风光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温情`}</h4>
                  <p className="text-sm text-green-800">{`主广场旁一栋拥有精美文艺复兴立面的家庭式旅馆，主人会为你准备丰盛的自制早餐，并提供只有当地人才知道的散步小径地图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`作曲家之邻`}</h4>
                  <p className="text-sm text-yellow-800">{`选择位于马尔蒂努出生地附近、由老房子改建的舒适民宿，房间装饰着乐谱元素，仿佛能沾染一丝艺术的灵气，夜晚格外宁静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡村视野`}</h4>
                  <p className="text-sm text-purple-800">{`住在城镇外不远处一座宁静的乡村客栈，房间窗户正对着波利奇卡完整的城墙天际线，尤其在日出日落时分，能拍到明信片般的全景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波利奇卡住宿选择非常有限，且多为小型家庭经营，强烈建议提前数周甚至数月预订，尤其是在夏季和周末。住在城内体验无可替代，但需接受设施可能较为古老朴素的事实。城镇极其安全，夜晚漫步城墙下是难忘的体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开波利奇卡的时候，我脑海里反复回响的，不是某个具体的画面，而是一种感觉——一种被完整包裹的安宁感。在这个碎片化的时代，我们习惯了没有边界的信息流和快节奏的穿越，而波利奇卡却固执地保留着它的“边界”。那圈城墙，在物理和心理上，都为你划出了一个可以全然沉浸其中的“完整世界”。在这里，时间不是以分秒计算，而是以光影在石墙上移动的痕迹、以广场钟楼悠扬的报时声来度量的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它之所以值得被列入一生必去的清单，绝不仅仅因为它是“保存最好”的之一。而是因为它提供了一个难得的机会，让你同时触摸到历史的两种肌理：一种是坚硬、冰冷、关乎生存与捍卫的石头肌理；另一种是柔软、温暖、关乎创造与慰藉的心灵肌理。当你站在塔楼上，仿佛一名中世纪的守夜人；当你站在马尔蒂努出生的房间里，又仿佛一名倾听初心的旅人。这座小镇教会我们，最坚固的防御，或许不是为了隔绝，而是为了守护内部得以孕育美与思想的脆弱土壤。在波利奇卡，历史不是教科书上的一段话，而是你可以用脚步丈量、用手触摸、用心灵去共鸣的，一个依然在呼吸的、刚柔并济的活生生的存在。这，才是深度旅行所能馈赠的最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/slavonice-renaissance-frescoes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯拉沃尼采</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Slavonice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/punkevni-jeskyne" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普恩克瓦溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Punkevní jeskyně</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/holasovice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍拉肖维采古罗马村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Holašovice</p>
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
