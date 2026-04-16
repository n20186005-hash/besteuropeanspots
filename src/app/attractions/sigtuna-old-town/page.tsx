import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '西格蒂纳 Sigtuna｜漫步在瑞典诞生地的千年石径上 - 最佳欧洲景点',
  description: '车子驶离斯德哥尔摩的喧嚣，窗外的风景渐渐被宁静的湖泊和连绵的森林替代。当你第一眼看到西格蒂纳，它不像一个“景点”，更像一个被时光轻轻放在梅拉伦湖畔的微缩模型。空气里有湖水微腥的气息，混合着老木头房子在阳光下散发的、类似蜂蜜和旧书的味道。声音是轻柔谱写的：自行车轮轧过鹅卵石的咔哒声，咖啡馆外杯碟的轻碰...',
}

export default function SigtunaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '西格蒂纳', href: '/attractions/sigtuna-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`西格蒂纳・Sigtuna・瑞典・西格蒂纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离斯德哥尔摩的喧嚣，窗外的风景渐渐被宁静的湖泊和连绵的森林替代。当你第一眼看到西格蒂纳，它不像一个“景点”，更像一个被时光轻轻放在梅拉伦湖畔的微缩模型。空气里有湖水微腥的气息，混合着老木头房子在阳光下散发的、类似蜂蜜和旧书的味道。声音是轻柔谱写的：自行车轮轧过鹅卵石的咔哒声，咖啡馆外杯碟的轻碰，还有远处帆船桅杆的摇晃声。这里没有巍峨的宫殿，没有拥挤的人潮，只有一条名为Stora Gatan的主街，笔直地伸向湖畔，两旁是糖果色系的低矮木屋，每一扇窗台上都怒放着天竺葵。
这条主街就是瑞典的起点。别小看这些看似童话般的木房子，它们的地基下，埋藏着一千年前的故事。走在这里，你不是在参观，而是在进行一场跨越千年的阅读。你的脚下，是瑞典最古老的街道；你目光所及的草丛和空地，曾矗立着十一座石头教堂，如今只剩下长满青苔的残垣，像大地留下的神秘密码。最奇妙的是，现代生活就这样毫无违和地嵌入在这些历史碎片里。古董店隔壁是设计师买手店，教堂废墟前的长椅上坐着吃冰淇淋的当地孩子。历史在这里不是标本，而是呼吸的一部分。
它的核心魅力，恰恰在于这种举重若轻。它背负着“瑞典最古老城镇”的沉重名号，展现出来的却是一种北欧特有的轻盈和日常。你会看到居民从一栋18世纪的黄色木屋里取出自行车，骑行经过一块刻着如尼文字的千年石碑，然后去湖边喂天鹅。这种将磅礴历史彻底生活化的能力，让西格蒂纳摆脱了博物馆式的沉闷，变成一处能让人心安理得浪费一个下午、发呆、阅读、或者只是看云如何掠过教堂塔尖的地方。它让你触摸到的，不是一个国家的宏大叙事开端，而是那个开端最初、最朴素、充满烟火气的模样。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离斯德哥尔摩的喧嚣，窗外的风景渐渐被宁静的湖泊和连绵的森林替代。当你第一眼看到西格蒂纳，它不像一个“景点”，更像一个被时光轻轻放在梅拉伦湖畔的微缩模型。空气里有湖水微腥的气息，混合着老木头房子在阳光下散发的、类似蜂蜜和旧书的味道。声音是轻柔谱写的：自行车轮轧过鹅卵石的咔哒声，咖啡馆外杯碟的轻碰，还有远处帆船桅杆的摇晃声。这里没有巍峨的宫殿，没有拥挤的人潮，只有一条名为Stora Gatan的主街，笔直地伸向湖畔，两旁是糖果色系的低矮木屋，每一扇窗台上都怒放着天竺葵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这条主街就是瑞典的起点。别小看这些看似童话般的木房子，它们的地基下，埋藏着一千年前的故事。走在这里，你不是在参观，而是在进行一场跨越千年的阅读。你的脚下，是瑞典最古老的街道；你目光所及的草丛和空地，曾矗立着十一座石头教堂，如今只剩下长满青苔的残垣，像大地留下的神秘密码。最奇妙的是，现代生活就这样毫无违和地嵌入在这些历史碎片里。古董店隔壁是设计师买手店，教堂废墟前的长椅上坐着吃冰淇淋的当地孩子。历史在这里不是标本，而是呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，恰恰在于这种举重若轻。它背负着“瑞典最古老城镇”的沉重名号，展现出来的却是一种北欧特有的轻盈和日常。你会看到居民从一栋18世纪的黄色木屋里取出自行车，骑行经过一块刻着如尼文字的千年石碑，然后去湖边喂天鹅。这种将磅礴历史彻底生活化的能力，让西格蒂纳摆脱了博物馆式的沉闷，变成一处能让人心安理得浪费一个下午、发呆、阅读、或者只是看云如何掠过教堂塔尖的地方。它让你触摸到的，不是一个国家的宏大叙事开端，而是那个开端最初、最朴素、充满烟火气的模样。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`西格蒂纳`} />
                <InfoRow label="英文名称" value={`Sigtuna`} />
                <InfoRow label="正式名称" value={`Sigtuna`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`西格蒂纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞典王国最早的钱币在此铸造，是瑞典国家身份的摇篮。`} />
                <InfoRow label="建筑特色" value={`保存完好的中世纪木质排屋与十一座教堂遗址废墟形成独特对话。`} />
                <InfoRow label="建筑风格" value={`瑞典传统木质建筑风格，混搭罗马式和哥特式教堂遗址。`} />
                <InfoRow label="文化价值" value={`活着的露天历史教科书，生动展示了维京时代向中世纪基督教社会的过渡。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇街道及教堂遗址露天区域全天开放。主要博物馆（Sigtuna Museum）和旅游局开放时间随季节变化：夏季（6月至8月）通常为每天10:00-17:00；春秋季（5月、9月）开放时间缩短，常为11:00-16:00，周一可能闭馆；冬季（10月至次年4月）开放时间极为有限，周末或需预约。具体信息行前务必查阅官网。大部分精品店和咖啡馆在夏季午后及周末营业，冬季许多店铺歇业。`} />
              <InfoRow label="门票价格" value={`漫步小镇本身完全免费。Sigtuna Museum门票：成人约80-100瑞典克朗，学生及青少年有优惠，18岁以下儿童通常免费。家庭套票约200-250瑞典克朗。部分季节性导览游或特色工作坊需额外付费，价格在150-300瑞典克朗不等。教堂遗址公园免费进入。`} />
              <InfoRow label="地址" value={`Stora Gatan, 153 30 Sigtuna，瑞典`} />
              <InfoRow label="交通方式" value={`从斯德哥尔摩出发最为便捷。搭乘斯德哥尔摩地铁红线至Märsta站，出站后转乘570、575或579路公交车，约15-20分钟即可直达西格蒂纳镇中心（Sigtuna Busstation）。全程从斯德哥尔摩中央车站算起约需50-70分钟。公交车次频繁，可使用SL交通卡或手机APP购票。若自驾，沿E4高速公路向北，从Märsta出口驶出，跟随路标约10分钟即达，镇中心外围有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时钟拨回公元980年左右。那时的斯堪的纳维亚半岛，维京人的长船仍令欧洲海岸颤抖，但变革的风已经吹起。瑞典的第一位基督教国王奥洛夫·舍特康努格，做了一个精明的决定：他在梅拉伦湖这个战略要地，建立了一个全新的定居点，就是西格蒂纳。有趣的是，建立它的初衷之一，竟是为了对抗来自南方的基督教传播，巩固古老的北欧诸神信仰。但历史充满了讽刺，正是西格蒂纳，后来成为了基督教在瑞典扎根的关键据点。国王本人后来也受洗皈依，这里开始大量建造石头教堂，取代传统的维京神殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`西格蒂纳的黄金时代持续了近三百年。它不仅是宗教中心，更是政治和经济的心脏。瑞典最早的钱币——“西格蒂纳币”就是在这里的铸币厂生产的，上面刻着国王的名字和十字架，象征着神权与王权的结合。你可以想象，当时的码头何等繁忙，来自欧洲各地的商品在此交换，工匠、商人、传教士穿梭在由木排屋和石头教堂构成的街道上。它是一座精心规划的城市，笔直的主街和规则的街区布局，展现了早期城镇规划的雏形，与维京时代杂乱无章的村落截然不同。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就像许多曾经辉煌的城镇一样，西格蒂纳的命运在13世纪后期发生了转折。斯德哥尔摩的崛起，汉萨同盟贸易网络的东移，以及不断发生的战争和劫掠（比如1311年遭到 Novgorod 军队的严重破坏），让西格蒂纳逐渐失去了中心地位。石头教堂一座接一座地停止使用，荒废，坍塌。木材和石料被居民拆走另作他用，只剩下地基和部分墙垣，慢慢被泥土和野草覆盖。小镇从王国的前沿，退守为一个安静的湖畔集市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但“衰落”在这里并非一个悲伤的词汇，而是一次优雅的转身。西格蒂纳没有消失，它只是睡着了。那些中世纪后期的木质排屋在教堂遗址旁继续被建造和使用，形成了我们今天看到的独特景观：古老的废墟与依然鲜活的古老木屋并肩而立。十八、十九世纪，它成了斯德哥尔摩富商和艺术家钟爱的避暑胜地，这种宁静优雅的气质被延续下来。直到现代考古学的介入，才重新唤醒地下的记忆，将那些教堂地基和如尼石碑清理出来，向世人轻声诉说着它辉煌的过往。西格蒂纳的故事，是一个关于起源、变迁与持久生命力的完美寓言。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的游览方式是进行一次从南到北、从历史到湖畔的沉浸式徒步。建议在上午10点前抵达，此时光线柔和，旅游团尚未涌入，小镇刚刚苏醒的氛围最为迷人。整体游览可以安排4-6个小时，节奏务必放慢，因为西格蒂纳的美在于细节和感受。先从旅游局获取一张标有所有遗址点的地图，这就像拿到了千年故事的寻宝图。沿着主街（Stora Gatan）由南向北漫步是主线，但一定要随时拐进两侧的小巷，探访那些隐藏的教堂遗址和古朴花园。最后将行程终结在梅拉伦湖畔，看着帆船和夕阳，把刚才汲取的历史感慢慢沉淀。这样的安排能让你线性地体验小镇从历史核心到自然湖畔的空间叙事。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适的步行鞋，因为你要在鹅卵石路、草地和土径之间不断切换。尊重每一个用低矮木栅栏围起来的遗址，那是受保护的考古现场，不要踏入。夏季周末下午可能会迎来从斯德哥尔摩来的一日游小高峰，如果想享受宁静，尽量安排在工作日上午或傍晚。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在旅游局那栋可爱的木屋里拿一份免费地图，听工作人员用带着瑞典腔调的英语热情地指出几个最容易错过的如尼石碑位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着Stora Gatan由南向北开始漫步，用手指轻轻触摸那些被岁月打磨出光泽的古老木质墙板，留意每家店铺门口独具匠心的铁艺招牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街中段向东拐一个小弯，突然闯入圣佩尔遗址公园，站在那片被青草覆盖的宏伟教堂地基中央，感受只有风声和鸟鸣的绝对寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开Sigtuna Museum厚重的木门，在昏暗温馨的灯光下仔细端详那些出土的西格蒂纳古币和维京首饰，想象它们千年前被主人佩戴时的模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家有户外座位的咖啡馆，比如藏在庭院里的Apotekarnes Café，点一份经典的“公主蛋糕”和手冲咖啡，看着主街上不慌不忙的人流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`散步到最北端的玛丽亚教堂，这是镇上唯一完整保存至今的中世纪教堂，走进内部感受那份简约而庄严的白色空间，点燃一支蜡烛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到梅拉伦湖的栈桥边，租一条独木舟或者就静静坐着，看对岸的森林和天空的云倒映在如镜的湖面上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程前逛逛主街上的独立设计小店，带一件融合了如尼文字元素的现代陶瓷或纺织品回家，把古老的故事用当代的方式延续。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣劳伦斯教堂遗址的东侧断墙`}</h4>
                  <p className="text-sm text-gray-700">{`在下午三四点的侧逆光下，拍摄长满青苔的古老石墙与后方鲜艳的黄色木屋的强烈对比，构图时让遗址占据前景大部。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Stora Gatan主街的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在街道中段，利用两侧色彩柔和的木质排屋形成的自然引导线，拍出街道无限延伸、充满故事感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`玛丽亚教堂内仰望塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光能透过高窗射入室内的时刻，站在中殿仰拍穹顶和塔楼内部，捕捉光线中飞舞的尘埃，营造神圣静谧的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`梅拉伦湖畔的黄昏全景`}</h4>
                  <p className="text-sm text-gray-700">{`从湖面的小码头回望小镇，在日落后的蓝调时刻，拍摄教堂塔楼和暖色调木屋的灯光依次亮起，倒映在平静湖水中的全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某条小巷尽头的意外发现`}</h4>
                  <p className="text-sm text-gray-700">{`随意拐进一条小巷，可能会发现一座爬满藤蔓的小屋或一个堆满鲜花的后院，用长焦镜头压缩空间，拍出充满生活诗意的细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`斯堪的纳维亚的夏季光线非常柔和且持久，“黄金时刻”可能长达数小时，善加利用。拍摄私人住宅和花园时请保持距离，使用长焦镜头，尊重当地人的隐私。冬季来访则能拍到教堂遗址覆雪、木屋灯火通明的绝美画面，但需注意防寒和电池保暖。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`主街旁一栋18世纪木屋里的温馨B&B，房间天花板是古老的木梁，早晨女主人会在一楼厨房准备好满满一桌北欧风味的家常早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于镇中心安静角落的Sigtuna Stads Hotell，部分房间拥有能看到教堂遗址的庭院景观，酒店本身的历史建筑充满韵味，附设的餐厅很不错。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在湖畔、拥有私人沙滩和小船库的Sigtunabaden酒店，这是一座建于19世纪末的宏伟水疗宫殿，在面湖的桑拿房里蒸完后可以直接跳进梅拉伦湖。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`租住一栋属于小镇历史建筑保护名录的独家夏日别墅，通常拥有面向花园或湖景的露台，让你完全融入当地生活节奏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`西格蒂纳的住宿数量有限，尤其在夏季和周末非常抢手，务必提前数月预订。小镇治安极好，夜晚非常宁静，可以放心散步。选择湖畔住宿意味着离中心遗址区有10-15分钟步行距离，但换来的是无与伦比的湖光山色和静谧。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开西格蒂纳的时候，我的口袋里装了几颗从湖边捡来的光滑鹅卵石，指尖似乎还残留着触摸那些古老木墙时的温润触感。这个地方教会我的，是一种关于“根源”的温柔认知。我们追寻历史，往往期待看到不朽的丰碑、金碧辉煌的殿堂，但西格蒂纳告诉我们，一个国家的开端，可能就是这样一条朴素笔直的街道，几间工匠的木屋，和一群试图在信仰与世俗间找到平衡的人们。它的伟大不在于雄伟，而在于延续；不在于保存完美，而在于将破碎的废墟坦然纳入日常生活的风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求高速和巨变的时代，西格蒂纳的存在像是一个温柔的锚点。它提醒我们，文明的生命力不仅在于崛起时的辉煌，更在于沉寂时的坚守，在于后代居民在那些遗址旁继续生活、相爱、经营咖啡馆的平常心中。每一位热爱深度游的旅人都该来这里，不是为了打卡“最古老”的名号，而是为了体验一种时间可以如何缓慢流淌、历史如何与生活和解的独特心境。在这里走一走，你会获得一种难得的平静，仿佛也触碰到了自己内心那条沉默而坚固的“主街”，知道无论世界如何喧嚣，有些根本的东西，从未改变。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
