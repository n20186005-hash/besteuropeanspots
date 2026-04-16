import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈尼亚威尼斯港 Chania Venetian Harbour｜爱琴海的调色盘，一座活着的中世纪港口 - 最佳欧洲景点',
  description: '你第一眼看到哈尼亚威尼斯港的时候，我猜你会和我一样，忍不住“哇”出声来。不是那种震慑于宏伟的“哇”，而是一种被瞬间注入温柔愉悦的惊叹。眼前的一切，饱和度都调得太高了——爱琴海是那种教科书式的、带着奶白质感的湛蓝，沿着新月形的海岸线，一排房子被刷成蜜糖黄、草莓粉、薄荷绿和奶油白，在近乎暴烈的阳光下，鲜...',
}

export default function ChaniaVenetianHarbourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '哈尼亚威尼斯港', href: '/attractions/chania-venetian-harbour' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">哈尼亚威尼斯港・Chania Venetian Harbour・希腊・哈尼亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            你第一眼看到哈尼亚威尼斯港的时候，我猜你会和我一样，忍不住“哇”出声来。不是那种震慑于宏伟的“哇”，而是一种被瞬间注入温柔愉悦的惊叹。眼前的一切，饱和度都调得太高了——爱琴海是那种教科书式的、带着奶白质感的湛蓝，沿着新月形的海岸线，一排房子被刷成蜜糖黄、草莓粉、薄荷绿和奶油白，在近乎暴烈的阳光下，鲜艳得有些不真实。威尼斯式建筑的拱廊和百叶窗，投下深深浅浅的阴影，像给这幅画勾勒了精致的边框。
空气里的味道是复杂的交响乐。最先是海风咸湿的气息，紧接着，从路边咖啡馆飘来希腊咖啡独有的、带着焦糖味的醇香，混合着空气中一丝若有若无的八角和大料的味道——那是某家餐馆正在炖煮传统菜“斯塔卡”（Staka）的香气。耳朵里灌满了声音：海水轻轻拍打石堤的哗啦声，系泊小渔船的缆绳发出的吱呀声，远处传来街头艺人拉奏布祖基琴的欢快旋律，还有隔壁桌老爷爷们下西洋双陆棋时，棋子落下的清脆啪嗒声和热烈的争执声。这里绝不仅仅是一个景点，它就是哈尼亚跳动的心脏。早晨，渔民在修补渔网；午后，游客和当地人共享着同一片荫凉喝弗雷多咖啡；傍晚，整个港口变成了一个巨大的、开放的社交客厅。
最打动人的，是那种毫无矫饰的“活着”的状态。历史没有被供奉起来，它就流淌在日常里。那座16世纪的威尼斯船坞，如今可能是一家时髦的海鲜餐厅；奥斯曼时期建造的“库朱克·哈桑清真寺”，粉红色的圆顶下，常年举办着艺术展览。你走在被岁月打磨得光滑如脂的鹅卵石街道上，脚下是威尼斯人、奥斯曼人、克里特人共同走过的路。阳光在这里仿佛有魔力，它在下午五点钟会变成蜂蜜一样的金色，把整个港口、灯塔、甚至海面都镀上一层暖光，那一刻，时间似乎真的慢了下来，甚至停滞了。你会明白，这里迷人的不是某个孤立的建筑，而是整个场景——色彩、光线、气味、声音和历史层叠在一起，所酿出的那一杯令人微醺的、地中海的午后时光。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你第一眼看到哈尼亚威尼斯港的时候，我猜你会和我一样，忍不住“哇”出声来。不是那种震慑于宏伟的“哇”，而是一种被瞬间注入温柔愉悦的惊叹。眼前的一切，饱和度都调得太高了——爱琴海是那种教科书式的、带着奶白质感的湛蓝，沿着新月形的海岸线，一排房子被刷成蜜糖黄、草莓粉、薄荷绿和奶油白，在近乎暴烈的阳光下，鲜艳得有些不真实。威尼斯式建筑的拱廊和百叶窗，投下深深浅浅的阴影，像给这幅画勾勒了精致的边框。</p>
              <p className="text-gray-700 leading-relaxed mb-4">空气里的味道是复杂的交响乐。最先是海风咸湿的气息，紧接着，从路边咖啡馆飘来希腊咖啡独有的、带着焦糖味的醇香，混合着空气中一丝若有若无的八角和大料的味道——那是某家餐馆正在炖煮传统菜“斯塔卡”（Staka）的香气。耳朵里灌满了声音：海水轻轻拍打石堤的哗啦声，系泊小渔船的缆绳发出的吱呀声，远处传来街头艺人拉奏布祖基琴的欢快旋律，还有隔壁桌老爷爷们下西洋双陆棋时，棋子落下的清脆啪嗒声和热烈的争执声。这里绝不仅仅是一个景点，它就是哈尼亚跳动的心脏。早晨，渔民在修补渔网；午后，游客和当地人共享着同一片荫凉喝弗雷多咖啡；傍晚，整个港口变成了一个巨大的、开放的社交客厅。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动人的，是那种毫无矫饰的“活着”的状态。历史没有被供奉起来，它就流淌在日常里。那座16世纪的威尼斯船坞，如今可能是一家时髦的海鲜餐厅；奥斯曼时期建造的“库朱克·哈桑清真寺”，粉红色的圆顶下，常年举办着艺术展览。你走在被岁月打磨得光滑如脂的鹅卵石街道上，脚下是威尼斯人、奥斯曼人、克里特人共同走过的路。阳光在这里仿佛有魔力，它在下午五点钟会变成蜂蜜一样的金色，把整个港口、灯塔、甚至海面都镀上一层暖光，那一刻，时间似乎真的慢了下来，甚至停滞了。你会明白，这里迷人的不是某个孤立的建筑，而是整个场景——色彩、光线、气味、声音和历史层叠在一起，所酿出的那一杯令人微醺的、地中海的午后时光。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="哈尼亚威尼斯港" />
                <InfoRow label="英文名称" value="Chania Venetian Harbour" />
                <InfoRow label="正式名称" value="Chania Venetian Harbour" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="哈尼亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="威尼斯共和国在地中海东部最重要的海军基地和贸易枢纽之一，见证了克里特岛数百年的东西方文明碰撞与交融。" />
                <InfoRow label="建筑特色" value="彩色威尼斯式联排房屋与奥斯曼清真寺的尖塔并立，新月形防波堤尽头矗立着古老的埃及灯塔，构成一幅层次分明的历史画卷。" />
                <InfoRow label="建筑风格" value="以威尼斯文艺复兴风格为主，混杂着后期奥斯曼帝国的伊斯兰建筑元素，以及19世纪新古典主义的细节。" />
                <InfoRow label="文化价值" value="一座露天的、仍在呼吸的“活态”历史博物馆，不仅是克里特岛多元文化的象征，也是当地社区日常生活的中心舞台。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="港口公共区域全天24小时开放。港口的标志性建筑——埃及灯塔可以全天观赏，但登塔内部通常不对外开放。海滨的各类博物馆、清真寺和美术馆等独立场馆有各自的开放时间，一般为夏季（4月-10月）上午9:00至晚上8:00，冬季（11月-3月）上午9:00至下午5:00，周一多数闭馆。海滨餐厅和咖啡馆的营业时间会持续到深夜。" />
              <InfoRow label="门票价格" value="游览威尼斯港本身是完全免费的。港口周边一些特定景点需要门票：如海事博物馆门票约4欧元，考古博物馆门票约6欧元。港口游船体验价格在10-20欧元不等，取决于航线时长。海滨的咖啡馆和餐厅消费属于市场价。" />
              <InfoRow label="地址" value="Akti Kountourioti, Chania 731 00, Greece" />
              <InfoRow label="交通方式" value="从最近的哈尼亚国际机场（CHQ）出发：最方便的方式是乘坐出租车，车程约20-25分钟，费用约25-35欧元。也可以乘坐机场巴士到哈尼亚市中心巴士站，车程约30分钟，票价约2.5欧元，然后步行15-20分钟即可抵达港口。从哈尼亚市中心巴士站步行至港口是最佳方式，沿途可以感受老城风情。如果你从希腊本土乘渡轮抵达苏达港，可以乘坐公交车或出租车前往哈尼亚市区，再步行至威尼斯港，车程约20分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要讲哈尼亚港的故事，我们得把时钟拨回13世纪。当时，威尼斯的商船队像贪婪的章鱼，将触角伸向整个地中海。1204年，第四次十字军东征阴差阳错地攻破了君士坦丁堡，威尼斯共和国趁乱攫取了“克里特岛”这块肥肉。对威尼斯人来说，哈尼亚（他们称之为“卡尼亚”）天然的深水海湾，是控制爱琴海航路、对抗老对手热那亚和奥斯曼帝国的绝佳堡垒。于是，他们开始大兴土木，我们今天看到的港口雏形，就是在14到16世纪间逐渐成型。巨大的防波堤被修建起来，那些坚固的、带有拱廊的仓库（比如现在作为海事博物馆的建筑）拔地而起，用以储存从岛上掠夺的橄榄油、葡萄酒和蜂蜜。港口不仅是军事要塞，更是财富的泵站，威尼斯的贵族们在这里过着奢华的殖民生活，而克里特本土的希腊东正教文化，则在夹缝中顽强地生存和融合。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，威尼斯的荣光并未持续太久。仿佛一个命运的轮回，曾经被威尼斯人忌惮的奥斯曼帝国，在1669年经过长达21年的残酷围攻后，最终征服了整个克里特岛。土耳其人成了港口的新主人。你猜他们会把那些威尼斯建筑都推倒吗？并没有。务实的奥斯曼统治者采取了“覆盖”策略。他们把威尼斯人最重要的圣尼古拉斯教堂，直接改造成了“库朱克·哈桑清真寺”，并添加上那个今天成为地标的粉红色圆顶和优雅的尖塔。许多威尼斯豪宅被加上了木制悬挑阳台和格栅窗，变成了奥斯曼长官的府邸。港口的功能也发生了微妙转变，从纯粹的军事贸易港，更多地融入了伊斯兰城市的公共生活元素。那段时间，港口边回荡的是宣礼声，空气里弥漫的是水烟的甜香。</p>
              <p className="text-gray-700 leading-relaxed mb-4">19世纪末，克里特岛风云再起。随着奥斯曼帝国的衰落，岛上希腊人追求“回归”希腊的“Enosis”（统一）运动风起云涌。哈尼亚港成了各种政治势力、革命者和国际干预的舞台。直到1913年，克里特岛才正式并入希腊王国。二战时期，港口又遭受了德国空军的猛烈轰炸，许多建筑被毁。但就像克里特人倔强的性格一样，战后的哈尼亚人没有推倒重来，而是小心翼翼地修复。他们保留了威尼斯和奥斯曼的骨架，填充进现代生活的血肉。上世纪七八十年代，随着旅游业的萌芽，那些面朝大海的古老仓库和宅邸，被富有眼光的当地人改造成了餐馆、咖啡馆和精品店。</p>
              <p className="text-gray-700 leading-relaxed mb-4">今天，当你漫步在港口，你看到的是一部用石头、木材和色彩写成的立体史书。每一层粉刷下可能都藏着另一层故事，每一栋建筑都经历了至少两重身份的转变。灯塔经历了威尼斯人建造、奥斯曼人加固、埃及人（19世纪短暂占领）重修，最终以“埃及灯塔”之名存世，这本身就是一部微缩的列强争夺史。历史在这里不是线性的替代，而是层叠的累积。战争、贸易、征服、融合，所有的动荡最终都沉淀为此刻的宁静与绚烂。港口沉默的石头见证了一切，而如今，它只将最温柔绚丽的一面，展现给每一个在夕阳下驻足的你。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  我强烈建议你将探索威尼斯港的时间安排在傍晚开始，并一直延续到入夜。这是一场从“金色时刻”到“蓝色时刻”再到“灯火时刻”的完美视觉盛宴。整体耗时大约4-5小时，节奏务必放慢。下午五点左右抵达，此时灼热的阳光开始变得温柔，光线斜射，是拍照和漫步的黄金时间。先沿着外港散步，感受宏大的全景，然后深入老城迷宫般的小巷，最后回到海滨享受晚餐和夜景。这样安排的理由是，你可以避开白天最烈的日头和最多的游客团，捕捉到港口最美的光影，并完整体验它从日落到华灯初上、从游客喧嚣到本地生活气息弥漫的完整变奏曲。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>正午时分请尽量避免在毫无遮挡的防波堤和灯塔上暴晒，克里特的阳光非常“热情”。港口一线海景餐厅的价格通常会比小巷里深处的高出不少，味道却不一定成正比，多走几步可能有惊喜。一定要穿一双绝对舒适、适合长时间行走在光滑鹅卵石路上的鞋子。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下午五点半从威尼斯港的西北入口，沿着Akti Kountourioti海滨大道开始漫步，让整片新月形港湾和远处的埃及灯塔全景式地映入眼帘。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到防波堤的起点，停下脚步观察那些停泊的彩色小渔船“kaikia”，听船主们用浓重的克里特方言聊天。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要走一走那条标志性的长堤，一直走到埃及灯塔的脚下，感受海风拂面，回望整个老城建筑在夕阳下的剪影。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从灯塔返回后，不要走大路，拐进灯塔后方那片宁静的“旧港”（Neoria）区，探访那些巨大的、拱顶高耸的威尼斯船坞。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">钻进船坞区后面如同蛛网般的狭窄老街（比如Theotokopoulou街），彻底迷失在其中，邂逅隐蔽的小教堂、手工皮具店和飘着香气的传统面包房。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在迷宫般的小巷里随机选择一家有露台的家庭小酒馆（Taverna），点一瓶冰镇的克里特白葡萄酒和一盘新鲜的炸小章鱼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">饭后沿着内港（Firkas堡垒一侧）散步，看水中彩色房子的倒影随着波浪摇曳，欣赏对岸餐厅灯火构成的璀璨曲线。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后，在内港找一家有现场传统音乐演奏的咖啡馆，点一杯“拉基”烈酒或希腊咖啡，彻底融入当地人夜晚的悠闲节奏。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 埃及灯塔长堤中段侧拍</h4>
                  <p className="text-sm text-gray-700">日落前半小时，站在长堤靠近中间的位置，用长焦镜头压缩空间，将灯塔、老城建筑群和波光粼粼的海面一同纳入画面，形成绝佳的纵深感和层次感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 威尼斯船坞拱门框架构图</h4>
                  <p className="text-sm text-gray-700">下午稍晚时，阳光斜射入Neoria船坞区，选择其中一个高大的拱门作为画框，对准门洞外港口里停泊的船只和彩色的房子，能拍出极具故事感的“画中画”。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 老城小巷光影捕捉</h4>
                  <p className="text-sm text-gray-700">清晨或午后，在老城小巷里寻找阳光穿过建筑缝隙，在鹅卵石路面和彩色墙面上形成的光影图案，聚焦于一个走过的当地人或者一只慵懒的猫，捕捉生活瞬间。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 滨海餐厅露台夜景</h4>
                  <p className="text-sm text-gray-700">日落后“蓝色时刻”，在Firkas堡垒这一侧，找到一家带露台的餐厅（无需消费也可短暂借用视角），用三脚架长曝光拍摄对岸餐厅灯火通明的倒影在水中拉出的绚烂色带。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 利用长焦镜头可以有效压缩港口密集的建筑，拍出更紧凑、更具电影感的画面。拍摄当地居民，尤其是老人或商人时，请务必先微笑示意并获得同意，克里特人很热情但也很重视尊重。尝试在日出后一小时内拍摄，此时港口几乎空无一人，能获得纯净且光线柔和的独特视角。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">经济精选</h4>
                  <p className="text-sm text-blue-800">老城边缘由古老奥斯曼宅邸改造的家庭旅馆，房间围绕着静谧的种满九重葛的内庭园，店主老妈妈会为你准备丰盛的自家制早餐。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">中档特色</h4>
                  <p className="text-sm text-green-800">位于老城核心区一栋经过精心修复的威尼斯建筑内，裸露的石墙、木梁与现代设计家具完美结合，从房间的小阳台就能瞥见港口的一角。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端奢华</h4>
                  <p className="text-sm text-yellow-800">坐落在港口西侧岬角上的五星级酒店，由一系列历史建筑群组成，拥有私人海滩和无边泳池，在房间里就能独享毫无遮挡的港口与灯塔全景。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">独特体验</h4>
                  <p className="text-sm text-purple-800">选择远离港口喧嚣、位于山顶传统村庄“霍拉斯法基翁”的石头农庄民宿，在星空下的露台俯瞰远方的哈尼亚港灯火，体验真正的克里特乡村宁静。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿虽位置绝佳，但车辆完全无法进入，需要手提行李走一段鹅卵石路，且夜间可能受周边酒吧音乐影响。如果想体验更纯粹的本地生活，可以考虑住在老城外围的“哈莱帕”区，那里遍布着不错的咖啡馆和本地市场。旺季（7-8月）住宿非常紧张且价格高昂，务必提前数月预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开哈尼亚威尼斯港许久之后，我发现自己最怀念的，不是某一张明信片般的照片，而是那种全身心沉浸其中的、多维度的感觉。是脚底感知到的、被几个世纪脚步磨圆的鹅卵石的触感；是鼻腔里记忆的、海风混杂咖啡与烤肉的气味标签；是耳朵里收藏的、那片混杂着多种语言却和谐共处的背景音。这个地方有种神奇的魔力，它让你自然而然地慢下来，心甘情愿地“浪费”时间。在一个追求效率和“打卡”的世界里，哈尼亚港是一个温柔的“反叛者”。它不催促你，只是静静地展示着它的层叠历史与鲜活当下。</p>
              <p className="text-gray-700 leading-relaxed mb-4">我想，每一位热爱深度游的旅人，都应该来这里住上几天。因为它教会你的，不是一段死记硬背的历史年表，而是一种理解历史的方式——文化不是非此即彼的替代，而更像是绘画中的一层层釉彩，威尼斯人的朱红、奥斯曼人的靛蓝、克里特人的土黄，最终在时光的调和下，融合成了今天这片独一无二的、温暖明媚的色调。在这里，你会明白，最美的风景，是那些依然在呼吸、在生长、与人们的喜怒哀乐息息相关的生活现场。哈尼亚威尼斯港，就是这样一个活着的故事，而你已经成为了它新一页中，一个带着微笑的注脚。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
