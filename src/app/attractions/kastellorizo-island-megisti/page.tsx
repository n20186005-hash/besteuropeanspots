import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特罗里佐岛 Kastellorizo｜与土耳其隔海相望的希腊彩虹孤岛 - 最佳欧洲景点',
  description: '当渡轮缓缓驶入那个被称作“Mandraki”的天然港湾时，你会感觉自己像是一头撞进了一盒被打翻的颜料里。眼前的一切都过于明媚，过于安静，以至于不太真实。赭红、鹅黄、湖蓝、薄荷绿……一排排两层高的小房子像乐高积木一样，严丝合缝地挤在U型海湾的怀抱里，倒映在玻璃般平静的碧绿海水中。空气里是纯粹的、带着咸',
}

export default function KastellorizoIslandMegistiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '卡斯特罗里佐岛（梅吉斯蒂）', href: '/attractions/kastellorizo-island-megisti' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特罗里佐岛（梅吉斯蒂）・Kastellorizo (Megisti)・希腊・卡斯特罗里佐镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当渡轮缓缓驶入那个被称作“Mandraki”的天然港湾时，你会感觉自己像是一头撞进了一盒被打翻的颜料里。眼前的一切都过于明媚，过于安静，以至于不太真实。赭红、鹅黄、湖蓝、薄荷绿……一排排两层高的小房子像乐高积木一样，严丝合缝地挤在U型海湾的怀抱里，倒映在玻璃般平静的碧绿海水中。空气里是纯粹的、带着咸味的海洋气息，混合着远处某家厨房飘出的烤鱼和 oregano 的香味。除了海水轻轻拍打岸边小船的声音，以及偶尔掠过天空的海鸥鸣叫，这里安静得能听见自己的呼吸。港口边零星坐着几位白发老人，他们喝着希腊咖啡，目光悠长地望着海面，仿佛在等待，又仿佛只是让时间从指缝间流走。
你会发现，这里没有“景点”的喧嚣感，整个小镇本身就是唯一的、活着的展品。蜿蜒的阶梯小巷窄得只容一人通过，两侧的墙壁在正午的阳光下晒得发烫，色彩饱和度惊人。阳台上的九重葛开得如火如荼，几乎要垂到行人的头上。你随时可能闯入一个只有三张桌子的小 taverna，老板兼任厨师和服务员，菜单就写在门后的黑板上。这里的生活节奏不是“慢”，而是一种近乎凝固的、循环往复的从容。时间不是线性前进的，而是随着日出、渔船归航、教堂钟声和傍晚的散步（volta）而一圈圈旋转。
这座岛最打动人心的，正是这种强烈的“孤岛感”与“家园感”的对比。它远离一切，孤独地漂浮在深蓝色爱琴海上，距离最近的希腊岛屿罗得岛也有两小时船程，而对岸的土耳其海岸线却清晰可见。然而，就在这弹丸之地上，居民们用极致的色彩和顽强的生活力，建造了一个无比温暖、紧密、自足的世界。每一个刷新的门窗，每一盆精心照料的天竺葵，都是对孤独和遗忘的一种温柔抵抗。你不是来参观一个地方，而是来短暂地踏入一种纯粹、浓缩且濒危的地中海海岛生活方式的核心。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当渡轮缓缓驶入那个被称作“Mandraki”的天然港湾时，你会感觉自己像是一头撞进了一盒被打翻的颜料里。眼前的一切都过于明媚，过于安静，以至于不太真实。赭红、鹅黄、湖蓝、薄荷绿……一排排两层高的小房子像乐高积木一样，严丝合缝地挤在U型海湾的怀抱里，倒映在玻璃般平静的碧绿海水中。空气里是纯粹的、带着咸味的海洋气息，混合着远处某家厨房飘出的烤鱼和 oregano 的香味。除了海水轻轻拍打岸边小船的声音，以及偶尔掠过天空的海鸥鸣叫，这里安静得能听见自己的呼吸。港口边零星坐着几位白发老人，他们喝着希腊咖啡，目光悠长地望着海面，仿佛在等待，又仿佛只是让时间从指缝间流走。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会发现，这里没有“景点”的喧嚣感，整个小镇本身就是唯一的、活着的展品。蜿蜒的阶梯小巷窄得只容一人通过，两侧的墙壁在正午的阳光下晒得发烫，色彩饱和度惊人。阳台上的九重葛开得如火如荼，几乎要垂到行人的头上。你随时可能闯入一个只有三张桌子的小 taverna，老板兼任厨师和服务员，菜单就写在门后的黑板上。这里的生活节奏不是“慢”，而是一种近乎凝固的、循环往复的从容。时间不是线性前进的，而是随着日出、渔船归航、教堂钟声和傍晚的散步（volta）而一圈圈旋转。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座岛最打动人心的，正是这种强烈的“孤岛感”与“家园感”的对比。它远离一切，孤独地漂浮在深蓝色爱琴海上，距离最近的希腊岛屿罗得岛也有两小时船程，而对岸的土耳其海岸线却清晰可见。然而，就在这弹丸之地上，居民们用极致的色彩和顽强的生活力，建造了一个无比温暖、紧密、自足的世界。每一个刷新的门窗，每一盆精心照料的天竺葵，都是对孤独和遗忘的一种温柔抵抗。你不是来参观一个地方，而是来短暂地踏入一种纯粹、浓缩且濒危的地中海海岛生活方式的核心。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特罗里佐岛（梅吉斯蒂）`} />
                <InfoRow label="英文名称" value={`Kastellorizo (Megisti)`} />
                <InfoRow label="正式名称" value={`Kastellorizo (Megisti)`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`卡斯特罗里佐镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座孤悬于爱琴海最东端的岛屿，是希腊主权领土的东极前哨，其微型社区的存续本身就是一部地缘政治与人文坚韧的史诗。`} />
                <InfoRow label="建筑特色" value={`新古典主义与本土爱琴海风格的完美融合，所有临海建筑都被漆成明媚的糖果色，仿佛一座漂浮在海上的调色盘。`} />
                <InfoRow label="建筑风格" value={`19世纪末至20世纪初的新古典主义风格为主，混杂了奥斯曼时期的木构阳台元素和鲜明的岛屿色彩美学。`} />
                <InfoRow label="文化价值" value={`作为一个身处希腊与土耳其文化交汇处的微型边境社会，它保存了一种近乎博物馆式的传统海岛生活样本，以及居民对家园近乎固执的眷恋与重建精神。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全天开放。主要景点如帕莱奥卡斯特罗城堡、蓝色宫殿博物馆等开放时间约为夏季（5-9月）09:00-15:00 & 18:00-20:00，冬季（10-4月）时间缩短或需预约。著名的蓝洞海洞仅在每日上午风平浪静时允许船只进入，下午通常因风浪关闭。所有服务在旅游淡季（10月至次年4月）都可能大幅缩减，许多餐厅和酒店会歇业。`} />
              <InfoRow label="门票价格" value={`进入岛屿免费。帕莱奥卡斯特罗城堡门票约3欧元。蓝色宫殿（博物馆）门票约4欧元。蓝洞游船是主要花费，根据船型和是否包含游泳停留，价格在15-25欧元/人之间。岛上几乎没有针对学生或老人的大幅折扣，但小餐馆老板有时会主动赠送甜点或咖啡。`} />
              <InfoRow label="地址" value={`Kastellorizo, 851 11, Greece`} />
              <InfoRow label="交通方式" value={`抵达这里本身就是一场冒险。首先你需要飞往希腊罗得岛的国际机场（RHO）。从罗得岛，你有两种选择：一是乘坐每周数班的小型螺旋桨飞机（由Sky Express运营），飞行时间约45分钟，航班极受天气影响且座位紧张，必须提前数月预订。二是乘坐渡轮，夏季每周有2-3班从罗得岛出发的渡轮（由Dodekanisos Seaways运营），航程约3-4小时，冬季班次可能取消。最可靠的方式是先飞往罗得岛，预留至少一晚缓冲时间，再通过当地旅行社确认并购买前往卡斯特罗里佐的交通票。岛上的“港口”就是小镇本身，下船即是核心区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯特罗里佐的故事，是一部关于战略要地、繁荣、毁灭与坚韧重生的微型史诗。它的古希腊名字“Megisti”意为“最大者”，这对如今这个仅有几平方公里的岛屿来说是个略带讽刺的幽默——它曾经是周围小岛群中最大的一个。在古代，它是一个不起眼的停靠点。命运的转折发生在中世纪，圣约翰骑士团（即医院骑士团）在1306年占领了这里，并建造了那座俯瞰港口、令人望而生畏的红色岩石城堡——“Castello Rosso”，这就是其现代名称“Kastellorizo”（意为红色城堡）的由来。骑士团的红十字旗帜曾在此飘扬，标志着它作为基督教世界在东地中海前哨的角色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的几个世纪，它在威尼斯人、埃及人和奥斯曼帝国的夹缝中生存。令人惊讶的是，在奥斯曼统治时期（尤其是19世纪），这个小岛迎来了黄金时代。得益于精明的岛民和优越的港口，它发展成为爱琴海东部重要的贸易和造船中心，拥有庞大的商船队，远航至埃及、黎凡特甚至黑海。那时的港口停满了船只，岛上人口曾超过万人，富裕的船主们建造了那些我们今天看到的、色彩斑斓的新古典主义豪宅，比如著名的“蓝色宫殿”。你能在旧照片里看到一种几乎可与大岛屿媲美的繁华与自信。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，20世纪对卡斯特罗里佐是残酷的。一战和二战将它卷入了大国博弈的漩涡。1915年，法国军队占领该岛，一场灾难性的大火意外焚毁了港口区大量建筑。1920年，根据条约它被划归意大利。二战期间，它遭受了猛烈的空袭和轰炸，因为其战略位置。更沉重的打击发生在战后：1948年该岛正式回归希腊，但经济基础已被彻底摧毁，加之希腊本土政治动荡和经济机会的吸引，岛上居民开始了大规模外迁的“血泪之路”。人口从巅峰时期的过万，锐减至七十年代的寥寥数百人，许多房屋门窗紧闭，荒草丛生，岛屿奄奄一息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但故事并没有在荒凉中结束。八十年代末，一群意大利纪录片导演来到这里，拍摄了获得奥斯卡奖的影片《地中海》，这部影片让世界看到了这个被遗忘的彩色天堂。随后，希腊政府开始提供补贴，鼓励散居在世界各地（尤其是澳大利亚）的岛民后裔回归修缮祖屋。这是一场缓慢而坚定的“色彩复兴”。每一栋被重新刷上鲜艳油漆的房子，都是一个家庭对故土的回响。今天你看到的明媚景象，并非未经沧桑的天真，而是一次次劫后余生的、充满自觉的打扮。岛民们用色彩对抗时间的侵蚀和地理的孤绝，他们的历史就写在每一面墙壁的色调里，在每一次“欢迎回来”的问候中。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味卡斯特罗里佐，你需要至少完整的一天，并抱着“沉浸”而非“打卡”的心态。最佳方案是乘最早的航班或渡轮抵达（约上午10点），立刻去码头边预订蓝洞的游船（上午海面最平静）。游洞归来后，正是日头最盛时，适合在港口咖啡馆小憩，观察苏醒的岛屿。下午的时光留给徒步探索：从港口西侧开始，沿着彩色小巷向上，拜访博物馆，最后挑战登顶帕莱奥卡斯特罗城堡，那里有全岛的制高点视野。傍晚时分下山，在海滨找一家餐馆，等待被誉为爱琴海最美的日落将整个港口染成金黄和粉红。节奏一定要慢，多停留，多和当地人聊上几句，这才是解锁孤岛灵魂的钥匙。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上几乎没有遮阴处，务必携带防晒霜、帽子和充足饮水，正午时分可以考虑回住处或找阴凉处休息。蓝洞之旅非常依赖天气，如果当天上午因风浪取消，不要沮丧，这本身就是岛屿生活随机性的一部分，可以改为探索小镇内部或游泳。岛上ATM机可能失灵，且很多小商家只收现金（欧元），务必在抵达前从罗得岛取好足够现金。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达后第一件事就是去港口边的船家摊位，预订一趟前往世界第二大海洞——蓝洞的清晨小船之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游洞回来后，在港口“议会树下”的露天咖啡馆点一杯冰 freddo cappuccino，看色彩明艳的房屋在正午阳光下仿佛在发光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着港口西侧（Lytras家族房屋附近）的阶梯小巷开始向上探索，用手触摸那些被海风和岁月打磨得粗糙的彩色墙壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开蓝色宫殿那扇厚重的大门，在这座修复如初的19世纪商人宅邸里，感受旧日繁华与家族记忆的无声诉说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顶着午后阳光，沿着清晰的步道向山顶的帕莱奥卡斯特罗城堡废墟进发，每一步回望，港湾都像一幅更广阔的油画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡的红色岩壁阴影下坐下，俯瞰脚下糖果盒般的城镇、蔚蓝的海湾和对岸清晰的土耳其山脉轮廓线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一小时，下山来到港口最东端的圣乔治利亚教堂附近，找一张面向西方的桌子，点一瓶本地啤酒和几样 mezze。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当太阳沉入土耳其群山背后，天空上演粉紫金红的戏剧时，加入当地人傍晚的 volta（散步），沿着海滨大道慢慢走。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口全景与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨7-8点或傍晚日落前后，站在港口防波堤的中段，使用偏光镜消除水面反光，将色彩斑斓的建筑群与其在水中的完美倒影一同框入镜中，构图力求对称。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`蓝色宫殿阳台视角`}</h4>
                  <p className="text-sm text-gray-700">{`参观蓝色宫殿时，一定要走上它的临海阳台，以精致的铁艺栏杆为前景，拍摄港口东侧层层叠叠的彩色房屋和教堂钟楼，最佳光线在上午。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡山俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`在攀登帕莱奥卡斯特罗城堡的途中，有几个天然观景平台，下午顺光时，用长焦镜头压缩空间，捕捉港口U型弧线、屋顶的色彩矩阵与远方土耳其海岸线的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小巷光影戏剧`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，当阳光直射入狭窄的阶梯小巷，会形成强烈的明暗对比，寻找一扇亮蓝色的门或一丛鲜艳的花作为焦点，拍摄光线切割墙壁的几何图案和浓郁的色彩饱和度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜幕初降的港湾`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻（约持续20分钟），港口灯光亮起，天空呈深蓝色，此时用三脚架长曝光，能拍出海水如丝绒般平静、房屋灯光温暖、天际线泛着微光的魔幻时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`岛上居民非常注重隐私，拍摄阳台、窗户或私人院落内的场景时，务必保持尊重，最好先微笑致意或询问。爱琴海的阳光在夏季非常强烈，建议携带渐变灰滤镜（GND）来控制天空与建筑的光比，避免天空过曝或建筑欠曝。尝试拍摄一些细节：剥落的油漆门、门环、窗台上的猫、晒着的渔网，这些更能传达岛屿的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`港口怀旧之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在港口第一排一栋鹅黄色的百年老房子里，老板Nikos会告诉你每栋邻居房子的故事，清晨推开木制百叶窗，渔船就在你窗下几米处晃动。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭式温馨公寓`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇上半部宁静小巷里的自助式公寓，由一对老夫妇经营，带一个种满柠檬树的小庭院，老板娘会送来自家做的果酱和新鲜面包。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`精品设计酒店体验`}</h4>
                  <p className="text-sm text-yellow-800">{`由岛上传统石屋巧妙改建的精品酒店，在保留拱形石顶和厚墙的同时，内部是极简的基克拉迪风格设计，拥有一个可以俯瞰港口屋顶的私人露台。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`极致隐居`}</h4>
                  <p className="text-sm text-purple-800">{`位于港口对面、需要步行十分钟的“安娜之屋”，完全独处一隅，面朝开阔的大海和土耳其海岸线，夜晚只有星空和海浪声为伴，适合寻求绝对宁静的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯特罗里佐的住宿数量极其有限，且很多是家庭经营，夏季（6-9月）必须提前至少3-4个月预订，通过邮件或电话直接与房东沟通往往比大型预订平台更可靠。岛上夜间极其安全，但小巷没有路灯，建议携带一个小手电。选择住宿时，留意它是否在港口边（方便但可能傍晚较热闹）还是在上部街区（需要爬阶梯但更安静），根据你的体力偏好决定。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开卡斯特罗里佐许久后，你记忆中最鲜明的可能不是某个具体的景点，而是一种整体的“感觉”。那种感觉，是色彩在炽烈阳光下的饱满欲滴，是海水在不同时辰变幻的蓝绿色调，是午间全镇陷入沉寂时，连猫都躲在阴影里打盹的慵懒。你会记得某个老人对你点头微笑时眼角的皱纹，记得小餐馆里那条简单烤制却鲜美无比的鱼，记得在城堡山顶，看着这个微小、脆弱却又无比坚韧的彩色社区被无垠的深蓝大海所包围时，心中升起的那份既孤寂又温暖的复杂情绪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求宏大、高效和流量的世界里，卡斯特罗里佐的存在像一个温柔的悖论。它告诉你，微不足道可以如此丰富，偏远孤绝可以如此治愈，缓慢几近停滞可以如此充实。它是一面镜子，照见我们内心对纯粹、对联系、对带有温度的生活的渴望。来这里，不只是为了看一个“地方”，更是为了体验一种“状态”——一种将生活精炼到最基本、最鲜艳、最人性的状态。每一位真正的旅人，都应该来一次这样的孤岛，让这里的色彩洗刷眼睛，让这里的寂静充盈耳朵，然后带着一小片那片蔚蓝与明黄调和出的内心宁静，重回纷扰的世界。它提醒我们，家园不是一个地理概念，而是一种用心建造和守护的彩色信仰。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ano-syros" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡罗斯岛阿诺锡罗斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ano Syros</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/delos-island" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    提
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">提洛岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/temple-of-apollo-epicurius-bassae" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴赛的阿波罗·伊壁鸠鲁神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Temple of Apollo Epicurius at Bassae</p>
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
