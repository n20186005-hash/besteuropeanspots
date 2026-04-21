import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '甘德里亚 Gandria｜卢加诺湖畔未受时光惊扰的静谧渔村 - 最佳欧洲景点',
  description: '船缓缓靠岸，发动机的嗡嗡声停了，世界瞬间被另一种声音接管：细浪轻舔石岸的哗哗声，从某扇敞开窗户里飘出的意大利语对话片段，还有你自己的呼吸声。这就是你踏入甘德里亚的第一印象——一种被包裹起来的宁静。这里没有汽车，没有宽大的街道，只有一条沿湖延伸的主步道，像一条柔软的丝带，串起色彩斑驳的老房子。你的鼻子...',
}

export default function GandriaVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '卢加诺', href: '/destinations/switzerland' },
            { label: '甘德里亚', href: '/attractions/gandria-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`甘德里亚・Gandria・瑞士・卢加诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船缓缓靠岸，发动机的嗡嗡声停了，世界瞬间被另一种声音接管：细浪轻舔石岸的哗哗声，从某扇敞开窗户里飘出的意大利语对话片段，还有你自己的呼吸声。这就是你踏入甘德里亚的第一印象——一种被包裹起来的宁静。这里没有汽车，没有宽大的街道，只有一条沿湖延伸的主步道，像一条柔软的丝带，串起色彩斑驳的老房子。你的鼻子会捕捉到混合的气味：湖水的微腥，从窗台花箱里溢出的天竺葵甜香，还有某户人家厨房飘出的、用橄榄油煎炒大蒜的浓郁香气。
沿着这条唯一的“大道”走，你会发现村子是垂直的。你的右手边是深碧色的卢加诺湖，泊着几条色彩鲜艳的小木船；左手边，房子紧紧依偎着陡峭的山坡，一户的屋顶可能是上一户的花园。晾晒的衣物在微风中轻摆，像彩色的旗帜，宣告着日常生活的继续。老太太坐在自家门前的石凳上剥豆子，猫在阳光下摊成一张毛毯。这里不是一个被抽离生活的博物馆，而是一个仍在从容呼吸的有机体。它的核心魅力，就在于这种“仍在生活着”的质感，时间在这里不是被展示的展品，而是像湖水一样，缓慢、可感知地流动着。
当你钻入那些连接主道与上层房屋的拱廊和狭窄阶梯时，仿佛进入了一个秘密世界。光线骤然变暗，空气凉爽，脚下是被几个世纪足迹磨得光滑的石头。拱廊下，你可能会撞见一个小小的神龛，里面供奉着圣母像，前面放着新鲜的野花。这些角落诉说着社区的信仰与私密性。走到高处某个不经意的转角，视野豁然开朗，整片湖景像一份突如其来的礼物铺在眼前，湖对岸的布勒山（Monte Brè）郁郁葱葱。此刻你会明白，甘德里亚的建筑不是对抗自然，而是与山岩和湖泊进行的一场精妙对话。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`船缓缓靠岸，发动机的嗡嗡声停了，世界瞬间被另一种声音接管：细浪轻舔石岸的哗哗声，从某扇敞开窗户里飘出的意大利语对话片段，还有你自己的呼吸声。这就是你踏入甘德里亚的第一印象——一种被包裹起来的宁静。这里没有汽车，没有宽大的街道，只有一条沿湖延伸的主步道，像一条柔软的丝带，串起色彩斑驳的老房子。你的鼻子会捕捉到混合的气味：湖水的微腥，从窗台花箱里溢出的天竺葵甜香，还有某户人家厨房飘出的、用橄榄油煎炒大蒜的浓郁香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着这条唯一的“大道”走，你会发现村子是垂直的。你的右手边是深碧色的卢加诺湖，泊着几条色彩鲜艳的小木船；左手边，房子紧紧依偎着陡峭的山坡，一户的屋顶可能是上一户的花园。晾晒的衣物在微风中轻摆，像彩色的旗帜，宣告着日常生活的继续。老太太坐在自家门前的石凳上剥豆子，猫在阳光下摊成一张毛毯。这里不是一个被抽离生活的博物馆，而是一个仍在从容呼吸的有机体。它的核心魅力，就在于这种“仍在生活着”的质感，时间在这里不是被展示的展品，而是像湖水一样，缓慢、可感知地流动着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你钻入那些连接主道与上层房屋的拱廊和狭窄阶梯时，仿佛进入了一个秘密世界。光线骤然变暗，空气凉爽，脚下是被几个世纪足迹磨得光滑的石头。拱廊下，你可能会撞见一个小小的神龛，里面供奉着圣母像，前面放着新鲜的野花。这些角落诉说着社区的信仰与私密性。走到高处某个不经意的转角，视野豁然开朗，整片湖景像一份突如其来的礼物铺在眼前，湖对岸的布勒山（Monte Brè）郁郁葱葱。此刻你会明白，甘德里亚的建筑不是对抗自然，而是与山岩和湖泊进行的一场精妙对话。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`甘德里亚`} />
                <InfoRow label="英文名称" value={`Gandria`} />
                <InfoRow label="正式名称" value={`Village of Gandria`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`卢加诺`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个因渔业、橄榄油贸易和（略带浪漫色彩的）走私活动而繁荣，并因拒绝现代公路入侵而奇迹般保存了中世纪肌理的活态湖畔社区。`} />
                <InfoRow label="建筑特色" value={`层层叠叠、宛若从山岩中生长出来的石砌房屋，通过狭窄的拱廊、迷宫般的阶梯和秘密通道相连，屋顶是典型的提契诺州石板瓦。`} />
                <InfoRow label="建筑风格" value={`提契诺州传统的湖边村落建筑风格，融合了伦巴第的质朴与湖畔生活的实用智慧。`} />
                <InfoRow label="文化价值" value={`它是阿尔卑斯山南麓地中海生活方式的活化石，展示了人与自然（湖泊与山岩）如何紧密依存，并坚守一种缓慢、社群化的传统生活节奏。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄街道及公共区域全年全天候开放。村内的瑞士海关博物馆（Museo Doganale）开放时间通常为每年3月下旬至10月下旬，每周二至周日上午10:00至下午5:00（具体日期每年微调，建议行前在卢加诺旅游局官网查询确认）。村中多数家庭式餐厅和小店遵循提契诺州的午休传统，下午1:30至5:00可能歇业。`} />
              <InfoRow label="门票价格" value={`进入甘德里亚渔村本身完全免费。瑞士海关博物馆门票约为成人8瑞士法郎，学生及老人有优惠。湖边徒步小径“橄榄小径”（Sentiero di Gandria）亦免费开放。`} />
              <InfoRow label="地址" value={`Gandria, 6978 Lugano, Switzerland`} />
              <InfoRow label="交通方式" value={`甘德里亚不通汽车，抵达它的过程本身就是一场仪式。最经典的方式是从卢加诺市中心码头（Lago di Lugano）乘坐湖上渡轮（Navigazione Lago di Lugano）。航班频繁，夏季约每30-60分钟一班，航程约20分钟，沿途湖光山色绝佳。务必选择靠右舷（船行方向右侧）的座位，当船只绕过山岬，甘德里亚如立体画卷般突然映入眼帘的时刻最为震撼。也可从卢加诺Paradiso区沿“橄榄小径”徒步约1小时抵达，这是一条在橄榄树与湖岸岩壁间穿行的绝美路径。自驾者可将车停在村庄上方山路的指定停车场，再沿着蜿蜒的阶梯步行10分钟下山进村。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`甘德里亚的故事，深深镌刻在卢加诺湖的波纹里和山坡的橄榄树林中。它的起源可以追溯到中世纪，最早是一群渔民的避风港。这里的湖湾平静，背靠的山坡提供了天然的庇护和可用于耕作的梯田。石头，成为最可靠的伙伴。村民们从山中采来石块，建造了这些坚固到足以抵御湖上风暴的房屋。渔业是早期生命的源泉，但很快，村民们发现了另一项宝藏：橄榄。山坡上充足的日照和湖畔的微气候，非常适合橄榄树生长。榨取橄榄油，不仅供自家食用，更成为重要的贸易商品，通过湖船运往各地，为村庄带来了最初的繁荣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了18、19世纪，甘德里亚迎来了它最富传奇色彩的时期——走私者的黄金时代。由于瑞士与意大利的国境线就在湖区附近，复杂的湖湾、隐秘的小码头和迷宫般的村内通道，使甘德里亚成为了走私活动的理想枢纽。烟草、咖啡、食盐、纺织品……各种货物在夜色掩护下被悄悄转运。村里的许多房屋都设有暗格、地下仓库和直通湖边的不起眼小门。传说中，走私者们甚至有一套利用窗户灯光传递信号的系统。这段历史并非光彩，却为村庄增添了浓厚的冒险色彩和民间智慧，至今仍是老人们津津乐道的故事主题。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪末，当工业化和现代交通席卷欧洲，决定性的时刻到来了。规划中的湖畔公路打算穿过甘德里亚。然而，绝大多数村民坚决反对。他们深知，汽车的轰鸣和游客的喧嚣会彻底撕裂他们静谧、紧密的生活方式。经过激烈的社区讨论，他们集体做出了一个在当时看来颇为“固执”的决定：拒绝公路进入。正是这个决定，让甘德里亚成了被时间遗忘的琥珀。它没有变成另一个方便到达的旅游热点，而是保留了必须乘船或步行抵达的“秘境”特质，也守护了其建筑和社区结构的完整。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的甘德里亚，褪去了走私时代的紧张刺激，回归了一种更接近其源头的平静。橄榄种植传统被重新重视，湖边山径旁立着介绍橄榄文化的标牌。曾经的走私者通道，如今成了探险家游客寻找隐秘观景台的乐趣所在。老房子里居住的，很多仍是世代相传的家族，年轻一代或许在卢加诺城里工作，但周末总会回到这片石砌的怀抱。瑞士海关博物馆安静地坐落在村口，用展览平和地讲述着那段走私与边境管控的历史，仿佛在为村庄过往的冒险篇章做一个官方而幽默的注解。甘德里亚没有在历史中凝固，它只是选择了一条更蜿蜒、更安静的小径，继续着自己的航程。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排大半天的时间给甘德里亚，最佳方式是搭乘上午10点左右从卢加诺出发的渡轮，这时光线柔和，旅游团还未大批抵达。整体游览节奏宜慢不宜快，核心在于“沉浸”而非“打卡”。下船后，先沿着湖滨主道由东向西漫步，感受村庄的正面全景与生活气息。随后，务必离开主道，随机钻入任意一条向上的拱廊或阶梯，探索垂直的迷宫，这是体验甘德里亚精髓的关键。午后可在湖边餐厅享用悠长午餐，之后有两种选择：精力充沛者可反向徒步“橄榄小径”返回Paradiso，一路欣赏湖畔与橄榄园风光；偏好宁静者则可继续在村里的小巷深处漫无目的地游荡，等待黄昏时分渡轮载你离开，欣赏夕阳下的村庄剪影。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`全程步行游览，深度感受。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">

              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄对岸湖面视角`}</h4>
                  <p className="text-sm text-gray-700">{`搭乘从卢加诺驶往甘德里亚的渡轮，在船只即将靠岸、绕过一个岬角后，立即将镜头对准右前方，可以拍到甘德里亚建筑群以山为幕、倒映湖中的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主步道中段拱廊框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在主步道中段一个较大的石头拱廊下，利用拱门作为天然画框，聚焦框外明亮的湖面、小船和对岸群山，形成明暗与结构的强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`橄榄小径回望点`}</h4>
                  <p className="text-sm text-gray-700">{`从甘德里亚村口沿橄榄小径向卢加诺方向步行约15分钟，有一个开阔的转弯处，可以完美侧拍村庄像燕窝一样紧贴峭壁的层叠立体结构，下午顺光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`黄昏码头灯光`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，在甘德里亚的小码头，用三脚架长曝光，捕捉湖面波纹、泊船的剪影与村庄窗户里透出的温暖灯火，营造宁静而诗意的氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷光影游戏`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，寻找那些狭窄阶梯小巷，捕捉阳光在古老石墙上切割出的锐利光影，以及攀缘植物在光斑中摇曳的生动细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，避免将镜头直接对准民居窗户或阳台上的居民。拍摄人物时，请先微笑并征得同意。`}</li>
                <li>• {`清晨和黄昏的“金色时刻”光线最能渲染石头建筑的质感与温暖色调，正午强光下建议多利用阴影和框架构图。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在村庄核心区一栋有数百年历史的石屋里，房东可能就住在楼上，早晨会邀请你共用阳台，分享自家熬的果酱，体验真正的“村民”日常。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐秘花园客栈`}</h4>
                  <p className="text-sm text-green-800">{`选择一间位于村庄上半区、带有一座秘密阶梯小花园的家庭式客栈，夜晚在葡萄藤架下能听到最清晰的湖水拍岸声，完全与世隔绝。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感避世酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于甘德里亚上方山腰处，由传统农舍改造的现代精品酒店，拥有无敌湖景露台和简约设计的内饰，是静谧与舒适的完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`卢加诺湖景酒店（外住选择）`}</h4>
                  <p className="text-sm text-purple-800">{`如果行李众多或需要更齐全的服务，可以住在卢加诺市 Paradiso 区临湖的酒店，白天乘船轻松往返甘德里亚，晚上享受城市便利。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`甘德里亚村内的住宿数量极少且非常热门，务必提前数月预订。由于车辆无法进入，需要自己提着行李走一段台阶路，请务必轻装。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择住在村里，意味着彻底接受这里的宁静节奏：晚上几乎没有夜生活，只有湖水、星光和偶尔的犬吠。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开甘德里亚的渡轮上，你会感觉到一种奇特的平静。这种平静，并非来自于风景的壮丽——虽然它确实很美——而是来自于你刚刚见证并短暂参与了一种“另一种可能”的生活。在这个全球化和效率至上的时代，甘德里亚的存在本身就是一个温柔的抵抗。它证明了，一个社区可以选择缓慢，可以选择复杂不便的石阶而非平坦的公路，可以选择湖船的悠缓节奏而非引擎的瞬时速度。这种选择的结果，不是落后，而是一种密度极高、人与环境深度交织的生活质感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，甘德里亚不仅仅是一个风景如画的渔村。它是一个活生生的启示，提醒着我们：美与意义，往往存在于那些未被标准化、未被轻易到达的褶皱之中。它邀请每一位到访者，暂时放下追逐清单的焦虑，去真正地“迷失”在小巷里，去倾听湖水与石头的古老对话，去感受时间以不同的流速流淌。如果你渴望的旅行，不仅仅是眼睛的盛宴，更是一场心灵的缓释，那么甘德里亚这片湖畔的时光琥珀，绝对值得你漂洋过海，乘上那班慢船，前来叩访。在这里，你会找到那个被现代生活喧嚣所掩盖的、宁静而丰盛的自己。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spiez-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施皮茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiez Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stein-am-rhein" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施泰因</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stein am Rhein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stein-am-rhein-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施泰因老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stein am Rhein Old Town</p>
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
