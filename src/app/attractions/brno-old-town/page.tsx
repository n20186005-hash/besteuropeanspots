import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布尔诺老城 Brno Old Town｜摩拉维亚之心，在广场钟声与地下迷宫中穿梭时光 - 最佳欧洲景点',
  description: '走进布尔诺老城，第一感觉是“放松版的布拉格”。没有那么多游客推搡，广场上的咖啡座总是有空位，当地人骑着自行车从你身边掠过。自由广场是心脏，周围环绕着色彩柔和的巴洛克和文艺复兴式房子，中央的帕尔纳斯喷泉在阳光下闪闪发光。你一定要摸摸那座“会提前敲响午间钟声”的老钟，听当地人讲那个“为了骗过敌人而提早敲...',
}

export default function BrnoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布尔诺老城', href: '/attractions/brno-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布尔诺老城・Brno Old Town・捷克・布尔诺</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进布尔诺老城，第一感觉是“放松版的布拉格”。没有那么多游客推搡，广场上的咖啡座总是有空位，当地人骑着自行车从你身边掠过。自由广场是心脏，周围环绕着色彩柔和的巴洛克和文艺复兴式房子，中央的帕尔纳斯喷泉在阳光下闪闪发光。你一定要摸摸那座“会提前敲响午间钟声”的老钟，听当地人讲那个“为了骗过敌人而提早敲钟”的可爱传说。街道窄窄的，蜿蜒向上，走着走着就撞见了高踞山丘上的圣彼得保罗大教堂那哥特式的双塔，像两个沉默的卫士守护着城市。这里的氛围是生活化的，历史就藏在街角的面包店香气和电车叮当声里。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进布尔诺老城，第一感觉是“放松版的布拉格”。没有那么多游客推搡，广场上的咖啡座总是有空位，当地人骑着自行车从你身边掠过。自由广场是心脏，周围环绕着色彩柔和的巴洛克和文艺复兴式房子，中央的帕尔纳斯喷泉在阳光下闪闪发光。你一定要摸摸那座“会提前敲响午间钟声”的老钟，听当地人讲那个“为了骗过敌人而提早敲钟”的可爱传说。街道窄窄的，蜿蜒向上，走着走着就撞见了高踞山丘上的圣彼得保罗大教堂那哥特式的双塔，像两个沉默的卫士守护着城市。这里的氛围是生活化的，历史就藏在街角的面包店香气和电车叮当声里。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布尔诺老城" />
                <InfoRow label="英文名称" value="Brno Old Town" />
                <InfoRow label="正式名称" value="Brno Old Town" />
                <InfoRow label="国家" value="捷克" />
                <InfoRow label="城市" value="布尔诺" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；各景点开放时间不一，通常为9:00-18:00。" />
              <InfoRow label="门票价格" value="进入老城区域免费；内部各景点单独收费（如圣彼得保罗大教堂塔楼约60捷克克朗，布尔诺地下迷宫约180捷克克朗）。" />
              <InfoRow label="地址" value="Brno-střed, 602 00 Brno, Czechia" />
              <InfoRow label="交通方式" value="从布尔诺图加尼机场（BRQ）乘坐76路公交车至“Hlavní nádraží”（中央火车站），再步行约15分钟可达老城中心。从布拉格乘坐火车至布尔诺中央火车站，车程约2.5小时，出站后步行约10-15分钟即可抵达。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">布尔诺的故事始于公元5-6世纪的斯拉夫人定居点，但真正作为城市登上历史舞台是在13世纪，获得了皇家城市的地位。老城的格局基本就是那时奠定的。让我觉得特别有意思的是，它一直是个“防御高手”。Špilberk城堡在17世纪被哈布斯堡王朝改造成了坚固的堡垒，后来甚至成了令人闻风丧胆的监狱，关押过许多政治犯，如今走在城堡地下阴冷的牢房里，还能感受到那股沉重的气息。不过布尔诺也有其幽默的一面，比如那个著名的“午间11点敲钟”传统，源于1645年三十年战争期间，据说聪明的守城者通过提前敲响午钟，骗过了围攻的瑞典军队，让他们以为到了停战约定的正午而撤退。这个故事代代相传，成了城市精神的一部分。到了19世纪，布尔诺成为摩拉维亚的工业中心，老城周围建起了漂亮的现代主义建筑，但老城核心依然保留了中世纪的灵魂。二战时它受损相对较轻，真是幸运。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从中心的自由广场开始，向北经过圣雅各布教堂，探索老市政厅，然后向南上山至圣彼得保罗大教堂和Špilberk城堡，最后下山逛逛绿色广场和市场。全程步行，慢慢逛大约需要3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，无需刻意导航，随意走走常有惊喜。上山去城堡和大教堂有一段坡路，请保存体力。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  自由广场起点：在帕尔纳斯喷泉旁看老钟，感受城市客厅氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  圣雅各布教堂：看其高耸的哥特式塔楼和内部华丽的巴洛克装饰。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  布尔诺老市政厅：穿过著名的“扭曲尖塔”门廊，了解城市历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  圣彼得保罗大教堂：爬上山丘，俯瞰全城红色屋顶的壮丽景色。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  Špilberk城堡：探索城堡庭院、城墙和地下监狱遗址。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  绿色广场与卷心菜市场：体验本地市集生活，品尝小吃。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  Špilberk城堡观景台</h4>
                  <p className="text-sm text-gray-700">最佳时间</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣彼得保罗大教堂前平台</h4>
                  <p className="text-sm text-gray-700">最佳时间</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  老市政厅“扭曲尖塔”下</h4>
                  <p className="text-sm text-gray-700">最佳时间</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  自由广场角落</h4>
                  <p className="text-sm text-gray-700">最佳时间</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内部拍摄通常允许，但请关闭闪光灯并保持安静。使用广角镜头能更好地捕捉广场和城堡视野。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  奢华之选</h4>
                  <p className="text-sm text-blue-800">Grandhotel Brno（布尔诺格兰德酒店），位于自由广场，坐拥绝佳位置和历史建筑本身。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中端精品</h4>
                  <p className="text-sm text-green-800">Hotel Europa，坐落于老城优雅的建筑内，风格复古，性价比高。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济实惠</h4>
                  <p className="text-sm text-yellow-800">Hostel Fléda，位于老城边缘，由音乐俱乐部运营，氛围年轻活泼。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  特色体验</h4>
                  <p className="text-sm text-purple-800">在老城周边租赁一间公寓，像本地人一样生活，自己逛早市做饭。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">住在老城内虽方便，但夜间可能偶有电车或酒吧传来的声音，对睡眠轻者可选择内侧房间或老城边缘的住宿。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">布尔诺老城不是那种用恢弘震撼你的地方，它用一种平实、亲切甚至带点狡黠幽默的方式，让你慢慢喜欢上它。在这里，历史不是供在神坛上的，而是融在每天正午11点的钟声里，在广场上喝着啤酒的人们笑谈中。它足够美丽，也足够生活，让你觉得仿佛能在这里住下来，成为它日常故事的一部分。如果你厌倦了人潮，想找一个有故事、有味道、又不失活力的欧洲老城，布尔诺会给你温暖的拥抱。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
