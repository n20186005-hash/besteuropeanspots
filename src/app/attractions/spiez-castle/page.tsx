import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施皮茨城堡 Spiez Castle｜图恩湖畔的千年明信片，在雪山葡萄园与中世纪回廊间迷失 - 最佳欧洲景点',
  description: '火车缓缓驶入施皮茨站台，还没等你完全站稳，一幅仿佛从童话里直接搬出来的画面就撞进了眼帘：湛蓝得不像话的图恩湖，像一块巨大的蓝宝石镶嵌在翠绿的山谷间，而那座有着暗红色屋顶和浅黄色墙面的城堡，就那样从容地依偎在湖边，背后是层层叠叠的葡萄梯田，再远处，是戴着雪顶的尼森山和少女峰群。这第一眼的震撼，像一口清...',
}

export default function SpiezCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '施皮茨城堡', href: '/attractions/spiez-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施皮茨城堡・Spiez Castle・瑞士・施皮尔斯皮茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入施皮茨站台，还没等你完全站稳，一幅仿佛从童话里直接搬出来的画面就撞进了眼帘：湛蓝得不像话的图恩湖，像一块巨大的蓝宝石镶嵌在翠绿的山谷间，而那座有着暗红色屋顶和浅黄色墙面的城堡，就那样从容地依偎在湖边，背后是层层叠叠的葡萄梯田，再远处，是戴着雪顶的尼森山和少女峰群。这第一眼的震撼，像一口清冽的山泉，瞬间洗去了所有旅途的疲惫。
沿着下坡的小路走向城堡，空气里的味道悄然变化。火车站旁咖啡的香气逐渐被湖水微腥湿润的气息、割草后青草的芬芳，以及从古老石墙缝隙里渗出的、那种混合了苔藓与时光的清凉味道所取代。你的脚步会不由自主地慢下来，因为耳边太丰富了——湖水轻拍岸边的哗哗声，从城堡花园里传来的、修剪花枝的咔嚓声，还有远处码头，帆船桅杆在风里发出的有节奏的嘎吱声。这里不像一个孤立的景点，而像是小镇居民一个巨大的、共同的后花园。你会看到推着婴儿车的妈妈在古树下歇脚，老爷爷坐在长椅上对着湖面发呆，一切都那么日常，又那么珍贵。
穿过厚重的拱形城门，真正走进城堡的庭院，那种时空交错的恍惚感才达到顶峰。脚下是被无数脚步磨得温润发亮的石板，四周是数百年历史的厚重石墙，但抬头，却能越过雄堞，看见雪山的尖顶在阳光下闪耀着冷冽的光。城堡的主体建筑并不显得狰狞或威严，反而有一种居家的、被生活气息熨帖过的温柔。这种反差，正是施皮茨城堡最迷人的内核：它既是一位守卫湖山的骑士，也是一位款待宾客的主人。它不是博物馆里冰冷的展品，而是一个依然在呼吸、在与当下对话的生命体。
最打动人的，或许是那种极致的平衡感。在这里，自然的美（湖、山、葡萄园）与人类的创造（城堡、教堂、花园）达成了一种瑞士式的完美和谐。没有一方压倒另一方，它们互相成就，共同谱写了几百年的宁静诗篇。你不是来“征服”或“打卡”一个地标，而是被邀请进入一幅活的、立体的风景画中，成为一个短暂的、幸福的注脚。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`火车缓缓驶入施皮茨站台，还没等你完全站稳，一幅仿佛从童话里直接搬出来的画面就撞进了眼帘：湛蓝得不像话的图恩湖，像一块巨大的蓝宝石镶嵌在翠绿的山谷间，而那座有着暗红色屋顶和浅黄色墙面的城堡，就那样从容地依偎在湖边，背后是层层叠叠的葡萄梯田，再远处，是戴着雪顶的尼森山和少女峰群。这第一眼的震撼，像一口清冽的山泉，瞬间洗去了所有旅途的疲惫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着下坡的小路走向城堡，空气里的味道悄然变化。火车站旁咖啡的香气逐渐被湖水微腥湿润的气息、割草后青草的芬芳，以及从古老石墙缝隙里渗出的、那种混合了苔藓与时光的清凉味道所取代。你的脚步会不由自主地慢下来，因为耳边太丰富了——湖水轻拍岸边的哗哗声，从城堡花园里传来的、修剪花枝的咔嚓声，还有远处码头，帆船桅杆在风里发出的有节奏的嘎吱声。这里不像一个孤立的景点，而像是小镇居民一个巨大的、共同的后花园。你会看到推着婴儿车的妈妈在古树下歇脚，老爷爷坐在长椅上对着湖面发呆，一切都那么日常，又那么珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过厚重的拱形城门，真正走进城堡的庭院，那种时空交错的恍惚感才达到顶峰。脚下是被无数脚步磨得温润发亮的石板，四周是数百年历史的厚重石墙，但抬头，却能越过雄堞，看见雪山的尖顶在阳光下闪耀着冷冽的光。城堡的主体建筑并不显得狰狞或威严，反而有一种居家的、被生活气息熨帖过的温柔。这种反差，正是施皮茨城堡最迷人的内核：它既是一位守卫湖山的骑士，也是一位款待宾客的主人。它不是博物馆里冰冷的展品，而是一个依然在呼吸、在与当下对话的生命体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是那种极致的平衡感。在这里，自然的美（湖、山、葡萄园）与人类的创造（城堡、教堂、花园）达成了一种瑞士式的完美和谐。没有一方压倒另一方，它们互相成就，共同谱写了几百年的宁静诗篇。你不是来“征服”或“打卡”一个地标，而是被邀请进入一幅活的、立体的风景画中，成为一个短暂的、幸福的注脚。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施皮茨城堡`} />
                <InfoRow label="英文名称" value={`Spiez Castle`} />
                <InfoRow label="正式名称" value={`Spiez Castle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`施皮尔斯皮茨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了瑞士中部千年权力更迭、从战略要塞演变为文明灯塔的湖畔贵族城堡。`} />
                <InfoRow label="建筑特色" value={`完美融合了罗马式塔楼、哥特式教堂、文艺复兴时期住宅与巴洛克花园的综合性建筑群，宛若一部立体的建筑史教科书。`} />
                <InfoRow label="建筑风格" value={`以坚实的罗马式风格为基底，历经多个世纪的扩建与修饰，呈现出多种风格和谐共存的独特面貌。`} />
                <InfoRow label="文化价值" value={`不仅是显赫家族的宅邸，更是当地社区千年来的精神与文化中心，其保存完好的生活痕迹为理解瑞士贵族与平民的互动提供了鲜活样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及博物馆开放时间通常为每年4月中旬至10月中旬，每日上午10:00至下午17:00（最后入场时间16:30）。11月至次年3月为冬季休整期，仅接受团体预约参观。教堂全年开放，但内部参观时间可能与城堡不同，需提前在官网查询。特别注意：瑞士的节假日如国庆节（8月1日）开放时间可能缩短，建议出行前务必查看官方网站的最新公告。`} />
              <InfoRow label="门票价格" value={`成人票价为12瑞士法郎。优惠票（学生、老年人、团体）价格为10瑞士法郎。6至16岁青少年票价为6瑞士法郎。6岁以下儿童免费。持有瑞士旅行通票（Swiss Travel Pass）或伯尔尼地区通行证（Berner Oberland Pass）可享受免费入场。门票包含城堡所有开放区域、历史博物馆、临时展览及教堂的参观。`} />
              <InfoRow label="地址" value={`Schlossstrasse 16, 3700 Spiez, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场或日内瓦机场出发，最便捷的方式是乘坐瑞士国铁（SBB）。首先乘坐火车抵达伯尔尼中央火车站（Bern Hauptbahnhof），耗时约1-1.5小时，班次极其频繁，几乎每10-20分钟就有一班。随后在伯尔尼火车站换乘前往因特拉肯东站（Interlaken Ost）的区间列车，在“施皮茨（Spiez）”站下车，这段车程约30分钟，沿途风景如画。从施皮茨火车站出来，城堡的尖塔和屋顶清晰可见，步行下山坡约10-15分钟即可直达城堡大门。如果行李较多，车站外也有出租车，5分钟车程即到。强烈推荐使用SBB手机App实时查询时刻表和购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从大约一千年前说起。那时候，这片湖畔的土地还笼罩在神秘的森林中，湖上交通是连接伯尔尼高地和瓦莱州的重要通道。谁能控制这个岬角，谁就扼住了湖区的咽喉。大约在公元933年，一位名叫“鲁道夫二世”的勃艮第国王，将这片土地赐予了一个来自德国西南部的贵族家庭——冯·施皮茨家族。他们在此垒起了第一块石头，建起了最初用于防御的塔楼和围墙。这座城堡的诞生，从一开始就与权力、馈赠和战略紧密相连，它像一个沉默的哨兵，目睹了中世纪早期欧洲王公贵族间复杂的联姻与领土交换。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到13世纪，施皮茨家族的男嗣断绝，城堡通过联姻转入了一个更具影响力的家族——冯·巴伦伯格手中。这个时期，城堡开始从单纯的军事堡垒向舒适的贵族住所演变。他们增建了居住翼楼，那个我们今天看到的、拥有巨大斜屋顶的主建筑，就是在这个时期初具雏形。你可以想象，骑士们不再仅仅在冰冷的大厅里擦拭盔甲，也开始在装有玻璃窗的房间里，围着壁炉讨论诗歌与远方的见闻。城堡的功能悄然变化，文明的微光开始透过箭窗照射进来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的黄金时代在15世纪到来。当时统治伯尔尼的强势城市共和国，从经济濒临破产的冯·巴伦伯格家族手中买下了城堡和整个领地。伯尔尼派来的地方行政长官（Schultheiss）住进了这里，施皮茨城堡从此成为伯尔尼共和国在湖区行使行政与司法权力的中心。正是这些来自伯尔尼的“公务员”贵族，赋予了城堡我们今天看到的许多优雅特征。他们在17到18世纪对城堡进行了巴洛克风格的改造，增建了那个可以俯瞰湖光山色的华丽大厅，并精心修整了花园。城堡的防御功能彻底让位于居住与展示功能，花园里开始种植来自异域的奇花异草，大厅里举办舞会，空气中飘荡的不再是烽烟，而是咖啡与蛋糕的甜香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到19世纪，瑞士经历了拿破仑战争和联邦体制的确立，古老的贵族统治落下帷幕。1875年，城堡被一位名叫卡尔·弗里德里希·冯·屈尼格的汉诺威外交官买下。他是一位充满浪漫情怀的绅士，没有对城堡进行大刀阔斧的现代化改造，而是怀着巨大的敬意进行修复与维护，保留了其中世纪和巴洛克时期的灵魂。正是他的努力，使得城堡内部那些珍贵的壁画、古老的家具和家族肖像得以完好保存。最终，在1929年，他的后代将这座承载了无数故事的城堡，连同其无价的收藏，一并赠予了“施皮茨城堡基金会”，确保它永远向公众开放。从私人堡垒到公共遗产，它完成了最后的，也是最伟大的蜕变。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的施皮茨城堡之旅应该从一个清朗的早晨开始，建议在上午9点半左右抵达。这时旅行团的大巴还未涌入，阳光正好温柔地洒在湖面和城堡东侧，光线对于拍照和感受氛围都极佳。整体游览大约需要3到4个小时，节奏应是悠然漫步式的，因为匆忙是对此地美景的一种浪费。建议的路线逻辑是“由外至内，由高至低”：先从外部整体感受城堡与湖山的关系，再深入内部探究其历史细节，最后在花园和湖边彻底放松身心。这样的安排能让你逐步沉浸，像剥洋葱一样，一层层揭开它的魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`每周六上午城堡脚下的本地农贸市场非常热闹，是体验当地风情的好机会，但也会让小路略显拥挤，喜欢清静的话可以避开这个时段。参观内部房间时，有些地板是古老的木地板，穿着高跟鞋会发出很大声响且不方便，建议穿舒适的平底鞋。瑞士天气多变，即便夏日，湖边风也大，带一件防风外套或披肩是明智之举。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来的观景平台先深呼吸，用广角的视野将湖泊、城堡、葡萄园和雪山一同框进记忆的第一帧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着 Schlossstrasse 小路向下，别急着进城堡大门，先绕到东侧的城墙边，从那里回望城堡主体与后方教堂钟楼构成的错落天际线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开厚重的橡木大门进入幽深的罗马式地下室，让眼睛适应昏暗，触摸那些千年未变的冰凉石壁，想象它作为酒窖与储藏室的往昔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着古老的木楼梯盘旋而上，逐一探访骑士大厅、文艺复兴风格的宴会厅和布满家族肖像的走廊，注意寻找窗户边那些可以偷瞥湖景的完美角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上城堡主塔楼的顶层，360度旋转着将图恩湖的湛蓝、尼森山的金字塔造型和散落在山坡上的童话小屋尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，从城堡西门直接步入巴洛克风格的法式花园，在修剪整齐的绿篱和怒放的玫瑰丛间穿行，找到那张正对湖面的长椅坐下来发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着花园的石阶一直向下走到私家小码头，把双脚浸入清凉的湖水中，或是租一艘划艇，从水上的视角再次仰望城堡的全貌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果意犹未尽，可以步行五分钟前往镇上的湖边餐厅，点一份经典的瑞士湖鱼配土豆，看着帆船归航，等待城堡在夕阳下被染成金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧葡萄园小径仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，从城堡下方葡萄园间的小路向上拍摄，能将城堡、教堂与背后的雪山一同纳入镜头，层次感无敌。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`巴洛克花园中心喷泉侧影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在花园中心喷泉的西侧，以喷泉和鲜花为前景，拍摄城堡东翼建筑在平静湖面上的完美倒影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼顶层拱窗框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`登上塔顶后，利用那些厚重的石拱窗作为天然画框，聚焦窗外如模型般的红色屋顶小镇和宝石蓝的湖泊，照片会极具故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡地下室拱形地窖门洞`}</h4>
                  <p className="text-sm text-gray-700">{`利用手机或相机的广角功能，在地下室那个深邃的拱形石门洞内，向内拍摄，门洞本身形成的强烈透视引导线会让照片充满张力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`湖边码头长堤尽头回望`}</h4>
                  <p className="text-sm text-gray-700">{`租一艘小船划到离码头约五十米的湖面上，用长焦镜头压缩空间，拍摄城堡建筑群依偎在山坡上的全景，这是最经典的“明信片”角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在城堡内部博物馆区域，请注意查看是否有禁止摄影的标志，通常允许拍照但不允许使用闪光灯和三脚架。航拍无人机在瑞士受到严格管制，在城堡及周边居民区飞行很可能需要提前申请许可，且需尊重他人隐私，不建议游客在此操作。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于火车站上方的“施皮茨青年旅舍”，由一栋老房子改造而成，房间整洁，最重要的是其公共露台拥有俯瞰城堡与湖泊的绝佳视野，适合背包客和预算有限的旅行者。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温馨体验`}</h4>
                  <p className="text-sm text-green-800">{`藏在老镇石板路旁的“加尼特霍夫家庭旅馆”，主人是一对老夫妻，花园里种满了苹果树，早餐的果酱是自家熬制的，还能给你讲述许多地图上没有的本地故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计型精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在湖边稍远一处静谧湾区的“贝尔维尤艺术酒店”，每个房间都以一位瑞士艺术家命名，装饰风格现代明亮，拥有一个伸入湖面的日落酒吧，时髦又私密。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华遗产沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`城堡本身不提供住宿，但你可以选择镇上由古老贵族别墅改造的“塞甘蒂尼酒店”，房间内保留着复古装饰，在阳台上享用早餐时，仿佛自己也成了城堡历史的一部分。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`施皮茨是一个非常安全宁静的小镇，治安极好，但夜生活相对稀少，晚上九点后街道就十分安静，喜欢热闹的游客可能会觉得有些寂寞。夏季（7-8月）和圣诞新年期间是旺季，住宿价格会上浮且很快订满，务必提前至少两三个月规划预订。如果订不到镇上的酒店，可以考虑住在相邻的因特拉肯或图恩，乘火车通勤过来非常方便，只需15-20分钟。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开施皮茨城堡许久后，你脑海里反复回放的，可能不是某个具体的房间或某件展品，而是一种整体的、宁静而丰盈的感觉。那是一种被美 gently held（温柔拥抱） 着的安全感。在这个常常令人焦虑的世界里，它提供了一个罕见的锚点——在这里，历史不是废墟，而是依然被精心打理着的家园；自然不是背景板，而是与人居生活平等对话的伙伴。它让你相信，有一种美好，可以不必通过惊心动魄的传奇来证明，而是凭借日复一日的守护、顺应与和谐，绵延上千年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，这不仅仅是一次对中世纪城堡的参观。这是一次关于“如何生活”的静默教学。它教会我们，真正的力量或许不在于征服的高度，而在于守护的深度；真正的奢华不在于金碧辉煌，而在于时间沉淀出的那份从容不迫。每一位热爱深度游的旅人，都应该来施皮茨城堡住上一两天，不是为了收集又一个景点徽章，而是为了让自己的灵魂，在这湖光山色与古老石墙的共振中，获得一次深度的呼吸和校准。你会发现，自己带走的，远比一张明信片照片要多得多。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kuressaare-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库雷萨雷主教城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuressaare Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-villandry" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维朗德里城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Villandry</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alpina-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔卑纳城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alpina Castle</p>
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
