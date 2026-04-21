import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博韦大教堂 Beauvais Cathedral｜未完成的哥特巅峰，仰望世界最高教堂拱顶 - 最佳欧洲景点',
  description: '朋友，你见过“野心太大”的教堂吗？博韦大教堂就是。第一眼看到它，你会被那拔地而起、直插云霄的拱顶震撼到说不出话——48米高，至今仍是世界上最高的哥特式教堂拱顶。但走近一看，你会发现它没有中殿，整体结构像个“巨无霸”合唱厅，孤零零地矗立着。那种感觉特别奇妙，既为人类的建造野心所折服，又为它的“未完成”...',
}

export default function BeauvaisCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '博韦大教堂', href: '/attractions/beauvais-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">博韦大教堂・Beauvais Cathedral・法国・博韦</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，你见过“野心太大”的教堂吗？博韦大教堂就是。第一眼看到它，你会被那拔地而起、直插云霄的拱顶震撼到说不出话——48米高，至今仍是世界上最高的哥特式教堂拱顶。但走近一看，你会发现它没有中殿，整体结构像个“巨无霸”合唱厅，孤零零地矗立着。那种感觉特别奇妙，既为人类的建造野心所折服，又为它的“未完成”感到一丝悲壮。阳光透过13世纪那些巨大而精致的彩绘玻璃窗洒下来，教堂内部光影流动，仿佛能听到几个世纪前工匠们的叹息与雄心。它不是最完美的，但绝对是最令人难忘的教堂之一。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，你见过“野心太大”的教堂吗？博韦大教堂就是。第一眼看到它，你会被那拔地而起、直插云霄的拱顶震撼到说不出话——48米高，至今仍是世界上最高的哥特式教堂拱顶。但走近一看，你会发现它没有中殿，整体结构像个“巨无霸”合唱厅，孤零零地矗立着。那种感觉特别奇妙，既为人类的建造野心所折服，又为它的“未完成”感到一丝悲壮。阳光透过13世纪那些巨大而精致的彩绘玻璃窗洒下来，教堂内部光影流动，仿佛能听到几个世纪前工匠们的叹息与雄心。它不是最完美的，但绝对是最令人难忘的教堂之一。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="博韦大教堂" />
                <InfoRow label="英文名称" value="Beauvais Cathedral" />
                <InfoRow label="正式名称" value="Beauvais Cathedral" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="博韦" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季（4月-9月）：9:30-12:30，14:00-18:15；冬季（10月-3月）：9:30-12:30，14:00-17:15。周二下午及部分宗教节日可能关闭。" />
              <InfoRow label="门票价格" value="教堂主体免费参观。登塔楼或参观珍宝室需付费，成人约8欧元，优惠票约6欧元。" />
              <InfoRow label="地址" value="Cathédrale Saint-Pierre de Beauvais, Rue Saint-Pierre, 60000 Beauvais, France" />
              <InfoRow label="交通方式" value="从巴黎戴高乐机场（CDG）出发，可乘坐机场大巴直达博韦（约1.5小时）。或从巴黎北站（Gare du Nord）乘坐TER火车至博韦站（约1小时15分钟），出站后步行约15-20分钟即可抵达大教堂。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">博韦大教堂的故事，简直就是一部中世纪版的“速度与激情”，结局却有点悲情。它的建造始于1225年，那正是哥特式建筑狂飙突进的时代。博韦的主教和市民们不甘落后，立志要建一座超越巴黎圣母院、甚至超越亚眠大教堂的“世界第一高”教堂。工程初期顺风顺水，唱诗堂和耳堂在1272年就完工了，那高达48米的拱顶一举夺魁，成了当时的建筑奇迹。然而，野心跑得太快，地基和技术有点跟不上。1284年，悲剧发生了——部分拱顶轰然坍塌。这给了建造者们沉重一击，修复工作花了几十年。到了16世纪，大家重燃雄心，开始建造一个巨大的、带有玫瑰窗的耳堂，并计划修建中殿和西立面，誓要建成世界上最大的教堂。但1573年，新建的中央塔楼又倒塌了……接连的打击耗尽了财力和信心，加上宗教战争的影响，工程最终在16世纪末彻底停滞，留下了这座宏伟却“残缺”的杰作。漫步其中，你抚摸的每一块石头，都写满了挫折、坚持与未竟的梦想。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览可从教堂西侧外部开始，欣赏其未完成的立面，然后进入内部，从后殿唱诗堂区域开始，逐步感受高耸的空间和彩窗，最后可考虑登塔（如开放）。全程仔细游览约需1.5-2小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂内部地面不平，建议穿着舒适的平底鞋。可以租用语音导览器（通常有英文），更好地理解其复杂历史。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  外部环绕，观察未完成的西立面和巨大的飞扶壁结构。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  从南门进入，第一时间仰望世界最高的哥特式拱顶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  细细欣赏13世纪制作的彩绘玻璃窗，尤其是耳堂的玫瑰窗。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观唱诗堂内精美的文艺复兴风格木雕座椅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  寻找显示1284年拱顶坍塌痕迹的修复部分。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  如有开放，登临塔楼俯瞰博韦城市全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  教堂前广场仰拍</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴天的上午，阳光能照亮西立面。低角度仰拍，用广角镜头捕捉教堂与天空，突出其高耸与未完成的独特轮廓。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  内部中轴线仰拍拱顶</h4>
                  <p className="text-sm text-gray-700">站在唱诗堂中央，将相机垂直向上，拍摄网状肋拱汇聚于顶点的震撼画面，对称构图极具视觉冲击力。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  南耳堂玫瑰窗下</h4>
                  <p className="text-sm text-gray-700">下午阳光穿透巨大的16世纪火焰式玫瑰窗时，拍摄内部被彩色光影笼罩的景象，人物可成为剪影，氛围感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  从后方街道拍摄侧面</h4>
                  <p className="text-sm text-gray-700">在Rue Saint-Pierre或附近小街，拍摄教堂巨大的飞扶壁和整体侧面轮廓，展现其作为“石制骨架”的工程美感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 室内光线较暗，拍摄彩窗和内部细节建议使用三脚架（如果允许）或提高相机感光度。使用广角镜头能更好地捕捉整体空间感。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  市中心经济型</h4>
                  <p className="text-sm text-blue-800">宜必思尚品博韦中心酒店，步行至大教堂约10分钟，交通便利。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  特色精品酒店</h4>
                  <p className="text-sm text-green-800">Mercure Beauvais Cathédrale，部分房间可直接欣赏大教堂景观，位置极佳。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  宁静住宿加早餐</h4>
                  <p className="text-sm text-yellow-800">位于老城区的家庭式B&B，如“Aux Jardins de la Cathédrale”，体验本地生活。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  机场附近便捷酒店</h4>
                  <p className="text-sm text-purple-800">博韦机场附近有多家连锁酒店，适合搭乘早班机的旅客。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">博韦城市不大，住在老城区内步行即可轻松抵达主要景点，体验更佳。旺季（夏季）建议提前预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">博韦大教堂教会我的，是接受一种“残缺的伟大”。它没有巴黎圣母院的名气，没有沙特尔大教堂的完整，但它那冲向天际又戛然而止的梦想，却比任何完美竣工的建筑都更触动人心。站在那片举世无双的穹顶之下，你感受到的不是神的全能，而是人类在有限中追求无限时，那种混合着骄傲、挫折与不朽渴望的复杂情感。这不仅仅是一座教堂，更是一首关于野心与局限的石头的史诗。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
