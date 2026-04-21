import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格蒙登城堡・Gmunden Castle・奥地利・格蒙登 | 最佳欧洲景点',
  description: '探索格蒙登城堡，奥地利上奥地利州格蒙登市的标志性景点，坐落于特劳恩湖中的小岛上，始建于11世纪，兼具中世纪防御功能与文艺复兴建筑美感。',
}

export default function GmundenCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '格蒙登城堡', href: '/attractions/gmunden-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">格蒙登城堡・Gmunden Castle・奥地利・格蒙登</h1>
          <p className="text-lg text-gray-600 mb-6">
            格蒙登城堡是奥地利上奥地利州格蒙登市的标志性景点，坐落于特劳恩湖中的小岛上，始建于11世纪，兼具中世纪防御功能与文艺复兴建筑美感。城堡以石砌城墙、尖顶塔楼为特色，内部藏有丰富的历史文物与艺术品，周边环绕着湛蓝的湖水与翠绿的山峦，既有军事古堡的厚重，又有湖区风光的灵动，是感受奥地利中世纪历史与自然之美的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              格蒙登城堡是奥地利上奥地利州格蒙登市的标志性景点，坐落于特劳恩湖中的小岛上，始建于11世纪，兼具中世纪防御功能与文艺复兴建筑美感。城堡以石砌城墙、尖顶塔楼为特色，内部藏有丰富的历史文物与艺术品，周边环绕着湛蓝的湖水与翠绿的山峦，既有军事古堡的厚重，又有湖区风光的灵动，是感受奥地利中世纪历史与自然之美的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="格蒙登城堡" />
                <InfoRow label="英文名称" value="Gmunden Castle (Schloss Orth am Traunsee)" />
                <InfoRow label="国家" value="奥地利（Austria）" />
                <InfoRow label="城市" value="格蒙登（Gmunden）" />
                <InfoRow label="所属区域" value="奥地利上奥地利州，萨尔茨卡默古特湖区北部" />
              </div>
              <div className="space-y-4">
                <InfoRow label="地理位置" value="特劳恩湖东北岸，湖中小岛（奥尔特岛）" />
                <InfoRow label="建筑风格" value="中世纪防御风格与文艺复兴美学" />
                <InfoRow label="始建年代" value="11世纪" />
                <InfoRow label="特色" value="中世纪军事防御典范，人文与自然交融" />
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">开放时间</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">城堡本身：</span>全年开放，分季节调整</p>
                <p><span className="font-medium">4月1日至10月31日（旺季）：</span>9:00-17:00，每日开放，16:30停止入场</p>
                <p><span className="font-medium">11月1日至次年3月31日（淡季）：</span>10:00-16:00，每周一闭馆（法定节假日除外）</p>
                <p><span className="font-medium">城堡庭院及周边观景区域：</span>全年全天免费开放</p>
                <p><span className="font-medium">具体开放时间：</span>以现场公告为准</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">门票信息</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">城堡内部参观</h4>
                  <ul className="space-y-1">
                    <li>• 成人：10欧元</li>
                    <li>• 12-18岁青少年：5欧元</li>
                    <li>• 6-11岁儿童：3欧元</li>
                    <li>• 5岁及以下：免费</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">优惠与套票</h4>
                  <ul className="space-y-1">
                    <li>• 奥地利旅行通票、欧洲青年卡：8折优惠</li>
                    <li>• 家庭套票（2大2小）：22欧元（含内部参观与导览手册）</li>
                    <li>• 城堡内临时特展：5欧元/人（需额外购票）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">地址与交通</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-medium">地址：</span>Schloss Orth, 4810 Gmunden, Austria</p>
                <p><span className="font-medium">位置：</span>特劳恩湖中的奥尔特岛（Orth Insel），距离格蒙登老城区约1公里</p>
                <p><span className="font-medium">公共交通：</span>从维也纳乘火车约2.5小时可达格蒙登火车站；从萨尔茨堡乘火车约1小时可达；火车站步行15分钟可抵达特劳恩湖畔码头，乘坐摆渡船（票价2欧元/人次，往返3欧元）5分钟即可登岛；小镇内公交1路、3路可直达湖畔</p>
                <p><span className="font-medium">自驾：</span>沿A1高速公路，小镇周边有多个收费停车场（停车费5欧元/天），从停车场步行10分钟可达码头</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                格蒙登城堡的历史可追溯至11世纪中叶，其雏形是一座木质防御堡垒，由当时统治该地区的巴本堡家族修建，最初用于防御特劳恩湖周边的盐矿运输路线，守护当地的盐业贸易安全。萨尔茨卡默古特地区自古便是欧洲重要的盐产地，“萨尔茨卡默古特”的本意便是“盐业商会的产业”，而格蒙登作为盐矿运输的重要枢纽，城堡的修建成为保障盐业贸易的关键，这也奠定了其在该地区的历史地位。
              </p>
              
              <p>
                12世纪末，巴本堡家族衰落，城堡被哈布斯堡家族接管，随后进行了大规模扩建，将木质堡垒改建为石砌城堡，增设了防御塔楼、护城河与吊桥，强化了其军事防御功能。此时的格蒙登城堡成为哈布斯堡家族统治上奥地利地区的重要据点，不仅承担着防御任务，还成为当地行政与司法的中心，城堡内增设了议事厅、审判室等设施，见证了中世纪奥地利的权力运作。
              </p>

              <p>
                15至16世纪，随着文艺复兴思潮传入奥地利，格蒙登城堡迎来了一次重要的改造，在保留中世纪防御结构的基础上，融入了文艺复兴时期的建筑美学。城堡的外观增添了精致的石雕装饰，内部房间进行了华丽修缮，增设了壁画、浮雕与大型壁炉，原本冷峻的军事堡垒逐渐转变为兼具防御与居住功能的贵族宅邸。这一时期，城堡成为哈布斯堡家族分支的居所，许多贵族在此居住、办公，留下了丰富的生活痕迹与历史文物。
              </p>

              <p>
                17世纪，欧洲爆发三十年战争，格蒙登城堡作为重要的军事据点遭到战火侵袭，部分建筑受损严重。战争结束后，哈布斯堡家族对城堡进行了修复，但并未完全恢复其原有规模，部分防御设施被拆除，城堡的军事功能逐渐弱化，更多地承担起居住与礼仪功能。18世纪，城堡被转让给当地贵族，成为私人宅邸，贵族们在城堡周边修建了花园、凉亭等景观，进一步提升了城堡的美学价值。
              </p>

              <p>
                20世纪初，格蒙登城堡被奥地利政府收购，经过全面修缮后，于1920年正式对公众开放，成为展示中世纪历史与地域文化的博物馆。修缮过程中，工作人员严格遵循“修旧如旧”的原则，保留了城堡的原始建筑结构与历史痕迹，同时完善了参观设施，让游客能够更直观地感受城堡的历史底蕴。如今，格蒙登城堡不仅是奥地利重要的历史文物保护单位，也是萨尔茨卡默古特湖区最受欢迎的景点之一，每年吸引着数十万游客前来探寻其千年传奇。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                格蒙登城堡规模适中，游览路线分为精华路线和深度路线，游客可根据自身时间安排灵活选择，两条路线均能充分感受城堡的历史底蕴、建筑之美与湖区风光，适配不同游览需求，让每一位游客都能收获独特的体验。
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">精华路线（2-3小时）</h4>
                <p className="text-sm mb-4">适合时间紧张的游客，涵盖城堡核心精华</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>摆渡船登岛</strong> - 从格蒙登老城区步行至特劳恩湖畔码头，乘坐摆渡船登岛</li>
                  <li><strong>城堡防御区域</strong> - 参观城堡入口的防御区域，欣赏中世纪的石砌城墙、吊桥与防御塔楼</li>
                  <li><strong>城堡主建筑</strong> - 参观议事厅、贵族卧室与餐厅，欣赏室内壁画、浮雕、古老家具与历史文物</li>
                  <li><strong>最高塔楼</strong> - 俯瞰特劳恩湖全景与格蒙登小镇风光</li>
                  <li><strong>城堡庭院</strong> - 漫步城堡庭院，欣赏文艺复兴时期的花园景观，打卡城堡标志性拍照点</li>
                  <li><strong>返回湖畔</strong> - 乘坐摆渡船返回湖畔，结束精华游览</li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">深度路线（4-5小时）</h4>
                <p className="text-sm mb-4">适合喜欢细致游览的游客，增加更多深度体验</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>精华路线全部内容</strong> - 包含上述所有精华景点</li>
                  <li><strong>城堡博物馆</strong> - 了解城堡修建、扩建与修复过程，以及当地盐业历史与贵族文化</li>
                  <li><strong>特劳恩湖畔徒步</strong> - 全长约3公里，途经湖畔公园、古朴码头与特色民宿，欣赏湖水、绿植与山峦</li>
                  <li><strong>当地美食体验</strong> - 前往格蒙登老城区的特色餐厅，品尝奥地利传统美食，搭配当地葡萄酒或苹果酒</li>
                </ol>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">游览小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季（6-8月）是旅游旺季，建议避开10:00-15:00高峰时段，游览体验更佳</li>
                  <li>• 参观城堡内部需遵守现场规定，禁止触摸文物与壁画，部分区域禁止拍照</li>
                  <li>• 城堡内台阶较多，建议穿着舒适的步行鞋</li>
                  <li>• 摆渡船每15分钟一班，淡季可能会减少班次，建议提前确认时间</li>
                  <li>• 冬季湖面可能会有结冰，登岛需注意安全，部分户外景观可能无法参观</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                格蒙登城堡矗立在特劳恩湖中的小岛上，兼具古堡建筑的厚重与湖区风光的灵动，拥有多个绝佳拍照机位，无论是专业摄影师还是普通游客，都能拍出明信片级别的照片，以下是最推荐的6个机位，涵盖全景、特写与氛围感场景，满足不同拍照需求。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">1. 湖畔码头</h4>
                  <p className="text-sm">
                    这是拍摄城堡全景的最佳机位，以清澈的特劳恩湖为前景，城堡矗立在湖心小岛上，背景是翠绿的山峦，画面层次丰富，既能展现城堡的宏伟，又能体现湖区的灵动。建议选择晴天的上午拍摄，光线柔和，能清晰展现城堡的石砌细节与湖水的湛蓝，适合拍摄全景照或人物与城堡的合影。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">2. 城堡吊桥</h4>
                  <p className="text-sm">
                    位于城堡入口处，是拍摄城堡防御建筑的核心机位。吊桥连接着湖畔与城堡，两侧是厚重的石砌城墙与防御塔楼，行走在吊桥上，可拍摄城堡的入口全景，也可捕捉吊桥与城堡的细节特写，充满中世纪的复古氛围。建议选择阴天拍摄，光线柔和，能更好地凸显城堡的冷峻与厚重。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3. 城堡最高塔楼</h4>
                  <p className="text-sm">
                    位于城堡顶部，是俯瞰全景的绝佳机位。从这里可将特劳恩湖、格蒙登老城区、周边的山峦尽收眼底，湖水湛蓝、红瓦连片、青山环绕，风景如画。建议傍晚拍摄，夕阳西下时，阳光将城堡与湖水染成金橙色，氛围感拉满，也可拍摄日落时分的光影变化，极具美感。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">4. 城堡庭院</h4>
                  <p className="text-sm">
                    位于城堡内部，是拍摄文艺复兴建筑细节的最佳机位。庭院内有精致的石雕、古老的喷泉与翠绿的绿植，搭配城堡的尖顶与石墙，充满复古诗意。建议正午时分拍摄，阳光充足，能清晰展现建筑的石雕细节与庭院的生机，适合拍摄特写或人物打卡照。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">5. 湖畔徒步道</h4>
                  <p className="text-sm">
                    位于特劳恩湖沿岸，是拍摄城堡与湖水同框的氛围感机位。以湖边的绿植为前景，城堡矗立在湖心，湖水波光粼粼，偶尔有游船缓缓驶过，画面宁静而治愈。建议清晨拍摄，湖畔薄雾朦胧，光线柔和，能拍出极具意境的照片，也可捕捉当地人散步、垂钓的瞬间，增添画面的生活气息。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">6. 格蒙登老城区观景台</h4>
                  <p className="text-sm">
                    位于老城区的高处，是拍摄城堡与小镇同框的绝佳机位。从这里可将城堡、特劳恩湖与老城区的古朴建筑尽收眼底，红瓦屋顶与湛蓝湖水相互映衬，既有古堡的厚重，又有小镇的烟火气。建议下午拍摄，光线充足，能清晰展现画面的细节与层次，适合拍摄全景照。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">拍照小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 城堡建筑以灰色石墙为主，建议穿搭浅色系或亮色衣物，避免与背景冲突</li>
                  <li>• 拍摄湖区场景时，可携带草帽、墨镜等道具，增强氛围感</li>
                  <li>• 傍晚拍摄时，可携带三脚架，保证画面清晰</li>
                  <li>• 城堡内部分区域光线较暗，建议调整相机参数或使用手机闪光灯</li>
                  <li>• 尊重当地居民与其他游客，拍摄人物时需提前征得同意</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                格蒙登位于萨尔茨卡默古特湖区北部，周边景点丰富，涵盖湖泊、古镇、盐矿与自然景观，距离较近，交通便捷，可在游览城堡的同时，顺路游览，感受萨尔茨卡默古特地区的独特魅力，适合搭配格蒙登城堡形成一日或两日游行程。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">1. 格蒙登老城区</h4>
                  <p className="text-sm">
                    距离城堡约1公里，步行15分钟可达，是一座保留了中世纪风貌的古镇。老城区内有蜿蜒曲折的石板路、色彩鲜艳的木屋、古朴的教堂与特色小店，充满了复古氛围。游客可漫步街巷，打卡古老的市政厅、圣尼古拉斯教堂，品尝当地特色的糕点与饮品，感受小镇的烟火气，适合喜欢人文景观的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">2. 特劳恩湖</h4>
                  <p className="text-sm">
                    距离城堡仅5分钟摆渡船路程，是萨尔茨卡默古特湖区的第二大湖，湖面广阔，湖水清澈，周边群山环绕，风光旖旎。游客可在湖边漫步、骑行、野餐，夏季还能在湖边游泳、划船，湖边有许多休闲座椅与餐厅，适合亲子游玩和休闲放松，也可乘坐环湖游船，欣赏湖光山色，感受自然的宁静。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3. 哈尔施塔特镇</h4>
                  <p className="text-sm">
                    距离格蒙登约40分钟车程，是萨尔茨卡默古特湖区最著名的小镇，有“世界最美小镇”之称。小镇坐落在哈尔施塔特湖畔，依山而建，红瓦木屋错落有致，湖水湛蓝清澈，周边群山环绕，景色秀丽。游客可漫步湖畔，参观哈尔施塔特盐矿、骸骨教堂，乘坐游船游览湖泊，感受小镇的宁静与诗意，适合喜欢自然风光与人文景观的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">4. 格蒙登盐矿</h4>
                  <p className="text-sm">
                    距离小镇约20分钟车程，是萨尔茨卡默古特地区盐矿产业的重要遗迹，保留了古代盐矿的开采设施与历史文物。游客可乘坐小火车进入盐矿内部，参观盐矿的开采过程，体验盐矿滑梯，了解当地的盐矿历史与文化，适合喜欢历史与探险的游客，尤其适合亲子家庭。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">5. 阿特湖</h4>
                  <p className="text-sm">
                    距离格蒙登约30分钟车程，是萨尔茨卡默古特湖区的一座小众湖泊，湖面呈椭圆形，湖水清澈见底，周边是大片的森林与草地，充满了自然气息。游客可在湖边徒步、露营、垂钓，夏季还能进行水上运动，湖边有许多小众民宿，适合喜欢安静、追求小众体验的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">6. 圣沃尔夫冈湖</h4>
                  <p className="text-sm">
                    距离格蒙登约50分钟车程，是萨尔茨卡默古特湖区最美丽的湖泊之一，湖面呈月牙形，湖水湛蓝，周边群山环绕，景色壮丽。湖边有许多度假酒店与休闲设施，游客可乘坐游船游览湖泊，登上湖边的沙夫山，俯瞰湖泊全景，感受自然的壮美，也可在湖边漫步、野餐，享受休闲时光。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                格蒙登作为奥地利萨尔茨卡默古特湖区的重要旅游小镇，住宿选择丰富，从高端湖景酒店到经济型民宿应有尽有，游客可根据自身预算和需求选择合适的住宿，以下是详细的住宿小贴士，帮助游客更好地安排行程，提升游览体验，兼顾便利性与舒适性。
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">住宿区域推荐</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">湖畔区域（推荐）</h5>
                    <p className="text-sm">
                      首选湖畔区域，距离特劳恩湖与城堡较近，步行即可抵达码头，周边环境优美，安静舒适，推窗即可欣赏湖光山色，适合想要深度体验湖区风光的游客，清晨和傍晚可漫步在湖畔，感受自然的宁静。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">老城区</h5>
                    <p className="text-sm">
                      其次可选择老城区，距离市中心、特色小店与餐厅较近，能充分感受小镇的人文氛围与烟火气，步行可达湖畔码头，生活便利。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">火车站附近</h5>
                    <p className="text-sm">
                      如果预算有限，可选择火车站附近，交通便捷，适合需要乘坐火车前往周边景点的游客，火车站附近有许多餐厅和便利店，生活便利。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">住宿类型选择</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">高端湖景度假酒店</h5>
                    <p className="text-sm">
                      高端酒店以湖景度假酒店为主，多位于湖畔区域，距离城堡较近，通常自带观景露台、餐厅与休闲设施，房间多为湖景房，推窗即可欣赏特劳恩湖与城堡美景，早餐丰富，体验感极佳，部分酒店还提供游船租赁服务，适合追求高品质住宿的游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">中端酒店</h5>
                    <p className="text-sm">
                      中端酒店多位于老城区或湖畔附近，步行可达核心景点，房间干净整洁，部分房型可欣赏湖景或小镇风光，价格适中，性价比突出，适合大多数游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">经济型民宿或青年旅社</h5>
                    <p className="text-sm">
                      经济型住宿可选择当地的民宿或青年旅社，民宿多为家庭经营，风格温馨，设施齐全，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，青年旅社适合独自旅行或预算有限的游客。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">预订建议</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 格蒙登的旅游旺季为每年6-8月和10月，这段时间游客较多，住宿需求量大，建议提前1-2个月预订，避免出现无房或价格上涨的情况</li>
                  <li>• 淡季（11月至次年5月）游客较少，可提前1-2周预订，价格相对实惠，部分湖景酒店还会推出住宿套票，性价比更高</li>
                  <li>• 预订时可查看酒店或民宿的评价，重点关注交通便利性、卫生情况和景观效果，根据自身需求选择合适的住宿，持有奥地利旅行通票的游客，部分酒店可享受优惠，预订时可提前咨询酒店</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">注意事项</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 奥地利的住宿价格普遍较高，包含早餐的住宿性价比更高，建议优先选择含早餐的房型</li>
                  <li>• 大部分酒店和民宿不提供一次性洗漱用品，游客需自带牙刷、牙膏、拖鞋等用品</li>
                  <li>• 酒店和民宿的入住时间通常为14:00以后，退房时间为11:00以前，如需提前入住或延迟退房，需提前与酒店沟通，可能会产生额外费用</li>
                  <li>• 小镇夜间非常安静，游客需注意保持安静，避免影响他人休息</li>
                  <li>• 湖畔区域部分酒店为无烟酒店，需严格遵守酒店规定，禁止在房间内吸烟</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">紧急联系</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 欧洲统一紧急电话：112</li>
                    <li>• 奥地利警察：133</li>
                    <li>• 医疗急救：144</li>
                    <li>• 消防：122</li>
                    <li>• 奥地利旅游热线：+43 1 513 22 22</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">货币与支付</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 当地货币：欧元（EUR）</li>
                    <li>• 汇率参考：1欧元≈7.8人民币（2025年参考）</li>
                    <li>• 支付方式：现金、信用卡普遍接受，部分地方支持移动支付</li>
                    <li>• ATM机：小镇中心及火车站均有，支持银联卡取现</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">语言与沟通</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 官方语言：德语</li>
                    <li>• 旅游区英语：基本通行，酒店与景点工作人员普遍会英语</li>
                    <li>• 常用短语：Grüß Gott（你好）、Danke schön（谢谢）</li>
                    <li>• 导览服务：部分景点提供多语言导览（含英语、德语）</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">其他实用信息</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 电压：230V，插头为Type F型（欧标）</li>
                    <li>• 时区：中欧时间（CET），UTC+1</li>
                    <li>• 饮用水：自来水可直接饮用，水质优良</li>
                    <li>• 网络：大部分酒店与餐厅提供免费WiFi，部分公共场所也有免费WiFi</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}