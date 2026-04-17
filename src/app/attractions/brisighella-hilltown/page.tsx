import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布里西盖拉 Brisighella｜中世纪山城与时光停滞的慢生活样本 - 最佳欧洲景点',
  description: '你第一眼看到布里西盖拉时，会误以为自己掉进了一本中世纪手抄本的插图里。三座突兀的、仿佛被巨人随意放置的石灰岩山峰，像三颗古老的獠牙，咬住托斯卡纳-罗马涅边界这片柔和的天空。山峰顶上各自镇守着不同的建筑——一座粗粝的城堡，一座细长的钟楼，一座小巧的教堂。而山下，一片蜜糖色的屋顶顺着山势温柔地铺开，在午...',
}

export default function BrisighellaHilltownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布里西盖拉（驴子巷与三座山峰）', href: '/attractions/brisighella-hilltown' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布里西盖拉（驴子巷与三座山峰）・Brisighella・意大利・布里西盖拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到布里西盖拉时，会误以为自己掉进了一本中世纪手抄本的插图里。三座突兀的、仿佛被巨人随意放置的石灰岩山峰，像三颗古老的獠牙，咬住托斯卡纳-罗马涅边界这片柔和的天空。山峰顶上各自镇守着不同的建筑——一座粗粝的城堡，一座细长的钟楼，一座小巧的教堂。而山下，一片蜜糖色的屋顶顺着山势温柔地铺开，在午后的阳光下蒸腾出一种慵懒的、带着橄榄树与干草气息的热气。
但真正让你心脏漏跳一拍的，是当你拐进那条著名的“维娅·德尔·博尔戈”，也就是“驴子巷”。这条巷子根本不是普通的路，它是一条被嵌在山体里的神奇走廊。一边是开凿于岩石中的房屋底层，另一边则是一道长长的、拥有不规则拱门的开放式廊道。阳光被切割成一块块光斑，斜斜地打在已经被无数脚步磨得温润发亮的石板路上。空气是微凉的，带着岩石特有的、潮湿的矿物质味道，间或飘来某户人家厨房里炖煮肉酱的浓郁香气。你仿佛能听到几个世纪前，驴队驮着货物和盐块，蹄声嘚嘚地穿过这条遮风避雨的通道的回音。这里不是为游客准备的布景，它是小镇居民回家的必经之路，你会在廊下遇到拎着菜篮慢悠悠回家的老奶奶，她的问候声在拱廊下产生温柔的回响。
这座城的节奏，是由教堂的钟声、广场咖啡馆的杯碟轻碰声，以及傍晚时分从山间飘来的微风共同谱写的。它的核心魅力，在于那种惊人的“完整性”。它不是孤零零的一座城堡或一条古街，而是一整个有机的生命系统——防御、居住、信仰、贸易，所有功能都依附着那三座山峰生长出来，并且至今仍在运转。你在这里感受到的不是历史的断层，而是一种绵延不绝的、被精心呵护的日常史诗。当你在黄昏时分，看着最后一道金光为曼弗雷迪城堡的塔楼镶上金边，而山下灯火次第亮起，炊烟袅袅，你会明白，这里保存的不是石头，而是一种关于“家园”的古老理想。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到布里西盖拉时，会误以为自己掉进了一本中世纪手抄本的插图里。三座突兀的、仿佛被巨人随意放置的石灰岩山峰，像三颗古老的獠牙，咬住托斯卡纳-罗马涅边界这片柔和的天空。山峰顶上各自镇守着不同的建筑——一座粗粝的城堡，一座细长的钟楼，一座小巧的教堂。而山下，一片蜜糖色的屋顶顺着山势温柔地铺开，在午后的阳光下蒸腾出一种慵懒的、带着橄榄树与干草气息的热气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让你心脏漏跳一拍的，是当你拐进那条著名的“维娅·德尔·博尔戈”，也就是“驴子巷”。这条巷子根本不是普通的路，它是一条被嵌在山体里的神奇走廊。一边是开凿于岩石中的房屋底层，另一边则是一道长长的、拥有不规则拱门的开放式廊道。阳光被切割成一块块光斑，斜斜地打在已经被无数脚步磨得温润发亮的石板路上。空气是微凉的，带着岩石特有的、潮湿的矿物质味道，间或飘来某户人家厨房里炖煮肉酱的浓郁香气。你仿佛能听到几个世纪前，驴队驮着货物和盐块，蹄声嘚嘚地穿过这条遮风避雨的通道的回音。这里不是为游客准备的布景，它是小镇居民回家的必经之路，你会在廊下遇到拎着菜篮慢悠悠回家的老奶奶，她的问候声在拱廊下产生温柔的回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城的节奏，是由教堂的钟声、广场咖啡馆的杯碟轻碰声，以及傍晚时分从山间飘来的微风共同谱写的。它的核心魅力，在于那种惊人的“完整性”。它不是孤零零的一座城堡或一条古街，而是一整个有机的生命系统——防御、居住、信仰、贸易，所有功能都依附着那三座山峰生长出来，并且至今仍在运转。你在这里感受到的不是历史的断层，而是一种绵延不绝的、被精心呵护的日常史诗。当你在黄昏时分，看着最后一道金光为曼弗雷迪城堡的塔楼镶上金边，而山下灯火次第亮起，炊烟袅袅，你会明白，这里保存的不是石头，而是一种关于“家园”的古老理想。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布里西盖拉（驴子巷与三座山峰）`} />
                <InfoRow label="英文名称" value={`Brisighella`} />
                <InfoRow label="正式名称" value={`Brisighella`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`布里西盖拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座完美保存了中世纪格局与生活气息的战略要塞山城，因其独特的三峰地貌与“驴子巷”而成为意大利乃至欧洲山城建筑的杰出范本。`} />
                <InfoRow label="建筑特色" value={`城市结构围绕着三座石灰岩山峰上的防御工事（城堡、钟楼、蒙特里科小教堂）层层展开，并以那条被双层拱廊覆盖、依山凿建的“驴子巷”为核心脉络。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪意大利山城风格，融合了罗马式、哥特式及后续的文艺复兴与巴洛克装饰元素，建筑材料以本地特有的浅黄色石灰岩“斯蓬加石”为主。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑博物馆，更是一个仍在呼吸的活态社区，是理解亚平宁半岛北部历史、农业（橄榄油与葡萄酒）传统以及慢哲学生活的绝佳窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天24小时开放。主要历史景点如曼弗雷迪城堡、钟楼及市立博物馆开放时间通常为夏季（4月-9月）9:30-12:30，15:00-19:00；冬季（10月-3月）9:30-12:30，14:30-17:30。每周一、12月25日、1月1日及部分公共假日闭馆。具体时间可能微调，建议行前查看官网。`} />
              <InfoRow label="门票价格" value={`进入布里西盖拉古镇免费。参观曼弗雷迪城堡门票约5欧元，含钟楼的联票约7欧元。65岁以上老人、12-18岁青少年及学生享有优惠票价约4欧元。12岁以下儿童、当地居民及残疾人士免费。部分宗教节日或文化活动期间可能有特别开放及票价。`} />
              <InfoRow label="地址" value={`Piazza Carducci, 1, 48013 Brisighella RA, Italy`} />
              <InfoRow label="交通方式" value={`从最近的国际机场博洛尼亚古列尔莫·马可尼机场出发，最便捷的方式是搭乘火车。先乘坐机场巴士“Aerobus”至博洛尼亚中央火车站，车程约20分钟。在火车站购买前往法恩扎的区间火车票，车程约50分钟至1小时，班次频繁，约半小时一班。抵达法恩扎后，在车站前的公交站转乘124或125路当地公交车，约20分钟即可抵达布里西盖拉镇中心。建议购买艾米利亚-罗马涅大区的交通通票，经济方便。自驾则沿A14/E45高速公路，在法恩扎出口驶出，沿SP302省道约15分钟可达，古镇外有多个收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布里西盖拉的故事，始于那三座无法被忽视的山峰。早在罗马时期，这里就因为丰富的石膏矿和石灰岩矿而被开采。但真正让它登上历史舞台的，是公元十三世纪末。当时，这片土地处于教皇国与周边强大家族势力拉扯的前线。1290年，一位名叫马吉纳尔多·马吉纳迪的贵族，看中了这三座易守难攻的山峰，在其中最高的那座上，开始修建一座坚固的城堡。这不仅仅是为了居住，更是一个强烈的权力宣言，旨在控制从亚得里亚海通往托斯卡纳的盐路和商道。城堡最初的名字就叫“城堡之石”，充满了硝烟味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，布里西盖拉的命运就像亚平宁半岛的政治地图一样错综复杂。它先后被强大的曼弗雷迪家族掌控，这个家族的名字最终与城堡永久相连。然后又落入教皇国的代理人手中。最有趣的篇章发生在十六世纪，当时统领这里的教皇国将领，为了加强防御并方便士兵和辎重在恶劣天气下通行，下令在山体中开凿一条有顶棚的通道。这就是“驴子巷”的雏形。它最初完全是为了军事和实用目的，谁能想到，这条朴素的廊巷，后来会成为整个城镇最具诗意的灵魂所在。随着战事平息，这条巷子被普通民居和商铺利用起来，二楼住人，一楼做店面或仓库，形成了我们今天看到的独一无二的“双层街道”奇观。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪意大利统一运动时期，布里西盖拉也卷入了浪潮。它的城堡失去了军事价值，一度面临荒废。但小镇的生命力转向了和平的领域。富含矿物质的泉水被发现，让这里成了一个小有名气的温泉疗养地。而周边肥沃的土地，则持续出产着顶级的橄榄油和被称为“桑娇维塞·迪·罗马涅”的葡萄酒。小镇的居民没有抛弃他们的山顶遗迹，而是将它们融入日常生活。钟楼依旧为全镇报时，城堡成了俯瞰家园的观景台，蒙特里科小教堂则是举行婚礼和纪念仪式的宁静场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`第二次世界大战的炮火也曾波及这个宁静的山城，但它奇迹般地没有遭受毁灭性破坏。战后的意大利忙于经济重建，许多类似的古镇在现代化浪潮中被改造得面目全非。但布里西盖拉或许是因其相对偏僻的位置，或许是因居民强烈的归属感，它像被琥珀封印一般，保持了原貌。上世纪六七十年代，当人们重新认识到历史遗产的价值时，布里西盖拉几乎是以一个“完整个体”的姿态惊艳了世界。它不是重建的“仿古”景点，它的每一块石头、每一道砖缝，都记录着真实的、层叠的岁月。从战略要塞到农业中心，再到活着的文化遗产，布里西盖拉的故事告诉我们，最坚韧的防御工事，不是高墙深壕，而是一个社区对自身根源的认同与守护。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受布里西盖拉的灵魂，你需要预留整整一天时间，并准备好一双舒适的步行鞋。最佳的抵达时间是清晨，大约九点之前，这时游客尚未涌入，阳光温柔，小镇正从睡梦中自然苏醒。建议的节奏是“先高后低，由外及内”：首先征服三座山峰，从制高点建立空间感，俯瞰全镇脉络；然后深入“驴子巷”和主广场，沉浸在中世纪的街巷氛围里；最后在下午探访博物馆和特色小店，品尝本地美味。这样的安排能让你在体力最充沛时完成登山，在阳光最炙热时躲进凉爽的廊巷，在黄昏最浪漫时享受宁静的俯瞰全景。整体游览时间（不含午餐休息）大约需要5-6小时，请务必放慢脚步，允许自己迷路和在长椅上发呆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周日上午游览，因为本地居民会举行集市，主广场和部分街道会比较拥挤，虽然能体验当地生活，但会影响拍照和宁静感。山城的许多小路是原始的鹅卵石路面，坡度较大，务必穿着防滑舒适的平底鞋，绝对不要穿高跟鞋。小镇居民非常友善，但拍摄私人住宅或居民时请先微笑示意，获得默许，尊重他们的隐私。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古镇西侧的但丁广场出发，沿着缓坡向上，先去探访三峰中最高的曼弗雷迪城堡，在空旷的城墙上独享360度的全景画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下来，不要原路返回，而是沿着山脊小径走向第二座山峰顶端的“钟楼”，亲手敲响那口古老的大钟，声波会像涟漪般荡漾在整个山谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着标志清晰的步道轻松下行至第三峰，拜访那座白色小巧的蒙特里科圣母避难所教堂，在它的静谧庭院里歇脚，感受信仰为这座要塞带来的温柔一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`此时阳光正烈，径直钻进那条神奇凉爽的“驴子巷”，从高处入口慢慢往下走，观察光线在拱廊间移动，触摸两侧岩石墙壁上岁月的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在巷子出口附近找一家家庭经营的小餐馆，点一份手工“斯特罗扎普雷蒂”宽面配野猪肉酱，佐以一杯本地产的桑娇维塞红葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后去拜访位于古老方济各会修道院内的市立考古与艺术博物馆，那里收藏着从史前到近代的本地文物，是理解这片土地深层记忆的钥匙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`逛逛主广场周围那些售卖当地特产的店铺，买一小瓶上好的“布里西盖拉”DOP特级初榨橄榄油，或一块用古老石膏模具制作的“巴尔多”石膏巧克力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一小时，再次回到城堡山脚下，但这次选择另一条小径，在橄榄树林中找到一张长椅，看着夕阳将三座山峰和整个古镇染成灿烂的金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`驴子巷中段拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光以较低角度射入巷子，在石板路上投下强烈的明暗交错的光影线条，站在巷内望向出口的拱门，能拍出极具纵深感和戏剧性的隧道效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`曼弗雷迪城堡西北角瞭望台`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右，顺光条件下，可以在此拍摄到钟楼和蒙特里科教堂分别矗立于另两座山峰的经典“三峰同框”全景，将古镇的屋顶作为前景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`盐路拱门下的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`位于古镇入口处的古老盐路石拱门下，利用拱门作为天然画框，拍摄其后方层叠而上的山城房屋，最佳时间是午后，框内景物被阳光照亮。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主广场喷泉与钟楼倒影`}</h4>
                  <p className="text-sm text-gray-700">{`如果前一晚下过雨，清晨前往主广场，在卡武尔广场的喷泉附近寻找小水洼，可以蹲下拍摄钟楼及其周围建筑在水中的完美倒影，画面宁静而对称。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从SP302省道拐弯处的全景眺望点`}</h4>
                  <p className="text-sm text-gray-700">{`自驾离开时，在驶往法恩扎方向的省道上有一个明显的拐弯处，停车回望，可以拍到布里西盖拉三峰耸立于广阔平原和葡萄园之上的壮丽远景，适合日落时分。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`山城的光影变化极快，尤其是在狭窄的街巷中，黄金拍摄时间可能只有短短十几分钟，建议提前踩点耐心等待。无人机飞行在意大利历史古镇上空受到严格限制，布里西盖拉全域属于禁飞区，请不要尝试，以免招致高额罚款。室内或教堂内拍摄通常允许，但请务必关闭闪光灯和快门声音，保持肃静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于古镇中心几步之遥的“阿尔博戈之家”家庭旅馆，由一栋十七世纪的石屋改造，房间简朴干净，老板娘会为你准备丰盛的意式早餐，并热情分享只有本地人才知道的散步小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在“三峰农庄”，一座坐落在古镇旁橄榄园中的复古农舍，完全独立，拥有自己的小厨房和露台，夜晚只有虫鸣和星空，清晨可以跟着房东一起去采摘新鲜的果蔬。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`“拉罗卡精品酒店”由一座十九世纪的贵族别墅精心修复而成，位于一个安静的花园中，房间拥有高拱顶和古董家具，水疗中心使用本地石膏和温泉，在屋顶露台享用早餐时可直视三座山峰。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居之选`}</h4>
                  <p className="text-sm text-purple-800">{`距离小镇五分钟车程的乡间“帕拉齐纳度假屋”，被葡萄园环绕，设计极简现代，拥有无边泳池，提供烹饪课程，带你拜访附近的私人酒庄和橄榄油坊，是深度体验乡村宁静的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和初秋（葡萄酒收获季）是旺季，特色住宿非常紧俏，务必提前两个月以上预订。古镇内的住宿可能需要提着行李走一段石板台阶，预订时最好确认酒店是否能提供行李搬运服务。住在镇上能享受绝美的晨昏景色，但夜晚非常安静，娱乐活动少；住在周边农庄则私密性极佳，但需要交通工具进出小镇。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布里西盖拉许久后，闭上眼，脑海里最先浮现的往往不是某个具体的画面，而是一种混合的感官记忆：是驴子巷里那股凉爽的岩石气息，是橄榄油触及舌尖那一瞬的辛辣果香，是黄昏钟声回荡在山谷间的沉沉余韵。这座城教会你的，不是宏大的历史叙事，而是一种关于“尺度”与“时间”的珍贵认知。在这个一切都被加速、被扁平化的时代，它依然固执地保持着垂直的、层叠的、需要你用心去攀登和探索的物理结构。它的时间，是以日影在拱廊上移动的速度，以橄榄树一圈年轮增长的速度来计量的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它之所以必须被列入一生必去的清单，恰恰因为它不是一个抽离现实的“景点”。它是一个依然在从容呼吸的故乡。你会看到阳台上晾晒的床单，闻到面包店飘出的香气，听到广场上老人争论足球的喧哗。这些鲜活的日常，与那些见证了刀光剑影的城堡城墙，和谐地共生在一起。它让你相信，历史不是陈列在玻璃后的遗物，历史可以是一种延续至今的、温暖的生活方式。来这里，你不是为了收集打卡照片，而是为了让自己沉浸在这种“完整的生存模式”中，重新校准被现代生活扰乱的内心节奏。当你沿着山路拾级而上，每一步都踩在数个世纪以来的足迹上时，你会找回一种最原始的踏实感——关于家园，关于守护，关于如何在时间的洪流中，安然地做自己。这，便是布里西盖拉，这个拥有驴子巷和三座山峰的小镇，所能赠与旅人最丰厚的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vicenza-olympic-theater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/volterra-etruscan-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉伊特鲁里亚遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra Etruscan Ruins</p>
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
