import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '勒芒老城 Le Mans Old Town｜漫步在时光凝固的中世纪鹅卵石街道 - 最佳欧洲景点',
  description: '一走进勒芒老城，就像不小心掉进了一本立体的中世纪绘本。脚下是磨得发亮的鹅卵石路，两旁是密密麻麻、歪歪扭扭的木筋墙老房子，颜色是那种暖暖的蜂蜜黄和赭石红，可爱极了。阳光从狭窄的街道缝隙里漏下来，打在斑驳的墙面上，光影游戏玩得特别溜。这里完全没有大城市的喧嚣，安静得能听见自己的脚步声和远处咖啡馆隐约的杯...',
}

export default function LeMansOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '勒芒老城', href: '/attractions/le-mans-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">勒芒老城</h1>
          <p className="text-xl text-gray-600 mb-4">Le Mans Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">法国</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">勒芒</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">一走进勒芒老城，就像不小心掉进了一本立体的中世纪绘本。脚下是磨得发亮的鹅卵石路，两旁是密密麻麻、歪歪扭扭的木筋墙老房子，颜色是那种暖暖的蜂蜜黄和赭石红，可爱极了。阳光从狭窄的街道缝隙里漏下来，打在斑驳的墙面上，光影游戏玩得特别溜。这里完全没有大城市的喧嚣，安静得能听见自己的脚步声和远处咖啡馆隐约的杯碟声。空气里好像都飘着旧木头和时光的味道。最神奇的是，你走着走着，一抬头，就能看到那座巨大的圣朱利安大教堂的尖顶，像一位沉默的巨人守护着这片时光秘境。在这里，不用刻意寻找景点，迷路就是最好的游览方式。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城作为开放式街区全年开放。但需注意，圣朱利安大教堂的开放时间在冬季（11月至3月）可能会缩短至17:00关闭。部分小型博物馆周一闭馆。老城街道多为陡坡和台阶，建议穿着舒适的平底鞋。城内有许多特色小店和餐馆，但部分在周日营业时间较短。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">勒芒老城的故事，得从罗马时代说起。公元3世纪，罗马人就在这里建起了坚固的城墙，你现在还能在老城边缘看到那段著名的“加洛林城墙”的遗迹，红黑色的石砖特别有沧桑感。时间跳到中世纪，大概是11世纪以后，这里真正热闹起来，成了重要的商贸中心。那些让你目不转睛的木筋墙房子，大部分建于15-16世纪，是当时富有的商人们建的，每一栋的颜色和花纹都不同，仿佛在暗中较劲。老城的灵魂——圣朱利安大教堂更是一部石头史书，从11世纪开始建，断断续续修了快500年，所以你能看到从罗马式到火焰哥特式各种风格混搭，特别有意思。有趣的是，虽然勒芒以24小时汽车耐力赛闻名全球，但赛车场的轰鸣一点也没打扰到老城的清梦。它就像个时间胶囊，把几百年的光阴、战争、繁荣与平静都封存在了这些石头和木头里，任外面世界车水马龙，我自岿然不动。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从老城山脚下的“雅各宾广场”开始，一路向上探索，最终抵达山顶的圣朱利安大教堂及观景平台。这条路线由低到高，能充分体验老城的街巷魅力并欣赏全景，慢慢逛下来大约需要2-3小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从雅各宾广场出发，仰望老城全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  穿过“大钟门”，进入核心迷宫般的街道。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  漫步“女公爵广场”，欣赏周围色彩斑斓的木筋墙房屋。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  沿着“圣朱利安坡道”向上，感受古老的街巷氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  抵达圣朱利安大教堂，参观内部华丽的彩绘玻璃。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从教堂后方平台俯瞰整个勒芒新城与萨尔特河景色。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城街道像迷宫，可以放心随性探索，主要坡道和阶梯都有指示牌指向大教堂。一定要穿一双绝对舒适的鞋子。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **女公爵广场中央**：最佳拍摄时间为午后，阳光能照亮广场四周房屋的正面。采用广角镜头仰拍，可以捕捉到色彩缤纷的木筋墙房屋环绕的经典画面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣朱利安大教堂后方平台**：建议在日落前半小时拍摄。以古老的大教堂石墙为前景，远眺现代化的勒芒新城和萨尔特河，古今对比的构图非常出彩。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **“加洛林城墙”下的狭窄巷子**：晴天正午时分，阳光能直射入巷。拍摄人物走在高耸的罗马城墙与民居夹道中的纵深感照片，历史氛围浓郁。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">阴雨天的鹅卵石路面反光能拍出另一种油画感质感，但需注意防滑和保护相机。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **高端/特色之选**：入住老城内的精品酒店或历史建筑改造的民宿，真正沉浸在中世纪氛围中。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **性价比之选**：选择萨尔特河对岸或火车站附近的中档酒店，交通便利，步行至老城约10-15分钟。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济实用之选**：勒芒新城外围有国际连锁经济型酒店，适合自驾游客，需乘坐短途公交或驾车前往老城。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿数量有限且非常热门，尤其是旺季（如勒芒24小时赛期间），务必提前数月预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">勒芒老城带给我的，是一种安静的震撼。它不像那些被过度修饰的旅游古镇，这里的生活气和历史感是交融在一起的。在某个转角，你可能遇到一扇半掩的木门，里面传来烤面包的香气；在下一段台阶，你又与一段千年的罗马城墙撞个满怀。这种穿越时空的错位感，美妙至极。如果你厌倦了巴黎的繁华，想找一个能让人静下心来、慢慢咀嚼历史味道的地方，勒芒老城绝对不会让你失望。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。内部景点如圣朱利安大教堂等开放时间各异，通常为9:00-18:00。" />
                <InfoRow icon="🎫" label="门票" value="进入老城区域免费。参观内部景点如大教堂免费，部分博物馆需购票，约5-8欧元。" />
                <InfoRow icon="📍" label="地址" value="Vieux Mans, 72000 Le Mans, France" />
                <InfoRow icon="🚌" label="交通" value="从巴黎蒙帕纳斯火车站乘坐TGV高速列车至勒芒站，约55分钟。出火车站后，步行约15-20分钟即可抵达老城山脚下。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
