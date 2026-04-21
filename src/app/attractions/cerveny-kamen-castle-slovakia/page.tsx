import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '红石古堡 Červený Kameň Castle｜探秘喀尔巴阡山脉腹地的巨型地下酒窖与文艺复兴堡垒 - 最佳欧洲景点',
  description: '车子在喀尔巴阡山脉南麓的丘陵间蜿蜒，当那片砖红色屋顶的塔楼从墨绿色的森林海洋中浮现时，你会立刻明白它为何被称作“红石”。第一印象并非童话般的娇柔，而是一种沉稳的、落地生根的威严。空气里是松针、湿润泥土和远处草甸混合的清新气息，走近了，才能听到风穿过古老橡木窗棂的细微呜咽，以及你自己的脚步声在空旷庭院...',
}

export default function CervenyKamenCastleSlovakiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '红石古堡', href: '/attractions/cerveny-kamen-castle-slovakia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`红石古堡・Červený Kameň Castle・斯洛伐克・布拉迪斯拉发州，查斯特附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在喀尔巴阡山脉南麓的丘陵间蜿蜒，当那片砖红色屋顶的塔楼从墨绿色的森林海洋中浮现时，你会立刻明白它为何被称作“红石”。第一印象并非童话般的娇柔，而是一种沉稳的、落地生根的威严。空气里是松针、湿润泥土和远处草甸混合的清新气息，走近了，才能听到风穿过古老橡木窗棂的细微呜咽，以及你自己的脚步声在空旷庭院石板上的回响。
这座城堡最神奇的地方在于，它真正的核心不在你眼前，而在你脚下。当你跟随向导穿过一道不起眼的厚重木门，沿着陡峭的旋梯向下，进入那个由冰冷岩石构筑的、永恒如夜的巨大地下世界时，所有的感官都会瞬间重置。温度骤降，一股混合着陈年橡木、葡萄酒液和石头本身凉意的复杂气味包裹了你。手电的光束划过，照亮一排排需数人合抱的巨型酒桶，它们像沉默的巨兽，在无边无际的拱顶地下室中列队。这里静得能听到自己的心跳，以及不知从何处渗出的、规律的水滴声。据说，这里的酒窖网络长达数十公里，足以容纳成千上万桶酒。那一刻，你感受到的不是历史的尘埃，而是一种依然在缓慢呼吸、依然在酝酿着滋味的生命力量。
回到地面上，阳光显得格外奢侈。城堡的房间展示了另一个世界：绘有繁复壁画的天花板，来自东方的奢华地毯，精致却厚重的文艺复兴家具。你能想象到，几个世纪前的贵族们，正是在这些华美的厅堂里宴饮交际，而他们的财富与欢愉，其根基就深深埋藏在脚下那片阴凉而庞大的酒窖迷宫里。这种地上与地下的鲜明对比，奢华生活与实用仓储的并存，正是红石古堡最独特的魅力——它既是一座宫殿，也是一个巨大的、功能至上的储藏库，真实得令人着迷。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在喀尔巴阡山脉南麓的丘陵间蜿蜒，当那片砖红色屋顶的塔楼从墨绿色的森林海洋中浮现时，你会立刻明白它为何被称作“红石”。第一印象并非童话般的娇柔，而是一种沉稳的、落地生根的威严。空气里是松针、湿润泥土和远处草甸混合的清新气息，走近了，才能听到风穿过古老橡木窗棂的细微呜咽，以及你自己的脚步声在空旷庭院石板上的回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡最神奇的地方在于，它真正的核心不在你眼前，而在你脚下。当你跟随向导穿过一道不起眼的厚重木门，沿着陡峭的旋梯向下，进入那个由冰冷岩石构筑的、永恒如夜的巨大地下世界时，所有的感官都会瞬间重置。温度骤降，一股混合着陈年橡木、葡萄酒液和石头本身凉意的复杂气味包裹了你。手电的光束划过，照亮一排排需数人合抱的巨型酒桶，它们像沉默的巨兽，在无边无际的拱顶地下室中列队。这里静得能听到自己的心跳，以及不知从何处渗出的、规律的水滴声。据说，这里的酒窖网络长达数十公里，足以容纳成千上万桶酒。那一刻，你感受到的不是历史的尘埃，而是一种依然在缓慢呼吸、依然在酝酿着滋味的生命力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`回到地面上，阳光显得格外奢侈。城堡的房间展示了另一个世界：绘有繁复壁画的天花板，来自东方的奢华地毯，精致却厚重的文艺复兴家具。你能想象到，几个世纪前的贵族们，正是在这些华美的厅堂里宴饮交际，而他们的财富与欢愉，其根基就深深埋藏在脚下那片阴凉而庞大的酒窖迷宫里。这种地上与地下的鲜明对比，奢华生活与实用仓储的并存，正是红石古堡最独特的魅力——它既是一座宫殿，也是一个巨大的、功能至上的储藏库，真实得令人着迷。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`红石古堡`} />
                <InfoRow label="英文名称" value={`Červený Kameň Castle`} />
                <InfoRow label="正式名称" value={`Červený Kameň Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`布拉迪斯拉发州，查斯特附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克保存最完好的文艺复兴时期城堡之一，以其欧洲规模最大的城堡地下酒窖系统而闻名遐迩。`} />
                <InfoRow label="建筑特色" value={`一座融合了防御堡垒与贵族宫殿功能的建筑群，其核心秘密深藏于山腹之中——庞大如迷宫般的多层石砌酒窖。`} />
                <InfoRow label="建筑风格" value={`最初为哥特式堡垒，于16世纪由富格家族主导改建为意大利文艺复兴风格，并兼具中欧地区的实用主义防御特征。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑艺术的纪念碑，更是中世纪晚期至近代欧洲贸易、酿酒文化及贵族生活方式的鲜活见证。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆开放时间随季节变化：五月至九月，周二至周日 9:00 - 17:00；十月至四月，周二至周日 10:00 - 15:00。酒窖参观需跟随导览团，通常在整点或半点出发。每年十一月到次年三月，城堡内部博物馆可能关闭，但庭院和部分区域仍开放。具体日期建议出行前在其官网确认。周一为固定休息日，重要节假日如圣诞节、元旦可能关闭。`} />
              <InfoRow label="门票价格" value={`基础门票（含博物馆及标准导览）约10欧元。深度酒窖导览团需额外支付约8欧元，且需提前预约。学生、儿童及老年人享有约30%的折扣优惠。家庭套票（2大2小）价格约为25欧元，性价比较高。部分特殊展览或夜间活动可能另收费。`} />
              <InfoRow label="地址" value={`Červený Kameň 1, 900 89 Častá, Slovakia`} />
              <InfoRow label="交通方式" value={`从布拉迪斯拉发出发是最佳选择。在布拉迪斯拉发中央火车站或汽车总站，乘坐前往“莫德拉”或“特伦钦”方向的区域巴士，在“Častá”小镇下车，车程约45分钟，每小时约1-2班。从Častá小镇中心到城堡还有约2.5公里的步行上山路（风景优美，约需30-40分钟），或者在旅游旺季可能有不定时的接驳小巴。自驾是最方便的方式，从布拉迪斯拉发沿E65公路向东北行驶约30公里，城堡有清晰的标识和停车场。火车无法直达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`红石的故事，始于13世纪中叶那场席卷东欧的蒙古风暴。1241年，蒙古铁骑如疾风般扫过，暴露了王国边境防御的脆弱。为了守护通往匈牙利王国腹地的要道，波希米亚国王决定在此建造一座前沿堡垒。最初的城堡是纯粹的军事产物，用本地开采的红色砂岩垒砌，名字也直白地来源于此——“红石”。在随后的几百年里，它在匈牙利贵族间几经易手，见证了小规模的冲突与漫长的和平，但始终是一个偏远而坚固的军事据点，其命运在16世纪迎来了彻底的改变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`改变它的人，是那个时代欧洲的“华尔街巨鳄”——富格家族。这个来自奥格斯堡的银行业王朝，其金融网络遍及全欧，甚至为神圣罗马帝国皇帝提供贷款。1526年，匈牙利国王在莫哈奇战役中阵亡，王国陷入动荡与奥斯曼帝国的威胁之中。富格家族看到了机会，他们不仅贷款给哈布斯堡王朝以支持其战争，更精明地收购了包括红石在内的一系列边境城堡，作为抵押和贸易网络的关键节点。1583年，富格家族正式入主，他们带来的不仅是金钱，还有来自意大利的文艺复兴新风尚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场宏大的改造开始了。富格家族没有推倒重来，而是在原有坚固的哥特式堡垒外围，加筑了四个巨大的、带有圆顶的棱堡，构成了我们今天看到的独特星形轮廓。他们把内部改造成舒适的住所，引入了大窗户、华丽的灰泥装饰和壁画。但最具远见的工程在地下。他们利用城堡所在的岩石山体，以惊人的工程技巧开凿、扩建了原有的地窖，将其建成了一个庞大无比的仓储系统。这不仅仅是为了存酒，更是为了储存从整个中欧收购来的货物：粮食、皮毛、铜器，当然，还有他们贸易网络中最核心的商品之一——葡萄酒。这些地窖恒温恒湿，安全隐蔽，是那个时代的“超级物流中心”，也是富格家族商业帝国在喀尔巴阡山脉的坚实保险库。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，财富总是伴随着风险。17世纪的三十年战争将中欧化为焦土，红石古堡也未能幸免。1646年，它被帝国军队围攻并占领，遭到了严重破坏。富格家族的光辉逐渐黯淡，城堡再次易主。幸运的是，后来的拥有者，如帕尔菲家族，更多地将它视为一处祖传的乡间庄园而非军事要塞。他们修复了损毁的部分，维护了庞大的酒窖，并在此过着相对宁静的贵族生活。这种状态一直持续到20世纪中叶。二战结束后，城堡被收归国有，经过细致的修复，于60年代作为博物馆向公众开放。那些曾为富可敌国的银行家守护财富的石墙，如今安静地守护着一段关于权力、贸易与生存的厚重记忆，等待着人们一层层剥开，去探寻地底深处那依旧弥漫着酒香的秘密。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排在下午，用大约3.5到4小时进行深度探索。为什么是下午？因为上午的旅行团较多，而接近傍晚时分，阳光会给城堡外墙涂上最醇厚的“红石”色调，且游客散去后的庭院格外宁静。整体节奏应是“先上后下，由外至内”。首先在城堡外围和庭院感受整体氛围，接着参观地上层的博物馆房间，了解其居住历史，最后将重头戏留给地下的酒窖导览。这样的安排能让感官体验形成强烈对比，从地上的华美人文世界，一步步深入至地下的、充满原始力量的功能性奇迹，印象会尤为深刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在城堡官网查询并预约“深度酒窖导览”团位，这是体验的精髓，现场很可能满员。地下酒窖常年温度只有8-12摄氏度，即使盛夏也必须带一件外套或披肩。城堡内部博物馆房间禁止使用闪光灯拍照，但对酒窖内的摄影通常比较宽松（但也要先询问向导）。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场穿过一片高大的山毛榉林，沿着略有坡度的古老石板路步行约十分钟，让森林的静谧为你洗去尘嚣，做好进入另一个时空的准备。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡外围的护城壕边（如今已是绿草如茵），抬头完整欣赏它那独特的星形轮廓与四个巨大的圆顶棱堡，想象它昔日不可攻克的防御姿态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形门洞进入内庭，先别急着进屋，在庭院中央的石板地上静静站一会儿，听风声、鸟鸣，感受四面文艺复兴式拱廊围合出的那份与世隔绝的安宁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随博物馆的参观路线，依次走进那些装饰着华丽壁画和古董家具的骑士厅、宴会厅与卧室，仔细观察壁炉上精美的石雕和窗户上古老的彩绘玻璃碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要报名参加定时的深度酒窖导览，握着一支小手电，跟随向导深入山腹，在冰冷潮湿的空气和橡木的醇香中，触摸那些巨大酒桶上岁月留下的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在最大的中央酒窖里，导览员会打开一小桶陈酿请你品尝，让那醇厚的液体在舌尖化开，感受这份从历史深处直接流淌而来的滋味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，别忘了去城堡西侧的小露台，那里是俯瞰周围连绵起伏的丘陵森林和远处Častá小镇屋顶的绝佳位置，尤其在日落时分。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，在返回停车场前，绕到城堡东侧的下方，从那里仰视城堡，你会发现它雄踞于山岩之上的气势与从正面看时完全不同。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧斜坡仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光从西侧照射，在城堡东侧形成完美的侧光，从山坡下的草地仰拍，能捕捉到星形堡垒的完整轮廓与温暖的“红石”色泽。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`地下酒窖的入口光影`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览进入酒窖的第一道旋梯时，利用自然光从入口照射进来的光束，拍摄同行者向下探索的剪影，构图极具神秘感和纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内庭拱廊下的对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴天的正午时分，站在内庭一侧，利用拱廊形成的天然框架，拍摄对面被阳光照亮的文艺复兴窗户与石墙，对称结构带来宁静和谐的美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从西侧露台拍摄风景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在西侧露台用长焦镜头压缩空间，将城堡的一角石墙作为前景，聚焦于远处森林覆盖的丘陵和山谷中袅袅的炊烟，营造出田园史诗感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`橡木桶阵列的纵深画面`}</h4>
                  <p className="text-sm text-gray-700">{`在酒窖内，征得向导同意后，将相机放在一个巨大的橡木桶上，用慢门拍摄手电光束扫过无限延伸的桶阵，创造出超现实的、通往历史深处的隧道视觉效果。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`酒窖内光线极度昏暗，建议使用大光圈镜头或高感光度性能好的相机，三脚架通常不允许带入（为避免绊倒）。拍摄当地人（如工作人员）时请务必先微笑示意并取得同意。无人机飞行在城堡上空受到严格管制，基本不可行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式历史之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城堡附属的复古客房，房间保留了古老的木梁和石墙，夜晚当游客散尽，你将独享整个庭院星空下的寂静，清晨在数百年的石头窗棂边醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园牧歌体验`}</h4>
                  <p className="text-sm text-green-800">{`选择Častá小镇或附近村庄的家庭式民宿，房东太太可能会端来自酿的果酒和家常奶酪饼，坐在开满鲜花的小院子里，就能遥望山丘上那座红色的城堡剪影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计酒店爱好者`}</h4>
                  <p className="text-sm text-yellow-800">{`返回布拉迪斯拉发，住在老城边缘由旧工厂改造的设计酒店，现代舒适的设施与白日的古老探险形成有趣反差，且夜生活与餐饮选择丰富得多。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`森林隐居者`}</h4>
                  <p className="text-sm text-purple-800">{`在城堡所在森林公园内或边缘，寻找一间独栋的木屋度假屋，彻底融入喀尔巴阡山地的自然氛围，白天徒步，夜晚在壁炉旁回味酒窖的寒意与酒香。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在城堡或附近乡村，请务必提前备好一些零食和饮料，因为晚间餐饮选择非常有限。夏季是旺季，尤其是周末，城堡客房和好民宿都很紧俏，至少提前两个月预订为佳。自驾是体验周边宁静乡村和灵活往返布拉迪斯拉发的最佳方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开红石古堡时，我的指尖似乎还残留着地下酒窖那石壁的冰凉，舌根却萦绕着那口陈酿温润的余香。这座城堡给我的震撼，是一种极其扎实的“存在感”。它没有讲述虚无缥缈的公主童话，而是坦诚地展示着生存、贸易与财富的真相。地上的华美厅堂诉说着人们对美好生活的向往与装饰艺术的追求，而地下那庞大如迷宫的酒窖，则是支撑这一切繁荣的、最现实的基础工程。它让我看到，历史不仅仅是战争与王冠，更是那一桶桶需要精心储藏的酒，是一套保障货物安全过冬的恒温系统，是计算、经营与长远规划的智慧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求即时满足、数字虚拟的快节奏时代，红石古堡像一颗定心丸。它伫立在那里，用数百万吨的岩石和数百年缓慢氧化的酒液告诉你，有些事物需要时间的深度，需要空间的厚重，需要沉到地底下去慢慢酝酿。它不仅仅是一个旅游景点，更是一个关于“积淀”的实体寓言。每一位热爱深度游的旅人，都应该来感受一下这种脚踏实地又直通历史脏腑的体验。当你从那个阴凉的地下世界重新回到阳光之下，你会觉得，连呼吸到的现代空气，都仿佛有了更丰富的层次。这趟旅程，是一次对耐心与底蕴的朝圣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/presov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Presov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orava-castle-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥拉瓦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orava Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/levoca-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱沃恰老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Levoča Old Town</p>
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
