import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里博维莱 Ribeauvillé｜阿尔萨斯葡萄酒之路上的音乐家之城 - 最佳欧洲景点',
  description: '车子刚拐进里博维莱，还没来得及看清路牌，一股混合着新鲜出炉的“库格尔霍夫”蛋糕的黄油焦香、潮湿石板路的清冽气息，还有远处某户人家窗口飘出的炖肉浓香，就一股脑儿地涌进了车窗。这就是阿尔萨斯小镇给你的第一个拥抱，不是视觉的，而是嗅觉的。停好车，双脚一踏上那条名叫“大道”的主街，你立刻就会明白，为什么这里...',
}

export default function RibeauvilleAlsacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '里博维莱', href: '/attractions/ribeauville-alsace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里博维莱・Ribeauvillé・法国・里博维莱`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐进里博维莱，还没来得及看清路牌，一股混合着新鲜出炉的“库格尔霍夫”蛋糕的黄油焦香、潮湿石板路的清冽气息，还有远处某户人家窗口飘出的炖肉浓香，就一股脑儿地涌进了车窗。这就是阿尔萨斯小镇给你的第一个拥抱，不是视觉的，而是嗅觉的。停好车，双脚一踏上那条名叫“大道”的主街，你立刻就会明白，为什么这里被称作“音乐家之城”。空气里仿佛还残留着中世纪小号手们排练时走调的铜管音，它们和今天咖啡馆外人们碰杯时清脆的叮当声，屋檐下风铃的摇曳声，完美地交织在一起。
你的眼睛会忙不过来。街道两侧的房子，每一栋都是一位争奇斗艳的选手。淡粉色的外墙配上深黑色的木筋，像一块巨大的杏仁糖；隔壁那栋鹅黄色的，窗台上堆满了天竺葵的烈焰红花，木梁上雕刻着葡萄藤蔓和滑稽的小人脸。阳光斜斜地切过山墙，在石板路上投下明明暗暗的光斑，走在上面，脚下传来的是几百年来被无数鞋底打磨后的温润触感。你很快会发现，这里的主角不是游客，而是生活本身。面包店老板娘正用带着浓重阿尔萨斯口音的法语和熟客聊着天气，五金店门口的老先生不紧不慢地修理着一把旧椅子，他的猫在阳光下摊成一滩毛茸茸的液体。
但里博维莱最独一无二的魅力，在于它的“高度”。无论你在小镇的哪个角落抬头，视线总会不由自主地被牵引向上——在身后那片墨绿色森林覆盖的孚日山脉山坡上，三座城堡的遗迹如同沉默的巨人，以不同姿态守护着脚下的葡萄园与城镇。它们不是被精心修复的博物馆，而是真正被时光侵蚀、与山林融为一体的残骸。这种“地上是甜美生活，山上是历史苍茫”的垂直对比，构成了里博维莱无法复制的灵魂。白天，葡萄园在阳光下闪着祖母绿般的光泽；到了傍晚，酒窖里橡木桶和发酵葡萄的醇厚香气弥漫开来，你会觉得，这座小镇是一瓶刚刚开启的琼瑶浆，芬芳、复杂，且余味悠长。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐进里博维莱，还没来得及看清路牌，一股混合着新鲜出炉的“库格尔霍夫”蛋糕的黄油焦香、潮湿石板路的清冽气息，还有远处某户人家窗口飘出的炖肉浓香，就一股脑儿地涌进了车窗。这就是阿尔萨斯小镇给你的第一个拥抱，不是视觉的，而是嗅觉的。停好车，双脚一踏上那条名叫“大道”的主街，你立刻就会明白，为什么这里被称作“音乐家之城”。空气里仿佛还残留着中世纪小号手们排练时走调的铜管音，它们和今天咖啡馆外人们碰杯时清脆的叮当声，屋檐下风铃的摇曳声，完美地交织在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的眼睛会忙不过来。街道两侧的房子，每一栋都是一位争奇斗艳的选手。淡粉色的外墙配上深黑色的木筋，像一块巨大的杏仁糖；隔壁那栋鹅黄色的，窗台上堆满了天竺葵的烈焰红花，木梁上雕刻着葡萄藤蔓和滑稽的小人脸。阳光斜斜地切过山墙，在石板路上投下明明暗暗的光斑，走在上面，脚下传来的是几百年来被无数鞋底打磨后的温润触感。你很快会发现，这里的主角不是游客，而是生活本身。面包店老板娘正用带着浓重阿尔萨斯口音的法语和熟客聊着天气，五金店门口的老先生不紧不慢地修理着一把旧椅子，他的猫在阳光下摊成一滩毛茸茸的液体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但里博维莱最独一无二的魅力，在于它的“高度”。无论你在小镇的哪个角落抬头，视线总会不由自主地被牵引向上——在身后那片墨绿色森林覆盖的孚日山脉山坡上，三座城堡的遗迹如同沉默的巨人，以不同姿态守护着脚下的葡萄园与城镇。它们不是被精心修复的博物馆，而是真正被时光侵蚀、与山林融为一体的残骸。这种“地上是甜美生活，山上是历史苍茫”的垂直对比，构成了里博维莱无法复制的灵魂。白天，葡萄园在阳光下闪着祖母绿般的光泽；到了傍晚，酒窖里橡木桶和发酵葡萄的醇厚香气弥漫开来，你会觉得，这座小镇是一瓶刚刚开启的琼瑶浆，芬芳、复杂，且余味悠长。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里博维莱`} />
                <InfoRow label="英文名称" value={`Ribeauvillé`} />
                <InfoRow label="正式名称" value={`Ribeauvillé`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`里博维莱`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为“音乐家之城”和“三城堡之城”，它曾是中世纪小号手与游吟诗人的庇护所，也是阿尔萨斯葡萄酒文化的鲜活核心。`} />
                <InfoRow label="建筑特色" value={`童话般的半木结构房屋、蜿蜒的鹅卵石街道、俯瞰全镇的三座中世纪城堡遗址，共同构成一幅立体的中世纪生活画卷。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔萨斯半木结构风格，融合了中世纪、文艺复兴及巴洛克元素，色彩明快，装饰繁复。`} />
                <InfoRow label="文化价值" value={`保存了罕见的中世纪“乐师行会”传统与葡萄酒节庆文化，是活着的欧洲民俗与手工业遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。镇内部分博物馆、酒窖及商店开放时间一般为上午10点至下午6点，夏季（5月至9月）可能延长，冬季（11月至2月）部分场所会缩短营业时间或每周休息一至两天。三座城堡遗址（圣于尔班、吉斯贝格、里博皮埃尔）的步道全年开放，但建议在日出后至日落前游览以确保安全。圣诞节期间，大部分商店和酒窖会在12月25日关闭。`} />
              <InfoRow label="门票价格" value={`进入里博维莱古镇本身免费。参观镇内的小型历史博物馆（Musée de la Ville）门票约为3-5欧元。由镇上出发前往三座城堡遗址的徒步小径免费。参加当地酒窖的品酒活动通常免费，但深度导览或品尝特定年份佳酿可能收费10-25欧元不等。主要葡萄酒节（如“乐师节”Fête des Ménétriers）期间，进入主会场可能需要购买几欧元的纪念章。`} />
              <InfoRow label="地址" value={`1 Place de la République, 68150 Ribeauvillé, France`} />
              <InfoRow label="交通方式" value={`从最近的斯特拉斯堡机场（SXB）出发，最便捷的方式是租车自驾，沿A35高速公路向南行驶约60公里，车程约45分钟，即可直达里博维莱，沿途皆是葡萄园风光，体验极佳。若乘坐公共交通，可从斯特拉斯堡火车站搭乘TER（区域快铁）前往塞莱斯塔站（Sélestat），车程约20分钟，班次频繁；在塞莱斯塔火车站外换乘106路或109路公交，约25分钟即可抵达里博维莱的共和国广场，但公交班次约每小时一班，需提前查好时刻表。从科尔马火车站出发则更方便，乘坐106路公交直达，车程约30分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲清楚里博维莱的故事，我们得把时钟拨回到公元8世纪左右。那时，这片肥沃的山谷和向阳坡地就已经被一群虔诚的僧侣看中了，他们在这里开垦葡萄园，酿制用于弥撒的葡萄酒。但真正让里博维莱在历史上留下名字的，是一群不那么“安分”的人——流浪乐师和游吟诗人。在中世纪，这些艺人的社会地位很低，常常受到驱逐。幸运的是，他们遇到了里博维莱的领主，拉波德家族。这个家族不知是出于对艺术的真心热爱，还是为了笼络人心，竟颁布了一项惊人的法令：宣布所有法国的流浪乐师都受他们的庇护！从此，里博维莱成了全法流浪艺人的“首都”，他们每年九月都会蜂拥而至，向领主朝贡、表演，并选举自己的“乐师之王”。这个传统，就是今天依然盛大举办的“乐师节”的起源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`拉波德家族不仅庇护艺人，也热衷于建造城堡来彰显权威。于是，从11世纪到13世纪，他们在小镇身后的山脊上，接力般地建起了三座雄伟的堡垒：圣于尔班城堡、吉斯贝格城堡和里博皮埃尔城堡。它们并非同时兴建，而是一个家族内部不同支系竞争与防御需求的产物。你可以想象，在那个时代，从小镇的广场仰望，山脊上旗帜飘扬，城堡在阳光下熠熠生辉，该是何等威严的景象。然而，家族的荣光未能永恒。拉波德家族绝嗣后，领地几经易手，最终在十七世纪，三座城堡在惨烈的三十年代战争中，被法国军队系统性地摧毁，以防止被敌人用作据点。曾经的家徽与荣光，化为了断壁残垣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡虽毁，但小镇的生活在葡萄藤的滋养下延续了下来。里博维莱的命脉，始终是葡萄酒。得益于孚日山脉的屏障作用和独特的微气候，这里的葡萄享有漫长而温和的生长期。从僧侣时代传承下来的技艺，在中世纪后期经由市民阶层发扬光大。那些色彩斑斓的半木结构房屋里，很多都藏着深深的酒窖。文艺复兴时期，富裕的酒商和行会领袖开始竞相装饰自己的宅邸，你在今天“大道”两侧看到的那些精美绝伦的雕花木梁、凸窗和壁画，大多是那个黄金时代的遗产。每一幅葡萄图案，每一个酒桶形状的装饰，都在诉说着他们对这份产业的骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的波折从未远离。阿尔萨斯地区在法德之间数次易手，里博维莱的名字也曾被德语化为“拉波尔斯韦勒”。但无论旗帜如何变换，小镇居民对土地、对葡萄、对自身古老传统的坚守从未改变。乐师节或许曾因战争中断，但终被重新拾起；城堡的石头滚落山涧，却成为了葡萄园的护墙石。今天的里博维莱，优雅地平衡着历史与当下。它不是凝固的化石，而是一棵老藤，根深深扎在中世纪的上壤里，却每年都结出新鲜醉人的果实，用它芬芳的汁液，款待着每一个懂得慢下来的旅人。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的早晨，大约九点前抵达里博维莱。这个时候，旅游巴士尚未涌入，阳光正好变得金黄柔和，小镇刚刚苏醒，面包店的香气最是浓郁。整体游览可以安排一整天：上午用两到三小时漫步古镇，捕捉最宁静的街景，参观小博物馆了解历史；午餐后，选择一条城堡徒步线路（约需2-3小时），用体力去换取俯瞰整个阿尔萨斯平原的壮阔全景；傍晚时分回到镇上，钻进一家家庭酒窖品酒，让味蕾沉浸在高潮。这样的节奏张弛有度，既能感受小镇的生活脉搏，又能领略其地理与历史的宏大背景，最后以美酒收尾，堪称完美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡徒步请务必穿防滑耐磨的徒步鞋，部分路段碎石较多，雨后湿滑。品尝葡萄酒时不必有压力，当地酒农非常乐于交流，告诉你的喜好，他们会热情推荐。小镇很多小店下午1点到3点会午休关门，计划购物的话要避开这个时段。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先在共和国广场边上的老面包坊买一个热乎乎的“布雷策尔”扭结包，感受它表面的粗盐粒在舌尖融化的咸香。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“大道”慢行，仔细欣赏每一栋半木结构房屋的门楣雕花，寻找葡萄、乐师和小丑等隐藏的符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进狭窄如迷宫般的“小街”巷弄，触摸那些被岁月打磨得无比光滑的墙角石，倾听自己脚步在静谧中发出的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇子尽头的山脚，选择通往吉斯贝格城堡的清晰步道，穿过沙沙作响的树林和向阳的葡萄园梯田。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在吉斯贝格城堡的废墟断墙上，让风吹过发梢，俯瞰脚下如玩具模型般的彩色小镇和无边无际的葡萄园海洋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后直奔一家有家族徽章标记的酒窖，让酒农带你品尝三款风格迥异的雷司令，从清爽干白到丰润晚收。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果恰逢夏季的周二，一定要混入市政厅前的本地市集，听听阿尔萨斯方言的讨价还价，买点农场奶酪和香料。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时回到主街，找一家有户外座位的餐厅，点一份酸菜炖肉肠，看夕阳给远处的城堡废墟镀上最后一层金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`吉斯贝格城堡西侧城墙缺口`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，逆光拍摄，以巨大的拱形残垣为画框，将山下斑斓的小镇和广阔的平原尽收镜中，光影对比强烈。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“大道”中段仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚刚照亮街道东侧的房屋立面，站在路中央，用广角镜头向上捕捉色彩明丽的木筋屋、飘扬的旗帜和远处城堡山影的层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`葡萄园前景人像`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落时分，在镇外前往圣于尔班城堡的小径上，让伙伴站在一排排整齐的葡萄藤之间，以远处小镇星星点点的灯火和深蓝色天幕下的城堡剪影为背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老井广场角落`}</h4>
                  <p className="text-sm text-gray-700">{`利用广场中央的古老石井作为前景，拍摄背后那栋有着精美文艺复兴时期凸窗和壁画的山墙房屋，最佳时间是上午十点后，阳光能均匀照亮整个立面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`航拍城堡遗址和葡萄园能获得震撼效果，但务必注意当地法规，远离人群并尊重隐私。拍摄酒窖内部或居民私人庭院前，请务必先微笑询问并获得许可，这是基本的礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`童话小屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋16世纪翻修的木筋墙民宿，房间天花板是裸露的古老木梁，清晨会被隔壁面包房飘来的香味自然唤醒，老板娘会为你准备地道的阿尔萨斯早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园中的静谧居所`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇边缘一座被自家葡萄园环绕的精品酒店，房间阳台正对吉斯贝格城堡，夜晚无比寂静，只有星空和虫鸣，酒店餐厅的酒单就是一部本地风土百科全书。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史中心的设计师酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由一栋百年历史建筑改造，内部是简约现代的阿尔萨斯风格，位置极佳，出门就是主街，适合既想深度探索又注重舒适便捷的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭式膳宿公寓`}</h4>
                  <p className="text-sm text-purple-800">{`在老城一条安静小巷里，由一对老夫妻经营，房间不多但温馨十足，晚餐可以预订女主人的家传手艺，听男主人用略带口音的法语讲述小镇轶事。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和九月葡萄酒节期间住宿非常紧俏，务必提前数月预订。小镇非常安全，夜晚静谧，但如果你住在绝对的中心区，周末清晨可能听到市政厅广场清洁或市集搭建的些许声响。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开里博维莱好些天了，但手指仿佛还能捻到葡萄叶上那层细密的白霜，耳边似乎还回响着品酒时，酒杯轻轻相碰那一下清脆的“叮”。这个地方教给我的，是一种“层叠”的生活哲学。它不是一张扁平的明信片，而是一本可以纵向阅读的书：第一层是当下舌尖的甜蜜与芬芳，第二层是眼前这些色彩斑斓、充满了人间烟火气的房屋与街道，第三层则是需要你抬头仰望、甚至付出汗水攀登才能触及的、那些沉默的城堡与历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求即时、扁平、快速消费的时代，里博维莱依然固执地保持着它的垂直维度。它邀请你不仅仅做一个旁观者，更做一个参与者——用脚去丈量从葡萄园到城堡废墟的海拔落差，用心去理解从一杯酒中尝到的风土与年份。它让你明白，真正的深度，不在于看了多少景点，而在于你是否允许自己沉浸在一种完整的、有层次的氛围里。在这里，历史不是锁在玻璃柜中的古董，而是你徒步时脚下的石头，是酒农谈起祖父时眼中的光，是节日里人们依然穿戴的传统服饰。所以，如果你厌倦了打卡，渴望一场能调动所有感官、并能沉淀进记忆深处的旅行，那么，请来里博维莱。让这座音乐家之城，为你奏响一曲关于时间、土地与欢愉的复杂而美妙的乐章。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dinan-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dinan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conques" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院与小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fontenay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丰特莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fontenay Abbey</p>
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
