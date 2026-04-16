import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰托沃老城 Old Bazaar of Tetovo｜探访马其顿的“彩绘之城”，奥斯曼与巴尔干风情的完美交融 - 最佳欧洲景点',
  description: '穿过几条现代而略显嘈杂的街道，一个转弯，你就跌进了泰托沃老城的时空褶皱里。那股味道首先抓住了你——不是单一的，而是一种混合体：刚出炉的“拜雷克”（Burek）酥皮馅饼热腾腾的黄油香，从铜器店里飘出的金属冷却液的气息，还有空气中隐隐浮动的、来自香料摊的甜椒粉和干薄荷的味道。声音也立刻有了层次，不再是汽...',
}

export default function OldBazaarTetovoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '泰托沃老城', href: '/attractions/old-bazaar-tetovo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`泰托沃老城・Old Bazaar of Tetovo・北马其顿・泰托沃`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过几条现代而略显嘈杂的街道，一个转弯，你就跌进了泰托沃老城的时空褶皱里。那股味道首先抓住了你——不是单一的，而是一种混合体：刚出炉的“拜雷克”（Burek）酥皮馅饼热腾腾的黄油香，从铜器店里飘出的金属冷却液的气息，还有空气中隐隐浮动的、来自香料摊的甜椒粉和干薄荷的味道。声音也立刻有了层次，不再是汽车引擎的轰鸣，而是鹅卵石路上行李箱轮子的咕噜声、咖啡馆里瓷杯轻碰的脆响、以及从远处传来的、若有似无的宣礼塔吟唱。阳光被两旁低矮的、有着宽大屋檐的木石结构店铺切割成明暗交错的条块，照在那些历经数百年被脚步磨得温润发亮的石头上。
这里不像一个纯粹的“景点”，更像这座城市的客厅和厨房。穿着时尚的年轻人和裹着头巾的老太太擦肩而过，彼此点头示意；五金店老板在门口和卖手工羊毛袜的摊贩聊天，隔壁就是飘着电子音乐的手机配件店。生活的毛边和历史的包浆在这里毫无违和地长在一起。最打动人心的，莫过于那种松弛的、未经刻意雕琢的日常感。你突然明白，所谓“活着的遗产”，不是被玻璃罩子保护起来的标本，而是一代代人继续在这里讨生活、晒太阳、闲聊、相爱的地方。
而当你沿着主街走到尽头，那座传说中的“彩绘清真寺”毫无征兆地闯入眼帘时，所有感官的细语瞬间汇成了一声惊叹。那不再是一座建筑，而是一幅巨大的、立体的、沐浴在阳光下的细密画。成千上万片手绘的瓷砖和颜料，在墙面上交织出繁复到令人眩晕的花卉、藤蔓和几何图案，蓝色、绿色、赭石、砖红……色彩饱满得仿佛随时会流淌下来。它不是庄严的，而是欢快的、几乎有点天真烂漫的，像一个关于天国的、最色彩斑斓的梦被永远地砌在了人间。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过几条现代而略显嘈杂的街道，一个转弯，你就跌进了泰托沃老城的时空褶皱里。那股味道首先抓住了你——不是单一的，而是一种混合体：刚出炉的“拜雷克”（Burek）酥皮馅饼热腾腾的黄油香，从铜器店里飘出的金属冷却液的气息，还有空气中隐隐浮动的、来自香料摊的甜椒粉和干薄荷的味道。声音也立刻有了层次，不再是汽车引擎的轰鸣，而是鹅卵石路上行李箱轮子的咕噜声、咖啡馆里瓷杯轻碰的脆响、以及从远处传来的、若有似无的宣礼塔吟唱。阳光被两旁低矮的、有着宽大屋檐的木石结构店铺切割成明暗交错的条块，照在那些历经数百年被脚步磨得温润发亮的石头上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像一个纯粹的“景点”，更像这座城市的客厅和厨房。穿着时尚的年轻人和裹着头巾的老太太擦肩而过，彼此点头示意；五金店老板在门口和卖手工羊毛袜的摊贩聊天，隔壁就是飘着电子音乐的手机配件店。生活的毛边和历史的包浆在这里毫无违和地长在一起。最打动人心的，莫过于那种松弛的、未经刻意雕琢的日常感。你突然明白，所谓“活着的遗产”，不是被玻璃罩子保护起来的标本，而是一代代人继续在这里讨生活、晒太阳、闲聊、相爱的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你沿着主街走到尽头，那座传说中的“彩绘清真寺”毫无征兆地闯入眼帘时，所有感官的细语瞬间汇成了一声惊叹。那不再是一座建筑，而是一幅巨大的、立体的、沐浴在阳光下的细密画。成千上万片手绘的瓷砖和颜料，在墙面上交织出繁复到令人眩晕的花卉、藤蔓和几何图案，蓝色、绿色、赭石、砖红……色彩饱满得仿佛随时会流淌下来。它不是庄严的，而是欢快的、几乎有点天真烂漫的，像一个关于天国的、最色彩斑斓的梦被永远地砌在了人间。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`泰托沃老城`} />
                <InfoRow label="英文名称" value={`Old Bazaar of Tetovo`} />
                <InfoRow label="正式名称" value={`Stara Čaršija, Tetovo`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`泰托沃`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥斯曼帝国时期巴尔干半岛重要的贸易与文化十字路口，见证了数百年伊斯兰、东正教与当地阿尔巴尼亚、马其顿族文化的共存与交融。`} />
                <InfoRow label="建筑特色" value={`以其色彩斑斓、布满精美花卉与几何图案壁画的“彩绘清真寺”为核心，结合了传统奥斯曼时期低矮石木商铺、鹅卵石街道与巴尔干半岛特色的庭院建筑。`} />
                <InfoRow label="建筑风格" value={`以浓郁的晚期奥斯曼风格为主导，融合了巴尔干本土建筑元素，形成了独特的“马其顿奥斯曼”风格。`} />
                <InfoRow label="文化价值" value={`是北马其顿国内文化多元性最直观的活态博物馆，展现了不同宗教与民族社区在漫长历史中如何构建出一种独特的日常生活和谐。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城街区本身全天24小时开放。区域内各商店、咖啡馆营业时间一般为上午9点至晚上10点，部分餐馆会营业至午夜。核心景点彩绘清真寺（Šarena Džamija）的开放时间为每日上午8点至下午6点，周五礼拜期间（通常为中午时段）可能限制游客入内参观。夏季（5月至9月）部分小店会延长营业。冬季（11月至2月）一些家庭式作坊可能提前关门或不定时休息。建议避开重大宗教节日如斋月、复活节等，届时开放情况变化较大。`} />
              <InfoRow label="门票价格" value={`进入泰托沃老城街区免费。彩绘清真寺（Šarena Džamija）参观免费，但欢迎捐赠以支持维护，建议捐赠金额为100-200第纳尔（约合2-4欧元）。其他小型博物馆或历史宅邸如阿拉伯清真寺（Arabati Baba Tekke）可能需要小额门票或自愿捐款，金额在50-150第纳尔不等。无强制门票政策。`} />
              <InfoRow label="地址" value={`Stara Čaršija, 1200 Tetovo, North Macedonia`} />
              <InfoRow label="交通方式" value={`从最近的斯科普里国际机场出发：出机场后，最便捷的方式是乘坐预付费出租车，车程约45分钟至1小时，费用大约在25-35欧元，务必在上车前确认打表或讲好价格。公共交通方面，先从机场打车或乘公交（每30分钟一班）到斯科普里中央汽车站，车程约30分钟。在中央汽车站乘坐前往泰托沃的频繁班车（大巴或小巴），几乎每15-20分钟就有一班，车程约40-50分钟，票价很便宜，约150第纳尔。抵达泰托沃汽车站后，老城（Stara Čaršija）就在步行范围内，跟着人流或询问“Šarena Džamija”（彩绘清真寺）方向，步行10-15分钟即可到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`泰托沃的故事，始于山峦与河流之间天然的十字路口。早在罗马时期，这里就是一条连接亚得里亚海与爱琴海贸易路线上的驿站，但真正赋予它灵魂的，是奥斯曼土耳其人的到来。15世纪，随着帝国版图向巴尔干纵深扩展，泰托沃因其战略位置，迅速发展成为一个繁荣的“卡什夏”（çarşija，即市场城镇）。商队从四面八方涌来，带来了东方的丝绸、香料，也带来了建筑匠人、学者和神秘的苏菲派教团。一座座清真寺、公共浴场和商旅客栈拔地而起，围绕着市场广场，形成了我们今天所见的街区雏形。它不是按照宏伟蓝图规划的，而是像一棵树，顺着贸易和生活的脉络，自然生长开来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城的心脏，那座独一无二的彩绘清真寺，诞生于一个充满悲伤与爱的传奇。时间回溯到1495年，两位来自邻近地区的姐妹——Hurshida和Mensure，在失去至亲后，决定将全部家产和心血倾注于建造一座纪念父亲的清真寺。她们请来的匠人，或许来自更东方的波斯或安纳托利亚，将一种当时在巴尔干极为罕见的装饰艺术带到了这里：用无数手工绘制的瓷砖和鲜艳的矿物颜料，覆盖建筑的每一寸外墙。这不仅仅是为了美观，在伊斯兰艺术中，繁复的植物图案象征着天堂花园的丰饶与永恒。这座清真寺因此成为了姐妹俩悲伤的寄托，也成了泰托沃永恒的地标，被当地人亲切地称为“Šarena”，意为“多彩的”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奥斯曼帝国的统治并非只有和平的贸易。19世纪，民族主义浪潮席卷巴尔干，泰托沃也成为各种力量角力的舞台。然而，有趣的是，在这座老城里，尽管外部世界动荡，不同社区——主要是穆斯林（包括阿尔巴尼亚族、土耳其族）和东正教基督徒（马其顿族）——却发展出一种务实的共生关系。市场是共同的经济血脉，讲价的语言比血统更重要。火灾是老城永恒的敌人，几次大火曾吞噬成片的木结构房屋，但每一次，居民们都会按照原样重建，保留了那低矮、紧凑的街道肌理。这种重建不是简单的复制，而是一种文化记忆的延续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的两次世界大战和南斯拉夫社会主义时期，给老城带来了新的变化。一些宏伟的商旅客栈被改造成了仓库或公寓，宣礼塔的呼唤一度沉寂。但市场的功能从未真正停止。即便是在最一体化的时期，老城的巷弄里依然回荡着多种语言，咖啡馆里弥漫着同样的土耳其咖啡香气。它像一块文化的海绵，吸收着时代的冲击，却始终没有流失自己的底色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当北马其顿在1991年独立后，泰托沃老城面临了新的挑战与机遇。人口流动、全球化冲击着传统手工业。但与此同时，人们也重新发现了其无与伦比的文化价值。不仅是彩绘清真寺得到了精心的修复，那些古老的铜匠铺、理发店、传统咖啡馆也被新一代的店主珍视。今天，漫步其中，你看到的不仅是奥斯曼的遗产，更是一部仍在书写的、关于共存、韧性与日常美好的编年史。每一块彩绘瓷砖的裂缝，每一条被磨亮的鹅卵石，都在低声讲述着这个十字路口小镇如何将历史穿成了日常的衣裳。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味泰托沃老城的精髓，建议安排一整个白天，从上午十点左右开始，一直待到傍晚华灯初上。这个时间可以避开清晨本地人采购的喧嚣，又能完整经历市场从午间热闹到傍晚悠闲的节奏变化。整体游览节奏宜慢不宜快，核心是“逛”和“观察”，而非“打卡”。路线可以设计为从外围到核心，再深入小巷，最后以一处安静的歇脚点结束。先感受市井生活的脉搏，再聚焦于建筑艺术的巅峰，最后在交错的小巷中发现意外之喜，这样的安排能让你由表及里地理解这座老城的层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周五中午是穆斯林的主麻日礼拜，彩绘清真寺可能会暂时对游客关闭约一小时，请合理安排参观时间，保持尊重。老城街道多为凹凸不平的鹅卵石，务必穿一双舒适耐走的平底鞋。对于摊贩的热情招呼，微笑摇头说声“Ne, faleminderit”（不，谢谢）即可，这里商业化程度不高，少有强买强卖。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城西侧入口的现代步行街开始，让自己慢慢适应从21世纪向旧时光的过渡，观察人群和店铺类型的逐渐变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向彩色清真寺前的小广场，不要急于进入，先绕着它走一圈，从不同角度欣赏墙壁上那些令人眼花缭乱的图案在阳光下的细微差别。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入清真寺内部，在铺着厚地毯的静谧空间里坐下片刻，感受从彩色玻璃窗透进来的、被滤成宝石般光彩的光线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`出来后，钻进清真寺背后那条最窄的鹅卵石小巷，这里藏着老式铜匠作坊，听听锤子敲打铜器发出的有节奏的叮当声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返到主商业街，挑一家飘着浓烈咖啡香的老式“卡法纳”坐下，点一杯传统的土耳其咖啡，看街上的行人如同流动的风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街向东闲逛，留意那些卖古董、手工羊毛制品和山间草药的特色小铺，和笑容腼腆的店主简单聊几句。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`脚步引向稍远处的阿拉伯清真寺建筑群，这片宁静的苏菲派修道院花园与喧闹的市场仅一墙之隔，是体验精神静谧面的好地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到彩绘清真寺附近，找一家能看到宣礼塔的 rooftop 酒吧或餐厅，看着夕阳的金色逐渐为整个老城铺上温暖的滤镜。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`彩绘清真寺正门斜侧方`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出建筑立体的浮雕感和色彩饱和度，将部分前景的石板路和行人虚化，能拍出生活与艺术交融的故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老城主要街巷的纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`站在任何一条稍长的小巷入口，利用两侧低矮的木屋作为天然画框，等待一个穿着传统服饰的老人或推着自行车的小贩走进画面中央，捕捉动态的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿拉伯清真寺庭院内的拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的柔光透过精美的木雕窗格，在红砖地面投下富有韵律的光影，构图上可以聚焦于一扇窗，也可以拍下整个拱廊的延伸感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市场摊位色彩特写`}</h4>
                  <p className="text-sm text-gray-700">{`靠近那些堆满鲜艳香料、干燥花朵或手绘陶器的摊位，用大光圈镜头聚焦于物品的纹理和色彩，拍出极具生活气息和视觉冲击力的细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从附近居民楼阳台俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`如果幸运地结识了本地朋友或入住附近民宿，从稍高的位置拍摄老城连绵的红色瓦顶和点缀其中的清真寺圆顶，是最能展现其整体肌理的视角。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄清真寺内部或任何宗教场所内部前，务必征得管理人员的明确许可，并且绝对不要对着正在礼拜的人拍摄。当地人通常很友善，拍摄街景或店铺前，一个微笑和手势征询会让你获得更自然的表情和对方的欢迎。北马其顿的阳光在夏季非常强烈，建议利用日出后和日落前的“黄金小时”进行拍摄，色彩和氛围会柔和动人得多。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`老城边缘由家族经营的“石头之家”客栈，房间简单干净，带有小小的庭院，主人会热情地为你手冲一杯本地草药茶并分享小镇故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落于老城安静一隅的“商队驿站”精品酒店，由一座19世纪的老客栈修复而成，保留了原始的石头墙壁和木梁，夜晚能听到从远处传来的轻柔市井声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城市近郊山腰上的“泰托沃视野”设计酒店，现代简约的风格与窗外历史老城的全景形成震撼对比，无边泳池正对夕阳下的彩绘清真寺圆顶。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`文化沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`选择老城内经过改造的传统住宅民宿，通常自带一个种满葡萄藤的小天井，让你完全融入老城的昼夜节奏，清晨被隔壁面包店的香气唤醒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多以特色民宿和小型精品酒店为主，隔音可能不如现代酒店，但这正是体验的一部分。夏季旺季（7-8月）房源紧张，建议提前数月预订。泰托沃整体治安良好，老城区域夜晚也很热闹安全，但依然建议保管好随身贵重物品。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开泰托沃老城许久，脑海里挥之不去的，不是某一张明信片般的风景，而是一种混合的“感觉”。那是色彩在石头上狂欢的视觉记忆，是咖啡与香料交织的嗅觉地图，是锤打铜器的叮当与宣礼吟唱共存的听觉片段。它没有试图去证明什么宏大的历史叙事，也没有把自己装扮成完美无瑕的博物馆。它坦然展示着自己的褶皱与补丁，让新的广告牌立在百年的老墙旁边，让全球化的商品和祖传的手艺在同一个市场里叫卖。这种“不完美”，恰恰是它最真实、最动人的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个越来越同质化的世界里，泰托沃老城像一个温柔的提醒。它告诉我们，差异并非必然导致冲突，反而可以编织出更丰富、更坚韧的生活图景。它不是一个关于过去的纪念碑，而是一个关于“如何共同生活”的、持续进行的实验。每一位热爱深度游的旅人，都应该来这里走走。不是为了收集又一个景点，而是来上一堂无声的课——关于如何让历史活在呼吸之间，如何在色彩的碰撞中，找到属于人间的、温暖而持久的和谐。在这里，你会找到旅行的终极意义：不是看见奇观，而是理解另一种生活的可能，并带着这份理解，更宽容地看待自己的世界。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
