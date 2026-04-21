import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩什科比 Peshkopi｜在阿尔巴尼亚的群山间，泡进千年硫磺泉，漫步奥斯曼时光走廊 - 最佳欧洲景点',
  description: '车子在盘山公路上不知转了多少个弯，当一片被苍灰色群山紧紧环抱的城镇突然出现在谷地时，你闻到的第一股味道绝对不是山间清风，而是一股……明确的、带着铁锈感的硫磺味。这味道不招人厌，反而像一种古老的欢迎仪式，告诉你，佩什科比到了。它不像那些被打理得光鲜亮丽的旅游明信片小镇，这里的一切都蒙着一层真实的、被时',
}

export default function PeshkopiOldTownAndThermalSpringsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩什科比', href: '/attractions/peshkopi-old-town-and-thermal-springs' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩什科比・Peshkopi・阿尔巴尼亚・佩什科比`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在盘山公路上不知转了多少个弯，当一片被苍灰色群山紧紧环抱的城镇突然出现在谷地时，你闻到的第一股味道绝对不是山间清风，而是一股……明确的、带着铁锈感的硫磺味。这味道不招人厌，反而像一种古老的欢迎仪式，告诉你，佩什科比到了。它不像那些被打理得光鲜亮丽的旅游明信片小镇，这里的一切都蒙着一层真实的、被时光浸透的包浆。远处山峦线条硬朗，近处老房子的斜顶在午后的阳光下泛着暖融融的光。
你把包扔在客栈，迫不及待地钻进那条主街——Çarshia e Vjetër，也就是“老市场”。脚下是几百年被脚步磨得温润甚至有些凹凸不平的石板路，缝隙里长出顽强的青草。两旁是紧闭的厚重木门和有着精致格栅的木窗，二楼悬挑的部分几乎要碰到对面的人家。空气里硫磺味中又混进了现磨咖啡的香气、烤玉米的焦甜，还有某户人家院子里飘出的炖菜味道。耳朵里是阿尔巴尼亚语的低声交谈、孩子们的追逐笑闹，以及不知从哪条巷子深处传来的、咿咿呀呀的老式电视声。这里没有游客的喧嚣，生活是沿着它自己古老而缓慢的河床在流淌。
而这一切生活的中心，或者说底层脉搏，就是那些温泉。它们不是豪华的 SPA 会所，而是大地本身的呼吸。走到城镇边缘，你能看到岩石缝隙中汩汩冒出热气腾腾的水流，在冰冷的空气中凝结成大片白雾，空气湿润而温暖。当地人提着水桶来这里打水，老人们坐在石头上一边泡脚一边聊天，蒸汽模糊了他们的面容，也模糊了时间的界限。在这里，温泉不是奢侈品，而是像阳光和空气一样，是日常生活的一部分，是山给予它子民的天然馈赠。这份与自然如此赤裸、如此亲密无间的关系，正是佩什科比最打动人心的核心魅力——一种未被现代性完全规训的、土地与人的原始联结。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在盘山公路上不知转了多少个弯，当一片被苍灰色群山紧紧环抱的城镇突然出现在谷地时，你闻到的第一股味道绝对不是山间清风，而是一股……明确的、带着铁锈感的硫磺味。这味道不招人厌，反而像一种古老的欢迎仪式，告诉你，佩什科比到了。它不像那些被打理得光鲜亮丽的旅游明信片小镇，这里的一切都蒙着一层真实的、被时光浸透的包浆。远处山峦线条硬朗，近处老房子的斜顶在午后的阳光下泛着暖融融的光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你把包扔在客栈，迫不及待地钻进那条主街——Çarshia e Vjetër，也就是“老市场”。脚下是几百年被脚步磨得温润甚至有些凹凸不平的石板路，缝隙里长出顽强的青草。两旁是紧闭的厚重木门和有着精致格栅的木窗，二楼悬挑的部分几乎要碰到对面的人家。空气里硫磺味中又混进了现磨咖啡的香气、烤玉米的焦甜，还有某户人家院子里飘出的炖菜味道。耳朵里是阿尔巴尼亚语的低声交谈、孩子们的追逐笑闹，以及不知从哪条巷子深处传来的、咿咿呀呀的老式电视声。这里没有游客的喧嚣，生活是沿着它自己古老而缓慢的河床在流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这一切生活的中心，或者说底层脉搏，就是那些温泉。它们不是豪华的 SPA 会所，而是大地本身的呼吸。走到城镇边缘，你能看到岩石缝隙中汩汩冒出热气腾腾的水流，在冰冷的空气中凝结成大片白雾，空气湿润而温暖。当地人提着水桶来这里打水，老人们坐在石头上一边泡脚一边聊天，蒸汽模糊了他们的面容，也模糊了时间的界限。在这里，温泉不是奢侈品，而是像阳光和空气一样，是日常生活的一部分，是山给予它子民的天然馈赠。这份与自然如此赤裸、如此亲密无间的关系，正是佩什科比最打动人心的核心魅力——一种未被现代性完全规训的、土地与人的原始联结。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩什科比`} />
                <InfoRow label="英文名称" value={`Peshkopi`} />
                <InfoRow label="正式名称" value={`Peshkopi`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`佩什科比`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座偏远的山城是阿尔巴尼亚东部迪勃拉地区的文化心脏，数个世纪以来作为连接山地部落与平原文明的贸易与文化交流十字路口。`} />
                <InfoRow label="建筑特色" value={`层层叠叠的奥斯曼时代老宅用深色木材与白色石材建成，依山势错落，狭窄的石板街道如同迷宫，与远处裸露的山岩和蒸腾着热气的地热泉眼浑然一体。`} />
                <InfoRow label="建筑风格" value={`典型的晚期奥斯曼帝国地方民居风格，混合了巴尔干山地的坚固实用主义，拥有突出的上层木构部分、石砌基座和内敛的庭院。`} />
                <InfoRow label="文化价值" value={`这里保存了一种近乎停滞的、自给自足的山地生活图景，其温泉文化、古老集市和代代相传的手工艺，是理解阿尔巴尼亚民族性格中坚韧与宁静一面的活态博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`佩什科比小镇本身全天开放。老城街区（Çarshia e Vjetër）的建筑外观可随时参观，部分老宅内部开放时间不定，建议白天前往。主要的硫磺温泉浴场（如附近的“Llixhat”区域）通常是每天上午8点至晚上8点开放，但当地家庭经营的简易浴池时间更灵活。冬季（11月至3月）部分设施可能维护或缩短开放时间，夏季则是最佳体验期。小镇上的博物馆和文化遗产中心开放时间较为随机，最好提前向当地旅游信息点或住宿处询问。`} />
              <InfoRow label="门票价格" value={`漫步佩什科比老城街区本身完全免费。进入当地的硫磺温泉公共浴池，费用非常低廉，大约200-500列克（约合1.5-4.5欧元），具体取决于设施的基础程度；部分完全天然的野池则免费。若想参观有讲解的私人老宅或小型地方博物馆，可能需支付象征性的捐赠或门票，约300列克。小镇整体消费亲民，无需昂贵门票即可深度体验。`} />
              <InfoRow label="地址" value={`Çarshia e Vjetër, Peshkopi, Dibër County, Albania`} />
              <InfoRow label="交通方式" value={`从阿尔巴尼亚首都地拉那的国际机场出发，这是最常用的门户。首先，你需要从机场乘车（出租车或预订接驳车）前往地拉那的国际长途汽车站，车程约30分钟。从地拉那汽车站有固定班次的前往佩什科比的大巴，车程约为3-4小时，沿途会穿越壮丽的阿尔巴尼亚阿尔卑斯山脉，风景绝佳，但山路曲折，需有心理准备。大巴班次每天约有4-6班，早班车在上午7点左右，下午最晚一班通常在3点前，建议提前一天确认时刻表，车票直接在车站购买即可。另一种更灵活的方式是租车自驾，使用导航设置前往佩什科比，全程约150公里，但山路驾驶需要一定经验。抵达佩什科比镇后，所有主要景点均可步行到达，探索周边山谷的温泉可能需要搭乘本地出租车或与住宿处协商短途交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩什科比的故事，深深镌刻在它脚下这片滚烫的土地里。早在史前时代，这里蒸腾的地热泉眼就吸引了人类的聚集，温泉被视为具有疗愈神力的圣地。罗马人的足迹曾抵达这里，但他们更像匆匆过客，真正在这崎岖山间留下不可磨灭印记的，是奥斯曼帝国漫长的统治时期。大约从15世纪开始，奥斯曼的行政与贸易网络延伸至此，佩什科比因其位于重要商道节点的位置而逐渐兴盛。它的名字“Peshkopi”本身，据说就源于斯拉夫语中的“主教”一词，暗示了这里可能曾是一个早期的宗教中心，尽管后来在伊斯兰文化影响下，建起了清真寺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城那迷宫般的街巷和典型的奥斯曼民居，正是那个繁荣时期的产物。商人们从斯科普里、地拉那甚至更远的地方带来货物，在山谷中的“老市场”进行交易，羊毛、皮革、山货与来自平原的盐巴、布匹在此交换。那些你看到的、拥有坚固石砌底层和精美木构上层的房子，既是家，也是仓库和作坊。小镇在帝国的框架下，形成了一种独特的自治性，山地部落的传统与奥斯曼的治理方式达成了微妙的平衡。你能在建筑上看到这种融合：伊斯兰风格的几何窗棂，与巴尔干山区防御性的紧凑结构结合在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，山区的宁静并非永恒。19世纪末到20世纪初，随着奥斯曼帝国的衰落和阿尔巴尼亚民族意识的觉醒，佩什科比也卷入了动荡。它成为阿尔巴尼亚民族复兴运动的重要据点之一。两次世界大战期间，这里又经历了战火的洗礼与政权的更迭。但或许最具戏剧性的转变发生在二战后的共产主义时期。霍查政权推行激进的无神论和集体化政策，许多宗教建筑被关闭或改造，私人贸易被禁止，老城一度陷入沉寂。但也是在这个时期，国家系统地开发了这里的温泉资源，建立了国营疗养院，将这种古老的民间疗愈方式纳入了国家医疗体系的框架。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1990年代共产主义政权垮台后，佩什科比像许多阿尔巴尼亚城镇一样，经历了阵痛与迷茫。人口外流，年轻人前往意大利或希腊寻找机会，老城许多房子空置、破败。但最近十多年，一种缓慢而坚定的复苏正在发生。一些离乡的人带着积蓄回来，修缮祖宅，开设家庭旅馆。人们重新认识到老城和温泉的价值——不是作为国家资产，而是作为自身文化与生活的根源。那些曾被忽视的奥斯曼老建筑，其历史价值被重新发现。今天，当你走在老街上，看到的不仅是沧桑，还有新刷的木窗、精心打理的小庭院，以及游客（虽然还不多）带来的细微活力。它的历史，就像它的温泉，经历过封存，但那股源自地底的热力，从未真正熄灭，一直在等待着重新涌出的时刻。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在佩什科比安排完整的一天，节奏一定要慢，才能沉浸到它的氛围里。最好前一晚抵达，住进老城的民宿。第二天清晨，趁着小城刚刚苏醒、硫磺泉蒸汽在冷空气中最为梦幻的时候开始探索。上午专注于感受温泉与自然的交融，下午则迷失在奥斯曼老街的历史巷道中，傍晚则要找一个高处，等待群山环抱的小镇亮起灯火。这样的安排让你既能体验它最具标志性的自然奇观，又能细细品味其人文肌理，最后以一场宏大的山景日落作为圆满收尾。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`探索小巷时穿着舒适耐磨的鞋子非常重要，那些古老石板路可能湿滑且不平。温泉区地面可能有湿滑的青苔，务必小心行走。虽然当地民风极其淳朴，但进入私人宅院或拍摄居民前，一个微笑和简单的手势征询会是很好的礼貌。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔城镇边缘的天然硫磺泉眼区，赤脚感受从岩缝中涌出的、烫得恰到好处的热水，看蒸汽在冷冽的空气中结成白纱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着温泉溪流漫步，观察当地居民提着塑料桶来取水的日常生活场景，仿佛参与了一场延续千年的仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从温泉区慢慢踱回Çarshia e Vjetër老街的入口，让自己彻底迷失在那些由高耸石墙和悬挑木窗夹成的狭窄巷弄里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老街寻找那家传了三代人的传统面包房，买一个刚出炉的、带着柴火香气的“buke”，热乎乎地拿在手里边走边吃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访老集市广场附近低调的清真寺，如果开放，安静地脱鞋进入，感受内部简朴而庄严的祈祷空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据当地人的指点，寻找一栋可以参观的、保存完好的奥斯曼老宅，想象一个世纪前一个商贾家族在此生活的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午的阳光变得柔和时，沿着一条明显的小径向镇子旁边的山坡攀登，目标是找到一个能俯瞰整个佩什科比谷地的瞭望点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前下山，在老街找一家家庭经营的小餐馆，点一份用本地羊肉和草药慢炖的“tavë kosi”，作为一天探索的完美句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从镇西侧的山腰公路拐弯处俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，用长焦镜头压缩空间，将层层叠叠的奥斯曼红瓦屋顶、清真寺尖塔与背后苍凉雄浑的群山一同纳入画面，展现人类聚落与自然力量的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Çarshia e Vjetër老街的某个深邃巷口`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，站在巷口向内拍摄，利用两侧石墙形成的天然框架，捕捉光束照亮巷道尽头一扇彩色的木门或一位缓缓走过的老人身影，营造故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`天然硫磺泉眼特写`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个雾气蒸腾不那么浓密的时刻，蹲低机位，贴近水面，对焦于咕嘟冒泡的水花或水底色彩斑斓的矿物质沉积，将升腾的蒸汽作为梦幻的背景，拍出大地呼吸的生命力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老宅庭院内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`如果幸运进入一家老宅，站在庭院中央向上拍摄，将那些错综复杂的深色木梁、悬挑的走廊以及一方蔚蓝的天空框进取景框，展现奥斯曼建筑的精巧空间美学。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从你的住宿房间窗口拍摄晨雾`}</h4>
                  <p className="text-sm text-gray-700">{`如果你住在面向山谷的旅馆，设定好闹钟在日出时分，拍摄晨雾如牛奶般流淌过小镇屋顶、远方山尖被第一缕阳光染成金色的魔幻时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地居民对于被拍摄通常很友善，但拍摄人物特写前，尤其是老人和妇女，请务必用眼神或手势获得对方默许。在清真寺内部拍摄前，必须征得明确同意，且切勿在祷告时间打扰。山区天气瞬息万变，保护好你的相机设备免受温泉湿气和突然降雨的影响。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山间守护者`}</h4>
                  <p className="text-sm text-blue-800">{`一家由本地石匠家庭经营的精品客栈，坐落在老城边缘的高处，每个房间的窗户都像画框，将雪山或老城屋顶景致无偿赠送给你，晚上壁炉边主人会分享家族故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`奥斯曼时光胶囊`}</h4>
                  <p className="text-sm text-green-800">{`一栋经过精心修复的19世纪奥斯曼商人宅邸改造的民宿，保留了原始的木头天花板、壁炉和厚实的石墙，睡在古老的雕花木床上，寂静中能听到历史的回声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温泉疗愈小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于主温泉区步行几分钟距离的简单旅舍，虽然设施基础，但胜在可以随时去泡免费的野泉，老板会为你准备好浴巾和茶水，适合追求极致自然体验的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`新城现代基地`}</h4>
                  <p className="text-sm text-purple-800">{`如果你对住宿舒适度有较高要求，可以选择镇中心新城区一家干净明亮的现代酒店，作为探索老城和周边的大本营，享受稳定的热水和Wi-Fi后，再投入历史的怀抱。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城的民宿大多由家族经营，预订时直接沟通可能比通过大型平台更有效，还能获得更地道的建议。冬季来访务必确认住宿是否有稳定供暖，山区夜晚非常寒冷。无论住在哪里，佩什科比的夜晚都异常宁静，只有风声和偶尔的狗吠，请准备好享受这份奢侈的寂静。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开佩什科比几天后，那股淡淡的硫磺味好像还萦绕在嗅觉的记忆里。它不像那些令人震撼到失语的地标，它的力量是渗透式的，是温吞的。在这里，你被迫慢下来，因为山路蜿蜒，因为生活本就如此。你会开始欣赏一些最简单的东西：一扇木门上的斑驳漆痕，一位老人坐在门口石阶上的安详，温泉蒸汽在皮肤上留下的、久久不散的暖意。这是一种关于“耐久”的教育——建筑在石头上耐久，传统在日常生活中耐久，人与严酷自然环境共存的智慧，同样耐久。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求高速与光鲜的世界里，佩什科比像一块沉静而温润的古老山岩。它不讨好，不喧嚣，只是兀自存在着，按照它自己的节拍呼吸和流淌。对于热爱深度游的旅人而言，来到这里，不是为了收集又一个景点，而是为了体验一种不同的时间维度。它让你看到，在主流旅行地图之外，还有这样一些地方，它们守护着另一种生活的可能性，粗糙、真实，却充满了土地的温度。这是一次前往阿尔巴尼亚灵魂深处的跋涉，泡进它的温泉，就走进了它最古老、最疗愈的心跳。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gjirokaster-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/butrint-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布特林特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Butrint</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/korce" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korçë</p>
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
