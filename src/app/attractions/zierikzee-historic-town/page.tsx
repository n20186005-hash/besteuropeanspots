import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '济里克泽历史老城 Zierikzee 荷兰｜被时光遗忘的中世纪海港珍珠 - 最佳欧洲景点',
  description: '车子驶过那片平坦得让人心静的新垦地，当第一缕带着咸味的海风穿过车窗，你就知道，济里克泽到了。这味道很特别，不是纯粹的腥，而是混合了湿润的木头、晒干的渔网，还有远处滩涂上淤泥那种肥沃的气息。你的第一眼，大概率会是那座巍峨的“南门”——一座厚重的砖石堡垒，巨大的木闸门仿佛随时会落下。但奇怪的是，它没有丝...',
}

export default function ZierikzeeHistoricTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '济里克泽', href: '/destinations/netherlands' },
            { label: '济里克泽历史老城', href: '/attractions/zierikzee-historic-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`济里克泽历史老城・Zierikzee・荷兰・济里克泽`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶过那片平坦得让人心静的新垦地，当第一缕带着咸味的海风穿过车窗，你就知道，济里克泽到了。这味道很特别，不是纯粹的腥，而是混合了湿润的木头、晒干的渔网，还有远处滩涂上淤泥那种肥沃的气息。你的第一眼，大概率会是那座巍峨的“南门”——一座厚重的砖石堡垒，巨大的木闸门仿佛随时会落下。但奇怪的是，它没有丝毫的压迫感，护城河里的水安静地映着蓝天白云，几只天鹅悠悠划过，门洞里传来孩子们踩着自行车铃铛的清脆声响。这座城市，就这样把它的威严历史和市井烟火，毫无违和地揉在了一起。
走进城门，时间立刻慢了下来。脚下是几百年被脚步打磨得温润发亮的鹅卵石路，缝隙里长出细小的青苔。道路两旁是紧密排列的山墙房屋，每一栋都有自己的表情：那栋漆着墨绿色的，山墙像一座微缩的城堡，顶端立着风向标；旁边那栋赭石色的，窗户窄窄的，窗台上必定摆着盛放的天竺葵，红得像一团团火。阳光斜射过来，在砖墙上切割出明暗交错的光影，空气里飘着隔壁面包店刚出炉的“泽兰省面包”的焦香，还有咖啡的醇厚。你几乎听不到汽车的喧嚣，只有自行车的链条声、码头边海鸥的鸣叫，以及远处市政厅钟楼那沉稳、不慌不忙的报时声。
当地人生活在这里，就像呼吸一样自然。你会看到头发花白的老先生，坐在自家临运河的台阶上读报纸，脚边趴着一只昏昏欲睡的狗。码头上，不再是繁忙的商船，而是漆成亮蓝色或白色的休闲小艇，主人在甲板上不紧不慢地擦洗着。运河的水面像一块巨大的、微微晃动的深色绸缎，倒映着山墙、蓝天和云朵，偶尔被一只划过的小船搅碎，又慢慢愈合。这里的核心魅力，不在于某个惊世骇俗的单体建筑，而在于一种整体性的、沉浸式的氛围。它是一本依然在被书写的、关于荷兰人与大海关系的立体史书，没有博物馆的玻璃橱窗，整座城就是展品本身，而生活其中的人们，就是最生动的注解。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶过那片平坦得让人心静的新垦地，当第一缕带着咸味的海风穿过车窗，你就知道，济里克泽到了。这味道很特别，不是纯粹的腥，而是混合了湿润的木头、晒干的渔网，还有远处滩涂上淤泥那种肥沃的气息。你的第一眼，大概率会是那座巍峨的“南门”——一座厚重的砖石堡垒，巨大的木闸门仿佛随时会落下。但奇怪的是，它没有丝毫的压迫感，护城河里的水安静地映着蓝天白云，几只天鹅悠悠划过，门洞里传来孩子们踩着自行车铃铛的清脆声响。这座城市，就这样把它的威严历史和市井烟火，毫无违和地揉在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城门，时间立刻慢了下来。脚下是几百年被脚步打磨得温润发亮的鹅卵石路，缝隙里长出细小的青苔。道路两旁是紧密排列的山墙房屋，每一栋都有自己的表情：那栋漆着墨绿色的，山墙像一座微缩的城堡，顶端立着风向标；旁边那栋赭石色的，窗户窄窄的，窗台上必定摆着盛放的天竺葵，红得像一团团火。阳光斜射过来，在砖墙上切割出明暗交错的光影，空气里飘着隔壁面包店刚出炉的“泽兰省面包”的焦香，还有咖啡的醇厚。你几乎听不到汽车的喧嚣，只有自行车的链条声、码头边海鸥的鸣叫，以及远处市政厅钟楼那沉稳、不慌不忙的报时声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人生活在这里，就像呼吸一样自然。你会看到头发花白的老先生，坐在自家临运河的台阶上读报纸，脚边趴着一只昏昏欲睡的狗。码头上，不再是繁忙的商船，而是漆成亮蓝色或白色的休闲小艇，主人在甲板上不紧不慢地擦洗着。运河的水面像一块巨大的、微微晃动的深色绸缎，倒映着山墙、蓝天和云朵，偶尔被一只划过的小船搅碎，又慢慢愈合。这里的核心魅力，不在于某个惊世骇俗的单体建筑，而在于一种整体性的、沉浸式的氛围。它是一本依然在被书写的、关于荷兰人与大海关系的立体史书，没有博物馆的玻璃橱窗，整座城就是展品本身，而生活其中的人们，就是最生动的注解。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`济里克泽历史老城`} />
                <InfoRow label="英文名称" value={`Zierikzee`} />
                <InfoRow label="正式名称" value={`Zierikzee Historic Town`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`济里克泽`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`荷兰黄金时代重要的鲱鱼贸易与盐业港口，泽兰省抵抗西班牙军队围攻的坚强堡垒，其完整的防御工事与城市格局是北海沿岸城市发展的活化石。`} />
                <InfoRow label="建筑特色" value={`密集保存着超过500座国家级纪念建筑，以精美的阶梯式山墙、厚实的砖石结构以及古朴的运河码头为标志性景观。`} />
                <InfoRow label="建筑风格" value={`以北欧哥特式与荷兰文艺复兴风格为主，砖砌建筑的简洁线条与繁复山墙装饰形成独特对比。`} />
                <InfoRow label="文化价值" value={`一座活着的航海遗产博物馆，将中世纪汉萨同盟的商贸精神、与大海搏斗的围垦文化，以及慢节奏的本地生活完美融合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城街道及公共区域全天开放。城内主要博物馆（如市政厅博物馆、海事博物馆）开放时间通常为周二至周日10:00-17:00，周一闭馆。个别历史建筑内部（如圣利文斯教堂塔楼）仅在夏季（4月至10月）及特定导览时段开放。建议行前在官网或当地旅游信息中心（VVV）确认最新安排。`} />
              <InfoRow label="门票价格" value={`进入老城区域免费。参观各独立景点需单独购票：圣利文斯教堂塔楼登顶约5欧元，市政厅博物馆约6欧元，联票通常有优惠。持荷兰博物馆卡（Museumkaart）可免费进入多数合作博物馆。12岁以下儿童及学生通常享有折扣。`} />
              <InfoRow label="地址" value={`Zierikzee Centrum, 4301 ED Zierikzee, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发最便捷。乘坐火车至鹿特丹中央火车站（约30分钟），换乘前往齐里克泽方向的火车（Sprinter类型），在齐里克泽站下车，总耗时约2小时。火车班次频繁，每小时2-4班，可在NS官网或App购票。从火车站步行至老城中心仅需10分钟。若自驾，可将车停在老城外围的“P+Zierikzee”停车场，再步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`济里克泽的故事，是和北海的波涛紧紧绑在一起的。早在13世纪，这里只是一个靠近斯海尔德河口的小渔村。但它的地理位置太关键了，位于北海与内陆水系的交汇处。于是，命运之手轻轻一推，它迅速成长为汉萨同盟中一颗活跃的贸易明珠。想象一下14、15世纪的港口：码头上堆满了从波罗的海运来的木材、谷物，本地满载鲱鱼的船只正准备启航前往英格兰或法国，空气中弥漫着海盐、鱼腥和远方货物的混杂气味。财富随着潮水涌来，那些我们今天看到的美丽山墙房子，正是那个“鲱鱼等于白银”的黄金时代，商人们炫耀实力的方式。城市的轮廓，也在一次次与洪水和入侵者的对抗中变得清晰，坚固的城墙和城门拔地而起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，荣耀总是伴随着觊觎。16世纪的尼德兰反抗西班牙统治的“八十年战争”中，济里克泽成了风暴眼。最著名的莫过于1575-1576年的漫长围城。西班牙军队像铁桶一样将小城围住，企图掐断这颗反抗省的心脏。据说，城内弹尽粮绝，人们甚至开始吃老鼠和皮革。但泽兰人的倔强刻在骨子里，他们凭借复杂的运河系统和城墙工事苦苦支撑。转折点来自一场传奇的“奶酪与面包”行动：一群本地水手，在一个漆黑的暴风雨夜，驾驶着小型平底船，奇迹般地穿过敌军封锁线，为城内运去了救命粮。这场胜利不仅保住了城市，更极大地鼓舞了整个尼德兰的士气，济里克泽从此被冠以“坚强之城”的称号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`黄金时代渐渐日落，但济里克泽并未沉寂。它转型成为重要的盐业提炼中心，从法国和葡萄牙运来的海盐在这里加工。你能在许多老房子的山墙上，看到过去用来吊装盐包的滑轮遗迹。然而，大海给予恩赐，也带来无情考验。1953年2月1日，那场恐怖的北海大洪水席卷了泽兰省，济里克泽也未能幸免。海水冲破了堤坝，淹没了低洼的街道。灾难照片里，人们划着船在熟悉的广场上“航行”。这场浩劫直接催生了荷兰举世闻名的“三角洲工程”。今天，你开车来时经过的那些宏伟水闸和风暴涌潮屏障，就是那次伤疤后诞生的现代奇迹。济里克泽挺了过来，并且刻意选择了“不发展”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`是的，它选择了“冻结”。战后荷兰经济腾飞，许多城市大规模现代化改造，但济里克泽的居民和市政当局做了一个了不起的决定：最大限度地保存老城原貌。他们修复，但不颠覆；他们引入现代生活设施，但小心翼翼地将其隐藏在中世纪的外壳之下。电线被埋入地下，新的砖块特意做旧以匹配古老的邻居。正是这种集体的历史自觉，让济里克泽没有沦为迪士尼式的布景板，而成为一个有呼吸、有温度的活遗产。你走过的每一条小巷，摸过的每一块砖石，都不是单纯的文物，而是一代代泽兰人面对海洋、面对历史，做出选择后的总和。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给济里克泽至少留出一整天的时间，它的美在于闲逛和偶然发现。建议上午十点前抵达，这时旅行团还未涌入，阳光柔和，是拍照和感受宁静老城的最佳时机。整体游览可以安排6-8小时的悠闲节奏，从象征性的南门开始，沿着运河和主街深入腹地，午后参观一两个精选博物馆，傍晚时分留给城墙和港口，看日落将砖石染成金色。这样的安排顺应了光线的变化，也能体验从城市肌理到文化内核，再到自然景观的层次感。请务必穿一双最舒适的平底鞋，因为鹅卵石路才是这里真正的主人。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城中心区域几乎全为步行区，自驾者务必利用外围停车场，否则狭窄街道会车将是噩梦。
许多小博物馆和店铺可能在周一闭馆，或者午间有较长的休息时间（12:30-13:30），规划行程时需留意。
夏季周末可能游客稍多，若追求绝对宁静，工作日或平季（春秋）前来体验更佳。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宏伟的南门（Zuidhavenpoort）下的拱洞穿过，用手触摸那些冰凉而粗糙的砖石，想象一下1576年围城解除时市民从此门欢呼涌出的历史场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着运河（Nieuwe Haven）向北慢行，让你的眼睛尽情享受两侧山墙建筑的视觉盛宴，留心寻找那些装饰着船锚、鲱鱼或盐包图案的山墙石刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那些看似不起眼的窄巷，比如 Sint Domus 小巷，让高耸的山墙将天空切割成一条蓝色的溪流，感受中世纪城市肌理的压迫与亲密。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到老市政厅（Stadhuis）前广场，仰头欣赏它堪称荷兰文艺复兴杰作的华丽立面，以及那座报时的钟楼，然后坐在广场边的长椅上看来往行人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票登上圣利文斯教堂（Sint-Lievensmonstertoren）那未完成的巨大塔楼（只建到59米），在盘旋而上的狭窄楼梯尽头，收获俯瞰整个红瓦屋顶迷宫和远处广阔泽兰水道的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进市政厅内的“斯特拉博物馆”，在一个个精致的模型和油画里，深入了解这座城市从沙洲成长为贸易重镇的跌宕命运。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在 Noordhavenpoort 附近的城墙公园（Vestingpark）找一张面向旧港口的椅子坐下，拿出准备好的简单午餐，看着帆船桅杆随着水波轻轻摇晃，享受真正的本地节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，沿着部分修复的古城墙散步，走到西边的风力磨坊“De Hoop”附近，等待夕阳将运河的水道染成一条流动的熔金河。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`南门护城河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在护城河南侧，利用无风时平静如镜的水面，拍摄城门及其完美倒影，对称构图能极致展现中世纪防御工事的威严与静谧。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣利文斯塔楼俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`登塔后，寻找将红色屋顶群、蜿蜒运河与远处北海滩涂同时纳入画面的西北角角度，使用长焦镜头压缩空间，能拍出层次极其丰富的“地图式”照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老市政厅山墙细节`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，贴近市政厅建筑，用仰拍角度聚焦其山墙上繁复的石雕、徽章和雕像，侧光能让石头的纹理和雕刻的阴影立体感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Noordhavenpoort 城门与帆船`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，在旧港口北侧，以古老的北门为框架，将对焦放在门前停泊的现代休闲帆船上，形成古今对话的趣味构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`鹅卵石小巷光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直射入狭窄巷弄（如Grote Burg街某段），捕捉光影在古老砖墙和圆润鹅卵石上形成的强烈明暗对比与几何图案。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`泽兰省光线通透但风大，拍摄水面倒影时需抓住风歇的片刻，使用偏振镜可以有效减少水反光并增强蓝天饱和度。`}</li>
                <li>• {`尊重当地居民隐私，避免将镜头直接对准私人住宅的窗户或院内，拍摄街景时以建筑结构和公共生活场景为主。`}</li>
                <li>• {`尝试在“黄金时刻”（日落前后一小时）拍摄，这时柔和温暖的光线能为济里克泽的砖石建筑披上最具魅力的色彩。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河边的历史小屋`}</h4>
                  <p className="text-sm text-blue-800">{`租下一栋经过现代化改造的17世纪山墙住宅，住在真正的古迹里，早晨推开窗就是波光粼粼的运河和对面邻居家窗台的花草。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`港口旁的特色船屋`}</h4>
                  <p className="text-sm text-green-800">{`体验一晚停泊在旧港口的舒适船屋，在轻微的波浪摇晃中入睡，清晨被海鸥的叫声和第一缕照在甲板上的阳光唤醒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`老城中心的舒适民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`选择一家由本地家庭经营的民宿，主人会为你准备地道的泽兰省早餐，并告诉你那些旅行指南上找不到的私房散步路线。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静乡村的精品酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求绝对宁静，可以入住老城外围数分钟车程的乡村精品酒店，坐落在开阔的田野间，晚上能看见璀璨的星空，体验另一种泽兰风情。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）和重大节庆日（如鲱鱼节）期间住宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多数为历史建筑，楼梯可能陡峭，房间格局也可能不规则，这是魅力的一部分，但携带大件行李或行动不便者需提前沟通。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择住宿时注意是否包含停车位，老城内停车位稀缺且昂贵，有免费停车位的住宿通常位于外围。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开济里克泽好多天了，可那股混合着海风、咖啡和古老木头的气味，好像还萦绕在鼻尖。它没有给你那种初见绝世景观的瞬间震撼，而是一种缓慢的、渗透性的抚慰。在这里，你会不自觉地调整呼吸，跟上那座古老钟楼的节奏。你会发现，自己不再急于赶往下一个景点，而是愿意花半个小时，看一位老爷爷如何不慌不忙地把他的小艇缆绳系成一个完美的水手结。这座城市教会你的，是一种“深度的在场感”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在追求更新、更快、更闪亮的世界里，济里克泽的存在，像一个温柔而坚定的反驳。它证明了“保存”不是停滞，而是一种充满智慧的选择；证明了历史不是教科书里干瘪的日期，而是你脚下凹凸不平的石路，是门环上的锈迹，是酒馆里人们举杯时眼角的笑纹。对于真正的深度旅行者来说，这里不是打卡地，而是一个可以让自己慢下来、沉进去的时空胶囊。它让你触摸到荷兰灵魂中除了风车和郁金香之外，那更为坚韧、务实、与大海共舞的根脉。来一趟济里克泽吧，不是为了收集又一个地名，而是为了让自己的记忆里，多一份沉着而悠长的、海潮般的回响。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/xanthi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑西古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanthi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fort-bourtange" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔坦赫星形要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort Bourtange</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visby" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯比老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visby</p>
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
