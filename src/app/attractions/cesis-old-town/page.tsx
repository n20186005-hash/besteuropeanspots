import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采西斯古城 Cēsis Old Town｜沉睡在琥珀时光里的中世纪汉萨梦 - 最佳欧洲景点',
  description: '朋友，如果你厌倦了人声鼎沸的欧洲大热门，请一定跟我来采西斯。我的第一印象，是听见自己的脚步声——清晰地在老城的鹅卵石路上回响。那是一种被寂静放大了的、笃实的“嗒、嗒”声，仿佛在叩问时间本身。空气里是清冽的，混合着秋天落叶微腐的甜味、远处人家燃烧木柴的烟熏气，还有从古老石头缝里渗出来的、亘古不变的湿润...',
}

export default function CesisOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '采西斯古城', href: '/attractions/cesis-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`采西斯古城・Cēsis Old Town・拉脱维亚・采西斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你厌倦了人声鼎沸的欧洲大热门，请一定跟我来采西斯。我的第一印象，是听见自己的脚步声——清晰地在老城的鹅卵石路上回响。那是一种被寂静放大了的、笃实的“嗒、嗒”声，仿佛在叩问时间本身。空气里是清冽的，混合着秋天落叶微腐的甜味、远处人家燃烧木柴的烟熏气，还有从古老石头缝里渗出来的、亘古不变的湿润苔藓气息。阳光是斜的，金黄色的，把那些有着三四百年历史、刷成鹅黄、淡绿或浅粉色的木房子照得透亮，窗台上的天竺葵红得不像真的。
这里没有急匆匆的游客潮，你看到的多是拎着面包袋缓缓走过的老奶奶，或者在自家花园里修剪玫瑰的老爷爷。古城中心那座雄伟的红色砖砌城堡废墟，就那么安静地躺在小山丘上，像个疲惫但依然骄傲的巨人，身上爬满了常春藤。它不像那些修缮一新的宫殿，它坦然展示着自己的残缺和伤痕，而这种“未完成”的状态，恰恰给了想象力最大的驰骋空间。你可以触摸那些被风雨磨圆了的砖石边缘，冰凉，粗糙，但能感到一种奇异的温度。
最打动人的，是这里弥漫着一种“沉睡”的气质，但不是死寂，而是像童话里被施了魔法的城池，时间在这里流速变缓，甚至打了个盹儿。你坐在广场边的长椅上，看着白鸽起落，钟楼传来沉郁的报时声，一瞬间会恍惚，分不清今夕何夕。采西斯的美，不是那种扑面而来的惊艳，而是一种需要你静下心来，用毛孔去呼吸、用脚尖去感受的，缓慢渗透进心里的宁静力量。它告诉你，欧洲的底蕴，不只存在于巴黎罗马的辉煌殿堂，也深藏在这些被世界遗忘的角落，安静地发着光。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，如果你厌倦了人声鼎沸的欧洲大热门，请一定跟我来采西斯。我的第一印象，是听见自己的脚步声——清晰地在老城的鹅卵石路上回响。那是一种被寂静放大了的、笃实的“嗒、嗒”声，仿佛在叩问时间本身。空气里是清冽的，混合着秋天落叶微腐的甜味、远处人家燃烧木柴的烟熏气，还有从古老石头缝里渗出来的、亘古不变的湿润苔藓气息。阳光是斜的，金黄色的，把那些有着三四百年历史、刷成鹅黄、淡绿或浅粉色的木房子照得透亮，窗台上的天竺葵红得不像真的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有急匆匆的游客潮，你看到的多是拎着面包袋缓缓走过的老奶奶，或者在自家花园里修剪玫瑰的老爷爷。古城中心那座雄伟的红色砖砌城堡废墟，就那么安静地躺在小山丘上，像个疲惫但依然骄傲的巨人，身上爬满了常春藤。它不像那些修缮一新的宫殿，它坦然展示着自己的残缺和伤痕，而这种“未完成”的状态，恰恰给了想象力最大的驰骋空间。你可以触摸那些被风雨磨圆了的砖石边缘，冰凉，粗糙，但能感到一种奇异的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里弥漫着一种“沉睡”的气质，但不是死寂，而是像童话里被施了魔法的城池，时间在这里流速变缓，甚至打了个盹儿。你坐在广场边的长椅上，看着白鸽起落，钟楼传来沉郁的报时声，一瞬间会恍惚，分不清今夕何夕。采西斯的美，不是那种扑面而来的惊艳，而是一种需要你静下心来，用毛孔去呼吸、用脚尖去感受的，缓慢渗透进心里的宁静力量。它告诉你，欧洲的底蕴，不只存在于巴黎罗马的辉煌殿堂，也深藏在这些被世界遗忘的角落，安静地发着光。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`采西斯古城`} />
                <InfoRow label="英文名称" value={`Cēsis Old Town`} />
                <InfoRow label="正式名称" value={`Cēsis Old Town`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`采西斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波罗的海地区保存最完好的中世纪城镇核心之一，见证了利沃尼亚骑士团的兴衰与汉萨同盟的繁荣贸易。`} />
                <InfoRow label="建筑特色" value={`红砖砌筑的宏伟城堡废墟与蜿蜒的鹅卵石街道、色彩柔和的木构房屋形成强烈而和谐的对比。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御建筑、哥特式教堂及后期受汉萨同盟影响的中欧城镇布局为主。`} />
                <InfoRow label="文化价值" value={`一座活着的露天博物馆，其宁静的肌理中封存着十字军东征、北方战争与拉脱维亚民族觉醒的层层记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心的采西斯中世纪城堡废墟及博物馆开放时间为：5月至9月，每日10:00-18:00；10月至4月，周二至周日10:00-17:00，周一闭馆。圣约翰教堂通常在白天对游客开放，具体时间可能因宗教活动微调。建议出行前在官网确认最新安排。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。进入采西斯中世纪城堡废墟、城堡塔楼及博物馆的联票，成人约8欧元，学生及老人有优惠，家庭票更划算。仅参观城堡公园免费。圣约翰教堂有时会建议小额捐赠以支持维护。`} />
              <InfoRow label="地址" value={`Pils laukums 9, Cēsis, Cēsu novads, LV-4101, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加出发是最佳选择。里加国际机场抵达后，可乘坐出租车（约1.5小时，费用较高）或先乘公交到里加中央火车站。从里加中央火车站搭乘开往瓦尔卡或瓦尔米耶拉方向的火车，在采西斯站下车，车程约1小时45分钟，沿途是迷人的森林湖泊风光，班次每天数趟，可在拉脱维亚铁路官网提前购票。火车站步行至古城中心仅需10-15分钟，沿着标识清晰的宁静小路即可抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`采西斯的故事，得从一群穿着白袍、绣着黑十字的骑士说起。13世纪初，来自日耳曼的利沃尼亚骑士团看中了这里战略要冲的位置，开始在加乌亚河畔的高地上建造一座木堡。但木头不够坚固，很快，他们开始用当地烧制的红砖，构筑起波罗的海地区最坚固的石头城堡之一。这座城堡不仅是军事要塞，更是骑士团在维泽梅地区的权力中心。你可以想象，在那些寒冷漫长的冬夜，城堡大厅里炉火熊熊，骑士们喝着蜂蜜酒，商讨着如何与周边的原住民立窝尼亚人周旋，又或是计划着下一次的东征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间走到14至16世纪，采西斯迎来了它的黄金时代。它加入了强大的汉萨同盟——那个中世纪北欧的“商业北约”。得益于同盟的网络，采西斯成了繁荣的贸易枢纽。毛皮、蜂蜡、粮食从这里运往日贝克和布鲁日，而来自西欧的布料、盐和酒则源源不断地输入。老城广场周围的那些仓库和商人宅邸，就是那个时代的见证。城市的布局也定型了：以城堡和后来的圣约翰教堂为核心，街道呈放射状蔓延，充满了精明的实用主义色彩。这里不仅有骑士和商人，还有手艺精湛的工匠，行会的力量很强，城市获得了相当程度的自治权。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静的贸易岁月被战争的铁蹄踏碎。16世纪的利沃尼亚战争像一场席卷一切的瘟疫。采西斯城堡成了各方势力争夺的肥肉，在俄国沙皇伊凡雷帝、波兰-立陶宛联邦和瑞典王国之间反复易手。传说最惨烈的一役发生在1577年，面对俄军围城，城堡内的守军和居民宁死不降，最终引爆火药库，与部分敌人同归于尽。这场自毁式的壮烈牺牲，给城堡留下了永恒的伤疤，也诞生了关于“白色女士”幽灵的凄美传说。战争过后，城堡沦为废墟，城市的政治经济地位一落千丈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几百年，采西斯像一个没落的贵族，安静地偏居一隅。它经历了瑞典和波兰的统治，最终纳入沙俄帝国的版图。大火曾数次席卷木结构的城区，但拉脱维亚人一次次在原址上重建，保留了中世纪街道的原始格局。19世纪，民族浪漫主义的春风吹到这里，拉脱维亚的知识分子开始重新发掘这片土地的历史价值，那些城堡废墟不再被视为耻辱的伤疤，而是民族坚韧精神的象征。城堡公园被精心设计成英式风景园林，废墟成为了公园里最震撼的焦点，这种将“残缺”融入“自然”的美学，非常独特。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`即便是苏联时期，采西斯也奇迹般地没有遭到大规模工业化建设的破坏，老城的灵魂得以保存。1991年拉脱维亚恢复独立后，这里成为了国家历史认同的重要地标。今天，当你走在它的街道上，脚下是13世纪的铺路石，身旁是18世纪的木屋，抬眼望见的是13-16世纪的城堡残垣，而公园里坐着的是21世纪刷着手机、享受着宁静的年轻人。所有的历史层理，都如此清晰、如此和平地共存在同一个空间里，这才是采西斯最了不起的魔法。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的采西斯深度游，需要一整个白天，抱着“迷失”而非“打卡”的心态。建议早上十点左右抵达，这时阳光正好洒满老城东侧，光线温柔。整体耗时大约4-5小时，节奏务必放慢。先从外围的城堡公园开始，由自然静谧过渡到历史厚重，再深入老城街巷感受生活气息，最后登高望远，以全景视野收尾。这样的安排，如同阅读一本好书，从序言缓缓进入正文，情绪和认知都层层递进，避免了一开始就直面最宏伟的废墟而产生的感官疲劳，也让最后的登顶有了“揭开全貌”的酣畅感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适的平底鞋，鹅卵石路面对高跟鞋是灾难，也影响你沉浸体验的心境。
参观城堡塔楼需要手持提供的蜡烛照明上下，虽有铁扶手，但台阶陡峭黑暗，务必注意安全，保管好手机。
如果夏季来访，提前查询古城是否举办中世纪节，那是沉浸式体验的绝佳机会，但也会更拥挤。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡公园宁静的湖畔开始你的旅程，看天鹅划过水面，城堡废墟的倒影在波光中破碎又重组。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡走上山丘，亲手推开那扇厚重的木质古城门，吱呀一声仿佛跨入另一个时空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城广场的“时光之石”旁驻足片刻，用手掌感受上面刻着的不同年代的城市徽记。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣约翰教堂内部，让眼睛适应昏暗，静听自己的呼吸与古老穹顶的回响交织。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要鼓起勇气，沿着中世纪城堡塔楼狭窄黑暗的螺旋石阶，手持蜡烛攀爬到顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡主废墟的拱门下找个石阶坐下，闭上眼睛，任凭想象重构骑士与商贾穿梭的往昔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意拐进任何一条吸引你的小巷，寻找那些隐藏在门楣上、窗棂间的古老雕刻与铁艺招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在玫瑰广场旁的露天咖啡馆坐下，点一杯拉脱维亚传统的格瓦斯或黑啤，看落日余晖为古城镀金。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡废墟与湖面倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在城堡公园的湖畔西侧，利用平静的水面拍摄废墟及其完美倒影，构图上下对称，意境空灵。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`塔楼顶端俯瞰红屋顶`}</h4>
                  <p className="text-sm text-gray-700">{`登上城堡塔楼后，将相机或手机镜头从垛口伸出，俯拍老城连绵的红色瓦顶和点缀其间的教堂尖塔，这是采西斯的标志性视角。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣约翰教堂内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光充足的下午，站在教堂中殿，等待光线透过高大的彩色玻璃窗，在地面投下梦幻般的光斑，以长椅和立柱为前景构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`新城门拱框取景`}</h4>
                  <p className="text-sm text-gray-700">{`以“新城门”的石砌拱门作为天然画框，框住门后延伸的鹅卵石街道和两侧色彩柔和的木屋，照片立刻有了深度和故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷石板路特写`}</h4>
                  <p className="text-sm text-gray-700">{`雨后的清晨，蹲下来低角度拍摄某条小巷被磨得发亮的鹅卵石路面，水洼倒映着两侧建筑的色彩，充满细节和质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一个中长焦镜头，非常适合在塔楼上压缩拍摄老城密集的屋顶景观，也能捕捉建筑立面的精美细节。`}</li>
                <li>• {`拉脱维亚夏季白昼极长，晚上八九点光线依然柔和，是拍摄“蓝调时刻”金色灯火与深蓝天幕对比的绝佳时机。`}</li>
                <li>• {`教堂内部拍照请务必关闭闪光灯，保持肃静，并注意是否有禁止拍摄的标识（通常允许）。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城广场旁一间由19世纪商人宅邸改造的温馨客栈，房间不大但充满古董家具的韵味，老板娘会为你准备丰盛的拉脱维亚式家庭早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住坐落在城堡公园边缘的森林小木屋，清晨在鸟鸣中醒来，推开门就能散步到城堡废墟脚下，彻底融入历史与自然之中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻位于古城中心一栋经过极致修复的汉萨同盟时期贵族官邸，室内是低调奢华的北欧设计，但保留了原始的石头墙壁和木梁，历史感与现代舒适无缝衔接。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然爱好者之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在加乌亚国家公园内的生态民宿，离古城仅十分钟车程，白天探索古城，晚上回归森林湖泊的怀抱，体验真正的维泽梅慢生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）和圣诞节期间是旺季，住宿紧张，务必提前数周甚至数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`采西斯治安极好，深夜在老城漫步也倍感安心，但基本的财物保管意识仍需保持。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多特色民宿不设24小时前台，预订时务必确认好入住时间并保持沟通顺畅。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开采西斯好些日子了，我脑子里最常回放的，不是某个具体的画面，而是一种整体的“感觉”。那是一种被厚实的时间包裹着的感觉，安全，宁静，让人莫名的心安。在这个一切都在追求更新、更快、更炫目的世界里，采西斯像一位沉着的老者，它不语，只是静静地在那里，告诉你：残缺可以是一种美，寂静可以是一种力量，遗忘的角落可能藏着最真实的宝藏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它没有试图讨好任何人，不贩卖廉价的异域风情，也不营造戏剧性的悲情。它就是它自己，一个经历过荣耀、战火、衰落与平和的古老生命体。在这里旅行，更像是一次内心的对谈。你会不由自主地慢下来，思考什么是短暂，什么是永恒；什么是浮于表面的喧闹，什么是沉淀在砖石里的文明脉搏。对于每一位厌倦了流水线式观光、渴望在旅途中找到一丝静谧和自我对话的深度游爱好者来说，采西斯古城都是一个必须抵达的驿站。它让你相信，世界上还有一些地方，时间是以不同的密度在流淌，而你能有幸，走进去，做一个短暂的、幸福的梦游人。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/otranto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥特朗托老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Otranto Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szekesfehervar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞克什白堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Székesfehérvár Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veiofro-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦纳夫罗古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veiofro Old Town</p>
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
