import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡米岛 Symi｜爱琴海上被时光遗忘的调色盘与沉船湾秘境 - 最佳欧洲景点',
  description: '船缓缓驶入峡湾，两旁的青山像沉默的卫兵渐渐合拢，然后，毫无预兆地，一整片糖果色的世界在你眼前轰然铺开。那不是幻觉，是锡米岛的主港——锡米镇。第一眼，你会倒吸一口凉气，仿佛闯进了一个被阳光晒透了的童年梦境。柠檬黄、草莓粉、薄荷绿、鸢尾紫……数百栋新古典主义风格的房屋，沿着陡峭的山坡层层叠叠，精确地排列...',
}

export default function SymiIslandGreecePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '锡米岛', href: '/attractions/symi-island-greece' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡米岛・Symi・希腊・锡米镇 (南爱琴大区)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船缓缓驶入峡湾，两旁的青山像沉默的卫兵渐渐合拢，然后，毫无预兆地，一整片糖果色的世界在你眼前轰然铺开。那不是幻觉，是锡米岛的主港——锡米镇。第一眼，你会倒吸一口凉气，仿佛闯进了一个被阳光晒透了的童年梦境。柠檬黄、草莓粉、薄荷绿、鸢尾紫……数百栋新古典主义风格的房屋，沿着陡峭的山坡层层叠叠，精确地排列成一个完美的半圆形剧场，而湛蓝的爱琴海就是它的舞台。空气里有海盐的清新、晒热了的松树脂香气，还有从某扇敞开的厨房窗户里飘出的、炖煮西红柿和橄榄油的温暖味道。
这里没有汽车的喧嚣，只有毛驴的铃铛声、摩托车偶尔驶过石板路的轻响，以及海浪温柔拍打岸边彩色小渔船“卡拉维”的节奏。港口边的咖啡馆外，老人们在玩着双陆棋，棋子落下发出清脆的“啪嗒”声，混合着希腊语低沉的絮语。你会发现，这座岛的美，不仅仅在于它明信片般的静态景观，更在于它缓慢、古老而真实的生活脉搏。当地人依然在清晨修补渔网，在午后门窗紧闭享受漫长的“梅西姆布利”（午休），生活遵循着太阳和海洋的古老法则。
而锡米岛的魔力，有一半藏在海上。跳上一艘小艇，不过二十分钟，你就会被带到岛上最著名的秘密——圣乔治迪亚萨利欧提斯湾，更多人叫它“沉船湾”。一艘锈迹斑斑的旧货轮静静地搁浅在晶莹剔透的碧绿海水中央，像一尊现代主义的雕塑。当你跳入水中游向它，阳光穿透数米深的海水，在白色的沙底上投下晃动的光斑，小鱼群在你身边闪着银光。这种荒芜之美与生命之活力的奇异并存，会瞬间击中你的心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`船缓缓驶入峡湾，两旁的青山像沉默的卫兵渐渐合拢，然后，毫无预兆地，一整片糖果色的世界在你眼前轰然铺开。那不是幻觉，是锡米岛的主港——锡米镇。第一眼，你会倒吸一口凉气，仿佛闯进了一个被阳光晒透了的童年梦境。柠檬黄、草莓粉、薄荷绿、鸢尾紫……数百栋新古典主义风格的房屋，沿着陡峭的山坡层层叠叠，精确地排列成一个完美的半圆形剧场，而湛蓝的爱琴海就是它的舞台。空气里有海盐的清新、晒热了的松树脂香气，还有从某扇敞开的厨房窗户里飘出的、炖煮西红柿和橄榄油的温暖味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有汽车的喧嚣，只有毛驴的铃铛声、摩托车偶尔驶过石板路的轻响，以及海浪温柔拍打岸边彩色小渔船“卡拉维”的节奏。港口边的咖啡馆外，老人们在玩着双陆棋，棋子落下发出清脆的“啪嗒”声，混合着希腊语低沉的絮语。你会发现，这座岛的美，不仅仅在于它明信片般的静态景观，更在于它缓慢、古老而真实的生活脉搏。当地人依然在清晨修补渔网，在午后门窗紧闭享受漫长的“梅西姆布利”（午休），生活遵循着太阳和海洋的古老法则。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而锡米岛的魔力，有一半藏在海上。跳上一艘小艇，不过二十分钟，你就会被带到岛上最著名的秘密——圣乔治迪亚萨利欧提斯湾，更多人叫它“沉船湾”。一艘锈迹斑斑的旧货轮静静地搁浅在晶莹剔透的碧绿海水中央，像一尊现代主义的雕塑。当你跳入水中游向它，阳光穿透数米深的海水，在白色的沙底上投下晃动的光斑，小鱼群在你身边闪着银光。这种荒芜之美与生命之活力的奇异并存，会瞬间击中你的心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡米岛`} />
                <InfoRow label="英文名称" value={`Symi`} />
                <InfoRow label="正式名称" value={`Symi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`锡米镇 (南爱琴大区)`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座将海洋财富化为建筑艺术，又因时代变迁而悄然隐退的“海绵捕捞之都”。`} />
                <InfoRow label="建筑特色" value={`依山而建、阶梯状排列的威尼斯与新古典主义风格彩绘房屋，构成一座巨大的、面向港湾的露天剧场。`} />
                <InfoRow label="建筑风格" value={`以19世纪新古典主义风格为主，融合了意大利文艺复兴和传统岛屿建筑元素。`} />
                <InfoRow label="文化价值" value={`见证了从古希腊到现代的地中海贸易、航海与手工业变迁，是爱琴海岛屿文化中独特而宁静的一章。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全天开放。主要景点如帕诺米蒂斯修道院开放时间为每日上午8:00至日落，冬季可能缩短至下午4:00关闭。小镇上的店铺和餐馆营业时间遵循希腊节奏，通常上午10点后陆续开门，午休后下午5点再开，直到深夜。渡轮服务旺季（5月至10月）班次频繁，淡季大幅减少，出行前务必查询最新船期。`} />
              <InfoRow label="门票价格" value={`进入锡米岛本身无需门票。参观帕诺米米蒂斯修道院免费，但欢迎捐赠以支持维护。岛上的考古博物馆门票约3欧元。所有海滩均免费向公众开放。`} />
              <InfoRow label="地址" value={`Symi 856 00, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗得岛的迪阿格拉斯机场。从机场打车或乘坐公交前往罗得岛市中心的老港，车程约40分钟。从罗得岛老港搭乘渡轮前往锡米岛是唯一方式。快船航程约50分钟至1小时，传统渡轮约1.5至2小时。旺季每天有多个班次（建议提前在Ferryhopper或当地旅行社网站购票），淡季可能每天仅1-2班。船会直接驶入锡米岛那令人屏息的新古典主义港口。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡米的故事，远比它明媚的外表要厚重和曲折。早在古希腊神话时代，它就以“三头神”的信仰而闻名。历史上，它先后被罗马人、拜占庭帝国、圣约翰骑士团和奥斯曼土耳其帝国统治。然而，真正塑造了锡米黄金时代与独特身份的，是海洋深处一种不起眼的生物——海绵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪到20世纪中叶，是锡米作为“海绵捕捞之都”的鼎盛时期。岛上的男人们是地中海最富传奇色彩的潜水者。他们乘坐着优雅的木制“海绵船”，仅凭一口气潜入深达数十米的海底，用最原始的方式采集海绵。这项极其危险却利润丰厚的工作，为锡米带来了巨大的财富。你眼前这些色彩柔和、装饰着精美浮雕和铸铁阳台的豪宅，几乎全部建于那个时期。富有的船主们从罗得岛、甚至远赴意大利学习建筑图纸，将最时髦的新古典主义风格带回了家乡，依山建起了这座令人惊叹的“海上剧场”，以此炫耀他们的成功和对美的追求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极而衰。20世纪50年代，先是人造海绵的出现冲击了市场，而后一场毁灭性的海绵传染病几乎抹杀了整个行业。与此同时，希腊与土耳其之间紧张的政治关系也使得传统渔场难以进入。几乎在一代人的时间里，锡米的繁荣迅速凋零。大量人口外流，许多华丽的房屋被遗弃，门窗紧闭，颜色剥落。岛屿陷入了一种被时光冻结的沉睡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到近几十年，旅游业的春风吹醒了这座睡美人岛。但锡米是幸运的，它没有选择成为又一个喧闹的派对之岛。前来的游客大多被它的宁静和历史感所吸引。岛民们小心翼翼地修复着祖辈留下的老房子，将它们变成家庭旅馆和餐馆，但整个岛屿的节奏依然缓慢。那些关于海绵潜水英雄的古老故事，依然在港口咖啡馆的闲谈中被反复讲述。锡米没有试图抹去那段起伏的历史，反而将辉煌与寂寥共同酿成了它今日醇厚、略带忧郁的独特气质，让每一个到访者，都能在五彩的墙壁背后，触摸到一段真实的、属于整个爱琴海的航海史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味锡米，你需要至少一整天，并放慢所有节奏。建议搭乘最早一班从罗得岛出发的渡轮（约早上8点），这样你就能在游客大军尚未登岛时，独享清晨宁静的港口和柔和的光线。整体游览可以分成上午探索山城与修道院、中午沉浸式小镇漫游、下午出海探访海湾与海滩三个部分。这样安排既能覆盖人文与自然精华，又能避开最灼热的正午阳光进行户外登山。傍晚时分务必留给自己，坐在港口看夕阳将整个小镇染成金色，那将是全天的高潮。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`登山台阶很多且有些陡峭，务必穿一双绝对舒适防滑的鞋子，并带上充足的饮用水。岛上小猫众多且不怕人，请勿随意喂食，保持友好距离即可。许多小巷非常安静，是私人住宅区域，游览时请保持低声，尊重当地居民的隐私。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早趁渡轮刚抵达，人潮还未散开时，沿着港口左侧的阶梯拾级而上，让自己淹没在五彩房屋构成的迷宫里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`气喘吁吁地登上数百级台阶后抵达山顶的卡利斯特拉塔区，在宁静的广场教堂边回望，整个港口像一幅打开的立体画册铺在脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完帕诺米蒂斯修道院后，不乘公交，选择沿着古老的“卡拉维利米奥纳”驴道徒步下山，感受昔日岛民的生活路径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在霍里奥老城区找一家家庭经营的“塔韦尔纳”，坐在葡萄藤荫下享用一盘新鲜的章鱼沙拉和锡米特色的迷你酥皮馅饼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一条小艇或参加下午的海湾巡游，径直前往圣乔治沉船湾，跳进那无法用语言形容的碧绿海水中与沉船共游。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程让船夫在僻静的圣尼克劳斯湾或圣玛利亚湾放下你，享受片刻只有海浪声陪伴的独处时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏前返回锡米港，在“卢卡斯”或“米哈利斯”这样的老牌海鲜餐厅占一个靠海的位子，等待日落盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后不要急着离开，沿着灯火阑珊的海滨散步，听酒吧传来轻柔的布祖基琴声，看灯光在墨黑的水面上摇曳。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口全景最佳点`}</h4>
                  <p className="text-sm text-gray-700">{`从驶入峡湾的渡轮船头或上层甲板拍摄，能获得小镇与群山环抱的完整剧场式构图，上午顺光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`彩色楼梯与光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，在霍里奥老城错综复杂的小巷中寻找一段被阳光直射的彩色阶梯，利用强烈的明暗对比和几何线条构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`沉船湾航拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果使用无人机（需注意当地法规），从沉船正上方垂直拍摄，获得锈红色船体被翡翠绿海水包围的震撼抽象画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`帕诺米蒂斯修道院临海庭院`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，站在修道院面海的庭院围墙边，以湛蓝的大海和天空为背景拍摄修道院洁白的建筑与钟楼。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`港口夜景与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，在港口最西侧的防波堤上，利用平静的海水拍摄对岸灯火通明的彩色房屋及其完美的水中倒影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`锡米岛的光线在日出后和日落前最为柔和迷人，被称为“黄金小时”和“蓝色时刻”，是拍摄人像和风光的绝佳时机。尊重当地居民，避免透过窗户或阳台拍摄私人生活空间，拍摄人物前最好先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在港口边一栋19世纪海绵商人的故居改造的精品酒店里，每天早上在精致的铸铁阳台上，就着海风享用希腊酸奶和蜂蜜。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐居体验`}</h4>
                  <p className="text-sm text-green-800">{`选择霍里奥老城山顶一栋由石头老屋修复的民宿，需要爬一段路回家，但换来的是绝对的宁静和如同住在明信片里的全景视野。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温情`}</h4>
                  <p className="text-sm text-yellow-800">{`位于港口后方安静街区的一处家庭式公寓，由一位老奶奶打理，房间里摆着老照片，她会送你自家果园产的柠檬，并教你几句希腊语。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`航海风格`}</h4>
                  <p className="text-sm text-purple-800">{`诺利湾附近一家以航海为主题的小型设计酒店，房间简约现代，带私人露台或泳池，适合追求设计感与私密性的情侣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡米岛住宿数量有限，尤其在7-8月旺季，必须提前数月预订。住在港口虽然方便，但夜晚可能略受餐厅音乐声影响；选择山上的住宿则需权衡景色与爬坡的体力。岛屿治安极好，民风淳朴，可以安心散步至深夜。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡米岛数日后，那片色彩斑斓的山坡和翡翠般的海湾，依然会不时在脑海中闪现。但最让我怀念的，并非某一处具体的风景，而是那里独特的“寂静之声”。那是一种繁华褪去后留下的坦然，是惊天动地的财富故事终结后，生活以另一种简单、坚韧方式延续下去的平静力量。你走在那些安静的巷弄里，能听到的不仅是自己的脚步声，更像是听到了时间本身流淌的声音，缓慢，深邃，带着咸咸的海风味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求效率、更新和刺激的世界里，锡米岛像一位优雅的隐士，提供了一种珍贵的“过时”体验。它不讨好所有人，只等待那些愿意停下脚步、倾听墙壁低语、感受历史层理的旅人。来这里，你不是为了打卡，而是为了完成一场小小的时空穿越，见证一种文明如何与海洋共生，如何在命运的起伏中守护自己的色彩与尊严。这正是深度旅行的意义——去往那些地图上的亮点，最终带走的，却是照亮内心某个角落的、温柔而持久的光。锡米岛，就是爱琴海赠予知音者的这样一束光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kastoria-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯托里亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastoria Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/temple-of-apollo-epicurius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴赛阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Temple of Apollo Epicurius</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/delphi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德尔斐阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delphi</p>
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
