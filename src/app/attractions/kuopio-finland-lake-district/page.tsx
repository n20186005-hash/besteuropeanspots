import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库奥皮奥 Kuopio｜在千湖之心，登上塔顶俯瞰森林与湖泊交织的蓝绿梦境 - 最佳欧洲景点',
  description: '还记得我第一次踏入库奥皮奥的感觉吗？那不是一种视觉上的“轰炸”，而是一种全身心被温柔包裹的接纳。火车缓缓驶近，车窗外的风景从连绵的松林，忽然切换成一片无垠的、闪着碎钻般光芒的蓝色——卡拉韦西湖（Kallavesi）就这样毫无预兆地铺满眼帘。空气瞬间变得清冽湿润，带着松针、苔藓和淡淡水汽的混合气味，深',
}

export default function KuopioFinlandLakeDistrictPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '芬兰', href: '/destinations/europe' },
            { label: '库奥皮奥', href: '/destinations/europe' },
            { label: '库奥皮奥', href: '/attractions/kuopio-finland-lake-district' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库奥皮奥・Kuopio・芬兰・库奥皮奥`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得我第一次踏入库奥皮奥的感觉吗？那不是一种视觉上的“轰炸”，而是一种全身心被温柔包裹的接纳。火车缓缓驶近，车窗外的风景从连绵的松林，忽然切换成一片无垠的、闪着碎钻般光芒的蓝色——卡拉韦西湖（Kallavesi）就这样毫无预兆地铺满眼帘。空气瞬间变得清冽湿润，带着松针、苔藓和淡淡水汽的混合气味，深深吸一口，感觉整个肺部都被清洗了一遍。火车站小巧宁静，出站走不了几步，城市的脉搏——热闹的集市广场（Kauppatori）就伴着人声、海鸥的鸣叫和咖啡香扑面而来。
这里的生活节奏，就像湖面的波纹，舒缓而坚定。你看到穿着实用冲锋衣的老夫妇，拎着藤编篮子仔细挑选当天的蘑菇和浆果；穿着连体工装裤的渔夫，在摊位上安静地整理着清晨的渔获；还有踩着平衡车穿梭的年轻人，手里也不忘捧着一杯热气腾腾的咖啡。库奥皮奥的魅力，就在于它毫不费力地将现代城市生活与古老的湖区传统编织在一起。它不是一座为你表演的舞台，而是你可以随时坐下来，成为其中一部分的客厅。
最打动人心的，是那种无处不在的“静谧的活力”。白天，你可以加入徒步或骑行的人群，钻进城边那些标识清晰的森林小径，脚下是柔软的松针地毯，耳边只有风声和自己的呼吸。而当你登上城市制高点——普伊约塔（Puijo Tower）的观景台时，一切豁然开朗。360度的全景像一幅缓缓展开的蓝绿色油画：无数岛屿像墨绿的棋子散落在巨大的湖盘上，蜿蜒的森林线分割着天与水，小小的红色、黄色木屋点缀其间。那一刻，你听不到城市的喧嚣，却能“听到”这片土地宽广的呼吸，理解芬兰人为何将森林与湖泊视为灵魂的归宿。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还记得我第一次踏入库奥皮奥的感觉吗？那不是一种视觉上的“轰炸”，而是一种全身心被温柔包裹的接纳。火车缓缓驶近，车窗外的风景从连绵的松林，忽然切换成一片无垠的、闪着碎钻般光芒的蓝色——卡拉韦西湖（Kallavesi）就这样毫无预兆地铺满眼帘。空气瞬间变得清冽湿润，带着松针、苔藓和淡淡水汽的混合气味，深深吸一口，感觉整个肺部都被清洗了一遍。火车站小巧宁静，出站走不了几步，城市的脉搏——热闹的集市广场（Kauppatori）就伴着人声、海鸥的鸣叫和咖啡香扑面而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的生活节奏，就像湖面的波纹，舒缓而坚定。你看到穿着实用冲锋衣的老夫妇，拎着藤编篮子仔细挑选当天的蘑菇和浆果；穿着连体工装裤的渔夫，在摊位上安静地整理着清晨的渔获；还有踩着平衡车穿梭的年轻人，手里也不忘捧着一杯热气腾腾的咖啡。库奥皮奥的魅力，就在于它毫不费力地将现代城市生活与古老的湖区传统编织在一起。它不是一座为你表演的舞台，而是你可以随时坐下来，成为其中一部分的客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，是那种无处不在的“静谧的活力”。白天，你可以加入徒步或骑行的人群，钻进城边那些标识清晰的森林小径，脚下是柔软的松针地毯，耳边只有风声和自己的呼吸。而当你登上城市制高点——普伊约塔（Puijo Tower）的观景台时，一切豁然开朗。360度的全景像一幅缓缓展开的蓝绿色油画：无数岛屿像墨绿的棋子散落在巨大的湖盘上，蜿蜒的森林线分割着天与水，小小的红色、黄色木屋点缀其间。那一刻，你听不到城市的喧嚣，却能“听到”这片土地宽广的呼吸，理解芬兰人为何将森林与湖泊视为灵魂的归宿。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库奥皮奥`} />
                <InfoRow label="英文名称" value={`Kuopio`} />
                <InfoRow label="正式名称" value={`Kuopio`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`库奥皮奥`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`芬兰东部湖区的历史与文化中心，被誉为“萨沃地区的心脏”。`} />
                <InfoRow label="建筑特色" value={`现代功能主义与自然景观无缝融合，城市肌理围绕着湖泊和森林展开，地标普伊约塔高耸而简洁。`} />
                <InfoRow label="建筑风格" value={`以北欧现代主义为主，兼具芬兰民族浪漫主义遗风，整体呈现低调、实用、亲近自然的风格。`} />
                <InfoRow label="文化价值" value={`体现了芬兰民族性格中“sisu”（坚韧）与对自然深切依赖的和谐统一，是体验正宗芬兰湖区生活方式的活样本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`库奥皮奥作为一座城市，其公共空间（如集市广场、湖滨步道）全天开放。核心景点普伊约（Puijo）观景塔及山顶服务中心开放时间随季节变化：夏季（6月至8月）通常为每日10:00-22:00；春秋季（5月、9月）为10:00-20:00；冬季（10月至次年4月）开放时间缩短，通常为11:00-19:00，且可能因天气调整。集市广场（Kauppatori）的露天市场每周一至周六早晨开放，夏季尤为热闹，周日休市。建议出行前查看具体景点官网。`} />
              <InfoRow label="门票价格" value={`探索库奥皮奥城本身免费。登普伊约（Puijo）观景塔需购票：成人票价约8-12欧元，儿童、学生及老年人享有优惠票价（约5-8欧元），家庭套票更划算。部分博物馆（如库奥皮奥博物馆、东正教教堂博物馆）需单独购票，票价通常在5-10欧元之间。集市广场消费自理，最具代表性的黑面包（Kalakukko）每份约10-15欧元。`} />
              <InfoRow label="地址" value={`Kauppakatu 29, 70100 Kuopio, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基出发最便捷。火车：从赫尔辛基中央火车站乘坐VR国铁，直达库奥皮奥火车站，车程约4-4.5小时，班次频繁，沿途风景如画，强烈建议选择靠窗座位。可在VR官网或APP提前购票，有折扣。飞机：芬兰航空有从赫尔辛基飞往库奥皮奥的短途航班，飞行时间约1小时，机场离市中心仅15分钟车程。自驾：沿E75/E63公路向北行驶，约5小时车程，自由度最高，可随时停靠沿途湖泊。抵达库奥皮奥后，市中心小巧紧凑，步行或租用自行车即可轻松探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库奥皮奥的故事，深深镌刻在冰河消退后留下的湖泊与山丘之间。早在史前时期，萨米人就在这片广袤的森林与水域中过着游牧渔猎的生活，那些散落在湖区岛屿上的古老祭祀遗址， silent 诉说着人与自然的原始对话。17世纪中叶，瑞典总督佩尔·布拉赫伯爵下令在此建立城镇，主要目的是巩固瑞典王国对东部边境的控制，并发展贸易。1653年，瑞典女王克里斯蒂娜正式授予库奥皮奥城镇宪章，它开始作为一个小小的行政和商业据点，在湖岸扎根。早期的居民靠着湖泊的馈赠——鱼类、木材和皮毛艰难生存，那种面对严酷自然所需的坚韧，成了此地最早的基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪初，芬兰并入俄罗斯帝国，库奥皮奥迎来了意想不到的转折。它成了芬兰东正教的重要中心。原因在于，旧边境线被废除，大量信仰东正教的卡累利阿移民涌入。1827年，一场大火几乎吞噬了全城木屋，但重建却带来了新生。著名的芬兰民族浪漫主义建筑师C.L. Engel（他也设计了赫尔辛基大教堂广场）为库奥皮奥规划了新的网格状街道布局，并设计了一座优雅的希腊复兴式市政厅。而更深刻的文化印记，是俄罗斯沙皇尼古拉一世下令建造的库奥皮奥东正教教堂博物馆（原主教座堂），金顶红墙，在朴素的路德宗芬兰显得格外耀眼，至今仍是北欧最大的东正教教堂之一，静静讲述着文化交融的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库奥皮奥命运的又一次飞跃，与一项“平凡”的发明有关——桑拿。这里被誉为芬兰的“桑拿之城”。早在19世纪末，库奥皮奥的工匠们就开始商业化生产移动桑拿房，让这种深入芬兰人骨髓的习俗得以更广泛传播。而现代库奥皮奥的轮廓，则与一座塔密不可分。1963年，为举办北欧滑雪锦标赛，普伊约山上建起了第一座观景塔。1964年，更具现代主义线条的旋转观景塔落成，它就像一枚定海神针，不仅成为了城市的地标，更从根本上改变了人们与这片景观的关系。从此，每个普通人都能轻松登顶，将祖先需要艰难跋涉才能领略的浩瀚湖光山色尽收眼底，这种“上帝视角”深深塑造了库奥皮奥人的身份认同。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的库奥皮奥，是一座在传统与现代间游刃有余的活力之城。它拥有芬兰顶尖的健康与生命科学产业集群，大学校园里洋溢着青春气息。但当你走进集市广场，时间仿佛又慢了下来。妇人售卖着用黑麦面团包裹着小鱼和肥猪肉烤制数小时的“卡拉库科”（Kalakukko），这种古老的食物保鲜智慧，依然是本地人最骄傲的味道。冬季，普伊约山变成滑雪胜地；夏季，湖面帆影点点。库奥皮奥的历史，就像它身边的湖水，表面平静，内里却流淌着生存、信仰、创新与热爱的绵长力量，从未间断。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受库奥皮奥的精髓，建议安排一整天时间，节奏宜慢不宜快。最好在清晨（8点左右）抵达，这时城市刚刚苏醒，湖面常有一层薄雾，光影绝美。整体游览可以从亲水体验开始，逐步向森林山丘行进，最后在日落时分回到湖畔，体验灵魂桑拿，完成一次完美的自然循环。这样的安排能让你避开中午可能出现的游客小高峰，充分享受晨昏时分最动人的光线和静谧氛围，完整体验从湖到林、再从林归湖的经典芬兰一日。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`集市广场的公共厕所需要少量付费，记得备些零钱。普伊约山森林小径维护良好，但雨后可能湿滑，建议穿防滑舒适的徒步鞋。夏季湖区蚊虫较多，务必携带有效的驱蚊剂。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站先溜达到卡拉韦西湖码头边，看晨雾如轻纱般在湖面流淌，听湖水轻轻拍打木桩，运气好还能看到当地人划着传统小船出发。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走向热闹的集市广场，在冒着热气的摊位前买一个刚出炉的卡拉库科黑面包，就着一杯鲜煮咖啡，坐在长椅上边吃边看人来人往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过色彩柔和的市中心街道，拜访那座有着金色洋葱顶的库奥皮奥东正教教堂博物馆，在静谧的殿堂内感受截然不同的宗教艺术与焚香气味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘巴士或沿着清晰指示徒步登上普伊约山，在森林小径中穿行约半小时，感受肺叶被纯净空气充盈的舒畅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上普伊约观景塔的旋转平台，点一杯清茶，让脚下的全景画卷随着平台缓缓转动，仔细辨认湖泊、岛屿和远方的城镇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一条不同的森林步道下山，或许会偶遇一片覆满苔藓的岩石或一个静谧的林中小湖，停下来静静聆听自然的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到湖滨，体验正宗的芬兰烟熏桑拿，感受热浪蒸腾后跳入清凉湖水的极致畅快（冬季则是在雪地里打滚）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐寻找一家主打湖区食材的餐厅，品尝用白鱼、蘑菇和新鲜土豆烹制的家常美味，为这一天画上温暖句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`普伊约观景塔顶层环形玻璃窗前`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，利用玻璃反光拍摄人物剪影与窗外无限延伸的蓝绿湖泊森林相结合的超现实画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`集市广场边缘面向湖泊的长椅`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点前，阳光柔和，以长椅和人物为前景，捕捉摊主开始摆摊、海鸥飞舞、湖面平静如镜的生活化场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡拉韦西湖畔的某条延伸至水中的小木桥`}</h4>
                  <p className="text-sm text-gray-700">{`金色时刻（日出后或日落前一小时内），低角度拍摄人物走向水中央的背影，构图以木桥的线条引导至远山的轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`普伊约山腰某处开阔的岩石观景点`}</h4>
                  <p className="text-sm text-gray-700">{`午后顺光时，使用中长焦镜头压缩空间，拍摄湖泊、森林与远处城市建筑层叠交错的丰富质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`传统木制船屋桑拿房旁`}</h4>
                  <p className="text-sm text-gray-700">{`桑拿点燃后，在黄昏蓝调时刻拍摄桑拿房烟囱冒出袅袅白烟，暖黄的灯光从窗户透出，与冷色调的湖面形成温馨对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`芬兰人非常重视隐私，拍摄私人桑拿房、住宅或他人时务必先征得同意，尤其在湖畔夏季小屋区域。冬季拍摄雪景时注意相机电池保暖，低温耗电极快。林间拍摄善用点测光，对准苔藓或树干的中间色调测光，更能保留阴影和高光的细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`设计感湖景之选`}</h4>
                  <p className="text-sm text-blue-800">{`坐落在卡拉韦西湖畔的Scandidi风格酒店，拥有全景落地窗，清晨躺在床上就能看到湖上日出，桑拿浴缸直面水景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林隐居小屋`}</h4>
                  <p className="text-sm text-green-800">{`位于普伊约山脚下的传统红色小木屋（Mökki），配备壁炉和私人小桑拿房，夜晚只有炉火噼啪声和森林的呼吸伴你入眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`市中心温馨公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`由老建筑改造的明亮公寓，位于集市广场步行两分钟的小巷，房东会贴心地准备好本地咖啡和地图，让你像当地人一样生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色桑拿民宿`}</h4>
                  <p className="text-sm text-purple-800">{`房东自家后院里拥有百年历史的传统烟熏桑拿房，体验后享用房东准备的简单晚餐，是深入了解芬兰文化的绝佳方式。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和冬季滑雪季是旺季，务必提前数月预订，尤其是特色小木屋和桑拿民宿。选择湖滨住宿注意查看是否包含私人码头或划船设备，这能极大提升体验。库奥皮奥治安极好，但住在森林小木屋要妥善保管食物，避免吸引野生动物。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开库奥皮奥许久，我时常想起的，不是某个惊心动魄的瞬间，而是一种整体的、宁静的“存在感”。在那里的每一天，你都被一种巨大的、温和的自然力量承托着。它用湖水提醒你深邃，用森林教会你沉静，用简单却温暖的食物抚慰你的肠胃，再用桑拿的热浪与湖水的清凉，完成一次对身体与精神的双重洗礼。这座城市没有试图用宏伟的历史建筑震撼你，而是用日常的、可触摸的生活方式浸润你。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个信息爆炸、脚步匆忙的世界，库奥皮奥提供了一种珍贵的“解毒剂”。它告诉你，幸福可以很简单——是清晨面包的香气，是森林徒步后的一身轻松，是与朋友在桑拿房里不言不语的默契，是登高望远时内心那片突然展开的辽阔。它代表的，是一种根植于自然、内心富足的生活哲学。每一位热爱深度游的旅人都该来一次库奥皮奥，不只是为了看风景，更是为了体验一种截然不同的生命节奏，找回与自然、也与自己内心最深处的连接。在这里，你学会的不仅是欣赏一片湖，更是学习如何像芬兰人一样，拥有一片内心的湖，平静，深邃，充满力量。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bengtskar-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    本
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">本特谢尔灯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bengtskär Lighthouse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kokkola-old-town-neristan" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科科拉（内鲁斯坦老木屋区）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kokkola (Neristan Old Wooden House District)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/loviisa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛维萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Loviisa</p>
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
