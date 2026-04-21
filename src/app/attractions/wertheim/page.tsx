import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦尔特海姆 Wertheim｜美因河与陶伯河交汇的童话玻璃之城 - 最佳欧洲景点',
  description: '走出韦尔特海姆火车站，你首先会怀疑导航是不是错了。眼前是德国任何一个城镇都有的普通街区和超市，那条传说中的、梦幻般的“玻璃之城”在哪里？别急，跟着“Altstadt”的棕色路牌往前走。大约十分钟后，在一个不经意的转角，世界骤然沉降与展开——脚下是缓缓下坡的、被岁月磨得温润的石板路，视线尽头，一片由巧...',
}

export default function WertheimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '韦尔特海姆', href: '/destinations/germany' },
            { label: '韦尔特海姆（美因河与陶伯河交汇的玻璃之城）', href: '/attractions/wertheim' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦尔特海姆（美因河与陶伯河交汇的玻璃之城）・Wertheim・德国・韦尔特海姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走出韦尔特海姆火车站，你首先会怀疑导航是不是错了。眼前是德国任何一个城镇都有的普通街区和超市，那条传说中的、梦幻般的“玻璃之城”在哪里？别急，跟着“Altstadt”的棕色路牌往前走。大约十分钟后，在一个不经意的转角，世界骤然沉降与展开——脚下是缓缓下坡的、被岁月磨得温润的石板路，视线尽头，一片由巧克力棕色、奶油黄和砖红色木筋墙组成的尖顶屋群，像从童话绘本里直接倾倒出来，层层叠叠地簇拥在墨绿色的山丘脚下。而山丘之巅，一座城堡废墟的轮廓锋利地切割着天空。就在这一刻，你知道，你到了。
空气的味道在这里变了。刚刚还弥漫着现代交通的微尘，此刻却清冽起来，混合着从美因河（Main）与陶伯河（Tauber）交汇处飘来的、略带腥甜的水汽，以及从那些古老木头缝隙里渗出来的、干燥而安宁的气息。耳朵捕捉到的声音也换了频道：咖啡馆外座的低声谈笑、石板路上行李箱轮子发出的独特咕噜声、某扇橱窗里风铃的清脆撞击，以及远处若有似无的、水流永恒的嗡鸣。这不是一个被圈养的“景点”，这就是韦尔特海姆人的日常生活剧场。主妇在古老的喷泉边驻足聊天，面包房的香气在窄巷里霸道地穿行，书店老板把新书摆到门外，一只肥猫在洒满阳光的窗台上睡得肆无忌惮。
而当你定睛细看，便会发现这座城市最迷人的“瞳孔”——玻璃。它无处不在，却又巧妙地融入背景。它不是冰冷橱窗后的陈列品，而是生活的光芒。每家每户的窗台上，都摆放着或晶莹剔透、或色彩斑斓的玻璃花瓶、摆件。咖啡馆的吊灯是吹制玻璃的，餐厅的酒杯厚重而富有质感，就连街角的路灯罩，也泛着手工玻璃特有的、不均匀的流光。最动人的是那些工坊的橱窗，里面不是成品，而是正在工作的匠人。你可以看到通红的玻璃液在铁管顶端像有生命的蜂蜜般流转，匠人鼓起腮帮子，一个呼吸之间，无形的空气被赋予形态，化作天鹅、葡萄或一颗纯粹的水滴。那种炽热与专注，仿佛让整个街道的时间流速都变慢了。
这就是韦尔特海姆的核心魅力：它是一场空间与时间的折叠。从现代车站到中世纪老城，是空间的折叠；从坚硬冷峻的城堡废墟到温柔璀璨的玻璃艺术，是时间的折叠。它告诉你，历史不全是沉重的石头，也可以是光、是色彩、是吹一口气就能诞生的奇迹。它安坐在两河交汇的温柔臂弯里，不慌不忙，一边守护着山巅的古老记忆，一边在掌心呵护着易碎而永恒的美丽。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`走出韦尔特海姆火车站，你首先会怀疑导航是不是错了。眼前是德国任何一个城镇都有的普通街区和超市，那条传说中的、梦幻般的“玻璃之城”在哪里？别急，跟着“Altstadt”的棕色路牌往前走。大约十分钟后，在一个不经意的转角，世界骤然沉降与展开——脚下是缓缓下坡的、被岁月磨得温润的石板路，视线尽头，一片由巧克力棕色、奶油黄和砖红色木筋墙组成的尖顶屋群，像从童话绘本里直接倾倒出来，层层叠叠地簇拥在墨绿色的山丘脚下。而山丘之巅，一座城堡废墟的轮廓锋利地切割着天空。就在这一刻，你知道，你到了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气的味道在这里变了。刚刚还弥漫着现代交通的微尘，此刻却清冽起来，混合着从美因河（Main）与陶伯河（Tauber）交汇处飘来的、略带腥甜的水汽，以及从那些古老木头缝隙里渗出来的、干燥而安宁的气息。耳朵捕捉到的声音也换了频道：咖啡馆外座的低声谈笑、石板路上行李箱轮子发出的独特咕噜声、某扇橱窗里风铃的清脆撞击，以及远处若有似无的、水流永恒的嗡鸣。这不是一个被圈养的“景点”，这就是韦尔特海姆人的日常生活剧场。主妇在古老的喷泉边驻足聊天，面包房的香气在窄巷里霸道地穿行，书店老板把新书摆到门外，一只肥猫在洒满阳光的窗台上睡得肆无忌惮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你定睛细看，便会发现这座城市最迷人的“瞳孔”——玻璃。它无处不在，却又巧妙地融入背景。它不是冰冷橱窗后的陈列品，而是生活的光芒。每家每户的窗台上，都摆放着或晶莹剔透、或色彩斑斓的玻璃花瓶、摆件。咖啡馆的吊灯是吹制玻璃的，餐厅的酒杯厚重而富有质感，就连街角的路灯罩，也泛着手工玻璃特有的、不均匀的流光。最动人的是那些工坊的橱窗，里面不是成品，而是正在工作的匠人。你可以看到通红的玻璃液在铁管顶端像有生命的蜂蜜般流转，匠人鼓起腮帮子，一个呼吸之间，无形的空气被赋予形态，化作天鹅、葡萄或一颗纯粹的水滴。那种炽热与专注，仿佛让整个街道的时间流速都变慢了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是韦尔特海姆的核心魅力：它是一场空间与时间的折叠。从现代车站到中世纪老城，是空间的折叠；从坚硬冷峻的城堡废墟到温柔璀璨的玻璃艺术，是时间的折叠。它告诉你，历史不全是沉重的石头，也可以是光、是色彩、是吹一口气就能诞生的奇迹。它安坐在两河交汇的温柔臂弯里，不慌不忙，一边守护着山巅的古老记忆，一边在掌心呵护着易碎而永恒的美丽。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦尔特海姆（美因河与陶伯河交汇的玻璃之城）`} />
                <InfoRow label="英文名称" value={`Wertheim`} />
                <InfoRow label="正式名称" value={`Wertheim`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`韦尔特海姆`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在两条河流庇护与滋养下，从中世纪伯爵领地演变为世界闻名的玻璃艺术中心的命运交织之城。`} />
                <InfoRow label="建筑特色" value={`山顶城堡的雄浑遗迹与山下河谷中由无数彩色半木结构房屋组成的、如积木般精巧的老城形成戏剧性的高低对话。`} />
                <InfoRow label="建筑风格" value={`以德国典型的法郎克尼亚半木结构（Fachwerk）建筑为主体，混杂了从中世纪哥特式到文艺复兴乃至巴洛克的丰富细节。`} />
                <InfoRow label="文化价值" value={`这里不仅是“玻璃之城”，更是活着的工匠精神博物馆，将一项璀璨而脆弱的手艺化为日常生活的诗意与地域经济的脉搏。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区及公共区域全天开放。韦尔特哈姆城堡遗址（Burg Wertheim）的城墙和塔楼通常从日出开放至日落，内部庭院可自由进入，但主塔楼（Bergfried）的开放时间可能随季节调整，一般为每年四月至十月的周二至周日上午10点至下午5点。玻璃博物馆（Glasmuseum）的常规开放时间为周二至周日上午10点至下午5点。所有室内景点在圣诞节、元旦等主要节假日可能关闭或缩短开放时间，建议行前在官网核实。`} />
              <InfoRow label="门票价格" value={`进入韦尔特海姆老城区和城堡遗址的外部区域完全免费。攀爬城堡主塔楼（Bergfried）通常需要支付少量费用，约3-4欧元，学生和儿童有优惠。玻璃博物馆（Glasmuseum）门票约5欧元，家庭票有折扣。镇上许多玻璃工坊（Glasbläserei）的参观和演示也是免费的，但鼓励游客在附属商店消费以支持手工艺人。`} />
              <InfoRow label="地址" value={`Marktplatz 1, 97877 Wertheim, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场（FRA）出发最为便捷。在机场火车站（Fernbahnhof）乘坐区域快车（RE）或区域列车（RB）前往维尔茨堡（Würzburg）方向，在韦尔特海姆站（Bahnhof Wertheim）下车，全程约1小时20分钟，车次频繁。从火车站出来，沿着清晰的“Altstadt”（老城）指示牌步行，穿过现代的城区，大约15-20分钟即可漫步到达迷人的老城区中心。自驾的话，从法兰克福沿A3高速公路向东，在66号出口（Wertheim/Lengfurt）驶出，跟随导航进入小镇，老城区周边有多个收费停车场（如Parkhaus am Mainufer）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦尔特海姆的故事，始于水，也兴于水。早在公元前，凯尔特人就在美因河与陶伯河交汇的这片战略要地上定居。但真正让它在历史上留下名字的，是韦尔特海姆伯爵家族。大约在12世纪初，伯爵们开始在陶伯河上方陡峭的山脊上建造他们的城堡。为什么选在这么难爬的地方？很简单，为了防守。在那个群雄割据的年代，俯瞰两条重要水道交汇点的制高点，意味着财富、权力和生存的保障。最初的城堡是简陋的木石结构，但它就像一个坚硬的种子，埋下了这个小镇命运的根系。伯爵们凭借地利，向河上往来的商船征收通行费，财富滚滚而来，山脚下的定居点也逐渐繁荣，获得了城市权。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡与小镇，构成了一种奇妙的共生关系。山顶是威严与防御，山下是市井与生计。这种关系在13到16世纪的鼎盛时期达到顶峰。韦尔特海姆成为了重要的贸易站，木材、葡萄酒、货物在这里集散。我们今天看到的那些美得令人心醉的半木结构房屋，很多就建于这个富裕的时期。商人和行会会员竞相建造华丽的房屋，外墙上的雕刻讲述了圣经故事或行业象征，每一栋都是一个家族荣耀的宣言。当时的韦尔特海姆，城墙坚固，市场活跃，是一座充满自信的中世纪小镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运给了它沉重一击。1634年，正值残酷的三十年战争期间，效忠于神圣罗马帝国皇帝的军队，为了防止城堡被敌军利用，竟然自己点燃了炸药，将这座家族经营了数百年的宏伟堡垒炸成了一片废墟。你可以想象那声巨响，和随之而来的、长达几个世纪的静默。伯爵家族此后迁居他处，山顶只剩下断壁残垣，像一个被遗弃的王冠，日渐被荒草和藤蔓吞噬。战争、瘟疫和经济衰退接踵而至，韦尔特海姆沉睡了，从一方诸侯的舞台，退居为一个安静的区域小镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在19世纪，而且源于一项看似毫不相关的技艺——玻璃制作。其实，韦尔特海姆所在的施佩萨特地区，森林茂密，石英砂资源丰富，自古就有制作玻璃的传统。但工业革命带来了技术和需求的变化。19世纪中叶，随着对实验室玻璃器皿、药用玻璃瓶需求的激增，一些有远见的韦尔特海姆商人开始投资建立玻璃工厂。他们生产的耐热“耶拿玻璃”闻名遐迩。更重要的是，这里发展出了高超的玻璃吹制和切割工艺。二战结束后，当大规模工业化生产席卷全球时，韦尔特海姆的玻璃匠人却选择了一条不同的路：他们转向了艺术玻璃和高端生活玻璃用品。小巧的家族工坊取代了大型工厂，匠人们用双手和创意，将融化的硅砂变成独一无二的艺术品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，“玻璃之城”的名声不胫而走。那些在战争中幸存下来的、色彩斑斓的老房子，恰好成为了展示这些璀璨玻璃制品的完美舞台。古老的躯壳里，注入了全新的、闪亮的灵魂。废墟城堡在20世纪得到了保护和部分修缮，作为历史纪念碑和俯瞰全景的绝佳地点被重新发现。今天，当游客攀爬古堡时，他们不仅在看历史，也在眺望一个社区如何将创伤转化为美丽，将古老的庇护所与现代的创造力完美融合的生动图景。韦尔特海姆不再需要城堡的武力来守护，它用全世界都能看见的、透明的光芒，为自己赢得了新的生命与尊严。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受韦尔特海姆的日夜双重魅力，建议安排一整天时间。最佳抵达时间是清晨九点前，这时旅游团大巴尚未抵达，老城刚刚苏醒，光线柔和，是拍照和沉浸式漫步的黄金时段。整体游览节奏宜慢不宜快，遵循“由远及近，由高至低”的原则：先从外部整体把握它的地理格局，再深入街巷感受细节。上午精力充沛时攀登城堡山，中午在老城广场享受悠闲午餐，下午细细品味玻璃工坊和博物馆，傍晚则在河畔等待日落华灯。这样的安排能让你同时领略到它的历史厚重感与生活烟火气，以及从日到夜光影变幻下的不同面孔。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末下午前往，尤其是天气晴好的周末，那时老城中心可能会变得相当拥挤。攀登城堡山的路径是修缮良好的步行道，但部分路段坡度较陡且由碎石铺成，务必穿一双舒适防滑的鞋子。参观玻璃工坊时，如果遇到匠人正在处理高温玻璃液，请保持安静并遵从指示，不要随意触碰工作台上的任何物品。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站步行至老城的途中，在跨越陶伯河的古桥（Tauberbrücke）上第一次停下，回头眺望城堡废墟雄踞山巅、老城房屋如瀑布般倾泻至河边的全景画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让双脚带领你迷失在迷宫般的“Gasse”（小巷）里，刻意避开主街，去发现那些外墙歪斜得仿佛喝醉了酒、却被鲜花装点得生机勃勃的百年半木结构民居。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在集市广场（Marktplatz）的“Rathaus”（市政厅）台阶上坐一会儿，观察彩色喷泉（“Kilianskirche”教堂前的四福音使者喷泉）水流潺潺，看本地人如何在这个被历史建筑环抱的露天客厅里相遇、寒暄、购物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进广场旁任何一家面包房或肉铺，买一个夹着本地奶酪和洋葱的“Wertheimer”特色面包，坐在河边长椅上，就着清风与河鸥的鸣叫完成一顿最接地气的午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气沿着标记清晰的“Burgweg”小径开始攀登，穿过宁静的居民区和小片森林，在微微气喘中抵达城堡废墟的脚下，触摸那些被火药熏黑又被风雨洗刷了四百年的巨石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进一家正在工作的玻璃工坊（如Glasbläserei am Rathaus），屏住呼吸看匠人如何将一团橘红色的炽热“岩浆”在几分钟内变成一只栩栩如生的玻璃小鸟，感受那份专注带来的、近乎神圣的安静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在美因河畔的步行道上从黄昏漫步至夜幕降临，看对岸现代建筑的灯火倒映在漆黑如绸的河面上，而身后老城的窗户里透出温暖的、家家户户的灯光，与橱窗中艺术玻璃的冷光交相辉映。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一家拥有古老拱顶地窖的餐厅（如“Ratskeller”）享用晚餐，在烛光中点一份用本地葡萄酒烹饪的河鱼，让味蕾也沉浸在这片土地的水文故事里。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`陶伯桥北端仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，以陶伯河为前景，将层层叠叠的老城屋顶和山顶城堡废墟一同纳入镜头，捕捉光影在木筋墙立面产生的戏剧性明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`集市广场对角构图`}</h4>
                  <p className="text-sm text-gray-700">{`清晨店铺未开时，站在广场一角，利用石板路的线条引导视线至色彩缤纷的市政厅和其后高耸的教堂尖塔，等待一两个行人或骑自行车的人进入画面增加生气。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡主塔楼（Bergfried）顶端`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，将相机或手机镜头从垛口伸出，垂直向下拍摄美因河与陶伯河清晰的“Y”字形交汇口，以及河流环抱中老城的完整半岛形状。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`玻璃工坊内部特写`}</h4>
                  <p className="text-sm text-gray-700">{`征得匠人同意后，使用大光圈镜头，聚焦于匠人手中旋转的铁管顶端那团晶莹剔透、处于可塑状态的玻璃液，将周围昏暗的工坊环境虚化成充满神秘感的光斑。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`美因河对岸长焦压缩`}</h4>
                  <p className="text-sm text-gray-700">{`日落后的蓝调时刻（Blue Hour），在美因河北岸的“Mainufer”步道，用长焦镜头压缩空间，拍摄老城灯火通明的轮廓倒映在平静河面上的对称画面，对焦点放在倒影上更具意境。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在玻璃工坊或博物馆内拍摄，尽量关闭闪光灯，不仅是为了尊重匠人工作，也是为了捕捉环境光和玻璃本身折射出的自然光泽。拍摄私人住宅或橱窗时请保持礼貌距离，许多居民以自家美丽的窗户为荣，但未经允许请勿将镜头过于贴近室内。使用偏振镜（CPL）可以有效地减少玻璃橱窗的反光，让你拍出其中艺术品的清晰细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城边缘一家由家族经营了三代的小旅馆“Zum Löwen”，房间小巧整洁，早餐间的窗户正对着一片隐秘的内部庭院，老板会热情地为你手绘一张他私藏的老城散步地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在陶伯河畔由古老磨坊改造的精品酒店“Alte Mühle”，流水声是天然的安眠曲，部分房间保留了原始的木梁结构和石墙，现代设计感的家具与历史元素碰撞出奇妙的舒适感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城堡山半山腰的“Burghotel”，不仅拥有俯瞰整个河谷和老城屋顶的无敌视野，其餐厅更以创新法郎克尼亚菜著称，在星空露台品一杯本地雷司令是结束一天的完美方式。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`玻璃艺术主题`}</h4>
                  <p className="text-sm text-purple-800">{`选择市中心一家设计型公寓，房东本人就是玻璃艺术家，公寓里点缀着他的作品，从灯具到水杯都是独一无二的手工玻璃，住进去就像住进了一个温暖的玻璃梦境。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦尔特海姆治安极好，但老城区街道狭窄蜿蜒，如果自驾并预订了城内的住宿，务必提前联系确认停车位置，许多酒店只提供有限的付费车位或需要将车停在较远的公共停车场。旺季（春夏秋三季的周末及圣诞市场期间）住宿非常紧俏，至少提前一个月预订是明智之举。住在老城内虽然氛围绝佳，但深夜和清晨可能会听到教堂钟声和石板路上的脚步声，对声音敏感者可准备耳塞或选择河对岸稍远但更安静的住宿。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦尔特海姆时，我背包里多了一个小小的、用层层软纸包裹的玻璃苹果。它是在一家工坊里，我看着一位老师傅吹制出来的。通体清澈，只有顶端一抹晕开的红色，像极了晨曦染红城堡塔尖的那一刻。它很轻，却又异常沉重，因为它装下了一整座城市的记忆与呼吸——河水的流动、石头的温度、木头的香气，以及那一口气吹入的、人类对创造美的永恒渴望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求宏大、快速与流量的时代，韦尔特海姆是一种温和而坚定的反抗。它不试图用规模震撼你，而是用密度打动你。在方圆一公里内，它浓缩了自然的天赋（两河交汇）、历史的沧桑（城堡废墟）、建筑的精华（半木结构老城）和活着的匠艺（玻璃工坊）。它告诉我们，深度不是去更多的地方，而是在一个地方看到更多的层次。在这里，你能触摸到历史并非直线前进，而是像一个螺旋，从山顶的防御堡垒，下降到河畔的贸易集市，最终凝聚在匠人手中那一团可塑的光明里，完成了一种从武力到美、从封闭到透明的精神升华。每一位热爱深度游的旅人都该来此，不只是为了看风景，更是为了校准内心的时间感，学习如何守护自己的“玻璃”——那份易碎却闪耀的、对生活本真的热爱与创造力。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/goslar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈斯拉尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Goslar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/weimar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    魏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">魏玛老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Weimar Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/quedlinburg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奎德林堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Quedlinburg Old Town</p>
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
