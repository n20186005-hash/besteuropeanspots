import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥伦塞 Ourense｜西班牙加利西亚的温泉古城，在古罗马桥畔体验千年地热馈赠 - 最佳欧洲景点',
  description: '你第一眼看到奥伦塞，可能会觉得它和许多安静的西班牙内陆老城没什么两样：爬满藤蔓的石头房子，狭窄得只容阳光侧身而过的巷弄，广场上总有老人坐在长椅上，时间慢得仿佛凝固。但只要你顺着空气中那一丝若有若无的、带着矿物感的硫磺气息走去，这座城市真正的灵魂便会向你袒露。那气息像一条看不见的丝线，牵引着你穿过石板',
}

export default function OurensePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '奥伦塞', href: '/destinations/spain' },
            { label: '奥伦塞', href: '/attractions/ourense' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥伦塞・Ourense・西班牙・奥伦塞`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到奥伦塞，可能会觉得它和许多安静的西班牙内陆老城没什么两样：爬满藤蔓的石头房子，狭窄得只容阳光侧身而过的巷弄，广场上总有老人坐在长椅上，时间慢得仿佛凝固。但只要你顺着空气中那一丝若有若无的、带着矿物感的硫磺气息走去，这座城市真正的灵魂便会向你袒露。那气息像一条看不见的丝线，牵引着你穿过石板路，最终把你带到米尼奥河畔。然后，一幅令人惊异的画面展开了：在奔腾的河水旁，在古老的罗马桥脚下，竟然蒸腾着一片片白色的热气。人们穿着泳衣，或坐或站，沉浸在石头垒砌的露天池子里，表情是那种彻底的、毫不设防的松弛。孩子们的欢笑声、流水声、以及不同语言交织的低声交谈，混合着温热的水汽扑面而来。这一刻你会恍然大悟，奥伦塞不是一座“有温泉的城市”，它本身就是一座从温泉里长出来的、活着的有机体。
那股温热的地下水，是这座城市永恒的心跳。在老城中心的 As Burgas，你能看到泉眼最原始的形态：滚烫的泉水（超过60摄氏度）从古老的石雕兽头口中汩汩涌出，注入石槽，蒸汽在午后的阳光里形成小小的彩虹。这里总是聚集着拎着塑料桶的本地居民，他们来接免费的温泉水，据说用来煮鸡蛋或泡脚都极好。你能看到最日常的生活与古老的自然馈赠之间，毫无隔阂。而在河边的公共浴池，场景则更为开放和社交化。水温被自然调节成不同的梯度，你可以像完成一场仪式，从最热的池子缓缓挪到温凉的池子，看着对岸的罗马桥从金辉变成剪影。皮肤被矿物质水浸润得光滑，所有旅途的疲惫都被熨帖地抚平。
这就是奥伦塞最打动人心的魅力：它提供了一种毫无门槛的、纯粹的愉悦。在这里，奢华不是用金钱堆砌的私密水疗，而是阳光下与陌生人共享一池热水的慷慨，是千年之前罗马士兵与现代旅人感受着同源温暖的连接感。这座城市没有高高在上的纪念碑式孤独，它的核心是温暖的、流动的、属于每个人的。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到奥伦塞，可能会觉得它和许多安静的西班牙内陆老城没什么两样：爬满藤蔓的石头房子，狭窄得只容阳光侧身而过的巷弄，广场上总有老人坐在长椅上，时间慢得仿佛凝固。但只要你顺着空气中那一丝若有若无的、带着矿物感的硫磺气息走去，这座城市真正的灵魂便会向你袒露。那气息像一条看不见的丝线，牵引着你穿过石板路，最终把你带到米尼奥河畔。然后，一幅令人惊异的画面展开了：在奔腾的河水旁，在古老的罗马桥脚下，竟然蒸腾着一片片白色的热气。人们穿着泳衣，或坐或站，沉浸在石头垒砌的露天池子里，表情是那种彻底的、毫不设防的松弛。孩子们的欢笑声、流水声、以及不同语言交织的低声交谈，混合着温热的水汽扑面而来。这一刻你会恍然大悟，奥伦塞不是一座“有温泉的城市”，它本身就是一座从温泉里长出来的、活着的有机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那股温热的地下水，是这座城市永恒的心跳。在老城中心的 As Burgas，你能看到泉眼最原始的形态：滚烫的泉水（超过60摄氏度）从古老的石雕兽头口中汩汩涌出，注入石槽，蒸汽在午后的阳光里形成小小的彩虹。这里总是聚集着拎着塑料桶的本地居民，他们来接免费的温泉水，据说用来煮鸡蛋或泡脚都极好。你能看到最日常的生活与古老的自然馈赠之间，毫无隔阂。而在河边的公共浴池，场景则更为开放和社交化。水温被自然调节成不同的梯度，你可以像完成一场仪式，从最热的池子缓缓挪到温凉的池子，看着对岸的罗马桥从金辉变成剪影。皮肤被矿物质水浸润得光滑，所有旅途的疲惫都被熨帖地抚平。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是奥伦塞最打动人心的魅力：它提供了一种毫无门槛的、纯粹的愉悦。在这里，奢华不是用金钱堆砌的私密水疗，而是阳光下与陌生人共享一池热水的慷慨，是千年之前罗马士兵与现代旅人感受着同源温暖的连接感。这座城市没有高高在上的纪念碑式孤独，它的核心是温暖的、流动的、属于每个人的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥伦塞`} />
                <InfoRow label="英文名称" value={`Ourense`} />
                <InfoRow label="正式名称" value={`Ourense`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`奥伦塞`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因古罗马地热温泉而兴起的千年古城，是加利西亚内陆重要的历史、交通与温泉疗养中心。`} />
                <InfoRow label="建筑特色" value={`古罗马工程技术与中世纪城市肌理完美融合，以宏伟的多拱石桥与散布全城的天然温泉喷口为核心标志。`} />
                <InfoRow label="建筑风格" value={`古罗马、罗曼式与哥特式风格交织，呈现出一种质朴、实用而充满生活气息的加利西亚特色。`} />
                <InfoRow label="文化价值" value={`温泉不仅是旅游资源，更是深深嵌入当地日常生活的社交与文化仪式，体现了人与自然资源千年不变的亲密关系。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市全天开放。主要的免费露天温泉池（As Burgas 泉眼区和米尼奥河畔的公共浴池）24小时开放，但夜间无照明。建议白天或黄昏前往体验最佳。温泉浴场（如 Termas Outariz）通常营业时间为上午10点至晚上10点，具体季节会有调整，冬季可能延长。罗马桥（Ponte Romana/Millennium Bridge）全天可通行。老城区商店及咖啡馆通常在上午9点至下午2点，下午5点至晚上9点营业，周日部分歇业。`} />
              <InfoRow label="门票价格" value={`As Burgas泉眼观景区及城市历史街区：完全免费。米尼奥河畔的露天温泉池（如 Chavasqueira）：完全免费。专业的温泉浴场（如 Termas Outariz）：基础泡池区域约5-10欧元，包含不同温度的室内外池、桑拿和休憩区；如需按摩或理疗服务需额外付费。博物馆（如主教座堂）：门票约3-6欧元，有学生及老年人优惠。罗马桥及河岸漫步道：免费。`} />
              <InfoRow label="地址" value={`Plaza Mayor, 1, 32001 Ourense, Spain （以市中心 Mayor 广场为坐标）`} />
              <InfoRow label="交通方式" value={`从最近的圣地亚哥-德孔波斯特拉机场（SCQ）出发：驾车或乘坐出租车沿AP-53高速公路直达，约1小时15分钟车程。公共交通需先乘坐机场巴士到圣地亚哥火车站，再转乘火车（Renfe）前往奥伦塞，总耗时约2小时，火车班次频繁。从马德里或巴塞罗那出发：可搭乘高速列车（AVE）或长途火车直达奥伦塞火车站，车站位于市中心，步行10分钟即可到达老城。城市内部景点集中，强烈建议步行探索；前往较远的温泉浴场可搭乘本地公交车或出租车，车程均在10分钟内。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起奥伦塞的故事，必须从地底深处那股永不枯竭的热流讲起。早在罗马人到来之前，此地的凯尔特居民就已将这些冒着热气的泉眼视为具有治疗力量的神圣之地。公元一世纪，罗马帝国为了巩固其在伊比利亚半岛西北部的统治，修建道路网络，他们发现了米尼奥河畔这个战略要冲，更重要的是，发现了这里珍贵的温泉资源。精于工程的罗马人立刻意识到其价值，他们不仅建立了名为“Aquae Aurentiae”（意为“金色之水”）的定居点，更建造了最早的浴场设施，将泡温泉这一生活享受与社交活动带到了帝国边疆。那些从 As Burgas 泉眼遗址发掘出的罗马时期排水渠和建筑地基，无声地诉说着这里曾是行军疲惫的军团士兵恢复体力的绿洲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国衰落后，这里并未被遗忘。在中世纪早期，温泉的治愈名声吸引了修道院的僧侣前来，他们可能延续了某种形式的疗养传统。而真正让奥伦塞城市格局定型的关键，是那座横跨米尼奥河的罗马桥——尽管我们今天看到的主体建于中世纪。最初的罗马木桥或石桥早已损毁，但在十一至十三世纪，人们利用原址和部分罗马桥基，重建了这座坚固的七孔石桥。它成为了通往圣地亚哥朝圣之路（银之路分支）上的重要咽喉，无数风尘仆仆的朝圣者在此歇脚，用温泉水洗涤一路的劳顿与伤痛。桥，连接了彼岸；温泉，抚慰了身心。这两者共同奠定了奥伦塞作为交通枢纽和疗养站的双重角色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着朝圣之路的繁荣，城市围绕桥梁和温泉发展起来。主教座堂在十三世纪开始修建，其庄严的罗曼式正立面与内部精致的哥特式回廊，彰显着这座城市在中世纪加利西亚王国中的宗教地位。老城区那些蜿蜒的街道和带拱廊的广场，如 Plaza Mayor，也逐渐形成。温泉继续在市民生活中扮演核心角色，As Burgas 的泉眼在十八世纪被精心装饰成巴洛克风格，兽头喷口和精美的石雕围墙，体现了人们对其的珍视与美化。然而，在近代工业化时期，奥伦塞相对偏远，发展缓慢，这份“缓慢”却意外地保护了它的历史中心和那份悠闲的生活节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪后期，随着人们对文化遗产和健康生活方式的重新关注，奥伦塞的千年温泉遗产被赋予了新的生命力。当地政府没有选择将其封闭起来做成昂贵的商业化景点，而是做出了一个极富智慧的决定：在米尼哥河岸精心设计和建造了一系列免费的、与自然环境融为一体的露天温泉池。这个举措彻底激活了城市。古老的疗愈传统，以一种极其民主和开放的方式回归到现代人的日常生活中，也让奥伦塞从一座低调的内陆城市，变成了一个独具魅力的深度旅行目的地。今天，你在池中感受到的温暖，与两千年前罗马士兵感受到的，并无二致。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受奥伦塞的“温”与“古”，建议安排一整天的悠闲时光。最佳抵达时间是上午十点前，此时阳光柔和，老城刚刚苏醒。整体节奏宜慢不宜快，核心是体验温度的变迁与时空的层叠。路线设计为一个大环线：从老城中心的古老泉眼开始，感知源头；然后漫步下山至米尼奥河畔，在免费的露天池中亲身沉浸；接着跨越千年古桥，从对岸回望城市全景；最后回到老城街巷，用一顿加利西亚美食犒劳自己。这样安排，你将从视觉、触觉、味觉全方位理解这座城市的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`泡免费露天温泉务必自带毛巾、拖鞋和防水袋，现场没有租赁服务，地面可能湿滑。
温泉池水温从高温（约40°C）到低温（约20°C）不等，切勿在饱腹或饮酒后立即进入高温池，建议从低温池逐步适应。
老城很多石板路坡度较大，请务必穿一双舒适防滑的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站先去 As Burgas，触摸从兽口石雕中喷涌而出的滚烫源泉水，看本地居民如何自然地将其融入日常生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着带有坡度的古老街巷向米尼奥河方向漫步，让两旁黄色的砂岩建筑和偶尔出现的精美锻铁阳台带你穿越中世纪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达 Chavasqueira 露天温泉区，换上泳衣先从温度最高的池子开始，让皮肤适应那股富含矿物质的滑腻触感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢移步到中温池，将身体浸泡其中，抬头便是雄伟的罗马桥石拱与对岸山丘上错落的古城建筑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过古老的罗马桥（Ponte Romana），在桥中央停留，感受脚下米尼奥河的奔腾，并回头拍摄城市依山而建的层叠美景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`过桥后沿着风景优美的河滨步道（Paseo del Rivero）散步，从另一个视角欣赏桥梁全貌与河岸温泉区升腾的缕缕白烟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从桥的另一端绕回老城，钻进 Plaza Mayor 附近的小巷，找一家地道的 Pulpería（章鱼餐厅），点一份用铜锅煮的 Pulpo a la Gallega（加利西亚风味章鱼）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`餐后悠闲地逛逛主教座堂及其宁静的回廊，消化食物的同时让心灵在罗曼式的厚重与哥特式的轻盈间获得平静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果意犹未尽，可在黄昏时分再次返回河边某个温泉池，在星空与华灯初上的桥影下，结束这完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗马桥南岸仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，站在 Chavasqueira 温泉区附近的河滩上，用广角镜头将宏伟的多拱石桥、桥上行人、远处山城以及河面蒸汽一同纳入画面，充满生命力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`As Burgas 泉眼蒸汽与光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴天的清晨，阳光斜射入泉眼广场时，对准兽口喷出的滚滚蒸汽拍摄，利用逆光可以拍出光线穿透水雾的丁达尔效应，画面神秘而古老。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从 Ponte Romana 桥面捕捉城市天际线`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻，站在桥的中段，面向老城方向，利用桥拱作为自然画框，拍摄华灯初上、层层叠叠的建筑群与教堂尖塔，色调冷暖对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城街角生活瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`午后在 Rúa do Vilar 或周边小巷，捕捉本地居民在石拱门下聊天、在传统店铺前购物的场景，使用大光圈略微虚化背景，突出人物与古老环境的和谐感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`米尼奥河畔温泉池的人像剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，以泛着金光的河水和罗马桥为背景，拍摄池中人们的剪影，焦点对在远处的桥上，营造温暖而富有故事感的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重他人隐私，拍摄温泉池中的他人时尽量采用远景或背影，避免特写引发不快。`}</li>
                <li>• {`加利西亚地区多阴雨，如果遇上雨天别沮丧，湿漉漉的石板路和氤氲的水汽更能拍出古城忧郁而诗意的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由百年石头老宅改造的精品酒店，房间保留着原始的木质横梁和石墙，窗户推开就是教堂的钟声与老街的风景，位置绝佳，步行可达所有核心景点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温泉度假体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在米尼奥河对岸山丘上的现代设计酒店，房间拥有直面罗马桥与老城的无敌全景露台，并附赠旗下专业温泉浴场的门票，让你在私密与公共温泉体验间无缝切换。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城安静一隅的公寓式民宿，由热情的本地家庭经营，装饰充满加利西亚传统手工艺品，房东会为你准备地道的早餐，并分享只有本地人才知道的温泉小窍门和美食据点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`河边疗愈住所`}</h4>
                  <p className="text-sm text-purple-800">{`紧邻温泉区和绿地的简约风格酒店，主打健康理念，部分房间甚至带有接入天然温泉水的小泡池，适合追求安静、希望将更多时间沉浸在水疗节奏中的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和周末（尤其是温泉文化节期间）住宿非常紧俏，务必提前数周甚至数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果希望夜游温泉后能快速回到房间，首选老城中心或河岸区的住宿；对睡眠环境要求极高、喜静的朋友，可考虑河对岸稍微远离中心但视野开阔的住所。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥伦塞许久后，我发现自己最怀念的，不是某一张绝美的照片，也不是某一道特别的美食，而是那种全身心浸润在温暖水流中，毫无杂念的松弛感。在这个处处讲究效率、体验也被精心包装和定价的时代，奥伦塞提供了一种近乎原始的慷慨。它不设围墙，不问来历，只是坦然地将这份流淌了千年的地热礼物，分享给每一个来到河畔的人。你会看到西装革履的上班族下班后过来泡一刻钟，看到祖孙三代其乐融融地在池边嬉水，看到风尘仆仆的背包客放下行囊，脸上露出终于到家般的释然。温泉在这里，消弭了所有身份的界限，成了最平等的治愈媒介。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座古城教会我，真正的深度旅行，不仅是去看古老的建筑，更是去体验一种延续至今的生活哲学。奥伦塞的桥连接着物理的空间，而它的温泉，连接着时间与社群。它让你相信，有些美好的事物，可以穿越战乱、王朝更迭和时尚潮流，依然保持着最本真的模样，温暖如初。所以，如果你厌倦了那些拥挤的打卡地，渴望一场能触达肌肤、温暖内心的旅行，请一定要来奥伦塞。脱下鞋袜，走进那池热气蒸腾的河水旁，让古老的温度和当下的人生，在此刻悄然重合。你会发现，旅行的意义，有时就是这么简单，又这么深刻。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tarazona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉索纳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarazona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/leon-old-town-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱昂老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">León Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/almagro-medieval-courtyard-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔马格罗</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almagro</p>
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
