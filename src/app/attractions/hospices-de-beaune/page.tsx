import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博讷主宫医院 Hospices de Beaune｜探访勃艮第“天堂屋顶”与百年济世传奇 - 最佳欧洲景点',
  description: '让我告诉你，第一眼看到博讷主宫医院那个屋顶时的感觉，就像是有人不小心把上帝的调色盘打翻在了勃艮第的天空下。那不是一片普通的屋顶，而是一幅由数万片琉璃瓦拼成的、在阳光下熊熊燃烧的彩色几何火焰。鱼鳞状排列的釉面瓦片，明黄、墨绿、酒红与深褐交织，形成华丽到令人屏息的菱形与螺旋图案。当你站在安静的庭院里抬头...',
}

export default function HospicesDeBeaunePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '博讷主宫医院', href: '/attractions/hospices-de-beaune' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博讷主宫医院・Hospices de Beaune・法国・博讷（科多尔省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`让我告诉你，第一眼看到博讷主宫医院那个屋顶时的感觉，就像是有人不小心把上帝的调色盘打翻在了勃艮第的天空下。那不是一片普通的屋顶，而是一幅由数万片琉璃瓦拼成的、在阳光下熊熊燃烧的彩色几何火焰。鱼鳞状排列的釉面瓦片，明黄、墨绿、酒红与深褐交织，形成华丽到令人屏息的菱形与螺旋图案。当你站在安静的庭院里抬头望，那种视觉的冲击力是直接、纯粹且略带眩晕的。午后的阳光斜射过来，瓦片上的光泽仿佛在流动，你会怀疑这座建筑本身是不是一个巨大的、有生命的艺术品，正在缓慢地呼吸。
走进建筑内部，时光的气味瞬间包裹了你。那是一种混合了古老橡木、蜂蜡、干草药和陈年石头粉末的、深沉而安详的气息。著名的“大病室”长廊在你面前铺展开来——一个长达50米的宏伟空间。最抓人心魄的是那一排排挂着深红色帷幔的橡木病床，每张床都像一个小小的圣坛，整齐地排列在绘有《最后审判》壁画的木制拱顶下。光线从高侧窗和屋顶的天窗温柔地渗入，尘埃在光柱中缓缓飞舞。你几乎能听到几个世纪前的低语：修女们柔软的脚步声，病人轻微的呻吟，以及祈祷时念珠碰撞的清脆声响。这里没有一般医院的冰冷，反而充满了一种庄严的、近乎神圣的庇护感。
最奇妙的是，这座始建于1443年的古老医院，绝非一个冰冷的博物馆标本。它直到上世纪70年代才真正停止接收病人，其核心的慈善使命，通过世界上最具传奇色彩的葡萄酒拍卖——“博讷济贫院葡萄酒拍卖会”得以延续。你参观的不仅是历史，更是一个仍在强劲跳动的慈善心脏。你能在古老的药房里看到数百个彩绘陶罐，能在厨房里看到足以喂养数百人的巨大铜锅，你能真切地感受到，几个世纪以来，从达官贵人到贫苦农民，是如何在这个屋檐下获得一视同仁的庇护与尊严。这种穿越时空的生命力，正是它最动人的灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我告诉你，第一眼看到博讷主宫医院那个屋顶时的感觉，就像是有人不小心把上帝的调色盘打翻在了勃艮第的天空下。那不是一片普通的屋顶，而是一幅由数万片琉璃瓦拼成的、在阳光下熊熊燃烧的彩色几何火焰。鱼鳞状排列的釉面瓦片，明黄、墨绿、酒红与深褐交织，形成华丽到令人屏息的菱形与螺旋图案。当你站在安静的庭院里抬头望，那种视觉的冲击力是直接、纯粹且略带眩晕的。午后的阳光斜射过来，瓦片上的光泽仿佛在流动，你会怀疑这座建筑本身是不是一个巨大的、有生命的艺术品，正在缓慢地呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进建筑内部，时光的气味瞬间包裹了你。那是一种混合了古老橡木、蜂蜡、干草药和陈年石头粉末的、深沉而安详的气息。著名的“大病室”长廊在你面前铺展开来——一个长达50米的宏伟空间。最抓人心魄的是那一排排挂着深红色帷幔的橡木病床，每张床都像一个小小的圣坛，整齐地排列在绘有《最后审判》壁画的木制拱顶下。光线从高侧窗和屋顶的天窗温柔地渗入，尘埃在光柱中缓缓飞舞。你几乎能听到几个世纪前的低语：修女们柔软的脚步声，病人轻微的呻吟，以及祈祷时念珠碰撞的清脆声响。这里没有一般医院的冰冷，反而充满了一种庄严的、近乎神圣的庇护感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最奇妙的是，这座始建于1443年的古老医院，绝非一个冰冷的博物馆标本。它直到上世纪70年代才真正停止接收病人，其核心的慈善使命，通过世界上最具传奇色彩的葡萄酒拍卖——“博讷济贫院葡萄酒拍卖会”得以延续。你参观的不仅是历史，更是一个仍在强劲跳动的慈善心脏。你能在古老的药房里看到数百个彩绘陶罐，能在厨房里看到足以喂养数百人的巨大铜锅，你能真切地感受到，几个世纪以来，从达官贵人到贫苦农民，是如何在这个屋檐下获得一视同仁的庇护与尊严。这种穿越时空的生命力，正是它最动人的灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博讷主宫医院`} />
                <InfoRow label="英文名称" value={`Hospices de Beaune`} />
                <InfoRow label="正式名称" value={`Hospices de Beaune (Hôtel-Dieu)`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`博讷（科多尔省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`15世纪勃艮第公国辉煌时期建造的慈善医院典范，其延续至今的葡萄酒慈善拍卖是世界葡萄酒市场的年度风向标。`} />
                <InfoRow label="建筑特色" value={`由勃艮第公爵首席大臣尼古拉·罗兰捐建的哥特式建筑群，以其绚烂夺目、宛如几何彩毯的“勃艮第式”琉璃瓦坡屋顶闻名于世。`} />
                <InfoRow label="建筑风格" value={`火焰哥特式与勃艮第民居风格的完美融合。`} />
                <InfoRow label="文化价值" value={`一座仍然“活着”的慈善纪念碑，将中世纪济世精神、建筑艺术瑰宝与勃艮第葡萄酒文化的命脉紧密相连。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，每日上午9:00至下午6:30。最后入场时间通常为下午5:30。请注意，11月至3月的部分周一可能上午闭馆进行维护。每年博讷济贫院葡萄酒拍卖会期间（11月第三个周末）及其前后数日，部分区域可能临时关闭或调整开放时间，建议行前务必查询官网最新公告。`} />
              <InfoRow label="门票价格" value={`成人票：11.5欧元。优惠票（学生、10-18岁青少年）：9欧元。10岁以下儿童免费。另有家庭套票及与博讷葡萄酒博物馆的联票可供选择。门票包含多媒体导览器（含中文），导览器内容极为丰富，强烈建议租用。`} />
              <InfoRow label="地址" value={`Rue de l'Hôtel-Dieu, 21200 Beaune, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最便捷：搭乘TGV高速列车从巴黎里昂车站前往第戎车站，车程约1小时40分钟。抵达第戎后，在车站外的巴士总站转乘前往博讷的“Mobigo”或“Transco”地方巴士（约30-40分钟车程，班次频繁）。自驾则沿A6高速公路（太阳高速）行驶，从“Beaune Centre”出口下高速，老城周边有多个收费停车场。从最近的里昂圣埃克絮佩里机场驾车前往约需2小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一位心怀悲悯的权臣讲起。15世纪中叶，英法百年战争的硝烟刚刚散去，黑死病的阴影依然笼罩欧洲，法国大地满目疮痍，勃艮第公国却在“大胆的查理”之父——“好人菲利普”的统治下，迎来了艺术与文化的黄金时代。就在这样的背景下，勃艮第公爵的首席大臣兼财务总管——尼古拉·罗兰，一位富可敌国却无子嗣的老人，做出了一个改变博讷命运的决定。据说，他深受当时社会疾苦的触动，尤其是看到战争遗孀、贫困病患无家可归、无人照料的惨状。于是，他与妻子吉贡·德·萨林斯共同决定，倾尽毕生财富，在博讷建造一所“为上帝和穷人服务的宫殿”——一座献给圣母的济贫医院。这不仅是为了救赎灵魂，更是为了建立一个能够自我维持、永恒运转的慈善机构。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1443年，工程正式启动。罗兰大臣请来了当时勃艮第最顶尖的建筑师和工匠。他们创造了一种独一无二的建筑语言：建筑的主体结构采用庄严肃穆的火焰哥特式，高耸的尖拱、精致的窗花，无不彰显着对天堂的向往；而那个后来成为传奇的彩色琉璃瓦坡屋顶，则汲取了勃艮第本地民居的灵感，用最绚烂的色彩表达了最朴素的庇护愿望。罗兰大臣于1461年去世，未能亲眼见到医院落成，但他的遗嘱被严格执行。1452年，医院迎来了第一位病人。它的运作模式极具前瞻性：不仅依靠最初的捐赠，罗兰还为其留下了精心挑选的葡萄园、田地和森林。这些地产的产出，将永久用于支撑医院的运营。这就是后世闻名遐迩的“济贫院葡萄园”的起源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的五百多年，这座“主宫医院”从未停止过它的使命。它由“奥古斯丁修会”的修女们管理，她们既是护士，也是管理员。医院拥有完备的设施：巨大的病房（按性别分开）、药房、厨房、礼拜堂，甚至有自己的面包房和洗衣房。病人们在这里得到免费的治疗、洁净的床铺和每日三餐。医院内部自成一个小世界，一个在动荡历史中始终屹立不倒的慈悲孤岛。它经历了宗教战争、法国大革命、两次世界大战，但其慈善内核从未改变。你可以想象，在那些动荡岁月里，这扇大门为所有需要帮助的人敞开，红色帷幔后是无数个得以安歇的疲惫灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到19世纪，医院的葡萄园遗产开始展现出惊人的潜力。勃艮第的葡萄酒名声日隆，而济贫院所拥有的特级园和一级园地块，如“科通”、“蒙哈榭”等，都是风土的极致体现。为了更规范、更透明地管理这笔财富，并为医院筹集更多资金，1859年，在时任院长约瑟夫·贝达斯的推动下，首届“博讷济贫院葡萄酒拍卖会”正式举办。这场拍卖迅速成为了全球葡萄酒日历上最闪亮的事件。它不仅仅是一场商业拍卖，更是一场盛大的慈善节庆。拍卖所得的全部利润，直接注入医院的现代化医疗设备购置、老人院运营以及本地区的医疗研究基金。古老的慈善模式，以最“勃艮第”的方式获得了新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步其中，看到那些修复如初的病床、闪闪发光的铜锅、以及记录着历年拍卖结果的羊皮卷，你会明白，博讷主宫医院早已超越了建筑的范畴。它是一个关于财富如何转化为永恒善意、关于社区如何自我救赎、关于传统如何在创新中永葆生机的宏大叙事。每一片琉璃瓦，每一滴来自其葡萄园的美酒，都在诉说着这个未曾中断的传奇。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受主宫医院的魅力，建议安排至少3-4小时。最佳抵达时间是上午开门后一小时（约10点）或下午三点以后，以避开从第戎出发的一日游团队客流高峰。整体游览节奏宜慢，先从外部欣赏建筑全貌和梦幻屋顶，再沉浸于内部的历史空间，最后在纪念品店细细品味其葡萄酒文化。路线设计为由外至内、由宏大到细节，最后以连接古今的葡萄酒主题收尾，形成完整的体验闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周日午后参观，此时本地家庭游客也很多，主厅会相当拥挤。内部光线为了保护文物相对昏暗，参观古老药房和病房时请留心脚下台阶。穿着舒适的鞋子非常重要，因为大部分地面是古老的石板。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主广场（Place de la Halle）出发，先绕到建筑的侧面和后街，寻找几个不同角度，仰望和拍摄那举世无双的彩色琉璃瓦斜坡屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从正门购票进入后，别急着往里冲，先在入口处的“贫民接待厅”稍作停留，想象几个世纪前求助者在此等待的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入震撼人心的“大病室”主厅，让自己静静站在中央，依次欣赏尽头祭坛上罗吉尔·范·德·韦登的《最后审判》三联画、两侧排列的深红色帷幔病床，以及头顶绘有天使和纹章的橡木拱顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过主厅，探访仿佛时间凝固的古老药房，看着满墙的彩绘陶罐和古老的制药工具，呼吸空气中似乎残留的草药芬芳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进同样壮观的“圣休格厅”（原男性病人病房），这里陈列着医院珍藏的挂毯、家具和历史文件，氛围更为私密宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要参观巨大的中世纪厨房，那口硕大无朋的铜锅和古老的烤肉铁叉，生动诉说着当年如何为数百人准备食物的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接建筑的廊道里，留意观看关于“济贫院葡萄园”和“葡萄酒拍卖会”历史的常设展览，这是理解医院现代生命力的关键。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，穿过优美的文艺复兴风格廊院，来到纪念品商店，这里可以品尝和购买到来自济贫院自家葡萄园的葡萄酒，为旅程画上味觉的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`建筑东侧的小广场（Rue d'Enfer附近）`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，可以拍到屋顶色彩最饱和、几何图案最分明且带有美丽光影对比的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“大病室”内部中轴线`}</h4>
                  <p className="text-sm text-gray-700">{`站在大厅正中央，使用广角镜头朝祭坛方向拍摄，可以完美捕捉对称的病床队列、红色帷幔的纵深感以及尽头的名画，营造神圣空间感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从内部庭院仰拍屋顶与塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`站在铺着鹅卵石的四方庭院中心，抬头拍摄，可以将火焰哥特式的建筑立面与局部彩色屋顶一同纳入画面，构图精巧。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`药房彩绘陶罐墙`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头对准那一整面布满数百个蓝黄彩绘陶罐的橱柜，对焦在其中一个图案清晰的罐子上，让其他罐子形成色彩斑斓的背景虚化，极具细节美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`建筑西侧rue Rousseau Deslandes街角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨时分，阳光刚刚照亮屋顶，从这个角度可以拍到屋顶与背后博讷老城传统砖石房屋的同框照，展现新旧交融。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内严格禁止使用闪光灯和三脚架，高感光度相机或大光圈镜头在这里非常实用。拍摄屋顶外部全景需要超广角镜头，而捕捉建筑雕塑和陶罐细节则建议携带中长焦镜头。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住位于博讷老城墙内、由十六世纪贵族宅邸改造的精品酒店，房间保留着裸露的石墙和古老的横梁，晚上推开木窗就能闻到弥漫在空气里的葡萄酒香。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园梦境`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在博讷周围山坡上特级园之中的小型奢华酒店，每个房间都拥有直面葡萄田的私人露台，在日落时分一边品尝酒店赠送的本地黑皮诺，一边远眺老城全景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由古老修道院部分建筑改建的星级酒店，客房环绕着宁静的回廊花园，早餐可以在古老的石拱厅里享用，体验修道士般的静谧。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温馨民宿`}</h4>
                  <p className="text-sm text-purple-800">{`预订一间由当地酒农家庭经营的“Chambre d‘hôte”（民宿），主人会热情地邀请你参观他的酒窖并品尝私藏，获得最地道的勃艮第家庭生活体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`博讷老城很小，几乎所有住宿点步行至主宫医院都在15分钟以内。如果计划在拍卖会期间（11月）来访，务必提前至少半年预订住宿。夏季和秋季葡萄收获季也是旺季，建议尽早安排。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博讷主宫医院很久之后，那片燃烧般的屋顶依然会时常在眼前浮现。但它留给我最深的印记，并非是视觉的惊艳，而是一种关于“永恒”的温暖启示。在这个追求速效、变化莫测的世界里，这里存在着一种缓慢而坚定的力量。它告诉我们，善意可以如此具体——具体到一张床、一碗汤、一片瓦；也可以如此宏大——宏大到穿越六个世纪，用美酒滋养着一代又一代人的健康与希望。这里没有悲情，只有一种庄严而朴素的承诺：无论外界如何动荡，这扇门始终为你敞开。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这不仅仅是一次对中世纪艺术的朝圣，更是一场对人性光辉的见证之旅。你会看到，美与善如何完美结合，历史如何不是尘封的过去，而是流淌至今的鲜活血液。每一位热爱深度游的旅人都应该来这里，不只是为了看一个景点，而是为了触摸一种可能性——一种关于社区、传承和永恒关怀的可能性。在勃艮第醇厚的酒香里，在彩色琉璃瓦的光芒下，你会找到那份久违的、关于“持久”和“意义”的感动。这份感动，足以照亮很多个前行的日子。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/le-mans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒芒老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Le Mans Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salers-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莱尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salers</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riquewihr-alsace-fairytale-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里屈埃维</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riquewihr</p>
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
