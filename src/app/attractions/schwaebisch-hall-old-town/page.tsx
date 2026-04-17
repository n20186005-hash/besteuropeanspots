import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施韦比施哈尔 Schwäbisch Hall｜童话盐都与千年阶城 - 最佳欧洲景点',
  description: '我记得第一眼看到施韦比施哈尔时，车子刚从郁郁葱葱的山丘间转出来，科赫尔河像一条闪亮的丝带，而河对岸，整个老城就像一块被时光精心烘焙、撒满了糖霜的巨大姜饼，错落有致地“粘”在陡峭的山坡上。那是一种极其温暖、敦实的童话感，不是冷冰冰的石头堡垒，而是由深浅不一的棕色木头、刷得雪白的墙面和锈红色瓦片层层叠叠...',
}

export default function SchwaebischHallOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施韦比施哈尔', href: '/attractions/schwaebisch-hall-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施韦比施哈尔・Schwäbisch Hall・德国・施韦比施哈尔市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我记得第一眼看到施韦比施哈尔时，车子刚从郁郁葱葱的山丘间转出来，科赫尔河像一条闪亮的丝带，而河对岸，整个老城就像一块被时光精心烘焙、撒满了糖霜的巨大姜饼，错落有致地“粘”在陡峭的山坡上。那是一种极其温暖、敦实的童话感，不是冷冰冰的石头堡垒，而是由深浅不一的棕色木头、刷得雪白的墙面和锈红色瓦片层层叠叠堆砌出来的家园。空气里有科赫尔河微微湿润的水汽，混合着从面包房飘来的、令人心安的小麦焦香。
你很快会发现，这里的灵魂不在某个孤立的纪念碑，而在一种整体的“坡度”与“节奏”里。从河边的低处向上望去，那些房子仿佛在互相搀扶着向上攀登，最终汇聚到山腰上那座有着纤细尖塔的圣米迦勒教堂脚下。而连接这一切的，是那座巨大的、仿佛从山坡里长出来的宽阔石阶——它就是城镇的露天客厅和舞台。白天，你可以看到当地人拎着购物袋，不紧不慢地上下台阶，去市场或回家；孩子们在台阶上追逐，脚步声和笑声在建筑间回荡，清脆得像敲击木琴。
最打动人的，是那种被“盐”浸润了千年的从容与富足。这不是炫耀性的奢华，而是一种扎实的、沉淀在生活细节里的精致。你留意看那些半木结构房屋的外墙，梁木上雕刻的并非单纯的几何花纹，而是盐泉的符号、制盐工人的工具、满载盐袋的马车——这是独属于这里的“家族徽章”。当地人聊起天来，“盐”这个词出现的频率高得惊人，就像在波尔多人们谈论葡萄，在威尼斯谈论潮水一样自然。它告诉你，你正站在一个因某种大自然的恩赐而诞生的、自给自足的小宇宙中心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我记得第一眼看到施韦比施哈尔时，车子刚从郁郁葱葱的山丘间转出来，科赫尔河像一条闪亮的丝带，而河对岸，整个老城就像一块被时光精心烘焙、撒满了糖霜的巨大姜饼，错落有致地“粘”在陡峭的山坡上。那是一种极其温暖、敦实的童话感，不是冷冰冰的石头堡垒，而是由深浅不一的棕色木头、刷得雪白的墙面和锈红色瓦片层层叠叠堆砌出来的家园。空气里有科赫尔河微微湿润的水汽，混合着从面包房飘来的、令人心安的小麦焦香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里的灵魂不在某个孤立的纪念碑，而在一种整体的“坡度”与“节奏”里。从河边的低处向上望去，那些房子仿佛在互相搀扶着向上攀登，最终汇聚到山腰上那座有着纤细尖塔的圣米迦勒教堂脚下。而连接这一切的，是那座巨大的、仿佛从山坡里长出来的宽阔石阶——它就是城镇的露天客厅和舞台。白天，你可以看到当地人拎着购物袋，不紧不慢地上下台阶，去市场或回家；孩子们在台阶上追逐，脚步声和笑声在建筑间回荡，清脆得像敲击木琴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种被“盐”浸润了千年的从容与富足。这不是炫耀性的奢华，而是一种扎实的、沉淀在生活细节里的精致。你留意看那些半木结构房屋的外墙，梁木上雕刻的并非单纯的几何花纹，而是盐泉的符号、制盐工人的工具、满载盐袋的马车——这是独属于这里的“家族徽章”。当地人聊起天来，“盐”这个词出现的频率高得惊人，就像在波尔多人们谈论葡萄，在威尼斯谈论潮水一样自然。它告诉你，你正站在一个因某种大自然的恩赐而诞生的、自给自足的小宇宙中心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施韦比施哈尔`} />
                <InfoRow label="英文名称" value={`Schwäbisch Hall`} />
                <InfoRow label="正式名称" value={`Schwäbisch Hall`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`施韦比施哈尔市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`德国保存最完好的中世纪盐业城镇之一，其财富与城市形态完全由千年盐业贸易塑造。`} />
                <InfoRow label="建筑特色" value={`依山而建、层层叠叠的半木结构房屋群，与宏伟的圣米迦勒教堂和标志性的宽阔阶梯共同构成了如画般的立体山城景观。`} />
                <InfoRow label="建筑风格" value={`以中世纪哥特式（教堂）与文艺复兴、巴洛克时期的半木结构（Fachwerk）民居风格为主导。`} />
                <InfoRow label="文化价值" value={`一座活生生的“盐币”博物馆，体现了盐——这一白色黄金如何从经济基础升华为塑造社区精神、艺术与建筑形态的核心力量。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个古镇区域为公共空间，全天24小时开放。内部主要景点如圣米迦勒教堂（St. Michael）开放时间通常为上午9点至下午6点；哈勒博物馆（Hällisch-Fränkisches Museum）开放时间为周二至周日上午10点至下午5点，周一闭馆。每年冬季的圣诞市场期间以及夏季的露天戏剧节期间，开放时间会延长，具体需查询官网。镇上的市政厅和部分历史建筑仅在导游带领下开放。`} />
              <InfoRow label="门票价格" value={`漫步古镇本身完全免费。圣米迦勒教堂免费进入，但登塔俯瞰全城需支付2欧元小额捐款。哈勒博物馆门票为5欧元，学生及团体有优惠。每年六月举办的“露天阶梯戏剧节”门票需单独购买，价格根据场次从15欧元至50欧元不等。古镇官方组织的德语/英语深度讲解游，价格约为每人10欧元，时长1.5小时。`} />
              <InfoRow label="地址" value={`Marktplatz 6, 74523 Schwäbisch Hall, Germany`} />
              <InfoRow label="交通方式" value={`从斯图加特机场（STR）出发最便捷：在机场火车站乘坐区域快车（RE）直达施韦比施哈尔火车站，车程约1小时40分钟，每小时一班。从法兰克福机场（FRA）出发：需先乘坐ICE高速列车到斯图加特主火，再换乘RE，总车程约2.5-3小时。到达施韦比施哈尔火车站后，出站步行过桥，约10-15分钟即可抵达老城核心市场广场。小镇内部完全步行即可，所有石板路都不适合大型行李箱拖行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一千多年前，科赫尔河边的那几眼咸泉说起。据说最早的定居者是凯尔特人，他们早已懂得利用这里的盐水。但真正让“哈尔”（Hall，在古德语中即指产盐地）这个名字登上历史舞台的，是公元11世纪左右。修道院的僧侣们系统地开发了盐泉，他们挖掘沟渠，将卤水引到专用的工棚，用巨大的铁锅日夜不停地熬煮，直到洁白的盐晶析出。在冷藏技术不存在的年代，盐是保存食物、乃至保存生命的战略物资，价值堪比黄金。施韦比施哈尔的盐，通过驴马驮队和后来的马车，被运往四面八方，财富也随之滚滚而来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了13世纪，施韦比施哈尔已经从一个小定居点发展成为帝国自由城市，直接效忠于神圣罗马帝国皇帝，拥有铸币、征税和自治的崇高权利。这里的商人和盐业公会富甲一方，他们开始按照自己的心意建设家园。城市沿着陡坡向上扩张，因为平坦的河谷地带要留给最重要的盐井和工场。于是，独特的城市肌理诞生了：山脚下的“下城”是嘈杂的工坊和仓库，山坡上的“上城”是商贾和工匠的华丽住宅，而位于半山腰、俯瞰一切的核心，则是市民的精神中心——圣米迦勒教堂。财富没有催生出一座孤零零的城堡，而是造就了一个坚固的市民共同体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市的黄金时代持续了数百年，甚至在十七世纪那场席卷德意志、让无数城市化为焦土的三十年战争中，它也奇迹般地幸免于难，保留了绝大部分中世纪风貌。然而，真正的威胁来自工业革命。19世纪，更高效、更便宜的海盐和岩盐开采技术，让施韦比施哈尔古老的泉盐失去了竞争力，盐井陆续关闭，这座城市的经济支柱仿佛一夜之间被抽空。它陷入沉睡，成了一座被时代列车暂时遗忘的“博物馆小镇”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但正是这场“遗忘”，在二战期间意外地成为了它的护身符。因为它没有重要的军事工业，盟军的轰炸机几乎忽略了它，使得这片珍贵的历史街区完整地留存到了今天。战后，聪明的当地人没有选择大拆大建，而是开始了精心的修复。他们明白，自己守护的不是一堆老房子，而是一个基于盐业经济而生的、完整的生活样本。今天，你依然能在哈勒博物馆里看到那枚著名的“盐币”，它是这里一切故事的起点；而每年夏天，在那宏伟的教堂台阶上上演的露天戏剧，演员和观众沐浴在同一个夕阳下，仿佛千年来的市民精神，从未离开。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味施韦比施哈尔的立体与生动，建议安排完整的一天。最好在上午九点前抵达，这时阳光刚刚洒满教堂尖塔，旅游巴士还未涌入，你能独享老城的宁静。整个游览以“自下而上、由外而内”为节奏，先从外围感受其全景，再深入街巷触摸肌理，最后在黄昏时分回到中心阶梯，感受它从市集到舞台的角色转变。这样的安排能让你循序渐进地理解盐业如何从地理上和精神上塑造了这座城镇。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇很多小巷是居民区，游览时请保持安静，不要对着住户窗户拍照。上下阶梯和陡坡很多，务必穿一双绝对舒适防滑的鞋子。周末市场广场和阶梯上可能有集市，非常热闹，但周三下午很多小店会提前关门。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站过桥后，别急着冲进老街，先在河北岸的“全景步道”上慢走一段，把这个如模型般精致的山城全景装进眼里和相机里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的“盐门”进入下城，沿着“盐泉巷”行走，想象几个世纪前这里充斥着卤水气味和煮盐锅炉轰鸣声的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着自然的坡度向上，让自己迷失在“上城”迷宫般的窄巷里，抬头仔细欣赏每一栋半木屋梁架上独特的雕刻，那都是盐工和盐商家族的无声自传。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开圣米迦勒教堂那厚重的大门，在中殿站定，感受从高侧窗倾泻而下的清冷光线与宁静，然后鼓足勇气攀爬那狭窄的旋转楼梯登上钟塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，便是那著名的宽阔阶梯，此时不妨在台阶上坐下，像当地人一样吃个冰淇淋，观察往来行人，等待可能的街头音乐表演。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着阶梯一侧的小径绕到教堂后方，探访那仿佛悬空般的美丽墓地，这里安息着塑造了这座城市的人们，墓碑古老而安详。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后前往哈勒博物馆，在那栋本身就是历史建筑的老房子里，通过古老的制盐工具、盐币和城市模型，把一天的感性见闻串联成清晰的理性认知。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值夏季戏剧节期间，傍晚时分务必再次回到大阶梯，提前占个好位置，体验一场在千年古迹中上演的、灯光与星光交织的露天演出。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河北岸全景步道中段`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光最适合，能让建筑的立体感和瓦片的色彩达到最饱和，构图时把科赫尔河和桥梁作为前景，让城市充满画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣米迦勒教堂阶梯正对面二楼咖啡馆露台`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线柔和，可以拍到阶梯富有纵深感的全景，等待有行人走动时按下快门，能增添生动气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`上城“工匠巷”某处转角`}</h4>
                  <p className="text-sm text-gray-700">{`利用狭窄巷道的自然框架，聚焦于一扇开满鲜花的窗或一盏古老的铁艺街灯，阳光只在正午时分能短暂照入巷底，形成迷人的光影对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从教堂后方墓地边缘俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从这里可以拍到红瓦屋顶如波浪般向河谷蔓延的经典画面，运气好还能遇到薄雾，增添神秘感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`哈勒博物馆内的文艺复兴庭院`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午的顶光，在下午拍摄庭院拱廊的优雅线条和墙面的斑驳质感，这里游人稀少，能拍到静谧的庭院角落。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除半木结构房屋白色墙面和深色木梁的反光，让色彩更纯粹。拍摄居民和商家前，请务必用眼神或手势征得对方同意，德国人非常重视隐私。戏剧节期间禁止使用专业摄像机和三脚架拍摄演出。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在火车站附近由传统公寓楼改建的现代旅店，房间明亮简洁，步行到老城只要十分钟，关键是门口就有免费停车场，对于自驾者无比友好。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸历史之选`}</h4>
                  <p className="text-sm text-green-800">{`选择上城一栋经过精心修复的16世纪半木结构房屋里的精品酒店，踩着吱呀作响的复古木楼梯回到房间，从低矮的窗框望出去就是层层叠叠的瓦片屋顶，夜晚格外静谧。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`艺术设计之选`}</h4>
                  <p className="text-sm text-yellow-800">{`河对岸新城区一家由旧厂房改造的设计师酒店，工业风混搭北欧家具，提供免费自行车，可以骑着车沿着科赫尔河探索老城的不同侧面，体验古今对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华度假之选`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟到周边宁静村庄里的温泉城堡酒店，享受以当地盐泉为基础的现代水疗，在饱览一天古城风韵后彻底放松身心，品尝用本地食材烹调的米其林推荐美食。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店通常不设电梯且停车位极其稀缺，预订时务必确认。夏季戏剧节（6-8月）和圣诞市场期间（11月底-12月）的住宿非常紧俏，至少提前三个月预订。小镇治安极好，夜晚独自在老城漫步也安全感十足。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施韦比施哈尔好些日子了，我脑海里最清晰的画面，不是某栋具体的建筑，而是黄昏时坐在大阶梯上，看着天空从蔚蓝染成粉金，孩子们停止了奔跑，街头艺人收起小提琴，而本地的老夫妇们开始拎着面包袋，慢悠悠地一级一级向上走，回到他们那些点着温暖灯光的木框窗后的家。那一刻我忽然明白，这座城最珍贵的不是它“像”一个童话，而是它依然“活着”一个童话。它没有被真空保存为冰冷的标本，而是让千年来的生活逻辑——因盐而聚，依山而筑，阶梯为心——延续到了今天。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷颠覆的快节奏世界里，施韦比施哈尔提供了一种截然不同的价值沉思：真正的韧性不是不断地推倒重来，而是深刻地理解自身从何而来，并温柔而坚定地将那份内核融入新的时代脉络。它提醒着我们，旅行的意义，有时不仅仅是为了看见不同的风景，更是为了遇见一种不同的时间观念和生存智慧。当你走在那被无数脚步磨光的阶梯上，你会感到自己正行走在一条时间的河流里，它不慌不忙，却充满了扎实的力量。这正是每一位深度旅者应该来此的理由：感受一种由“盐”积淀的从容，并在心中，为自己的精神世界，留存一块同样丰饶的“盐田”。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/quedlinburg-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奎德林堡修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Quedlinburg Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/weimar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    魏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">魏玛老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Weimar Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-amphitheater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Amphitheater</p>
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
