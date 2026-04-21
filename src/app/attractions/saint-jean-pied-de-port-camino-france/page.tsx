import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣让皮耶德波尔 Saint-Jean-Pied-de-Port｜朝圣之路翻越比利牛斯山前的绝美红色石屋起点 - 最佳欧洲景点',
  description: '车子在最后一个弯道转出，一片浓郁的、带着青草和远方雪山气息的空气涌进车窗。然后，它就那样毫无征兆地铺展在眼前——不是宏伟，而是温润。一条尼夫河像银色的绶带，将一整片暖调的红瓦屋顶轻轻揽住。那些房子不是常见的欧洲灰石色调，而是透着阳光感的暖红、赭石和陶土色，密密麻麻地从河边一直堆叠到葱郁的山坡下，仿佛...',
}

export default function SaintJeanPiedDePortCaminoFrancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '圣让皮耶德波尔', href: '/destinations/france' },
            { label: '圣让皮耶德波尔', href: '/attractions/saint-jean-pied-de-port-camino-france' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣让皮耶德波尔・Saint-Jean-Pied-de-Port・法国・圣让皮耶德波尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在最后一个弯道转出，一片浓郁的、带着青草和远方雪山气息的空气涌进车窗。然后，它就那样毫无征兆地铺展在眼前——不是宏伟，而是温润。一条尼夫河像银色的绶带，将一整片暖调的红瓦屋顶轻轻揽住。那些房子不是常见的欧洲灰石色调，而是透着阳光感的暖红、赭石和陶土色，密密麻麻地从河边一直堆叠到葱郁的山坡下，仿佛大地自己生长出的温暖巢穴。这就是圣让皮耶德波尔给你的第一眼，不是震撼，而是一种“到家了”的奇异安宁。即便你只是一个过客。
走在进入古镇必经的圣雅各桥上，水声潺潺，混合着一种由无数脚步打磨出的氛围。你很快会分辨出两种人：拖着行李箱好奇张望的普通游客，和背着巨大行囊、神色既疲惫又肃穆的朝圣者。后者通常握着一根登山杖，鞋子上沾着新鲜的泥点。桥那头，是著名的“法国之门”（Porte de France），一个厚重的石砌拱门。穿过它的那一刻，声音突然变得具体而微：背包扣环的轻响，不同语言的低声交谈，石板路上登山杖规律的“嗒、嗒”声，还有沿街面包店飘出的、混合着黄油和焦糖香味的温暖气息。这里不像一个冰冷的景点，而像一个巨大而忙碌的“出发大厅”，充满了告别的拥抱、最后的检查和对未知山路的隐秘期待。
小镇的核心，是那条传奇的“圣地亚哥之路”的起点。它从城门开始，变成一条名叫“Rue de la Citadelle”的陡峭斜坡。路面是光滑的圆石，被千百年的人流、牲畜和雨水打磨得温润发亮。你向上走，两旁是售卖羊毛袜、贝壳挂饰（朝圣者的标志）和皮革水壶的小店。店主不会热情招揽，只是安静地坐着，仿佛他们出售的不是商品，而是旅途本身所需的祝福与装备。阳光透过狭窄街道的上空，在古老的红色墙面上切割出明暗交错的光影。每一步，你都能感觉到历史与当下在此刻重叠——你脚下的石头，曾经承接过中世纪修士、落魄贵族、寻求救赎的平民，以及如今来自世界各地的、怀揣各自心事的现代徒步者的重量。
傍晚时分，当大部分一日游的巴士离开，小镇会显露出它更本真的一面。朝圣者们聚集在河边，将走了一整天的脚浸入冰凉的河水中。本地老人坐在广场的长椅上，看着这一幕，目光平静，像是看了几个世纪。炊烟从红色屋顶的烟囱里袅袅升起，混合着晚餐的香气。这时你会明白，圣让皮耶德波尔的魅力，不仅在于它绝美的外表，更在于它所承载的“过渡”意义。它是一个温暖的句点，为庸常生活画下暂时的休止；它也是一个冷静的冒号，预示着一段关于身体与精神的严峻考验即将开始。这种强烈的反差与期待，弥漫在每一寸空气里，构成了它无可替代的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在最后一个弯道转出，一片浓郁的、带着青草和远方雪山气息的空气涌进车窗。然后，它就那样毫无征兆地铺展在眼前——不是宏伟，而是温润。一条尼夫河像银色的绶带，将一整片暖调的红瓦屋顶轻轻揽住。那些房子不是常见的欧洲灰石色调，而是透着阳光感的暖红、赭石和陶土色，密密麻麻地从河边一直堆叠到葱郁的山坡下，仿佛大地自己生长出的温暖巢穴。这就是圣让皮耶德波尔给你的第一眼，不是震撼，而是一种“到家了”的奇异安宁。即便你只是一个过客。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在进入古镇必经的圣雅各桥上，水声潺潺，混合着一种由无数脚步打磨出的氛围。你很快会分辨出两种人：拖着行李箱好奇张望的普通游客，和背着巨大行囊、神色既疲惫又肃穆的朝圣者。后者通常握着一根登山杖，鞋子上沾着新鲜的泥点。桥那头，是著名的“法国之门”（Porte de France），一个厚重的石砌拱门。穿过它的那一刻，声音突然变得具体而微：背包扣环的轻响，不同语言的低声交谈，石板路上登山杖规律的“嗒、嗒”声，还有沿街面包店飘出的、混合着黄油和焦糖香味的温暖气息。这里不像一个冰冷的景点，而像一个巨大而忙碌的“出发大厅”，充满了告别的拥抱、最后的检查和对未知山路的隐秘期待。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的核心，是那条传奇的“圣地亚哥之路”的起点。它从城门开始，变成一条名叫“Rue de la Citadelle”的陡峭斜坡。路面是光滑的圆石，被千百年的人流、牲畜和雨水打磨得温润发亮。你向上走，两旁是售卖羊毛袜、贝壳挂饰（朝圣者的标志）和皮革水壶的小店。店主不会热情招揽，只是安静地坐着，仿佛他们出售的不是商品，而是旅途本身所需的祝福与装备。阳光透过狭窄街道的上空，在古老的红色墙面上切割出明暗交错的光影。每一步，你都能感觉到历史与当下在此刻重叠——你脚下的石头，曾经承接过中世纪修士、落魄贵族、寻求救赎的平民，以及如今来自世界各地的、怀揣各自心事的现代徒步者的重量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`傍晚时分，当大部分一日游的巴士离开，小镇会显露出它更本真的一面。朝圣者们聚集在河边，将走了一整天的脚浸入冰凉的河水中。本地老人坐在广场的长椅上，看着这一幕，目光平静，像是看了几个世纪。炊烟从红色屋顶的烟囱里袅袅升起，混合着晚餐的香气。这时你会明白，圣让皮耶德波尔的魅力，不仅在于它绝美的外表，更在于它所承载的“过渡”意义。它是一个温暖的句点，为庸常生活画下暂时的休止；它也是一个冷静的冒号，预示着一段关于身体与精神的严峻考验即将开始。这种强烈的反差与期待，弥漫在每一寸空气里，构成了它无可替代的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣让皮耶德波尔`} />
                <InfoRow label="英文名称" value={`Saint-Jean-Pied-de-Port`} />
                <InfoRow label="正式名称" value={`Saint-Jean-Pied-de-Port`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`圣让皮耶德波尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座小镇是法国通往西班牙圣地亚哥朝圣之路上最具象征意义的起点之一，数个世纪以来一直是穿越险峻比利牛斯山前最后的休整与集结地。`} />
                <InfoRow label="建筑特色" value={`依尼夫河而建，标志性的红砂岩房屋鳞次栉比，配以古老的石桥、完整的中世纪城墙和威严的城门，构成一幅和谐而坚固的山谷堡垒画卷。`} />
                <InfoRow label="建筑风格" value={`典型的巴斯克地区建筑风格（白色窗框、深色木结构配红色瓦顶或墙面）与中世纪军事防御建筑（如城堡、瓮城、城墙）的完美融合。`} />
                <InfoRow label="文化价值" value={`一个活着的文化景观，不仅是世界遗产“圣地亚哥之路”的一部分，更是当代徒步者与千年朝圣传统进行精神对话的永恒门户。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。镇上主要景点如圣雅各教堂（Église Notre-Dame-du-Bout-du-Pont）开放时间通常为上午9点至下午6点。城墙及城门可随时参观。游客信息中心（朝圣者办公室）开放时间较长，尤其在朝圣旺季（4月至10月），通常为早晨7点至晚上8点，为朝圣者提供盖章和咨询。冬季部分设施开放时间可能缩短。请注意，内部小型博物馆或塔楼可能有独立且变化的开放时间，建议抵达后于游客中心确认。`} />
              <InfoRow label="门票价格" value={`进入圣让皮耶德波尔古镇本身完全免费。漫步城墙、街道和广场均无需门票。圣雅各教堂免费进入，欢迎捐赠。若需进入城内某些小型历史展览馆或登上部分防御工事观景，可能会有2-5欧元的象征性费用。最重要的“朝圣者护照”（Credencial）可在官方朝圣者办公室购买，价格约2欧元，这是在沿途驿站住宿和获取朝圣证书的必备文件。`} />
              <InfoRow label="地址" value={`Place Charles de Gaulle, 64220 Saint-Jean-Pied-de-Port, France`} />
              <InfoRow label="交通方式" value={`最近的机场是法国比亚里茨-昂格莱-巴约讷机场（BIQ），距离约55公里。从机场可先搭乘短途巴士或出租车前往巴约讷（Bayonne）火车站，车程约20分钟。从巴约讷火车站，有TER（Regional Express Train）列车直达圣让皮耶德波尔，这是最经典的方式。火车班次在旺季较多，约每1-2小时一班，沿途风景如画，穿越巴斯克乡村，车程约1小时10分钟。购票建议使用SNCF官网或APP提前查询，也可在车站现场购买。从西班牙潘普洛纳（Pamplona）出发，也有巴士连接，但需在边境小镇转车，耗时约2-3小时，适合从西班牙反向进入的旅行者。自驾游客需注意，古镇中心为步行区，需将车停在镇外的免费或收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解圣让皮耶德波尔，就必须把它放在那条绵延千里的星图上——通往西班牙圣地亚哥-德孔波斯特拉的朝圣之路。它的故事，始于“结束”与“开始”的交界处。早在罗马时期，这里就是一条翻越比利牛斯山的重要通道。但它的命运真正被改变，是在公元9世纪圣地亚哥使徒之墓被发现后，整个欧洲的虔诚信徒开始涌向西班牙西北部。这座位于尼夫河（Nive）河谷尽头、山脚之下（“Pied-de-Port”在法语中正是“山脚港口”之意）的定居点，因其战略位置，自然而然地成了从法国各地汇集而来的朝圣者们，在挑战海拔1057米的龙塞斯瓦列斯山口前，最后一个可以安全补给、休整和寻求庇护的“港口”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪是它的黄金时代。大约12世纪，纳瓦拉国王桑乔六世（Sancho VI）意识到了此地的军事与经济价值，他下令在此修建坚固的城墙和城堡，将其打造为一个稳固的边防重镇。于是，圣让皮耶德波尔拥有了双重身份：既是军事堡垒，防御来自山那边的潜在威胁；又是繁荣的驿站，为朝圣经济输血。客栈、医院、铁匠铺、修鞋匠如雨后春笋般出现。圣雅各教堂被扩建，成为朝圣者祈祷和获取精神力量的重要场所。那时的城门，每日吞吐着汹涌的人流，有衣衫褴褛的苦行者，也有骑马佩剑的贵族，他们共同的标志是挂在行囊上的扇贝——圣雅各的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平与繁荣并非永恒。由于其边境要塞的属性，小镇在历史上多次成为冲突的焦点。从13世纪法国与纳瓦拉王国的争夺，到16世纪的宗教战争，坚固的城墙曾一次次经受战火洗礼。17世纪，著名的军事工程师沃邦（Vauban）甚至为它设计了更现代化的防御工事，山顶的城堡被加固，证明其战略地位从未被忽视。战争不仅带来破坏，也时常阻断朝圣之路，让这个“起点”陷入萧条。但有趣的是，每次烽烟暂熄，那条石板路上又会渐渐响起零星的脚步声，朝圣的传统像野草一样，顽强地一次次重生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮滚入近代，随着宗教改革和现代交通的发展，徒步朝圣在18、19世纪几乎衰落到谷底。圣让皮耶德波尔褪去了昔日“国际驿站”的光环，回归成一个宁静的、以农业为主的地区小镇。那些红色的石屋依旧，只是少了远方的来客。转机发生在20世纪下半叶。1987年，圣地亚哥之路被欧洲议会定为“第一条欧洲文化之路”。1993年，它被联合国教科文组织列入世界遗产名录。仿佛一道沉睡的咒语被唤醒，全球范围内的徒步和文化旅行热潮，让这条古老的路径重获新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，今天的圣让皮耶德波尔复活了。它不再是军事要塞，却成了另一种意义上的精神堡垒。古老的朝圣者办公室重新变得忙碌，每天为数百人盖章、发放护照。客栈和旅社的主人，可能是当年朝圣者的后代，他们懂得如何治疗水泡，也懂得倾听故事。小镇的肌理从未改变——红石屋、老城墙、陡坡街——但注入其中的生命之流，已经从纯粹的中世纪宗教虔诚，演变为更为多元的追寻：有人为了信仰，有人为了挑战自我，有人为了在行走中思考人生，也有人只是为了体验一段厚重的历史。这座小镇，就像一个沉默而包容的见证者，见证了从宗教狂热到个人探索的人类精神史的变迁，并将继续见证下去。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度体验圣让皮耶德波尔，建议安排完整的一天。最好前一晚抵达并住下，这样你才能捕捉到清晨朝圣者集结出发的动人时刻，以及黄昏游客散去后小镇的宁静本真。早晨8点前，带着清醒的感官从住宿点出发，先去朝圣者办公室感受“出征”前的氛围，然后正式踏上那条著名的石板路，一路向上探索至城堡废墟，这是体验“起点”仪式感的最佳路径。下午节奏放缓，可以沿着城墙漫步，过桥到对岸获取全景视野，并深入小巷和店铺感受当地生活。傍晚则留给河流、广场和一次安静的回顾。这样的安排让你既能融入白天的活力，也能享受夜晚的静谧，完整捕捉小镇的双重性格。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`主街的商铺在中午至下午人最多，如果想安静地拍照或感受街道氛围，请尽量利用清晨或傍晚时段。
虽然小镇安全友好，但作为朝圣起点人流量大，建议将重要证件和现金妥善保管，尤其是在拥挤的朝圣者办公室附近。
如果你也计划徒步第一段山路，务必在镇上专业的户外店或朝圣者办公室获取最新的天气和路况信息，并检查装备，山上的天气变化莫测。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先去尼夫河畔的圣雅各老石桥，看晨雾如何从红色屋顶上缓缓升起，耳边是流水声和第一批朝圣者整理行装的窸窣声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进位于老城门旁的朝圣者办公室，看着来自世界各地、不同年龄的人们排队购买那本将盖满沿途印章的棕色护照，感受一种庄严的出发气氛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气开始攀爬那条名为“Rue de la Citadelle”的陡峭圆石主街，用手触摸两旁冰冷而光滑的红砂岩墙，想象几个世纪以来无数手掌也曾在此借力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在斜坡中途寻一家面包坊，买一个刚出炉的、表皮酥脆的巴斯克蛋糕，就着咖啡坐在街边小凳上，看身背大包的徒步者从眼前坚定地走过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上小镇制高点的城堡遗迹，站在沃邦设计的防御工事上，迎着山风俯瞰整个红色古镇像一幅画卷在河谷中铺开，并遥望前方云雾缭绕的比利牛斯群山。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从另一侧缓坡下山，沿着保存完好的中世纪城墙走一段安静的步道，触摸那些冰凉的巨石，感受这座小镇作为边境要塞的往昔峥嵘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过桥到尼夫河对岸，回过头来从最佳角度拍摄古镇全景，将古老的石桥、层层叠叠的红屋、教堂尖顶和背景的青山一并收入镜头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到古镇中心，随意钻进一条与主街垂直的安静小巷，那里有真正的民居、窗口的天竺葵和飘出的晚饭香气，感受旅游表象下的日常脉搏。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`尼夫河对岸全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`从圣雅各桥下游的另一座小桥过河，走到对岸的草地上，下午侧光时分拍摄，能将古老的石桥作为前景，中景是密密麻麻的红色屋瓦和教堂尖顶，背景是郁郁葱葱的山丘，构图饱满而有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Rue de la Citadelle街道纵深`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚刚洒进街道时，站在坡底向上拍，利用光滑圆石路面的反光作为引导线，将两侧高耸的红砂岩建筑和远处依稀可见的城门拱洞一同构图，捕捉街道的深邃感与历史纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙与民居的结合点`}</h4>
                  <p className="text-sm text-gray-700">{`在城墙步行道的中段，寻找一个能将古老雄浑的石砌城墙与墙下一户普通人家的红色屋顶、小花园一同纳入画面的角度，最佳光线在早晨，这能生动体现历史遗产与当下生活的交融。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣雅各教堂内部光轨`}</h4>
                  <p className="text-sm text-gray-700">{`如果教堂内人少，可在门口用慢速快门拍摄中殿，让手持贝壳杖、缓缓移动的朝圣者身影变得模糊，形成流动的光轨，而祭坛和两侧的祈祷烛光保持清晰，营造出静谧而神圣的时空感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夕阳下的红色屋顶海洋`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从城堡遗址向西俯瞰，温暖的夕阳光线会给所有红瓦屋顶镀上一层金色光芒，使用长焦镜头可以压缩空间，拍出屋顶波浪般连绵起伏的震撼细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`清晨和黄昏的“黄金时刻”光线最适合拍摄红砂岩建筑，能突出其温暖的质感和丰富的色彩层次。`}</li>
                <li>• {`拍摄朝圣者时请务必保持尊重，最好事先微笑示意并获得同意，专注于捕捉环境与人的关系，而非特写陌生人的疲惫面孔。`}</li>
                <li>• {`小镇石板路湿滑且不平，如需使用三脚架长时间曝光，请务必注意安全，并避开主要的行人通道。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`朝圣者旅社体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住镇上的公立或私立朝圣者旅社（Auberge），睡一次多人间的上下铺，在公共厨房和其他即将出发的徒步者分享故事，这是最地道、最具仪式感的“起点之夜”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老宅石屋精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋由数百年历史红砂岩宅邸改造的精品酒店，房间保留着粗犷的木梁和石墙，但配有现代化的舒适卫浴，晚上在窗边能听到清晰的尼夫河流水声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城外宁静庄园民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在步行15分钟可达的郊外农庄或乡间别墅，享受绝对的宁静、开阔的田园视野和主人准备的丰盛巴斯克家庭晚餐，与镇上的喧嚣形成完美互补。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`广场边舒适小旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`选择直接面向共和国广场（Place de la République）或主街的小旅馆，推开窗就是小镇最鲜活的生活场景，晚上听着楼下餐馆隐约的欢笑声入眠，位置极其便利。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`朝圣旺季（5月至9月）住宿非常紧张，尤其是性价比高的朝圣者旅社和热门小旅馆，务必提前数周甚至数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`镇上大多数住宿地点不设专用停车场，自驾旅客预订时一定要确认停车安排，通常是指引至附近的公共停车场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`作为朝圣起点，小镇整体治安良好，但入住朝圣者旅社多人间时，仍需保管好贵重物品，使用提供的储物柜。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开圣让皮耶德波尔许久后，我发现自己最常回味的，不是某张漂亮的照片，而是那里的一种“混合气息”。那是石板冷冽的触感、面包房暖烘烘的黄油香、背包尼龙布的摩擦声、以及无数人低声说“Buen Camino”（一路顺风）时空气里的微振。这个地方教会我，真正的起点，从来不是地图上一个简单的圆点，而是一种强大的心理场域。它用红色的温暖屋瓦拥抱你，用坚固的古老城墙保护你，然后，又用那条指向高山的陡峭街道默默提醒你：舒适区到此为止，前方的路，需要你用双脚去丈量，用心跳去体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切皆可速达的时代，圣让皮耶德波尔守护着一种“慢下来”的古老智慧。它不只是一个旅游目的地，更是一个转换器。在这里，你脱下游客的身份，哪怕只走几公里，也能短暂地成为一名“行者”。你会开始关注最朴素的事物：脚上的水泡、背包的重量、下一处水源、路上一个友善的微笑。它让你从数字世界的虚空中降落，重新连接土地、身体和最为简单直接的人类善意。所以，无论你是否打算徒步穿越那座大山，都值得来这个红色的山谷小镇住上一晚。站在那座古老的石门前，你会听见历史的回响与内心的叩问。它会问你，也问每一个到来的人：你的道路，准备好了吗？`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-valencay" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦朗塞城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Valençay</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eguisheim-alsace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃吉赛姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eguisheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome-paris" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
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
