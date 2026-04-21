import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吕贝克霍尔斯滕门 Holstentor｜德国“汉萨女王”的威严面孔与七百年传奇 - 最佳欧洲景点',
  description: '第一次见到霍尔斯滕门，是在一个秋雨初歇的傍晚。空气里满是湿润的砖石和特拉沃河河水特有的微腥气息。我从火车站一路走来，穿过现代化的商铺和咖啡馆，就在街巷即将穷尽时，它毫无预警地、却又理所当然地矗立在那里。那种感觉，不像看见一座建筑，更像是撞见了一位身着厚重铠甲的巨人，在暮色中沉默地守护着什么。雨水冲刷...',
}

export default function HolstentorLubeckPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '吕贝克', href: '/destinations/germany' },
            { label: '吕贝克霍尔斯滕门', href: '/attractions/holstentor-lubeck' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吕贝克霍尔斯滕门・Holstentor・德国・吕贝克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次见到霍尔斯滕门，是在一个秋雨初歇的傍晚。空气里满是湿润的砖石和特拉沃河河水特有的微腥气息。我从火车站一路走来，穿过现代化的商铺和咖啡馆，就在街巷即将穷尽时，它毫无预警地、却又理所当然地矗立在那里。那种感觉，不像看见一座建筑，更像是撞见了一位身着厚重铠甲的巨人，在暮色中沉默地守护着什么。雨水冲刷过的深色砖墙在昏黄灯光下泛着幽光，两座圆塔像两顶巨大的、湿漉漉的尖顶帽，中间连接部分的山墙上那些狭长的窗户，则像巨人眯起的、审视的眼睛。它不是精致纤巧的，而是粗粝、雄浑、甚至带着点笨拙的压迫感，但这种笨拙里充满了不容置疑的力量。
走近了，你会注意到一个有趣的细节：整个城门楼微微向城市的内侧倾斜。这不是你的错觉，而是几个世纪地基沉降留下的真实印记。导游会告诉你，当年建造时，这片土地太软，人们不得不在沼泽地里打下成千上万根橡木桩作为地基。时间让这座以坚固著称的堡垒，显露出了它柔软下的“软肋”。但恰恰是这个“缺陷”，让它摆脱了冰冷纪念物的疏离感，变得有温度、有故事，像一个历经沧桑却依然挺直腰板的老人，带着些许可爱的倔强。
白天，这里是城市跳动的心脏。电车叮叮当当地从它身旁驶过，游客在它脚下的广场上聚集又散去，孩子们绕着塔楼追逐嬉戏。它背面镌刻的那句拉丁文格言“CONCORDIA DOMI FORIS PAX”（对内和谐，对外和平），在阳光下清晰可见。你会发现，这座曾经的军事堡垒，早已融入了吕贝克人最日常的生活。它不再拒人千里，而是变成了一个地标、一个碰头地点、一个城市客厅的背景墙。但每当夜深人静，广场空无一人时，你独自站在它巨大的阴影下，依然能清晰地听到历史的回响——那是汉萨商船启航的号角，是城门开阖的吱呀声，是金币在橡木桌上滚动的脆响。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次见到霍尔斯滕门，是在一个秋雨初歇的傍晚。空气里满是湿润的砖石和特拉沃河河水特有的微腥气息。我从火车站一路走来，穿过现代化的商铺和咖啡馆，就在街巷即将穷尽时，它毫无预警地、却又理所当然地矗立在那里。那种感觉，不像看见一座建筑，更像是撞见了一位身着厚重铠甲的巨人，在暮色中沉默地守护着什么。雨水冲刷过的深色砖墙在昏黄灯光下泛着幽光，两座圆塔像两顶巨大的、湿漉漉的尖顶帽，中间连接部分的山墙上那些狭长的窗户，则像巨人眯起的、审视的眼睛。它不是精致纤巧的，而是粗粝、雄浑、甚至带着点笨拙的压迫感，但这种笨拙里充满了不容置疑的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会注意到一个有趣的细节：整个城门楼微微向城市的内侧倾斜。这不是你的错觉，而是几个世纪地基沉降留下的真实印记。导游会告诉你，当年建造时，这片土地太软，人们不得不在沼泽地里打下成千上万根橡木桩作为地基。时间让这座以坚固著称的堡垒，显露出了它柔软下的“软肋”。但恰恰是这个“缺陷”，让它摆脱了冰冷纪念物的疏离感，变得有温度、有故事，像一个历经沧桑却依然挺直腰板的老人，带着些许可爱的倔强。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`白天，这里是城市跳动的心脏。电车叮叮当当地从它身旁驶过，游客在它脚下的广场上聚集又散去，孩子们绕着塔楼追逐嬉戏。它背面镌刻的那句拉丁文格言“CONCORDIA DOMI FORIS PAX”（对内和谐，对外和平），在阳光下清晰可见。你会发现，这座曾经的军事堡垒，早已融入了吕贝克人最日常的生活。它不再拒人千里，而是变成了一个地标、一个碰头地点、一个城市客厅的背景墙。但每当夜深人静，广场空无一人时，你独自站在它巨大的阴影下，依然能清晰地听到历史的回响——那是汉萨商船启航的号角，是城门开阖的吱呀声，是金币在橡木桌上滚动的脆响。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吕贝克霍尔斯滕门`} />
                <InfoRow label="英文名称" value={`Holstentor`} />
                <InfoRow label="正式名称" value={`Holstentor (Holsten Gate)`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`吕贝克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是吕贝克作为汉萨同盟首都的终极权力象征和城市防御体系的皇冠，被誉为德国最重要的中世纪晚期世俗建筑之一。`} />
                <InfoRow label="建筑特色" value={`两座巨大的、带有陡峭圆锥形顶部的圆形塔楼，通过中央山墙建筑相连，形成独特而敦实的双塔门楼造型，其明显向城市内侧倾斜的姿态是它最著名的“缺陷美”标志。`} />
                <InfoRow label="建筑风格" value={`北德特有的砖砌哥特式风格，是“吕贝克砖哥特”建筑传统的杰出代表。`} />
                <InfoRow label="文化价值" value={`它不仅是一座建筑，更是德意志汉萨同盟辉煌历史的实体档案和吕贝克城市精神——“汉萨式的骄傲与务实”的永恒化身。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆开放时间：每年4月至10月，每日上午10点至下午6点；11月至次年3月，每日上午10点至下午4点。博物馆全年每周一闭馆（法定节假日除外）。请注意，城门外部建筑及广场可全天24小时免费参观，但夜间照明通常在日落后至晚上11点开启。`} />
              <InfoRow label="门票价格" value={`博物馆门票：成人票8欧元；优惠票（学生、残疾人、团体等）4欧元；18岁以下儿童及青少年免费。持有吕贝克欢迎卡（Lübeck Welcome Card）可享受门票折扣。门票包含语音导览器（提供中文服务）的租赁费用。`} />
              <InfoRow label="地址" value={`Holstentorplatz, 23552 Lübeck, Germany`} />
              <InfoRow label="交通方式" value={`从汉堡国际机场（HAM）出发最为便捷。在汉堡机场火车站乘坐区域快车（RE）或城际列车（IC/EC）前往吕贝克中央火车站（Lübeck Hbf），车程约45-60分钟，班次频繁（约半小时一班）。从吕贝克中央火车站步行至霍尔斯滕门是最佳的体验方式：出站后，沿着笔直的“国王大街”（Königstraße）一直向西走，大约15-20分钟的轻松漫步，穿过繁华的商业街和古老的街巷，那座双塔城门便会威严地出现在道路尽头，这种“朝圣”般的抵达方式充满仪式感。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1464年说起。那时的吕贝克可不是今天这样一座宁静的旅游小城，它是整个北欧贸易帝国——汉萨同盟无可争议的“女王”。她的财富通过波罗的海与北海的航道滚滚而来，来自诺夫哥罗德的毛皮、英国的羊毛、佛兰德斯的布料在此汇聚。钱多了，自然要保护起来。老旧的木制城门已经配不上这座“女王之城”的威严与财富。于是，市议会决定，建造一座配得上城市地位的新城门，一座用坚固砖石砌成的、能震慑所有来客（无论是朋友还是敌人）的雄伟地标。霍尔斯滕门，就在这样的雄心壮志中破土动工。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程本身就是一场与自然的较量。选址在特拉沃河的一个支流边，地基是松软的沼泽。工匠们不得不先打下无数根深达12米的橡木桩，再在木桩上铺设厚重的木板作为地基平台。这项工程耗时漫长，从1464年一直持续到1478年才最终落成。建成时，它不仅是城门，更是一个功能齐全的堡垒：厚重的橡木门包裹着铁皮，塔楼和城墙内部设有炮台、射击孔，上层甚至还有用于浇灌滚烫沥青或铅水的“地狱之口”。它面向城外的一面几乎没有装饰，简洁冷酷，是纯粹的防御工事脸孔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，是霍尔斯滕门的黄金时代。满载货物的马车在它的拱门下进进出出，来自数十个同盟城市的商人在此接受检查、缴纳税款。它见证了汉萨同盟的极盛，也亲历了它的缓慢衰落。随着大西洋贸易路线的兴起和民族国家的崛起，汉萨同盟的光辉渐渐黯淡。到了19世纪，这座中世纪堡垒甚至一度被视为阻碍现代交通发展的“绊脚石”，差点被拆除。幸运的是，一场席卷德国的浪漫主义历史保护运动拯救了它。市民们视它为城市的灵魂，强烈反对拆除计划。最终，它被保留下来，并在1860年代进行了一次大规模的历史主义风格修缮，大致形成了我们今天看到的样子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，它的磨难并未结束。第二次世界大战的战火猛烈地灼烧了吕贝克。1942年的“棕枝主日空袭”几乎将整座老城的内核化为瓦砾。令人难以置信的是，霍尔斯滕门这座巨大的砖石目标，尽管被爆炸震得剧烈摇晃，墙体开裂，却奇迹般地屹立不倒，像一枚定海神针，守住了城市最后的尊严。战后，人们在一片废墟中再次看到了它倔强的双塔轮廓，那份震撼与慰藉，难以言表。它从一座权力的象征，彻底升华成了不屈精神的纪念碑。1950年，修复一新的霍尔斯滕门内部被开辟为城市历史博物馆，向世人诉说着吕贝克与汉萨同盟的千年传奇。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在上午9点前就抵达霍尔斯滕门广场。这个时候，大批旅行团尚未到来，阳光正以柔和的角度掠过砖墙，是拍摄城门雄姿和感受它静谧一面的最佳时机。整体游览可以分成三大阶段：首先是外部环绕欣赏与拍照（约45分钟），然后是进入博物馆内部进行深度历史探索（约1.5小时），最后以城门为起点，漫步进入吕贝克迷人的老城世界。这样的安排由外及内，再由点及面，能让你从建筑、历史和生活三个维度，完整地理解这座“汉萨女王”的城门。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`博物馆内的螺旋楼梯非常狭窄陡峭，上下务必小心，穿舒适的平底鞋是明智之选。如果想拍摄空旷的城门广场，周末和节假日的早晨是最好的选择。城内小偷较少，但广场人流密集时仍需看管好随身物品。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从特拉沃河对岸的“霍尔斯坦布吕克”桥开始，远眺霍尔斯滕门与它在平静河水中的完整倒影，感受这座堡垒与城市水系密不可分的关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走近，仔细端详城门向城市内侧倾斜的奇特姿态，并寻找外墙上的古老炮击凹痕和修补痕迹，那是战争留下的无声伤疤。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从外侧穿过那深邃的、曾经装有双重闸门的拱形门洞，想象中世纪商队在此接受盘查、缴纳入城税的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入博物馆，首先在底层展厅凝视那扇巨大、厚重、布满铆钉的原始橡木城门，触摸历史的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上狭窄的螺旋石阶，探索塔楼内的各层展厅，通过汉萨商人的账本、航海仪器和吕贝克著名的杏仁糖模具，窥见一个贸易帝国的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过顶层的武器与防御工事展厅，站在昔日的炮位射击孔前，眺望今日安宁的城市景观，反差带来的思绪最为强烈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来后，绕到城门背面，仔细品读山墙上那金色的拉丁文格言“CONCORDIA DOMI FORIS PAX”，体会吕贝克人的政治智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，以霍尔斯滕门为背景板，在广场边的长椅坐下，点一杯咖啡，看电车穿梭、行人往来，将历史定格进当下的生活画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`特拉沃河对岸仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，从河西岸的步行桥或堤岸上，可以拍摄到霍尔斯滕门双塔与水中完美倒影相连的经典对称构图，使用广角镜头能纳入更多天空与河流。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城门拱洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在城门内侧的阴影中，向外拍摄，用深邃的拱门洞作为天然画框，框住远处现代化的街道和行人，形成强烈的古今对话感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西门侧逆光剪影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的傍晚，太阳西沉时，走到城门西侧（靠河一侧）的草地上，低角度仰拍，让橙红色的夕阳正好位于一座塔楼尖顶旁，可以拍出极具戏剧性的堡垒剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`细节砖墙与光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射在城门砖墙上时，靠近拍摄那些被岁月打磨得温润的砖块肌理、古老的铁制构件以及在墙面上游走的斑驳光影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除砖墙表面的反光，让颜色更加饱和深沉。无人机飞行在吕贝克老城上空有严格限制，未经许可是禁止飞行的，请务必遵守当地法规。拍摄当地人时，一个友好的微笑和事先示意总是受欢迎的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城岛南端、距霍尔斯滕门步行仅十分钟的温馨家庭旅馆，房间虽小却一尘不染，房东老奶奶会为你准备丰盛的德式早餐，并用地道的低地德语讲述吕贝克的老故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻由一座16世纪汉萨商人仓库改建的精品设计酒店，裸露的原始砖墙、厚重的木梁与现代设计家具奇妙混搭，夜晚枕着特拉沃河轻微的流水声入眠，梦回帆樯林立的贸易年代。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住位于特拉沃河畔、拥有私人花园和米其林推荐餐厅的历史庄园酒店，在河景套房的阳台上，就能将霍尔斯滕门的全景和穿梭的帆船一并收入眼底，享受“汉萨女王”般的尊贵视野。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`吕贝克老城岛面积不大，几乎所有景点均可步行到达，因此选择住在岛上最能沉浸于中世纪氛围。老城夜晚非常安全宁静，但周末时靠近酒吧街的区域可能会有些喧闹，预订时可根据喜好选择街区。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开吕贝克许久，我脑海中挥之不去的，依然是霍尔斯滕门那个微微倾斜的侧影。它不像新天鹅堡那般梦幻，也不像科隆大教堂那般直指天国。它的美，是沉甸甸的、扎根于泥土与大地的。它从不是为了彰显神权或王权，而是为了捍卫一座城市的市民的财富、自由与秩序而建。“对内和谐，对外和平”，这句铭文道出的，是一种多么务实而崇高的中世纪城市共和理想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个崇尚流量与速度的时代，霍尔斯滕门像一位沉默的智者，提醒着我们一些更为恒久的价值：关于社区的凝聚力，关于贸易带来的文明交融，关于在动荡世界中坚守一份独立与骄傲。它经历过极致的繁华，直面过被拆除的危机，承受过战火的摧残，却每一次都顽强地挺立下来，并将伤痕化为勋章。拜访它，不仅仅是为了一座好看的古建筑，更是为了与一段塑造了北欧乃至整个欧洲商业文明格局的厚重历史进行一场对话。当你用手掌贴合它冰凉的砖墙，仿佛能感受到几个世纪以来，无数商人、工匠、市民在此进出的脉搏。对于任何一位渴望超越浅层观光、去触摸欧洲真实历史肌理的旅人来说，吕贝克的霍尔斯滕门，都是一堂无可替代的必修课。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/naumburg-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瑙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瑙姆堡大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naumburg Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wismar-hanseatic-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯马汉萨同盟老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wismar Hanseatic Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/goslar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈斯拉尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Goslar</p>
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
