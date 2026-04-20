import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫利沃斯 Molyvos｜爱琴海悬崖上的千年石头童话镇 - 最佳欧洲景点',
  description: '车子转过最后一个山弯，莫利沃斯就这么毫无预警地撞进眼里。那一刻，你会忘记所有关于“明信片风景”的陈词滥调。它不像是在海里，更像是从海底生长出来的一座石头森林，顺着陡峭的山坡，一级一级，无比坚定地向上攀爬，直到山顶那座赭石色的城堡。空气里有种独特的味道——是咸腥的海风混合着百里香与松针被烈日炙烤后的干...',
}

export default function MolyvosTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '莫利沃斯（依山傍海的石头城）', href: '/attractions/molyvos-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫利沃斯（依山傍海的石头城）・Molyvos・希腊・莱斯沃斯岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子转过最后一个山弯，莫利沃斯就这么毫无预警地撞进眼里。那一刻，你会忘记所有关于“明信片风景”的陈词滥调。它不像是在海里，更像是从海底生长出来的一座石头森林，顺着陡峭的山坡，一级一级，无比坚定地向上攀爬，直到山顶那座赭石色的城堡。空气里有种独特的味道——是咸腥的海风混合着百里香与松针被烈日炙烤后的干燥香气，还有远处飘来的、若有若无的烤章鱼和橄榄油的味道。
走近了，才会发现这座“石头城”的肌理。脚下的路不是路，是数百年来被无数鞋底打磨得温润发亮的巨大鹅卵石，在正午的阳光下泛着象牙白的光泽，缝隙里探出顽强的小草。两旁的石屋紧紧挨着，墙面是那种饱经风霜的暖灰色，每一块石头都仿佛有自己的故事。深蓝色的木门和窗棂是唯一的浓烈色彩，窗台上必定有一盆盛开的九重葛，那紫红色泼辣又艳丽，和蓝色的海洋与天空形成最希腊的撞色。你耳边是慵懒的——海浪永恒地、轻柔地拍打着码头礁石，发出“哗……沙……”的催眠节奏；巷子深处传来叮叮当当的声响，是店主在布置餐桌的银器；还有头顶上，松树在微风里沙沙作响，像是这座古老城镇平稳的呼吸。
这里最动人的，是它仍然“活着”。你看到的不是景区，而是一个鲜活的社区。清晨，渔船的引擎声会叫醒港口，穿着胶皮围裙的老渔夫在整理银光闪闪的渔获。主妇们提着草编篮子，在石板坡道上不紧不慢地走着，去熟悉的店铺买面包和橄榄。下午的酷热时分，整个小镇陷入一种猫一样的静谧，只有知了在声嘶力竭地唱着歌。等到日头西斜，魔力就来了。金红色的光芒像蜂蜜一样流淌过每一栋房子、每一扇窗，整个山坡被点燃，变成了温暖的金色和粉色。咖啡馆和餐馆的灯光逐一亮起，人们的谈笑声、玻璃杯的碰撞声、音乐声渐渐弥漫开来，生活从室内流淌到了室外。在这里，历史不是被锁在玻璃柜里的展品，它就是每天推开的那扇吱呀作响的木门，是阳台上晒着的雪白床单，是空气中永远飘散着的咖啡香。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子转过最后一个山弯，莫利沃斯就这么毫无预警地撞进眼里。那一刻，你会忘记所有关于“明信片风景”的陈词滥调。它不像是在海里，更像是从海底生长出来的一座石头森林，顺着陡峭的山坡，一级一级，无比坚定地向上攀爬，直到山顶那座赭石色的城堡。空气里有种独特的味道——是咸腥的海风混合着百里香与松针被烈日炙烤后的干燥香气，还有远处飘来的、若有若无的烤章鱼和橄榄油的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，才会发现这座“石头城”的肌理。脚下的路不是路，是数百年来被无数鞋底打磨得温润发亮的巨大鹅卵石，在正午的阳光下泛着象牙白的光泽，缝隙里探出顽强的小草。两旁的石屋紧紧挨着，墙面是那种饱经风霜的暖灰色，每一块石头都仿佛有自己的故事。深蓝色的木门和窗棂是唯一的浓烈色彩，窗台上必定有一盆盛开的九重葛，那紫红色泼辣又艳丽，和蓝色的海洋与天空形成最希腊的撞色。你耳边是慵懒的——海浪永恒地、轻柔地拍打着码头礁石，发出“哗……沙……”的催眠节奏；巷子深处传来叮叮当当的声响，是店主在布置餐桌的银器；还有头顶上，松树在微风里沙沙作响，像是这座古老城镇平稳的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最动人的，是它仍然“活着”。你看到的不是景区，而是一个鲜活的社区。清晨，渔船的引擎声会叫醒港口，穿着胶皮围裙的老渔夫在整理银光闪闪的渔获。主妇们提着草编篮子，在石板坡道上不紧不慢地走着，去熟悉的店铺买面包和橄榄。下午的酷热时分，整个小镇陷入一种猫一样的静谧，只有知了在声嘶力竭地唱着歌。等到日头西斜，魔力就来了。金红色的光芒像蜂蜜一样流淌过每一栋房子、每一扇窗，整个山坡被点燃，变成了温暖的金色和粉色。咖啡馆和餐馆的灯光逐一亮起，人们的谈笑声、玻璃杯的碰撞声、音乐声渐渐弥漫开来，生活从室内流淌到了室外。在这里，历史不是被锁在玻璃柜里的展品，它就是每天推开的那扇吱呀作响的木门，是阳台上晒着的雪白床单，是空气中永远飘散着的咖啡香。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫利沃斯（依山傍海的石头城）`} />
                <InfoRow label="英文名称" value={`Molyvos`} />
                <InfoRow label="正式名称" value={`Molyvos`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`莱斯沃斯岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`莱斯沃斯岛北海岸的守护者与象征，一座在拜占庭、热那亚与奥斯曼帝国风云中幸存并繁荣的活态历史博物馆。`} />
                <InfoRow label="建筑特色" value={`从蔚蓝爱琴海面陡然升起、依山层叠而建的奥斯曼风格石头房屋，红瓦屋顶与墨绿松柏交织成完美几何构图。`} />
                <InfoRow label="建筑风格" value={`以奥斯曼时期建筑为主导，融合了拜占庭地基与本地岛屿特色的传统石砌建筑风格。`} />
                <InfoRow label="文化价值" value={`完美体现了爱琴海东北部岛屿文化中希腊本土传统与数百年奥斯曼影响的和谐共生，是一个仍在呼吸的、未被过度博物馆化的社区典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要景点如莫利沃斯城堡开放时间约为夏季（5月-10月）每日 8:30 - 20:00；冬季（11月-4月）开放时间缩短，通常为 8:30 - 15:30，且周一可能闭馆。具体时间可能随季节调整，建议行前在当地旅游网站或信息中心核实。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观莫利沃斯城堡门票约为2-4欧元（具体随季节浮动）。学生、老年人和儿童通常享有折扣。小镇内的教堂和博物馆多为免费或捐赠入场。`} />
              <InfoRow label="地址" value={`Molyvos 811 08, Lesvos, Greece`} />
              <InfoRow label="交通方式" value={`最便捷的方式是先抵达莱斯沃斯岛首府米蒂利尼。从雅典有频繁的航班（约50分钟）和渡轮（约9-12小时，视船型而定）前往米蒂利尼。抵达米蒂利尼后，可以租车自驾前往莫利沃斯，车程约1.5小时，沿途风景绝佳。也可以乘坐KTEL城际巴士，班次有限，每天约3-4班，车程约2小时，需在米蒂利尼中央巴士站购票上车。岛上打车价格较贵。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`莫利沃斯的故事，深深刻在它的石头里。早在古典时代，这里就因地处战略要冲而有人定居，但真正赋予它今天骨架的，是中世纪的动荡。公元14世纪，拜占庭帝国日渐衰微，莱斯沃斯岛成了各方势力争夺的肥肉。最终，热那亚的显赫家族——加提卢西家族，通过联姻获得了统治权。他们看中了这个天然良港和易守难攻的山势，在原有的拜占庭要塞基础上，大兴土木，建造了那座俯瞰全城的雄伟城堡。我们今天看到的城堡主体，就源于那个时代。石墙厚重，塔楼高耸，它不仅是军事堡垒，更是权力与秩序的象征，庇护着山脚下逐渐聚集起来的居民。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，地中海的棋局风云变幻。1453年君士坦丁堡陷落之后，奥斯曼帝国的阴影笼罩了整个爱琴海。1462年，莱斯沃斯岛被奥斯曼土耳其人征服，莫利沃斯也随之进入了长达近五个世纪的奥斯曼时期。令人惊讶的是，这并非一段纯粹毁灭的历史。征服者带来了新的建筑规制和生活方式，但却没有粗暴地抹去一切。你会发现，奥斯曼时期的建筑巧妙地适应了原有的山地地形和气候。那些你着迷的、有着悬挑上层和深色木构的石头房子，正是这个时期的典型产物。它们的设计充满智慧：厚重的石墙用来抵御冬天的严寒和夏日的酷热，窄小的窗户减少热交换，而内部则围绕庭院布局，创造私密荫凉的生活空间。希腊正教的教堂依然存在，只是规模受到限制，而清真寺的宣礼塔也曾加入天际线。这段历史留下了复杂的遗产，不是非黑即白的对抗，而是一种在张力下的共存与融合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪希腊独立战争后，莱斯沃斯岛于1912年终于回归希腊。但莫利沃斯命运最大的转折点之一，却是1922年的小亚细亚灾难。随着希土人口交换，成千上万来自安纳托利亚海岸，特别是土麦那（今伊兹密尔）等地的希腊难民涌入莱斯沃斯岛。许多人被安置在莫利沃斯。这些难民带来了不同的技能、食谱和文化记忆，极大地丰富了本地社区。你如今在餐馆里吃到的很多带有小亚细亚风味的菜式，可能就源于那个时期。小镇的空间也被重新填充和利用，一度显得拥挤，但也注入了新的活力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪中后期，当希腊开始发展旅游业时，莫利沃斯凭借其无与伦比的风景，很早就被游客发现。但幸运的是，当地社区和当局似乎达成了一种默契：发展，但不能牺牲灵魂。很早就出台了严格的建筑保护法规，规定所有新建或修缮都必须使用传统的石材和瓦片，保持原有的色彩和风格。旅游业没有吞噬这里，而是融入其中。很多精致的精品酒店和餐馆，本身就是由祖传的老石屋改造而成。这座悬崖上的石头城，就这样躲过了大规模商业化开发的洪流，守住了它那份浑然天成的、略带野性的优雅。它的历史不是断代的，而是一层一层叠加起来的，就像它山坡上的房子一样，拜占庭的地基，热那亚和奥斯曼的墙体，现代希腊的窗棂与鲜花，共同组成了今天这个让人一眼万年的模样。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要充分感受莫利沃斯的魔力，建议安排整整一天的时间。最佳节奏是从山顶开始，缓缓向下，最终融入海滨的慵懒氛围。强烈建议前一晚住下，第二天清晨开始探索。早上八点左右是黄金时间，阳光柔和，游客未至，你能看到小镇苏醒的样子。先从城堡开始，居高临下把握全局，然后沿着迷宫般的石板主巷向下漫游，探寻沿途的教堂、小店和风景绝佳的角落。中午前后可以抵达港口，在树荫下的海鲜馆享用漫长的午餐。下午则属于放松——要么找个海滨咖啡馆发呆，要么勇敢地跳进爱琴海清澈的海水里。傍晚时分，再次爬上一处高点（比如城堡下方的平台），等待那场举世无双的日落盛宴。这样的安排顺应了地势，省力且能体验到小镇从宁静到热闹再到浪漫的全天韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的平底鞋，这里的石板路美丽但凹凸不平，且坡度很大，高跟鞋会是一场灾难。
夏季正午阳光极其猛烈，毫无遮挡，务必戴好帽子、涂抹高倍数防晒霜，并尽量在午后寻找荫凉处活动或安排休息。
警惕港口过于热情招揽客人的餐馆，通常品质好的老店更低调；点海鲜前务必问清价格，一般是按公斤计价。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着清晨的凉爽与清净，从镇子低处沿着蜿蜒陡峭的卡拉尼主石阶一路向上攀登，脚步声在静谧的巷弄里回荡，感受身体与这座山城最初的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达山顶的莫利沃斯城堡，用手触摸那些被海风侵蚀出孔洞的厚重墙体，站在雉堞边让视野豁然开朗，将红瓦屋顶的海洋、墨绿色的松林与宝石蓝的爱琴海尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡西门出来，毫不犹豫地拐进那条没有名字的、最窄的石板小巷，让两侧爬满藤蔓的古老石墙几乎触手可及，追踪从人家厨房飘出的新鲜面包与煮咖啡的香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到隐藏在半山腰的圣潘捷列伊蒙小教堂，推开那扇斑驳的木门，在昏暗烛光和圣像的注视下静坐片刻，感受超越时空的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在快到港口的主商业街挑一家有露台的传统咖啡馆，点一杯弗雷普冰咖啡，像当地人一样坐着观察往来行人，听周围桌子上的希腊语闲聊声如音乐般流淌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午时分下山至老港口，在那些悬挂着渔网和浮标的家庭餐馆里，用手指着冰柜里当天捕获的最新鲜的鱼获，让老板为你简单炙烤并配上一大份橄榄油淋烤蔬菜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着防波堤漫步至灯塔，然后转身，以海平面的视角重新仰望那座仿佛从童话里直接生长出来的、层叠错落的石头山城。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前半小时，爬上港口西侧山坡的任一观景平台或餐厅露台，找好座位，屏息凝神等待夕阳将整个莫利沃斯从石头灰染成金子，再烧成一片醉人的玫瑰红。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老港口渔船侧影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨七点或傍晚日落时分，站在港口东侧的礁石上，以停泊的彩色小渔船为中景，背后是沐浴在金色光线中层层叠叠的石头房子和城堡，构图饱满富有生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`卡拉尼石阶纵深透视`}</h4>
                  <p className="text-sm text-gray-700">{`上午九点左右的阳光能斜射进石阶巷子，站在中段向上或向下拍摄，利用两侧的石墙形成自然的引导线，捕捉行人走过时光影交错、富有几何美感的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时登上城堡最高平台，使用广角镜头，将前景的城堡残垣、中景无数红瓦屋顶的纹理与远景无垠的爱琴海和对岸的土耳其轮廓一同纳入画面，气势恢宏。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小巷门窗特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点后，阳光变得柔和，专注寻找那些有着亮蓝色木门、窗台上盛开九重葛的石头墙角，利用光影突出石头的质感和色彩的对比，拍摄充满细节和故事感的局部。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄阳台或院落内景前最好征得同意，避免将镜头直接对准屋内或正在休息的当地人。`}</li>
                <li>• {`爱琴海的光线在日出后一小时和日落前一小时最为迷人，色彩饱和度高且柔和，是创作的黄金时间，中午顶光强烈，不适合拍摄人像或追求质感的风景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`港口边由老船长房子改造的家庭旅馆，房间简单干净带有小阳台，早晨在嘈杂的渔市声响和咖啡香中醒来，老板会给你手绘一张只有本地人才知道的小众海滩地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经典体验`}</h4>
                  <p className="text-sm text-green-800">{`半山腰上一栋拥有300年历史的奥斯曼风格石屋民宿，内部保留着原始的石头拱顶和木梁，但配备了现代化的舒适设施，私密的花园露台正对海湾，是欣赏日落的绝佳私人包厢。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计格调`}</h4>
                  <p className="text-sm text-yellow-800">{`山顶城堡下方新近由几位艺术家联手打造的精品酒店，每间客房都独一无二，融合了极简美学与古董家具，无边泳池仿佛与远处的海平面连成一体，适合追求设计感的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华隐居`}</h4>
                  <p className="text-sm text-purple-800">{`位于小镇外三公里处一处静谧橄榄园中的奢华度假村，独栋石屋别墅带有私人泳池，提供绝对的隐私与宁静，可以预约在数百年的橄榄树下做一场星空下的水疗。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-9月）是绝对旺季，务必提前数月预订，尤其是那些热门且有特色的石屋民宿，很可能提前一年就被订光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在山上风景绝佳但需要每天爬坡，考虑体力；住在港口方便热闹但可能略吵，根据你的旅行节奏和偏好权衡选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多传统民宿不提供电梯，且停车可能在山脚下，携带大件行李会有些挑战，建议轻装简行或提前联系住宿确认搬运协助。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莫利沃斯好些天了，闭上眼睛，手掌似乎还能记起那些晒得发烫的石头护栏的触感，鼻腔里仿佛还萦绕着混合着松香、海盐与 oregano 的独特气味。这座小镇教给我的，远不止于风景的壮丽。它让我看到，历史并非沉重的纪念碑，而可以是一种轻盈的、仍在继续生长的日常。那些经历过帝国更迭、战争迁徙的石头，如今承载的是晾晒的床单、晚餐的炊烟和孩童的笑语。这种韧性，这种将过去深深融入当下呼吸的能力，比任何博物馆都更让人震撼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求效率、追求“网红同款”的今天，莫利沃斯固执地保持着自己的节奏。它的美，需要你用脚步去丈量那些陡峭的坡道，需要你坐下来浪费一整个下午看光影移动，需要你愿意迷路于那些看似相同却又各有灵魂的小巷。它不讨好你，只是从容地存在着。正是这份从容，让每一个到访的旅人，得以从自己紧绷的日常中抽离出来，重新感受到时间原本应该有的、缓慢而珍贵的质地。如果你也渴望一场不仅仅是用眼睛看，更是用全身心去感受和呼吸的旅行，那么，请一定要来这个爱琴海悬崖边的石头童话镇。它会让你相信，有些地方，真的可以抵御时间的洪流，守护住世间最朴素、也最动人的生活诗意。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/corfu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corfu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦里亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monemvasia-fortress-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫奈姆瓦夏隐秘之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monemvasia</p>
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
