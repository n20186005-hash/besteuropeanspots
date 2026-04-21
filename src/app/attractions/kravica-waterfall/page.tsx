import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉维察瀑布 Kravica Waterfall｜绿宝石般的巨型钙华瀑布群 - 最佳欧洲景点',
  description: '你绝不会想到，在波斯尼亚和黑塞哥维那这片以战争伤痕和古老石桥闻名的土地上，竟藏着这样一片奔腾的、翡翠般的仙境。车子在干燥的、布满碎石的山路上拐了最后一个弯，闷热的空气里忽然渗入一股沁凉的水汽，紧接着，那如同遥远雷鸣般的轰响便扑面而来。走下缓坡，绕过一片橡树林，眼前豁然开朗——那一刻的震撼，是任何照片都无法承载的。那...',
}

export default function KravicaWaterfallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/bosnia-and-herzegovina' },
            { label: '柳布什基（根据常理推断，瀑布位于西黑塞哥维那州，柳布什基市为其主要交通枢纽）', href: '/destinations/bosnia-and-herzegovina' },
            { label: '克拉维察瀑布', href: '/attractions/kravica-waterfall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克拉维察瀑布・Kravica Waterfall・波斯尼亚和黑塞哥维那・柳布什基（根据常理推断，瀑布位于西黑塞哥维那州，柳布什基市为其主要交通枢纽）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你绝不会想到，在波斯尼亚和黑塞哥维那这片以战争伤痕和古老石桥闻名的土地上，竟藏着这样一片奔腾的、翡翠般的仙境。车子在干燥的、布满碎石的山路上拐了最后一个弯，闷热的空气里忽然渗入一股沁凉的水汽，紧接着，那如同遥远雷鸣般的轰响便扑面而来。走下缓坡，绕过一片橡树林，眼前豁然开朗——那一刻的震撼，是任何照片都无法承载的。那不是一个瀑布，而是一堵弧形的、宽达百余米的、活生生的绿墙。特雷比扎尼卡河的水流在这里被无数钙华阶地温柔地撕碎，化作千百条银白色的水练，从长满青苔和蕨类的墨绿色岩壁上奔腾跃下，坠入下方那一汪深不见底的、闪烁着魔幻祖母绿光泽的潭水中。
声音在这里是立体的。近处是水流拍打岩石的清脆哗啦声，远处是瀑布主体沉闷持续的轰鸣，间或夹杂着孩子们从岸边跳入水中的欢呼与水花四溅的声响，还有树林里不知名鸟类的啁啾。空气的味道清冽极了，混合着水沫的甜腥、湿润泥土的芬芳，以及被水流击碎的负氧离子的味道，每一次深呼吸都像在清洗你的肺叶。七月的阳光炽烈，但站在瀑布溅起的水雾范围内，就像置身于一个天然的、巨大的空调房，皮肤上的每一个毛孔都在欢唱。
这里绝非一个仅供远观的景点。它是活的，是深深嵌入当地人生活肌理中的“后花园”。你会看到穿着泳衣的一家老小，在潭边铺开彩色的野餐垫，祖父母在树荫下喝着咖啡，父亲带着儿子从较低的岩石上练习跳水，而少年们则奋力游向瀑布最汹涌的下方，享受水流冲击背部的天然按摩。小贩在岸边支起简易的棚子，烤着滋滋作响的ćevapi（波斯尼亚和黑塞哥维那肉卷），空气中飘散着烤肉和新鲜面包的香气。这不是一个被玻璃罩起来的自然保护区，而是一个充满烟火气的、人与自然共享的狂欢地。
它的核心魅力，就在于这种极致的反差与和谐的统一。一边是自然界经过千万年耐心沉淀、雕刻出的宏伟与静谧；另一边是人类最本真的嬉戏、欢笑与生活气息。它不像那些需要你屏息凝神、保持距离的圣地，而是张开怀抱，邀请你脱下鞋袜，跳进那翡翠般的潭水，成为这幅生机盎然画卷中的一部分。在这里，你感受到的不是历史的沉重，而是生命本身那种清凉、奔放、不受约束的原始活力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你绝不会想到，在波斯尼亚和黑塞哥维那这片以战争伤痕和古老石桥闻名的土地上，竟藏着这样一片奔腾的、翡翠般的仙境。车子在干燥的、布满碎石的山路上拐了最后一个弯，闷热的空气里忽然渗入一股沁凉的水汽，紧接着，那如同遥远雷鸣般的轰响便扑面而来。走下缓坡，绕过一片橡树林，眼前豁然开朗——那一刻的震撼，是任何照片都无法承载的。那不是一个瀑布，而是一堵弧形的、宽达百余米的、活生生的绿墙。特雷比扎尼卡河的水流在这里被无数钙华阶地温柔地撕碎，化作千百条银白色的水练，从长满青苔和蕨类的墨绿色岩壁上奔腾跃下，坠入下方那一汪深不见底的、闪烁着魔幻祖母绿光泽的潭水中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`声音在这里是立体的。近处是水流拍打岩石的清脆哗啦声，远处是瀑布主体沉闷持续的轰鸣，间或夹杂着孩子们从岸边跳入水中的欢呼与水花四溅的声响，还有树林里不知名鸟类的啁啾。空气的味道清冽极了，混合着水沫的甜腥、湿润泥土的芬芳，以及被水流击碎的负氧离子的味道，每一次深呼吸都像在清洗你的肺叶。七月的阳光炽烈，但站在瀑布溅起的水雾范围内，就像置身于一个天然的、巨大的空调房，皮肤上的每一个毛孔都在欢唱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝非一个仅供远观的景点。它是活的，是深深嵌入当地人生活肌理中的“后花园”。你会看到穿着泳衣的一家老小，在潭边铺开彩色的野餐垫，祖父母在树荫下喝着咖啡，父亲带着儿子从较低的岩石上练习跳水，而少年们则奋力游向瀑布最汹涌的下方，享受水流冲击背部的天然按摩。小贩在岸边支起简易的棚子，烤着滋滋作响的ćevapi（波斯尼亚和黑塞哥维那肉卷），空气中飘散着烤肉和新鲜面包的香气。这不是一个被玻璃罩起来的自然保护区，而是一个充满烟火气的、人与自然共享的狂欢地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的反差与和谐的统一。一边是自然界经过千万年耐心沉淀、雕刻出的宏伟与静谧；另一边是人类最本真的嬉戏、欢笑与生活气息。它不像那些需要你屏息凝神、保持距离的圣地，而是张开怀抱，邀请你脱下鞋袜，跳进那翡翠般的潭水，成为这幅生机盎然画卷中的一部分。在这里，你感受到的不是历史的沉重，而是生命本身那种清凉、奔放、不受约束的原始活力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克拉维察瀑布`} />
                <InfoRow label="英文名称" value={`Kravica Waterfall`} />
                <InfoRow label="正式名称" value={`Kravica Waterfall`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`柳布什基（根据常理推断，瀑布位于西黑塞哥维那州，柳布什基市为其主要交通枢纽）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一道由特雷比扎尼卡河千万年雕琢而成的自然奇观，是巴尔干半岛最壮观的钙华瀑布之一。`} />
                <InfoRow label="建筑特色" value={`巨大的半圆形天然阶梯剧场，由富含矿物质的流水沉积碳酸钙，层层堆叠出翠绿色的瀑壁与水潭。`} />
                <InfoRow label="建筑风格" value={`纯粹的自然杰作，展现了喀斯特地貌中钙华沉积的典型形态。`} />
                <InfoRow label="文化价值" value={`不仅是地质学的活标本，更是波斯尼亚和黑塞哥维那南部地区人民世代共享的夏日乐园与精神绿洲。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年全天候开放，但官方管理的入口区域开放时间通常为每年4月至10月，每日上午8点至傍晚7点；冬季（11月至次年3月）无人值守，可自由进入，但部分设施（如小吃摊、厕所）可能关闭。建议在旅游旺季的日间前往，以确保安全和最佳体验。`} />
              <InfoRow label="门票价格" value={`旅游旺季（通常为5月至9月）门票约为8-10波斯尼亚和黑塞哥维那马克（约合4-5欧元）；淡季（4月、10月）可能降价至5波斯尼亚和黑塞哥维那马克或无人售票；冬季通常免费。学生、儿童及团体可能有小幅优惠，但政策较为随意，建议备好现金零钱。`} />
              <InfoRow label="地址" value={`Kravica, Ljubuški, 波斯尼亚和黑塞哥维那 88320`} />
              <InfoRow label="交通方式" value={`最近的国际机场是莫斯塔尔机场或克罗地亚的斯普利特机场。从莫斯塔尔出发最为方便：在莫斯塔尔长途汽车站乘坐前往柳布什基或梅久戈列方向的巴士，告诉司机在克拉维察瀑布下车，车程约1小时，班次每天约4-6班。从柳布什基镇中心打车前往瀑布是最便捷的方式，车程约15分钟，费用约15-20马克。自驾是最推荐的方式，从莫斯塔尔沿M6公路向南行驶约40公里，有清晰路标指向瀑布，停车场收费约2马克。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲克拉维察瀑布的故事，就不能只盯着那堵水墙。它的生命线，向上游延伸，紧紧系在一条名为特雷比扎尼卡的河流上。这条河本身就是波斯尼亚和黑塞哥维那喀斯特地貌的一个传奇，它并非一直在地表奔腾，而是时隐时现，像一条顽皮的地下银龙。它从遥远的山洞中涌出，流经一段后又潜入地下，在石灰岩的迷宫中穿梭，最后在克拉维察这里找到了一个巨大的出口，或者说，遇到了一道它无法逾越的古老岩障。于是，故事开始了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`千万年前，当水流从这片岩壁上漫过时，水中富含的碳酸钙开始悄悄工作。这个过程缓慢得超乎想象，就像大自然最耐心的艺术家。每当水流淌过，遇到一点微小的凸起或一片落叶，碳酸钙便以它们为核心，一点点沉淀、结晶，年复一年，日复一日。这些沉积物逐渐加厚、蔓延，形成了我们今天看到的那些层层叠叠、如同巨大贝壳或梯田般的钙华阶地。瀑布的半圆形剧场，就是这样被水流自身，一笔一划，雕刻出来的。这不是一次山崩地裂的创造，而是一场温柔而坚定的漫长生长。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在很长的人类历史里，它或许只是当地牧羊人歇脚饮羊的地方，是山林间一个美丽的秘密。近代，随着道路的修建，它开始被更多人知晓。上世纪六七十年代，在前南斯拉夫时期，这里被初步开发为休闲区，修建了简单的步道和小吃店，成为了周边城市工人和家庭夏季出游的热门地点。那时的欢笑和阳光，似乎与后来席卷此地的阴云毫不相干。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的洪流在20世纪90年代变得无比残酷。波斯尼亚和黑塞哥维那战争爆发，这片美丽的土地瞬间沦为前线。瀑布所在的区域曾一度是激烈的交战区，通往这里的道路布满地雷，森林里藏着狙击手。那翡翠般的水潭，曾映照过枪口的火光，轰鸣的水声或许曾掩盖过不详的声响。它从乐园变成了禁区，被恐惧和死亡所封锁。那段岁月在瀑布的岩壁上没有留下直接的弹孔，却在周边社区几代人的记忆里，刻下了深深的伤痕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争结束后，排雷工作缓慢而艰难地进行。随着和平终于扎根，人们才又小心翼翼地回到这里。最初是那些最怀念它的老人，带着劫后余生的恍惚，再次把脚浸入那清凉的水中。然后年轻人回来了，孩子们回来了。小吃摊重新开张，虽然简陋；笑声再次响起，虽然偶尔会有一丝不易察觉的停顿。克拉维察瀑布以一种惊人的韧性完成了自我疗愈，它用永不停止的水流，冲刷着过往，滋养着新生。它不再仅仅是地质奇观，更成为一个象征——象征着生活终究会冲破一切障碍，重新找到其欢腾、清凉的本质。今天的它，连接着古老的沉积、战火的记忆与和平的喧嚣，是一部用流水书写的、关于时间、创伤与复苏的深沉史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美体验克拉维察瀑布的关键在于“反向操作”和“沉浸其中”。强烈建议你在旅游旺季（5-9月）的一个工作日清晨（9点前）抵达，此时旅行团大巴尚未涌入，你能独占这片仙境最宁静的片刻。整体游览需要预留至少4-5小时，节奏宜慢不宜快。路线应该是先宏观后微观，先欣赏后参与。从主入口购票进入后，不要急着冲下潭边，而是先沿着瀑布顶部的观景小径从高处俯瞰全景，建立最初的空间震撼感。然后顺时针沿着步道下到潭边，从不同角度近距离观察瀑布。最后，也是最重要的环节，就是换上泳衣，跳进水里，成为风景的一部分。中午在岸边野餐，感受日光移动下瀑布光影的变化。这样的安排能让你全方位、多感官地吸收克拉维察的魔力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`千万别穿人字拖或光滑底子的凉鞋，下到潭边的石板路长满青苔，被水雾浸润后非常湿滑，一双防水的徒步凉鞋或旧运动鞋是最佳选择。岸边没有正式的更衣室，只有非常简陋的棚子，建议提前在车上或厕所换好泳衣在里面，外面套上方便穿脱的罩衫或裙子。保管好随身小物，特别是手机和钱包，最好使用防水袋，因为水边潮湿，且人多杂乱。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入后，先别着急下去，右转沿着一条被树荫遮盖的上层小径走到瀑布的侧面，那里有一个木制观景平台，能让你第一次看到那巨大的弧形水幕全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着之字形的石板步道慢慢走下陡坡，让你的耳朵逐渐被越来越响的轰鸣声充满，并在每一个转弯处捕捉瀑布不同角度的片段画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到瀑布正对面的潭边平地，找一块被太阳晒得暖洋洋的大石头坐下，静静地看一会儿水流奔腾不息地坠入碧潭，观察水雾中若隐若现的彩虹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着水潭边缘向瀑布的右侧（南侧）漫步，这里的钙华阶地更为密集细腻，你可以伸手触摸那冰凉刺骨、布满海绵般孔隙的岩石表面，感受自然的质地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`勇敢地换上泳装（或至少在浅滩脱掉鞋袜），慢慢走入翡翠色的潭水中，感受从脚底升起的透心凉意，并尝试朝着瀑布水帘方向游一小段，让水花溅在脸上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游完泳后，到瀑布左侧（北侧）地势较高的草地上，这里有大片树荫和许多家庭占据的野餐区，你可以铺开自己的餐布，享用简单的午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后再去探索瀑布下游的区域，那里水流平缓，形成多条小溪，阳光透过树叶洒在水面，是寻找小青蛙和蜻蜓的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，再次爬上中段的坡道，在下午的侧光下回望整个瀑布剧场，此时的瀑布会染上一层金色的光晕，与上午的清冷感截然不同。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`上层观景平台全景框`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在平台靠右的位置，用广角镜头可以完美框住整个弧形瀑布和一部分水潭，将观景台的木栏杆作为前景，能增加画面层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`瀑布右侧钙华阶地特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光能照亮右侧的岩壁，蹲低身体，贴近流动的浅水层拍摄，可以捕捉到水流在金色苔藓和蜂窝状钙华岩石上流淌的晶莹质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`潭中仰拍视角`}</h4>
                  <p className="text-sm text-gray-700">{`正午光线最强时，带着防水设备或GoPro游到距离瀑布约二十米的水中，转身仰拍，可以拍到蓝天背景下银色水练倾泻而下的动态瞬间，人物作为剪影点缀其中会非常出彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`下游溪流慢门`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，在瀑布下游树林遮蔽的溪流处，找一处有石块的稳定地点，使用三脚架和减光镜，用慢门将潺潺溪流拍成丝绸般的雾状，与周围清晰的绿植岩石形成对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`对岸人物剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，站在瀑布对面，让同伴站在水边岩石上，以奔腾的瀑布为背景拍摄剪影，能拍出极具故事感和震撼力的人景合一照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`水雾极大，镜头和机身必须做好防水保护，拍摄间隙立即用软布擦拭。尊重当地人的隐私，拍摄嬉戏的家庭或儿童时，最好先微笑示意或取得同意。使用无人机理论上不被禁止，但务必远离人群，并注意瀑布上升的气流和强烈的水雾对飞行器的影响。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`自然爱好者之选`}</h4>
                  <p className="text-sm text-blue-800">{`瀑布附近村庄里的家庭式公寓，房东老奶奶会为你准备自制的果酱和新鲜奶酪，夜晚安静得只能听到远处的流水声和虫鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在莫斯塔尔古城内的老石头房子里，白天驱车来瀑布玩水，晚上回到古城享受灯火辉煌的夜市和烤肉，体验历史与自然的双重奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`柳布什基郊区一座由家族经营的精品农庄酒店，房间带能看到山景的露台，餐厅供应自家农场生产的有机食物，氛围私密而宁静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-purple-800">{`瀑布前往莫斯塔尔途中的河边小木屋民宿，推开窗就是森林与溪流，价格亲民，老板常常会邀请客人一起烧烤喝啤酒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，瀑布周边的住宿非常紧俏，务必提前至少一两个月预订。如果选择住在莫斯塔尔，虽然每天需要约40分钟车程，但晚餐和夜生活选择丰富得多。波斯尼亚和黑塞哥维那乡村住宿设施普遍简单，但主人极为热情好客，这是金钱买不到的体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克拉维察很久之后，那轰鸣的水声还会时不时在耳边回响。它留给我的，远不止几张美丽的照片或一次凉爽的游泳体验。在波斯尼亚和黑塞哥维那，你看了太多被枪弹刻上伤痕的建筑，听了太多沉痛的历史故事，心会不自觉地变得沉重。而克拉维察，就像一场及时而慷慨的救赎。它用最原始、最磅礴的生命力告诉你：看，无论地上的人类经历了什么，地下的水流从未停止奔腾，苔藓仍在岩石上生长，阳光依然会把水雾变成彩虹。时间在这里有着截然不同的尺度，不是以世纪或战争为计，而是以碳酸钙沉积一毫米、以水流打磨一块圆石为计。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都被过度规划、过度解读的世界里，克拉维察瀑布保持了一种珍贵的“野生感”和“平民性”。它没有被栅栏围起来，没有禁止触摸的牌子，没有昂贵的观景咖啡厅。它依然是一个你可以跳进去、大喊大叫、和陌生人分享一块面包的地方。这种毫不矫饰的接纳，这种人与自然毫无隔阂的互动，在今天显得如此奢侈和动人。它提醒我们，旅行的最高境界，或许不是收集了多少个“必打卡”的地标，而是有多少次，你真正地融入了一片风景，成为它呼吸的一部分。所以，如果你也渴望在旅途中找到一种纯粹的、充满力量的快乐，那么请一定来波斯尼亚和黑塞哥维那，来克拉维察。让那翡翠般的潭水，洗去的不仅仅是夏日的暑气，还有积攒在心头已久的尘埃。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sion-twin-hills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡永古城与双丘</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sion and its Twin Hills</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈措翁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊娜溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
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
