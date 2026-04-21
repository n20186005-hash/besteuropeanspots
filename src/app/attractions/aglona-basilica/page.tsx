import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿格洛纳大教堂 Aglona Basilica｜波罗的海跳动的心脏，双塔巴洛克的朝圣史诗 - 最佳欧洲景点',
  description: '车子驶入阿格洛纳，你首先看到的不会是小镇的房屋，而是地平线上那两座洁白的尖塔，像一双指向天空的祈祷之手，在无边无际的绿色平原和深蓝色湖泊的怀抱中，显得无比宁静又无比有力。空气中弥漫着松树和湿土的清冽气味，偶尔传来几声悠远的钟鸣，声音浑厚，震得路边的野草仿佛都在微微颤动。这里没有大城市的喧嚣，只有朝圣...',
}

export default function AglonaBasilicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '拉脱维亚', href: '/destinations/latvia' },
            { label: '阿格洛纳大教堂', href: '/attractions/aglona-basilica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿格洛纳大教堂・Aglona Basilica・拉脱维亚・普雷利市镇（阿格洛纳小镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶入阿格洛纳，你首先看到的不会是小镇的房屋，而是地平线上那两座洁白的尖塔，像一双指向天空的祈祷之手，在无边无际的绿色平原和深蓝色湖泊的怀抱中，显得无比宁静又无比有力。空气中弥漫着松树和湿土的清冽气味，偶尔传来几声悠远的钟鸣，声音浑厚，震得路边的野草仿佛都在微微颤动。这里没有大城市的喧嚣，只有朝圣者低低的交谈声和脚步声，混合着风穿过古老橡树林的沙沙响。你会发现，这座教堂不是小镇的一个景点，它就是小镇的全部——道路为它而修，房屋为它而建，人们的生活节奏随着它的钟声而起伏。
推开那扇厚重的木门，瞬间就被一种温暖的、带着蜡油和旧木头气息的宁静所包裹。与外部素净的白色形成对比，内部是令人惊叹的金色海洋。巴洛克式的繁复装饰从祭坛上方倾泻而下，金色的漩涡、天使、葡萄藤蔓在从高窗射入的光束中闪闪发光，仿佛有了生命。你的目光会不由自主地被正中央那幅珍贵的圣母像吸引——我们的圣母阿格洛纳。她面前，成千上万支细小的蜡烛在金属烛台上跳跃着橘红色的火焰，像一片繁星落入人间。空气里，新点燃的蜡烛芯的轻微噼啪声、信徒呢喃的祷告声、衣物摩擦的窸窣声，交织成一种具有实质感的、安详的背景音。这里没有匆忙的游客，只有缓慢移动的、面容平和的访客，他们或静坐，或轻抚着墙壁默默行走，你会真切地感受到，这不是一个被观赏的博物馆，而是一个仍在强劲搏动的精神器官。
走出教堂，绕到建筑后方，眼前豁然开朗。一片名为“圣湖”的宽阔水域静静地躺在那里，湖水倒映着白色的塔楼和流动的云朵，美得不真实。当地人告诉我，湖水被认为具有治愈之力。你会看到一家老少沿着湖边的小径散步，父母低声给孩子讲着故事；也有人独自坐在长椅上，只是静静地看着水面，一坐就是半天。旁边的草地上，也许正举行着小型的家庭聚会，空气里飘来野餐食物的简单香味。在这里，神圣与日常没有丝毫隔阂，信仰自然地流淌在生活的每一个缝隙里。它的核心魅力，不在于建筑的宏伟（虽然它确实宏伟），而在于你能触摸到一种历经沧桑却依然鲜活、深沉且极具包容力的精神力量，它抚慰了无数心灵，也凝聚了一个民族。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶入阿格洛纳，你首先看到的不会是小镇的房屋，而是地平线上那两座洁白的尖塔，像一双指向天空的祈祷之手，在无边无际的绿色平原和深蓝色湖泊的怀抱中，显得无比宁静又无比有力。空气中弥漫着松树和湿土的清冽气味，偶尔传来几声悠远的钟鸣，声音浑厚，震得路边的野草仿佛都在微微颤动。这里没有大城市的喧嚣，只有朝圣者低低的交谈声和脚步声，混合着风穿过古老橡树林的沙沙响。你会发现，这座教堂不是小镇的一个景点，它就是小镇的全部——道路为它而修，房屋为它而建，人们的生活节奏随着它的钟声而起伏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇厚重的木门，瞬间就被一种温暖的、带着蜡油和旧木头气息的宁静所包裹。与外部素净的白色形成对比，内部是令人惊叹的金色海洋。巴洛克式的繁复装饰从祭坛上方倾泻而下，金色的漩涡、天使、葡萄藤蔓在从高窗射入的光束中闪闪发光，仿佛有了生命。你的目光会不由自主地被正中央那幅珍贵的圣母像吸引——我们的圣母阿格洛纳。她面前，成千上万支细小的蜡烛在金属烛台上跳跃着橘红色的火焰，像一片繁星落入人间。空气里，新点燃的蜡烛芯的轻微噼啪声、信徒呢喃的祷告声、衣物摩擦的窸窣声，交织成一种具有实质感的、安详的背景音。这里没有匆忙的游客，只有缓慢移动的、面容平和的访客，他们或静坐，或轻抚着墙壁默默行走，你会真切地感受到，这不是一个被观赏的博物馆，而是一个仍在强劲搏动的精神器官。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走出教堂，绕到建筑后方，眼前豁然开朗。一片名为“圣湖”的宽阔水域静静地躺在那里，湖水倒映着白色的塔楼和流动的云朵，美得不真实。当地人告诉我，湖水被认为具有治愈之力。你会看到一家老少沿着湖边的小径散步，父母低声给孩子讲着故事；也有人独自坐在长椅上，只是静静地看着水面，一坐就是半天。旁边的草地上，也许正举行着小型的家庭聚会，空气里飘来野餐食物的简单香味。在这里，神圣与日常没有丝毫隔阂，信仰自然地流淌在生活的每一个缝隙里。它的核心魅力，不在于建筑的宏伟（虽然它确实宏伟），而在于你能触摸到一种历经沧桑却依然鲜活、深沉且极具包容力的精神力量，它抚慰了无数心灵，也凝聚了一个民族。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿格洛纳大教堂`} />
                <InfoRow label="英文名称" value={`Aglona Basilica`} />
                <InfoRow label="正式名称" value={`Aglona Basilica`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`普雷利市镇（阿格洛纳小镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波罗的海地区最重要的罗马天主教朝圣地，被誉为“拉脱维亚的精神心脏”。`} />
                <InfoRow label="建筑特色" value={`两座高耸的白色钟塔守卫着中央穹顶，构成庄重而优雅的巴洛克式天际线。`} />
                <InfoRow label="建筑风格" value={`晚期巴洛克风格，并融合了波罗的地方传统建筑元素。`} />
                <InfoRow label="文化价值" value={`数百年来，它不仅是信仰的灯塔，更是拉脱维亚民族在异族统治与动荡历史中保持身份认同和文化凝聚力的象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大教堂建筑群全年每日开放，一般为上午7:00至晚上7:00。内部大殿在非弥撒时间可供游客安静参观。每年8月15日圣母升天节期间为朝圣高峰，会有特殊庆典日程，全天开放但人流极为密集，建议提前查询具体活动安排。冬季（11月至次年3月）部分附属设施或博物馆开放时间可能缩短。`} />
              <InfoRow label="门票价格" value={`进入大教堂和朝圣区域免费，遵循捐赠传统，游客可在入口处自愿捐款以支持维护。教堂内设有捐款箱。参观旁边的阿格洛纳宗教历史博物馆需要单独购票，成人约3欧元，学生及长者有优惠。`} />
              <InfoRow label="地址" value={`Aglona Basilica, Baznīcas iela 1, Aglona, Preiļu novads, LV-5304, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加的国际机场（RIX）出发，最推荐的方式是租车自驾。沿A6公路向东行驶约230公里，车程约3小时，路况良好，沿途是典型的波罗的海乡村风光。若乘坐公共交通，可从里加中央巴士站乘坐前往雷泽克内或陶格夫匹尔斯方向的长途大巴，在“Aglona”站下车，车程约3.5-4小时，每天班次有限（约2-3班），务必提前在线上或车站确认时刻表。下车后步行约10分钟即可抵达教堂广场。对于朝圣者，许多本地旅行社会在重要宗教节日提供从里加出发的专线巴士。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿格洛纳的故事，始于一片荒原与一个坚定的选择。传说早在13世纪，这里就有立陶宛的异教神庙。而今天这座教堂的缘起，要追溯到18世纪初。当时，这片土地属于波兰-立陶宛联邦的利沃尼亚省。一群多米尼加修会的修士们，为了向这个偏远的、信仰混杂的地区传播天主教，决定在此建立一个传教据点。他们看中了这里宁静的湖畔环境，仿佛是天设的静修之地。1700年，第一座木制教堂建成，他们从远方请来了一幅深受尊敬的圣母像副本，这便是后来“阿格洛纳圣母”崇拜的开端。最初的岁月充满艰辛，但修士们的坚持和当地逐渐聚集的信徒社区，让星星之火得以存续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在18世纪60年代到80年代。随着信徒越来越多，木教堂已不堪重负。于是，一个雄心勃勃的计划启动了——建造一座配得上其日益增长的精神地位的石头圣殿。资金来自四面八方的捐赠，从当地的贵族到普通的农民家庭。建筑风格采用了当时欧洲大陆流行的巴洛克式，但工匠们想必也融入了本地的审美与工艺。那两座标志性的高塔，不仅是为了美观，更是在平坦的波罗的海地貌上树立一个从远方就能看见的信仰灯塔。1768年至1780年，今天我们所见的宏伟教堂主体拔地而起。你能想象，在那个交通不便、工具简陋的时代，将一块块巨石运来并垒砌成如此精美的建筑，需要何等虔诚的集体意志。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静的岁月并未持续太久。18世纪末，拉脱维亚的土地在沙俄帝国、普鲁士等强权之间易手，最终阿格洛纳所在地区被纳入沙俄版图。沙俄推行东正教，对天主教多有压制。教堂的生存面临威胁，但正是这种外部压力，反而让阿格洛纳在本地天主教徒心中的地位更加牢固，成为他们抵抗宗教同化、守护文化身份的秘密堡垒。弥撒在暗中继续，朝圣的传统在乡间小路上秘密传承。教堂就像一颗深埋地下的种子，在严寒中默默积蓄力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪的风暴更为猛烈。两次世界大战的硝烟掠过这里，幸运的是，建筑本身在战火中奇迹般地保存下来。但随后的苏联时代，才是对信仰最严峻的考验。无神论的官方意识形态试图根除一切宗教活动。教堂被关闭，部分建筑被挪作他用，神职人员受到迫害。公开的朝圣被禁止。然而，信仰并未死去。每年的8月15日，人们依然会以“夏季远足”、“朋友聚会”等各种名目，从拉脱维亚各地，甚至从立陶宛、爱沙尼亚悄悄汇集到阿格洛纳。他们围绕圣湖行走，在教堂紧闭的大门外静默站立。那时，朝圣成了一种沉默的抵抗，一种民族精神不灭的暗语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1990年拉脱维亚恢复独立，阿格洛纳大教堂才终于重获新生。1993年，教皇约翰·保罗二世亲自到访，将其升格为宗座圣殿，这一刻，不仅是对其宗教地位的肯定，更是对拉脱维亚人民坚守信仰的至高致敬。如今，每年八月，超过十万的朝圣者会光明正大地来到这里，烛光、歌声、祈祷汇成海洋。从一座木制小教堂，到沙俄铁幕下的精神碉堡，再到苏联时期的沉默丰碑，最终成为自由国度里最灿烂的信仰与文化的庆典舞台——阿格洛纳大教堂的每一块石头，都浸透了波罗的海历史的悲欢与韧性。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午早些时候（比如2点左右）抵达阿格洛纳。这个时间避开了可能上午举行的大型弥撒人群，光线也从侧光转向更适合拍摄建筑的柔和角度。整体游览节奏应是缓慢而沉浸的，预计需要4到5小时。先由外而内感受其气场，再深入细节，最后在宁静的黄昏中体会其精神内核。这样的安排让你有时间从初见的震撼，过渡到平静的观察，最后是内心的共鸣，完成一次完整的朝圣体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参加任何宗教仪式时，请保持绝对安静并遵守礼仪，即使不信教，也应尊重信徒的情感。穿着需得体，避免过于暴露的衣物，夏季也建议带一件披肩或外套。教堂内部拍照请务必关闭闪光灯，并尽量避免在人们明显祈祷时对着他们拍摄。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在入口附近的停车场，先别急着走近，站在草地边缘远眺几分钟，让那白色双塔与蓝天湖泊构成的完整画面印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着笔直的林荫主道慢慢走向教堂正面，感受脚下的砂石路和两旁百年古树的荫蔽，抬头看塔尖在树影间时隐时现。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开主门进入大殿，先在门内阴影处站立片刻，让眼睛适应内部昏暗的光线，同时感受那骤然降临的肃穆与蜡烛的暖意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺时针沿着侧廊缓步行走，用指尖轻触那冰凉而光滑的石柱，仔细观看两侧每一个小祭坛和信徒们敬献的还愿物，阅读那些简短却充满故事的字条。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到主祭坛前，在长椅上安静坐下，不一定要祈祷，只是观察光影在金饰上的移动，聆听空间里各种细微的声音，也许会有唱诗班的排练声从某个小礼拜堂隐约传来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧门走出，绕到教堂后方，沿着“圣湖”畔的土路走上一圈，从不同角度回望教堂在水中的倒影，找一张面对湖水的长椅坐下发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完教堂主体后，可以去旁边的阿格洛纳宗教历史博物馆，通过古老的圣物、照片和文献，了解这段跨越几个世纪的信仰之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，回到教堂前的广场，坐在石阶上，看夕阳为白色墙壁染上金红色，等待傍晚的钟声敲响，完成这一天的仪式。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂南侧草坪远景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三至五点，阳光西斜，站在教堂前广场南边的开阔草坪上，用广角镜头将两座白塔、主体建筑以及前景的绿草一同纳入，构图时让塔楼占据画面上方三分之二，天空留出流动云彩的空间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主入口仰拍双塔`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚低角度光线时，躺在正门前的石板地上（请确保不妨碍他人），用超广角镜头垂直向上拍摄，让两座塔楼向画面中心汇聚，形成极具视觉冲击力的对称构图，捕捉石头雕刻的细节与天空的纯净。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大殿内主祭坛烛光`}</h4>
                  <p className="text-sm text-gray-700">{`日落后或阴天室内光线均匀时，站在中殿后方，使用三脚架长曝光，将祭坛金色的华丽装饰与前景中数百支闪烁的蜡烛一同拍下，温暖的烛火与冷调的石壁会形成迷人对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣湖西岸倒影`}</h4>
                  <p className="text-sm text-gray-700">{`无风的清晨或黄昏，走到湖对岸的西侧，等待天空出现彩霞时拍摄，将教堂完整的倒影与实体一并摄入镜中，水平线置于画面中央，营造静谧而梦幻的对称之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂屋顶铜绿穹顶特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用长焦镜头，从湖对岸或较远的坡地上，捕捉教堂中央穹顶的铜绿锈色与精致的花饰浮雕，以蓝天为背景，突出其历经风霜的质感与工艺之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内摄影务必使用三脚架和高ISO能力好的相机，因为光线昏暗且禁用闪光灯。拍摄信徒或当地人的正面特写前，请务必用眼神或手势征得对方同意，拉脱维亚人通常礼貌但含蓄。雨季后的清晨，教堂石板地面积水能拍出漂亮的倒影，别错过这个意外之喜。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`朝圣者之家简朴客房`}</h4>
                  <p className="text-sm text-blue-800">{`就位于教堂建筑群内，由修会管理，房间洁净朴素，最棒的是你可以在清晨第一缕阳光洒进教堂前就独自站在广场上，夜晚枕着绝对的寂静入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖畔家庭旅馆“赛利亚”`}</h4>
                  <p className="text-sm text-green-800">{`步行到教堂只需5分钟，由本地家庭经营，房间充满手织品和木制家具的温暖，女主人会为你准备丰盛的拉脱维亚农家早餐，包括新鲜的酸奶和黑麦面包。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`普雷利镇上的特色庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你希望住宿条件更舒适一些，可以驱车20分钟前往附近的普雷利镇，那里有由19世纪贵族庄园改造的精品酒店，房间宽敞，带有花园，能体验波罗的海乡村贵族的遗风。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`拉脱维亚乡村传统木屋`}</h4>
                  <p className="text-sm text-purple-800">{`在阿格洛纳周边几公里范围内的村庄里，可以找到真正古老的木结构农舍改造的民宿，住在里面仿佛回到几个世纪前，晚上可以生起壁炉，听房东讲述本地的古老传说。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`每年8月朝圣高峰期间，阿格洛娜本地住宿会提前数月爆满，务必尽早预订。如果订不到，可以考虑以陶格夫匹尔斯或雷泽克内这两个较大的城市作为住宿基地，开车过来约一小时。小镇治安极好，但夜间几乎没有商业活动，享受这份宁静的同时请自备必要的零食和饮用水。周日早上，教堂钟声会格外响亮，这对于朝圣者是福音，但对于想睡懒觉的游客则是个甜蜜的提醒。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿格洛纳很久之后，那两座白塔的剪影和烛火的光芒，还会不时在脑海里浮现。它给我的触动，远不止于建筑之美或宗教之神圣。在这个追求效率、崇尚即时满足的时代，阿格洛纳像一个固执的逆行者。它提醒我们，有些东西需要缓慢地行走才能靠近，需要静默地等待才能感知。它见证了一个民族如何在最黯淡的岁月里，靠着一束不灭的微光，彼此辨认，相互温暖，最终走出漫漫长夜。这种力量，超越了具体的信仰，关乎人类心灵深处对希望、团结和尊严的本能坚守。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，即便你不是信徒，也值得来阿格洛纳一趟。来这里，不是为了收集又一个景点图章，而是给自己一个机会，在波罗的海的微风与湖光中，让过快的生活节奏暂时失灵。你会看到，信仰可以如此朴实又如此坚韧，历史可以如此沉重又如此鲜活。当你坐在圣湖边，看着普通的一家老小与宏伟的圣殿共享同一个宁静的午后，你会明白，真正的“深度”不在于看到了多古老的石头，而在于你触摸到了一个地方跳动了几个世纪的生命脉搏。阿格洛纳大教堂，是拉脱维亚的灵魂故事书，等待每一位愿意静心阅读的旅人。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sigulda-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rundale-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦达莱宫（波罗的海的凡尔赛宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rundāle Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigulda-medieval-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle Ruins</p>
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
