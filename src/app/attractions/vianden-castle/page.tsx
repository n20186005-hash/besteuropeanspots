import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '菲安登城堡 Vianden Castle｜雄踞峡谷之巅的梦幻中世纪要塞 - 最佳欧洲景点',
  description: '当缆车缓缓爬升，脚下是红瓦屋顶的童话小镇和蜿蜒如丝带的乌尔河，而前方，那座灰白色的巨石城堡就那么突然地、完整地出现在山脊线上，像一个从森林里生长出来的古老梦境。第一眼看见菲安登城堡，你很难不被它的气势震慑——它不是孤零零的一座建筑，而是一整片错综复杂的塔楼、城墙和宫殿，紧紧地攀附在陡峭的山岩上，仿佛...',
}

export default function ViandenCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '菲安登城堡', href: '/attractions/vianden-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`菲安登城堡・Vianden Castle・卢森堡・菲安登`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当缆车缓缓爬升，脚下是红瓦屋顶的童话小镇和蜿蜒如丝带的乌尔河，而前方，那座灰白色的巨石城堡就那么突然地、完整地出现在山脊线上，像一个从森林里生长出来的古老梦境。第一眼看见菲安登城堡，你很难不被它的气势震慑——它不是孤零零的一座建筑，而是一整片错综复杂的塔楼、城墙和宫殿，紧紧地攀附在陡峭的山岩上，仿佛与山体本身就是一体的。风从峡谷吹来，带着松针和远处草地清新的气味，还夹杂着一丝古老石墙上苔藓的湿润感。
走进城堡大门，中世纪的气息瞬间将你包裹。脚下是巨大石块铺就的庭院，被岁月打磨得光滑而斑驳。阳光从高处的拱形窗棂斜射进来，在厚重的石墙上切割出明暗交错的光影，空气里有种凉爽的、属于地窖和古老木材的特殊味道。最妙的是声音：游客的低语在石壁间产生轻微的回响，远处某个房间里或许正播放着低沉的、模拟中世纪宴会的音乐，而当你走到露台边缘，一切人声都淡去，只剩下风掠过塔尖的呼啸，和山谷里教堂钟声的悠远回响。这座城堡不是冰冷的博物馆，你能感受到它磅礴的生命力。
小镇的生活就在城堡的注视下缓缓流淌。山下的咖啡馆露台坐满了喝着本地啤酒、说着卢森堡语的老人，他们偶尔会抬头望一眼山上的庞然大物，眼神里是寻常的亲切，就像我们看自家后院的老树。这座城堡是他们的历史课本，也是他们日常风景的一部分。它最打动人心的地方，或许就在于这种奇妙的平衡：既有令人屏息的宏伟与历史的厚重感，又完美地融入了宁静的山谷生活与自然景观之中，毫无疏离感。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当缆车缓缓爬升，脚下是红瓦屋顶的童话小镇和蜿蜒如丝带的乌尔河，而前方，那座灰白色的巨石城堡就那么突然地、完整地出现在山脊线上，像一个从森林里生长出来的古老梦境。第一眼看见菲安登城堡，你很难不被它的气势震慑——它不是孤零零的一座建筑，而是一整片错综复杂的塔楼、城墙和宫殿，紧紧地攀附在陡峭的山岩上，仿佛与山体本身就是一体的。风从峡谷吹来，带着松针和远处草地清新的气味，还夹杂着一丝古老石墙上苔藓的湿润感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡大门，中世纪的气息瞬间将你包裹。脚下是巨大石块铺就的庭院，被岁月打磨得光滑而斑驳。阳光从高处的拱形窗棂斜射进来，在厚重的石墙上切割出明暗交错的光影，空气里有种凉爽的、属于地窖和古老木材的特殊味道。最妙的是声音：游客的低语在石壁间产生轻微的回响，远处某个房间里或许正播放着低沉的、模拟中世纪宴会的音乐，而当你走到露台边缘，一切人声都淡去，只剩下风掠过塔尖的呼啸，和山谷里教堂钟声的悠远回响。这座城堡不是冰冷的博物馆，你能感受到它磅礴的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的生活就在城堡的注视下缓缓流淌。山下的咖啡馆露台坐满了喝着本地啤酒、说着卢森堡语的老人，他们偶尔会抬头望一眼山上的庞然大物，眼神里是寻常的亲切，就像我们看自家后院的老树。这座城堡是他们的历史课本，也是他们日常风景的一部分。它最打动人心的地方，或许就在于这种奇妙的平衡：既有令人屏息的宏伟与历史的厚重感，又完美地融入了宁静的山谷生活与自然景观之中，毫无疏离感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`菲安登城堡`} />
                <InfoRow label="英文名称" value={`Vianden Castle`} />
                <InfoRow label="正式名称" value={`Vianden Castle`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`菲安登`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卢森堡大公国保存最完好、最具代表性的封建领主城堡之一，是欧洲中世纪防御与居住建筑完美结合的典范。`} />
                <InfoRow label="建筑特色" value={`依山就势而建，岩石基础与建筑融为一体，拥有雄伟的宫殿主体、高耸的防御塔楼、精致的礼拜堂和层层叠叠的城墙与露台。`} />
                <InfoRow label="建筑风格" value={`以中世纪罗马式和哥特式风格为主体，在十九世纪修复中融入了部分新哥特式和历史主义风格的元素。`} />
                <InfoRow label="文化价值" value={`见证了卢森堡从中世纪伯爵领地到现代国家的历史变迁，是卢森堡国家身份和文化遗产的重要象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，每日上午10点至下午5点，夏季（4月至9月）延长至晚上6点关闭。11月至次年2月的开放时间可能缩短为上午11点至下午4点。12月24日、25日、31日及1月1日闭馆。具体日期每年略有调整，建议行前查看官网公告。`} />
              <InfoRow label="门票价格" value={`标准成人票10欧元。学生、65岁以上长者及10人以上团体票8欧元。儿童及青少年（6-17岁）2欧元，6岁以下儿童免费。家庭套票（2成人+最多3名儿童）20欧元。门票包含所有开放区域的参观及小型博物馆的入场，无额外收费。部分特殊展览可能另行收费。`} />
              <InfoRow label="地址" value={`Montée du Château, 9408 Vianden, Luxembourg`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是卢森堡芬德尔机场（Luxembourg Findel Airport）。从机场出发，最便捷的方式是乘坐巴士和火车组合。首先，搭乘16路或29路巴士前往卢森堡中央火车站（Gare de Luxembourg），车程约25分钟，车次频繁。在中央火车站，乘坐开往特罗伊维耶日的列车（Trier line），在艾特尔布鲁克站（Ettelbruck）下车，车程约30分钟，每半小时一班。在艾特尔布鲁克火车站前广场，转乘570路巴士直达菲安登小镇的“Fousbann”站或终点站“Vianden, Centre”，车程约20分钟，每小时一班。从巴士站步行上山至城堡约15-20分钟，也可以选择乘坐收费的城堡缆车（Chairlift），直接抵达城堡附近的山脊。全程建议购买卢森堡国家交通网络的通票，非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`菲安登的故事，始于罗马人敏锐的军事眼光。早在公元四世纪，罗马人就在这里，在乌尔河峡谷最险要的岩石山嘴上，建立了一座坚固的瞭望塔和要塞，用以守卫这条重要的山谷通道。罗马军团早已化为尘埃，但他们选定的这个位置，其战略价值却被后来者一眼看中。进入中世纪，这片土地属于强大的阿登伯爵家族。大约在11世纪，第一座真正意义上的城堡在罗马堡垒的旧址上拔地而起，最初是用木材建造的简易防御工事。很快，石头取代了木头，城堡的规模随着领主权力的扩张而不断扩大。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代属于菲安登伯爵家族，他们是神圣罗马帝国内一股不可小觑的力量。从12世纪到15世纪，历代伯爵不断增建、加固和美化他们的家园。我们今天看到的宫殿主体、小礼拜堂和部分防御工事，大多是在这个时期建造的。特别是那宏伟的宫殿，内部拥有宽敞的骑士厅、伯爵的私人居所以及装饰着精美壁画的小教堂，展示了当时顶尖的建筑技艺和艺术品味。这里不仅是军事堡垒，更是一个强大政治实体的权力中心和文化沙龙，一度是摩泽尔河流域最辉煌的宫廷之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就像许多中世纪城堡的命运一样，辉煌之后是漫长的衰落。随着欧洲战争模式的改变和中央集权国家的兴起，地方贵族的权力被逐渐削弱。1417年，菲安登伯爵家族因无嗣而绝嗣，城堡的所有权几经转手，最终在1820年被当时的荷兰国王兼卢森堡大公威廉一世卖给了一个当地商人。最让人痛心的一幕发生了：商人为了牟利，竟然将城堡的内饰、家具甚至屋顶的板岩和木梁一一拆解变卖。短短几十年间，这座荣耀了数个世纪的城堡被洗劫一空，沦为一片凄凉的废墟，只剩下光秃秃的石头墙壁在风雨中飘摇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的转机，与一位伟大的作家紧密相连。维克多·雨果，这位法国文豪，曾因政治流放而旅居菲安登。他被小镇和城堡废墟的凄美深深打动，并为拯救它而奔走呼吁。他在信中写道：“无论对于卢森堡还是整个欧洲，这都是一个无价的纪念物，不应任其毁灭。”虽然雨果的呼吁在当时没有立刻见效，但却埋下了一颗种子。真正的重生是在20世纪。1962年，卢森堡大公国政府从私人手中收回了城堡废墟。随后，一项规模浩大、严谨细致的修复工程开始了。工匠们依据大量历史图纸和考古发现，用了整整一代人的时间，一砖一瓦地重建了屋顶、复原了内饰、修缮了城墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，我们漫步在华丽复原的骑士厅、礼拜堂和宴会厅里，看到的不仅是中世纪的景象，更是一整个国家对自身历史的珍视与致敬。菲安登城堡从罗马要塞到伯爵宫殿，从废弃残骸到国家象征的跌宕历程，本身就是一部活生生的欧洲史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个行程安排为半天（约4-5小时）。最佳抵达时间是上午10点城堡开门后不久，此时光线柔和，旅游团尚未大批涌入，你能享受一段相对宁静的探索时光。游览节奏宜慢不宜快，因为城堡内外处处是景，值得细细品味。整体路线遵循由外到内、由下至上、再由内返外的逻辑：先从外部感受其雄姿，再深入内部探寻历史细节，最后在露台上俯瞰全景，将内外感受融为一体。下山后，在小镇悠闲午餐，才算完整地体验了菲安登的魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部分楼梯非常狭窄陡峭且光滑，请务必穿防滑舒适的平底鞋，女士避免穿高跟鞋或长裙。夏季是旅游旺季，上午11点后和下午2-4点人流最大，尽量错峰。小镇和城堡内厕所不多，进入城堡前最好在山下游客中心提前解决。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚的售票处进入后，别急着进主楼，先沿着城堡外围的东侧城墙走一圈，感受巨石堡垒与陡峭山崖合二为一的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形门洞进入内庭院，抬头仔细看那些不同时期修建的塔楼，它们的高度、窗型和石料颜色都诉说着各自的时代。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要踏入那座小而精美的拜占庭风格宫殿礼拜堂，让眼睛适应昏暗后，去寻找柱头上那些雕刻古怪又可爱的野兽与人脸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在复原地极其生动的骑士大厅里停留片刻，想象一下中世纪盛宴时这里灯火通明、人声鼎沸的场景，壁炉大得能站进一个人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄的螺旋石梯爬上西侧的“朱莉安娜塔”顶端，这里是整个城堡的制高点，360度的峡谷风光会让你觉得每一步攀登都值得。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完主建筑内部陈列的盔甲、家具和中世纪生活展览后，务必回到主宫殿朝南的大露台，找一张石凳坐下，静静地看云影在山谷间移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择步行，沿着“蒙特城堡路”的之字形小径慢慢走，从多个不断变换的角度回望城堡，就像在看一部移动的史诗电影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后一定要逛一逛山脚下那些依着古城墙修建的幽静花园，那里有最本土的植物和最安静的角落，是告别城堡前完美的缓冲。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡对岸的山腰公路转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，阳光将城堡染成金色，利用长焦镜头可以压缩空间，拍出城堡与山下小镇屋顶层叠错落的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`宫殿大露台的西南角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以古老的石砌拱窗为画框，将对岸苍翠的山林和蜿蜒的河流纳入其中，营造出“画中画”的深邃感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内部骑士大厅的东侧窗户边`}</h4>
                  <p className="text-sm text-gray-700">{`中午时分，阳光直射入内，利用室内较暗的环境与窗外明亮的天空形成高对比，拍摄人物凝视窗外的剪影，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从下山小径的第一个回头弯`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时，从这里可以拍下城堡全景以及你刚刚走过的之字形小路，画面富有引导线和层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡内庭院的中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，站在院子中心用广角镜头向上拍摄，将所有高耸的塔楼和蓝天一同收入镜头，展现建筑的雄伟与几何美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄需特别谨慎，城堡周边可能有空域限制，且山间风向多变。城堡内部大部分区域允许拍照，但请勿使用闪光灯，以免损害古老的织物和壁画展品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`城堡山脚下由17世纪贵族宅邸改造的精品酒店，房间里有裸露的原始石墙和橡木横梁，晚上能听到不远处乌尔河的潺潺水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-green-800">{`镇中心广场旁的家庭式客栈，主人会为你手绘小镇地图并推荐只有本地人才知道的徒步小径，早餐的 homemade 果酱让人难忘。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`自然静谧之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于乌尔河上游森林边缘的独栋度假木屋，拥有面向山谷的私人露台，晚上可以看见毫无光污染的璀璨星空，清晨在鸟鸣中醒来。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端景观之选`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在城堡对面山坡上的四星级酒店，每间房都拥有直面城堡的落地窗或阳台，尤其是傍晚城堡亮灯时，景色宛如魔法。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`菲安登小镇非常安全宁静，但住宿数量有限，尤其在夏季和周末非常紧俏，务必提前数月预订。选择住在镇上可以体验傍晚旅行团离开后，小镇重归宁静的本地生活氛围。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开菲安登的时候，我总觉得自己带走的不只是相机里的照片，更像是心里被注入了一种沉静的力量。这座城堡教会我的，是关于“韧性”的最生动一课。它看过罗马军团的鹰旗，听过中世纪骑士的誓言，承受过被拆解变卖的屈辱，最终却在现代人的手中，凭借对历史的尊重与热爱重获新生。它站在这里，就像一位沉默而睿智的老者，告诉你无论经历多少风雨，真正有价值的东西总会被珍视、被修复、被传承。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新和快速的世界里，菲安登提供了一种截然不同的时间维度。它让你慢下来，去触摸冰凉的千年石头，去聆听穿过塔楼缝隙的风声，去想象不同时代的人们站在同一个露台上眺望的是怎样的风景。它不仅仅是一个旅游景点，更是一个能让你与欧洲厚重历史进行私人对话的空间。每一位热爱深度游的旅人，都应该来一次菲安登，不仅仅是来看一座漂亮的城堡，更是来体验一次时间的旅行，感受一种跨越世纪的生命力如何在山谷中巍然屹立，并温柔地照进当下。这里，是卢森堡的灵魂所在。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/haapsalu-castle-estonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈普萨卢城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haapsalu Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-meung-sur-loire" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meung-sur-L-Loire</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burg-eltz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃尔茨城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Eltz</p>
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
