import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝唐堡 Bettembourg｜探访卢森堡南部的隐秘宝石，在童话森林与古老教堂间穿梭的治愈一日 - 最佳欧洲景点',
  description: '如果你从卢森堡市搭乘火车南下，不过十分钟光景，窗外的景致就从峡谷峭壁的险峻，切换成缓缓起伏的绿色丘陵与整齐的田野。贝唐堡站到了，走出小小的站台，空气里有一股混合了青草、湿润土壤和远处淡淡工业气息的味道——提醒你这里已是卢森堡重要的工业与物流腹地。但别急着下结论，跟着那些脸上带着雀跃笑容、牵着孩子的本',
}

export default function BettembourgLuxembourgPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '贝唐堡', href: '/destinations/europe' },
            { label: '贝唐堡', href: '/attractions/bettembourg-luxembourg' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝唐堡・Bettembourg・卢森堡・贝唐堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从卢森堡市搭乘火车南下，不过十分钟光景，窗外的景致就从峡谷峭壁的险峻，切换成缓缓起伏的绿色丘陵与整齐的田野。贝唐堡站到了，走出小小的站台，空气里有一股混合了青草、湿润土壤和远处淡淡工业气息的味道——提醒你这里已是卢森堡重要的工业与物流腹地。但别急着下结论，跟着那些脸上带着雀跃笑容、牵着孩子的本地家庭一起走，穿过几条安静的住宅街道，你会突然被一阵欢快的音乐和孩子们的笑声吸引。转个弯，一片茂密的树林入口就在眼前，那里就是奇迹公园，贝唐堡跳动着的、绿色的心脏。
走进公园，就像一头扎进了一个被施了魔法的森林。这里的魔力不在于多么炫目的高科技，而在于一种手作感的真诚与自然融合的巧妙。你会听见真实的羊驼在围栏里轻声叫唤，看见孔雀在不远处的草坪上开屏；转过一个爬满藤蔓的小木屋，可能就遇上了《格林童话》里的小矮人雕像，他们藏在树根下，笑得憨态可掬。空气是清甜的，混杂着松木的香气、烤华夫饼的黄油味，还有游乐小火车驶过时飘来的那一点点怀旧的煤油味。这里没有环球影城式的尖叫，只有一种慢悠悠的、沉浸在故事书插画里的惬意。你会发现，很多卢森堡爷爷奶奶，就坐在长椅上，看着孙辈们奔跑，眼神里满是安宁。
而当你在下午，沿着另一条路走向镇中心，氛围陡然沉静下来。圣米迦勒教区教堂那浅色的石质塔楼，在居民楼的簇拥下稳重地矗立着。推开那扇厚重的木门，外界所有的喧闹瞬间被隔绝。内部是简洁的，光线透过彩绘玻璃，在长椅和石地上投下静谧的色彩。偶尔有本地老人进来，静静坐在前排，低头祈祷。那一刻你会明白，奇迹公园的欢笑与教堂的肃穆，并非割裂的两面，而是这个社区完整生活韵律的一体两面——他们既需要一片守护童真与家庭欢聚的森林，也需要一个安放信仰与沉思的宁静角落。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你从卢森堡市搭乘火车南下，不过十分钟光景，窗外的景致就从峡谷峭壁的险峻，切换成缓缓起伏的绿色丘陵与整齐的田野。贝唐堡站到了，走出小小的站台，空气里有一股混合了青草、湿润土壤和远处淡淡工业气息的味道——提醒你这里已是卢森堡重要的工业与物流腹地。但别急着下结论，跟着那些脸上带着雀跃笑容、牵着孩子的本地家庭一起走，穿过几条安静的住宅街道，你会突然被一阵欢快的音乐和孩子们的笑声吸引。转个弯，一片茂密的树林入口就在眼前，那里就是奇迹公园，贝唐堡跳动着的、绿色的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进公园，就像一头扎进了一个被施了魔法的森林。这里的魔力不在于多么炫目的高科技，而在于一种手作感的真诚与自然融合的巧妙。你会听见真实的羊驼在围栏里轻声叫唤，看见孔雀在不远处的草坪上开屏；转过一个爬满藤蔓的小木屋，可能就遇上了《格林童话》里的小矮人雕像，他们藏在树根下，笑得憨态可掬。空气是清甜的，混杂着松木的香气、烤华夫饼的黄油味，还有游乐小火车驶过时飘来的那一点点怀旧的煤油味。这里没有环球影城式的尖叫，只有一种慢悠悠的、沉浸在故事书插画里的惬意。你会发现，很多卢森堡爷爷奶奶，就坐在长椅上，看着孙辈们奔跑，眼神里满是安宁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你在下午，沿着另一条路走向镇中心，氛围陡然沉静下来。圣米迦勒教区教堂那浅色的石质塔楼，在居民楼的簇拥下稳重地矗立着。推开那扇厚重的木门，外界所有的喧闹瞬间被隔绝。内部是简洁的，光线透过彩绘玻璃，在长椅和石地上投下静谧的色彩。偶尔有本地老人进来，静静坐在前排，低头祈祷。那一刻你会明白，奇迹公园的欢笑与教堂的肃穆，并非割裂的两面，而是这个社区完整生活韵律的一体两面——他们既需要一片守护童真与家庭欢聚的森林，也需要一个安放信仰与沉思的宁静角落。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝唐堡`} />
                <InfoRow label="英文名称" value={`Bettembourg`} />
                <InfoRow label="正式名称" value={`Bettembourg`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`贝唐堡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从宁静农业村庄成功转型为现代交通与工业枢纽，却精心保留了一片童话世界的卢森堡南部重镇。`} />
                <InfoRow label="建筑特色" value={`奇迹公园是充满童趣与想象力的低密度森林主题乐园，而圣米迦勒教堂则是沉稳庄重的后哥特式乡村教堂，两者形成奇妙而和谐的对位。`} />
                <InfoRow label="建筑风格" value={`教堂主体为后哥特式风格，带有新罗马式元素的塔楼；奇迹公园则是融合了自然景观、童话布景与休闲设施的现代主题公园风格。`} />
                <InfoRow label="文化价值" value={`体现了卢森堡人将工业化现实与守护童年想象力、社区家庭生活完美结合的生活哲学与社区精神。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`奇迹公园（Parc Merveilleux）通常在每年四月初至十月中旬开放，每日上午10点至下午6点，夏季可能延长至晚7点。具体日期每年略有调整，行前务必查看官网。圣米迦勒教区教堂常年开放，但内部参观时间一般为上午9点至下午5点，弥撒期间请保持安静。`} />
              <InfoRow label="门票价格" value={`奇迹公园：成人票约15欧元，4-12岁儿童及学生票约10欧元，4岁以下免费。家庭套票（2大2小）有优惠。教区教堂免费参观，欢迎自愿捐赠以支持维护。`} />
              <InfoRow label="地址" value={`奇迹公园：Route de Mondorf, 3230 Bettembourg, Luxembourg
圣米迦勒教区教堂：Rue de l‘Eglise, 3220 Bettembourg, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市中央火车站（Gare Centrale）出发，乘坐区域火车（TER）前往贝唐堡站（Gare de Bettembourg），车程仅需10-12分钟，班次密集，几乎每15-20分钟一班。可使用卢森堡全国免费的公共交通系统，直接上车无需购票。出站后，步行至奇迹公园约15分钟（有清晰路标），至教堂约10分钟。从卢森堡芬德尔国际机场出发，可先乘巴士至中央火车站，再转火车，总耗时约40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝唐堡的故事，远不止那座迷人的童话公园。它的名字最早出现在历史文献中，可以追溯到公元10世纪左右，那时它只是摩泽尔河支流沿岸的一个小小农业定居点。土地肥沃，人们世代耕种、放牧，生活围绕着最初的圣米迦勒小教堂展开。这座教堂的基石，或许就埋在今天我们所见的建筑之下，它聆听了数百年的祈祷、丰收的欢庆和苦难的叹息。中世纪的贝唐堡在卢森堡伯爵的统治下缓慢发展，直到19世纪，命运的齿轮才开始加速转动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1860年左右，一个决定彻底改变了小镇的轨迹：卢森堡至蒂永维尔的铁路线铺设经过这里，贝唐堡火车站应运而生。钢铁与煤炭的时代轰鸣而至，这个宁静的村庄一夜之间成为了交通咽喉。工业开始进驻，人口逐渐增长，小镇的面貌被重新塑造。新的、更大的圣米迦勒教堂在19世纪末被建造起来，以容纳更多的信众，它那融合了后哥特式与些许新罗马式元素的风格，正是那个变革时代审美的见证。教堂的钟声，开始与火车的汽笛声交织在一起，构成了贝唐堡新的日常交响乐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，尤其是二战之后，卢森堡经济飞速发展，贝唐堡的工业与物流地位愈发重要。它成为了国家南部的关键枢纽，现代化的设施和跨国企业在此落户。但聪明的贝唐堡人思考着：除了工厂、铁路和仓库，我们还能为生活在这里的家庭，为我们的孩子留下什么？于是，在1956年，一个充满远见与温情的构想诞生了。当时的镇长和一群社区热心人士，决心在一片原有的森林绿地基础上，创建一个独一无二的家庭公园。它不是要建造刺激的过山车，而是要打造一个将自然动物、童话故事和休闲娱乐无缝结合的梦幻之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是奇迹公园的起源。最初可能只是些简单的动物围栏和童话场景模型，但它迅速俘获了所有卢森堡家庭的心。几十年间，它不断精心扩建，添加了迷你小火车、旋转木马、玩偶剧场和更多精致的童话布景。它没有走向商业化主题公园的庞大规模，而是始终保持那种亲切的、社区花园般的尺度。每一任管理者都像呵护传家宝一样呵护着这里的氛围。可以说，奇迹公园是贝唐堡在工业化进程中，主动为自己保留和创造的“童年记忆备份”，一个对抗钢铁洪流的温柔绿洲。如今，它已不仅仅是贝唐堡的骄傲，更是整个卢森堡大公国家庭周末出游的代名词，承载着三代人的共同欢笑。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，充分感受贝唐堡动静两相宜的魅力。最好在上午10点前抵达，趁奇迹公园刚开园、人流最清爽时入园。上午到中午的时间，完全交给公园，从容地探索各个区域，观看动物喂食或小型表演。中午就在公园内的餐厅或野餐区解决午餐。下午2点左右离开公园，缓步走向镇中心，参观圣米迦勒教堂，感受时空切换的静谧。随后可以在教堂周边宁静的街区随意走走，看看普通的卢森堡社区生活。如果意犹未尽且公园夜间开放，可在傍晚时分再次入园，欣赏灯光下的童话场景，体验与白天不同的魔幻氛围。这样的节奏张弛有度，兼顾了孩童的欢愉与成人的沉思。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`奇迹公园内餐饮选择有限且价格稍贵，可以考虑在入园前于镇上的超市购买一些水果和零食作为补充。
公园部分小路为砂石或树根自然路径，建议穿着舒适防滑的鞋子，尤其如果雨后前往更需注意。
教堂是活跃的宗教场所，参观时请务必保持安静，手机调至静音，避免在弥撒或仪式进行时四处走动拍照。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公园正门进入后先别急着跑，沿着主路慢慢走，让眼睛适应这片被参天大树过滤后的、绿意融融的阳光`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去农场动物区亲手喂食那些毛茸茸的羊驼和矮种马，感受它们湿漉漉的鼻子碰触手心的温柔触感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到藏在森林深处的童话小径，弯腰钻过树洞，寻找散落在各处的经典童话角色雕塑，像玩一场寻宝游戏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`坐上那列环绕公园的复古迷你蒸汽火车，让风拂过脸颊，以另一种缓慢的视角欣赏整个魔法森林的布局`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午走进圣米迦勒教堂，选一排靠后的长椅静静坐下，观察阳光透过彩绘玻璃在古老地板上移动的光斑`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，沿着Rue de l‘Eglise这条安静的街道漫步，看看色彩柔和的门窗和窗台上盛开的天竺葵`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值公园夏季夜场，在日暮时分重新入园，看无数小灯串在树上亮起，把童话小屋点缀得如同精灵家园`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束行程前，到公园出口附近的纪念品店挑一个手工烧制的童话人物小陶俑，作为这次穿越之旅的实体记忆`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`童话小径入口的蘑菇屋`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出蘑菇屋顶的圆弧和木门的纹理，蹲低身子以孩子的视角拍摄，能获得最富童话感的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`公园中心池塘边的天鹅与城堡倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨开园时或闭园前黄昏时分，水面最为平静，可以拍到现实中的天鹅与对岸童话城堡布景的清晰倒影，虚实交织。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣米迦勒教堂内仰望塔楼内部`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂中殿正中央抬头，使用广角镜头捕捉石质穹顶和支撑结构的几何美感，阴天时室内光线均匀，能减少强烈明暗对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从教堂后方墓园围墙外回望教堂塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`这里角度独特，能将古老的石砌围墙、郁郁葱葱的树木和教堂塔楼一同纳入画面，尤其是秋日黄叶衬托时格外有层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`奇迹公园迷你火车经过的森林弯道`}</h4>
                  <p className="text-sm text-gray-700">{`提前在弯道处守候，当色彩鲜艳的小火车从林间缓缓驶出时按下快门，动态的火车与静态的森林形成生动有趣的对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在奇迹公园拍摄时，请尊重其他游客和动物，不要使用闪光灯惊吓动物，也不要为了拍照而长时间阻碍游乐设施或小道通行。`}</li>
                <li>• {`拍摄教堂内部前，最好观察一下是否有“禁止拍照”的标志或询问工作人员，即使允许，也绝对不要使用三脚架或开启闪光灯打扰宗教活动的肃穆。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭首选`}</h4>
                  <p className="text-sm text-blue-800">{`公园步行范围内的现代公寓式民宿，配备小厨房和儿童游乐角，房东常会贴心地准备当地早餐篮和公园游览小贴士。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中心便捷之选`}</h4>
                  <p className="text-sm text-green-800">{`位于贝唐堡火车站对面的商务型酒店，房间宽敞整洁，对于依靠公共交通的旅行者来说极为方便，高层房间可远眺小镇风光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇几分钟车程的乡村民宿，由古老的农场房舍改造而成，住客可以体验真正的卢森堡乡村清晨，享受房东自制的果酱和新鲜鸡蛋。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-purple-800">{`驱车15分钟可达的、位于邻近历史小镇蒙多夫莱班的四星级温泉酒店，在游玩一整天后，用温泉水疗和精致的法式晚餐来彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝唐堡本地酒店数量不多，尤其在暑假和周末公园旺季，住宿非常紧俏，务必提前数月预订。如果订不到，完全可以以卢森堡市为中心，利用极其便捷和免费的火车通勤前来游玩，单程仅十分钟，毫无压力。小镇治安极好，夜晚安静祥和。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开贝唐堡的时候，我脑子里反复回响的，不是某个惊心动魄的景观，而是一种感觉。那是一种被妥善安放的“完整感”。在这个时代，我们太习惯于割裂：工作与生活割裂，成人的现实与孩童的幻想割裂，历史的沉重与当下的轻盈割裂。但贝唐堡，这个看似普通的卢森堡小镇，却悄悄地将这些对立面编织在了一起。它毫不避讳自己作为工业枢纽的现实身份，却又在心脏位置，开辟了一片拒绝长大的森林。它让火车的轨道与童话的小径并行，让教堂的钟声与旋转木马的音乐在同一个天空下交替响起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这或许就是它最打动我的地方。它不是一个被供奉在玻璃罩里的历史标本，也不是一个刻意营造的虚幻迪士尼。它是一个活生生的社区，做出的一个温暖而智慧的选择：在奔向未来的路上，主动为自己保留一处可以随时退回的童年树洞，和一座可以让心灵沉淀的宁静锚点。它告诉我们，发展与守护、喧嚣与宁静、现实与梦想，并非单选题。来这里，你不只是参观一个公园或一座教堂，你是浸入了一种可能的生活哲学——一种在效率至上的世界里，依然郑重其事地为欢笑、为幻想、为片刻沉默留出位置的生活态度。对于每一位在旅途中寻找真实生活温度，而不仅仅是打卡景点的深度旅行者来说，贝唐堡这份“完整的平凡”，值得你专程而来，用心体会。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hollenfels-castle-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍伦费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hollenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/koerich-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克里希城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Koerich Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourscheid-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
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
