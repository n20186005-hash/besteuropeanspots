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
            { label: '景点', href: '/attractions' },
            { label: '沃蒂夫教堂', href: '/attractions/votive-church' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">沃蒂夫教堂</h1>
          <p className="text-xl text-gray-600 mb-4">Votive Church</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">奥地利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">维也纳</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">第一次站在罗斯福广场上，抬头望向沃蒂夫教堂那两座高耸入云的尖塔时，我整个人都被震撼到了。阳光洒在浅色的砂岩外墙上，整座教堂像一块巨大的、精心雕琢的象牙，在蓝天下闪闪发光。走进里面，和外面那种凌厉的哥特感不同，内部空间异常高挑、明亮，彩绘玻璃窗透进来的光把整个大厅染成了柔和的彩色。最让我着迷的是那些细节——祭坛上繁复的木雕、墙壁上精致的壁画，还有管风琴静静立在那里，仿佛随时能奏出穿越时空的乐章。这里没有斯蒂芬大教堂那样的人声鼎沸，多了一份宁静和庄严，特别适合静静待一会儿，感受维也纳除了音乐和咖啡之外的另一种灵魂。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间可能因宗教活动或特殊节日临时调整，建议出行前在官网确认。珍宝馆内收藏有丰富的宗教艺术品、圣物和纺织品，对中世纪艺术和宗教历史感兴趣的游客值得一看。教堂内部允许拍照，但请关闭闪光灯并保持安静，尊重正在祈祷的信徒。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">沃蒂夫教堂的故事，始于一次惊心动魄的刺杀。1853年，年轻的奥皇弗朗茨·约瑟夫一世（就是那位著名的茜茜公主的丈夫）在维也纳城墙边散步时，差点被一个匈牙利民族主义者刺死。幸运的是，他军装上的硬领扣挡住了刀锋，只受了轻伤。他幸免于难的弟弟——马克西米利安大公（后来成了墨西哥皇帝）为了感谢上帝保佑，发起了一场募捐，要建造一座教堂来“还愿”（“Votive”就是还愿的意思）。这个想法得到了全民响应，最终从帝国各地募集了巨款。设计是通过一场轰轰烈烈的建筑设计竞赛选出来的，年仅26岁的建筑师海因里希·冯·费斯特尔凭借其纯粹的新哥特式设计脱颖而出。建造过程长达二十多年，期间还经历了战争和资金问题，终于在1879年落成。它不仅是感恩的象征，也成为了19世纪奥地利历史主义建筑和民族认同的一个重要标志。站在教堂里，你会感觉它不像那些历经数百年沧桑的中世纪教堂，它更像一个19世纪“复古”理想的完美成品，精致、完整，带着那个时代特有的雄心与虔诚。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览建议用时1-1.5小时。从正门（西立面）前的罗斯福广场开始，先欣赏外部建筑，然后进入教堂主厅，最后可选择性参观侧面的珍宝馆。路线呈环形，轻松不累。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  在罗斯福广场仰望教堂标志性的双塔与华丽西立面。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  进入主厅，感受高耸的肋拱顶和中央祭坛的壮观。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  细细欣赏两侧走廊精美的彩绘玻璃窗与雕塑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  参观位于教堂南侧的珍宝馆（可选）。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  绕行至教堂东侧，欣赏后殿的建筑结构。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  从侧门走出，在教堂周边花园小憩。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">教堂内部地面平坦，适合所有游客。参观时请保持低声，尊重宗教场所的肃穆氛围。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **罗斯福广场远眺点**：最佳拍摄时间为晴朗的上午，阳光正面照亮教堂。用广角镜头拍摄双塔与完整西立面，能体现其宏伟与对称之美。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **主厅中央通道**：下午时分，西侧彩窗的光线会投射进中殿。站在中殿后端向前拍摄，能捕捉到深邃的透视感和神圣的光影效果。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **侧廊拱窗下**：利用侧廊的拱门作为天然画框，拍摄彩绘玻璃窗的特写或人物剪影，照片会富有层次感和故事感。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">室内光线较暗，建议使用大光圈镜头或提高ISO，务必关闭闪光灯。三脚架的使用可能受限，需提前查看规定。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **高端之选（步行5分钟内）**：Hotel Regina 或周边高档酒店，毗邻维也纳大学区，环境优雅静谧。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适之选（地铁1-2站距离）**：第九区（Alsergrund）或第一区（内城区）的精品酒店或四星级酒店，交通便利，餐饮选择丰富。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济之选（有轨电车可达）**：第九区或邻近第十八区的温馨民宿或平价旅馆，性价比高，能体验本地社区生活。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">教堂位于维也纳大学区核心，周边学术文化氛围浓厚，咖啡馆和书店众多，晚上非常安静安全。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">沃蒂夫教堂不像一个单纯的旅游景点，更像维也纳城市记忆里一个优雅而坚韧的篇章。它源于一次感恩，最终凝固成一种超越时代的美。在这里，你能读到历史，看到艺术，更能感受到一种平静的力量。如果你看过了金碧辉煌的美泉宫和热闹的斯蒂芬大教堂，不妨来这里走走，它会给你一个关于维也纳的、不一样的安静侧影。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="周二至周六：10:00-13:00，14:00-18:00；周日及节假日：9:00-13:00；周一闭馆。" />
                <InfoRow icon="🎫" label="门票" value="免费参观。教堂内珍宝馆（Schatzkammer）门票：成人8欧元，优惠票6欧元。" />
                <InfoRow icon="📍" label="地址" value="Rooseveltplatz, 1090 Wien, Austria" />
                <InfoRow icon="🚌" label="交通" value="从维也纳国际机场（VIE）乘坐机场快线（CAT）或S-Bahn（S7线）至Wien Mitte站，换乘地铁U2线至Schottentor站，出站步行约3分钟即达。全程约40-50分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
