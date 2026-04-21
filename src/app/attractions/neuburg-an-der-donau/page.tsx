import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多瑙河畔诺伊堡 Neuburg an der Donau｜巴伐利亚的文艺复兴明珠，邂逅倒映在蓝色多瑙河上的宫殿童话 - 最佳欧洲景点',
  description: '朋友，想象一下，当你从古老的“下城门”穿过，第一眼瞥见那座用当地特有的、温暖如蜜的红色砂岩砌成的巨大宫殿时，那种感觉。它不像新天鹅堡那样高悬于峭壁，带着孤傲的童话感，而是稳稳地坐落在你面前，以一种亲和的、庄严的姿态，它的每一扇窗户似乎都反射着多瑙河水的粼粼波光。那一刻，空气里有股特别的味道——是河边',
}

export default function NeuburgAnDerDonauPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '多瑙河畔诺伊堡', href: '/destinations/germany' },
            { label: '多瑙河畔诺伊堡', href: '/attractions/neuburg-an-der-donau' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`多瑙河畔诺伊堡・Neuburg an der Donau・德国・多瑙河畔诺伊堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你从古老的“下城门”穿过，第一眼瞥见那座用当地特有的、温暖如蜜的红色砂岩砌成的巨大宫殿时，那种感觉。它不像新天鹅堡那样高悬于峭壁，带着孤傲的童话感，而是稳稳地坐落在你面前，以一种亲和的、庄严的姿态，它的每一扇窗户似乎都反射着多瑙河水的粼粼波光。那一刻，空气里有股特别的味道——是河边青草潮湿的清新，混合着从老城面包房里飘出的、刚出炉的“Brezen”碱水结那淡淡的焦香。你的脚下，是数百年被脚步磨得光滑甚至有些凹凸的石板路，缝隙里长着倔强的青苔。
你很快会发现，这里的时间流速不一样。宫殿脚下，就是缓缓流淌的、蓝绿色的多瑙河。是的，不是维也纳那段著名的“蓝色”，而是一种更沉静、更接近翡翠的蓝绿色。天鹅和野鸭完全不怕人，慢悠悠地划开水面，荡起的涟漪让水中宫殿的倒影碎成一片晃动的金红。河对岸是绵延的果园和丘陵，在阳光下呈现出柔软的绿色层次。而你的身后，老城的巷子里传来叮叮当当的声响，不是游客的喧哗，那是五金店老师傅在干活，或是自行车铃清脆的提醒。教堂的钟声整点响起，声音浑厚而宁静，仿佛在给整个小镇的呼吸打着拍子。
这里最打动人的，正是这种“活着”的历史感。宫殿不再是隔绝的博物馆，它是小镇日常生活画卷里最宏伟的背景板。你会看到穿着传统皮裤“Lederhosen”的老人家，就坐在宫殿广场边的长椅上晒太阳、读报纸；放学后的孩子们骑着滑板车，在古老的拱门下呼啸而过，笑声在石壁间回荡。那座宏伟的宫殿教堂，既是艺术珍宝，也是周末社区居民来做礼拜的地方。你感受到的，不是对历史的瞻仰，而是一种沉浸式的共生——辉煌的文艺复兴遗产，就这样自然而然地编织进了21世纪巴伐利亚小镇的肌理里，带着温度，带着烟火气。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，当你从古老的“下城门”穿过，第一眼瞥见那座用当地特有的、温暖如蜜的红色砂岩砌成的巨大宫殿时，那种感觉。它不像新天鹅堡那样高悬于峭壁，带着孤傲的童话感，而是稳稳地坐落在你面前，以一种亲和的、庄严的姿态，它的每一扇窗户似乎都反射着多瑙河水的粼粼波光。那一刻，空气里有股特别的味道——是河边青草潮湿的清新，混合着从老城面包房里飘出的、刚出炉的“Brezen”碱水结那淡淡的焦香。你的脚下，是数百年被脚步磨得光滑甚至有些凹凸的石板路，缝隙里长着倔强的青苔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里的时间流速不一样。宫殿脚下，就是缓缓流淌的、蓝绿色的多瑙河。是的，不是维也纳那段著名的“蓝色”，而是一种更沉静、更接近翡翠的蓝绿色。天鹅和野鸭完全不怕人，慢悠悠地划开水面，荡起的涟漪让水中宫殿的倒影碎成一片晃动的金红。河对岸是绵延的果园和丘陵，在阳光下呈现出柔软的绿色层次。而你的身后，老城的巷子里传来叮叮当当的声响，不是游客的喧哗，那是五金店老师傅在干活，或是自行车铃清脆的提醒。教堂的钟声整点响起，声音浑厚而宁静，仿佛在给整个小镇的呼吸打着拍子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人的，正是这种“活着”的历史感。宫殿不再是隔绝的博物馆，它是小镇日常生活画卷里最宏伟的背景板。你会看到穿着传统皮裤“Lederhosen”的老人家，就坐在宫殿广场边的长椅上晒太阳、读报纸；放学后的孩子们骑着滑板车，在古老的拱门下呼啸而过，笑声在石壁间回荡。那座宏伟的宫殿教堂，既是艺术珍宝，也是周末社区居民来做礼拜的地方。你感受到的，不是对历史的瞻仰，而是一种沉浸式的共生——辉煌的文艺复兴遗产，就这样自然而然地编织进了21世纪巴伐利亚小镇的肌理里，带着温度，带着烟火气。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`多瑙河畔诺伊堡`} />
                <InfoRow label="英文名称" value={`Neuburg an der Donau`} />
                <InfoRow label="正式名称" value={`Neuburg an der Donau`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`多瑙河畔诺伊堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由雄心勃勃的普法尔茨伯爵缔造的文艺复兴样板城，见证了德国宗教改革时期新教与天主教共治的独特历史。`} />
                <InfoRow label="建筑特色" value={`耀眼的“普法尔茨红”砂岩宫殿群与高耸的塔楼，与蜿蜒的蓝色多瑙河、保存完好的中世纪城墙共同构成了一幅和谐的立体画卷。`} />
                <InfoRow label="建筑风格" value={`文艺复兴与巴洛克风格交融`} />
                <InfoRow label="文化价值" value={`作为上普法尔茨地区最早接受文艺复兴思潮的中心之一，其宫殿壁画与建筑样式对南德地区产生了深远影响，是活的建筑史教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿博物馆与州立美术馆开放时间通常为周二至周日，上午9点至下午5点，周一闭馆（法定节假日除外）。历史老城区全天可自由漫步。具体开放时间随季节微调，夏季（4月至10月）可能延长至下午6点，冬季可能缩短。建议出行前在巴伐利亚宫殿管理局官网核对最新信息。圣诞节期间及新年有特殊闭馆安排。`} />
              <InfoRow label="门票价格" value={`宫殿建筑群与博物馆联票约为8欧元。仅参观州立美术馆票价约为5欧元。优惠票（学生、65岁以上老人、团体）约为6欧元。18岁以下青少年免费。每月第一个周日可免费入场。持有巴伐利亚宫殿年票者可免费参观。票价可能因特展而临时调整。`} />
              <InfoRow label="地址" value={`Residenzplatz 1, 86633 Neuburg an der Donau, Germany`} />
              <InfoRow label="交通方式" value={`从慕尼黑国际机场出发最为便捷。在机场直接搭乘S-Bahn的S1或S8线前往慕尼黑中央火车站，耗时约45分钟。在中央火车站转乘区域火车（Regionalbahn）前往诺伊堡火车站，车次频繁，每小时至少一班，行程约1小时15分钟。从纽伦堡方向出发也有直达的区域火车连接。自驾则沿A9高速公路行驶，从“Neuburg an der Donau”出口下，跟随“Altstadt”或“Residenz”路标即可轻松抵达老城。小镇内停车位充裕，建议将车停在老城边缘的公共停车场，然后步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起诺伊堡的故事，离不开一个充满野心与艺术眼光的人物：普法尔茨伯爵奥托·海因里希。时间回到16世纪初，这里还只是一个拥有城堡的多瑙河小镇。1505年，经过一场复杂的遗产分割，这片土地落入了年轻的普法尔茨-诺伊堡公国手中。但真正让它脱胎换骨的，是几十年后的奥托·海因里希。这位伯爵是个地道的“文艺复兴人”——他痴迷于艺术、科学和建筑，曾广泛游历意大利，被那里新兴的文化风潮深深震撼。他心中有一个梦想：要在自己多瑙河畔的领地上，建造一座配得上新时代的“理想城市”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，从16世纪30年代开始，一场轰轰烈烈的建造工程开始了。奥托·海因里希请来了当时顶尖的建筑师和艺术家，其中许多人有意大利学习的背景。他们推倒了部分老旧的中世纪堡垒，用本地开采的红色砂岩，建造起了今天我们看到的这座宏伟宫殿。它最惊人的创新在于其风格——它是阿尔卑斯山以北最早完全采用意大利文艺复兴风格的世俗建筑之一。看看那个华丽的“骑士厅”，它的拱廊、壁画和比例，简直就像是直接从托斯卡纳搬过来的。但工匠们又在细节里加入了德式的严谨与哥特式的竖向线条，形成了一种奇妙的混血美感。伯爵还大力推行宗教改革，使诺伊堡成为新教的重要据点，宫殿教堂便是为路德宗礼拜而设计，这在其内部装饰上留下了深刻印记。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的车轮从来不会只沿着直线前进。奥托·海因里希死后，他的继承者菲利普·路德维希公爵娶了一位巴伐利亚的天主教公主。为了爱情（或者说政治联盟），公爵竟然改信了天主教。这在当时是件惊天动地的大事。但诺伊堡展现出了惊人的包容性，公爵没有驱逐新教徒，而是在1617年颁布了“诺伊堡宗教协定”，允许新教和天主教在这片土地上并存，各自拥有信仰自由。这在三十年战争前夕的欧洲，堪称一个微小的奇迹。宫殿里也因此同时存在新教和天主教的礼拜空间，墙壁上的壁画既描绘着圣经故事，也留下了记录这次特殊宗教和解的寓言画面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争与和平交替塑造着它的容颜。三十年战争、西班牙王位继承战争……这座富庶的小城难免遭受劫难。18世纪，当巴洛克风潮席卷欧洲时，诺伊堡的统治者们也为宫殿添加了新的时尚元素——比如那些繁复华丽的灰泥装饰和壁画。但它的核心，那文艺复兴的骨架，始终未变。19世纪初，随着公国并入巴伐利亚王国，宫殿失去了政治中心的地位，一度被用作军营甚至监狱，渐渐沉寂。但也正是这种“被遗忘”，某种程度上保护它没有遭受过度现代化的改造。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪中后期，人们才重新认识到这颗遗珠的价值。经过精心的、长达数十年的修复，剥落的壁画重焕光彩，破损的砂岩被仔细修补。今天，它不仅是巴伐利亚州立美术馆的重要分馆，收藏着从中世纪到巴洛克的精美艺术品，更是一座活着的纪念碑，静静地诉说着一个关于文艺复兴梦想、宗教宽容、以及一个小城如何与它的荣耀遗产相伴而生的漫长故事。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味诺伊堡，你需要一整天时间，并把自己调整到“慢游”模式。建议在上午9点左右抵达，这时旅行团尚未涌入，晨光正好斜射在宫殿红色的立面上，温暖而立体。整个游览可以大致分为两大板块：上午专注探索宫殿建筑群、博物馆和教堂的内部艺术世界；下午则留给老城巷弄、河畔漫步与城墙遗迹，感受小镇的生活气息。傍晚时分，务必留给多瑙河岸，那是光线最魔幻的时刻。这样的安排既有深度的人文艺术浸泡，也有松弛的感官享受，节奏张弛有度。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在周日中午前后参观宫殿教堂内部，因为那时常有礼拜活动，游客进入受限。小镇周一整体比较安静，部分小型博物馆或餐厅可能休息，但宫殿主馆通常开放（除特定周一）。穿着舒适的步行鞋至关重要，老城石板路和城墙步道对鞋跟不友好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城中心的市政厅广场开始，摸摸那尊幸运的“小镇守卫”铜像，感受石板路在清晨的微凉与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的拱门，径直走向宫殿广场，在开阔的视野里第一次完整仰视那座红色砂岩巨构，听广场喷泉的潺潺水声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入宫殿内部，先在一层“骑士厅”驻足，仰头细看那布满整个天花与墙壁的、色彩依然鲜活的文艺复兴寓言壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着华丽的“君王楼梯”登上二层，在州立美术馆的展厅里，寻找阿尔布雷希特·阿尔特多费尔等多瑙河画派大师笔下那抹独特的、属于本地风景的蓝绿色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入连接宫殿的宫廷教堂，在静谧中对比观察新教礼拜堂的简洁肃穆与天主教小圣堂的巴洛克式繁复辉煌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿侧门走出，沿着指示牌走上保存完好的老城城墙，在绿树掩映的步道上换个角度俯瞰红色的屋顶、庭院与远处的多瑙河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着缓坡走下，来到多瑙河畔的“宫殿桥”，站在桥中央，看天鹅游过，将水中宫殿与真实宫殿的倒影一同收入眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后钻进老城某条小巷，找一家有户外座位的家庭餐馆，点一份巴伐利亚特色“白香肠”配甜芥末，就着当地啤酒结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`宫殿桥中段偏东侧`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，阳光将宫殿染成金红色，在此位置能用长焦镜头压缩空间，将宫殿主体、水中倒影与桥拱一同构图，画面极具对称美感与戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老城城墙“堡垒花园”段`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光照亮宫殿侧面，登上城墙的木质观景台，可以拍摄到宫殿塔楼、红色屋顶群与多瑙河湾构成的经典“明信片”全景，建议使用广角镜头。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`宫殿广场喷泉旁`}</h4>
                  <p className="text-sm text-gray-700">{`利用喷泉作为前景，在晴朗的上午拍摄宫殿正立面，喷涌的水珠在阳光下可能形成小小彩虹，为庄严的建筑增添灵动生机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`宫廷教堂内部（允许拍摄处）`}</h4>
                  <p className="text-sm text-gray-700">{`在礼拜活动之外的时段，站在中殿后方，利用教堂纵深，拍摄两侧精美雕饰的廊柱与尽头的管风琴，营造神圣的纵深感，注意调高ISO以避免使用闪光灯。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`多瑙河北岸自行车道`}</h4>
                  <p className="text-sm text-gray-700">{`清晨常有薄雾，从河对岸远眺，整个小镇宫殿建筑群仿佛悬浮在雾海之上，是拍摄氛围感大片的绝佳地点，需要一支稳固的三脚架。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄教堂内部务必提前查看是否允许摄影及是否禁用闪光灯，并保持绝对安静。巴伐利亚的天气多变，抓住雨后初晴的时机，那时的光线通透，红色砂岩经过雨水浸润色彩最为饱和。使用偏振镜可以有效消除水面的反光，让多瑙河倒影更清澈。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城一条安静小巷里的“三玫瑰”旅馆，由一栋17世纪商人住宅改建，木梁天花板吱呀作响，老板娘会为你准备丰盛的巴伐利亚早餐，直接从她的后院厨房端出。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`下城门旁的“骑士之家”酒店，部分房间直接拥有俯瞰多瑙河与宫殿的私人小阳台，在复古的四柱床上入睡，清晨被河上的鸟鸣唤醒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端河畔享受`}</h4>
                  <p className="text-sm text-yellow-800">{`多瑙河南岸稍远处的“葡萄园视野”设计酒店，现代简约风格与自然风光结合，拥有无敌全景露台和水疗中心，适合想要在深度游览后彻底放松的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近步行约10分钟的“多瑙河旅舍”，现代装修，干净明亮，提供自行车租赁，方便你沿着多瑙河自行车道探索更远的郊野风光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旅游旺季（夏季和圣诞市场期间）务必提前数周预订，尤其是老城内的特色住宿非常紧俏。老城中心区域夜晚极其安全宁静，但停车位有限，选择提供停车服务的酒店会省心很多。如果追求极致宁静，河南岸的住宿是不错的选择，只需一座小桥便能步入历史中心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开诺伊堡很久以后，我脑海里反复出现的，不是某幅具体的壁画或某个建筑细节，而是一种整体的“感觉”。那是一种被历史温柔拥抱，而非被其威严震慑的感觉。在这里，辉煌的过去没有成为供在神坛上的标本，它走下台阶，融入了面包的香气、自行车的铃声和河边野餐一家人的笑声里。你会觉得，这座文艺复兴的宫殿，仿佛只是小镇一个特别德高望重、特别美丽的“老邻居”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度和规模的世界里，诺伊堡像一颗被时光轻轻包裹起来的琥珀。它提醒我们，伟大不必张牙舞爪，美可以是一种日常的背景音。它见证了宗教冲突与和解，经历了战争破坏与精心修复，它的每一块红色砂岩，都吸饱了故事与阳光。对于热爱深度游的旅人而言，来这里不仅仅是为了看一座宫殿，更是为了体验一种可能性的存在——一种历史与当下、遗产与生活达成完美和解的可能性。在这里，你可以放下“打卡”的焦虑，只是坐着，看多瑙河的水流了四百年，依旧温柔地托着那个红色的倒影。这本身就是一种疗愈，一种对匆忙灵魂的深情款待。所以，如果你也相信旅行的意义在于“感受”而非“收集”，请一定来多瑙河畔，遇见这颗巴伐利亚的温柔心脏。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/burg-hohenzollern" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍亨索伦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hohenzollern Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eberbach-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃伯巴赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eberbach Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rakotzbr-cke-kromlau-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉科茨桥（魔鬼桥）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakotzbrücke (Devil‘s Bridge)</p>
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
