import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沙罗什保陶克 Sárospatak｜匈牙利北部隐藏的文艺复兴瑰宝，传奇城堡与思想摇篮 - 最佳欧洲景点',
  description: '车子刚刚驶入沙罗什保陶克老城，你的目光就一定会被波多克河弯处那一大片温暖的、介于砖红与赭石色之间的建筑群抓住。那不是那种咄咄逼人的、童话故事里尖顶林立的城堡，而更像一位饱读诗书、气度沉稳的学者，静静地坐在河岸的高处，用身上那些装饰着华丽格子纹和雕塑的窗户，平和地注视着流淌的河水与小镇的日常。空气里是...',
}

export default function SRospatakRenaissanceCastleAndCollegePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '沙罗什保陶克', href: '/attractions/s-rospatak-renaissance-castle-and-college' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`沙罗什保陶克・Sárospatak・匈牙利・沙罗什保陶克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚驶入沙罗什保陶克老城，你的目光就一定会被波多克河弯处那一大片温暖的、介于砖红与赭石色之间的建筑群抓住。那不是那种咄咄逼人的、童话故事里尖顶林立的城堡，而更像一位饱读诗书、气度沉稳的学者，静静地坐在河岸的高处，用身上那些装饰着华丽格子纹和雕塑的窗户，平和地注视着流淌的河水与小镇的日常。空气里是初夏青草与湿润泥土的味道，混杂着远处面包店飘来的淡淡黄油香。
走近了，最先迎接你的不是卫兵，而是庭院里沙沙作响的百年古树，和从哥特式小教堂方向传来的、若有若无的管风琴试音声。这里依然是活的——学院的部分仍在运营，你能看见夹着书本、匆匆穿过拱廊的年轻学生，他们的身影与墙上十六世纪人文主义学者的浮雕奇妙地重叠。城堡主楼的红砂岩墙面在午后的阳光下，呈现出蜂蜜般的光泽，上面雕刻的家族纹章、神话人物虽然历经风雨，细节却依然鲜活，仿佛下一秒就能开口，讲述几个世纪的故事。
当你踏入那个被誉为匈牙利最美丽文艺复兴庭院之一的“德鲁格特庭院”时，瞬间就明白了它的核心魅力。那是一种极度和谐与宁静的力量。双层拱廊优雅地环绕着你，下层粗壮敦实，上层轻盈纤细，阳光透过拱券，在铺着红色碎砂石的地面上画出一道道清晰又温柔的光影格子。时间在这里仿佛被调慢了，你能听到的只有自己的脚步声、鸽子在屋檐上咕咕的叫声，以及从某个打开的窗户里飘出的、断断续续的拉丁语诵读声。这里不是一个冰冷的博物馆，而是一个思想曾经激荡、如今依然呼吸着的圣地。
最动人的是那种“家园”的感觉。相比布达佩斯皇宫的帝国威严，这座城堡更私密，更有人情味。你可以想象一个文艺复兴时期的贵族家庭在这里生活：孩子们在回廊里追逐，母亲在面向花园的凸窗边阅读，父亲在挂满壁毯的大厅里与学者们辩论。这种将宏大的历史叙事融入日常生活肌理的能力，让沙罗什保陶克拥有了独一无二的温度。它不是高悬于空的星辰，而是深深扎根于匈牙利土壤中的一棵智慧之树。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚刚驶入沙罗什保陶克老城，你的目光就一定会被波多克河弯处那一大片温暖的、介于砖红与赭石色之间的建筑群抓住。那不是那种咄咄逼人的、童话故事里尖顶林立的城堡，而更像一位饱读诗书、气度沉稳的学者，静静地坐在河岸的高处，用身上那些装饰着华丽格子纹和雕塑的窗户，平和地注视着流淌的河水与小镇的日常。空气里是初夏青草与湿润泥土的味道，混杂着远处面包店飘来的淡淡黄油香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，最先迎接你的不是卫兵，而是庭院里沙沙作响的百年古树，和从哥特式小教堂方向传来的、若有若无的管风琴试音声。这里依然是活的——学院的部分仍在运营，你能看见夹着书本、匆匆穿过拱廊的年轻学生，他们的身影与墙上十六世纪人文主义学者的浮雕奇妙地重叠。城堡主楼的红砂岩墙面在午后的阳光下，呈现出蜂蜜般的光泽，上面雕刻的家族纹章、神话人物虽然历经风雨，细节却依然鲜活，仿佛下一秒就能开口，讲述几个世纪的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你踏入那个被誉为匈牙利最美丽文艺复兴庭院之一的“德鲁格特庭院”时，瞬间就明白了它的核心魅力。那是一种极度和谐与宁静的力量。双层拱廊优雅地环绕着你，下层粗壮敦实，上层轻盈纤细，阳光透过拱券，在铺着红色碎砂石的地面上画出一道道清晰又温柔的光影格子。时间在这里仿佛被调慢了，你能听到的只有自己的脚步声、鸽子在屋檐上咕咕的叫声，以及从某个打开的窗户里飘出的、断断续续的拉丁语诵读声。这里不是一个冰冷的博物馆，而是一个思想曾经激荡、如今依然呼吸着的圣地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的是那种“家园”的感觉。相比布达佩斯皇宫的帝国威严，这座城堡更私密，更有人情味。你可以想象一个文艺复兴时期的贵族家庭在这里生活：孩子们在回廊里追逐，母亲在面向花园的凸窗边阅读，父亲在挂满壁毯的大厅里与学者们辩论。这种将宏大的历史叙事融入日常生活肌理的能力，让沙罗什保陶克拥有了独一无二的温度。它不是高悬于空的星辰，而是深深扎根于匈牙利土壤中的一棵智慧之树。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`沙罗什保陶克`} />
                <InfoRow label="英文名称" value={`Sárospatak`} />
                <InfoRow label="正式名称" value={`Rákóczi Castle and Reformed College of Sárospatak`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`沙罗什保陶克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利文艺复兴建筑的典范与东匈牙利新教教育和文化长达五个世纪的核心堡垒。`} />
                <InfoRow label="建筑特色" value={`以大量使用当地产红色大理石为装饰基调，并拥有罕见的双层拱廊回廊，防御性与艺术性完美结合。`} />
                <InfoRow label="建筑风格" value={`以晚期文艺复兴（匈牙利称之为“拉科齐风格”）为主，融合了哥特式基础与巴洛克后期修复元素。`} />
                <InfoRow label="文化价值" value={`不仅是建筑杰作，更是孕育了匈牙利民族意识、文学与改革思想的知识中心，被誉为“匈牙利雅典”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡与学院建筑群开放时间因季节和具体区域而异。城堡博物馆通常为4月至10月，周二至周日10:00-18:00开放；11月至3月，周二至周日10:00-16:00开放。周一闭馆。学院回廊和图书馆的参观通常需参加定时导览团，夏季每天有4-5个英语或匈牙利语团次，冬季减少。节假日（如复活节、12月24-26日）可能关闭或缩短开放时间。出行前务必在其官网或游客中心确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`城堡博物馆门票约2500匈牙利福林（HUF）。包含城堡、学院回廊及图书馆的联票约4500 HUF。学生、老人凭证件享受约30%折扣，6岁以下儿童免费。家庭套票（2大2小）约9000 HUF。部分特殊展览需额外购票。导览团费用通常已包含在联票内，但需提前预约或在现场指定时间集合。`} />
              <InfoRow label="地址" value={`Sárospatak, Rákóczi út 1, 3950, Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最方便。自驾：沿M3高速公路向东至米什科尔茨附近，转37号公路向北，全程约230公里，需2.5-3小时，沿途是舒缓的匈牙利大平原和北部丘陵风光。火车：从布达佩斯-尼伊盖里哈佐火车站乘坐前往米什科尔茨或萨托劳尔尧海伊的列车，在沙罗什保陶克站下车（约2.5-3小时车程）。火车站步行至城堡约15分钟，穿过宁静的老城区。公交车：从米什科尔茨或邻近城镇有频繁的本地巴士抵达。建议使用匈牙利国铁（MÁV）APP或网站提前查询火车时刻并购票，区域巴士时刻表可在当地游客中心获取。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从十五世纪末讲起。那时候，这座建筑还主要是哥特式的，属于强大的匈牙利贵族德鲁格特·拉约什家族。但它命运的华丽转身，始于一场婚姻。1500年，德鲁格特的女儿拜阿特里克斯，嫁给了另一位显赫的贵族，佩伦尼·伊斯特万。正是这对夫妇，为城堡注入了文艺复兴的灵魂。他们邀请了来自意大利和波兰的能工巧匠，开始大刀阔斧地改建。我们今天看到的那些精美绝伦的石雕窗框、装饰性的山墙，以及那个标志性的红色大理石螺旋楼梯——“国王楼梯”，都诞生于这个激情洋溢的时期。城堡从一个军事堡垒，转变为一个追求美与知识的贵族官邸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的传奇，是在十六世纪中叶与拉科齐家族的结合后谱写的。这个家族将成为匈牙利历史上反抗哈布斯堡王朝统治的象征。1534年，拉科齐·久尔吉获得了城堡。但他的儿子，拉科齐·西格蒙德，才是那位关键人物。他是一位虔诚的新教信徒，在那个宗教动荡的年代，他决心将这里打造成一个安全的知识港湾。1538年，他签署了奠基文件，在城堡旁建立了新教学院。这可不是普通的学校，它迅速吸引了全欧洲顶尖的新教学者和思想家，成为中欧最重要的文化中心之一。城堡的墙壁内，回响的不再仅仅是宴饮歌舞，更多的是拉丁语、希腊语的辩论，以及对科学、神学和新思想的探索。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十七世纪，城堡迎来了它最著名的女主人——玛丽·德吉女王，她是特兰西瓦尼亚君主拉科齐·久尔吉一世的妻子。这位充满智慧与魄力的女性，不仅是丈夫政治上的得力伙伴，更是城堡建设的伟大推动者。正是在她的主持下，城堡进行了大规模的扩建和美化，增加了华丽的巴洛克元素，修建了精美的花园。更重要的是，她以坚定的意志保护了学院。在反宗教改革的风暴席卷欧洲时，许多新教机构被关闭，但沙罗什保陶克学院在她的庇护下屹立不倒，继续为匈牙利民族保存着知识的火种。你可以说，是玛丽女王赋予了这座城堡坚韧不拔的母性光辉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十八世纪初，拉科齐·费伦茨二世领导了著名的、反对哈布斯堡统治的独立战争。沙罗什保陶克城堡自然成了起义的重要中心和象征。战争失败后，拉科齐家族流亡，城堡被哈布斯堡皇室没收，一度遭到了破坏和忽视，学院也一度被耶稣会接管。那是一段黯淡的岁月，墙壁上的壁画慢慢褪色，花园里野草蔓生。但它的根基太深厚了。十九世纪的民族复兴浪潮中，匈牙利人重新发现了这笔遗产的价值。它被仔细地修复，学院也恢复了新教传统，再次成为培养民族精英的摇篮。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两次世界大战的硝烟奇迹般地没有严重损毁它。今天，它作为国家文化遗产，既是备受尊崇的博物馆，也是一所依然活跃的高等教育学院。当你走在它的回廊里，指尖划过冰凉的红石柱，你触摸的不仅是文艺复兴的艺术，更是匈牙利民族数百年为信仰自由、思想独立和文化传承而奋斗的、有温度的历史脉搏。每一个房间，每一本书，甚至每一块石头，都在低语着一个关于抵抗、生存与复兴的漫长故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了充分感受沙罗什保陶克的晨昏之美与宁静氛围，强烈建议安排一整天的时间，并在工作日前往以避免周末可能的学生团体。理想的节奏是早晨约9点半抵达，先在城堡外围和波多克河岸漫步，感受小镇苏醒的生机。10点整，作为第一批访客进入城堡博物馆，此时光线柔和，人流稀少，非常适合静静欣赏建筑细节和室内陈列。整个深度游览建议预留4-5小时，按照从外到内、从历史到生活的逻辑，依次探索防御工事、主体宫殿、学院灵魂（回廊与图书馆）以及后花园。中午可以在城堡咖啡馆或老城解决午餐，下午则将时间留给那些需要细细品味的空间，比如在回廊的长椅上发呆，或在花园里读一会儿书，等待黄昏时分金色的阳光为红石城堡披上最华丽的衣裳。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参加图书馆导览团是必须的，且通常有人数限制，务必在购票时立即预约好当天合适的时间段。城堡部分展厅禁止闪光灯摄影，尤其是壁画和图书馆区域，请务必遵守。参观学院区域时请保持安静，尊重仍在其中学习和工作的师生，避免打扰课堂。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡东侧古老的棱堡遗址开始，沿着部分修复的城墙走一走，想象它当年俯瞰河川与平原的防御视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过带有厚重铁门的拱形入口，径直踏入心脏般的德鲁格特庭院，站在原地转一圈，感受双层文艺复兴拱廊从四面八方带来的包围与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要攀爬那座没有一根中心柱的红色大理石“国王楼梯”，它的螺旋线条犹如一首凝固的石质奏鸣曲，通往楼上的主要大厅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二楼的骑士大厅里驻足，抬头凝视那令人惊叹的、装饰着华丽彩绘格子和家族纹章的木质天花板，那是匈牙利文艺复兴木工艺术的巅峰之作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访小巧却无比精美的城堡小教堂，留意祭坛旁那些保存完好的十六世纪壁画，光线从彩色玻璃透入时，圣徒的面容仿佛在呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员的脚步，进入学院最神圣的殿堂——图书馆，在堆积到天花板的古老书卷散发的陈旧纸张与皮革气味中，感受知识的重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时流连在学院那著名的双层回廊下，上层是学生宿舍的窗户，下层是教室的门，试着捕捉几个世纪以来在此回荡的读书声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从回廊的边门步入城堡的后花园，沿着修剪整齐的绿篱散步到河岸边，从另一个角度回望整座建筑群在水中的倒影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`德鲁格特庭院拱门框景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前或下午四点后，站在庭院通往花园的拱门下，用拱门作为天然画框，将对面双层回廊和红色楼梯塔楼一同纳入镜中，构图平衡而深邃。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`学院双层回廊仰角`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，躺在回廊一层中央的地面上（如果允许且无人），用超广角镜头垂直向上拍摄，捕捉层层叠叠的拱廊线条与天空构成的几何交响。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`国王楼梯的螺旋曲线`}</h4>
                  <p className="text-sm text-gray-700">{`需使用三脚架（如果允许），在光线稍暗的楼梯井内，进行长时间曝光，拍出红色大理石扶手平滑流畅的动感线条，展现其建筑魔力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡花园河畔全景`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏日落前约一小时，走到波多克河对岸的草地上，用长焦镜头压缩空间，拍摄城堡、树木及其在平静河水中的完整倒影，色彩温暖而饱满。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`图书馆书架纵深`}</h4>
                  <p className="text-sm text-gray-700">{`在导览允许拍摄的瞬间，站在图书馆两排高大书架之间，利用走廊的透视感，拍摄书籍向远处无限延伸的震撼画面，营造知识的迷宫感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部许多地方光线较暗，建议携带大光圈镜头或可调节高感光度的相机，尽量利用自然光，避免使用破坏氛围的闪光灯。拍摄学生或当地人时，请务必先微笑征得同意，匈牙利人通常很友善但注重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔温馨公寓`}</h4>
                  <p className="text-sm text-blue-800">{`波多克河岸边一栋老房子里由艺术家经营的小公寓，窗户正对城堡侧面，晚上能看到塔楼亮起的暖光，配有小小的阳台适合早晨喝咖啡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋18世纪联排别墅改造，仅有8个房间，每个都以一位与沙罗什保陶克相关的历史人物命名，装饰融合了复古家具与现代舒适，早餐是地道的匈牙利家庭风味。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园山丘设计师酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇附近的山丘上，由当代匈牙利建筑师设计，房间拥有极简风格和全景落地窗，能将远处城堡与连绵葡萄园尽收眼底，适合追求宁静与设计感的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史酒店体验`}</h4>
                  <p className="text-sm text-purple-800">{`直接下榻于经过现代化改造的学院附属历史建筑中（部分时段开放预订），房间保留了高挑的天花板和旧式窗户，入睡时感觉自己也成了这段漫长历史中的一个注脚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`沙罗什保陶克是一个非常安全宁静的小镇，夜间散步也很惬意。夏季和葡萄酒产区节庆期间住宿紧张，务必提前数月预订。如果选择郊区的住宿，最好确保有车，因为夜间公共交通可能非常有限。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开沙罗什保陶克的时候，我背包里没有多什么纪念品，但心里却感觉被塞得满满的。那种充实感，不是来自于看到了多么炫目的珍宝，而是源于一种深切的“连接”感。在这里，历史不是教科书上扁平的文字，而是你脚下被磨得光滑的石阶，是图书馆里某本古籍上褪色的批注，是回廊中那个可能被无数沉思学子倚靠过的石柱。它让你相信，有些地方真的能成为文明的容器，妥善收藏着一个民族最珍贵的记忆、最不屈的精神和最优雅的品味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都在加速的世界里，沙罗什保陶克像是一个坚定的“减速带”。它提醒我们，有一些价值需要时间的沉淀才能显现，比如知识的累积，比如文化的传承，比如对美的持久追求。它不是一个用来“打卡”的景点，而是一个需要你停下来，深呼吸，用眼睛看，用耳朵听，用心去对话的所在。每一位热爱深度游的旅人，都该来一次这里，不仅仅是为了看一座美丽的文艺复兴城堡，更是为了体验一种完整的生活方式——那种将防御与开放、权力与知识、家族荣耀与公共教育完美融合的、充满智慧的生活哲学。它会让你带走一份罕见的宁静，以及一种信念：无论时代如何变迁，总有一些美好的事物，能够像这座红石城堡一样，在河流的弯处，屹立不倒，闪闪发光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kalocsa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyula-water-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    久
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">久洛城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gyula Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esztergom-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃斯泰尔戈姆大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esztergom Basilica</p>
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
