import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈普萨卢城堡 Haapsalu Castle｜探访“白衣夫人”传说的海滨要塞与月光之城 - 最佳欧洲景点',
  description: '车子驶入哈普萨卢，一种与塔林截然不同的宁静气息便扑面而来。这里没有密集的游客潮，空气里是波罗的海特有的、略带咸腥又混合了松木清香的凉爽味道。当你穿过小镇中心那些色彩柔和的木屋，转过一个街角，哈普萨卢城堡就这样毫无预警地撞进视线——不是巍然耸立在高山之巅，而是安详地卧在一片开阔的湿地与海汉之间。巨大的...',
}

export default function HaapsaluCastleEstoniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '哈普萨卢城堡', href: '/attractions/haapsalu-castle-estonia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈普萨卢城堡・Haapsalu Castle・爱沙尼亚・哈普萨卢`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶入哈普萨卢，一种与塔林截然不同的宁静气息便扑面而来。这里没有密集的游客潮，空气里是波罗的海特有的、略带咸腥又混合了松木清香的凉爽味道。当你穿过小镇中心那些色彩柔和的木屋，转过一个街角，哈普萨卢城堡就这样毫无预警地撞进视线——不是巍然耸立在高山之巅，而是安详地卧在一片开阔的湿地与海汉之间。巨大的赭红色砖墙在北方清透的阳光下泛着温暖的光泽，身后是如镜面般平静的哈普萨卢湾，几只天鹅正优雅地划过水面。那一刻的感觉，不像走近一个威严的军事堡垒，倒像拜访一位退隐已久、与自然和解的老绅士。
走进开阔的城堡庭院，脚下是细软的草地，耳边是风声、鸟鸣和远处若有若无的海浪声。城堡的主体——那座恢弘的圣尼古拉大教堂的废墟与它依然耸立的塔楼——构成了最震撼的天际线。阳光透过没有屋顶的中殿，肆意倾泻在古老的石砖地上，照亮墙壁上残存的石刻纹章。你可以随意找个石阶坐下，感受砖石被日光晒出的微温，看云影在巨大的断壁残垣上缓慢移动。时间在这里仿佛被拉长了，放缓了，你能清晰地听到自己的呼吸与历史尘埃落定的声音。
然而，让这座城堡真正活起来的，是那个几乎每个爱沙尼亚人都耳熟能详的“白衣夫人”传说。它不是一段冰冷的历史记载，而是融入了当地人的生活与四季。小镇的咖啡馆里挂着相关画作，夏季的夜晚城堡会上演关于她的露天戏剧，就连通往城堡小径旁的树，似乎都在低语着那个关于爱与等待的哀伤故事。这使得哈普萨卢城堡不仅仅是一个景点，更是一个承载了集体情感和想象力的心灵地标。
最打动人心的，或许是它那种矛盾的魅力：坚固的城墙诉说着权力的博弈与战争的残酷，而环绕它的温柔海湾、缠绵的传说以及小镇慢到骨子里的生活节奏，却又给它披上了一层极致的浪漫与宁静。在这里，你能同时触摸到历史的粗粝与诗歌的柔软。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶入哈普萨卢，一种与塔林截然不同的宁静气息便扑面而来。这里没有密集的游客潮，空气里是波罗的海特有的、略带咸腥又混合了松木清香的凉爽味道。当你穿过小镇中心那些色彩柔和的木屋，转过一个街角，哈普萨卢城堡就这样毫无预警地撞进视线——不是巍然耸立在高山之巅，而是安详地卧在一片开阔的湿地与海汉之间。巨大的赭红色砖墙在北方清透的阳光下泛着温暖的光泽，身后是如镜面般平静的哈普萨卢湾，几只天鹅正优雅地划过水面。那一刻的感觉，不像走近一个威严的军事堡垒，倒像拜访一位退隐已久、与自然和解的老绅士。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进开阔的城堡庭院，脚下是细软的草地，耳边是风声、鸟鸣和远处若有若无的海浪声。城堡的主体——那座恢弘的圣尼古拉大教堂的废墟与它依然耸立的塔楼——构成了最震撼的天际线。阳光透过没有屋顶的中殿，肆意倾泻在古老的石砖地上，照亮墙壁上残存的石刻纹章。你可以随意找个石阶坐下，感受砖石被日光晒出的微温，看云影在巨大的断壁残垣上缓慢移动。时间在这里仿佛被拉长了，放缓了，你能清晰地听到自己的呼吸与历史尘埃落定的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让这座城堡真正活起来的，是那个几乎每个爱沙尼亚人都耳熟能详的“白衣夫人”传说。它不是一段冰冷的历史记载，而是融入了当地人的生活与四季。小镇的咖啡馆里挂着相关画作，夏季的夜晚城堡会上演关于她的露天戏剧，就连通往城堡小径旁的树，似乎都在低语着那个关于爱与等待的哀伤故事。这使得哈普萨卢城堡不仅仅是一个景点，更是一个承载了集体情感和想象力的心灵地标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是它那种矛盾的魅力：坚固的城墙诉说着权力的博弈与战争的残酷，而环绕它的温柔海湾、缠绵的传说以及小镇慢到骨子里的生活节奏，却又给它披上了一层极致的浪漫与宁静。在这里，你能同时触摸到历史的粗粝与诗歌的柔软。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈普萨卢城堡`} />
                <InfoRow label="英文名称" value={`Haapsalu Castle`} />
                <InfoRow label="正式名称" value={`Haapsalu Castle`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`哈普萨卢`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`爱沙尼亚保存最完好的中世纪城堡之一，曾是波罗的海地区重要的主教权力中心和防御要塞。`} />
                <InfoRow label="建筑特色" value={`一座将防御堡垒与宏伟教堂巧妙融合于一体的砖砌建筑群，矗立于宁静的海湾沼泽地之上。`} />
                <InfoRow label="建筑风格" value={`波罗的海砖砌哥特式风格，带有显著的利沃尼亚中世纪军事建筑特征。`} />
                <InfoRow label="文化价值" value={`“白衣夫人”的传说与城堡本身交织，使其成为爱沙尼亚浪漫主义文化的重要象征和灵感源泉。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院及城墙全年全天开放。城堡博物馆、大教堂及塔楼的开放时间为：5月至9月，每日上午10点至下午6点；10月至次年4月，周三至周日上午11点至下午4点。每周一闭馆（夏季除外）。具体开放时间可能因天气、特殊活动或维护而调整，出行前建议查阅官网。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院免费。参观城堡博物馆、大教堂及登塔楼需购票：成人票8欧元；学生、儿童及老人票6欧元。家庭票（2大2小）20欧元。门票可在博物馆入口处购买，支持信用卡支付。`} />
              <InfoRow label="地址" value={`Lossiplats 3, 90502 Haapsalu, Estonia`} />
              <InfoRow label="交通方式" value={`从爱沙尼亚首都塔林出发最为便捷。火车：从塔林中央火车站乘坐埃尔伦（Elron）公司的列车前往哈普萨卢，车程约1小时40分钟，班次较为频繁（每天约6-8班），抵达哈普萨卢火车站后，步行约15分钟即可到达城堡。巴士：从塔林中央汽车站乘坐长途巴士，车程约1.5-2小时，班次更多。抵达哈普萨卢巴士总站后，步行约10分钟可达。自驾：沿E265公路向西行驶约100公里，车程约1.5小时。小镇内停车方便，城堡附近有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`哈普萨卢城堡的故事始于13世纪。当时，利沃尼亚骑士团和基督教的势力正在波罗的海东岸扩张。为了巩固在这一地区的统治，并教化当地的异教徒，里加大主教决定建立一个坚固的据点。大约在1279年，城堡的建造在哈普萨卢这个天然的深水港旁启动。最初的城堡是木制的，但很快就被更为坚固的砖石结构所取代。在随后的两个世纪里，这里一直是萨雷-拉内马地区主教的驻地，一个集宗教、行政和军事权力于一身的中心。城堡的设计充分体现了其双重功能：高耸的防御城墙和塔楼用来抵御外敌，而内部规模宏大的圣尼古拉大教堂则用来彰显上帝的荣耀与主教的权威。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代大约持续到16世纪中期。宗教改革的风潮席卷欧洲，也动摇了主教权力的根基。1560年，在利沃尼亚战争期间，城堡在俄罗斯沙皇伊凡雷帝的军队威胁下，未经激烈战斗便被投降并遭到了洗劫。自此，它作为主教城堡的使命正式终结。在接下来的几个世纪里，城堡经历了多次易主和战争的摧残。特别是在北方战争期间，彼得大帝的俄国军队于1710年攻占了爱沙尼亚，城堡的防御工事被系统性地拆除，以防止被敌人再次利用。宏伟的大教堂也在战火中屋顶坍塌，逐渐沦为废墟。曾经的权力象征，慢慢被遗忘，只剩下断壁残垣在风吹雨打中沉默。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在19世纪。浪漫主义思潮兴起，人们开始重新欣赏中世纪的废墟之美。哈普萨卢以其宁静的海湾和温和的气候，成为了沙俄贵族喜爱的度假胜地。这座沉睡的城堡废墟，因其如画般的景致和神秘的氛围，吸引了艺术家、诗人和游客。正是在这个时期，“白衣夫人”的传说被不断演绎和丰富，并与城堡紧紧绑定。传说讲述了一位因爱情而打破修道院规矩、被砌入墙中的女子，她的幽灵在月圆之夜会出现在城堡教堂的窗口。这个凄美的故事恰好契合了浪漫主义的审美，让城堡从历史的废墟，一跃成为了充满魅力的文化符号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪，爱沙尼亚经历了独立、二战和苏联占领的动荡岁月。城堡在苏联时期得到了初步的修复和考古研究，并作为地方博物馆对外开放。1991年爱沙尼亚重新独立后，对城堡的保护和修复工作进入了新的阶段。考古学家们小心翼翼地清理遗址，修复了部分城墙和塔楼，加固了教堂的残壁。如今，我们看到的哈普萨卢城堡，是数个世纪层叠的结果：有中世纪的砖石，有战争破坏的痕迹，也有现代保护工程的印记。它不再是一个功能性的堡垒或教堂，而是作为一个鲜活的历史教室、一个文化活动的舞台和一个小镇宁静灵魂的守护者，继续存在于波罗的海的微风与月光之下。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了充分体验城堡从白日宁静到傍晚神秘的两种气质，建议在下午2点左右抵达。这样你有充足的时间在日光下探索建筑细节和博物馆，然后静静等待光线变化，感受夕阳为砖石披上金衣的魔幻时刻，如果恰逢夏季，还可能邂逅夜晚的音乐会或戏剧表演。整体游览建议安排2-3小时，节奏宜缓不宜急。路线设计从外向内，由静至动：先从外围感受城堡与海湾环境的融合，再深入庭院和博物馆了解其历史，最后登高望远，在黄昏时分寻找那份专属的浪漫与遐想。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡地面多为不平整的原始石板或草地，务必穿一双舒适防滑的鞋子。夏季蚊虫较多，建议准备驱蚊液。参观博物馆和登塔时请保持安静，尊重这片古老空间的历史感。如果想聆听“白衣夫人”传说的完整版，可以留意博物馆提供的定时导览或租借语音导览器。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡东侧湿地旁的小径开始，远观城堡倒映在水中的完整全景，感受它与自然环境的天成之美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石拱门进入城堡内庭，让眼睛适应从明亮到荫蔽的变化，静静聆听庭院里的风声与回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先参观城堡博物馆，通过出土的武器、圣物和日常器物，触摸中世纪主教领地生活的真实温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进没有屋顶的圣尼古拉大教堂中殿，仰头看天空在巨大石墙框出的画布上变幻，想象曾经回荡在此的圣咏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着修复好的城墙步道缓缓上行，从不同的高度和角度俯瞰哈普萨卢湾如缎子般平滑的蓝色水面与对岸的小镇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到教堂祭坛后方那扇著名的“白衣夫人之窗”，用手触摸窗台冰凉的石头，听向导或语音讲解讲述那个古老的传说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，一定要攀爬教堂西南角的皮克赫尔曼塔楼，在狭窄的旋梯后迎接你的是360度无死角的壮阔风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，坐在面朝海湾的城墙垛口上，什么都不做，只是看着夕阳将整个城堡、海湾和天空染成温暖的蜜糖色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧湿地步道中段`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏前约一小时，利用湿地水面作为前景拍摄城堡与塔楼的倒影全景，能获得色彩最丰富、光影最柔和的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`皮克赫尔曼塔楼顶层西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，以城墙的拱形垛口为画框，拍摄远处哈普萨卢湾的晚霞与小港口的点点帆影，构图极具层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣尼古拉大教堂中殿中央`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光强烈的正午，站在中轴线仰拍，让坍塌的墙壁勾勒出巨大的几何形天空，捕捉光线在粗糙砖石上雕刻出的戏剧性阴影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“白衣夫人之窗”特写`}</h4>
                  <p className="text-sm text-gray-700">{`在非直射的柔和侧光下（如上午或下午），近距离拍摄这扇著名的圆窗，聚焦于石头被岁月打磨的质感，画面充满故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡南面外墙与护城河遗迹`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光角度较低时，从外墙底部向上仰拍，能突出砖砌结构的宏伟与历史的沧桑感，墙壁上攀爬的藤蔓植物会增添生机。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部光线较暗，拍摄教堂内部或博物馆展品时，可适当提高感光度或使用大光圈镜头，但请务必关闭闪光灯以保护文物。使用无人机拍摄需提前向管理方申请许可，并且注意避开人群。月圆之夜前来，尝试用三脚架长曝光拍摄城堡夜景，或许能捕捉到传说中的神秘氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济首选`}</h4>
                  <p className="text-sm text-blue-800">{`位于哈普萨卢市中心步行街上的老房子青旅，由一栋典雅的木结构房屋改造，氛围温馨，是结识各地旅行者的好地方。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`坐落在城堡附近森林边的“修士居所”主题民宿，房间简约宁静，带有桑拿浴室，晚上可以听到森林的簌簌声，仿佛隐居的中世纪修士。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海滨浪漫`}</h4>
                  <p className="text-sm text-yellow-800">{`哈普萨卢湾畔的精品酒店，每间客房都拥有面向海湾的阳台或窗户，清晨在房间内就能看到天鹅从海雾中游出的画面。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`由19世纪贵族度假别墅修复而成的豪华Spa酒店，不仅内部装饰古典华美，还拥有全爱沙尼亚闻名的泥浴Spa，让你在历史氛围中得到彻底放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`哈普萨卢是爱沙尼亚著名的疗养度假小镇，整体治安极好，夜间独自散步也很安全。夏季（6-8月）是旺季，酒店和特色民宿非常紧俏，务必提前数月预订。如果想要深度体验小镇的宁静，非常推荐在春秋季的平日前往，你会发现自己几乎独享整个城堡的黄昏。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈普萨卢城堡许久，那个画面依然清晰：我坐在冰冷的石墙上，看着最后一抹绯红从云层褪去，深蓝色的夜幕升起，第一颗星在塔楼尖顶旁闪烁。没有喧嚣，没有急于奔往下一个景点的匆忙，只有海湾轻柔的潮声和自己平稳的心跳。这座城堡没有试图用恢弘来震慑你，而是用它的残缺、它的传说、它与大自然浑然一体的宁静，邀请你坐下来，和自己待一会儿，和历史待一会儿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都被加速的世界里，哈普萨卢城堡像是一个温柔的“减速带”。它告诉你，美不一定在于完美无缺，力量也可以蕴藏在沉默的废墟与流传的故事之中。它见证了权力的更迭与战争的硝烟，最终却被一个关于爱与等待的民间传说拯救，成为了人们心中一个充满温情的符号。这或许正是深度旅行最珍贵的收获：去一个地方，不仅仅是用眼睛看，更是用心去感受层层时间之下，那些真正坚韧的、能够跨越世纪打动普通人的东西——对家园的眷恋、对爱情的向往、对和平与宁静的渴望。哈普萨卢城堡，就是这样一个值得你专程前来，花上一个下午静静聆听，并带走一片波罗的海月光的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kuressaare-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库雷萨雷主教城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuressaare Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/parnu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派尔努老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pärnu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu Old Town</p>
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
