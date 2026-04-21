import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰普拉河畔贝乔夫 Bečov nad Teplou｜探秘捷克第二国宝圣毛鲁斯圣物匣的传奇城堡 - 最佳欧洲景点',
  description: '车子沿着蜿蜒的泰普拉河行驶，两岸是深绿色的森林，然后，那个小镇就毫无预兆地出现了。贝乔夫小得惊人，安静得能听见河水潺潺和自己脚步的回声。石板路被岁月打磨得温润，空气里有木头、潮湿苔藓和远处咖啡馆飘来的咖啡香混合的味道。你的目光会不由自主地被牵引——在小镇屋顶之上，一片厚重的、由岩石和砖石构成的建筑群',
}

export default function BecovNadTeplouChateauReliquaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '泰普拉河畔贝乔夫', href: '/destinations/europe' },
            { label: '泰普拉河畔贝乔夫', href: '/attractions/becov-nad-teplou-chateau-reliquary' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`泰普拉河畔贝乔夫・Bečov nad Teplou・捷克・泰普拉河畔贝乔夫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着蜿蜒的泰普拉河行驶，两岸是深绿色的森林，然后，那个小镇就毫无预兆地出现了。贝乔夫小得惊人，安静得能听见河水潺潺和自己脚步的回声。石板路被岁月打磨得温润，空气里有木头、潮湿苔藓和远处咖啡馆飘来的咖啡香混合的味道。你的目光会不由自主地被牵引——在小镇屋顶之上，一片厚重的、由岩石和砖石构成的建筑群层层叠叠地攀附在山丘上，那就是贝乔夫城堡。它不是童话里那种尖塔林立的梦幻城堡，而更像一个沉默、坚实、带着些许沧桑感的守护者，它的轮廓倒映在下方平静的池塘里，虚实之间，历史仿佛凝固了。
走进城堡庭院，中世纪部分的粗粝石墙与巴洛克宫殿的细腻粉彩墙面形成奇妙的对话。但这里最撩人心弦的，是一种隐秘的期待感。当地导游的眼神里藏着一种心照不宣的秘密，游客们低声交谈，氛围更像是在等待揭晓一个谜底。因为所有人都知道，我们来此不是为了看某间豪华的寝宫或画廊，而是为了一件深藏不露的宝物。它不在最显眼的大厅，而是被精心安置在一个现代化的、温湿度恒定的地下珍宝室里。这种“寻宝”的前奏，让整个游览过程充满了仪式感。
当你终于站在那个恒温的玻璃展柜前，所有前奏的铺垫都化作了无声的惊叹。圣毛鲁斯圣物匣就静静地躺在那里。它不是“大”，而是“密”。将近一米长的纯金躯体上，密密麻麻地镶嵌着数以百计的宝石、浮雕玉石和珐琅画像。光线落在上面，红宝石像凝固的血，蓝宝石像深邃的海，珍珠泛着柔光。你需要凑得很近很近，才能看清那些小到极致的圣经人物雕刻，他们的衣褶、表情都栩栩如生。那一刻，你几乎能闻到中世纪工匠熔炼黄金时火焰的气息，能感受到八百多年前那位修道院长委托制作时虔诚的心跳。它不仅是宝物，更是一部用黄金和宝石书写的厚重《圣经》。
离开珍宝室，再漫步于城堡的露台或山下的英式花园，感受会截然不同。刚才的震撼沉淀下来，化为一种深邃的宁静。你看着当地居民带着狗在花园散步，孩子在池塘边嬉戏，城堡巨大的阴影温柔地笼罩着小镇的日常生活。你突然明白，这件无价之宝最美好的归宿，或许不是首都博物馆的聚光灯下，而正是这样一个小镇的隐秘心脏里。它被这里缓慢的时光、淳朴的民风和厚重的石墙静静守护着，也让这座小镇拥有了一种超越其规模的、沉甸甸的文化灵魂。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着蜿蜒的泰普拉河行驶，两岸是深绿色的森林，然后，那个小镇就毫无预兆地出现了。贝乔夫小得惊人，安静得能听见河水潺潺和自己脚步的回声。石板路被岁月打磨得温润，空气里有木头、潮湿苔藓和远处咖啡馆飘来的咖啡香混合的味道。你的目光会不由自主地被牵引——在小镇屋顶之上，一片厚重的、由岩石和砖石构成的建筑群层层叠叠地攀附在山丘上，那就是贝乔夫城堡。它不是童话里那种尖塔林立的梦幻城堡，而更像一个沉默、坚实、带着些许沧桑感的守护者，它的轮廓倒映在下方平静的池塘里，虚实之间，历史仿佛凝固了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进城堡庭院，中世纪部分的粗粝石墙与巴洛克宫殿的细腻粉彩墙面形成奇妙的对话。但这里最撩人心弦的，是一种隐秘的期待感。当地导游的眼神里藏着一种心照不宣的秘密，游客们低声交谈，氛围更像是在等待揭晓一个谜底。因为所有人都知道，我们来此不是为了看某间豪华的寝宫或画廊，而是为了一件深藏不露的宝物。它不在最显眼的大厅，而是被精心安置在一个现代化的、温湿度恒定的地下珍宝室里。这种“寻宝”的前奏，让整个游览过程充满了仪式感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你终于站在那个恒温的玻璃展柜前，所有前奏的铺垫都化作了无声的惊叹。圣毛鲁斯圣物匣就静静地躺在那里。它不是“大”，而是“密”。将近一米长的纯金躯体上，密密麻麻地镶嵌着数以百计的宝石、浮雕玉石和珐琅画像。光线落在上面，红宝石像凝固的血，蓝宝石像深邃的海，珍珠泛着柔光。你需要凑得很近很近，才能看清那些小到极致的圣经人物雕刻，他们的衣褶、表情都栩栩如生。那一刻，你几乎能闻到中世纪工匠熔炼黄金时火焰的气息，能感受到八百多年前那位修道院长委托制作时虔诚的心跳。它不仅是宝物，更是一部用黄金和宝石书写的厚重《圣经》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开珍宝室，再漫步于城堡的露台或山下的英式花园，感受会截然不同。刚才的震撼沉淀下来，化为一种深邃的宁静。你看着当地居民带着狗在花园散步，孩子在池塘边嬉戏，城堡巨大的阴影温柔地笼罩着小镇的日常生活。你突然明白，这件无价之宝最美好的归宿，或许不是首都博物馆的聚光灯下，而正是这样一个小镇的隐秘心脏里。它被这里缓慢的时光、淳朴的民风和厚重的石墙静静守护着，也让这座小镇拥有了一种超越其规模的、沉甸甸的文化灵魂。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`泰普拉河畔贝乔夫`} />
                <InfoRow label="英文名称" value={`Bečov nad Teplou`} />
                <InfoRow label="正式名称" value={`Bečov nad Teplou`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`泰普拉河畔贝乔夫`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座历经贵族家族兴衰、见证动荡世纪变迁的中世纪城堡与巴洛克宫殿建筑群，因其在1985年发现的、艺术与历史价值仅次于捷克王冠珠宝的圣毛鲁斯圣物匣而震惊世界。`} />
                <InfoRow label="建筑特色" value={`由高踞于岩石上的中世纪城堡要塞，与山下更宜居住的文艺复兴及巴洛克式宫殿，通过防御城墙巧妙连接而成的复合建筑群，宛如从山岩与森林中自然生长出来。`} />
                <InfoRow label="建筑风格" value={`以罗曼式与哥特式为基础的中世纪防御城堡为核心，融合了文艺复兴时期的扩建细节，以及十八世纪后增建的巴洛克式宫殿与英式景观花园。`} />
                <InfoRow label="文化价值" value={`不仅是一部立体的建筑史书，更是守护与重现了欧洲中世纪金匠艺术巅峰之作——圣毛鲁斯圣物匣的“安全屋”，承载了从宗教虔敬、贵族炫耀到国家珍宝失而复得的传奇叙事。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及圣物匣导览全年开放，但需提前预约特定时段。夏季（4月-10月）开放时间一般为周二至周日 9:00-17:00，冬季（11月-3月）开放时间缩短，通常为周三至周日 10:00-15:00。圣物匣参观仅在固定导览团中进行，每日场次有限。城堡庭院和花园在开放时间内可自由进入。具体日期和节假日安排请务必在行前查阅官网，因为修复工程或特殊活动可能导致临时关闭。`} />
              <InfoRow label="门票价格" value={`参观分为多种套餐：1) 基础导览（下层城堡及历史 interiors）：成人约350捷克克朗，儿童、学生及老人有优惠。2) 核心导览（含圣毛鲁斯圣物匣的特别展厅）：成人约450捷克克朗。3) 综合通票（包含所有开放区域及两个导览）：成人约650捷克克朗。家庭票、团体票（10人以上）有折扣。官网提前预订通常比现场购票便宜，并能确保圣物匣导览的名额。`} />
              <InfoRow label="地址" value={`Bečov nad Teplou 9, 364 64 Bečov nad Teplou, Czechia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布拉格瓦茨拉夫·哈维尔机场。从布拉格出发，最灵活的方式是自驾，沿E48/D6号公路向西至卡罗维发利方向，再根据路牌指示前往泰普拉河畔贝乔夫，全程约2小时。若乘坐公共交通，可从布拉格中央火车站乘火车前往卡罗维发利（车程约3.5小时，班次较多），再从卡罗维发利火车站换乘地区巴士前往贝乔夫（车程约45分钟至1小时，班次较少，需提前查好时刻表）。小镇本身很小，城堡位于镇中心山丘上，从巴士站步行约10分钟即可抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝乔夫的故事始于13世纪。当时，为了守护连接布拉格和纽伦堡的重要商路，一座坚不可摧的哥特式城堡在泰普拉河上方的玄武岩山丘上拔地而起。最初的领主是当地的贵族，城堡的作用纯粹是军事化的——高耸的塔楼、狭窄的窗户、深深的护城河，一切为了防御。接下来的几个世纪，城堡随着主人的更换而不断易手，也经历了多次扩建和改造。文艺复兴的春风吹到这里时，城堡的下方兴建起了更舒适、采光更好的居住宫殿，贵族们开始追求奢华的生活而不仅是安全。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正将贝乔夫与欧洲宏大历史叙事连接起来的，是一件在别处诞生的珍宝。13世纪早期，在今天比利时的弗洛朗内修道院，一件用来盛放圣徒毛鲁斯遗骨的圣物匣被精心制作出来。它汇集了当时最顶尖的金匠、珐琅匠和宝石雕刻师的技艺，成为罗马式金器艺术登峰造极的代表。此后的几百年，它一直在修道院中被虔诚供奉，直到法国大革命的风暴席卷欧洲，修道院被解散，珍宝流散。1838年，它被来自比利时的一个古老贵族家族——博福特-斯庞家族购得。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个家族与贝乔夫的命运就此交织。他们买下了贝乔夫城堡，并将这件传奇圣物匣作为家族最珍贵的传家宝，千里迢迢从比利时运到了这个波希米亚森林边缘的僻静城堡。在接下来的一个世纪里，圣物匣安然躺在城堡的某个秘密角落，见证着这个家族的荣光与落寞。二战的硝烟改变了这一切。1945年，博福特-斯庞家族作为德裔居民被驱逐出境，仓皇逃离时，他们将圣物匣和一些其他珍宝藏在了城堡礼拜堂地板下的一个密室里，希望有朝一日能重返取回。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但历史没有给他们这个机会。城堡被收归国有，在共产主义时期，它被用作学校、仓库，日渐破败。而那件无价之宝，则在黑暗、潮湿的地板下沉默了整整四十年。关于它的存在，只剩下一些模糊的传闻和一张发黄的老照片。转机出现在1985年，一名捷克文化部的调查员，执着地相信传闻并非空穴来风。经过艰难的说服和申请，他带领一个小组，根据有限的线索，敲开了城堡礼拜堂的地板。当手电筒的光束照亮那件包裹在破布中却依旧难掩璀璨光辉的黄金匣子时，在场的所有人都惊呆了——传说中的国宝，真的在这里。它的重现天日，是捷克二战后最重要的考古发现之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "发现只是传奇的续篇。圣物匣状态糟糕，急需修复。一项长达十一年、凝聚了捷克最顶尖修复专家心血的浩大工程开始了。他们像外科医生一样，一点点清理几个世纪积存的污垢，加固松动的宝石，修复破损的珐琅。整个过程本身就是对中世纪技艺的深度研究和致敬。2002年，修复一新的圣物匣首次向公众展出，旋即成为捷克的文化象征之一。如今，它被安置在城堡内专门设计的、达到最高博物馆安保与环保标准的展厅中，向每一位远道而来的访客，诉说着关于信仰、艺术、家族秘辛与国家记忆的漫长史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点前抵达小镇，这样你能在宁静的氛围中感受它的苏醒，并确保能预约到当天核心的圣物匣导览团（通常下午的团更抢手）。整体游览需要预留至少4-5小时。节奏应该是“先抑后扬”：先在外围感受城堡的整体气势和小镇风情，然后通过导览深入建筑内部和历史脉络，最后在圣物匣展厅达到情感与认知的高潮，之后再用花园漫步来平复心情。这样的安排能让你逐步沉浸，避免一开始就直面最震撼的展品而让后续游览显得平淡。务必参加包含圣物匣的导览团，这是灵魂所在，自行游览无法进入珍宝室。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在城堡官网预订含圣物匣的导览票，现场购买极有可能售罄，尤其是周末和夏季。参加导览请务必准时，迟到可能无法入场。城堡内部分区域楼梯陡峭且狭窄，请穿着舒适耐走的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在山下小镇边缘，然后故意放慢脚步，沿着被溪流声伴随的石板主街走向城堡，路过面包店时买一个新鲜的“波希米亚卷”当零食。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着进入城堡主体，先绕到后面的池塘边，从水面的倒影中拍摄城堡全景，感受它的防御体系与自然环境的完美融合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加城堡历史导览团，跟随导游的脚步穿梭于从中世纪地牢到文艺复兴大厅的各个房间，亲手触摸冰冷的石墙和温润的木雕，听他们讲述历代领主和那个比利时贵族家族的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在预约的时间，怀揣着朝圣般的心情步入现代化的地下珍宝室前厅，通过简短的纪录片了解圣物匣的传奇发现与修复过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`屏息凝神地步入主展厅，将足够的时间完全留给玻璃展柜中的圣物匣，绕着它慢慢走，从每一个角度观察宝石折射的不同光芒和雕刻的惊人细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，登上城堡上层的露台，从这里俯瞰红色屋顶的小镇和如绿色丝带般蜿蜒的泰普拉河谷，让刚才的视觉冲击在辽阔的景色中得到沉淀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，下山去探索那座与城堡相连的、充满浪漫气息的英式景观花园，沿着蜿蜒的小径散步，在树荫下的长椅上坐一会儿，回味整个旅程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有时间，回到小镇广场，找一家传统的捷克小酒馆，点一杯著名的卡罗维发利温泉饼和一杯本地啤酒，结束这充实的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡池塘倒影镜`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏光线柔和时，站在池塘东侧，利用平静的水面拍摄城堡与树林的完美对称倒影，构图时将实景与倒影各占一半。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣物匣展厅的细节之窗`}</h4>
                  <p className="text-sm text-gray-700">{`在参观圣物匣时，使用相机或手机的长焦微距功能，聚焦于某一片特定的珐琅画或宝石群，捕捉那超越时代的手工艺质感，记得关闭闪光灯。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从花园仰望要塞`}</h4>
                  <p className="text-sm text-gray-700">{`在英式花园的西南角草坪，仰拍岩石上拔地而起的中世纪城堡要塞部分，用树木的枝叶作为自然画框，突出其险峻与古朴。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇街景框取城堡`}</h4>
                  <p className="text-sm text-gray-700">{`回到小镇主街上，利用街道两旁色彩柔和的巴洛克式建筑作为前景引导线，将远端的城堡塔楼框在街道尽头，拍出富有生活气息的景深照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`圣物匣展厅内严禁使用闪光灯和三脚架，为了保护珍宝，请务必遵守。城堡内部房间光线通常较暗，建议使用高感光度表现现场氛围，而非强行补光。飞无人机需要提前申请特别许可，小镇空域管理严格。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住城堡山脚下由百年老屋改造的家庭旅馆，房间的窗户正对着古老的石墙，晚上能听见溪流声，主人会为你准备丰盛的 homemade 早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林疗愈居所`}</h4>
                  <p className="text-sm text-green-800">{`选择距离小镇几分钟车程、隐于波希米亚森林中的木质度假屋，白天在露台就能闻到松针的清香，夜晚只有星空和寂静相伴。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷历史公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`预订小镇广场上经过现代化改造的历史公寓，拥有挑高的天花板和复古家具，下楼就是咖啡馆和餐厅，生活气息浓郁。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温泉区享乐方案`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多样的餐饮选择，可以住在30分钟车程外的世界闻名的卡罗维发利温泉镇，白天来贝乔夫探秘，晚上回去享受温泉浴和精致的温泉回廊夜景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝乔夫本地住宿数量有限且极具特色，夏季和节假日非常紧俏，建议至少提前两个月预订。小镇治安极好，夜晚非常安静。如果选择住在外围或卡罗维发利，请务必提前查好公共交通的末班车时间，或确保有租车自驾。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开贝乔夫很久之后，脑海里挥之不去的，不是某一块宝石的耀眼，而是那种巨大的反差感带来的震撼。一件代表着中世纪欧洲最精湛技艺、最狂热信仰、最顶级财富的圣物，最终竟然沉睡在一个如此宁静、偏远、几乎被世界遗忘的波希米亚小镇地板下。这像极了命运开的一个意味深长的玩笑，又像是一则关于什么是真正“价值”的寓言。在动荡的年代，那些位于权力与财富中心的宏伟宫殿和教堂往往首当其冲，而贝乔夫这样不起眼的角落，却成了守护文明火种最安全的“缝隙”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这趟旅程，因此超越了寻常的观光。它更像一次对“隐匿”与“重现”的哲学体验。圣物匣的传奇告诉我们，有些光芒，注定需要时间的尘埃来暂时遮盖，需要耐心的等待来重新擦亮。而贝乔夫城堡本身，也在这守护的过程中，找到了自己超越砖石建筑的永恒意义。它不再仅仅是一座贵族宅邸，而是一个伟大秘密的载体，一个文明记忆的保险箱。在这个快节奏的、一切都追求即时曝光和展示的世界里，贝乔夫教会我们珍视那些需要被探寻、被理解、被静静守护的深度。它不是用宏伟来压倒你，而是用一个秘密，轻轻地、却无比牢固地，抓住了你的心。每一位渴望在旅行中触碰历史真实脉络、而不仅仅是打卡背景板的旅人，都应该来听听泰普拉河的水声，和这座城堡与它守护的珍宝，所讲述的关于时间、命运与坚守的，低语般的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kuks-hospital-czechia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库克堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuks Hospital</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dolni-vitkovice-industrial-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    下
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">下维特科维采工业遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolní Vítkovice</p>
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
