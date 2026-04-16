import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴埃萨古城 Baeza｜被遗忘的文艺复兴教科书与黄金石之城 - 最佳欧洲景点',
  description: '车子驶下高速公路，拐进一片起伏的橄榄树海洋，远方山丘上忽然出现了一抹凝固的金色。那就是巴埃萨。第一眼，它不像格拉纳达那样戏剧，也不像塞维利亚那样喧闹，它安静得近乎庄严。停好车，走上坡，当你第一脚踩上圣玛丽亚广场（Plaza de Santa María）那被岁月打磨得光滑如镜的石板时，那种触感会瞬间...',
}

export default function BaezaHistoricalEnsemblePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴埃萨古城', href: '/attractions/baeza-historical-ensemble' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴埃萨古城・Baeza・西班牙・巴埃萨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶下高速公路，拐进一片起伏的橄榄树海洋，远方山丘上忽然出现了一抹凝固的金色。那就是巴埃萨。第一眼，它不像格拉纳达那样戏剧，也不像塞维利亚那样喧闹，它安静得近乎庄严。停好车，走上坡，当你第一脚踩上圣玛丽亚广场（Plaza de Santa María）那被岁月打磨得光滑如镜的石板时，那种触感会瞬间贯穿全身——冰凉、坚实，带着几个世纪以来阳光曝晒后残留的温暖。空气中弥漫着橄榄树、干燥的石尘，还有从街角面包房飘来的、混合了糖和杏仁的淡淡甜香。
这座城是“听”得见的。早晨九点，教堂的钟声准时敲响，清澈、悠远，在层层叠叠的石壁间回荡，那是几个世纪不变的作息号角。不一会儿，你会听见马蹄声，是的，马车载着游客慢悠悠地走过窄巷，蹄铁敲击石头的“嘚嘚”声，仿佛直接从中世纪传来。但更迷人的是那些“无声之声”：在旧大学的回廊下，阳光穿过拱廊，在地上画出规律的光影格子，仿佛能听见16世纪修士学生们踱步沉思的脚步声；在闲人漫步道（Paseo de las Murallas）上，风吹过古老的城墙缺口，你能“听”到下方无垠橄榄园绵延至天际的绿色寂静。
当地人生活在这里，就像生活在自家巨大的祖宅里。广场边的咖啡桌旁，老人们一坐就是一下午，慢悠悠地喝着咖啡，看着寥寥几个游客像溪水流过岩石一样从身边经过。肉铺老板在雕刻着华丽纹章的文艺复兴立面下挂出火腿，文具店开在曾经贵族府邸的底层。这里没有为了旅游而生的表演感，整座城就是一种持续了五百年的、庄重而宁静的生活本身。它最打动人的，正是这种“活着的纪念碑”状态——艺术与日常，宏伟与琐碎，历史与当下，在这里没有界限，它们共同被包裹在那片独一无二的、蜂蜜般的金色光线里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶下高速公路，拐进一片起伏的橄榄树海洋，远方山丘上忽然出现了一抹凝固的金色。那就是巴埃萨。第一眼，它不像格拉纳达那样戏剧，也不像塞维利亚那样喧闹，它安静得近乎庄严。停好车，走上坡，当你第一脚踩上圣玛丽亚广场（Plaza de Santa María）那被岁月打磨得光滑如镜的石板时，那种触感会瞬间贯穿全身——冰凉、坚实，带着几个世纪以来阳光曝晒后残留的温暖。空气中弥漫着橄榄树、干燥的石尘，还有从街角面包房飘来的、混合了糖和杏仁的淡淡甜香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城是“听”得见的。早晨九点，教堂的钟声准时敲响，清澈、悠远，在层层叠叠的石壁间回荡，那是几个世纪不变的作息号角。不一会儿，你会听见马蹄声，是的，马车载着游客慢悠悠地走过窄巷，蹄铁敲击石头的“嘚嘚”声，仿佛直接从中世纪传来。但更迷人的是那些“无声之声”：在旧大学的回廊下，阳光穿过拱廊，在地上画出规律的光影格子，仿佛能听见16世纪修士学生们踱步沉思的脚步声；在闲人漫步道（Paseo de las Murallas）上，风吹过古老的城墙缺口，你能“听”到下方无垠橄榄园绵延至天际的绿色寂静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人生活在这里，就像生活在自家巨大的祖宅里。广场边的咖啡桌旁，老人们一坐就是一下午，慢悠悠地喝着咖啡，看着寥寥几个游客像溪水流过岩石一样从身边经过。肉铺老板在雕刻着华丽纹章的文艺复兴立面下挂出火腿，文具店开在曾经贵族府邸的底层。这里没有为了旅游而生的表演感，整座城就是一种持续了五百年的、庄重而宁静的生活本身。它最打动人的，正是这种“活着的纪念碑”状态——艺术与日常，宏伟与琐碎，历史与当下，在这里没有界限，它们共同被包裹在那片独一无二的、蜂蜜般的金色光线里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴埃萨古城`} />
                <InfoRow label="英文名称" value={`Baeza`} />
                <InfoRow label="正式名称" value={`Historical Ensemble of Baeza`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`巴埃萨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西班牙文艺复兴建筑最纯粹、最完整的露天博物馆，与乌韦达共同构成了安达卢西亚地区基督教复兴的“双子城”典范。`} />
                <InfoRow label="建筑特色" value={`整座城市由一种温暖的赭金色砂岩（“黄金石”）建成，建筑线条庄严、对称、克制，充满了人文主义的理性光辉。`} />
                <InfoRow label="建筑风格" value={`以西班牙文艺复兴风格为主导，完美融合了之前的摩尔式遗风与之后的巴洛克点缀。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑艺术的瑰宝，更是西班牙帝国鼎盛时期将其政治、宗教、教育理念投射到美洲殖民地的“原型城市”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天24小时开放，可以自由漫步于街道广场。但古城内各主要历史建筑（如圣玛丽亚教堂、旧大学、市政厅等）有各自的开放时间，通常为周一至周六上午10:00至下午14:00，下午16:00至19:00；周日及节假日开放时间缩短或仅上午开放。冬季（11月至次年3月）部分场馆下午闭馆时间会提前至18:00。重大节庆日如圣周期间，开放时间变动极大，建议行前务必在安达卢西亚官方旅游网站复查。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。进入各单体历史建筑门票价格不一，一般在2-5欧元之间。最经济的方式是购买“巴埃萨联合通票”，约10欧元，可涵盖圣玛丽亚教堂、旧大学、哈巴涅拉宫等主要景点。65岁以上长者、学生凭有效证件享半价优惠。12岁以下儿童在成人陪同下通常免费。每周一（部分节假日除外）下午，许多市政管理的博物馆对欧盟公民免费开放。`} />
              <InfoRow label="地址" value={`Plaza del Pópulo, s/n, 23440 Baeza, Jaén, Spain`} />
              <InfoRow label="交通方式" value={`巴埃萨没有机场或大型火车站，最便捷的方式是先抵达交通枢纽城市再转乘。从马德里出发：乘坐AVE高速火车至哈恩市（Jaén），车程约2小时，每日有4-5班车次。从哈恩火车站出口的巴士站，换乘前往巴埃萨或乌韦达的ALSA城际巴士，车程约45分钟，班次频密（约每1-1.5小时一班）。从塞维利亚或格拉纳达出发：可乘坐长途巴士直达，但班次较少，车程约2.5-3小时。最推荐的自由行方式是自驾，从哈恩或格拉纳达沿A-316高速公路行驶，约1小时即可抵达，古城外有多个收费停车场（如Párking Paseo Arca del Agua）。购买西班牙铁路（Renfe）和巴士（ALSA）联票通常有折扣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解巴埃萨的金色，得先把手伸进历史的土壤里，摸到那些血腥与荣耀交织的根脉。在成为基督教世界的文艺复兴明珠之前，它有一个阿拉伯语的名字：巴伊萨。作为安达卢斯时代重要的战略要塞，它矗立在橄榄树海与群山之间，被坚固的摩尔城墙包裹。1233年，卡斯蒂利亚国王费尔南多三世发起了一场艰苦的围城战，最终从摩尔人手中夺取了它。这场“复地运动”的胜利，在城中心的圣玛丽亚教堂墙壁上留下了一个永恒的印记——一块铭文，骄傲地宣告着基督教王权的归来。但征服只是故事的开始，如何统治并同化这片土地，才是更大的命题。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在16世纪，当西班牙从美洲攫取的巨大财富如潮水般涌回国内。巴埃萨，这个位于内陆农业区的小城，因为其显赫的教会地位和忠于王室的历史，意外地被选为了一个“样板工程”。那些在美洲发了财的贵族和高级教士，渴望在家乡留下与自己新身份匹配的印记。于是，黄金白银没有流向奢靡的享乐，而是流向了石头。他们请来了当时最顶尖的建筑师和石匠，其中最关键的人物是安德烈斯·德·万德尔维拉。他不是要建一两座宫殿，而是要重塑整座城市的核心肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，你看到了西班牙文艺复兴最理性、最教科书式的一面在这里展开。圣玛丽亚教堂被赋予了庄严的新立面，古典的柱式、三角楣、圆形浮雕取代了繁复的哥特线条。旧大学拔地而起，它的双层回廊简洁而有力，象征着人文知识的新秩序。市政厅、司法宫、贵族宅邸……几乎所有的公共建筑都在同一时期，用同一种当地开采的砂岩，遵循着同一种古典美学原则重建。这不像是一场自发的建设热潮，更像是一次精心策划的“城市形象升级”，旨在向世界（尤其是新大陆）展示一个经过文明洗礼、秩序井然的西班牙天主教王国理想形象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`有趣的是，摩尔人的灵魂并未完全散去。当你走进圣十字教堂（Iglesia de la Santa Cruz），这座在清真寺原址上建造的罗马式小教堂，依然能清晰地感受到伊斯兰建筑的空间格局。在许多文艺复兴宫殿的庭院里，你会看到马蹄形拱门这种明显的摩尔遗风被巧妙地融合进来。这种文化的层叠，就像砂岩本身，是在压力与时间中形成的纹理。巴埃萨的黄金时代随着西班牙帝国的衰落而黯淡，它逐渐被遗忘在橄榄园深处，却也因祸得福，躲过了后来大规模的城市化改造，将16世纪的容颜近乎完好地封存至今。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览巴埃萨的精髓在于“慢”和“顺序”。强烈建议在古城内住一晚，用一个完整的下午、一个清晨和一个次日午前来感受它光线的变化与生活的节奏。整体游览时间建议预留至少6-8小时（不含住宿）。第一天下午抵达后，从最具仪式感的圣玛丽亚广场开始，迎着西斜的温暖金光参观核心宗教与政治建筑；傍晚时分，留给城墙漫步，看夕阳将整座城和橄榄园染成赤金。第二天清晨，趁旅行团大军尚未从乌韦达杀到，独自享受空无一人的广场和街巷，去当地人聚集的咖啡馆吃早餐，感受古城苏醒的瞬间。这样的安排能让你同时捕捉到它作为“纪念碑”的壮丽和作为“家园”的温情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`中午12点到下午4点尽量避免在毫无遮阴的广场暴晒，这是西班牙的午休时间，许多室内景点也会关闭，正好适合你找家阴凉的庭院餐厅慢享长午餐。小心那些提供“免费导游”然后带你去特定橄榄油商店的人，他们赚取高额回扣。参观教堂和市政建筑时，穿着需稍显尊重，避免过于暴露的背心或短裤。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后第一站直奔圣玛丽亚广场，让自己沉浸在那片被黄金石建筑四面环抱、宛如露天圣殿的恢弘空间感里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣玛丽亚教堂厚重的木门，让眼睛适应内部的昏暗，然后寻找祭坛上方那幅巨大而动人的《最后的晚餐》彩绘木雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场拱门走进圣母广场（Plaza del Pópulo），凝视那座精美的狮子泉，并触摸旁边司法宫外墙上那两道传说中的“刽子手之痕”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Calle San Francisco缓步上行，留意两侧贵族府邸门上雕刻的复杂族徽，想象当年美洲财富如何在这里转化为石头上的荣耀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进旧大学（Antigua Universidad）宁静的回廊，坐在石凳上，看阳光在规整的拱券间移动，聆听穿越了几个世纪的读书声回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从闲人漫步道的古城墙缺口凭栏远眺，让目光掠过红色的屋顶，一直延伸到天地交界处那无边无际的、银绿色的橄榄树海洋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前拐进 Calle Conde Romanones 街角那家老酒馆，点一杯本地产的普利埃戈橄榄油和一盘“嫩煎牛肝菌”，尝尝土地最原始的味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`次日清晨趁著清冽的空气，独自站在空旷的圣玛丽亚教堂台阶上，等待第一缕阳光精准地照亮对面市政厅钟楼顶端的风向标。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛丽亚广场东侧拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光变成醇厚的金色，从拱门斜射入广场，此时以拱门为画框，拍摄广场上的人物剪影和金光中的教堂立面，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`哈巴涅拉宫（Palacio de Jabalquinto）的哥特-穆德哈尔风格庭院`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入院，能完美捕捉到那些复杂石雕投下的、如同蕾丝般精美的阴影，构图时将中心的古井纳入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`闲人漫步道最西端的瞭望点`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，侧光能勾勒出古城层层叠叠的屋顶轮廓和远处橄榄园的惊人纹理，使用长焦镜头压缩空间感尤为震撼。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`旧大学回廊的二层走廊`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光较低时，站在一层天井中央向上仰拍，能拍到双重拱廊与天空构成的几何奇幻景象，记得等待一个白衣行人走过增加灵动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`卡门门（Puerta del Carnen）外的斜坡上`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从城外回望古城，暖黄色的城市灯光刚刚亮起，与深蓝色的天空形成绝佳对比，这是拍摄古城全景明信片的最佳位置。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`巴埃萨的建筑材质对光线极度敏感，黄金石在晨昏时分呈现出的暖金色是无与伦比的，尽量将重要建筑摄影安排在这两个时段。使用偏振镜可以有效消除石头表面的反光，让建筑纹理更清晰。请注意，使用三脚架在教堂内部通常需要提前申请许可，在公共广场上则无限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致穿越之选`}</h4>
                  <p className="text-sm text-blue-800">{`由16世纪大主教宫殿改造的精品酒店，房间直接拥有文艺复兴时期的穹顶壁画和原始石窗，躺在四柱床上仿佛与历史同眠，清晨在私人庭院里被喷泉声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色居家体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在一栋18世纪贵族老宅里的家庭公寓，房东老太太会给你手绘古城地图，厨房里备好了顶级的本地橄榄油，让你像当地人一样在古董餐桌旁享用自制早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高性价比宝藏`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城边缘一栋安静石屋里的现代风格民宿，设计简约明亮，屋顶有一个小小的露台，能以毫无遮挡的视角私享星空下的古城天际线与橄榄园。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端庄园度假`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟可达的乡间橄榄园庄园酒店，住在由古老农舍改建的奢华套房里，在无边泳池边直面万亩橄榄树海的日出，体验极致的安达卢西亚田园诗意。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的老宅住宿多有厚重的石墙，冬暖夏凉但Wi-Fi信号可能不稳定，追求历史感就别苛求网速。巴埃萨治安极好，入夜后街道安静祥和，独自夜归也完全安心。旺季（春季和初秋）以及圣周期间，城内特色住宿非常抢手，务必提前至少两三个月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴埃萨好多天后，我闭上眼睛，脑海里浮现的不是某个具体的教堂立面或雕塑，而是一种整体的、温润的金色调，和一种几乎可触摸的宁静。我突然明白，这座城市最珍贵的馈赠不是知识，而是一种“状态”。在一个崇尚快速、变化和尖叫式表达的世界里，巴埃萨固执地保持着一种文艺复兴式的“尊严节奏”。它的美不具攻击性，不寻求你的即刻欢呼，它只是在那里，日复一日地被同样的阳光雕刻，像一位沉默而睿智的老者，邀请你坐下，一起享受一段缓慢流逝的时光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人都该来这里。不仅仅是为了看西班牙文艺复兴的教科书，更是为了体验一种几乎失传的生活可能性。在这里，你能感受到历史不是陈列品，而是呼吸着的空气；能理解“辉煌”不一定意味着庞大与喧嚣，更可以是一种克制的比例、精准的光线和对材料本身的深情。巴埃萨是一座会让你内心闹钟停摆的城市，它教会你，真正的永恒，就藏在这种沉静而坚定的日常光芒之中。当你带着这片金色离开，它将成为你记忆里一块温暖的压舱石，在往后纷扰的岁月里，提醒你何为沉着，何为时间的重量。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
