import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '孔克修道院 Abbey of Sainte-Foy｜在法国深山中聆听石头里的史诗与圣光 - 最佳欧洲景点',
  description: '车子沿着多尔多涅河谷的盘山路不知转了多少个弯，当眼前豁然开朗，整个孔克村连同那座赭石色的庞然大物——圣福伊修道院教堂，像被一只巨手小心翼翼地安放在翠绿山谷的掌心时，你一定会忍不住“哇”出声来。那不仅仅是风景明信片，而是一种扑面而来的、沉甸甸的史诗感。阳光斜斜地打在教堂的砂岩上，石头仿佛有了温度，散发...',
}

export default function AbbeyOfSainteFoyConquesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '孔克修道院', href: '/attractions/abbey-of-sainte-foy-conques' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`孔克修道院・Abbey of Sainte-Foy・法国・孔克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着多尔多涅河谷的盘山路不知转了多少个弯，当眼前豁然开朗，整个孔克村连同那座赭石色的庞然大物——圣福伊修道院教堂，像被一只巨手小心翼翼地安放在翠绿山谷的掌心时，你一定会忍不住“哇”出声来。那不仅仅是风景明信片，而是一种扑面而来的、沉甸甸的史诗感。阳光斜斜地打在教堂的砂岩上，石头仿佛有了温度，散发出蜂蜜般的光泽。村子里的石板路被岁月打磨得油光发亮，一路向上延伸，最终汇入那座沉默的、拱卫着天堂之门的建筑。
推开那扇厚重的木门，瞬间从南法的明亮阳光跌入一片幽深、清凉而肃穆的阴影里。光线在这里被重新分配：几束强烈的光柱从天窗和高侧窗斜射进来，像舞台追光一样，精准地照亮空气中飞舞的微尘，以及地面上某些古老的石刻纹样。眼睛需要适应一会儿，然后，那些支撑着巨大穹顶的粗壮圆柱、拱廊上方模糊但有力的壁画痕迹才逐渐显现。最奇妙的不是看，而是听。教堂里几乎空无一人，只有你自己的脚步声在空旷的中殿回响，但那声音不是消散，而是被石头温柔地包裹、放大、混合，形成一种低沉而持续的共鸣，像是建筑本身在呼吸，在吟唱一首千年的格里高利圣咏。空气中弥漫着石头特有的冷冽气味，混合着老木头和一点点蜡的暖香。
你会发现，这座修道院绝非一个孤立的博物馆。它至今仍是这个小小村庄跳动的心脏。清晨，你可以看到村民穿过教堂前的广场去面包房；中午，钟声悠扬地响起，召唤着人们；傍晚，当最后一波游客散去，本地人会带着狗，安静地坐在教堂台阶上聊天。这座建筑不是被供起来的，而是活在人们的呼吸里。它的核心魅力，就在于这种惊人的连续性。从公元9世纪起，这里就是朝圣者拖着疲惫身躯抵达后的第一个慰藉，他们在这里祈祷、歇息、获得力量，继续走向西班牙的圣地亚哥。今天，你依然能看到背着巨大行囊、挂着拐杖、风尘仆仆的现代朝圣者，他们走进教堂，放下行囊，静静地坐在长椅上，脸上那混合着极度疲惫与深沉安宁的神情，与中世纪壁画上的信徒一模一样。时光在这里，仿佛从未真正流逝。
最打动人心的，或许是那种极致的反差与和谐。建筑的 exterior 是如此的雄浑、粗犷，如同从山岩中生长出来，充满了原始的力量；而 interior，尤其是在珍宝馆里，你将看到与之形成极致对比的、人类技艺的巅峰——那尊金光灿烂、镶嵌无数宝石的圣福伊圣物龛。厚重石头守护着极致精巧的金银，苦难的朝圣之路指向璀璨的天国荣光，这种巨大的张力，正是这座修道院永恒魅力的源泉。它告诉你，信仰可以如此坚实，也可以如此闪耀。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着多尔多涅河谷的盘山路不知转了多少个弯，当眼前豁然开朗，整个孔克村连同那座赭石色的庞然大物——圣福伊修道院教堂，像被一只巨手小心翼翼地安放在翠绿山谷的掌心时，你一定会忍不住“哇”出声来。那不仅仅是风景明信片，而是一种扑面而来的、沉甸甸的史诗感。阳光斜斜地打在教堂的砂岩上，石头仿佛有了温度，散发出蜂蜜般的光泽。村子里的石板路被岁月打磨得油光发亮，一路向上延伸，最终汇入那座沉默的、拱卫着天堂之门的建筑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，瞬间从南法的明亮阳光跌入一片幽深、清凉而肃穆的阴影里。光线在这里被重新分配：几束强烈的光柱从天窗和高侧窗斜射进来，像舞台追光一样，精准地照亮空气中飞舞的微尘，以及地面上某些古老的石刻纹样。眼睛需要适应一会儿，然后，那些支撑着巨大穹顶的粗壮圆柱、拱廊上方模糊但有力的壁画痕迹才逐渐显现。最奇妙的不是看，而是听。教堂里几乎空无一人，只有你自己的脚步声在空旷的中殿回响，但那声音不是消散，而是被石头温柔地包裹、放大、混合，形成一种低沉而持续的共鸣，像是建筑本身在呼吸，在吟唱一首千年的格里高利圣咏。空气中弥漫着石头特有的冷冽气味，混合着老木头和一点点蜡的暖香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这座修道院绝非一个孤立的博物馆。它至今仍是这个小小村庄跳动的心脏。清晨，你可以看到村民穿过教堂前的广场去面包房；中午，钟声悠扬地响起，召唤着人们；傍晚，当最后一波游客散去，本地人会带着狗，安静地坐在教堂台阶上聊天。这座建筑不是被供起来的，而是活在人们的呼吸里。它的核心魅力，就在于这种惊人的连续性。从公元9世纪起，这里就是朝圣者拖着疲惫身躯抵达后的第一个慰藉，他们在这里祈祷、歇息、获得力量，继续走向西班牙的圣地亚哥。今天，你依然能看到背着巨大行囊、挂着拐杖、风尘仆仆的现代朝圣者，他们走进教堂，放下行囊，静静地坐在长椅上，脸上那混合着极度疲惫与深沉安宁的神情，与中世纪壁画上的信徒一模一样。时光在这里，仿佛从未真正流逝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是那种极致的反差与和谐。建筑的 exterior 是如此的雄浑、粗犷，如同从山岩中生长出来，充满了原始的力量；而 interior，尤其是在珍宝馆里，你将看到与之形成极致对比的、人类技艺的巅峰——那尊金光灿烂、镶嵌无数宝石的圣福伊圣物龛。厚重石头守护着极致精巧的金银，苦难的朝圣之路指向璀璨的天国荣光，这种巨大的张力，正是这座修道院永恒魅力的源泉。它告诉你，信仰可以如此坚实，也可以如此闪耀。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`孔克修道院`} />
                <InfoRow label="英文名称" value={`Abbey of Sainte-Foy`} />
                <InfoRow label="正式名称" value={`Abbey of Sainte-Foy`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`孔克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是通往西班牙圣地亚哥朝圣之路上（法国段“勒皮之路”）最璀璨、最不可或缺的精神灯塔与艺术丰碑之一。`} />
                <InfoRow label="建筑特色" value={`一座气势恢宏、比例完美的罗马式建筑杰作，尤以正立面的“末日审判”雕刻山花和内部“天堂之光”般的回廊回音效果闻名于世。`} />
                <InfoRow label="建筑风格" value={`典型的盛期罗马式建筑风格，厚重、坚实、充满几何力量感与宗教象征主义。`} />
                <InfoRow label="文化价值" value={`千年来，它守护着朝圣者的灵魂，保存着中世纪最精湛的金银细工圣物艺术，是欧洲宗教信仰、艺术创造与人类坚韧精神三位一体的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂全年每日对外开放，具体时间通常为上午9点至傍晚6点。珍宝馆（内藏圣物龛）的开放时间更具季节性，一般为四月至十月，上午9:30至12:30，下午2:00至6:00。冬季开放时间缩短，且周一可能闭馆。宗教节日和特殊庆典期间（如圣福伊节）时间会有变动，建议出发前查询官方网站或当地旅游局。`} />
              <InfoRow label="门票价格" value={`进入修道院教堂本身免费。参观珍宝馆（Treasury）需购票，成人票价约8欧元。学生、10-18岁青少年及团体享有优惠票价。10岁以下儿童免费。部分节庆日（如欧洲文化遗产日）可能免费开放珍宝馆。`} />
              <InfoRow label="地址" value={`Place de l‘Abbaye， 12320 Conques， France`} />
              <InfoRow label="交通方式" value={`孔克位于法国阿韦龙省偏远山区，交通是朝圣体验的一部分。最便捷的方式是先抵达罗德兹（Rodez）或菲雅克（Figeac）两个主要城镇。罗德兹有机场，但航班较少；乘火车通常需要从巴黎奥斯特里茨车站出发，经布鲁兹（Brive-la-Gaillarde）或图卢兹中转至罗德兹，总耗时约5-6小时。从罗德兹或菲雅克出发，每天有数班长途巴士（通常是小型接驳车）前往孔克，车程约1小时，但班次稀少，尤其是淡季，必须提前查好时刻表并预留充足时间。自驾是最灵活的选择，从罗德兹沿D901公路驱车约40分钟，但进入孔克山谷的道路蜿蜒狭窄，需谨慎驾驶。请务必提前规划并确认所有公共交通的时刻表，错过一班车可能意味着要在镇上多留一晚。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一个名叫“达杜隆”的虔诚修士说起。大约在8世纪，他选择在这个与世隔绝、名为“孔克”（意为“贝壳状山谷”）的地方隐居修行。起初，这里只是一个简陋的隐修所，但真正改变它命运的，是一次“神圣的盗窃”。9世纪时，孔克的修士们渴望拥有一件能吸引信徒、奠定地位的圣物。他们的目光投向了三百多公里外、阿让地区的一个小修道院，那里供奉着一位名叫福伊的少女殉道者的遗骸。据说，一位来自孔克的修士潜伏在那个修道院长达十年，终于赢得信任成为管理员，最后成功将圣福伊的圣骨“转移”到了孔克。今天看来，这无异于一场策划已久的文物盗窃，但在中世纪，这被视为一种神圣的“翻译”，是圣徒本人意志的体现——她选择前往更需要她的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`圣福伊的到来，让孔克一夜之间成为欧洲重要的朝圣地。尤其是当通往西班牙圣地亚哥-德孔波斯特拉的朝圣之路在11世纪逐渐成型，位于“勒皮之路”上的孔克，成了朝圣者翻越中央高原艰苦路段后，第一个重要的精神与休整驿站。人流带来了财富与声望。于是，在11世纪中叶到12世纪初，一座配得上这位圣徒的宏伟教堂开始动工。建筑工匠们就地取材，用山谷里的砂岩，以纯粹的罗马式风格，建造起这座如同堡垒般坚固、又充满象征意义的殿堂。教堂的平面就是一个巨大的拉丁十字，厚重的墙壁、半圆形的拱券、少量的窗户，都是为了营造一种内在的、沉思的、抵御尘世喧嚣的氛围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这座教堂最伟大的艺术品，却是在它建成后不久才被安置进去的。大约在公元983年至1013年间，天才的金银匠们制作了那尊举世无双的圣福伊圣物坐像。这尊雕像并非写实，而是一种神圣的象征：端坐的圣福伊穿着罗马帝国公主的长袍，头戴金冠，面容庄严甚至有些严厉，她的眼神穿透千年，直抵观者内心。雕像以木为芯，外面覆盖着纯金的薄片，并镶嵌了古罗马的宝石、水晶、玛瑙和珐琅。特别的是，它的面部覆盖着一个古罗马帝国时期的金面具，这为它增添了一层跨越文明的深邃神秘感。可以说，整个修道院建筑，都是为了成为这件艺术杰作最安全、最相称的基座而存在的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪的辉煌并未永远持续。宗教战争、教区变迁，特别是18世纪的法国大革命，给孔克带来了灭顶之灾。革命者洗劫了修道院，修士被驱逐，教堂的珍宝（除了被村民巧妙隐藏起来的圣福伊圣物龛）大量散失，建筑本身也遭到严重破坏，几乎沦为采石场。有将近一个世纪的时间，这座伟大的教堂在荒芜与遗忘中慢慢凋零，屋顶坍塌，雨水直接浇灌进中殿，杂草在圣徒曾经行走的地面上丛生。它成了一具宏伟的、正在死去的石头躯壳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重生，要归功于一个关键人物：法国历史建筑保护先驱、建筑师“维优勒·勒·杜克”的得意门生——让-查尔斯·拉米。19世纪中叶，在法国重新重视历史遗产的浪潮中，拉米接到了修复孔克修道院的任务。这不是一次简单的修补，而是一次与时间赛跑的抢救性手术。拉米和他的团队以惊人的严谨和热情投入工作。他们没有凭想象去“美化”它，而是根据残存的痕迹、古老的图纸和考古发现，小心翼翼地复原拱顶、重建西立面、修复雕刻。更重要的是，他们重新发现了那些被尘土掩盖的、独一无二的建筑声学秘密。这场持续数十年的修复，堪称19世纪遗产保护的典范。当教堂的钟声再次响起，当阳光重新透过修复好的天窗洒入中殿，孔克不仅恢复了旧貌，更被注入了新的生命。它重新回到了朝圣地图上，继续履行它千年的使命——迎接每一位风尘仆仆的追寻者。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你前一晚就住在孔克或附近，这样你能捕捉到它最宁静的晨昏。清晨九点前抵达是最好的，这时旅游大巴还未涌入，阳光柔和，整个村庄和修道院都沐浴在一种神圣的静谧中。整体游览需要至少4-5小时，节奏宜慢不宜快。上午先专注于教堂建筑本身和外部感受，中午前后进入珍宝馆，在光线最明亮时欣赏圣物龛的璀璨细节，下午则可以漫步村庄，或在回廊静坐，感受时光。这样的安排能让你由宏大到精微，由外至内，完整地体会孔克的精神层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`珍宝馆内严禁拍照，请务必尊重规定，用眼睛和心去记录，这也是朝圣礼仪的一部分。穿着舒适的步行鞋至关重要，村里的路全是凹凸不平的古老石板和台阶。夏季中午教堂外部广场阳光暴晒且游客众多，建议将外部游览安排在早晚。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一件事是穿过村庄寂静无人的石板小巷，走到下方河谷的观景台，回望修道院教堂雄踞山腰、被晨光勾勒出金色轮廓的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南侧的小门轻轻进入修道院教堂，让自己先浸泡在那片由石头、光影与回声共同营造的、近乎实质的静谧之中，什么也别做，只是静静地站一会儿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕着中殿缓缓走一圈，用手指轻轻触摸那些冰冷而光滑的千年柱础，抬头寻找拱廊上残留的壁画痕迹和那些表情生动的柱头雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少二十分钟，坐在长椅上，仔细观察西立面大门上方那幅巨大的“末日审判”石雕，在逐渐升高的阳光下辨认天使、恶魔、得救者与受罚者生动的脸庞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着朝圣者的心情，走进紧邻教堂的珍宝馆，在幽暗的展厅里让眼睛适应，然后被那尊在聚光灯下熠熠生辉、仿佛自内而外发光的圣福伊黄金圣物龛瞬间夺取呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完珍宝馆后，不要急着离开，而是穿过连接的回廊，在这个被双重拱券环绕的方形庭院里找一张石凳坐下，聆听风声、鸟鸣和自己的心跳在此处产生的奇妙回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院出来，沿着村庄的主街慢慢向下溜达，随意走进一家小店，买一个用当地木头雕刻的圣雅各贝壳（朝圣者标志），或是在老喷泉边喝一口清冽的泉水。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，在傍晚时分，沿着村庄后方标记清晰的朝圣者小路向上徒步一小段，从更高的山坡上俯瞰夜幕降临前，灯火初上的孔克村落与修道院剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河谷低处仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，从村庄下方Dourdou河桥附近的观景台向上拍，利用河谷的纵深和清晨的薄雾，可以拍出修道院如同悬浮于绿色山谷之上的神秘感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`西立面“末日审判”门楣特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光会逐渐照亮整个西立面，此时站在广场上，用长焦镜头捕捉门楣中央基督庄严的面容以及周围繁复精美的雕刻细节，注意避开门口的人群。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中殿纵深与光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗日子的正午时分，站在教堂中殿靠近祭坛的位置，向大门方向拍摄，可以看到数束强烈的“天堂之光”从高侧窗射入，形成清晰的光柱，照亮空中浮尘，营造出极其神圣的纵深透视感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`回廊拱券框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，走进修道院回廊，利用一层层重叠的罗马式拱券作为天然画框，拍摄庭院中央的绿树或是对面廊柱下的修士身影（如果有的话），画面极具几何美感与宁静氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村庄屋顶与教堂钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`从村庄高处某条小巷的拐角，以当地特色的板岩屋顶作为前景，聚焦后方修道院教堂坚实的塔楼，能拍出建筑与日常生活的和谐共生。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄时请务必关闭闪光灯，并保持绝对安静，尊重正在祈祷或静默的访客。使用三脚架可能需要提前申请许可，尤其是在空间有限的珍宝馆区域。最好的“镜头”往往是你的记忆，有时放下相机，纯粹用感官去沉浸，收获反而更多。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`朝圣者庇护所体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在修道院官方经营的朝圣者招待所，房间简朴但一尘不染，与真正的徒步朝圣者共用一个公共空间和厨房，晚上可以听到来自世界各地的故事，是独一无二的精神体验。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老石头房子精品民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择村里一栋由12世纪老屋改造的民宿，裸露的石墙、古老的木梁、壁炉，加上主人精心准备的本地早餐（核桃酱、康塔尔奶酪），让你完全融入中世纪村庄的脉搏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山谷宁静庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`住在距离孔克三公里外、坐落在森林与草地间的乡间庄园酒店，拥有开阔的视野、宁静的花园和一个能缓解徒步疲劳的游泳池，夜晚可以看到绝无光污染的璀璨星河。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史中心小旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`位于教堂广场旁边，由家族经营了数代的小旅馆，推开吱呀作响的木窗就能看到修道院立面，夜晚和清晨的钟声近在耳畔，是追求极致位置和地道氛围的绝佳选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`孔克的住宿数量非常有限，尤其在夏季朝圣旺季和周末，务必提前数月预订。几乎所有住宿都不设电梯，且需要爬坡，行李尽量精简。村庄入夜后极其安静，几乎没有夜生活，这正是体验其中世纪氛围的宝贵时刻。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开孔克很久以后，那混合着石头冷香、蜡炬微光和空旷回响的气息，还会在某些安静的瞬间突然回到你的鼻尖。这个地方教会你的，不是关于某个建筑风格的生硬知识，而是一种关于“时间厚度”的感知。在这里，时间不是一条单向飞奔的直线，而是一个层层叠加的、可被触摸的漩涡。你能触摸到9世纪修士开凿第一块基石的决心，11世纪朝圣者额头抵在冰冷地面上祈祷时呼出的热气，19世纪修复匠人看到屋顶坍塌时痛心的眼神，以及今天那个韩国青年、德国老人或巴西学生，在同样的石板路上留下的、带着汗水的足迹。所有这些时刻，都被这座石头建筑默默地吸收、保存，然后在你踏入的瞬间，温柔地释放给你。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求即时、快速、闪亮的今天，孔克的存在，像是一个坚定的“反义词”。它不耀眼夺目（除非你见到那尊圣物龛），它需要你长途跋涉，它要求你安静下来，它甚至有点“不方便”。但正是这些“缺点”，构成了它无可替代的价值。它提醒我们，有些感动，需要经过身体的疲惫才能抵达；有些光芒，需要在漫长的幽暗之后才能看见；有些答案，就藏在千年石头的沉默与回响里。它不是让你来“消费”的景点，而是邀请你来“经历”一段浓缩的时光，完成一次与自己内心的简短朝圣。无论你是否有信仰，当你走出那座教堂，重新站在南法的阳光下，你会感觉自己的某一部分被清洗过，被加固了，像一块被山泉冲刷过的石头，更清晰，也更沉静。这就是为什么，每一个渴望深度、渴望真实、渴望在旅途中遇见更厚重历史与更宁静自己的灵魂，都应该来孔克，静静地坐上一个下午。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/st-gallen-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣加仑修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">St. Gallen Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
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
