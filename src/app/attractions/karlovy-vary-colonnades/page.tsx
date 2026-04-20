import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡罗维发利温泉回廊 Karlovy Vrum Colonnades｜漫步在喝温泉的贵族长廊，啜饮波西米亚的流水传说 - 最佳欧洲景点',
  description: '我记得第一眼看到磨坊回廊时，根本不是先看到建筑，而是先闻到那股独特的、混合着淡淡硫磺与湿润石头的气息。那味道并不刺鼻，反倒有种奇异的安心感，像大地在轻轻呼吸。紧接着，耳朵里便充满了潺潺的水声，不是激流，而是几十股温热的泉水从各式精巧的喷泉口流淌下来的、持续的、近乎音乐般的白噪音。然后，那长达132米...',
}

export default function KarlovyVaryColonnadesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡罗维发利温泉回廊', href: '/attractions/karlovy-vary-colonnades' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡罗维发利温泉回廊・Karlovy Vrum Colonnades・捷克・卡罗维发利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我记得第一眼看到磨坊回廊时，根本不是先看到建筑，而是先闻到那股独特的、混合着淡淡硫磺与湿润石头的气息。那味道并不刺鼻，反倒有种奇异的安心感，像大地在轻轻呼吸。紧接着，耳朵里便充满了潺潺的水声，不是激流，而是几十股温热的泉水从各式精巧的喷泉口流淌下来的、持续的、近乎音乐般的白噪音。然后，那长达132米的宏伟柱廊才完整地进入视线——乳白色的石材在清晨柔光下泛着温润的光泽，124根科林斯柱子撑起雕刻着寓言故事的穹顶，长廊下的人们慢悠悠地踱步，手里都拿着一个造型奇特的、带扁扁吸嘴的陶瓷杯。
这就是卡罗维发利最打动人的地方：它不是一个仅供观赏的“景点”，而是一个依然鲜活运转的“生命器官”。当地人，尤其是上了年纪的疗养者，会严格遵循着医生的“饮水处方”，在特定的时间，走到特定的温泉口，接上特定温度的泉水，小口啜饮，然后沿着河畔或公园散步消化。你会看到他们穿着舒适的便服，彼此点头致意，轻声交谈，整个山谷都弥漫着一种缓慢、有序、专注于自身健康的宁静氛围。它不像普通旅游景区那样喧嚣，而更像一个巨大的、开放式的养生会所，空气里都写着“请放慢”三个字。
最核心的魅力，就在于这种“可饮用的历史”。你捧起温热的泉水，喝下的不仅是富含矿物质的液体，更是几个世纪以来的传说——关于查理四世国王受伤的鹿如何发现温泉，关于彼得大帝、贝多芬、歌德如何在此寻求慰藉，关于欧洲贵族如何将这里变成夏季的社交首都。温度从30多度到70多度不等的泉水，味道也各异，有的铁锈味重，有的则只是微咸，每喝一口都像是与过去某位历史人物进行了一次隔空的味觉共鸣。在这里，历史不是被封存在玻璃柜里，而是流淌在每个人的杯中，温热而真切。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我记得第一眼看到磨坊回廊时，根本不是先看到建筑，而是先闻到那股独特的、混合着淡淡硫磺与湿润石头的气息。那味道并不刺鼻，反倒有种奇异的安心感，像大地在轻轻呼吸。紧接着，耳朵里便充满了潺潺的水声，不是激流，而是几十股温热的泉水从各式精巧的喷泉口流淌下来的、持续的、近乎音乐般的白噪音。然后，那长达132米的宏伟柱廊才完整地进入视线——乳白色的石材在清晨柔光下泛着温润的光泽，124根科林斯柱子撑起雕刻着寓言故事的穹顶，长廊下的人们慢悠悠地踱步，手里都拿着一个造型奇特的、带扁扁吸嘴的陶瓷杯。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是卡罗维发利最打动人的地方：它不是一个仅供观赏的“景点”，而是一个依然鲜活运转的“生命器官”。当地人，尤其是上了年纪的疗养者，会严格遵循着医生的“饮水处方”，在特定的时间，走到特定的温泉口，接上特定温度的泉水，小口啜饮，然后沿着河畔或公园散步消化。你会看到他们穿着舒适的便服，彼此点头致意，轻声交谈，整个山谷都弥漫着一种缓慢、有序、专注于自身健康的宁静氛围。它不像普通旅游景区那样喧嚣，而更像一个巨大的、开放式的养生会所，空气里都写着“请放慢”三个字。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最核心的魅力，就在于这种“可饮用的历史”。你捧起温热的泉水，喝下的不仅是富含矿物质的液体，更是几个世纪以来的传说——关于查理四世国王受伤的鹿如何发现温泉，关于彼得大帝、贝多芬、歌德如何在此寻求慰藉，关于欧洲贵族如何将这里变成夏季的社交首都。温度从30多度到70多度不等的泉水，味道也各异，有的铁锈味重，有的则只是微咸，每喝一口都像是与过去某位历史人物进行了一次隔空的味觉共鸣。在这里，历史不是被封存在玻璃柜里，而是流淌在每个人的杯中，温热而真切。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡罗维发利温泉回廊`} />
                <InfoRow label="英文名称" value={`Karlovy Vrum Colonnades`} />
                <InfoRow label="正式名称" value={`The Colonnades of Karlovy Vrum`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`卡罗维发利`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最负盛名的温泉疗养地之一，自14世纪起就是波西米亚王室的健康秘境，后发展为奥匈帝国贵族与文豪艺术家的社交沙龙。`} />
                <InfoRow label="建筑特色" value={`一系列华丽而风格各异的柱廊建筑，宛如室内的散步大道，将数十个天然温泉涌出口优雅地连接起来，形成了既可饮用泉水又能遮风避雨的社交空间。`} />
                <InfoRow label="建筑风格" value={`以新文艺复兴和新古典主义风格为主，点缀着新艺术运动的精美铁艺和雕塑，磨坊回廊的124根科林斯柱廊是其标志。`} />
                <InfoRow label="文化价值" value={`是活的“温泉饮用文化”博物馆，不仅体现了人与天然矿泉的千年健康联结，更见证了从中世纪到现代，欧洲上流社会疗养与社交生活方式的演变。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`温泉长廊建筑外部区域全天24小时开放可自由漫步。各个温泉饮水厅（Kolonády）的开放时间各不相同，通常在每日上午7:00至下午18:00之间，冬季可能提前至17:00关闭。最重要的磨坊回廊（Mlýnská kolonáda）饮水厅全年无休。维吉特尼温泉（Vřídlo）的喷泉观赏厅开放至晚上20:00。具体小饮水点的开关时间会有季节性微调，建议在游客中心获取最新时刻表。新年、复活节等重大节日期间，大部分饮水点依然开放，但部分附属博物馆或导览服务会休息。`} />
              <InfoRow label="门票价格" value={`进入所有回廊建筑内部和户外区域完全免费。使用传统的温泉杯（porcelánová lázeňská miska）品尝温泉水，可在各个饮水点旁的小亭租借，租金约50捷克克朗，或直接购买一个作纪念品（约150-300克朗不等）。若想进入部分历史悠久的温泉浴场内部进行沐浴体验（如著名的温泉浴场Lázně I），费用从300捷克克朗（基础参观）到2000克朗（全套水疗套餐）不等。学生、老年人和残疾人凭证件在付费项目上有折扣，但免费区域无差别。`} />
              <InfoRow label="地址" value={`Mlýnské nábř. 1, 360 01 Karlovy Vrum, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格瓦茨拉夫·哈维尔国际机场出发，最便捷的方式是乘坐直达的机场巴士（如RegioJet或FlixBus），车程约2小时，班次密集，几乎每小时一班，建议在线提前购票以确保座位。从布拉格中央火车站（Hlavní nádraží）也有直达火车，但需在比尔森换乘，总耗时约3.5小时，风景更优美但时间较长。抵达卡罗维发利火车站或汽车总站后，小镇核心的温泉回廊区完全适合步行探索，从车站步行至磨坊回廊约15-20分钟。如果行李较多，可乘坐当地小镇公交（如1路或4路）到“Tržnice”站下车即达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一只鹿开始讲起。传说在14世纪中叶，波西米亚国王兼神圣罗马帝国皇帝查理四世，在一次狩猎中射伤了一只雄鹿。受伤的鹿拼命奔逃，最后跳进了一个山谷中冒着热气的池塘。当猎人们追到时，鹿的伤口竟在热水中奇迹般愈合，随后矫健地消失在森林中。惊讶的查理四世亲自试了试泉水，感受到了神奇的力量，便下令在此建立疗养地。这就是卡罗维发利（意为“查理的温泉”）名字的由来。当然，传说总是为现实镀上金光，考古证据表明，这里的温泉被当地斯拉夫居民利用的时间可能更早，但查理四世在1370年正式授予其城市特权，无疑是它登上历史舞台的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最初的疗养设施非常简陋，只是木屋和简单的浴池。真正的转折点发生在18世纪，尤其是在1711年一场毁灭性的大火之后。重建过程吸引了当时顶尖的建筑师和规划师，他们开始以更宏伟的巴洛克风格规划这座城市。与此同时，来自全欧洲的分析报告确认了这里泉水的医学价值，消息像野火一样在贵族圈中传开。俄罗斯的彼得大帝两次造访，他的随行医生详细记录了疗法，这相当于为卡罗维发利做了最顶级的“代言”。整个18世纪，它成了沙俄、波兰、奥地利贵族们的后花园，奢华的宫殿式住宅和社交场所如雨后春笋般出现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪是卡罗维发利的“黄金时代”，也是今天我们看到的回廊体系的形成期。随着工业革命带来的财富，资产阶级新贵也加入了疗养者的行列，对公共设施提出了更高要求。旧的饮水方式——直接在泉眼边用杯子舀——变得不雅且不便。于是，雄心勃勃的“回廊”建设开始了。首先建起的是新古典风格的磨坊回廊（Mill Colonnade, 1871-1881），设计它的著名建筑师约瑟夫·季蒂克，灵感来自维也纳的环城大道风格。它像一条巨大的、华丽的室内街道，将多个主要泉眼集中起来，让人们可以优雅地散步、社交、饮水，不受天气影响。随后，市场回廊、公园回廊等相继落成，风格也从新古典转向了当时最时髦的新艺术风格，铁艺雕花和曲线装饰变得流行。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪的风云变幻也给这个宁静的山谷带来了冲击。两次世界大战期间，客源锐减。二战后，随着共产主义政权的建立，卡罗维发利的性质发生了微妙变化。它从国际贵族沙龙，更多地转变为服务于社会主义阵营劳动模范和干部的疗养院。许多历史建筑被国有化，但基础的维护和温泉疗法的科学性得到了延续。这是一个低调潜行的时期，它褪去了些许奢华，却意外地保存了那种专注疗愈、脱离浮华的核心精神。1989年天鹅绒革命后，它再次向世界敞开大门，经历了大规模的修复。今天，你看到的闪闪发光的柱廊和精心维护的公园，既是哈布斯堡王朝荣光的回响，也是捷克人珍视自身文化遗产、并让它持续服务于现代生活的证明。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味卡罗维发利，请务必安排一整天时间，并抱着“疗养”而非“赶路”的心态。建议在清晨8点前抵达磨坊回廊，这时旅游团尚未涌入，你能看到本地疗养者最真实的生活节奏，光线也最适合拍照。上午的重点是沿着泰普拉河，由下游往上游依次探访五大主要回廊，并品尝不同泉眼的泉水，每个点停留15-20分钟，让身体慢慢适应和感受。中午可以在河畔餐厅享用一顿清淡的午餐。下午的节奏应该更慢，可以去温泉博物馆深入了解历史，然后在黛安娜山上散步，从高处俯瞰山谷全景。傍晚时分，再回到市场回廊附近，感受华灯初上时温泉小镇的浪漫氛围。整体耗时约8-9小时，核心是体验，不是打卡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`避开上午10点至下午3点的大型旅游团高峰，他们会瞬间填满磨坊回廊，破坏宁静体验。品尝温泉水时切勿牛饮，每次接小半杯，慢慢喝完并散步几分钟，否则肠胃可能不适。一定要穿最舒适防滑的步行鞋，小镇街道多为石板坡路，且各个回廊间需要上下走动。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站先去磨坊回廊，在空荡的柱廊下静静聆听十几道温泉潺潺汇流成的水声交响乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用租来的传统陶瓷杯从5号“鲁萨尔卡泉”接一杯温和的泉水，小口啜饮感受它独特的微咸与铁质口感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着泰普拉河岸的散步道向上游走，去探访那座精致如童话小屋的木制市场回廊，看温泉蒸汽从彩色屋顶下袅袅升起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进维吉特尼温泉厅，仰头观看温度高达72度的主泉眼以每秒2000升的惊人水量喷向12米高的玻璃穹顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河畔的普普大饭店咖啡馆坐下，遥想当年歌德、卡夫卡可能就在同样的位置构思着传世之作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`搭乘复古的黛安娜登山缆车，在山顶的瞭望塔将整个温泉谷和层层叠叠的彩色建筑尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到公园回廊，坐在长椅上观察当地人如何手握温泉杯，在暮色中完成一天最后的“饮水疗程”。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`磨坊回廊东侧尽头仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午九点左右的侧逆光能完美勾勒出科林斯柱廊的立体感，将长廊的纵深感与行走的人物剪影一同纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`泰普拉河上的爱情桥中央`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，用长焦镜头压缩空间，将磨坊回廊、教堂尖顶和山坡上的房屋层叠收纳，水中倒影会让画面加倍梦幻。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`市场回廊内部特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用木制结构的框架构图，聚焦于某个正在接水的温泉杯，让后方彩色玻璃窗和蒸腾的雾气形成朦胧温润的背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`黛安娜瞭望塔西侧平台`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的下午，用广角镜头捕捉整个卡罗维发利河谷的全景，弯曲的河流与鳞次栉比的建筑在阳光下色彩分外鲜明。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在回廊内拍摄人物时请务必尊重他人隐私，许多疗养者是来静养的，不喜被打扰。拍摄温泉水特写时，关闭闪光灯，利用现场光和水汽能营造更柔和的氛围。冬季清晨温泉蒸汽最大，是拍摄梦幻氛围照片的绝佳时机，但需注意相机镜头防雾。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`疗养者之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于温泉区中心的百年疗养院公寓，房间简单洁净，一推开窗就能闻到硫磺气息，并包含医生咨询和定制饮水计划。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺复古风`}</h4>
                  <p className="text-sm text-green-800">{`由19世纪新艺术风格别墅改造的精品酒店，每个房间都有关于某位来访名人（如肖邦）的主题装饰，楼梯间的彩绘玻璃美得令人窒息。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`奢华历史感`}</h4>
                  <p className="text-sm text-yellow-800">{`地标性的普普大饭店，住在歌德可能住过的套房里，享受大理石温泉泳池，晚上在有着水晶吊灯的餐厅享用正统波西米亚晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧山居`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在黛安娜山半腰的家庭旅馆，需要爬一小段坡，但换来的是俯瞰全镇的私人阳台和只有鸟鸣的宁静夜晚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`强烈建议至少提前两个月预订夏季（6-9月）和圣诞新年期间的住宿，这是传统疗养季和旅游旺季。选择住宿时，“离温泉回廊步行距离”是关键指标，小镇坡度大，来回走很耗体力。治安整体极好，但避免选择火车站附近过于廉价的旅馆，环境和氛围会差很多。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡罗维发利很久之后，我发现自己最怀念的，不是某个具体的建筑，而是那种全身心沉浸于一种古老节奏里的感觉。在这个凡事追求即时、效率和刺激的时代，这里固执地守护着一种“无用的优雅”——花一整天时间，仅仅是为了喝几杯不同温度的水，并认真地散步、呼吸、等待身体发生细微的变化。它提醒我们，健康与愉悦可以如此简单，仅仅是与一股来自地心、流淌了千百年的温热水流建立联结。在这里，时间不是被“杀”掉的，而是被细细品味的，就像杯中的温泉水，每一口都值得慢慢感受。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位渴望深度游的旅人，都应该来一次卡罗维发利。它不仅仅是一个风景如画的小镇，更是一种生活哲学的实体课。当你握着那个有点笨拙的陶瓷杯，混在当地疗养者中间，沿着柱廊慢慢走，你会感到一种深切的平静。你参与的是一个跨越了几个世纪的仪式，一个关于疗愈、关于尊重身体、关于慢生活的仪式。在这个意义上，卡罗维发利提供的，或许正是我们这个焦虑时代最珍贵的一剂解药：它不是药片，而是一杯温度刚好、需要你静下心来，一口一口喝完的时光之泉。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sedlec-ossuary-kutna-hora" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库特纳霍拉（人骨教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sedlec Ossuary</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/telc-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔奇广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Square</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cheb-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    海
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">海布老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cheb Old Town</p>
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
