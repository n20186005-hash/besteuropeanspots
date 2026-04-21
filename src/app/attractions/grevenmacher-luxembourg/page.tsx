import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格雷文马赫 Grevenmacher｜摩泽尔河畔的葡萄酒摇篮与蝴蝶秘境 - 最佳欧洲景点',
  description: '如果你从卢森堡市坐火车过来，大概在靠近格雷文马赫时，车窗外的景致会突然变得柔软。钢筋玻璃的现代都市景象迅速褪去，取而代之的是缓缓流动的、泛着银灰色光泽的摩泽尔河，以及河对岸德国境内连绵的、墨绿色的山丘。而当火车停稳，你踏上月台，第一口呼吸到的空气是清冽的，混合着河水特有的湿润气息，和一种隐约的、甜丝',
}

export default function GrevenmacherLuxembourgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '格雷文马赫', href: '/destinations/europe' },
            { label: '格雷文马赫', href: '/attractions/grevenmacher-luxembourg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格雷文马赫・Grevenmacher・卢森堡・格雷文马赫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从卢森堡市坐火车过来，大概在靠近格雷文马赫时，车窗外的景致会突然变得柔软。钢筋玻璃的现代都市景象迅速褪去，取而代之的是缓缓流动的、泛着银灰色光泽的摩泽尔河，以及河对岸德国境内连绵的、墨绿色的山丘。而当火车停稳，你踏上月台，第一口呼吸到的空气是清冽的，混合着河水特有的湿润气息，和一种隐约的、甜丝丝的发酵香味——那是葡萄在呼吸，是这座小镇的底色。
穿过几条安静的住宅街道，摩泽尔河岸便豁然眼前。这里没有威尼斯那般喧闹的码头，也没有巴黎塞纳河畔那种精致的做作。这里的河岸是生活化的。本地人骑着自行车嗖地一下从你身边掠过；老人们坐在长椅上，面朝河水，一言不发地度过一个下午；偶尔有观光游船慢悠悠地驶过，荡起的涟漪轻轻拍打着石阶。你的耳朵里灌满了平和的声音：水流声、风声、鸟鸣，还有远处葡萄园里拖拉机低沉的嗡嗡声。时间在这里，仿佛被河水与葡萄藤过滤了，变得黏稠而缓慢。
但格雷文马赫绝不是一个只沉醉于旧日醇香的老派小镇。它的惊喜，藏在镇子另一头那座巨大的玻璃温室里——蝴蝶园（Papillon）。推开那扇门，一瞬间，潮湿的热带空气裹挟着浓郁的花香扑面而来，将你从温带的河岸彻底抽离。成千上万只来自世界各地的蝴蝶，在你身边翩翩起舞，停在你的肩头，或是贪婪地吸食着切开的橙子。从冰冷的古老酒窖，到这座生机勃勃的异国温室，这种奇妙的并置，正是格雷文马赫最迷人的地方：它深深扎根于土地与历史，却又向整个世界敞开怀抱。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你从卢森堡市坐火车过来，大概在靠近格雷文马赫时，车窗外的景致会突然变得柔软。钢筋玻璃的现代都市景象迅速褪去，取而代之的是缓缓流动的、泛着银灰色光泽的摩泽尔河，以及河对岸德国境内连绵的、墨绿色的山丘。而当火车停稳，你踏上月台，第一口呼吸到的空气是清冽的，混合着河水特有的湿润气息，和一种隐约的、甜丝丝的发酵香味——那是葡萄在呼吸，是这座小镇的底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过几条安静的住宅街道，摩泽尔河岸便豁然眼前。这里没有威尼斯那般喧闹的码头，也没有巴黎塞纳河畔那种精致的做作。这里的河岸是生活化的。本地人骑着自行车嗖地一下从你身边掠过；老人们坐在长椅上，面朝河水，一言不发地度过一个下午；偶尔有观光游船慢悠悠地驶过，荡起的涟漪轻轻拍打着石阶。你的耳朵里灌满了平和的声音：水流声、风声、鸟鸣，还有远处葡萄园里拖拉机低沉的嗡嗡声。时间在这里，仿佛被河水与葡萄藤过滤了，变得黏稠而缓慢。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但格雷文马赫绝不是一个只沉醉于旧日醇香的老派小镇。它的惊喜，藏在镇子另一头那座巨大的玻璃温室里——蝴蝶园（Papillon）。推开那扇门，一瞬间，潮湿的热带空气裹挟着浓郁的花香扑面而来，将你从温带的河岸彻底抽离。成千上万只来自世界各地的蝴蝶，在你身边翩翩起舞，停在你的肩头，或是贪婪地吸食着切开的橙子。从冰冷的古老酒窖，到这座生机勃勃的异国温室，这种奇妙的并置，正是格雷文马赫最迷人的地方：它深深扎根于土地与历史，却又向整个世界敞开怀抱。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格雷文马赫`} />
                <InfoRow label="英文名称" value={`Grevenmacher`} />
                <InfoRow label="正式名称" value={`Grevenmacher`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`格雷文马赫`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`摩泽尔河卢森堡段最古老、最重要的葡萄酒酿造中心与贸易枢纽。`} />
                <InfoRow label="建筑特色" value={`沿河而建的彩色房屋、陡峭山坡上的层叠葡萄园与深入地下的古老石砌酒窖和谐共存。`} />
                <InfoRow label="建筑风格" value={`以质朴的摩泽尔地区风格为主，混合了卢森堡传统的石材建筑与战后修复的简洁实用主义风格。`} />
                <InfoRow label="文化价值" value={`体现了卢森堡大公国“小国大业”的精致农业传统，是河岸生活、葡萄酒文化与现代生态旅游成功结合的典范。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇全天可自由游览。核心景点开放时间各异：蝴蝶园（Papillon）通常为每年3月中旬至11月初，每日上午10点至下午5点开放，7-8月旺季可能延长至下午6点。各大酒窖参观与品酒需提前预约，时间由各酒庄自行安排，通常在工作日的下午和周末的特定时段提供导览。市政厅等历史建筑外部可随时参观，内部开放时间需查询当地旅游局信息。冬季（11月-次年3月）许多旅游设施开放时间缩短或仅周末开放，建议行前务必核实。`} />
              <InfoRow label="门票价格" value={`蝴蝶园门票：成人约12欧元，儿童（4-12岁）约8欧元，家庭套票有优惠。酒窖参观与品酒体验价格因酒庄和套餐内容差异很大，基础导览品酒约15-25欧元/人，高端品鉴或搭配小食的套餐可达40-60欧元/人。许多酒庄对购买一定数量葡萄酒的游客免除品酒费。小镇漫步、河岸散步完全免费。`} />
              <InfoRow label="地址" value={`Grevenmacher, Luxembourg
（具体邮编因地点而异，中心旅游局地址：2 Rue de la Liberation, 6790 Grevenmacher）`} />
              <InfoRow label="交通方式" value={`从卢森堡市（卢森堡芬德尔机场LUX）出发最便捷。在卢森堡中央火车站（Gare Centrale）乘坐火车前往瓦瑟比利希（Wasserbillig）方向，约25-30分钟即可抵达格雷文马赫火车站（Grevenmacher Gare）。卢森堡全国公共交通免费，这是最大的福利！从火车站步行至小镇中心及河畔仅需10-15分钟。若自驾，从卢森堡市沿A1/E44高速公路向东，接CR142公路，约20分钟车程即可到达。小镇内停车方便，沿河有多个免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起格雷文马赫的故事，你的舌尖必须先尝到一丝雷司令的酸度。早在罗马时代，沿着摩泽尔河行军的士兵们就发现了这片朝南的陡峭山坡拥有绝佳的日照和排水性，是种植葡萄的天选之地。中世纪时，这里的葡萄酒酿造已经初具规模，但真正让它名声大噪的，是修道院的修士们。他们像照料经文一样精心照料葡萄藤，将酿造技术系统化。那时的酒窖，很多就挖在教堂和修道院的地下，阴凉、恒温的石窟里，橡木桶中静静地发生着神奇的转化。格雷文马赫成了教会与贵族餐桌上不可或缺的甘霖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静的河岸生活总被历史的洪流打断。格雷文马赫因其战略性的河畔位置，在漫长的岁月里多次成为各方势力争夺的焦点。它像一枚棋子，在西班牙人、法国人、奥地利人之间易手。最惨痛的记忆来自二战，这座安静的小镇未能幸免于战火的蹂躏，许多古老的建筑在轰炸中化为瓦砾。你今天看到的许多沿河彩色房子，其实是在战后五六十年代重建的。但有趣的是，战争的创伤并未摧毁生活的根基。一旦硝烟散去，人们回到家园，第一件事不是修建宏伟的纪念碑，而是重新扶起倒塌的葡萄架。因为对他们来说，葡萄藤才是真正的生命线，是连接过去与未来的血脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "上世纪后半叶，当整个欧洲的农业都在经历现代化转型时，格雷文马赫的葡萄农们面临抉择。是追求产量，加入工业化生产的洪流，还是坚守风土，走一条更精致也更艰难的路？卢森堡人选择了后者。他们成立了严密的葡萄酒合作社和质检协会，对每一瓶出产的葡萄酒都标定详细的产地、等级和年份。格雷文马赫的“Caves St. Martin”等知名酒庄，开始将古老的地下酒窖改造成充满设计感的品酒室，欢迎全世界的爱好者深入地下，聆听岩石的故事，品尝时间的味道。葡萄酒，从一种农产品，真正升华为一种文化体验。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而那个看似与葡萄酒毫不相干的蝴蝶园，其实是这个故事另一个面向的精彩续写。它诞生于上世纪90年代，一个欧洲人开始普遍追求生态保护与多元旅游体验的时代。小镇的决策者没有选择建一个更大的购物中心，而是建造了这个梦幻般的温室。它不仅仅是一个景点，更是一个关于脆弱与美丽的隐喻。在恒温的玻璃穹顶下，来自亚马逊、东南亚的珍稀蝴蝶完成着它们的生命周期。游客，尤其是孩子们，在这里第一次亲眼目睹破茧成蝶的奇迹。这个决定，让格雷文马赫摆脱了单一“酒镇”的标签，成为了一个适合全家度过一整天、充满多重感官愉悦的目的地。历史、农业、生态、休闲，在这里编织成一条坚固而美丽的生命之藤。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受格雷文马赫的日与夜，建议安排整整一天的行程。最好在上午9点左右抵达，这时晨雾刚刚从河面散去，阳光正好洒在葡萄园上，小镇宁静而清新。整个游览节奏应是“先外后内，先自然再人文”：上午沿着河岸和葡萄园徒步，吸收天地精华；下午深入酒窖和蝴蝶园，探索小镇的内核与惊喜；傍晚则留给河畔的晚餐，用一杯当地的起泡酒（Crémant）致敬完美的日落。这样的安排既能避开午后可能的炎热（如果是在夏季），又能让你在光线最美的时刻出现在最适合拍照的地方。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观酒窖务必提前至少一天通过官网或电话预约，直接上门很可能吃闭门羹。蝴蝶园内温度高达25-28摄氏度且湿度很大，建议内穿薄衫，外套拿在手里。周末和夏季的傍晚，河畔餐厅非常紧俏，最好提前订位。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着进镇，跟着指示牌往摩泽尔河岸方向走，让第一眼看到的风景是那宽阔平静的河面与对岸的德国山峦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河岸步道向西慢慢散步，仔细看水中天鹅的倒影，并留意那些停泊着的小船和岸边色彩柔和的老房子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一条向上延伸的小路，钻进镇子后方层叠的葡萄园，站在半山腰回望，整个小镇和蜿蜒的河流就像一幅铺开的立体地图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后直奔一家预约好的家族酒窖（比如Caves St. Martin或Caves Bernard-Massard），跟着庄主深入阴凉的地下王国，听他讲岩石、橡木桶与年份的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心找一家家庭餐馆享用午餐，务必点一份用当地白葡萄酒烹制的“Friture de la Moselle”（炸摩泽尔小河鱼）佐餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将整个下午最放松的时光留给蝴蝶园，在湿热的花香中迷失，静静等待一只蓝摩尔福蝶或天堂鸟蝶落在你的手臂上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从梦幻的温室出来后，逛逛老城区狭窄的街道，看看战后重建的圣劳伦斯教堂和市政厅广场，感受小镇日常的生活脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到摩泽尔河边，找一张露天咖啡座的椅子坐下，什么都不做，只看金色的阳光如何一点点染红河面，然后点一杯本地起泡酒慢慢啜饮。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`摩泽尔河对岸德国一侧的步道上`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，从这里可以拍摄格雷文马赫小镇全景，连绵的葡萄园、彩色房屋和教堂尖塔在金色逆光中构成绝佳剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`蝴蝶园中央瀑布附近`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线从玻璃穹顶直射时，利用喷溅的水珠作为前景，可以捕捉到蝴蝶在光影中飞舞的梦幻动态瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下酒窖的拱形长廊内`}</h4>
                  <p className="text-sm text-gray-700">{`请导游或工作人员协助，用手机补光或利用酒窖本身的微弱灯光，拍摄橡木桶在无限延伸的石拱下的深邃与静谧感，建议调低曝光补偿以保留暗部细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇高处某条葡萄园小径的转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或午后，以一排排整齐的葡萄藤作为引导线，将画面焦点引向远处河湾与对岸的森林，展现独特的河岸葡萄园地貌。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在酒窖内拍摄前请务必征得同意，闪光灯可能会影响葡萄酒品质，尽量避免使用。拍摄蝴蝶时请保持耐心，使用微距或长焦镜头远距离捕捉，切勿用手触碰或驱赶它们。航拍器在此区域飞行需严格遵守卢森堡及欧盟的无人机法规，河岸及小镇上空可能有禁飞限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔家庭式酒庄民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住葡萄农自己的家，房间窗外就是自家的葡萄园，早晨被鸟鸣唤醒，晚上还能和主人一起品尝未上市的新酒，听最地道的家族故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于镇中心由老建筑改造而成，风格简约现代，拥有一个可俯瞰河流的露台酒吧，是白天徒步后回来泡个澡放松身心的完美选择。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`安静的乡间别墅`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇外围的宁静村落，由石头砌成的古老农舍精心修复，带一个种满 herbs 的小花园，适合想要绝对安静和私密空间的家庭或情侣。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端葡萄园度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在俯瞰整个摩泽尔河谷的山坡上，拥有无边泳池和全景落地窗，将葡萄酒产区的壮丽景色变为你私人客厅的壁画，极致奢华与自然融合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-9月）和葡萄酒收获季（9月底-10月）是绝对旺季，住宿需提前数月预订。小镇治安极好，但选择远离主路的住宿会更静谧。许多民宿提供“自行车+早餐”套餐，强烈推荐，因为骑车探索河岸小道是此地不可错过的体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开格雷文马赫的时候，我的包里多了两样东西：一瓶贴着特定山坡名字和年份的雷司令，以及一只在蝴蝶园商店买的、用真实蝴蝶翅膀制成的标本书签。这两样东西，似乎完美地总结了这个地方带给我的全部感受。那瓶酒，是时间的沉淀，是阳光、雨水、岩石与人类耐心合作的结晶，它锁住了一个年份里所有的风雨和阳光，只有在打开的那一刻，故事才会流淌出来。而那只脆弱的、斑斓的书签，则提醒我生命中那些转瞬即逝的、无需任何实用理由的纯粹之美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求效率、一切都被加速的世界里，格雷文马赫像是一个温柔的悖论。它教会我们“慢”的价值：葡萄需要整整一个四季的轮回才能酿成酒，蝴蝶需要静静等待破茧才能飞翔。这里的一切——从酒农查看藤蔓时专注的眼神，到河边老人凝望水流时那雕塑般的宁静——都在对抗着现代生活的浮躁与碎片化。它不是一座让你匆匆打卡的“景点”，而是一个邀请你坐下来，用味蕾、用眼睛、用皮肤去感受的地方。你会发现，深度游的魅力，不在于收集了多少个地名，而在于你是否允许一个地方的气息、光线和节奏，真正地进入你的记忆，成为你生命故事的一部分。格雷文马赫，就是这样一个值得你交付一天时光，让它来重塑你对“丰富”与“宁静”理解的小小天堂。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beaufort-castles" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博福尔城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beaufort Castles</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mersch-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔施城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mersch Castle</p>
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
