import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡永古城 Sion Twin Hills｜悬崖上的千年双堡，瑞士法语区最被低估的日光与美酒秘境 - 最佳欧洲景点',
  description: '朋友，你想象过一座城市的天际线不是由摩天大楼，而是由两座巨大的、光秃秃的岩石山丘来定义的吗？走出锡永火车站的那一刹那，我就被这幅景象钉在了原地。左边是顶着瓦莱城堡废墟的图尔比隆山，右边是承载着圣座教堂的瓦莱尔山，它们像两位沉默的巨人，守护着脚下蔓延开的、有着红色屋顶的老城。空气里有种特别的干燥的暖意...',
}

export default function SionTwinHillsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '锡永古城与双丘', href: '/attractions/sion-twin-hills' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡永古城与双丘・Sion and its Twin Hills・瑞士・锡永 (Sion)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，你想象过一座城市的天际线不是由摩天大楼，而是由两座巨大的、光秃秃的岩石山丘来定义的吗？走出锡永火车站的那一刹那，我就被这幅景象钉在了原地。左边是顶着瓦莱城堡废墟的图尔比隆山，右边是承载着圣座教堂的瓦莱尔山，它们像两位沉默的巨人，守护着脚下蔓延开的、有着红色屋顶的老城。空气里有种特别的干燥的暖意，混杂着从路边咖啡馆飘出的浓缩咖啡香，以及一丝若有若无的……葡萄酒的醇厚气息？没错，这里是瑞士日照最充足的角落，也是著名的葡萄酒产区。
我沿着被太阳晒得暖洋洋的石板路向老城走去。脚步声在狭窄的街巷里回荡，两旁是石块垒成的厚重房屋，有些门楣上还雕刻着十六世纪的日期和家族纹章。但这里毫无博物馆式的死寂感。面包店的铃铛叮当作响，刚出炉的“黑麦面包”散发着焦香；五金店的老板正和熟客用飞快的法语聊着天；而几乎每隔几家店，就能看到一个通向地下酒窖的拱门，门口小黑板上用粉笔写着今日供应的本地葡萄酒名。当地人提着篮子，不紧不慢地采购，他们对头顶那两座看了千百年的地标似乎浑然不觉，而这恰恰是锡永最打动人的地方——那惊人的历史景观，早已像呼吸一样，融入了日常的脉搏里。
当我开始向圣座教堂所在的山丘攀登时，感官体验变得更加纯粹。脚下是粗糙的沙石路，两旁是低矮的耐旱灌木，散发出被烈日烘烤后的草药清香。越往上走，风声越大，它呼啸着穿过古老的城墙垛口，发出呜咽般的回响。登上教堂前的平台回望，整个罗讷河谷在眼前铺展开来，如同一幅巨大的、色彩斑斓的挂毯：墨绿的葡萄园梯田、金黄的麦田、远处雪顶的阿尔卑斯山，以及像银色丝带一样蜿蜒的罗讷河。教堂的钟声就在这时响起，深沉、缓慢，仿佛是从山的骨子里震荡出来的声音，瞬间抚平了所有的喧嚣。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，你想象过一座城市的天际线不是由摩天大楼，而是由两座巨大的、光秃秃的岩石山丘来定义的吗？走出锡永火车站的那一刹那，我就被这幅景象钉在了原地。左边是顶着瓦莱城堡废墟的图尔比隆山，右边是承载着圣座教堂的瓦莱尔山，它们像两位沉默的巨人，守护着脚下蔓延开的、有着红色屋顶的老城。空气里有种特别的干燥的暖意，混杂着从路边咖啡馆飘出的浓缩咖啡香，以及一丝若有若无的……葡萄酒的醇厚气息？没错，这里是瑞士日照最充足的角落，也是著名的葡萄酒产区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我沿着被太阳晒得暖洋洋的石板路向老城走去。脚步声在狭窄的街巷里回荡，两旁是石块垒成的厚重房屋，有些门楣上还雕刻着十六世纪的日期和家族纹章。但这里毫无博物馆式的死寂感。面包店的铃铛叮当作响，刚出炉的“黑麦面包”散发着焦香；五金店的老板正和熟客用飞快的法语聊着天；而几乎每隔几家店，就能看到一个通向地下酒窖的拱门，门口小黑板上用粉笔写着今日供应的本地葡萄酒名。当地人提着篮子，不紧不慢地采购，他们对头顶那两座看了千百年的地标似乎浑然不觉，而这恰恰是锡永最打动人的地方——那惊人的历史景观，早已像呼吸一样，融入了日常的脉搏里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当我开始向圣座教堂所在的山丘攀登时，感官体验变得更加纯粹。脚下是粗糙的沙石路，两旁是低矮的耐旱灌木，散发出被烈日烘烤后的草药清香。越往上走，风声越大，它呼啸着穿过古老的城墙垛口，发出呜咽般的回响。登上教堂前的平台回望，整个罗讷河谷在眼前铺展开来，如同一幅巨大的、色彩斑斓的挂毯：墨绿的葡萄园梯田、金黄的麦田、远处雪顶的阿尔卑斯山，以及像银色丝带一样蜿蜒的罗讷河。教堂的钟声就在这时响起，深沉、缓慢，仿佛是从山的骨子里震荡出来的声音，瞬间抚平了所有的喧嚣。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡永古城与双丘`} />
                <InfoRow label="英文名称" value={`Sion and its Twin Hills`} />
                <InfoRow label="正式名称" value={`锡永古城与双丘`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`锡永 (Sion)`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞士瓦莱州千年首府，欧洲唯一在自然山丘之巅对峙而立的城堡与教堂双星，见证了从罗马时代到主教领地的完整权力更迭史。`} />
                <InfoRow label="建筑特色" value={`两座如同巨舰般的石灰岩山丘拔地而起，分别被一座军事城堡（瓦莱堡）和一座融合了防御功能的教堂城堡（圣座教堂）所占据，形成了独一无二的天际线。`} />
                <InfoRow label="建筑风格" value={`以罗曼式为基础，混合了哥特式的尖拱与后期文艺复兴的装饰元素，是瑞士法语区山地建筑的典型代表，敦实、质朴而充满力量感。`} />
                <InfoRow label="文化价值" value={`一座“活着的”文化遗产，不仅是旅游景点，更是本地人散步、节庆和宗教生活的中心，完美诠释了阿尔卑斯山麓人文与自然的共生哲学。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瓦莱城堡 (Tourbillon)：通常仅在夏季开放，具体为5月中旬至9月底，每日10:00-18:00，周一闭馆（具体日期每年微调，务必出发前官网确认）。圣座城堡与圣座教堂 (Valère Basilica)：全年开放，教堂内部通常为9:00-18:00（冬季可能缩短至17:00），城堡内的风琴博物馆开放时间与教堂同步，但中午有较长的闭馆休息时间（约12:00-14:00）。两座山丘的户外步道和观景平台全年24小时开放。`} />
              <InfoRow label="门票价格" value={`瓦莱城堡：成人约8瑞士法郎，学生及老人票约6瑞士法郎。
圣座教堂免费参观。教堂内的风琴博物馆：成人约6瑞士法郎，优惠票约4瑞士法郎。
常设有两座城堡的联票，约12瑞士法郎，性价比更高。持瑞士旅行通票 (Swiss Travel Pass) 通常可免费进入收费景点。`} />
              <InfoRow label="地址" value={`Place de la Planta 14, 1950 Sion, Switzerland`} />
              <InfoRow label="交通方式" value={`最便捷的方式是乘坐瑞士国铁 (SBB) 抵达锡永火车站 (Sion)。从日内瓦机场出发，乘坐直达的城际列车 (IC)，车程约1小时50分钟，每小时至少一班。从苏黎世机场出发，需要在伯尔尼或洛桑换乘一次，总车程约2小时45分钟。到达锡永火车站后，出站便能一眼望见高耸的双丘，步行是探索的最佳方式。从火车站步行至老城中心约10分钟，再花15-20分钟便能徒步登上任何一座山丘。城内也有公交，但步行沿途的风景和偶遇的古老酒窖，是乘坐交通工具无法体验的。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡永的故事，远比那两座山丘看起来更加悠长而动荡。早在罗马时代，这里就是一个重要的十字路口。但真正让锡永登上历史舞台的，是公元六世纪左右，它成为了锡永主教区的中心。你大概能想象，在那个王权与神权交织的时代，主教大人不仅掌管灵魂，也握有世俗的权力与财富。于是，选址建造一个既能彰显权威、又能抵御危险的居所，就成了头等大事。目光自然落在了那两座天然形成的、易守难攻的山丘上。大约在十三世纪，当时的锡永主教决定在图尔比隆山顶建造自己的宫殿兼堡垒，这就是瓦莱城堡的起源。它居高临下，俯瞰着整个山谷和通往意大利与法国的要道，是权力最直观的宣示。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，主教们的野心不止于此。几乎在同一时期，就在对面那座如今被称为瓦莱尔的山丘上，另一项宏大的工程开始了。他们要在山顶建造一座献给圣母的教堂，但这不是普通的乡村小教堂，而是一座集宗教、防御和居住功能于一体的“教堂城堡”。圣座教堂因此诞生。它的围墙厚实得像堡垒，内部却装饰着精美的 fresco 湿壁画。最绝妙的是，为了给这座高山教堂输送神职人员和生活物资，人们硬是在山体岩石上开凿出了一条隐蔽的通道和蓄水池。想象一下，在战乱年代，当主教从对面城堡的窗口望过来，看到自己属灵的堡垒同样坚不可摧，该是多么安心。这两座建筑，一世俗一宗教，隔空相望又互为犄角，共同构成了中世纪锡永权力结构的物理象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但和平从来都是短暂的。十五世纪，锡永卷入了强大的萨伏伊公国与瑞士联邦的冲突。1475年，战火终于烧到了这里。伯尔尼和瓦莱州的军队围攻锡永，那座象征主教世俗权力的瓦莱城堡在战火中受到了严重破坏。虽然后期有所修缮，但它的军事地位已大不如前。历史的吊诡之处在于，正是这次打击，某种程度上“保护”了圣座教堂。因为它作为宗教场所，受到的破坏相对较小，并且持续发挥着功能。更传奇的是在十七世纪初，一位天才工匠在圣座教堂内部，建造了一架如今被视为无价之宝的管风琴。这架制作于1390年左右的乐器，被认为是世界上最古老的、仍能演奏的管风琴之一。当你在寂静的教堂里，听到工作人员用这架六百多岁的乐器奏出几个音符时，那种穿越时空的震颤，是任何历史书都无法给予的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦莱城堡的命运则更加坎坷。它在十八世纪末的一场大火中彻底被毁，只剩下我们今天看到的、充满悲壮美的废墟轮廓。石头城墙倔强地指向蓝天，内部精美的哥特式小教堂只剩下几面断壁，野草和野花在石缝间顽强生长。然而，正是这种残缺，赋予了它另一种震撼人心的力量。它不再是一个完整的、供人参观的“景点”，而是一个可以任你遐想、沉思的时空纪念碑。站在废墟的垛口，你能感受到权力如风般流逝，而山河依旧。二十世纪七十年代，人们开始了对这两座山丘大规模的历史遗迹保护和修缮工程，不是为了重建辉煌，而是为了稳住时光，让后来者能安全地走进这段凝固的历史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整的白天（至少6-7小时）来沉浸式体验锡永。最好的节奏是上午九点左右抵达，先花两个小时探索充满生活气息的老城，在本地人常去的咖啡馆享用一份早午餐，感受古城苏醒的活力。随后在中午前后开始攀登圣座教堂所在的山丘，此时光线充足，便于参观教堂内部和博物馆，并且能避开可能的人流。在山顶平台野餐或简单休息后，下午前往对面的瓦莱城堡废墟，这时太阳西斜，为废墟打上金色的侧光，非常适合拍照和静静欣赏河谷日落。这样的安排张弛有度，既能深入文化核心，又能捕捉到一天中最美的光影。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登两座山丘都需要一双舒适防滑的鞋子，沙石路在干燥时很滑，特别是下山时。瓦莱城堡内部是开放废墟，没有护栏，参观时务必注意脚下安全，尤其看管好小朋友。夏季午后山谷内可能非常炎热且日光强烈，请务必携带充足饮水、防晒帽和墨镜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从锡永火车站出来，先别急着上山，任由自己迷失在老城迷宫般的石板小巷里，寻找那些隐藏在拱门后的古老酒窖和手工艺品店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心的“骑士之家”或广场旁的露天咖啡馆坐下，点一杯用当地沙斯拉葡萄酿造的清爽白葡萄酒，看鸽子在古老的喷泉边嬉戏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着有明显岁月痕迹的之字形步道缓缓攀登瓦莱尔山，途中在几个观景平台停下，感受视野逐渐开阔、脚下城市慢慢变小的奇妙过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个小时沉浸在圣座教堂内部，除了仰望祭坛，一定要去寻找那架世界上最古老的仍在使用的管风琴，并试着聆听一场简短演奏（如有安排）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门走出，绕到建筑后方，那里有一段保存完好的中世纪城墙，可以触摸冰凉的石块，想象士兵在此巡逻的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后穿过河谷平地，开始向图尔比隆山进发，这条攀登路径更为原始粗犷，能近距离观察山体的岩石肌理和顽强生长的阿尔卑斯植物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达瓦莱城堡废墟的顶端，找一块平整的石头坐下，静静地等待夕阳将整个罗讷河谷染成蜜糖般的金色，看阴影逐渐爬满对面的圣座教堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着天未全黑下山，回到老城选择一家有地窖餐厅的“庇护所”享用晚餐，用一顿丰盛的瓦莱州奶酪火锅或风干牛肉来结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老城街角仰拍双丘`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在老城“大喷泉”广场附近的狭窄街道上，用长焦镜头压缩空间，将红屋顶、街灯与山顶的城堡和教堂一同纳入画面，构成完美的人文地理构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣座教堂侧面长廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会斜射进教堂侧面通往回廊的石砌通道，形成强烈的明暗对比和延伸感极强的光影走廊，适合拍摄人物剪影或空镜。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`瓦莱城堡废墟拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，站在城堡主废墟的某个石拱门下，以拱门为画框，将对面的圣座教堂和山下城市作为远景拍摄，框架构图使照片极具故事感和层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`罗讷河谷葡萄园远景`}</h4>
                  <p className="text-sm text-gray-700">{`需要一点徒步，从锡永城边任意一个向外的葡萄园小径回望，在晴朗的下午，可以拍到双丘矗立于层层叠叠的葡萄藤梯田之上的全景，展现人与自然的关系。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣座教堂风琴局部特写`}</h4>
                  <p className="text-sm text-gray-700">{`如果获得允许（通常禁止使用闪光灯），在教堂内利用自然光线，近距离拍摄那架古老风琴精致的木雕纹饰和泛着幽光的金属音管，细节里充满历史质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄务必保持绝对安静，关闭闪光灯和快门声音，尊重正在进行祈祷或参观的人。使用无人机在瑞士有严格规定，尤其在历史遗迹和城镇上空，未经特别许可严禁飞行。拍摄当地人时，请先微笑示意并征得同意，瑞士人通常注重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古堡山脚历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`由一座17世纪贵族府邸改造的精品酒店，房间拥有原始的石头墙壁和木梁，部分房间的窗户正对着瓦莱尔山，早晨在教堂钟声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园农庄民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于锡永近郊的宁静村庄里，房东世代经营葡萄园，入住不仅可以享受家庭式的温馨房间，还能参与清晨的葡萄园散步，并品尝到绝不外售的私酿好酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`老城中心设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由传统联排屋改造，内部是极简的北欧风格，位置极佳，下楼就是热闹的餐馆和商店，适合喜欢便利和现代舒适感的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济型公寓带厨房`}</h4>
                  <p className="text-sm text-purple-800">{`对于家庭或长住客，老城边缘有管理完善的度假公寓，自带小厨房，你可以去本地市场采购食材，像当地人一样生活，阳台同样能看到山景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季葡萄收获季节是锡永的旅游旺季，住宿紧张且价格较高，建议至少提前两个月预订。老城内的住宿多为古老建筑，可能没有电梯，携带大件行李会稍有不便，但氛围无敌。城郊的住宿更加安静且性价比高，通常有免费停车场，适合自驾的旅行者。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡永好几天了，那两座山丘的轮廓还时常在脑海里浮现。它们带给我的，并非那种令人屏息的、尖锐的美，而是一种沉静的、绵长的力量。在这个世界上，有太多景点被精心包装成脱离现实的幻梦，而锡永却倔强地保持着它的“在地性”。历史没有成为被封存的标本，而是化作了脚下被磨亮的石板、酒窖里橡木桶的清香、以及老人们坐在广场长椅上晒太阳时安详的脸庞。在这里，你触摸到的不是冰冷的展览说明牌，而是依然在呼吸的、有温度的生活本身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`也许，这正是深度旅行最珍贵的收获。它不仅仅是为了看不一样的风景，更是为了寻找一种不一样的时间感。在锡永的双丘之间，你能同时看到时间的两种形态：一种是圣座教堂里那架古老风琴所代表的、被精心保存和延续的线性时间；另一种是瓦莱城堡废墟所展现的、循环往复且接纳荒芜的永恒时间。它们共同提醒着我们，辉煌与凋敝、建造与遗忘，都是生命与文明自然流转的一部分。对于渴望逃离快餐式旅游、想要真正用脚步丈量历史、用心感受地方脉搏的旅人来说，锡永这片日光与岩石共舞的土地，无疑是一处能安放思绪、找回内心节奏的必访之地。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
