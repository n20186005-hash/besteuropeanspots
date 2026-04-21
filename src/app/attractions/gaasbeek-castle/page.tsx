import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '加斯贝克城堡 Gaasbeek Castle｜沉浸于19世纪浪漫主义杰作的梦幻庄园 - 最佳欧洲景点',
  description: '想象一下，你穿过一片沙沙作响的古老山毛榉林，阳光透过枝叶，在路上洒下晃动的光斑。然后，道路一转，它就在那儿——不是冰冷威严的军事堡垒，而像一本立体童话书的封面突然立在眼前。加斯贝克城堡慵懒地卧在山坡上，几座高低错落、戴着尖顶“帽子”的塔楼俏皮地指向蓝天，米色的石墙被常春藤温柔地攀附着，倒映在前方宁静...',
}

export default function GaasbeekCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '加斯贝克城堡', href: '/attractions/gaasbeek-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`加斯贝克城堡・Gaasbeek Castle・比利时・弗拉芒布拉班特省（加斯贝克村）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你穿过一片沙沙作响的古老山毛榉林，阳光透过枝叶，在路上洒下晃动的光斑。然后，道路一转，它就在那儿——不是冰冷威严的军事堡垒，而像一本立体童话书的封面突然立在眼前。加斯贝克城堡慵懒地卧在山坡上，几座高低错落、戴着尖顶“帽子”的塔楼俏皮地指向蓝天，米色的石墙被常春藤温柔地攀附着，倒映在前方宁静的池塘里。那一刻，你闻到的不是历史的尘土味，而是修剪整齐的草坪混合着远处玫瑰园的甜香，听到的是风吹过树梢的哗哗声，间或夹杂着几声鸟鸣。它没有摆出拒人千里的架势，反而像一位在自家花园里打盹儿后刚醒来的老绅士，带着些许梦幻的倦意。
这里最妙的是，它并非与世隔绝的博物馆。你会看到推着婴儿车的年轻父母在巨大的草坪上野餐，慢跑者沿着环绕池塘的小径擦肩而过，老先生坐在长椅上安静地读报。城堡巨大的公园是附近社区的后花园，充满了生活的烟火气。这种松弛感，让你瞬间明白，这座城堡的灵魂不在于展示权力，而在于提供一种美的、沉思的、与自然共处的生活方式。它的核心魅力，是一种精心设计的“不完美”之美，是19世纪的堡主故意让建筑师把塔楼建得不对称，把窗户开得大小不一，甚至刻意保留一些“废墟感”，只为营造那种令人心驰神往的、如画般的浪漫意境。
走进城堡内部，这种感觉会变得更加强烈。光线透过彩绘玻璃窗，在布满雕刻的橡木楼梯上投下五彩斑斓的影子。房间里堆满了古董家具、挂毯、油画和稀奇古怪的收藏品，摆放得看似随意，却处处充满叙事性。你会感觉仿佛闯入了某位极具品味又略带古怪的收藏家依然生活着的家，空气中似乎还残留着旧日沙龙里关于艺术与哲学的低声讨论，以及雪茄和旧书的混合气味。它不是要告诉你一段精确的历史，而是邀请你沉浸在一场持续了数百年的、关于美与梦想的白日梦之中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你穿过一片沙沙作响的古老山毛榉林，阳光透过枝叶，在路上洒下晃动的光斑。然后，道路一转，它就在那儿——不是冰冷威严的军事堡垒，而像一本立体童话书的封面突然立在眼前。加斯贝克城堡慵懒地卧在山坡上，几座高低错落、戴着尖顶“帽子”的塔楼俏皮地指向蓝天，米色的石墙被常春藤温柔地攀附着，倒映在前方宁静的池塘里。那一刻，你闻到的不是历史的尘土味，而是修剪整齐的草坪混合着远处玫瑰园的甜香，听到的是风吹过树梢的哗哗声，间或夹杂着几声鸟鸣。它没有摆出拒人千里的架势，反而像一位在自家花园里打盹儿后刚醒来的老绅士，带着些许梦幻的倦意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最妙的是，它并非与世隔绝的博物馆。你会看到推着婴儿车的年轻父母在巨大的草坪上野餐，慢跑者沿着环绕池塘的小径擦肩而过，老先生坐在长椅上安静地读报。城堡巨大的公园是附近社区的后花园，充满了生活的烟火气。这种松弛感，让你瞬间明白，这座城堡的灵魂不在于展示权力，而在于提供一种美的、沉思的、与自然共处的生活方式。它的核心魅力，是一种精心设计的“不完美”之美，是19世纪的堡主故意让建筑师把塔楼建得不对称，把窗户开得大小不一，甚至刻意保留一些“废墟感”，只为营造那种令人心驰神往的、如画般的浪漫意境。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡内部，这种感觉会变得更加强烈。光线透过彩绘玻璃窗，在布满雕刻的橡木楼梯上投下五彩斑斓的影子。房间里堆满了古董家具、挂毯、油画和稀奇古怪的收藏品，摆放得看似随意，却处处充满叙事性。你会感觉仿佛闯入了某位极具品味又略带古怪的收藏家依然生活着的家，空气中似乎还残留着旧日沙龙里关于艺术与哲学的低声讨论，以及雪茄和旧书的混合气味。它不是要告诉你一段精确的历史，而是邀请你沉浸在一场持续了数百年的、关于美与梦想的白日梦之中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`加斯贝克城堡`} />
                <InfoRow label="英文名称" value={`Gaasbeek Castle`} />
                <InfoRow label="正式名称" value={`Gaasbeek Castle`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`弗拉芒布拉班特省（加斯贝克村）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从14世纪军事堡垒蜕变为19世纪浪漫主义艺术与生活方式完美象征的活化石。`} />
                <InfoRow label="建筑特色" value={`不对称的塔楼、童话般的轮廓与精心营造的“如画”景观和谐共生，内部充满新哥特式与文艺复兴风格混合的戏剧性装饰。`} />
                <InfoRow label="建筑风格" value={`19世纪浪漫主义复兴风格，融合了新哥特式、新文艺复兴式元素及对中世纪风貌的浪漫化重构。`} />
                <InfoRow label="文化价值" value={`不仅是建筑遗产，更是一座承载了19世纪欧洲贵族知识分子对历史、艺术与田园生活理想化追求的“情感容器”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体建筑：通常为每年4月至10月的周二至周日，以及部分公共假日开放，具体时间为上午10点至下午6点（最后入场时间为下午5点）。城堡内部房间的参观通常仅在特定时间段由导览带领进行，需提前查询当日导览时间表。广阔的城堡公园与花园全年免费向公众开放，日出至日落均可进入。冬季（11月至3月）城堡内部大多关闭维护，但公园依旧开放。请注意，开放时间可能因临时展览或私人活动调整，出发前务必在其官网核实最新日程。`} />
              <InfoRow label="门票价格" value={`城堡公园与花园：免费入场。
城堡内部参观（含临时展览及导览）：成人票约12欧元，65岁以上长者、学生及团体票约10欧元，19-26岁青年票约8欧元，18岁以下青少年及儿童免费。部分特殊主题导览或夜间活动票价可能上浮。持有比利时“博物馆通票”可享受折扣或免费入场。门票建议通过官网在线预订，尤其在周末和夏季旺季，以确保名额。`} />
              <InfoRow label="地址" value={`Kasteelstraat 40, 1750 Gaasbeek, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔市中心出发最为便捷。首先乘坐地铁5号线或火车至布鲁塞尔南站（Brussels-South/Midi）。从火车站外的公交枢纽，搭乘编号为142或144的De Lijn巴士，方向为“Gaasbeek”或“Lennik”。在“Gaasbeek Kasteel”站下车，车程约40-50分钟。巴士班次在工作日较为频繁（约每30分钟一班），周末及节假日班次会减少，务必提前查询时刻表。自驾是最灵活的方式，从布鲁塞尔市中心驱车约25分钟即可抵达，城堡设有大型免费停车场。骑自行车也是当地人的热门选择，可从布鲁塞尔沿规划良好的乡间自行车道骑行至此，一路风景如画，约需1小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`加斯贝克的故事始于一个不那么浪漫的开端。14世纪初，这里矗立起的是一座坚固的方形堡垒，属于布拉班特公爵，目的是为了威慑和保护布鲁塞尔西南边境。在随后的几个世纪里，它像许多低地国家的城堡一样，在政治的漩涡中辗转易手，经历过围困、破坏与重建。它的石墙上曾浸染过战争的硝烟，尤其是在16世纪，因与埃格蒙特伯爵（一位反抗西班牙统治的贵族领袖）的关联而遭到严重损毁。在很长一段时间里，它更像一个实用的农业庄园中心，而非优雅的居所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的魔法，发生在19世纪末。城堡迎来了一位梦幻般的主人：阿诺·德·维特伯爵。这位富有的艺术收藏家、美学思想家，深受当时席卷欧洲的浪漫主义运动影响。对他来说，中世纪不是一段黑暗的历史，而是一个充满英雄、骑士精神与崇高情感的黄金时代。他决定将加斯贝克城堡改造为这一理想的物质化身。他雇佣了才华横溢的建筑师夏尔·阿尔伯特，但给他的指令不是“修复”，而是“创作一首石头的浪漫诗篇”。于是，阿尔伯特大胆地拆除了部分18世纪的对称结构，增建了那座标志性的、高耸入云的八角形主塔，并精心设计了其他塔楼和城垛，刻意追求一种不对称的、仿佛历经几个世纪自然生长而成的视觉效果。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`德·维特伯爵的改造远不止于外壳。他将毕生收藏的珍宝——从中世纪和文艺复兴时期的雕塑、挂毯、彩色玻璃，到16、17世纪的佛拉芒大师画作——全部填充进这个梦幻的容器里。每个房间都被设计成一个特定的主题场景：骑士厅、哥特式客厅、文艺复兴画廊……他甚至是按照画面的构图来摆放家具和艺术品的，目的是让访客每走一步都像在观赏一幅幅活的油画。这里举办的文化沙龙，吸引了当时欧洲最前沿的诗人、音乐家和画家，城堡成为了一个创造美、讨论美、实践美的乌托邦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`德·维特伯爵于晚年做出了一个更为浪漫的决定：他没有子嗣，便将城堡连同所有收藏遗赠给了比利时国家。他的愿望是让这里永远作为一座“历史的、艺术的纪念地”向公众开放。此后，城堡经历了两次世界大战，幸运地躲过了重大破坏。20世纪下半叶的修复工作也恪守了伯爵的遗愿，重点在于维持那种独特的“居住感”和浪漫氛围，而非将其变成冰冷的展览馆。今天的临时展览也常常围绕“收藏”、“梦想居所”、“浪漫主义”等主题展开，与城堡的精神一脉相承。因此，漫步其中，你触摸到的不仅是古老的石头，更是一位19世纪理想主义者无比炽热而精致的精神世界。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排整整一天来沉浸于此。最好在平日上午早些时候（10点前）抵达，这时游客稀少，公园沐浴在柔和的晨光中，能体验到最宁静的城堡氛围。整体节奏宜慢不宜快，遵循“由外至内，由大到小”的原则。上午先花2-3小时探索广阔的公园和花园，让身心融入这片田园诗画；午后参加城堡内部的导览游（通常为1.5-2小时），在讲解中深入那个浪漫的梦境；导览结束后，若有时间可再次漫步至你最喜欢的公园角落，或在橘园咖啡馆回味一整天的感受。这样的安排能让你充分感受城堡作为“整体艺术品”的魅力，避免走马观花。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部参观强制要求跟随导览团（通常有荷语、法语或英语团），且容量有限，强烈建议提前在官网查看时间并预订。公园面积非常大，请务必穿着舒适耐走的鞋子。夏季晴天时公园内遮阴处有限，记得做好防晒并带上饮用水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场出发，先别急着奔向城堡，沿着林荫大道慢慢走，让那些姿态各异的古树和远处塔楼的惊鸿一瞥调动你的所有期待。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕到城堡前方的池塘对岸，从这个经典角度拍摄城堡与水中的倒影，看天鹅悠然划破镜面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员推开厚重的木门，在略显幽暗的门厅里让眼睛适应，然后被引向那座令人惊叹的、布满雕花和纹章的新哥特式大理石楼梯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“骑士厅”里抬头仰望巨大的木制穹顶和家族旗帜，想象这里曾举办的中世纪主题盛宴与化装舞会。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地穿过摆满异域奇珍的“珍品陈列室”，感受19世纪收藏家对世界的好奇与展示欲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入伯爵的私人书房，感受透过彩绘玻璃的柔和光线如何洒在古老的皮革书籍和写字台上，时间在这里仿佛静止。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出城堡后门，迷失在法式花园的几何树篱与英式风景园的蜿蜒小径之间，体验两种园林哲学的巧妙对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在公园边缘的橘园咖啡馆找一张露天座位，点一杯本地啤酒或咖啡，看着夕阳为城堡的塔楼镀上金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`池塘倒影全景位`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡南侧大池塘的东岸，利用上午的顺光，将城堡主体与其在水中的完美倒影一同纳入镜中，前景可带入几株芦苇或一朵睡莲增添生机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南侧露台花园视角`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡主建筑南门走出，站在露台上向下俯瞰，可以拍摄到城堡塔楼与下方规整的法式花园、远处起伏的英式草坪共同构成的层次分明的风景画，下午光线最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡西北侧林间小路`}</h4>
                  <p className="text-sm text-gray-700">{`沿公园西北侧的小径行走，会找到几个天然的“画框”，透过交错的树干和枝叶去拍摄城堡的局部塔楼，能拍出极具浪漫主义“如画”风格的森林秘境感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`螺旋楼梯光影`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡内部导览时，若被允许在楼梯区域短暂停留，请抓住机会拍摄螺旋楼梯本身的结构之美，利用窗户射入的光线塑造明暗对比，让人物成为剪影点缀其中。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部通常禁止使用闪光灯和三脚架（除非有特殊许可），请调高相机感光度或使用大光圈镜头。公园的“黄金时刻”（日出后和日落前一小时）光线极为迷人，能极大增强照片的氛围感。拍摄公园内的其他访客时，请保持礼貌并尊重他人隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`田园民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡附近村庄里由农舍改造的温馨民宿，主人会为你准备用本地食材制作的丰盛早餐，晚上能听见真正的田野虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计酒店体验`}</h4>
                  <p className="text-sm text-green-800">{`选择布鲁塞尔市中心一家将新艺术运动风格与现代设计融合的精品酒店，白天来城堡探秘，晚上享受都市的便捷与活力，形成有趣反差。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园隐居享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时入住佩特姆地区一座被森林环绕的18世纪贵族庄园酒店，享受绝对的静谧、米其林星级餐饮和管家服务，将浪漫体验延伸到住宿中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`布鲁塞尔广场旁的古典酒店`}</h4>
                  <p className="text-sm text-purple-800">{`下榻在大广场周边历史悠久的老牌酒店，推开窗就是中世纪街景，乘公交往返城堡十分方便，适合首次到访比利时想兼顾城市与乡野的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`加斯贝克村本身住宿选择非常有限，但周边弗拉芒布拉班特省的乡村散布着许多优质的民宿和精品酒店，提前预订是关键，尤其是在夏季和周末。该区域治安良好，民风友善，夜间独自在乡间小路上散步也倍感安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开加斯贝克城堡许久，那种感觉依然萦绕心头。它不像许多古迹那样，用宏大的规模或惊人的财富让你感到敬畏与疏离。恰恰相反，它用一种近乎私密的、邀请的姿态，让你走进一个被精心守护的梦。这个梦关于如何生活——不是如何奢华地生活，而是如何诗意地、充满情感地、与美朝夕相处地生活。德·维特伯爵用石头、玻璃、橡木和花园，构建了一个抵抗工业时代喧嚣与功利主义的象牙塔，或者说，一个巨大的、可供漫步的艺术装置。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、标准化和即时满足的快节奏世界里，加斯贝克的存在显得尤为珍贵和必要。它提醒我们，历史不仅仅是需要背诵的年代和事件，更可以是可供沉浸的情感与想象；美不仅仅存在于画廊的画框里，更可以渗透到居住的每一个角落，成为日常呼吸的一部分。每一位热爱深度游的旅人，都该来这里看看。不是为了收集又一个“著名景点”的打卡照，而是为了给自己一个机会，慢下来，做一场长达几个小时的、清醒而愉悦的白日梦。在这里，你会重新发现“浪漫”一词的原始重量——那是对内心情感的忠实，对理想世界的追寻，以及敢于用一生去营造一个梦的勇气。这，或许才是旅行能带给我们的、最深刻的馈赠。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/durbuy-old-town-worlds-smallest-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德尔比老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Durbuy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/durbuy-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪尔比</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Durbuy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veste-coburg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科堡要塞（弗兰肯的王冠）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veste Coburg</p>
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
