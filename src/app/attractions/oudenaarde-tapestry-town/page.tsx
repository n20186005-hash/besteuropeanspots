import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥德瓦尔德 Oudenaarde｜探访挂毯之城的辉煌与静谧 - 最佳欧洲景点',
  description: '说实话，在抵达奥德瓦尔德之前，我对它的想象是模糊的——“挂毯之城”，听起来像一座布满灰尘的博物馆，带着些许沉寂的学究气。但当我从火车站出来，沿着安静的居民区街道，慢慢走向老城中心时，这种预设被彻底打破了。空气中飘散着新鲜面包和咖啡的香气，阳光把沿街联排房屋的砖墙照成温暖的蜜糖色，自行车铃叮当作响，一...',
}

export default function OudenaardeTapestryTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '奥德瓦尔德', href: '/destinations/belgium' },
            { label: '奥德瓦尔德', href: '/attractions/oudenaarde-tapestry-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥德瓦尔德・Oudenaarde・比利时・奥德瓦尔德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在抵达奥德瓦尔德之前，我对它的想象是模糊的——“挂毯之城”，听起来像一座布满灰尘的博物馆，带着些许沉寂的学究气。但当我从火车站出来，沿着安静的居民区街道，慢慢走向老城中心时，这种预设被彻底打破了。空气中飘散着新鲜面包和咖啡的香气，阳光把沿街联排房屋的砖墙照成温暖的蜜糖色，自行车铃叮当作响，一切都浸润在一种比利时小镇特有的、不慌不忙的惬意里。直到一个转弯，斯海尔德河闪着粼粼波光出现在眼前，古老的石桥通向对岸，那一刻，时间仿佛慢了下来。
穿过石桥，宏伟的大广场（Grote Markt）豁然开朗。而你的目光会瞬间被广场中央那座建筑夺走——奥德瓦尔德市政厅。它不像布鲁塞尔市政厅那般庞大威严，却更像一位衣着华美、气质从容的贵族。它的立面不是平坦的，而是充满了尖塔、卷叶饰、小尖塔和数不清的雕像，层层叠叠，精细繁复到令人屏息。当地人称之为“石制的蕾丝”，在午后阳光的斜照下，那些石灰岩的细节投射出深深浅浅的影子，整座建筑仿佛在静静呼吸、低声吟唱着来自16世纪的歌谣。广场周围是色彩柔和的三角山墙房屋，如今大多是咖啡馆和餐馆，人们坐在户外，喝着当地的啤酒，聊天、看报，市政厅就这样自然地伫立在他们日常生活的中央，不是高高在上的纪念碑，而是亲切的老邻居。
真正让这座城市灵魂颤动的，是“挂毯”这项几乎被现代人遗忘的奢华艺术。走进市政厅内部的挂毯博物馆（MOU），你会进入一个由羊毛、丝线和金银线编织的梦境。这里没有普通博物馆的冷清，灯光柔和地打在那些巨幅织物上。你需要凑得很近，才能看清一片树叶里用了多少种绿色的渐变，骑士铠甲上的金属光泽是如何用金线巧妙表现的。最震撼的是，你能触摸到一小块真正的古董挂毯样本（博物馆特意设置的体验区），指尖传来的不是布料的柔软，而是某种厚重、紧密、充满力量的质感。那一刻你会明白，这不仅仅是装饰品，这是中世纪和文艺复兴时期的“顶级视觉叙事”，是流动的壁画，是堪比油画的艺术投资。奥德瓦尔德人用经纬线，编织了整个欧洲王公贵族的野心、神话与信仰。
而当傍晚来临，我建议你沿着斯海尔德河散步。河水静静流淌，倒映着对岸教堂的尖顶和斑斓的云霞。河边步道上满是跑步、遛狗、牵手漫步的居民。你会发现，奥德瓦尔德的魅力正在于此：它完整地保留了两个平行世界。一个是凝固在石头与织物里的、极度精致奢华的辉煌往昔；另一个则是流淌在河水中、咖啡馆露台上、市集里的，鲜活、平静、充满烟火气的当下。这两种韵律在此和谐共鸣，让你在赞叹人类艺术巅峰的同时，也深深羡慕这里生活的从容质地。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在抵达奥德瓦尔德之前，我对它的想象是模糊的——“挂毯之城”，听起来像一座布满灰尘的博物馆，带着些许沉寂的学究气。但当我从火车站出来，沿着安静的居民区街道，慢慢走向老城中心时，这种预设被彻底打破了。空气中飘散着新鲜面包和咖啡的香气，阳光把沿街联排房屋的砖墙照成温暖的蜜糖色，自行车铃叮当作响，一切都浸润在一种比利时小镇特有的、不慌不忙的惬意里。直到一个转弯，斯海尔德河闪着粼粼波光出现在眼前，古老的石桥通向对岸，那一刻，时间仿佛慢了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过石桥，宏伟的大广场（Grote Markt）豁然开朗。而你的目光会瞬间被广场中央那座建筑夺走——奥德瓦尔德市政厅。它不像布鲁塞尔市政厅那般庞大威严，却更像一位衣着华美、气质从容的贵族。它的立面不是平坦的，而是充满了尖塔、卷叶饰、小尖塔和数不清的雕像，层层叠叠，精细繁复到令人屏息。当地人称之为“石制的蕾丝”，在午后阳光的斜照下，那些石灰岩的细节投射出深深浅浅的影子，整座建筑仿佛在静静呼吸、低声吟唱着来自16世纪的歌谣。广场周围是色彩柔和的三角山墙房屋，如今大多是咖啡馆和餐馆，人们坐在户外，喝着当地的啤酒，聊天、看报，市政厅就这样自然地伫立在他们日常生活的中央，不是高高在上的纪念碑，而是亲切的老邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让这座城市灵魂颤动的，是“挂毯”这项几乎被现代人遗忘的奢华艺术。走进市政厅内部的挂毯博物馆（MOU），你会进入一个由羊毛、丝线和金银线编织的梦境。这里没有普通博物馆的冷清，灯光柔和地打在那些巨幅织物上。你需要凑得很近，才能看清一片树叶里用了多少种绿色的渐变，骑士铠甲上的金属光泽是如何用金线巧妙表现的。最震撼的是，你能触摸到一小块真正的古董挂毯样本（博物馆特意设置的体验区），指尖传来的不是布料的柔软，而是某种厚重、紧密、充满力量的质感。那一刻你会明白，这不仅仅是装饰品，这是中世纪和文艺复兴时期的“顶级视觉叙事”，是流动的壁画，是堪比油画的艺术投资。奥德瓦尔德人用经纬线，编织了整个欧洲王公贵族的野心、神话与信仰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当傍晚来临，我建议你沿着斯海尔德河散步。河水静静流淌，倒映着对岸教堂的尖顶和斑斓的云霞。河边步道上满是跑步、遛狗、牵手漫步的居民。你会发现，奥德瓦尔德的魅力正在于此：它完整地保留了两个平行世界。一个是凝固在石头与织物里的、极度精致奢华的辉煌往昔；另一个则是流淌在河水中、咖啡馆露台上、市集里的，鲜活、平静、充满烟火气的当下。这两种韵律在此和谐共鸣，让你在赞叹人类艺术巅峰的同时，也深深羡慕这里生活的从容质地。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥德瓦尔德`} />
                <InfoRow label="英文名称" value={`Oudenaarde`} />
                <InfoRow label="正式名称" value={`Oudenaarde`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`奥德瓦尔德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪晚期至文艺复兴时期西欧最重要的挂毯织造与贸易中心之一，其财富与艺术影响力曾比肩布鲁日和根特。`} />
                <InfoRow label="建筑特色" value={`拥有被誉为“佛兰德斯火焰哥特式巅峰之作”的市政厅，其精雕细琢的塔楼、山墙和大量雕像宛如一座石制珍宝柜。`} />
                <InfoRow label="建筑风格" value={`火焰哥特式为主，融合了部分文艺复兴元素。`} />
                <InfoRow label="文化价值" value={`一座将辉煌的纺织业历史、无与伦比的建筑艺术与舒缓的斯海尔德河畔生活完美凝结的活态历史小镇。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市公共区域全天开放。核心景点市政厅与挂毯博物馆（MOU）开放时间：周二至周日 10:00 - 17:00，周一闭馆（除非是法定假日）。每年1月1日、12月25日闭馆。请注意，博物馆内部展厅可能在中午12:00-13:00有短暂的午休时间，建议出发前在其官网二次确认。广场上的圣瓦勒里斯教堂开放时间较为灵活，通常每日9:00-17:00开放供参观和祈祷。`} />
              <InfoRow label="门票价格" value={`市政厅与挂毯博物馆（MOU）联票：成人12欧元，65岁以上老人及学生10欧元，12-18岁青少年6欧元，12岁以下儿童免费。持有“东佛兰德省博物馆卡”可免费进入。每月第一个周日为“博物馆日”，部分时段可免费参观。仅参观市政厅历史大厅（需导游带领）票价约为8欧元，导游讲解通常为荷兰语和法语，可提前预约英语讲解。`} />
              <InfoRow label="地址" value={`Grote Markt 1, 9700 Oudenaarde, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔国际机场出发：最便捷方式是乘坐火车。在机场火车站乘坐开往根特（Gent）方向的火车（约每小时2-3班），在根特圣彼得斯（Gent-Sint-Pieters）站下车。在根特站换乘前往库特赖（Kortrijk）或 Poperinge 方向的本地火车，在奥德瓦尔德站（Oudenaarde）下车。全程约1小时40分钟。从布鲁塞尔市中心出发：可在布鲁塞尔南站或中央站乘坐直达奥德瓦尔德的火车，车程约1小时10分钟，班次较疏，建议提前查询时刻表。奥德瓦尔德火车站步行至老城大广场约需15-20分钟，沿途风景宁静，也可在站前乘坐本地巴士（如Line 85）前往“Grote Markt”站。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解奥德瓦尔德，你必须先了解一条河——斯海尔德河。在中世纪，这条河是连接法国香槟地区、佛兰德斯和北海的黄金水道，是财富的动脉。大约在11世纪，一个定居点在河畔的渡口兴起，这就是奥德瓦尔德的前身。得益于优越的地理位置，它迅速发展成一个繁荣的市镇，并在12世纪获得了城市特许状，可以设立市场、征收关税，命运的车轮开始加速转动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的腾飞源于一场“柔软的革命”——挂毯织造。13世纪左右，挂毯从保暖的实用品演变为彰显地位的艺术品。奥德瓦尔德的工匠们抓住了这个机会。他们拥有来自英国的上等羊毛，从东方进口的昂贵染料（你能在挂毯上看到的那些历经数百年仍鲜艳的深红、宝蓝，都价值连城），以及登峰造极的技艺。更重要的是，这里形成了一个高度专业化和商业化的产业网络：有负责设计的画家（许多挂毯的图样出自名家之手），有负责纺线、染色的作坊，最后才是织工在巨大的织机上，凭借记忆和技巧，将成千上万根纬线一根根织入经线，完成一幅可能长达数十米的巨作。到15、16世纪，“奥德瓦尔德制造”已成为欧洲顶级奢侈品标签，远销巴黎、伦敦、罗马和马德里，装饰着宫殿和教堂的墙壁，其价值堪比同等面积的油画。城市的财富如河水般汹涌而来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这笔财富最直观的体现，就是你现在看到的这座市政厅。1515年，财大气粗的城市议会决定建造一座配得上城市声望的新市政厅。他们聘请了当时佛兰德斯最著名的建筑家族成员——亨德里克·范·佩德（Hendrik van Pede）来设计。建筑风格选择了当时最时髦、最复杂的“火焰哥特式”，这种风格的特点就是将一切直线都化为跳跃的火焰曲线，让建筑看起来轻盈而富有动感。建造过程本身就是一部史诗，石匠、雕刻家们花了数十年心血，将圣经故事、历史人物、寓言象征，甚至当时市民的形象，一一雕刻在立面上。1535年，当最后一座尖塔完成时，它不仅是市政办公地，更是城市献给自己的王冠，向世界宣告其财富、品味和自信。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但历史的河流总有湍急处。16世纪下半叶，宗教战争和尼德兰起义的烽火席卷佛兰德斯。奥德瓦尔德因其战略位置，多次成为西班牙军队和起义军争夺的战场。城市几经易手，遭受重创。更致命的是，战争破坏了贸易路线，许多富有的挂毯商和技艺高超的织工为了避难和寻找新市场，纷纷北迁至荷兰共和国，尤其是代尔夫特和阿姆斯特丹。奥德瓦尔德的挂毯产业虽然未完全消亡，但黄金时代已然落幕。接下来的几个世纪，它变成了一座安静的省城，昔日的辉煌渐渐沉入斯海尔德河底，成为一段被部分遗忘的传奇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到19世纪末20世纪初，随着历史保护意识的兴起，人们重新发现了这座“沉睡美人”的价值。市政厅得到了精心修复，大量流散世界各地的奥德瓦尔德挂毯被研究和追索。1979年，挂毯博物馆在市政厅内成立，系统地展示和讲述这段独特的历史。今天，当你漫步在老城，看到的不仅是保存完好的建筑肌理，更是一个社区有意识地将自己最辉煌的篇章，转化为 identity 的核心。挂毯不再只是博物馆里的展品，它出现在城市logo、纪念品、甚至餐厅的菜单设计上。奥德瓦尔德人用现代的方式，重新编织起与历史荣耀的联结。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（约8-9小时）进行深度游览。最佳抵达时间是上午9点半左右，此时广场刚刚苏醒，光线柔和，游客稀少，能拍出市政厅最干净的照片，也能从容感受小镇晨间氛围。整体节奏宜慢不宜快，核心是上午专注参观市政厅与博物馆，下午进行河畔漫步与老城探索，傍晚则留给广场的松弛时光。这样的安排既能深度吸收厚重的历史文化信息，又不失在街巷中偶遇惊喜的乐趣，完美平衡知识获取与休闲体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`市政厅博物馆的语音导览非常详尽，但只有荷语和法语，建议提前下载官方App或查阅官网的英文介绍资料做好准备。老城石板路不少，且河畔步道可能有湿滑处，务必穿一双舒适防滑的步行鞋。小镇周一比较安静，部分小型店铺或博物馆可能休息，但市政厅博物馆若逢周一假日会开放，行前务必确认。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午九点半从火车站悠然步行，穿过横跨斯海尔德河的古老石桥，将流淌的河水与对岸老城的尖顶作为你旅程的开幕画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向大广场中央的市政厅，别急着进去，先绕着它走一圈，从各个角度欣赏那如同蕾丝般繁复的火焰哥特式立面，寻找那些讲述故事的雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入市政厅内部的挂毯博物馆（MOU），花上至少两小时，沉浸在那由经纬线构成的瑰丽世界里，务必用手触摸体验区的古董挂毯样本，感受历史的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来后，在广场侧翼找一家有露天座位的咖啡馆，点一杯咖啡和一份本地特色的奶酪火腿三明治，像当地人一样看着广场上的日常流动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午沿着斯海尔德河向南漫步，经过古老的“肉市”建筑，一直走到视野开阔的河滨公园，在这里的长椅上坐一会儿，看河水、野鸭和遛狗的人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从河畔折返，钻进市政厅后方如迷宫般迷人的老街区（如Wolstraat、Hoogstraat），那里藏着许多古朴的砖房、小巧的艺术工作室和安静的庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将傍晚的最后时光留给圣瓦勒里斯教堂内部，感受其相对简朴但宁静的空间，然后登上教堂塔楼（如果开放），俯瞰被金色夕阳笼罩的整个红瓦屋顶和老城轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分回到大广场，选择一家评价不错的餐厅，用一顿以比利时啤酒佐餐的佛兰德斯炖肉（Carbonade Flamande）或淡菜薯条，为这一天画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅东侧仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚低角度阳光时，站在广场东侧的建筑阴影里，用广角镜头仰拍，能将市政厅华丽的塔楼和火焰式山墙与蓝天一同纳入构图，避开杂乱的人群。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`斯海尔德河畔古桥视角`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，站在老城对岸的石桥上，以斯海尔德河为前景，拍摄倒映在水中的老城建筑群，特别是圣瓦勒里斯教堂的尖顶，画面宁静而富有层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`挂毯博物馆细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用博物馆内柔和的射灯光线，将相机镜头贴近展柜玻璃（注意关闭闪光灯），聚焦于某幅巨大挂毯上一处精彩细节，如人物的面部表情或衣饰纹理，展现其惊人的工艺。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城街巷的纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入Hoogstraat等狭窄街道时，站在巷口，利用两侧色彩斑驳的砖墙形成天然引导线，捕捉一位当地居民骑车或步行的瞬间，增添生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄市政厅外立面时，尝试寻找有树叶或旗帜作为前景框架的构图，能让画面更生动。博物馆内部严禁使用闪光灯和三脚架（如需需特别许可），高感光度相机或大光圈镜头在这里非常有用。尊重当地居民隐私，拍摄街景人物时尽量保持距离或征求同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景宝藏`}</h4>
                  <p className="text-sm text-blue-800">{`一栋17世纪翻新的斯海尔德河畔联排别墅内的精品酒店，房间窗户正对潺潺流水与古老桥洞，夜晚能听到细微的水声伴你入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`广场核心体验`}</h4>
                  <p className="text-sm text-green-800">{`位于大广场一角的历史建筑酒店，房间保留了木梁和复古装饰，下楼就是咖啡馆和市政厅，完美融入古镇的日夜韵律。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`由老城区旧纺织作坊改造的设计师酒店，工业风 loft 空间与古董家具混搭，自带一个绿意盎然的静谧庭院，适合寻求独特氛围的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡间静谧之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于奥德瓦尔德郊外几公里处、被田野环绕的城堡酒店，提供极致的宁静与奢华，适合自驾者，在星空下感受佛兰德斯乡村的辽阔。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城中心的住宿数量有限且非常抢手，尤其是旺季（春夏季及周末），建议至少提前两个月预订。如果选择郊外住宿，需考虑晚间返回的交通，小镇出租车服务需要电话预约。无论住在哪里，奥德瓦尔德的夜晚都非常安全宁静，可以放心外出散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥德瓦尔德许久，我脑海里反复出现的，不是某一件具体的挂毯，也不是市政厅的某一处雕刻，而是一种奇妙的“交织感”。经纬线交织成讲述史诗的挂毯，石灰岩块交织成歌颂美的建筑，斯海尔德河的流水交织着千年来的贸易、战争与平凡日常。这座城市本身，就是一件精心编织的杰作，它将极致的艺术追求与踏实的生活本真，完美地编织在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快餐式体验、一切都在加速的世界里，奥德瓦尔德提供了一种珍贵的“减速”力量。它要求你慢下来，用指尖去感受羊毛的粗砺，用眼睛去辨认石头上模糊的雕像，用整个下午去跟随一条河的流向。它不张扬，不喧嚣，只是静静地在那里，告诉你：真正的奢华，不在于消耗，而在于创造可以传承数个世纪的美；真正的富有，不在于拥有多少，而在于能否守护一份从容不迫的生活节奏。对于每一位厌倦了浮光掠影、渴望在旅途中触碰历史纹理与生活本质的深度游者来说，奥德瓦尔德都不是一个景点，而是一次温柔而深刻的提醒，提醒我们关于技艺、耐心与传承的价值。它值得你专程而来，花上一整天，让自己被这种古老而温润的“交织”之美，深深包裹。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadel-of-dinant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadel of Dinant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/notre-dame-de-namur-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Notre-Dame de Namur Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/huy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡伊古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Huy</p>
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
