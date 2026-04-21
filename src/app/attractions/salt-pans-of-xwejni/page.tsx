import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈佐岛盐田 Salt Pans of Xwejni｜马耳他戈佐岛海岸线上千年古罗马盐田的几何美学 - 最佳欧洲景点',
  description: '当你第一眼看到它时，一定会下意识地屏住呼吸。那不是什么恢弘的宫殿或高耸的教堂，而是一片铺展在湛蓝地中海边缘的、巨大无比的浅金色棋盘。这就是戈佐岛西北海岸的Xwejni盐田。车从蜿蜒的小路拐下来，这片奇景就那么毫无预兆地撞进眼帘——数不清的矩形池子，一个个方方正正，被粗糙而笔直的石灰岩隔断分开，从脚下',
}

export default function SaltPansOfXwejniPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马耳他', href: '/destinations/malta' },
            { label: '戈佐岛', href: '/destinations/malta' },
            { label: '戈佐岛盐田', href: '/attractions/salt-pans-of-xwejni' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈佐岛盐田・Salt Pans of Xwejni・马耳他・戈佐岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到它时，一定会下意识地屏住呼吸。那不是什么恢弘的宫殿或高耸的教堂，而是一片铺展在湛蓝地中海边缘的、巨大无比的浅金色棋盘。这就是戈佐岛西北海岸的Xwejni盐田。车从蜿蜒的小路拐下来，这片奇景就那么毫无预兆地撞进眼帘——数不清的矩形池子，一个个方方正正，被粗糙而笔直的石灰岩隔断分开，从脚下一直蔓延到海浪拍打的礁石边，在午后强烈的阳光下，闪烁着细碎而湿润的光。空气里有股干净又强烈的味道，是海风、阳光和盐粒混合的气息，咸咸的，带着点矿物质感的清爽。
走近了，你会听到两种声音交织在一起。一边是永不停歇的海浪，哗啦哗啦地涌进最外围的池子；另一边，如果运气好，是轻微的“咔嗒”声，那是年长的盐工在用木制工具，小心地将池底结晶的盐刮拢。这片盐田绝非仅供观赏的化石，它至今仍在被使用。你会看到皮肤被晒成古铜色的当地人，穿着胶靴，在棋盘格间缓慢移动，他们的动作从容而富有韵律，与身后游客的喧闹仿佛处于两个平行的时空。这里产的“海之花”盐，依然是许多戈佐岛家庭厨房和本地餐馆的珍宝。
最打动人心的，是那份极致的简约与恒久。它的美不在于装饰，而在于功能本身所展现的几何秩序，以及人与环境之间那份古老而直接的契约。海水每日涌入，阳光将其蒸发，留下白色的结晶，人再将这自然的馈赠收集起来。这个循环，从罗马时代甚至更早，一直延续到今天。站在这里，你触摸的不是冰冷的石头，而是一段依然温热、依然在流动的时间。它不像那些被玻璃罩起来的文物，它就是生活本身，粗糙、真实，带着海水的涩味和阳光的温度，安静地诉说着一个岛屿最本真的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一眼看到它时，一定会下意识地屏住呼吸。那不是什么恢弘的宫殿或高耸的教堂，而是一片铺展在湛蓝地中海边缘的、巨大无比的浅金色棋盘。这就是戈佐岛西北海岸的Xwejni盐田。车从蜿蜒的小路拐下来，这片奇景就那么毫无预兆地撞进眼帘——数不清的矩形池子，一个个方方正正，被粗糙而笔直的石灰岩隔断分开，从脚下一直蔓延到海浪拍打的礁石边，在午后强烈的阳光下，闪烁着细碎而湿润的光。空气里有股干净又强烈的味道，是海风、阳光和盐粒混合的气息，咸咸的，带着点矿物质感的清爽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听到两种声音交织在一起。一边是永不停歇的海浪，哗啦哗啦地涌进最外围的池子；另一边，如果运气好，是轻微的“咔嗒”声，那是年长的盐工在用木制工具，小心地将池底结晶的盐刮拢。这片盐田绝非仅供观赏的化石，它至今仍在被使用。你会看到皮肤被晒成古铜色的当地人，穿着胶靴，在棋盘格间缓慢移动，他们的动作从容而富有韵律，与身后游客的喧闹仿佛处于两个平行的时空。这里产的“海之花”盐，依然是许多戈佐岛家庭厨房和本地餐馆的珍宝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那份极致的简约与恒久。它的美不在于装饰，而在于功能本身所展现的几何秩序，以及人与环境之间那份古老而直接的契约。海水每日涌入，阳光将其蒸发，留下白色的结晶，人再将这自然的馈赠收集起来。这个循环，从罗马时代甚至更早，一直延续到今天。站在这里，你触摸的不是冰冷的石头，而是一段依然温热、依然在流动的时间。它不像那些被玻璃罩起来的文物，它就是生活本身，粗糙、真实，带着海水的涩味和阳光的温度，安静地诉说着一个岛屿最本真的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈佐岛盐田`} />
                <InfoRow label="英文名称" value={`Salt Pans of Xwejni`} />
                <InfoRow label="正式名称" value={`Salt Pans of Xwejni`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`戈佐岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`马耳他群岛延续了数百年乃至上千年的海盐生产活遗址，是地中海古老生计方式的地理见证。`} />
                <InfoRow label="建筑特色" value={`由人工在天然的海岸石灰岩平台上，一凿一斧雕刻出的、绵延数百米的巨大网格状浅池，仿佛大地的几何艺术。`} />
                <InfoRow label="建筑风格" value={`古罗马工程学与自然地形完美结合的实用主义“建筑”，风格原始、朴素而充满秩序感。`} />
                <InfoRow label="文化价值" value={`它不仅是景观，更是仍在呼吸的古老传统，直观展示了岛屿居民如何依赖并智慧地利用海洋资源。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`露天公共区域，全天24小时开放，全年无休。但建议在白天光线充足时前往参观，观赏和拍摄效果最佳。请注意潮汐时间，部分步道在风浪大时可能湿滑。`} />
              <InfoRow label="门票价格" value={`完全免费参观。这是一处仍在运作的公共生产区域，没有设置门票。如果遇到正在劳作的盐工，可以友好地打招呼，但请勿妨碍他们的工作。`} />
              <InfoRow label="地址" value={`Xwejni Salt Pans, Triq il-Menqa, Ix-Xwejni, Gozo, Malta. 邮编约 XRB 9041`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场出发：首先搭乘出租车或公交车（X4路）前往Ċirkewwa渡轮码头，车程约45分钟至1小时。从Ċirkewwa码头乘坐前往戈佐岛Mgarr港的渡轮，航程约25分钟，渡轮班次频繁（约每45分钟一班），无需提前购票，上船买票即可。抵达Mgarr港后，最佳方式是乘坐当地的白色出租车（价格需事先谈好）或提前预订租车，前往Xwejni湾，车程约15-20分钟。如果搭乘公共交通，可在港口乘公交322路至“Xwejni”站下车，但班次较少，需提前查好时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲Xwejni盐田的故事，我们得把时钟拨回两千多年前。虽然我们现在看到的大部分规整棋盘格，其形态可能定型于中世纪晚期或骑士团统治时期，但盐田的血脉，无疑可以追溯到古罗马时代，甚至可能更早的腓尼基人。想象一下，第一批登上戈佐岛这片崎岖北海岸的人，他们发现这里的石灰岩平台质地相对柔软，易于开凿，而且海浪平缓，阳光充沛。于是，最初可能只是几个尝试性的浅坑，用来截留海水，靠夏日的骄阳晒出那珍贵的白色晶体——盐。在 refrigeration（冷藏）和现代保鲜技术出现前的漫长岁月里，盐就是“白色黄金”，是保存食物、维持生命的必需品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的画卷翻到中世纪，戈佐岛的盐田生产 likely（很可能）已经形成规模。马耳他骑士团统治时期（1530-1798年），这些盐田成为了岛屿经济的重要一环。骑士团有严格的规章制度来管理盐的生产和销售，盐税是一笔可观的收入。你可以想象，穿着麻布衣服的工人们，在骑士团官员的监督下，年复一年地挥舞着简单的铁凿和锤子，一寸一寸地扩大、修整这些池子，形成了我们今天看到的、令人惊叹的、如同用直尺画出来的网格系统。这不仅仅是劳动，这是将一种生存的数学，刻进了岛屿的骨骼里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，它的历史并非总是平静的画卷。这片海岸也见证了掠夺与冲突。在骑士团与奥斯曼帝国的拉锯战中，戈佐岛常遭劫掠，盐田想必也曾荒废。第二次世界大战期间，马耳他作为盟军关键基地遭受狂轰滥炸，戈佐岛虽相对偏远，但生产和生活也陷入困顿。但奇妙的是，无论战争还是政权更迭，只要和平回归，人们总会回到这片海岸，清理池中的碎石和淤泥，重新开始那古老的晒盐流程。这种韧性，比任何石头都更坚固。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪后期，随着工业化制盐的普及，这种依赖人力和天气的传统生产方式几乎在世界各地绝迹。但在戈佐岛，它却顽强地存活了下来。这很大程度上要归功于一群不肯放弃传统的老人，以及后来逐渐认识到其独特价值的年轻一代。它不再仅仅是生计，更成为了一种文化身份的标志，一种与祖先和土地联系的方式。如今，你看到的盐工，很多已是这项家族技艺的第三代甚至第四代传人。他们或许只在夏季的几个月里工作，产出的“Fleur de Sel”（盐之花）数量有限，价格不菲，成为了高端餐厅和美食爱好者追捧的稀缺特产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的Xwejni盐田，就这样站在了时空的交汇点上。它的一边是深邃的历史和持续的传统，另一边则是游客好奇的目光和相机的闪光灯。它平静地接纳了这一切。海水依旧每日按着潮汐的节奏涌入，阳光依旧无私地倾泻，盐晶依旧在池底悄悄生长。它像一个沉默而智慧的讲述者，不用一句言语，就让你明白什么是“可持续”，什么是“与自然合作而非对抗”，什么是真正历久弥新的生活艺术。它不是博物馆里的标本，它是窗外依然在生长、在呼吸的老树。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要深度感受盐田的魅力，我强烈建议你将参观时间安排在下午晚些时候。这样既可以避开正午地中海灼热的烈日，又能幸运地邂逅一天中最美的光线——金色夕阳将整片盐田和远处的海面染成暖调的时刻。整体游览无需匆忙，预留2-3小时慢慢行走、观察和感受最为合适。路线将从盐田上方的停车场或路边开始，沿着海岸线由东向西漫步，最终在一个小小的海岬处达到高潮，目送夕阳沉入海平面。这样的节奏让你能由远及近、由宏观到细节，逐步沉浸到这片古老景观的几何之美与生活气息中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着防滑、耐脏的鞋子，海岸岩石常年被海水浸润，非常湿滑且不平整。切勿为了拍照踏入正在运作的盐池或移动盐工收集好的盐堆，尊重他们的劳动成果。夏季请携带充足饮用水和防晒装备，海岸线上几乎没有遮荫处。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主路旁的小停车场走下缓坡，让那片如同巨人棋盘般的几何盐田全景第一次完整地冲击你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着被海水打磨光滑的岩石步道慢慢向西走，近距离观察每一个盐池的细节：池壁上深刻的凿痕、池底残留的白色盐末、以及池水中映出的天空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一处有阴影的岩石坐下，安静地等待并观察一位盐工的出现，看他们如何用长柄木耙轻柔地收集池边结晶的“盐之花”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`伸手小心地触摸一下池边的岩石隔断，感受那被海水和阳光反复冲刷了数百年的粗糙质地与温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留意那些被潮汐自然形成的小小潮池，里面常有小鱼小虾，它们是这片人工系统中活跃的自然生命。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到盐田西侧的尽头，爬上一小段矮矮的悬崖，从这里回望，盐田、村庄的圆顶教堂和蔚蓝大海构成一幅层次分明的画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值日落时分，一定要面朝西方坐下，看夕阳的余晖如何将每一个盐池的水面点燃成一片片金箔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在暮色四合中慢慢往回走，此时盐田褪去了金色的华服，在深蓝的天幕下变成一片静谧而神秘的几何剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`盐田东侧小高地上`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，能拍出盐田网格深邃的立体感和绵延至远方的纵深感，将教堂圆顶纳入构图一角更有故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`某个方形盐池的边缘低角度`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，蹲下将相机贴近水面，利用池水作为镜面，拍摄天空绚丽云彩的完美倒影，形成对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`盐工劳作的特写镜头`}</h4>
                  <p className="text-sm text-gray-700">{`征得同意后，用长焦镜头从远处捕捉盐工弯腰收集盐晶的专注瞬间，背景是虚化的、无限重复的几何线条，充满人文质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西端悬崖边缘的广角全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落时刻，将蜿蜒的海岸线、层叠的盐田、温暖的夕阳一同囊括进画框，色调会从金黄渐变为粉紫，无比震撼。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`盐池结晶的微观世界`}</h4>
                  <p className="text-sm text-gray-700">{`带上手机微距镜头或相机的微距模式，对准池边正在形成的羽毛状盐晶体，那是大自然在最人工的系统里创造的精致雕塑。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`偏振镜（CPL）在这里非常有用，可以消除水面的反光，让你拍到池底清晰的纹理和更饱和的蓝色天空。尊重当地盐工的隐私，如需拍摄人物特写，请务必先微笑示意并获得对方许可，一个友好的点头比镜头更重要。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在盐田附近步行可达的Xagħra或Marsalforn小镇家庭公寓，推开窗就能闻到海风，晚上跟着 locals（当地人）去镇上的小酒馆吃最新鲜的鱼。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择由古老农舍改造的戈佐岛乡村民宿，睡在厚重的石头墙壁房间里，清晨在鸟鸣和花香中醒来，主人会为你准备用本地盐调味的农家早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住戈佐岛中部带有无边泳池的精品设计酒店，在极简主义的房间里享受现代舒适，然后驱车十分钟即可抵达盐田，体验古老与现代的奇妙碰撞。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐秘宝藏`}</h4>
                  <p className="text-sm text-purple-800">{`预订西北海岸某处悬崖顶上的独栋小屋，拥有完全私人的露台，白天看盐田棋盘，夜晚看浩瀚星空，只听得到海浪的白噪音。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`戈佐岛整体非常安全，民风淳朴，但偏远地区的民宿晚上可能较为安静，适合追求静谧的旅行者。夏季（6-9月）是旺季，住宿需提前数月预订；春季（4-5月）和秋季（9-10月）气候宜人，游客较少，是体验盐田和住宿的绝佳时机。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开盐田许久，那幅画面依然会时常浮现在脑海里：无尽的几何线条，温柔的劳作身影，以及海水蒸发后留在空气里的、淡淡的咸味。它带给我的触动，不同于那些让人仰望的伟大建筑。它是一种沉静的力量，一种关于“持久”和“循环”的直观教育。在这个追求快速迭代、热衷制造爆款的世界里，Xwejni盐田的存在本身就是一个温柔的“反叛”。它不着急，它只是日复一日、年复一年地，重复着那个古老的仪式——接纳海水，交付盐粒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以必须列入深度游的清单，正是因为它能让你“慢下来”，并重新思考我们与自然、与传统的关系。它不是被观赏的“他者”，而是一个依然在呼吸、在产出的生命体。在这里，你能触摸到时间真实的质地，不是历史书上冰冷的年份，而是阳光在岩石上一天天烘烤出的温度，是海风一年年雕刻出的纹路。对于每一位厌倦了走马观花、渴望在旅途中获得某种心灵共鸣的旅人来说，戈佐岛盐田是一片能让你安静下来的海角。在这里，你会明白，最美的风景，有时恰恰是那种与生存本身紧密相连的、朴素而坚韧的智慧。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hagar-qim-temples-malta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈加印神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hagar Qim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dingli-cliffs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丁利悬崖</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dingli Cliffs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mdina-silent-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    姆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">姆迪纳静寂之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mdina</p>
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
