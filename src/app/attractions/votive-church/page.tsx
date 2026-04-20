import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沃蒂夫教堂 Votive Church｜维也纳新哥特式建筑的璀璨明珠 - 最佳欧洲景点',
  description: '第一次站在罗斯福广场上，抬头望向沃蒂夫教堂那两座高耸入云的尖塔时，我整个人都被震撼到了。阳光洒在浅色的砂岩外墙上，整座教堂像一块巨大的、精心雕琢的象牙，在蓝天下闪闪发光。走进里面，和外面那种凌厉的哥特感不同，内部空间异常高挑、明亮，彩绘玻璃窗透进来的光把整个大厅染成了柔和的彩色。最让我着迷的是那些细...',
}

export default function VotiveChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '沃蒂夫教堂', href: '/attractions/votive-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">沃蒂夫教堂・Votive Church・奥地利・维也纳</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一次站在罗斯福广场上，抬头望向沃蒂夫教堂那两座高耸入云的尖塔时，我整个人都被震撼到了。阳光洒在浅色的砂岩外墙上，整座教堂像一块巨大的、精心雕琢的象牙，在蓝天下闪闪发光。走进里面，和外面那种凌厉的哥特感不同，内部空间异常高挑、明亮，彩绘玻璃窗透进来的光把整个大厅染成了柔和的彩色。最让我着迷的是那些细节——祭坛上繁复的木雕、墙壁上精致的壁画，还有管风琴静静立在那里，仿佛随时能奏出穿越时空的乐章。这里没有斯蒂芬大教堂那样的人声鼎沸，多了一份宁静和庄严，特别适合静静待一会儿，感受维也纳除了音乐和咖啡之外的另一种灵魂。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一次站在罗斯福广场上，抬头望向沃蒂夫教堂那两座高耸入云的尖塔时，我整个人都被震撼到了。阳光洒在浅色的砂岩外墙上，整座教堂像一块巨大的、精心雕琢的象牙，在蓝天下闪闪发光。走进里面，和外面那种凌厉的哥特感不同，内部空间异常高挑、明亮，彩绘玻璃窗透进来的光把整个大厅染成了柔和的彩色。最让我着迷的是那些细节——祭坛上繁复的木雕、墙壁上精致的壁画，还有管风琴静静立在那里，仿佛随时能奏出穿越时空的乐章。这里没有斯蒂芬大教堂那样的人声鼎沸，多了一份宁静和庄严，特别适合静静待一会儿，感受维也纳除了音乐和咖啡之外的另一种灵魂。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="沃蒂夫教堂" />
                <InfoRow label="英文名称" value="Votive Church" />
                <InfoRow label="正式名称" value="Votive Church" />
                <InfoRow label="国家" value="奥地利" />
                <InfoRow label="城市" value="维也纳" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="周二至周六：10:00-13:00，14:00-18:00；周日及节假日：9:00-13:00；周一闭馆。" />
              <InfoRow label="门票价格" value="免费参观。教堂内珍宝馆（Schatzkammer）门票：成人8欧元，优惠票6欧元。" />
              <InfoRow label="地址" value="Rooseveltplatz, 1090 Wien, Austria" />
              <InfoRow label="交通方式" value="从维也纳国际机场（VIE）乘坐机场快线（CAT）或S-Bahn（S7线）至Wien Mitte站，换乘地铁U2线至Schottentor站，出站步行约3分钟即达。全程约40-50分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">沃蒂夫教堂的故事，始于一次惊心动魄的刺杀。1853年，年轻的奥皇弗朗茨·约瑟夫一世（就是那位著名的茜茜公主的丈夫）在维也纳城墙边散步时，差点被一个匈牙利民族主义者刺死。幸运的是，他军装上的硬领扣挡住了刀锋，只受了轻伤。他幸免于难的弟弟——马克西米利安大公（后来成了墨西哥皇帝）为了感谢上帝保佑，发起了一场募捐，要建造一座教堂来“还愿”（“Votive”就是还愿的意思）。这个想法得到了全民响应，最终从帝国各地募集了巨款。设计是通过一场轰轰烈烈的建筑设计竞赛选出来的，年仅26岁的建筑师海因里希·冯·费斯特尔凭借其纯粹的新哥特式设计脱颖而出。建造过程长达二十多年，期间还经历了战争和资金问题，终于在1879年落成。它不仅是感恩的象征，也成为了19世纪奥地利历史主义建筑和民族认同的一个重要标志。站在教堂里，你会感觉它不像那些历经数百年沧桑的中世纪教堂，它更像一个19世纪“复古”理想的完美成品，精致、完整，带着那个时代特有的雄心与虔诚。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议用时1-1.5小时。从正门（西立面）前的罗斯福广场开始，先欣赏外部建筑，然后进入教堂主厅，最后可选择性参观侧面的珍宝馆。路线呈环形，轻松不累。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂内部地面平坦，适合所有游客。参观时请保持低声，尊重宗教场所的肃穆氛围。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  在罗斯福广场仰望教堂标志性的双塔与华丽西立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  进入主厅，感受高耸的肋拱顶和中央祭坛的壮观。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  细细欣赏两侧走廊精美的彩绘玻璃窗与雕塑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  参观位于教堂南侧的珍宝馆（可选）。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  绕行至教堂东侧，欣赏后殿的建筑结构。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  从侧门走出，在教堂周边花园小憩。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  罗斯福广场远眺点</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为晴朗的上午，阳光正面照亮教堂。用广角镜头拍摄双塔与完整西立面，能体现其宏伟与对称之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  主厅中央通道</h4>
                  <p className="text-sm text-gray-700">下午时分，西侧彩窗的光线会投射进中殿。站在中殿后端向前拍摄，能捕捉到深邃的透视感和神圣的光影效果。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  侧廊拱窗下</h4>
                  <p className="text-sm text-gray-700">利用侧廊的拱门作为天然画框，拍摄彩绘玻璃窗的特写或人物剪影，照片会富有层次感和故事感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 室内光线较暗，建议使用大光圈镜头或提高ISO，务必关闭闪光灯。三脚架的使用可能受限，需提前查看规定。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  高端之选（步行5分钟内）</h4>
                  <p className="text-sm text-blue-800">Hotel Regina 或周边高档酒店，毗邻维也纳大学区，环境优雅静谧。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适之选（地铁1-2站距离）</h4>
                  <p className="text-sm text-green-800">第九区（Alsergrund）或第一区（内城区）的精品酒店或四星级酒店，交通便利，餐饮选择丰富。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济之选（有轨电车可达）</h4>
                  <p className="text-sm text-yellow-800">第九区或邻近第十八区的温馨民宿或平价旅馆，性价比高，能体验本地社区生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">教堂位于维也纳大学区核心，周边学术文化氛围浓厚，咖啡馆和书店众多，晚上非常安静安全。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">沃蒂夫教堂不像一个单纯的旅游景点，更像维也纳城市记忆里一个优雅而坚韧的篇章。它源于一次感恩，最终凝固成一种超越时代的美。在这里，你能读到历史，看到艺术，更能感受到一种平静的力量。如果你看过了金碧辉煌的美泉宫和热闹的斯蒂芬大教堂，不妨来这里走走，它会给你一个关于维也纳的、不一样的安静侧影。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
