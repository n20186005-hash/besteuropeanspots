import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维尔茨 Wiltz｜卢森堡的节日之都，在山丘城堡下邂逅音乐、戏剧与慢生活 - 最佳欧洲景点',
  description: '车子沿着舒缓的坡道盘旋而上，当维尔茨第一次闯入视野时，你会忍不住轻轻“哇”出声来。那不是惊心动魄的险峻，而是一种沉稳的、如舞台布景般徐徐展开的美丽。一座巨大的、浅色石砌的城堡，戴着深灰色的斜顶帽子，安然端坐在树木葱茏的山丘之巅，像一位沉思的守护者。而整个小镇，那些有着暖黄色、淡粉色墙壁的房屋，就像从...',
}

export default function WiltzCastleFestivalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '维尔茨', href: '/attractions/wiltz-castle-festival-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维尔茨・Wiltz・卢森堡・维尔茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着舒缓的坡道盘旋而上，当维尔茨第一次闯入视野时，你会忍不住轻轻“哇”出声来。那不是惊心动魄的险峻，而是一种沉稳的、如舞台布景般徐徐展开的美丽。一座巨大的、浅色石砌的城堡，戴着深灰色的斜顶帽子，安然端坐在树木葱茏的山丘之巅，像一位沉思的守护者。而整个小镇，那些有着暖黄色、淡粉色墙壁的房屋，就像从城堡脚下流淌出的溪流，沿着山坡的褶皱，一层一层、温柔地铺展到谷底。空气里有刚刚修剪过的青草香，混合着远处面包房飘来的、甜丝丝的黄油气息。
你沿着石板路向上走，脚步声清晰而安宁。这里没有大城市的喧嚣，只有窗台上天竺葵绽放的噼啪声，和咖啡馆里杯碟轻微的碰撞声。你会发现，城堡对于维尔茨人来说，绝非一个遥远的景点。它是背景，是日常。年轻的妈妈推着婴儿车穿过城堡下方的公园；白发的老先生坐在长椅上，对着城堡的方向读报纸；几个孩子把滑板车停在古老的水井边，嬉笑着跑开。这座建筑早已脱离了“贵族领地”的孤傲，深深嵌入了社区的肌理，成为居民们散步、约会、发呆的后花园。
但维尔茨最打动人的心跳，在夏天才会完全苏醒。当你站在那座著名的露天阶梯剧场前——它巧妙地利用山坡的自然坡度建成——即使空无一人，你也能听见回声。想象一下：七月的夜晚，星空低垂，城堡被灯光勾勒出金色的轮廓，成为世界上最华丽的舞台背景。上千人坐在这片草坡上，从古典交响乐到先锋戏剧，从摇滚音乐会到街头马戏，掌声与欢呼声在山谷里回荡。那一刻，历史与当下，沉静与狂欢，完美地交融在一起。维尔茨的魅力，就在于这种巨大的反差：平日它是如此静谧、内敛，仿佛时间都慢了下来；而一到季节，它就变成了一个热情澎湃、艺术血液沸腾的节日之都。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着舒缓的坡道盘旋而上，当维尔茨第一次闯入视野时，你会忍不住轻轻“哇”出声来。那不是惊心动魄的险峻，而是一种沉稳的、如舞台布景般徐徐展开的美丽。一座巨大的、浅色石砌的城堡，戴着深灰色的斜顶帽子，安然端坐在树木葱茏的山丘之巅，像一位沉思的守护者。而整个小镇，那些有着暖黄色、淡粉色墙壁的房屋，就像从城堡脚下流淌出的溪流，沿着山坡的褶皱，一层一层、温柔地铺展到谷底。空气里有刚刚修剪过的青草香，混合着远处面包房飘来的、甜丝丝的黄油气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你沿着石板路向上走，脚步声清晰而安宁。这里没有大城市的喧嚣，只有窗台上天竺葵绽放的噼啪声，和咖啡馆里杯碟轻微的碰撞声。你会发现，城堡对于维尔茨人来说，绝非一个遥远的景点。它是背景，是日常。年轻的妈妈推着婴儿车穿过城堡下方的公园；白发的老先生坐在长椅上，对着城堡的方向读报纸；几个孩子把滑板车停在古老的水井边，嬉笑着跑开。这座建筑早已脱离了“贵族领地”的孤傲，深深嵌入了社区的肌理，成为居民们散步、约会、发呆的后花园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但维尔茨最打动人的心跳，在夏天才会完全苏醒。当你站在那座著名的露天阶梯剧场前——它巧妙地利用山坡的自然坡度建成——即使空无一人，你也能听见回声。想象一下：七月的夜晚，星空低垂，城堡被灯光勾勒出金色的轮廓，成为世界上最华丽的舞台背景。上千人坐在这片草坡上，从古典交响乐到先锋戏剧，从摇滚音乐会到街头马戏，掌声与欢呼声在山谷里回荡。那一刻，历史与当下，沉静与狂欢，完美地交融在一起。维尔茨的魅力，就在于这种巨大的反差：平日它是如此静谧、内敛，仿佛时间都慢了下来；而一到季节，它就变成了一个热情澎湃、艺术血液沸腾的节日之都。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维尔茨`} />
                <InfoRow label="英文名称" value={`Wiltz`} />
                <InfoRow label="正式名称" value={`Wiltz`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`维尔茨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卢森堡北部厄特林根地区的古老首府，以二战期间的“维尔茨罢工”抵抗运动而载入史册，如今是享誉欧洲的夏季音乐戏剧节之乡。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于山丘之上的恢宏城堡与向下蔓延的扇形古镇完美融合，形成了层次分明的立体景观。`} />
                <InfoRow label="建筑风格" value={`城堡主体呈现文艺复兴与古典主义的混合风格，而山脚下错落的民居则保留了古朴的卢森堡乡村建筑特色。`} />
                <InfoRow label="文化价值" value={`它超越了地理意义上的小镇，是卢森堡民族精神（坚韧与热爱艺术）的一个鲜活缩影，将沉重的历史记忆转化为充满生命力的当代文化庆典。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`维尔茨城堡及地区历史博物馆开放时间通常为每年4月至10月，每天上午10点至下午6点；11月至3月仅周末开放或需预约参观。城堡公园全年免费开放。夏季音乐戏剧节通常在七月举行，具体日期每年微调，需提前查询官网。小镇内商店平日营业至傍晚，周日多数歇业。`} />
              <InfoRow label="门票价格" value={`维尔茨城堡与博物馆联票成人约7欧元，学生及65岁以上长者约5欧元，12岁以下儿童免费。夏季音乐戏剧节门票因演出而异，露天剧场座位票价从25欧元至60欧元不等，站票或部分社区活动可能免费。制革厂文化中心常设展览免费参观。`} />
              <InfoRow label="地址" value={`Château de Wiltz, 9516 Wiltz, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发是最佳选择。在卢森堡中央火车站旁的巴士总站，乘坐前往维尔茨的巴士（通常是130或131路），车程约1小时，班次每小时1-2班，周末会减少。强烈建议使用卢森堡全国免费的公共交通系统，上车无需购票。自驾则沿N15/N12公路向北行驶约45公里，小镇外围有充足的免费停车场，节假日建议停放在“Um Bock”停车场后步行进入老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`维尔茨的故事，始于那座山丘。早在罗马时代，这里可能就是一处哨所。但真正让它登上历史舞台的，是中世纪早期。大约在十世纪左右，一座坚固的堡垒在山顶被建立起来，用以控制阿尔泽特河支流维尔茨河沿岸的交通，并庇护周围的居民。最初的领主姓氏已不可考，但“Wiltz”这个名字，很可能来源于河流，意为“蜿蜒曲折”。在随后的几百年里，城堡像一块磁石，吸引了手工艺人、商贩和农民在它的保护下定居，形成了上城和下城的雏形。命运在13世纪发生了转折，维尔茨成为了“维尔茨领主”家族的世袭领地。这个家族在卢森堡的历史中扮演了重要角色，他们不断加固、扩建城堡，使其成为厄特林根地区权力与威望的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，石头城堡的故事并非总是关于战争与围困。维尔茨的另一个身份，是繁荣的皮革业中心。从中世纪到近代，清澈的维尔茨河水为制革作坊提供了理想条件。你可以想象，几个世纪前，山谷里弥漫的不是花香，而是鞣制皮革的独特气味，工匠们忙碌的身影和锤打声构成了小镇的经济脉搏。这份产业的繁荣，为小镇积累了财富，也塑造了当地人务实、坚韧的性格。这种坚韧，在二十世纪经历了最残酷的考验。二战期间，卢森堡被纳粹德国占领。1942年，德国当局在卢森堡强制推行兵役制。就在这一年的8月31日，维尔茨爆发了象征性的全民罢工，抗议占领者的暴政。尽管罢工很快被镇压，领头者遭到逮捕和处决，但“维尔茨罢工”成为了卢森堡全国抵抗运动的导火索和标志性事件，写入了这个国家的民族记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争给城堡和小镇留下了深深的伤痕。城堡在阿登战役（突出部战役）中被严重损毁。但维尔茨人没有让它在废墟中沉寂。战后的重建不仅仅是修复石头，更是在寻找小镇的灵魂与未来。一个充满远见的想法诞生了：何不利用这天然的阶梯式山坡和城堡作为背景，创造一个艺术的盛会？于是，从1953年开始，维尔茨夏季音乐戏剧节拉开了帷幕。最初可能只是本地社团的演出，但它像一粒种子，在历史的伤痛土壤里，开出了最绚烂的花。戏剧、音乐、舞蹈……年复一年，艺术家和观众从四面八方涌来，用艺术治愈战争创伤，用欢乐重新定义这座城堡。昔日的领主堡垒，彻底转变为了人民的文化圣殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的维尔茨，依然保留着那份厚重的历史感。地区历史博物馆里陈列着皮革工具和战争记忆；被精心修复的制革厂建筑群变成了现代的文化中心。但当你漫步其间，你感受到的更多是一种轻盈的、向前看的活力。城堡里可能正在举办现代艺术展，广场上也许有爵士乐队在即兴演奏。它坦然接受自己的每一段过去——领主的、工匠的、抵抗者的——并将它们融合成一种独特的气质：既脚踏实地，又仰望星空；既铭记历史，又尽情欢庆。这就是维尔茨的前世今生，一段从防御堡垒到艺术殿堂的非凡旅程。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议选择一个非节日的晴朗工作日前往，这样才能同时领略维尔茨静谧与热情的两面。最好在上午十点前抵达，这时游客稀少，晨光温柔，是探索城堡和拍照的黄金时间。整体游览可以安排满满一天，节奏宜张弛有度：上午沉浸于历史与建筑，下午漫步小镇感受生活气息，如果机缘巧合能待到傍晚，不妨看看文化中心是否有晚间活动。这样的安排能让你由宏大到细微，层层深入地读懂这座小镇。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇道路多为坡道和石板路，请务必穿一双舒适耐走的鞋子。夏季前来务必提前数月查询音乐节日程并预订住宿与演出票，否则很可能一房难求。本地人英语普及度很高，但用卢森堡语或法语说一句“Moien”（你好）会瞬间拉近距离。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下的“制革厂文化中心”开始，先在这个由古老工业建筑改造的空间里感受维尔茨的现代脉搏和免费展览。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的标识开始向上攀登，穿过郁郁葱葱的城堡公园，途中会在不同高度邂逅俯瞰下城老街的绝佳视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的后方进入内部庭院，静静感受文艺复兴拱廊围合出的宁静与光影游戏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重点参观城堡内的地区历史博物馆，在皮革作坊实物展厅和关于“维尔茨罢工”的展陈前驻足，触摸小镇的经济骨骼与精神脊梁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡主露台走出，站在制高点，让整个扇形小镇和远处绵延的阿登森林全景一次性映入眼帘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后钻进“上城”迷宫般的小巷，寻找那家墙面爬满藤蔓的老咖啡馆，点一杯卢森堡本地咖啡，看街景如默片流过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走下长长的阶梯，探访“下城”的圣彼得和保罗教堂，其内部新哥特式的祭坛与彩窗有着迥异于城堡的庄严之美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果脚力尚可，散步至小镇边缘的“德国士兵墓地”，在寂静的松林中完成一次关于战争与和平的沉重思考。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡露台全景框`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡主建筑前的宽阔露台边缘，用广角镜头将前景的石栏、中景层层叠叠的彩色屋顶与远景的森林一同收纳，最佳光线是下午四点后的侧光，层次感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`制革厂文化中心旋转楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`走进文化中心内部，仰拍那座极具现代感的螺旋楼梯，钢结构与玻璃的线条在顶棚自然光照射下形成几何光影，上午十一点左右光线最为充沛立体。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣彼得和保罗教堂内殿仰角`}</h4>
                  <p className="text-sm text-gray-700">{`在教堂内部，将镜头对准主祭坛上方高高的肋拱穹顶，等待一束阳光从侧窗射入照亮雕刻细节，营造神圣肃穆的氛围，需使用高感光度或三脚架。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`下城老街的蜿蜒坡度`}</h4>
                  <p className="text-sm text-gray-700">{`从城堡公园中部的一个观景平台，向下拍摄那条通往“下城”的主要石板路，蜿蜒的弧线两旁是色彩柔和的老房子，清晨或雨后路面反光时意境最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`露天剧场空镜的纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`在非演出日走进阶梯剧场，从最高一排的座位向下拍摄，将空无一人的石阶作为引导线，终点聚焦在作为舞台背景的城堡建筑上，构图充满仪式感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄民居和私人花园时请保持尊重，避免将镜头直接对准屋内居民。使用无人机在卢森堡受到严格管制，在维尔茨这样的有人区域飞行基本不被允许，切勿尝试。音乐节期间拍摄演出通常禁止使用专业相机和闪光灯，手机摄影则比较自由。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下城广场旁由十七世纪贵族宅邸改造的精品酒店，房间保留了原始的厚石墙和木梁，推开吱呀作响的窗扉，楼下咖啡馆的谈笑声仿佛来自几个世纪前。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术节狂热粉必备`}</h4>
                  <p className="text-sm text-green-800">{`位于城堡山腰上的独栋度假屋，带一个可以俯瞰露天剧场的小露台，让你在音乐节期间足不出户就能“私人包厢”般享受演出，需提前一年预订。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗意栖居`}</h4>
                  <p className="text-sm text-yellow-800">{`位于维尔茨河谷上游的宁静家庭农场民宿，主人会奉上自酿的黑加仑果酱和新鲜羊奶，夜晚只有溪流和繁星作伴，开车到小镇中心仅需八分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计体验`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在小镇入口处由旧水电站改造的设计师酒店，工业风的混凝土结构与极简内饰形成强烈对比，屋顶酒吧拥有欣赏城堡夜景的独特角度。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`音乐节期间（七月）全镇住宿价格会飙升且很快售罄，务必提前规划。如果追求极致安静，请选择河谷或森林边的住宿，但需有自驾车。老城内的住宿虽方便，但周末夜晚（特别是节庆时）可能能听到广场上隐约的欢闹声，这也是体验的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维尔茨的时候，我的背包里没有多少纪念品，但心里却装满了一种复杂的、温暖的充实感。这不仅仅是因为它漂亮——欧洲漂亮的小镇太多了。而是因为它有一种罕见的分量感。这种分量，不是来自城堡石头的物理重量，而是来自历史在这里沉淀出的层次：权力的、劳作的、抗争的、欢庆的……它们没有彼此覆盖，而是像地层一样清晰可见，共同构成了小镇今天的性格。你会记得博物馆里那张泛黄的罢工传单的触感，也同样记得露天剧场里那个随着音乐摇摆的孩子的笑脸。在这里，历史不是被封存在玻璃柜里的标本，而是流动在当下生活中的血液。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追求“网红打卡”和“效率旅行”的时代，维尔茨像是一个温柔的提醒。它邀请你慢下来，去爬一个坡，在长椅上无所事事地坐一会儿，和面包店老板娘聊几句天气，等待一场傍晚可能根本不会发生的落日。它告诉你，一个地方的魅力，不仅在于它“有什么”，更在于这些东西是如何“活着”的。城堡活着，作为舞台和公园；抵抗精神活着，化为对自由与艺术的坚持；甚至古老的皮革业，也活着，在文化中心的创意工作坊里延续。所以，如果你厌倦了浮光掠影，渴望一次真正“走入”一个地方的旅行，来维尔茨吧。它或许不会给你即刻的视觉震撼，但它会像一首复调音乐，慢慢渗透进你的感知，让你在离开后的很长一段时间里，还会想起那座山丘上的光，和山谷里回荡的歌声。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourglinster-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔格林斯特城堡（隐秘的十二世纪贵族双堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourglinster Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beaufort-castles" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博福尔城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beaufort Castles</p>
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
