import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '西斯特龙城堡 Sisteron Citadel｜悬崖上的星形要塞，聆听迪朗斯河谷的千年回响 - 最佳欧洲景点',
  description: '当你第一次驱车接近西斯特龙，一定会被眼前的景象震慑得放慢车速。迪朗斯河像一条银色的绶带，从宽阔的谷地中蜿蜒而过，而就在河道的转弯处，一座巨大的、蜂蜜色的石灰岩悬崖拔地而起，陡峭得近乎残忍。而就在那悬崖的顶端与侧面，一片坚固的、棱角分明的堡垒建筑群，就这样严丝合缝地镶嵌、甚至可以说是“焊接”在了岩石之...',
}

export default function SisteronCitadelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '西斯特龙城堡', href: '/attractions/sisteron-citadel' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`西斯特龙城堡・Sisteron Citadel・法国・西斯特龙`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一次驱车接近西斯特龙，一定会被眼前的景象震慑得放慢车速。迪朗斯河像一条银色的绶带，从宽阔的谷地中蜿蜒而过，而就在河道的转弯处，一座巨大的、蜂蜜色的石灰岩悬崖拔地而起，陡峭得近乎残忍。而就在那悬崖的顶端与侧面，一片坚固的、棱角分明的堡垒建筑群，就这样严丝合缝地镶嵌、甚至可以说是“焊接”在了岩石之上。那种感觉，不像是在山上建了座城堡，倒像是大地自己奋力长出了一副坚不可摧的铠甲。空气里弥漫着百里香和烈日烤灼岩石的干燥气味，风从河谷上游吹来，带着阿尔卑斯山雪的凉意，呼啸着穿过堡垒的炮眼和箭垛，发出低沉而悠长的呜咽。
对于当地人来说，这座城堡是他们地理与精神的双重坐标。无论在镇子的哪个角落，一抬头就能看见它沉默的剪影。它不是什么遥不可及的博物馆，而是他们日常生活背景的一部分。早晨，阳光首先为城堡的塔楼镀上金边；夜晚，聚光灯将它照亮，宛如悬在夜空中的金色航标。你在老城的咖啡馆里，会听到老人们用浓厚的普罗旺斯口音，谈论着“la Citadelle”，语气里有一种理所当然的骄傲和亲切，就像在谈论一位脾气倔强但备受尊敬的老祖父。它的核心魅力，正在于这种极致的反差——一边是普罗旺斯田园诗般的薰衣草田、橄榄树和悠闲生活，另一边则是这座悬崖上冰冷、坚硬、充满力量感的战争记忆。它告诉你，这片阳光明媚的土地，也曾是兵家必争的残酷沙场。
走进城堡脚下中世纪风格的老城区，石板路被岁月打磨得光滑如镜，两侧是色彩柔和的房屋。当你开始沿着之字形的古老步道向上攀登，每一步都仿佛在穿越时空。脚下的石头或许曾被罗马军团的凉鞋、中世纪骑士的战马、拿破仑军队的皮靴踏过。随着高度攀升，视野豁然开朗，整个迪朗斯河谷在你脚下铺展，远方的阿尔卑斯山群峰连绵，在湛蓝的天际线上画出锯齿状的白色轮廓。那一刻，你瞬间理解了“锁钥”二字的全部含义——谁控制了这里，谁就扼住了从地中海通往阿尔卑斯山、乃至意大利的咽喉。这不是风景明信片式的美，而是一种令人心悸的、充满历史权重的壮丽。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一次驱车接近西斯特龙，一定会被眼前的景象震慑得放慢车速。迪朗斯河像一条银色的绶带，从宽阔的谷地中蜿蜒而过，而就在河道的转弯处，一座巨大的、蜂蜜色的石灰岩悬崖拔地而起，陡峭得近乎残忍。而就在那悬崖的顶端与侧面，一片坚固的、棱角分明的堡垒建筑群，就这样严丝合缝地镶嵌、甚至可以说是“焊接”在了岩石之上。那种感觉，不像是在山上建了座城堡，倒像是大地自己奋力长出了一副坚不可摧的铠甲。空气里弥漫着百里香和烈日烤灼岩石的干燥气味，风从河谷上游吹来，带着阿尔卑斯山雪的凉意，呼啸着穿过堡垒的炮眼和箭垛，发出低沉而悠长的呜咽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于当地人来说，这座城堡是他们地理与精神的双重坐标。无论在镇子的哪个角落，一抬头就能看见它沉默的剪影。它不是什么遥不可及的博物馆，而是他们日常生活背景的一部分。早晨，阳光首先为城堡的塔楼镀上金边；夜晚，聚光灯将它照亮，宛如悬在夜空中的金色航标。你在老城的咖啡馆里，会听到老人们用浓厚的普罗旺斯口音，谈论着“la Citadelle”，语气里有一种理所当然的骄傲和亲切，就像在谈论一位脾气倔强但备受尊敬的老祖父。它的核心魅力，正在于这种极致的反差——一边是普罗旺斯田园诗般的薰衣草田、橄榄树和悠闲生活，另一边则是这座悬崖上冰冷、坚硬、充满力量感的战争记忆。它告诉你，这片阳光明媚的土地，也曾是兵家必争的残酷沙场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡脚下中世纪风格的老城区，石板路被岁月打磨得光滑如镜，两侧是色彩柔和的房屋。当你开始沿着之字形的古老步道向上攀登，每一步都仿佛在穿越时空。脚下的石头或许曾被罗马军团的凉鞋、中世纪骑士的战马、拿破仑军队的皮靴踏过。随着高度攀升，视野豁然开朗，整个迪朗斯河谷在你脚下铺展，远方的阿尔卑斯山群峰连绵，在湛蓝的天际线上画出锯齿状的白色轮廓。那一刻，你瞬间理解了“锁钥”二字的全部含义——谁控制了这里，谁就扼住了从地中海通往阿尔卑斯山、乃至意大利的咽喉。这不是风景明信片式的美，而是一种令人心悸的、充满历史权重的壮丽。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`西斯特龙城堡`} />
                <InfoRow label="英文名称" value={`Sisteron Citadel`} />
                <InfoRow label="正式名称" value={`Citadel of Sisteron`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`西斯特龙`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`南法最重要的军事要塞之一，被誉为“普罗旺斯之门”，历史上是控制迪朗斯河谷与阿尔卑斯山通道的战略锁钥。`} />
                <InfoRow label="建筑特色" value={`一座完美适应悬崖地形的星形堡垒，其城墙与百米高的天然石灰岩峭壁融为一体，仿佛从岩石中生长出来。`} />
                <InfoRow label="建筑风格" value={`以军事防御功能为核心的文艺复兴时期星形要塞建筑，融合了中世纪城堡的遗迹和近代的军事加固工事。`} />
                <InfoRow label="文化价值" value={`它不仅是军事工程学的杰作，更是普罗旺斯地区历史层叠的活化石，见证了从罗马时期到拿破仑时代的权力更迭与文明碰撞。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常每日开放，但季节变化显著。4月至9月：上午9:00至下午6:30，夏季（7-8月）有时延长至晚上7点。10月至3月：上午10:00至下午5:00，部分周一关闭。冬季可能因天气临时关闭。圣诞节和元旦当天不开放。具体时间建议行前在官网确认。`} />
              <InfoRow label="门票价格" value={`成人票：7.5欧元。优惠票（学生、儿童、10人以上团体）：6欧元。6岁以下儿童免费。家庭套票（2成人+2儿童）20欧元。门票包含进入所有堡垒区域、博物馆和临时展览。城堡脚下有免费停车场。`} />
              <InfoRow label="地址" value={`Citadelle de Sisteron, 04200 Sisteron, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是马赛普罗旺斯机场（MRS），车程约1小时45分钟。最便捷的公共交通是火车，从马赛圣查尔斯火车站出发，乘坐TER区域列车前往西斯特龙站，车程约2小时，班次每天约5-6趟，建议在SNCF官网或App提前购票。从西斯特龙火车站出来，城堡是绝对的视觉焦点，步行穿过老城上山约需20-25分钟，是一段风景如画的缓坡。若自驾，从A51高速公路的Sisteron出口下，按路标指示5分钟内可达山脚停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`西斯特龙的故事，始于岩石本身。这座突兀的石灰岩山脊，早在一万年前就有人类活动的痕迹。但真正让它登上历史舞台的，是罗马人。公元前1世纪左右，罗马人认识到此地无与伦比的战略价值，他们在山顶建立了观察哨所，监控着从意大利经阿尔卑斯山进入高卢的重要通道——多米蒂亚大道的一条分支。罗马帝国崩塌后，这里陷入了混乱，但山脊的防御价值从未被遗忘。中世纪早期，山顶上出现了第一座简陋的封建领主城堡，它属于普罗旺斯伯爵。那时的城堡，更多是权力的象征和领主的居所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在16世纪的宗教战争时期。法国深陷天主教徒与新教徒（胡格诺派）的血腥冲突。西斯特龙，作为重要的胡格诺派据点，经历了惨烈的围攻。1562年和1574年，城堡两度被攻占，见证了信仰冲突的残酷。正是这段动荡的历史，促使当时的统治者深刻反思：旧式的高耸塔楼城堡在日益强大的火炮面前变得脆弱。于是，一场深刻的军事建筑革命在此发生。17世纪初，在军事工程师让·埃拉尔等人的主持下，城堡被彻底改造。他们引入了当时最先进的“星形要塞”设计理念，用低矮、厚实、带有倾斜角度的棱堡城墙取代高塔，城墙呈锯齿状延伸，确保没有一个射击死角。城堡被扩建、加固，真正从一个中世纪领主堡垒，蜕变成了一个为应对火炮战争而生的、功能至上的巨型军事机器。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡最浪漫也最著名的过客，无疑是拿破仑·波拿巴。1815年3月，拿破仑从流放地厄尔巴岛逃脱，踏上了重返巴黎、重夺帝位的“百日王朝”之路。他的路线，正是这条古老的迪朗斯河谷通道。3月5日夜晚，拿破仑和他的小股部队抵达西斯特龙。当时，城堡仍由保王党军队控制。关于拿破仑如何通过，有多种传说。一说他大胆地命令部队高举火把，奏着军乐，大摇大摆地从城堡炮口下通过，利用其出其不意的心理威慑；另一说则更实际，他可能选择了城堡火力难以覆盖的迂回路线。无论如何，他安全通过了这道“门”，并在镇上短暂休息。今天，城堡里还有一个专门的展厅纪念此事，你会看到，这段历史为这座坚硬的堡垒增添了一抹传奇和孤注一掷的个人英雄主义色彩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入和平年代，城堡的军事功能逐渐丧失。它曾被用作监狱，在二战期间也遭受了轰炸（1944年的一次空袭严重损坏了圣母礼拜堂）。但法国人没有遗忘它。从20世纪中叶开始，它被列为历史遗迹，并得到了精心的修复。修复工作并非将它复原到某个特定的历史时期，而是小心翼翼地保留了各个时代留下的痕迹——中世纪的墙基、文艺复兴时期的棱堡、19世纪的兵营、战争留下的伤疤。如今，它不再守卫领土，转而守卫记忆。每年夏天，城堡会举办著名的“西斯特龙之夜”音乐节，在古老的城墙内响起古典乐和世界音乐，让冰冷的石头在艺术中重新获得温度，完成了从战争堡垒到文化殿堂的惊人蜕变。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排成大半天时间。最好在上午9点半左右抵达，这时阳光正好照亮城堡东侧，拍照光线绝佳，旅游团大军也尚未到来。整体耗时约4-5小时，节奏应该是“慢爬、细看、多停”。先从山脚的老城开始预热，感受生活气息，然后以朝圣般的心态缓缓上山。攀登过程本身就是体验的核心部分，不要急于求成。在城堡内部的游览，请务必跟随提供的导览地图（有英文版），它会指引你按历史时间顺序穿越各个区域。中午可以在城堡内的简单咖啡座休息，吃点三明治，一边俯瞰河谷，那种体验无与伦比。这样的安排能让你充分体会城堡从“远处地标”到“身处其中”再到“俯瞰天下”的完整层次感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的鞋子，部分步道和城堡内楼梯非常陡峭且表面光滑。
夏季午后阳光暴晒，城堡内遮蔽处有限，请备足水、帽子和防晒霜。
山脚老城有几家很棒的传统法式烘焙店，上山前可以买点杏仁饼或法棍三明治带上，比在景区内选择更多、味道更地道。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城中心的共和国广场出发，仰望着城堡沿着洒满阳光的Fontête巷向上走，脚下是光滑的圆石路面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的“圣母之门”，触摸那厚实的拱形石壁，想象几个世纪以来士兵和商旅由此通过的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始攀登那条在岩石上开凿出的、蜿蜒曲折的“之”字形步道，在每一个拐角的长椅停留，感受视野逐渐开阔的惊喜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“漏洞门”进入城堡核心防御区，立刻被高大、森冷的城墙包围，耳边仿佛响起历史的回声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点参观圣母礼拜堂，注意看它那因二战轰炸而撕裂又修复的穹顶，静默中感受战争的创伤与和平的珍贵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上“迪朗斯台地”，这是城堡的制高点，强迫自己在这里静坐十分钟，看鹰在脚下盘旋，将山河尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探索地下弹药库和兵营遗址，在昏黄的灯光下感受当年驻守士兵潮湿、孤寂的日常生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西侧的“国王步道”缓缓下山，这是一条更为宁静的路线，回望城堡，你会获得与上山时完全不同的视角和感悟。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`迪朗斯河对岸的D951公路旁指定观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，使用长焦镜头可以拍摄到城堡与悬崖被金色夕阳完全笼罩，并倒映在河水中，形成对称的完美全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡“漏洞门”内侧的城墙拐角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光斜射入城门通道，站在内侧阴影中向外拍摄门洞框出的河谷风景，能拍出极具纵深感和明暗对比的戏剧性构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`制高点的“迪朗斯台地”边缘低角度`}</h4>
                  <p className="text-sm text-gray-700">{`任何晴朗的白天，将相机贴近地面石砖，以广角镜头拍摄，能将前景的古老垛口、中景的城堡建筑与背景无垠的河谷天空一同囊括，凸显城堡的险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡内部通往棱堡的狭窄通道`}</h4>
                  <p className="text-sm text-gray-700">{`利用通道本身的线条作为引导线，拍摄同伴走向通道尽头光亮的剪影，极具故事感和神秘氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城屋顶视角`}</h4>
                  <p className="text-sm text-gray-700">{`预订一家老城内较高的民宿或酒店，在黎明时分，从房间窗口拍摄晨雾缭绕中的城堡剪影，充满宁静的生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机需要格外小心，此地风大且气流不稳定，强烈建议在城堡规定的安全区域外操作，并远离城墙上的游客。`}</li>
                <li>• {`城堡内部博物馆和礼拜堂禁止使用闪光灯，请调高相机的ISO感光度以获得清晰的室内照片。`}</li>
                <li>• {`拍摄当地人或在老城集市拍照时，一个友好的微笑和一句简单的“Bonjour”（你好）往往比举起相机就拍更能获得自然而友善的画面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心由17世纪联排屋改造的精品酒店，房间里有裸露的原始石墙和木梁，晚上能听到城堡传来的悠远钟声，早晨被面包店的香味唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山景之选`}</h4>
                  <p className="text-sm text-green-800">{`位于城堡对面山坡上的乡村民宿，拥有正对城堡全景的无敌露台，主人会为你准备丰盛的普罗旺斯早餐，伴着你的是鸟儿鸣唱和无敌视野。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`迪朗斯河谷畔被薰衣草田环绕的私人庄园酒店，距离小镇十分钟车程，提供宁静奢华的避世体验，在无边泳池里就能遥望悬崖上的城堡剪影。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近干净友好的家庭旅馆，主人通晓本地历史，能给你地图上找不到的游览建议，步行至老城和城堡起点仅需十五分钟。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）和音乐节期间住宿非常紧张，务必提前数月预订，尤其是老城内的特色住宿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿虽然氛围绝佳，但停车可能是个挑战，通常需要停在城外的公共停车场，预订时请务必确认停车安排。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇治安良好，夜晚安静，但城堡在夜间会被灯光照亮，选择面对城堡的房间可能会有一整晚的柔光照射，怕光的话可以准备眼罩。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开西斯特龙很久以后，闭上眼睛，我脑海里最清晰的画面不是某个具体的炮台或展厅，而是站在迪朗斯台地上那一刻，扑面而来的风。那风里混杂着干草、岩石和远处松林的气息，它毫无阻挡地穿越广阔的河谷，撞击在我面前的城垛上，然后呼啸着奔向远方的阿尔卑斯山。那一刻，我突然感到自己无比渺小，又仿佛与某种永恒的东西连接在了一起。这座城堡教会我的，是一种关于“位置”的哲学。它因一个无可替代的地理位置而诞生，并因守护这个位置而定义了自身全部的历史、建筑与命运。在今天这个人们可以瞬间移动、位置感越来越模糊的数字时代，这种与大地筋骨相连的“固执”，显得如此珍贵而震撼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来这里，不仅仅是为了看一座险峻的城堡。而是来上一堂关于时间、地理与人类意志的沉浸式课程。来触摸那些被风沙打磨了数百年的石头，来感受脚下这条河谷曾经如何承载帝国的兴衰与个人的传奇，来在一个制高点上，暂时抛开日常的琐碎，看清山河的脉络。西斯特龙不是一个温柔的梦，它是一声从历史深处传来的、坚定而清晰的回响。它提醒我们，有些地方，生来就是为了见证、为了守护、为了在漫长的时光中，成为一个不可动摇的坐标。而找到这样的坐标，或许正是我们不断出发、一路追寻的意义之一。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/senlis-medieval-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑利斯中世纪老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Senlis</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beziers-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹道城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Béziers Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
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
