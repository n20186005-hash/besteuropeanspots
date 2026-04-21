import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '利瑟韦赫旅游攻略：揭秘法兰德斯平原上纯白村庄的慢时光指南',
  description: '探索比利时Lissewege，一个由白色砖房与宏伟平顶教堂构成的童话村落。这份深度游攻略带你避开人潮，感受中世纪朝圣之路的宁静。',
}

export default function LissewegePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '西佛兰德省', href: '/destinations/belgium' },
            { label: '利瑟韦赫', href: '/attractions/lissewege' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`利瑟韦赫・Lissewege・比利时・西佛兰德省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了布鲁日的人声鼎沸，想找一个能让你呼吸都变慢的地方，那今天这份利瑟韦赫私藏旅游攻略，就是为你准备的。从布鲁日坐上一趟慢悠悠的乡村巴士，不出半小时，你就会像跌进一个褪了色的明信片世界——法兰德斯平原一望无际的绿色地平线上，突然出现一整片雪白的房子，簇拥着一座巨大到“不合理”的教堂。它不是热门打卡地，却是我心中比利时自由行最该来的小众景点。作为你的专属向导，这份自由行指南会告诉你，如何用一整天，沉浸在这个“白色村庄”被时光遗忘的魔法里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了布鲁日的人声鼎沸，想找一个能让你呼吸都变慢的地方，那今天这份利瑟韦赫私藏旅游攻略，就是为你准备的。从布鲁日坐上一趟慢悠悠的乡村巴士，不出半小时，你就会像跌进一个褪了色的明信片世界——法兰德斯平原一望无际的绿色地平线上，突然出现一整片雪白的房子，簇拥着一座巨大到“不合理”的教堂。它不是热门打卡地，却是我心中比利时自由行最该来的小众景点。作为你的专属向导，这份自由行指南会告诉你，如何用一整天，沉浸在这个“白色村庄”被时光遗忘的魔法里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`利瑟韦赫`} />
                <InfoRow label="英文名称" value={`Lissewege`} />
                <InfoRow label="正式名称" value={`Lissewege`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`西佛兰德省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`利瑟韦赫的历史，是一部关于“通道”的史诗。中世纪时，这里可不是什么安静的后花园，它是通往布鲁日朝圣地——圣血教堂——的重要水上驿站和陆路中转站。你可以想象，风尘仆仆的朝圣者乘船沿着运河抵达，在这里歇脚、祈祷，积蓄力量完成最后的旅程。这座村庄的财富与格局，正源于这股川流不息的人流。它曾是法兰德斯地区最富有的教区之一，也因此，村民们才建得起那座规模惊人的圣母升天教堂，它仿佛一位沉默的巨人，见证了数个世纪的虔诚、贸易与奔波。然而，随着布鲁日运河的淤塞和朝圣路线的变迁，利瑟韦赫逐渐褪去了喧嚣，回归田园宁静，这份从“枢纽”到“隐士”的转变，反而让它完整保留下了中世纪晚期的原始风貌。`} />
                <InfoRow label="建筑特色" value={`这里的建筑特色，用一个词概括就是：白色的震撼。整个村落的房屋，几乎清一色由当地烧制的白色砖块砌成，在法兰德斯常见的红砖世界中，这抹纯白纯净得近乎执拗。阳光好的日子，整个村子像是在发光，白墙反射着天光，干净利落，没有一丝多余的装饰。而那座地标性的圣母升天教堂，更是将这种“白色哲学”推向极致。它最惊人的特点就是没有塔楼，只有一个巨大的、平顶的西立面，像一块被巨人精心切割过的白色巨石，沉稳地压在地平线上。走近看，砖块拼接的肌理清晰可见，巨大的扶壁毫不掩饰其功能性，彩绘玻璃窗是唯一的华丽点缀。这种质朴与宏大结合产生的反差美，极具视觉冲击力。`} />
                <InfoRow label="建筑风格" value={`利瑟韦赫教堂是斯海尔德哥特式 建筑的杰出代表。这种风格流行于斯海尔德河流域（即今比利时北部及荷兰西南部），你可以把它理解为“接地气的哥特式”。它保留了哥特式典型的尖拱窗和肋状拱顶，却褪去了法国哥特式那种冲向天际的狂热与繁复装饰。在这里，哥特式的“向上感”被一种横向的、沉稳的体量感取代。没有高耸入云的尖塔，取而代之的是那个宽阔的平顶立面，线条简洁有力。建筑大量使用本地砖材而非昂贵的石材，使得整个结构看起来敦实、温暖，仿佛是从法兰德斯肥沃的泥土里生长出来的，与平原景观浑然一体。这是一种服务于平民和社区，而非单纯炫技的建筑，充满了佛兰芒式的务实与含蓄之美。`} />
                <InfoRow label="文化价值" value={`对于现代人而言，利瑟韦赫的文化价值在于它提供了一个关于“静止”的范本。在这个效率至上的时代，这个村庄以其近乎凝固的时光，教导人们慢下来的艺术。它不再是一个通往别处的驿站，其本身就是目的地。当地人对维护这片白色净土有着深厚的社区自豪感，严格的建筑规范确保了视觉的纯粹。这里吸引着画家、作家和寻找内心平静的都市人。它就像一座露天的、关于中世纪生活美学的博物馆，但同时又是一个活着的社区。游客的到访是轻柔的，不会打破它的宁静。它提醒我们，历史不总是轰轰烈烈的纪念碑，也可以是这一砖一瓦砌成的、可供日常生活的静谧诗意。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 利瑟韦赫一日游打卡路线攻略：从宏伟教堂到白色小巷的完美漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟我来，咱们开始这一天的时光漫步。上午，把第一缕目光留给圣母升天教堂。别急着进去，先从村口的运河小桥远眺，拍下教堂倒映水中的全景。然后慢慢走近，绕着它走一圈，感受那份无塔的、压迫性的美。接着进入内部，让高达28米的空旷中殿震撼你，静坐片刻，看阳光透过彩窗在白色墙壁上作画。中午，从教堂出来，直接钻进对面的‘In de Witten Leeuw’咖啡馆，在户外白色阳伞下，点一份简单的火腿奶酪三明治和一杯本地啤酒，看广场上的鸽子起落。下午，是探索白色迷宫的时刻。从教堂广场随意选一条小巷钻进去，比如Kerkstraat或Sint-Aldegondisstraat。你会发现每家每户的白色都有细微差别，门框漆着墨绿、深蓝或黑色，窗台上必有鲜花。一路走到古老的村庄磨坊，爬上小坡，回望整个白色村落卧在绿色平原的怀抱。傍晚，一定要去村边的运河步道散步，这里是看日落的黄金点位，金色的光芒会给所有白砖房镶上暖边。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  教堂内部的“光之森林”：走进教堂中殿，立刻会被那29根巨大的圆形石柱吸引。它们稳稳地托起穹顶，营造出一种森林般的肃穆感。但真正的魔法在午后发生。当阳光以低角度射入南侧的彩绘玻璃窗时，会在白色的石灰墙和石柱上投下变幻莫测的、宝石般的光斑。光影缓缓移动，整座教堂仿佛在呼吸。记得找一个角落坐下，静静观察这出持续几个世纪的无声光影戏剧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  白砖墙的质感与层次：凑近看任意一堵民居的白墙，你会发现它的美在于质感。砖块并非纯白，带着些许米黄或灰白的色调，砖缝是深灰色的，勾勒出清晰的几何网格。几个世纪的风雨冲刷，在砖面上留下了细微的凹凸和水痕，像老人的皮肤纹路。有些墙角还特意保留了最初的红砖，像故意露出的历史底衫。这种丰富的“白”，是工业涂料无法模仿的岁月包浆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  圣血礼拜堂的静谧蓝光：在教堂内部南侧，藏着一个不起眼的小礼拜堂——圣血礼拜堂。这里的氛围与主殿的恢弘截然不同，幽暗、私密。祭坛后方的彩窗以深蓝和红色为主色调，透进来的光线也因此变得深邃、忧郁，仿佛凝固的深海。这里是朝圣者最终静默祷告的地方，空气中仿佛仍残留着几个世纪前低声呢喃的回响，瞬间将你拉入历史的虔敬语境。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  运河边的“明信片视角”：从村庄通往运河的小路尽头，是拍摄经典明信片角度的地方。缓缓流淌的运河像一条墨绿色的丝带，前景是野花摇曳的草地，中景是几座典型的白砖农舍和谷仓，背景则是那座宏伟的平顶教堂。当天空有云时，光影在平原上大片地移动，这个画面每一秒都在变化。架好相机，或者干脆只是用眼睛记录，这是利瑟韦赫田园诗意的浓缩一瞥。`}</p>
            </div>
          </Section>

          <Section title={`5. 利瑟韦赫自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  交通与时间规划避坑：利瑟韦赫没有火车站，公共交通主要依赖从布鲁日中央火车站出发的公交（如线路43或44A）。班次不算密集，尤其是周末和节假日，出发前务必在De Lijn官网或APP查好最新时刻表，错过一班可能要等很久。强烈建议平日来访，周末比利时本地游客会稍多。村庄极小，纯粹游览2-3小时足够，但想沉浸体验建议预留大半天。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备贴士：这里全是真实的石板路和乡间小径，务必穿一双绝对舒适的平底鞋。教堂内部石地板很凉，怕冷的可以穿双厚袜子。法兰德斯平原天气多变，即便夏天，一件防风外套或披肩也必不可少。如果你想拍出干净的照片，可以穿色彩鲜艳的衣服，与白色背景会形成美妙对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  尊重与沉浸体验：记住，这里首先是一个宁静的居住社区，而非主题公园。请保持安静，尤其是教堂内和住宅小巷里。大部分民居不对外开放，请勿擅入或过于贴近窗户张望。最好的体验方式就是“慢”——慢走，慢看，在一张长椅上多坐一会儿。村里商店和餐厅不多且关门较早（有些下午6点就打烊），建议自备少量零食和水，并在布鲁日解决正餐或提前查询好餐厅营业时间。`}</p>
            </div>
          </Section>

          <Section title={`6. 利瑟韦赫周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想在利瑟韦赫过夜，选择不多但极其独特。我首推村里由古老白砖农舍改造的B&B，例如 ‘t Wit Huis 或 B&B Lissewege。它们通常只有几个房间，主人热情好客，房间充满古董家具和蕾丝装饰，早上会为你准备丰盛的佛兰芒家庭早餐，在开满鲜花的花园里享用，是体验本地生活的绝佳方式。餐饮方面，如前所述，选项有限但精。教堂广场旁的 ‘In de Witten Leeuw’ 是村里的社交中心，咖啡、本地啤酒和简餐都不会出错。如果想吃得正式点，可以尝试 Restaurant Ter Doest（需短途车程），它坐落在一座中世纪修道院农场里，氛围绝佳，提供精致的佛兰芒现代菜肴。在这里，一定要点一杯比利时修道院啤酒，配上一盘地道的“佛兰德斯炖肉”，让浓郁酱汁温暖你的胃。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从利瑟韦赫出发，有两个延伸方向不容错过。一是回到布鲁日，但你可以选择从利瑟韦赫沿古老的运河步道或租一辆自行车，缓缓骑向这座名城，用另一种视角接近它。另一个更小众也更惬意的选择，是前往同样宁静的水镇达默。从利瑟韦赫骑车或乘短途公交即可到达。达默有着类似的运河景观，但建筑更多是传统的佛兰芒阶梯山墙，镇上有一座可爱的中世纪教堂和许多古旧的书店，被誉为“书镇”。在达默的运河边找个露天座，看着船只缓缓而过，你会感受到比布鲁日更松弛、更本土的佛兰德斯水乡风情。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`利瑟韦赫的灵魂，就镌刻在那无处不在的白色砖石里。那不是一种苍白，而是一种选择——选择用最质朴的材料，建造最宏伟的信仰；选择在历史的洪流褪去后，保持一种静默的尊严。它让你相信，真正的力量，有时就存在于这份坦然的不喧哗之中。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/notre-dame-de-namur-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Notre-Dame de Namur Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/namur-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Namur Citadel</p>
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
