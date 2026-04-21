import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希腊隐秘岛屿 Secret Greek Islands｜神殿遗风与隐秘海湾 - 寻访爱琴海失落的宁静',
  description: '第一眼看到它，不是在明信片上，而是在一艘慢悠悠的渡轮甲板上。清晨六点，爱琴海的风带着咸味和一丝凉意，前方海平线上缓缓升起一团白色的、像是砂糖堆砌成的山丘。那不是山，是一个岛屿。阳光刚刚划过山顶，给那些密密麻麻的白色方块房子镀上金边，而背光处仍是深深的、宁静的蓝色。船越来越近，你开始分辨出教堂的蓝色圆',
}

export default function SecretGreekIslandsTemplesCovesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '基克拉泽斯群岛与爱琴海', href: '/destinations/europe' },
            { label: '希腊隐秘岛屿', href: '/attractions/secret-greek-islands-temples-coves' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`希腊隐秘岛屿・The Secret Islands of Greece・希腊・基克拉泽斯群岛与爱琴海`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到它，不是在明信片上，而是在一艘慢悠悠的渡轮甲板上。清晨六点，爱琴海的风带着咸味和一丝凉意，前方海平线上缓缓升起一团白色的、像是砂糖堆砌成的山丘。那不是山，是一个岛屿。阳光刚刚划过山顶，给那些密密麻麻的白色方块房子镀上金边，而背光处仍是深深的、宁静的蓝色。船越来越近，你开始分辨出教堂的蓝色圆顶，像一颗颗宝石嵌在雪白画布上。空气中飘来一股混合的气味：干燥的百里香、被烈日烤热的岩石、还有从岛上厨房飘出的淡淡咖啡香和烤面包味。你忽然明白，你不是来到一个景点，你是闯入了一种持续了千年的、缓慢而深刻的呼吸节奏里。
这里的核心魅力，在于那种无处不在的“层叠感”。你在弯弯曲曲、只有毛驴宽度的白色小巷里迷路，脚下是光滑的鹅卵石，墙壁刷得雪白，九重葛的紫色花朵瀑布般倾泻而下。一个转角，你可能撞见一家飘着希腊音乐的小酒馆，老人们在玩西洋双陆棋。再走十分钟，爬上一段无人的山坡，眼前豁然开朗：几根巨大的、泛着蜜色光泽的多立克柱石，沉默地伫立在蓝天与荒草之间，那是公元前6世纪的神殿遗迹，俯瞰着如今同样碧蓝如宝石的海湾。历史在这里不是博物馆里的标本，它就是风，是光，是你脚下的一粒沙子。当地人对此习以为常，他们的生活与这些废墟和谐共生——在神殿的阴影下放羊，在古剧场遗址旁经营家庭旅馆。
最打动人的，是那一个个需要小小探险才能抵达的隐秘海湾。它们通常没有名字，或者只有一个本地人才知道的昵称。你需要沿着悬崖边尘土飞扬的小径徒步，或者租一条小艇自己探寻。当你终于到达，会发现一片被白色悬崖或红色火山岩环抱的、新月形的沙滩。海水不是一种蓝，而是从蒂芙尼蓝到翡翠绿再到深紫色的渐变，清澈得能看到水下几米处的鹅卵石。这里可能只有你，和几个晒成古铜色的本地人。除了海浪舔舐沙滩的沙沙声、蝉鸣、以及你自己心跳平复下来的声音，万籁俱寂。跳进冰凉透骨的海水，仿佛洗去的不仅是暑热，还有所有来自现代世界的喧嚣与焦虑。这种极致的宁静与古老文明的重量感交织在一起，构成了希腊隐秘岛屿无法复制的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到它，不是在明信片上，而是在一艘慢悠悠的渡轮甲板上。清晨六点，爱琴海的风带着咸味和一丝凉意，前方海平线上缓缓升起一团白色的、像是砂糖堆砌成的山丘。那不是山，是一个岛屿。阳光刚刚划过山顶，给那些密密麻麻的白色方块房子镀上金边，而背光处仍是深深的、宁静的蓝色。船越来越近，你开始分辨出教堂的蓝色圆顶，像一颗颗宝石嵌在雪白画布上。空气中飘来一股混合的气味：干燥的百里香、被烈日烤热的岩石、还有从岛上厨房飘出的淡淡咖啡香和烤面包味。你忽然明白，你不是来到一个景点，你是闯入了一种持续了千年的、缓慢而深刻的呼吸节奏里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的核心魅力，在于那种无处不在的“层叠感”。你在弯弯曲曲、只有毛驴宽度的白色小巷里迷路，脚下是光滑的鹅卵石，墙壁刷得雪白，九重葛的紫色花朵瀑布般倾泻而下。一个转角，你可能撞见一家飘着希腊音乐的小酒馆，老人们在玩西洋双陆棋。再走十分钟，爬上一段无人的山坡，眼前豁然开朗：几根巨大的、泛着蜜色光泽的多立克柱石，沉默地伫立在蓝天与荒草之间，那是公元前6世纪的神殿遗迹，俯瞰着如今同样碧蓝如宝石的海湾。历史在这里不是博物馆里的标本，它就是风，是光，是你脚下的一粒沙子。当地人对此习以为常，他们的生活与这些废墟和谐共生——在神殿的阴影下放羊，在古剧场遗址旁经营家庭旅馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，是那一个个需要小小探险才能抵达的隐秘海湾。它们通常没有名字，或者只有一个本地人才知道的昵称。你需要沿着悬崖边尘土飞扬的小径徒步，或者租一条小艇自己探寻。当你终于到达，会发现一片被白色悬崖或红色火山岩环抱的、新月形的沙滩。海水不是一种蓝，而是从蒂芙尼蓝到翡翠绿再到深紫色的渐变，清澈得能看到水下几米处的鹅卵石。这里可能只有你，和几个晒成古铜色的本地人。除了海浪舔舐沙滩的沙沙声、蝉鸣、以及你自己心跳平复下来的声音，万籁俱寂。跳进冰凉透骨的海水，仿佛洗去的不仅是暑热，还有所有来自现代世界的喧嚣与焦虑。这种极致的宁静与古老文明的重量感交织在一起，构成了希腊隐秘岛屿无法复制的灵魂。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`希腊隐秘岛屿`} />
                <InfoRow label="英文名称" value={`The Secret Islands of Greece`} />
                <InfoRow label="正式名称" value={`The Secret Islands of Greece`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`基克拉泽斯群岛与爱琴海`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西方文明的摇篮，古希腊神祇信仰、哲学与民主思想在星罗棋布的岛屿间萌芽与回荡。`} />
                <InfoRow label="建筑特色" value={`极致的纯净主义：立方体白房子、蓝色穹顶教堂与古老大理石神殿废墟在炽烈阳光下构成永恒的几何画卷。`} />
                <InfoRow label="建筑风格" value={`基克拉泽斯风格（极简的白色立体主义）与古典希腊/罗马遗迹的完美层叠。`} />
                <InfoRow label="文化价值" value={`一种古老而鲜活的地中海生活哲学的保存地，将神话时代的崇高与日常生活的恬淡无缝融合。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全年开放，但最佳体验时间为每年4月底至10月初。绝大多数渡轮服务、酒店、餐厅及小型考古遗址在此期间运营。冬季（11月至次年3月）许多岛屿服务关闭，渡轮班次锐减，但体验极度宁静。具体神殿遗址（如提洛岛）开放时间通常为夏季8:00-20:00，冬季缩短至8:30-15:00，周一可能闭馆。`} />
              <InfoRow label="门票价格" value={`费用因岛而异。大多数岛屿免费进入。主要考古遗址如提洛岛门票约12欧元。许多隐秘海湾和村庄无需门票。渡轮票价视航程远近，从20欧元到80欧元不等。学生及欧盟青年卡持有者在考古遗址享有折扣。`} />
              <InfoRow label="地址" value={`希腊爱琴海与爱奥尼亚海星罗棋布的岛屿，核心区域位于基克拉泽斯群岛。邮件可寄至：Central Post Office, Syros Island, 84100, Greece.`} />
              <InfoRow label="交通方式" value={`从雅典国际机场（ATH）出发，前往比雷埃夫斯港口（乘地铁约1小时）。从这里搭乘渡轮是灵魂之旅的开始。前往热门中转岛（如米科诺斯、圣托里尼、纳克索斯）的快船约2-5小时，班次频繁；前往更隐秘岛屿（如锡夫诺斯、福莱甘兹罗斯、小基克拉泽斯群岛）的慢船可能需要4-8小时，班次较少（可能每天仅1-2班）。强烈建议提前在Ferryhopper或当地旅行社网站预订船票。上岛后，租一辆小型摩托车或四轮摩托车是探索隐秘角落的最佳方式，本地巴士网络有限但能连接主要村镇。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲这些岛屿的故事，得从神话和石头开始。早在公元前三千年，基克拉泽斯文明就在这里留下了神秘的大理石雕像，那些线条简洁到极致的人形，仿佛本身就诞生于爱琴海强烈的光影。但真正让这些岛屿登上历史中心舞台的，是古希腊人对神祇的敬畏。想象一下，在提洛岛，这个传说中太阳神阿波罗和他的孪生姐姐月亮女神阿耳忒弥斯诞生的岩石小岛，曾经是整个爱琴海世界的宗教与商业中心。它本身被认为是神圣的，禁止生死（孕妇和临终者必须离岛）。鼎盛时期，岛上神庙林立，港口商船云集，是一个国际化的朝圣圣地。你能在废墟中看到来自埃及、叙利亚、意大利的痕迹。然而，荣光总是易逝。随着罗马帝国的兴趣转移和海盗的肆虐，提洛岛逐渐被遗弃，成为今天我们所见的、震撼人心的“鬼城”遗址，只有野猫和蜥蜴在精美的马赛克地板和破碎的柱廊间穿行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的故事则更加纷乱而浪漫。威尼斯人、热那亚人、奥斯曼土耳其人相继到来，在这片海上争抢。你会在许多岛屿的山顶，看到巍峨的“城堡之城”（比如米洛斯岛的普拉卡）。那不是童话里的城堡，而是居民为了躲避海盗袭击而建造的防御性聚居地。狭窄曲折的巷道像迷宫，房屋外墙相连，共同构成一道防御墙。走进这些至今仍有人居住的城堡村，你会触摸到粗糙的石头墙壁，听到从紧闭的门后传来的家庭谈话声，那是数百年不安与坚韧生活留下的基因。在奥斯曼统治时期，许多岛屿享有自治，独特的海岛文化得以保存和发展，例如复调音乐和造船工艺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代的岛屿生活是艰苦而质朴的。土地贫瘠，人们依靠渔业、种植少量橄榄和葡萄、以及海绵捕捞为生。许多壮观的石砌梯田，如今已被部分遗弃，静静地诉说着人与严酷自然抗争的努力。二十世纪中后期，旅游业的浪潮开始拍打这些海岸，像米科诺斯和圣托里尼迅速成为国际明星。但幸运的是，爱琴海足够大，岛屿足够多。当人群涌向那几个热门名字时，真正的旅行者开始了他们的“逃逸”——驶向更安静、更原始、更真实的邻居。这些岛屿的居民也面临着选择：是全面拥抱全球化，还是小心翼翼地守护自己的节奏？你看到的是他们聪明的平衡：老奶奶依然在清晨清扫门前的台阶，年轻人用传统石料翻新老屋做民宿，渔民下午卖完鱼就在码头咖啡馆闲聊。旅游是生计，但不是生活的全部。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，你今天踏足的这些隐秘岛屿，是层层历史沉积的结果。神话的崇高、古典的理性、中世纪的防御、近代的艰辛与现代的探索，全部压缩在这片阳光灿烂的蓝白世界里。每一座废弃的风车、每一个海边的小教堂、每一段坍塌的神殿围墙，都不是孤立的风景，而是一个漫长故事的一个章节。读懂这些岛屿，需要你放慢脚步，用皮肤去感受阳光与风，用心去倾听石头与海浪的沉默诉说。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的深度体验至少需要五到七天。不要试图跳岛太多，精选两到三个气质各异的岛屿深度沉浸是上策。建议从雅典乘早班船抵达第一个岛屿（如文化底蕴深厚的纳克索斯），用一两天适应节奏、探索主镇和内陆山村。然后乘船前往一个更小、更宁静的岛屿（如以陶器闻名的锡夫诺斯，或以绝壁海滩著称的福莱甘兹罗斯），这里才是探寻隐秘海湾和纯粹乡村生活的核心。最后，可以安排一天前往一个无居民或极小众的岛屿（如小基克拉泽斯群岛的某个）进行荒原徒步与独享海滩的终极探险。每天的行动节奏应遵循岛屿的生理时钟：清晨和傍晚活动，午后烈日下则留给午睡、阅读或泡在清凉的海水里。这样安排，你才能从游客转变为临时岛民，感受到时间真正的质感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对避免在七八月的绝对旺季（尤其是八月中的圣母升天节期间）前往，届时岛屿会变得拥挤昂贵；五月末六月初和九月是最佳窗口。
警惕过于热情的出租司机或旅馆拉客者，他们可能会把你带到偏僻且质次价高的住处；提前在网上做好基本住宿筛选。
穿一双绝对舒适防滑的鞋，岛屿小路多由光滑的鹅卵石或粗糙的岩石构成，高跟鞋和普通凉鞋将是噩梦。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一天上午抵达后，别急着去酒店，先拖着行李箱在老港口边的咖啡馆坐下，点一杯冰弗雷普（希腊冰咖啡），看着渡轮装卸货物和人群慢慢散开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`放下行李后立即迷失在城堡区（Kastro）蛛网般的白色小巷里，不设目的地，唯一的原则是永远选择上坡的小路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，徒步或骑小摩托前往岛上面朝西边的古老风车或威尼斯城堡遗迹，看夕阳把白色的房屋染成蜜糖和玫瑰色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家不在旅游手册上、但坐满了当地人的小酒馆（Taverna），让老板娘为你搭配当天的渔获和自家菜园的蔬菜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用一个完整的上午，带足水和帽子，去探访一座内陆的山村，看老人们坐在广场的梧桐树下，时间仿佛凝固。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一条小艇或参加本地人的小船游，去地图上找不到名字的、只有一片鹅卵石和清澈海水的秘密海湾午餐和浮潜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加一次岛屿特色的短时体验，比如在锡夫诺斯跟陶匠学做陶器，或在伊奥斯岛参加一场传统的希腊之夜舞蹈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离岛前的最后一个早晨，起个大早去空无一人的鹅卵石海滩晨泳，像完成一个与这片海告别的私人仪式。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`风车剪影与小镇全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，在锡夫诺斯的阿波罗尼亚村（Artemonas）高地，将前景的白色风车与远处层层叠叠、铺展至海面的白房子一同摄入镜框，使用长焦压缩空间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`白色巷道的戏剧光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，寻找一条狭窄的、两侧高墙的白色小巷，等待一个当地人或一只猫走过，捕捉阳光在墙壁上形成的强烈明暗对比和生动的影子。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`隐秘海湾的航拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果使用无人机，清晨七点左右在福莱甘兹罗斯的“餐桌湾”（Ammoudi Beach）起飞，从高空俯拍被 towering 悬崖环抱的细小沙滩与层次分明的碧绿海水。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`废墟与生命的对照`}</h4>
                  <p className="text-sm text-gray-700">{`在纳克索斯的 Portara（巨大石门框）遗址，于日落后蓝调时刻拍摄，将古老的大理石门框作为画框，对准对岸灯火初上的现代城镇，形成时空对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂穹顶与爱琴海蓝`}</h4>
                  <p className="text-sm text-gray-700">{`在米洛斯岛的海边教堂（如 Sarakiniko 附近），放低机位，以经典的蓝色教堂圆顶为主体，背后是无限延展的宝蓝色大海，构图力求简洁纯净。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地人和隐私，拍摄居民特别是老人儿童前，请务必先用微笑和眼神征得同意，他们不是风景的摆设。`}</li>
                <li>• {`许多教堂内部（尤其有古老壁画的小教堂）和正在进行的宗教仪式严禁拍照，入内请观察标志或询问。`}</li>
                <li>• {`爱琴海的阳光极其强烈，建议携带偏振镜（CPL）来消除海面反光并让天空的蓝色更深邃，同时保护高光不过曝。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典岛民体验`}</h4>
                  <p className="text-sm text-blue-800">{`租住港口山坡上一栋由船长老宅改造的白色石屋，带一个种满天竺葵的小露台，每天在邻居家的厨房声响和海港轻柔的晨间广播中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐秘山村隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择内陆传统山村（如纳克索斯的 Apiranthos）由石头农舍修复的精品民宿，享受绝对的宁静，夜晚只有星空和风声，白天跟随房东去他的橄榄园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感的海滨静谧`}</h4>
                  <p className="text-sm text-yellow-800">{`在非热门岛屿（如帕罗斯的 Naoussa 周边）找一家拥有极简主义设计、直接面对私人鹅卵石小海湾的精品酒店，每一步都踩在美学点上。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`悬崖上的野性浪漫`}</h4>
                  <p className="text-sm text-purple-800">{`在福莱甘兹罗斯或米洛斯这样的地质奇观岛，入住悬崖洞穴屋风格的酒店，房间从岩石中开凿而出，私人露台仿佛悬浮在爱琴海蔚蓝之上。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多优质的家庭式民宿和小型精品酒店不在大型预订平台上，通过岛屿的本地旅游网站或Instagram直接联系预订，常能发现宝藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住宿时，仔细考虑位置：港口边方便但可能吵闹；内陆或偏远海滩极度安静但需依赖交通工具；山顶城堡区景观无敌但需要体力爬坡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（6-9月）住宿务必提前至少2-3个月预订，尤其是周末；淡季则可以选择抵达后现场看房议价，常有惊喜折扣。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开的时候，你的皮肤晒成了小麦色，鞋底沾着白色的尘土和细沙，灵魂却好像被那蔚蓝的海水洗涤过，变得轻盈而清晰。你会怀念的，可能不是某一片具体的神殿废墟或海湾，而是那种完整的、身心同步的节奏感。在岛上，时间有了不同的度量衡：它是一杯慢慢变温的咖啡，是一次从烈日下跳入海中的畅快，是傍晚时分弥漫整个小镇的、由烤肉和百里香组成的香气。现代世界催逼我们的“效率”和“产出”，在这里失去了所有意义。你学会的，只是“存在”——存在于当下的一片光影里，存在于一次偶然的对话中，存在于面对千年废墟时内心涌起的、无声的敬畏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个越来越同质化、越来越喧嚣的世界里，希腊的这些隐秘岛屿像是一个温柔的例外，一个存续着古老生活智慧的避难所。它们告诉我们，美可以如此简单——蓝与白，光与影，石与海。文明可以如此深沉而静默，不与自然争锋，而是与之共生。每一位热爱深度游的旅人都应该来此，不是为了收集打卡地，而是为了体验一种“慢下来”的可能性，为了让爱琴海的风，吹散心头的积尘。当你回到原本的生活，你会发现，那片海蓝，那份宁静，已经在你心里留下了一个永远的、可以随时回去的夏天。这，或许就是旅行能给予我们的，最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nafpaktos-venetian-harbor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳夫帕克托斯（勒班陀）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nafpaktos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corfu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corfu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kythira-island-castle-waterfalls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    基
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">基西拉岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kythira</p>
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
