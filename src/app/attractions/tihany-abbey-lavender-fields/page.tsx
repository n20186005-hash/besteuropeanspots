import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂豪尼 Tihany｜巴拉顿湖之心，在紫色薰衣草与千年修道院钟声里深呼吸 - 最佳欧洲景点',
  description: '车子开上蒂豪尼半岛的那一刻，世界突然就安静了。车窗摇下来，第一股涌进来的不是风，是味道——那是夏天被阳光晒暖的湖水蒸腾起的淡淡咸腥气，混杂着松针的清新，还有一丝丝，对，一丝丝甜美的、若隐若现的草本香气。那就是薰衣草，它还没现身，却已经用气味为你铺好了通往童话的路。道路两旁是低矮的、刷成柔和鹅黄色的民...',
}

export default function TihanyAbbeyLavenderFieldsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '蒂豪尼', href: '/attractions/tihany-abbey-lavender-fields' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂豪尼・Tihany・匈牙利・蒂豪尼镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子开上蒂豪尼半岛的那一刻，世界突然就安静了。车窗摇下来，第一股涌进来的不是风，是味道——那是夏天被阳光晒暖的湖水蒸腾起的淡淡咸腥气，混杂着松针的清新，还有一丝丝，对，一丝丝甜美的、若隐若现的草本香气。那就是薰衣草，它还没现身，却已经用气味为你铺好了通往童话的路。道路两旁是低矮的、刷成柔和鹅黄色的民居，家家户户窗台上都开着天竺葵，红得像小小的火焰。当地人骑着自行车慢悠悠地经过，车篮里装着刚买的面包，他们向你点头微笑，仿佛你不是闯入者，只是晚归的邻居。
然后，一转弯，它就出现了。那座拥有双塔的巴洛克式修道院，静静地矗立在半岛的最高处，像一位历经沧桑却依旧从容的智者，守护着脚下如蓝宝石般的巴拉顿湖。你走近它，脚下是咯咯作响的碎石子路。最打动人的，不是它宏伟的规模，而是它那种“生长”于此地的和谐。建筑的石材是温暖的蜂蜜色，与土地同色；屋顶的红瓦，又与家家户户的屋顶连成一片。钟声响起，不是急促的催促，而是悠长、沉稳的共鸣，声音在湖面上荡开，惊起一群水鸟，然后又归于平静。这里的生活节奏，是以钟声和湖浪为节拍的。
走进修道院前的广场，你会立刻明白什么叫“风景如画”。这里是绝对的制高点，整个巴拉顿湖——中欧这片最大的湖泊——在你眼前铺展开来，湖水颜色从近岸的碧绿，渐变为深邃的钴蓝，对岸的群山是淡淡的青灰色剪影。而当你转过身，背对湖面，看到的又是另一番景象：修道院脚下，层层叠叠的梯田向下延伸，那里，在盛夏时节，会化作一片令人屏息的紫色海洋。风过时，薰衣草摇曳成波浪，那馥郁的、带着安抚力量的香气，会比视觉更早地将你拥抱。在这里，神圣的历史、绝美的自然与平凡的生活日常，被奇妙地编织在了一起，它给你的不是震撼，是一种深深的、沁入心脾的宁静。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子开上蒂豪尼半岛的那一刻，世界突然就安静了。车窗摇下来，第一股涌进来的不是风，是味道——那是夏天被阳光晒暖的湖水蒸腾起的淡淡咸腥气，混杂着松针的清新，还有一丝丝，对，一丝丝甜美的、若隐若现的草本香气。那就是薰衣草，它还没现身，却已经用气味为你铺好了通往童话的路。道路两旁是低矮的、刷成柔和鹅黄色的民居，家家户户窗台上都开着天竺葵，红得像小小的火焰。当地人骑着自行车慢悠悠地经过，车篮里装着刚买的面包，他们向你点头微笑，仿佛你不是闯入者，只是晚归的邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，一转弯，它就出现了。那座拥有双塔的巴洛克式修道院，静静地矗立在半岛的最高处，像一位历经沧桑却依旧从容的智者，守护着脚下如蓝宝石般的巴拉顿湖。你走近它，脚下是咯咯作响的碎石子路。最打动人的，不是它宏伟的规模，而是它那种“生长”于此地的和谐。建筑的石材是温暖的蜂蜜色，与土地同色；屋顶的红瓦，又与家家户户的屋顶连成一片。钟声响起，不是急促的催促，而是悠长、沉稳的共鸣，声音在湖面上荡开，惊起一群水鸟，然后又归于平静。这里的生活节奏，是以钟声和湖浪为节拍的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进修道院前的广场，你会立刻明白什么叫“风景如画”。这里是绝对的制高点，整个巴拉顿湖——中欧这片最大的湖泊——在你眼前铺展开来，湖水颜色从近岸的碧绿，渐变为深邃的钴蓝，对岸的群山是淡淡的青灰色剪影。而当你转过身，背对湖面，看到的又是另一番景象：修道院脚下，层层叠叠的梯田向下延伸，那里，在盛夏时节，会化作一片令人屏息的紫色海洋。风过时，薰衣草摇曳成波浪，那馥郁的、带着安抚力量的香气，会比视觉更早地将你拥抱。在这里，神圣的历史、绝美的自然与平凡的生活日常，被奇妙地编织在了一起，它给你的不是震撼，是一种深深的、沁入心脾的宁静。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂豪尼`} />
                <InfoRow label="英文名称" value={`Tihany`} />
                <InfoRow label="正式名称" value={`蒂豪尼修道院`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`蒂豪尼镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是匈牙利现存最古老的修道院之一，其奠基文献是匈牙利历史上第一份包含匈牙利语词汇的珍贵文件。`} />
                <InfoRow label="建筑特色" value={`拥有标志性的双塔立面，其下的地下墓穴保存着修道院创立者安德鲁一世的石棺，建筑群与周围的湖泊山丘完美融合。`} />
                <InfoRow label="建筑风格" value={`主体为18世纪重建的巴洛克风格，但地基和部分结构保留了古老的罗马式痕迹。`} />
                <InfoRow label="文化价值" value={`它不仅是宗教圣地，更是匈牙利民族语言与文化的摇篮，同时其所在的半岛生态系统也是自然保护的典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院教堂与博物馆：4月至10月，每日上午9点至下午6点；11月至3月，每日上午10点至下午4点。教堂在周日弥撒期间（通常为上午10点）不接待游客参观。薰衣草田为开放的自然区域，全年可进入，但花期通常在6月下旬至7月中旬达到巅峰。具体开放时间可能因宗教活动或特殊节庆临时调整，建议行前查看官网公告。`} />
              <InfoRow label="门票价格" value={`修道院教堂参观免费。地下墓穴与修道院博物馆联票：成人票2000匈牙利福林（约5欧元），学生及老年人票1000福林，家庭票（2大2小）5000福林。6岁以下儿童免费。另有包含导游讲解的套票可供选择。`} />
              <InfoRow label="地址" value={`Tihany, Fő utca 1, 8237 匈牙利`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最方便：在布达佩斯南部的Déli火车站乘坐直达蒂豪尼的火车（目的地站名：Tihany），车程约1.5至2小时，班次平日约每2小时一班，夏季会增开。火车会停靠在蒂豪尼对岸的亚斯镇（Aszófő），下车后需转乘渡轮（约15分钟航程）才能抵达蒂豪尼半岛，渡轮班次与火车时刻基本衔接。若自驾，从布达佩斯沿M7高速公路向西南行驶约130公里，直接开上半岛即可，沿途湖光山色绝美。半岛上停车位有限且收费，夏季建议早到。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一位心碎的国王说起。1055年，匈牙利国王安德鲁一世做出了一个决定。他不仅是一位君主，也是一个失去了爱子的父亲。为了给早逝的儿子阿斯特里克（又名阿纳斯塔修斯）寻求灵魂的安宁，他选择在巴拉顿湖中央这个宁静的半岛上，建立一座本笃会修道院。他赐予修道院广袤的土地和特权，并亲手签署了奠基文件。而正是这份用拉丁文书写的文件，在其中列举地名时，嵌入了“野猪”和“白水”等古老的匈牙利语词汇。这短短几行字，如同时间胶囊，让后世得以窥见千年前匈牙利先民的语言，也让蒂豪尼成为了匈牙利民族语言的诞生地，其地位堪比“匈牙利语的出生证明”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中欧的和平总是短暂。1241年，蒙古铁骑如飓风般席卷匈牙利，所到之处一片焦土。蒂豪尼修道院未能幸免，那些最初的罗马式石构建筑在战火中化为废墟。修道士们四散逃离，珍贵的文献险些失传。之后的几个世纪也不平静，奥斯曼土耳其帝国的扩张阴影笼罩着整个地区，修道院在动荡中艰难维持，时建时毁。它的命运，就像多瑙河盆地这片土地一样，在战争的磨盘里反复碾压。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在18世纪。随着奥斯曼势力被驱逐，匈牙利掀起了重建与复兴的浪潮。在玛丽亚·特蕾莎女皇的支持下，蒂豪尼修道院迎来了凤凰涅槃。1740年代，由奥地利建筑师克里斯托夫·哈默一手设计，一座崭新的、华丽的巴洛克风格修道院在原址上拔地而起。我们今天看到的双塔立面、精美的灰泥装饰和内部繁复的壁画，大多来自这个辉煌的时代。不过，重建者并没有完全抹去过去，他们精心保留了最初罗马式教堂的地下墓穴，让创立者安德鲁一世的石棺得以安然存放。新旧历史，在这里达成了默契的和解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的岁月相对平和。修道院经历了世俗化改革，但始终是半岛的精神与文化中心。修道士们不仅祈祷，也耕作，他们引种葡萄，打理果园，也让薰衣草在这片独特的火山岩土壤和湖泊气候下茁壮成长。20世纪的战争同样波及了这里，但建筑奇迹般地保存了下来。如今，它不再是一座封闭的修道院，而是一座活着的博物馆、一个举办管风琴音乐会的艺术殿堂、以及每一个匈牙利人心中文化根源的象征。当你抚摸那些古老的石墙，你触摸的不仅是一座建筑，更是一部用石头、羊皮纸和薰衣草写就的，关于生存、信仰与文明韧性的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完美体验蒂豪尼，建议安排一整天时间，最好在工作日前往以避开周末拥挤的本地游客。理想的节奏是“上午探幽，下午沉醉”。上午十点前抵达，趁大批旅行团未到，先去感受修道院内部的清静与庄严，仔细浏览地下墓穴和博物馆。中午在修道院阴影下的小广场长椅上简单野餐，俯瞰湖景。下午的时光全部交给阳光与紫色花海：先去最大的薰衣草田漫步拍照，然后沿着湖边小路悠闲地走向内湖，感受半岛的生态秘境。傍晚时分，一定要回到修道院前的观景台，等待一场终生难忘的巴拉顿湖日落，看夕阳把修道院的双塔和整片湖面染成金黄。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季游览薰衣草田时请务必走在田埂上，不要踏入花丛中踩踏，这是当地农民辛勤劳动的成果，也需要大家的爱护。
半岛上餐饮选择有限且价格稍高，如果预算有限，可以自带一些零食和水，在湖边找个风景优美的地方野餐。
穿一双绝对舒适的步行鞋！半岛地势起伏，景点之间全靠步行，石板路和山坡小径对脚力是不小的考验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场沿着满是鲜花的小径上行，第一眼看到修道院双塔在蓝天下的完整轮廓时，记得停下脚步深呼吸`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进修道院教堂内部，让眼睛适应昏暗的光线，然后抬头寻找穹顶上那些描绘圣本笃生平的华丽巴洛克壁画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌走下狭窄的旋梯，进入阴凉而肃穆的地下墓穴，在静谧中瞻仰那具安放安德鲁一世遗骸的红色大理石石棺`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院侧门走出，沿着飘满香气的阶梯花园下行，突然闯入那片广袤的、在阳光下闪烁的紫色薰衣草田`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完修道院博物馆后，别急着离开，绕到建筑群的东侧，那里有一片朝向内湖的静谧草坪，是观察水鸟和发呆的绝佳地点`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着“内湖之路”的木制栈道漫步，穿过芦苇荡，到达半岛另一侧的观景台，从截然不同的角度欣赏巴拉顿湖的辽阔`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回小镇中心，在Fő utca主街上找一家家庭餐馆，点一份用湖鱼烹制的“福格拉什”炖菜，配上一杯本地出产的“麝香奥托尼”白葡萄酒`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前半小时，务必回到修道院前广场的西侧边缘，找一块石头坐下，看着夕阳缓缓沉入湖对岸的巴空尼山后，天空与湖水上演色彩魔术`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`薰衣草田前景与湖心教堂`}</h4>
                  <p className="text-sm text-gray-700">{`站在主薰衣草田的上方田埂，用长焦镜头将前景的大片紫色与中景的修道院双塔、背景的湛蓝湖面压缩在同一画面，最佳时间是下午三四点，阳光侧射，花色最艳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院侧影与老船码头`}</h4>
                  <p className="text-sm text-gray-700">{`从小镇码头区域，向西侧湖岸走大约200米，可以回望整个修道院建筑群坐落在半岛岬角的全景，傍晚顺光时拍摄，建筑轮廓与水中倒影相映成趣。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下墓穴拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`进入墓穴后，等待一束阳光从入口的楼梯缝隙射入，照亮中央的祭坛或石棺，利用墓穴本身的深邃拱廊营造强烈的纵深感与神秘氛围，需耐心等待光线角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内湖观景台俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`从内湖观景台用广角镜头拍摄，将蜿蜒的木栈道、翠绿的内湖水面、金色的芦苇荡以及远处深蓝的主湖面全部囊括，构成层次极其丰富的生态画卷，清晨光线最为柔和通透。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇石板路与花窗`}</h4>
                  <p className="text-sm text-gray-700">{`在Fő utca主街寻找那些爬满藤蔓的古老院墙和色彩斑斓的木质窗棂，以它们为框架，拍摄远处偶然路过的修道士背影或提着篮子的当地老人，充满生活故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以极大消除湖面反光，让巴拉顿湖的蓝色呈现出更加深邃、丝绒般的质感，尤其在正午时分效果显著。`}</li>
                <li>• {`拍摄薰衣草时，尝试蹲下放低机位，以天空为纯净背景，能拍出薰衣草更加繁茂、充满画面的效果，避免杂乱的地面或远山干扰。`}</li>
                <li>• {`尊重当地居民和修道士的隐私，拍摄人物特写前请务必先微笑示意并取得同意，尤其是在教堂内部和修道院生活区附近。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景精品酒店之选`}</h4>
                  <p className="text-sm text-blue-800">{`紧邻码头的一家由古老庄园改造的精品酒店，每个房间都拥有面对巴拉顿湖的私人阳台或露台，在房间内就能听到轻柔的浪花声并欣赏无敌日落。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院脚下的宁静民宿`}</h4>
                  <p className="text-sm text-green-800">{`藏在修道院后方山坡上的传统石屋民宿，由一对老夫妇经营，花园里种满了香草和玫瑰，早餐的蜂蜜直接来自房东自家的蜂箱，充满了家的温暖。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`小镇中心的复古公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`位于主街上一栋百年建筑二楼，保留了高高的天花板和复古家具，推开木格窗就能看到街景和远处湖光，厨房设施齐全，适合想体验自炊乐趣的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端隐世水疗酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在半岛安静一侧的五星级酒店，拥有面朝葡萄园的户外无边泳池和顶级水疗中心，将湖光山色与现代奢华完美结合，是度蜜月或庆祝特殊日子的完美选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`蒂豪尼的住宿非常抢手，尤其是夏季薰衣草花期和音乐节期间，务必提前至少两到三个月预订，临时前往很可能一房难求。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`半岛夜晚极其安静，治安良好，可以放心地在星空下散步。但大部分餐厅晚上九点后就不再供餐，晚归的话最好提前备好零食。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多老式民宿不安装空调，夏季入住时建议选择带有厚实石墙或通风良好的房间，并确认是否有风扇提供。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒂豪尼很久以后，闭上眼，那片紫色和那片蓝色，依然会清晰地浮现。但比画面更持久的，是一种感觉——一种胸腔被清新空气和宁静感彻底洗涤过的通透。在这个被快节奏和数字信息淹没的时代，蒂豪尼提供了一种近乎奢侈的体验：完整的、不被切割的时光。在这里，你衡量时间的单位不是分秒，而是一声钟鸣到下一声钟鸣的间隔，是一阵风吹过薰衣草田又抵达你面庞的旅程，是夕阳从塔尖滑落到湖心所需的耐心等待。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它不仅仅是一个风景明信片式的景点。它是一本立体的、可触摸的、充满香气的历史书。你站在安德鲁一世的长眠之地，脚下是千年的基石；你呼吸着修道士们世代耕作的薰衣草香；你聆听的钟声，回响着语言最初诞生的印记。这种深厚的文化层理，让每一处风景都有了重量和温度。它告诉我们，最美的风景，从来都是人与自然、与历史、与信仰共同创作的作品。所以，如果你渴望一场不仅仅是“看过”，而是真正“感受过”和“连接过”的旅行，请务必把蒂豪尼放进你的清单。来这里，不是为了打卡，而是为了让自己慢下来，在湖风与钟声里，找回内心久违的、平稳的呼吸。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gyor-baroque-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔巴洛克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baroque Old Town of Győr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kalocsa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szekesfehervar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞克什白堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Székesfehérvár Old Town</p>
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
