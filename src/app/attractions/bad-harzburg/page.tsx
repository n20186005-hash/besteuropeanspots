import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴德哈尔茨堡 Bad Harzburg｜漫步中世纪巫术山脉，探秘帝王温泉与森林童话 - 最佳欧洲景点',
  description: '车子刚刚驶出高速公路，一股混合着冷杉树脂和湿润泥土的清新空气就钻进了车窗。哈尔茨山脉的轮廓在天际线上由浅入深，像一道墨绿色的波浪。而巴德哈尔茨堡，就安静地卧在这道波浪脚下的谷地里。第一眼望去，它不像那些张扬的旅游明星小镇，没有密密麻麻的尖顶，反而有种被岁月抚平的温和。小镇中心那些黑白棕三色交织的半木...',
}

export default function BadHarzburgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '巴特哈尔茨堡', href: '/destinations/germany' },
            { label: '巴德哈尔茨堡', href: '/attractions/bad-harzburg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴德哈尔茨堡・Bad Harzburg・德国・巴特哈尔茨堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚驶出高速公路，一股混合着冷杉树脂和湿润泥土的清新空气就钻进了车窗。哈尔茨山脉的轮廓在天际线上由浅入深，像一道墨绿色的波浪。而巴德哈尔茨堡，就安静地卧在这道波浪脚下的谷地里。第一眼望去，它不像那些张扬的旅游明星小镇，没有密密麻麻的尖顶，反而有种被岁月抚平的温和。小镇中心那些黑白棕三色交织的半木结构房子，在午后的阳光下显得格外慵懒，窗台上的天竺葵开得正艳，红得像一团团小小的火焰。你能听见最清晰的声音，是广场喷泉的潺潺水声，和咖啡馆露天座上瓷杯轻碰的脆响。当地人推着自行车慢悠悠地路过，手里拎着刚从面包房出来的纸袋，空气里飘着一股新鲜酵母和肉桂卷的甜香。这里的生活节奏，仿佛还停留在某个更从容的年代。
但只要你抬起头，视线越过那些温驯的屋顶，故事就变了调。在北侧那座被称为“城堡山”的陡峭山峦之巅，一片深色的、锯齿状的轮廓切割着天空——那是哈茨堡的废墟。它沉默地矗立在那里，与脚下宁静祥和的小镇形成一种戏剧性的张力。你会瞬间明白，这个小镇的灵魂是分裂的，也是统一的：一半是享受大地恩赐（温泉）的疗愈与宁静，另一半则是追逐权力与信仰（城堡与巫术传说）留下的、无法抹去的伤痕与记忆。这种矛盾感，正是它最迷人的地方。
傍晚时分，我沿着从镇中心蜿蜒上山的“巨人之路”小径开始漫步。小径被浓密的榉树和云杉覆盖，光线变得斑驳而神秘。踩着厚厚的、松软的腐殖质落叶，沙沙声是唯一的伴奏。偶尔，林间空地上会出现一些造型奇特的木雕——或许是一个歪着头的老巫师，或许是一只看似憨厚却眼神狡黠的山妖。这些可不是普通的装饰，它们默默指向这片土地更深层的集体记忆：哈尔茨山脉，是德国民间传说中女巫、魔鬼和精灵的故乡。歌德在《浮士德》里描写的瓦普几斯之夜，女巫们飞赴布罗肯峰狂欢，而巴德哈尔茨堡，正是通往那个神秘世界的现实入口之一。此刻，森林的静谧不再让人觉得安宁，反而滋生出一丝淡淡的、令人兴奋的寒意。
当你终于穿过森林，抵达山顶的城堡废墟脚下，那股寒意会被辽阔的视野瞬间驱散。站在帝国皇帝曾经站立的地方，俯瞰整个小镇像一幅精致的模型铺展在谷地，更远处是层层叠叠、望不到尽头的森林海洋。风很大，呼啸着穿过残破的拱门和窗洞，仿佛在诉说那些早已随风而逝的阴谋、誓言与战争。山下的温泉浴场升腾起若有若无的白色水汽，与森林的墨绿、小镇的暖黄交织在一起。这一刻，历史的神秘、自然的壮美与尘世的疗愈，以一种不可思议的方式达成了和解。这就是巴德哈尔茨堡的核心魅力——它不是一个单面的景点，而是一个让你同时触摸到德国历史的硬度、传说的诡谲、自然的呼吸与生活暖意的多维空间。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚刚驶出高速公路，一股混合着冷杉树脂和湿润泥土的清新空气就钻进了车窗。哈尔茨山脉的轮廓在天际线上由浅入深，像一道墨绿色的波浪。而巴德哈尔茨堡，就安静地卧在这道波浪脚下的谷地里。第一眼望去，它不像那些张扬的旅游明星小镇，没有密密麻麻的尖顶，反而有种被岁月抚平的温和。小镇中心那些黑白棕三色交织的半木结构房子，在午后的阳光下显得格外慵懒，窗台上的天竺葵开得正艳，红得像一团团小小的火焰。你能听见最清晰的声音，是广场喷泉的潺潺水声，和咖啡馆露天座上瓷杯轻碰的脆响。当地人推着自行车慢悠悠地路过，手里拎着刚从面包房出来的纸袋，空气里飘着一股新鲜酵母和肉桂卷的甜香。这里的生活节奏，仿佛还停留在某个更从容的年代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但只要你抬起头，视线越过那些温驯的屋顶，故事就变了调。在北侧那座被称为“城堡山”的陡峭山峦之巅，一片深色的、锯齿状的轮廓切割着天空——那是哈茨堡的废墟。它沉默地矗立在那里，与脚下宁静祥和的小镇形成一种戏剧性的张力。你会瞬间明白，这个小镇的灵魂是分裂的，也是统一的：一半是享受大地恩赐（温泉）的疗愈与宁静，另一半则是追逐权力与信仰（城堡与巫术传说）留下的、无法抹去的伤痕与记忆。这种矛盾感，正是它最迷人的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`傍晚时分，我沿着从镇中心蜿蜒上山的“巨人之路”小径开始漫步。小径被浓密的榉树和云杉覆盖，光线变得斑驳而神秘。踩着厚厚的、松软的腐殖质落叶，沙沙声是唯一的伴奏。偶尔，林间空地上会出现一些造型奇特的木雕——或许是一个歪着头的老巫师，或许是一只看似憨厚却眼神狡黠的山妖。这些可不是普通的装饰，它们默默指向这片土地更深层的集体记忆：哈尔茨山脉，是德国民间传说中女巫、魔鬼和精灵的故乡。歌德在《浮士德》里描写的瓦普几斯之夜，女巫们飞赴布罗肯峰狂欢，而巴德哈尔茨堡，正是通往那个神秘世界的现实入口之一。此刻，森林的静谧不再让人觉得安宁，反而滋生出一丝淡淡的、令人兴奋的寒意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于穿过森林，抵达山顶的城堡废墟脚下，那股寒意会被辽阔的视野瞬间驱散。站在帝国皇帝曾经站立的地方，俯瞰整个小镇像一幅精致的模型铺展在谷地，更远处是层层叠叠、望不到尽头的森林海洋。风很大，呼啸着穿过残破的拱门和窗洞，仿佛在诉说那些早已随风而逝的阴谋、誓言与战争。山下的温泉浴场升腾起若有若无的白色水汽，与森林的墨绿、小镇的暖黄交织在一起。这一刻，历史的神秘、自然的壮美与尘世的疗愈，以一种不可思议的方式达成了和解。这就是巴德哈尔茨堡的核心魅力——它不是一个单面的景点，而是一个让你同时触摸到德国历史的硬度、传说的诡谲、自然的呼吸与生活暖意的多维空间。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴德哈尔茨堡`} />
                <InfoRow label="英文名称" value={`Bad Harzburg`} />
                <InfoRow label="正式名称" value={`Bad Harzburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴特哈尔茨堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座以神圣罗马帝国皇帝亨利四世城堡命名的温泉小镇，是通往神秘哈尔茨山脉的北部门户，历史上曾是帝国政治博弈的焦点与著名的“巫术之路”重要节点。`} />
                <InfoRow label="建筑特色" value={`半山腰上雄踞着沧桑的城堡废墟，山下则是充满俾斯麦时期优雅风格的木质框架建筑与疗养别墅，温泉浴场建筑则融合了现代玻璃穹顶与历史元素，形成奇妙的时空对话。`} />
                <InfoRow label="建筑风格" value={`整体呈现典型的德国北部古镇风貌，以半木结构（Fachwerk）建筑为主，混杂着19世纪温泉疗养鼎盛时期的新古典主义与疗养建筑风格，城堡遗址则为罗曼式风格遗迹。`} />
                <InfoRow label="文化价值" value={`这里完美凝结了德意志历史的三重脉络：中世纪帝国的权力印记、文艺复兴后绵延几个世纪的“女巫”狂热民间记忆，以及19世纪以来深入民族心灵的森林浪漫主义与温泉疗养文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇及户外区域全年全天开放。城堡遗址及上山缆车（Burgberg-Seilbahn）运营时间通常为每年4月至10月，每日10:00-17:00，冬季（11月至次年3月）周末及节假日有限开放，具体需查询官网。镇内温泉浴场（Therme）通常开放至晚上10点。圣诞市场期间（11月底至12月23日）老城区有特定开放时段。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。城堡遗址参观免费。上山缆车往返票价成人约8欧元，儿童半价，家庭票有优惠。温泉浴场（Therme）日票约20欧元起，有2小时票、下午票等多种选择。部分博物馆（如小镇历史博物馆）门票约3-5欧元。`} />
              <InfoRow label="地址" value={`Kurpark 1, 38667 Bad Harzburg, Germany`} />
              <InfoRow label="交通方式" value={`从最近的汉诺威机场（HAJ）出发：乘坐机场快线S5至汉诺威主火车站，换乘前往戈斯拉尔（Goslar）或巴特哈尔茨堡的区域列车（RB）。全程约需2-2.5小时，列车班次每小时1-2班，建议购买下萨克森州票（Niedersachsen-Ticket）更为划算。
从柏林或法兰克福出发：可乘坐ICE高速列车至布伦瑞克（Braunschweig）或汉诺威，再换乘区域列车。自驾沿A7或A2高速公路前往，在“Bad Harzburg”出口下。
抵达小镇火车站（Bad Harzburg Bahnhof）后，几乎所有景点均可步行到达，也可在火车站旁乘坐前往城堡山脚的本地巴士（如830路）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起巴德哈尔茨堡的起点，我们必须把时钟拨回到那个王权与教权激烈斗争的11世纪。1071年，神圣罗马帝国皇帝亨利四世——就是那位后来为了对抗教皇格里高利七世，不得不在卡诺莎城堡赤脚雪地中忏悔的著名皇帝——下令在这里的城堡山上建造一座坚固的堡垒，并以自己的名字命名为“哈茨堡”。为什么选在这里？眼光非常毒辣。这个地方扼守着哈尔茨山脉北部的战略要道，山下是富饶的戈斯拉尔地区，那里有当时帝国至关重要的银矿资源。控制这里，就等于掐住了帝国的经济命脉之一，并能威慑北方的萨克森贵族。最初的城堡是典型的罗曼式风格，石墙厚重，塔楼高耸，它不仅是军事要塞，更是帝国权力在北方蛮荒山林地带的一个醒目符号。亨利四世可能无数次在这里的厅堂中徘徊，谋划着如何对付那些不听话的诸侯，以及远在罗马的教皇。城堡的石头里，最初烧铸的就是帝国政治的野心与焦灼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的光辉未能永久庇护这座城堡。它随着亨利四世家族的命运起伏而沉浮。在接下来的几个世纪里，城堡数易其主，在地方伯爵、主教和帝国封臣之间转手，经历了多次扩建、围攻和毁损。真正给它带来致命一击的，是那场席卷欧洲、让德意志大地破碎不堪的三十年战争（1618-1648）。1634年，代表天主教帝国的皇帝军队与瑞典新教军队在这一带拉锯。为了防止城堡被敌军利用，守军最终奉命自己将它部分摧毁。大火烧毁了木结构部分，剩下的石墙也在战乱和时光中慢慢坍塌。曾经象征至高皇权的城堡，最终沦为山巅一堆供人凭吊的废墟，默默地见证着宗教撕裂给这片土地带来的深重创伤。权力消散了，但故事却以另一种更民间、更诡异的方式延续了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡山下的聚落，在很长一段时间里只是一个安静的、依靠林业和少量矿业为生的普通村庄。转机出现在18世纪。一个当地的牧羊人偶然发现，山脚下有几处泉眼流出的水总是冒着热气，而且带有特殊的硫磺气味。村民开始用这热水治疗皮肤病和关节疼痛，效果神奇。消息逐渐传开，“能治病的神奇泉水”吸引了越来越多的人。到了19世纪，随着铁路修通和整个欧洲“温泉疗养”风潮的兴起，这个无名村庄的命运被彻底改变。1867年，它被正式授予“巴特”（Bad，即温泉疗养地）的称号，从此更名为巴特哈尔茨堡。投资蜂拥而至，豪华的疗养酒店、优雅的 Kurhaus（疗养馆）、种满异国树木的库尔公园（Kurpark）如雨后春笋般建立起来。俾斯麦、威廉皇帝时代的贵族和新兴资产阶级们，纷纷来此进行“水疗”，享受森林空气。小镇的建筑风格也从朴素的半木结构，融入了大量华丽的新古典主义、历史主义元素，形成了我们今天看到的这种混合风貌。它从一个军事前哨，完美转型为一个时尚的度假天堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史在这里又开了一个有趣的玩笑。就在小镇忙于打造其优雅疗养地形象的同时，另一股文化潜流在19世纪的德国知识界涌动——浪漫主义。诗人和作家们重新“发现”了德国中世纪的历史与民间传说。而哈尔茨山脉，尤其是其最高峰布罗肯峰，因歌德等文豪的描绘，成为德国浪漫主义的精神圣地。关于女巫、魔鬼和山中精灵的古老传说被重新挖掘和艺术化。巴德哈尔茨堡，因其地理位置，自然成为了这条“巫术文化之路”上的重要驿站。小镇并没有排斥这略带黑暗色彩的遗产，反而巧妙地将其纳入了自己的旅游叙事。你会发现，这里的旅游手册上，亨利四世、温泉和女巫传说和谐共存。这种文化的多层性，使得巴德哈尔茨堡避免了沦为单一的“温泉小镇”或“历史古镇”的刻板印象，拥有了更为丰厚和独特的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的巴德哈尔茨堡，依然平衡地扮演着它的多重角色。它仍然是德国北部重要的温泉康复中心，许多医保项目覆盖这里的疗养。它也是徒步爱好者和山地自行车手探索哈尔茨国家公园的完美大本营。每年四月底五月初的瓦普几斯之夜，小镇和周边森林会举办各种主题活动，人们扮成女巫和巫师，用欢乐的方式驱散历史上的黑暗记忆。而那山顶的废墟，经过部分加固和修缮，成了一个绝佳的观景台和露天历史课堂。它不再代表压迫性的皇权，而成为了一个关于时间、变迁和 resilience（韧性）的永恒象征。从帝国堡垒到疗养胜地，从巫术传说到户外天堂，巴德哈尔茨堡的历史，就是一部微缩的、充满转折的德意志中部发展史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的深度游览需要一整天时间，建议上午九点左右抵达，这时小镇刚刚苏醒，阳光柔和，适合悠闲探索古镇细节。上午的重点放在山下的库尔公园、温泉建筑群和老城街道，感受其作为疗养地的宁静与优雅。午后乘坐缆车上山，探访城堡废墟并享受全景，随后选择一条森林步道徒步下山，沉浸于哈尔茨山脉的自然气息。这样安排既能体验小镇的文化历史两面性，又能将轻松漫步与适量山林徒步结合，节奏张弛有度。如果时间充裕，强烈建议傍晚去温泉浴场泡一泡，洗去徒步的疲乏，这才是完整的“巴德哈尔茨堡式”体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`乘坐缆车前务必查看当日运营时间和天气，大风或雷雨天气缆车会停运，建议行前在官网确认。
森林徒步请务必穿着防滑舒适的鞋子，部分小径树根盘结、湿滑，夏季也建议带一件薄外套，林间气温较低。
小镇很多小商店和咖啡馆周一可能休息，周日营业时间也较短，规划购物和用餐时需注意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先在库尔公园的中央喷泉边静坐片刻，观察当地老人沿着精心修剪的小径慢走疗养，呼吸混合着松针与温泉水汽的特有空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进那座有着巨大玻璃穹顶的现代温泉浴场（Therme）大厅，即使不泡温泉，也感受一下内部光线与水声交织的宁静未来感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着“面包师巷”（Bäckerstraße）漫步，用手指触摸那些历经数百年颜色愈发深沉的木质框架，留意每家店铺窗台上争奇斗艳的花朵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心的“市集广场”找一家老牌咖啡馆，点一份当地特色的“哈尔茨奶酪蛋糕”，配上一杯过滤咖啡，像本地人一样享受一段“咖啡时光”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐红色的复古缆车晃晃悠悠地上山，在车厢里感受海拔逐渐升高，脚下森林树冠如绿色地毯般展开的奇妙过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡废墟最高的残存墙垣上，让强劲的山风吹拂脸庞，顺时针缓缓转一圈，将小镇、森林、远山的360度全景深深印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择标有“巫术小径”标记的森林步道徒步下山，留心寻找隐藏在树根旁或转弯处的精灵和女巫小木雕，让下山路变成一场童话寻宝游戏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分回到山脚，沿着“狮子沟”小溪旁的木栈道散步，听流水淙淙，看最后的天光为小镇的屋顶镀上一层温暖的金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡山对面“摩拉辛山”的山腰观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，使用长焦镜头可以拍摄到城堡废墟清晰的黑色剪影，映衬在金色或粉紫色的晚霞中，画面充满史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`库尔公园的拱廊桥`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光斜射过廊桥，在水面投下完美的倒影，将桥、树、蓝天对称构图，能拍出极致宁静疗愈风的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城“绳索厂”附近的弯曲街道`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光将半木结构房屋的阴影拉长，站在街道弯曲处拍摄纵深画面，能突出古镇建筑的韵律感和时光的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从城堡废墟内望向圣安德烈亚斯教堂`}</h4>
                  <p className="text-sm text-gray-700">{`利用废墟的石拱门或残破窗口作为前景框架，将山下小镇的教堂尖塔置于中心，形成历史废墟与现存生活的强烈对比构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`森林“巫术小径”上的特定木雕旁`}</h4>
                  <p className="text-sm text-gray-700">{`利用林间透过树叶的斑驳光束（最好在晴天的正午前后），拍摄女巫木雕，营造神秘、朦胧且富有故事性的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在温泉浴场内部拍摄需格外谨慎，除非明确允许，否则切勿拍摄其他客人，尊重隐私，建议只拍摄建筑中庭等公共区域。`}</li>
                <li>• {`拍摄当地人或在私人店铺前拍照，一个微笑和简单的手势询问会非常受欢迎，德国人普遍重视隐私和礼貌。`}</li>
                <li>• {`秋季（十月中下旬）是这里绝佳的摄影季节，森林层林尽染，色彩极为丰富，但游客也会增多，建议早起捕捉晨雾与秋色。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典疗养体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在库尔公园旁的百年历史疗养酒店，房间里可能还保留着老式阳台和挑高天花板，推开窗就是满眼绿意和温泉池的水汽氤氲。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林童话小屋`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在小镇边缘、紧挨着国家森林的独栋度假木屋，晚上可以听到猫头鹰的叫声，清晨在私人露台就能迎接穿过林间的第一缕阳光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`由一栋19世纪半木结构别墅改造的家庭旅馆，老板娘会为你准备丰盛的哈尔茨地区早餐，包括自制的果酱和新鲜蜂巢蜜，充满家的温暖。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感现代公寓`}</h4>
                  <p className="text-sm text-purple-800">{`对于自驾的年轻人，可以选择小镇外围新建的LOFT风格公寓，空间开阔，设施现代，且方便停车，是探索周边地区的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果计划在夏季或圣诞节期间来访，务必提前至少两到三个月预订，尤其是公园旁的经典酒店非常抢手。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇整体治安极好，但选择森林边缘的住宿时，夜晚归来请注意照明和道路，避免在完全黑暗的森林小径独行。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多住宿都提供包含温泉浴场门票或当地交通卡的“疗养套餐”，预订时不妨多询问，往往比单独购买更划算。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴德哈尔茨堡好些天了，但我的感官记忆里，还清晰地留存着几种截然不同的触感：城堡山顶粗糙、冰凉、带着铁锈气息的古老石块；森林步道上柔软、富有弹性、铺满松针的泥土；以及温泉池里那滑腻、温暖、包裹全身的矿物质水流。这些触感仿佛隐喻了这个地方的本质——它是坚硬历史与柔软自然、冷峻传说与温暖生活之间的一个平衡点。在这里，你不会被某一种单一的、宏大的叙事所淹没，而是有机会用自己的脚步和感知，去拼接出一幅属于你自己的、复杂而立体的心灵地图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷打卡的快节奏世界里，巴德哈尔茨堡提供了一种珍贵的“慢”与“深”的可能。它不急于用震撼性的奇观抓住你，而是邀请你停下来，在森林里漫无目的地走一段，在山顶废墟的风中发一会儿呆，在咖啡馆里观察一位老人如何花二十分钟喝完一杯咖啡。它让你相信，旅行的意义不仅仅是“看到”，更是“呼吸到”、“触摸到”和“联想到”。它连接起那些课本上枯燥的历史人名、文学中虚幻的传说角色与当下真实可感的阳光、风和草木香。所以，如果你厌倦了人潮汹涌的热门景点，渴望一场能同时滋养好奇心、想象力和身心的旅行，那么请一定把这座哈尔茨山下的宝藏小镇放入你的清单。它或许不会让你发出“哇”的惊叹，但很可能在很久以后，你还会想起那个站在废墟上，听着风声，感觉历史与自然在胸腔里共振的平静午后。那是一种更持久、更私人的回响。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
