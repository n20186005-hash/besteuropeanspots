import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佐特莱乌 Zoutleeuw｜躲过圣像破坏运动，奇迹般保存中世纪祭坛的时光胶囊小镇 - 最佳欧洲景点',
  description: '说真的，如果你开车从布鲁塞尔往东，一路经过那些典型的、规整的比利时城镇，然后在某个阳光柔和的午后拐下主路，开进佐特莱乌，你会产生一种奇妙的恍惚感。车轮压在老城区边缘那种被岁月磨得光滑发亮的鹅卵石路上，发出沉闷的咕噜声，周遭瞬间就安静下来了。没有旅游大巴的喧嚣，没有连锁商店的招牌，只有几株老树、几条安...',
}

export default function ZoutleeuwMedievalTownBelgiumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '佐特莱乌 (位于弗拉芒布拉班特省)', href: '/destinations/belgium' },
            { label: '佐特莱乌', href: '/attractions/zoutleeuw-medieval-town-belgium' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佐特莱乌・Zoutleeuw・比利时・佐特莱乌 (位于弗拉芒布拉班特省)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说真的，如果你开车从布鲁塞尔往东，一路经过那些典型的、规整的比利时城镇，然后在某个阳光柔和的午后拐下主路，开进佐特莱乌，你会产生一种奇妙的恍惚感。车轮压在老城区边缘那种被岁月磨得光滑发亮的鹅卵石路上，发出沉闷的咕噜声，周遭瞬间就安静下来了。没有旅游大巴的喧嚣，没有连锁商店的招牌，只有几株老树、几条安静的小巷，和远处那个鹤立鸡群般的、带着厚重砖石塔楼的教堂尖顶。空气中飘着淡淡的、从附近面包房传来的焦糖和酵母的香气，混合着老石头在阳光下蒸腾出的那股微凉的、略带潮湿的气味。这就是你的第一印象：这里的时间，好像被谁偷偷按了暂停键。
而真正的魔法，藏在教堂那扇不起眼的木门后面。推开门的一刹那，光线陡然暗下来，你的眼睛需要几秒钟来适应。然后，那座令人屏息的、高达18米的橡木祭坛——圣莱昂纳德教堂的至高珍宝——就那样毫无防备地撞进你的视野。它不是博物馆里被玻璃罩起来的冰冷展品，它就站在那里，几乎触手可及，上面数百个精细雕刻的圣经人物故事，在从高侧窗洒下的光束里仿佛被赋予了生命。你能闻到陈年木材、旧经书和淡淡的蜡烛烟混合的独特气味，那是属于几个世纪信仰的沉淀。偶尔有当地老人蹒跚走进来，在长椅上静静坐一会儿，划个十字，然后又轻声离开。这座教堂不是景点，它依然是这个小镇跳动的心脏。
你走出教堂，回到集市广场。广场不大，被一圈颜色温暖、带着阶梯形山墙的老房子温柔地环抱着。周六的早晨，这里会有小小的集市，你能听到菜农用带着口音的弗拉芒语闲聊，闻到新鲜奶酪和香肠的味道。居民骑着老式自行车叮铃铃地穿过巷子，你会看到某扇敞开的门后，主人正在打理门口怒放的天竺葵。在这里，你不是闯入者，你只是一个被允许短暂分享他们宁静日常的旁观者。佐特莱乌最打动人心的，正是这种“完整性”——它不仅仅保留了一座建筑，而是保留了一整套中世纪城镇的生活肌理和呼吸节奏，并且，它至今仍在平稳地、低调地活着。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说真的，如果你开车从布鲁塞尔往东，一路经过那些典型的、规整的比利时城镇，然后在某个阳光柔和的午后拐下主路，开进佐特莱乌，你会产生一种奇妙的恍惚感。车轮压在老城区边缘那种被岁月磨得光滑发亮的鹅卵石路上，发出沉闷的咕噜声，周遭瞬间就安静下来了。没有旅游大巴的喧嚣，没有连锁商店的招牌，只有几株老树、几条安静的小巷，和远处那个鹤立鸡群般的、带着厚重砖石塔楼的教堂尖顶。空气中飘着淡淡的、从附近面包房传来的焦糖和酵母的香气，混合着老石头在阳光下蒸腾出的那股微凉的、略带潮湿的气味。这就是你的第一印象：这里的时间，好像被谁偷偷按了暂停键。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正的魔法，藏在教堂那扇不起眼的木门后面。推开门的一刹那，光线陡然暗下来，你的眼睛需要几秒钟来适应。然后，那座令人屏息的、高达18米的橡木祭坛——圣莱昂纳德教堂的至高珍宝——就那样毫无防备地撞进你的视野。它不是博物馆里被玻璃罩起来的冰冷展品，它就站在那里，几乎触手可及，上面数百个精细雕刻的圣经人物故事，在从高侧窗洒下的光束里仿佛被赋予了生命。你能闻到陈年木材、旧经书和淡淡的蜡烛烟混合的独特气味，那是属于几个世纪信仰的沉淀。偶尔有当地老人蹒跚走进来，在长椅上静静坐一会儿，划个十字，然后又轻声离开。这座教堂不是景点，它依然是这个小镇跳动的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你走出教堂，回到集市广场。广场不大，被一圈颜色温暖、带着阶梯形山墙的老房子温柔地环抱着。周六的早晨，这里会有小小的集市，你能听到菜农用带着口音的弗拉芒语闲聊，闻到新鲜奶酪和香肠的味道。居民骑着老式自行车叮铃铃地穿过巷子，你会看到某扇敞开的门后，主人正在打理门口怒放的天竺葵。在这里，你不是闯入者，你只是一个被允许短暂分享他们宁静日常的旁观者。佐特莱乌最打动人心的，正是这种“完整性”——它不仅仅保留了一座建筑，而是保留了一整套中世纪城镇的生活肌理和呼吸节奏，并且，它至今仍在平稳地、低调地活着。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佐特莱乌`} />
                <InfoRow label="英文名称" value={`Zoutleeuw`} />
                <InfoRow label="正式名称" value={`Zoutleeuws Historisch Stadje met Sint-Leonarduskerk`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`佐特莱乌 (位于弗拉芒布拉班特省)`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座奇迹般完整逃过16世纪席卷低地国家的圣像破坏运动与后续战火洗礼的中世纪古镇，堪称比利时保存最完好的时间胶囊。`} />
                <InfoRow label="建筑特色" value={`以宏伟的布拉班特哥特式圣莱昂纳德教堂为核心，环绕着未经现代化改造的中世纪街道格局与砖石建筑群，形成和谐统一的整体风貌。`} />
                <InfoRow label="建筑风格" value={`主导建筑风格为布拉班特哥特式，并融合了部分文艺复兴与巴洛克时期的装饰元素。`} />
                <InfoRow label="文化价值" value={`是理解低地国家宗教冲突、艺术幸存与市民社会发展的活化石，其教堂内部装饰的完整性在欧洲北部极其罕见。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣莱昂纳德教堂内部开放时间通常为每日上午10点至下午5点（4月至10月），11月至3月开放时间缩短，并可能于周一关闭。教堂塔楼和珍宝室开放时间更为有限，通常仅在周末下午或通过预约参观。小镇公共区域及街道全天开放。重大宗教节日（如复活节、圣诞节）期间教堂有特殊仪式，游客参观可能受限。建议行前在镇旅游局官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`进入圣莱昂纳德教堂本身免费，自愿捐赠以支持维护。参观教堂内特别的“珍宝室”或登上钟楼通常需支付小额费用，约5-8欧元。有学生、老年人和团体优惠票。小镇无其他门票费用。`} />
              <InfoRow label="地址" value={`Grote Markt 1, 3440 Zoutleeuw, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔机场或布鲁塞尔中央火车站出发，最便捷的方式是乘坐火车。在布鲁塞尔机场火车站乘坐前往列日方向的IC列车，在“蒂嫩”站下车，车程约40分钟。从蒂嫩火车站前广场，转乘34路或333路巴士，约15-20分钟即可直达佐特莱乌小镇中心的集市广场。巴士班次约为每小时1-2班，周末减少，务必提前查好时刻表。若自驾，从布鲁塞尔出发沿E40高速公路向东，从“蒂嫩”出口下，沿N3公路行驶约10公里即达，小镇外围有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佐特莱乌的故事，得从“盐”讲起。它的名字“Zoutleeuw”在古弗拉芒语里就是“盐之地”的意思。大约在11世纪左右，因为地处重要的盐贸易路线上，这个小定居点开始繁荣起来。到了12世纪，它已经重要到能从布拉班特公爵那里获得城市特许状，拥有了筑墙、收税和举办市场的权利。你可以想象当时的情景：满载盐袋的车队从北海或德国的盐矿出发，辘辘驶入小镇，商人们在此交易、歇脚，财富随之累积。这些财富最直接的体现，就是市民们开始合力建造一座配得上他们城市的教堂——圣莱昂纳德教堂的工程始于13世纪，断断续续，一直盖到了16世纪，最终形成了今天我们看到的这座布拉班特哥特式的杰作，特别是它那座高达50多米的钟楼，曾是这一带平原上最重要的地标之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运的转折点伴随着巨大的风暴来临。16世纪中叶，宗教改革的浪潮席卷了整个低地国家。新教徒对天主教会的奢华象征深感愤怒，掀起了一场被称为“圣像破坏运动”的暴力风潮。暴民们冲进一座座教堂和修道院，砸碎圣像、撕毁画作、推倒祭坛。从安特卫普到根特，无数无价的艺术瑰宝在这场狂潮中化为齑粉。当消息传到佐特莱乌时，整个小镇一定陷入了极度的恐慌。他们的教堂，凝聚了几代人心血和信仰的殿堂，眼看就要在劫难逃。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但奇迹发生了。由于佐特莱乌相对偏僻的地理位置，以及——根据当地传说——市民们非凡的勇气和智慧，他们成功地说服了（或者说挡住了）破坏者。有一种说法是，市民们用巨大的木板和帷幔将珍贵的祭坛整个包裹、隐藏了起来；另一种说法是，他们集体出面，承诺支付一笔巨额“赎金”来换取教堂的安宁。无论真相如何，结果是确凿无疑的：当风暴过去，周边城镇的教堂内部一片狼藉时，佐特莱乌圣莱昂纳德教堂的内部装饰，尤其是那座巨大的橡木祭坛，竟完好无损地保存了下来。这不仅仅是运气，这是一个社区在危难时刻，为保护自身文化遗产所做出的、充满英雄主义的集体决定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`可惜，和平并未持久。随后的“八十年战争”和法国大革命时期的战乱，还是给小镇带来了创伤。教堂的银器、部分珍宝曾被掠夺，小镇的防御城墙也被下令拆除。然而，或许是那股保护神的余威仍在，小镇的核心结构和教堂内最核心的艺术品，又一次次从战争的边缘幸存下来。它仿佛被遗忘在了历史的角落，这种“被遗忘”在动荡的年代，反而成了一种祝福。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入现代，当人们重新审视它的价值时，才无比震惊地发现，这里藏着一个多么完整的“中世纪梦”。它不是被修复出来的仿古街，而是真实地、一层层积淀下来的历史本身。从13世纪的地基，到16世纪的山墙，再到18世纪的百叶窗，每个时代的痕迹都清晰可见，并且和谐共处。如今，佐特莱乌被小心翼翼地保护着，它的宁静被视若珍宝。它正在申请联合国教科文组织世界遗产的路上，但在我看来，它早已是时间颁给自己的一枚无冕勋章。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味佐特莱乌，我强烈建议你留出一整个白天，最好是从上午开始。这里的节奏很慢，你需要把心静下来，才能听到历史的回声。整体游览耗时大约4到6小时，节奏是“由外向内，再由内向外”。上午抵达后，先不要急着冲进教堂，而是在小镇外围和街道上漫步，建立整体的空间感。午餐前后进入教堂，此时内部光线逐渐变得神圣而富有戏剧性。下午则可以更悠闲地探索小巷细节，如果钟楼开放，登顶俯瞰是绝不能错过的体验。最后，在黄昏时分，小镇会被镀上一层金边，那是拍照和静静回味的最佳时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部严禁使用闪光灯，且时常有弥撒或私人活动，游览时请保持绝对安静，这是对当地信仰最基本的尊重。
小镇的餐厅和商店不多，且周日大多关门，建议提前规划好午餐地点或自备一些干粮。
穿着舒适的平底鞋至关重要，因为老城区的每一块鹅卵石都在考验你的脚踝。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨抵达后先在市集广场的石板路上走一圈，感受小镇刚醒来的宁静，观察阳光如何爬上那些砖红色山墙的阶梯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开圣莱昂纳德教堂厚重的木门，让眼睛适应从明亮到昏暗的光线变化，然后径直走向中殿尽头，仰头屏息凝视那座高达18米、布满雕刻的橡木祭坛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时绕着祭坛慢慢走，从不同角度寻找那些雕刻中生动的细节——痛苦的面容、飞扬的衣襟、天使的翅膀，想象16世纪工匠如何用刻刀讲述圣经故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到教堂北侧的耳堂，这里安放着精美绝伦的晚期哥特式石雕“哀悼基督”群像，感受其静谧中蕴含的巨大悲伤力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入教堂附属的珍宝室，在昏黄的灯光下近距离观看幸存下来的中世纪圣物箱、金银器皿和古老手抄本，它们每一件都带着死里逃生的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，沿着Kleine Bergstraat或Kleine Puttestraat这类小巷随意穿行，用手指触摸那些被数百年风雨侵蚀出凹痕的砖石墙缝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家开在老房子里的咖啡馆，比如广场上的某一家，点一杯醇厚的比利时啤酒或咖啡，坐在室外，看鸽子在教堂钟楼下踱步，彻底融入小镇的午后时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果钟楼当天开放，一定要鼓起勇气爬上那狭窄的旋转石阶，在塔顶的四方窗洞前，俯瞰整个小镇如玩具模型般铺展在弗拉芒的绿色平原之上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`集市广场东南角`}</h4>
                  <p className="text-sm text-gray-700">{`以广场上的老菩提树为前景，拍摄圣莱昂纳德教堂钟楼的全景，最佳时间是清晨或黄昏，侧光能让砖石的纹理和色彩无比饱满。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂内部中殿中部`}</h4>
                  <p className="text-sm text-gray-700">{`使用三脚架进行长时间曝光，捕捉从高侧窗射入的光束如同“天国之光”般洒在古老长椅和石地板上的神圣场景，避免拍到其他游客。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小镇边缘的Gete河小桥边`}</h4>
                  <p className="text-sm text-gray-700">{`从水边拍摄教堂塔楼和小镇房屋在水中的倒影，清晨无风时水面最为平静，能拍出完美的对称画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`钟楼顶层东南窗口`}</h4>
                  <p className="text-sm text-gray-700">{`如果你成功登顶，从这个窗口可以拍到小镇红色屋顶波浪般蔓延，最终消失在远方田野的经典全景，需要广角镜头。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`Kleine Bergstraat小巷深处`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，站在巷子中间，利用两侧高耸的古老山墙形成天然的画框，拍摄尽头露出一角的教堂塔尖，构图极具纵深感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内拍摄祭坛等艺术品时，务必关闭相机的一切提示音和自动对焦辅助光，纯粹的现场光已足够营造氛围。`}</li>
                <li>• {`无人机飞行在比利时历史城镇上空受到严格管制，在佐特莱乌这样的保护区内基本禁止飞行，请勿尝试。`}</li>
                <li>• {`拍摄当地居民或他们的私人住宅时，请先微笑示意并获得同意，这里是他们的家，不是纯粹的摄影背景板。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古镇中心的温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋16世纪商人住宅改造的民宿，卧室的木头横梁低矮得仿佛能碰到头，清晨会被教堂悠远的钟声温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭经营的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于集市广场一侧，房间不多但每间都独具特色，女主人会为你准备丰盛的弗拉芒式早餐，包括她亲手熬制的果酱。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外的宁静农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你有车，可以选择小镇外两三公里处的乡村农庄住宿，晚上能看见璀璨的银河，白天能徒步穿越周边的田野和森林。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`附近蒂嫩城的现代酒店`}</h4>
                  <p className="text-sm text-purple-800">{`若追求更完善的设施，可在火车枢纽蒂嫩选择设计酒店，搭乘短途巴士来佐特莱乌一日游，兼顾便利与深度体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佐特莱乌本身的住宿选择非常有限且极其抢手，尤其是在夏季周末，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇入夜后极为安静，几乎没有夜生活，喜欢热闹的游客需做好心理准备，但这也正是体验中世纪“宵禁”般宁静的难得机会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`该地区治安非常好，但所有古老建筑的门窗锁具可能都比较“复古”，出入请务必确认锁好。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佐特莱乌好些天了，但我闭上眼，还是能清晰地闻到那座教堂里特有的、混合着旧木头、石蜡和时光的味道。这个地方给我最深的触动，不是某种视觉上的壮丽，而是一种罕见的“完整性”所带来的平静与确信。在一个我们习惯了修复、重建甚至仿造的世界里，佐特莱乌像一个固执的、真实的梦。它告诉你，有些东西真的可以穿越战火、偏执与遗忘的洪流，完好地留存下来。这不是博物馆里被抽离了生命的标本，而是一个依然在呼吸、在祷告、在生活的有机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么它值得每一位深度旅行者前来？因为它提供了一种近乎奢侈的体验：真实的时光倒流。在这里，你不用费力想象中世纪城镇的样子，你就走在它的脉络里。它没有迎合游客的表演，只有本真的生活。它提醒我们，旅行的意义有时不在于收集多少地标，而在于找到一个能让内心喧嚣沉静下来的角落。佐特莱乌就是这样一个角落——微小、安静，却守护着欧洲一段惊心动魄的历史和一场关于幸存的艺术奇迹。来这里，不只是看一个景点，而是完成一次对坚韧、信仰与社区精神的默默致敬。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/binche-medieval-walls-gilles-carnival" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Binche</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grand-beguinage-leuven" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁汶大贝居安会院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grand Beguinage of Leuven</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ypres-cloth-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊佩尔布料厅</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cloth Hall, Ypres</p>
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
