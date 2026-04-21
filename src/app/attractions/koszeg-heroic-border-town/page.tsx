import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克塞格 Kőszeg｜英雄的边境小城，被时光温柔吻过的匈牙利心脏 - 最佳欧洲景点',
  description: '你还记得童年故事里，那种被高大城墙保护着、屋顶铺着温暖红瓦、每一条小巷都藏着秘密的小镇吗？克塞格就是这样一个从童话书里直接走出来的地方。当我第一次把车停在古城外，步行穿过那道古老的城门时，时间“嗡”地一声就慢了下来。脚底下是几百年来被无数脚步打磨得光滑温润的鹅卵石，空气里有种特别的味道——是刚出炉的...',
}

export default function KoszegHeroicBorderTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '克塞格', href: '/destinations/hungary' },
            { label: '克塞格', href: '/attractions/koszeg-heroic-border-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克塞格・Kőszeg・匈牙利・克塞格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你还记得童年故事里，那种被高大城墙保护着、屋顶铺着温暖红瓦、每一条小巷都藏着秘密的小镇吗？克塞格就是这样一个从童话书里直接走出来的地方。当我第一次把车停在古城外，步行穿过那道古老的城门时，时间“嗡”地一声就慢了下来。脚底下是几百年来被无数脚步打磨得光滑温润的鹅卵石，空气里有种特别的味道——是刚出炉的甜面包的焦香，混合着从周围科塞格山脉森林飘来的、湿润的木头和苔藓气息。最响的声音不是车流，而是远处圣詹姆斯教堂沉厚的钟声，当——当——，不紧不慢，仿佛在给整个小镇的呼吸打着拍子。
中心广场（ Fő tér ）像个温暖的客厅，周围环绕着杏黄色、淡粉色和薄荷绿的老房子，阳台上摆满了天竺葵。下午的阳光斜斜地照过来，给每一扇窗、每一道石框都镶上了金边。当地人坐在长椅上，慢悠悠地喝着咖啡，或者只是坐着，什么也不做。你会瞬间明白，这里的生活不是用来“度过”的，而是用来“沉浸”的。那个最高的、带着尖顶钟楼的建筑，就是市政厅，它不像官员办公的地方，倒更像一位德高望重的老爷爷，慈祥地注视着广场上发生的一切。
而当你抬起头，目光越过这些温柔的屋顶，一定会被北边山丘上那座深色、厚重的城堡塔楼抓住视线。那就是 Jurisics 城堡，它沉默、坚实，与脚下色彩明丽的广场形成了奇妙的对话。这种对比正是克塞格的灵魂——甜美日常生活的另一面，是厚重的、关乎生存与荣耀的历史。这种张力让这个小城一点都不“小”，它的故事深不见底。最打动我的，是这种英雄史诗与宁静市井的毫无缝隙的共存。在这里，历史不是博物馆里玻璃罩下的展品，它就是面包房的热气，是石缝里的青苔，是傍晚时分家家户户窗口亮起的、鹅黄色的灯光。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你还记得童年故事里，那种被高大城墙保护着、屋顶铺着温暖红瓦、每一条小巷都藏着秘密的小镇吗？克塞格就是这样一个从童话书里直接走出来的地方。当我第一次把车停在古城外，步行穿过那道古老的城门时，时间“嗡”地一声就慢了下来。脚底下是几百年来被无数脚步打磨得光滑温润的鹅卵石，空气里有种特别的味道——是刚出炉的甜面包的焦香，混合着从周围科塞格山脉森林飘来的、湿润的木头和苔藓气息。最响的声音不是车流，而是远处圣詹姆斯教堂沉厚的钟声，当——当——，不紧不慢，仿佛在给整个小镇的呼吸打着拍子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中心广场（ Fő tér ）像个温暖的客厅，周围环绕着杏黄色、淡粉色和薄荷绿的老房子，阳台上摆满了天竺葵。下午的阳光斜斜地照过来，给每一扇窗、每一道石框都镶上了金边。当地人坐在长椅上，慢悠悠地喝着咖啡，或者只是坐着，什么也不做。你会瞬间明白，这里的生活不是用来“度过”的，而是用来“沉浸”的。那个最高的、带着尖顶钟楼的建筑，就是市政厅，它不像官员办公的地方，倒更像一位德高望重的老爷爷，慈祥地注视着广场上发生的一切。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你抬起头，目光越过这些温柔的屋顶，一定会被北边山丘上那座深色、厚重的城堡塔楼抓住视线。那就是 Jurisics 城堡，它沉默、坚实，与脚下色彩明丽的广场形成了奇妙的对话。这种对比正是克塞格的灵魂——甜美日常生活的另一面，是厚重的、关乎生存与荣耀的历史。这种张力让这个小城一点都不“小”，它的故事深不见底。最打动我的，是这种英雄史诗与宁静市井的毫无缝隙的共存。在这里，历史不是博物馆里玻璃罩下的展品，它就是面包房的热气，是石缝里的青苔，是傍晚时分家家户户窗口亮起的、鹅黄色的灯光。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克塞格`} />
                <InfoRow label="英文名称" value={`Kőszeg`} />
                <InfoRow label="正式名称" value={`Kőszeg`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`克塞格`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座以微弱兵力成功抵御奥斯曼帝国大军围攻、从而改写了中欧历史的英雄小城。`} />
                <InfoRow label="建筑特色" value={`完整保存了中世纪城镇肌理，以色彩柔和的巴洛克和文艺复兴立面建筑环绕着古老的中央广场，远处是威严的城堡塔楼。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式、文艺复兴及巴洛克风格为主，呈现出奥匈边境地区独特的融合风情。`} />
                <InfoRow label="文化价值" value={`它是匈牙利民族坚韧精神的活化石，也是昔日繁荣的边境贸易与手工艺文化的宁静见证者。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整座古城本身就是一座开放式博物馆，街道和主要广场全天开放。核心历史建筑如圣詹姆斯教堂和Jurisics城堡的开放时间因季节而异：城堡博物馆和英雄大厅通常在4月至10月，每日上午10点至下午6点开放；11月至3月仅周末开放，时间为上午10点至下午4点。每周一闭馆。教堂通常在白天向访客开放，但请注意避开弥撒时间（通常为周日上午）。建议出行前在镇旅游中心官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。参观主要景点需购票：Jurisics城堡博物馆与英雄大厅联票成人约为2500匈牙利福林（约6.5欧元）；学生、老人票约为1500福林。圣詹姆斯教堂塔楼登顶（如开放）约需额外500福林。镇上小型博物馆（如面包博物馆）票价通常在1000福林左右。家庭套票常有优惠。`} />
              <InfoRow label="地址" value={`Kőszeg, 9730 Hungary`} />
              <InfoRow label="交通方式" value={`最近的国际机场是奥地利的维也纳国际机场（VIE）或匈牙利的布达佩斯李斯特·费伦茨国际机场（BUD）。从维也纳出发最便捷：在维也纳火车南站（Wien Meidling）或中央车站（Wien Hauptbahnhof）乘坐直达火车前往匈牙利边境车站Szentgotthárd，车程约1.5小时，然后在Szentgotthárd站换乘前往Kőszeg的当地巴士，巴士车程约30分钟。从布达佩斯出发，可在布达佩斯火车西站（Budapest-Déli）乘坐火车至Szombathely（约2.5小时），再换乘前往Kőszeg的巴士（约30分钟）。自驾最为灵活，从维也纳车程约1小时15分钟，沿途风景如画。镇上停车方便，建议使用古城外围的停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解克塞格的今天，你得回到1532年那个炎热的夏天。那时，奥斯曼帝国的苏丹苏莱曼大帝，在征服了贝尔格莱德之后，正率领着他那支约八万人的、所向披靡的庞大军队，浩浩荡荡地向维也纳进发。克塞格，这座位于匈牙利西部边境、只有寥寥几千守军和市民的小城，成了他们西进路上必须拔除的一颗钉子。所有人都认为，这将是场毫无悬念的、瞬间结束的碾压。当时的城堡主，是一位名叫 Miklós Jurisics 的克罗地亚裔贵族兼指挥官。他手下的士兵，加上能拿得动武器的市民，总共不超过800人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`围城从8月5日开始。土耳其人的重炮日夜轰鸣，试图轰塌城墙。但 Jurisics 和他的战士们，凭借着这座坚固的城堡和视死如归的勇气，一次又一次击退了潮水般的进攻。战斗惨烈到难以想象，据说连城堡里的女人和孩子都在帮忙搬运石块和滚烫的油。时间一天天过去，奥斯曼军队的伤亡数字不断攀升，而维也纳的秋天即将来临。这场原本计划几天内结束的战斗，硬生生被拖到了8月30日。最终，苏莱曼大帝失去了耐心，他意识到，为了这座小城消耗过多时间和兵力，可能会危及整个远征维也纳的计划。在发动了最后一次、也是最猛烈的进攻仍未成功后，奥斯曼大军在8月31日清晨，拔营撤退了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这场“克塞格之围”的胜利，其意义远远超出一座城市的存亡。它极大地挫败了奥斯曼帝国不可战胜的神话，为维也纳乃至整个中欧的防御争取了至关重要的时间，彻底打乱了苏莱曼的军事部署。Jurisics 成了全欧洲传颂的英雄，而克塞格，则被永远地冠以“英雄城”的称号。此后的几百年，它作为哈布斯堡王朝统治下的边境要塞和繁荣的贸易城镇继续发展。来自德国、克罗地亚、犹太等不同族裔的商人和手工艺人在这里定居，带来了文艺复兴和巴洛克风格的影响，修建起了我们今天看到的那些精美房屋。它经历了繁荣，也经历了衰落，甚至在19世纪一度失去了行政中心的地位，变得安静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但也许正是这种“安静”，保护了它。它没有被现代工业过度侵扰，那些动人的建筑细节——彩绘的灰泥立面、精致的铁艺招牌、拱廊下的商铺——才得以幸存。两次世界大战它都幸运地躲过了大规模破坏。今天的克塞格，不再需要用自己的身躯去阻挡千军万马，它的英雄主义转化成另一种形式：那就是在一片追求速度和效率的世界里，顽强地、优雅地守护着一种慢节奏的、充满人情味的生活方式和历史记忆。每年八月，小镇都会举行盛大的历史节，重现1532年的那场战役，那一刻，历史仿佛又活了过来，但空气中弥漫的不再是硝烟，而是庆典的欢乐与自豪。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味克塞格，你需要一整天的时间，并且放慢脚步。建议在上午九点左右抵达，那时游客还未大批涌入，阳光温柔，最适合捕捉古城的晨间生机。整个游览节奏应该是松弛有度的“漫游-沉浸”式，先在古城核心区感受日常脉搏，再深入探索城堡的历史重量，最后用一顿漫长的晚餐或一次登高望远来收尾。这样安排能让你由表及里，从视觉上的愉悦渐进到情感与历史的共鸣，完整体验这座小城从“甜美”到“深沉”的多维魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇非常小巧，完全依靠步行，请务必穿一双绝对舒适的平底鞋来应对鹅卵石路面。
主广场的餐厅在周末和夏季晚餐时段可能很忙，如果不想等待，可以尝试广场辐射出去的小巷里的家庭餐馆，往往更有本地风味。
很多小店和博物馆周一休息，如果你的行程包含周一，请提前规划好参观重点。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的“下城门”（Alsókapu）进入，让双脚初次感受那些被岁月打磨得异常光滑的鹅卵石路面，像当地人一样开始一天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向 Fő tér 主广场，先在 Jurisics 雕像下驻足，然后随便找一张长椅坐下，花十分钟什么也不做，只是看广场如何像客厅一样渐渐被阳光和人声填满。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到广场北侧，推开圣詹姆斯教堂那扇厚重的木门，让眼睛适应内部昏暗的光线，然后抬头仰望那座精美绝伦的晚期哥特式网状肋拱顶，静静听一会或许正在进行的管风琴练习。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面小巷穿出，沿着微微上坡的 Kossuth Lajos utca 街道漫步，留意两旁店铺那些可爱的铁艺招牌和摆满了手工艺品的小橱窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一路向北走到 Jurisics 城堡的入口，穿过护城河上的小桥，走进那座见证过奇迹的庭院，用手触摸城堡粗糙而冰凉的石头外墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡的英雄大厅里仔细观看那些描绘1532年围城战的巨幅油画，试着想象当年那震耳欲聋的炮火声与此刻庭院的寂静形成的巨大反差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的观景台或塔楼（如果开放）俯瞰整个克塞格古城，看那些红屋顶像波浪一样在脚下铺开，一直延伸到远方的绿色山峦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，一定要钻进主广场拱廊下某家传统的“cukrászda”（甜品店），点一份当地特色的“Kőszegi vargabéles”（一种奶酪馅酥皮点心）和一杯咖啡，为这趟旅程画上一个甜蜜的句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主广场东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光会以极低的角度穿过拱廊，在鹅卵石地面上投下长长的、富有韵律感的光影，此时以色彩鲜艳的建筑立面为背景拍摄人物剪影或街景极具故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣詹姆斯教堂内部中殿`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光明媚的上午，当光线透过南侧的高窗射入教堂，会在古老的石柱和长椅上形成一道道光束，站在祭坛附近回望大门方向，能捕捉到空灵而神圣的空间纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Jurisics城堡的钟楼脚下`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在城堡庭院内，用广角镜头仰拍钟楼，将其厚重的石砌塔身与一小片天空纳入画面，能强烈传达历史的沧桑与力量。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从Kőszeg山脉的远足小径回望`}</h4>
                  <p className="text-sm text-gray-700">{`如果体力允许，徒步上山，在日落时分从西侧的山腰处，可以拍到整个克塞格古城笼罩在金色夕阳下、背后衬着城堡轮廓的经典全景，长焦镜头能压缩空间，让小镇看起来更像一个精致的模型。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对拍照很友善，但拍摄商店内部或私人庭院前，请先用眼神或手势征得同意。使用无人机在古城上空飞行需要特别许可，且可能打扰居民宁静，请谨慎并提前查询法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`主广场附近由老房子改建的温馨家庭旅馆，房间不大但一尘不染，老板娘会为你手绘一张标注了“秘密角落”的古城地图，并送上自家酿的杏子酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于古城静谧一隅的16世纪贵族宅邸精品酒店，保留了原始的穹顶壁画和石墙，现代设计巧妙地融入其中，夜晚在院子里能听到清晰的虫鸣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在郊外山坡上的四星级温泉酒店，拥有俯瞰古城的无敌全景露台和富含矿物质的室内外温泉池，适合在一天徒步或历史探索后彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿更能体验“醒来就在中世纪”的感觉，但停车可能需要停在附近的公共停车场。夏季和节日期间（尤其是八月历史节）房源紧张，务必提前数月预订。小镇治安极好，夜晚独自在古城散步也倍感安心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克塞格好几天了，我的脑海里还时常回响着那里教堂的钟声，和脚底仿佛依旧能感受到的、鹅卵石那种独特的圆润触感。这座小城给我的，不仅仅是一次视觉的享受，更像是一次心灵的按摩。在这个人人都在追逐“更大”、“更快”、“更知名”的世界里，克塞格骄傲地、安静地展示着另一种可能性：“小”可以多么深邃，“慢”可以多么丰富，“边缘”可以多么具有核心的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它让我思考，什么是真正的“英雄主义”？也许不仅仅是1532年那石破天惊的二十五天。更是一种日复一日的坚持——坚持守护自己的节奏，坚持对美的细致雕琢，坚持在全球化浪潮中保留一份不可替代的独特性。每一位来到这里的深度旅人，我相信都能带走一些东西：可能是一块甜点的滋味，可能是一段城墙触摸起来的温度，更可能是一种关于如何与自己、与历史、与当下宁静相处的启示。它不是一个用来“打卡”的地方，它是一个让你停下来，听故事，也听自己内心回响的地方。这样的地方，值得你专程为它安排一次旅行，因为它疗愈的，是这个时代我们普遍缺失的“耐心”与“从容”。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gubbio-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    古
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">古比奥古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gubbio Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/murten-morat" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆尔滕（环湖古城墙）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Murten (Morat)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ragusa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉古萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ragusa</p>
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
