import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳夫帕克托斯 Nafpaktos｜在勒班陀海战古战场，感受威尼斯海港的时光倒流 - 最佳欧洲景点',
  description: '车子转过最后一个山弯，一片宝石蓝的海毫无征兆地闯进视线，而紧贴着海岸的，就是纳夫帕克托斯。第一眼，你绝不会想到“古战场”，它太宁静、太明媚了。阳光把海水晒成透明的蓝绿色，几十艘蓝白相间的小渔船懒洋洋地泊在港湾里，随着微波轻轻摇晃，船身碰着石堤，发出木头特有的、闷闷的“咚、咚”声。空气里是咸湿的海风，...',
}

export default function NafpaktosVenetianHarborPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '纳夫帕克托斯（勒班陀）', href: '/attractions/nafpaktos-venetian-harbor' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳夫帕克托斯（勒班陀）・Nafpaktos・希腊・西希腊大区埃托利亚-阿卡纳尼亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子转过最后一个山弯，一片宝石蓝的海毫无征兆地闯进视线，而紧贴着海岸的，就是纳夫帕克托斯。第一眼，你绝不会想到“古战场”，它太宁静、太明媚了。阳光把海水晒成透明的蓝绿色，几十艘蓝白相间的小渔船懒洋洋地泊在港湾里，随着微波轻轻摇晃，船身碰着石堤，发出木头特有的、闷闷的“咚、咚”声。空气里是咸湿的海风，混杂着岸边咖啡馆飘来的新鲜咖啡香和烤鱼的气息。穿着随意的当地人坐在港口边的梧桐树下，一杯弗雷普冰咖啡就能消磨整个下午，孩子们尖叫着跑过古老的石板路。这里不像一个景点，更像一个活得慢条斯理、筋骨舒展的滨海家园。
但只要你把目光从海平面稍稍抬起，故事就开始了。那座绿意葱茏的小山，像一顶巨大的王冠，严严实实地扣在海港背后。王冠之上，是层层叠叠、在阳光下泛着蜂蜜色的巨石城墙——威尼斯堡垒。它沉默地俯视着脚下色彩柔和的房屋、蜿蜒的窄巷和那个完美的半月形港口。这个港口，就是一切秘密的锁眼。它小得惊人，也精巧得惊人。两道厚重的石质防波堤像母亲环抱婴儿的双臂，将外海的狂风巨浪温柔地隔绝在外，只留下内港一汪令人心安的平静。你忽然就明白了，为什么威尼斯人要把这里建成军事要塞：这是一个天生的、不沉的战舰锚地。
沿着港口漫步，指尖划过那些被海风侵蚀了数百年的粗糙石砖。港口的入口处，两座小小的、曾经安放铁链以封锁港湾的塔楼依然矗立。闭上眼睛，海浪声退去，你仿佛能听到另一种喧嚣：火炮的轰鸣、木材的断裂、士兵的呐喊、风帆的猎猎作响。公元1571年10月7日，就在港口外的这片开阔海域，人类历史上最后一场完全由划桨战舰主导的巨型海战在此爆发。超过400艘战舰、十几万士兵在此厮杀。今天的宁静与昔日的狂暴，在这里形成了一种近乎眩晕的时空叠影。这就是纳夫帕克托斯最核心的魅力：它把一场宏大的史诗，溶解在日常的、带着海盐味的生活细节里。
当地人似乎早已习惯了与历史共处。咖啡馆的老板会指着海面，平淡地告诉你“唐·胡安的旗舰大概就在那个位置”，仿佛在谈论今天的天气。历史在这里不是博物馆里僵硬的展品，而是吹过梧桐树叶的风，是码头边垂钓老人背影的一部分，是孩子们玩耍时脚下的石板。你来到这里，不是为了瞻仰一个死去的遗迹，而是为了住进一段依然在呼吸的时光。勒班陀的硝烟早已散尽，留下的，是一个学会了与记忆温柔和解的美丽小镇。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子转过最后一个山弯，一片宝石蓝的海毫无征兆地闯进视线，而紧贴着海岸的，就是纳夫帕克托斯。第一眼，你绝不会想到“古战场”，它太宁静、太明媚了。阳光把海水晒成透明的蓝绿色，几十艘蓝白相间的小渔船懒洋洋地泊在港湾里，随着微波轻轻摇晃，船身碰着石堤，发出木头特有的、闷闷的“咚、咚”声。空气里是咸湿的海风，混杂着岸边咖啡馆飘来的新鲜咖啡香和烤鱼的气息。穿着随意的当地人坐在港口边的梧桐树下，一杯弗雷普冰咖啡就能消磨整个下午，孩子们尖叫着跑过古老的石板路。这里不像一个景点，更像一个活得慢条斯理、筋骨舒展的滨海家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但只要你把目光从海平面稍稍抬起，故事就开始了。那座绿意葱茏的小山，像一顶巨大的王冠，严严实实地扣在海港背后。王冠之上，是层层叠叠、在阳光下泛着蜂蜜色的巨石城墙——威尼斯堡垒。它沉默地俯视着脚下色彩柔和的房屋、蜿蜒的窄巷和那个完美的半月形港口。这个港口，就是一切秘密的锁眼。它小得惊人，也精巧得惊人。两道厚重的石质防波堤像母亲环抱婴儿的双臂，将外海的狂风巨浪温柔地隔绝在外，只留下内港一汪令人心安的平静。你忽然就明白了，为什么威尼斯人要把这里建成军事要塞：这是一个天生的、不沉的战舰锚地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着港口漫步，指尖划过那些被海风侵蚀了数百年的粗糙石砖。港口的入口处，两座小小的、曾经安放铁链以封锁港湾的塔楼依然矗立。闭上眼睛，海浪声退去，你仿佛能听到另一种喧嚣：火炮的轰鸣、木材的断裂、士兵的呐喊、风帆的猎猎作响。公元1571年10月7日，就在港口外的这片开阔海域，人类历史上最后一场完全由划桨战舰主导的巨型海战在此爆发。超过400艘战舰、十几万士兵在此厮杀。今天的宁静与昔日的狂暴，在这里形成了一种近乎眩晕的时空叠影。这就是纳夫帕克托斯最核心的魅力：它把一场宏大的史诗，溶解在日常的、带着海盐味的生活细节里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人似乎早已习惯了与历史共处。咖啡馆的老板会指着海面，平淡地告诉你“唐·胡安的旗舰大概就在那个位置”，仿佛在谈论今天的天气。历史在这里不是博物馆里僵硬的展品，而是吹过梧桐树叶的风，是码头边垂钓老人背影的一部分，是孩子们玩耍时脚下的石板。你来到这里，不是为了瞻仰一个死去的遗迹，而是为了住进一段依然在呼吸的时光。勒班陀的硝烟早已散尽，留下的，是一个学会了与记忆温柔和解的美丽小镇。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳夫帕克托斯（勒班陀）`} />
                <InfoRow label="英文名称" value={`Nafpaktos`} />
                <InfoRow label="正式名称" value={`Nafpaktos Venetian Port & Fortress`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`西希腊大区埃托利亚-阿卡纳尼亚州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是1571年决定地中海命运的关键海战——勒班陀战役的古战场，也是威尼斯共和国在希腊大陆上保存最完好的要塞港口之一。`} />
                <InfoRow label="建筑特色" value={`双层半圆形石砌防波堤环抱着如镜面般平静的内港，与山巅雄踞的威尼斯堡垒通过绵延的城墙相连，构成一个完整的中世纪海防体系。`} />
                <InfoRow label="建筑风格" value={`典型的威尼斯共和国军事防御建筑与后期奥斯曼细微影响的混合体，兼具地中海的实用与坚固。`} />
                <InfoRow label="文化价值" value={`一座活着的露天历史教科书，见证了基督教联军与奥斯曼帝国海上霸权的终极对决，也是西方文学巨匠塞万提斯人生转折的纪念地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`威尼斯堡垒及博物馆区域：通常为每日上午8:30至下午3:00开放，冬季（11月至3月）可能提前至下午2:30关闭，周一常为固定休息日。老港口、海滨防御城墙及整个古镇区域全天24小时开放，夜间有景观照明。重要节假日（如复活节、圣诞节）开放时间会有较大变动，建议行前查阅当地旅游局网站。`} />
              <InfoRow label="门票价格" value={`进入纳夫帕克托斯古镇及港口区域完全免费。登上山顶的威尼斯堡垒（Fortress of Nafpaktos）免收门票。若内部的小型海事博物馆或特定临时展览开放，可能会收取象征性的2-3欧元费用。没有任何强制消费。`} />
              <InfoRow label="地址" value={`Nafpaktos Venetian Port, 303 00 Nafpaktos, Greece`} />
              <InfoRow label="交通方式" value={`从雅典国际机场出发：最便捷方式是租车自驾，沿E94/E65高速公路向西北行驶，途经科林斯运河和帕特雷，全程约215公里，耗时2.5-3小时，沿途爱奥尼亚海风光绝美。公共交通可先乘机场巴士X93到雅典的Liossion长途汽车站，转乘KTEL巴士前往纳夫帕克托斯，班次每日约4-5班，全程约4小时。从希腊西部枢纽帕特雷出发：驾车沿E55海岸公路向东约45分钟即达；巴士班次更为频繁，每小时均有，车程约50分钟。小镇内所有景点均可轻松步行抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂纳夫帕克托斯的低语，你得把时钟拨回比威尼斯更早的时代。早在古希腊时期，这里就是一个重要的战略据点，它的名字“纳夫帕克托斯”在古希腊语里就是“船坞”的意思。不过，真正为它刻下不朽烙印的，是来自亚得里亚海的霸主——威尼斯共和国。15世纪，威尼斯人用他们精明的眼光看中了这个天然的深水港湾和它扼守科林斯湾西口的绝佳位置。他们开始大兴土木，不是为了建造一座美丽的贸易城市，而是为了锻造一把坚固的海上锁钥。山顶庞大的堡垒、沿着山脊蜿蜒而下的双层城墙、以及那个巧夺天工的封闭式港口，构成了一个近乎完美的防御体系。在威尼斯人手中，纳夫帕克托斯成了一艘永不沉没的石质战舰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静的日子被来自东方的威胁打破。16世纪，奥斯曼帝国的海军如日中天，在地中海肆意驰骋，威胁着整个基督教欧洲的腹地。教皇庇护五世艰难地撮合起一个“神圣同盟”，将向来互相猜忌的西班牙、威尼斯、教皇国等势力联合在一起。1571年秋天，这支庞大的联合舰队，在西班牙国王的异母弟弟、年仅24岁的唐·胡安将军的统帅下，集结于墨西拿，最终驶向科林斯湾，寻求与奥斯曼海军主力决战。而纳夫帕克托斯，这个威尼斯最前沿的基地，就成了联军的前哨和眼睛。可以想象，那个十月的清晨，港内一定挤满了各式战舰，空气里弥漫着松脂、火药和士兵的汗味，一场决定两个文明命运的碰撞即将到来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1571年10月7日，在纳夫帕克托斯港口外肉眼可及的海面上，历史掀起了最狂暴的一页。超过200艘基督教联军战舰与大致相当的奥斯曼战舰绞杀在一起。这不是后来依靠火炮远距离对轰的海战，这是最原始、最残酷的接舷战。巨型桨帆船互相撞击，钩锁纷飞，士兵们跳上敌舰白刃相见。海面上炮火轰鸣，硝烟弥漫，沉船和尸体漂浮。战役以基督教联军的惨胜告终，奥斯曼海军不可战胜的神话被打破，地中海的力量平衡就此改变。但胜利的代价极其惨重，双方数万人丧生。在这场浩大的伤亡名单中，有一个不起眼的西班牙步兵，他的左手在此役中受了重伤，几乎残废。他后来被俘虏，度过了五年奴隶生涯。这个人的名字叫米格尔·德·塞万提斯·萨维德拉。他说，失去左手是为了“让右手更加光荣”。后来，他用那只完好的右手，写下了《堂吉诃德》。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战役结束后，纳夫帕克托斯的命运依旧多舛。威尼斯人最终还是在几十年后失去了它，奥斯曼帝国占领了这里，并在建筑上留下了自己的痕迹，比如堡垒内那座小小的清真寺遗址。小镇在历史的夹缝中默默存在，直到19世纪希腊独立战争，它才终于成为现代希腊的一部分。有趣的是，当年的厮杀双方——威尼斯、西班牙、奥斯曼的影子，都以某种方式沉淀在了小镇的砖石和血液里。你会发现，当地一些老人的面容，依稀有着意大利人的轮廓；某些菜肴的味道，隐约透着东方香料的气息。历史在这里不是非黑即白的叙事，而是一层又一层覆盖、交融的复杂地层。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的极度宁静，仿佛是历史巨浪过后漫长的休憩。港口不再停泊战舰，而是停满了渔民的“小蚱蜢”。堡垒的炮口长出了野花和橄榄树。曾经的军械库，变成了热闹的海鲜餐厅。只有当你攀上堡垒的最高点，迎着从科林斯湾吹来的、毫无阻碍的烈风，眺望那片在正午阳光下闪烁着万点金光、浩瀚无垠的海面时，你才能略微感知到，当年在此对峙的将领们，心中曾翻涌着何等的豪情与恐惧。纳夫帕克托斯把惊心动魄的历史，酿成了一杯后味悠长、略带咸涩的当地葡萄酒。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味纳夫帕克托斯，你需要一整天的时间，并把节奏完全放慢。建议在上午九点左右抵达，这时旅游团还未涌入，阳光正好，港口边的咖啡馆刚刚开始营业。整体的游览节奏应该是“先感受，再探寻”：先在港口和老城区沉浸于它当下的生活气息，再逐步攀登，回溯它的军事和历史脉络。全程耗时约6-8小时，包括充足的发呆、喝咖啡和午餐时间。路线是一个完美的循环：从海平面开始，登上顶峰，再回到海平面，你会从两个截然不同的维度理解这座小镇。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登堡垒的石阶较多且有些滑，务必穿一双舒适防滑的鞋子，并带上足够的饮用水，山顶没有商店。小镇的猫非常多且不怕人，请友好对待这些“当地居民”。夏季正午阳光非常强烈，港口区域缺少遮挡，务必做好防晒。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从港口入口的威尼斯塔楼开始，用手触摸那用来封锁港口的巨大铁链的原始石扣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着半月形港口的内侧石板路慢慢走，找一家有遮阳篷的咖啡馆坐下，点一杯希腊咖啡，看渔船进出港，让海风把你吹醒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进城墙下的拱形门洞，进入迷宫般的奥斯曼时期老城区，在狭窄的、挂着九重葛的小巷里随意迷路，倾听自己脚步的回声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择从“五角堡垒”附近开始，沿着保存完好的威尼斯城墙阶梯，在橄榄树和松树的树荫下，一路向上攀登至山腰的防御平台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达山顶堡垒的主庭院，站在曾经的指挥所位置，360度环视科林斯湾的壮丽全景，想象舰队铺满海面的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访堡垒内被改造成小礼拜堂的古老清真寺遗址，感受不同信仰在此留下的微妙痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从堡垒另一侧较平缓的小路下山，穿过一片安静的本地居民区，顺路拜访镇上的民俗博物馆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到港口，选择一家直接在海堤上的家庭餐厅，享用当天捕捞的新鲜油炸小鱼和葡萄酒，等待夕阳把堡垒和整个小镇染成金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口入口拱门内侧`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在门洞内向外拍摄，将古老的石拱作为画框，框住港口里色彩斑斓的渔船和碧蓝的海水，形成强烈的明暗和色彩对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从山腰城墙的箭垛向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光西斜时，寻找一个箭垛缺口，将镜头对准山下老城区的红瓦屋顶和远处的大海，营造出“穿越时空的守望”之感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`堡垒最高点全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，光线最柔和，使用广角镜头捕捉整个科林斯湾的辽阔、山峦的轮廓以及脚下小镇的全景，气势磅礴。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城区巷子深处`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，狭窄的巷子反而会形成有趣的光影切割，寻找一户挂着鲜艳门帘或盛开鲜花的门口，捕捉充满生活气息的局部细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`港口防波堤尽头回拍`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，走到防波堤的尽头，用长焦镜头压缩空间，拍摄对岸的房屋、城墙和山顶堡垒在渐暗天色中的灯光倒影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除海面的反光，让海水颜色更湛蓝、更通透。尊重当地居民隐私，拍摄小巷和阳台时尽量避免将屋内人物作为主体。航拍器在此区域飞行需格外谨慎，由于靠近古迹和居民区，最好事先了解当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海港全景之选`}</h4>
                  <p className="text-sm text-blue-800">{`港口正对面一栋19世纪新古典主义建筑里的精品酒店，每个房间都带能看到堡垒和港口的阳台，夜晚听着轻柔的海浪声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城静谧体验`}</h4>
                  <p className="text-sm text-green-800">{`隐藏在老城区迷宫般小巷中的传统石头宅院民宿，由一对老夫妇经营，院子里有巨大的柠檬树，早餐是家制的酸奶和果酱。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`性价比首选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇边缘步行五分钟即可到达港口的高性价比公寓式酒店，带小厨房和宽敞露台，适合家庭或长住的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`浪漫奢华享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟可达的、坐落在海边悬崖上的五星级度假村，拥有无边泳池和私人沙滩，是探索一天后彻底放松的完美选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`港口边的住宿夏季非常紧俏，至少提前两个月预订。老城区的住宿可能需要步行一段石阶路，行李过多者请谨慎选择。小镇治安极好，夜晚独自在港口区域散步也非常安全舒适。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开纳夫帕克托斯时，我的背包里没有多一件纪念品，但心里却好像被什么东西装满了，沉甸甸的，又很安宁。那种感觉，不是参观完一个著名景点后的“打卡完成”的满足，更像是与一个智慧的老朋友进行了一场漫长而深入的对话后，获得的豁然与平静。这里教会我的，是关于时间的一种更深层的理解。历史并非总是以废墟和悲壮的形式存在，它也可以完美地嵌入生活，成为一种背景音，一种日常的风景。勒班陀的冲天战火与今天咖啡馆里冰块碰撞的清脆声响，共享着同一片海风。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、爆炸、刺激的时代，纳夫帕克托斯的存在像一种温柔的叛逆。它不急于向你证明什么，不靠炫目的灯光秀或夸张的表演吸引你。它只是在那里，日复一日地，让海水拍打着古老的防波堤，让阳光在威尼斯城墙的巨石上移动。它邀请你做的，仅仅是坐下来，发呆，观察，感受时间以另一种更缓慢、更本质的流速经过。对于每一位厌倦了浅尝辄止的观光，渴望在旅途中获得内心回响的深度旅行者来说，纳夫帕克托斯都不应该只是一个地名。它是一个可以让你把喧嚣关在门外，直面浩瀚历史与广阔大海，同时又被最朴实的人间烟火所拥抱的稀有之地。来这里，不只是看一个景点，而是完成一次对自我节奏的校准。你会发现，最重要的风景，往往不在镜头里，而在你静下来之后，那片终于变得清晰而宽广的心海之中。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chania-venetian-harbour" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚威尼斯港</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Venetian Harbour</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora-monasteries" className="block group">
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
              <a href="/attractions/rethymno-old-town-crete" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷西姆诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rethymno Old Town</p>
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
