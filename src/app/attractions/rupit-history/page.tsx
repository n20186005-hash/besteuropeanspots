import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁皮特历史溯源｜悬崖火山岩小镇的前世今生与加泰罗尼亚名人传奇',
  description: '探索西班牙鲁皮特小镇：中世纪火山岩悬崖上的隐秘历史，聆听加泰罗尼亚名人轶事与民间传说，揭开这座小众秘境的前世今生。',
}

export default function RupitHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '巴塞罗那', href: '/destinations/europe' },
            { label: '鲁皮特（悬崖上的火山岩小镇）', href: '/attractions/rupit-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁皮特（悬崖上的火山岩小镇）・Rupit・西班牙・巴塞罗那`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴塞罗那北部山区的褶皱里，藏着一个小镇，它不是在土地上生长，而是从火山岩的悬崖中雕琢而成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是<strong>鲁皮特</strong>——一座仿佛被时光凝固的中世纪杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鹅卵石街道、石桥、木屋，每一块岩石都浸透着加泰罗尼亚的倔强与诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的故事，远不止于风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从维京时代的避难所，到中世纪领主们的堡垒，再到艺术家的灵感源泉，鲁皮特见证了欧洲边缘地带的悲欢离合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进<strong>鲁皮特</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁皮特（悬崖上的火山岩小镇）`} />
                <InfoRow label="英文名称" value={`Rupit`} />
                <InfoRow label="正式名称" value={`Rupit`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`巴塞罗那`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>鲁皮特</strong>的名字，本身就藏着一个秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在加泰罗尼亚语中，“Rupit”源自古拉丁语“rupēs”，意为“岩石”或“悬崖”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这绝非偶然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的诞生，始于<strong>9世纪</strong>末。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，伊比利亚半岛正从摩尔人的统治下逐渐光复，加泰罗尼亚伯爵领地开始形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在险峻的<strong>科利塞罗拉山脉</strong>边缘，一处由古火山活动形成的玄武岩悬崖，成为了天然屏障。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早的定居者，是逃离战乱和入侵的农民与牧羊人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们发现，这些坚硬的火山岩，不仅能抵御外敌，还能凿出栖身的洞穴。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地流传着一句古谚：“上帝给了加泰罗尼亚山，而山给了我们鲁皮特。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，这里只是一个散落的聚居点，依偎在悬崖的怀抱中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到<strong>10世纪</strong>，随着“收复失地运动”的推进，鲁皮特逐渐被记录在册。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "文献中首次出现“Rupit”之名，是在<strong>公元968年</strong>的一份教堂捐赠文书里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那时，它已是奥索纳主教区的一个小教区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悬崖上的圣胡安教堂，便是那个时代的见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的布局，完全顺应了地形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "狭窄的街道在岩石间蜿蜒，房屋仿佛从山体中自然长出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种与自然共生的智慧，定义了鲁皮特最初的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是为了荣耀而建，而是为了生存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在动荡的中世纪，这片悬崖成了一座宁静的孤岛。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>鲁皮特</strong>的历史，是一部镌刻在岩石上的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>11世纪</strong>的领主时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>罗卡·德·鲁皮特</strong>城堡的崛起，改变了小镇的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初由<strong>乌尔盖尔伯爵</strong>家族控制，作为监控附近山谷的战略前哨。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份<strong>12世纪</strong>的契约记载：“领主贝尔纳特·德·鲁皮特，于此岩石之巅，行使正义与庇护。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡不仅是一个军事据点，更成为了世俗权力的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "领主们在这里征税、审判，并庇护着悬崖下的居民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，权力更迭频繁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到<strong>14世纪</strong>，城堡落入<strong>卡多纳家族</strong>手中——这是加泰罗尼亚最有权势的贵族之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们加固了防御，但鲁皮特始终是一个边缘领地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1348年</strong>，黑死病席卷欧洲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁皮特因其偏远，奇迹般地逃过了最严重的疫情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人口得以保存，古老的石屋社区延续下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是<strong>宗教与分裂</strong>的烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>17世纪</strong>，加泰罗尼亚与西班牙王室的矛盾激化，爆发了“收割者战争”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁皮特站在了加泰罗尼亚起义军一边。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的圣胡安教堂，曾短暂成为当地抵抗者的集会点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但战争带来的不是自由，而是破坏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1652年</strong>，一场大火——据传是王室军队报复所致——烧毁了部分木质结构的房屋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建时，居民们更加依赖石材，进一步强化了鲁皮特火山岩建筑的风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是<strong>19世纪</strong>的遗忘与再发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工业革命改变了西班牙，但鲁皮特仿佛沉睡了过去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有铁路，没有工厂，经济依赖传统的农业和畜牧业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "年轻人口外流，小镇一度濒临荒废。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点在<strong>20世纪初</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一群加泰罗尼亚知识分子和艺术家，在寻找“真正的加泰罗尼亚灵魂”时，重新发现了鲁皮特。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们被这里原始的中世纪景观震撼，开始用画笔和文字记录。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1920年</strong>，鲁皮特被宣布为“艺术历史遗产”，保护工作启动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那些差点被遗忘的石头街道，终于获得了新生。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>鲁皮特</strong>的宁静褶皱中，曾回荡着一些不寻常的名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的故事，为这片岩石注入了人性的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位传奇人物，是诗人兼牧师<strong>约瑟夫·玛丽亚·德·萨加拉</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他出生于<strong>1854年</strong>，在巴塞罗那接受教育，却一生心系故乡的山丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨加拉并非土生土长的鲁皮特人，但他的母亲家族来自这一带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "成年后，他主动请求调任到鲁皮特教区，担任圣胡安教堂的神父。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为什么？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因为他说，这里的岩石“会说话”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的日记中，<strong>1892年</strong>的一段写道：“今天我爬上城堡废墟。风穿过岩缝，像在吟唱一首古老的歌。这不是沉默，这是加泰罗尼亚土地的心跳。我必须把它写下来。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨加拉是一位“乡土诗人”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他用加泰罗尼亚语写作，主题永远是这片土地的自然、历史和信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在鲁皮特，他找到了终极灵感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他白天履行神职，倾听村民的忏悔；夜晚则伏案写作，将悬崖的传说、教堂的钟声、牧羊人的歌谣，全都化为诗句。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的代表作《岩石与灵魂》，就是在鲁皮特完成的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这部诗集出版于<strong>1901年</strong>，用隐喻将火山岩的坚硬与加泰罗尼亚人的坚韧相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当时，加泰罗尼亚文化正遭受西班牙中央政府的压制，萨加拉的作品成了无声的抵抗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他坚持用方言写作，捍卫本地身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但萨加拉的生活极其简朴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将大部分稿酬用于修缮教堂和帮助贫苦村民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1910年</strong>冬天，一场暴风雪袭击山区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨加拉不顾年迈，亲自组织救援，为被困的家庭送去食物和柴火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场劳累最终拖垮了他的身体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1913年</strong>，他在鲁皮特的小屋中去世，葬在圣胡安教堂旁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "墓碑上刻着他自己写的墓志铭：“我只是一块会写诗的石头，如今回归山岩。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位人物，是女画家<strong>卡门·卡萨诺瓦</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她出生于巴塞罗那富裕家庭，却厌恶城市的浮华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1925年</strong>，她第一次访问鲁皮特，立刻被迷住了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡门决定留下来，租了一间可以俯瞰峡谷的石屋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的画风大胆，充满表现主义色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁皮特的岩石、光影和朴素生活，成了她最主要的题材。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡门特别痴迷于描绘小镇的<strong>木桥</strong>——那座连接悬崖两端的悬索桥。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她画了数十个版本，从晨曦到暮色，从雨雪到晴天。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在给朋友的信中，她写道：“这座桥不是木头和绳子做的。它是勇气做的。几百年来，人们每天走过它，面对深渊。这本身就是艺术。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡门在鲁皮特一住就是二十年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她与当地村民打成一片，教孩子们画画，甚至参与农活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的存在，吸引了一些巴塞罗那前卫艺术圈的朋友来访，让鲁皮特短暂成为了一个文艺沙龙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，<strong>西班牙内战（1936-1939）</strong> 撕裂了这一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡门因为同情共和派，遭到佛朗哥政权迫害。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她不得不离开鲁皮特，流亡法国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走前，她将自己的大量画作藏在石屋的地板下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些作品直到<strong>1975年</strong>佛朗哥去世后，才被偶然发现，如今部分收藏在巴塞罗那的加泰罗尼亚国家艺术博物馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡门再也没能回到鲁皮特，但她的画作让小镇的影像超越了时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些名人没有改变世界，但他们被鲁皮特改变，并用自己的方式，为这座悬崖小镇赋予了永恒的回声。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>鲁皮特</strong>，历史不只写在书上，更活在老人的故事里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，关乎小镇的守护神——<strong>圣克里斯托瓦尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在<strong>中世纪</strong>，鲁皮特遭遇了一场百年不遇的暴雨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悬崖下的河流疯狂上涨，威胁要冲垮整个定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村民们向所有圣徒祈祷，但洪水不退。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "绝望之际，一个巨人的身影出现在洪流中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他肩扛一尊木雕的圣克里斯托瓦尔像，徒步涉过汹涌的河水，将圣像安放在悬崖最高处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹发生了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洪水瞬间退去，天空放晴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巨人消失不见，只留下圣像。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "这个故事代代相传：“圣克里斯托瓦尔用他的肩膀，扛起了鲁皮特的命运。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，圣克里斯托瓦尔成为小镇的守护神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年<strong>7月25日</strong>，居民会举行游行，抬着复制的圣像走过街道，纪念那次拯救。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，关于<strong>幽灵桥</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁皮特那座著名的悬索桥，据说在月圆之夜，会显现出另一个版本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那是一座更古老、更精致的石桥，由“岩石精灵”建造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这些精灵是火山岩的化身，他们守护着这片土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "只有心地纯净的旅人，才能在月光下看见石桥，并许下一个愿望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但若心怀恶意，则只会见到深渊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，或许源于人们对自然力量的敬畏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁皮特的一切都建立在岩石上，居民们相信，山石有灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有一个独特的习俗：<strong>“石头婚礼”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传统上，鲁皮特的新婚夫妇会在婚礼次日，共同将一块从悬崖采下的火山岩，雕琢成简单的形状。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这块石头被放置在新房的门楣上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "象征着他们的婚姻，如同这里的房屋一样，从岩石中诞生，坚固而持久。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说和习俗，没有宏伟的神话体系，却充满了泥土和岩石的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们是鲁皮特人理解世界的方式，将自然、信仰和日常生活编织在一起。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的<strong>鲁皮特</strong>，依然静静地坐在悬崖上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游客们为它的风景而来，但真正读懂它的人，会听到石头深处的低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的历史价值，不在于轰轰烈烈的大事件，而在于一种<strong>坚韧的连续性</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从维京时代的避难所，到中世纪领主的堡垒，再到艺术家寻找本真的孤岛，鲁皮特始终是欧洲文明的一个微小而顽固的细胞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了加泰罗尼亚地区的动荡与坚守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一块火山岩，都像是时间的胶囊，封存着普通人的生存智慧、信仰的虔诚，以及对家园的眷恋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在鲁皮特的街道，你不是在参观一个博物馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你是在阅读一部立体的、由岩石写成的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宫殿的奢华，却有平民的尊严。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没有帝国的荣耀，却有社区的温暖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是小众目的地的人文魅力——它提供的不只是异域风情，更是一面镜子，让我们反思现代生活中失落的连接：人与自然的连接，人与历史的连接，以及人与自我的连接。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁皮特提醒我们，有些价值，如岩石般沉默，却也如岩石般永恒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cadaqu-s-spain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡达克斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cadaqués</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ubeda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monastery-of-ucles" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌克莱斯修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monastery of Uclés</p>
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
