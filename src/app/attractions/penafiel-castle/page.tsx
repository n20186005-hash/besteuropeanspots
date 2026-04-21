import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩纳菲耶尔城堡 Peñafiel Castle｜航行在山脊的白色巨轮与地下酒窖王国 - 最佳欧洲景点',
  description: '第一眼看到佩纳菲耶尔城堡，你会以为自己出现了幻觉。在平坦得像一块巨大石板、种满葡萄藤的卡斯蒂利亚高原上，一道狭长的、纯白色的山脊毫无征兆地拔地而起。而就在这山脊的顶端，一艘巨大无比的“石船”正扬帆起航。没错，那真的不像一座传统意义上的城堡，它太长了，线条太凌厉了，像被巨人遗忘在这里的一把白色尺子，又',
}

export default function PenafielCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '佩纳菲耶尔', href: '/destinations/europe' },
            { label: '佩纳菲耶尔城堡', href: '/attractions/penafiel-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩纳菲耶尔城堡・Peñafiel Castle・西班牙・佩纳菲耶尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到佩纳菲耶尔城堡，你会以为自己出现了幻觉。在平坦得像一块巨大石板、种满葡萄藤的卡斯蒂利亚高原上，一道狭长的、纯白色的山脊毫无征兆地拔地而起。而就在这山脊的顶端，一艘巨大无比的“石船”正扬帆起航。没错，那真的不像一座传统意义上的城堡，它太长了，线条太凌厉了，像被巨人遗忘在这里的一把白色尺子，又像一艘搁浅在陆地上的诺亚方舟，永远定格在破浪前行的瞬间。阳光在它粗糙的石灰岩墙面上跳跃，投下浓重而分明的阴影，让这艘“船”在湛蓝的天幕下拥有了雕塑般的立体感。风，是这里永恒的背景音，呼啸着穿过杜罗河谷，仿佛在诉说这片土地千百年来干燥、坚韧的故事。
当你开始沿着坡道向城堡走去，脚下的碎石沙沙作响，空气中混合着干草、岩石被太阳烘烤后的尘土味，以及从山谷葡萄园飘来的、若有若无的植物清香。你会发现，城堡下的山体远非自然形成那么简单。巨大的拱形门洞像巨兽的嘴，深深嵌入山体，里面幽暗阴凉，与外面的炽热形成鲜明对比——那是它另一个惊人的秘密：一个被完全掏空的山腹，一座庞大的地下宫殿。只不过，这里供奉的不是神明或君王，而是沉睡在橡木桶中的琼浆玉液。当地人的生活节奏似乎也围绕着这座山与这座城。下午时分，你会看到老人们坐在广场的树荫下闲聊，话题总离不开今年的收成和酒的品质；城堡的影子慢慢拉长，覆盖一部分小镇的白墙红瓦，时间在这里变得缓慢而具体。
这座城堡最打动人心的地方，在于它那惊人的双重灵魂。地上是冷峻、严肃、充满男性荷尔蒙的军事堡垒，每一块石头都写着防御、警戒和征服。而地下，则是感性、丰饶、充满生命力的葡萄酒圣地，弥漫着酵母、木桶和时间的芬芳。它完美诠释了西班牙卡斯蒂利亚地区的性格：外表粗粝刚硬，内心却流淌着热情与艺术的血液。它不只是供人瞻仰的古迹，更是这片土地血脉的一部分，连接着过去战争的荣耀与今日生活的欢愉。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到佩纳菲耶尔城堡，你会以为自己出现了幻觉。在平坦得像一块巨大石板、种满葡萄藤的卡斯蒂利亚高原上，一道狭长的、纯白色的山脊毫无征兆地拔地而起。而就在这山脊的顶端，一艘巨大无比的“石船”正扬帆起航。没错，那真的不像一座传统意义上的城堡，它太长了，线条太凌厉了，像被巨人遗忘在这里的一把白色尺子，又像一艘搁浅在陆地上的诺亚方舟，永远定格在破浪前行的瞬间。阳光在它粗糙的石灰岩墙面上跳跃，投下浓重而分明的阴影，让这艘“船”在湛蓝的天幕下拥有了雕塑般的立体感。风，是这里永恒的背景音，呼啸着穿过杜罗河谷，仿佛在诉说这片土地千百年来干燥、坚韧的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你开始沿着坡道向城堡走去，脚下的碎石沙沙作响，空气中混合着干草、岩石被太阳烘烤后的尘土味，以及从山谷葡萄园飘来的、若有若无的植物清香。你会发现，城堡下的山体远非自然形成那么简单。巨大的拱形门洞像巨兽的嘴，深深嵌入山体，里面幽暗阴凉，与外面的炽热形成鲜明对比——那是它另一个惊人的秘密：一个被完全掏空的山腹，一座庞大的地下宫殿。只不过，这里供奉的不是神明或君王，而是沉睡在橡木桶中的琼浆玉液。当地人的生活节奏似乎也围绕着这座山与这座城。下午时分，你会看到老人们坐在广场的树荫下闲聊，话题总离不开今年的收成和酒的品质；城堡的影子慢慢拉长，覆盖一部分小镇的白墙红瓦，时间在这里变得缓慢而具体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡最打动人心的地方，在于它那惊人的双重灵魂。地上是冷峻、严肃、充满男性荷尔蒙的军事堡垒，每一块石头都写着防御、警戒和征服。而地下，则是感性、丰饶、充满生命力的葡萄酒圣地，弥漫着酵母、木桶和时间的芬芳。它完美诠释了西班牙卡斯蒂利亚地区的性格：外表粗粝刚硬，内心却流淌着热情与艺术的血液。它不只是供人瞻仰的古迹，更是这片土地血脉的一部分，连接着过去战争的荣耀与今日生活的欢愉。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩纳菲耶尔城堡`} />
                <InfoRow label="英文名称" value={`Peñafiel Castle`} />
                <InfoRow label="正式名称" value={`Castillo de Peñafiel`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`佩纳菲耶尔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卡斯蒂利亚王权巩固与杜罗河岸葡萄酒产区兴起的双重象征，一座见证了基督教王国与摩尔人漫长边境拉锯战的战略要塞。`} />
                <InfoRow label="建筑特色" value={`其狭长如舰船般的独特布局（长约210米，最宽处仅33米）完美适应了山脊地形，被誉为“石质战舰”；城堡下方山体被完全挖空，形成规模宏大的地下酒窖网络。`} />
                <InfoRow label="建筑风格" value={`主体为中世纪军事建筑风格，经过多次重建与加固，呈现出简洁、实用的防御性哥特式与穆德哈尔式元素融合。`} />
                <InfoRow label="文化价值" value={`不仅是一座城堡，更是将中世纪军事遗产与西班牙国粹——葡萄酒文化无缝衔接的活态博物馆，展现了土地、历史与生活方式的深刻联结。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡及葡萄酒博物馆开放时间因季节而异。通常为：冬季（10月至3月）上午10:00至下午2:00，下午4:00至6:00；夏季（4月至9月）上午10:30至下午2:30，下午4:30至晚上8:00。每周一闭馆（节假日除外）。1月1日、1月6日、12月24日下午、12月25日及12月31日下午闭馆。建议行前在其官网或当地旅游局官网核实具体时间，因西班牙节日繁多，常有临时调整。`} />
              <InfoRow label="门票价格" value={`标准门票约6欧元。包含城堡、主塔及葡萄酒博物馆的完整参观。优惠票（学生、65岁以上老人、团体）约4.5欧元。12岁以下儿童在成人陪同下免费。每周四下午（具体时间随季节变化）对欧盟公民免费，但需出示证件。门票可在城堡入口处购买，旺季时建议提前在线预订以避免排队。`} />
              <InfoRow label="地址" value={`Plaza del Coso, 1, 47300 Peñafiel, Valladolid, Spain`} />
              <InfoRow label="交通方式" value={`最近的国际机场是马德里巴拉哈斯机场。从马德里查马丁火车站乘坐高速列车AVE至巴利亚多利德站，车程约1小时，班次频繁。抵达巴利亚多利德后，可在汽车站乘坐前往佩纳菲耶尔的区域性巴士，车程约50分钟至1小时，每天约5-6班，最好提前查询时刻表。自驾是最灵活的方式，从巴利亚多利德沿N-122公路向东行驶约50公里即达，沿途是广阔的卡斯蒂利亚平原和葡萄园风光，城堡会早早出现在地平线上为你引路。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩纳菲耶尔的故事，始于一个充满硝烟与对峙的名字——“边境”。在公元10世纪左右，这里是基督教王国与安达卢西亚的摩尔人政权之间漫长拉锯战的前线。最初，这里可能只是一个简陋的瞭望点，占据着杜罗河岸的制高点，监视着河谷的动静。它的名字“Peña Fiel”（忠诚的岩石）本身就源于一则传说：据说一位卡斯蒂利亚骑士在此坚守，面对摩尔人的进攻誓死不降，最终等来援军，这块岩石因此被冠以“忠诚”之名。这虽然更像后世为巩固统治而编撰的史诗，但深刻地反映了这个地方与生俱来的军事基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的真正崛起，要等到卡斯蒂利亚王国逐渐向南推进，王权需要巩固这些新征服的土地。在11世纪，它被授予著名的卡斯蒂利亚贵族拉腊家族。此后的几百年里，城堡在不同贵族家族间流转、易手，伴随着阴谋、联姻和偶尔的暴力冲突。每一次易主，几乎都伴随着加固和扩建。现在的狭长船形布局，正是在这个漫长的中世纪时期逐步形成的。建筑者们没有选择推平山脊，而是极具智慧地“骑”在了山脊之上，让城堡的轮廓完全服从于自然地形，从而获得了无与伦比的防御视野和令人望而生畏的外观。你可以想象，在那个冷兵器时代，这样一艘白色“战舰”矗立在荒原上，对任何来犯之敌都是巨大的心理威慑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，战争并非它永恒的主题。随着1492年格拉纳达的陷落，西班牙完成了收复失地运动，佩纳菲耶尔从边境要塞变成了内陆领地。它的军事重要性急剧下降，但另一种命运悄然降临。卡斯蒂利亚-莱昂地区，尤其是杜罗河岸，其得天独厚的气候和土壤被证明是葡萄种植的天堂。大约从16世纪起，城堡下的岩石山体开始被巧妙地利用。人们发现这里的岩层坚硬稳定，且能提供恒定的低温与湿度，是储藏和陈酿葡萄酒的绝佳天然酒窖。于是，一场安静的“工程”开始了：山体被一点点掏空，形成了迷宫般的拱顶隧道和窖室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡本身在17世纪后逐渐荒废，但地下的酒窖却日益兴盛。到了20世纪，当地政府与葡萄酒行业协会看到了将其文化遗产与支柱产业结合的巨大潜力。一场大规模的修复工程让城堡重获新生，而地下酒窖则被系统地整合，打造成了杜罗河岸葡萄酒的原产地名称保护监管委员会总部及其博物馆。这意味着，你今天走进的那些阴凉的地下长廊，不仅是历史遗迹，更是一个活跃的葡萄酒产业核心，监管着这片西班牙最著名产区之一的质量与声誉。从军事堡垒到酒窖王国，佩纳菲耶尔完成了一次华丽的转身，将历史的沉重化为了生活的醇香。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了获得最完整的体验，建议在下午早些时候（比如2点后）抵达。这样你可以先参观城堡内部和博物馆，避开正午最烈的日头，然后在地下恒温酒窖享受清凉，最后在傍晚时分登上制高点，欣赏城堡长长的影子投射在葡萄园上以及日落时分的金色光辉。整体游览时间建议预留3-4小时，节奏可以放松一些，因为无论是历史还是美酒，都值得细细品味。先上后下的顺序，既能把握全局，又能以沉浸式的感官体验收尾。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡所在的山顶毫无遮挡，夏季阳光极其猛烈，务必携带帽子、太阳镜和充足饮用水。地下酒窖常年温度在12-15摄氏度，与地面温差大，最好带一件薄外套以防着凉。品酒环节虽包含在门票内，但量不大，若自驾请务必注意西班牙严格的酒驾法规。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在山脚下的停车场，先别急着上去，后退几步，找个好角度好好端详一下这艘“石船”整体的气势与线条。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过小镇边缘古老的石拱门，开始沿着Z字形的缓坡小径向上攀登，感受脚下石子的触感和越来越开阔的平原视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡主体建筑，在略显昏暗的展厅里通过模型和历史文献，了解这艘“石船”如何从边境堡垒演变成今天的模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要攀爬那座高耸的主塔楼，在狭窄的旋转石阶尽头，迎接你的是360度无死角的震撼全景，整个杜罗河岸产区仿佛一幅巨大的绿色棋盘铺展在脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来，找到通往地下酒窖的入口，瞬间从干燥炽热的世界跌入一个阴凉、弥漫着橡木与酒香的地下迷宫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在酒窖深处的品酒室，根据导览员的建议，选择一杯当地特色的丹魄或歌海娜葡萄酒，让那股复杂的浆果与香料风味在口中慢慢绽放。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，不要急着离开，沿着城堡外围的步道散步，看着夕阳将白色的城墙染成蜂蜜色， shadows变得无比悠长。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到山脚下小镇的广场，找一家挂着“Bodega”招牌的当地小酒馆，点一份烤乳羊或炖豆子，搭配一杯刚才在博物馆尝到的同款美酒。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡远观全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`最佳位置在城堡西南方向的VA-104公路某个弯道处，下午侧光时分，能拍出城堡狭长舰身与背后无尽平原的强烈对比，使用长焦镜头压缩空间感更佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主塔楼顶端俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`登上主塔后，将相机或手机镜头从垛口伸出垂直向下拍摄，可以捕捉到城堡“舰首”破开山脊、两侧陡峭崖壁的惊险构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下酒窖光影隧道`}</h4>
                  <p className="text-sm text-gray-700">{`在酒窖的某段长隧道中，等待一束人工光或安全出口的绿光打在层叠的橡木桶上，形成深邃的透视与明暗对比，调高ISO，尝试慢速快门捕捉静谧感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`夕阳下的城堡剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，移动到城堡东侧的山坡葡萄园中，以低角度仰拍，将城堡的黑色剪影、绚烂的晚霞和前景的葡萄藤一同纳入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇广场仰角`}</h4>
                  <p className="text-sm text-gray-700">{`在佩纳菲耶尔镇中心广场，用广角镜头仰拍，将当地古老的木筋房屋阳台、飘扬的旗帜与背景山脊上巍峨的城堡一同定格，展现生活与历史的同框。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必确认当地法规，城堡及周边空域可能有飞行限制。在酒窖内部拍摄时请勿使用闪光灯，以免影响葡萄酒品质。尊重当地居民隐私，拍摄小镇人物时最好先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`镇上舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场旁一家由百年石屋改造的精品酒店，房间保留了原始的木质横梁和厚实的墙壁，晚上能听到广场上轻柔的聊天声，早餐有自家制的番茄酱抹面包。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园中的隐居`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡几公里外，一家家庭经营的农庄酒店，四周被自家的葡萄园环绕，房间自带小露台，夜晚完全没有光污染，星空璀璨，主人会带你参观他们的酒窖。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落于附近另一个小镇、由16世纪贵族庄园修复而成的奢华酒店，拥有华丽的回廊庭院和超大的泳池，提供顶尖的杜罗河岸产区葡萄酒单和 Spa 服务，是历史与奢华的结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`巴利亚多利德城际选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果不想住小镇，可以返回省会巴利亚多利德，那里有从设计酒店到历史宫殿改建的各种住宿，夜生活和文化生活更丰富，自驾往返也只需一小时。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩纳菲耶尔小镇本身非常安全宁静，但夜生活选择有限，适合寻求安静放松的旅行者。若赶上九月的葡萄收获节，小镇会非常热闹，住宿需提前数月预订。在葡萄园农庄住宿，务必品尝主人自酿的、未必在市场上流通的“私房酒”。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开佩纳菲耶尔很久之后，那艘白色石船的意象还会不时浮现在脑海里。它带给我的震撼，远不止于奇特的造型或宏伟的规模。而在于它如此生动地展示了一种生存的智慧与韧性——人类如何在严酷的自然与历史环境中，先是竖起壁垒以求生存，然后又学会了向大地索取馈赠，将防御的工事转化为丰饶的窖藏。站在城堡上，你看到的是战争与征服的历史；走入酒窖，你品尝到的是和平与创造的喜悦。这种双重性，让这个地方充满了哲学的意味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切似乎都在飞速扁平化的时代，佩纳菲耶尔像一座沉稳的孤岛。它提醒我们，有些价值需要时间的沉淀，无论是岩石的风化，还是葡萄酒的醇化。它不是一个被抽离了背景的“网红打卡点”，而是一个深深扎根于其土地、气候与社区的生命体。每一位热爱深度游的旅人，都应该来这里待上半天。不仅仅是为了看一座奇特的城堡，更是为了理解一种将历史伤痛转化为生活艺术的能力，感受那份从坚硬岩石中诞生出的、柔软而丰沛的甜美。这趟旅程，会像一杯好的丹魄红酒一样，初尝有些许历史的涩感，但回味是漫长而温暖的甘醇。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ubeda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/avila-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ávila Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belmonte-castile" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔蒙特城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belmonte Castle</p>
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
