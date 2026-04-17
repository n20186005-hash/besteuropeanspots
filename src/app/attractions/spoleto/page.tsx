import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯波莱托古城 Spoleto｜悬崖上的中世纪明珠与露天艺术殿堂 - 最佳欧洲景点',
  description: '车子沿着盘山公路向上爬升，翁布里亚那如天鹅绒般柔软的绿色丘陵在窗外铺展开来。当一座由赭石色房屋紧密簇拥、山顶被一座巨大城堡镇守的山城突然闯入视线时，你一定会忍不住发出惊叹。这就是斯波莱托给你的第一印象——它不是平铺直叙的，而是像一幅立体的中世纪画卷，陡峭地悬挂在蒙特鲁科山麓。空气中混合着干燥石头的尘...',
}

export default function SpoletoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯波莱托古城', href: '/attractions/spoleto' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯波莱托古城・Spoleto・意大利・斯波莱托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着盘山公路向上爬升，翁布里亚那如天鹅绒般柔软的绿色丘陵在窗外铺展开来。当一座由赭石色房屋紧密簇拥、山顶被一座巨大城堡镇守的山城突然闯入视线时，你一定会忍不住发出惊叹。这就是斯波莱托给你的第一印象——它不是平铺直叙的，而是像一幅立体的中世纪画卷，陡峭地悬挂在蒙特鲁科山麓。空气中混合着干燥石头的尘土气、从小巷深处飘来的新鲜迷迭香香味，还有远处厨房里炖煮的番茄酱底浓郁的香气。
走进古老的石门，时间立刻慢了下来。脚下滑溜溜的石灰华石板路，被无数脚步和岁月打磨得光亮照人，反射着意大利特有的、明晃晃的阳光。你的耳朵会先被一种奇妙的静谧捕获，那是山城特有的隔音效果，但仔细听，又有生活的声音从四面八方渗出来：某扇木窗后传来歌剧咏叹调的片段，那是某位居民在随意练声；广场上咖啡杯碟轻碰的脆响；还有你自己的脚步声在狭窄巷道两壁间的回响。当地人骑着小小的摩托车，“突突”地穿过你认为绝对无法通行的拱门，他们向你点头微笑，仿佛你只是误入了他们自家后院。
这座城市最打动人心的，是那种举重若轻的生活与艺术的交融。在这里，千年的罗马剧场不是被栏杆围起的废墟，而是夏天上演莎士比亚戏剧的天然舞台；阴凉的中世纪拱廊下，坐着喝Espresso的老人，而他身后墙壁上的壁画可能出自文艺复兴大师之手。斯波莱托的魅力在于，它从未沦为单纯的博物馆，历史是它的骨架，而充满烟火气的意大利生活，才是它始终温热的血肉。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着盘山公路向上爬升，翁布里亚那如天鹅绒般柔软的绿色丘陵在窗外铺展开来。当一座由赭石色房屋紧密簇拥、山顶被一座巨大城堡镇守的山城突然闯入视线时，你一定会忍不住发出惊叹。这就是斯波莱托给你的第一印象——它不是平铺直叙的，而是像一幅立体的中世纪画卷，陡峭地悬挂在蒙特鲁科山麓。空气中混合着干燥石头的尘土气、从小巷深处飘来的新鲜迷迭香香味，还有远处厨房里炖煮的番茄酱底浓郁的香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进古老的石门，时间立刻慢了下来。脚下滑溜溜的石灰华石板路，被无数脚步和岁月打磨得光亮照人，反射着意大利特有的、明晃晃的阳光。你的耳朵会先被一种奇妙的静谧捕获，那是山城特有的隔音效果，但仔细听，又有生活的声音从四面八方渗出来：某扇木窗后传来歌剧咏叹调的片段，那是某位居民在随意练声；广场上咖啡杯碟轻碰的脆响；还有你自己的脚步声在狭窄巷道两壁间的回响。当地人骑着小小的摩托车，“突突”地穿过你认为绝对无法通行的拱门，他们向你点头微笑，仿佛你只是误入了他们自家后院。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市最打动人心的，是那种举重若轻的生活与艺术的交融。在这里，千年的罗马剧场不是被栏杆围起的废墟，而是夏天上演莎士比亚戏剧的天然舞台；阴凉的中世纪拱廊下，坐着喝Espresso的老人，而他身后墙壁上的壁画可能出自文艺复兴大师之手。斯波莱托的魅力在于，它从未沦为单纯的博物馆，历史是它的骨架，而充满烟火气的意大利生活，才是它始终温热的血肉。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯波莱托古城`} />
                <InfoRow label="英文名称" value={`Spoleto`} />
                <InfoRow label="正式名称" value={`Spoleto`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`斯波莱托`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾作为强大的伦巴第王国重要公国的首都，是连接罗马与亚得里亚海的关键战略与文化枢纽。`} />
                <InfoRow label="建筑特色" value={`一座立体而生动的“山城”，中世纪巷道、罗马遗迹、巍峨城堡与巨型石桥在蒙特鲁科山丘上层层叠叠，宛如从岩石中生长出来。`} />
                <InfoRow label="建筑风格" value={`融合了古罗马的厚重、伦巴第的雄浑与文艺复兴的优雅，是翁布里亚地区建筑演变的活化石。`} />
                <InfoRow label="文化价值" value={`不仅是历史遗迹的集合，更因每年举办的“两个世界艺术节”而成为充满活力的现当代文化孵化器。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放。主要古迹如斯波莱托主教座堂开放时间为每天8:30-18:30（夏季可能延长）；罗卡城堡开放时间为周二至周日9:30-19:30，周一闭馆。具体时间随季节微调，建议行前在官网确认。`} />
              <InfoRow label="门票价格" value={`进入古城免费。参观主要景点需购票：罗卡城堡门票约8欧元；考古博物馆与剧院联票约6欧元。常设有“斯波莱托卡”联票，涵盖城堡、教堂、博物馆等3-4个景点，价格约12欧元，性价比高。学生及65岁以上老人享有折扣。`} />
              <InfoRow label="地址" value={`Piazza della Libertà, 06049 Spoleto PG, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是佩鲁贾圣弗朗西斯机场，距离约50公里。从机场可搭乘巴士或出租车至佩鲁贾火车站，换乘前往斯波莱托的火车（约1小时车程，班次频繁）。从罗马出发更便捷：乘火车至特尔尼站，转乘地区列车约30分钟即可抵达斯波莱托站。从火车站出来，你可以选择步行约20分钟上山进入老城核心，或者乘坐本地循环小巴。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯波莱托的故事，要从罗马人说起。早在公元前3世纪，这里就已经是一个重要的罗马殖民地，被称为“斯波莱提乌姆”。如今你漫步在老城脚下，依然能撞见令人震撼的罗马遗产——比如那座保存完好的德鲁索凯旋门，它是为了纪念一位战功赫赫的将军而建，石头上雕刻的胜利浮雕虽被风雨侵蚀，却依然透着帝国时代的威严。更令人叫绝的是那座一世纪的罗马剧场，它被巧妙地“缝”进了后来修建的中世纪建筑群里，就像一个被遗忘又重见天日的秘密。想象一下，罗马的贵族们曾在此观看戏剧，而他们的声音，仿佛还沉淀在那些古老的石材之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国崩塌后，斯波莱托迎来了它最辉煌也最动荡的时期——伦巴第时代。公元6世纪，伦巴第人横扫意大利，在此建立了强大的斯波莱托公国，其疆域一度覆盖了大半个意大利中部。山顶那座庞然大物般的罗卡城堡，其最初的基石就是伦巴第人奠定的。他们不仅是战士，也是建设者，将一种粗犷而坚固的建筑风格带到了这里。这个时期，斯波莱托成了权力与文化的中心，在分裂的意大利半岛上扮演着关键角色，它的总督甚至能与教皇和法兰克皇帝分庭抗礼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪的战火与教权的争夺，在斯波莱托的城墙上留下了深刻的刻痕。教宗国势力扩张，城堡被不断加固和重建，成了教皇控制翁布里亚地区的“铁拳”。你如今看到的城堡主体，大多来自14-15世纪的教宗工程师之手。但权力更迭的硝烟之外，艺术却在悄然生长。12世纪修建的斯波莱托主教座堂，正立面是那个时代最辉煌的罗马式艺术杰作：巨大的玫瑰窗宛如天堂之眼，下方是菲利波·利皮创作的圣母加冕壁画，绚丽的色彩讲述了另一个关于神圣与美的故事。教堂广场是城市的客厅，见证了无数节日、集会与日常的闲谈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的篇章翻到近现代，斯波莱托找到了自己全新的文化身份。这一切，要归功于一位名叫吉安·卡洛·梅诺蒂的音乐家。1958年，他创立了“两个世界艺术节”，初衷是为欧洲和美洲的艺术家提供一个相遇、碰撞的舞台。从此，每年夏天，这座古老的山城就会变身为一座巨大的露天剧场。戏剧、歌剧、舞蹈、音乐会的海报贴满石墙，世界级的艺术家和狂热的观众挤满了每一个角落，古典的剧场、教堂中殿甚至露天广场都成为演出现场。历史与现代在此刻达成了奇妙的和解，古老的石头因艺术而重新呼吸。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在午后抵达斯波莱托，将最精华的徒步探索留给下午到傍晚的柔和光线。整体游览需要至少5-6小时，节奏宜慢不宜快，因为上下坡的巷道本身就是体验的一部分。路线设计为由低到高，先感受老城的肌理，再攀登至城堡俯瞰全景，最后在夕阳中走过那座奇迹般的引水桥结束，这是一条充满韵律和视觉奖励的经典路径。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋，这里的路不是上坡就是下坡，石板路在雨天会很滑。
夏季参观一定要带足饮水，虽然城中也有喷泉，但攀登过程消耗很大。
如果体力有限，可以合理利用连接古城低处与城堡的小型公共巴士，它能节省不少体力。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的罗马城门“Porta Fuga”进入，用手触摸那些两千多年前垒起的巨石，感受历史的凉意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Via del Ponte蜿蜒向上，在那些由中世纪工匠店铺改造而成的精品橱窗前稍作停留。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让主教座堂广场上那辉煌的罗马式立面和大理石镶嵌画第一次震撼你的视线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进阴凉的教堂内部，在左侧小礼拜堂静静仰望菲利波·利皮绘制的圣母生平壁画，让金色的光环照亮你的思绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上挑战一段陡峭的台阶，当宏伟的罗卡城堡赫然矗立眼前时，你会觉得一切汗水都值得。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡的塔楼或露台，让自己沉浸在一幅360度无死角的翁布里亚山谷全景画卷之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城堡后方的森林步道漫步，走向那座横跨深渊的“庞蒂 delle Torri”巨桥，从桥中央感受山风呼啸而过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分原路返回，看夕阳的金色为整座赭石色山城披上最后一道温柔的光纱。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`引水桥仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`从“庞蒂 delle Torri”引水桥下方的Valle del Tessino山谷小径向上看，用广角镜头捕捉石桥凌空飞渡、连接两座苍翠山脊的惊人气势，最佳时间是晴朗的下午，侧光能让桥体岩石的纹理毕现。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主教座堂玫瑰窗特写`}</h4>
                  <p className="text-sm text-gray-700">{`站在主教座堂广场的远端，利用长焦镜头压缩空间，将宏伟的玫瑰窗、精致的门廊浮雕与偶然入镜的当地行人一同框入，生动的宗教与生活图景就此定格，柔和的正午顶光能均匀照亮立面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从城堡露台俯瞰古城`}</h4>
                  <p className="text-sm text-gray-700">{`在罗卡城堡的东南角露台，等待日落前半小时的黄金时刻，将棋盘格般的红瓦屋顶、远处的主教座堂钟楼以及绵延至天际的翁布里亚丘陵一同摄入画框，层次感极为丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古城巷道光影`}</h4>
                  <p className="text-sm text-gray-700">{`午后穿行在如“Via dei Fossi”这类狭窄巷道中，当阳光斜射入巷，在古老的石墙上切割出明暗交错的光影时，捕捉一个路人背影或一扇挂着鲜花的门洞，故事感瞬间拉满。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民尤其是老人时，请务必先微笑并征得同意，一个友好的“Permesso？”（可以吗？）是基本的礼貌。`}</li>
                <li>• {`利用好山城多变的光影，侧光和逆光往往能拍出更具戏剧性和质感的照片，大胆尝试。`}</li>
                <li>• {`艺术节期间，演出场所内部通常禁止使用闪光灯和专业摄影设备，请遵守规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心时光机`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由12世纪贵族塔楼改造的精品酒店，睡在古老的石拱之下，清晨被远处教堂的钟声而非闹钟唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术家的工作室`}</h4>
                  <p className="text-sm text-green-800">{`选择一间位于安静小巷的艺术家公寓，房间里可能还留有原主人的画作和满墙的书籍，小阳台正对着层层叠叠的瓦屋顶，适合晚上喝一杯本地红酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外田园诗`}</h4>
                  <p className="text-sm text-yellow-800">{`住在距离古城几分钟车程的农庄度假屋，被橄榄树和葡萄园环绕，享用农家自产的奶酪和初榨橄榄油，享受绝对的宁静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`节庆狂欢之选`}</h4>
                  <p className="text-sm text-purple-800">{`艺术节期间，预订广场旁的 historical residence，推开窗就能听到乐队排练的乐声，下楼即融入节日的沸腾人群，是沉浸式体验的终极选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季艺术节期间（通常六月底到七月中）住宿非常紧俏，价格也会飙升，务必提前至少三个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿多以历史建筑改造， charm十足但可能没有电梯，携带大件行李会有些挑战，预订时最好确认。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`斯波莱托治安很好，夜晚巷道安静且安全，但独自夜行时还是建议走有路灯的主路。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯波莱托时，我背包里沉甸甸的，不仅装满了照片，更装满了一种奇特的宁静感。这座城市教会我的，是一种关于“层次”的智慧。历史的层次、建筑的层次、生活的层次，甚至光影的层次，都如此清晰可辨却又和谐共处。它不像那些被完美封存、仅供瞻仰的博物馆城市，在这里，你能看到石头缝里长出新的生命，能听到咏叹调从古老的窗户飘向山谷。它证明了过去并非沉重的负担，而是可以不断被重新诠释、注入活力的源泉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切扁平化的快节奏世界里，斯波莱托像一座坚毅的孤岛，提醒着我们另一种生活的可能：一种垂直的、需要攀爬的、每一步都能踩到历史回响的、充满质感的生活。它值得你专程绕道而来，花上一天时间，什么也不做，只是迷路、攀登、驻足、聆听。当你最终站在那座巨型引水桥上，感受着来自中世纪的山风穿过你的身体时，你会明白，这趟旅程不仅仅是在地图上又多了一个标记，而是你的内心，也被构筑起了新的、坚实的层次。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/todi-medieval-hilltown" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托迪中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Todi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pienza-renaissance-ideal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
