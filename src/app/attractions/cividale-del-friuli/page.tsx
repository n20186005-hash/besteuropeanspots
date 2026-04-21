import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奇维达莱德尔弗留利 Cividale del Friuli｜悬崖上的伦巴第古都与幽灵骑士传说 - 最佳欧洲景点',
  description: '车子穿过一片平缓的葡萄园和田野，远远地，你突然看见地平线被一道幽深的绿色裂缝切断。开近些才看清，那不是裂缝，而是一条深邃得让人眩晕的峡谷，而一座小镇，就像是从峡谷对岸的岩石里生长出来的一样，稳稳地坐落在悬崖顶端。这就是奇维达莱给你的第一印象——一种猝不及防的威严和神秘。把车停在古城外，步行穿过现代生...',
}

export default function CividaleDelFriuliPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '奇维达莱德尔弗留利', href: '/destinations/italy' },
            { label: '奇维达莱德尔弗留利', href: '/attractions/cividale-del-friuli' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奇维达莱德尔弗留利・Cividale del Friuli・意大利・奇维达莱德尔弗留利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子穿过一片平缓的葡萄园和田野，远远地，你突然看见地平线被一道幽深的绿色裂缝切断。开近些才看清，那不是裂缝，而是一条深邃得让人眩晕的峡谷，而一座小镇，就像是从峡谷对岸的岩石里生长出来的一样，稳稳地坐落在悬崖顶端。这就是奇维达莱给你的第一印象——一种猝不及防的威严和神秘。把车停在古城外，步行穿过现代生活的边界，时光仿佛瞬间被调慢了。空气里飘着刚煮好的浓缩咖啡的焦香，混合着老房子石墙上潮湿的苔藓气味。脚下是光滑得能照出人影的鹅卵石路，弯弯曲曲，引着你不由自主地往深处走。
你的心跳第一次加速，是在毫无预警地走到“魔鬼桥”边时。这座石桥凌空飞跨在几十米深的纳蒂索涅河峡谷之上，桥下的河水是翡翠混合着孔雀蓝的颜色，在阳光下闪烁，轰隆隆的水声从谷底沉闷地传来，带着凉意往上涌。站在桥中央，扶着粗糙的石栏杆向下望，那种目眩感真实而强烈。当地人慢悠悠地从你身边走过，去桥对面的面包店买早餐，他们对这惊心动魄的景色早已习以为常，而这，恰恰是奇维达莱最迷人的地方——奇观就是日常生活的背景板。
真正让这座小镇拥有灵魂的，是那些石头背后的人。在主干道旁的小广场上，老人们围坐在一起，用你完全听不懂的弗留利语热烈交谈，那种语言的韵律像唱歌一样。咖啡馆的侍者会自豪地告诉你，他们的红酒是本地丘陵产的 Refosco，配火腿一定要用本地的“布鲁斯科”酱。这里没有迎合游客的表演，生活按照自己的古老节奏流淌。最动人的时刻或许是黄昏，当游客散去，夕阳把石灰岩峡谷染成蜂蜜金色，你会看到情侣在魔鬼桥畔拥抱，母亲推着婴儿车在城堡的阴影下散步，整个世界安静得只剩下风声和水声，你感觉自己不是一个闯入者，而是短暂地、被允许分享了这里的一份宁静。
而它的核心魅力，就藏在那座不起眼的“伦巴第圣殿”里。从外面看，它朴素得近乎简陋，但当你推开门，昏暗的光线中，时间仿佛凝固了。八世纪的灰泥浮雕栩栩如生地贴在墙上，那些圣徒、骑士和花纹，带着一股原始而奔放的生命力，直接从那遥远的、被称为“黑暗时代”的中世纪早期凝视着你。那一刻你忽然明白，奇维达莱不是一个“景点”，它是一个依然在呼吸的、活着的千年记忆。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子穿过一片平缓的葡萄园和田野，远远地，你突然看见地平线被一道幽深的绿色裂缝切断。开近些才看清，那不是裂缝，而是一条深邃得让人眩晕的峡谷，而一座小镇，就像是从峡谷对岸的岩石里生长出来的一样，稳稳地坐落在悬崖顶端。这就是奇维达莱给你的第一印象——一种猝不及防的威严和神秘。把车停在古城外，步行穿过现代生活的边界，时光仿佛瞬间被调慢了。空气里飘着刚煮好的浓缩咖啡的焦香，混合着老房子石墙上潮湿的苔藓气味。脚下是光滑得能照出人影的鹅卵石路，弯弯曲曲，引着你不由自主地往深处走。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的心跳第一次加速，是在毫无预警地走到“魔鬼桥”边时。这座石桥凌空飞跨在几十米深的纳蒂索涅河峡谷之上，桥下的河水是翡翠混合着孔雀蓝的颜色，在阳光下闪烁，轰隆隆的水声从谷底沉闷地传来，带着凉意往上涌。站在桥中央，扶着粗糙的石栏杆向下望，那种目眩感真实而强烈。当地人慢悠悠地从你身边走过，去桥对面的面包店买早餐，他们对这惊心动魄的景色早已习以为常，而这，恰恰是奇维达莱最迷人的地方——奇观就是日常生活的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让这座小镇拥有灵魂的，是那些石头背后的人。在主干道旁的小广场上，老人们围坐在一起，用你完全听不懂的弗留利语热烈交谈，那种语言的韵律像唱歌一样。咖啡馆的侍者会自豪地告诉你，他们的红酒是本地丘陵产的 Refosco，配火腿一定要用本地的“布鲁斯科”酱。这里没有迎合游客的表演，生活按照自己的古老节奏流淌。最动人的时刻或许是黄昏，当游客散去，夕阳把石灰岩峡谷染成蜂蜜金色，你会看到情侣在魔鬼桥畔拥抱，母亲推着婴儿车在城堡的阴影下散步，整个世界安静得只剩下风声和水声，你感觉自己不是一个闯入者，而是短暂地、被允许分享了这里的一份宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的核心魅力，就藏在那座不起眼的“伦巴第圣殿”里。从外面看，它朴素得近乎简陋，但当你推开门，昏暗的光线中，时间仿佛凝固了。八世纪的灰泥浮雕栩栩如生地贴在墙上，那些圣徒、骑士和花纹，带着一股原始而奔放的生命力，直接从那遥远的、被称为“黑暗时代”的中世纪早期凝视着你。那一刻你忽然明白，奇维达莱不是一个“景点”，它是一个依然在呼吸的、活着的千年记忆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奇维达莱德尔弗留利`} />
                <InfoRow label="英文名称" value={`Cividale del Friuli`} />
                <InfoRow label="正式名称" value={`Cividale del Friuli`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`奇维达莱德尔弗留利`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座小镇是意大利东北部最重要的早期中世纪中心之一，曾是第一个伦巴第王国在意大利的第一个公国首府，其保存的伦巴第时期建筑与艺术被联合国教科文组织列入世界遗产名录。`} />
                <InfoRow label="建筑特色" value={`一座建立在纳蒂索涅河深邃石灰岩峡谷上的“空中之城”，建筑与险峻的自然地貌浑然天成，以那座传说由魔鬼建造的惊世石桥和藏着无价湿壁画的伦巴第圣殿为核心。`} />
                <InfoRow label="建筑风格" value={`融合了古罗马的城镇规划地基、伦巴第人的石造工艺、以及后续叠加的威尼斯哥特式与文艺复兴风格，呈现出层层叠叠的历史层次感。`} />
                <InfoRow label="文化价值" value={`它是理解伦巴第人如何从入侵者转变为欧洲文化塑造者的活化石，也是弗留利地区独特语言与文化身份的摇篮与守护者。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城全天开放。主要室内景点开放时间各异：伦巴第圣殿（Tempio Longobardo）通常为夏季（4月至10月）9:00-19:00，冬季（11月至3月）10:00-17:00，周一上午可能闭馆；考古博物馆夏季9:00-19:00，冬季10:00-17:00，周一闭馆。具体时间随季节和节日调整，例如圣诞节、元旦及部分当地宗教节日会关闭，建议行前查阅官网确认。`} />
              <InfoRow label="门票价格" value={`进入古城免费。伦巴第圣殿与考古博物馆通票约为10欧元。优惠政策：65岁以上老人、18-25岁青年、学生及教师享有折扣票（约8欧元）；18岁以下未成年人、残疾人及一名陪同者免费。特定文化活动期间（如每月第一个周日）博物馆可能免费开放。`} />
              <InfoRow label="地址" value={`Piazza Paolo Diacono, 1, 33043 Cividale del Friuli UD, Italy`} />
              <InfoRow label="交通方式" value={`从最近的威尼斯马可·波罗机场（VCE）出发，最便捷的方式是乘坐机场大巴至威尼斯梅斯特雷火车站（Venezia Mestre），换乘火车前往乌迪内（Udine），车程约2小时，班次频繁。在乌迪内火车站出口处的公交站，搭乘前往奇维达莱的当地巴士（SAF公司运营），车程约20-30分钟，每小时约1-2班。建议提前在火车站售票处或Tabacchi烟草店购买巴士票。若从的里雅斯特机场（TRS）出发，可先乘机场巴士至的里雅斯特火车站，再乘火车至乌迪内，后续路线相同。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奇维达莱的故事，始于一个我们耳熟能详的名字——尤利乌斯·凯撒。公元前50年左右，这位罗马巨头在此建立了一座军事要塞，命名为“福尔姆·尤利”（Forum Julii），意为“尤利乌斯的广场”，后来整个地区“弗留利”的名字就源于此。在罗马帝国时期，这里是一个重要的战略枢纽，道路从这里辐射向四方。你可以想象罗马军团在此驻扎，商队往来不息，小镇初具规模。但随着西罗马帝国的崩溃，蛮族如潮水般涌入意大利半岛，这里的命运迎来了最戏剧性的转折。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`公元568年，来自潘诺尼亚的伦巴第人，在首领阿尔博因的率领下翻越阿尔卑斯山，入侵了意大利。这群被罗马人视为“野蛮人”的战士，很快看中了福尔姆·尤利险要的地理位置。他们在此建立了在意大利的第一个公国——弗留利公国，并将这里作为首府，小镇也因此获得了新的名字——“奇维塔斯·奥斯特里”（Civitas Austriae），意为“东部的城市”，这便是“奇维达莱”名字的雏形。伦巴第人不仅是战士，他们迅速吸收了罗马的文化、法律和宗教，并在这里留下了最深刻的印记。那个小小的圣殿，就是这一时期信仰与艺术的巅峰之作，它证明了伦巴第人从破坏者到建设者和艺术赞助人的转变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪时期，奇维达莱继续扮演着重要角色。它成为了阿奎莱亚宗主教的领地，宗教权力与世俗权力在此交织。那座令人胆战心惊的“魔鬼桥”，传说是在1213年，市民与当地的泥瓦匠无法在险峻的峡谷上架桥，于是求助魔鬼。魔鬼答应一夜建成，代价是取走第一个过桥者的灵魂。聪明的市民在桥建成后，先赶了一只狗或一只公鸡过桥，欺骗了魔鬼。这个传说背后，是中世纪工匠挑战自然极限的雄心与技艺。随后的几个世纪，它先后被威尼斯共和国和哈布斯堡王朝统治，威尼斯风格的精美宫殿与奥地利式的严谨秩序，又为古城增添了新的层次。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代的奇维达莱相对平静，但也经历了伤痛。第一次世界大战的伊松佐河战役前线就在不远处的山区，小镇也感受到了战争的阴影。二战后期，它更是德国“哥特防线”的一部分，遭受了轰炸。但坚韧的弗留利人一次次重建家园。1975年，弗留利地区发生灾难性的大地震，许多建筑受损，包括珍贵的圣殿。然而，正是这场灾难后的精心修复，让世界重新注意到了这里无与伦比的中世纪遗产，最终促成了它在2011年，以“意大利伦巴第人遗址”的一部分，被列入联合国教科文组织世界遗产名录。今天的它，不再是一个权力的中心，而化作了一个文化的容器，安静地守护着从罗马、伦巴第到威尼斯的一层层历史记忆，在峡谷的风声中，低语着千年的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味奇维达莱，强烈建议留出一整天时间。最佳抵达时间是早上9点前，此时旅游团尚未涌入，晨光柔和，小镇刚刚苏醒，你能独享魔鬼桥的宁静和巷弄里的本真生活。整体游览节奏宜慢不宜快，核心是沿着“历史层叠”的轴线，从罗马地基走到伦巴第圣殿，再感受中世纪与文艺复兴的融合，最后用弗留利的美食与美酒收尾。建议上午专注在峡谷周边和核心历史景点，下午悠闲地探索小巷、购物和参观博物馆，傍晚时分务必回到魔鬼桥或城堡观景台，见证金色的日落将峡谷点燃的魔幻时刻。这样安排能让你从视觉、历史到味觉，全方位沉浸在这座“空中之城”的独特脉动中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`魔鬼桥和圣殿在上午10点后至下午4点间是旅游团高峰，尽量错开。小镇很多地道餐馆需要提前预订，尤其是周末。穿着绝对舒适的平底鞋，因为鹅卵石路和上下坡道对高跟鞋极不友好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站就直奔魔鬼桥，在几乎无人的时刻感受峡谷升腾的薄凉水汽和石桥本身的孤寂魄力，静静聆听纳蒂索涅河在深渊底部的轰鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从魔鬼桥南端穿过，沿着“殉道者之路”的蜿蜒小径下行一段，从峡谷侧面仰望小镇建筑如何从悬崖岩石中“长”出来，这个视角无比震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到镇上，去寻找那座外表极其朴素的伦巴第圣殿，推开厚重的木门让自己瞬间陷入八世纪的昏暗与肃穆，仔细辨认墙上那些栩栩如生的灰泥浮雕人物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步出圣殿，让脚步带领你在以主教宫和保罗·迪亚科诺广场为中心的迷宫里随意穿行，用手触摸不同年代建筑的石墙，感受从罗马石块到威尼斯拱窗的质感变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在本地人推荐的 trattoria 享用漫长的午餐，必点弗留利特色猪脸肉面（Brovada e Muset）和一杯本地白葡萄酒弗留利诺（Friulano），让味蕾也记住这个地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午参观奇维达莱考古博物馆，看看从凯尔特头盔到伦巴第珠宝的珍贵藏品，把上午看到的遗址故事补充上具体的物证。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，走上中世纪城堡所在的丘陵，这里现在是市政厅和一座小博物馆，但最大的奖励是俯瞰整个古城屋顶和远方葡萄园的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，再次回到魔鬼桥附近，找一家能看到峡谷的露天酒吧，点一杯普罗塞克气泡酒，看着夕阳如何将白色的石灰岩崖壁染成炽烈的橙红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`魔鬼桥逆光剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在桥的东侧（小镇一侧），以人物剪影为前景，拍摄桥梁优美的石拱轮廓和后方被晨光或夕照映亮的古城建筑群。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`峡谷仰角透视`}</h4>
                  <p className="text-sm text-gray-700">{`从魔鬼桥南端下方的“殉道者之路”小径找一个开阔处，用广角镜头向上拍摄，将悬崖上色彩斑驳的房屋、桥梁底部以及一线天空全部纳入构图，突出地势之险。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`伦巴第圣殿内部细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用三脚架或高感光度，在室内自然光下（避免使用闪光灯，这是禁止的），近距离拍摄灰泥浮雕的局部特写，捕捉圣徒衣纹的动感和石膏历经千年的质感纹理。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主教宫拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光垂直洒下时，站在保罗·迪亚科诺广场，拍摄威尼斯风格的主教宫拱廊，捕捉光与影在重复拱门和石柱上形成的强烈几何图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚光线柔和时，在城堡前的空地，用中焦段镜头拍摄古城屋顶的瓦片海洋、远处的魔鬼桥以及更后方绵延的弗留利平原与山峦，呈现层次丰富的全景图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`伦巴第圣殿内部严禁使用闪光灯和三脚架（若无特别许可），高感光度和相机防抖是关键。拍摄当地居民，尤其是聚集聊天的老人，务必先微笑并征得同意，他们通常很友善。峡谷边缘拍照务必注意安全，有些地方没有护栏。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由15世纪贵族宅邸改造的民宿，房间有着裸露的原始石墙和木梁，早晨推开百叶窗，直接看到对面教堂的钟楼和安静的鹅卵石小巷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`庄园酒店体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在城外丘陵葡萄园中的农庄住宿，由家族经营，房间充满田园风情，晚餐品尝自家生产的火腿、奶酪和葡萄酒，享受纯粹的弗留利乡村宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻古城内一家将现代设计巧妙融入古老石构建筑的精品酒店，享受极简风格的舒适，屋顶露台是私享魔鬼桥与峡谷日落全景的绝密地点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`舒适型住宿`}</h4>
                  <p className="text-sm text-purple-800">{`位于城门附近步行三分钟可达的舒适酒店，由热情的家庭运营，提供丰盛的意式早餐和详尽的本地游玩地图，是探索古城便捷又温暖的基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且极具特色，尤其在夏秋旅游旺季和周末，务必提前数月预订。选择住在古城内，才能真正体验入夜后和清晨时分，小镇归还给本地人的那种静谧魔力。城外农庄住宿则需要考虑交通，适合自驾的旅客。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奇维达莱许久，那座桥和那个峡谷的景象，还会不时地浮现在眼前。它给我的震撼，不仅仅来自于视觉上的险峻，更来自于一种时空上的错位与连接。站在21世纪的桥上，脚下是轰鸣的中世纪河流，抬头是伦巴第八世纪的目光，而身边走着的是说着古老方言、过着寻常日子的现代人。这里没有那种被精心包装、剥离了生活的“博物馆式”完美，它的一切都是层层叠叠、共生共存的。裂缝般的峡谷是它的伤痕，也是它赖以生存和防御的根基；伦巴第人作为“外来者”的历史，反而成就了它最独特的文化身份。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和网红打卡的时代，奇维达莱像是一个固执的守望者。它不急着向你证明什么，也不喧哗。它只是在那里，让你需要放下速度，用脚步去丈量，用耐心去发现。它告诉你，真正的深度不在于看了多少景点，而在于你是否能感受到一个地方在时光长河中的多重奏鸣，是否能理解一片土地如何将战争、信仰、传说与日常炊烟，统统酿成了自己醇厚而复杂的滋味。对于每一个厌倦了浮光掠影、渴望触摸历史真实纹理的旅人来说，奇维达莱德尔弗留利不是一个目的地，它是一个邀请，邀请你走进一幅依然在缓慢绘制的、活着的千年画卷里，找到那份久违的宁静与深邃。它值得你专程绕道而来，然后，永远记住。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/montepulciano" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特普齐亚诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Montepulciano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veszprem" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">veszprem</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trogir-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗吉尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trogir Old Town</p>
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
