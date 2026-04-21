import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱博德普罗旺斯 Les Baux-de-Provence｜悬崖上的幽灵石城与光影艺术殿堂 - 最佳欧洲景点',
  description: '车子在普罗旺斯起伏的橄榄树园和葡萄田间拐了几个弯，然后，它就像海市蜃楼一样猝不及防地撞进你的视野——一整片灰白色的、嶙峋的、巨大的岩石山脊，仿佛被巨人用斧头劈开，又随意堆叠在天地之间。而就在那悬崖的最顶端，一些建筑的轮廓顽强地嵌在岩石里，或者更准确地说，是从石头里长出来的。那就是莱博，一座没有屋顶的...',
}

export default function LesBauxDeProvencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '莱博德普罗旺斯', href: '/attractions/les-baux-de-provence' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱博德普罗旺斯・Les Baux-de-Provence・法国・莱博德普罗旺斯（村）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在普罗旺斯起伏的橄榄树园和葡萄田间拐了几个弯，然后，它就像海市蜃楼一样猝不及防地撞进你的视野——一整片灰白色的、嶙峋的、巨大的岩石山脊，仿佛被巨人用斧头劈开，又随意堆叠在天地之间。而就在那悬崖的最顶端，一些建筑的轮廓顽强地嵌在岩石里，或者更准确地说，是从石头里长出来的。那就是莱博，一座没有屋顶的城。第一印象不是精致，而是蛮荒的、带着压迫感的壮美。
停好车，沿着坡道向村口走去，脚下的石板路被几个世纪的脚步磨得光滑如镜。空气里有干热的石头气味，混合着路边肆意生长的薰衣草和迷迭香的辛香。风毫无遮挡地穿过山谷，发出一种低沉的呜咽，和着远处不知名鸟类的啼叫。村子里狭窄的街道两旁，是精心修复的文艺复兴时期宅邸，现在变成了画廊、工艺品店和飘着法棍香气的面包房。但你的视线总会被牵引向上，投向那些高处的断壁残垣。这里最奇妙的感受是共生：山下是活色生香的、被游客滋养的精致村庄生活，山上则是时间凝固的、沉默的、史诗般的废墟。两者被同一种白色的石头连接，构成一种奇异而完整的生命叙事。
而真正让人灵魂出窍的体验，藏在山脚下那个巨大的废弃采石场里——“光之采石场”。当你从明亮的南法日光中走进那洞穴般的入口，瞬间被绝对的黑暗和凉爽包裹。然后，音乐响起，光影如同有生命的洪水，从四面八方的岩壁、脚下、头顶奔涌而来。梵高的星空在7000平方米的岩壁上旋转绽放，莫奈的睡莲在石柱间荡漾。你不再是观看一幅画，而是被包裹进一场梦。这里将自然遗迹的宏伟与人类艺术的极致创造力完美结合，让莱博的旅程从历史凭吊，升华成一场感官与精神的狂欢。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在普罗旺斯起伏的橄榄树园和葡萄田间拐了几个弯，然后，它就像海市蜃楼一样猝不及防地撞进你的视野——一整片灰白色的、嶙峋的、巨大的岩石山脊，仿佛被巨人用斧头劈开，又随意堆叠在天地之间。而就在那悬崖的最顶端，一些建筑的轮廓顽强地嵌在岩石里，或者更准确地说，是从石头里长出来的。那就是莱博，一座没有屋顶的城。第一印象不是精致，而是蛮荒的、带着压迫感的壮美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着坡道向村口走去，脚下的石板路被几个世纪的脚步磨得光滑如镜。空气里有干热的石头气味，混合着路边肆意生长的薰衣草和迷迭香的辛香。风毫无遮挡地穿过山谷，发出一种低沉的呜咽，和着远处不知名鸟类的啼叫。村子里狭窄的街道两旁，是精心修复的文艺复兴时期宅邸，现在变成了画廊、工艺品店和飘着法棍香气的面包房。但你的视线总会被牵引向上，投向那些高处的断壁残垣。这里最奇妙的感受是共生：山下是活色生香的、被游客滋养的精致村庄生活，山上则是时间凝固的、沉默的、史诗般的废墟。两者被同一种白色的石头连接，构成一种奇异而完整的生命叙事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正让人灵魂出窍的体验，藏在山脚下那个巨大的废弃采石场里——“光之采石场”。当你从明亮的南法日光中走进那洞穴般的入口，瞬间被绝对的黑暗和凉爽包裹。然后，音乐响起，光影如同有生命的洪水，从四面八方的岩壁、脚下、头顶奔涌而来。梵高的星空在7000平方米的岩壁上旋转绽放，莫奈的睡莲在石柱间荡漾。你不再是观看一幅画，而是被包裹进一场梦。这里将自然遗迹的宏伟与人类艺术的极致创造力完美结合，让莱博的旅程从历史凭吊，升华成一场感官与精神的狂欢。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱博德普罗旺斯`} />
                <InfoRow label="英文名称" value={`Les Baux-de-Provence`} />
                <InfoRow label="正式名称" value={`Les Baux-de-Provence`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`莱博德普罗旺斯（村）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪普罗旺斯地区最强大、最令人畏惧的封建领主堡垒之一，以其战略位置和统治家族的彪悍而闻名。`} />
                <InfoRow label="建筑特色" value={`一座从巨大白色石灰岩山脊上“生长”出来又“坍缩”回去的堡垒，建筑与天然岩石浑然一体，废墟本身即是震撼人心的雕塑。`} />
                <InfoRow label="建筑风格" value={`以中世纪军事防御建筑为核心，融合了罗曼式和早期哥特式元素，但历经战火与拆除后，呈现为一种粗犷、原始、极具力量感的废墟美学。`} />
                <InfoRow label="文化价值" value={`不仅是中世纪历史的见证，更在当代通过“光之采石场”项目，将废弃采石场转化为世界级数字艺术展览空间，完成了从历史遗迹到现代艺术殿堂的华丽转身。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡废墟区（光之采石场及城堡遗址）全年开放，但具体时间随季节变化：夏季（4月至9月）通常为上午9:00至晚上19:30，最晚入场时间约在关门前1小时；冬季（10月至3月）开放时间缩短，通常为上午10:00至傍晚17:00。光之采石场内的声光秀在夜间有特定场次。村子本身（街道、商店、民居）可24小时自由漫步，但商铺和博物馆多在上午10点后开门，下午6点左右关闭。部分周一不开放，冬季可能有更长的歇业期，出发前务必查询官网最新公告。`} />
              <InfoRow label="门票价格" value={`进入莱博村本身免费。收费部分为“光之采石场”（Carrières de Lumières）和山顶“城堡遗址”（Château des Baux）两个主要景点。可购买联票。标准成人票约为15欧元（联票）。学生及青少年（7-17岁）有优惠价。7岁以下儿童免费。家庭套票可供选择。持有普罗旺斯地区通票或某些博物馆通票可能享受折扣。门票建议在线提前购买，尤其在夏季旅游旺季和声光秀演出期间，可避免现场排长队。`} />
              <InfoRow label="地址" value={`13520 Les Baux-de-Provence, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是马赛普罗旺斯机场（MRS），距离约70公里。最便捷的方式是自驾，从机场租车沿A7/A54高速公路驶向阿尔勒方向，再沿D17/D78公路驶向莱博，沿途有清晰路标，车程约1小时。若乘坐公共交通：从阿维尼翁或阿尔勒的火车站出发，先乘坐当地巴士（如“阿尔勒-莱博”线）抵达山脚下的停车场换乘点，但班次非常稀疏，一天可能只有几班，需精确规划时间，全程耗时约1.5-2小时且步行量不小。强烈建议自驾或参加从阿维尼翁/阿尔勒出发的一日游小团，省心且灵活。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于莱博的起源，总带着神话色彩。传说这里曾是三位东方贤者之一——巴尔萨泽的领地，“莱博”这个名字就源于他。而更实在的历史则始于公元10世纪。那时候，欧洲乱成一锅粥，谁的拳头硬、城堡高，谁就是王。莱博的领主们看中了这块拔地而起、三面都是悬崖的石灰岩山脊，这简直是天生的堡垒。他们开始以岩石为基础，修建城墙、塔楼和宫殿。最早的建筑粗糙但实用，完全服务于战争。莱博家族，这个以其领地命名的家族，很快成为普罗旺斯地区一股令人胆寒的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了12、13世纪，是莱博的黄金时代。在“吟游诗人”雷蒙德和他的儿子巴拉尔统治时期，莱博宫廷以奢华、文艺和勇武闻名。他们不仅拥有强大的军队，还热衷于骑士文化和宫廷爱情，吸引了许多吟游诗人和艺术家前来。城堡被不断扩建和美化，增加了一些带有早期哥特式优雅风格的宫殿房间，试图在粗犷的军事要塞中注入文明的舒适。这个家族野心勃勃，其势力范围一度覆盖了普罗旺斯79个城镇，甚至挑战法国国王的权威。他们就像盘踞在岩石上的鹰，高傲地俯视着脚下的平原。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极而衰是永恒的剧本。13世纪末，莱博家族的最后一位女继承人嫁给了法国王室的一位亲戚，莱博从此并入法兰西王国。虽然它仍是重要的边防堡垒，但失去了独立的灵魂。真正的劫难发生在17世纪。黎塞留枢机主教，那位法兰西中央集权的铁腕设计师，视这些地方贵族的城堡为王国统一的绊脚石。1632年，莱博参与了贵族叛乱。叛乱平息后，作为惩罚，黎塞留下令彻底拆毁这座著名的堡垒。这不是战争损毁，而是系统性的、充满象征意义的抹除。城墙被推倒，塔楼被炸塌，莱博从此沦为一片废墟，被人们渐渐遗忘，只剩下牧羊人和他们的羊群在石堆间徘徊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沉默持续了数百年。转机出现在19世纪，浪漫主义思潮兴起。诗人和画家们开始迷恋废墟所承载的“崇高”美感。莱博这种野蛮与壮丽结合的景象，正好击中了他们的心灵。它被“重新发现”，成为艺术家们的灵感源泉。而20世纪中叶，另一个奇迹发生了。山脚下废弃的采石场，曾经为建造城堡和村庄提供石料，后来因开采白色石灰岩（用于制造“莱博石”这种高级建筑材料）而挖空，形成了一个巨大的地下洞穴网络。1977年，一位名叫让·皮埃尔·拉米的电气工程师，在这个天然的“巨幕影院”里，首次尝试了结合音乐与投影的声光秀。从此，一个全新的艺术形式在此诞生。古老的采石场没有变成垃圾场，反而进化成全球领先的数字艺术展览空间。莱博的历史，就这样完成了一个从建设到毁灭，再到以另一种形式重生的、惊人的循环。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略莱博的精髓，建议安排整整一天时间。最佳抵达时间是上午9点左右，这时旅游大巴还未涌入，村庄刚刚苏醒，光线柔和适合拍照。整体节奏应该是“先上后下，动静结合”：上午先探索山顶的城堡废墟，感受历史的苍凉与全景的壮阔；中午回到村子里悠闲午餐，逛逛小店；下午最热的时候则潜入凉爽的“光之采石场”，享受一场视听盛宴；傍晚时分再回到村庄高地，捕捉金色的落日余晖洒在白色废墟上的魔幻时刻。这样的安排既能避开人流高峰，又能体验到莱博不同侧面的魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的鞋！村里的石板路和上山去废墟的路都是凹凸不平的斜坡和台阶，高跟鞋在这里是“自杀行为”。夏季务必携带充足的水、帽子和防晒霜，山顶废墟区毫无遮荫，阳光非常毒辣。村子里的一些小博物馆（如伊夫·布雷尔博物馆）很精致，但如果时间有限，应优先保证废墟和光之采石场，它们是莱博独一无二的灵魂。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的城门“波特·马涅”，用手触摸那冰凉的、满是凿痕的石头，瞬间感觉自己跨过了时间的门槛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街“格兰德 rue”向上漫步，别急着赶路，留意那些文艺复兴风格的窗棂、门楣上的雕刻，以及小巷深处突然闪现的悬崖景色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进“圣文森特教堂”，让眼睛适应一下昏暗的光线，静静欣赏那些朴素的罗马式拱廊和现代彩绘玻璃窗带来的奇妙对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村庄尽头买票进入城堡废墟区，顺着标志爬上“萨拉森塔”的残骸，让360度的普罗旺斯全景——从阿尔皮勒山到卡马格湿地——像画卷一样在眼前轰然展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在废墟区的“投石机”展示点驻足，看工作人员用复原的中世纪武器将石块抛向山谷，那巨大的声响和抛物线会让你对古代的攻城战有最直观的恐惧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，找一家能望见悬崖的露天餐厅，点一份地道的普罗旺斯炖菜，配上一杯当地产的“莱博”葡萄酒，让味蕾也加入这场时空之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午最炙热的时分，走进“光之采石场”那宛如异世界入口的洞穴，找一个地方随意坐下或站立，准备被接下来的沉浸式数字艺术展完全吞没。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，再次回到村庄高处的观景平台，看着夕阳把白色的岩石从金黄染成橙红，最后变成深邃的紫色，等待第一颗星星在古堡残影上方亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄入口的拱门下回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午四五点的侧光能勾勒出拱门深邃的轮廓，并以门洞为画框，将远处蜿蜒而上的石头街道和行人压缩成一幅生动的中世纪生活画卷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡废墟的“三角堡”边缘`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以此为前景，可以拍摄到悬崖垂直切面与脚下无限延伸的橄榄园和葡萄田的强烈对比，展现莱博险峻的地理位置。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`光之采石场内部`}</h4>
                  <p className="text-sm text-gray-700">{`尽管光线很暗，但可以尝试用手机或相机的夜景模式，拍摄同伴被流动的光影包裹的剪影，抽象而富有未来感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从远处D27公路的某个弯道`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分，带上长焦镜头，可以拍摄到整个莱博岩石山脊沐浴在金色晨曦中的全景，岩顶的废墟如同皇冠上的碎钻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在“光之采石场”内严禁使用闪光灯和三脚架，以免破坏他人观赏体验和激光投影效果。拍摄村民或店主时请务必先微笑征得同意，这里依然是有人生活的村庄，而非纯粹的影视基地。无人机飞行在村庄和遗址上空有严格限制，需提前查询当地法规，通常禁止飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`隐秘石屋`}</h4>
                  <p className="text-sm text-blue-800">{`村子里有几家由古老石屋改造的精品客房，房间可能带有原始的岩壁，晚上能听到风吹过悬崖的呼啸，体验真正的“住在历史里”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山谷农庄`}</h4>
                  <p className="text-sm text-green-800">{`住在山下周边葡萄园或橄榄园里的民宿，推开窗是宁静的田园风光，晚上星空璀璨，开车上山仅需几分钟，兼顾了静谧与便利。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`在附近小镇如圣雷米，有一些现代设计风格的酒店，提供泳池和美食餐厅，适合在探索了一天的废墟尘土后，回来享受精致的现代舒适。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华隐居`}</h4>
                  <p className="text-sm text-purple-800">{`距离莱博不远处的松林间，藏有极少数顶级庄园酒店，提供水疗、米其林餐饮和绝佳的私密性，是庆祝特殊时刻的完美选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在莱博村子里，请做好行李搬运的心理准备，因为车辆无法进入核心区，你需要提着箱子走一段石板路。夏季和节假日预订一定要提前数月，房源非常紧张。山下村庄的住宿通常性价比更高，且更容易找到免费停车位。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莱博很久以后，闭上眼睛，脑海里浮现的不是某个具体的画面，而是一种感觉：坚硬的与柔软的、永恒的与流逝的、毁灭的与重生的，在这里猛烈地撞击，又温柔地和解。这座石头城教会我的，是关于时间的非线性叙事。它不是一个悲伤的遗迹，而是一个充满能量的场域。你能看到时间摧毁的力量——黎塞留的铁腕令城堡化为齑粉；你也能看到时间治愈与转化的力量——自然的侵蚀让废墟披上斑驳的美感，而人类的创意又让废弃的矿洞化身艺术的子宫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速、平滑的世界里，莱博的存在是一种倔强的提醒。它告诉我们，破碎本身可以是一种完整，遗忘之后可以迎来更绚烂的铭记。它不只是让你去看一段中世纪的历史，更是邀请你去体验一种“废墟哲学”：接受不完美，在残缺中看见另一种形式的美，在结束的地方发现新的开始。无论是站在悬崖之巅被风吹得摇摇欲坠，还是在地下宫殿里被光影感动得热泪盈眶，你都能清晰地感知到，自己正站在一个过去与未来、自然与人文交汇的奇妙节点上。这，正是深度旅行所能带来的，最珍贵的颤栗与启迪。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kaysersberg-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯斯贝格小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaysersberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
