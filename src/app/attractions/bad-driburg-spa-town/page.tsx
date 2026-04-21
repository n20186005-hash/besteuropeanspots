import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴特德里堡 Bad Driburg｜藏在德国森林腹地的治愈系古堡与千年矿泉疗养秘境 - 最佳欧洲景点',
  description: '车子驶离高速公路，钻入一片浓得化不开的绿色。当导航提示“您已抵达巴特德里堡”时，我并没有看到预想中热闹的小镇中心，反而像是闯入了一个巨人的私人森林花园。空气率先变了，那股混合着湿润泥土、针叶林和一丝淡淡硫磺气息的味道，清冽地钻进鼻腔——这是矿泉城的独特签名。耳边是绝对的宁静，只有风吹过百年山毛榉的沙',
}

export default function BadDriburgSpaTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '巴特德里堡', href: '/destinations/europe' },
            { label: '巴特德里堡', href: '/attractions/bad-driburg-spa-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴特德里堡・Bad Driburg・德国・巴特德里堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离高速公路，钻入一片浓得化不开的绿色。当导航提示“您已抵达巴特德里堡”时，我并没有看到预想中热闹的小镇中心，反而像是闯入了一个巨人的私人森林花园。空气率先变了，那股混合着湿润泥土、针叶林和一丝淡淡硫磺气息的味道，清冽地钻进鼻腔——这是矿泉城的独特签名。耳边是绝对的宁静，只有风吹过百年山毛榉的沙沙声，和远处若有似无的溪水潺潺。
穿过一道不起眼的石拱门，眼前豁然开朗。这哪里是公园，根本是一幅活过来的古典油画。无边无际的草坪如柔软绿毯向远处铺展，几株姿态优雅的孤植树像被精心摆放的雕塑。晨跑的人、推着婴儿车的母亲、长椅上静静阅读的老人，他们的存在一点也不突兀，反而成了这幅画里最生动的笔触。这里不是观光景点，而是当地人呼吸的一部分，是他们的后花园、健身房和沉思室。你能感觉到，时间在这里被调成了0.5倍速。
而这一切绿意的焦点，是那座矗立在缓坡之上的格罗特宫。它不像新天鹅堡那样戏剧性，洁白的立面在绿树衬托下，显得格外宁静、典雅，甚至有些亲切。它不是一座仅供仰望的冰冷城堡，它的长廊下摆着咖啡座，人们可以在这里真正地“使用”风景。最打动我的，是这种将极致的美与日常的疗愈感无缝衔接的能力。在这里，宏伟的历史不是被锁在玻璃柜里，而是化作了你可以漫步其下的林荫道、可以啜饮的甘泉、可以深深吸入肺叶的清新空气。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离高速公路，钻入一片浓得化不开的绿色。当导航提示“您已抵达巴特德里堡”时，我并没有看到预想中热闹的小镇中心，反而像是闯入了一个巨人的私人森林花园。空气率先变了，那股混合着湿润泥土、针叶林和一丝淡淡硫磺气息的味道，清冽地钻进鼻腔——这是矿泉城的独特签名。耳边是绝对的宁静，只有风吹过百年山毛榉的沙沙声，和远处若有似无的溪水潺潺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过一道不起眼的石拱门，眼前豁然开朗。这哪里是公园，根本是一幅活过来的古典油画。无边无际的草坪如柔软绿毯向远处铺展，几株姿态优雅的孤植树像被精心摆放的雕塑。晨跑的人、推着婴儿车的母亲、长椅上静静阅读的老人，他们的存在一点也不突兀，反而成了这幅画里最生动的笔触。这里不是观光景点，而是当地人呼吸的一部分，是他们的后花园、健身房和沉思室。你能感觉到，时间在这里被调成了0.5倍速。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这一切绿意的焦点，是那座矗立在缓坡之上的格罗特宫。它不像新天鹅堡那样戏剧性，洁白的立面在绿树衬托下，显得格外宁静、典雅，甚至有些亲切。它不是一座仅供仰望的冰冷城堡，它的长廊下摆着咖啡座，人们可以在这里真正地“使用”风景。最打动我的，是这种将极致的美与日常的疗愈感无缝衔接的能力。在这里，宏伟的历史不是被锁在玻璃柜里，而是化作了你可以漫步其下的林荫道、可以啜饮的甘泉、可以深深吸入肺叶的清新空气。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴特德里堡`} />
                <InfoRow label="英文名称" value={`Bad Driburg`} />
                <InfoRow label="正式名称" value={`Bad Driburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴特德里堡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个将千年贵族领地、近代欧洲疗养文化与独特玻璃手工艺完美融合的“健康花园”，是德国西北部最典雅宁静的矿泉疗养地之一。`} />
                <InfoRow label="建筑特色" value={`以一座新文艺复兴风格的白色宫殿（格罗特宫）为中心，向外辐射出广阔如画的英式风景园林，点缀着新古典主义风格的矿泉饮水厅、精致的雕塑和蜿蜒的林间小径。`} />
                <InfoRow label="建筑风格" value={`整体景观呈现成熟的英国浪漫主义风景园林风格；核心建筑格罗特宫为新文艺复兴风格；饮水长廊等疗养建筑多为新古典主义或典雅的新艺术运动风格点缀。`} />
                <InfoRow label="文化价值" value={`它代表了从中世纪贵族庄园到近代欧洲“水疗”社会文化的重要演变，是活着的“疗愈文化”博物馆，其宁静、有序与自然融合的美学深刻影响了德国人对休养与生活品质的理解。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`核心的疗养公园全年24小时免费开放。公园内的历史建筑如格罗特宫开放时间较为复杂：通常4月至10月，周二至周日的上午10点至下午5点开放；11月至次年3月则仅在周末或预约开放。市立博物馆与玻璃作坊的开放时间多为周二至周日，上午11点至下午4点。重要提示：这里的许多设施（尤其是博物馆和特定宫殿房间）冬季（11月-3月）开放时间大幅缩短或仅接受团体预约，出行前务必在其官网再次确认。`} />
              <InfoRow label="门票价格" value={`广阔的英式疗养公园本身免费。进入格罗特宫内部参观（导览游）费用约为成人8欧元，优惠票6欧元。市立博物馆门票约为4欧元。品尝或接取矿泉水的疗养馆“Trink- und Wandelhalle”进入免费，但使用特定杯具品尝需支付小额租赁费（约1-2欧元）。公园内的小火车游览或特定主题导览游需额外付费，价格在5-15欧元不等。`} />
              <InfoRow label="地址" value={`Parkstraße 69, 33014 Bad Driburg, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是帕德博恩/利普施塔特机场（PAD），约40公里，车程40分钟，但航班较少。更便捷的是乘火车至帕德博恩中央车站（Paderborn Hbf），这是该地区的交通枢纽。从帕德博恩火车站前，乘坐每小时数班的R51或S5号区域火车，约25-30分钟即可直达巴特德里堡火车站。从巴特德里堡火车站出来，步行约15-20分钟（或搭乘偶尔的本地巴士）即可穿过宁静的老城区，抵达疗养公园的主入口。自驾的话，从A44或A33高速公路下来均有清晰路标，小镇外围有充足的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从地下的水说起。几个世纪以来，当地人就知道这几处冒泡的泉水“有点特别”。但真正改变它命运的，是那些统治这里的伯爵们。18世纪末，当时的统治者格罗特伯爵夫人玛丽亚·弗朗西斯卡做了一件非常时髦的事：她相信这些泉水的疗效，并开始系统地建造饮水亭和简单的沐浴设施，邀请客人来此休养。这在当时欧洲贵族圈里正流行“水疗”，巴特德里堡借着这股东风，从一片单纯的贵族领地，开始向疗养地转型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的“蝶变”发生在19世纪。继承这里的格罗特伯爵家族，尤其是一位名叫赫尔曼的伯爵，他是一位狂热的园林艺术爱好者。他不满足于零零散散的花园，决心创造一个能震撼人心的作品。他请来了当时顶尖的园林设计师，彼得·约瑟夫·伦内——没错，就是那位设计了波茨坦无忧宫和柏林动物园的大师。伦内虽未亲自全程督导，但他的理念深深烙印于此。于是，我们看到了一整个河谷被精心“设计”成了自然的样子：蜿蜒的溪流被引导成更诗意的曲线，小山丘被修整出完美的坡度，视野被巧妙地打开或遮蔽，形成一幅幅如画般的景致。这座英式风景园林，就是今天疗养公园的灵魂，它不是为了展示人力征服自然，而是为了用艺术的手法，极致地展现自然之美，以达到抚慰心灵的目的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与此同时，另一项产业也在默默发光：玻璃。得益于森林资源（燃料）和优质石英砂，这里的玻璃制造传统可以追溯到中世纪。19世纪，这里出产的药瓶、香水瓶和精致器皿开始闻名。你能想象吗？当贵族们在园林中散步疗养时，小镇的另一角，匠人们正吹制出晶莹剔透的器皿。这种“刚与柔”、“疗愈与创造”的并存，构成了小镇独特的文化肌理。两次世界大战让疗养事业一度中断，宫殿也被征用。但幸运的是，它躲过了大规模的战火摧残。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，格罗特家族的后人回到了这里，并与当地政府合作，小心翼翼地让这片“健康花园”复苏。宫殿的一部分成为博物馆和活动场所，而广阔的园林则完全向公众免费开放。那些古老的矿泉眼，经过现代化的检验和开发，依然在疗养馆里汩汩涌出。今天的巴特德里堡，没有变成僵化的博物馆，它依然是一个“活着”的疗养地，只是疗养的内涵从过去贵族的身心放松，扩展到了现代每一个普通人对抗生活压力的心灵绿洲。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你至少留出一整天（6-8小时）给巴特德里堡，这里的魅力在于沉浸而非走马观花。最佳抵达时间是清晨9点前，这时公园里几乎只有鸟鸣和你自己的脚步声，光线柔和，是拍照和感受宁静的黄金时段。路线设计上，我们将从信息中心出发，先由外向内感受园林的宏大，再深入探访人文核心（宫殿、博物馆），接着体验独特的工艺（玻璃作坊），最后用一个至高的俯瞰视野收尾。这样的节奏张弛有度，既能饱览自然与建筑之美，也能触摸到小镇的历史脉搏与生活气息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`公园内道路平整但面积巨大，请务必穿一双绝对舒适的步行鞋。品尝矿泉水前最好吃点东西垫胃，空腹饮用某些矿物质含量高的泉水可能引起不适。周日德国几乎所有商店关门，但公园、咖啡馆和少数餐厅照常营业，是享受宁静的绝佳日子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公园主入口的游客中心拿一份地图，然后毫不犹豫地扎进那条通往格罗特宫的林荫主道，让两侧参天古木为你举行一场安静的入场仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在格罗特宫洁白优雅的东翼长廊下驻足以，想象19世纪的淑女绅士们曾在此散步社交，并从这里首次框景式地眺望下方如波浪般舒展的草坪谷地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进那座新古典主义风格的矿泉饮水厅，花一欧元租一个专用的“疗养杯”，接一杯温热的含铁硫磺泉，鼓起勇气品尝这口被誉为“生命之水”的独特滋味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿后方沿着标识清晰的小径向森林深处漫步，去寻找那些隐藏在密林中的浪漫主义雕塑和小池塘，感受设计师精心营造的“意外惊喜”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午的时光留给市立博物馆，它坐落在一座古老的庄园建筑里，里面关于玻璃制作、疗养历史和小镇生活的展陈小而精美，充满人情味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着步行十分钟到老城边缘的手工玻璃作坊，看着匠人在上千度的火焰前旋转吹制，听那清脆的叮当声，见证一团熔液如何变成晶莹的艺术品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分乘坐公园的小火车（如果运营）或轻松步行前往“威廉高地”，这里是整个公园的制高点，等待夕阳为脚下的宫殿、森林和小镇屋顶镀上金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐不必走远，就在公园出口附近找一家有露天座位的传统餐馆，点一份威斯特法伦地区的特色菜肴，就着晚风慢慢享用，结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`格罗特宫东翼长廊的正中央`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，利用长廊形成的天然画框，将远方草坪上孤植的橡树和散步的人物一同构图，形成深邃的景深和故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`森林小径旁的“维纳斯池塘”边`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，阳光能透过树叶在水面投下斑驳光点时，蹲低机位，将水中宫殿的倒影、睡莲和真实林木一同纳入镜头，营造梦幻感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从“威廉高地”的观景平台向西俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是晴朗的傍晚，使用中长焦镜头压缩空间，捕捉夕阳余晖中宫殿白色立面、公园几何状的草坪与远处小镇教堂尖塔形成的层次丰富的全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`手工玻璃作坊的内部工作区`}</h4>
                  <p className="text-sm text-gray-700">{`提前征得匠人同意后，使用大光圈镜头，对准正在吹制或塑形的通红玻璃料，聚焦于匠人专注的眼神或手中流动的形态，捕捉那种灼热与专注并存的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`公园内允许无人机飞行，但必须严格遵守德国无人机法规，并绝对远离人群和建筑，最佳起飞点是威廉高地附近的空旷处。拍摄玻璃吹制时请关闭闪光灯，避免强光干扰匠人工作，也为了保护你的镜头免受高温辐射。园林景色四季皆美，但秋季（十月中下旬）森林色彩斑斓，是出片的黄金季节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭之选`}</h4>
                  <p className="text-sm text-blue-800">{`“公园边家庭旅馆”，一栋由老房子改造的温馨民宿，女主人会为你准备好装满本地食材的迎宾篮，从房间窗户就能看到树梢和偶尔掠过的小火车顶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`直接下榻于“格罗特宫酒店”，这座宫殿的一部分被改建为奢华酒店，住在有浮雕天花板和历史家具的房间里，夜晚当游客散尽，你仿佛成了庄园的临时主人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感疗养享受`}</h4>
                  <p className="text-sm text-yellow-800">{`“森林疗愈酒店”，位于公园安静一隅的现代设计酒店，拥有面向森林的无边泳池和正宗的水疗中心，将传统的“疗养”概念升级为全方位的感官度假。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园风光驿站`}</h4>
                  <p className="text-sm text-purple-800">{`位于小镇外围丘陵上的“葡萄园客栈”，房间带木质阳台，可以远眺整个巴特德里堡谷地，清晨在鸟鸣和葡萄藤的香气中醒来，享受绝对的静谧。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若想体验真正的宁静，建议选择公园内部或紧邻公园的住宿，而非镇中心。夏季和圣诞市场期间是旺季，务必提前数月预订。小镇治安极好，夜晚公园部分区域灯光较暗，独自散步建议携带手电。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开巴特德里堡许久，我时常想起的，不是某个具体的建筑或画面，而是一种全身心被熨帖过的感受。那是一种深度的宁静，不是死寂，而是充满了生命力的平和——是泉水涌动的咕咚声，是风吹过百年树冠的海浪声，是玻璃叮当的清脆声共同谱写的背景音。在这个追求刺激和效率的时代，它像一个温柔的“逆行者”，固执地守护着一种关于“疗愈”的古老智慧。这种疗愈，不在于多么昂贵的医疗设备，而在于让脚步慢下来，让眼睛装满绿色，让肺叶呼吸洁净的空气，让心灵在无目的的漫步中重新找到秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了打卡式的奔波，如果你的身心渴望一次真正的、不被打断的深呼吸，请来这里。巴特德里堡教给我们的，或许正是一种生活的哲学：真正的奢华，不是物质的堆砌，而是拥有一个可以随时走进去的、广袤而美丽的“花园”，并懂得在其中安然自处。它不是一个一生必去的炫耀性目的地，而是一个当你感到疲惫时，会由衷想念的、灵魂可以靠岸的家园。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/heppenheim-medieval-town-starkenburg-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    黑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">黑彭海姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Heppenheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/detmold-teutoburg-forest" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    代
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">代特莫尔德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Detmold</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/buxtehude" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布克斯特胡德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Buxtehude</p>
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
