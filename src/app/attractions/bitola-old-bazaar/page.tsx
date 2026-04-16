import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比托拉老集市 Bitola Old Bazaar｜穿越奥斯曼时光的活态博物馆与咖啡香 - 最佳欧洲景点',
  description: '第一脚踏进比托拉老集市，那种感觉不是“进入”了一个景点，而是不小心闯进了一部还在缓慢播放的老电影里。空气是混合的，刚出炉的“博雷克”酥皮点心的黄油香，紧紧缠着旁边香料摊上飘来的、辛辣又神秘的混合气味；再走几步，浓得化不开的土耳其咖啡的醇苦，又会不由分说地钻进你的鼻子。耳朵里灌满了生活本身的声音：铜匠...',
}

export default function BitolaOldBazaarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '比托拉老集市', href: '/attractions/bitola-old-bazaar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比托拉老集市・Bitola Old Bazaar・北马其顿・比托拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一脚踏进比托拉老集市，那种感觉不是“进入”了一个景点，而是不小心闯进了一部还在缓慢播放的老电影里。空气是混合的，刚出炉的“博雷克”酥皮点心的黄油香，紧紧缠着旁边香料摊上飘来的、辛辣又神秘的混合气味；再走几步，浓得化不开的土耳其咖啡的醇苦，又会不由分说地钻进你的鼻子。耳朵里灌满了生活本身的声音：铜匠铺子传来叮叮当当、富有节奏的敲击声，像一首古老的打击乐；擦肩而过的老人们用你听不懂的语言缓慢地交谈，语调起伏如同吟唱；还有商店门口收音机里流淌出的、带着浓重斯拉夫风情的流行音乐。阳光被高高低低的屋檐切割成一块块光斑，明晃晃地打在那些被无数双脚磨得光滑温润的鹅卵石路面上，光影随着你的脚步明明灭灭。
这里绝不是一个为游客准备的“布景”。那个坐在自家店铺门槛上，戴着老花镜一丝不苟修补着一双旧皮鞋的老匠人，他可能就在这条街上干了五十年。面包店的大婶一边麻利地揉着面团，一边用眼神和隔壁布店的老板隔空交流着今天的家长里短。你会看到穿着时髦的年轻人匆匆穿过古老的门廊，去赴一场咖啡馆的约会；也能看到裹着头巾的老妇人，提着一个朴素的布袋子，在一排排堆成小山的橄榄、奶酪和腌菜前仔细挑选。老集市就像比托拉这座城市的客厅兼厨房，是所有人生活的延伸，是呼吸和心跳本身。它的魅力不在于某栋建筑有多么惊世骇俗，而在于这整片街区所散发出的那种“活着”的温度，那种时间在这里仿佛被调慢了速度的慵懒与从容。
最打动人心的，或许是那种层层叠叠的历史感，它不是被封存在玻璃罩子里，而是就裸露在外，与你肌肤相亲。你的手指可以触摸到奥斯曼时期木筋墙房屋上那些深色的、饱经风霜的木头横梁；你的目光可以流连于一栋19世纪新古典主义建筑门楣上精美却已斑驳的石雕花纹；你一转头，又能看到南斯拉夫时期留下的那些朴素的、带有社会主义美学印记的公寓楼，它们毫不突兀地站在老邻居旁边。这种时空的杂糅非但不显混乱，反而形成了一种奇特的和谐，仿佛在无声地告诉你：生活就是这样，一代人来了，一代人走了，房子盖了又修，店铺换了营生，但这条街的热闹与温情，从未真正断绝。在这里，历史不是教科书上的一页，而是你手中那杯咖啡升腾起的雾气，是脚下石头的触感，是空气里永恒不变的，面包与香料的味道。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一脚踏进比托拉老集市，那种感觉不是“进入”了一个景点，而是不小心闯进了一部还在缓慢播放的老电影里。空气是混合的，刚出炉的“博雷克”酥皮点心的黄油香，紧紧缠着旁边香料摊上飘来的、辛辣又神秘的混合气味；再走几步，浓得化不开的土耳其咖啡的醇苦，又会不由分说地钻进你的鼻子。耳朵里灌满了生活本身的声音：铜匠铺子传来叮叮当当、富有节奏的敲击声，像一首古老的打击乐；擦肩而过的老人们用你听不懂的语言缓慢地交谈，语调起伏如同吟唱；还有商店门口收音机里流淌出的、带着浓重斯拉夫风情的流行音乐。阳光被高高低低的屋檐切割成一块块光斑，明晃晃地打在那些被无数双脚磨得光滑温润的鹅卵石路面上，光影随着你的脚步明明灭灭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不是一个为游客准备的“布景”。那个坐在自家店铺门槛上，戴着老花镜一丝不苟修补着一双旧皮鞋的老匠人，他可能就在这条街上干了五十年。面包店的大婶一边麻利地揉着面团，一边用眼神和隔壁布店的老板隔空交流着今天的家长里短。你会看到穿着时髦的年轻人匆匆穿过古老的门廊，去赴一场咖啡馆的约会；也能看到裹着头巾的老妇人，提着一个朴素的布袋子，在一排排堆成小山的橄榄、奶酪和腌菜前仔细挑选。老集市就像比托拉这座城市的客厅兼厨房，是所有人生活的延伸，是呼吸和心跳本身。它的魅力不在于某栋建筑有多么惊世骇俗，而在于这整片街区所散发出的那种“活着”的温度，那种时间在这里仿佛被调慢了速度的慵懒与从容。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是那种层层叠叠的历史感，它不是被封存在玻璃罩子里，而是就裸露在外，与你肌肤相亲。你的手指可以触摸到奥斯曼时期木筋墙房屋上那些深色的、饱经风霜的木头横梁；你的目光可以流连于一栋19世纪新古典主义建筑门楣上精美却已斑驳的石雕花纹；你一转头，又能看到南斯拉夫时期留下的那些朴素的、带有社会主义美学印记的公寓楼，它们毫不突兀地站在老邻居旁边。这种时空的杂糅非但不显混乱，反而形成了一种奇特的和谐，仿佛在无声地告诉你：生活就是这样，一代人来了，一代人走了，房子盖了又修，店铺换了营生，但这条街的热闹与温情，从未真正断绝。在这里，历史不是教科书上的一页，而是你手中那杯咖啡升腾起的雾气，是脚下石头的触感，是空气里永恒不变的，面包与香料的味道。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比托拉老集市`} />
                <InfoRow label="英文名称" value={`Bitola Old Bazaar`} />
                <InfoRow label="正式名称" value={`Bitola Old Bazaar`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`比托拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥斯曼帝国统治时期巴尔干半岛最重要的商业与文化中心之一，被誉为“领事之城”的心脏。`} />
                <InfoRow label="建筑特色" value={`奥斯曼式木结构房屋与新古典主义石砌建筑的和谐共存，狭窄曲折的街道上方是连绵的红色瓦片屋顶。`} />
                <InfoRow label="建筑风格" value={`以奥斯曼帝国晚期风格为主导，混合了地中海与巴尔干本土元素，并受到19世纪欧洲新古典主义的影响。`} />
                <InfoRow label="文化价值" value={`一座仍在呼吸的“活着的博物馆”，见证了多个世纪以来穆斯林、东正教徒、犹太人、弗拉赫人等不同民族与宗教在此和谐共处的独特文化生态。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老集市的街道和公共区域全天24小时开放。集市内的大部分商店、咖啡馆和作坊的营业时间一般为周一至周六上午9点至晚上8点，部分纪念品商店和餐厅会营业至更晚。周日许多传统店铺会歇业半天或全天，但主街的咖啡馆和餐厅通常照常营业。建议游览时间安排在上午10点至傍晚6点之间，既能感受白天的活力，也能捕捉到迷人的黄昏光影。`} />
              <InfoRow label="门票价格" value={`进入比托拉老集市街区完全免费。集市内的一些小型博物馆或历史宅邸（如“伊斯哈克·切莱比”宅邸）可能需要支付少量门票，价格通常在100-200第纳尔（约合1.5-3欧元）之间。学生和儿童通常享有折扣。`} />
              <InfoRow label="地址" value={`Stara Čaršija， 7000 Bitola， North Macedonia`} />
              <InfoRow label="交通方式" value={`从首都斯科普里出发最便捷。在斯科普里机场，可以乘坐出租车或机场巴士到市中心汽车站（约30分钟），然后转乘长途巴士前往比托拉。巴士班次密集，大约每30-60分钟一班，车程约3小时，沿途风景是典型的巴尔干乡村风貌。建议提前在车站购票，选择靠窗座位。如果从奥赫里德湖过来，也有频繁的巴士，车程约1.5小时。抵达比托拉汽车站后，老集市就在步行可达的范围内（约15-20分钟），沿着主要的“什罗科·索科”大街直走就能看到标志性的钟楼。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解比托拉老集市今天的模样，你得把时钟拨回六个世纪以前。14世纪末，奥斯曼帝国的铁骑征服了这片土地，比托拉（当时被称为“莫纳斯提尔”）因其地处连接亚得里亚海与爱琴海、贯穿巴尔干南北的“罗马古道”上的战略位置，迅速崛起为帝国在巴尔干最重要的商业与军事重镇之一。老集市，作为城市的经济心脏，便在这个时期奠定了它的基本格局。想象一下当时的盛景：来自萨洛尼卡的丝绸、威尼斯的玻璃、阿拉伯半岛的香料、以及本地生产的毛皮、蜂蜡和粮食，在这里交汇、易手。狭窄的街道按行业划分，有铜匠街、裁缝街、皮匠街，每个作坊既是店铺也是住家，楼上住人，楼下做生意，日夜不停地传来劳作的声音。这里不仅是市场，更是整个社区社交、信息和文化的流动中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老集市的黄金时代，与一个特殊的群体密不可分——欧洲各国的领事馆。从18世纪中叶开始，得益于奥斯曼帝国的相对开放和比托拉的重要性，法国、奥地利、俄罗斯、英国、意大利等十多个国家相继在这里设立了领事馆，比托拉因此赢得了“领事之城”的美誉。这些外交官、商人、旅行者带来了欧洲最新的思潮、时尚和建筑风格。你可以想象，一位奥斯曼帕夏（总督）和一位法国领事，可能刚刚在集市旁的咖啡馆里，一边抽着水烟，一边就某批货物的关税达成了协议。这种频繁的东西方交流，直接塑造了老集市建筑的“混血”面貌：传统的奥斯曼木结构住宅开始融入了石砌的基座、更宽大的窗户，甚至出现了古典主义的柱式和装饰线条。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静的岁月之河下总有暗流涌动。19世纪末到20世纪初，是整个巴尔干的“地震”年代，民族主义浪潮风起云涌，奥斯曼帝国摇摇欲坠。比托拉老集市见证了一次又一次的战争与变迁。1912年的第一次巴尔干战争，塞尔维亚军队攻入比托拉；紧接着的第一次世界大战，这里更是成了协约国（主要是法国和塞尔维亚）与同盟国（保加利亚、德国）反复拉锯的血腥战场，著名的“莫纳斯提尔战役”让城市和集市都遭受了重创。枪炮声暂时取代了市集的喧哗，许多古老的作坊和商队旅馆在炮火中化为废墟。战争结束后，比托拉并入了新成立的南斯拉夫王国，老集市开始缓慢地修复，但曾经的国际性色彩逐渐褪去，变得更加本土化。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`第二次世界大战及其后的社会主义南斯拉夫时期，给老集市带来了另一种深刻的变化。私人商业在一定程度上被压制，一些大型的国有商店和机构进驻了老建筑。但有趣的是，集市那种邻里街坊式的生活结构并未被完全摧毁。在小巷深处，家庭式的小作坊和咖啡馆依然顽强地生存着，成为计划经济学下的“灰色”活力点。人们依然习惯在这里碰面、闲聊、交换信息。1991年北马其顿独立后，老集市迎来了新的挑战与机遇。年轻人一度向往现代化的购物中心，许多老店铺面临关张。但近二十年来，一股怀旧与文化遗产保护的潮流兴起，政府和民间都意识到，这片古老的街区是不可再生的灵魂所在。于是，谨慎的修复工程开始了，目标不是将其变成僵死的博物馆，而是注入新的活力——吸引年轻的手工艺人回来开店，将空置的老宅改造成设计酒店或艺术画廊，让传统咖啡馆与时尚的精品店比邻而居。今天的嗡嗡声，是古老技艺与当代创意共同谱写的交响曲。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品尝比托拉老集市的精髓，我强烈建议你留出完整的一天，并遵循“由外向内，由静到闹，再归于宁静”的节奏。最好在清晨八点半左右抵达，这时游客尚未涌入，店铺正陆续卸下门板，阳光斜射进小巷，是最有电影感的时刻。从标志性的钟楼开始你的旅程，先感受主干道的开阔与清晨的宁静，然后像一滴水渗入海绵一样，钻进那些纵横交错的小巷深处。上午用眼睛和镜头捕捉光影与建筑细节，中午在传统的“卡法纳”餐馆享用一顿漫长的午餐，下午则专注于与店主闲聊、体验手工艺，或是在咖啡馆里发呆。傍晚时分，回到主街，看夕阳为整个集市镀上金边，感受昼夜交替时分的微妙气息变化。这样的安排能让你体验到集市在不同时间维度下的多重性格。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`主街上的部分纪念品商店价格可能虚高，购买特色商品如手工铜器或香料时，不妨多往小巷深处走走，那里的家庭作坊往往物美价廉。穿着舒适耐走的鞋子是绝对必须的，鹅卵石路面对于高跟鞋或薄底鞋来说是种折磨。虽然比托拉治安良好，但在集市拥挤处仍需留意随身物品，尤其是相机和钱包。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从那座挺拔的白色钟楼下穿过，仰头看看它朴素的指针，然后沿着“什罗科·索科”主街慢慢向东走，感受两侧新古典主义建筑在晨光中投下的长长影子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地拐进第一条吸引你的小巷，比如“基里尔和迪乌斯”街，让脚步被凹凸不平的鹅卵石引导，专注地看阳光如何在古老的木筋墙和褪色的百叶窗上作画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家飘着浓郁咖啡香的老式“卡费阿纳”，比如著名的“卡费阿纳·埃夫吉诺”，在它的户外小桌前坐下，点一杯土耳其咖啡，看穿行的街坊和开始忙碌的店主。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访一家仍在运作的传统铜匠铺或银匠铺，看着老师傅用传承了几代人的工具敲打出一件闪亮的器皿，听听他可能会用简单的英语单词夹杂着手势讲述的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着曲折的小巷向集市南侧探索，找到那些隐藏的小广场和公共水泉，想象几个世纪以来，妇女们在此打水、交谈，构筑起社区信息网络的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在正午时分回到主街附近，选择一家招牌古朴、本地人众多的“卡法纳”餐馆，点一份陶罐炖肉或烤杂蔬，让丰盛的地方风味充盈你的味蕾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后避开最热闹的街区，向北面坡度稍高的安静住宅区走走，那里有保存完好的奥斯曼老宅，门廊下往往坐着晒太阳的老人，氛围更加静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前，去集市东端的“马格利塔”老商队旅馆遗址看看，虽然只剩下残垣断壁，但在低斜的日光下，它能最直观地诉说这里曾作为重要商路枢纽的往昔。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼前方的街道仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在钟楼东侧向西拍，可以捕捉到钟楼、街道透视线与两侧色彩柔和的建筑形成的优美构图，晨昏的光线会让石头泛起暖金色。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“卡费阿纳·埃夫吉诺”咖啡馆的窗边`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，坐在咖啡馆室内靠窗的位置，从内向外拍摄，能将古老的木窗框、桌上的咖啡铜壶与窗外流动的街景一同纳入镜头，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`某条无名小巷的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，选择一条狭窄的小巷，站在阴影里，对准巷子另一端被阳光照亮的出口或一扇彩色的门拍摄，强烈的明暗对比能营造出戏剧性的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老集市边缘的住宅区阶梯`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，爬到集市北侧住宅区的一段石阶上，回头俯瞰，可以拍到连绵的红色瓦片屋顶海洋，以及其间升起的缕缕炊烟，充满生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`修复后的“伊斯哈克·切莱比”宅邸内部楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`如果宅邸开放，利用室内柔和的自然光（最好是非直射的侧光），拍摄其精美的木雕楼梯栏杆与从高窗洒下的光柱，能捕捉到奥斯曼室内建筑的美学细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄店铺或手工艺人前，一个友好的微笑和简单的手势征询（指指相机）会让他们更乐意接受，甚至可能为你摆个姿势。室内光线通常较暗，建议使用大光圈镜头或适当提高ISO，充分利用自然光，避免使用闪光灯破坏氛围。当地人对拍照总体很友好，但尽量避免特写拍摄那些在宗教场所（如附近的老清真寺）做礼拜的人。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在老集市核心区由奥斯曼老宅改造的家庭旅馆，夜晚听着木质楼板的微响入睡，清晨被面包店的香气和附近的清真寺唤拜声温柔唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计风格`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在老集市边缘一栋新古典主义建筑里的精品设计酒店，内部是极简的现代风格，但推开窗就是百年街景，体验一种时空对话的奇妙感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静避所`}</h4>
                  <p className="text-sm text-yellow-800">{`住在距离老集市步行仅十分钟、绿树成荫的安静居民区里的温馨民宿，房东妈妈可能会为你准备家常的北马其顿早餐，享受闹中取静的惬意。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端体验`}</h4>
                  <p className="text-sm text-purple-800">{`下榻在比托拉市中心（离老集市不远）由历史建筑改建的顶级酒店，享受现代化的舒适与服务，同时酒店本身可能就是一件值得品鉴的建筑艺术品。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是旅游旺季，老集市内的特色住宿非常抢手，务必提前至少一两个月预订。住在集市内虽然体验独特，但需接受夜晚可能偶尔有行人谈话声，浅眠者可选择稍外围的住处。比托拉整体治安很好，但老集市小巷夜晚灯光较暗，建议选择照明良好的主街附近住宿，或与同伴一同出行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开比托拉老集市好多天后，我的脑海里依然会不时浮现出那些混杂的气味、声响和光影。它给我的触动，并非那种面对极致自然或人类工程奇迹时的震撼，而是一种更绵长、更温润的浸润。在这个一切都被加速、被标准化、被精心策划成“体验”的世界里，老集市固执地保留着一种旧日的节奏。它不急着向你证明什么，不急着展示它的辉煌，它只是在那里，日复一日地运转着，像一条深沉的、流淌缓慢的河。你会意识到，真正的生命力，往往就藏在这种看似寻常的坚韧里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被Instagram框定的“完美”景点，如果你想触摸的是一段仍然有体温、有呼吸的历史，那么，请一定把比托拉老集市放进你的清单。它教会我们的，或许是如何在变迁中保持内核，如何在喧嚣中留存静谧，以及，如何在一杯咖啡的工夫里，与过往的无数个平凡而珍贵的日子悄然相连。来这里，你不是一个旁观者，你会成为这漫长生活故事里，一个轻轻掠过的、却能被温柔铭记的音符。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
