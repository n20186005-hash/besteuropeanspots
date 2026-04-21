import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费勒 Veere｜探访被遗忘的黄金时代珍珠，泽兰省最诗意的露天博物馆 - 最佳欧洲景点',
  description: '车子开过长长的堤坝，一片辽阔的水域在左侧展开，那是弗莱沃湖（Veerse Meer）平静的碧蓝水面。然后，几乎是一转弯，它就毫无征兆地出现在眼前：一排高耸的、阶梯状的红砖山墙，像一幅被精心裱框的油画，安静地矗立在水的尽头。这就是费勒给你的第一眼——不是震撼，而是一种被瞬间抚平的宁静。空气里是独特的泽...',
}

export default function VeereHistoricPortPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '泽兰省', href: '/destinations/netherlands' },
            { label: '费勒', href: '/attractions/veere-historic-port' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费勒・Veere・荷兰・泽兰省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子开过长长的堤坝，一片辽阔的水域在左侧展开，那是弗莱沃湖（Veerse Meer）平静的碧蓝水面。然后，几乎是一转弯，它就毫无征兆地出现在眼前：一排高耸的、阶梯状的红砖山墙，像一幅被精心裱框的油画，安静地矗立在水的尽头。这就是费勒给你的第一眼——不是震撼，而是一种被瞬间抚平的宁静。空气里是独特的泽兰味道：咸咸的、清冽的，混杂着水草、湿木头和远处飘来的炸鱼薯条的油香。
你把车停下，沿着运河边的小路往里走。脚下的砖石被岁月磨得光滑温润。周六的早晨，小小的市政厅广场上正在举办迷你集市，当地人推着自行车，在卖奶酪、蜂蜜和新鲜面包的摊位前低声交谈。钟楼上传来的钟声厚重而缓慢，仿佛时间在这里也被湖水的节奏所浸泡，变得黏稠而悠长。那些16、17世纪的商人豪宅，如今大多仍是私宅，窗台上盛开着天竺葵，白色的蕾丝窗帘微微拂动。你很难想象，眼前这个安静到只听得见风声和鸟鸣的小镇，曾经是北大西洋贸易线上人声鼎沸、财富涌流的中心港口。
最动人的地方，是那个小小的港湾。它已经几乎不承担任何航运功能了，水面上只停泊着几十艘洁白的休闲帆船和古老的木制小船。湖水清澈得像一块巨大的绿松石，完美地倒映着岸上那些色彩柔和的建筑。你可以坐在岸边的长椅上，看天鹅一家慢悠悠地划过，看对岸“羊毛仓库”（De Schotse Huizen）那些巨大的拱门。就是通过这些拱门，一捆捆从苏格兰运来的优质羊毛被卸下，换走了葡萄酒、香料和纺织品。如今，拱门下空荡荡，只有光影在移动。繁荣与寂静，在这里形成了如此奇妙的对话。
在这里，你会不自觉地放慢脚步，调整呼吸。这不是一个需要你按图索骥、打卡盖章的景点。它更像是一位优雅的老者，邀请你在他身边坐下，听他讲述关于大海、贸易、风暴与宁静的故事。它的核心魅力，不在于某个单一的建筑，而在于整个空间弥漫的那种“完整的过去感”。没有过度开发的商业街，没有喧嚣的旅游团，只有生活本身，在历史厚重的底色上，继续平静地流淌。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子开过长长的堤坝，一片辽阔的水域在左侧展开，那是弗莱沃湖（Veerse Meer）平静的碧蓝水面。然后，几乎是一转弯，它就毫无征兆地出现在眼前：一排高耸的、阶梯状的红砖山墙，像一幅被精心裱框的油画，安静地矗立在水的尽头。这就是费勒给你的第一眼——不是震撼，而是一种被瞬间抚平的宁静。空气里是独特的泽兰味道：咸咸的、清冽的，混杂着水草、湿木头和远处飘来的炸鱼薯条的油香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你把车停下，沿着运河边的小路往里走。脚下的砖石被岁月磨得光滑温润。周六的早晨，小小的市政厅广场上正在举办迷你集市，当地人推着自行车，在卖奶酪、蜂蜜和新鲜面包的摊位前低声交谈。钟楼上传来的钟声厚重而缓慢，仿佛时间在这里也被湖水的节奏所浸泡，变得黏稠而悠长。那些16、17世纪的商人豪宅，如今大多仍是私宅，窗台上盛开着天竺葵，白色的蕾丝窗帘微微拂动。你很难想象，眼前这个安静到只听得见风声和鸟鸣的小镇，曾经是北大西洋贸易线上人声鼎沸、财富涌流的中心港口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的地方，是那个小小的港湾。它已经几乎不承担任何航运功能了，水面上只停泊着几十艘洁白的休闲帆船和古老的木制小船。湖水清澈得像一块巨大的绿松石，完美地倒映着岸上那些色彩柔和的建筑。你可以坐在岸边的长椅上，看天鹅一家慢悠悠地划过，看对岸“羊毛仓库”（De Schotse Huizen）那些巨大的拱门。就是通过这些拱门，一捆捆从苏格兰运来的优质羊毛被卸下，换走了葡萄酒、香料和纺织品。如今，拱门下空荡荡，只有光影在移动。繁荣与寂静，在这里形成了如此奇妙的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，你会不自觉地放慢脚步，调整呼吸。这不是一个需要你按图索骥、打卡盖章的景点。它更像是一位优雅的老者，邀请你在他身边坐下，听他讲述关于大海、贸易、风暴与宁静的故事。它的核心魅力，不在于某个单一的建筑，而在于整个空间弥漫的那种“完整的过去感”。没有过度开发的商业街，没有喧嚣的旅游团，只有生活本身，在历史厚重的底色上，继续平静地流淌。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费勒`} />
                <InfoRow label="英文名称" value={`Veere`} />
                <InfoRow label="正式名称" value={`Veere`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`泽兰省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是连接苏格兰与欧洲大陆最重要的羊毛贸易港口之一，在荷兰黄金时代积累了惊人的财富。`} />
                <InfoRow label="建筑特色" value={`完美保存了以红砖与阶梯山墙为主导的联排商人屋，环绕着一个宁静如镜的古老港湾。`} />
                <InfoRow label="建筑风格" value={`以荷兰文艺复兴风格为主，混搭了晚期哥特式与古典主义元素。`} />
                <InfoRow label="文化价值" value={`一座凝固在16世纪的“时光胶囊”，生动展现了泽兰省依靠海洋贸易崛起的市民文化与社会生活。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天24小时开放。核心历史建筑“市政厅（Stadhuis）”及博物馆开放时间为：每年4月至10月，周二至周日 11:00 - 17:00；11月至次年3月仅周末开放 12:00 - 16:00。圣诞节及新年当日闭馆。请注意，泽兰省许多小博物馆冬季开放时间会大幅缩短，出行前务必在其官网二次确认。`} />
              <InfoRow label="门票价格" value={`漫步古镇本身完全免费。进入市政厅博物馆参观需购票，成人票8.5欧元，65岁以上老人及13-17岁青少年7欧元，4-12岁儿童4.5欧元，4岁以下免费。持有荷兰博物馆卡（Museumkaart）可免费进入。港口偶尔有小型帆船体验项目，费用约为15-25欧元/人，现场询价。`} />
              <InfoRow label="地址" value={`Stadhuis Veere, Markt 1, 4351 AA Veere, Netherlands`} />
              <InfoRow label="交通方式" value={`费勒没有火车站。最便捷的方式是先抵达泽兰省首府米德尔堡（Middelburg）。从阿姆斯特丹中央车站乘坐Intercity列车直达米德尔堡，约2小时15分钟，班次频繁。从米德尔堡火车站前的公交枢纽，乘坐50路或52路巴士前往Veere，车程约15-20分钟，班次每小时2-3班，可使用OV-chipkaart（荷兰公交卡）或上车购票。若自驾，可将车停在古镇外围的免费停车场（如Veere Haven停车场），然后步行5分钟进入古镇核心区，切勿尝试开车进入狭窄的古老街巷。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一片被海水反复侵袭的土地说起。费勒的诞生，与荷兰人“与海争地”的命运紧密相连。大约在13世纪，人们在这里的一个沙丘上建立了一个小渔村，它最初的名字“Campvere”就与这片地形有关。它的命运转折点发生在15世纪。1411年，当地的领主范博尔塞莱家族授予它城市权利，这就像为一座即将起飞的火箭点燃了引擎。但真正的黄金燃料，来自一段跨海的联姻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1541年，费勒的领主沃尔夫特·范博尔塞莱，迎娶了苏格兰贵族玛丽·斯图亚特。这可不是普通的婚姻，它附带了一份重量级的“嫁妆”：一项专营权。根据协议，所有从苏格兰进口到欧洲大陆的羊毛，必须首先通过费勒港！你可以想象一下，在那个纺织品就是硬通货的时代，这相当于拿到了整个行业的“垄断牌照”。几乎一夜之间，这个泽兰省的小港口，成了连接北方苏格兰与南方欧洲大陆最关键、最繁荣的贸易枢纽。“苏格兰仓库”沿港而建，苏格兰商人社区在此扎根，他们甚至拥有自己的礼拜堂和自治权。港口里挤满了高大的柯克船，空气里弥漫着羊毛的膻味、海水的咸腥，还有金币碰撞的清脆响声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个16到17世纪，是费勒难以置信的镀金年代。富有的商人们竞相建造最华丽的住宅，以显示自己的财富与品味。我们现在看到的那些装饰着精美山墙、用红砖和沙石交替砌筑的联排大宅，大多建于这个时期。市政厅那座带有钟楼和金色骑士雕像的华丽建筑，也建于1474年，并在后来被不断美化，正是城市财富和自豪感的象征。那时的费勒，是泽兰省最富裕的城市之一，它的影响力甚至辐射到整个低地地区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，潮起总有潮落。随着荷兰黄金时代渐近尾声，贸易路线改变，更大的港口如鹿特丹、安特卫普崛起，费勒的羊毛贸易垄断权也逐渐失效。更致命的打击来自大自然。19世纪后，通往西斯海尔德河的航道开始严重淤塞，大型船只再也无法驶入。这个曾经的门户，变成了一潭死水。繁荣就像退潮一样，迅速而彻底地离开了。许多商人离去，人口锐减，费勒仿佛被时间遗忘，沉沉睡去。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但它并没有死去。20世纪50年代，因洪水防治工程而形成的弗莱沃湖，意外地为费勒带来了新的生机——它成了水上休闲运动的天堂。而那些因为经济停滞而无力改建的老建筑，也因此奇迹般地以原貌保存了下来。曾经的衰落，反而成了它今日珍贵的保护壳。费勒没有试图把自己装扮成喧嚣的主题公园，它坦然接受了自己作为“一座美丽的沉睡古镇”的新身份。今天，当你走过那些安静的街道，你指尖触到的每一块红砖，脚下踩过的每一块石板，都不是仿古重建的布景，而是真正经历了数百年海风洗礼、目睹过无数帆船进出的沉默见证者。它的历史，不是教科书上枯燥的章节，而是弥漫在空气里、倒映在湖水中的、可以呼吸到的完整叙事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你在一个晴朗的下午抵达费勒，预留出整整4到5个小时，来享受从日落到黄昏的完整光景。下午时分，旅行团大多已经离去，小镇恢复宁静，光线也变得更加柔和金黄。游览节奏一定要“慢”。这是一次漫步，而非行军。路线将从市政厅广场这个心脏地带开始，然后沿着内港（Oude Haven）北岸漫步，感受建筑的宏伟立面，再穿过小巷探索南岸更为生活化的区域，最后抵达外港（Voorhaven）和防波堤，等待日落。这样由内而外、由人文到自然的路线，能让你层层递进地体会费勒从历史中心到水岸边缘的不同韵味。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周六下午，虽然集市有趣，但本地人潮会让小镇格外拥挤，失去静谧感。穿一双绝对舒适的平底鞋，古镇的石板路和防波堤的碎石路对高跟鞋极不友好。留意博物馆的闭馆时间，它们通常关门很早，尤其是冬季。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先在市政厅广场的露天咖啡馆找把椅子坐下，点一杯咖啡，静静观察钟楼指针的移动和广场上零星的行人，让自己先融入这里的慢时钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开市政厅厚重的木门，爬上那座狭窄的旋转石梯，在钟楼顶层的窗户边，俯瞰红砖屋顶的海洋、镜面般的港口以及远处无垠的弗莱沃湖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到广场北侧，仰头细看那两栋连在一起的“苏格兰屋”（De Schotse Huizen），想象巨型羊毛包从那些高大的拱门中被搬运出来的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着内港北岸向东慢行，用手指轻轻划过一栋栋商人豪宅墙上不同的山墙装饰和沙石窗框，每一栋都有自己独特的表情和故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一座小桥来到内港南岸，这里的建筑更朴素，混着一些可爱的现代住宅，在“t Aever”这样的本地小餐馆门口看看今日的菜单。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一艘停在港口的古老木质帆船“De Schotse Zus”作为前景，拍摄对岸建筑群在水中的完美倒影，等待一艘游艇划过打破平静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，漫步到小镇西侧，探访那座已成废墟的“大教堂”（Grote Kerk），在残垣断壁和荒草间感受时间最纯粹的力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一定要走到外港的防波堤尽头，坐在石头上，看夕阳将天空、湖水和整个小镇染成一片温暖的金红。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅广场的运河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，站在广场通向内港的小桥边，利用无风时平静如镜的水面，拍摄市政厅钟楼及其水中对称倒影的全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`苏格兰屋拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光能照入拱门深处时，站在其中一个拱门下，用门洞作为天然画框，拍摄对岸的房屋、船只和蓝天，形成强烈的纵深感和明暗对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`旧教堂废墟的沧桑感`}</h4>
                  <p className="text-sm text-gray-700">{`在下午侧光时分，走进“大教堂”的废墟内部，拍摄残存的拱窗、爬满藤蔓的墙壁与远处完整民居的对比，诉说时光流逝的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内港北岸的长焦压缩`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头，从港口东南角向西拍摄，将层层叠叠、山墙各异的商人屋压缩在同一画面中，突出其连绵如城墙般的宏伟气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`防波堤日落剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，以防波堤末端的灯塔或系船柱作为前景，拍摄人们面向金色湖水的剪影，背景是小镇轮廓，画面充满故事感和暖色调。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄私人住宅的美丽窗户或花园时，尽量避免将屋主或清晰室内景象纳入镜头。使用偏振镜（CPL）可以有效消除水面的反光，让倒影更加清澈深邃。潮汐虽不影响湖水水位，但风会影响水面平静度，无风或微风天气是拍摄完美倒影的最佳时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`精品酒店之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于内港边一栋16世纪翻新的商人宅邸，房间拥有古老的木梁和现代的设计，推开窗就是港口全景，夜晚能听见轻柔的水波拍岸声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色民宿体验`}</h4>
                  <p className="text-sm text-green-800">{`选择一位老水手经营的“船屋民宿”，住在经过现代化改造的舒适驳船里，随着湖水微微摇晃入睡，清晨在甲板上享受私人咖啡时光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇外弗莱沃湖畔的浪漫庄园酒店，被花园和水域环绕，房间宽敞典雅，提供自行车供你随时骑行进入古镇，享受闹中取静的奢侈。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算友好公寓`}</h4>
                  <p className="text-sm text-purple-800">{`租住古镇边缘一栋带小花园的舒适公寓，设施齐全，可以自己从集市采购食材烹饪，像当地人一样生活几天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`费勒的住宿数量非常有限，尤其在夏季和周末，务必提前数月预订。古镇内多为古老建筑改建，楼梯通常陡峭狭窄，携带大件行李会不太方便，预订时可询问是否有电梯或行李协助服务。住在镇外湖边固然宁静，但晚间古镇餐馆打烊后，周边几乎没有夜间活动，享受的正是这份纯粹的静谧。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开费勒的时候，我的背包里没有多出任何一件纪念品，但心里却好像被装得满满的。那种感觉，不是参观了伟大古迹后的激昂澎湃，而更像是进行了一场深沉而舒缓的心灵按摩。在这个一切都追求速度、规模和刺激的时代，费勒的存在，像一句温柔的反问。它问我们：当喧嚣散尽，财富的潮水退去，什么才是生活的本质？它的答案，就写在那平静的湖面上，写在那些依然有人居住、窗台开着鲜花的老房子里，写在午后无所事事、只是坐着看天鹅的老人的微笑里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以值得每一个深度旅行者前来，正是因为它提供了一种在现代社会几乎已经绝迹的“缓慢的奢侈”。这里没有需要你匆忙赶赴的下一个景点，没有必须消费的网红店铺。它慷慨给予你的，只是一段完整的时间，和一个完全沉浸式的历史空间。它让你有机会，暂时从“追赶”的状态中脱身，真正地“停留”，去感受光影在古老砖石上的移动，去聆听风声穿越不同世纪建筑缝隙的音调变化。你会发现，当心静下来，眼睛和耳朵才会真正打开，历史的低语才会变得清晰。费勒不是一座博物馆，它是一次关于时间、繁荣与宁静的沉思。来这里，不仅仅是为了看一个漂亮的小镇，更是为了找回一种属于自己的、从容的节奏。这，或许才是旅行能带给我们的，最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/valkenburg-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法尔肯堡废墟城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valkenburg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hanseatic-old-town-deventer" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    代
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">代芬特尔汉萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Deventer Hanseatic Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/haarlem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈勒姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haarlem Old Town</p>
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
