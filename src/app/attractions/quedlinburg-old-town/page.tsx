import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奎德林堡老城 Quedlinburg Old Town｜穿越千年时光隧道的木桁架童话镇 - 最佳欧洲景点',
  description: '还记得第一次从火车站那条缓坡走上来，眼前豁然开朗的瞬间吗？那不是一座孤零零的城堡或教堂，而是一整片被时光精心封存起来的、高低错落的彩色积木世界。空气里有种特别的清新，混合着石板路被昨夜小雨润湿后的泥土味，从某条小巷深处飘来的、刚出炉的“奎德林堡果脯蛋糕”的甜香，还有那些历经数百年风霜的深色橡木梁散发...',
}

export default function QuedlinburgOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '奎德林堡老城', href: '/attractions/quedlinburg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奎德林堡老城・Quedlinburg Old Town・德国・奎德林堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还记得第一次从火车站那条缓坡走上来，眼前豁然开朗的瞬间吗？那不是一座孤零零的城堡或教堂，而是一整片被时光精心封存起来的、高低错落的彩色积木世界。空气里有种特别的清新，混合着石板路被昨夜小雨润湿后的泥土味，从某条小巷深处飘来的、刚出炉的“奎德林堡果脯蛋糕”的甜香，还有那些历经数百年风霜的深色橡木梁散发出的、沉稳而干燥的气息。
我的脚步不自觉地放慢了，因为眼睛根本忙不过来。左边是一栋歪歪扭扭、似乎下一秒就要和你拥抱的鲜黄色小屋，它的每一根黑色木梁上都刻着繁复的螺旋花纹；右边则是一栋端庄的粉红色建筑，山墙上用优雅的字体写着“1602”。抬起头，视线会被无数尖尖的屋顶、凸出的窗台和雕刻着滑稽人脸的排水管牵引着，一直延伸到远处那座雄踞在山丘上的城堡轮廓。这里的声音是温和的：旅行箱轮子在凹凸不平的石板路上发出咕噜咕噜的闷响，咖啡馆外传来瓷杯轻轻的碰撞声，还有不知哪扇窗里飘出的若有若无的古典音乐。
最动人的，是这里绝非一个空洞的博物馆。那位坐在自家门廊蓝色长椅上、戴着花镜读报的老奶奶，她身后的木门里就是住了大半辈子的家；骑着自行车叮铃铃穿过狭窄巷道的邮差，他的车篮擦过墙边怒放的天空葵。老城的心脏——市场广场上，每周的市集依然热闹，本地人在这里挑选着奶酪、鲜花和香肠，那座文艺复兴风格的市政厅默默见证了数百年的市井烟火。这里的美，不是被供奉起来的，而是依然在呼吸、在生活着的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还记得第一次从火车站那条缓坡走上来，眼前豁然开朗的瞬间吗？那不是一座孤零零的城堡或教堂，而是一整片被时光精心封存起来的、高低错落的彩色积木世界。空气里有种特别的清新，混合着石板路被昨夜小雨润湿后的泥土味，从某条小巷深处飘来的、刚出炉的“奎德林堡果脯蛋糕”的甜香，还有那些历经数百年风霜的深色橡木梁散发出的、沉稳而干燥的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我的脚步不自觉地放慢了，因为眼睛根本忙不过来。左边是一栋歪歪扭扭、似乎下一秒就要和你拥抱的鲜黄色小屋，它的每一根黑色木梁上都刻着繁复的螺旋花纹；右边则是一栋端庄的粉红色建筑，山墙上用优雅的字体写着“1602”。抬起头，视线会被无数尖尖的屋顶、凸出的窗台和雕刻着滑稽人脸的排水管牵引着，一直延伸到远处那座雄踞在山丘上的城堡轮廓。这里的声音是温和的：旅行箱轮子在凹凸不平的石板路上发出咕噜咕噜的闷响，咖啡馆外传来瓷杯轻轻的碰撞声，还有不知哪扇窗里飘出的若有若无的古典音乐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的，是这里绝非一个空洞的博物馆。那位坐在自家门廊蓝色长椅上、戴着花镜读报的老奶奶，她身后的木门里就是住了大半辈子的家；骑着自行车叮铃铃穿过狭窄巷道的邮差，他的车篮擦过墙边怒放的天空葵。老城的心脏——市场广场上，每周的市集依然热闹，本地人在这里挑选着奶酪、鲜花和香肠，那座文艺复兴风格的市政厅默默见证了数百年的市井烟火。这里的美，不是被供奉起来的，而是依然在呼吸、在生活着的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奎德林堡老城`} />
                <InfoRow label="英文名称" value={`Quedlinburg Old Town`} />
                <InfoRow label="正式名称" value={`Historic Town of Quedlinburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`奎德林堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是东法兰克王国和早期德意志帝国的政治、文化与宗教中心之一，其修道院在公元10世纪至12世纪享有极高的女修道院院长直属于教皇的崇高地位。`} />
                <InfoRow label="建筑特色" value={`拥有超过1300座公元14世纪至19世纪的木桁架房屋，其密度、完整性与艺术性堪称欧洲之冠，宛如一部立体的建筑编年史。`} />
                <InfoRow label="建筑风格" value={`以中世纪至文艺复兴时期的木桁架建筑为主体，融合了哥特式、文艺复兴式、巴洛克式及古典主义等多种风格，呈现独特的“哈尔茨地区”风貌。`} />
                <InfoRow label="文化价值" value={`作为保存完好的中世纪城镇典范，生动体现了神圣罗马帝国时期北德地区的城镇规划、市民文化与宗教生活，于1994年被联合国教科文组织列为世界文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`奎德林堡老城作为开放式历史街区，全天24小时可自由漫步。其内的各个博物馆、城堡和教堂有独立开放时间，通常为上午10点至下午5点，夏季（4月至10月）延长至下午6点，周一多数博物馆闭馆。圣诞市场期间（11月底至12月23日）老城广场区域有特别活动安排。建议出行前在官网核对具体场馆时间。`} />
              <InfoRow label="门票价格" value={`进入老城街区本身免费。参观核心景点需购票：城堡山（含珍宝馆与博物馆）联票约9欧元，圣塞瓦修斯教堂珍宝馆约4.5欧元。有涵盖多个博物馆的家庭票及一日通票可供选择。6岁以下儿童免费，学生、团体享有折扣。`} />
              <InfoRow label="地址" value={`Markt 1, 06484 Quedlinburg, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是莱比锡/哈勒机场（LEJ）或汉诺威机场（HAJ）。从机场搭乘火车均需中转。最便捷的方式是乘坐德国铁路（DB）抵达“Quedlinburg”火车站。从柏林主火车站出发，乘ICE至马格德堡，转乘区域列车，总耗时约2.5-3小时，班次每小时1-2班。从火车站步行至老城中心仅需10分钟，沿途风景已极具中世纪风情。建议使用DB Navigator应用提前购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要走进奎德林堡的故事，我们得把时钟拨回一千多年前。公元919年，捕鸟者亨利一世被选为东法兰克国王，他选择将奎德林堡作为他最重要的行宫之一。这不仅是一个政治决定，更让这个位于肥沃博德河谷的小镇，一跃成为了早期德意志王权的摇篮。亨利一世去世后，他的遗孀玛蒂尔达王后和他的儿子奥托大帝（后来成为神圣罗马帝国皇帝）在此建立了女子修道院，以纪念这位伟大的国王。这座修道院非同小可，它的女修道院院长由皇帝或国王的女儿或近亲担任，直接听命于教皇，拥有堪比亲王的世俗权力，管辖着大片土地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个中世纪，得益于修道院的崇高地位和地处贸易路线的优势，奎德林堡繁荣起来。商人和手工业者聚集，那些我们今天看到的迷人木桁架房屋，正是从那个时期开始如雨后春笋般建造。你能在最早的房屋上看到简单的十字形支撑，那是14世纪的朴素；而到了16、17世纪文艺复兴风潮席卷时，木梁上的雕刻变得极其华丽，出现了玫瑰花结、螺旋纹、寓言人物，甚至整幅的圣经故事，屋主们争相通过外墙的装饰来炫耀财富与品味。老城中心的市政厅（建于公元1300年）和周边广场的建筑群，就是这段黄金时期市民自豪感的集中体现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它并非一直顺遂。三十年战争的烽火曾让它受损，但真正的毁灭性威胁来自于现代。令人唏嘘的是，在二战末期，当德国无数历史名城毁于战火时，奎德林堡却因为一位美国陆军中尉，奇迹般地毫发无伤。这位中尉违抗了炮击的命令，保护了这座古城。然而，战后的命运更加曲折。它属于东德，在社会主义规划下，老城的维护被长期忽视，许多房屋濒临坍塌。但当地的居民，在艰难的条件下，依然用尽办法守护着他们的家园，这种坚韧的民间力量，是奎德林堡灵魂的另一面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两德统一后，一场史无前例的、规模浩大的修复工程启动了。这不仅仅是政府行为，更是全民参与的文化拯救。工匠们用传统技艺一根梁、一片瓦地修复，考古学家和建筑史学家细致地工作。今天，当你抚摸那些光洁的木梁，看到的不仅是古老，更是新生。从亨利一世的王权基石，到修道院的宗教光辉，再到汉萨同盟商人的世俗成功，直至近代的幸存与复兴，奎德林堡的每一块石板、每一幅木雕，都层层叠叠地压着这些历史的回响，等着你来细细阅读。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的奎德林堡深度游，一定要从清晨开始。建议在上午9点前抵达，这时旅行团大军还未涌入，阳光斜射，为木屋涂上第一层金边，整个老城安静得只属于你和早起的当地人。整体游览需要一整天时间，节奏宜慢不宜快。上午精力充沛时，先攻克制高点——城堡山，俯瞰全景并了解宏观历史；中午下山，在老城迷宫般的小巷里随心所欲地迷路，用感官去体验；下午参观一两处精致的博物馆或特色房屋内部，让上午看到的“外壳”拥有丰富的“内里”；傍晚时分，则留给市场广场，喝一杯当地啤酒，看日落余晖将一切染成蜜色。这样的安排由宏观到微观，由外至内，能让你立体地消化这座千年古城的所有魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是旅行团高峰，城堡山和主街会比较拥挤，建议将核心景点参观安排在上午。老城石板路穿舒适的平底鞋是绝对明智的选择。无需过于依赖地图，迷路本身就是在这里最大的乐趣之一。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从布满精巧木雕廊柱的文艺复兴风格市政厅出发，先在安静的市场广场感受一下老城清晨的心跳`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着上坡的石头小径“Schlossberg”一路向上，让两侧童话般的房屋为你列队，直到城堡山大门前`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡山的开阔平台上深吸一口气，将脚下红瓦如海、教堂尖塔点缀其间的全景一次性收入眼底和心底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花时间细细观摩城堡博物馆里那组震撼的10世纪“奎德林堡宝藏”，想象千年前帝国中心的辉煌`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后毫不犹豫地拐进任何一条吸引你的小巷，比如著名的“Wordgasse”，去发现那些隐藏在门楣、窗棂和山墙上的独特雕刻故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那栋被称为“独角兽之家”的华丽晚期哥特式木屋，仰头欣赏它山墙上那只骄傲的独角兽木雕和繁复的星辰装饰`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午后的暖阳里推开圣塞瓦修斯教堂沉重的大门，让眼睛适应昏暗后，仰望那座宏伟的罗马式地下墓穴和闪烁的教堂珍宝`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时回到市场广场，在市政厅地窖酒馆“Ratskeller”点一份地道的哈尔茨山区菜肴，用美食为这一天画上圆满句号`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡山西侧观景平台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，用长焦镜头压缩空间，将圣维珀蒂教堂的双塔与脚下层层叠叠的红色屋顶一同框入，营造出极其丰饶的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Klink巷与Schuhhof巷交汇处`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光能照亮巷子时，站在较低处仰拍，利用巷道的纵深感，让两侧色彩鲜艳、倾斜有趣的木屋线条引导视线指向远处的城堡山。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣塞瓦修斯教堂珍宝馆内（若允许拍摄）`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内昏暗光线与展示柜的聚焦灯光，拍摄那些精美绝伦的中世纪圣物箱或手抄本细节，捕捉金银宝石在光下的千年微光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“Wordgasse”巷中段`}</h4>
                  <p className="text-sm text-gray-700">{`找一扇有着古老铁艺招牌和鲜花的橱窗，在正午阳光直射时避开，选择侧光或散射光，聚焦于木门纹理与门前装饰，拍出充满生活气息的特写。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`市政厅建筑拐角`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，拍摄文艺复兴式凸窗与广场上鸽子飞起的瞬间，动静结合，并以行人作为比例尺，衬托建筑的宏伟与古老。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅的木雕细节时请保持尊重距离，避免将镜头直接对准屋内。无人机飞行在德国历史城区受到严格管制，未经特别许可切勿使用。雨季后的清晨，湿漉漉的石板路是绝佳的反光板，能拍出油画般的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`穿越之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住一栋受保护的历史木桁架房屋，楼梯咯吱作响，木梁低矮需低头，但早晨推开窗就是中世纪街景，彻底融入古城脉搏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术之家`}</h4>
                  <p className="text-sm text-green-800">{`由本地艺术家经营的精品旅馆，每间房装饰风格迥异，充满现代设计感与古董家具的混搭，提供私房早餐和主人手绘的探索地图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗篇`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一座带可爱花园的静谧民宿，房间宽敞明亮，女主人会奉上自制的果酱和蛋糕，是喧嚣一日后完美的避世绿洲。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端尊享`}</h4>
                  <p className="text-sm text-purple-800">{`老城内唯一由历史建筑改造的顶级设计酒店，将罗马式地窖与现代极简风格完美融合，水疗中心设于古老的拱顶之下，提供极致的古今对话体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多由历史建筑改造，房间格局可能不规则，隔音相对现代酒店稍弱，但这正是体验的一部分。夏季和圣诞市场期间需提前数月预订。住在老城内意味着晚上和清晨可以独享绝美的空城景象，这体验绝对值回票价。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奎德林堡好些日子了，我脑子里时常浮现的不是某个具体的雕像或房间，而是一种整体的、宁静而坚韧的氛围。在这个一切都在追求更新、更快、更炫目的世界里，奎德林堡的存在，像一位慈祥而睿智的老者，静静地坐在那里，告诉你：缓慢、持久、日常的美丽，拥有着穿透时光的惊人力量。它的伟大不在于某座单体建筑的雄伟，而在于那1300多栋普通人的家园，一代又一代，被珍视、被使用、被修复，最终汇聚成了一条活着的、流淌着的文明之河。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了打卡式的旅行，如果你渴望一段能让内心真正沉静下来的时光，请一定要来奎德林堡。它不需要你顶礼膜拜，它邀请你成为它日常生活图景的一部分——在它的广场上喝杯咖啡，在它的巷子里迷一次路，抚摸一下它那些被无数代人手掌磨得发亮的木门把手。你会带走一份确信：真正的文化遗产，不是锁在玻璃柜里的冰冷文物，而是人们依然愿意在其中生活、欢笑、相爱的家园。这份温度，才是它留给这个世界，最宝贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/old-town-donauwoerth" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多瑙沃特古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Donauwörth</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/three-rivers-passau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕绍（三河交汇之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Passau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/baroque-varazdin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦拉日丁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Varaždin</p>
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
