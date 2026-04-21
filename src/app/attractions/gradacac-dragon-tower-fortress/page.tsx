import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格拉达查茨 Gradačac 龙之塔｜攀登波斯尼亚和黑塞哥维那传奇的白色巨塔，聆听奥斯曼边境的抵抗史诗 - 最佳欧洲景点',
  description: '车子还没完全驶入格拉达查茨，你的视线就会被它牢牢抓住——在一片绵延的绿色山丘和红瓦屋顶之上，一座纯白色的、近乎方正的巨塔，像一枚被时光遗忘的象牙印章，稳稳地盖在天际线上。那种白，不是崭新的、刺眼的白，而是在风雨和阳光下浸润了数百年的、温润而骄傲的骨白色。它就是“龙之塔”，胡塞因·卡佩坦要塞的心脏。当',
}

export default function GradacacDragonTowerFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/europe' },
            { label: '格拉达查茨', href: '/destinations/europe' },
            { label: '格拉达查茨', href: '/attractions/gradacac-dragon-tower-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格拉达查茨・Gradačac・波斯尼亚和黑塞哥维那・格拉达查茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子还没完全驶入格拉达查茨，你的视线就会被它牢牢抓住——在一片绵延的绿色山丘和红瓦屋顶之上，一座纯白色的、近乎方正的巨塔，像一枚被时光遗忘的象牙印章，稳稳地盖在天际线上。那种白，不是崭新的、刺眼的白，而是在风雨和阳光下浸润了数百年的、温润而骄傲的骨白色。它就是“龙之塔”，胡塞因·卡佩坦要塞的心脏。当你沿着缓坡向上走，周遭小镇的声音渐渐退去，只剩下自己的脚步声和风吹过高处草丛的沙沙声。空气里有青草、湿土和被太阳晒暖的石头气味。
这座要塞对于当地人而言，远不止是一个旅游景点。它是每日生活的背景板。你在街角咖啡馆喝咖啡时，一抬眼就能看到它；孩子们在广场上踢球，它沉默地守护在一旁。它已经和这里的天空、土地长在了一起。最打动人的，是那种强烈的反差感：塔楼本身是那么威严、冷峻，一道坚不可摧的军事剪影；可当你走近，发现城堡的庭院绿草如茵，有老人在长椅上晒太阳，有情侣在城墙边依偎着看落日，战争的棱角被日常的温情慢慢磨圆了。它既讲述着波斯尼亚和黑塞哥维那历史上最激烈的一段抗争，也静静地容纳着当下最平和的市井生活。
爬到塔楼脚下，用手触摸那些巨大的石块，冰凉而粗糙的质感瞬间将你与几个世纪前的工匠连接起来。你可以想象当年守卫的士兵，就是靠着这同样的石墙，眺望着北方平原可能出现的烟尘。此刻，你取代了他们，眼前是无比安宁的景象：小镇的房屋像彩色的积木，教堂的尖顶和清真寺的宣礼塔和谐共存，更远处是无边无际的田野和森林。这座塔最核心的魅力，就在于它提供了一个上帝视角，让你同时看到了历史的重量与当下的轻盈，看到了冲突的伤痕与愈合的宁静，所有关于波斯尼亚和黑塞哥维那复杂过去的疑问与感慨，仿佛都能在这俯瞰中，找到一丝无言的理解。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子还没完全驶入格拉达查茨，你的视线就会被它牢牢抓住——在一片绵延的绿色山丘和红瓦屋顶之上，一座纯白色的、近乎方正的巨塔，像一枚被时光遗忘的象牙印章，稳稳地盖在天际线上。那种白，不是崭新的、刺眼的白，而是在风雨和阳光下浸润了数百年的、温润而骄傲的骨白色。它就是“龙之塔”，胡塞因·卡佩坦要塞的心脏。当你沿着缓坡向上走，周遭小镇的声音渐渐退去，只剩下自己的脚步声和风吹过高处草丛的沙沙声。空气里有青草、湿土和被太阳晒暖的石头气味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座要塞对于当地人而言，远不止是一个旅游景点。它是每日生活的背景板。你在街角咖啡馆喝咖啡时，一抬眼就能看到它；孩子们在广场上踢球，它沉默地守护在一旁。它已经和这里的天空、土地长在了一起。最打动人的，是那种强烈的反差感：塔楼本身是那么威严、冷峻，一道坚不可摧的军事剪影；可当你走近，发现城堡的庭院绿草如茵，有老人在长椅上晒太阳，有情侣在城墙边依偎着看落日，战争的棱角被日常的温情慢慢磨圆了。它既讲述着波斯尼亚和黑塞哥维那历史上最激烈的一段抗争，也静静地容纳着当下最平和的市井生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "爬到塔楼脚下，用手触摸那些巨大的石块，冰凉而粗糙的质感瞬间将你与几个世纪前的工匠连接起来。你可以想象当年守卫的士兵，就是靠着这同样的石墙，眺望着北方平原可能出现的烟尘。此刻，你取代了他们，眼前是无比安宁的景象：小镇的房屋像彩色的积木，教堂的尖顶和清真寺的宣礼塔和谐共存，更远处是无边无际的田野和森林。这座塔最核心的魅力，就在于它提供了一个上帝视角，让你同时看到了历史的重量与当下的轻盈，看到了冲突的伤痕与愈合的宁静，所有关于波斯尼亚和黑塞哥维那复杂过去的疑问与感慨，仿佛都能在这俯瞰中，找到一丝无言的理解。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格拉达查茨`} />
                <InfoRow label="英文名称" value={`Gradačac`} />
                <InfoRow label="正式名称" value={`胡塞因·卡佩坦要塞（Husein-kapetan Gradaščević Fortress）`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`格拉达查茨`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`19世纪波斯尼亚和黑塞哥维那反抗奥斯曼帝国中央集权统治的象征，被誉为“波斯尼亚和黑塞哥维那龙”胡塞因·卡佩坦·格拉达什切维奇的大本营。`} />
                <InfoRow label="建筑特色" value={`一座宏伟的白色方形塔楼（龙之塔）雄踞于山丘之巅，俯瞰着整片平原地带，是波斯尼亚和黑塞哥维那北部最醒目和保存最完好的奥斯曼时期防御工事之一。`} />
                <InfoRow label="建筑风格" value={`奥斯曼帝国军事建筑风格，兼具欧洲堡垒的坚实与东方亭阁的优雅元素。`} />
                <InfoRow label="文化价值" value={`它不仅是军事要塞，更是一个关于地方自治、勇气与悲剧的文化记忆锚点，深刻影响着波斯尼亚和黑塞哥维那的国家认同和民间传说。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院通常全天开放可自由漫步，但主要的胡塞因·卡佩坦要塞（龙之塔）及内部博物馆的开放时间一般为夏季（4月至10月）的上午9点至下午5点，冬季（11月至3月）开放时间缩短，通常为上午10点至下午4点。每周一闭馆维护，重大宗教节日（如开斋节、圣诞节）也可能关闭。建议行前查看当地旅游局的最新通知，因为开放时间可能随季节和活动微调。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院和外围区域免费。若要登上标志性的“龙之塔”（胡塞因·卡佩坦要塞主塔）并参观内部的历史展览，需要购买门票。成人票约5波斯尼亚和黑塞哥维那马克（约合2.5欧元），学生和儿童享有优惠票价。有时会提供包含塔楼和附近城市博物馆的联票。现场购票即可，通常只接受当地货币现金。`} />
              <InfoRow label="地址" value={`Husein-kapetan Gradaščević bb, 76250 Gradačac, Bosnia and Herzegovina`} />
              <InfoRow label="交通方式" value={`从波斯尼亚和黑塞哥维那首都萨拉热窝出发是最常见的选择。在萨拉热窝长途汽车站乘坐前往图兹拉或直接到格拉达查茨的巴士，车程大约2.5至3小时，班次一天数趟，但建议提前一天确认时刻表。若从图兹拉市出发，车程约45分钟，班次更为频繁。自驾是最灵活的方式，从萨拉热窝沿M17公路向北，转入M18.1公路即可抵达，沿途是波斯尼亚和黑塞哥维那宁静的乡村风光。小镇内步行即可到达城堡，它矗立在山丘上，从主广场任何一个方向都能轻易望见。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从19世纪初说起，那时的波斯尼亚和黑塞哥维那还是奥斯曼帝国的一个边疆省份。格拉达查茨这个地方的贵族，格拉达什切维奇家族，世代掌管着这片区域，就像是帝国在北方的一根定海神针。而我们的主角，胡塞因·卡佩坦·格拉达什切维奇，在1820年代成为了家族的领袖。他可不是普通的地方官，人们形容他高大威猛，富有魅力和野心，更重要的是，他对自己的家乡和人民有着极强的责任感。当他看到帝国中央推行那些不顾地方传统、加重赋税的改革时，他心中的不满就像火种一样被点燃了。他觉得，帝国已经忘记了如何尊重这些为它守卫边疆的勇士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，他开始做两件事：一是凝聚人心，二是修建堡垒。这座我们今天看到的白色巨塔，正是在他的主持下，在原有防御工事的基础上加固和扩建而成的，成为了他力量和决心的有形象征。它被称为“龙之塔”，而胡塞因本人也被拥戴为“波斯尼亚和黑塞哥维那之龙”。1831年，火药桶终于爆炸了。胡塞因领导了一场声势浩大的起义，反抗苏丹的统治。他的军队一度势如破竹，几乎控制了整个波斯尼亚和黑塞哥维那，并威胁到帝国核心。这座白色的要塞，成为了起义的指挥中心和精神灯塔。你可以想象，战马在城堡下来回奔驰，信使匆匆进出高大的塔门，胡塞因或许就站在塔顶，谋划着如何为他的土地争取更大的自治权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，帝国的力量是强大的。在经历了一系列激烈的战斗后，起义最终被镇压。胡塞因·卡佩坦被迫流亡，最终在异乡去世，至死未能再回到他心爱的白色塔楼之下。他的要塞，也随之沉寂下来，从反抗的司令部，变回了帝国边疆一个普通的驻防点。但“龙”的传说却没有死去，它成为了波斯尼亚和黑塞哥维那人民心中关于自由和抵抗的一个原始符号。此后的一个多世纪，要塞经历了奥匈帝国的统治、南斯拉夫时期，默默见证着历史的潮起潮落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的劫难发生在1990年代的波斯尼亚和黑塞哥维那战争期间。格拉达查茨所在的位置是激烈的战场，这座见证了19世纪战火的要塞，不幸再次被卷入20世纪末的悲剧。它在炮火中严重受损，尤其是那座标志性的白塔，伤痕累累，几乎成为废墟。战争结束后，人们看着这座残破的、象征着本地骄傲的遗迹，心情无比复杂。它就像这个国家本身的隐喻，饱经创伤。但正因如此，它的重建被赋予了非凡的意义。经过漫长而精心的修复，白塔重新站了起来，洁白如初。这次修复，不仅仅是用水泥填补弹孔，更是一次集体的疗愈行为，是当地人向历史致敬、并决心走向未来的宣言。今天的它，既承载着胡塞因时代的英雄悲歌，也铭刻着近代战争的伤痕记忆，是一座活着的历史纪念碑。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的游览时间是在上午九点左右抵达，此时阳光正好照亮塔楼的东侧，光线柔和，游客稀少，你能享受到城堡最宁静的时刻。整个深度游览建议预留3到4小时。节奏应该是慢而沉浸的：先从远处欣赏和感受它的气势，然后由外向内、由下至上地探索，最后留出时间在城堡庭院里静静回味。这样的安排让你能充分体会它从宏观到细节的每一层魅力，而不只是匆匆登顶打卡。记得穿一双舒适耐走的鞋子，因为需要攀爬陡峭的塔楼阶梯。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`塔楼内部的旋转石阶非常陡峭且光线昏暗，上下时务必抓紧扶手，并注意脚下。尽量避免在午后的烈日下登塔，那时石阶内部可能闷热不堪。小镇居民非常友善，但主动上前提供“导游服务”的陌生人极少，若有，礼貌拒绝即可。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从镇中心的主广场开始，沿着任何一条上坡的小路朝白塔的方向漫步，感受它作为日常地标如何统领着小镇的天际线`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石拱门进入城堡外围的绿地，这里视野开阔，是第一次与白塔全景合影的完美地点`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到胡塞因·卡佩坦要塞巨大的木制主门前，仰头感受这座军事建筑的压迫感，观察门楣上的石雕和岁月的痕迹`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入内部庭院，先别急着登塔，绕着庭院走一圈，看看那些修复后的城墙、古老的炮台和被改成展厅的附属建筑`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄而盘旋的石阶一口气登上“龙之塔”的顶层观景台，让波斯尼亚和黑塞哥维那北部无垠的平原全景像画卷一样在你眼前猛然展开`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔顶的风中停留至少二十分钟，从各个方向辨认地标——小镇的红屋顶、远处的农田、更依稀的山脉轮廓`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下塔后，仔细参观塔楼内部的小型博物馆，那里陈列着胡塞因·卡佩坦的遗物、历史文件和讲述要塞修复过程的照片`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在城堡庭院西南角的草地上找个树荫坐下，喝一口自带的水，看着当地人来此散步，静静消化刚才所看到和感受到的一切`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡脚下仰拍龙之塔`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在城堡入口前的空地上，用广角镜头仰拍，将巨大的白色塔身与蓝天或晚霞一同纳入构图，凸显其巍峨`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`塔顶360度全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔顶后，除了拍摄广阔风景，可以尝试将古老的垛口作为前景，框住远处现代化的城镇景象，形成时空对话`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`要塞城墙的阴影长廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射在城堡内院的石墙上，形成强烈的明暗对比，在长廊里拍摄人物剪影或光影斑驳的墙面，极具故事感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从镇中心远眺`}</h4>
                  <p className="text-sm text-gray-700">{`在格拉达查茨主广场附近，寻找一条直指城堡的街道作为引导线，拍摄塔楼矗立在日常生活场景中的画面，体现它与社区的共生`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`黄昏时的剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落之后、天色未完全黑透的“蓝色时刻”，从城堡对面的小山坡回望，此时要塞会呈现成一个深邃而神秘的黑色剪影，背后是渐变的瑰丽天空`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除石质表面反光，让塔楼的白色更加纯净饱和。航拍在这里非常能体现要塞的地理优势，但起飞前务必确认当地法规并尊重隐私。当地人对拍摄非常宽容，但若要将镜头对准在城堡内休息或祈祷的特定个人，最好先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济首选`}</h4>
                  <p className="text-sm text-blue-800">{`镇中心一家由家族经营的老式客栈，房间干净简朴，主人会热情地为你手绘地图，并奉上自家酿的甜李子酒`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在城堡山脚下由传统奥斯曼风格老房子改造的精品民宿，木头阳台正对着塔楼，夜晚在繁星下看灯光勾勒出的塔影，如梦似幻`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-yellow-800">{`选择郊外几公里处一个安静的农场民宿，早晨在鸡鸣和新鲜奶酪的香气中醒来，白天能看到当地人最真实的耕作生活`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`图兹拉市内有更多现代酒店选择，虽然距离格拉达查茨有40分钟车程，但餐饮和夜间生活更为丰富，适合作为探索整个区域的大本营`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格拉达查茨本身是个宁静的小镇，夜间娱乐活动很少，但这正是其魅力所在——享受真正的静谧。治安状况良好，民风淳朴。若在夏季或当地重要节庆日（如格拉达查茨城市日）前往，建议提前一周左右预订住宿。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开格拉达查茨很久以后，那座白塔的影像还会不时清晰地浮现在脑海里。它不像欧洲那些装饰繁复、游人如织的宫殿城堡，它的美是硬朗的、沉默的，带着边疆的风沙和硝烟的味道。它教给我的，是一种关于“韧性”的深刻理解。这座塔见证了两次惨烈的战争，一次是追求自治的悲壮起义，一次是手足相残的现代内战，它两次倒下，又两次从废墟中站起，被后人用双手和敬意重新拼合起来。它本身就是一部关于毁灭与重生的立体史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个快节奏的、常常追求浮华体验的世界里，格拉达查茨提供了一种截然不同的旅行价值。它不急于取悦你，不提供轻松的答案。它只是静静地在那里，邀请你去攀登，去触摸那些冰凉的石头，去眺望那片承载了太多故事的土地。在这个过程中，你会自然而然地开始思考历史的分量、民族的记忆，以及平凡人在大时代中的抉择与命运。对于每一位真正热爱深度游的旅人来说，这里不仅仅是一个景点，它是一个沉思的角落，一个让你与波斯尼亚和黑塞哥维那这个复杂而美丽的国家进行一场真诚、安静对话的起点。把它的名字列入清单，不是为了收集又一个地标，而是为了去亲身感受，一种伤痕如何最终化为力量，一段传奇如何在后人的珍视中，获得永恒的白。" }} />
            </div>
          </Section>


        </div>
      </div>
    </div>
  )
}
