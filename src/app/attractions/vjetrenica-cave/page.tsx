import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '风洞 Vjetrenica Cave｜探秘波黑地下王国，在永恒冷风中邂逅珍稀盲螈 - 最佳欧洲景点',
  description: '还没见到洞口，你先感觉到它。在波黑南部那片被太阳烤得发烫的、布满灰色岩石和低矮灌木的山丘之间，一股清晰、稳定、带着泥土腥味的凉风，像一条无形的河，迎面朝你涌来。这就是“风洞”名字的由来。沿着小路走近，那个不起眼的、被藤蔓半掩的石灰岩洞口，仿佛大地的一个呼吸孔。温度瞬间降了至少十度，那种凉爽不是空调的',
}

export default function VjetrenicaCavePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '风洞', href: '/attractions/vjetrenica-cave' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`风洞・Vjetrenica Cave・波黑（波斯尼亚和黑塞哥维那）・黑塞哥维那-内雷特瓦州（靠近小镇扎瓦拉）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还没见到洞口，你先感觉到它。在波黑南部那片被太阳烤得发烫的、布满灰色岩石和低矮灌木的山丘之间，一股清晰、稳定、带着泥土腥味的凉风，像一条无形的河，迎面朝你涌来。这就是“风洞”名字的由来。沿着小路走近，那个不起眼的、被藤蔓半掩的石灰岩洞口，仿佛大地的一个呼吸孔。温度瞬间降了至少十度，那种凉爽不是空调的刺骨，而是带着湿润水汽的、属于地心深处的寒意。外面世界的蝉鸣鸟叫忽然被吸走了，只剩下风声，永恒不绝的、低沉的“呼呼”声，从黑暗深处传来，邀请你，也警告你。
戴上安全帽，打开头灯，跟着向导踏进那片黑暗。光线所及之处，世界变得光滑而怪异。千万年凝结的钟乳石如凝固的瀑布般垂下，石笋从地面顽强生长，有些已经和钟乳石相接，形成了坚实的石柱。水珠从洞顶滴落，在寂静中发出清晰的“嗒、嗒”声，落在小水洼或你的肩膀上。空气里有种独特的味道——混合着岩石的矿物质气息、流动地下水的清冽，还有一种难以言喻的、属于封闭生态系统的“生”的气味。最神奇的是，向导会关掉所有灯光，让你在绝对的黑暗中站立一分钟。那一刻，风声被无限放大，你感觉自己漂浮在时间之外，地球的脉搏就在耳边。
而这个洞穴的灵魂，是那些看不见光的居民。在手电筒光束小心翼翼地扫过一处幽静的水潭时，你可能会看到它——一条苍白、细长、像小蜥蜴般的生物，正缓缓游过。这就是波斯尼亚盲螈，一种只生活在此类纯净地下水域的活化石。它们没有眼睛，皮肤近乎透明，能看见内部粉色的器官。它们在这里生活了数百万年，与世隔绝，进化成最适应永恒黑暗的模样。看着它们，你会震撼于生命的坚韧与奇特。这个洞不是冰冷的景观，它是一个完整、脆弱、呼吸着的生命系统。当地向导谈起盲螈时，语气里总有股近乎神圣的保护欲，你会明白，对这里的人而言，风洞不仅是景点，更是他们土地深处跳动的心脏，一个需要世代守护的秘密。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还没见到洞口，你先感觉到它。在波黑南部那片被太阳烤得发烫的、布满灰色岩石和低矮灌木的山丘之间，一股清晰、稳定、带着泥土腥味的凉风，像一条无形的河，迎面朝你涌来。这就是“风洞”名字的由来。沿着小路走近，那个不起眼的、被藤蔓半掩的石灰岩洞口，仿佛大地的一个呼吸孔。温度瞬间降了至少十度，那种凉爽不是空调的刺骨，而是带着湿润水汽的、属于地心深处的寒意。外面世界的蝉鸣鸟叫忽然被吸走了，只剩下风声，永恒不绝的、低沉的“呼呼”声，从黑暗深处传来，邀请你，也警告你。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`戴上安全帽，打开头灯，跟着向导踏进那片黑暗。光线所及之处，世界变得光滑而怪异。千万年凝结的钟乳石如凝固的瀑布般垂下，石笋从地面顽强生长，有些已经和钟乳石相接，形成了坚实的石柱。水珠从洞顶滴落，在寂静中发出清晰的“嗒、嗒”声，落在小水洼或你的肩膀上。空气里有种独特的味道——混合着岩石的矿物质气息、流动地下水的清冽，还有一种难以言喻的、属于封闭生态系统的“生”的气味。最神奇的是，向导会关掉所有灯光，让你在绝对的黑暗中站立一分钟。那一刻，风声被无限放大，你感觉自己漂浮在时间之外，地球的脉搏就在耳边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这个洞穴的灵魂，是那些看不见光的居民。在手电筒光束小心翼翼地扫过一处幽静的水潭时，你可能会看到它——一条苍白、细长、像小蜥蜴般的生物，正缓缓游过。这就是波斯尼亚盲螈，一种只生活在此类纯净地下水域的活化石。它们没有眼睛，皮肤近乎透明，能看见内部粉色的器官。它们在这里生活了数百万年，与世隔绝，进化成最适应永恒黑暗的模样。看着它们，你会震撼于生命的坚韧与奇特。这个洞不是冰冷的景观，它是一个完整、脆弱、呼吸着的生命系统。当地向导谈起盲螈时，语气里总有股近乎神圣的保护欲，你会明白，对这里的人而言，风洞不仅是景点，更是他们土地深处跳动的心脏，一个需要世代守护的秘密。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`风洞`} />
                <InfoRow label="英文名称" value={`Vjetrenica Cave`} />
                <InfoRow label="正式名称" value={`Vjetrenica Cave`} />
                <InfoRow label="国家" value={`波黑（波斯尼亚和黑塞哥维那）`} />
                <InfoRow label="城市" value={`黑塞哥维那-内雷特瓦州（靠近小镇扎瓦拉）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最重要的生物喀斯特洞穴之一，以其独特、稳定而强大的洞穴风生态系统和史前生物遗存闻名于世。`} />
                <InfoRow label="建筑特色" value={`并非人造建筑，但其天然洞道错综复杂如迷宫，拥有宏伟的地下大厅、精致如艺术品般的钟乳石群和清澈见底的地下湖泊与溪流。`} />
                <InfoRow label="建筑风格" value={`历经数百万年水流溶蚀塑造的喀斯特地质奇观，是自然之力的“建筑杰作”。`} />
                <InfoRow label="文化价值" value={`一个活着的自然实验室与档案馆，不仅记录着地球的气候变迁史，也承载着当地牧羊人几个世纪的传说与战时避难记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年4月1日至10月31日：每天上午9点至下午5点，最晚入洞时间为下午4点。每年11月1日至次年3月31日：仅周末及节假日开放，时间为上午10点至下午3点，且开放区域可能受限。洞内参观必须由持证向导带领，散客通常需要等待拼团，团队游览每小时整点出发。重大宗教节日（如复活节、圣诞节）可能全天关闭，建议行前务必在官网或通过电话确认。`} />
              <InfoRow label="门票价格" value={`成人票：15波黑马克（约合7.5欧元）。学生票（需出示有效国际学生证）：10波黑马克。6至15岁儿童：8波黑马克。6岁以下儿童免费。门票费用已包含专业向导服务。只接受当地货币（波黑马克）现金支付，洞口附近无ATM，请在抵达前于主要城市（如莫斯塔尔）兑换好现金。`} />
              <InfoRow label="地址" value={`Vjetrenica, 88370 Zavala, Bosnia and Herzegovina`} />
              <InfoRow label="交通方式" value={`风洞位于偏远的波黑乡村，自驾是最灵活的方式。从莫斯塔尔（Mostar）出发，沿M17公路向南朝梅特科维奇（Metković）方向行驶约1小时，转入乡村小路，跟着棕色旅游指示牌“Vjetrenica”行驶即可抵达，全程约80公里，路况尚可但后半段山路弯曲。若使用公共交通：从莫斯塔尔巴士站乘坐前往拉夫诺（Ravno）或杜布罗夫尼克（Dubrovnik，克罗地亚）方向的长途巴士，在扎瓦拉（Zavala）路口下车，但班次极为稀疏（每天仅1-2班），且下车后仍需步行约4公里崎岖山路才能到达洞口，强烈不建议。无火车线路。最稳妥方案是在莫斯塔尔或特雷比涅（Trebinje）租车前往，并预留充足的导航和寻找时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`风洞的故事，远比人类历史久远。大约一千五百万年前，迪纳里克阿尔卑斯山脉隆起，富含石灰岩的地层被地下河水系日夜不停地侵蚀、溶解，雕刻出了这个复杂网络的雏形。但让它成为传奇的，是时间封存于此的“信件”。在洞口区域的沉积物中，考古学家发现了洞熊、巨型山猫甚至古犀牛的骨骼化石。想象一下，在冰河时期，这个吹着暖风的洞口（当时气流方向可能与现在相反），曾是这些巨兽避寒的温暖港湾，它们的骨骸在泥土中沉睡了上万年，直到被好奇的人类发现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类与风洞的初次接触，可以追溯到新石器时代。附近的悬崖上就有古老的岩画，而洞口平坦处发现的陶器碎片表明，早期居民可能曾将这里作为临时居所或祭祀地点。然而，在漫长中世纪，它更多是当地牧羊人和旅行者口中的神秘传说。他们敬畏那终年不息的风，认为那是地下巨龙或精灵的呼吸，夏天来此避暑，冬天则避开这个“吐出寒气的魔口”。关于洞穴深处藏有宝藏或通往大海的通道的故事，在村庄里代代相传。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的科学探索始于19世纪末奥匈帝国时期。1899年，地质学家和生物学家开始系统性地测绘洞穴，并首次科学描述了那种奇特的“无眼蝾螈”——盲螈。随后的几十年，来自欧洲各地的探险队带着更先进的装备深入探索，绘制地图，发现了新的支洞和壮观的大厅。风洞的名字开始出现在学术论文中。但平静的研究被二战打破。这片土地成了激烈的战场，而风洞因其隐蔽和恒温，成了附近村庄居民躲避战火的天然防空洞。在那些黑暗的日子里，洞穴深处回响的不是风声，而是压抑的交谈、孩子的哭泣和对和平的祈祷。石壁上或许还留有那个时代的烟熏痕迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战后的南斯拉夫时期，风洞被正式开发为旅游景点，铺设了步道和灯光（早期是破坏生态的白炽灯，后来被更换）。它成为了学校郊游和国内旅游的目的地。然而，1990年代波黑战争的爆发再次让一切陷入停滞。幸运的是，洞穴本身没有遭到严重破坏。战争结束后，新一代的守护者——通常是当地的自然爱好者或生物学学生——接过了向导的职责。他们不再只是讲解地质，而是 passionately 地讲述盲螈的保护、地下生态的脆弱。他们知道，每一盏不该开的灯，每一个乱扔的垃圾，都可能扰乱这个历经百万年才形成的平衡。今天的风洞，是一个处于谨慎保护下的自然圣地，它的历史不仅是地质史和发现史，更是一部人与自然关系不断演进的微型史诗。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一次完美的风洞之旅，建议安排在上午10点前抵达。这样你能避开可能出现的下午旅游小高峰（虽然这里从来不会人山人海），并且有充足的时间在向导带领下，以舒缓、沉浸的节奏探索。整个带向导的游览大约持续1.5到2小时，覆盖约1公里的主要参观通道。请务必预留至少3小时的总时间（包括从停车场步行至洞口、等待组队、游览和结束后在周边自然小径散步）。节奏之所以要慢，是因为这里不适合匆匆打卡。你需要时间让眼睛适应昏暗，让感官打开，去聆听风声、水滴声，去仔细观察岩壁的纹理和水中的生命。快，是对这个慢速世界的一种冒犯。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿防滑的封闭式鞋子，洞内步道潮湿，部分地方可能有湿滑的苔藓。即使外面酷热，洞内温度也常年恒定在10度左右，必须带一件防风外套或抓绒衣。严格跟随向导，绝不擅自离开指定步道，既为安全，也为保护脆弱的沉积物和生物。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在洞口开阔地静静站立几分钟，让皮肤感受那标志性的、从黑暗深处源源不断涌出的强劲冷风，完成从燥热外部世界到地下秘境的“仪式性过渡”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着向导的头灯光束踏入主通道，最初的几百米让眼睛完全适应黑暗，并开始辨认各种钟乳石、石笋和石幔在光影下的奇幻形状。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到第一个开阔的地下大厅，停下来听向导讲述洞熊化石在这里被发现的故事，想象远古巨兽在此栖息的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着加固的木制步道蜿蜒向下，靠近一条清澈见底的地下溪流，屏住呼吸寻找在水中或岸边岩石上静止不动的、苍白如玉的盲螈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“音乐厅”区域，向导可能会敲击某些薄如刀刃的石幔，让你聆听它们发出的不同音高的清脆声响，这是地球的编钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达参观路线的折返点——一个较为深邃的水潭边，关闭所有光源一分钟，在绝对黑暗与永恒的风声中，体验一次前所未有的感官清零。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程时选择步道的另一侧行走，你会发现从不同角度观察，那些熟悉的岩石会呈现出全新的、令人惊讶的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出洞口，重新被阳光和暖空气拥抱，回头再看那个幽深的入口，你会觉得仿佛刚从一场深度冥想或时间旅行中归来。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`洞口内外对比`}</h4>
                  <p className="text-sm text-gray-700">{`站在洞口内侧边缘，以洞外洒入的阳光和绿意作为背景，拍摄同伴剪影或自己走向光明的背影，明暗对比极具戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`地下溪流微距`}</h4>
                  <p className="text-sm text-gray-700">{`在向导指示的安全地点，用手机或相机微距模式，耐心等待并拍摄水下盲螈的静态特写，注意关闭闪光灯，可利用头灯或手电的侧光勾勒其半透明的身体。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“大教堂”厅全景`}</h4>
                  <p className="text-sm text-gray-700">{`在最大的洞厅，将相机置于地面或使用三脚架（如果携带），进行长时间曝光（数秒），捕捉头灯扫过时穹顶和石柱的宏大与神秘感， RAW格式能保留更多暗部细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`纹理抽象画`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头贴近岩壁，聚焦于水流形成的层层叠叠、如丝绸又如大脑沟回般的石灰华沉积纹理，拍出极具质感的抽象自然艺术照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`严禁使用闪光灯，强光会严重干扰并可能伤害洞穴生物（尤其是盲螈）的眼睛和生物节律。高感光度（ISO）和大光圈镜头是洞内摄影的好帮手，但请接受这里的昏暗本质，有时用眼睛和心记住的画面，比任何照片都更清晰。尊重自然，不为了构图而触碰或移动任何东西。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村质朴民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在洞穴附近村庄如扎瓦拉的石头老屋民宿，主人会端上自家酿的果酒和熏肉，夜晚没有光污染，银河清晰可见，只有风声与犬吠作伴。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`莫斯塔尔古城沉浸`}</h4>
                  <p className="text-sm text-green-800">{`返回历史名城莫斯塔尔，住在老桥旁的精品酒店，白天探索风洞的自然奇迹，晚上则在奥斯曼风格庭院里听着内雷特瓦河的流水声入睡，体验文化与自然的双重洗礼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特雷比涅田园庄园`}</h4>
                  <p className="text-sm text-yellow-800">{`选择位于更南边、充满地中海风情的特雷比涅市郊的庄园酒店，被橄榄园和葡萄园环绕，环境静谧优雅，适合作为探索包括风洞在内的东黑塞哥维那诸多秘境的舒适大本营。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`生态小屋体验`}</h4>
                  <p className="text-sm text-purple-800">{`在波黑与克罗地亚边境附近的森林公园里，寻找仅有几间房的原生态木屋，完全融入自然，白天徒步，晚上在壁炉边读书，安排一天专门拜访风洞。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`风洞周边住宿选择非常有限且基础，追求舒适和便利的旅行者强烈建议以莫斯塔尔或特雷比涅为住宿中心。夏季（7-8月）是波黑旅游旺季，莫斯塔尔住宿紧张，务必提前数月预订。乡村地区住宿多接受现金支付，需提前确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从风洞走出来很久，那地底的风声好像还留在耳朵里。它不像其他那些用辉煌装饰或悲壮历史震撼你的地方，它的力量是内敛的、持续的、关乎本质的。它让你体会到地球是活的，它在呼吸，而这呼吸的一个节奏，就藏在这巴尔干半岛的某座不起眼的山里。当你触摸那冰凉的、还在缓慢生长的钟乳石，当你与那只数百万年来几乎未曾改变的盲螈对视时，你会对“时间”有一种全新的、近乎敬畏的认知。人类的历史在这里不过是薄薄一层灰尘，而生命，在不见天日的环境中，依然找到了它存在和演化的华丽方式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求更快、更亮、更喧嚣的世界，风洞是一个反向的坐标。它邀请你慢下来，在黑暗中待一会儿，去听最原始的声音，去看最本真的生命形态。它不提供简单的视觉盛宴，它提供一种深刻的感官重置和哲学追问。这趟旅程之后，你可能会觉得自己的一部分被那永恒的风吹拂过，变得沉静而清晰。它不仅仅是一个洞穴，它是一个提醒：在我们脚下，在寂静与黑暗之中，依然存在着一个古老、缓慢、却无比坚韧和奇妙的世界。这，正是深度旅行者所追寻的——与世界本质的一次不期而遇。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/blagaj-tekija-dervish-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加伊特基亚（布纳河泉眼的托钵僧修道院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blagaj Tekija</p>
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
