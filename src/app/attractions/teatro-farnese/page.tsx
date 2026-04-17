import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '法尔内塞剧院 Teatro Farnese｜潜入四百年前的木造幻梦，透视法舞台的鼻祖 - 最佳欧洲景点',
  description: '推开那扇厚重的门，首先捕捉你的不是景象，而是一种气味——一种混合了古老松木、陈年灰尘和一丝清冷石蜡的独特气息，沉静、醇厚，仿佛时间本身被封装在了这个空间里。光线是昏暗的，从高窗滤进来，形成几道朦胧的光柱，尘埃在其中缓缓起舞。然后，你的眼睛才开始适应，巨大的空间轮廓在昏暗中浮现。那一刻的震撼是无声却汹...',
}

export default function TeatroFarnesePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '法尔内塞剧院', href: '/attractions/teatro-farnese' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`法尔内塞剧院・Teatro Farnese・意大利・帕尔马`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`推开那扇厚重的门，首先捕捉你的不是景象，而是一种气味——一种混合了古老松木、陈年灰尘和一丝清冷石蜡的独特气息，沉静、醇厚，仿佛时间本身被封装在了这个空间里。光线是昏暗的，从高窗滤进来，形成几道朦胧的光柱，尘埃在其中缓缓起舞。然后，你的眼睛才开始适应，巨大的空间轮廓在昏暗中浮现。那一刻的震撼是无声却汹涌的：一个完全由温暖的蜂蜜色木材构筑的世界扑面而来，如此宏大，如此完整，却又轻盈得仿佛一个搁置了四百年的幻梦。你站在贵族入口的台阶上，感觉自己不像一个游客，而像一位姗姗来迟的宾客，闯入了某个被施了魔法而凝固的盛大宴席。
向前走，脚下的木地板发出轻微却悦耳的吱呀声，这是剧院唯一的声音，回应着你的每一步。抬头看，三层楼座呈优雅的U形环抱着你，上面雕刻着繁复的茛苕叶、徽章和神话人物，虽然色彩已然斑驳，但细节里的生命力仍在暗处呼吸。这不是一座冰冷的建筑，而是一头沉睡的巨兽，它的骨架、它的肌肤，全是来自北方森林的木材。你能想象当年这里充盈着何种喧嚣：丝绸裙摆的沙沙声，贵族们窃窃私语的意大利语，乐师调试乐器的叮咚声，还有空气中弥漫的香水与蜡烛的味道。而此刻，只有无边的寂静，让想象力的声音变得格外清晰。
它的核心魅力，就在于那舞台。这不是一个空荡荡的台子，而是一幅用建筑和透视法画成的“立体绘画”。舞台后方是一整套固定的宫殿立面布景，运用了当时最前沿的透视学原理，柱子、拱门、阳台层层递进，消失在视线尽头，创造出深达数十米的视觉幻觉。站在观众席中央，你会被一种奇妙的错觉攫住：那舞台仿佛不是止于一面墙，而是通向另一个更辉煌的王国，或许是奥林匹斯山，或许是法尔内塞公爵梦想中的永恒之城。它代表了人类一种纯粹的野心——用智慧和技艺，在有限的空间里，造出一个无限的梦。在这里，艺术不是装饰，而是通往另一个维度的魔法之门。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的门，首先捕捉你的不是景象，而是一种气味——一种混合了古老松木、陈年灰尘和一丝清冷石蜡的独特气息，沉静、醇厚，仿佛时间本身被封装在了这个空间里。光线是昏暗的，从高窗滤进来，形成几道朦胧的光柱，尘埃在其中缓缓起舞。然后，你的眼睛才开始适应，巨大的空间轮廓在昏暗中浮现。那一刻的震撼是无声却汹涌的：一个完全由温暖的蜂蜜色木材构筑的世界扑面而来，如此宏大，如此完整，却又轻盈得仿佛一个搁置了四百年的幻梦。你站在贵族入口的台阶上，感觉自己不像一个游客，而像一位姗姗来迟的宾客，闯入了某个被施了魔法而凝固的盛大宴席。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`向前走，脚下的木地板发出轻微却悦耳的吱呀声，这是剧院唯一的声音，回应着你的每一步。抬头看，三层楼座呈优雅的U形环抱着你，上面雕刻着繁复的茛苕叶、徽章和神话人物，虽然色彩已然斑驳，但细节里的生命力仍在暗处呼吸。这不是一座冰冷的建筑，而是一头沉睡的巨兽，它的骨架、它的肌肤，全是来自北方森林的木材。你能想象当年这里充盈着何种喧嚣：丝绸裙摆的沙沙声，贵族们窃窃私语的意大利语，乐师调试乐器的叮咚声，还有空气中弥漫的香水与蜡烛的味道。而此刻，只有无边的寂静，让想象力的声音变得格外清晰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于那舞台。这不是一个空荡荡的台子，而是一幅用建筑和透视法画成的“立体绘画”。舞台后方是一整套固定的宫殿立面布景，运用了当时最前沿的透视学原理，柱子、拱门、阳台层层递进，消失在视线尽头，创造出深达数十米的视觉幻觉。站在观众席中央，你会被一种奇妙的错觉攫住：那舞台仿佛不是止于一面墙，而是通向另一个更辉煌的王国，或许是奥林匹斯山，或许是法尔内塞公爵梦想中的永恒之城。它代表了人类一种纯粹的野心——用智慧和技艺，在有限的空间里，造出一个无限的梦。在这里，艺术不是装饰，而是通往另一个维度的魔法之门。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`法尔内塞剧院`} />
                <InfoRow label="英文名称" value={`Teatro Farnese`} />
                <InfoRow label="正式名称" value={`Teatro Farnese`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`帕尔马`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`世界上现存最古老的永久性木制剧院之一，是透视布景和现代剧院建筑学的革命性先驱。`} />
                <InfoRow label="建筑特色" value={`全部由木材建造，拥有一个极其宏大的U形观众席和一套运用透视原理创造深远舞台幻觉的固定布景。`} />
                <InfoRow label="建筑风格" value={`早期巴洛克风格，深受文艺复兴时期透视法和古典主义的影响。`} />
                <InfoRow label="文化价值" value={`它不仅是戏剧艺术的圣殿，更是法尔内塞家族权力与文化的终极象征，见证了从宫廷私密娱乐到公共艺术空间的过渡。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`周二至周六上午8:30至下午7:00（最后入场时间下午6:30），周日上午8:30至下午2:00。每周一、1月1日、5月1日、12月25日闭馆。请注意，剧院所在的帕尔马公爵宫在下午1:00至2:30之间通常会关闭部分区域，参观前最好在官网确认具体安排。`} />
              <InfoRow label="门票价格" value={`剧院门票包含在帕尔马国家美术馆（Galleria Nazionale di Parma）的通票内。全票15欧元，欧盟18-25岁公民优惠票2欧元，18岁以下及65岁以上欧盟公民免费。每月第一个周日免费开放。建议提前在线购票以避免排队。`} />
              <InfoRow label="地址" value={`Piazza della Pilotta, 15, 43121 Parma PR, Italy`} />
              <InfoRow label="交通方式" value={`帕尔马有一个小型的“朱塞佩·威尔第”机场，主要运营国内和部分欧洲航班。最便捷的国际门户是米兰马尔彭萨机场（约2小时车程）或博洛尼亚古列尔莫·马可尼机场（约1.5小时车程）。
从米兰中央火车站乘坐区域快车（Frecciargento或Frecciabianca）约1小时即可直达帕尔马火车站，班次频繁。
从博洛尼亚中央火车站出发，车程仅需45分钟至1小时。
抵达帕尔马火车站后，剧院所在的公爵宫（Pilotta宫殿群）就在步行可达的距离内（约10-15分钟）。穿过宁静的老城区，沿着指示牌轻松漫步即可到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一场政治联姻说起。1628年，帕尔马的公爵拉努乔一世·法尔内塞，这个以其军事才能和暴躁脾气著称的统治者，决定为他的儿子奥多阿尔多与托斯卡纳大公的女儿玛格丽塔·德·美第奇的婚礼，举办一场配得上两个豪门家族的庆典。法尔内塞家族不仅想要炫耀财富，更想彰显他们作为文艺复兴最重要艺术赞助人之一的文化品位。于是，公爵下令，要在帕尔马庞大的公爵宫（Pilotta宫殿群）内，建造一座前所未有的剧场——它必须让所有来宾，尤其是来自佛罗伦萨的美第奇亲家，叹为观止。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个重任落在了建筑师乔瓦尼·巴蒂斯塔·阿莱奥蒂的肩上，他之前曾为萨比奥内塔的贡扎加家族设计过剧场，但这次的要求是空前的。当时的主流是临时剧场，用木架和帆布搭建，演完就拆。但拉努乔一世要的是“永久性”的杰作。阿莱奥蒂从维特鲁威的古典著作和帕拉第奥的奥林匹克剧院中汲取灵感，但他走得更远。他大胆决定全部使用木材——不是因为它便宜，而是因为它可塑性强，能实现复杂的结构雕刻，并能更好地支撑他脑海中那个革命性的想法：一套运用单点透视法、具有惊人景深的固定舞台布景。于是，成千上万的云杉、松木和橡木从阿尔卑斯山运来，工匠们夜以继日，在短短一年内，这座木制的奇迹便诞生了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的首演，就是那场世纪婚礼的庆典。1628年12月21日，剧院上演了蒙特威尔第的学生——作曲家克劳迪奥·阿基利尼的《墨丘利与马尔斯》，辅以精心设计的幕间剧。可以想象当时的盛况：U形观众席里坐满了欧洲最显赫的贵族，女士们珠光宝气，绅士们佩剑叮当。舞台上，不仅有歌唱与台词，更有当时最先进的舞台机械制造的奇幻效果：神明从天而降，战车在透视街道上奔驰，海洋的幕布突然升起。这座剧院最惊人的功能之一——乐池前区域可以注水成为“水池”，用于上演海战场景——很可能就在当晚首次启用，将视觉幻觉推向巅峰。法尔内塞剧院一鸣惊人，它不再是简单的观演场所，而是一件可以“演出”的巨型艺术品，是公爵权力与智慧的实体宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的吊诡在于，这座为辉煌庆典而生的剧院，其活跃期却异常短暂。在首演后的漫长岁月里，它只在极少数极其重要的场合才被启用，大部分时间都在沉睡。法尔内塞家族的后代似乎更热衷于战争和政治，而非艺术赞助。剧院静静地待在公爵宫里，像一个被遗忘的华丽梦境。时间来到了1944年，二战的战火席卷意大利。盟军的一次空袭猛烈地击中了帕尔马公爵宫，炸弹引爆的大火吞噬了这座木结构的瑰宝。一夜之间，四百年的巧思化为焦黑的残骸和灰烬，只剩下几根烧焦的梁柱和破碎的雕塑，无言地诉说着悲剧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但故事并没有结束。战后，意大利人决定不让这个梦彻底消失。从1956年开始，一场 meticulous 到极致的重建工程启动了。工匠们利用原始的设计图纸、战前的照片、绘画记录以及残存的碎片，以近乎考古的精确度，一寸一寸地复原了剧院。他们寻找相同品种的木材，沿用传统的雕刻技法，甚至努力复现当年的色彩质感。这不是简单的重建，而是一次文化的复活。当你今天站在剧院里，你所看到的，不仅仅是20世纪中期的复制品，更是一代意大利人对其文化遗产不容毁灭的信念的见证。那些木头上的“崭新”痕迹，恰恰是它穿越战火、重获新生的最动人勋章。它从一座炫耀权力的剧场，变成了一座关于记忆、韧性与文化传承的纪念碑。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议你将参观法尔内塞剧院安排在帕尔马之旅的上午。最好在开门后不久抵达，这样你能在相对宁静的氛围中，先游览帕尔马国家美术馆收藏的柯勒乔、帕尔米贾尼诺等大师杰作，让艺术史作为前奏，逐步将你的情绪推向高潮。预留至少一个半小时给剧院本身。游览节奏一定要慢，把它当作一场沉浸式仪式。先从高处入口俯瞰全局，让震撼的第一印象充分沉淀；然后缓步走下台阶，穿行于观众席之间，用指尖（如果允许）感受木材的纹理；最后，将最多的时间留给舞台正前方的“皇帝位”，静静地坐下或站立，凝视那深邃的透视布景，任由想象力填满整个空间。这样的安排，才能由浅入深，从视觉欣赏过渡到心灵共鸣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`剧院位于帕尔马国家美术馆内部，务必购买美术馆通票，并预留充足时间，不要只为剧院匆匆而来。
周一闭馆，且每日下午有较长的午休闭馆时间，出行前务必再三核对官网最新开放信息。
剧院内温度通常比外面低几度，且需要较久站立和静观，建议穿一双舒适的鞋并带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公爵宫的国家美术馆展厅出来，顺着指示牌走向那扇标志着“Teatro Farnese”的朴素木门，心中充满探寻秘宝的期待。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推门进入后先别急着走下台阶，就站在入口处的平台上，让自己像一位迟到的贵族那样，纵览整个剧场恢弘而温暖的木造全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着侧面的木质阶梯缓缓走下，靠近那些精雕细琢的楼座栏杆，仔细看上面的人物浮雕和家族纹章，想象曾经有哪些手倚靠在这里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到一层观众席的正中央，这里是透视魔法效果最强的“皇帝位”，抬头直视舞台，感受那虚假又无比真实的景深将你吸进去的错觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`大胆地走上舞台区域（如果开放），从表演者的角度回望空无一人的观众席，体验权力反转的孤独感与掌控感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在舞台侧面寻找那些古老舞台机械的痕迹或说明牌，了解当年是如何让神祇飞行、让海水漫上舞台的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`试着在最前排或某个僻静的角落长椅上坐下几分钟，闭上眼睛，只听自己的呼吸和这座古老建筑几乎听不见的嗡鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，再次回到入口平台，做一次深长的回望，将这个木制梦境的模样刻进记忆里。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`入口平台全景视角`}</h4>
                  <p className="text-sm text-gray-700">{`上午开门后的侧光最佳，从这个制高点可以拍下U形观众席拥抱舞台的完整构图，将建筑的对称宏伟感最大化。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`观众席中央透视轴线`}</h4>
                  <p className="text-sm text-gray-700">{`利用手机或相机的广角端，从正对舞台的走道低角度拍摄，能将舞台的透视纵深感拉得极具戏剧性，人物作为剪影点缀其中会很出彩。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`二楼楼座角落侧望`}</h4>
                  <p className="text-sm text-gray-700">{`从侧面楼座探身拍摄，可以捕捉到观众席曲线与舞台的交叉画面，构图更灵动，也能纳入部分精美的木雕天花板细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`舞台侧幕阴影处`}</h4>
                  <p className="text-sm text-gray-700">{`如果允许走上舞台侧面，从布景的侧面逆光拍摄观众席，能拍出木结构如金色骨架般的剪影，充满历史沧桑感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`近距离木雕特写`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头对准栏杆柱头、雕像面部或座椅上磨损的纹路，利用窗户的自然光作为侧光，能拍出极具质感和故事感的细节照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内光线非常昏暗且复杂，建议使用大光圈镜头或提高ISO，三脚架通常不允许使用，需要练就“铁手”或寻找稳定的依托。`}</li>
                <li>• {`绝对禁止使用闪光灯，以免对珍贵的木质文物造成伤害，也让其他沉浸其中的游客免受打扰。`}</li>
                <li>• {`耐心等待那些从高窗洒下的“天使光柱”移动到你想要的构图位置，光影是这里最好的装饰。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城区中心广场附近由古老公寓改造的B&B，早上能被楼下咖啡馆的咖啡香和帕尔马人轻快的问候声唤醒，步行去公爵宫只要十分钟。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一座由16世纪贵族宫殿改造的精品酒店，房间挑高极高，保留着原始的壁画穹顶，让你连睡梦都浸润在文艺复兴的余韵里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择郊外一座被帕尔马诺奶酪农场和葡萄园环绕的豪华庄园酒店，在无边泳池边品尝本地起泡酒，将亚平宁山脉的轮廓线尽收眼底。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-purple-800">{`帕尔马也有由旧工厂改造的极简主义设计酒店，现代舒适的设施与一天的历史穿越之旅形成有趣反差，让你的体验张弛有度。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`帕尔马老城区非常安全且紧凑，几乎所有景点都可步行到达，优先选择城墙内的住宿会大大提升旅行便利度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果是在帕尔马火腿或奶酪生产季（通常是秋季）前往，务必提前很久预订，这里也是美食家巡礼的热门目的地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`尝试选择包含早餐的住宿，品尝地道的意大利早餐——一杯完美的卡布奇诺配上一个黄油牛角包，是开始一天文化探索的最佳方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开法尔内塞剧院很久，那种混合着木香与寂静的感官记忆，依然会不时地浮现。它带给我的触动，远远超出了一座漂亮古建所能给予的。在这个一切追求快速、即时、数字化的时代，站在这个全部由缓慢生长的树木、经由人类双手一点点雕刻而成的空间里，你会被一种古老的“耗时感”所包围。这里的一切都不追求效率，只追求极致的美与幻觉。它提醒我们，曾经的人们愿意为了一场几个小时的狂欢，投入如此惊人的心血与智慧，去建造一个可能大部分时间都在沉睡的梦。这种对精神世界不计成本的投入，本身就像一种浪漫的奢侈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来这里看看。不仅是为了见识透视法舞台的鼻祖，更是为了体验一种截然不同的时间维度。在这里，你能触摸到文艺复兴末期那股最后的、将艺术与科学熔为一炉的炽热雄心；你能感受到战争如何残酷地撕碎美好，而人类的文化意志又如何执着地将其一片片拼回。它不是一个死气沉沉的博物馆展品，而是一个依然能呼吸、能对你讲述关于辉煌、遗忘、毁灭与重生的庞大生命体。当你穿行于那些温暖的木柱之间，你走过的，是四百年的历史回廊；你呼吸的，是几个世纪的艺术之魂。这趟旅程，最终会成为一次对耐心、匠心与文化韧性的深刻致敬。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vicenza-olympic-theater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brisighella-hilltown" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布里西盖拉（驴子巷与三座山峰）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brisighella</p>
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
