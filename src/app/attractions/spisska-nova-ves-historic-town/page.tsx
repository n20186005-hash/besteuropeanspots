import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯皮什斯卡诺瓦韦斯 Spišská Nová Ves｜探访拥有全斯洛伐克最高教堂钟楼的透镜状奇迹广场 - 最佳欧洲景点',
  description: '当我第一次站在那个传说中的“透镜”边缘时，完全被眼前的景象定住了。这哪里是一个普通的城市广场？它更像一条被两侧五彩斑斓的房子温柔环抱起来的、宽阔而流畅的河流。清晨的阳光从东侧斜射过来，把一栋栋柠檬黄、薄荷绿、淡粉和赭石色的巴洛克式立面照得透亮，每一扇窗框的阴影都拉得老长，投在光滑的鹅卵石路面上。空气',
}

export default function SpisskaNovaVesHistoricTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯皮什斯卡诺瓦韦斯', href: '/attractions/spisska-nova-ves-historic-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯皮什斯卡诺瓦韦斯・Spišská Nová Ves・斯洛伐克・斯皮什斯卡诺瓦韦斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次站在那个传说中的“透镜”边缘时，完全被眼前的景象定住了。这哪里是一个普通的城市广场？它更像一条被两侧五彩斑斓的房子温柔环抱起来的、宽阔而流畅的河流。清晨的阳光从东侧斜射过来，把一栋栋柠檬黄、薄荷绿、淡粉和赭石色的巴洛克式立面照得透亮，每一扇窗框的阴影都拉得老长，投在光滑的鹅卵石路面上。空气里飘着刚烤好的“特里塞尔”面包的甜香，混合着旁边咖啡店飘出的浓缩咖啡的焦苦味。广场太长了，长到站在这一头，另一头的圣马丁教堂钟楼——那个高耸入云的尖顶——仿佛悬在空气里，被地面蒸腾起的微微热浪扭曲着，像个温柔的幻影。
我顺着广场的弧线慢慢往里走。脚踩在鹅卵石上的声音，和远处市政厅钟楼每隔一刻钟传来的悠扬报时声，构成了奇妙的二重奏。广场中央的绿地和长椅上，早起的老人坐着读报，年轻人牵着狗匆匆走过。这个奇特的椭圆形空间，不像许多欧洲广场那样是单纯的观光地，它就是小镇跳动的心脏，是所有人生活的客厅。理发店、药房、书店、肉铺，都安然地藏在那些有着几百年历史的拱廊之下，日常生活与厚重的历史在这里毫无隔阂地交织在一起。
而那个无处不在的视觉焦点，便是圣马丁教堂的钟楼。87米，它是斯洛伐克所有教堂钟楼里当之无愧的巨人。走得越近，越能感到它的压迫感和精致感并存。石头从底部深沉的灰褐色，逐渐向上变成历经风雨的浅灰色，尖顶直指湛蓝的天穹。当钟声突然敲响，“咚——咚——”，浑厚的声音不是从耳朵进入，而是像一股有形的波，从脚底传来，穿透你的胸膛，在整个透镜状的广场空间里回荡、盘旋，久久不散。那一刻你忽然明白，这个广场的奇异形状，或许就是为了汇聚和放大这钟声，让它成为每日萦绕在人们头顶的神圣回响。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次站在那个传说中的“透镜”边缘时，完全被眼前的景象定住了。这哪里是一个普通的城市广场？它更像一条被两侧五彩斑斓的房子温柔环抱起来的、宽阔而流畅的河流。清晨的阳光从东侧斜射过来，把一栋栋柠檬黄、薄荷绿、淡粉和赭石色的巴洛克式立面照得透亮，每一扇窗框的阴影都拉得老长，投在光滑的鹅卵石路面上。空气里飘着刚烤好的“特里塞尔”面包的甜香，混合着旁边咖啡店飘出的浓缩咖啡的焦苦味。广场太长了，长到站在这一头，另一头的圣马丁教堂钟楼——那个高耸入云的尖顶——仿佛悬在空气里，被地面蒸腾起的微微热浪扭曲着，像个温柔的幻影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我顺着广场的弧线慢慢往里走。脚踩在鹅卵石上的声音，和远处市政厅钟楼每隔一刻钟传来的悠扬报时声，构成了奇妙的二重奏。广场中央的绿地和长椅上，早起的老人坐着读报，年轻人牵着狗匆匆走过。这个奇特的椭圆形空间，不像许多欧洲广场那样是单纯的观光地，它就是小镇跳动的心脏，是所有人生活的客厅。理发店、药房、书店、肉铺，都安然地藏在那些有着几百年历史的拱廊之下，日常生活与厚重的历史在这里毫无隔阂地交织在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而那个无处不在的视觉焦点，便是圣马丁教堂的钟楼。87米，它是斯洛伐克所有教堂钟楼里当之无愧的巨人。走得越近，越能感到它的压迫感和精致感并存。石头从底部深沉的灰褐色，逐渐向上变成历经风雨的浅灰色，尖顶直指湛蓝的天穹。当钟声突然敲响，“咚——咚——”，浑厚的声音不是从耳朵进入，而是像一股有形的波，从脚底传来，穿透你的胸膛，在整个透镜状的广场空间里回荡、盘旋，久久不散。那一刻你忽然明白，这个广场的奇异形状，或许就是为了汇聚和放大这钟声，让它成为每日萦绕在人们头顶的神圣回响。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯皮什斯卡诺瓦韦斯`} />
                <InfoRow label="英文名称" value={`Spišská Nová Ves`} />
                <InfoRow label="正式名称" value={`Spišská Nová Ves`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`斯皮什斯卡诺瓦韦斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克东部斯皮什地区的首府与历史中心，其独特的城市规划是13世纪德国殖民者在东欧进行“城镇建设”的杰出典范。`} />
                <InfoRow label="建筑特色" value={`拥有全斯洛伐克最高（达87米）的哥特式教堂钟楼，以及一个极为罕见、形状如巨大透镜或橄榄球的细长椭圆形中央广场。`} />
                <InfoRow label="建筑风格" value={`以哥特式为核心，混合了文艺复兴、巴洛克及新古典主义的外立面和城市民居，形成和谐统一的历史街景。`} />
                <InfoRow label="文化价值" value={`作为联合国教科文组织世界遗产“勒沃卡、斯皮什城堡及周边文化古迹群”的重要组成部分，体现了中欧多民族、多文化在建筑与城市规划上的深刻交融。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市广场及外部公共区域全天开放。圣马丁主教座堂开放时间通常为周一至周六上午9点至下午5点，周日下午1点至5点；冬季（11月至3月）开放时间可能缩短，且每日中午12点至1点可能关闭休息。市政厅内的斯皮什博物馆开放时间为周二至周日上午9点至下午5点。所有室内景点在主要公共假日（如圣诞节、元旦）可能关闭，建议行前查阅最新公告。`} />
              <InfoRow label="门票价格" value={`城市广场免费参观。圣马丁主教座堂入场费约3欧元，登钟楼另需约2欧元。斯皮什博物馆门票约4欧元。学生、儿童及老年游客通常享有半价优惠，6岁以下儿童免费。提供包含教堂、钟楼和博物馆的联票，约7欧元。`} />
              <InfoRow label="地址" value={`Námestie Nežnej revolúcie 1, 052 01 Spišská Nová Ves, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是科希策国际机场，距离约90公里。从机场可乘坐机场巴士或出租车前往科希策火车站，车程约20分钟。从科希策火车站乘坐Regional Express (RE) 火车前往斯皮什斯卡诺瓦韦斯是最佳选择，车次频繁（约每小时一班），车程约1小时10分钟，沿途风景优美。也可选择从科希策汽车站乘坐巴士，车程约1.5小时，但舒适度不如火车。建议在车站自动售票机或网上购买火车票，车上补票可能产生额外费用。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事要追溯到十三世纪中叶。当时，匈牙利王国为了加强边境，开发富饶的斯皮什地区，推行了一项雄心勃勃的政策：邀请熟练的德国矿工和手工业者，来此建立新的城镇。斯皮什斯卡诺瓦韦斯，在拉丁文文献中被称为“Villa Nova”，意思就是“新城”，便是在这样的背景下于1268年获得了自治城市的特许状。这些来自西方的定居者，不仅带来了先进的采矿技术，更带来了一套成熟的城市规划理念。那个独一无二的透镜状广场，并非偶然或地形的结果，而是一次精心的设计。它超长的形态，就是为了容纳每周热闹的市集，让来自四面八方的农民、商贩能有足够的空间摆开摊位。广场周围的土地被划分成细长的条块，分配给市民建造住宅，于是形成了我们今天看到的那些狭长而色彩缤纷的房屋立面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市的繁荣与地下的财富紧密相连。周围的山区富含铜、铁、银，矿业催生了强大的行会和富裕的市民阶层。到了十五世纪，财富积累到了足以兴建一座配得上城市地位的教堂。圣马丁主教座堂在原有的罗马式小教堂基础上开始重建，漫长的工程持续了几个世纪。那座令人惊叹的钟楼，其建造始于十五世纪末，最初可能也带有防御目的。你很难想象，在没有现代机械的时代，人们是如何将一块块巨石垒到近90米的高空。钟楼不仅在高度上傲视群伦，其细节也极尽奢华，哥特式的窗饰、浮雕，以及后来在文艺复兴时期加建的华美钟面，都诉说着市民们的虔诚与自豪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的进程从不平坦。这座城市经历了鞑靼人的入侵、宗教改革的冲击（一度成为新教据点）、反哈布斯堡王朝的起义以及大火。但每次灾难后，它都像火凤凰一样重生。巴洛克时代的到来，为许多房屋换上了华丽的新立面，曲线山花和精致的灰泥装饰，给原本严肃的哥特式街道增添了活泼与柔美。十八世纪，一场大火吞噬了广场西侧，但重建工作遵循了原有的街道布局和建筑尺度，使得这份中世纪留下的城市肌理得以完整保存。它就像一棵老树，树干是十三世纪的规划，枝条是不同时代的建筑风格，却长得无比和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入近现代，随着工业重心转移，斯皮什斯卡诺瓦韦斯逐渐褪去了矿业重镇的光环，回归宁静。这份宁静，反而成了它最大的财富。当周边那些更著名的城堡和教堂吸引着大量游客时，这里保留了小镇原汁原味的生活节奏。1993年，它与附近的斯皮什城堡、勒沃卡等一起，被列入联合国教科文组织世界遗产名录，其价值不仅仅在于单栋建筑，更在于这个保存完好的、活着的城市有机体本身。走在街上，你触摸的每一块石头，都凝结着萨克森矿工、匈牙利贵族、斯洛伐克农民、犹太商人的共同记忆，这是一部用石头写成的、关于中欧文化交流的立体史书。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午九点左右抵达，此时阳光正好照亮广场东侧的立面，游客尚未大批到来，小镇刚刚苏醒的氛围最为迷人。整体游览需要大约4-5小时，节奏应当舒缓，重在体验空间和细节。路线围绕独特的透镜状广场展开，由外及内，由宏观到微观，最后登高望远，完成对这座古城从平面到立体的全面感知。这样的安排能让你充分领略广场的形态之美，深入感受教堂的震撼，并有机会捕捉一天中最好的光线。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午广场可能有市集，虽热闹但人流量大，若想拍摄纯净的建筑照片，最好避开这个时段。进入教堂时请保持安静，衣着避免过于暴露（无袖上衣或短裤可能被婉拒入内）。登钟楼的楼梯非常狭窄陡峭且昏暗，务必穿舒适的平底鞋，有幽闭恐惧症或身体不适者请量力而行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来后，不要急着直奔中心，先绕到小镇边缘的公园，从侧面远眺圣马丁教堂钟楼那凌驾于所有红屋顶之上的壮观身影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Radvanská街缓缓走向广场的南端入口，让自己第一次完整地看到那条如梦境般的、被彩色房屋夹道的狭长椭圆形空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走到广场正中央的圣三一纪念柱下，以此为轴心，顺时针缓慢旋转一圈，观察广场弧度如何改变你的视野和两侧建筑的透视关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点探访圣马丁主教座堂，先在外围仰望钟楼的巍峨，然后进入略显幽暗的内部，感受彩绘玻璃投下的光柱与宁静肃穆的祈祷氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气攀爬钟楼内部狭窄的旋转石阶，在气喘吁吁抵达顶部的观景台后，收获将整个透镜状广场和远处斯皮什城堡尽收眼底的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下钟楼后，走进广场西侧的斯皮什博物馆，通过古老的地图、工具和艺术品，了解这座城镇赖以生存的采矿历史和多彩的文化融合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着广场拱廊下随意漫步，留意那些门楣上不同家族徽章和行业标志，找一家本地人聚集的咖啡馆，点一杯咖啡，坐下来观察广场上的生活流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后在黄昏时分，再次回到广场南端，看着夕阳给钟楼尖顶和所有房屋立面镀上一层温暖的金色，聆听晚钟响起，结束完美的探访。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场南端市政厅台阶上`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，站在台阶高处，用广角镜头可以完美捕捉到广场向北延伸的深邃曲线，以及尽头处圣马丁教堂钟楼的完整构图，两侧色彩斑斓的房屋形成绝佳的引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣马丁教堂钟楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，将镜头垂直向下对准广场中心，可以拍出极具视觉冲击力的、展现完整透镜形状的对称构图，红屋顶与绿色庭院形成美妙对比，最佳光线是正午前后阴影最小的时候。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`教堂内部中殿后方`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光透过西侧彩色玻璃窗射入时，寻找角度让光束照亮空气中浮动的微尘，并将前排祈祷的长椅作为前景，拍出充满神圣感与宁静氛围的光影大片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`广场东侧某段拱廊之下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射，利用拱廊形成的天然画框，拍摄对面被阳光照亮的建筑立面以及街道上行人的生动瞬间，营造故事感和纵深感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少广场鹅卵石反光并增强建筑立面的色彩饱和度。航拍器在历史城镇中心区域的使用受到严格限制，未经许可请勿放飞。当地人对于被拍摄通常很友好，但拍摄人物特写前，一个微笑和简单的手势征得同意是基本的礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场附近由老房子改造的温馨家庭旅馆，主人会为你手绘地图，推荐只有本地人才知道的小酒馆，晚上能听到远处隐约的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一栋经过精心修复的文艺复兴时期商人住宅，房间里有裸露的原始木梁和古老的瓷砖壁炉，清晨推开窗就是广场的完美风景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇安静街区的一座新艺术风格精品酒店，拥有奢华的内饰、一流的水疗中心和庭院花园，是探索一天后绝佳的放松之所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然亲近`}</h4>
                  <p className="text-sm text-purple-800">{`开车十五分钟即可抵达的塔特拉山脚下乡村民宿，推开窗是连绵的草场和森林，让你同时享受古城的文化和山间的静谧。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安非常好，夜晚独行也很安全。夏季和圣诞市场期间是旺季，住宿需提前数周预订。如果自驾，务必确认住宿地点是否提供停车位，老城中心停车位非常紧张且多为收费区。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯皮什斯卡诺瓦韦斯好多天后，那个透镜状的广场依然会清晰地浮现在我的脑海里。它不像那些让人一眼惊艳、然后迅速遗忘的景点。它的魅力是缓慢释放的，是浸润式的。你在这里度过的时光，更像是一种“居住”的体验，而非“观光”。你习惯了在某个钟点听到特定的钟声，熟悉了面包店出炉的香气，认得了广场长椅上那几个总在聊天的老人的面孔。这座小镇慷慨地让你暂时成为它日常生活韵律的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速打卡、感官刺激的旅行时代，这样一个地方显得尤为珍贵。它不喧哗，不张扬，只是静静地在那里，承载着近八百年的层叠历史。它告诉我们，真正打动人心的，往往不是孤立的宏伟建筑，而是一个活生生的、和谐的整体——那种建筑、空间、声音、气味和日常生活的完美交织。它让你相信，历史不是博物馆里的标本，而是一种依然在呼吸、在跳动的生活本身。对于每一位厌倦了浮光掠影，渴望深入欧洲肌理，触摸历史真实温度的旅人来说，斯皮什斯卡诺瓦韦斯都是一个不容错过的目的地。来这里，不只是看一个奇特的广场和一座高塔，更是为了体验时间如何被具象化，以及一种古老而优雅的城市生活方式，如何在今天依然焕发着温暖的生命力。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spoleto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergamo-citta-alta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔加莫上城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergamo Città Alta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vychylovka-forest-railway-museum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维希洛夫卡（露天博物馆）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vychylovka</p>
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
