import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉瓜迪亚 Laguardia｜探秘被城墙与地下千米酒窖网络包围的里奥哈葡萄酒名城 - 最佳欧洲景点',
  description: '车子缓缓驶近，首先映入眼帘的是一圈敦实、完整得令人惊讶的石头城墙，像一位沉默的巨人环抱着整个山丘。穿过古老的城门拱洞，时间瞬间慢了下来。车轮压在泛着油光的鹅卵石上发出沉闷的咕噜声，两侧是蜂蜜色石头砌成的高大房屋，阳台上垂挂着天竺葵，空气中除了南欧小镇常有的干燥阳光味，还隐隐浮动着一丝复杂的气息——那',
}

export default function LaguardiaRiojaWineCellarTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉瓜迪亚', href: '/attractions/laguardia-rioja-wine-cellar-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉瓜迪亚・Laguardia・西班牙・拉瓜迪亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶近，首先映入眼帘的是一圈敦实、完整得令人惊讶的石头城墙，像一位沉默的巨人环抱着整个山丘。穿过古老的城门拱洞，时间瞬间慢了下来。车轮压在泛着油光的鹅卵石上发出沉闷的咕噜声，两侧是蜂蜜色石头砌成的高大房屋，阳台上垂挂着天竺葵，空气中除了南欧小镇常有的干燥阳光味，还隐隐浮动着一丝复杂的气息——那是橡木桶、陈年酒液和湿润岩石混合的味道，从脚下看不见的深处幽幽传来。这就是拉瓜迪亚给你的第一份礼物：一种立体的、充满暗示的嗅觉地图。
走在仅容两人错身的小巷里，你会不自觉地放轻脚步，仿佛怕惊扰了地下的沉睡者。然而，这里的生活气息却异常鲜活。广场上，老人们坐在长椅上用快速的巴斯克语闲聊；面包店刚出炉的“txantxigorri”（一种当地甜面包）香气热腾腾地涌出。但最奇妙的体验发生在你走进任何一家挂着“Bodega”招牌的酒吧或餐厅时。老板可能会神秘地眨眨眼，带你穿过厨房，打开一扇沉重的木门，或掀起一块地板——一条向下的石阶赫然出现。阴凉湿润的空气扑面而来，昏暗的灯光照亮了拱形的石顶和巨大的橡木桶。你这才真切地意识到，你脚下踩着的，不是一个普通的地基，而是一个延续了数百年的、充满生命力的巨大酒窖网络。
这种“地上一个镇，地下一个城”的格局，构成了拉瓜迪亚无可替代的核心魅力。它不是一个单纯的露天博物馆，而是一个仍然呼吸、运作的有机体。葡萄酒不仅是它的经济命脉，更是它跳动的心脏和集体的记忆。每一缕从地窖通风口飘出的气息，每一声从酒桶旁传来的轻轻敲击，都在诉说着家族传承、风土秘密和时间的力量。在这里，历史不是被封存在玻璃柜里，而是储存在每一个酒瓶中，流淌在每一个当地人的血液里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子缓缓驶近，首先映入眼帘的是一圈敦实、完整得令人惊讶的石头城墙，像一位沉默的巨人环抱着整个山丘。穿过古老的城门拱洞，时间瞬间慢了下来。车轮压在泛着油光的鹅卵石上发出沉闷的咕噜声，两侧是蜂蜜色石头砌成的高大房屋，阳台上垂挂着天竺葵，空气中除了南欧小镇常有的干燥阳光味，还隐隐浮动着一丝复杂的气息——那是橡木桶、陈年酒液和湿润岩石混合的味道，从脚下看不见的深处幽幽传来。这就是拉瓜迪亚给你的第一份礼物：一种立体的、充满暗示的嗅觉地图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在仅容两人错身的小巷里，你会不自觉地放轻脚步，仿佛怕惊扰了地下的沉睡者。然而，这里的生活气息却异常鲜活。广场上，老人们坐在长椅上用快速的巴斯克语闲聊；面包店刚出炉的“txantxigorri”（一种当地甜面包）香气热腾腾地涌出。但最奇妙的体验发生在你走进任何一家挂着“Bodega”招牌的酒吧或餐厅时。老板可能会神秘地眨眨眼，带你穿过厨房，打开一扇沉重的木门，或掀起一块地板——一条向下的石阶赫然出现。阴凉湿润的空气扑面而来，昏暗的灯光照亮了拱形的石顶和巨大的橡木桶。你这才真切地意识到，你脚下踩着的，不是一个普通的地基，而是一个延续了数百年的、充满生命力的巨大酒窖网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种“地上一个镇，地下一个城”的格局，构成了拉瓜迪亚无可替代的核心魅力。它不是一个单纯的露天博物馆，而是一个仍然呼吸、运作的有机体。葡萄酒不仅是它的经济命脉，更是它跳动的心脏和集体的记忆。每一缕从地窖通风口飘出的气息，每一声从酒桶旁传来的轻轻敲击，都在诉说着家族传承、风土秘密和时间的力量。在这里，历史不是被封存在玻璃柜里，而是储存在每一个酒瓶中，流淌在每一个当地人的血液里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉瓜迪亚`} />
                <InfoRow label="英文名称" value={`Laguardia`} />
                <InfoRow label="正式名称" value={`Laguardia`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`拉瓜迪亚`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在军事防御与葡萄酒经济双重需求下生长出的、独一无二的中世纪要塞城镇，其地下空间是里奥哈阿拉瓦萨产区数百年的酿酒智慧与生活历史的立体博物馆。`} />
                <InfoRow label="建筑特色" value={`地上是保存完好的中世纪城墙、狭窄石板街巷与古老石屋，地下则是迷宫般相互连通、深达数层的家族酒窖网络，形成了“地上生活，地下陈酿”的奇特城市结构。`} />
                <InfoRow label="建筑风格" value={`地上建筑以坚固的巴斯克-里奥哈地区中世纪民用石砌建筑风格为主，防御工事特征明显；地下酒窖则是功能至上的拱顶石室，体现了因地制宜的实用智慧。`} />
                <InfoRow label="文化价值" value={`是理解西班牙里奥哈葡萄酒文化、巴斯克地区历史以及人类如何巧妙利用自然与地理条件创造生存空间的活态典范。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。重要景点如圣玛利亚德洛斯雷耶斯教堂（Santa María de los Reyes）开放时间一般为周二至周日 10:30 - 14:00，夏季会延长至傍晚；多数地下酒窖参观需通过镇上酒吧、餐厅或旅游局提前预约，具体时间依各家安排而定，建议至少提前一天查询并预订。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观主要教堂内部通常需支付小额门票（约3-5欧元）。地下酒窖导览体验价格差异较大，基础品酒参观约15-25欧元/人，包含多款顶级里奥哈葡萄酒品鉴及历史讲解的深度体验可达40-60欧元/人。许多餐厅也提供包含酒窖参观的套餐。`} />
              <InfoRow label="地址" value={`Plaza Mayor, s/n, 01300 Laguardia, Álava, Spain`} />
              <InfoRow label="交通方式" value={`最近的主要机场是毕尔巴鄂机场（BIO）和维多利亚机场（VIT），但后者航班较少。从毕尔巴鄂机场租车自驾是最方便的选择，沿AP-68高速公路行驶约1小时15分钟即可直达。公共交通稍显复杂：可从毕尔巴鄂乘坐巴士到阿拉瓦首府维多利亚（Vitoria-Gasteiz），再换乘前往拉瓜迪亚的 regional bus，全程约2-2.5小时，班次有限，务必提前查好时刻表。自驾无疑是探索周边葡萄园和酒庄的完美方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉瓜迪亚的故事，始于战争与和平之间那条脆弱的边界。“Laguardia”在西班牙语中意为“守卫”，这个名字精准地揭示了它的出身。公元10世纪左右，纳瓦拉王国为了防御南方的摩尔人以及隔壁的卡斯蒂利亚王国，在此地的战略山丘上兴建了坚固的堡垒。高墙、瞭望塔、狭窄易守的街道，一切都是为了生存。城墙内的居民在战鼓声中繁衍生息，但他们需要另一种“守卫”——守卫粮食，尤其是珍贵的葡萄收成，以及酿造出的葡萄酒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，智慧的种子在石头缝里发芽。大约从15、16世纪开始，居民们开始挖掘自家的地下室。起初或许只是为了储藏，但随着里奥哈阿拉瓦萨的葡萄酒名声渐起，这些地窖越挖越深，规模越来越大。坚硬的岩石提供了恒定的低温（常年维持在12-14摄氏度）和湿度，是陈酿葡萄酒的绝佳环境。更绝妙的是，为了运输和管理的便利，许多家族的地窖在地下悄然相连，形成了一个隐秘的通道网络。在战乱或动荡时期，这些通道甚至可能成为逃生或转移物资的路径。你能想象吗？当敌军在城门外叫嚣时，镇民们可能正从容地通过地下网络，将宝贵的酒桶转移到更安全的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "几个世纪以来，这些地下宫殿的主人换了一茬又一茬，但葡萄酒的使命从未改变。每个酒窖都有着自己的故事：墙壁上可能留有中世纪工匠的刻痕；某个角落的陶罐可能装着祖辈留下的、早已蒸发的“神秘液体”；通风井的设计巧妙地将地面的气流引入深处。酿造工艺从传统走向现代，但这些石窖始终是风味转化的核心圣地。它们见证了 Phylloxera 根瘤蚜虫害席卷欧洲的恐慌，也经历了里奥哈产区从寂寂无名到世界顶级的神奇崛起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的拉瓜迪亚，城墙早已失去军事意义，成了游客漫步其上的观景走廊。但地下的世界，却比以往任何时候都更加活跃。古老的酒窖有的依然属于家族酒庄，进行着小批量的精品酿造；有的被改造成了充满情调的餐厅包厢，在数百年的橡木桶旁享受一顿晚餐，是独一无二的体验；还有一些被精心维护，作为历史的见证向访客开放。行走在地下，触摸着冰冷湿润的石壁，听着向导讲述某个酒窖曾如何在战争中庇护了全镇的孩童，你会明白，拉瓜迪亚真正的城墙，或许不是地上的那些石头，而是这深植于土地之下、由世代人的劳作与智慧构筑的无形堡垒。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味拉瓜迪亚，你需要一整天的时间，并且最好能在这里住上一晚，感受入夜后城墙内静谧的魔力。建议在上午10点前抵达，这时大批一日游的游客尚未涌入，晨光柔和，最适合拍照和闲逛。整个游览节奏应是“先地上，后地下，再地上”的循环：上午探索中世纪街巷和广场，中午预约一次地下酒窖的深度导览（这是重中之重），下午可以登上城墙漫步或参观教堂，傍晚时分在广场找家露天座，点一杯本地葡萄酒，看夕阳将石头染成金黄。这样的安排能让你由表及里，再由内而外地理解这座小镇的立体灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前通过旅游局官网或电话预订地下酒窖的导览，热门时段很快售罄，临时到场很可能吃闭门羹。小镇内几乎所有街道均为步行区，车辆必须停在城墙外的公共停车场（收费合理），请穿一双绝对舒适的步行鞋，石板路对高跟鞋极不友好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的圣胡安城门（Puerta de San Juan）进入，立刻右转爬上城墙步道，在清晨的清新空气中俯瞰全镇红瓦屋顶与远处无边无际的葡萄园交织成的全景画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`迷失在卡尔圣胡安（Calle San Juan）和卡尔马约尔（Calle Mayor）交错的狭窄巷弄里，用心观察那些石屋大门上古老的家族徽章和铁艺阳台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在 Plaza Mayor 主广场的“El Portal de San Juan”或类似的老牌酒吧，预约一场包含历史讲解和品鉴的家族地下酒窖深度导览之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随向导走下幽深的石阶，在昏暗闪烁的烛光或灯光下，聆听几个世纪以来葡萄酒如何在这里呼吸、熟成，并亲手触摸那些布满菌斑的古老酒桶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地下的微凉中回到阳光里，前往圣玛利亚德洛斯雷耶斯教堂，不为别的，就为欣赏它那个被誉为“西班牙哥特式雕塑珍宝”的彩绘门廊（Polychrome Portal）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙走到北侧的 Mirador de la Muralla 观景台，看着拉瓜迪亚像一艘石船，航行在碧绿葡萄园的海洋中，尽情呼吸里奥哈的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐选择一家由古老酒窖改造的餐厅，比如“Bodega Casa Vieja”，在拱形石顶下享用一顿以当地食材和优质葡萄酒搭配的巴斯克-里奥哈风味盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后，提一盏小灯（或就用手机照亮），再次走进寂静无人的小巷，这时小镇完全属于你，只有脚步声和从某扇虚掩的门后传来的、隐约的酒杯轻碰声。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣胡安城门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，站在城门内的石板路中间向上拍摄，能捕捉到厚重的石拱门、上方城墙以及一角蓝天构成的强烈几何与历史感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从城墙西北段俯拍葡萄园`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，将相机探出城墙垛口，以饱经风霜的石块作为前景，拍摄夕阳下被染成金绿波纹状的广袤葡萄园，远处山脉作为背景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡尔帕甘佐街转角的光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光垂直射入狭窄街道时，寻找那些有藤蔓或晾衣绳的转角，拍摄明暗对比强烈、光影切割分明的巷弄生活场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下酒窖内的氛围人像`}</h4>
                  <p className="text-sm text-gray-700">{`在导览允许的情况下，请同伴用手机微弱补光，将自己或朋友与巨大的橡木桶、古老的楼梯一同纳入画面，营造探险家和时光旅者的神秘氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`广场晚霞与灯火`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后半小时），从广场一侧拍摄另一侧被暖黄色灯光点亮的古老建筑立面，天空是深蓝色的，冷暖对比极具电影感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄地下酒窖内部前务必征得向导明确同意，禁用闪光灯，强烈的闪光会破坏陈年酒液的微妙状态。尊重私人领域，许多美丽的庭院和内门属于民居，拍摄前一个友好的微笑和手势询问是基本的礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`地道之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在城墙内由16世纪石屋改造的家庭旅馆，房间有裸露的原始石墙和木梁，早晨会被面包房传来的香味和教堂钟声温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`酒庄体验`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇边缘或附近葡萄园里的乡村酒店（Hotel），这些地方通常自带古老的酒窖，提供私人品酒会，晚上在露台上看星空下的城墙剪影。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计格调`}</h4>
                  <p className="text-sm text-yellow-800">{`位于主广场附近的精品酒店，将古老结构与现代北欧设计完美融合，浴缸可能就设在古老的拱顶之下，提供顶级的本地沐浴产品。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居奢华`}</h4>
                  <p className="text-sm text-purple-800">{`开车十分钟可达的某个顶级酒庄（Bodega）旗下的奢华庄园酒店，独占一片山丘，拥有无边泳池、米其林推荐餐厅和专属葡萄园游览。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（夏季和九月葡萄收获季）务必提前数月预订，小镇内住宿数量有限。住在城墙内虽然浪漫，但深夜和清晨可能会异常安静，喜欢热闹的朋友可以选择广场周边。几乎所有住宿都能帮你安排超棒的地下酒窖参观和周边酒庄之旅。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开拉瓜迪亚许久后，那种独特的感官记忆依然清晰：脚下石板的坚实触感，鼻尖萦绕的橡木与酒香，地下世界那种包裹全身的、静谧的阴凉。这座小镇教会我一件事：真正的深度，不仅是历史的长度，更是空间的层次。它不仅仅是一个“景点”，而是一个将生存、信仰、欢庆与劳作全部融入同一片土地的立体生命体。地上的每一块石头都在讲述防御与社群，地下的每一寸空间都在吟唱时间与转化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都被摊平在表面的时代，拉瓜迪亚的存在本身就是一种温柔的抵抗。它提醒我们，有些价值需要被“窖藏”，在黑暗中缓慢熟成；有些联系（像那些地下相连的酒窖）虽然看不见，却构成了最稳固的根基。来这里，不只是为了喝一杯好酒，更是为了体验一种古老而智慧的生活哲学——如何在动荡的世界里，既筑起城墙保护自己，又向下挖掘，创造出一个滋养灵魂的、丰饶的隐秘世界。对于任何渴望在旅途中触碰真实质感、聆听土地心跳的人来说，拉瓜迪亚是一堂无法替代的必修课。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/covadonga-shrine-sanctuary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科瓦东加（隐没在皮科斯欧洲山脉中的圣母朝圣山洞与大教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Covadonga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/estella" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃斯特利亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Estella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/allariz-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿利亚里斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Allariz</p>
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
