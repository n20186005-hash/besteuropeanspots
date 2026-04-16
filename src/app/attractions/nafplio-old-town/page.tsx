import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳夫普利翁 Nafplio｜希腊的第一首都，爱琴海畔被遗忘的浪漫故都 - 最佳欧洲景点',
  description: '车子转过最后一个山弯，爱琴海那种独有的、介于宝石蓝和孔雀绿之间的光芒，就那么毫无预警地撞进了眼里。而纳夫普利翁，就像一颗被时光妥善收藏的糖果，安静地躺在阿尔戈利斯湾的怀抱里。第一印象不是震撼，而是一种被温柔击中的恍惚。空气里是海盐、九重葛花香，还有不知从哪家厨房飘出来的油炸小章鱼的焦香，混合成一种属...',
}

export default function NafplioOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '纳夫普利翁', href: '/attractions/nafplio-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">纳夫普利翁・Nafplio・希腊・纳夫普利翁</h1>
          <p className="text-lg text-gray-600 mb-6">
            车子转过最后一个山弯，爱琴海那种独有的、介于宝石蓝和孔雀绿之间的光芒，就那么毫无预警地撞进了眼里。而纳夫普利翁，就像一颗被时光妥善收藏的糖果，安静地躺在阿尔戈利斯湾的怀抱里。第一印象不是震撼，而是一种被温柔击中的恍惚。空气里是海盐、九重葛花香，还有不知从哪家厨房飘出来的油炸小章鱼的焦香，混合成一种属于地中海的、懒洋洋的甜蜜。
走在老城，脚下是光滑的威尼斯式石板路，缝隙里长出小小的草。你的眼睛会忙不过来：这边是一栋鹅黄色的新古典主义宅邸，阳台的铁艺花纹精致得像蕾丝；拐角处，一座奥斯曼时期留下的清真寺宣礼塔，安静地矗立着，如今变成了一个小型美术馆。当地人生活的节奏就流淌在这些建筑之间。午后，老人们聚在广场的梧桐树下玩西洋双陆棋，棋子落在棋盘上发出清脆的“哒哒”声，和海浪的节拍混在一起。你突然明白，这里最动人的不是某个孤立的景点，而是一种整体性的、活着的氛围。它优雅，但绝不疏离；它古老，却充满了生活气。
最让人沉溺的，是黄昏时分。登上古老的阿克罗纳夫普利亚城堡遗迹，或者只是坐在海港边的露天咖啡馆。夕阳给对面伯罗奔尼撒的山峦镀上金边，海面上的波光碎成千万片银子。布尔齐岛上的威尼斯要塞，像一枚黑色的印章盖在橙粉色的天幕上。你会听到教堂的钟声、归航渔船的汽笛、以及咖啡馆里传来轻柔的希腊音乐。这一刻，历史不再是教科书上的名词，而是你呼吸着的空气，是眼前这幅依然在流动的画卷。纳夫普利翁的核心魅力，就在于它完美平衡了历史的厚重与海滨小镇的闲适，让你同时成为一个贪婪的探索者和一个纯粹的度假者。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">车子转过最后一个山弯，爱琴海那种独有的、介于宝石蓝和孔雀绿之间的光芒，就那么毫无预警地撞进了眼里。而纳夫普利翁，就像一颗被时光妥善收藏的糖果，安静地躺在阿尔戈利斯湾的怀抱里。第一印象不是震撼，而是一种被温柔击中的恍惚。空气里是海盐、九重葛花香，还有不知从哪家厨房飘出来的油炸小章鱼的焦香，混合成一种属于地中海的、懒洋洋的甜蜜。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走在老城，脚下是光滑的威尼斯式石板路，缝隙里长出小小的草。你的眼睛会忙不过来：这边是一栋鹅黄色的新古典主义宅邸，阳台的铁艺花纹精致得像蕾丝；拐角处，一座奥斯曼时期留下的清真寺宣礼塔，安静地矗立着，如今变成了一个小型美术馆。当地人生活的节奏就流淌在这些建筑之间。午后，老人们聚在广场的梧桐树下玩西洋双陆棋，棋子落在棋盘上发出清脆的“哒哒”声，和海浪的节拍混在一起。你突然明白，这里最动人的不是某个孤立的景点，而是一种整体性的、活着的氛围。它优雅，但绝不疏离；它古老，却充满了生活气。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最让人沉溺的，是黄昏时分。登上古老的阿克罗纳夫普利亚城堡遗迹，或者只是坐在海港边的露天咖啡馆。夕阳给对面伯罗奔尼撒的山峦镀上金边，海面上的波光碎成千万片银子。布尔齐岛上的威尼斯要塞，像一枚黑色的印章盖在橙粉色的天幕上。你会听到教堂的钟声、归航渔船的汽笛、以及咖啡馆里传来轻柔的希腊音乐。这一刻，历史不再是教科书上的名词，而是你呼吸着的空气，是眼前这幅依然在流动的画卷。纳夫普利翁的核心魅力，就在于它完美平衡了历史的厚重与海滨小镇的闲适，让你同时成为一个贪婪的探索者和一个纯粹的度假者。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="纳夫普利翁" />
                <InfoRow label="英文名称" value="Nafplio" />
                <InfoRow label="正式名称" value="Nafplio" />
                <InfoRow label="国家" value="希腊" />
                <InfoRow label="城市" value="纳夫普利翁" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="现代希腊独立后的第一个首都，是希腊摆脱奥斯曼帝国统治后国家精神的初生摇篮。" />
                <InfoRow label="建筑特色" value="威尼斯、奥斯曼与希腊新古典主义风格的精妙层叠，宛如一部立体的地中海建筑编年史。" />
                <InfoRow label="建筑风格" value="强烈的威尼斯文艺复兴风格主导，融合了奥斯曼的简约与希腊独立后的新古典主义元素。" />
                <InfoRow label="文化价值" value="一个并非只有远古神话的希腊，在这里你能触摸到近代希腊民族国家形成之初的脉搏与温度。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城区域及海滨步道全天24小时开放。主要景点如帕拉米迪城堡夏季（4月-10月）通常为08:00-19:30，冬季（11月-3月）为08:00-15:30，周一可能闭馆或缩短时间。布尔齐岛要塞的渡船服务一般在上午10点至日落前运行，冬季班次大幅减少。所有室内博物馆和小型展馆的开放时间非常多变，强烈建议在每年四月至十月的旅游旺季前往，并提前在当地旅游信息中心或景点官网确认当日安排。" />
              <InfoRow label="门票价格" value="进入纳夫普利翁老城区本身免费。帕拉米迪城堡门票约为8欧元，冬季或有折扣。考古博物馆门票约为6欧元。布尔齐岛要塞登岛免费，但乘坐小船往返约需5-6欧元。多数教堂免费参观。联票并不常见，学生、老人及欧盟青年卡持有者通常可享受半价优惠，需出示有效证件。" />
              <InfoRow label="地址" value="Nafplio, 211 00, Greece" />
              <InfoRow label="交通方式" value="从雅典国际机场出发最便捷的方式是租车自驾，沿E94高速公路行驶，约2小时即可直达，沿途风光极美。若乘坐公共交通，需先从机场乘X93巴士到雅典的基菲索斯长途汽车站，再换乘前往纳夫普利翁的KTEL城际巴士，车程约2.5-3小时，班次每天约10-12班。从纳夫普利翁小镇中心到所有景点均可轻松步行到达，探索帕拉米迪城堡则需要攀爬著名的999级台阶或乘坐出租车至山顶入口。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要讲纳夫普利翁的故事，得先从海上的那个小岛——布尔齐说起。早在古希腊迈锡尼文明时期，这里就是一个重要的港口。但真正让它成为兵家必争之地的，是威尼斯共和国。十五世纪，威尼斯的商船与舰队称霸地中海，他们一眼看中了这个天然良港，并在小小的岩石岛上筑起了第一座要塞，就是今天的布尔齐岛城堡。那时的纳夫普利翁，是威尼斯在摩里亚半岛最重要的前哨站，一个充满意大利风情的“港口要塞”。你可以想象，码头上堆满了东方的丝绸、香料，和来自意大利的葡萄酒，空气里是多种语言交织的嘈杂。</p>
              <p className="text-gray-700 leading-relaxed mb-4">威尼斯的荣光并未永远照耀。1715年，经过残酷的围攻，奥斯曼土耳其的弯刀再次征服了这里。土耳其人留下了他们的印记，比如建造了清真寺和公共浴室，但更多的是加强防御。他们深知此地重要，于是在城市后方那座高达216米的巨岩山巅，修筑了堪称军事工程奇迹的帕拉米迪城堡。这座拥有七座独立堡垒的庞然大物，被认为是当时地中海沿岸最坚固的城堡之一。然而，再坚固的石头也挡不住历史的洪流。十九世纪初，希腊独立战争的烽火燃遍大地。经过艰苦卓绝的战斗，1822年11月，希腊起义军终于攻克了帕拉米迪城堡，纳夫普利翁成为第一个从奥斯曼铁蹄下获得自由的主要城镇。</p>
              <p className="text-gray-700 leading-relaxed mb-4">正是这份“第一”的荣光，让它被历史选中。1829年，现代希腊的第一位总统爱奥尼斯·卡波季斯第亚斯将政府迁至于此，纳夫普利翁由此成为新生希腊国的第一个首都。那是一个充满希望与混乱的草创年代。你可以想象，狭窄的街道上走过穿着欧洲军服的士兵，也走过衣衫褴褛的游击队员；新建的政府机构里，人们在激烈地辩论着这个国家的未来宪法。可惜，和平与建设被暗杀打断。1831年，卡波季斯第亚斯总统就在纳夫普利翁的圣斯皮里宗教堂前遇刺身亡，为这座小城添上了一抹悲剧色彩。</p>
              <p className="text-gray-700 leading-relaxed mb-4">首都的使命在1834年结束，雅典接过了接力棒。纳夫普利翁仿佛松了一口气，从此卸下政治的重担，回归它原本宁静的海港生活。那些为首都时期建造的优雅新古典主义建筑，那些威尼斯时期留下的浪漫阳台，奥斯曼时期简朴的街道格局，都被完整地保存下来，层叠在一起，没有互相覆盖，只是静静地诉说。它没有沉溺于“故都”的怀旧中，而是聪明地将历史转化为一种生活的质感，成为了雅典人最钟爱的周末度假后院，也成为了寻找“另一个希腊”的旅行者们心中的圣地。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正品味纳夫普利翁，最好安排整整两天一夜。第一天上午抵达后，先从高处俯瞰全局建立空间感，下午沉浸老城细节；第二天清晨留给最精华的城堡探索，午后享受海滨时光。建议在日出前后开始第一天的行程，这时光线柔和，游客稀少，你能看到小镇最真实苏醒的模样。整体节奏宜慢不宜快，核心在于“游荡”和“沉浸”，多给自己一些坐在广场发呆、在咖啡馆观察路人的时间。这样安排的逻辑是由远及近、由宏大到细腻，最后以完全放松的状态收尾，让小镇的韵律彻底渗透你。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>攀爬帕拉米迪城堡的999级台阶是经典体验，但建议上午进行并携带充足饮水，希腊的烈日毫不留情。老城许多小巷坡度很大，请务必穿一双绝对舒适耐磨的平底鞋。警惕港口边过于热情招揽生意的餐馆，往老城内部走两个街区，你能找到性价比更高、本地人更多的地道小馆。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">趁着清晨的凉爽和海面的晨雾，先登上阿克罗纳夫普利亚城堡的遗址平台，看着金色阳光一点点为整个老城的红瓦屋顶和远处海湾涂上色彩</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡下来后迷失在老城错综复杂的棋盘格街道里，用手抚摸那些色彩斑斓的威尼斯建筑外墙，寻找阳台上盛开的天竺葵与精致的铁艺浮雕</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在宪法广场边的传统糕点店买一份裹着厚厚糖粉的“卢库马德斯”希腊甜甜圈，坐在长椅上边吃边看当地人来来往往</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">午后花几欧元搭乘小木船登上布尔齐岛的海上要塞，沿着城墙走一圈，想象威尼斯水手当年在此守望的孤独</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">日落前一定要沿着海滨步道从老港口漫步至阿纳菲广场，看夕阳把对岸的帕拉米迪城堡和整个天空点燃</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">第二天起个大早（或打车）去征服帕拉米迪城堡，在清晨的寂静中独自穿行于七座堡垒之间，俯瞰宛如模型般的全景</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡下来后参观纳夫普利翁考古博物馆，看看从附近梯林斯等遗址出土的珍宝，为眼前的美景补上跨越千年的历史注脚</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后的时光留给一家能看见海的咖啡馆，什么都不做，只是喝着弗雷普冰咖啡，听钟声和海浪声为你的旅程画上休止符</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 帕拉米迪城堡最高处东北角堡垒的雉堞旁</h4>
                  <p className="text-sm text-gray-700">日出后一小时，以古老的炮口为前景框架，拍摄山下老城建筑群沐浴在金色晨光中、并与深蓝色海湾形成绝妙色彩对比的宏大全景</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 布尔齐岛要塞朝向东侧老城的城墙根</h4>
                  <p className="text-sm text-gray-700">日落前半小时，使用长焦镜头压缩空间，捕捉夕阳将老城建筑染成暖橘色、而海上要塞剪影冷峻孤傲的戏剧性画面</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 老城斯塔西奥努街与科米努街交叉口的弧形楼梯</h4>
                  <p className="text-sm text-gray-700">晴朗日子的正午，阳光直射时，利用两侧明黄色与淡粉色墙面的反射光，拍摄人物走上洒满光斑的阶梯的生动场景</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 阿克罗纳夫普利亚城堡下方的观景平台</h4>
                  <p className="text-sm text-gray-700">蓝调时刻（日落后20分钟内），架起三脚长曝光，拍摄老港口船只灯光初亮、布尔齐岛轮廓与深紫色天空倒映在如镜海面上的宁静夜景</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 希腊的日光在上午十点后到下午四点前都非常强烈且生硬，适合拍摄建筑细节但不太适合人像，人像黄金时间在日出后和日落前的一小时。飞无人机需格外谨慎，帕拉米迪城堡和布尔齐岛周边是明确的禁飞区。当地人对于被拍摄通常很友善，但拍摄店铺或老人时，一个微笑和简单的手势征询会是很好的礼貌。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">历史沉浸之选</h4>
                  <p className="text-sm text-blue-800">住在老城中心一栋经过精心修复的威尼斯时期豪宅里，房间有裸露的古老石墙和木横梁，清晨推开百叶窗就能看到教堂钟楼和海鸥</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计师精品之选</h4>
                  <p className="text-sm text-green-800">由传统海绵仓库改造的极简风格精品酒店，将纯白美学与原始岩石结合，拥有一个可以眺望帕拉米迪城堡的无边泳池，时髦到骨子里</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">家庭温馨之选</h4>
                  <p className="text-sm text-yellow-800">坐落在老城安静一隅的家庭式公寓，带有一个种满柠檬树的小庭院，主人会为你准备好传统的希腊早餐，并热情分享只有当地人才知道的小秘密</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">奢华度假之选</h4>
                  <p className="text-sm text-purple-800">位于小镇外宁静海湾旁的五星级度假村，拥有私人沙滩和顶级水疗，适合在密集的历史探索后，给自己一个彻底放松的海滨夜晚</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿通常需要提着行李走一段石板路，且停车位极为稀缺，自驾者最好选择提供专属停车场或代客泊车的酒店。七月和八月的周末房源极其紧张，价格也最高，五月、六月和九月是体验更优、性价比更高的理想时段。住在老城内虽然略贵，但能真正体验入夜后和清晨游客散去时那份独占古城的宁静，这份体验绝对值回房价。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开纳夫普利翁好些天了，但闭上眼睛，那种混合着海盐、咖啡和古老石头的气味仿佛还在鼻尖。它不像雅典的卫城那样，以绝对的崇高和残缺之美震慑你；也不像圣托里尼，用蓝与白的纯粹明信片画面征服你。纳夫普利翁的好，是慢热型的，是浸润式的。它邀请你住下来，走过它的晨昏，在它的广场上喝一杯咖啡，和卖香料的老奶奶微笑点头。然后你会发现，历史在这里不是被封存在玻璃罩里的标本，而是活着的气息，是阳台上晾晒的床单，是咖啡馆里老人们争论政治的嘈杂。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求效率和打卡的世界里，纳夫普利翁固执地保持着另一种节奏。它提醒我们，旅行的意义有时不在于看了多少，而在于感受到了多少。它是一把钥匙，帮你打开一扇理解现代希腊何以成为今天的希腊的大门。这里没有神话里的奥林匹斯众神，却有一群为独立和自由奋斗过的鲜活灵魂；这里没有举世无双的单一地标，却有一整座可以走入、触摸、并与之共同呼吸的露天博物馆。如果你也厌倦了浮光掠影，渴望一次有温度、有深度、能真正走进一个地方灵魂的旅行，那么请一定来纳夫普利翁。它不会尖叫着吸引你的注意，只会用它那爱琴海般的深邃与温柔，将你静静包围，然后，从此住进你的心里。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
