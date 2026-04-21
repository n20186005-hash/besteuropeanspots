import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库夫施泰因要塞 Kufstein Fortress｜蒂罗尔雄鹰，悬崖上的英雄管风琴之声 - 最佳欧洲景点',
  description: '第一眼看到库夫施泰因要塞，你一定会被它的气势震住。它就那么稳稳地、甚至有些霸道地盘踞在整座城市上方一块陡峭的石灰岩山丘上，赭石色的城墙与背后墨绿色的森林、更远处淡蓝色的阿尔卑斯山峦形成强烈的层次。坐进那辆小巧的 panoramic缆车缓缓上升时，脚下老城红色屋顶的民居像积木一样铺开，因河如一条碧绿的...',
}

export default function KufsteinFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '库夫施泰因', href: '/destinations/austria' },
            { label: '库夫施泰因要塞', href: '/attractions/kufstein-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库夫施泰因要塞・Kufstein Fortress・奥地利・库夫施泰因`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到库夫施泰因要塞，你一定会被它的气势震住。它就那么稳稳地、甚至有些霸道地盘踞在整座城市上方一块陡峭的石灰岩山丘上，赭石色的城墙与背后墨绿色的森林、更远处淡蓝色的阿尔卑斯山峦形成强烈的层次。坐进那辆小巧的 panoramic缆车缓缓上升时，脚下老城红色屋顶的民居像积木一样铺开，因河如一条碧绿的丝带穿城而过，而你正被送往一个脱离日常的、属于历史和传说的国度。
当你双脚真正踏上要塞宽阔的庭院，那种感觉更奇妙了。耳边是风声，是远处教堂的钟声，还有森林里传来的清脆鸟鸣。空气里有股好闻的味道——是阳光晒暖了古老石头的气息，混合着木头、苔藓和远处咖啡馆飘来的淡淡咖啡香。这里不像某些被过度修复的城堡像个精致的标本，库夫施泰因要塞有一种“活着的”粗糙感。墙面斑驳，石阶被无数双脚磨得发亮，你能触摸到岩石的冰冷与坚硬。最打动人的是，这座要塞并非孤悬于世，它就像一位沉默的祖父，日日夜夜俯瞰和保护着脚下整个库夫施泰因的生活。当地人抬头就能看见它，它早已是城市心跳的一部分。
而它最独一无二的灵魂，在于声音。每天正午十二点，整个世界仿佛都会为它静止。那时，从要塞最高处那座塔楼里，会传出低沉、庄严、响彻全城的管风琴乐声。那就是著名的“英雄管风琴”，世界上最大的露天管风琴。当那浑厚的音符滚过山谷，振动空气，拂过你的皮肤时，你瞬间就明白了——这不是一个仅供观赏的景点，这是一座用石头和音乐共同铸就的纪念碑。它纪念着战争与和平，纪念着牺牲与重生，它用最艺术的方式，将历史的沉重转化为能抚慰人心的力量。那一刻，站在悬崖边，你会觉得整个蒂罗尔的灵魂都在这音乐里了。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到库夫施泰因要塞，你一定会被它的气势震住。它就那么稳稳地、甚至有些霸道地盘踞在整座城市上方一块陡峭的石灰岩山丘上，赭石色的城墙与背后墨绿色的森林、更远处淡蓝色的阿尔卑斯山峦形成强烈的层次。坐进那辆小巧的 panoramic缆车缓缓上升时，脚下老城红色屋顶的民居像积木一样铺开，因河如一条碧绿的丝带穿城而过，而你正被送往一个脱离日常的、属于历史和传说的国度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你双脚真正踏上要塞宽阔的庭院，那种感觉更奇妙了。耳边是风声，是远处教堂的钟声，还有森林里传来的清脆鸟鸣。空气里有股好闻的味道——是阳光晒暖了古老石头的气息，混合着木头、苔藓和远处咖啡馆飘来的淡淡咖啡香。这里不像某些被过度修复的城堡像个精致的标本，库夫施泰因要塞有一种“活着的”粗糙感。墙面斑驳，石阶被无数双脚磨得发亮，你能触摸到岩石的冰冷与坚硬。最打动人的是，这座要塞并非孤悬于世，它就像一位沉默的祖父，日日夜夜俯瞰和保护着脚下整个库夫施泰因的生活。当地人抬头就能看见它，它早已是城市心跳的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最独一无二的灵魂，在于声音。每天正午十二点，整个世界仿佛都会为它静止。那时，从要塞最高处那座塔楼里，会传出低沉、庄严、响彻全城的管风琴乐声。那就是著名的“英雄管风琴”，世界上最大的露天管风琴。当那浑厚的音符滚过山谷，振动空气，拂过你的皮肤时，你瞬间就明白了——这不是一个仅供观赏的景点，这是一座用石头和音乐共同铸就的纪念碑。它纪念着战争与和平，纪念着牺牲与重生，它用最艺术的方式，将历史的沉重转化为能抚慰人心的力量。那一刻，站在悬崖边，你会觉得整个蒂罗尔的灵魂都在这音乐里了。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库夫施泰因要塞`} />
                <InfoRow label="英文名称" value={`Kufstein Fortress`} />
                <InfoRow label="正式名称" value={`Kufstein Fortress`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`库夫施泰因`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座雄踞山岩的要塞是蒂罗尔州东部历史与权力的象征，数个世纪以来都是巴伐利亚与蒂罗尔之间战略争夺的焦点。`} />
                <InfoRow label="建筑特色" value={`一座依险峻山势而建的庞大防御工事群，将天然岩石与厚重城墙完美融合，其标志性的圆形“帝王塔”高耸入云。`} />
                <InfoRow label="建筑风格" value={`主要体现中世纪军事建筑的坚固与实用，并在后期修缮中融入了文艺复兴和巴洛克风格的装饰元素。`} />
                <InfoRow label="文化价值" value={`不仅是军事堡垒，更是蒂罗尔人身份认同的丰碑，其世界闻名的“英雄管风琴”将建筑本身升华为一座纪念和平与牺牲的巨型乐器。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，每日上午9点至下午5点。夏季（5月至9月）延长开放至下午6点。英雄管风琴每日中午12点准时演奏，夏季傍晚6点增加一场。12月24日及部分法定假日开放时间可能缩短或关闭，建议行前在其官网确认。`} />
              <InfoRow label="门票价格" value={`成人票15欧元，6-15岁青少年票8欧元，家庭票（2成人+最多3名儿童）35欧元。票价已包含上下山的 panoramic缆车费。持“蒂罗尔欢迎卡”可享门票折扣。另有包含语音导览或向导讲解的组合票可供选择。`} />
              <InfoRow label="地址" value={`Oberer Stadtplatz 6, 6330 Kufstein, Austria`} />
              <InfoRow label="交通方式" value={`从最近的因斯布鲁克机场出发，搭乘巴士或火车前往库夫施泰因火车站最为便捷。火车班次频繁，车程约50分钟，沿途尽览阿尔卑斯山谷风光。从慕尼黑中央火车站出发，也有直达库夫施泰因的火车，车程约1小时10分钟。抵达库夫泰因火车站后，出站即可望见雄踞山岩的要塞，步行穿过老城区约10-15分钟即可抵达山下缆车站，缆车每15分钟一班，2分钟即可直达要塞入口，非常轻松。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`库夫施泰因的故事，几乎就是一部用石头写成的欧洲边境争夺史。早在13世纪初，这里的山岩上就出现了第一座城堡的雏形，因为它扼守着因河河谷这条连接南北欧的天然通道，战略地位太要命了。谁控制了这里，谁就捏住了蒂罗尔和巴伐利亚之间的咽喉。最初的领主们你方唱罢我登场，但真正让库夫施泰因要塞脱胎换骨的，是那位传奇的马克西米利安一世皇帝。15世纪末，这位雄心勃勃的哈布斯堡君主从巴伐利亚人手中夺回了要塞，他可不满足于修修补补。他投入巨资，把它打造成一座坚不可摧的边境堡垒，尤其是修建了那座令人望而生畏的圆形主塔楼，后来被称为“帝王塔”。这不仅仅是为了防御，更是一种强大的权力宣告：看，蒂罗尔是朕的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平总是短暂的。接下来的几个世纪，库夫施泰因就像一颗珍贵的棋子，在巴伐利亚维特尔斯巴赫家族和奥地利哈布斯堡家族之间反复易手。战争的硝烟一次次熏黑它的城墙。最惨烈的一次发生在1703年西班牙王位继承战争期间，巴伐利亚军队围攻要塞，战斗异常激烈。你能在今天的博物馆里看到当时留下的炮弹残骸，想象那种震耳欲聋的轰鸣。但石头是沉默的见证者，它见证了士兵的鲜血，也见证了普通民众在城墙内寻求庇护的恐慌。拿破仑战争的风暴同样席卷了这里，1809年，蒂罗尔自由战士安德烈亚斯·霍费尔领导的起义军曾与巴伐利亚和法国军队在这里激战，要塞几度易主，墙上又添新伤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争终于过去，但要塞的军事用途也渐渐走入历史。20世纪初，它面临着一个关乎存续的问题：是任其荒废，还是赋予它新的意义？一个充满人文关怀的构想诞生了——建造“英雄管风琴”。这不是一时兴起的艺术项目，而是一次深刻的文化救赎。管风琴的建造始于1931年，其初衷是为了纪念第一次世界大战中所有阵亡的蒂罗尔人。工匠们将超过4300根音管巧妙地嵌入坚固的岩石塔楼内部，使之与建筑融为一体。从此，每日响彻山谷的，不再是炮火声，而是抚慰灵魂的巴赫、布鲁克纳的乐章。音乐取代了战争，纪念取代了仇恨，这座曾经的军事机器，被彻底转化为一座象征和平与追忆的圣殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，当你漫步在要塞中，你能清晰地读到这些历史层叠的印记。中世纪的地牢阴冷潮湿，文艺复兴时期增建的宫殿走廊则有着优雅的拱窗，巴洛克式的装饰若隐若现。而在近代修复的部分，又采用了更现代简洁的手法。它就像一本立体的历史书，每一任主人都在上面留下了自己的笔迹。从防御工事到国家纪念碑，再到如今的文化场所与音乐殿堂，库夫施泰因要塞完成了一次惊人的蜕变。它不再令人恐惧，反而因其承载的厚重记忆与最终选择的和平之声，而令人深深敬畏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受库夫施泰因要塞的晨昏之美与精神内核，建议安排至少4-5小时的深度游览。最佳抵达时间是上午10点前，这时旅行团大军尚未抵达，你能享受一份悬崖之上的清静。游览节奏宜张弛有度：先乘缆车上山，以宏大的全景建立第一印象；然后重点沉浸在英雄管风琴的震撼与堡垒博物馆的细节里；接着挑战帝王塔登顶，收获极致视野；最后留出时间在庭院或咖啡馆放松，消化所有的感官与历史冲击。务必把正午12点牢牢圈出来，那是整个游览的灵魂时刻，必须身处要塞之内，亲耳聆听那场音乐洗礼。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必在官网提前查看英雄管风琴的当日演奏时间，夏季可能增加场次，这是不容错过的核心体验。山区天气多变，即便夏日也建议带一件防风外套，塔顶风大。穿着舒适防滑的鞋子至关重要，因为要塞内多是凹凸不平的石板路和陡峭的楼梯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐 panoramic缆车缓缓上升，透过玻璃全景式俯瞰红顶老城与蜿蜒的因河逐渐在脚下展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往英雄管风琴的演奏台，在临近正午的安静中先仔细观察那嵌入岩壁的密密麻麻的音管，为即将到来的听觉盛宴做好准备。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在管风琴震撼灵魂的乐声逐渐消散于山谷后，带着那份肃穆的心情步入凉爽的堡垒博物馆，让那些古老的武器、盔甲和历史文件为你讲述石头背后的真实故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着略显昏暗的螺旋石阶深入地下堡垒，伸手触摸冰冷潮湿的岩壁，在模拟的幽暗地牢氛围里体会中世纪囚徒的绝望。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起劲儿攀登“帝王塔”那令人眩晕的旋转楼梯，登上塔顶露天平台，让360度的阿尔卑斯山全景像巨幅画卷一样猛烈冲击你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔楼下的古老庭院咖啡馆找一张户外桌子坐下，点一杯经典的“维也纳咖啡”，看着阳光在沧桑的城墙上缓慢移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，别急着坐缆车下山，不妨选择沿着那条被称为“要塞小径”的森林步道漫步而下，从不同角度回望这座庞然大物，感受它与自然环境的完美融合。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`缆车车厢内向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`在缆车上升或下降过程中，将相机镜头紧贴玻璃，可以拍到要塞城墙与下方老城屋顶同框的经典纵深画面，清晨或傍晚的光线最为柔和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`帝王塔顶全景框景`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔顶后，不要只拍大广角，尝试用塔楼本身的石拱门或瞭望孔作为画框，框住远处连绵的阿尔卑斯雪山峰顶，构图立刻充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下堡垒光影通道`}</h4>
                  <p className="text-sm text-gray-700">{`参观地下堡垒时，留意那些由狭小射灯照亮的漫长石廊，等待其他游客走过的瞬间，拍下他们身影被拉长投射在古老石壁上的剪影，氛围感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`英雄管风琴演奏台仰角`}</h4>
                  <p className="text-sm text-gray-700">{`在管风琴演奏台下方，以极低的仰角拍摄巨大的音管阵列直指天空的画面，同时将一部分岩石天花板纳入构图，突出其与建筑一体的震撼力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`要塞南侧森林步道远眺`}</h4>
                  <p className="text-sm text-gray-700">{`下山时在森林步道的第一个开阔拐角处回望，可以拍到要塞全景被秋日黄叶或夏日绿荫环绕的绝美画面，适合长焦镜头压缩空间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄需格外谨慎，务必提前查询当地法规，因靠近边境和民用空域，部分区域可能严格禁飞。室内博物馆展区通常禁止使用闪光灯，请自觉遵守。拍摄当地居民或游客时，请保持礼貌，尽量先征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一座由15世纪商人之家改造的精品酒店，木质天花板和古老的石墙都被完好保留，晚上能听到隐约的因河流水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-green-800">{`坐落在要塞对面山坡上的家庭式公寓，拥有直面要塞的超大露台，房东会为你准备好新鲜的早餐篮，你可以对着“城堡景”享受每一餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风尚之选`}</h4>
                  <p className="text-sm text-yellow-800">{`由河边旧厂房改造的设计师酒店，工业风 loft 与阿尔卑斯元素混搭，巨大的窗户直接将要塞框成一幅活的壁画，时尚又充满个性。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间静谧之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于附近村庄的高山农庄民宿，需要短途车程，但能享受绝对的宁静，清晨在奶牛铃铛声中醒来，推开窗是满眼草甸和远处云雾缭绕的要塞剪影。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和圣诞市场期间是绝对旺季，务必提前数月预订，尤其是景观房。老城区住宿停车位普遍紧张，自驾者最好选择提供车位的酒店或使用公共停车场。库夫施泰因治安极好，夜晚独自在老城散步也十分安全惬意。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开库夫施泰因要塞很久以后，那管风琴的声音还会偶尔在脑海里回响。我发现，我记住的不仅是它的雄伟外观或博物馆里的某件展品，而是一种复杂的“感觉”。那是一种由坚硬的石头、辽阔的视野、深沉的音乐共同调和而成的独特氛围。它教会我一件事：真正的力量，最终不是用来征服和摧毁的。马克西米利安皇帝用石头展示力量，是为了守护疆土；而后来的人们用音乐展示力量，是为了守护记忆与和平。这座要塞从一件武器变成一件乐器，这本身就是人类文明最动人的一次升级。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求瞬时刺激、景点打卡的快节奏世界里，库夫施泰因提供了一种截然相反的旅行价值——它要求你慢下来，要求你倾听，要求你感受时间的重量。它不像迪士尼城堡那样只有童话般的完美，它的伤痕、它的粗糙、它的历史褶皱都清晰可见，而这恰恰构成了它最真实的魅力。对于热爱深度游的灵魂来说，这里不是一个“到此一游”的背景板，而是一个可以与之对话的、活生生的历史存在。当你站在帝王塔顶，听着风穿过阿尔卑斯山谷，你会明白，有些地方之所以必去，是因为它们能重新校准我们对历史、战争、和平以及生命本身的认知。库夫施泰因要塞，就是这样一个地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gmunden-lake-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登湖城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Lake City</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-ischl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alpina-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔卑纳城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alpina Castle</p>
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
