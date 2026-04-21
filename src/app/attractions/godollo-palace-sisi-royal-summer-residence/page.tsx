import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格德勒宫 Gödöllő Palace｜茜茜公主最爱的巴洛克夏宫，探寻匈牙利皇室秘密花园 - 最佳欧洲景点',
  description: '穿过一片高大椴树形成的林荫道，格德勒宫那抹标志性的赭石色外墙便毫无预兆地撞进眼帘。那一刻的感觉很奇特，它不是维也纳美泉宫那种扑面而来的、不容置疑的帝国威严，而像是一位退隐田园的贵族，慵懒地躺在佩斯平原的阳光下。空气里有刚刚修剪过的青草味，混合着远处玫瑰园飘来的、甜丝丝的香气。你能听见的声音不是游客的...',
}

export default function GodolloPalaceSisiRoyalSummerResidencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '格德勒市', href: '/destinations/hungary' },
            { label: '格德勒宫', href: '/attractions/godollo-palace-sisi-royal-summer-residence' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格德勒宫・Gödöllő Palace・匈牙利・格德勒市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过一片高大椴树形成的林荫道，格德勒宫那抹标志性的赭石色外墙便毫无预兆地撞进眼帘。那一刻的感觉很奇特，它不是维也纳美泉宫那种扑面而来的、不容置疑的帝国威严，而像是一位退隐田园的贵族，慵懒地躺在佩斯平原的阳光下。空气里有刚刚修剪过的青草味，混合着远处玫瑰园飘来的、甜丝丝的香气。你能听见的声音不是游客的喧哗，而是喷泉潺潺的水声，和本地人推着婴儿车、牵着狗在巨大花园里散步的低声交谈。这里更像是格德勒市民巨大的、华丽的公共客厅，而不仅仅是一个被供起来的博物馆。
走进宫殿大门，瞬间就从匈牙利的阳光里，踏入了哈布斯堡王朝的旧梦。光线陡然变得幽深，高高的天花板垂下水晶吊灯，抛光得像镜子一样的大理石地面，倒映着墙上的鎏金纹饰。但奇怪的是，你不会先想到弗兰茨·约瑟夫皇帝，你的目光会不由自主地去寻找“她”的痕迹。空气中仿佛还残留着一丝马鞭草香水的清冷气息，那是属于伊丽莎白皇后，我们更熟悉的那个名字——茜茜的。这里的灵魂属于她。比起维也纳宫廷的繁文缛节，这些房间似乎更松弛，更私人，墙上挂满了她骑马英姿的画像，书架上摆着她深爱的海涅和莎士比亚。
最打动人的，是那种强烈的“缺席的在场感”。在她那间以淡紫色和白色装饰的私人起居室里，阳光透过蕾丝窗帘，在地板上画出温柔的光斑。你几乎能想象她蜷在窗边的沙发上，用她优美的字体写着日记，或者凝视着窗外无垠的草地，思念着遥远的匈牙利草原和那些无拘无束的驰骋时光。格德勒宫的魅力核心，就在于它完美封装了一个传奇女性最矛盾的两面：作为帝国皇后无可比拟的尊荣，与作为一个渴望自由的灵魂深处无法排遣的孤独。在这里，你能触摸到那段金光闪闪的历史背后，温热而脆弱的人性脉搏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过一片高大椴树形成的林荫道，格德勒宫那抹标志性的赭石色外墙便毫无预兆地撞进眼帘。那一刻的感觉很奇特，它不是维也纳美泉宫那种扑面而来的、不容置疑的帝国威严，而像是一位退隐田园的贵族，慵懒地躺在佩斯平原的阳光下。空气里有刚刚修剪过的青草味，混合着远处玫瑰园飘来的、甜丝丝的香气。你能听见的声音不是游客的喧哗，而是喷泉潺潺的水声，和本地人推着婴儿车、牵着狗在巨大花园里散步的低声交谈。这里更像是格德勒市民巨大的、华丽的公共客厅，而不仅仅是一个被供起来的博物馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进宫殿大门，瞬间就从匈牙利的阳光里，踏入了哈布斯堡王朝的旧梦。光线陡然变得幽深，高高的天花板垂下水晶吊灯，抛光得像镜子一样的大理石地面，倒映着墙上的鎏金纹饰。但奇怪的是，你不会先想到弗兰茨·约瑟夫皇帝，你的目光会不由自主地去寻找“她”的痕迹。空气中仿佛还残留着一丝马鞭草香水的清冷气息，那是属于伊丽莎白皇后，我们更熟悉的那个名字——茜茜的。这里的灵魂属于她。比起维也纳宫廷的繁文缛节，这些房间似乎更松弛，更私人，墙上挂满了她骑马英姿的画像，书架上摆着她深爱的海涅和莎士比亚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种强烈的“缺席的在场感”。在她那间以淡紫色和白色装饰的私人起居室里，阳光透过蕾丝窗帘，在地板上画出温柔的光斑。你几乎能想象她蜷在窗边的沙发上，用她优美的字体写着日记，或者凝视着窗外无垠的草地，思念着遥远的匈牙利草原和那些无拘无束的驰骋时光。格德勒宫的魅力核心，就在于它完美封装了一个传奇女性最矛盾的两面：作为帝国皇后无可比拟的尊荣，与作为一个渴望自由的灵魂深处无法排遣的孤独。在这里，你能触摸到那段金光闪闪的历史背后，温热而脆弱的人性脉搏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格德勒宫`} />
                <InfoRow label="英文名称" value={`Gödöllő Palace`} />
                <InfoRow label="正式名称" value={`Gödöllő Palace`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`格德勒市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利境内规模最宏大的巴洛克式宫殿建筑群，见证了奥匈帝国黄金时代，更是伊丽莎白皇后（茜茜公主）的心灵避难所与挚爱居所。`} />
                <InfoRow label="建筑特色" value={`U型主体建筑配以两翼延伸，中央气派的主楼与规整对称的法式花园完美融合，内部拥有奢华的皇家剧院和曾驰名欧洲的皇家马厩。`} />
                <InfoRow label="建筑风格" value={`以巴洛克风格为基调，后期融合了古典主义与浪漫主义元素。`} />
                <InfoRow label="文化价值" value={`不仅是建筑瑰宝，更是理解19世纪匈牙利民族觉醒、奥匈帝国皇室生活以及传奇皇后茜茜个人精神世界的一把关键钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿主体及常设展览开放时间：4月1日至10月31日，周二至周日 10:00-18:00；11月1日至3月31日，周二至周日 10:00-17:00。每周一闭馆（公共节假日除外）。皇家马厩、剧院及临时特展开放时间可能略有不同，建议行前官网确认。每年1月1日、12月24-26日闭馆。夏季花园喷泉通常在下午特定时段开启，景象尤为壮观。`} />
              <InfoRow label="门票价格" value={`成人票：3200匈牙利福林（约8.5欧元）。学生、62岁以上老年人票：1600福林。家庭套票（2成人+最多3名儿童）有优惠。购买包含宫殿、皇家马厩、巴洛克剧院和临时展览的“全景点通票”更为划算。6岁以下儿童、持匈牙利博物馆通行证者免费。门票可在官网提前预订以避免排队。`} />
              <InfoRow label="地址" value={`Gödöllő, Grassalkovich-kastély 5852, Hungary, 2100`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最为便捷。在布达佩斯东站（Budapest-Keleti）乘坐H8线郊区火车（HÉV），开往Gödöllő方向，终点站即达。车程约40-50分钟，班次频繁（约每15-20分钟一班），可在车站自动售票机购票，记得上车前在站台打票机验证。从格德勒火车站步行至宫殿入口约10-15分钟，沿途有清晰指示牌。若自驾，从布达佩斯经M3高速公路至Gödöllő出口，约30分钟车程，宫殿周边有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，与茜茜公主并无关系，而属于一位雄心勃勃的匈牙利贵族——安塔尔·格拉斯科维奇一世。18世纪中叶，这位深受玛丽亚·特蕾莎女王赏识的宫廷顾问，决定在自己的领地上建造一座配得上其地位的宅邸。他请来了当时顶尖的建筑师，最初的蓝图是一座宏伟的巴洛克式庄园，不仅用于居住，更是向女王展示忠诚与财富的象征。工程浩大，持续数十年，最终形成了我们今天看到的U形主体和精美的法式花园。在相当长一段时间里，格拉斯科维奇家族举办的奢华宴会和艺术沙龙，都是匈牙利上流社会的风向标，这座宫殿也因此积累了最初的艺术藏品与文化声望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到19世纪中后期，奥匈帝国达成妥协，匈牙利获得高度自治权。为了巩固联盟，匈牙利政府需要向皇帝夫妇献上一份既能体现民族敬意，又能让他们真心喜爱的厚礼。于是，1867年，在弗兰茨·约瑟夫皇帝与伊丽莎白皇后加冕为匈牙利国王与王后的同一年，格拉斯科维奇家族的后人将这座宫殿“捐赠”给了国家，并旋即被赠予皇室作为夏宫。这个决定，彻底改变了宫殿的命运，也为其注入了最浪漫传奇的色彩。弗兰茨·约瑟夫皇帝更多时间留在维也纳处理政务，而茜茜，这位在维也纳宫廷感到窒息的皇后，却在匈牙利找到了灵魂的共鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对茜茜而言，格德勒宫不是宫殿，而是天堂。她深爱匈牙利的风土人情，能说流利的匈牙利语，视这里为逃离维也纳严苛礼仪和婆母索菲公主控制的避难所。她在此度过了许多春夏秋日，宫殿根据她的喜好进行了大量改造。她扩建了马厩，因为她是那个时代最杰出的女骑手之一，常常黎明即起，骑着她心爱的马匹在广袤的庄园森林里尽情奔驰，一骑就是好几个小时，直到精疲力尽。她让人修建了健身房，安装了吊环和杠铃，痴迷于保持体形。她还拥有一个私人小剧院，在那里欣赏她钟爱的莎士比亚戏剧。格德勒宫的一砖一瓦，一草一木，都记录着她最舒展、最真实的生命状态。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，美好的时代随着1918年奥匈帝国的解体而终结。皇室离去，宫殿在动荡的20世纪命运多舛。它先后被用作过养老院、军营，二战期间更被德军和苏军先后占领，遭到了严重的破坏和洗劫，内部华丽的装饰、珍贵的家具和艺术品大量流失。战后，它一度沦为苏联驻军的营房和仓库，建筑本身在忽视中进一步破败。那个曾经充满笑声、马蹄声和诗歌朗诵声的美丽宫殿，仿佛成了一个被遗忘的幽灵，在铁幕下沉默地衰颓。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在1989年之后。随着匈牙利社会变革，格德勒宫的重生被提上日程。这是一项极其艰巨的工程，因为几乎要从废墟开始。修复者们依靠老照片、档案资料和幸存的碎片，像拼图一样，一点点复原壁画、木雕、丝织壁布和家具。这是一个民族找回自身历史与荣耀的象征性举动。直到1996年，主要部分才重新向公众开放。今天，当我们漫步其间，那些崭新却遵循古法制作的金色纹饰，既是修复的成果，也像是历史伤痕上长出的新肌，讲述着关于毁灭与重生、遗忘与铭记的永恒故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间（约6-8小时）进行深度游览。最好在早上9点半左右抵达格德勒市，先在镇中心喝杯咖啡，感受一下当地生活气息，然后在10点宫殿开门时第一批进入。这样的安排可以让你在相对清净的环境中细细品味宫殿内部，避开上午晚些时候可能到来的旅行团。游览节奏宜慢不宜快，遵循“先外后内，先广后精”的原则：上午先探索广阔的花园和外围建筑，将精神最饱满的时刻留给宫殿内部复杂的房间与展览；下午则可以用更放松的心态，在花园里找张长椅发呆，或探访周边的特色小店。别忘了留出时间给皇家马厩和巴洛克剧院，它们是完整体验不可或缺的部分。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`宫殿内部不少房间为保护脆弱的内饰，光照较暗且不允许使用闪光灯，确保相机高感光度表现良好或直接享受用眼睛记录。花园面积巨大且树荫有限，夏季务必携带防晒用品和足量饮用水。避开周一前来，因为几乎所有室内场馆都闭馆，只能游览免费开放的花园区域。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从气派的荣誉庭院开始，仰头欣赏主立面精美的巴洛克山花雕塑和飘扬的匈牙利国旗，感受宫殿迎接你的第一个正式姿态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`向左翼漫步，先去探访修复一新的皇家马厩，想象一下当年骏马成列、茜茜公主准备出巡时这里的忙碌与生气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接走廊进入宫殿主体，首先踏入奢华的红厅，让眼睛适应那满墙的猩红色丝绸壁布和天花板上描绘神话场景的恢宏壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在弗兰茨·约瑟夫皇帝的接待室里驻足，看看那张巨大的办公桌和相对简朴的装饰，对比体会这位“公务员皇帝”严谨克制的性格。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻走进茜茜公主的私人套房，在淡紫色调的起居室和摆满健身器械的房间里，静静感受这位皇后对自我空间的极致打造和对身体自由的强烈追求。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定不要错过二楼的皇家巴洛克剧院，坐在樱桃木包厢里，看看那至今仍可使用的机械舞台装置，仿佛能听到几个世纪前的悠扬奏鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿侧门步入巨大的法式花园，沿着中央轴线散步，一直走到远处的英式风景园，在树荫下的长椅上享用自己带来的简单午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后绕到宫殿建筑背面，在当年皇室专用的露台咖啡馆点一杯咖啡或本地葡萄酒，对着无边的绿意发一会儿呆，为旅程画上慵懒的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`荣誉庭院拱门下方向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至五点的斜阳会将庭院石廊拉出长长的影子，用拱门做天然画框，捕捉行人走过的瞬间，构图极具纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`法式花园中心喷泉池边角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，低角度拍摄喷泉与宫殿主楼倒影在水池中的对称画面，能完美融合巴洛克建筑与园林之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`皇家马厩的拱形长廊`}</h4>
                  <p className="text-sm text-gray-700">{`利用两侧整齐的白色马厩门和绵延的砖石拱廊创造强烈的透视引导线，人物站在长廊尽头会显得格外有意境。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`茜茜公主起居室窗外视角`}</h4>
                  <p className="text-sm text-gray-700">{`将相机紧贴窗玻璃（避免反光），聚焦窗外花园的绿意，让室内华丽的窗帘和窗框成为前景虚化的柔美色块，拍出“皇后眼中的风景”。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`宫殿北侧通往英式园林的小径`}</h4>
                  <p className="text-sm text-gray-700">{`秋天时，金黄的银杏叶落满碎石路，从路中间向后拍摄宫殿侧翼的局部，色彩对比和氛围感极为出色。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄务必关闭闪光灯和拍摄提示音，尊重历史文物及其他游客的安静体验。使用三脚架在室内通常需要提前申请许可。花园中无人机飞行有严格限制，需事先查询当前法规并远离人群。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`怀旧风情`}</h4>
                  <p className="text-sm text-blue-800">{`入住格德勒镇中心由老房子改造的家庭式公寓，房东奶奶会给你推荐只有本地人才知道的烘焙店，晚上听着远处教堂钟声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择位于宫殿附近森林边上的小型精品酒店，房间带有面向树林的阳台，清晨可能邂逅小鹿，彻底融入皇家度假地的静谧氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约20分钟前往佩斯山麓的葡萄酒庄园酒店，在历史酒窖改建的餐厅品尝获奖葡萄酒，在露台上远眺平原落日，享受贵族般的田园假日。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`布达佩斯地铁H8线沿线的现代公寓或设计酒店，兼顾前往宫殿的交通便利与返回首都后丰富的夜生活选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若选择住在格德勒镇，夜晚非常宁静，餐厅选择相对有限但更具本地特色，建议提前了解晚餐选择。旺季（春夏秋）宫殿周边的特色住宿非常紧俏，务必提前数月预订。无论住在哪里，体验一次从布达佩斯乘坐复古的HÉV火车前往宫殿的旅程，本身就是充满怀旧感的美好开始。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格德勒宫的时候，我脑子里反复回响的不是某个具体的历史事件，而是一种强烈的感觉。在这个被效率、速度和数字化裹挟的时代，格德勒宫像是一个关于“缓慢”和“深度”的寓言。它提醒我们，真正的奢华不是物质的堆砌，而是拥有选择自己生活节奏的自由，是拥有一片可以让自己心灵得以喘息的空间。茜茜公主用她悲剧性的一生告诉我们，即便是拥有世间至高权势与美貌的人，也在终生追寻这份自由。而我们普通人，站在这座她曾深爱的宫殿里，或许更能体会平凡生活中那份“可以自在呼吸”的珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这不仅仅是一座宫殿。它是一个情感的容器，装着一位传奇女性的喜怒哀乐；它是一个历史的切片，展示了一个帝国由盛转衰的复杂脉络；它更是一面镜子，让我们反观自身对自由与宁静的渴望。每一位热爱深度游的旅人，都该来这里走一走。你不是来看冰冷的石头和金子的，你是来感受一种穿越时空的共鸣——在那些安静的房间里，在那些她曾策马奔腾的林间小道上，你会听到自己内心同样渴望摆脱束缚、拥抱真实生命的声音。格德勒宫不会给你喧嚣的震撼，它只会给你一个悠长的午后，和一份关于如何生活的、宁静的启迪。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sopron-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    肖
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">肖普朗老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sopron Old Town</p>
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
              <a href="/attractions/tokaj-wine-region-historic-cultural-landscape" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托卡伊葡萄酒产区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tokaj Wine Region</p>
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
