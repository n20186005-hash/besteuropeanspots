import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯洛滕 Sloten｜十一城之珠，风车与运河守护的时光胶囊 - 最佳欧洲景点',
  description: '如果你从地图上寻找斯洛滕，你得把眼睛眯起来，用手指小心地划过弗里斯兰错综复杂的水网，才能在那个几乎被忽略的角落发现这个名字。而当你真正抵达时，感觉就像不小心闯进了一本立体童话书的扉页。我的方式是骑车，从广阔的田野和笔直的运河堤坝上忽然拐进一条林荫小道，然后——它就在那里。不是缓缓展开，而是“噗”一声',
}

export default function SlotenFrieslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '斯洛滕', href: '/attractions/sloten-friesland' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯洛滕・Sloten・荷兰・斯洛滕`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你从地图上寻找斯洛滕，你得把眼睛眯起来，用手指小心地划过弗里斯兰错综复杂的水网，才能在那个几乎被忽略的角落发现这个名字。而当你真正抵达时，感觉就像不小心闯进了一本立体童话书的扉页。我的方式是骑车，从广阔的田野和笔直的运河堤坝上忽然拐进一条林荫小道，然后——它就在那里。不是缓缓展开，而是“噗”一声，完整地、精致地，被一道闪着银光的护城河托举着，端到你面前。那种冲击感难以言喻，它不是庞大，是“完整”。一道水环，几座小桥，一片密密的红砖屋顶，还有那座标志性的风车，像个固执的守门人，叶片在北方清朗的天空下缓缓转动。所有的元素都在这儿了，不多不少，刚好装满你的视野。
穿过那道唯一的、也是主要入口的石桥和城门，你就把21世纪暂时留在了身后。脚下的石板路被几个世纪的脚步打磨得温润，窄得几乎只能容一辆自行车通过。空气的味道变了，混着古老砖石在阳光下散发的微暖气息，从某扇开着的窗扉里飘出的新鲜咖啡香，还有从贯穿全城的主运河飘来的、淡淡的水腥味和青苔味。耳朵里最大的声音是风穿过屋顶瓦片缝隙的轻吟、运河里几只鸭子拨水的哗啦声，以及自己清晰的脚步声。这里的房子不是宏伟的博物馆展品，它们就是家。洁白的蕾丝窗帘垂在窗后，窗台上放着开满天竺葵的花箱，偶尔有头发花白的老太太探头出来给鸟儿撒一把面包屑，对你这个闯入者报以微笑。
这座城市的核心不是广场，而是水。那条主运河像一条安静的脊梁，从风车脚下一直流到另一头的城门。河岸两侧的房子把影子温柔地投在水面上，让水的颜色在墨绿和深蓝之间变幻。最动人的时刻是傍晚，当最后一缕金光为风车的木制帽子和叶片镶上金边，当地人开始牵着狗沿着河岸散步，或者坐在自家门前的台阶上，就着一杯啤酒看云。你会突然明白，斯洛滕的魅力不在于“看”到了什么惊人的建筑，而在于“感受”到了一种几乎失传的生活韵律。它是一个完整的生态，一个自给自足的小宇宙，时间在这里不是流逝，而是循环，就像那永不停止转动的风车，和那环绕不息的护城河水。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你从地图上寻找斯洛滕，你得把眼睛眯起来，用手指小心地划过弗里斯兰错综复杂的水网，才能在那个几乎被忽略的角落发现这个名字。而当你真正抵达时，感觉就像不小心闯进了一本立体童话书的扉页。我的方式是骑车，从广阔的田野和笔直的运河堤坝上忽然拐进一条林荫小道，然后——它就在那里。不是缓缓展开，而是“噗”一声，完整地、精致地，被一道闪着银光的护城河托举着，端到你面前。那种冲击感难以言喻，它不是庞大，是“完整”。一道水环，几座小桥，一片密密的红砖屋顶，还有那座标志性的风车，像个固执的守门人，叶片在北方清朗的天空下缓缓转动。所有的元素都在这儿了，不多不少，刚好装满你的视野。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过那道唯一的、也是主要入口的石桥和城门，你就把21世纪暂时留在了身后。脚下的石板路被几个世纪的脚步打磨得温润，窄得几乎只能容一辆自行车通过。空气的味道变了，混着古老砖石在阳光下散发的微暖气息，从某扇开着的窗扉里飘出的新鲜咖啡香，还有从贯穿全城的主运河飘来的、淡淡的水腥味和青苔味。耳朵里最大的声音是风穿过屋顶瓦片缝隙的轻吟、运河里几只鸭子拨水的哗啦声，以及自己清晰的脚步声。这里的房子不是宏伟的博物馆展品，它们就是家。洁白的蕾丝窗帘垂在窗后，窗台上放着开满天竺葵的花箱，偶尔有头发花白的老太太探头出来给鸟儿撒一把面包屑，对你这个闯入者报以微笑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的核心不是广场，而是水。那条主运河像一条安静的脊梁，从风车脚下一直流到另一头的城门。河岸两侧的房子把影子温柔地投在水面上，让水的颜色在墨绿和深蓝之间变幻。最动人的时刻是傍晚，当最后一缕金光为风车的木制帽子和叶片镶上金边，当地人开始牵着狗沿着河岸散步，或者坐在自家门前的台阶上，就着一杯啤酒看云。你会突然明白，斯洛滕的魅力不在于“看”到了什么惊人的建筑，而在于“感受”到了一种几乎失传的生活韵律。它是一个完整的生态，一个自给自足的小宇宙，时间在这里不是流逝，而是循环，就像那永不停止转动的风车，和那环绕不息的护城河水。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯洛滕`} />
                <InfoRow label="英文名称" value={`Sloten`} />
                <InfoRow label="正式名称" value={`Sloten`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`斯洛滕`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`弗里斯兰“十一城”中保存最完整、最小的历史水城，一座活着的、被星形护城河完美包裹的微型城市博物馆。`} />
                <InfoRow label="建筑特色" value={`被完整星形护城河环绕的紧凑格局，入口处雄伟的风车“德·凯泽尔”如同忠诚的哨兵，与狭窄的运河、小巧的吊桥和17-18世纪的古朴山墙房屋共同构成一幅微缩的荷兰水城画卷。`} />
                <InfoRow label="建筑风格" value={`典型的弗里斯兰水城风貌，融合了荷兰黄金时代的简约砖砌民居风格与19世纪的浪漫主义乡村元素。`} />
                <InfoRow label="文化价值" value={`它不仅是弗里斯兰独特地域文化的珍贵标本，更以近乎凝固的姿态，展现了前工业时代欧洲小型水防城市的理想形态与社区生活本质。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`斯洛滕古城本身全天24小时开放。城内主要景点如斯洛滕风车和“斯洛滕城市博物馆”开放时间较为固定：风车和博物馆通常在每年4月至10月的周二至周六上午10点至下午5点开放，周日及周一休息（具体开放日可能因志愿者安排略有变动，冬季开放时间大幅缩短或关闭）。建议在旅游旺季（5-9月）的白天游览。节假日如圣诞节、元旦可能全天关闭。`} />
              <InfoRow label="门票价格" value={`进入斯洛滕古城及在公共区域漫步完全免费。进入斯洛滕风车内部参观，成人票约3-4欧元；进入“斯洛滕城市博物馆”，成人票约4-5欧元。通常有联票选项。持有荷兰博物馆卡可免费进入博物馆。12岁以下儿童、65岁以上长者享有折扣，具体以现场公告为准。`} />
              <InfoRow label="地址" value={`Kerkstraat 11, 8556 XL Sloten, Netherlands`} />
              <InfoRow label="交通方式" value={`斯洛滕没有火车站。最便捷的方式是先抵达弗里斯兰省的首府吕伐登。从阿姆斯特丹史基浦机场或中央火车站出发，乘坐直达列车约2小时可到吕伐登。从吕伐登火车站前公交枢纽，换乘R-net线路（如14路、15路）或区域性巴士（如100路），约40-50分钟车程可直达斯洛滕市中心。巴士班次平日约每小时1-2班，周末和节假日班次减少，务必提前查询时刻表（可使用9292.nl APP）。自驾是最灵活的选择，从吕伐登出发沿A6/A7高速转N359公路，约30分钟即可到达；古城外有免费停车场，但车位有限，建议尽早抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯洛滕的故事，得从水、土地和人的拉锯战开始讲起。早在11世纪，这片弗里斯兰的泥炭沼泽地上，就已经有了人类的定居点。它的名字“Sloten”很可能就源于“水闸”或“沟渠”，这注定它与水密不可分的命运。在中世纪，它只是星罗棋布的定居点中的一个，靠着一条可以行船的小水道，勉强进行些农牧产品交易。真正让它登上历史舞台的，是13世纪左右，它成为了弗里斯兰地区那著名的“十一城”联盟中的一员。别被“城市”这个词骗了，在当时的弗里斯兰，这更像是一种法律和贸易上的特权地位。斯洛滕，无疑是这十一颗星星中最微弱、但也最顽强的那一颗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的命运转折点与一场精神的征服有关。大约在13世纪中叶，天主教修会——圣约翰骑士团（也叫医院骑士团）在这里建立了一座修道院。修道院带来了秩序、知识和经济活力，斯洛滕逐渐从一个村庄聚落，演变成一个区域性的小型贸易和宗教中心。石头教堂建了起来，围绕着修道院的定居点也开始有了城市的雏形。然而，平静总是短暂的。16世纪的荷兰反抗西班牙统治的八十年战争，把这片土地也卷入了烽火。斯洛滕由于其水路位置，具备了战略价值。为了防止被攻占，当时的城市管理者做出了一个决定性的举措：按照当时最先进的军事工程理念，将整个城镇用星形的护城河和土垒防御工事彻底包围起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，我们今天看到的斯洛滕的魔法轮廓，其实诞生于战争的焦虑。那些优美的、环绕全城的弧形水道，最初是冰冷的军事壕沟。为了给防御工事腾出空间，甚至拆掉了一部分老城墙和房屋。这场“变形记”赋予了斯洛滕一个近乎完美的几何形态，也意外地定格了它的规模——从此，它就被这道水环紧紧拥抱，再也没有向外扩张一寸。战争结束后，进入17世纪的荷兰黄金时代，斯洛滕虽比不上阿姆斯特丹或吕伐登的辉煌，但也迎来了自己的小阳春。富裕的商人和船长在这里建造了那些我们今天看到的、有着优雅山墙的砖石房屋。城里建起了新的市政厅，主运河畔熙熙攘攘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但历史的潮流终究绕过了它。更大的城市因海洋贸易而崛起，铁路网络的发展也忽略了这个小点。斯洛滕的经济逐渐回归平静，以农业和本地手工业为主。塞翁失马，焉知非福。正是这种被“遗忘”，使它奇迹般地逃脱了19、20世纪大规模的城市改造和工业化冲击。那些防御工事没有被拆毁填平，反而在后来被赋予了新的角色——浪漫的风景。19世纪，人们不再需要它防御，却开始欣赏它的美。风车“德·凯泽尔”在1755年建于防御土垒之上，它最初是座榨油坊，后来变为锯木厂，至今仍在转动，成了守护宁静的象征。斯洛滕就这样，从一座为战争而生的堡垒，静静地沉睡，变成了一座为美与宁静而存在的时光胶囊。它的历史，是一部从生存到防御，再到被遗忘，最终因遗忘而被完整保存的、充满悖论的幸运史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览斯洛滕的精髓在于“慢”和“早”。建议在早上9点前抵达，这时旅游巴士尚未到来，整座小城沐浴在清新柔和的晨光中，属于本地人的生活刚刚苏醒，你能独占那份宁静。整体游览时间建议预留4-5小时，这不包括往返交通。路线可以设计为一道优美的闭环：从唯一的主入口（南侧的“波尔库姆城门”和石桥）进入，沿着主运河（Heerenwal）向北漫步至最北端，然后从另一侧的街道折返，深入探索纵横交错的小巷，最后回到起点附近参观核心景点。这样的安排能让你先获得运河两岸最经典的视觉印象，再像寻宝一样钻进内部，发现细节的惊喜，节奏由舒朗到细密，恰到好处。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`斯洛滕的博物馆和风车内部开放时间很短且依赖志愿者，务必提前在官网或市政信息牌确认当日是否开放，避免扑空。城内几乎所有街道都是居民区，游览时请保持安静，不要随意对着居民窗户拍照，尊重当地人的私密生活空间。如果你计划骑车环游弗里斯兰乡村，斯洛滕是一个完美的中途站，城内有指定自行车停放点，请勿将自行车骑入狭窄的步行小巷。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从南侧的波尔库姆城门和古老的石桥进入，让自己成为今天第一批踏入这座时光胶囊的旅人，静静感受护城河水面的薄雾与风车剪影构成的静谧画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走到主运河（Heerenwal）畔，向左或向右沿着水边漫步，观察阳光如何一寸寸爬上岸边那些色彩柔和的山墙房屋，并留意寻找那座最小的、只能容一人通过的“爱之桥”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上并参观守护城门的风车“德·凯泽尔”，顺着吱呀作响的木楼梯爬上内部，听志愿者讲解磨坊机械的奥秘，并从高处的小窗俯瞰被护城河完美勾勒出的城市星形轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进位于老街上的斯洛滕城市博物馆，在这座17世纪的老建筑里，通过地图、模型和旧物件，倾听这个小城从泥沼地发展为防御堡垒，再归于宁静的完整故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意拐进一条与主运河垂直的、宽度不过两三米的小巷，比如Kerkstraat，用指尖触摸那些被岁月打磨得光滑的砖墙，抬头看两侧屋顶几乎要碰在一起形成的“一线天”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到市中心小巧的圣方济各教堂，即使不进入，也在它周围安静的墓园里停留片刻，读读那些已经模糊的古老墓碑，感受几个世纪以来社区生活的沉淀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主运河畔找一家有露天座位的咖啡馆或小餐馆，比如“De Waag”，点一杯醇厚的荷兰咖啡或当地啤酒，就这么坐着，看船只轻轻穿过桥洞，看居民骑着自行车叮铃铃驶过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，再次回到连接城内外的主要石桥上，回首望一眼这座被水环抱的微型城市，与清晨初见时的印象对比，你会发现它在你心里已经有了温度和故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主运河中段石桥上的经典视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚黄金时段，站在桥中央，将蜿蜒的河道、两岸的房屋和远处风车一同纳入镜头，利用水面的倒影营造对称构图，等待一艘小船或几只鸭子为画面增添生机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`风车“德·凯泽尔”脚下的仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮风车本体时，从护城河外侧的草地上仰拍，将巨大的风车叶片与古老的砖石基座、背后的城门和一小片蓝天构成充满力量感的几何画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`运河畔某扇彩色门或窗的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，寻找一扇漆着弗里斯兰标志性绿色或蓝色的门、或者一个摆满鲜花的窗台作为前景框架，透过它去拍摄对岸的房屋和河景，照片会立刻充满故事感和纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城小巷的“一线天”光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直洒入Kerkstraat这样极窄的小巷，迅速捕捉光线照亮部分古老砖墙和石板路、而其余部分沉浸在深邃阴影中的强烈明暗对比，营造出戏剧性的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`充分利用水面，斯洛滕的运河和护城河是绝佳的反光板，尤其在无风的清晨，能拍出油画般静谧的倒影。尽量避免在照片中出现过多的现代汽车或杂乱标牌，选择角度时多用心，以保持画面中世纪的纯净感。无人机飞行在荷兰受到严格管制，在斯洛滕这样的历史城镇和居民区上空飞行基本被禁止，请勿尝试。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`下榻城内唯一的历史酒店“斯洛滕酒店”，它由几栋17世纪的商人老宅连通而成，房间有着低矮的木梁和望向运河的小窗，夜晚当游客散尽，你便拥有了整座古城的神秘夜晚。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗意`}</h4>
                  <p className="text-sm text-green-800">{`选择城外步行10分钟可达的“博斯瓦尔德”度假别墅或民宿，住在弗里斯兰典型的独栋农舍里，清晨被牛羊的哞叫声唤醒，推开窗是无比开阔的草场和风车景观。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车20分钟前往吕伐登郊区或菲仕兰湖区（如斯洛滕附近），入住设计精美的五星级庄园酒店或水畔豪华度假屋，享受顶级的设施和服务，将斯洛滕作为一日游的精致目的地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-purple-800">{`吕伐登中央车站附近有多种经济型酒店和设计感十足的旅舍，价格实惠且交通便利，作为探索弗里斯兰地区（包括斯洛滕）的基地是性价比极高的选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若想入住斯洛滕城内极其有限的住宿（如那家历史酒店），必须提前数月预订，尤其在夏季和周末。住在城外或吕伐登，晚上可能会感到些许不便（公共交通稀少），但能获得更丰富的餐饮选择和更安静的乡村之夜。无论住在哪里，体验一次“弗里斯兰早餐”是必须的，尝尝当地的黑麦面包、特色香肠和奶酪，开启地道的本地一天。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开斯洛滕很久以后，我发现自己最常回味的，不是某一张具体的照片，而是那种全身心沉浸其中的“完整感”。在这个被切割得支离破碎的世界里，我们习惯了接受碎片：碎片化的信息，碎片化的时间，碎片化的景观。而斯洛滕，这个小到半小时就能走完一圈的地方，却给了我们一个罕见的、完整的馈赠。它的城墙（水）是完整的，它的历史肌理是完整的，它作为一个社区的生活气息是完整的。在这里，你不会被某个孤立的、需要排队两小时观看的“景点”所绑架，你本身就是流动风景的一部分，你在用自己的脚步和呼吸，丈量并参与一个活着的微型宇宙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，它值得被列入清单，并非因为它的名声或规模，恰恰相反，是因为它的“小”与“静”所蕴含的巨大力量。它像一面清澈的池塘，能照见我们内心对于秩序、安宁和归属感的原始渴望。在斯洛滕，你学到的不是一段枯燥的历史年份，而是一种可能的生活哲学：如何与自然环境共处（水），如何守护社区的边界（护城河），如何在变动的时间中保持自己的内核不变（风车永恒的转动）。对于每一位厌倦了浮光掠影、渴望深度连接的旅人来说，斯洛滕是一次心灵的深呼吸，它提醒我们，最美的风景，有时就存在于那份不被惊扰的、小而完整的宁静之中。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/guadix-cave-houses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓜迪斯洞穴之家</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Guadix Cave Houses</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bevagna-umbria-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝瓦尼亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bevagna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ytterby-mine-sweden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊特比矿坑</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ytterby Mine</p>
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
