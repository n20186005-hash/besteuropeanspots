import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '托卡伊葡萄酒产区历史文化景观 Tokaj Wine Region Historic Cultural Landscape｜品味液态黄金与时光的交响 - 最佳欧洲景点',
  description: '车子刚拐进托卡伊的地界，你就知道来对地方了。空气立刻变得不一样——九月底的风里，混着熟透的葡萄那种甜丝丝的、近乎发酵的香气，还有远处蒂萨河与博德罗格河带来的湿润水汽。眼前的世界被一种温柔的秩序所统治：平缓的火山丘陵像巨大的绿色波浪，一排排葡萄藤顺着等高线蜿蜒，如同大地的指纹。山坡顶上，总立着一个小教...',
}

export default function TokajWineRegionHistoricalCulturalLandscapePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '托卡伊葡萄酒产区历史文化景观', href: '/attractions/tokaj-wine-region-historical-cultural-landscape' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`托卡伊葡萄酒产区历史文化景观・Tokaj Wine Region Historic Cultural Landscape・匈牙利・包尔绍德-奥包乌伊-曾普伦州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐进托卡伊的地界，你就知道来对地方了。空气立刻变得不一样——九月底的风里，混着熟透的葡萄那种甜丝丝的、近乎发酵的香气，还有远处蒂萨河与博德罗格河带来的湿润水汽。眼前的世界被一种温柔的秩序所统治：平缓的火山丘陵像巨大的绿色波浪，一排排葡萄藤顺着等高线蜿蜒，如同大地的指纹。山坡顶上，总立着一个小教堂的尖顶或者一座颜色柔和的老房子，像是为这幅画卷盖下的印章。这里一点儿也不张扬，没有宏伟的城堡突兀地耸立，一切都那么妥帖地长在土地里，安静，丰饶，等待着懂它的人来细细品味。
你很快会明白，托卡伊的灵魂不在地上，而在脚下。随便走进一个叫莫德或托尔奇瓦的小村子，村民会笑着指向某扇不起眼的木门。推门进去，沿着陡峭的台阶往下走，一股混杂着湿冷岩石、陈年橡木桶和醇厚酒香的复杂气息扑面而来，那是时间本身的味道。这些地下酒窖网络纵横交错，有些已经存在了四五百年，墙壁上覆盖着厚厚的、绒毯一样的贵腐霉菌，本地人称之为“神圣的霉”。在昏暗的烛光或电石灯下，看着酒窖主人从巨大的橡木桶里抽出琥珀色的酒液，你会觉得他抽取的不是酒，而是液体的阳光和历史的片段。
在这里，葡萄酒不是摆在高级商场里的商品，它就是生活本身。你会在村里的合作社看到老人们拿着自己的塑料壶来打日常佐餐酒；会在收获季节看到全家老小一起在梯田上忙碌，笑声传得很远；会在小酒馆里听到人们用匈牙利语热烈地讨论着今年的雨水和去年的霜冻。托卡伊最打动人心的，正是这种“活着的传统”。它不是博物馆里僵硬的展品，而是呼吸着、生长着、随着四季更迭而不断变化的文化肌体。每一口阿苏甜酒里，都包含了这片土地独特的火山岩土壤、河流的雾气、秋季的暖阳，以及数十代酿酒人专注而虔诚的手艺。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐进托卡伊的地界，你就知道来对地方了。空气立刻变得不一样——九月底的风里，混着熟透的葡萄那种甜丝丝的、近乎发酵的香气，还有远处蒂萨河与博德罗格河带来的湿润水汽。眼前的世界被一种温柔的秩序所统治：平缓的火山丘陵像巨大的绿色波浪，一排排葡萄藤顺着等高线蜿蜒，如同大地的指纹。山坡顶上，总立着一个小教堂的尖顶或者一座颜色柔和的老房子，像是为这幅画卷盖下的印章。这里一点儿也不张扬，没有宏伟的城堡突兀地耸立，一切都那么妥帖地长在土地里，安静，丰饶，等待着懂它的人来细细品味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会明白，托卡伊的灵魂不在地上，而在脚下。随便走进一个叫莫德或托尔奇瓦的小村子，村民会笑着指向某扇不起眼的木门。推门进去，沿着陡峭的台阶往下走，一股混杂着湿冷岩石、陈年橡木桶和醇厚酒香的复杂气息扑面而来，那是时间本身的味道。这些地下酒窖网络纵横交错，有些已经存在了四五百年，墙壁上覆盖着厚厚的、绒毯一样的贵腐霉菌，本地人称之为“神圣的霉”。在昏暗的烛光或电石灯下，看着酒窖主人从巨大的橡木桶里抽出琥珀色的酒液，你会觉得他抽取的不是酒，而是液体的阳光和历史的片段。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，葡萄酒不是摆在高级商场里的商品，它就是生活本身。你会在村里的合作社看到老人们拿着自己的塑料壶来打日常佐餐酒；会在收获季节看到全家老小一起在梯田上忙碌，笑声传得很远；会在小酒馆里听到人们用匈牙利语热烈地讨论着今年的雨水和去年的霜冻。托卡伊最打动人心的，正是这种“活着的传统”。它不是博物馆里僵硬的展品，而是呼吸着、生长着、随着四季更迭而不断变化的文化肌体。每一口阿苏甜酒里，都包含了这片土地独特的火山岩土壤、河流的雾气、秋季的暖阳，以及数十代酿酒人专注而虔诚的手艺。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`托卡伊葡萄酒产区历史文化景观`} />
                <InfoRow label="英文名称" value={`Tokaj Wine Region Historic Cultural Landscape`} />
                <InfoRow label="正式名称" value={`Tokaj Wine Region Historic Cultural Landscape`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`包尔绍德-奥包乌伊-曾普伦州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界上第一个被正式划定的葡萄酒原产地保护区，其酿酒传统被联合国教科文组织誉为“人类天才创造力的典范”。`} />
                <InfoRow label="建筑特色" value={`火山丘陵、蜿蜒河流与葡萄园梯田构成基底，点缀着古老的酒窖村落、巴洛克庄园和数百公里神秘的地下酒窖网络。`} />
                <InfoRow label="建筑风格" value={`以匈牙利本土的乡村农舍、新古典主义风格的贵族庄园与朴实无华的酒窖建筑为主体，形成了独特的农业景观风格。`} />
                <InfoRow label="文化价值" value={`不仅是葡萄酒产区，更是延续了千年的社区生活、土地智慧与文化认同的活态博物馆，见证了葡萄栽培技术从中欧向世界的传播。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`葡萄园、村镇道路及自然景观全年全天开放。大部分对游客开放的酒窖、庄园城堡和博物馆的开放时间为每年4月至10月，每日上午10点至下午6点；11月至次年3月期间，许多设施仅周末开放或需提前预约。小型家庭酒庄的开放时间非常灵活，最好通过电话或邮件事先确认。每年的葡萄酒节（通常在5月和10月）期间，所有场所都会延长开放时间。`} />
              <InfoRow label="门票价格" value={`进入托卡伊产区本身无需门票。具体消费取决于体验项目：参观小型家庭酒窖并品尝3-4款基础葡萄酒，人均约10-15欧元；中型酒庄的标准导览与品酒套餐约20-35欧元；顶级历史名庄的深度体验（含陈年佳酿）可达50-100欧元。托卡伊博物馆门票约5欧元。学生、65岁以上老人及团体通常享有折扣。`} />
              <InfoRow label="地址" value={`Tokaj, 3910 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯李斯特·费伦茨国际机场出发，最便捷的方式是租车自驾，沿M3高速公路向东，转37号公路，车程约2.5-3小时，可自由探索散落的村镇。若乘坐公共交通，可从布达佩斯东站乘坐火车前往索尔诺克，再换乘区域列车抵达托卡伊镇，总耗时约3-3.5小时，班次每天约5-6趟，建议提前在匈牙利铁路官网购票。从米什科尔茨或尼赖吉哈佐等附近城市也有频繁的巴士往返。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起托卡伊的故事，总绕不开那场“幸运的灾难”。1270年左右，蒙古大军西征的铁蹄踏碎了匈牙利平原，当地的马扎尔人为躲避战祸，纷纷逃往托卡伊这些有火山屏障的丘陵地带。他们发现，这里独特的火山土、充沛的阳光和两条河流带来的晨雾，简直是种植葡萄的天选之地。于是，废墟之上，葡萄藤开始扎根，这或许是历史第一次给托卡伊的馈赠：危难逼出了新的生机。到了16世纪奥斯曼帝国占领匈牙利大部分领土时，托卡伊因为地理位置偏北，反而成了相对安全的“避风港”，葡萄酒产业得以持续发展。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的传奇，发生在17世纪末。当时战事频繁，葡萄采收被迫一再推迟。等到当地领主拉科齐王子的酒窖主管拉兹罗·马塞帕终于能派人去采收时，葡萄园里的景象令人绝望：葡萄果粒干瘪，上面覆盖着一层难看的灰霉。抱着“不能浪费”的心态，工人们还是把这些“烂葡萄”收了下来，单独压榨。没想到，这种感染了“贵腐菌”的葡萄，榨出的汁液极少，却异常浓稠甜美，酿出的酒呈现出前所未有的金黄色泽和复杂风味。当第一杯酒被呈给拉科齐王子时，他惊叹道：“这是王者之酒，酒中之王！”托卡伊阿苏甜酒就此诞生，并很快风靡整个欧洲皇室宫廷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`18世纪是托卡伊的黄金时代。它成了哈布斯堡王朝和欧洲各国王室的御用贡品。伏尔泰、路易十四、彼得大帝都是它的狂热粉丝。巨大的需求催生了产区的建设高潮：宏伟的庄园宅邸拔地而起，为了储存珍贵的甜酒，人们利用松软的火山凝灰岩，开凿出规模惊人的多层地下酒窖系统。这些酒窖常年保持10-12摄氏度的恒温和85%以上的湿度，成为了培育贵腐酒和进行漫长陈酿的完美场所。当时的托卡伊，不仅仅是农业区，更是一个高度组织化、技术精湛的葡萄酒“共和国”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪对托卡伊而言是动荡的百年。两次世界大战、共产主义的集体化农庄运动，几乎摧毁了几个世纪建立的精细风土体系和家族传承。许多古老的葡萄园被改种高产品种，质量一度滑坡。直到1990年后，匈牙利的社会经济转型，才让托卡伊迎来了复兴。一些有远见的酿酒家族收回了祖产，重新研究古老的地块和酿酒方法。2002年，联合国教科文组织将这片景观列入世界遗产名录，这不仅是对其历史价值的肯定，更是为它的未来保护和发展注入了强心剂。今天你看到的托卡伊，是一场正在进行中的、关于传统与现代如何共生的伟大实验。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少安排两天一夜进行深度体验。第一天上午从托卡伊镇开始，了解宏观历史与地理，下午深入一个代表性村庄，探访家庭酒窖，感受最地道的风味。第二天专注于户外景观，徒步或骑行于葡萄园丘陵之间，拜访山顶教堂和观景台，从自然的角度理解风土。最佳的游览季节是九月下旬至十月初的葡萄收获季，整个产区都沉浸在忙碌而欢庆的气氛中。节奏宜慢不宜快，给自己足够的时间迷路、闲聊和发呆，托卡伊的美需要从容的心境才能充分吸收。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多小型家庭酒窖没有固定开放时间，最好的方式是抵达村庄后，向当地餐馆或信息中心询问，他们很乐意帮你联系附近正在家的酿酒师。
产区道路狭窄，骑行或自驾时请注意避让农用机械和收获季节忙碌的工人，尊重他们是体验的一部分。
参观地下酒窖时即便在夏季也会很阴冷，务必带上一件薄外套或披肩。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一天早晨先去托卡伊镇的山顶地标——圣安德拉什教堂，在钟楼下的观景平台俯瞰蒂萨河与博德罗格河交汇形成的半岛，以及远处绵延的葡萄园丘陵全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进托卡伊葡萄酒博物馆，亲手摸一摸古老的酿酒工具，在那些发黄的契约和地图前，想象几个世纪前酒商们在此交易的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后驱车十五分钟前往莫德村，随意敲开一家门口挂着“Borfőző”（酿酒师）招牌的农舍木门，让主人带你钻进他家族传承了百年的地下酒窖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在昏暗如洞穴的酒窖里，就着烛光，从最年轻的餐酒开始，一直品鉴到陈年超过二十年的顶级阿苏精华，感受时间如何让酒液从明亮活泼变得深邃绵长。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到托卡伊镇，沿着蒂萨河畔散步，看夕阳把河水和对岸的葡萄园染成一片金黄，河上的驳船缓缓驶过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天租一辆自行车，沿着标记清晰的“葡萄酒之路”骑行，穿过一个个静谧的村庄，在萨罗什帕塔克村停下来欣赏那座美丽的巴洛克式庄园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`骑到托尔奇瓦村附近，把车停在山脚，沿着小径徒步登上科帕茨山，在山顶的废墟和十字架下，享受被360度葡萄园海洋包围的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后找一个家庭经营的“Csárda”（乡村餐馆），点一份丰盛的匈牙利炖牛肉，配上一杯当地特色的福特明斯干白，完美结束旅程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉科齐城堡遗址远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从托卡伊镇河对岸的公路边拍摄，能将城堡废墟、河流弯道、葡萄园和远山全部纳入构图，画面层次极其丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`莫德村酒窖通道纵深图`}</h4>
                  <p className="text-sm text-gray-700">{`在获得主人允许后，使用三脚架和慢门，在酒窖的主通道向深处拍摄，利用两侧无尽的橡木桶和墙上的黑色霉层，营造出深邃神秘的时间隧道感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`科帕茨山山顶全景`}</h4>
                  <p className="text-sm text-gray-700">{`在晴朗的早晨登上山顶，用广角镜头捕捉晨雾从山谷间缓缓升腾，缠绕在井然有序的葡萄园梯田上的梦幻景象，这是托卡伊作为文化景观的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`托卡伊镇彩色民居与葡萄藤前景`}</h4>
                  <p className="text-sm text-gray-700">{`在托卡伊镇寻找那些外墙刷成明黄、淡蓝的传统民居，以屋前架子上成熟的葡萄串作为前景焦点，拍摄充满生活气息的温馨画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄酒窖内部前，务必先征求主人的明确同意，并绝对禁止使用闪光灯，以免对陈年酒液和脆弱的老霉菌环境造成影响。在葡萄园中拍照时，请严格沿着田埂行走，切勿踩踏或采摘葡萄藤，这是酿酒师们一整年的心血。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻在托卡伊镇一栋18世纪商人住宅改造的精品酒店，房间有裸露的原始石墙和老木梁，早餐能尝到自家后院产的蜂蜜和果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园中心体验`}</h4>
                  <p className="text-sm text-green-800">{`入住莫德村山坡上一家由酿酒师家庭经营的民宿，房间窗户正对无边的葡萄园，晚上安静得只能听到风声，主人会邀请你共进家常晚餐并品尝非卖品私藏酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风艺术居所`}</h4>
                  <p className="text-sm text-yellow-800">{`在萨罗什帕塔克村选择一家将匈牙利传统元素与现代设计完美融合的旅馆，每个房间都摆放着当地艺术家的作品，露台正对古老的巴洛克庄园花园。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`河流静谧时光`}</h4>
                  <p className="text-sm text-purple-800">{`选择蒂萨河畔一座独立的老磨坊小屋，拥有私人的小码头和烧烤区，白天看船只来往，夜晚在星空下聆听流水声，享受彻底的隐居感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`收获季（9-10月）和重大葡萄酒节日期间的住宿非常紧俏，务必提前至少两到三个月预订。托卡伊地区总体治安极好，村民友善，但大部分住宿位于安静的村庄，夜间照明有限，建议随身携带小手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开托卡伊好些天了，舌尖上仿佛还留着那杯六年份阿苏甜酒的余韵——不是单纯的甜，而是一种丰盈的、带着杏干、蜂蜜和一点点火山矿质感的复杂味道，温暖而绵长。这味道像一把钥匙，瞬间就能把你带回到那些丘陵的线条里，带回到酒窖的阴凉与静谧中。我想，托卡伊教给我的，是一种关于“深度”的体验。在这个追求即时满足的世界里，它的一切都要求等待：葡萄要等待贵腐菌的“侵蚀”，酒要在黑暗的地窖里等待数年甚至数十年的陈化，就连这片景观本身，都是人类与自然协作、历经数十代人才雕刻而成的作品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被快速消费的景点，渴望一场能沉入土地、连接历史的旅行，请来托卡伊。它不会用炫目的奇观轰炸你，而是邀请你慢下来，用脚步丈量丘陵，用味蕾阅读风土，用心去聆听这片土地低语了千年的故事。在这里，你会明白，真正的奢华不是金碧辉煌，而是时间沉淀出的厚度，是社区传承的温度，是一杯酒里所蕴含的整个宇宙的阳光、雨水、雾气与人心。这不仅仅是一次葡萄酒产区的探访，更是一次关于耐心、专注与永恒之美的修行。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/early-christian-necropolis-pecs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩奇早期基督教陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Necropolis of Pécs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szentendre-artists-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣安德烈艺术小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szentendre Artists‘ Village</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tokaj-wine-region-historic-cultural-landscape" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托卡伊葡萄酒产区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tokaj Wine Region</p>
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
