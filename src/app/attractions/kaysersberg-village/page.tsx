import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯斯贝格 Kaysersberg｜阿尔萨斯的圣诞之都与葡萄酒乡 - 最佳欧洲景点',
  description: '车子拐下高速公路，驶入被葡萄藤覆盖的丘陵地带，当第一眼看到凯斯贝格时，你可能会不由自主地“哇”出声来。它不像一个目的地，更像从童話書里直接撕下来，妥帖地安放在山谷中的一幅立体插画。彩色木筋房像积木一样错落有致地挤在一起，尖尖的屋顶覆盖着深红色的瓦片，每一扇窗台上都爆炸式地开满天竺葵和矮牵牛，粉的、红...',
}

export default function KaysersbergVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '凯斯贝格小镇', href: '/attractions/kaysersberg-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯斯贝格小镇・Kaysersberg・法国・凯斯berg`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下高速公路，驶入被葡萄藤覆盖的丘陵地带，当第一眼看到凯斯贝格时，你可能会不由自主地“哇”出声来。它不像一个目的地，更像从童話書里直接撕下来，妥帖地安放在山谷中的一幅立体插画。彩色木筋房像积木一样错落有致地挤在一起，尖尖的屋顶覆盖着深红色的瓦片，每一扇窗台上都爆炸式地开满天竺葵和矮牵牛，粉的、红的、紫的，泼洒着毫不吝啬的生机。白河（Weiss River）潺潺的水声是小镇永恒的背景音，清澈见底，能看到水草轻轻摆动。
空气里的味道是层次分明的。清晨，是新鲜烘焙的奶油牛角包和布里欧修面包的浓郁黄油香，从街角面包房的门缝里钻出来，勾着你的鼻子。上午，阳光晒暖了木头发和古老石墙，升起一种干燥、好闻的旧时光气息。而到了午后，当你靠近任何一家酒窖（Winstub），那种由橡木桶、发酵的葡萄汁和炖得酥烂的酸菜腌肉（Choucroute）混合而成的、复杂而温暖的阿尔萨斯味道，便会将你彻底包围。你会看到留着白胡子的老爷爷坐在广场咖啡馆的藤椅上，用带着德语口音的法语慢悠悠地读报；主妇们从二楼窗户探出身，给窗台的花浇水，和楼下的邻居闲聊几句。时间在这里，仿佛被白河水浸湿了，流淌得格外缓慢而温润。
这里最打动人心的，是一种鲜活的历史感。它不是被封存在玻璃罩里供人瞻仰的遗迹，而是当地人依然在其中买菜、喝酒、庆祝节日的生活现场。那些有着四五百年历史的房子，木梁上雕刻着建造年份和屋主的职业标志——一个面包圈代表面包师，一串葡萄代表酒农——如今一楼可能是一家生意兴隆的餐厅或工艺品店。历史与当下毫无隔阂地共生着，让你感觉自己也成了这幅延续了几个世纪的生活画卷中的一小笔。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐下高速公路，驶入被葡萄藤覆盖的丘陵地带，当第一眼看到凯斯贝格时，你可能会不由自主地“哇”出声来。它不像一个目的地，更像从童話書里直接撕下来，妥帖地安放在山谷中的一幅立体插画。彩色木筋房像积木一样错落有致地挤在一起，尖尖的屋顶覆盖着深红色的瓦片，每一扇窗台上都爆炸式地开满天竺葵和矮牵牛，粉的、红的、紫的，泼洒着毫不吝啬的生机。白河（Weiss River）潺潺的水声是小镇永恒的背景音，清澈见底，能看到水草轻轻摆动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气里的味道是层次分明的。清晨，是新鲜烘焙的奶油牛角包和布里欧修面包的浓郁黄油香，从街角面包房的门缝里钻出来，勾着你的鼻子。上午，阳光晒暖了木头发和古老石墙，升起一种干燥、好闻的旧时光气息。而到了午后，当你靠近任何一家酒窖（Winstub），那种由橡木桶、发酵的葡萄汁和炖得酥烂的酸菜腌肉（Choucroute）混合而成的、复杂而温暖的阿尔萨斯味道，便会将你彻底包围。你会看到留着白胡子的老爷爷坐在广场咖啡馆的藤椅上，用带着德语口音的法语慢悠悠地读报；主妇们从二楼窗户探出身，给窗台的花浇水，和楼下的邻居闲聊几句。时间在这里，仿佛被白河水浸湿了，流淌得格外缓慢而温润。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是一种鲜活的历史感。它不是被封存在玻璃罩里供人瞻仰的遗迹，而是当地人依然在其中买菜、喝酒、庆祝节日的生活现场。那些有着四五百年历史的房子，木梁上雕刻着建造年份和屋主的职业标志——一个面包圈代表面包师，一串葡萄代表酒农——如今一楼可能是一家生意兴隆的餐厅或工艺品店。历史与当下毫无隔阂地共生着，让你感觉自己也成了这幅延续了几个世纪的生活画卷中的一小笔。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯斯贝格小镇`} />
                <InfoRow label="英文名称" value={`Kaysersberg`} />
                <InfoRow label="正式名称" value={`Kaysersberg`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`凯斯berg`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座被誉为“阿尔萨斯明珠”的中世纪古镇，曾是神圣罗马帝国时期重要的战略要塞和繁荣的葡萄酒贸易中心。`} />
                <InfoRow label="建筑特色" value={`密集而精美的半木结构（木筋）房屋、蜿蜒的鹅卵石街道、横跨白河的 fortified 古桥以及雄踞山丘的城堡遗址共同构成了童话般的景观。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔萨斯传统风格，融合了德国木框架建筑的精致与法国色彩的浪漫。`} />
                <InfoRow label="文化价值" value={`这里是阿尔萨斯文化交融的活化石，承载了德法边境地区几个世纪的复杂历史与民间传统，更是法国“最美小镇”之一和世界闻名的圣诞之都。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要历史建筑（如圣诞博物馆、圣十字教堂）开放时间一般为上午10点至下午6点，冬季（11月至3月）可能缩短至下午5点关闭，部分小型博物馆周一闭馆。圣诞节期间（12月）全镇装饰璀璨，开放时间延长，但12月25日当天许多商店和博物馆关闭。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观内部景点单独购票：圣诞博物馆约5欧元，城堡遗址免费。提供联票选项（可参观镇上2-3个博物馆）约8欧元。优惠政策：学生、10-18岁青少年及团体享有折扣，10岁以下儿童在成人陪同下通常免费。`} />
              <InfoRow label="地址" value={`Rue du Général de Gaulle, 68240 Kaysersberg, France`} />
              <InfoRow label="交通方式" value={`从最近的国际机场斯特拉斯堡机场（SXB）出发，最佳方式是租车自驾，沿A35高速公路向南行驶约1小时即可到达，沿途是绵延的葡萄园丘陵，风景绝佳。若乘坐公共交通，先从斯特拉斯堡火车站搭乘TER列车前往科尔马（Colmar），车程约30分钟，班次频繁（约每小时一班）。抵达科尔马后，在火车站外的巴士站换乘106路或440路巴士，约25-30分钟即可直达凯斯贝格镇中心。巴士班次约为每小时1-2班，周末会减少，建议提前查询最新时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`凯斯贝格的故事，始于它的名字——“皇帝的山”（Kaiser’s Berg）。早在13世纪初，统治此地的霍亨斯陶芬王朝的皇帝们，就看中了这座俯瞰白河谷的小山丘的战略价值。1227年，一份官方文件首次提及此地，不久后，拿骚伯爵在此着手建造城堡，一个要塞小镇的雏形开始形成。城堡高高在上，监控着通往洛林和勃艮第的重要商路，而山脚下的平民区则受到城墙的保护，逐渐繁荣。你可以想象，中世纪时，满载着羊毛、葡萄酒和金属的商队在此缴纳关税，市集上充满各种语言的喧哗，小镇因贸易而变得富庶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`葡萄酒，是刻进凯斯贝格骨血里的另一个基因。这里的向阳坡地日照充足，土壤富含矿物质，出产的葡萄酒，尤其是雷司令和琼瑶浆，早在中世纪就名声在外。小镇的繁荣与葡萄酒贸易紧密相连，那些最华丽的木筋房主人，很多都是成功的酒商。他们的房子本身就是财富的宣言：越富有，使用的木料就越粗壮，雕刻也越繁复，甚至会在显眼处展示家族的徽章。然而，地处要冲也意味着多舛的命运。在漫长的世纪里，特别是在惨烈的三十年战争（1618-1648）中，凯斯贝格因其要塞地位而多次被围攻、占领和破坏。城堡在战争后期被法国军队下令拆毁，以防再被敌人利用，从此只剩下苍凉的废墟，沉默地诉说着权力的脆弱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争与和平的拉锯，塑造了阿尔萨斯独特的混合气质。凯斯贝格在德法之间数次易手，直到十七世纪末才正式归属法国。但文化的融合早已发生：你看到的是法式的优雅窗棂和浪漫色彩，但房屋的结构、陡峭的屋顶、以及那些仿佛来自格林童话的造型，又深深烙印着日耳曼的风格。小镇最著名的儿子，1952年诺贝尔和平奖得主、医生兼音乐家阿尔伯特·施韦泽，就完美体现了这种双重文化的滋养。他出生的房子如今是一座纪念馆，你可以感受到这片土地如何孕育出兼具理性、博爱与艺术敏感的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战时期，凯斯贝格再次被卷入风暴中心。它位于“科尔马口袋”战役的边缘，经历了激烈的战斗。令人惊叹的是，小镇的主体结构在战火中幸存了下来。这并非完全出于幸运，据说部分得益于一位有文化素养的德军指挥官，他在撤退命令中特意要求避免对这座历史古镇进行无意义的炮击。战后，法国开展了大规模的历史遗产修复运动，凯斯贝格的木筋房被精心修复，重新涂上那些令人愉悦的粉彩——奶油黄、薄荷绿、淡桃红。它不再是一个要塞，而是化身为一个关于美、历史和坚韧生活的象征，吸引着全世界寻找童话与宁静的人们。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点左右抵达，这时旅游大巴尚未涌入，小镇还沐浴在柔和的晨光中，属于本地居民的悠闲节奏刚刚开始。整体游览可以安排4-5小时，采取“慢走细看”的节奏。先从游客中心获取地图和信息，然后由低到高，从热闹的主街深入静谧的巷弄，最后攀登至城堡遗址俯瞰全景，让体验有一个从细节到宏大的升华。中午留在镇上用餐，才能真正品尝到阿尔萨斯的灵魂味道。这样的安排能让你避开最高峰的人流，充分感受小镇从苏醒到午间活力的完整脉搏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在12月的周末或圣诞市场期间来访，除非你极度热爱摩肩接踵的热闹，那时小镇美则美矣，但已近乎主题公园。务必穿一双绝对舒适、适合走鹅卵石路和轻微爬山的鞋子，小镇的韵味全在那些起伏不平的街巷里。不要只盯着餐厅的英文菜单，勇敢地点当日黑板上的“Plat du Jour”（今日特菜），那往往是厨师用最新鲜本地食材做的家常美味。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从白河畔的古老 fortified 桥开始，站在桥中央感受潺潺水声与两岸木筋房倒影构成的宁静画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着 Hauptstraße 主街石板路向上漫步，用鼻子寻找那家传说中飘出最香面包味的“Boulangerie Oberlin”早餐店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣诞博物馆（Musée du Sapin de Noël）那扇不起眼的木门，沉浸于数百件来自不同时代的圣诞装饰藏品所营造的奇幻冬日氛围里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随指向“Château”的朴素路标，穿过民居后院般的小径，开始攀登通往城堡遗址的绿色山坡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡废墟的断壁残垣间坐下，眼前是整个凯斯贝格镇色彩斑斓的屋顶海洋与远处无尽葡萄园的壮丽全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后钻进主街旁一条名为“Rue des Forgerons”（铁匠街）的狭窄巷子，抚摸那些被岁月打磨得发亮的门环和古老的手工招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后走进圣十字教堂（Église Sainte-Croix），在相对昏暗的光线中寻找那座被誉为“阿尔萨斯文艺复兴瑰宝”的彩色砂岩祭坛。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡遗址西侧城墙边缘`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前两小时，阳光为小镇涂上金色，在此用长焦镜头压缩前景的废墟石墙与背景小镇的全景，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`白河上古桥的东南侧河岸`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点前，水面平静如镜，可以完美拍下木筋房与桥上防御塔楼在水中的对称倒影，画面宁静而古典。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主街中段向铁匠街拐弯的丁字路口`}</h4>
                  <p className="text-sm text-gray-700">{`利用巷道的纵深感，将两侧色彩鲜艳、雕刻精致的木筋房作为引导线，等待一个本地居民或骑自行车的人自然走入画面中心。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇北部外围的葡萄园步道（Sentier Viticole）`}</h4>
                  <p className="text-sm text-gray-700">{`日出或日落时分，回头俯拍，可以将小镇簇拥在葡萄藤蔓的绿色前景之中，展现其与自然环境的完美融合。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄民居窗户和私人庭院时请务必保持尊重，使用长焦镜头远拍，避免打扰居民隐私。阿尔萨斯的天气多变，善于利用雨后湿润的石板路反光和多云的漫射光，能让木筋房的色彩更加饱和柔和。每年夏季窗台鲜花盛开和冬季圣诞装饰期间是两个绝佳的拍摄主题季，风格迥异但都极具代表性。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于老镇边缘的“La Maison des Têtes”民宿，由一栋16世纪木筋房改造，房间小巧温馨，老板娘会为你准备丰盛的阿尔萨斯家庭早餐，包括自制的果酱和蛋糕。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`镇中心的“Hôtel Constantin”精品酒店，部分房间保留了原始的木梁和石墙，推开窗户就能看到蜿蜒的街道，晚上能听到教堂的钟声，位置绝佳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇几分钟车程，坐落在葡萄园环抱中的“Domaine de l‘Évêché”庄园酒店，由一座历史建筑修复而成，拥有宁静的花园、泳池和顶级餐厅，是逃离喧嚣的完美庇护所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`葡萄酒爱好者之选`}</h4>
                  <p className="text-sm text-purple-800">{`预订一家镇外由酒庄经营的“Chambre d‘Hôte”（农家乐），比如“Domaine Weinbach”附近的民宿，你可以直接向庄主买酒，并在葡萄园的环绕中入睡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`凯斯贝格本身非常安全宁静，但夜生活几乎为零，晚上九点后街道就十分安静，喜欢夜生活的旅客需知。夏季和圣诞季是绝对旺季，必须提前数月预订，而春秋两季（5-6月，9-10月）气候宜人，游客较少，是深度体验的更好时机。如果自驾，务必确认住宿地点是否提供停车位，老镇内停车位极其紧张且多为收费区。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯斯贝格好些日子了，但脑子里总还会闪过那些画面：午后阳光把木梁的影子拉得老长，斜斜地印在粉黄色的墙面上；咖啡馆老板不慌不忙地擦拭着玻璃杯，仿佛拥有全世界的时间。这里有一种奇特的魔力，它能温柔地摁下你内心的暂停键。在这个追求效率和爆炸性体验的世界里，凯斯贝格提供的是另一种价值——一种关于“持久”和“沉淀”的提醒。它告诉你，美可以不是惊心动魄的，而是渗透在每一块被脚步磨光的石头里，每一扇被精心照料的花窗前，每一杯需要耐心品酌的雷司令酒中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要来凯斯贝格？不仅仅是为了看“法国最美小镇”的称号，更是为了体验一种完整的生活哲学。在这里，历史不是教科书上冰冷的知识，而是你指尖触碰到的温润木纹，是酒农谈起风土时眼里的光芒。它让你相信，在世界的某些角落，人们仍然在以一种优雅、坚韧且充满烟火气的方式，守护着时间的遗产。对于每一位厌倦了走马观花、渴望在旅途中找到呼吸感和连接感的旅人来说，凯斯贝格不是 merely 一个景点，它是一个可以走进去、住下来、让心灵慢慢舒展开的故乡。它值得你专程为它绕一段路，花上一天，无所事事地“浪费”其中，然后带着那份被阿尔萨斯阳光和葡萄酒温暖过的宁静，重新上路。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saint-guilhem-le-desert-abbey-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣吉米扬隐修村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Guilhem-le-Désert</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
