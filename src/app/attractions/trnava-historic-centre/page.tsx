import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特尔纳瓦 Trnava｜斯洛伐克小罗马，被十一座教堂塔楼守护的时光琥珀 - 最佳欧洲景点',
  description: '你从火车站走出来，沿着一条平平无奇的现代街道走，心里或许还在嘀咕这“小罗马”的名号是否言过其实。然后，一个转弯，时光的闸门仿佛“咔哒”一声打开。眼前不再是街道，而是被暖黄色墙体夹着的、由不规则石块铺就的小巷。你的视线不由自主地被向上牵引——就在巷子的尽头，一座灰黑色、顶端戴着洋葱式青铜圆顶的塔楼，正...',
}

export default function TrnavaHistoricCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '特尔纳瓦', href: '/attractions/trnava-historic-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特尔纳瓦・Trnava・斯洛伐克・特尔纳瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从火车站走出来，沿着一条平平无奇的现代街道走，心里或许还在嘀咕这“小罗马”的名号是否言过其实。然后，一个转弯，时光的闸门仿佛“咔哒”一声打开。眼前不再是街道，而是被暖黄色墙体夹着的、由不规则石块铺就的小巷。你的视线不由自主地被向上牵引——就在巷子的尽头，一座灰黑色、顶端戴着洋葱式青铜圆顶的塔楼，正静穆地刺入斯洛伐克澄澈的蓝天。紧接着，你向左看，另一座更纤细、带着哥特式尖顶的塔楼从红瓦屋顶后探出头来；向右看，又是一座。它们不像维也纳或布拉格的塔楼那样争奇斗艳，而是像一群沉默的哨兵，各自守着一个街角，用目光交织成一张网，将整个老城温柔地笼罩起来。
空气里有好闻的味道。上午刚出炉的“Trdelník”（一种传统烟囱卷蛋糕）的焦糖甜香，从某个地下室烘焙坊飘上来，混合着老建筑石头缝里渗出的、雨后般的微凉湿气。你走到中心广场，声音变得丰富起来。不是游客的喧哗，而是本地生活的底噪：咖啡馆外老人瓷勺搅拌咖啡的轻响，市政厅钟楼每个整点悠扬报时的钟声，以及从敞开的教堂大门内流泻出的、宛如实质的管风琴低吟。你会忽然明白，这里的核心魅力不是某个单一的宏伟建筑，而是一种由宗教与日常共同酿造出的、密度极高的生活氛围。教堂不是博物馆，它们是社区的心脏，老太太提着菜篮子进去点一支蜡烛，年轻人坐在教堂外的长椅上吃着冰淇淋晒太阳，神圣与世俗没有界限，自然得像呼吸。
最打动人的，是那种“刚刚好”的尺度与从容。你不会被磅礴的历史压得喘不过气，也不会因过于精致而感到疏离。这里的一切都是可触碰、可融入的。你可以花一整个下午，什么也不做，就坐在圣尼古拉斯大教堂对面的咖啡馆，看光影如何从巴洛克立面的雕塑上缓缓爬过，看鸽群如何绕着塔楼盘旋，最终落在某位圣徒雕像的肩头。夜幕降临时，所有塔楼会被暖黄色的灯光勾勒出来，悬浮在深蓝色的夜空里，比星空更坚实，又比梦境更真实。那一刻，你会觉得，自己不是发现了一个景点，而是偶然闯入了一个依然在平稳跳动着的、中世纪欧洲城镇的心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从火车站走出来，沿着一条平平无奇的现代街道走，心里或许还在嘀咕这“小罗马”的名号是否言过其实。然后，一个转弯，时光的闸门仿佛“咔哒”一声打开。眼前不再是街道，而是被暖黄色墙体夹着的、由不规则石块铺就的小巷。你的视线不由自主地被向上牵引——就在巷子的尽头，一座灰黑色、顶端戴着洋葱式青铜圆顶的塔楼，正静穆地刺入斯洛伐克澄澈的蓝天。紧接着，你向左看，另一座更纤细、带着哥特式尖顶的塔楼从红瓦屋顶后探出头来；向右看，又是一座。它们不像维也纳或布拉格的塔楼那样争奇斗艳，而是像一群沉默的哨兵，各自守着一个街角，用目光交织成一张网，将整个老城温柔地笼罩起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气里有好闻的味道。上午刚出炉的“Trdelník”（一种传统烟囱卷蛋糕）的焦糖甜香，从某个地下室烘焙坊飘上来，混合着老建筑石头缝里渗出的、雨后般的微凉湿气。你走到中心广场，声音变得丰富起来。不是游客的喧哗，而是本地生活的底噪：咖啡馆外老人瓷勺搅拌咖啡的轻响，市政厅钟楼每个整点悠扬报时的钟声，以及从敞开的教堂大门内流泻出的、宛如实质的管风琴低吟。你会忽然明白，这里的核心魅力不是某个单一的宏伟建筑，而是一种由宗教与日常共同酿造出的、密度极高的生活氛围。教堂不是博物馆，它们是社区的心脏，老太太提着菜篮子进去点一支蜡烛，年轻人坐在教堂外的长椅上吃着冰淇淋晒太阳，神圣与世俗没有界限，自然得像呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种“刚刚好”的尺度与从容。你不会被磅礴的历史压得喘不过气，也不会因过于精致而感到疏离。这里的一切都是可触碰、可融入的。你可以花一整个下午，什么也不做，就坐在圣尼古拉斯大教堂对面的咖啡馆，看光影如何从巴洛克立面的雕塑上缓缓爬过，看鸽群如何绕着塔楼盘旋，最终落在某位圣徒雕像的肩头。夜幕降临时，所有塔楼会被暖黄色的灯光勾勒出来，悬浮在深蓝色的夜空里，比星空更坚实，又比梦境更真实。那一刻，你会觉得，自己不是发现了一个景点，而是偶然闯入了一个依然在平稳跳动着的、中世纪欧洲城镇的心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特尔纳瓦`} />
                <InfoRow label="英文名称" value={`Trnava`} />
                <InfoRow label="正式名称" value={`Trnava`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`特尔纳瓦`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克最古老的特许城镇之一，曾长期作为匈牙利王国及后哈布斯堡王朝的宗教中心，被誉为“斯洛伐克的罗马”。`} />
                <InfoRow label="建筑特色" value={`紧凑的中世纪城镇布局被保存完好的防御城墙环绕，天际线由十一座不同时期、风格各异的教堂塔楼主导，形成独一无二的城市轮廓。`} />
                <InfoRow label="建筑风格" value={`哥特式、文艺复兴式、巴洛克式及新古典主义风格在教堂与市民建筑上和谐交融。`} />
                <InfoRow label="文化价值" value={`是斯洛伐克天主教信仰的摇篮与精神中心，其宗教建筑群见证了中欧地区复杂的宗教与民族变迁史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`历史城区公共区域全天开放。各主要教堂开放时间不一，通常为周一至周六上午9点至下午5点，周日主要为弥撒时间，游客参观有限制。圣尼古拉斯大教堂（Dóm sv. Mikuláša）夏季（4月至10月）开放时间延长，冬季可能提前关闭。建议行前在市政旅游局官网核对最新时间，宗教节日期间变动较大。`} />
              <InfoRow label="门票价格" value={`进入特尔纳瓦老城区本身免费。主要教堂内部参观免费，但通常设有捐赠箱，建议投入1-2欧元以支持维护。登顶圣约翰洗礼者教堂（Kostol sv. Jána Krstiteľa）的塔楼需支付约3欧元，可俯瞰全城塔楼群。城市博物馆门票约4欧元，学生有优惠。`} />
              <InfoRow label="地址" value={`Námestie sv. Mikuláša 1, 917 01 Trnava, Slovakia`} />
              <InfoRow label="交通方式" value={`从斯洛伐克首都布拉迪斯拉发出发最为方便。在布拉迪斯拉发主火车站（Hlavná stanica）乘坐火车，约45分钟即可抵达特尔纳瓦火车站，班次频繁，每小时至少有2-3班，票价约3-5欧元。出火车站后，老城区就在步行15分钟的范围内，沿着Hlavná大街直走即可到达。若自驾，可将车停在老城区外围的收费停车场，老城内部为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起特尔纳瓦的故事，得先从它的“特权”讲起。1238年，匈牙利国王贝拉四世一纸特许状，赋予了这片河边聚落城市的权利与坚固的城墙。这就像在中欧的棋盘上，落下了一颗关键的棋子。它很快凭借优越的地理位置，成了连接布达佩斯与波罗的海商路的重要驿站，财富随之累积。但真正改变它命运的，不是商人，而是神职人员。16世纪，奥斯曼土耳其的铁蹄蹂躏了匈牙利大片领土，连首都布达都沦陷了。就在这风雨飘摇之际，特尔纳瓦因其坚固的城墙和相对安全的位置，被选中成为了匈牙利天主教会的“避难所”和新的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大主教们带着珍贵的圣物和档案来了，学者和神学家们也蜂拥而至。想象一下当时的场景：这座原本只是繁荣的商业小镇，突然变成了整个王国宗教信仰的“备份硬盘”和“安全屋”。随之而来的，是前所未有的建设热潮。一座座教堂拔地而起，不是为了观赏，而是为了实际的功能——需要地方举行大型宗教会议，需要神学院培养新一代的教士，需要强大的精神堡垒来凝聚人心。其中最著名的，莫过于圣约翰洗礼者教堂及其附属的大学。1635年，枢机主教彼得·帕兹马尼在此建立了特尔纳瓦大学，这是如今布达佩斯罗兰大学的前身，也是当时哈布斯堡王朝东部最重要的知识殿堂。一时间，拉丁语的辩论声回荡在街头，印刷机嗡嗡作响，特尔纳瓦成了中欧的“智慧灯塔”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的剧本总是充满转折。18世纪，玛丽亚·特蕾莎女王决定将大学迁往更靠近帝国中心的布达佩斯。对特尔纳瓦来说，这无疑是抽走了城市最活跃的学术灵魂，它从光芒四射的“首都”变回了区域性的主教城。但塞翁失马，焉知非福？正是这种“失势”，让它意外地躲过了19世纪工业化浪潮的剧烈改造，也避开了20世纪世界大战的毁灭性轰炸。那些巴洛克式的宫殿、文艺复兴时期的联排别墅、蜿蜒的小巷和最重要的——十一座教堂塔楼，都被原封不动地保存了下来，像一枚被遗忘在时间洪流中的琥珀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你如今看到的城市景观，是层层叠加的结果。哥特式的圣雅各布教堂地基上，矗立着巴洛克式的穹顶；文艺复兴风格的市政厅钟楼，俯瞰着新古典主义立面的大剧院。不同时代的建筑并肩而立，没有谁试图压倒谁，反而形成了一种奇特的和谐。二战后的共产主义时期，城市边缘建起了标准化的面板楼居民区，但老城核心被奇迹般地保留，继续在缓慢的节奏中生活。1990年后，它重新找回了自己“斯洛伐克罗马”的宗教地位，大主教区再度回归。今天，走在城里，你既能感受到千年宗教传统的重量，也能触摸到后工业时代小城的慵懒与自足。它的历史不是断代的，而是像一棵老树的年轮，清晰、连续，每一圈都讲述着生存、适应与坚守的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议选择一个晴朗的上午（最好是工作日，周末当地人较多）抵达，留出至少5-6小时进行沉浸式漫步。游览节奏宜慢不宜快，精髓在于“迷失”与“发现”。上午光线柔和，适合拍摄塔楼外景和广场氛围；中午可悠闲午餐，感受当地生活气息；下午深入探索教堂内部和城墙公园，傍晚则是登塔观景和欣赏夜景的黄金时间。这样安排能让你体验到特尔纳瓦从清晨苏醒到华灯初上的完整韵律，充分领略其建筑之美与生活之趣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入任何正在举行宗教仪式的教堂时，请保持绝对安静并避免在堂内随意走动，尊重当地信徒。老城石板路凹凸不平，务必穿一双舒适防滑的鞋子。警惕非常热情的“导游”主动搭讪，正规信息中心在市政厅楼下。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站沿着Hlavná大街轻松步行一刻钟，当脚下变成古老的石块路，眼前出现第一座塔楼尖顶时，便算正式进入了老城的时光结界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直奔中心地标圣尼古拉斯大教堂，不要急着进去，先绕着它走一圈，感受其庞大的体积与混合了哥特式结构与巴洛克式装饰的独特气质，然后推开那扇厚重的木门，让内部恢弘的管风琴声与金色祭坛的光芒将你包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂北侧钻进狭窄的Mikulášska小巷，像本地人一样穿行，偶然抬头便会与圣约翰洗礼者教堂那著名的双塔正面来个惊喜的对视。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进大学建筑群宁静的巴洛克式庭院，在回廊下坐一会儿，想象几个世纪前学生们在这里匆匆走过的身影，如今这里只剩下鸽子和风的低语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过Halenárska街，来到曾经的犹太区，在简洁的犹太会堂建筑（现为艺术馆）前停留片刻，感受这座城市历史中同样重要的另一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从犹太区信步走向保存最完好的那段古城墙，登上城墙公园的缓坡，从这里回望，整个老城“塔楼森林”的天际线将在你眼前如画卷般展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城墙下的露天咖啡馆点一杯斯洛伐克啤酒或柠檬水，看着放学后的孩子们在草坪上追逐，彻底融入小城午后悠闲的节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必在日落前赶到圣约翰洗礼者教堂，买票爬上其塔楼，在金色的夕阳中，俯瞰全城所有塔楼被拉长的影子，以及远处斯洛伐克乡村的平缓田野。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙公园（Mestské opevnenie）北段斜坡`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点，夕阳西侧光，以此为前景，能将圣尼古拉斯大教堂的青铜穹顶与后方市政厅钟楼一同纳入镜头，构图饱满有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣约翰洗礼者教堂（Universitný kostol）内部主楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光从侧面高窗射入，形成 dramatic 的光束，站在楼梯中段向上或向下拍摄旋转的巴洛克式楼梯曲线，极具几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`特尔斯提街（Trojičné námestie）尽头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，街道空无一人，利用长焦镜头压缩空间，让路尽头圣雅各布教堂的巴洛克立面充满画面，两侧彩色老建筑形成自然的引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`大学庭院（Univerzitná）拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，避开强光区，拍摄拱廊下深邃的阴影与阳光照亮的中庭形成的明暗对比，人物行走其中可成为生动的点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从圣海伦娜教堂（Kostol sv. Heleny）小广场望向钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后半小时），天空呈深蓝色，钟楼灯光亮起，使用三脚架长时间曝光，能拍出静谧而富有历史感的夜景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部允许拍照但严禁使用闪光灯，有些珍贵祭坛区可能有禁止拍摄标志，请务必遵守。斯洛伐克人对拍照总体友善，但拍摄人物特写前最好微笑示意。利用多云天气的柔光，能更好地捕捉建筑立面的纹理细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心之选`}</h4>
                  <p className="text-sm text-blue-800">{`由18世纪贵族宅邸改造的精品酒店，房间拥有极高的挑高和复古家具，早餐在带壁画拱顶的地下室餐厅享用，出门就是教堂广场。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城墙边的宁静`}</h4>
                  <p className="text-sm text-green-800">{`坐落在古城墙脚下的设计师民宿，现代极简风格与古老石墙形成奇妙对话，主人会贴心地为你手绘一份私人美食地图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`火车站附近性价比`}</h4>
                  <p className="text-sm text-yellow-800">{`步行到老城仅十分钟的现代公寓式酒店，房间宽敞带小厨房，适合家庭或长住的旅人，楼下就有超市和电车，生活便利。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于特尔纳瓦近郊村庄的一座19世纪小型庄园，被花园和果园环绕，提供地道的斯洛伐克家常晚餐，体验真正的乡村宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内住宿数量有限且非常安静，夜晚几乎听不到车声，只有隐约的钟声。旺季（夏季和圣诞市场期间）需提前数月预订。城市治安良好，但无论住在哪里，夜晚散步都很安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特尔纳瓦许久后，那些塔楼的轮廓依然会不时在脑海里浮现。我常常想，在这个追求“最高”、“最大”、“最炫”的世界里，为什么这座小城会给人如此持久而安宁的触动？或许正是因为它不追求那些。它安然于自己的“小”，自己的“慢”，自己的“多”。十一座塔楼，不是虚荣的纪念碑，而是社区生活绵延不绝的脉搏，是信仰与日常交织了八百年的证明。在这里，历史不是被封存在玻璃柜里的标本，而是你脚下被磨得光滑的石块，是咖啡馆老人脸上安静的皱纹，是傍晚时分从每座教堂依次响起的、相互应和的钟声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了在热门景点的人潮中挣扎，如果你渴望的旅行不仅仅是打卡，而是一种“呼吸”，一次与另一种时间流速的对话，那么请来特尔纳瓦。它不会用震撼的奇观冲击你，却会用一种笃定的、温暖的、层层渗透的方式，治愈你的匆忙。它像一位温和的长者，静静地坐在欧洲的中心，告诉你：看，生活可以这样，历史可以这样活着。在这里走上一圈，你会带走一片内心的宁静，以及对“家园”一词更深厚、更具体的理解。这，正是深度旅行所能馈赠的最宝贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bardejov-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔代约夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bardejov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cicmany-village-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奇
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奇奇马尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Čičmany</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-presov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Prešov</p>
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
