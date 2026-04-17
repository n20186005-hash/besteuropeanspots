import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳夫普利翁 Nafplio｜希腊第一个首都，爱琴海畔最浪漫的石头小镇 - 最佳欧洲景点',
  description: '车子还没完全停下，地中海那标志性的、混合着咸腥海风与九重葛花香的空气就已经钻进了车窗。我的第一眼纳夫普利翁，不是从地图上，而是从嗅觉开始的。然后，那片令人心醉的、仿佛被夕阳亲吻过的赭石色屋顶群才映入眼帘，它们层层叠叠，温柔地匍匐在湛蓝的阿尔戈利斯湾臂弯里，而三座不同时代的堡垒——帕拉米迪、阿克戎纳夫...',
}

export default function NafplioGreecePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '纳夫普利翁', href: '/attractions/nafplio-greece' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳夫普利翁・Nafplio・希腊・纳夫普利翁`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子还没完全停下，地中海那标志性的、混合着咸腥海风与九重葛花香的空气就已经钻进了车窗。我的第一眼纳夫普利翁，不是从地图上，而是从嗅觉开始的。然后，那片令人心醉的、仿佛被夕阳亲吻过的赭石色屋顶群才映入眼帘，它们层层叠叠，温柔地匍匐在湛蓝的阿尔戈利斯湾臂弯里，而三座不同时代的堡垒——帕拉米迪、阿克戎纳夫普利亚和波光粼粼中的布尔齐岛堡——像沉默而忠诚的巨人，从山巅、岩壁和海中央守护着这一切。这不像一个“景点”，更像一个活着的、会呼吸的梦。
走在老城的石板路上，高跟鞋会发出清脆而孤独的回响，因为这里最适合的是慢悠悠的散步。空气中飘散着刚煮好的希腊咖啡的浓香，混合着旁边小餐馆里烤章鱼的炭火气。阳台上垂下瀑布般的三角梅，是这里最常见的装饰。你会发现，这里没有雅典的喧嚣，取而代之的是一种南欧小镇特有的、慵懒而精致的体面。老人们坐在广场的咖啡馆里，一杯弗雷普（冰咖啡）就能消磨整个下午，话题从天气一直聊到政治，而孩子们则在禁止车辆通行的巷弄里追逐嬉戏。历史在这里不是博物馆的展品，就是他们每天推开窗看到的风景，是生活本身厚重的背景墙。
最打动我的，是那种奇妙的“层叠感”。你可以在一小时内，经历从古希腊神话（传说这里是海神波塞冬之子纳夫普利翁所建），到威尼斯共和国的鼎盛，再到奥斯曼帝国的统治，最后停留在1829年，那个现代希腊在此宣告新生的激昂时刻。这种时间的密度，被压缩在一个步行可达的、风景如画的空间里。它既是国家命运的转折点，又是一个让人想停下脚步、谈一场恋爱的浪漫海滨小镇。这种双重身份，让纳夫普利翁拥有了一种独一无二的魅力：既庄重，又温柔；既承载着历史的千斤重量，又洋溢着生活最轻盈的烟火气。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子还没完全停下，地中海那标志性的、混合着咸腥海风与九重葛花香的空气就已经钻进了车窗。我的第一眼纳夫普利翁，不是从地图上，而是从嗅觉开始的。然后，那片令人心醉的、仿佛被夕阳亲吻过的赭石色屋顶群才映入眼帘，它们层层叠叠，温柔地匍匐在湛蓝的阿尔戈利斯湾臂弯里，而三座不同时代的堡垒——帕拉米迪、阿克戎纳夫普利亚和波光粼粼中的布尔齐岛堡——像沉默而忠诚的巨人，从山巅、岩壁和海中央守护着这一切。这不像一个“景点”，更像一个活着的、会呼吸的梦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在老城的石板路上，高跟鞋会发出清脆而孤独的回响，因为这里最适合的是慢悠悠的散步。空气中飘散着刚煮好的希腊咖啡的浓香，混合着旁边小餐馆里烤章鱼的炭火气。阳台上垂下瀑布般的三角梅，是这里最常见的装饰。你会发现，这里没有雅典的喧嚣，取而代之的是一种南欧小镇特有的、慵懒而精致的体面。老人们坐在广场的咖啡馆里，一杯弗雷普（冰咖啡）就能消磨整个下午，话题从天气一直聊到政治，而孩子们则在禁止车辆通行的巷弄里追逐嬉戏。历史在这里不是博物馆的展品，就是他们每天推开窗看到的风景，是生活本身厚重的背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种奇妙的“层叠感”。你可以在一小时内，经历从古希腊神话（传说这里是海神波塞冬之子纳夫普利翁所建），到威尼斯共和国的鼎盛，再到奥斯曼帝国的统治，最后停留在1829年，那个现代希腊在此宣告新生的激昂时刻。这种时间的密度，被压缩在一个步行可达的、风景如画的空间里。它既是国家命运的转折点，又是一个让人想停下脚步、谈一场恋爱的浪漫海滨小镇。这种双重身份，让纳夫普利翁拥有了一种独一无二的魅力：既庄重，又温柔；既承载着历史的千斤重量，又洋溢着生活最轻盈的烟火气。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳夫普利翁`} />
                <InfoRow label="英文名称" value={`Nafplio`} />
                <InfoRow label="正式名称" value={`Nafplio`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`纳夫普利翁`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`现代希腊独立后的第一个首都，是国家新生的摇篮与起点。`} />
                <InfoRow label="建筑特色" value={`山巅威尼斯堡垒、海中岛堡与老城新古典主义建筑构成的立体防御与生活画卷。`} />
                <InfoRow label="建筑风格" value={`以威尼斯军事堡垒风格为主导，混合了奥斯曼帝国元素及独立后的新古典主义风格。`} />
                <InfoRow label="文化价值" value={`见证了希腊从奥斯曼统治下浴火重生，走向现代民族国家的关键十年，是希腊近代史的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`纳夫普利翁小镇本身全天开放。主要景点如帕拉米迪要塞、阿克戎纳夫普利亚要塞的开放时间一般为：夏季（4月至10月）早上8:00至晚上19:30；冬季（11月至3月）早上8:00至下午15:30。周一可能部分关闭或缩短开放时间。具体请以各景点现场公告为准，希腊的开放时间常有灵活变动。`} />
              <InfoRow label="门票价格" value={`帕拉米迪要塞门票约8欧元，阿克戎纳夫普利亚要塞门票约4欧元。欧盟学生及65岁以上长者通常享有半价优惠。18岁以下青少年及特定纪念日（如文化遗产日）可能免票。小镇内的博物馆单独售票，价格在2-6欧元不等。购买联票可能更划算。`} />
              <InfoRow label="地址" value={`Nafplio 211 00, Greece`} />
              <InfoRow label="交通方式" value={`从雅典国际机场出发最方便。可以选择租车自驾，沿E94高速公路行驶，车程约1.5至2小时。或从雅典市中心（基菲索斯巴士总站）乘坐KTEL长途巴士，班次密集，约每小时一班，车程约2小时，直达纳夫普利翁巴士站，票价约15欧元。从巴士站步行即可进入迷人的老城区。小镇内所有景点均可步行到达，探索要塞需要一定的体力爬山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要说清楚纳夫普利翁的故事，我们得把时间轴拉得足够长。它的传说始于神话时代，但其真正的战略价值，很早就被每一个涉足地中海的强大势力所看中。在古希腊时期，它就是阿尔戈斯重要的港口。然而，让它真正开始扮演“要塞”角色的，是后来的拜占庭帝国。但真正在这片岩石上打下不可磨灭印记的，是威尼斯人。他们在十五世纪后期夺取了这里，并以惊人的工程野心，开始了长达一个多世纪的堡垒建设。你如今看到的、盘踞在216米高山巅的帕拉米迪要塞，其复杂精巧的多边形堡垒体系，正是威尼斯军事工程的巅峰之作。他们称这里为“纳波利-迪-罗马尼亚”，把它打造成东地中海最坚固的堡垒之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，坚固的堡垒也意味着无尽的争夺。威尼斯人与奥斯曼土耳其人围绕它的拉锯战，持续了几个世纪。1715年，奥斯曼帝国最终攻陷了这里，并在城堡上升起了新月旗。奥斯曼时期留下了另一座堡垒——阿克戎纳夫普利亚，它雄踞在老城边一块突兀的巨大海角岩石上，与帕拉米迪形成掎角之势。他们还修建了清真寺和公共浴室，为小镇增添了东方风情。你可以想象，在那些岁月里，港口里停泊着威尼斯商船、奥斯曼战舰，街市上回响着意大利语、土耳其语和希腊语的交织，空气中弥漫着香料、咖啡与海洋的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点在1821年到来。希腊爆发了反抗奥斯曼统治的独立战争。经过惨烈的围城战，1822年，希腊起义军终于攻克了纳夫普利翁。由于它易守难攻的地理位置和相对完好的城市设施，1828年，新生的希腊共和国决定将首都设在这里。1829年，现代希腊的第一位总统——爱奥尼斯·卡波季斯第亚斯，就在这里的圣乔治广场前的教堂台阶上宣誓就职。纳夫普利翁，这个曾经被外族堡垒重重守护的港口，一跃成为了一个崭新民族国家的政治心脏。议会在这里召开，第一部宪法在这里起草，外国的外交官们纷纷前来设立使馆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但新生的喜悦很快被阴谋与刺杀的血色所覆盖。1831年，卡波季斯第亚斯总统就在前往教堂做礼拜的路上，在这片他致力于建设的街道上，被政敌刺杀。这场悲剧暴露了新生国家的内部裂痕，也间接促使了欧洲列强（英、法、俄）决定为希腊“指派”一位君主——来自巴伐利亚的奥托一世。1834年，奥托国王将首都迁往雅典，纳夫普利翁作为首都的辉煌五年，就此落幕。它从政治舞台的中心悄然退场，却也因此幸运地避开了后来雅典快速的现代化与工业化浪潮，将那段凝结了希望、挣扎与阵痛的建国记忆，连同它无与伦比的风貌，一起封存在了时光里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味纳夫普利翁，强烈建议安排至少两个整天。第一天专注于“登高”与“探秘”。建议早上九点前抵达，先避开暑热和人流，去挑战帕拉米迪要塞（有999级台阶，也可驾车至半山腰）。上午光线好，适合俯瞰全景。中午下山，在老城迷宫般的巷子里随意找一家家庭餐馆午餐。下午探索较低处的阿克戎纳夫普利亚要塞和山脚下的老城区，参观宪法广场、战争博物馆等。傍晚留给海滨散步和布尔齐岛的远观。第二天则属于“沉浸”与“细节”，可以乘船前往布尔齐岛堡，下午逛逛考古博物馆和特色小店，在广场咖啡馆彻底体验当地的慢节奏。这样张弛有度的安排，才能兼顾其历史厚重与生活气息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登帕拉米迪要塞的999级台阶务必穿舒适的运动鞋，并携带足量饮用水，夏季最好在早上十点前完成攀登以免中暑。老城小巷很多坡度很陡且路面光滑，女士请避免穿高跟鞋。在海滨餐厅用餐时，留意菜单是否标明价格，避免在未问清价格的情况下点当天推荐的“时价”海鲜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从老城西侧的阶梯起步，鼓起勇气挑战那传说中的999级台阶，在攀登中感受威尼斯工程兵的艰辛与汗水，并在抵达帕拉米迪要塞最高点“米尔特斯”时，收获将整个阿尔戈利斯湾尽收眼底的无敌全景作为奖赏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从帕拉米迪驾车或步行下山后，一头扎进老城腹地，在宪法广场的树荫下坐一会儿，看着鸽子在希腊第一任总统遇刺的圣乔治教堂前盘旋，感受历史在此凝固的微妙瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的斯塔西努街漫步，任由目光被两旁珠宝店、手工艺品店和传统糖果店（“扈从的糖果”店不可错过）里闪耀的光芒所吸引，用嗅觉寻找哪家小馆子飘出的烤羊肉香味最诱人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午穿过一个古老的石门洞，去探访雄踞在海角岩石上的阿克戎纳夫普利亚要塞，沿着城墙行走，脚下是拍岸的惊涛，想象威尼斯守军在此眺望敌船的心情。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在日落前一小时来到滨海步行道，找一张面朝布尔齐岛堡的长椅坐下，看着夕阳的金光如何一点点为那座海中小岛堡垒披上魔幻的金色外衣，直至华灯初上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一天上午从港口搭乘小船（仅需几分钟）登上布尔齐岛堡，绕着这个曾经令囚犯们绝望的威尼斯堡垒走一圈，感受被纯粹的海风和历史包围的孤寂感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留出一个下午给纳夫普利翁考古博物馆，在这座华丽的新古典主义建筑里，透过迈锡尼文明的纯金珍宝和罗马时代的雕像，倾听这片土地比“故都”身份更为悠远的低语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后，放弃主街，钻入那些只有一两盏壁灯照亮的安静石巷，脚步声在夜晚格外清晰，偶尔经过一扇敞开的门，里面传来家庭聚餐的欢笑声和浓浓的炖菜香气，这是小镇最真实的脉搏。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`帕拉米迪要塞东侧外墙下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，阳光从西侧打来，能照亮巨大的威尼斯堡垒墙面，使用广角镜头可拍出要塞压顶的雄伟气势与历史的沧桑质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`布尔齐岛堡的经典海视角`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，从老城滨海步行道中段，使用长焦镜头压缩空间，将亮起灯光的岛堡与深蓝色海面、对岸伯罗奔尼撒山脉的剪影一同纳入画面，色彩层次极佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城“五兄弟阳台”巷道`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八九点，阳光斜射进狭窄的Kapodistriou街，找到那栋拥有五个并列的威尼斯风格阳台的建筑，让模特站在光中，捕捉光线在古老石墙和鲜艳门窗上形成的明暗对比与几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿克戎纳夫普利亚要塞至帕拉米迪要塞的远眺`}</h4>
                  <p className="text-sm text-gray-700">{`登上阿克戎纳夫普利亚要塞上层平台，用中长焦镜头对准远处山巅的帕拉米迪，可以将两座不同时代的堡垒置于同一画面，讲述完整的防御故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`希腊人对在教堂内部拍照比较敏感，请务必遵守规定，通常禁止使用闪光灯和三脚架。拍摄当地居民，尤其是老人和商户，请先微笑示意获得默许，这是基本的尊重。夏季正午阳光强烈，建议利用早晚柔和光线拍摄，质感会好很多。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城边缘一栋19世纪的老宅里，房间不大但干净温馨，老板妈妈每天会送来自家做的蜂蜜酸奶和新鲜水果，天台能看到要塞的一角，充满家庭温暖。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经典体验`}</h4>
                  <p className="text-sm text-green-800">{`“三巨头”广场旁的精品酒店，由一栋新古典主义官邸修复而成，保留了高高的天花板和复古家具，开窗就是满是咖啡馆和棕榈树的广场，位置无敌。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`浪漫奢华`}</h4>
                  <p className="text-sm text-yellow-800">{`伯罗奔尼撒乡村风格的奢华度假酒店，坐落在小镇外一片宁静的橄榄园中，拥有无边泳池直面海景，提供Spa和私人晚餐安排，是蜜月绝佳之选。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特尝鲜`}</h4>
                  <p className="text-sm text-purple-800">{`尝试入住经过现代设计的“石屋”，这些房子完全由古老的石头建成，内部却是极简风格，形成强烈的时空碰撞感，通常藏在最安静的巷子深处。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿非常有味道，但请注意很多传统老房子没有电梯，行李搬运会是个小挑战。夏季（6-9月）是绝对旺季，务必提前数月预订。如果想享受宁静，可以选择稍微离开老城中心但仍在步行范围内的区域，夜晚会更安静。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开纳夫普利翁好些天了，但指尖似乎还能触碰到那些被阳光晒得温暖的石头栏杆的粗糙质感，鼻腔里也仿佛残留着海风与咖啡交织的复杂气味。这个地方教会我的，是一种关于“层叠”的生活哲学。它不像那些功能单一的景点，只向你展示辉煌的过去或纯粹的风景。它让你同时体验到历史的重量与生活的轻盈，让你在攀登军事堡垒的疲惫后，转身就能投入一个甜蜜的、布满鲜花的阳台的怀抱。它告诉我们，一个地方最深厚的魅力，恰恰在于这种复杂性——它既是国家诞生的产房，又是日常爱情的温床。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速和直达目的地的世界里，纳夫普利翁邀请你做的，恰恰是“绕路”。绕上那999级台阶，绕过那条看似死胡同的小巷，绕开主街去听一段当地老人的闲聊。它不急于向你证明什么，只是静静地在那里，把它用石头、海浪和三角梅写就的千年故事，摊开在爱琴海的阳光之下。每一位热爱深度游的旅人，都应该来这里住上几天。不是为了收集又一个“首都”或“要塞”的标签，而是为了亲身体验：历史如何最终沉入生活的地基，而最坚韧的力量，往往就孕育于这种举重若轻的、海风般的日常之中。在这里，你会找到旅行的另一种意义——不是逃离，而是更深地嵌入时间的肌理，并从中获得平静。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lindos-acropolis" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林多斯卫城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindos Acropolis</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora-monasteries-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅黛奥拉（天空之城修道院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/galaxidi-traditional-sailing-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加拉西迪</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Galaxidi</p>
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
