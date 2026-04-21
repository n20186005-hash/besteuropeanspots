import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡波什堡 Kaposvár｜匈牙利隐秘的新艺术珍宝，一座活着的建筑博物馆 - 最佳欧洲景点',
  description: '说实话，在踏上卡波什堡的主广场之前，我对这座匈牙利南方小城毫无概念。但当第一眼看到那座奶油色、顶着墨绿色洋葱顶穹塔的市政厅时，我就知道，我来对地方了。阳光正暖洋洋地洒在广场上，空气里有刚出炉的kürtőskalács（烟囱卷）的肉桂甜香，混合着旁边咖啡馆飘出的浓郁咖啡味。广场四周的建筑像一场静默而华',
}

export default function KaposvarNewArtNouveauCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '卡波什堡市', href: '/destinations/hungary' },
            { label: '卡波什堡（多莫斯山丘包围的南特兰斯丹努比亚中心）', href: '/attractions/kaposvar-new-art-nouveau-center' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡波什堡（多莫斯山丘包围的南特兰斯丹努比亚中心）・Kaposvár・匈牙利・卡波什堡市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在踏上卡波什堡的主广场之前，我对这座匈牙利南方小城毫无概念。但当第一眼看到那座奶油色、顶着墨绿色洋葱顶穹塔的市政厅时，我就知道，我来对地方了。阳光正暖洋洋地洒在广场上，空气里有刚出炉的kürtőskalács（烟囱卷）的肉桂甜香，混合着旁边咖啡馆飘出的浓郁咖啡味。广场四周的建筑像一场静默而华丽的戏剧布景——没有布达佩斯那样令人窒息的宏伟，却有一种被精心呵护的、生活化的优雅。老人们坐在长椅上闲聊，年轻人骑着自行车从彩绘陶瓷装饰的拱门下穿过，这座城不是博物馆，它就是生活本身，只不过恰好住在百年艺术杰作里。
最打动人心的，是那种不经意的邂逅之美。你不需要买门票进入某个殿堂，艺术就镶嵌在日常的街角。转过一条安静的居民区街道，猛然撞见一栋公寓楼，其阳台的铁艺扭动成葡萄藤的模样，窗楣上贴着釉彩的花朵，门廊的壁画虽已斑驳，却依然能辨出女神轻柔的裙摆。微风拂过，那些铸铁的叶片仿佛真的在沙沙作响。这里的新艺术风格，带着一种匈牙利乡村的质朴与热情，那些装饰图案里常常出现罂粟花、麦穗、向日葵，是这片土地生长的浪漫。
傍晚时分，我沿着被多莫斯山丘温柔环抱的街道散步，橙红色的霞光给所有建筑的外立面镀上一层蜜糖色的光泽。阴影拉长，那些浮雕的细节更加立体。我意识到，卡波什堡的魅力在于它的“整体性”和“尺度感”。它没有单一的地标压垮你，而是用一连串和谐的建筑乐章，将你包围。你仿佛走入了一本立体的、关于“美好时代”的童话书，每一页都绘制精美，而且，书里的居民依然在此安居乐业，让故事继续生长。这里有一种失落的从容，让你忍不住放慢脚步，抬头，细看，然后由衷地赞叹。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在踏上卡波什堡的主广场之前，我对这座匈牙利南方小城毫无概念。但当第一眼看到那座奶油色、顶着墨绿色洋葱顶穹塔的市政厅时，我就知道，我来对地方了。阳光正暖洋洋地洒在广场上，空气里有刚出炉的kürtőskalács（烟囱卷）的肉桂甜香，混合着旁边咖啡馆飘出的浓郁咖啡味。广场四周的建筑像一场静默而华丽的戏剧布景——没有布达佩斯那样令人窒息的宏伟，却有一种被精心呵护的、生活化的优雅。老人们坐在长椅上闲聊，年轻人骑着自行车从彩绘陶瓷装饰的拱门下穿过，这座城不是博物馆，它就是生活本身，只不过恰好住在百年艺术杰作里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种不经意的邂逅之美。你不需要买门票进入某个殿堂，艺术就镶嵌在日常的街角。转过一条安静的居民区街道，猛然撞见一栋公寓楼，其阳台的铁艺扭动成葡萄藤的模样，窗楣上贴着釉彩的花朵，门廊的壁画虽已斑驳，却依然能辨出女神轻柔的裙摆。微风拂过，那些铸铁的叶片仿佛真的在沙沙作响。这里的新艺术风格，带着一种匈牙利乡村的质朴与热情，那些装饰图案里常常出现罂粟花、麦穗、向日葵，是这片土地生长的浪漫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`傍晚时分，我沿着被多莫斯山丘温柔环抱的街道散步，橙红色的霞光给所有建筑的外立面镀上一层蜜糖色的光泽。阴影拉长，那些浮雕的细节更加立体。我意识到，卡波什堡的魅力在于它的“整体性”和“尺度感”。它没有单一的地标压垮你，而是用一连串和谐的建筑乐章，将你包围。你仿佛走入了一本立体的、关于“美好时代”的童话书，每一页都绘制精美，而且，书里的居民依然在此安居乐业，让故事继续生长。这里有一种失落的从容，让你忍不住放慢脚步，抬头，细看，然后由衷地赞叹。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡波什堡（多莫斯山丘包围的南特兰斯丹努比亚中心）`} />
                <InfoRow label="英文名称" value={`Kaposvár`} />
                <InfoRow label="正式名称" value={`卡波什堡市`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`卡波什堡市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利南部绍莫吉州的首府，是19世纪末至20世纪初匈牙利新艺术运动（Szecesszió）保存最完好、最集中的省级城市典范。`} />
                <InfoRow label="建筑特色" value={`大量精美绝伦的新艺术风格建筑密集分布在市中心，以流畅的植物曲线、华丽的铁艺、色彩斑斓的陶瓷装饰和充满象征意义的雕塑为标志。`} />
                <InfoRow label="建筑风格" value={`以匈牙利本土化的新艺术风格（Szecesszió）为主，融合了民俗图案和浪漫民族主义情怀，兼收并蓄了维也纳分离派与法国新艺术的影响。`} />
                <InfoRow label="文化价值" value={`是一座“露天建筑博物馆”，生动展示了在奥匈帝国晚期，一个地方城镇如何通过文化艺术与城市建设，塑造独特的城市身份与市民自豪感。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市公共区域全天开放。核心新艺术建筑外观可随时参观，但内部（如市政厅、剧院、部分代表性住宅）通常在工作日办公时间（上午9点至下午5点）可进入门厅等公共区域参观，周末部分关闭。建议提前查询具体建筑的开放信息。重要的室内导览游通常只在夏季旅游季（5月至9月）的特定工作日或周末提供，需通过当地旅游信息中心预约。`} />
              <InfoRow label="门票价格" value={`漫步城市及欣赏建筑外观完全免费。进入部分公共建筑（如市政厅大厅、剧院前厅）免费。有组织的深度室内导览游（含进入私人公寓等）票价约为5000-8000匈牙利福林（约13-21欧元）。学生、老人及团体通常享有折扣。`} />
              <InfoRow label="地址" value={`Fő tér 1, 7400 Kaposvár, Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯李斯特·费伦茨国际机场出发，最便捷的方式是租车自驾，沿M7高速公路向南，转入67号公路，车程约2.5小时。乘坐公共交通：从布达佩斯Népliget汽车站搭乘长途巴士，班次频繁，约每1-2小时一班，车程2.5至3小时；或从布达佩斯Déli火车站乘坐火车，需在塞克什白堡或塔布换乘一次，总耗时约3-4小时。城内景点集中，步行即可轻松游览。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解卡波什堡为何成为一座新艺术宝库，得把时钟拨回到19世纪末。当时的匈牙利，在奥匈帝国框架下蓬勃生长着一种强烈的民族自觉与文化复兴浪潮。而卡波什堡，这个位于肥沃农业区中心、传统上以畜牧业和贸易为主的小镇，也迎来了它的“黄金时代”。铁路的通达带来了财富，更重要的是，带来了一批有远见、有文化品位的地方精英——律师、医生、商人和地主们。他们不满足于仅仅积累财富，更渴望建造一座配得上他们雄心与审美的现代城市。一场“城市美化运动”在这片土地上悄然兴起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这时，一位关键人物登场了：市长约瑟夫·迪内斯。他在1896年至1910年间掌舵，被誉为“现代卡波什堡的建造者”。迪内斯本人并非建筑师，但他是一位卓越的组织者和梦想家。他拥有一个清晰的愿景：要将卡什堡从一座普通的集镇，转变为绍莫吉州当之无愧的文化与行政中心。他大力推动基础设施建设，规划新的街道和广场，并以极大的热情拥抱当时欧洲最先锋的艺术风格——新艺术运动（在匈牙利被称为“Szecesszió”）。他不仅邀请布达佩斯知名的建筑师前来设计公共建筑，也鼓励本地的建筑大师施展才华。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场建筑盛宴开始了。来自布达佩斯的明星建筑师，如米克萨·罗特和亚诺什·夫伦茨，为城市贡献了地标性的作品。但更精彩的是本地天才的绽放。其中，耶诺·雷伯尔的名字必须被铭记。这位土生土长的建筑师，几乎以一己之力塑造了卡什堡的城市肌理。他设计的数十栋住宅、别墅和公共建筑，构成了今天城市漫步的核心画卷。雷伯尔的作品充满了想象力，他巧妙地将匈牙利民间艺术的元素——比如繁复的刺绣图案、传统的色彩——融入国际新艺术流畅的线条中。他设计的阳台像摇曳的花枝，门廊的壁画讲述着田园诗，陶瓷装饰板上绘着丰收的寓意。他的建筑不是冷冰冰的石头，而是有温度、会讲故事的家乡诗篇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，历史并非一帆风顺。两次世界大战给这座美丽的小城带来了创伤，一些建筑被损毁，黄金时代戛然而止。随后的社会主义时期，大规模、标准化的预制板建筑在郊区兴起，与市中心的历史肌理形成了鲜明对比。庆幸的是，或许是因为偏安一隅，或许是因为当地人深沉的热爱，市中心那一片珍贵的新艺术建筑群，奇迹般地在大时代的风浪中基本保存完好。它们像一群沉睡的巨人，等待着被重新唤醒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在政权更迭之后。随着遗产保护意识的觉醒，卡什堡人开始系统地修复这些骄傲的遗产。这不是简单的粉刷外墙，而是细致的考据与复原。如今，漫步街头，你会看到许多建筑门口挂着小小的信息牌，上面写着建筑师的名字、建造年份和最初主人的职业。这是一座懂得自己价值、并乐于向世人分享这份价值的城市。那些曾经代表新兴资产阶级品味的别墅和公寓楼，如今有的仍是私人住宅，有的变成了学校、办公室或文化机构，它们没有被供奉起来，而是继续在新时代履行着城市的使命，这或许是对历史最动人的延续。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少6-8小时）来沉浸式体验卡波什堡。最佳抵达时间是上午九点左右，这时阳光柔和，主广场开始苏醒，咖啡馆刚开门，你可以从容地开始探索。游览节奏应该是“慢走细看”，因为精华全在建筑立面的细节里。路线设计为一条环绕市中心的环线，从绝对核心的主广场（Fő tér）出发，先领略最重要的公共建筑，然后深入安静的住宅区街道，欣赏最精美的私人别墅，最后经过文化街区，在绿意盎然的公园结束行程。这样安排能让你由宏入微，逐步感受到这座城市从公共面孔到私人情感的层次，并在体力消耗最大的午后，有一段绿荫下的休憩时光。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周一来，因为许多公共建筑内部和博物馆可能闭馆。穿一双非常舒适的步行鞋，因为最美的发现往往需要你停下、后退、抬头，反复走动观看。如果时间允许，务必参加旅游信息中心组织的“新艺术徒步导览”，导游会带你进入一些寻常无法入内的建筑门厅，并讲述建筑背后家族的故事，价值远超门票。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政厅（Városháza）的洋葱顶下出发，绕着这座奶油色的新艺术杰作走一圈，仔细看它立面上那些陶瓷镶嵌的城镇徽章和充满动感的雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场，在Rippl-Rónai博物馆前停留，不仅看馆藏，更要欣赏这栋建筑本身优雅的弧形立面与精致的铁艺大门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Kossuth Lajos街慢慢走，让你的目光在街道两侧建筑的阳台、窗檐和门廊上游走，比赛谁发现的铁艺葡萄藤或陶瓷向日葵更多。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进Ady Endre街和Petőfi Sándor街组成的宁静住宅区，这里藏着耶诺·雷伯尔设计的别墅群，仿佛步入一个露天的建筑教科书章节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在装饰着华丽壁画和彩玻璃的Csiky Gergely剧院门口想象一下百年前首演夜绅士淑女们在此聚集的盛况。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那栋绰号“红房子”的非凡公寓楼，盯着它立面上那一片令人震撼的、如火焰又如海浪般的曲线红砖墙发呆几分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着绿树成荫的Berzsenyi Dániel街散步，欣赏两侧融合了新艺术与折衷风格的学院与官邸建筑，感受这里的学术气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终走进城市公园（Városi Park），在池塘边的长椅上坐下，回望你刚刚走过的建筑天际线，让所有视觉印象慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出洋葱顶穹塔的轮廓与立面雕塑的立体感，将广场上的行人作为前景，增添生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“红房子”对面的人行道`}</h4>
                  <p className="text-sm text-gray-700">{`利用长焦镜头压缩画面，聚焦于那片标志性的波浪形红砖墙面，等待一位穿着鲜艳的行人走过，形成色彩与动态的点睛之笔。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Ady Endre街别墅的铸铁阳台特写`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的柔和光线下，贴近拍摄阳台铁艺缠绕的植物细节，让背后色彩斑驳的墙面成为虚化的背景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城市公园池塘边的回望视角`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，站在公园池塘西侧，可以拍摄到远处市政厅尖顶与水中倒影，连同公园的绿树与桥梁，构成一幅层次丰富的风景画。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`Csiky剧院正门两侧的彩玻璃窗`}</h4>
                  <p className="text-sm text-gray-700">{`从剧院门厅内部，趁着午后阳光穿透彩玻璃时拍摄，捕捉光线在地面投射出的斑斓色彩和窗框本身的精致结构。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`春秋两季是最佳拍摄季节，植物装饰与建筑相得益彰，光线角度也更为理想。建议携带一枚广角镜头用于拍摄街道全景，以及一枚中长焦定焦镜头用于捕捉建筑立面上迷人的细节特写。拍摄私人住宅时请保持礼貌，不要将镜头对准居民窗户内部。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`市中心便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`主广场附近由新艺术风格公寓改造的精品酒店，房间天花板保留着原始的石膏玫瑰装饰，推开窗就能看到市政厅的穹顶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计爱好者之居`}</h4>
                  <p className="text-sm text-green-800">{`坐落于安静别墅区的一栋小型设计酒店，本身就是一栋经过现代改造的新艺术历史建筑，内部家具是复古与当代的巧妙混搭。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于多莫斯山丘上的家庭经营农家乐，房间宽敞朴素，清晨在露台能俯瞰被薄雾笼罩的卡波什堡全城屋顶，享受宁静的乡村早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`城市边缘一座19世纪末酿酒商别墅修复而成的豪华酒店，拥有大片花园、室内泳池，客房内是真正的古董家具，服务无可挑剔。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡波什堡非常安全，即使夜晚独自在市中心散步也倍感安心。如果选择夏季前往，尤其是七八月旅游旺季或当地节日期间，建议至少提前一个月预订住宿。住在市中心固然方便，但选择山丘上的住宿能获得独一无二的城市全景视角，且更加静谧。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡波什堡许多天后，我脑海里反复回放的，不是某一张具体的建筑照片，而是一种整体的、宁静而丰盈的感觉。在这个追求“打卡”和“爆款”的旅行时代，卡波什堡提供了一种反向的治愈。它不喧嚣，不张扬，甚至有点害羞地藏在匈牙利南部的丘陵之间。它要求的不是你的惊叹，而是你的注意。它教你重新学习“观看”的艺术——去看一扇窗的曲线，一道门楣上的花纹，一面墙砖的拼法。在这里，旅行回归到一种最本真的状态：散步、发现、与地方的生活节奏同步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市像一位从容的绅士，他经历过风华绝代的青年时代，也承受过中年的沉默与困顿，如今步入晚年，衣着依旧得体，骨子里透着不随时光褪色的优雅。他的故事不是关乎王侯将相，而是关于地方精英的抱负、建筑师的匠心，以及一代代普通市民的珍视与守护。它让我们看到，文化的生命力不在于规模的大小，而在于扎根的深度与传承的温度。在卡波什堡，艺术从未离开生活，历史仍在呼吸。对于任何厌倦了浮光掠影、渴望在旅途中获得内心宁静与美学滋养的深度行者来说，这里不是一个目的地，它是一个启示。它提醒我们，世界上还有一些地方，它们的美如此完整、如此谦和，正等待着懂得慢下来的心，去轻轻叩响它的大门。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/veszprem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veszprém Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/godollo-palace-sisi-royal-summer-residence" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格德勒宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gödöllő Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gyor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Győr</p>
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
