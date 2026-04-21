import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '西格蒂纳 Sigtuna｜漫步瑞典千年起源的湖畔石板街 - 最佳欧洲景点',
  description: '当你从巴士上跳下来，双脚第一次踏上西格蒂纳的 Stora Gatan——这条号称瑞典最古老的街道时，时间仿佛突然被调低了音量。耳边不再是城市的喧嚣，取而代之的是脚下石板路被踩踏发出的轻微咯吱声，以及从梅拉伦湖（Lake Mälaren）方向吹来的、带着水藻和清新空气味道的风。第一印象绝不是雄伟或震撼...',
}

export default function SigtunaSwedensOldestTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞典', href: '/destinations/sweden' },
            { label: '西格蒂纳', href: '/attractions/sigtuna-swedens-oldest-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`西格蒂纳・Sigtuna・瑞典・西格蒂纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从巴士上跳下来，双脚第一次踏上西格蒂纳的 Stora Gatan——这条号称瑞典最古老的街道时，时间仿佛突然被调低了音量。耳边不再是城市的喧嚣，取而代之的是脚下石板路被踩踏发出的轻微咯吱声，以及从梅拉伦湖（Lake Mälaren）方向吹来的、带着水藻和清新空气味道的风。第一印象绝不是雄伟或震撼，而是一种温柔的、被妥善收藏起来的古老。街道两旁的木房子，漆着奶油黄、淡粉和薄荷绿，在北欧清澈的阳光下显得格外柔软，像一排排巨大的、沉默的糖果盒。
沿着主街慢慢走，你的鼻子会带你找到惊喜。空气里飘散着刚出炉的肉桂卷（Kanelbulle）那温暖甜蜜的焦糖香气，从某扇敞开的咖啡馆门里钻出来。混合着老木头房子里淡淡的、类似旧书和蜂蜡的气息。当地人骑着自行车不紧不慢地掠过，车篮里装着刚买的面包和鲜花，他们向你点头微笑，那种安宁感，让你瞬间明白，这不是一个仅供参观的博物馆，而是一个真实呼吸着、生活着的家园。它的核心魅力，就在于这种“日常的史诗感”——你买咖啡的店铺，可能坐落在一座千年历史的遗址旁；你驻足欣赏的漂亮花园底下，或许就沉睡着维京时代的碎片。
走到街的尽头，视野豁然开朗，一片宽阔平静的湖水展开在眼前。这里是港口，停泊着白色的帆船和鲜艳的小艇，湖水轻轻拍打着古老的木栈道，发出有节奏的哗哗声。在这里，你会清晰地感受到西格蒂纳的脉搏：它曾是通往广阔世界的大门，维京长船和商船在此停靠；如今，它是一扇通向宁静内心的窗。湖对岸是郁郁葱葱的森林，海鸥在头顶盘旋鸣叫，这一切构成了瑞典夏日最经典的画面，纯净得像一幅水彩画。
而最打动人心的，是那种层层叠叠的历史触感。你不必走进博物馆，历史就裸露在街角：一块长满青苔的巨石，是某座11世纪教堂仅存的基座；一片用矮墙标示出的草地，曾是国王的宫殿所在。你就在这过去与现在的交错中漫步，每一步都踩在时间的书页上。这种低调的、需要你稍稍俯身才能察觉的深邃，正是西格蒂纳最迷人的地方。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从巴士上跳下来，双脚第一次踏上西格蒂纳的 Stora Gatan——这条号称瑞典最古老的街道时，时间仿佛突然被调低了音量。耳边不再是城市的喧嚣，取而代之的是脚下石板路被踩踏发出的轻微咯吱声，以及从梅拉伦湖（Lake Mälaren）方向吹来的、带着水藻和清新空气味道的风。第一印象绝不是雄伟或震撼，而是一种温柔的、被妥善收藏起来的古老。街道两旁的木房子，漆着奶油黄、淡粉和薄荷绿，在北欧清澈的阳光下显得格外柔软，像一排排巨大的、沉默的糖果盒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着主街慢慢走，你的鼻子会带你找到惊喜。空气里飘散着刚出炉的肉桂卷（Kanelbulle）那温暖甜蜜的焦糖香气，从某扇敞开的咖啡馆门里钻出来。混合着老木头房子里淡淡的、类似旧书和蜂蜡的气息。当地人骑着自行车不紧不慢地掠过，车篮里装着刚买的面包和鲜花，他们向你点头微笑，那种安宁感，让你瞬间明白，这不是一个仅供参观的博物馆，而是一个真实呼吸着、生活着的家园。它的核心魅力，就在于这种“日常的史诗感”——你买咖啡的店铺，可能坐落在一座千年历史的遗址旁；你驻足欣赏的漂亮花园底下，或许就沉睡着维京时代的碎片。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到街的尽头，视野豁然开朗，一片宽阔平静的湖水展开在眼前。这里是港口，停泊着白色的帆船和鲜艳的小艇，湖水轻轻拍打着古老的木栈道，发出有节奏的哗哗声。在这里，你会清晰地感受到西格蒂纳的脉搏：它曾是通往广阔世界的大门，维京长船和商船在此停靠；如今，它是一扇通向宁静内心的窗。湖对岸是郁郁葱葱的森林，海鸥在头顶盘旋鸣叫，这一切构成了瑞典夏日最经典的画面，纯净得像一幅水彩画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最打动人心的，是那种层层叠叠的历史触感。你不必走进博物馆，历史就裸露在街角：一块长满青苔的巨石，是某座11世纪教堂仅存的基座；一片用矮墙标示出的草地，曾是国王的宫殿所在。你就在这过去与现在的交错中漫步，每一步都踩在时间的书页上。这种低调的、需要你稍稍俯身才能察觉的深邃，正是西格蒂纳最迷人的地方。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`西格蒂纳`} />
                <InfoRow label="英文名称" value={`Sigtuna`} />
                <InfoRow label="正式名称" value={`Sigtuna`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`西格蒂纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞典王国基督教化初期的政治与宗教中心，也是瑞典最早铸造钱币的地方。`} />
                <InfoRow label="建筑特色" value={`一条主街串联起色彩柔和的木结构房屋、古老的石砌教堂遗址和宁静的梅拉伦湖畔风光。`} />
                <InfoRow label="建筑风格" value={`以18-19世纪保存完好的木结构商业建筑为主，混杂着中世纪罗马式教堂的石头废墟。`} />
                <InfoRow label="文化价值" value={`是触摸瑞典国家起源与斯堪的纳维亚中世纪历史的活化石，展现了从维京时代向基督教中世纪过渡的清晰脉络。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要景点如西格蒂纳博物馆（Sigtuna Museum）开放时间为周二至周日 11:00 - 17:00（冬季可能缩短至16:00），周一闭馆。散布各处的中世纪教堂遗址（废墟）全年开放参观。各独立商铺与咖啡馆营业时间不一，通常为10:00 - 18:00。建议出行前在官网核查具体季节的开放时间，瑞典夏季（6-8月）是游览旺季，一切开放时间最长；冬季（12-2月）部分小店可能提前关门或歇业。`} />
              <InfoRow label="门票价格" value={`漫步古镇本身免费。西格蒂纳博物馆门票约80-100瑞典克朗（SEK），学生及青少年享有优惠。镇上的历史教堂（如圣玛丽教堂）免费进入。一些季节性导览游可能需要额外付费。`} />
              <InfoRow label="地址" value={`Stora Gatan 33, 193 30 Sigtuna, Sweden`} />
              <InfoRow label="交通方式" value={`从斯德哥尔摩出发最为便捷。从斯德哥尔摩中央火车站（Stockholm Centralstation）乘坐前往 Märsta 站的 Pendeltåg（通勤列车），约需40分钟，班次频繁（约每10-20分钟一班）。抵达 Märsta 后，在站前广场换乘570或575路巴士，约15分钟即可直达西格蒂纳镇中心的“Sigtuna Busstation”。购票建议使用SL公共交通APP，购买覆盖斯德哥尔摩及周边区域的通票（如24小时票）最为省心。从阿兰达机场（ARN）出发更近，可直接在机场搭乘579路巴士，约30分钟直达西格蒂纳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一千多年前说起。大约公元980年，瑞典第一位皈依基督教的国王——埃里克六世（也叫“胜利者”埃里克），做出了一个具有远见的决定：在梅拉伦湖畔这片肥沃的土地上，建立一个新的城镇。这就是西格蒂纳的诞生。它不是为了战争，而是为了秩序、贸易和新的信仰。你可以想象，在那个维京时代余晖与中世纪黎明交织的年代，西格蒂纳就像一个充满雄心壮志的“初创项目”，国王希望它成为一个展示基督教王国文明与繁荣的样板间。很快，街道被规划得笔直整齐（这在当时非常先进），工匠和商人被吸引而来，更重要的是，这里建起了瑞典第一批石头教堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`西格蒂纳的黄金时代持续了将近两百年。它不仅是重要的贸易枢纽，连接着波罗的海地区和欧洲内陆，更成为了瑞典早期的宗教心脏。据说，瑞典最早的主教区就设在这里。最有趣的实物证据，是那些在这里铸造的、刻着拉丁文“SITUN”字样的银币——这是瑞典货币史的起点。小镇上曾经同时矗立着七座石头教堂，你可以想象当年钟声此起彼伏、信徒络绎不绝的盛景。它甚至短暂地拥有过一座皇家铸币厂和一座本笃会修道院，其地位相当于今天的首都。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的航道改变了。13世纪，随着汉萨同盟的崛起和贸易路线的变迁，更靠近海边的斯德哥尔摩、乌普萨拉等城市迅速发展，吸引了大量的财富和人口。西格蒂纳的内陆湖港优势逐渐减弱。雪上加霜的是战争和劫掠。特别是在1187年，一场来自波罗的海东岸（可能是爱沙尼亚或卡累利阿）的袭击重创了西格蒂纳，许多早期木建筑被焚毁，城镇遭受了沉重打击。这场灾难加速了它的衰落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从那时起，西格蒂纳仿佛进入了漫长的沉睡。它没有消失，只是从历史的聚光灯下悄悄退场，变成了一座安静、次要的湖畔小镇。那些宏伟的石头教堂因为无人使用和维护，渐渐坍塌，只剩下断壁残垣，被青草和野花覆盖。它的主街 Stora Gatan 两旁的木屋，则在18、19世纪被重建或翻新，形成了我们今天看到的、充满田园诗般魅力的模样。正是这种“衰落”，意外地保护了它。因为没有经历大规模的现代化工业改造，中世纪城镇的原始格局和尺度被奇迹般地保存了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了近代，考古学家的铲子开始唤醒这片沉睡的土地。一次次发掘，让西格蒂纳作为“瑞典摇篮”的重要性被重新认知。那些废墟不再被看作是衰败的象征，而是这个国家童年时代的珍贵遗迹。如今，小镇完美地平衡了保护与生活。居民们在这些千年历史的“地基”上过着现代生活，游客则前来寻找源头。西格蒂纳的故事，不是一个关于永恒辉煌的史诗，而是一个关于变迁、韧性以及在平凡中守护非凡的、更加动人的人间叙事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味西格蒂纳，建议安排一整天时间，最好在春夏或初秋晴朗的日子前来。早上十点左右抵达最佳，这时晨雾散尽，光线柔和，旅游团还未大量涌入。游览节奏务必“慢”。整个小镇规模小巧，完全可以用双脚丈量。路线建议从镇中心巴士站开始，先沿着主街由南向北漫步，感受生活气息并参观核心建筑；然后向东折向湖畔，享受宁静的港口风光和野餐氛围；下午专注于探索北部的教堂遗址群和博物馆，最后在夕阳时分回到湖边。这样安排能让你先融入当下小镇的活力，再一步步回溯到时光深处，完成一次从“今”至“古”的沉浸式时间旅行。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末午后主街可能较拥挤，想拍安静街景最好赶早或傍晚。参观教堂遗址时请保持尊重，它们是受保护的历史遗迹，不要攀爬或踩踏石墙。北欧天气多变，即便夏天也建议带一件防风外套，湖边风大。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从镇中心信息中心拿一张地图，然后转身踏入那条著名的 Stora Gatan，让脚步带领你经过每一扇色彩斑斓的木门和橱窗精美的 boutique 小店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街角那家飘着浓烈咖啡香的老牌咖啡馆 Våfflan 稍作停留，点一份现做的华夫饼配越橘酱，坐在窗边看行人悠闲来往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到主街中段仔细寻找并抚摸那几块嵌在建筑外墙上的中世纪 rune stones（如尼石刻），感受指尖下维京先民刻下的古老字母与记忆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步向北走到街道尽头，眼前豁然开朗时，在梅拉伦湖的木质栈道上静静坐一会儿，看帆船划过如镜的水面，听水波轻柔的荡漾声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从湖边折返，深入镇北的居民区，在绿草如茵的公园里寻找圣劳伦斯教堂、圣彼得教堂和圣奥拉夫教堂的遗址废墟，想象它们昔日的尖顶轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观精致的西格蒂纳博物馆，那里收藏着从遗址中出土的维银器、骨骼和中世纪日常器物，将刚才看到的废墟生动地填充完整。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，沿着湖畔小径向南散步至西格蒂纳市政厅，这座红色的可爱小木屋是瑞典最小的市政厅，在花丛中显得格外俏皮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到湖滨，找一张长椅坐下，或是登上港口旁的观景台，看着夕阳的金辉将古老的木屋、教堂废墟和静静的湖水染成一片温暖的蜜色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛丽教堂旁的石墙废墟`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光最能勾勒出古老石块的质感和沧桑纹理，以背后完整的红色木结构教堂为背景，形成新与旧的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`梅拉伦湖港口望向小镇`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在伸入湖中的栈道尽头，用长焦镜头压缩空间，将彩色木屋、教堂尖顶和泊船一同纳入画面，营造童话小镇的静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Stora Gatan 街道纵深`}</h4>
                  <p className="text-sm text-gray-700">{`找一个阳光能洒满石板路的上午，站在街道中段，利用两侧色彩柔和的木屋作为引导线，捕捉一个当地人骑车或走过的瞬间，充满生活故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Rune Stone 特写与环境`}</h4>
                  <p className="text-sm text-gray-700">{`在阳光直射时寻找一块清晰的外墙如尼石，用大光圈贴近拍摄石刻细节，同时虚化背后现代的窗棂或门牌，突显时空交错。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇北部遗址公园全景`}</h4>
                  <p className="text-sm text-gray-700">{`从稍高的草地坡上，用广角镜头俯拍，将散落在绿草地上的几处教堂废墟基座、远处的森林和天空的云朵一同构入一幅苍凉而美丽的画卷。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民房屋和私人花园时请保持礼貌距离，最好征得同意。利用北欧夏季漫长的“黄金小时”（晚上八九点），光线极其柔和温暖，是拍摄人像和风光的绝佳时机。无人机飞行在历史遗址和居民区上空可能有严格限制，务必提前查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔隐居`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在梅拉伦湖边的历史木屋民宿，推开窗就是波光粼粼的湖景，晚上能听到轻柔的水声，房东可能还会提供独木舟让你划向湖心。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`市中心便利之选`}</h4>
                  <p className="text-sm text-green-800">{`主街旁一栋19世纪商人宅邸改造的精品酒店，房间有着高高的天花板和古雅装饰，下楼就是各色咖啡馆和餐厅，完美融入小镇日常。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感避世`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇边缘森林与田野交界处的现代设计酒店，房间充满斯堪的纳维亚极简美学，拥有面朝自然的巨大落地窗和私密桑拿房，适合寻求宁静的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-purple-800">{`镇上一处由古老建筑修复的客栈，保留了原始的木梁和壁炉，房间小巧温馨，早餐是地道的瑞典式自助，仿佛住在老朋友的祖宅里。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`西格蒂纳住宿数量有限，尤其在夏季和周末非常紧俏，务必提前数月预订。住在镇上意味着可以享受游客散去后和清晨时分的绝对宁静，体验感截然不同。小镇治安极好，夜晚独自在湖边或老城区散步也安全感十足。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开西格蒂纳的时候，我的口袋里好像装进了一颗被湖水打磨得温润的鹅卵石。它不像那些用宏伟建筑冲击你视觉的都市，给你一种立刻的、明信片般的赞叹。它的馈赠是缓慢的、渗透性的。它让你习惯了慢下来的脚步，习惯了在寻常街角俯身细看一块石头的纹理，习惯了在湖边的长椅上无所事事地晒一会儿太阳，只是看云看水。这种“慢”与“细”，在当今这个追求效率和刺激的快节奏世界里，成为一种奢侈的疗愈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以值得每一个热爱深度游的旅人前来，正是因为它提供了一种独特的历史参与方式。你不是在隔着玻璃橱窗观看历史，你是在和历史并肩散步，在同一家面包店买面包，被同一片湖面的风吹拂。西格蒂纳告诉你，一个民族的起点可以如此朴素而坚定，辉煌会转移，建筑会倾颓，但生活会在同样的土地上以新的形式延续、绽放。它让你思考什么是永恒——不是不朽的石碑，而是人与土地、与水源、与记忆之间那种绵延不绝的温柔连结。来这里，不只是参观瑞典最古老的城镇，更是找回一种观察世界、感知时间的古老而珍贵的能力。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mantua-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    曼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">曼托瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mantua Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/drottningholm-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卓
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卓宁霍姆宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Drottningholm Palace</p>
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
