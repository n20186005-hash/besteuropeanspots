import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博萨 Bosa｜撒丁岛西海岸的彩色河谷明珠，在城堡下邂逅慢时光 - 最佳欧洲景点',
  description: '记得我第一次接近博萨，是在一个五月晴朗的下午。车子沿着SS129公路盘旋，当转过一个山口，整个河谷毫无防备地撞进眼帘——那一刻，我几乎屏住了呼吸。那不是单一的景象，而是一首由色彩、光线和倒影谱成的交响诗。泰莫河像一条温顺的碧绿绸带，静静地将小镇一分为二。河的左岸，成百上千栋房屋，不是规规矩矩地排列，...',
}

export default function BosaSardiniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '博萨', href: '/attractions/bosa-sardinia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博萨・Bosa・意大利・撒丁岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`记得我第一次接近博萨，是在一个五月晴朗的下午。车子沿着SS129公路盘旋，当转过一个山口，整个河谷毫无防备地撞进眼帘——那一刻，我几乎屏住了呼吸。那不是单一的景象，而是一首由色彩、光线和倒影谱成的交响诗。泰莫河像一条温顺的碧绿绸带，静静地将小镇一分为二。河的左岸，成百上千栋房屋，不是规规矩矩地排列，而是像一群欢快的孩子，争先恐后地沿着塞尔沃山陡峭的坡面向上攀爬，一直爬到山顶那座奶油色的城堡脚下。那些颜色啊，是你在颜料管里找不到的：杏黄、熟桃粉、海沫蓝、薄荷绿，还有被太阳晒得发白的赭石色，它们彼此紧挨着，在强烈的地中海阳光下，焕发出一种近乎天真烂漫的活力。
我把车停在河边的棕榈树下，打开车门，第一个迎接我的是混合的气味。微咸的海风从西面几公里外吹来，裹挟着河谷里野生茴香和迷迭香的辛辣香气，还有一丝丝从老房子石缝里渗出的、带着岁月感的潮湿味儿。声音是慵懒的：河水轻柔的潺潺声，远处码头边渔船引擎偶尔的突突声，还有头顶上海鸥盘旋时那标志性的、略带凄清的鸣叫。我走上那座古老的石桥“蓬特维奇奥”，桥面被行人的脚步打磨得光滑温润。几个老爷爷就靠在桥栏上，用我听不懂的撒丁语缓慢地聊着天，他们的眼神跟随着河面上划过的独木舟，时间在这里仿佛被河水带走了流速。
这就是博萨最打动人心的魔力：它不是一个仅供参观的博物馆，而是一个仍在深深呼吸的有机体。那些色彩鲜艳的房子里，住着一代又一代的博萨人。下午时分，你能看到老太太们坐在自家门槛上摘菜，窗台上晾晒着雪白的床单，在微风中像船帆一样鼓动。河边的工坊里，仍传出叮叮当当的敲击声，那是欧洲为数不多的仍在手工制作金银丝“filigree”珠宝的匠人在工作。你随时可以拐进一条陡峭的巷子，台阶高高低低，两侧墙壁上点缀着盛开的天竺葵，猫在阴影里打盹。走着走着，可能就闯入了一个只有几平米的小广场，那里有一口古老的井，或是一个被遗忘的小神龛。在这里，“生活”本身就是最核心的景点，它不急不躁，邀请你放下行程表，跟着它的脉搏一起跳动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`记得我第一次接近博萨，是在一个五月晴朗的下午。车子沿着SS129公路盘旋，当转过一个山口，整个河谷毫无防备地撞进眼帘——那一刻，我几乎屏住了呼吸。那不是单一的景象，而是一首由色彩、光线和倒影谱成的交响诗。泰莫河像一条温顺的碧绿绸带，静静地将小镇一分为二。河的左岸，成百上千栋房屋，不是规规矩矩地排列，而是像一群欢快的孩子，争先恐后地沿着塞尔沃山陡峭的坡面向上攀爬，一直爬到山顶那座奶油色的城堡脚下。那些颜色啊，是你在颜料管里找不到的：杏黄、熟桃粉、海沫蓝、薄荷绿，还有被太阳晒得发白的赭石色，它们彼此紧挨着，在强烈的地中海阳光下，焕发出一种近乎天真烂漫的活力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我把车停在河边的棕榈树下，打开车门，第一个迎接我的是混合的气味。微咸的海风从西面几公里外吹来，裹挟着河谷里野生茴香和迷迭香的辛辣香气，还有一丝丝从老房子石缝里渗出的、带着岁月感的潮湿味儿。声音是慵懒的：河水轻柔的潺潺声，远处码头边渔船引擎偶尔的突突声，还有头顶上海鸥盘旋时那标志性的、略带凄清的鸣叫。我走上那座古老的石桥“蓬特维奇奥”，桥面被行人的脚步打磨得光滑温润。几个老爷爷就靠在桥栏上，用我听不懂的撒丁语缓慢地聊着天，他们的眼神跟随着河面上划过的独木舟，时间在这里仿佛被河水带走了流速。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是博萨最打动人心的魔力：它不是一个仅供参观的博物馆，而是一个仍在深深呼吸的有机体。那些色彩鲜艳的房子里，住着一代又一代的博萨人。下午时分，你能看到老太太们坐在自家门槛上摘菜，窗台上晾晒着雪白的床单，在微风中像船帆一样鼓动。河边的工坊里，仍传出叮叮当当的敲击声，那是欧洲为数不多的仍在手工制作金银丝“filigree”珠宝的匠人在工作。你随时可以拐进一条陡峭的巷子，台阶高高低低，两侧墙壁上点缀着盛开的天竺葵，猫在阴影里打盹。走着走着，可能就闯入了一个只有几平米的小广场，那里有一口古老的井，或是一个被遗忘的小神龛。在这里，“生活”本身就是最核心的景点，它不急不躁，邀请你放下行程表，跟着它的脉搏一起跳动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博萨`} />
                <InfoRow label="英文名称" value={`Bosa`} />
                <InfoRow label="正式名称" value={`Bosa`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`撒丁岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`撒丁岛西部保存最完好的中世纪古镇之一，曾是马洛拉斯司法管辖区的首府。`} />
                <InfoRow label="建筑特色" value={`色彩斑斓的房屋如调色盘般从山脚蔓延至山顶城堡，由古老的石拱桥和蜿蜒的阶梯小巷串联。`} />
                <InfoRow label="建筑风格" value={`以中世纪和文艺复兴时期建筑为基底，外墙被涂以撒丁岛特色的明媚色彩，呈现出独特的地中海浪漫主义风格。`} />
                <InfoRow label="文化价值" value={`一座活着的“慢城”，完美封存了撒丁岛传统渔业生活、金匠工艺与葡萄酒文化的节奏与灵魂。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博萨老城区全天开放。核心景点马洛拉斯城堡开放时间一般为夏季（4月至9月）9:00-19:00，冬季（10月至3月）9:00-17:00；城堡内的马尔西亚诺博物馆开放时间可能更短，通常为10:00-13:00及15:00-日落前，周一常闭馆。建议行前在撒丁岛旅游局官网核实具体时间。`} />
              <InfoRow label="门票价格" value={`进入博萨老城区免费。马洛拉斯城堡门票约为5欧元，包含马尔西亚诺博物馆。优惠票（学生、65岁以上老人等）约为3欧元。特定节假日或文化之夜等活动期间可能免费开放。`} />
              <InfoRow label="地址" value={`Via del Castello, 08013 Bosa OR, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是阿尔盖罗的费尔蒂利亚机场，距离约40公里。从机场可乘坐出租车前往博萨，车程约50分钟，费用较高。更经济的方式是搭乘机场巴士到阿尔盖罗火车站或巴士站，换乘前往博萨的ARST巴士，总耗时约1.5-2小时，巴士班次有限，务必提前查好时刻表。若从卡利亚里自驾前往，沿SS131公路转SS129bis，车程约2小时，这是最灵活便捷的方式，能让你自由探索沿途海岸线。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`博萨的故事，要从那条河说起。泰莫河，这条撒丁岛西海岸唯一可通航的河流，早在公元前8世纪，就吸引了腓尼基人前来建立贸易点。他们看中了这里的河口良港和肥沃河谷。后来罗马人接手，但真正赋予博萨最初灵魂的，是公元11世纪左右到来的托斯卡纳马洛拉斯家族。这个家族可不是省油的灯，他们选择在塞尔沃山的制高点上，建造了那座以自己家族命名的城堡——马洛拉斯城堡。你站在今天的城堡废墟上往下看，依然能感受到那种强烈的战略意图：背靠群山，面朝大海与河谷，易守难攻，整个区域的生杀予夺，尽在掌控。城堡不仅是军事堡垒，也成了“马洛拉斯司法管辖区”的首府，统治着周边大片土地，博萨因此从一个小渔村，一跃成为区域的政治经济中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14世纪，阿拉贡王朝的势力笼罩了撒丁岛。马洛拉斯家族与新的统治者达成了协议，城堡被加固和扩建，我们今天看到的城堡主体轮廓，很多就源于那个时期。但阿拉贡人带来的不只是砖石，还有新的文化和经济模式。博萨凭借得天独厚的河流资源，制革业开始蓬勃发展。你能想象吗？中世纪时，河两岸曾经林立着超过一百家鞣皮工坊。工人们用橡树皮和河中的纯净水流处理皮革，然后运往整个地中海世界。这股产业繁荣带来了人口和财富，老城区开始向下蔓延，色彩鲜艳的房屋越建越多，形成了现在我们看到的如画景象。然而，任何繁荣都有代价，制革业也严重污染了清澈的泰莫河，这段“黑历史”直到近代工业转移后才慢慢被自然抚平。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到18世纪，博萨迎来了它建筑和艺术的“金色时代”。在萨伏伊王朝的统治下，小镇相对和平富裕。一批精美的巴洛克和文艺复兴风格建筑拔地而起，比如镇中心的主座教堂“圣母升天教堂”，其内部华丽的装饰就完成于这个时期。更值得一提的是河边那些贵族府邸，它们有着气派的石质立面和华丽的铁艺阳台，无声诉说着当年商贾家族的显赫。但博萨从未忘记它的根。与宏伟建筑并存的，是深入骨髓的渔民文化。每天清晨，渔船仍会出海，带回最新鲜的金枪鱼、沙丁鱼和海螯虾。女人们则在河边清洗捕捞鱿鱼用的传统陶罐，这种古老的手艺一直传承至今。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近现代，博萨像许多欧洲小镇一样，经历了年轻人外流、产业衰退的阵痛。但转折点或许发生在上世纪后半叶。一些富有远见的本地人和外来艺术家，发现了这里无与伦比的美丽与宁静。他们开始修复老房子，保留了那些震撼人心的色彩外墙。他们不是把这里打造成一个僵化的旅游区，而是小心翼翼地维护着原有的生活肌理。于是，博萨没有沦为明信片上的背景板，它成了一座被官方认证的“慢城”。这里的节奏，由教堂的钟声、渔船的归航和广场上咖啡杯的碰撞声来标记。它的历史，不仅写在城堡的残垣断壁和教堂的档案里，更写在每一个慢悠悠午后、每一扇敞开的彩色门扉之后。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的博萨一日，应该从清晨开始，以避开正午的酷热和午后的旅行团。建议早上八点半左右抵达，将车停在河北岸的免费停车场。首先直奔山顶的马洛拉斯城堡，这时光线柔和，攀登凉爽，还能独享俯瞰全镇的绝佳视野。下山后，正好是老城区慢慢苏醒的时候，可以沉浸式地探索迷宫般的小巷和主广场。午餐后，沿着泰莫河岸向南漫步，参观古老的金匠工坊和河滨建筑，感受水岸生活的惬意。傍晚时分，回到主广场，点一杯当地的马拉格米亚葡萄酒，看着夕阳给彩色房屋镀上金边，这才是博萨之魂的正确打开方式。整体耗时约8-9小时，节奏舒缓，重在体验而非赶路。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季撒丁岛阳光极为猛烈，务必携带帽子、太阳镜和充足防晒霜，并随身带够饮用水，小巷中阴凉处不多。镇上一些餐馆可能针对游客有“旅游菜单”，价格偏高，建议避开河边最显眼的位置，往小巷深处找那些坐满本地人的 trattoria。参观教堂和进入居民区附近的小巷时，请保持安静并着装得体（避免过于暴露的背心或短裤）。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在清晨第一批登上马洛拉斯城堡的塔楼，让整个彩色河谷在朝阳中只为你一个人醒来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后山的蜿蜒小径下山，让自己迷失在萨·皮奥塔区那些被九重葛淹没的寂静小巷里，偶遇一扇钴蓝色的门或一个种满柠檬树的秘密庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣母升天教堂里找个角落静静坐下，不为看华丽的祭坛，只为感受从高侧窗洒下的光束中飞舞的微尘和那份隔绝尘嚣的清凉静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到连接老区与河岸的古老拱门“阿尔库·马佐洛”，穿过它时摸一摸被无数代人肩膀磨亮的石壁，仿佛完成一次从中世纪到现代的时光穿越。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着泰莫河左岸的“里帕”漫步，仔细观察河面上那些色彩同样鲜艳的“穆西奥”平底船倒影，听听船主们用撒丁语交谈的浑厚嗓音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进河畔一家不起眼的工坊，看老金匠如何用近乎失传的“金银丝细工”技法，将细如发丝的金线变成一件精美绝伦的撒丁岛传统首饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时务必坐在皮亚扎·科斯坦蒂诺的露天咖啡馆，点一杯当地产的甜型“马拉格米亚”葡萄酒，看城堡的灯光一盏盏亮起，像给山丘戴上了一顶钻石王冠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后不要急着离开，再回到蓬特维奇奥老石桥上，在星空下听河水奔流入海的声音，感受这座小镇从白日喧闹中沉淀下来的、深邃的宁静。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，阳光斜射，用广角镜头将蜿蜒的泰莫河与层叠的彩色房屋全部收入镜中，等待一艘“穆西奥”小船划过河心成为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`河对岸的倒影之镜`}</h4>
                  <p className="text-sm text-gray-700">{`从蓬特维奇奥老桥南侧走下河滩，在上午十点前水面平静无风时拍摄，可以获得城堡与彩屋在碧绿河水中的完美对称倒影，构图极具梦幻感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`萨·皮奥塔区小巷纵深`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，反而适合在狭窄小巷拍摄，利用两侧高墙形成的天然“光廊”，捕捉阳光照在彩色墙壁和石板路上形成的强烈明暗对比与几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老桥上的生活长卷`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，站在老桥中央，用中焦段镜头对准北岸的房屋和阳台，捕捉当地人在窗前浇花、晾衣、聊天的生动瞬间，让照片充满故事性和生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从“死亡之阶”仰拍城堡`}</h4>
                  <p className="text-sm text-gray-700">{`位于老城西侧的一条陡峭阶梯底部，在下午侧光环境下仰拍，能拍到城堡废墟以蓝天为背景的雄伟孤寂感，石阶本身也充满了沧桑的线条美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`博萨居民以他们的家园为荣，但也重视隐私。拍摄居民和他们的住所时，请务必保持尊重距离，最好先微笑示意或征得同意。金色时刻（日出日落前后）是拍摄色彩和氛围的绝对王牌，但不要忽视正午时分建筑物形成的强烈阴影所带来的戏剧性构图机会。记得给相机留出空间，拍摄一些细节：门上的铁艺、墙皮的剥落、窗台的花盆，这些才是博萨真正的纹理。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔色彩之家`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住老城一栋18世纪的彩色联排屋，房东可能就住在楼上，早晨会为你准备好一壶浓咖啡和自家做的“塞达斯”面包，在临河的阳台上开启一天。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡脚下的石屋民宿`}</h4>
                  <p className="text-sm text-green-800">{`由山腰上古老的牧羊人石屋“斯泰兹”精心改造而成，拥有厚实的墙壁带来的天然凉爽和私密的小露台，夜晚能听到最纯粹的虫鸣与风声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`精品酒店“宫殿体验”`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻于河边一栋修复的19世纪贵族宫殿，房间挑高极高，保留着原始壁画和琉璃吊灯，但浴室却配备了最现代化的设施，体验时空交错的美妙。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外农庄的静谧`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，不妨选择距离小镇几分钟车程的乡村农庄“阿格里图里斯莫”，住在橄榄园与葡萄园之间，享受泳池、家庭晚餐和绝对的星空静谧。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多为历史建筑，楼梯可能陡峭且没有电梯，预订时需注意。夏季（7-8月）是绝对旺季，务必提前数月预订。博萨治安非常好，夜晚独自在老城漫步也很安全。选择城外住宿意味着需要交通工具，但能获得更地道的撒丁乡村体验和更超值的价格。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博萨许久，我脑海里最清晰的，不是某一张明信片般的风景，而是一种混合的感觉：是午后阳光晒在古老石阶上的温度，是河风带来的那股微咸又带着花香的气息，是当地老咖啡馆里浓缩咖啡勺碰击杯壁的清脆声响。博萨教给我的，不是关于某个历史事件的宏大叙事，而是一种关于“如何生活”的细小而坚定的哲学。在这个一切都被加速的世界里，它固执地保持着一种古老的节奏——一种由潮汐、季节和社区关系决定的节奏。这里的色彩不是讨好游客的伪装，而是居民热爱自己家园、并愿意为之精心装扮的天然流露。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被精心包装、节奏急促的景点清单，请一定来博萨住上几天。它或许不会用惊世骇俗的奇观震撼你，但它会像一位温和的老朋友，用蜿蜒的小巷、温柔的河水和永不匆忙的日常，慢慢浸润你。你会发现自己开始注意到光影的移动，开始享受一杯咖啡的完整时间，开始理解为什么“慢”本身，就是一种至高无上的奢侈和力量。博萨，这座彩色河谷里的小城，它守护的不仅仅是一段中世纪的历史，更是一种在当下愈发珍贵的生活可能性。这，正是深度旅行者所追寻的、能安放灵魂的远方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ascoli-piceno-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯科利皮切诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ascoli Piceno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ancient-city-amelia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿梅利亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Amelia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
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
