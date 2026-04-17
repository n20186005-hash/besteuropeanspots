import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝尔盖姆 Bergheim｜探秘阿尔萨斯唯一被完整城墙环绕的“鲜花葡萄园”小镇 - 最佳欧洲景点',
  description: '车子缓缓驶离大路，穿过一片在九月阳光下翻滚着绿浪的葡萄园海，忽然间，一圈敦实、厚重、带着久远烟熏色的灰石头城墙就毫无征兆地横在了眼前。那感觉不像靠近一个旅游点，倒像不小心闯进了一本中世纪画册的封面。城墙那么完整，那么沉默，只有一个拱形门洞张开嘴，仿佛时间隧道的入口。这就是贝尔盖姆给我的第一眼震撼——...',
}

export default function BergheimAlsaceFrancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '贝尔盖姆', href: '/attractions/bergheim-alsace-france' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝尔盖姆・Bergheim・法国・贝尔盖姆（位于上莱茵省，属阿尔萨斯地区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶离大路，穿过一片在九月阳光下翻滚着绿浪的葡萄园海，忽然间，一圈敦实、厚重、带着久远烟熏色的灰石头城墙就毫无征兆地横在了眼前。那感觉不像靠近一个旅游点，倒像不小心闯进了一本中世纪画册的封面。城墙那么完整，那么沉默，只有一个拱形门洞张开嘴，仿佛时间隧道的入口。这就是贝尔盖姆给我的第一眼震撼——它没有被现代化扩张肢解，它被自己的历史，牢牢地、温柔地拥在怀里。
把车停在城墙外的免费停车场，徒步穿过那道名为“下门”的拱洞。瞬间，世界被切换了频道。轰鸣的车声被过滤在外，取而代之的是自己脚步在古老鹅卵石上敲出的清脆回响。空气的味道变了，混合着谁家窗口飘出的炖肉香、面包店刚出炉的“库格尔霍夫”蛋糕的黄油甜香，还有从城墙石缝里沁出的、潮湿的苔藓气息。目光所及，是挤挤挨挨的木筋墙房子，那些木条被漆成深巧克力色，墙面则填满了温柔的鹅黄、羞涩的粉红或宁静的天蓝，每一扇窗台都爆炸式地开着天竺葵和牵牛花，红得像火，紫得像梦。这哪里是城墙环绕的防御工事，这分明是一座被鲜花和糖果塞满的保险箱。
而这里最动人的，是“活着”的质感。你看到的不是博物馆布景。一位老奶奶正从二楼窗户伸出长杆，为她那些怒放的天竺葵浇水，水珠在阳光里画出小彩虹。几个孩子踩着滑板车，尖叫着从陡斜的小巷冲下来，笑声撞在古老的墙壁上，弹回来，满是生气。广场边的长椅上，两位戴着贝雷帽的老先生对着棋盘已经沉思了一个下午，手边的咖啡杯早就见了底。城墙在这里不是隔阂的象征，而是家园的边界；防御的功能早已褪去，留下的是一圈让人安心、催生归属感的温暖臂弯。这座小镇的核心魅力，就在于它把辉煌的历史遗产，毫无痕迹地编织进了最平凡、最温馨的市井生活里，让你觉得，当一个贝尔盖姆人，在城墙里慢慢变老，或许是世上最幸福的事之一。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子缓缓驶离大路，穿过一片在九月阳光下翻滚着绿浪的葡萄园海，忽然间，一圈敦实、厚重、带着久远烟熏色的灰石头城墙就毫无征兆地横在了眼前。那感觉不像靠近一个旅游点，倒像不小心闯进了一本中世纪画册的封面。城墙那么完整，那么沉默，只有一个拱形门洞张开嘴，仿佛时间隧道的入口。这就是贝尔盖姆给我的第一眼震撼——它没有被现代化扩张肢解，它被自己的历史，牢牢地、温柔地拥在怀里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在城墙外的免费停车场，徒步穿过那道名为“下门”的拱洞。瞬间，世界被切换了频道。轰鸣的车声被过滤在外，取而代之的是自己脚步在古老鹅卵石上敲出的清脆回响。空气的味道变了，混合着谁家窗口飘出的炖肉香、面包店刚出炉的“库格尔霍夫”蛋糕的黄油甜香，还有从城墙石缝里沁出的、潮湿的苔藓气息。目光所及，是挤挤挨挨的木筋墙房子，那些木条被漆成深巧克力色，墙面则填满了温柔的鹅黄、羞涩的粉红或宁静的天蓝，每一扇窗台都爆炸式地开着天竺葵和牵牛花，红得像火，紫得像梦。这哪里是城墙环绕的防御工事，这分明是一座被鲜花和糖果塞满的保险箱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这里最动人的，是“活着”的质感。你看到的不是博物馆布景。一位老奶奶正从二楼窗户伸出长杆，为她那些怒放的天竺葵浇水，水珠在阳光里画出小彩虹。几个孩子踩着滑板车，尖叫着从陡斜的小巷冲下来，笑声撞在古老的墙壁上，弹回来，满是生气。广场边的长椅上，两位戴着贝雷帽的老先生对着棋盘已经沉思了一个下午，手边的咖啡杯早就见了底。城墙在这里不是隔阂的象征，而是家园的边界；防御的功能早已褪去，留下的是一圈让人安心、催生归属感的温暖臂弯。这座小镇的核心魅力，就在于它把辉煌的历史遗产，毫无痕迹地编织进了最平凡、最温馨的市井生活里，让你觉得，当一个贝尔盖姆人，在城墙里慢慢变老，或许是世上最幸福的事之一。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝尔盖姆`} />
                <InfoRow label="英文名称" value={`Bergheim`} />
                <InfoRow label="正式名称" value={`Bergheim`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`贝尔盖姆（位于上莱茵省，属阿尔萨斯地区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿尔萨斯地区唯一至今仍被完整中世纪城墙环绕的城镇，一部鲜活的、关于防御、葡萄种植与民间传说的石砌史书。`} />
                <InfoRow label="建筑特色" value={`赭石色与粉彩色木筋墙房屋如糖果般簇拥在雄伟的灰色砂岩城墙内，城墙与民居之间巧妙地镶嵌着被居民精心打理的“城墙内花园”与葡萄藤。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔萨斯木筋墙民居风格与13-14世纪军事防御建筑（城墙、塔楼、城门）的完美融合。`} />
                <InfoRow label="文化价值" value={`一个将严峻的军事防御历史、悠久的葡萄种植传统与神秘的中世纪“女巫”传说和谐共融于日常生活的活态社区典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。小镇信息中心/旅游局开放时间通常为每年四月至十月的周二至周六 10:00-12:30, 14:00-18:00，周日和周一关闭；十一月至次年三月开放时间缩短或需预约。城墙塔楼和某些历史建筑仅在特定导览游或夏季节庆期间开放，行前务必查阅官网或镇口公告。`} />
              <InfoRow label="门票价格" value={`进入小镇本身免费。若参加由旅游局组织的主题导览游（如城墙历史游、巫术历史徒步游），费用约为成人8欧元，儿童优惠。参观私人酒窖品尝葡萄酒通常免费，但品酒后购买一瓶葡萄酒是心照不宣的礼仪。`} />
              <InfoRow label="地址" value={`1 Place du Dr Pierre Walter, 68750 Bergheim, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德国巴登-巴登的卡尔斯鲁厄/巴登-巴登机场（FKB）或法国斯特拉斯堡机场（SXB），但均需转乘火车。最便捷的方式是乘火车至塞莱斯塔（Sélestat）火车站，这是区域铁路枢纽。从塞莱斯塔火车站前广场，搭乘106路或109路公交车，约25分钟即可直达贝尔盖姆镇中心，班次平日约每小时一班，周末减少。自驾是最灵活的方式，从斯特拉斯堡沿A35高速公路向南，在“塞莱斯塔”出口下，沿D159/D1bis公路行驶约15公里即达，小镇外围有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`贝尔盖姆的故事，得从石头和葡萄藤说起。早在罗马时代，这片肥沃的向阳坡地就被发现是种植葡萄的绝佳宝地。但真正让贝尔盖姆在历史上留下深刻轮廓的，是中世纪那段纷乱岁月。大约在13世纪初，当地的领主们决定，必须为这片富饶的葡萄园和镇民筑起一道坚实的屏障。于是，采自孚日山脉的灰色砂岩被一块块运来，从1311年开始，一道全长约1.5公里、设有大量箭垛和巡逻道的雄伟城墙拔地而起，并配以四座主要城门和数座坚固的塔楼。这堵墙，在随后烽火连天的数百年里，成了贝尔盖姆人的生命线。它成功抵御了无数次流寇的骚扰和小规模的冲突，让墙内的生活、祈祷和葡萄的酿造，得以在相对安宁中进行。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，高墙能防住刀剑，却防不住瘟疫与偏见的蔓延。16至17世纪，席卷欧洲的“猎巫”狂潮也席卷了阿尔萨斯。而贝尔盖姆，竟因此留下了独特且沉重的一笔。与许多地方狂热地处决疑似“女巫”不同，贝尔盖姆当时的领主——拉波斯坦因的领主，采取了一种相对“司法”的方式。他设立了一个特别法庭，并允许被告拥有辩护人。根据保存下来的珍贵档案记载，从1582年到1683年的一百年间，这里审判了约40名被指控为女巫的人，其中“仅有”约一半被处决。这个比例在当时黑暗的大环境下，低得令人惊讶。今天，你可以在小镇的信息中心了解到这段历史，镇上甚至有一条“巫术之路”的徒步路线。这段往事为贝尔盖姆的石头城墙，增添了一层复杂的人文阴影，它提醒人们，恐惧与愚昧曾是比任何外敌都更可怕的城墙内的敌人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙经历的最大考验，无疑是那场残酷的三十年战争（1618-1648）。阿尔萨斯作为战略要地被反复争夺、劫掠。贝尔盖姆凭借其坚固的城防，一度成为周边地区难民的避难所。但战争结束后，随着现代国家边界的确定和火炮技术的发展，中世纪城墙的军事意义逐渐消失。许多人开始视其为阻碍发展的绊脚石，欧洲无数城墙都在那时被拆除。但贝尔盖姆的居民们没有。他们或许出于节俭，或许出于眷恋，选择与这道墙共存。他们将城墙内部的空间利用起来，建起了花园、甚至种上了葡萄；城墙成了他们后院的一部分，是晾晒衣服的背景，是夏日乘凉的依靠。这种实用主义的智慧，意外地保全了这份完整的遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流至近代，特别是二战后，阿尔萨斯地区开始有意识地进行文化遗产保护和旅游开发。人们蓦然回首，才发现贝尔盖姆这颗被遗忘的明珠——它是整个地区唯一保留了完整中世纪城墙的小镇！它没有被战争彻底摧毁，也没有被“现代化”浪潮吞噬。于是，修复工作开始了，但原则是“修旧如旧”，绝不破坏那份历经沧桑的质朴感。与此同时，墙外山坡上的葡萄园继续欣欣向荣，生产着声誉卓佳的雷司令和琼瑶浆白葡萄酒。今天，贝尔盖姆的城墙，不再用于防御敌人，而是温柔地守护着一种古老的生活节奏、一种人与历史共生的哲学。它从军事要塞，演变为社区图腾，最终成为吸引世人前来寻找安宁与时光韵味的独特地标。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的早晨，最好是工作日，九点左右抵达。这时旅游大巴还未涌入，小镇刚刚苏醒，光线柔和，是感受其静谧本真的最佳时刻。整体游览可以安排大半天时间，节奏务必放慢。上午专注于探索城墙内的迷宫小巷和历史痕迹，中午享受一顿漫长的阿尔萨斯午餐，下午则可以漫步城墙、参观酒窖，或者干脆在广场发呆看云。这样的安排让你既能深入细节，又能拥有松弛的体验，真正理解何为“慢活在历史中”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末午后可能人流较多，尽量早到或傍晚游览核心区。镇内几乎所有街道都是凹凸不平的鹅卵石，务必穿一双绝对舒适防滑的鞋子。如果对巫术历史特别感兴趣，提前在旅游局官网查询并预订专门的导览游，否则只能看到零星标牌。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开厚重的“下门”橡木门扉，让自己完全浸入那条蜿蜒向上、被岁月打磨得光可鉴人的主街鹅卵石路面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街的第一个小广场驻足，抬头仔细辨认那些木筋墙房屋横梁上雕刻的古老符号、日期和幽默的小人像`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那条窄得仅容一人通过的“羊肠小巷”，用掌心触摸两边冰凉而粗糙的砂岩墙，听回声讲述隐秘的故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着隐隐的葡萄酒香找到一家家庭经营的小酒窖，主人会用地道的阿尔萨斯口音法语为你讲解年份与风土`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从内部攀上“小偷塔”或某段开放的城墙步道，以守卫的视角俯瞰红瓦屋顶的波浪和远处无垠的葡萄园`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“大井”广场边的咖啡馆外坐下，点一杯本地黑比诺葡萄酒，看镇民在古老的文艺复兴风格喷泉边接水聊天`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挑选一家城墙根下拥有绿意盎然庭院的小餐馆，品尝铺满奶酪和腌肉的“火焰塔”饼，让美味为旅程加冕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前穿过“上门”，沿着城墙外静谧的绿道散步，回望金色夕阳为整个石头小镇勾上温暖的轮廓光`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`葡萄园眺望点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从镇外西侧的D1bis公路边某片葡萄园小径回望，能拍到完整的城墙环绕小镇、背景是孚日山脉的经典全景，温暖侧光让石头和红瓦熠熠生辉`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“下门”内部框架`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光刚好斜射入门洞，站在门内阴影处向外拍，以门洞为画框，框住外面鲜艳的木筋房和绚烂的窗台花，形成强烈的明暗与色彩对比`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“羊肠小巷”纵深`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分光线直射入窄巷时，站在一端拍摄纵深，利用两侧石墙的引导线，捕捉光影在石板路上切割出的戏剧性图案，偶尔有居民走过便是点睛之笔`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙花园偶遇`}</h4>
                  <p className="text-sm text-gray-700">{`下午任意时间，在城墙内侧的某处私家小花园外（请尊重隐私远观），将前景的鲜艳天竺葵与中景厚重的城墙石块、背景的尖顶屋顶一同纳入镜头，体现生活与历史的交融`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`广场生活速写`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，坐在“大井”广场咖啡座，用长焦镜头悄悄捕捉喷泉边当地人交谈、孩童嬉戏的自然瞬间，背景虚化成温暖的灯光和古老的建筑立面`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿尔萨斯人非常注重隐私，拍摄居民房屋尤其是室内，务必事先微笑示意或最好避免。使用无人机在法国小镇飞行有严格限制，通常禁止在居住区上空飞行，放飞前务必查清法规。多利用清晨和黄昏的“魔法时刻”，贝尔盖姆的人造光污染很少，夜景星空与城墙塔楼的合影可能带来意外惊喜。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙内的甜蜜蜗居`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋16世纪木筋房改造的迷你公寓，楼梯吱呀作响，窗户正对着内城墙和老玫瑰丛，晚上能听到清晰的教堂钟声，房东会送来自制的果酱`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园间的现代隐居`}</h4>
                  <p className="text-sm text-green-800">{`距离小镇步行15分钟的一座极简风格设计民宿，独占一小片葡萄园坡地，拥有无敌的全景露台，夜晚在热水浴缸里边泡澡边看星，是静谧与奢华的结合`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史宅邸的沉浸体验`}</h4>
                  <p className="text-sm text-yellow-800">{`镇上唯一一家小型精品酒店，前身是法官宅邸，房间保留着原始的彩绘木梁和石壁炉，早餐在种满柠檬树的内庭享用，管家能讲述许多镇上不为人知的传说`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭农庄的质朴温暖`}</h4>
                  <p className="text-sm text-purple-800">{`位于紧邻贝尔盖姆的卫星小村，一座仍在运作的家族葡萄酒庄提供的客房，房间朴素但一尘不染，包含地道的农家晚餐和清晨酒窖参观，体验最真实的葡农生活`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`贝尔盖姆城内住宿数量极其有限，必须提前数月预订，尤其是夏季和圣诞市场期间。住在城外葡萄园中的民宿通常需要自驾，但能获得更广阔的视野和宁静。小镇治安极好，夜晚巷道虽暗但非常安全，独自散步也无须担心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开贝尔盖姆时，我总会忍不住多次回望。那道灰色的城墙在暮色中渐渐变成一道深色的剪影，安静地伏在大地上。它不像许多世界级景点那样，以压倒性的辉煌或壮丽震撼你。它的力量是内敛的、渗透式的。它让你看到的，是一种可能性——一种历史不必成为标本，而是可以作为生活背景布甚至生活本身的一部分，继续呼吸、生长、开花的可能性。在这里，时光没有被切割成“过去”与“现在”，而是像葡萄酒一样，被醇厚地酿在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、不断推倒重来的快节奏世界里，贝尔盖姆的存在像一个温柔的启示。它告诉我们，守护本身可以是一种创造，记忆可以用鲜花来承载，古老的墙壁之内，完全可以安放一个生动、温暖、充满烟火气的当下。它值得每一位热爱深度游的旅人专程到访，不仅仅是为了一睹完整的城墙，更是为了体验一种完整的生活哲学。在这里住上一晚，听夜晚的寂静如何被古老的石头放大，看晨曦如何再次点亮那些彩色的墙面，你会带走比照片多得多的东西——一份关于何为“家园”的、沉静而有力的答案。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amiens-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚眠大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amiens Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/le-mans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒芒老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Le Mans Old Town</p>
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
