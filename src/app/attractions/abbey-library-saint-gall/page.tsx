import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣加仑修道院图书馆 Abbey Library of Saint Gall｜手抄本的圣殿与巴洛克的瑰宝 - 最佳欧洲景点',
  description: '推开那扇厚重的木门，时间仿佛瞬间凝滞。扑面而来的不是灰尘味，而是一种混合了古老皮革、羊皮纸、抛光木质和一丝清冷蜡香的、难以名状的“知识的气味”。你的眼睛需要几秒钟来适应室内的光线，然后，整个大厅便如一幅徐徐展开的巨幅画卷，轰然占据你所有的感官。高耸至天花板的深色胡桃木书架，像忠诚的卫士列队而立，书脊...',
}

export default function AbbeyLibrarySaintGallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣加仑修道院图书馆', href: '/attractions/abbey-library-saint-gall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣加仑修道院图书馆・Abbey Library of Saint Gall・瑞士・圣加仑`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`推开那扇厚重的木门，时间仿佛瞬间凝滞。扑面而来的不是灰尘味，而是一种混合了古老皮革、羊皮纸、抛光木质和一丝清冷蜡香的、难以名状的“知识的气味”。你的眼睛需要几秒钟来适应室内的光线，然后，整个大厅便如一幅徐徐展开的巨幅画卷，轰然占据你所有的感官。高耸至天花板的深色胡桃木书架，像忠诚的卫士列队而立，书脊上烫金的拉丁文标题在从高窗斜射而入的柔和光线下，闪烁着幽微的光芒。抬起头，你会不由自主地发出惊叹——整个拱形天花板上，铺陈着繁复到令人眩晕的洛可可壁画，天使、先知、寓言人物在云端交织，色彩明丽而柔和，与下方深沉的木质形成了戏剧性的对话。这里安静得能听见自己的心跳，偶尔只有管理员轻手轻脚走过的窸窣声，或是某位访客被震撼后不自觉的低声吸气。
但圣加仑图书馆远不止是一个华美的旅游景点。对圣加仑人而言，这座图书馆是他们的城市之魂，是骄傲的源泉，也是灵感的故乡。你会看到本地老教授戴着眼镜，长久地凝视着某个书柜，仿佛在与数百年前的先贤对话；也会看到美术系的学生坐在角落速写，试图捕捉天花板上某个天使衣裙的褶皱。它不是一个被玻璃罩起来的标本，而是一座依然在呼吸、在与当代人发生关联的活生生的记忆宫殿。在这里，书籍不再是信息的载体，它们本身就是圣物，每一道磨损的边角，每一处细微的墨水洇染，都诉说着穿越千年的故事。
最打动人心的，或许是那种极致的反差与和谐。一边是代表了理性、秩序与传承的、密密麻麻排列的书籍；另一边则是代表了感性、激情与神圣幻象的、铺天盖地的巴洛克艺术。理性与感性，秩序与繁复，沉默的文字与喧嚣的图像，在此达成了完美的共存。你站在大厅中央，会感到一种渺小与崇高的交织——渺小是因为人类个体在浩瀚的知识与历史面前的微不足道；崇高是因为你正身处人类文明为了保存自身记忆而建造的最辉煌的殿堂之一。这种体验，超越了单纯的“参观”，更像是一次精神的朝圣。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，时间仿佛瞬间凝滞。扑面而来的不是灰尘味，而是一种混合了古老皮革、羊皮纸、抛光木质和一丝清冷蜡香的、难以名状的“知识的气味”。你的眼睛需要几秒钟来适应室内的光线，然后，整个大厅便如一幅徐徐展开的巨幅画卷，轰然占据你所有的感官。高耸至天花板的深色胡桃木书架，像忠诚的卫士列队而立，书脊上烫金的拉丁文标题在从高窗斜射而入的柔和光线下，闪烁着幽微的光芒。抬起头，你会不由自主地发出惊叹——整个拱形天花板上，铺陈着繁复到令人眩晕的洛可可壁画，天使、先知、寓言人物在云端交织，色彩明丽而柔和，与下方深沉的木质形成了戏剧性的对话。这里安静得能听见自己的心跳，偶尔只有管理员轻手轻脚走过的窸窣声，或是某位访客被震撼后不自觉的低声吸气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但圣加仑图书馆远不止是一个华美的旅游景点。对圣加仑人而言，这座图书馆是他们的城市之魂，是骄傲的源泉，也是灵感的故乡。你会看到本地老教授戴着眼镜，长久地凝视着某个书柜，仿佛在与数百年前的先贤对话；也会看到美术系的学生坐在角落速写，试图捕捉天花板上某个天使衣裙的褶皱。它不是一个被玻璃罩起来的标本，而是一座依然在呼吸、在与当代人发生关联的活生生的记忆宫殿。在这里，书籍不再是信息的载体，它们本身就是圣物，每一道磨损的边角，每一处细微的墨水洇染，都诉说着穿越千年的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是那种极致的反差与和谐。一边是代表了理性、秩序与传承的、密密麻麻排列的书籍；另一边则是代表了感性、激情与神圣幻象的、铺天盖地的巴洛克艺术。理性与感性，秩序与繁复，沉默的文字与喧嚣的图像，在此达成了完美的共存。你站在大厅中央，会感到一种渺小与崇高的交织——渺小是因为人类个体在浩瀚的知识与历史面前的微不足道；崇高是因为你正身处人类文明为了保存自身记忆而建造的最辉煌的殿堂之一。这种体验，超越了单纯的“参观”，更像是一次精神的朝圣。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣加仑修道院图书馆`} />
                <InfoRow label="英文名称" value={`Abbey Library of Saint Gall`} />
                <InfoRow label="正式名称" value={`Abbey Library of Saint Gall`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`圣加仑`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最古老、最华丽的修道院图书馆之一，被誉为“欧洲的灵魂”，其馆藏手稿是中世纪拉丁世界知识的巅峰体现。`} />
                <InfoRow label="建筑特色" value={`极致华丽的洛可可风格大厅，深色木质书架与精美绝伦的天花板壁画和谐统一，构成一个令人屏息的“书籍圣殿”。`} />
                <InfoRow label="建筑风格" value={`巴洛克晚期至洛可可风格。`} />
                <InfoRow label="文化价值" value={`联合国教科文组织世界遗产，不仅保存了超过1700卷可追溯至8世纪的珍贵手稿，其本身作为建筑与知识的结合体，象征着欧洲修道院作为知识保存与传播中心的黄金时代。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`图书馆开放时间随季节调整，通常为每年4月至10月，上午10点至下午5点；11月至次年3月，上午10点至下午4点。每周日开放时间较晚，通常从中午开始。请注意，图书馆会不定期因私人活动或维护关闭，圣诞节及新年期间开放时间特殊，出行前务必在其官网核实最新时刻表。`} />
              <InfoRow label="门票价格" value={`成人票18瑞士法郎，学生（需持有效证件）及16-25岁青年票12瑞士法郎，16岁以下儿童免费入场。门票包含语音导览（含中文选项）。持有瑞士旅行通票（Swiss Travel Pass）可享受门票折扣。图书馆与大教堂、世界遗产展览等常组成联票，价格更优。`} />
              <InfoRow label="地址" value={`Klosterhof 6D, 9000 St. Gallen, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场（ZRH）出发最为便捷。在机场火车站乘坐直达圣加仑（St. Gallen）的城际列车（IC），车程约1小时10分钟，班次频繁，约半小时一班。抵达圣加仑火车站后，图书馆位于老城中心，从火车站出口步行约10-15分钟即可到达。沿着标识清晰的“Stiftsbibliothek”路牌，穿过迷人的老城步行街，上坡即可看到修道院建筑群。建议使用瑞士联邦铁路（SBB）APP购票，方便快捷。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个遥远的爱尔兰僧侣说起。公元612年左右，一位名叫加卢斯的传教士，跟随着他的老师科伦巴努斯，穿越阿尔卑斯山，来到这片当时还蛮荒的森林山谷。传说加卢斯在这里祈祷时，被一根灌木丛绊倒，他将此视为神的启示，决定在此定居，建立隐修地。这就是圣加仑修道院传奇的起点，一个始于孤独祈祷与篝火的微小火星。加卢斯的小茅屋旁，慢慢聚集起追随者，一个遵循着严格教规的修道院社区逐渐成型。而知识与书籍，从最开始就是修道生活的核心。僧侣们需要抄写《圣经》、教父著作和礼拜经文，这个小社区，悄然成为了知识火种的保管者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮滚到8世纪，圣加仑迎来了它的“黄金建筑师”——修道院长奥特马尔。正是在他的任内，修道院制定了那份闻名于世的“理想修道院规划图”。这份绘制在羊皮纸上的蓝图，详细规划了教堂、学校、工坊、药草园，当然，还有一个专门的图书馆和抄写室。这张图本身，就是中世纪早期修道院作为自给自足的知识与经济中心的完美理想模型。虽然最终的建筑并未完全按照此图建造，但它为圣加仑指明了方向。接下来的几个世纪，圣加仑修道院的抄写室（Scriptorium）成为了整个欧洲拉丁世界最负盛名的“出版社”之一。来自各地的学者汇聚于此，僧侣们以惊人的毅力与虔诚，用鹅毛笔在珍贵的羊皮纸上，一笔一划地抄录、注释、甚至创作了无数神学、哲学、法律、医学和文学著作。这里的藏书日益丰富，圣加仑成为了阿尔卑斯山以北最重要的知识灯塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，辉煌也意味着劫难。中世纪晚期，宗教改革的风暴和频繁的地区冲突让修道院屡受冲击。但真正的毁灭性打击发生在18世纪。为了彰显修道院在历经风雨后的复兴与荣耀，当时的决策者们决定进行一场大规模的巴洛克化改建。宏伟的新教堂拔地而起，而古老的图书馆大厅也被彻底重建。我们今天看到的这个洛可可梦幻大厅，正是那个时代的产物。建筑师们用精美的壁画覆盖了每一寸天花板和墙壁，让知识的殿堂同时成为艺术的圣殿。有趣的是，在这场华丽的“变身”中，那些承载着千年记忆的古籍，被小心翼翼地转移并安置进了这些崭新的、同样为永恒而打造的书柜里。历史在这里完成了一次奇妙的交接。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪初的欧洲政局动荡，随着瑞士旧邦联的解体，圣加仑修道院也在1805年被世俗化，其庞大的地产被收归州有。但万幸的是，图书馆的珍贵藏品被完整地保留了下来，并被确立为公共财产向学者开放。从那时起，它从一个修道院的私有宝库，转变为了全人类共有的文化遗产。今天，图书馆的专家们依然日复一日地进行着古籍的修复、编目与数字化工作，让这些沉睡的手稿通过现代科技，向全世界述说古老的故事。当你看到修复师在特制的灯下，用比头发丝还细的工具处理一页千年羊皮纸时，你会明白，加卢斯当年点燃的那簇知识的火苗，从未熄灭，它只是换了一种方式，在洛可可的金色光芒与数字的比特流中，继续燃烧，照亮未来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个圣加仑修道院区域（包括图书馆、大教堂及世界遗产中心）安排为大半天（约4-5小时）的深度游览。最佳抵达时间是上午图书馆刚开门时（如10点），此时光线迷人，游客相对较少，你能独享大厅最初的宁静。游览节奏宜慢不宜快，核心是在图书馆内沉浸式体验，预留至少1.5-2小时。建议顺序为：先从外部欣赏修道院建筑群的整体气势，然后直奔图书馆，在震撼中细细品味；之后参观相邻的、同样壮观的圣加仑大教堂，感受巴洛克空间的恢弘；最后前往世界遗产中心（位于同一建筑群内），通过现代展陈了解其深厚历史。午餐或咖啡可以安排在老城区的露天咖啡馆，回味上午的视觉盛宴。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入图书馆必须穿鞋套（入口处免费提供），并需将背包和大件行李寄存，这是为了保护珍贵的古老木地板和藏品。图书馆内部严格禁止使用闪光灯拍照，部分区域甚至完全禁止摄影，请务必遵守规定。尽量避开周末下午，那是本地家庭和旅行团参观的高峰期，平日上午的体验会宁静得多。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早踏入修道院中庭，先别急着进图书馆，仰头环顾四周被蜂蜜色砂岩立面包围的宁静空间，感受几个世纪沉淀下来的肃穆氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开图书馆那扇不起眼的侧门，让眼睛适应昏暗，然后一步踏入那个金光灿灿、令人瞬间失语的洛可可大厅中央。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租借一个中文语音导览，不必按顺序，任由自己随着视线所及，去聆听天花板上某幅壁画的故事，或是某个书柜里珍藏的传奇手稿的来历。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要俯身仔细观看那些镶嵌在玻璃地板下的、古老修道院地基的考古遗迹，这一步是连接眼前华丽与千年质朴的关键。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到大厅东侧尽头，那里陈列着图书馆的“镇馆之宝”之一——用金银和宝石装饰的“圣加仑福音书”手抄本真迹展柜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从图书馆出来后，立刻进入相邻的圣加仑大教堂主殿，躺在长椅上仰望那个令人眩晕的巴洛克穹顶壁画，与图书馆的天花板形成有趣的对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后参观世界遗产中心，通过交互式屏幕亲手“翻阅”那些珍贵手稿的数字化版本，完成从感官震撼到历史认知的闭环。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，别忘了去图书馆商店，那里有基于古籍图案制作的精美文创，是一份独特的记忆载体。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大厅正门入口处抬头仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点间，阳光恰好从高窗射入，能完美捕捉到天花板壁画的金色细节与深色书架的纵深感，构图时将拱门框架纳入。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大厅东侧靠窗的位置`}</h4>
                  <p className="text-sm text-gray-700">{`利用从侧面窗户射入的自然光作为主光源，拍摄深色木书架上一排排烫金书脊的特写，光线勾勒出书籍的质感与岁月的痕迹。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从一楼到二楼的楼梯转角`}</h4>
                  <p className="text-sm text-gray-700">{`这是一个俯瞰整个主厅全景的绝佳秘密角度，可以拍到大厅对称的结构和如波浪般起伏的书架曲线，建议使用广角镜头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`大教堂内部回廊`}</h4>
                  <p className="text-sm text-gray-700">{`透过回廊的拱窗，可以拍摄到图书馆建筑优雅的巴洛克外立面，将教堂的石柱作为前景，形成古典的框景构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线复杂且较暗，建议使用大光圈镜头或提高ISO，保持相机稳定，三脚架通常不被允许使用。拍摄壁画和内饰时，请完全关闭闪光灯，紫外线会对数百年历史的颜料和书籍造成不可逆的损害。尊重每一个“禁止拍照”的标识，这些区域通常存放着最敏感或正在修复的珍品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站附近步行十分钟内的现代设计酒店，房间明亮简洁，交通极其便利，下楼就有超市和餐厅，适合作为探索城市的实用基地。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`老城中心一栋17世纪联排别墅改造的精品酒店，房间保留了古老的木梁和壁炉，早餐在布满鲜花的庭院里享用，充满历史氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城市近郊山丘上的五星级豪华酒店，拥有全景露台和水疗中心，在房间里就能俯瞰圣加仑老城和远处连绵的阿尔卑斯山景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验`}</h4>
                  <p className="text-sm text-purple-800">{`由修道院古老客房改造的简约住宿（需提前数月预订），房间极其朴素但充满灵性氛围，让你真正体验一回“修道院生活”的宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`圣加仑老城区域夜晚非常安静祥和，治安极佳，适合喜欢漫步的旅客。旺季（夏季和圣诞市场期间）酒店预订紧张，建议尽早规划。如果选择住在老城边缘或山上，虽然上下坡略有不便，但能收获更宁静的夜晚和更美的视角。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣加仑图书馆很久以后，闭上眼，那个金光流淌的大厅依然会清晰地浮现在脑海。但它留给我的，远不止视觉的震撼。那是一种关于“传承”的切身触感。在这个信息以光速复制、删除、更迭的时代，我们似乎习惯了知识的易得与轻浮。而在这里，你面对的是用一生去抄写一本书的僧侣，是用几个世纪去建造和维护一座知识圣殿的社区。你指尖（虽然隔着玻璃）仿佛能触碰到那份沉甸甸的、有温度的重量——那是人类对抗时间遗忘的执着，是将文明的火种亲手传递给未知后人的庄重承诺。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`圣加仑提醒我们，文明最精华的部分，往往不是喧嚣的宣言，而是静默的守护。它像一座静立于阿尔卑斯山脚的灯塔，光芒不刺眼，却穿透历史的浓雾，坚定地照亮来路与去途。每一位热爱深度游的旅人，都应该来这里站一站。不仅仅是打卡一座美丽的图书馆，更是来接受一次“慢”的洗礼，感受在浩瀚时空面前，那份属于人类的、既脆弱又坚韧的尊严。当你走出图书馆，重新沐浴在瑞士清澈的阳光下，你会觉得，眼前这个现代的世界，仿佛也因为有了身后那个古老的记忆殿堂，而变得更加深厚、更加值得珍惜。这，大概就是圣加仑修道院图书馆，馈赠给每一个造访者最宝贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spiez-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施皮茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiez Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
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
