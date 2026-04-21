import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特热比奇犹太区 Jewish Quarter of Třebíč｜走进中欧保存最完好的犹太生活画卷 - 最佳欧洲景点',
  description: '第一眼看到特热比奇犹太区，你会以为自己不小心闯进了一本泛黄故事书的立体插图里。它不像布拉格的犹太区那样被辉煌的城市建筑包围，而是安安静静地蜷伏在伊赫拉瓦河的一个拐弯处，对岸就是高耸的圣普罗科皮乌斯教堂。那种感觉非常奇妙，仿佛时空在这里轻轻折叠了一下，把一段完整的生活切片，原封不动地保存了下来。你脚下...',
}

export default function TrebicJewishQuarterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '特热比奇犹太区', href: '/attractions/trebic-jewish-quarter' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特热比奇犹太区・Jewish Quarter of Třebíč・捷克・特热比奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到特热比奇犹太区，你会以为自己不小心闯进了一本泛黄故事书的立体插图里。它不像布拉格的犹太区那样被辉煌的城市建筑包围，而是安安静静地蜷伏在伊赫拉瓦河的一个拐弯处，对岸就是高耸的圣普罗科皮乌斯教堂。那种感觉非常奇妙，仿佛时空在这里轻轻折叠了一下，把一段完整的生活切片，原封不动地保存了下来。你脚下是几个世纪以来被无数脚步磨得光滑的鹅卵石，缝隙里长出茸茸青苔。空气里有种淡淡的、旧木头和石头混合的气味，很干净，很沉静。
走在迷宫般狭窄曲折的巷子里，两旁的房子肩挨着肩，墙皮是褪了色的粉、鹅黄、薄荷绿，像被阳光晒软了的水彩。许多窗台上还摆着天竺葵，红色的花朵在古老的窗棂间跳跃，告诉你这里依然有人生活，有咖啡的香气从门缝里飘出来。但更多的门窗是紧闭的，安静得能听到你自己的脚步声和远处教堂的钟声。这种静谧不是死寂，而是一种沉淀下来的、充满故事感的宁静。你会不由自主地放慢脚步，压低声音，生怕惊扰了沉睡在砖石里的时光。
这里最打动人的，就是一种“生活本身即博物馆”的状态。它没有为了旅游而被过度修饰，没有喧闹的纪念品商店。你看到的阳台、后院、窄窄的通道、共享的庭院，都是几百年来真实生活需要的产物。你能想象穿着长袍的拉比匆匆走过，孩子们在巷子里追逐，主妇从二楼窗口垂下篮子购买货郎的商品。它不是一座被供奉起来的神殿，而是一个曾经充满烟火气、而后突然静止的社区。这种真实感，比任何宏伟的建筑都更有力量，它让你直接触摸到历史的肌理，感受到一个民族的呼吸与心跳。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到特热比奇犹太区，你会以为自己不小心闯进了一本泛黄故事书的立体插图里。它不像布拉格的犹太区那样被辉煌的城市建筑包围，而是安安静静地蜷伏在伊赫拉瓦河的一个拐弯处，对岸就是高耸的圣普罗科皮乌斯教堂。那种感觉非常奇妙，仿佛时空在这里轻轻折叠了一下，把一段完整的生活切片，原封不动地保存了下来。你脚下是几个世纪以来被无数脚步磨得光滑的鹅卵石，缝隙里长出茸茸青苔。空气里有种淡淡的、旧木头和石头混合的气味，很干净，很沉静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在迷宫般狭窄曲折的巷子里，两旁的房子肩挨着肩，墙皮是褪了色的粉、鹅黄、薄荷绿，像被阳光晒软了的水彩。许多窗台上还摆着天竺葵，红色的花朵在古老的窗棂间跳跃，告诉你这里依然有人生活，有咖啡的香气从门缝里飘出来。但更多的门窗是紧闭的，安静得能听到你自己的脚步声和远处教堂的钟声。这种静谧不是死寂，而是一种沉淀下来的、充满故事感的宁静。你会不由自主地放慢脚步，压低声音，生怕惊扰了沉睡在砖石里的时光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人的，就是一种“生活本身即博物馆”的状态。它没有为了旅游而被过度修饰，没有喧闹的纪念品商店。你看到的阳台、后院、窄窄的通道、共享的庭院，都是几百年来真实生活需要的产物。你能想象穿着长袍的拉比匆匆走过，孩子们在巷子里追逐，主妇从二楼窗口垂下篮子购买货郎的商品。它不是一座被供奉起来的神殿，而是一个曾经充满烟火气、而后突然静止的社区。这种真实感，比任何宏伟的建筑都更有力量，它让你直接触摸到历史的肌理，感受到一个民族的呼吸与心跳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特热比奇犹太区`} />
                <InfoRow label="英文名称" value={`Jewish Quarter of Třebíč`} />
                <InfoRow label="正式名称" value={`Jewish Quarter of Třebíč`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`特热比奇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中欧地区独一无二、保存最完整的犹太聚居区，完整记录了从中世纪到20世纪初犹太社区的生活样貌。`} />
                <InfoRow label="建筑特色" value={`紧凑的街巷网络中密集排列着超过120栋色彩柔和的原始住宅，融合了哥特式、文艺复兴、巴洛克及古典主义风格。`} />
                <InfoRow label="建筑风格" value={`以朴素的市民建筑为主，风格杂糅，展现了犹太社区在有限空间和法规限制下的实用主义与坚韧美学。`} />
                <InfoRow label="文化价值" value={`不仅是建筑群，更是一部活着的社区史诗，见证了犹太民族的离散、共生与创伤，是欧洲记忆不可或缺的一页。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共街区全天可漫步参观。核心建筑如前犹太会堂、拉比住宅等开放时间为：夏季（4月至10月）周二至周日 9:00-17:00；冬季（11月至3月）周二至周日 9:00-16:00；周一通常闭馆。具体建筑开放时间可能微调，建议行前在特热比奇游客中心网站确认。`} />
              <InfoRow label="门票价格" value={`参观公共街道免费。进入前犹太会堂及附属博物馆的联票约为150捷克克朗（约6欧元）。学生、老人及家庭享有优惠票。部分特殊展览或导览团需额外付费。`} />
              <InfoRow label="地址" value={`Subakova Street, 674 01 Třebíč, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发是最佳选择。在布拉格中央火车站（Praha hl.n.）乘坐开往布尔诺（Brno）方向的火车，在特热比奇站（Třebíč）下车，车程约2小时，班次频繁。从火车站步行至犹太区约15-20分钟，一路有清晰的棕色旅游标识指引。如果你自驾，从布拉格沿D1高速公路向布尔诺方向行驶，在Exit 146转出，车程约1.5小时，犹太区周边有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特热比奇犹太区的故事，始于中世纪那堵看不见的墙。大约在12世纪，随着城镇的发展，犹太人开始在这里定居。和欧洲许多地方一样，他们被法令限制在特定的区域居住，于是，在河岸边这片地势较低、容易洪水泛滥的土地上，犹太社区逐渐成形。听起来像是被放逐，但某种程度上，这种隔离反而催生了一个紧密、自足的世界。他们建立了自己的市政机构、学校、澡堂，最重要的是，建立了心灵的归宿——犹太会堂。最早的木结构会堂早已消失在火灾中，但后来重建的石砌会堂，成为了社区数百年的精神中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`社区命运的转折，常常与外部世界的君王息息相关。1548年，斐迪南一世的一纸敕令，将特热比奇的犹太人正式驱逐。然而，故事在这里出现了有趣的回旋。仅仅几年后，出于经济考量，当地的领主又允许他们返回。这种反复在欧洲犹太史上并不罕见，生存的空间总是在挤压与松动的缝隙中艰难寻找。重返后的社区迎来了一个相对稳定的发展期，尤其是在17、18世纪。你现在看到的那些色彩淡雅、风格各异的房子，大多是在这个时期修建或改建的。狭窄的“钱袋巷”据说得名于曾经繁荣的借贷业务，而密集的建筑布局，则是当时对犹太住宅不得超出原有地基、不得临街开大窗等严苛规定的直接结果。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪带来了“解放”的春风。1848年革命后，限制犹太人居住的法律被废除，他们可以自由地迁往城镇更“好”的区域。许多富裕的家庭搬走了，留下了老区的房子，租给或卖给更贫穷的居民，社区的社会结构开始变化。然而，真正的、彻底的“静止”，发生在20世纪那场人类最深的黑暗里。二战期间，纳粹将特热比奇的犹太人分批送往特莱西恩施塔特集中营，继而送往奥斯维辛。战后，仅有极少数幸存者归来，一个延续了数百年的社区生活，就此戛然而止。房子空置了，街巷沉默了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后几十年，这片区域一度面临被拆除、为现代建筑让路的威胁。它像一个被遗忘的角落，在社会主义时期的城市规划中风雨飘摇。转机出现在上世纪九十年代。人们开始重新认识它的价值——不是作为等待开发的荒地，而是作为无可替代的历史见证。1997年，捷克共和国将其列为国家文化古迹。最大的认可在2003年到来，联合国教科文组织将“特热比奇的犹太区和圣普罗科皮乌斯教堂”一同列入世界遗产名录。理由正是它“保存异常完好的、展现犹太文化和基督教文化在中世纪欧洲长期共生的建筑群”。从被限制的居住地，到被遗忘的废墟，再到被珍视的人类共同遗产，这条路，它走了将近八百年。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味特热比奇犹太区的精髓，建议预留至少3到4小时的漫游时间。最佳抵达时间是上午九点后，此时光线柔和，游客尚少，街区从晨光中苏醒的模样最为动人。游览节奏一定要“慢”，这里不适合打卡，只适合沉浸。建议先从外部整体感受街区与河流、教堂的地理关系，然后像侦探一样钻进每一条小巷，最后在前犹太会堂的博物馆里为所有的感官发现找到历史的注脚。这样的安排能让你从宏观到微观，从感性到知性，完整地理解这个独一无二的地方。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`居民区请注意保持安静，避免在居民门窗前长时间驻足或拍照，尊重当下的居住隐私。
街区部分地面不平，务必穿一双舒适且鞋底防滑的鞋子，高跟鞋在这里简直是灾难。
信息中心在前犹太会堂内，务必先去那里获取免费地图并了解当前各个小展览的开放状态。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从横跨伊赫拉瓦河的大桥上开始，停下来好好欣赏犹太区全景与对岸山丘上圣普罗科皮乌斯教堂的完美构图，理解这两个社区几个世纪以来隔河相望的微妙关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着 Subakova 街的主入口走进犹太区，让眼睛先适应那突然变得亲密的空间尺度，留意脚下鹅卵石图案的变化和墙根处斑驳的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那条著名的“钱袋巷”，侧身感受它最窄处不足一米的宽度，抬头看两侧房屋的墙壁几乎要碰到一起，想象几个世纪前的日常穿行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫般的后院和通道网络中随意探索，你会发现连接房屋的隐蔽楼梯、被阳光遗忘的幽静天井，以及从意想不到的角度瞥见教堂塔楼的惊喜画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进前犹太会堂（现为博物馆），在它高大、简朴却庄严的主厅里静立片刻，感受空间里残留的肃穆，然后上楼参观关于当地犹太社区生活与命运的细致展览。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到古老的犹太学校建筑和拉比住宅，观察它们与普通民居在体量和装饰上的细微差别，理解社区内部的结构。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着犹太墓地的围墙走一段，虽然墓地本身不常开放，但高墙和墙内探出的茂密树冠足以营造一种静谧而沉思的氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在街区边缘找一家小咖啡馆或餐厅坐下，点一杯捷克啤酒或咖啡，面对静谧的街巷，消化刚刚所看到和感受到的一切。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`伊赫拉瓦河对岸远景机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在河对岸通往圣普罗科皮乌斯教堂的小路上，将蜿蜒的河流、色彩斑斓的犹太区屋顶与雄伟的教堂一同纳入镜头，这是展现其世界遗产核心价值的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钱袋巷纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光能斜射入巷内时，站在巷口用长焦镜头压缩空间，捕捉鹅卵石地面引导线消失于极窄巷尾的视觉奇观，两侧墙壁的纹理和色彩细节会非常丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`后院光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`中午前后，寻找那些有楼梯或拱门连接的后院，此时阳光直射会形成强烈的明暗对比，拍摄建筑结构的光影几何图案，极具抽象美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`窗台与花朵的特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午柔和的光线打在临街的彩色窗台上时，聚焦那些盛开的天竺葵与古老斑驳的窗框、墙壁形成的色彩和质感对比，画面充满生命与岁月的对话感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从幽暗通道望见教堂`}</h4>
                  <p className="text-sm text-gray-700">{`在街区内部某些狭窄的通道或门洞内，向外框架式取景，将远处明亮的圣普罗科皮乌斯教堂塔楼作为焦点，形成强烈的明暗和空间对比，寓意深刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用多云天气的漫射光能更好地表现建筑墙面的柔和色彩与细腻质感，避免正午烈日下的生硬阴影。`}</li>
                <li>• {`拍摄民居门窗或内部庭院时，如明显是私人居所，请务必先获得许可，捷克人通常很友善，但尊重是前提。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在隔河相望的老城中心，一家由老房子改建的宾恰，房间简洁干净，主人会给你手绘一张只有当地人才知道的犹太区角落地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`犹太区内为数不多对外开放的住宿，是一间由历史住宅改造的宁静公寓，保留了古老的木梁和壁炉，夜晚当游客散尽，你便能独占整个街区的星空与寂静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城镇外围一座宁静庄园内的四星级酒店，拥有美丽的花园和 Spa 设施，开车到犹太区仅需几分钟，是在历史中沉浸一天后完美放松的奢华绿洲。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`老城边缘一家氛围友好的青年旅舍，由学校建筑改造，空间开阔，经常组织前往犹太区的免费导览步行活动，是结识同道旅伴的好地方。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特热比奇整体治安非常好，夜晚独自在犹太区附近散步也很安全，但街区内部照明较暗，建议携带手电筒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果是在夏季旅游旺季或当地节日期间来访，务必提前预订住宿，这个小城镇的接待能力有限，心仪的住处很可能很快客满。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特热比奇犹太区很久以后，脑海里萦绕不去的，不是某栋特别的房子，而是那种整体的氛围——一种巨大的宁静，和宁静之下汹涌的历史回响。它没有悲情地诉说苦难，也没有刻意展示辉煌，它只是“存在”着。这种存在本身，就是一种强大的力量。它让你明白，历史不仅仅是教科书上的大事件，更是无数普通人在特定空间里日复一日的生活、信仰、欢喜与挣扎。每一块磨圆的石头，每一片剥落的墙皮，都是一个沉默的证人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求高速、新奇和刺激的世界里，特热比奇犹太区像一个逆向的时钟。它邀请你慢下来，甚至是停下来，去练习“观察”和“感受”这种几乎要遗失的能力。它告诉你，真正的深度不在于去了多少地方，而在于你是否愿意让一个地方的故事，真正地走进你心里。对于任何想要超越浮光掠影，去触摸欧洲复杂而多层的历史肌理的旅人来说，这里不是“可选项”，而是“必选项”。因为它呈现的不是一个被简化的符号，而是一段真实、完整、有温度的人类生活轨迹。这份完整，在今天，显得如此珍贵，又如此充满力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/brno-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/telc-water-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰尔奇水上城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Water Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno</p>
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
