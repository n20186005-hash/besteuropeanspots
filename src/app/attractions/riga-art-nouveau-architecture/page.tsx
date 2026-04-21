import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里加新艺术建筑群 Art Nouveau architecture in Riga｜走进全球最密集的“流动建筑博物馆” - 最佳欧洲景点',
  description: '想象一下，你转过一个寻常的街角，却猛地倒吸一口凉气，仿佛不小心闯进了一本立体童话书的扉页。这就是我第一次站在里加阿尔伯特街口的感受。眼前的街道并不宽阔，但两旁的建筑却争先恐后地向你扑来，不是用体积，而是用令人窒息的细节。那些砂岩立面上，盘踞着不是你记忆中任何一本教科书里的生物——有面容哀伤、长发如海...',
}

export default function RigaArtNouveauArchitecturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '拉脱维亚', href: '/destinations/latvia' },
            { label: '里加新艺术建筑群', href: '/attractions/riga-art-nouveau-architecture' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里加新艺术建筑群・Art Nouveau architecture in Riga・拉脱维亚・里加`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你转过一个寻常的街角，却猛地倒吸一口凉气，仿佛不小心闯进了一本立体童话书的扉页。这就是我第一次站在里加阿尔伯特街口的感受。眼前的街道并不宽阔，但两旁的建筑却争先恐后地向你扑来，不是用体积，而是用令人窒息的细节。那些砂岩立面上，盘踞着不是你记忆中任何一本教科书里的生物——有面容哀伤、长发如海藻般蔓延的女子从窗框里“生长”出来；有狮身人面、孔雀尾羽的幻想神兽在檐口睥睨众生；阳光穿过阳台铸铁卷曲成的华丽漩涡，在淡黄、淡绿和奶白色的墙面上投下变幻莫测的光影。空气里有种老石头被晒暖的干燥气味，混着远处咖啡馆飘来的淡淡烘焙香。
这里不是寂静的博物馆，而是活生生的城市肌理。你身边匆匆走过的，是夹着公文包的上班族、推着婴儿车的母亲、和牵着狗慢跑的居民。这些惊世骇俗的建筑，就是他们每天回家的门廊，是他们的窗台风景。一个老太太正从一扇装饰着极致繁复花纹的大门里走出来，门楣上咆哮的狮头面具仿佛在为她送行，而她只是淡定地拎着菜篮子。这种强烈的反差，构成了里加新艺术区最迷人的内核：极致艺术与日常生活的无缝交融。它不是被供奉起来的遗产，而是这座城市呼吸的一部分。
最打动我的，是那份近乎狂野的创作自由。在19世纪末20世纪初那个充满乐观的年代，里加的新贵们聘请建筑师，仿佛在说：“请把我的野心和梦想，用石头和灰泥写在城市的天空下。”于是，建筑师们挣脱了古典主义的对称枷锁，让灵感像藤蔓一样疯长。每一栋楼都是一个独立的宇宙，都在讲述不同的故事——关于自然的神性、关于神话的再诠释、关于民族身份的探寻。漫步其间，你不是在观看建筑，而是在阅读一首首由线条、光影和雕塑构成的立体史诗，每一页都令人心跳加速。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你转过一个寻常的街角，却猛地倒吸一口凉气，仿佛不小心闯进了一本立体童话书的扉页。这就是我第一次站在里加阿尔伯特街口的感受。眼前的街道并不宽阔，但两旁的建筑却争先恐后地向你扑来，不是用体积，而是用令人窒息的细节。那些砂岩立面上，盘踞着不是你记忆中任何一本教科书里的生物——有面容哀伤、长发如海藻般蔓延的女子从窗框里“生长”出来；有狮身人面、孔雀尾羽的幻想神兽在檐口睥睨众生；阳光穿过阳台铸铁卷曲成的华丽漩涡，在淡黄、淡绿和奶白色的墙面上投下变幻莫测的光影。空气里有种老石头被晒暖的干燥气味，混着远处咖啡馆飘来的淡淡烘焙香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是寂静的博物馆，而是活生生的城市肌理。你身边匆匆走过的，是夹着公文包的上班族、推着婴儿车的母亲、和牵着狗慢跑的居民。这些惊世骇俗的建筑，就是他们每天回家的门廊，是他们的窗台风景。一个老太太正从一扇装饰着极致繁复花纹的大门里走出来，门楣上咆哮的狮头面具仿佛在为她送行，而她只是淡定地拎着菜篮子。这种强烈的反差，构成了里加新艺术区最迷人的内核：极致艺术与日常生活的无缝交融。它不是被供奉起来的遗产，而是这座城市呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那份近乎狂野的创作自由。在19世纪末20世纪初那个充满乐观的年代，里加的新贵们聘请建筑师，仿佛在说：“请把我的野心和梦想，用石头和灰泥写在城市的天空下。”于是，建筑师们挣脱了古典主义的对称枷锁，让灵感像藤蔓一样疯长。每一栋楼都是一个独立的宇宙，都在讲述不同的故事——关于自然的神性、关于神话的再诠释、关于民族身份的探寻。漫步其间，你不是在观看建筑，而是在阅读一首首由线条、光影和雕塑构成的立体史诗，每一页都令人心跳加速。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里加新艺术建筑群`} />
                <InfoRow label="英文名称" value={`Art Nouveau architecture in Riga`} />
                <InfoRow label="正式名称" value={`Art Nouveau architecture in Riga`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`里加`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界上新艺术风格建筑最集中、数量最多的城市核心区，堪称该运动在建筑领域的巅峰展示橱窗。`} />
                <InfoRow label="建筑特色" value={`极度华丽繁复的立面装饰，大量运用拟人化、神话生物和自然元素的雕塑，线条如植物藤蔓般自由流动，充满戏剧性的张力和幻想色彩。`} />
                <InfoRow label="建筑风格" value={`以浪漫民族主义和国际新艺术风格为主，尤其以“垂直新艺术”或“装饰性新艺术”为突出特色，融合了拉脱维亚民间艺术元素。`} />
                <InfoRow label="文化价值" value={`不仅是建筑艺术的宝库，更是19世纪末20世纪初里加作为波罗的海地区蓬勃发展的商业大都会，其市民社会自信、文化觉醒与财富实力的三维立体宣言。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`建筑外观全天可观赏，街道本身就是露天博物馆。部分建筑内部（如公寓楼梯间、特定博物馆）开放时间各异，通常为周二至周日上午10点至下午6点。里加新艺术博物馆开放时间为周二至周日10:00-18:00（冬季17:00），周一闭馆。重要节日如圣诞节、新年可能调整。`} />
              <InfoRow label="门票价格" value={`在街道漫步免费。参观里加新艺术博物馆成人票约6欧元，学生及长者有优惠。若想进入某些私人保护的经典公寓楼梯间（如阿尔伯特街12号），可能需要预约并支付小额导览费（约5-10欧元）。部分精品酒店的大堂区域可免费欣赏。`} />
              <InfoRow label="地址" value={`主要集中在阿尔伯特街（Alberta iela）、斯特拉涅库街（Strēlnieku iela）、伊丽莎白街（Elizabetes iela）及周边区域，里加市中心，LV-1010`} />
              <InfoRow label="交通方式" value={`从里加国际机场出发，乘坐22路公交车直达市中心“13. janvāra iela”站，车程约30分钟，班次每20-30分钟一班，可在机场便利店购票或上车刷卡。从中央火车站步行至阿尔伯特街区域仅需15分钟。市内游览强烈建议步行，这是感受建筑细节的唯一方式。也可乘坐有轨电车3路或5路在“Nacionālā opera”站下车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这片建筑森林为何在此疯长，得把时钟拨回19世纪末的里加。那时的里加，是俄罗斯帝国境内仅次于圣彼得堡和莫斯科的第三大港口城市，波罗的海沿岸的贸易巨人。木材、粮食、原材料在这里吞吐，催生了一批富裕的本地拉脱维亚商人、银行家和实业家。他们积累了财富，也渴望用建筑来宣告自己的成功和文化品位，与占统治地位的德意志贵族庄园主风格分庭抗礼。恰在此时，一股名为“新艺术”的风潮正席卷欧洲，它反对工业化生产的冰冷，崇尚自然曲线和手工艺之美，这正好击中了里加新兴中产阶级的内心。他们想要的，不是复制过去的宫殿，而是属于他们自己时代的、独一无二的身份象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场建筑上的“狂欢”拉开了序幕。关键人物纷纷登场。其中最具戏剧性的一位，是米哈伊尔·爱森斯坦。对，他就是那位苏联大导演谢尔盖·爱森斯坦的父亲。这位建筑师并非拉脱维亚人，却在这里找到了他艺术表达的终极舞台。他在阿尔伯特街、斯特拉涅库街留下了一系列堪称“新艺术戏剧”的作品。你看阿尔伯特街10a号那栋楼，简直是他个人美学的总爆发。立面被分割成无数充满动感的板块，装饰着斯芬克斯、女妖面具、孔雀、太阳神面具，表情从沉思到狰狞，极尽夸张之能事。据说当时保守的评论家斥之为“建筑的精神错乱”，但业主们却爱极了这种标新立异。爱森斯坦用建筑证明，房子可以是冻结的音乐，也可以是石头上演的默剧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，舞台不止他一人。另一位巨匠康斯坦丁斯·佩克尚斯则带来了更内省、更民族化的风格。他设计的建筑（如阿尔伯特街12号），线条相对克制，但装饰细节大量取材于拉脱维亚民间图案和自然主题，比如松果、橡树叶、本土鸟类。这体现了当时“浪漫民族主义”的思潮——拉脱维亚知识分子正积极构建自己的民族文化认同，以区别于德意志和俄罗斯的影响。建筑，成了这种精神追求最直观的砖石宣言。你会发现，这些建筑虽然共享“新艺术”的标签，内部却暗流涌动：有的是国际化的奢华炫技，有的则藏着深沉的本土灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，黄金时代总是短暂。第一次世界大战和随后的拉脱维亚独立战争带来了动荡。紧接着的第二次世界大战和苏联吞并，则彻底改变了这片街区的命运。在苏联时期，私人豪宅被收归国有，分割成拥挤的 communal apartments（公共公寓）。那些精致的立面雕塑被斥为“资产阶级的腐朽审美”，无人维护，在波罗的海咸湿的空气和酸雨中慢慢污损、剥落。华丽的内部空间被胡乱分割，石膏装饰被覆盖或破坏。这些建筑沉默了半个世纪，像一位位被遗忘的贵族，穿着褴褛的华服，在历史角落蒙尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机随着1991年拉脱维亚恢复独立而到来。这些建筑的价值被重新发现和评估。1997年，里加历史中心被列入联合国教科文组织世界遗产名录，其中新艺术建筑区是其核心亮点。一场缓慢而精细的修复开始了。过程充满挑战，资金、技术、产权问题复杂。但拉脱维亚人深知，这是他们民族记忆和城市骄傲不可替代的一部分。如今，你看到的大部分光鲜立面，都是近二三十年修复的成果。一些建筑恢复了住宅功能，一些变成了大使馆、高档酒店或文化机构。它们终于从沉睡中苏醒，再次向世界讲述那个短暂却无比绚烂的、关于自由与梦想的里加之梦。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正沉浸其中，建议你留出至少半天时间（4-5小时）。最佳抵达时间是工作日的早晨九点后，这时阳光正好斜射在立面上，勾勒出绝佳的浮雕阴影，而游客尚未大批到来。游览节奏一定要“慢”，这不是打卡之旅，而是细节发现之旅。从阿尔伯特街的北端开始，向南缓慢推进，然后辐射到周边几条平行街道。核心不是“看完”，而是“读懂”几栋代表性建筑。原因在于，新艺术的魅力全在细节，匆匆一瞥只会看到一片华丽，慢下来才能发现门楣上那个狡黠的微笑、窗棂间那一片精致的铁艺树叶。带上一副望远镜（或利用手机长焦镜头），你会打开一个新世界。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多最美楼梯间位于仍然有人居住的公寓楼内，进入时务必保持安静、尊重隐私，若大门紧闭切勿强行闯入，有时下午居民回家时较易进入。穿着舒适的步行鞋，因为你大部分时间会仰着头走路，石板路有时不平。警惕过于热情的“导游”主动带路并索要高额费用，官方信息在旅游中心或博物馆获取更可靠。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从阿尔伯特街与安东尼亚街交汇处起步，先仰头细看街角那栋淡绿色建筑立面上那些扭曲如同梦魇又美丽非凡的女性面孔雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢向南踱步，在阿尔伯特街12号前停下，若机缘巧合门开着，轻轻步入那被誉为“世界上最华丽楼梯间”的入口大厅，让目光追随那些覆盖着金色叶片、蓝绿色釉面陶瓷和彩色玻璃的藤蔓与太阳光芒图案盘旋而上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过宁静的街心小公园，转到斯特拉涅库街，寻找那栋有着巨大猫头鹰和猫雕塑守护的建筑立面，观察它们如何在光影下显得既威严又卡通。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进伊丽莎白街，在人行道中间停下，正面凝视阿尔伯特街2a号那栋对称建筑顶端气势恢宏的男像柱和华丽山花，感受新艺术风格中蕴含的古典力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进一条静谧的内院，也许会发现一个褪色的彩绘灰泥天花板或一个被遗忘的优雅阳台，这里藏着未被游客打扰的时光痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往位于阿尔伯特街12号内的里加新艺术博物馆，不仅仅看展览，更要亲身踏入那些按原样修复的豪华公寓房间，触摸那个时代的家具、壁纸和居住美学。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在阿尔伯特街或伊丽莎白街找一家有露天座位的咖啡馆坐下，点一杯拉脱维亚黑药酒或咖啡，从平视的角度，悠闲地观察建筑立面与街道生活如何和谐共处。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力尚可，漫步到不远处的自由纪念碑，回望这片建筑群的天际线，思考它作为城市历史层理中浓墨重彩一页的意义。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`阿尔伯特街10a号与12号之间的人行道`}</h4>
                  <p className="text-sm text-gray-700">{`下午三至五点，阳光西斜，利用长焦镜头捕捉建筑立面上那些戏剧性面具雕塑的特写，侧光能完美刻画出石膏雕塑的深邃表情和纹理细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`斯特拉涅库街6号建筑正对面`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的早晨，阳光能照亮立面中上部，拍摄带有典型新艺术风格窗户和阳台的铁艺装饰全景，将街道的纵深感与建筑的垂直装饰线条一同构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`里加新艺术博物馆内部蓝色客厅的窗口`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从室内向外拍摄，将室内修复精美的彩绘墙壁、弧形门框作为前景画框，捕捉窗外对面建筑的屋顶和天空，形成时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`伊丽莎白街与阿尔伯特街转角的人行横道处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，使用广角镜头低角度仰拍，将街道尽头的建筑立面、有轨电车的轨道和线条，以及天空的流云一同纳入，营造动感与压迫感并存的城市画卷。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某条静谧内院的拱门之下`}</h4>
                  <p className="text-sm text-gray-700">{`利用正午时分内院的光线均匀，拍摄拱门作为框架，聚焦内院里那些虽已斑驳但风情犹存的墙面装饰和楼梯，营造隐秘的探索感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民楼内部楼梯间前，最好用微笑或简单手势征得楼内居民的默许，这是基本的礼貌。波罗的海地区冬季日照时间极短且光线柔和，是拍摄建筑立面色调与细节的绝佳时机，但需注意防寒和电池保温。利用雨后的湿润天气，石雕颜色会更深沉，反光能增加画面的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色公寓体验`}</h4>
                  <p className="text-sm text-blue-800">{`租住位于阿尔伯特街某栋保护建筑内的高层公寓，清晨可以在拥有百年历史、装饰着花卉浮雕的客厅里，泡一杯茶，俯瞰尚未被游客填满的静谧街道，真正像本地人一样醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`下榻由新艺术风格豪宅改造的精品酒店，房间保留了原始的弧形天花板线脚、修复后的壁画和古董家具，现代卫浴巧妙地融入其中，每晚都像睡在一件大型艺术品里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`中央地带高端酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`选择位于伊丽莎白街的五星级酒店，不仅地理位置核心，其建筑本身可能就是地标，在酒店的餐厅或酒吧里就能360度欣赏到建筑群的天际线，享受新旧交融的奢华服务。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧民宿选择`}</h4>
                  <p className="text-sm text-purple-800">{`住在隔了几条街的安静社区民宿，那里建筑同样优美但更生活化，价格亲民，步行十分钟即可抵达核心区，体验从本地生活圈缓缓步入“舞台中央”的奇妙过渡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（6-8月及圣诞季）这些特色住宿非常紧俏，务必提前数月预订。选择临街房间固然景观好，但里加有轨电车运行至深夜，对声音敏感者需准备耳塞或选择内院房间。这片区域是里加最安全的区域之一，夜晚灯火通明，散步很有安全感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开里加很久之后，我脑海中反复出现的，不是某一栋具体的建筑，而是一种感觉——一种关于“可能性”的感觉。在那个世纪之交，人们敢于把梦想做得如此之大，如此具体，并且用最坚固的材料将它浇筑成型，竖立在每天回家的路上。里加的新艺术建筑群，像一封来自过去的、无比热情洋溢的信，告诉我们：美可以不必含蓄，创造可以不必遵循教条，生活本身就可以是一件全力以赴的艺术品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求极简、效率，建筑外观越来越同质化的时代，这片街区更像一个倔强的异数。它提醒我们，城市不仅仅是功能性的容器，它更应该是情感的载体、集体记忆的舞台和个体表达的画布。来到这里，你不仅是在观赏一种建筑风格，更是在触摸一个时代跳动的脉搏，感受一个小民族在历史夹缝中喷薄而出的文化自信。对于每一位热爱深度游的旅人而言，这里是一堂无可替代的、关于美、自由与身份的立体课程。它会点燃你对细节的感知力，从此以后，你看待每一座城市的目光，都将变得不一样。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cesis-old-town-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesis-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
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
