import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩鲁贾老城 Perugia Old Town｜漫步中世纪山城，邂逅巧克力与艺术的慢生活 - 最佳欧洲景点',
  description: '想象一下，你站在一座意大利中部山顶的古城门口，眼前是厚重的石头城墙和蜿蜒向上的中世纪小巷。这就是佩鲁贾老城给我的第一印象——一座被时光封存的立体迷宫。空气里混合着古老石墙的气息和远处飘来的巧克力甜香（没错，佩鲁贾是著名巧克力Baci的故乡！）。穿梭在石板路上，你会突然从一个狭窄的拱门钻出来，眼前豁然...',
}

export default function PerugiaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '佩鲁贾老城', href: '/attractions/perugia-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">佩鲁贾老城・Perugia Old Town・意大利・佩鲁贾</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你站在一座意大利中部山顶的古城门口，眼前是厚重的石头城墙和蜿蜒向上的中世纪小巷。这就是佩鲁贾老城给我的第一印象——一座被时光封存的立体迷宫。空气里混合着古老石墙的气息和远处飘来的巧克力甜香（没错，佩鲁贾是著名巧克力Baci的故乡！）。穿梭在石板路上，你会突然从一个狭窄的拱门钻出来，眼前豁然开朗，出现一个满是咖啡馆的广场，当地人正悠闲地喝着咖啡。这里没有佛罗伦萨那样的人潮汹涌，节奏慢得让人心安。最神奇的是，整座老城底下还藏着庞大的伊特鲁里亚人地下古城，像是一个埋藏千年的秘密。在这里，最好的游览方式就是丢掉地图，让自己迷路。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你站在一座意大利中部山顶的古城门口，眼前是厚重的石头城墙和蜿蜒向上的中世纪小巷。这就是佩鲁贾老城给我的第一印象——一座被时光封存的立体迷宫。空气里混合着古老石墙的气息和远处飘来的巧克力甜香（没错，佩鲁贾是著名巧克力Baci的故乡！）。穿梭在石板路上，你会突然从一个狭窄的拱门钻出来，眼前豁然开朗，出现一个满是咖啡馆的广场，当地人正悠闲地喝着咖啡。这里没有佛罗伦萨那样的人潮汹涌，节奏慢得让人心安。最神奇的是，整座老城底下还藏着庞大的伊特鲁里亚人地下古城，像是一个埋藏千年的秘密。在这里，最好的游览方式就是丢掉地图，让自己迷路。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="佩鲁贾老城" />
                <InfoRow label="英文名称" value="Perugia Old Town" />
                <InfoRow label="正式名称" value="Perugia Old Town" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="佩鲁贾" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天开放（城内各景点开放时间不一，通常为9:00-19:00）" />
              <InfoRow label="门票价格" value="进入老城区域免费，城内各博物馆、教堂等单独收费。" />
              <InfoRow label="地址" value="Centro Storico, 06123 Perugia PG, Italy" />
              <InfoRow label="交通方式" value="从佩鲁贾圣弗朗西斯德阿西西国际机场（PEG）出发，乘坐机场巴士或出租车约20分钟可达老城边缘。从火车站（Perugia Fontivegge）可搭乘迷你地铁（Minimetrò）上山，约10分钟到达老城中心Pincetto站，是体验这座山城特色的有趣方式。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">佩鲁贾的故事得从两千多年前讲起。最早在这里安家的是神秘的伊特鲁里亚人，他们挖空了山体，建造了坚固的城墙和宏伟的拱门，比如现在还能看到的“伊特鲁里亚拱门”，那可是老城的“原装”古董。后来罗马人来了，再后来中世纪时期，佩鲁贾成了繁荣的城邦，那些高耸的塔楼和威严的宫殿，比如有巨大阶梯的执政官宫，都是那个权力与艺术交织时代的产物。走在老城里，你时不时会看到一些建筑上刻着狮子和格栅的图案，那是曾经统治这里的“十人委员会”的标志，仿佛在无声地诉说着往日的权谋。到了文艺复兴，大师佩鲁吉诺（拉斐尔的老师）在这里留下了不少壁画，让艺术气息渗透进了石头缝里。近代以来，佩鲁贾成了大学城和巧克力之都，古老的外壳下跳动着一颗年轻又甜蜜的心。触摸着那些被无数人脚步磨得光滑的石阶，你会感觉像是在翻阅一本立体的、活着的史书。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城最著名的11月4日广场开始，这里是城市的客厅。然后向西探索主座教堂和执政官宫，接着沿着Corso Vannucci这条主街漫步，随意拐进两旁迷人的小巷，最后可以前往马焦雷堡垒俯瞰全景。全程步行，慢慢逛大约需要3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小巷错综复杂，谷歌地图有时会失灵，不妨享受迷路的乐趣，总能绕回主街。务必穿一双绝对舒适的鞋子，因为全程都是上下坡的石板路。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  起点在11月4日广场，感受城市中心生活气息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观佩鲁贾主座教堂及其内部的圣戒礼拜堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  进入执政官宫，欣赏国立翁布里亚美术馆的艺术珍品。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  漫步在Corso Vannucci大街，逛逛精品店和咖啡馆。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  钻入旁边的中世纪小巷，比如Via dei Priori，体验迷宫乐趣。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  终点可设在马焦雷堡垒或伊特鲁里亚拱门，俯瞰壮丽景色。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  11月4日广场喷泉前</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或黄昏，阳光柔和。以宏伟的执政官宫和教堂为背景，拍摄广场上的生活场景，动静结合。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  马焦雷堡垒观景台</h4>
                  <p className="text-sm text-gray-700">建议在晴朗的下午前往，顺光拍摄。从这里可以拍下整个红色屋顶的老城全景和远处翁布里亚的绿色丘陵，层次感极佳。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  伊特鲁里亚拱门</h4>
                  <p className="text-sm text-gray-700">正午时分阳光能照亮拱门细节。从下往上仰拍，突出这座古老石门的厚重历史感和建筑线条。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  某条无名小巷的拱门下</h4>
                  <p className="text-sm text-gray-700">午后光线斜射入小巷时最美。利用拱门做画框，拍摄纵深感的石板路和两侧斑驳的墙壁，故事感十足。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 小巷光线较暗，建议调高相机感光度或使用大光圈。拍摄当地人前，最好微笑示意，获得同意。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华之选</h4>
                  <p className="text-sm text-blue-800">入住老城中心的宫殿改造酒店，如布鲁斯酒店，沉浸式体验历史氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色体验</h4>
                  <p className="text-sm text-green-800">选择由古老修道院或民居改建的精品酒店，房间常有石头拱顶，位置隐秘安静。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">住在老城边缘或山脚下的现代酒店，价格更亲民，乘坐迷你地铁上山很方便。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  学生之选</h4>
                  <p className="text-sm text-purple-800">老城内有众多大学，周边也有不少性价比高的公寓式住宿或B&B。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的酒店大多由古建筑改造，可能没有电梯，行李多的游客需留意。住在城内晚上更能感受古城静谧的魅力。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">佩鲁贾老城就像一块醇厚的黑巧克力，初尝是历史的微苦与厚重，细品之下，却是艺术、青春和甜蜜生活交织的丰富回甘。它不急于向你展示所有，而是邀请你在每一次拐弯、每一段上坡中，自己去发现惊喜。如果你厌倦了打卡式的旅行，渴望一段能沉下心来、用脚步丈量历史的慢时光，那么这个山顶上的中世纪迷宫，绝对会在你的记忆里留下温暖而独特的一笔。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
