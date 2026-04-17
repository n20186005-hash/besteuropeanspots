import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '自由城-孔弗朗 Villefranche-de-Conflent｜探访比利牛斯山深处被太阳晒暖的粉红大理石要塞 - 最佳欧洲景点',
  description: '车子在山谷里拐过最后一个弯，自由城-孔弗朗就像是从童话书的插图里直接跳出来的一样，突然、完整、不容置疑地出现在眼前。第一眼抓住你的，是那种极其温柔的、介于蜂蜜与落日之间的颜色——整座小镇，从高耸的城门到最低矮的屋舍，全是由当地山里开采的“孔弗朗大理石”砌成。上午的阳光斜斜地打在城墙上，石头仿佛被晒暖...',
}

export default function VillefrancheDeConflentFortifiedTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '自由城-孔弗朗（比利牛斯山脉的粉红大理石防御城）', href: '/attractions/villefranche-de-conflent-fortified-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`自由城-孔弗朗（比利牛斯山脉的粉红大理石防御城）・Villefranche-de-Conflent・法国・自由城-孔弗朗`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在山谷里拐过最后一个弯，自由城-孔弗朗就像是从童话书的插图里直接跳出来的一样，突然、完整、不容置疑地出现在眼前。第一眼抓住你的，是那种极其温柔的、介于蜂蜜与落日之间的颜色——整座小镇，从高耸的城门到最低矮的屋舍，全是由当地山里开采的“孔弗朗大理石”砌成。上午的阳光斜斜地打在城墙上，石头仿佛被晒暖了，散发出一种粉扑扑的光晕，怪不得人们叫它“粉红城”。你几乎听不到任何现代城市的噪音，只有坦特河（La Têt）在不远处潺潺流过，还有风穿过上方比利牛斯山松林带来的、清冽又带着松针香气的声音。
走近圣文森特门（Porte Saint-Vincent），那股中世纪的压迫感与精致感同时扑面而来。城门厚重得惊人，铁闸的痕迹还在，但门楣上却雕刻着精美的纹章。穿过门洞的刹那，光线骤暗，石板路被几个世纪的脚步磨得光可鉴人，凉意顺着脚底爬上来。然而一旦走进主街（rue Saint-Jean），世界又亮了。街道窄得可爱，两旁的房子肩并肩挤在一起，三四层高，每一扇窗户、每一道门框都装饰不同，有的挂着铁艺招牌，有的窗台盛开着天竺葵。空气里混合着刚出炉的面包香、咖啡馆的浓缩咖啡味，还有老石头那种干燥的、亘古不变的气息。你会发现，这不是一个空壳博物馆，当地人依然在这里生活，五金店、面包房、小餐馆鳞次栉比，老太太提着菜篮用加泰罗尼亚语口音的法语互相问候。
它的核心魅力，在于这种极致的“浓缩”与“和谐”。仅仅几百米见方的空间里，你经历了一次完整的时空折叠：从11世纪商人规划的城市网格，到17世纪沃邦元帅添加的、堪称艺术品的军事棱堡；从地下的神秘隧道，到高悬在山巅200多米之上的卫星堡垒。它安静，却不沉寂；它坚固如堡垒，却温暖如家园。站在城中心的教堂广场，看着孩子们绕着古老的喷泉追逐，你会觉得，这座小镇历经千年风雨、围攻与地震，最终守护下来的，正是这种不紧不慢、在巨石围墙内自得其乐的生活本身。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在山谷里拐过最后一个弯，自由城-孔弗朗就像是从童话书的插图里直接跳出来的一样，突然、完整、不容置疑地出现在眼前。第一眼抓住你的，是那种极其温柔的、介于蜂蜜与落日之间的颜色——整座小镇，从高耸的城门到最低矮的屋舍，全是由当地山里开采的“孔弗朗大理石”砌成。上午的阳光斜斜地打在城墙上，石头仿佛被晒暖了，散发出一种粉扑扑的光晕，怪不得人们叫它“粉红城”。你几乎听不到任何现代城市的噪音，只有坦特河（La Têt）在不远处潺潺流过，还有风穿过上方比利牛斯山松林带来的、清冽又带着松针香气的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近圣文森特门（Porte Saint-Vincent），那股中世纪的压迫感与精致感同时扑面而来。城门厚重得惊人，铁闸的痕迹还在，但门楣上却雕刻着精美的纹章。穿过门洞的刹那，光线骤暗，石板路被几个世纪的脚步磨得光可鉴人，凉意顺着脚底爬上来。然而一旦走进主街（rue Saint-Jean），世界又亮了。街道窄得可爱，两旁的房子肩并肩挤在一起，三四层高，每一扇窗户、每一道门框都装饰不同，有的挂着铁艺招牌，有的窗台盛开着天竺葵。空气里混合着刚出炉的面包香、咖啡馆的浓缩咖啡味，还有老石头那种干燥的、亘古不变的气息。你会发现，这不是一个空壳博物馆，当地人依然在这里生活，五金店、面包房、小餐馆鳞次栉比，老太太提着菜篮用加泰罗尼亚语口音的法语互相问候。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于这种极致的“浓缩”与“和谐”。仅仅几百米见方的空间里，你经历了一次完整的时空折叠：从11世纪商人规划的城市网格，到17世纪沃邦元帅添加的、堪称艺术品的军事棱堡；从地下的神秘隧道，到高悬在山巅200多米之上的卫星堡垒。它安静，却不沉寂；它坚固如堡垒，却温暖如家园。站在城中心的教堂广场，看着孩子们绕着古老的喷泉追逐，你会觉得，这座小镇历经千年风雨、围攻与地震，最终守护下来的，正是这种不紧不慢、在巨石围墙内自得其乐的生活本身。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`自由城-孔弗朗（比利牛斯山脉的粉红大理石防御城）`} />
                <InfoRow label="英文名称" value={`Villefranche-de-Conflent`} />
                <InfoRow label="正式名称" value={`Villefranche-de-Conflent`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`自由城-孔弗朗`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座完整保存了11世纪规划格局、并由军事天才沃邦元帅在17世纪强化至巅峰的中世纪防御城镇典范。`} />
                <InfoRow label="建筑特色" value={`完全由当地特有的桃红色大理石砌成，在阳光下呈现蜂蜜色到玫瑰色的渐变，小巧紧凑的棋盘状街道被宏伟的星形防御城墙严密包裹。`} />
                <InfoRow label="建筑风格" value={`罗马式地基与沃邦式军事防御建筑的完美融合，是中世纪民用布局与近代军事工程的活化石。`} />
                <InfoRow label="文化价值" value={`它不仅是法国“沃邦防御工事”被列入世界遗产的12个站点之一，更是加泰罗尼亚文化、法国历史与比利牛斯山自然景观交织的活态博物馆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天24小时开放，可自由漫步。城内主要景点如圣雅各教堂（Église Saint-Jacques）通常为上午9点至下午6点。利贝里亚堡（Fort Liberia）的开放时间季节性很强：四月至六月及九月为上午10点至下午6点；七月和八月为上午9点至下午7点；十月至三月开放时间缩短或仅周末开放，请务必出发前在其官网确认。所有景点在圣诞节和元旦当天关闭。`} />
              <InfoRow label="门票价格" value={`漫步古城街道免费。进入利贝里亚堡需要购票，成人票约8欧元，儿童及学生有优惠。购买与附近维莱尔隧道（Les Grottes de Villefranche）或黄色小火车（Le Petit Train Jaune）的联票可能更划算。建议随身携带一些现金，部分小型纪念品店可能只接受现金支付。`} />
              <InfoRow label="地址" value={`Place de l‘Église, 66500 Villefranche-de-Conflent, France`} />
              <InfoRow label="交通方式" value={`从法国境内出发，最便捷的方式是先抵达佩皮尼昂（Perpignan）。从巴黎可乘坐TGV高速列车直达佩皮尼昂，车程约5小时。从佩皮尼昂出发，你可以选择租车自驾（约1小时车程，沿途山路风景绝美），或者乘坐地区性的TER火车前往自由城-孔弗朗站（Villefranche-de-Conflent - Vernet-les-Bains），车程约50分钟，班次不算密集，建议提前查好时刻表。火车站就在古城墙脚下，出站即达。如果你乘坐著名的“黄色小火车”（Le Petit Train Jaune）从拉图德卡罗（Latour-de-Carol）方向过来，自由城-孔弗朗是其中最重要的一站，这本身就是一场穿越山峦的怀旧之旅。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`自由城-孔弗朗的故事，始于一个非常现实的需求：安全与赚钱。公元1092年，鲁西永伯爵吉弗雷一世（Guifred I）看中了坦特河与康弗兰河交汇处的这个战略要地。这里山谷狭窄，易于防守，又是通往西班牙和安道尔的山口贸易路线的天然枢纽。于是，他下令建立一座“自由城”——这意味着给予移居这里的商人和工匠税收豁免权与特权，就像抛出一个诱人的商业钓饵。很快，一个严格按照罗马军营模式规划的方形小镇出现了：两条主街十字交错，划分出整齐的街区，外围用一道简单的城墙圈起来。它的诞生DNA里就刻着“交易”与“防御”两个词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几百年，它就像一块肥美的蛋糕，在法国与西班牙（更具体地说是阿拉贡王国）之间被反复争夺。它所在的鲁西永地区，长期是加泰罗尼亚文化圈的一部分。直到1659年，《比利牛斯条约》签订，鲁西永正式并入法国，自由城-孔弗朗才稳定下来，成为了法兰西王国南疆最前沿的哨所。也正因此，它引起了当时太阳王路易十四的军事工程师——塞巴斯蒂安·勒·普雷斯特雷·德·沃邦元帅的注意。在沃邦看来，这座中世纪的老城墙对付火炮时代的新型战争，已经形同虚设。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，从1669年开始，一场史诗般的“外科手术”开始了。沃邦没有推倒重来，而是以无与伦比的智慧，给这座古老的小镇穿上了一件全新的、坚不可摧的“铠甲”。他在原有城墙外加建了一系列低矮而厚重的棱堡、半月堡和暗道，这些星形突起的结构能让防御火力无死角地覆盖每一个进攻角度。他还加固了城门，并在小镇正上方海拔432米的绝壁之巅，新建了利贝里亚堡，与山下主城形成致命的交叉火力网。最绝的是，他开凿了一条深达734级台阶的、近乎垂直的地下阶梯“千级阶”，将主城与山顶堡垒秘密连通。沃邦的改造，将自由城-孔弗朗从一座中世纪商业城镇，升格为一件无懈可击的军事艺术品，它因此被誉为“沃邦皇冠上的明珠”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的讽刺在于，这座为大战而生的堡垒，在其完工后的主要岁月里，并未经历预想中的惨烈围攻。它更多的角色是一座巨型军营和监狱。19世纪后，随着国界稳定和武器发展，它的军事价值褪去，逐渐归于寂静。但它躲过了被拆毁的命运，也幸运地避开了现代城镇扩张的侵蚀，像一颗被时光琥珀完整封存的珍珠。20世纪末，它与另外十一座沃邦防御工事一起，被列入联合国教科文组织世界遗产名录。如今，隆隆炮声早已被游客的赞叹和火车的汽笛取代，那些曾对准敌人的炮口，现在正对着的，是比利牛斯山令人屏息的壮丽风光。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要深度感受自由城-孔弗朗，我强烈建议你留出一整天的时间，并遵循“由外至内，由下至上”的节奏。最佳抵达时间是清晨九点前，这时旅游巴士还未到达，你能独占宁静的街道和最好的光线。上午先用两个小时，完整地绕城墙外围走一圈，从各个角度仰望这座粉红要塞的威严，并进入古城内部，细细品味那些中世纪街巷的生活气息。正午前后，当小镇开始变得喧闹，正是你抽身前往山顶利贝里亚堡的好时机，乘坐摆渡车上去，在堡垒的城垛上享用自备的简餐，俯瞰整个山谷。下午专注探索堡垒内部和那条传奇的地下阶梯。傍晚时分回到古城，此时阳光最为柔和，是拍照和寻找晚餐的黄金时间。这样的安排既能错开人流高峰，又能体验从宁静到壮阔再到温馨的完整情绪曲线。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适防滑的鞋子，无论是古城凹凸不平的石板路，还是利贝里亚堡的陡峭阶梯，都对脚力是考验。夏季山区阳光强烈且天气多变，务必携带防晒用品、一瓶水和一件轻便防风外套。小镇餐馆不多且旺季很可能满座，如果计划在山顶停留较久，建议在面包店提前买好简单的三明治和水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古城东侧的圣文森特门进入，用手触摸那冰凉厚重的粉红大理石拱门，感受铁闸留下的历史痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街 rue Saint-Jean 缓缓上行，留意两旁店铺古老的木质门扉和铁艺招牌，买一个刚出炉的“加泰罗尼亚”风味羊角包。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街道尽头的教堂广场（Place de l‘Église）稍作停留，坐在喷泉边观察当地老人坐在长椅上晒太阳聊天的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并进入圣雅各教堂，让你的眼睛适应昏暗后，去寻找那尊神秘的“黑圣母”像和古朴的罗马式柱头雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城西的法国门（Porte de France）走出，沿着护城河小路顺时针漫步，完整欣赏沃邦设计的那些几何形状完美的棱堡与城墙的雄姿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐城堡的专用摆渡车（Navette）盘旋上山，体验从现代舒适车厢中眺望脚下古城越来越像玩具模型的奇妙视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在利贝里亚堡的制高点平台上，花至少半小时，辨认远方不同的山峰，并寻找连接城堡与古城的那条隐秘“千级阶”的入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果你体力与胆量俱佳，选择从“千级阶”那734级昏暗、狭窄、幽闭的螺旋石阶徒步下山，完成一次从云端堡垒重返人间烟火的仪式性旅程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣文森特门外侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能让粉红色城墙的纹理和层次感达到极致，将厚重的城门与上方飘扬的法国国旗一同构图，故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主街纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光能斜射入窄巷时，站在街道中段，利用两侧色彩柔和的建筑作为天然引导线，拍出仿佛通向中世纪时光隧道的感觉。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`利贝里亚堡西侧城墙`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，这里是拍摄古城全景的黄金机位，温暖的夕阳光将整个小镇染成金粉色，与背后深蓝色的山峦形成强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“千级阶”内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`如果你决定徒步走下阶梯，在靠近底部的段落，会有几处缝隙透入自然光，形成神奇的光柱，等待无人时用慢门可以拍出时光穿梭般的静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`坦特河对岸远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`沿着D116公路向维莱尔方向走约500米，有一个路边停靠区，可以拍摄到古城、教堂钟楼与背后巍峨的利贝里亚堡同框的经典明信片角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机在当地是严格禁止的，因为这里是世界遗产保护区且靠近山区自然公园，请务必遵守规定。拍摄当地居民或店铺内部时，请先微笑示意并获得同意，这是一种基本的尊重。山区的光线变化极快，尤其是日落时分，提前选好位置并做好相机设置，才能抓住那转瞬即逝的魔法时刻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城石屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住城墙内由中世纪住宅改造的民宿，房间保留着原始的石墙和木梁，夜晚当一日游的游客散去，你便能独享古城真正的静谧与星空。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山谷家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`选择位于河对岸维莱尔（Vernet-les-Bains）小镇的家庭式旅馆，环境更加开阔宁静，大部分房间都带有直面自由城-孔弗朗的阳台，早晚景色无价。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山间隐居小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`在更高处的山村如科雷亚（Corneilla-de-Conflent）寻找一家由农舍改造的精品酒店，沉浸于纯粹的比利牛斯山田园风光中，伴着羊铃声醒来。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷现代酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果你第二天要赶早班火车或继续自驾旅程，佩皮尼昂市区有更多现代酒店选择，但会牺牲掉与古迹朝夕相伴的沉浸感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量非常有限，且多为老房子，隔音可能不佳但特色十足，务必提前数月预订。夏季（7-8月）和冬季滑雪季是绝对的高峰期。选择城外住宿时，请确认是否有方便的停车位，并且了解前往古城的交通方式（步行距离或是否需要开车）。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开自由城-孔弗朗时，我的背包里仿佛不止多了几张照片和一枚纪念币，更带走了一种关于“尺度”的感悟。在这个追求宏大与高耸的时代，这座小镇骄傲地展示着另一种可能性：以小为美，以固为安。它没有巴黎的辽阔，没有圣米歇尔山的孤绝，但它拥有一种无比完整、自给自足的世界观。每一块粉红色的石头都各司其位，从平民的屋舍到元帅的堡垒，共同构成一个密不可分的有机体。它告诉你，真正的力量未必是扩张，而是坚守；真正的丰富未必是繁杂，是和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些挤满游客的“必打卡”地标，渴望一次能真正触摸到历史纹理、感受到地方心跳的旅行，请一定来自由城-孔弗朗住上一晚。在夜幕降临后，独自走在空无一人的城墙上，听风声掠过垛口，看灯光依次在那些几百年的窗户里亮起。那一刻，你会明白，旅行的意义不仅仅是“看到”，更是“走入”一个完全不同的时空逻辑之中。这座被大山和沃邦城墙紧紧拥抱的小镇，像一位历经沧桑却依然从容的长者，守护着一种近乎失传的、关于家园与安宁的古老智慧。它值得你专程而来，慢慢品味，然后被它那份温柔而坚韧的粉色力量，长久地治愈。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/place-stanislas" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    南
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">南锡斯坦尼斯拉斯广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Stanislas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roussillon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁西永（红土城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roussillon</p>
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
