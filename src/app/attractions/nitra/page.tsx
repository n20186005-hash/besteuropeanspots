import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '尼特拉 Nitra｜探访斯洛伐克的灵魂摇篮，在最古老的城市遇见信仰与王权的千年叠影 - 最佳欧洲景点',
  description: '说实话，第一眼看到尼特拉，它可能不会像布拉格或布达佩斯那样用宏大的天际线瞬间击中你。我的旅程始于一个雾气蒙蒙的秋日早晨，从火车站出来，跳上一辆吱呀作响的老式公交车，沿着缓坡盘旋而上。当车子在一个安静的广场停下，我踏上地面，首先闻到的是一种混合了潮湿落叶、远处咖啡馆飘出的烘焙香气，以及古老石墙特有的、...',
}

export default function NitraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '尼特拉', href: '/destinations/slovakia' },
            { label: '尼特拉', href: '/attractions/nitra' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`尼特拉・Nitra・斯洛伐克・尼特拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到尼特拉，它可能不会像布拉格或布达佩斯那样用宏大的天际线瞬间击中你。我的旅程始于一个雾气蒙蒙的秋日早晨，从火车站出来，跳上一辆吱呀作响的老式公交车，沿着缓坡盘旋而上。当车子在一个安静的广场停下，我踏上地面，首先闻到的是一种混合了潮湿落叶、远处咖啡馆飘出的烘焙香气，以及古老石墙特有的、略带凉意的矿物质气味。眼前，一条被岁月打磨得光滑的石阶小径向上延伸，消失在浓密的树荫和薄雾里。这里没有汹涌的人潮，只有几个本地老人提着布袋缓缓走过，和一座沉睡的、山丘上的巨大城堡轮廓——它不像一座仅供观赏的博物馆，更像是这座城市依然跳动的心脏。
沿着石阶向上，脚步声在宁静中显得格外清晰。渐渐地，城堡的全貌从树丛后显露出来。那是一种极其扎实、甚至有些粗犷的美感。它不是童话里的精致城堡，而是由厚重的城墙、敦实的塔楼和一系列不同年代的建筑紧紧拥抱在一起形成的堡垒群。最奇妙的是，你能清晰地看到时间的层次：底层是深色、未经雕琢的古老岩基，中间是颜色较浅的罗马式墙体，而上层则有带着优雅拱窗的文艺复兴宫殿和巴洛克式教堂的圆顶。阳光偶尔刺破云层，瞬间将教堂顶端的金色十字架点燃，那一刹那的光芒，仿佛穿透了数百年的时光。站在城墙边，整个尼特拉平原在脚下铺展开来，红瓦黄墙的小房子像积木一样堆叠，远处是绵延的田野和森林，一种宁静而深厚的土地感将你包围。
走进城堡内的圣埃默拉姆主教座堂，感官的冲击换了一种方式。外面是粗粝的历史，里面则是被信仰精心呵护的静谧空间。光线透过高高的彩色玻璃窗，变成一道道朦胧的、带着灰尘飞舞轨迹的光柱，投射在冰冷的石地板上。空气里有蜡烛燃烧的蜜蜡味、旧木头的沉香，以及一种干净的、类似于石头地窖的清凉气息。偶尔有穿着黑袍的神父悄无声息地走过，或者一两个信徒坐在长椅上低头祈祷，唯一的声响是蜡烛芯细微的噼啪声和自己的呼吸。在这里，你突然明白了，尼特拉的核心魅力不在于某个孤立的惊艳建筑，而在于这种“层叠感”——历史的层叠、信仰的层叠、日常与神圣的层叠。它是一座仍在使用的宗教中心，一个活着的考古现场，一个让斯洛伐克人回顾自身根源的精神家园。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，第一眼看到尼特拉，它可能不会像布拉格或布达佩斯那样用宏大的天际线瞬间击中你。我的旅程始于一个雾气蒙蒙的秋日早晨，从火车站出来，跳上一辆吱呀作响的老式公交车，沿着缓坡盘旋而上。当车子在一个安静的广场停下，我踏上地面，首先闻到的是一种混合了潮湿落叶、远处咖啡馆飘出的烘焙香气，以及古老石墙特有的、略带凉意的矿物质气味。眼前，一条被岁月打磨得光滑的石阶小径向上延伸，消失在浓密的树荫和薄雾里。这里没有汹涌的人潮，只有几个本地老人提着布袋缓缓走过，和一座沉睡的、山丘上的巨大城堡轮廓——它不像一座仅供观赏的博物馆，更像是这座城市依然跳动的心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着石阶向上，脚步声在宁静中显得格外清晰。渐渐地，城堡的全貌从树丛后显露出来。那是一种极其扎实、甚至有些粗犷的美感。它不是童话里的精致城堡，而是由厚重的城墙、敦实的塔楼和一系列不同年代的建筑紧紧拥抱在一起形成的堡垒群。最奇妙的是，你能清晰地看到时间的层次：底层是深色、未经雕琢的古老岩基，中间是颜色较浅的罗马式墙体，而上层则有带着优雅拱窗的文艺复兴宫殿和巴洛克式教堂的圆顶。阳光偶尔刺破云层，瞬间将教堂顶端的金色十字架点燃，那一刹那的光芒，仿佛穿透了数百年的时光。站在城墙边，整个尼特拉平原在脚下铺展开来，红瓦黄墙的小房子像积木一样堆叠，远处是绵延的田野和森林，一种宁静而深厚的土地感将你包围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡内的圣埃默拉姆主教座堂，感官的冲击换了一种方式。外面是粗粝的历史，里面则是被信仰精心呵护的静谧空间。光线透过高高的彩色玻璃窗，变成一道道朦胧的、带着灰尘飞舞轨迹的光柱，投射在冰冷的石地板上。空气里有蜡烛燃烧的蜜蜡味、旧木头的沉香，以及一种干净的、类似于石头地窖的清凉气息。偶尔有穿着黑袍的神父悄无声息地走过，或者一两个信徒坐在长椅上低头祈祷，唯一的声响是蜡烛芯细微的噼啪声和自己的呼吸。在这里，你突然明白了，尼特拉的核心魅力不在于某个孤立的惊艳建筑，而在于这种“层叠感”——历史的层叠、信仰的层叠、日常与神圣的层叠。它是一座仍在使用的宗教中心，一个活着的考古现场，一个让斯洛伐克人回顾自身根源的精神家园。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`尼特拉`} />
                <InfoRow label="英文名称" value={`Nitra`} />
                <InfoRow label="正式名称" value={`Nitra`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`尼特拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克基督教与王权的诞生地，承载着这个中欧民族最古老的城市记忆与国家意识的源起。`} />
                <InfoRow label="建筑特色" value={`一座从平原拔地而起的石灰岩山丘上，城堡、教堂与宫殿建筑层层叠叠，共同构筑了俯瞰整片“尼特拉河畔”的壮丽全景。`} />
                <InfoRow label="建筑风格" value={`一部立体的石头史书，融合了可追溯至大摩拉维亚时期的古老基石、罗马式的厚重、哥特式的尖耸、文艺复兴的规整与巴洛克的繁复装饰。`} />
                <InfoRow label="文化价值" value={`斯洛伐克民族意识与天主教信仰双重意义上的“摇篮”，其存在本身即是这个年轻国家千年历史连续性的最有力证明。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`尼特拉城堡区域（包括大教堂、主教宫等建筑群）全年对公众开放，外部广场和花园可自由进入，具体建筑内部开放时间因季节而异。通常夏季（4月至10月）开放时间为周二至周日的9:00至17:00；冬季（11月至3月）开放时间缩短，常为10:00至15:30，且部分室内展区（如博物馆）可能在周一闭馆。重要宗教节日期间，教堂仅对礼拜者开放，游览可能受限，建议行前在官方网站查询最新日程。`} />
              <InfoRow label="门票价格" value={`进入城堡山区域及教堂外围免费。参观核心建筑群需购买联票，基础票价约为8欧元，包含主教宫历史展览、大教堂宝藏室及考古博物馆。学生、65岁以上老人可享受约50%的折扣优惠，6岁以下儿童免费。另有仅参观大教堂的简略票，价格约为3欧元。门票通常在城堡入口处的游客中心购买。`} />
              <InfoRow label="地址" value={`Nitriansky hrad, 949 01 Nitra, Slovakia`} />
              <InfoRow label="交通方式" value={`从斯洛伐克首都布拉迪斯拉发出发最为便捷。在布拉迪斯拉发中央火车站（Hlavná stanica）乘坐前往尼特拉的区间火车，车程约1.5小时，班次频繁，每小时约有1-2班，票价经济。若从布拉迪斯拉发机场直接前往，可先乘坐巴士到市中心火车站转火车。抵达尼特拉火车站后，出站便是公交枢纽，乘坐公交车前往“Zobor”或“Nitriansky hrad”站（约10分钟车程），或沿着清晰的标识步行上山（约25-30分钟），即可抵达城堡山脚。建议购买斯洛伐克铁路的电子票，方便快捷。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲尼特拉的故事，我们得把时钟拨回到公元9世纪，那时候，“斯洛伐克”这个概念还不存在，这片土地属于强大的大摩拉维亚帝国。公元828年，一个决定性的时刻在这里发生：在如今城堡所在的这座山丘上，一座献给圣埃默拉姆的教堂被祝圣。这可不是普通的教堂，它是在整个帝国领土上建立的第一座基督教教堂，比著名的梅特涅王子邀请西里尔和美多德兄弟来传教还要早几十年。你可以想象，在广袤的中欧平原上，这个山丘就像一座精神的灯塔，标志着基督教正式在这片斯拉夫土地上扎下了根。当时的尼特拉，不仅是帝国的关键堡垒，更是其灵魂所在。最初的木制堡垒和教堂，就奠定了它千年不变的“圣城”基调。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`好景不长，大摩拉维亚帝国在10世纪初瓦解，匈牙利人骑马而来，征服了这片区域。但尼特拉的重要性并未衰减，它成了匈牙利王国里一个特殊的“尼特拉公国”的中心，由国王的兄弟或儿子统治，几乎是国中之国。11世纪，这里建立了主教区，那座最初的圣埃默拉姆教堂被更坚固的罗马式巴西利卡所取代。石头开始取代木材，但山丘的神圣性有增无减。13世纪中叶，蒙古铁骑如风暴般席卷东欧，所到之处一片焦土。尼特拉也未能幸免，木质部分被焚毁。然而，正是这场灾难催生了今天我们看到的城堡雏形。灾难过后，人们用石头和决心重建了一切，并且建得更高、更坚固。一座巨大的防御城堡拔地而起，将教堂和宫殿牢牢护卫其中，尼特拉从此以“坚不可摧的岩石”形象进入新的世纪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几百年，它一直是天主教会在上匈牙利地区（即今天的斯洛伐克）的最重要堡垒。文艺复兴时期，主教们不仅加固城墙，还增建了舒适的主教宫，为这座军事堡垒增添了几分人文气息。但真正的考验在16-17世纪，奥斯曼帝国的阴影笼罩整个中欧。尼特拉成了抵抗土耳其人北进的关键前线。城墙被加厚，碉堡被增建，整个城堡变成了一个庞大的兵营和避难所。那段时期，钟声可能不仅是召唤祈祷，更是警示敌人来袭。正是在这种长期的紧张对峙中，城堡的建筑不断被改造、强化，各种风格杂糅在一起，形成了一种独特的、为生存而战的建筑表情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`危险过去后，18世纪带来了巴洛克式的华丽转身。在相对和平的岁月里，主教们开始用那个时代最流行的风格装饰他们的家园。圣埃默拉姆主教座堂内部被改造，添加了华丽的灰泥装饰、镀金雕塑和精美的祭坛画。陡峭的阶梯被加上优雅的铸铁栏杆。城堡从一座纯粹的防御工事，变得更加宜居，更像一个展示教会权威与艺术品味的总部。19世纪，斯洛伐克民族复兴的星星之火开始点燃，作为最古老、最具历史象征意义的城市，尼特拉自然成为知识分子和爱国者们回溯民族历史、寻找身份认同的重要地点。这里的每一块石头，都仿佛在诉说着斯洛伐克人早于匈牙利统治时期就已存在的辉煌过往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的两次世界大战和政治巨变，尼特拉都安然度过，虽然有些伤痕，但骨架完好。二战后，随着斯洛伐克成为捷克斯洛伐克的一部分，以及后来独立成国，尼特拉城堡经历了细致的修复和考古研究。那些深埋在地基下的大摩拉维亚时期教堂遗迹被小心发掘并展示，真正将这座城市的历史纵深拉长到了一千二百年。今天，你漫步其中，脚下可能踩着9世纪的铺地砖，手触摸的是11世纪的墙垣，眼睛看到的是18世纪的穹顶画。它不再需要抵御外敌，而是成为斯洛伐克人，以及每一个来访者，理解这片土地复杂而坚韧灵魂的一把关键钥匙。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味尼特拉，我强烈建议你留出一整天时间，并遵循“由上至下，再由下至上”的节奏。最佳抵达城堡山脚的时间是早上九点左右，这时旅行团尚未涌入，晨雾可能还未散尽，城堡在宁静中显得格外肃穆。上午先用2-3小时沉浸式探索城堡建筑群内部，从历史的源头开始你的旅程。午后下山，用2小时漫步尼特拉老城狭窄的街道，感受当地人的生活脉搏，找家咖啡馆解决午餐。傍晚时分，当阳光变得金黄柔和，再次拾级而上，回到城堡外围的城墙或观景平台。这时，你会看到白日庄重的古迹披上温暖的光泽，整座城市在夕阳下缓缓沉静，完成一次从历史到当下再回归历史的完美循环。这样的安排既能避开最高峰的人流，又能捕捉到一天中最美的光线与氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日许多商店和部分博物馆可能关门，但教堂活动多，体验氛围正好，需提前规划餐饮。
城堡山的上山石阶有些陡峭且年代久远，务必穿一双舒适防滑的鞋子，雨天更需小心。
教堂是仍在使用的宗教场所，参观时请保持安静与 respectful，遇到弥撒仪式应静观或悄然离开。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡山东侧的古老石门“瓦茨拉夫门”进入，抚摸那冰凉而粗糙的巨石，瞬间跨入中世纪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往城堡建筑群的核心圣埃默拉姆主教座堂，先在静谧的侧殿坐下，让眼睛适应昏暗的光线，感受数百年来无数祈祷汇聚成的宁静力场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细探寻教堂地下室的考古发掘现场，那里玻璃地板下展示着9世纪最原始教堂的基石，是直接与大摩拉维亚先民对话的窗口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上连接教堂与主教宫的宏伟双层阶梯，在阶梯中间的平台上停留，回头俯瞰教堂中殿和精美的管风琴，这个角度是内部建筑的绝佳观赏点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观主教宫内的尼特拉博物馆，不要错过那些展示早期斯拉夫人珠宝和武器的展柜，它们让书本上的历史变得可触可感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的小门出来，沿着古老的城墙步道慢慢走，找一个正对广阔平原的垛口，让微风拂面，尽情感受这座堡垒选址的战略威严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山穿过绿树成荫的公园小径，步入尼特拉老城的中心街区，在那些色彩柔和、带有新艺术运动风格立面的建筑间随意穿行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在斯沃博达广场旁的百年老店“Koliba”里点一份传统的斯洛伐克羊奶酪饺子和酸菜汤，用味蕾连接这片土地的灵魂。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡外墙拐角处仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光最能勾勒出城堡建筑群层层叠叠的轮廓与石材的质感，用广角镜头将前景的古老石墙与后景的教堂尖塔一同纳入。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主教座堂内部彩窗光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午时分阳光最盛时，站在中殿侧面，等待阳光穿透描绘着圣徒故事的彩色玻璃窗，在地面投下梦幻般的光影图案，捕捉这瞬息万变的神圣光线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城通往城堡的拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在老城一侧，通过古老的拱门门洞拍摄远处山丘上的城堡全景，利用门洞形成天然画框，增加照片的纵深感与故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主教宫殿的螺旋楼梯俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`参观完博物馆后，留意宫殿内那座优美的巴洛克风格螺旋楼梯，从上方向下拍摄，能获得具有强烈几何美感和纵深的作品。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西侧城墙观景台日落`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时抵达西侧城墙，将相机对准平原和城市，等待落日将天际线染成橙红，城堡的剪影与万家灯火渐次亮起的城市交织成画。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄务必关闭闪光灯，尊重宗教场所规定，有些区域可能明确禁止摄影，请留意标识。`}</li>
                <li>• {`使用广角镜头（如16-35mm）能更好地捕捉城堡建筑的宏伟和内部空间的广阔。`}</li>
                <li>• {`如果想要拍摄当地人的日常生活场景，请务必先微笑示意并征得同意，斯洛伐克人普遍友善但注重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城广场附近由老房子改造的温馨公寓，房东常会送上自酿的李子白兰地，晚上能听见广场上轻柔的音乐声，生活气息十足。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在城堡山脚下幽静街区里的精品酒店，由一栋19世纪别墅改建，房间天花板保留着 original 的彩绘装饰，花园里就能仰望城堡夜景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于尼特拉郊区一座宁静庄园内的四星级酒店，拥有宽敞的 Spa 中心和室内泳池，客房阳台直面田园风光，是探索一天后完美的奢华休憩所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`学生背包客最爱`}</h4>
                  <p className="text-sm text-purple-800">{`市中心火车站附近的现代青年旅舍，提供整洁的床位和丰富的公用厨房，是结识国际旅伴、交流旅行故事的绝佳社交中心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）和重大宗教节日期间是尼特拉的旺季，住宿最好提前1-2个月预订，尤其是特色精品酒店。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择住在老城（Staré Mesto）区域最能体验古城韵味，且步行即可到达城堡山，最为便利。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`尼特拉整体治安良好，但无论住在哪里，夜间在偏僻街道独自行走保持基本的警惕总是好的。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开尼特拉的时候，我背包里好像不仅装了纪念品，还装进了一种沉甸甸的、关于“根基”的实感。在这个崇尚新奇与速食文化的时代，尼特拉倔强地、安静地矗立在那里，像一位沉默的祖母，不需要大声宣扬自己的年岁，她的每一道皱纹里都写满了故事。它不像那些被精心包装成明信片的旅游热点，这里没有浮躁的商业气息，有的只是一种从容的、与土地和历史深深连接的存在状态。在这里，你能触摸到斯洛伐克这个民族心跳的源头——那种在强邻环伺中保存自我语言的韧性，在信仰中找到精神支柱的虔诚，以及在平凡日常里守护传统的温柔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了仅仅在景点清单上打卡，如果你渴望一次真正能沉静下来、与历史对话的旅行，那么请务必来尼特拉。它或许不会给你即时的、爆炸性的视觉狂欢，但它会像一涓细流，慢慢浸润你的感知。当你站在那座山丘上，看夕阳将千年石头染成金黄，看尼特拉河在平原上静静流淌，你会突然理解，什么是“时间的重量”，什么是“文明的层积”。这是一次回归源头的朝圣，一次关于“我们何以成为我们”的沉思。尼特拉，这个斯洛伐克的灵魂摇篮，最终也会在你的记忆里，孵育出一份对古老欧洲更深沉、更温厚的爱。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
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
              <a href="/attractions/den-gamle-by" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔胡斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Den Gamle By</p>
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
