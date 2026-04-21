import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特克伦堡 Tecklenburg｜登顶“威斯特法伦的阳台”，在千年城堡剧场听风吟 - 最佳欧洲景点',
  description: '朋友，想象一下，当你乘坐的小火车慢悠悠地穿过北威州平坦的绿色田野，远方地平线上突然出现一道深色的、树木茂密的山脊，山顶上隐约可见一片浅色小屋的尖顶，像童话书的插页直接跳进了现实。这就是你对特克伦堡的第一眼。走出车站，空气立刻变得清冽，带着松针和雨后泥土的芬芳。你开始沿着蜿蜒的上坡路走，路边的花园里绣',
}

export default function TecklenburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '特克伦堡', href: '/destinations/europe' },
            { label: '特克伦堡', href: '/attractions/tecklenburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特克伦堡・Tecklenburg・德国・特克伦堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你乘坐的小火车慢悠悠地穿过北威州平坦的绿色田野，远方地平线上突然出现一道深色的、树木茂密的山脊，山顶上隐约可见一片浅色小屋的尖顶，像童话书的插页直接跳进了现实。这就是你对特克伦堡的第一眼。走出车站，空气立刻变得清冽，带着松针和雨后泥土的芬芳。你开始沿着蜿蜒的上坡路走，路边的花园里绣球花开得泼辣，蜜蜂嗡嗡作响。渐渐地，你进入了它的节奏。
爬完最后一段坡，眼前豁然开朗。你真正站在了“威斯特法伦的阳台”上。这个绰号绝非虚言——整个古镇仿佛停泊在一艘巨大的绿色航船甲板上。脚下是层层叠叠、棋盘格般的红瓦屋顶，那些白得耀眼、黑色木条勾勒出几何图案的老房子，紧紧依偎在一起，沿着山脊的弧度温柔地起伏。远处，无垠的北德低地平原像一幅缓缓展开的绿色天鹅绒地毯，一直铺到天边。风声在这里变得具体，它穿过古老的橡树林，掠过屋顶的风向标，带来远方教堂悠扬的钟声。这里没有大城市的喧嚣，只有居民修剪花园的剪刀声，和咖啡馆门口杯子轻碰的脆响。
而最打动人心的一刻，往往发生在你穿过宁静的巷弄，突然与那片巨大的城堡废墟相遇之时。这不是一座修复精美的宫殿，而是时间的骨骼——厚重的砂岩城墙坍塌成戏剧性的形状，拱门只剩下苍劲的轮廓，野草和苔藓在石缝间蓬勃生长。你触摸着冰凉的石头，能感觉到数百年的风霜都沉淀在里面。然后你抬头，看到废墟环抱之中，那个依地势而建的、可容纳近两千人的露天剧场舞台。想象一下，当夜幕降临，星光和舞台灯光一同亮起，戏剧在这里上演，台词混着山风飘向夜空，历史废墟与当代艺术在此刻完成了奇妙的共生。这就是特克伦堡最核心的魅力：它不是一个被冻在琥珀里的景点，而是一个呼吸着、生长着的社区，历史是它的地基，生活是它的日常，而艺术是它望向未来的眼睛。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，当你乘坐的小火车慢悠悠地穿过北威州平坦的绿色田野，远方地平线上突然出现一道深色的、树木茂密的山脊，山顶上隐约可见一片浅色小屋的尖顶，像童话书的插页直接跳进了现实。这就是你对特克伦堡的第一眼。走出车站，空气立刻变得清冽，带着松针和雨后泥土的芬芳。你开始沿着蜿蜒的上坡路走，路边的花园里绣球花开得泼辣，蜜蜂嗡嗡作响。渐渐地，你进入了它的节奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "爬完最后一段坡，眼前豁然开朗。你真正站在了“威斯特法伦的阳台”上。这个绰号绝非虚言——整个古镇仿佛停泊在一艘巨大的绿色航船甲板上。脚下是层层叠叠、棋盘格般的红瓦屋顶，那些白得耀眼、黑色木条勾勒出几何图案的老房子，紧紧依偎在一起，沿着山脊的弧度温柔地起伏。远处，无垠的北德低地平原像一幅缓缓展开的绿色天鹅绒地毯，一直铺到天边。风声在这里变得具体，它穿过古老的橡树林，掠过屋顶的风向标，带来远方教堂悠扬的钟声。这里没有大城市的喧嚣，只有居民修剪花园的剪刀声，和咖啡馆门口杯子轻碰的脆响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最打动人心的一刻，往往发生在你穿过宁静的巷弄，突然与那片巨大的城堡废墟相遇之时。这不是一座修复精美的宫殿，而是时间的骨骼——厚重的砂岩城墙坍塌成戏剧性的形状，拱门只剩下苍劲的轮廓，野草和苔藓在石缝间蓬勃生长。你触摸着冰凉的石头，能感觉到数百年的风霜都沉淀在里面。然后你抬头，看到废墟环抱之中，那个依地势而建的、可容纳近两千人的露天剧场舞台。想象一下，当夜幕降临，星光和舞台灯光一同亮起，戏剧在这里上演，台词混着山风飘向夜空，历史废墟与当代艺术在此刻完成了奇妙的共生。这就是特克伦堡最核心的魅力：它不是一个被冻在琥珀里的景点，而是一个呼吸着、生长着的社区，历史是它的地基，生活是它的日常，而艺术是它望向未来的眼睛。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特克伦堡`} />
                <InfoRow label="英文名称" value={`Tecklenburg`} />
                <InfoRow label="正式名称" value={`Tecklenburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`特克伦堡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是中世纪特克伦堡伯爵领地的权力中心，其城堡遗址上诞生了德国最大、最富传奇色彩的露天城堡剧场。`} />
                <InfoRow label="建筑特色" value={`典型的威斯特法伦木桁架房屋聚落，白墙黑木，层层叠叠依山而建，与宏伟的砂岩城堡废墟形成鲜明对比。`} />
                <InfoRow label="建筑风格" value={`以中世纪和文艺复兴时期的木桁架建筑为主，城堡遗址则混合了罗马式基础与后期加固的防御工事风格。`} />
                <InfoRow label="文化价值" value={`是活的古镇典范，不仅保存了完整的历史肌理，更将古老的废墟转化为充满生命力的现代文化舞台，体现了德国人对历史遗产的创造性延续。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇区域全天开放，自由漫步。城堡遗址及露天剧场区域夏季（4月至10月）通常从上午9点开放至黄昏；冬季（11月至3月）开放时间缩短，一般为上午10点至下午4点，但可能因天气关闭。具体的博物馆或导游服务时间需查询当地旅游局网站，夏季周末常有特别活动。`} />
              <InfoRow label="门票价格" value={`进入古镇和漫步城堡遗址区域完全免费。若参加有组织的导览游或进入小型当地博物馆，费用约在5-8欧元。夏季露天剧场演出票价因剧目和座位而异，通常在20-60欧元之间，需提前在线预订。`} />
              <InfoRow label="地址" value={`Burgstraße 1, 49545 Tecklenburg, Germany`} />
              <InfoRow label="交通方式" value={`最近的主要机场是多特蒙德机场（DTM）或明斯特/奥斯纳布吕克机场（FMO）。从多特蒙德中央火车站（Dortmund Hbf）出发，乘坐区域火车（RB66）前往“Tecklenburg”站，车程约1小时10分钟，每小时一班。火车沿途穿过宁静的乡村，景色宜人。抵达特克伦堡火车站后，你需要做好“攀登”的准备——小镇雄踞山脊，从火车站到老城中心是一段约15-20分钟的上坡路，沿途风景渐入佳境，本身就是游览的一部分。自驾是最方便的方式，可将车停在山脚下的公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特克伦堡的故事，始于那片险峻的山脊。早在1100年左右，特克伦堡伯爵们就看中了这个易守难攻的制高点，在此打下了第一块基石，建立了他们的权力城堡。最初的城堡是罗马式的，坚固、实用，俯瞰着脚下的领土和重要的贸易道路。伯爵家族在这里运筹帷幄，他们的影响力一度不容小觑。中世纪的石头见证着家族的兴衰、联姻与纷争，城堡不断被扩建和加固，成为威斯特法伦地区一个稳定的权力符号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的剧本从不缺少动荡篇章。到了17世纪，那场席卷欧洲、异常惨烈的三十年战争同样没有放过这座山巅城堡。1647年，城堡在战火中遭到了严重的破坏。但这还不是终点。18世纪末，法国大革命战争的浪潮波及至此，城堡被法国军队部分炸毁，最终走向了不可逆转的衰败。它逐渐被遗弃，昔日的荣耀殿堂沦为了采石场，当地居民搬走了可用的石材去修建自己的房屋。城堡仿佛一个巨人缓缓倒下，只剩残垣断壁在风雨中沉默，被森林逐渐吞没。特克伦堡褪去了军事要塞的外衣，回归成一个宁静的、以农业和手工业为主的山间小镇，那些从城堡取来的石头，或许就砌在了某间你正在欣赏的可爱木桁架房子的地基里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折点出现在20世纪初，一个充满浪漫主义和乡土情怀的时代。一位名叫海因里希·许尔的当地校长，看着这片被遗忘的废墟，心中萌生了一个大胆的愿景：为什么不让沉睡的石头再次歌唱？1923年，在他的激情推动下，人们在城堡主废墟的天然“碗状”地形中，清理出一片场地，搭建起最简单的舞台。第一届“特克伦堡城堡游戏”上演了。演员是本地人，观众坐在自带的板凳上，剧本或许粗糙，但当台词在古老的城墙间回荡时，一种魔法诞生了。人们发现，这片废墟拥有无与伦比的天然声效和令人屏息的戏剧氛围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，一场持续百年的文化复兴拉开了序幕。露天剧场从简陋的草台班子，逐渐发展成专业、享誉全德的演出圣地。舞台和观众席被精心设计，既尊重废墟的原貌，又满足现代演出的需求。每年夏季，这里上演着从莎士比亚古典戏剧到现代音乐剧的各种作品，吸引了成千上万的观众。战争的创伤被艺术的疗愈力量抚平，废墟不再是失败的象征，而是想象力的催化剂和社区的骄傲。今天的特克伦堡，其身份早已与这个露天剧场密不可分。城堡的“毁灭”，意外地为其“重生”开辟了最独特的道路，让它从一座单纯的防御堡垒，蜕变成为一个永恒的文化堡垒。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完美体验特克伦堡，建议安排一整天时间。最好在上午9点左右抵达，这时晨雾可能还未完全散去，阳光柔和，游客稀少，你能独占那份山间的宁静。整体游览节奏应是“先扬后抑再升华”：先从山脚向上探索充满生活气息的古镇，感受其肌理；然后沉浸于城堡废墟的沧桑与寂静；最后以开阔的远景和午后一杯咖啡的悠闲收尾。如果恰逢夏季演出季，强烈建议留到傍晚，观看一场演出，那将是整个旅程的高潮。这样的安排让你既能深入细节，又能把握全局，体验从历史到当下、从静谧到激昂的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇道路多为陡峭的鹅卵石路，务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里是“灾难级”选择。
夏季旺季的周末下午，古镇中心可能会比较拥挤，尽量将核心漫步安排在上午。
如果自驾，尽早到达山脚下的停车场（地址：Parkplatz Am Berg，免费），旺季午后很可能一位难求。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的主停车场出发，沿着用鹅卵石铺就、两旁开满鲜花的“上城”小路缓缓向上走，让自己慢慢适应小镇的海拔和节奏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个转弯处停下来回头望，你会惊喜地发现视野已经打开，能够瞥见远方平原的一角，这是预告片的惊鸿一瞥`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进一条名叫“小马厩巷”的狭窄通道，用手触摸两边有着数百年历史、被岁月打磨得温润的木桁架墙壁，感受历史的触感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让喧闹的人声和咖啡香把你引向集市广场，坐在长椅上观察当地人在文艺复兴风格的市政厅前遛狗、闲聊的日常场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场一侧的拱门开始攀登，沿着古老的城堡墙基步道行走，脚下是凹凸不平的原始石板，头顶是参天古木的华盖`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`猛然间走出树林，巨型砂岩废墟的全貌毫无防备地撞入眼帘，在那一刻停下所有脚步和思绪，静静地与时间对视`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入露天剧场区域的空场，试着站在舞台中央低声说句话，听听废墟围墙带来的神奇混响，想象满座时的盛大场面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到城堡废墟最西端的“观景台”，那里有一张长椅，是坐下来面对无尽绿色平原发呆和消化所有感受的绝佳地点`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`集市广场东侧小巷的阶梯处`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光下，站在阶梯中段向上拍摄，能捕捉到木桁架老屋层层叠叠、光影分明的立体感，构图时带上局部屋顶和天空。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡废墟内部面向露天剧场舞台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，阳光会为残破的拱门和观众席台阶镀上金色，站在舞台后方拍向观众席和后方城墙，能获得极具戏剧张力和历史层次感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“威斯特法伦阳台”全景点（观景台）`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的清晨或傍晚，使用广角镜头，将前景的古城屋顶、中景的茂密森林与远景无垠的平原一同纳入镜中，层次极其丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇入口处的弯道`}</h4>
                  <p className="text-sm text-gray-700">{`从低处仰拍古镇坐落在山脊上的整体轮廓，尤其是雨后天晴时，建筑色彩格外鲜明，绿意盎然，能拍出明信片般的标准全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在露天剧场非演出时间可以安静拍照，但请绝对尊重场地，不要攀爬脆弱的古迹墙体。无人机飞行在此类历史遗迹和居民区上空通常有严格限制，起飞前务必查清当地法规。柔和的光线是这里最好的朋友，尽量避免在正午的顶光下拍摄建筑细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`家的温度`}</h4>
                  <p className="text-sm text-blue-800">{`一家位于古镇中心半山腰的家庭式公寓，女主人会为你准备好当地特色的“威斯特法伦下午茶”，从客厅窗户就能看到教堂钟楼和飞来飞去的雨燕。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`由一栋16世纪商人宅邸改造的精品酒店，房间保留了原始的橡木横梁和窄窗，现代的舒适设施却一应俱全，睡在历史里却无比安稳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山林静谧`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇边缘森林旁的一家小型设计酒店，房间拥有巨大的落地窗直面林景，晚上只能听到风吹树叶的沙沙声，是彻底放松的隐居之所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`演出之夜专属`}</h4>
                  <p className="text-sm text-purple-800">{`如果是为了看剧场演出，可以选择剧院运营的少量旧演员宿舍改造的房间，虽然简朴，但位置绝佳，散场后你可以慢慢走回住处，回味台词和星光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特克伦堡的住宿数量有限，尤其是在夏季演出季（6月-9月），热门周末的客房可能提前数月就被订光，务必尽早规划。住在镇上意味着夜晚和清晨你可以独享几乎没有游客的魔法时刻。小镇治安极好，夜晚独自在灯火阑珊的巷弄中散步也是一种享受。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开特克伦堡时，我的背包里没有多少纪念品，但心里却沉甸甸地装满了东西。装满了爬山时微喘的气息，集市上面包房的香气，指尖触摸过的冰凉砂岩的触感，还有坐在观景台长椅上，看着云影在广阔平原上移动时那份彻底的放空。这个地方教会我的，是一种关于“时间”的不同解读。它没有试图将辉煌的过去修复得金碧辉煌来讨好我们，而是坦然展示着断裂、坍塌和野草滋生的真实过程。它承认毁灭，但又在毁灭的基座上，建立起更灵动、更具生命力的东西——艺术、社区和日常的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求快速打卡、滤镜完美世界的时代，特克伦堡的存在像一首沉稳的叙事诗。它邀请你慢下来，用脚步丈量高差，用耐心等待一场在废墟中开幕的戏剧，用一个下午什么都不做，只是看光线的变化。它告诉你，历史不一定是沉重的教科书，它可以是你身旁的一堵老墙，是剧场里的一句台词，是咖啡馆老板娘对你微笑时眼角的皱纹。对于每一位渴望深度游的旅人，这里不仅仅是一个景点，更是一种心境。它让你相信，有些地方，它的美不在于永恒不变，而在于它如何承载变迁，如何让伤痕也开出花来。来这里，不只是看一个“威斯特法伦的阳台”，更是为了获得一个眺望自己内心平野的安静视角。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schwabisch-hall-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hann-muenden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    汉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">汉明登</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hann. Münden</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stolzenfels-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
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
