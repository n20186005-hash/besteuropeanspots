import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿沙芬堡约翰尼斯堡宫旅游攻略：美因河畔的文艺复兴珍宝与深度游指南',
  description: '探索德国阿沙芬堡的Schloss Johannisburg，一座宏伟的红砂岩文艺复兴宫殿。这份深度游攻略涵盖打卡路线、避坑指南与门票交通，带你领略美因河畔的绝代风华。',
}

export default function AschaffenburgSchlossJohannisburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '巴伐利亚，阿沙芬堡', href: '/destinations/europe' },
            { label: '阿沙芬堡约翰尼斯堡宫', href: '/attractions/aschaffenburg-schloss-johannisburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿沙芬堡约翰尼斯堡宫・Schloss Johannisburg・德国・巴伐利亚，阿沙芬堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你计划一趟巴伐利亚的深度游，除了慕尼黑和新天鹅堡，今天这份 **阿沙芬堡约翰尼斯堡宫私藏旅游攻略**，就带你躲开人潮，探访一座美因河畔被严重低估的“文艺复兴明珠”。想象一下：清晨薄雾中，一座由暖红色砂岩筑成的方正城堡，带着四座直插天际的尖塔，静静地倒映在美因河的柔波里——这不是童话插图，而是你即将步入的现实。作为你的专属向导，这份 **自由行指南** 将不仅仅告诉你门票多少钱、怎么坐车，更会带你触摸那些石头里的历史，感受选帝侯夏宫的昔日荣光，以及藏在葡萄藤下的地窖秘密。相信我，这绝对是你德国之行最意想不到的收获之一。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友！如果你计划一趟巴伐利亚的深度游，除了慕尼黑和新天鹅堡，今天这份 <strong>阿沙芬堡约翰尼斯堡宫私藏旅游攻略</strong>，就带你躲开人潮，探访一座美因河畔被严重低估的“文艺复兴明珠”。想象一下：清晨薄雾中，一座由暖红色砂岩筑成的方正城堡，带着四座直插天际的尖塔，静静地倒映在美因河的柔波里——这不是童话插图，而是你即将步入的现实。作为你的专属向导，这份 <strong>自由行指南</strong> 将不仅仅告诉你门票多少钱、怎么坐车，更会带你触摸那些石头里的历史，感受选帝侯夏宫的昔日荣光，以及藏在葡萄藤下的地窖秘密。相信我，这绝对是你德国之行最意想不到的收获之一。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿沙芬堡约翰尼斯堡宫`} />
                <InfoRow label="英文名称" value={`Schloss Johannisburg`} />
                <InfoRow label="正式名称" value={`Schloss Johannisburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴伐利亚，阿沙芬堡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座宫殿的历史，几乎就是半部美因茨选帝侯的“度假史”和欧洲权力游戏的缩影。它的前身是一座中世纪城堡，但在1605年至1614年间，被当时的美因茨选帝侯兼大主教约翰·施韦卡特·冯·克罗恩贝格彻底重建，成了他远离美因茨教区政务的豪华夏宫。因此，它得名“约翰尼斯堡”。在神圣罗马帝国时期，美因茨选帝侯拥有选举皇帝的关键一票，地位尊崇，这座宫殿的宏伟规模正是其世俗权力的彰显。拿破仑时期，它曾短暂成为法兰克福大公国的行宫，见证了欧洲大陆的政治风云变幻。更令人唏嘘的是，二战末期，宫殿主体在空袭中遭受重创，几乎沦为废墟。我们今天看到的壮丽景象，是战后德国人凭借惊人毅力，依照原始图纸和照片一砖一石精确复建的成果。因此，它不仅是一座文艺复兴宫殿，更是一座象征着德国战后文化遗产保护与重生精神的不朽纪念碑。`} />
                <InfoRow label="建筑特色" value={`第一眼看到它，你就会被那种压倒性的、近乎完美的几何对称感所震撼。宫殿主体是一个巨大的正方形体量，由当地特有的 **红砂岩** 砌成。这种石头在阳光下会呈现出从玫瑰金到赭石色的温暖渐变，质感粗糙而厚重，仿佛沉淀了数百年的阳光。建筑的四角，各耸立着一座高达 **64米的宏伟钟楼**，像四位沉默的红色巨人，守卫着宫殿的四个方向。钟楼顶部是典型的文艺复兴式拱顶，线条利落。宫殿立面尽管巨大，但装饰却相对克制，窗户整齐排列，强调水平线条的延伸感，仅在一些窗楣、门廊和转角处用精致的砂岩浮雕稍作点缀。最精彩的是走近时，你能看到砂岩表面被岁月和风雨侵蚀出的细微纹理与色差，这让整座建筑仿佛有了呼吸和生命，而不是冰冷的复原模型。`} />
                <InfoRow label="建筑风格" value={`约翰尼斯堡宫是德国南部 **文艺复兴鼎盛时期风格** 的典范，尤其体现了“山墙式文艺复兴”的特点。与法国华丽或意大利繁复的文艺复兴不同，德国的文艺复兴更注重结构的清晰、体量的宏伟和立面的庄重。在这里，你看不到巴洛克式的曲线狂舞，也没有哥特式的垂直飞升。一切都是方正的、稳固的、对称的。四座完全一致的角楼，强化了这种中心对称的秩序美学。宫殿的屋顶设计也极具特色，巨大的双坡屋顶覆盖着深色石板，与红墙形成鲜明对比，屋顶上密集排列的老虎窗（屋顶窗）不仅实用，也构成了富有节奏感的装饰元素。这种风格体现了一种世俗王权（选帝侯）的自信与稳定，它不诉诸神的崇高，而是彰显人的理性和统治的永恒。`} />
                <InfoRow label="文化价值" value={`对于阿沙芬堡人来说，约翰尼斯堡宫远不止是一个旅游景点，它是城市的 **心脏与天际线**，是身份认同的象征。它定义了这座城市的轮廓，无论你在城里的哪个角落，几乎一抬头就能望见那四座红塔。宫殿内设的 **州立宫殿博物馆**，收藏着珍贵的古代雕塑、绘画和家具，是市民文化生活的核心场所。而宫殿附属的 **宫廷花园**（Schlossgarten）和沿河绿地，则是当地人散步、慢跑、享受阳光的后花园。此外，宫殿内还设有世界上独一无二的 **软木建筑模型收藏馆**，展示了用软木精巧复制的古罗马建筑，这项独特的收藏将本地文化与古典文明奇妙连接。它从昔日的权贵夏宫，转变为今天向所有人开放的文化宝库和公共空间，这种角色的转变本身就充满了动人的温度。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 阿沙芬堡约翰尼斯堡宫一日游打卡路线攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，这份 **一日游路线** 请收好。我建议你上午10点左右抵达，先从河对岸或老城区的视角欣赏宫殿全景（拍照黄金时间！）。然后穿过美因河上的老桥，漫步到宫殿脚下的 **宫殿广场**（Schlossplatz），感受它的磅礴气势。接着进入宫殿主体参观 **州立宫殿博物馆**，重点看二楼的选帝侯套房、宴会厅和画廊，大概需要1.5-2小时。中午，可以在广场旁的咖啡馆简单用餐，或步行几分钟到老城区觅食。下午，先去探访宫殿西翼那个神奇的 **软木建筑模型馆**（绝对不容错过！），然后一定要去地下的 **历史酒窖**，那里曾是选帝侯的皇家酒窖，现在仍储藏着美酒，可以品鉴。最后，把傍晚时光留给 **宫廷花园** 和美因河畔。在夕阳下，看着金色的光芒为红砂岩宫殿披上最后的外衣，你会觉得这一天无比圆满。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>红砂岩的质感与光影</strong>：请一定用手（轻轻）触摸外墙。那粗糙温暖的颗粒感，是图片无法传递的。午后阳光斜射时，建筑凹凸处的明暗对比达到极致，浮雕的阴影被拉长，整面墙仿佛成了一幅巨大的、不断变化的光影素描画。站在角楼下仰望，塔楼在蓝天背景下勾勒出的锋利剪影，会让人瞬间失语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>四座角楼的对称魔力</strong>：尝试站在宫殿广场的中心点，缓慢旋转一圈。你会被那种从四个方向压迫而来的、却又无比和谐的对称感所包围。这不是呆板的对称，每一座角楼的细部、每一扇窗户的排列都如同复刻，但天空飘过的云、塔顶停留的鸟，又为这严谨的几何注入了瞬间的灵动。这是建筑师的野心与自然达成的完美协议。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>选帝侯礼拜堂的苍穹</strong>：在宫殿博物馆内部，不要错过选帝侯私人礼拜堂。它的拱顶装饰可能不如一些大教堂华丽，但那份私密与精致感尤为特别。阳光透过高侧窗洒进来，在淡雅的灰泥装饰和祭坛上投下纯净的光斑，静谧而神圣。你可以想象，几百年前，那位权势滔天的选帝侯，也曾在此独自面对内心的时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>地下大酒窖的时空隧道</strong>：走下狭窄的旋转石阶，一股混合着陈旧石头、潮湿空气和淡淡橡木酒香的复杂气味扑面而来。这里拱顶低矮，光线昏暗，一个个巨大的古代酒桶沉默伫立。用手电照向酒桶和墙壁，上面可能有几个世纪前留下的刻痕或标记。这里的时间流速似乎不同，你会瞬间脱离游客的身份，仿佛闯入了某个被遗忘的、只属于酒神与时光的密室。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间与人流避坑</strong>：尽量避开周日早上和周一。周日早上很多本地家庭出游，周一则是不少周边博物馆的休息日（但约翰尼斯堡宫本身周一开放），可能导致人流集中。最佳抵达时间是工作日开门（通常是上午10点）前后，或下午3点以后，此时旅行团大多已离开。宫殿内部空间宏大，一般不会感到过分拥挤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与装备</strong>：宫殿内部分区域（如通往酒窖的楼梯）地面为原始石面且较陡，<strong>务必穿一双绝对防滑、舒适的运动鞋或徒步鞋</strong>，高跟鞋在这里是“灾难”。另外，地窖常年温度较低（约12-14°C），即使外面夏日炎炎，也建议带一件薄外套。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>门票与交通精打细算</strong>：门票建议购买 <strong>“宫殿博物馆+软木模型馆”的联票</strong>，性价比最高。如果自驾，可将车停在美因河对岸的公共停车场，步行过桥欣赏风景，比停在宫殿附近的停车场更便宜且体验更好。从阿沙芬堡主火车站步行到宫殿约需20分钟，沿途会穿过优雅的老城区，本身就是很好的游览。" }} />
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住宿我强烈推荐老城区（Altstadt）内的精品酒店或民宿，比如有百年历史的 <strong>Hotel Wilder Mann</strong>，或者设计现代的 <strong>Hotel Schönbusch</strong>。它们距离宫殿都只有几分钟步行路程，晚上可以悠闲地逛老城小巷，感受宁静的夜间氛围。餐饮方面，一定要试试 <strong>“美因河畔的早餐”</strong>——在当地咖啡馆点一份丰盛的德式早餐，看着河景和宫殿。正餐推荐宫殿广场旁的 <strong>Restaurant Schlossgarten</strong>，坐在露天座位，招牌菜是巴伐利亚风味的烤猪肘或新鲜的河鱼，配上一杯弗兰肯地区产的干白葡萄酒（Silvaner或Riesling），听着教堂钟声和宫廷花园的鸟鸣，这才是地道的“阿沙芬堡时刻”。别忘了，宫殿地下酒窖也常有品酒活动，可以直接品尝到储存在历史酒桶中的佳酿。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从宫殿步行15分钟，就能到达 <strong>波莫尔斯费尔登宫</strong>（Schloss Pommersfelden）的“兄弟景点”——<strong>美因茨选帝侯宫殿花园（Schönbusch Park）</strong>。这是一个占地广阔的英式风景园林，有宁静的湖泊、蜿蜒的小径、小巧的古典庙宇和一座可爱的黄色小宫殿。这里是当地人最爱的野餐和散步胜地，氛围极其放松。如果你还有半天时间，可以乘坐短途公交或开车约20分钟，探访被誉为 <strong>“阿尔卑斯之路起点”的巴伐利亚森林边缘地带</strong>，那里有更原始的徒步路径和小村庄，能让你从文艺复兴的辉煌迅速切换到德国田园的诗意之中。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿沙芬堡的灵魂，就凝结在这座红砂岩宫殿的倒影里——它一半是选帝侯用权力与美学铸就的永恒纪念碑，坚硬、对称、不容置疑；另一半则温柔地融入了美因河的流水、花园的绿意与市民日常的笑语中，生动、柔软、充满烟火气。它告诉你，最动人的历史不是封存在玻璃柜里的，而是依然在呼吸、在生长，并慷慨地为每一个到访者提供一片荫凉、一帧风景和一段漫步于时光长廊的从容。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/eberbach-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃伯巴赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eberbach Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tangermuende-medieval-town-on-elbe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    唐
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">唐格明德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tangermünde</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gottorf-castle-schleswig" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈托尔夫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gottorf Castle</p>
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
