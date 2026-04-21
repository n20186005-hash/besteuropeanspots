import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '安德马特 Andermatt｜圣哥达心脏，聆听山风、木香与古老传说的阿尔卑斯秘境 - 最佳欧洲景点',
  description: '火车从漫长的圣哥达基线隧道钻出来的那一刻，窗外的世界突然被巨大的山体充满。那不是温柔的丘陵，而是带着岩石脊梁和千年积雪的、沉默而威严的巨人，它们从四面八方围拢过来，将安德马特轻轻捧在手心。这就是你的第一印象：一个被雄浑力量守护着的、却意外宁静安详的谷地小镇。空气清冽得像薄荷冰，带着松针和远处雪水的味',
}

export default function AndermattSwissAlpineVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '安德马特', href: '/destinations/europe' },
            { label: '安德马特', href: '/attractions/andermatt-swiss-alpine-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`安德马特・Andermatt・瑞士・安德马特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车从漫长的圣哥达基线隧道钻出来的那一刻，窗外的世界突然被巨大的山体充满。那不是温柔的丘陵，而是带着岩石脊梁和千年积雪的、沉默而威严的巨人，它们从四面八方围拢过来，将安德马特轻轻捧在手心。这就是你的第一印象：一个被雄浑力量守护着的、却意外宁静安详的谷地小镇。空气清冽得像薄荷冰，带着松针和远处雪水的味道，每一次呼吸都感觉肺部被洗涤。你的耳边是永恒的“背景音”——不是车马喧嚣，而是时而掠过的山风吟唱、淙淙溪流，以及偶尔从山坡上传来清脆的牛铃声。
走在卵石铺就的街道上，两旁是典型的乌里州建筑，深棕色的木瓦外墙历经风雨，颜色深沉得几乎像巧克力。这些木瓦并非装饰，它们厚重、整齐地排列着，是抵御漫长严冬的铠甲。午后的阳光斜射过来，在木纹上切出锐利的光影，空气里有淡淡的、陈年木材和干草混合的温暖香气。你会看到当地人并不匆忙，他们可能在打理窗前怒放的天竺葵，或是提着篮子从合作社走出来，彼此用轻柔的瑞士德语打招呼。这里没有“景区”的疏离感，你闯入的是一个运作有序、自给自足的阿尔卑斯社区，旅行者只是过客，而山与季节才是永恒的主人。
然而，让安德马特真正触动你的，是那股弥漫在空气中的、看不见的历史张力。你脚下的土地，是汉尼拔大军可能经过的猜想之地，是拿破仑军队艰难翻越的隘口，是中世纪商队歇脚的驿站。这种重要性并未随时代完全消逝，当你仰望山坡上依旧保留的旧军营房严肃的轮廓，或是注意到火车站里南来北往、装载着货物的火车频繁驶过，你会明白：它依然是欧洲的一条动脉，只是搏动的方式从马蹄和脚步，变成了铁轨和电流。这种“过去完成时”与“现在进行时”的交织，构成了安德马特最独特的魅力——它既是一座活的历史丰碑，又是一个呼吸着的现代山村。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车从漫长的圣哥达基线隧道钻出来的那一刻，窗外的世界突然被巨大的山体充满。那不是温柔的丘陵，而是带着岩石脊梁和千年积雪的、沉默而威严的巨人，它们从四面八方围拢过来，将安德马特轻轻捧在手心。这就是你的第一印象：一个被雄浑力量守护着的、却意外宁静安详的谷地小镇。空气清冽得像薄荷冰，带着松针和远处雪水的味道，每一次呼吸都感觉肺部被洗涤。你的耳边是永恒的“背景音”——不是车马喧嚣，而是时而掠过的山风吟唱、淙淙溪流，以及偶尔从山坡上传来清脆的牛铃声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在卵石铺就的街道上，两旁是典型的乌里州建筑，深棕色的木瓦外墙历经风雨，颜色深沉得几乎像巧克力。这些木瓦并非装饰，它们厚重、整齐地排列着，是抵御漫长严冬的铠甲。午后的阳光斜射过来，在木纹上切出锐利的光影，空气里有淡淡的、陈年木材和干草混合的温暖香气。你会看到当地人并不匆忙，他们可能在打理窗前怒放的天竺葵，或是提着篮子从合作社走出来，彼此用轻柔的瑞士德语打招呼。这里没有“景区”的疏离感，你闯入的是一个运作有序、自给自足的阿尔卑斯社区，旅行者只是过客，而山与季节才是永恒的主人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，让安德马特真正触动你的，是那股弥漫在空气中的、看不见的历史张力。你脚下的土地，是汉尼拔大军可能经过的猜想之地，是拿破仑军队艰难翻越的隘口，是中世纪商队歇脚的驿站。这种重要性并未随时代完全消逝，当你仰望山坡上依旧保留的旧军营房严肃的轮廓，或是注意到火车站里南来北往、装载着货物的火车频繁驶过，你会明白：它依然是欧洲的一条动脉，只是搏动的方式从马蹄和脚步，变成了铁轨和电流。这种“过去完成时”与“现在进行时”的交织，构成了安德马特最独特的魅力——它既是一座活的历史丰碑，又是一个呼吸着的现代山村。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`安德马特`} />
                <InfoRow label="英文名称" value={`Andermatt`} />
                <InfoRow label="正式名称" value={`Andermatt`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`安德马特`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`扼守圣哥达、富尔卡、上阿尔卑山口等数条关键阿尔卑斯隘口的十字路口，是千百年来南北欧交通与军事的战略锁钥。`} />
                <InfoRow label="建筑特色" value={`传统的乌里州深色木瓦外墙建筑与现代奢华度假村和谐共生，形成独特的时空对话。`} />
                <InfoRow label="建筑风格" value={`瑞士高山传统木结构建筑风格，以厚重的斜顶和抵御风雪的坚固结构为特征。`} />
                <InfoRow label="文化价值" value={`一个浓缩了阿尔卑斯山民坚韧精神、军事历史尘埃、交通史诗与温暖民俗的活态博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。游客中心通常为周一至周五 9:00-12:00, 13:30-17:00，周六可能缩短时间或关闭，周日休息。魔鬼桥等户外景点全天可访，但冬季部分山路可能因积雪封闭。具体室内场馆（如博物馆）的开放时间建议出行前在当地官网复核。`} />
              <InfoRow label="门票价格" value={`进入安德马特小镇免费。参观乌瑟恩山谷博物馆（Ursern Valley Museum）等特定文化场馆需购票，成人约8瑞士法郎，持有瑞士旅行通票可享受折扣。搭乘周边缆车或参加向导徒步活动需额外付费。`} />
              <InfoRow label="地址" value={`Gotthardstrasse 1, 6490 Andermatt, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场（ZRH）或苏黎世中央火车站出发最便捷。乘坐瑞士国铁（SBB）的火车，沿圣哥达轴线南下，约2-2.5小时可直达安德马特火车站。火车班次频繁，约每小时一班，沿途风光绝美，穿过隧道后豁然开朗的山谷景色是旅程的前奏。强烈建议使用瑞士旅行通票，可无限次乘坐。自驾则可通过A2高速公路转至圣哥达山口公路（夏季开放）或圣哥达基线隧道（全年通行）抵达，小镇有充足的付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们把时钟拨回更早的时候。安德马特所在的乌瑟恩山谷，因其独特的地理位置，很早就有人类活动的痕迹。但它的命运真正被改变，始于那条传奇的通道——圣哥达山口。中世纪早期，这条险峻的山路逐渐成为连接德国南部与意大利北部最重要的商道之一。骡马商队载着丝绸、香料和羊毛，在向导的带领下，战战兢兢地穿越冰川和悬崖。安德马特，作为翻越山口前最后一个重要的补给和休整站，开始繁荣起来。它为疲惫的旅人提供热汤、粗糙但温暖的床铺，以及最重要的——关于前方天气和路况的信息。小镇最早的基石，便由这些冒险家的足迹和金币奠定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这段险途，最著名的莫过于“魔鬼桥”的传说。在圣哥达山路最险要的肖伦峡谷，湍急的罗伊斯河咆哮而过，建桥难于登天。传说中，绝望的村民与魔鬼达成交易：魔鬼一夜之间造好石桥，但将取走第一个过桥生灵的灵魂。聪明的村民在桥建成后，赶了一只山羊过桥。魔鬼大怒，举起巨石想砸毁桥梁，却被一位老妇用十字架吓退，巨石落下成了今天的“魔鬼石”。这个故事并非凭空而来，它深刻地反映了先民对自然力量的敬畏，以及用智慧和信仰战胜艰险的隐喻。那座多次重建的古老石桥，至今仍横跨在峡谷之上，凝视着下方新建的现代化公路桥，仿佛一个沉默的故事讲述者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到近代，安德马特的战略地位从商业转向了军事。十九世纪初，拿破仑的大军曾途径此地，阿尔卑斯的天险也无法阻挡帝国扩张的野心。随后，新兴的瑞士联邦意识到了这个隘口枢纽的重要性，将其建设成为重要的军事要塞。你在小镇周边山体中看到的许多堡垒和营房遗迹，大多建于冷战时期，用以守卫这条南北走廊。曾有上千名士兵驻扎于此，为这个宁静的山谷带来了一种特殊的、略带冷峻的节奏。小镇的许多老建筑里，至今还能找到为军人服务的酒吧或商店的痕迹。军旅文化，如同山上的岩石，成为了安德马特历史地层中坚实的一层。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的又一次命运转折，发生在二十一世纪。随着圣哥达基线隧道这一世纪工程的贯通，交通格局剧变，小镇的军事功能逐渐褪去，面临着发展的十字路口。这时，一个大胆的愿景被提出：将安德马特从一个过路站和军营，转型为世界级的全年高山度假胜地。来自中东的投资带来了高端酒店、高尔夫球场和顶级滑雪设施，但令人欣慰的是，开发是克制的、融合的。新建筑严格遵守传统风貌，古老的木瓦小屋被精心修复。今天的安德马特，就像一个经历过远征的战士，卸下了盔甲，换上了舒适而得体的衣裳，向世界展示它深厚的内在美与阿尔卑斯的热情好客。历史从未离开，它只是换了一种方式，继续在这片传奇的山谷中流淌。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排完整的一天来沉浸式体验安德马特。最好在上午九点左右抵达，此时阳光刚刚照亮山谷，游客尚少，小镇沐浴在清新宁静之中。整体游览节奏宜慢不宜快，核心在于用脚步丈量小镇街巷，感受自然与历史的交融。上午专注探索小镇中心和博物馆，理解其文化脉络；午后徒步前往魔鬼桥，亲身体验地理与传说的震撼；傍晚回到镇上，享受高山晚餐并欣赏日落金山。这样的安排既能覆盖精华，又留有足够的时间发呆和感受。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`徒步前往魔鬼桥务必穿防滑舒适的鞋子，部分山路有碎石且潮湿。小镇及周边餐厅关门较早，建议七点前解决晚餐，或提前在住宿地安排。山区天气瞬息万变，即使夏日也请随身携带一件防风保暖外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从火车站出来，先别急着走，站在站前小广场上静静感受一下四面雪山环抱的磅礴气势和清冽空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主干道Gotthardstrasse缓步向内走，用手指触摸路边老屋那些冰凉而纹路深刻的深色木瓦外墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进安静的侧巷，找到小巧的圣彼得与保罗教堂，进去坐在长椅上，听一听自己的呼吸与这座古老建筑的静谧共鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访乌瑟恩山谷博物馆，在那座建于1602年的老房子里，通过古老的农具、军装和地图触摸山谷生活的温度与重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇上的家族餐厅找一张靠窗的桌子，点一份经典的阿尔卑斯通心粉或奶酪火锅，看着窗外雪山慢慢享用午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后沿着清晰标示的徒步小径，朝着肖伦峡谷方向行走约45分钟，去朝圣那座承载着魔鬼传说的古老石桥。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在魔鬼桥上，俯身看向下方数十米深处怒吼的翡翠色罗伊斯河，并抬头仰望悬崖上现代公路桥的钢筋弧线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分返回镇上，找一家有露台的咖啡馆，点一杯热巧克力，看夕阳如何将雪山顶峰依次染成金黄、粉红再到暗紫。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村口南侧的小山坡草地`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，以草地上的野花为前景，将小镇成片的深棕色木瓦屋顶和后方雄伟的雪山同框，构成经典的阿尔卑斯田园诗画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`魔鬼桥的侧下方观景台`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射峡谷时，使用广角镜头仰拍，将古老石桥的完整石拱、悬崖肌理与上方现代公路桥的线条一同纳入，形成跨越时空的强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小镇中心圣彼得与保罗教堂钟楼脚下`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光斜射过狭窄街巷，拍摄木瓦外墙被照亮的光影质感，以及远处雪山作为背景，画面充满宁静的几何美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从Gütsch山缆车站俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`搭乘缆车上山，在黄昏“蓝调时刻”，拍摄山谷中华灯初上、蜿蜒公路车流光轨与深邃群山共存的梦幻全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`冬季雪后小镇街道`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个雪停后的清晨，拍摄覆盖着厚厚白雪的木质阳台、挂着冰凌的屋檐和冒着袅袅炊烟的老屋，营造童话般的冬日秘境氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民和私人住宅请务必保持距离并先征得同意，尊重隐私。利用偏光镜可以很好地消除木瓦和树叶上的反光，让颜色更饱和。冬季拍摄注意相机电池保温，低温下耗电极快。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`火车站附近由家族经营的“Gasthaus Altendorf”客栈，房间整洁温暖，早餐室的窗台正对雪山，女主人会为你讲述她祖父时代小镇的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭体验`}</h4>
                  <p className="text-sm text-green-800">{`“The River House”精品公寓，坐落于罗伊斯河边，拥有全套厨房设施，听着潺潺水声入睡，适合想要体验“山居日常”的家庭或小团体。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色木屋`}</h4>
                  <p className="text-sm text-yellow-800">{`“Bergidyll”山间木屋，位于小镇上方步行可达的宁静坡地，完全由古老原木搭建，壁炉里烧着真正的松木，晚上可以看见毫无光污染的璀璨星河。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华度假`}</h4>
                  <p className="text-sm text-purple-800">{`标志性的“The Chedi Andermatt”酒店，将亚洲禅意与阿尔卑斯风格完美融合，在泳池边直面雪山，享受水疗与米其林美食，是犒赏自己的终极选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季徒步旺季和冬季滑雪季房源非常紧张，务必提前数月预订。如果自驾，预订时需确认住宿是否提供免费停车位。小镇治安极好，但山区夜晚照明有限，散步建议携带手电。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开安德马特时，我的背包里没有多出什么纪念品，但心里却好像被填进了一些更坚实的东西。是那种山风雕刻过的宁静，是木屋在阳光下散发的、关于“家”的温暖气味，是站在魔鬼桥上，同时听到历史传说与现代车流呼啸而过的复杂共鸣。这个地方教会我，真正的力量不在于征服，而在于共存与适应。山脉从未被征服，人们只是学会了如何怀着敬畏，在它的褶皱里找到生活的节奏，从险隘中开辟通途，在严酷里创造温暖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求速达和效率的时代，安德马特的存在像一个温柔的提醒。它让你慢下来，不是通过说教，而是通过它本身那亘古不变的群山节奏。它告诉你，重要的不是匆匆“经过”一个地方，而是去“感受”它——感受它的风，它的历史地层，它的人们如何与自然达成那份沉默而坚固的契约。无论你是追寻历史的旅人、痴迷山野的徒步者，还是仅仅想找一个地方让心灵透口气，安德马特都会以其阿尔卑斯特有的、沉默而宽广的胸怀接纳你。它不只是地图上的一个点，它是圣哥达心脏的一次深沉搏动，值得你专程前来，侧耳倾听。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chur-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/valle-muggio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆焦山谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valle Muggio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arosa-switzerland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿罗萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arosa</p>
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
