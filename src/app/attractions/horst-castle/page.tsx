import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍斯特城堡旅游攻略：幽灵古堡与水中倒影的深度自由行指南',
  description: '探索比利时霍斯特城堡深度游攻略。这座半废弃的红砖古堡，如何在护城河倒影与幽灵传说中，为你讲述中世纪的低语。',
}

export default function HorstCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '霍斯特城堡', href: '/attractions/horst-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`霍斯特城堡・Horst Castle・比利时・弗拉芒布拉班特省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经看腻了布鲁塞尔广场的人潮与光滑如新的宫殿，今天这份霍斯特城堡私藏旅游攻略，就带你躲进弗拉芒布拉班特省的静谧乡野，遇见一座“活着”的废墟。车行过整齐的农场与无人的小路，当那座赭红色的身影与它在护城河中的完美倒影，毫无预兆地撞入眼帘时，相信我，你会忘记呼吸。这不是一座修缮完美的博物馆式城堡，而是一座被时光精心“摧残”过的艺术品——屋顶塌陷，窗框空洞，藤蔓恣意攀爬。但正是这份残缺，配上周遭如镜的水面与流传几个世纪的幽灵传说，让它充满了摄人心魄的魔力。作为你的专属向导，这份霍斯特城堡自由行指南将带你深入其骨髓，不只告诉你如何拍到那张封神的倒影，更会分享如何感受一座古堡最真实、最忧郁的呼吸。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你已经看腻了布鲁塞尔广场的人潮与光滑如新的宫殿，今天这份霍斯特城堡私藏旅游攻略，就带你躲进弗拉芒布拉班特省的静谧乡野，遇见一座“活着”的废墟。车行过整齐的农场与无人的小路，当那座赭红色的身影与它在护城河中的完美倒影，毫无预兆地撞入眼帘时，相信我，你会忘记呼吸。这不是一座修缮完美的博物馆式城堡，而是一座被时光精心“摧残”过的艺术品——屋顶塌陷，窗框空洞，藤蔓恣意攀爬。但正是这份残缺，配上周遭如镜的水面与流传几个世纪的幽灵传说，让它充满了摄人心魄的魔力。作为你的专属向导，这份霍斯特城堡自由行指南将带你深入其骨髓，不只告诉你如何拍到那张封神的倒影，更会分享如何感受一座古堡最真实、最忧郁的呼吸。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`霍斯特城堡`} />
                <InfoRow label="英文名称" value={`Horst Castle`} />
                <InfoRow label="正式名称" value={`Horst Castle`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`弗拉芒布拉班特省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`霍斯特城堡的历史，就像它斑驳的红砖外墙一样层层叠叠。最早的文字记录可以追溯到13世纪，但我们现在看到的宏伟建筑主体，主要建于15至16世纪，由当时统治此地的霍斯特家族兴建。它在欧洲中世纪晚期至文艺复兴初期的低地国家贵族堡垒中，扮演着非常典型的角色：既是军事防御的据点，控制着周边的土地与交通；也是贵族权力与财富的奢华展示。然而，与许多被不断改建、始终有人居住的城堡不同，霍斯特城堡的命运在17世纪后急转直下。家族衰败，所有权几经易手，它逐渐被遗弃，成为了一个昂贵的“闲置资产”。18世纪的一场大火更是雪上加霜，加速了它的荒废进程。正是这种被主流历史“遗忘”的状态，让它意外地保存了某种原初的、未被后期风格大规模侵染的哥特式晚期风貌。它没有变成华丽的宫殿或热闹的博物馆，而是凝固在了衰败的那一刻，成为研究比利时本土封建建筑从防御性向居住性过渡，以及随后如何被历史浪潮淹没的珍贵“标本”。`} />
                <InfoRow label="建筑特色" value={`走近它，第一眼夺去你所有注意力的，一定是那大片温暖而沉郁的赭红色砖墙。与法国常见的浅色石灰岩城堡不同，这里的红砖是低地国家最质朴也最富乡土气息的材料，在阴天里显得格外厚重忧郁。建筑群呈不规则的四边形，环绕着一个开阔的内庭院。最震撼的是东南角那座高大的主塔楼（Donjon），它依然倔强地耸立着，但顶部已然破损，像一顶残缺的王冠。仔细看，墙体上布满了黑洞洞的窗口，窗棂早已消失，仿佛无数只空洞的眼睛，凝视着来访者。城堡的一部分屋顶已经完全塌陷，阳光可以直接洒进曾经的宴会大厅，照亮地面上疯长的野草。建筑与水的关系是这里设计的精髓：宽阔的护城河几乎完整地环绕城堡，河水并非死水，而是缓慢流动的活水。砖墙的倒影在水中被拉长、扭曲，随着微风和光线的变化，每一刻都是一幅截然不同的油画。苔藓、地衣和攀缘植物在砖缝间找到了家，为坚硬的线条增添了柔软的生命力。这种破败与庄严、坚硬与柔水、人造与自然的强烈对比，构成了它无可替代的视觉奇观。`} />
                <InfoRow label="建筑风格" value={`霍斯特城堡是晚期哥特式风格向早期文艺复兴风格过渡的一个迷人范例，你可以清晰地看到两种审美在它身上的拉锯与融合。整体上，它继承了哥特式建筑的垂直感和防御性特征：高耸的塔楼、厚重的墙壁、相对狭小的窗户（尤其是低层），以及用于防御的堞口和枪眼。这些元素都在诉说着它作为军事堡垒的出身。然而，在细节处，文艺复兴对对称、古典比例和舒适居住的追求已经开始萌芽。例如，一些较大的窗户采用了平顶或微微拱起的造型，而不是纯粹的尖拱，窗棂的划分也更为规整，力求引入更多光线。主入口和部分内部空间的装饰虽已残破，但仍能依稀辨识出一些古典风格的雕饰痕迹，比如简单的纹章和几何图案。这种混合风格恰恰反映了建造它的时代——一个旧秩序（中世纪封建与防御）尚未完全退场，新思潮（文艺复兴的人文与享乐）已然叩门的转折期。城堡未能完成向舒适宫殿的彻底转变便中途荒废，反而将这种“未完成”的过渡状态永久定格，让我们能直观感受到建筑风格流变的瞬间。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，霍斯特城堡早已超越了一座破败建筑本身。它是一座充满故事的地标，是童年探险的圣地，也是无数民间传说的源泉。最著名的“白色女士”幽灵故事代代相传，为它蒙上了一层神秘而浪漫的面纱，这种传说本身就成了地方文化认同的一部分。在现代社会，它的价值被重新发现和定义。首先，它是一个强大的美学符号，那种“凋零之美”（Ruin Aesthetics）吸引了无数画家、摄影师和电影制作人前来寻找灵感，它的形象出现在许多艺术作品中。其次，它被谨慎地保护为“浪漫的废墟”，不进行全面的修复重建，而是采取“凝固衰败”的维护策略，这本身就是一种现代文物保护理念的实践——尊重时间留下的痕迹，而非抹去它们。城堡和其所在的公园区域，如今是市民散步、骑行和沉思自然的宁静场所。夏季，它偶尔会成为露天音乐会或戏剧表演的背景舞台，古老的石墙与现代的艺术声音在此产生奇妙的共鸣。它教会人们欣赏不完美，在残缺中想象完整，在寂静中聆听历史深远的回响。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 霍斯特城堡一日游打卡路线攻略：从布鲁塞尔出发的魔幻日归之旅`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线与时间安排`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，攻略的重头戏来了！作为你的“云导游”，我为你规划了一条松弛有度、能捕捉城堡最美时刻的一日游路线。上午（10:00-12:00）：抵达与初探。 建议从布鲁塞尔中央火车站乘坐火车前往附近小镇，再转乘本地巴士或打车（约10分钟车程）直达城堡公园入口。别急着冲进去，先在护城河外围绕半圈，从不同角度欣赏城堡与倒影的全景。此时阳光角度较好，顺光拍摄主塔楼和水中倒影，色彩最是饱满。中午（12:00-13:30）：野餐与沉浸。 城堡内部不开放参观，但广阔的草地和长椅是你的绝佳餐厅。自带简单的三明治和水果，在树荫下野餐。闭上眼睛，听风声、鸟鸣、树叶沙沙响，想象几百年前这里马车往来、人声鼎沸的景象。下午（13:30-16:00）：深入探索与光影等待。 饭后，可以细细探索城堡的各个外立面，寻找砖墙上有趣的细节和雕刻痕迹。绕着护城河慢慢走，你会发现下午的阳光逐渐将城堡侧面照亮，倒影的质感从上午的清晰明丽变得柔和绵长。这是拍摄戏剧性侧影和长倒影的黄金时间。不妨找个安静角落坐下，读一读关于它的传说故事，让氛围慢慢渗透。傍晚（16:00后）：返程与回味。 在日落前踏上归途。如果自驾，回布鲁塞尔的路上不妨在附近的田园小镇稍作停留，喝杯咖啡，圆满结束这趟穿越时光的魔幻之旅。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  护城河西侧的完整倒影：走到城堡西侧的护城河岸边，这里视野最为开阔。当水面平静无波时，整个红砖建筑群连同天空的云朵会毫无失真地复刻在水中，形成一幅上下对称的完美画面。仔细观察，水中倒影的色彩甚至比实体更加浓郁深邃，仿佛那是城堡的幽灵双胞胎，一个在现世凋零，一个在水下永恒。稍微起风时，倒影碎成万千片红色的涟漪，又是另一番梦幻景象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  主塔楼顶部的残缺剪影：仰望那座最高的主塔。请注意它顶部参差不齐的废墟边缘。在蓝天背景下，那轮廓像极了被巨兽啃咬过的痕迹。几株顽强的灌木或小树从砖石缝隙中挣扎而出，在逆光中成为黑色的生动剪影。这个细节是霍斯特城堡灵魂的缩影——自然的生命力正在缓慢而坚定地回收人造的宏伟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  骑士厅残存的拱窗与光影：找到那个曾经可能是骑士厅或宴会厅的大厅遗迹（没有屋顶的那个）。走进去，站在大厅中央，抬头是开阔的天空。目光移向四周高大的墙壁，上面还留存着巨大的尖拱窗轮廓。下午的阳光会以极低的角度射入，在红砖地面上投下长长的、清晰的窗影。光柱中尘埃飞舞，你会瞬间感到时间在此刻既是流动的，又是静止的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  传说中“白色女士”出现的角落：根据传说，城堡一位不幸的女主人的幽灵时常出没。当地人常指向庭院某个僻静的角落或一段隐秘的楼梯残迹。无论你是否相信幽灵，站在那个角落，感受一下与其他地方不同的、或许更清凉的空气，聆听一下更细微的风声。想象力是最好的滤镜，这个细节让历史的叙事从建筑延伸到情感，变得血肉丰满。`}</p>
            </div>
          </Section>

          <Section title={`5. 霍斯特城堡自由行避坑指南与关键行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  关键信息与最佳时间：最重要的贴士放在开头——城堡主楼内部长期不对外开放，你只能参观外部和庭院。但这绝不意味着不值，因为精华全在外部景观与氛围。最佳游览季节是春末至秋初（5月-9月），植物茂盛，倒影最美。一定要选一个晴朗的下午前往，此时光线最为柔和，能拍出城堡与倒影最富层次感的照片。阴雨天虽然氛围忧郁，但景观效果大打折扣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备建议：城堡周边是自然公园，道路以草地、砂石路为主。务必穿一双舒适、防滑的徒步鞋或运动鞋，高跟鞋和皮鞋会让你举步维艰。比利时天气多变，即使是夏天，也建议带一件防风外套。记得带上驱蚊水，尤其夏季，水边蚊虫较多。摄影爱好者务必带上广角镜头（拍摄全景倒影）和长焦镜头（捕捉建筑细节）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与人流规避：这里并非热门旅游团景点，人流本身不多。但若想享受极致宁静，请避开周末下午。公共交通班次有限，务必提前查询好火车和当地巴士的时刻表，并计划好返程时间，以免长时间等待。最方便的方式是自驾，停车场免费且宽敞。使用导航时直接输入“Horst Castle, Holsbeek”即可准确抵达。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  安全与其他：尊重遗址，不要试图攀爬残破的墙体，既有危险也破坏文物。公园区域很安全，但毕竟地处偏僻，建议结伴而行，傍晚不要逗留太晚。无需门票，完全免费开放，这是一份难得的、无成本的震撼。最后，带上你的想象力和一颗安静的心，这就是探索霍斯特城堡最宝贵的“行李”。`}</p>
            </div>
          </Section>

          <Section title={`6. 霍斯特城堡周边住宿与美食慢生活攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡本身不提供住宿餐饮，但完全可以以此为中心，规划一次放松的乡间小住。如果想就近体验，可以选择住在霍尔斯贝克（Holsbeek） 或鲁汶（Leuven）。鲁汶作为著名的大学城，距离城堡约20分钟车程，住宿选择丰富，从设计酒店到温馨的B&B都有，夜生活和文化生活也更活跃。餐饮方面，强烈推荐在城堡游玩后，去附近找一家传统的弗拉芒菜餐馆。可以试试“Kasteel van Horst”这个名字的餐厅（并非城堡内，而是在附近村庄），尝尝地道的法兰德斯炖牛肉（Stoofvlees/Carbonade Flamande），用啤酒慢炖而成，肉质酥烂，配上炸薯条，是慰藉旅途疲劳的绝佳选择。或者，简单一点，在鲁汶老城广场找一家咖啡馆，喝一杯醇厚的比利时啤酒，配上一盘奶酪或肉丸。住在这一带，最大的享受就是夜晚的宁静和清晨在田园间散步的清新，与城堡的废墟美学形成一种生活节奏上的互补。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  帕克城堡（Park Castle）：驱车约15分钟，你可以到达另一座风格迥异的城堡——帕克城堡。与霍斯特的荒废浪漫相反，帕克城堡是一座保存完好、被护城河环绕的文艺复兴风格水上城堡，优雅对称，倒影同样精美。两者对比参观，你能直观感受到“持续居住与维护”与“浪漫荒废”两种命运带给古建筑的不同气质。它所在的公园也非常适合散步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  鲁汶老城（Leuven）：如果时间充裕，返回布鲁塞尔前，一定要在鲁汶停留。这座充满活力的大学城拥有美丽的市政厅、宏大的大学图书馆和遍布街头的啤酒文化。你可以参观著名的斯特拉酿酒厂（Stella Artois Brewery）（需预约），感受比利时啤酒王国的魅力。从霍斯特的极致宁静到鲁汶的学术喧嚣，一天的旅程将收获双重体验。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`霍斯特城堡教会我们，最深刻的美丽往往与完满无关。它的灵魂不在修复一新的厅堂里，而在那红砖的每一道裂缝里，在护城河永不止息的倒影中，在那些让人脊背发凉却又心驰神往的传说低语里。这是一座邀请你用想象力参与重建的城堡，在这里，时光的伤痕成了最动人的装饰。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/citadel-of-dinant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadel of Dinant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/freyr-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗雷尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Freÿr (Castle of Freÿr)</p>
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
