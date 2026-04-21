import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈尔施塔特镇・Hallstatt・奥地利・哈尔施塔特 | 最佳欧洲景点',
  description: '探索哈尔施塔特镇，奥地利萨尔茨卡默古特湖区最著名的小镇，有“世界最美小镇”之称。小镇坐落在哈尔施塔特湖畔，依山而建，红瓦木屋错落有致，湖水湛蓝清澈，周边群山环绕，景色秀丽。',
}

export default function HallstattPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '哈尔施塔特', href: '/destinations/austria' },
            { label: '哈尔施塔特镇', href: '/attractions/hallstatt' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">哈尔施塔特镇・Hallstatt・奥地利・哈尔施塔特</h1>
          <p className="text-lg text-gray-600 mb-6">
            哈尔施塔特镇是奥地利萨尔茨卡默古特湖区最著名的小镇，有“世界最美小镇”之称。小镇坐落在哈尔施塔特湖畔，依山而建，红瓦木屋错落有致，湖水湛蓝清澈，周边群山环绕，景色秀丽。游客可漫步湖畔，参观哈尔施塔特盐矿、骸骨教堂，乘坐游船游览湖泊，感受小镇的宁静与诗意，适合喜欢自然风光与人文景观的游客。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              哈尔施塔特镇是奥地利萨尔茨卡默古特湖区最著名的小镇，有“世界最美小镇”之称。小镇坐落在哈尔施塔特湖畔，依山而建，红瓦木屋错落有致，湖水湛蓝清澈，周边群山环绕，景色秀丽。游客可漫步湖畔，参观哈尔施塔特盐矿、骸骨教堂，乘坐游船游览湖泊，感受小镇的宁静与诗意，适合喜欢自然风光与人文景观的游客。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="哈尔施塔特镇" />
                <InfoRow label="英文名称" value="Hallstatt" />
                <InfoRow label="国家" value="奥地利（Austria）" />
                <InfoRow label="城市" value="哈尔施塔特（Hallstatt）" />
                <InfoRow label="所属区域" value="奥地利萨尔茨卡默古特湖区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="地理位置" value="哈尔施塔特湖畔，依山而建" />
                <InfoRow label="特色" value="世界最美小镇，红瓦木屋，湖光山色" />
                <InfoRow label="主要景点" value="哈尔施塔特盐矿、骸骨教堂" />
                <InfoRow label="文化地位" value="世界文化遗产" />
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">开放时间</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">小镇本身：</span>全年全天开放，无闭园时间</p>
                <p><span className="font-medium">哈尔施塔特盐矿：</span>4月至10月9:30-16:30，11月至次年3月10:00-15:00（具体以官网为准）</p>
                <p><span className="font-medium">骸骨教堂：</span>5月至10月10:00-18:00，11月至次年4月11:00-16:00</p>
                <p><span className="font-medium">游船：</span>4月至10月9:00-18:00（每小时一班），冬季暂停运营</p>
                <p><span className="font-medium">法定节假日：</span>正常开放，具体以现场公告为准</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">门票信息</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">哈尔施塔特盐矿</h4>
                  <ul className="space-y-1">
                    <li>• 成人：34欧元</li>
                    <li>• 6-15岁儿童：17欧元</li>
                    <li>• 家庭票（2大1小）：75欧元</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">骸骨教堂</h4>
                  <ul className="space-y-1">
                    <li>• 成人：1.5欧元</li>
                    <li>• 儿童：免费</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                <p><span className="font-medium">游船：</span>成人10欧元（往返），儿童5欧元</p>
                <p><span className="font-medium">哈尔施塔特卡：</span>可享受盐矿、游船等景点优惠</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">地址与交通</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-medium">地址：</span>Hallstatt, 4830 Upper Austria, Austria</p>
                <p><span className="font-medium">位置：</span>萨尔茨卡默古特湖区，哈尔施塔特湖畔</p>
                <p><span className="font-medium">公共交通：</span>从萨尔茨堡乘巴士150路至巴德伊舍，换乘巴士542路至哈尔施塔特Lahn站，步行10分钟；或从维也纳乘火车至阿滕南普赫海姆，换乘火车至哈尔施塔特火车站，再乘摆渡船过湖</p>
                <p><span className="font-medium">自驾：</span>沿A1高速公路，小镇外有收费停车场（P1、P2、P3），小镇内禁止车辆通行</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                哈尔施塔特镇的历史可追溯至公元前2000年，因其丰富的盐矿资源而闻名于世。早在青铜器时代，这里就有人类居住并开采盐矿，形成了独特的“哈尔施塔特文化”，是欧洲铁器时代早期文化的代表。1734年，一位矿工在盐矿中发现了保存完好的史前人类遗骸，被称为“盐中人”，为研究史前人类生活提供了宝贵资料。
              </p>
              
              <p>
                中世纪时期，哈尔施塔特作为重要的盐矿产地，盐业贸易为其带来了巨大的财富。小镇依山傍水而建，房屋错落有致，形成了独特的建筑风格。由于地理位置特殊，小镇居民的墓地空间有限，因此形成了独特的“骸骨教堂”（Bone House）文化，逝者的骸骨在埋葬10-15年后会被取出，经过清洁和彩绘后，存放在教堂内，以节省墓地空间，并表达对逝者的敬意。
              </p>

              <p>
                19世纪，随着旅游业的兴起，哈尔施塔特镇逐渐成为欧洲著名的旅游目的地。奥地利皇帝弗朗茨·约瑟夫一世曾多次到访此地，赞叹其美景。许多艺术家、作家也纷纷前来采风，留下了大量描绘小镇风光的画作和文学作品。1890年，小镇修建了第一条通往外界的公路，结束了其长期与世隔绝的状态。
              </p>

              <p>
                20世纪以来，哈尔施塔特镇的盐矿开采逐渐减少，旅游业成为小镇的主要经济支柱。当地政府对小镇的建筑和自然环境进行了严格保护，以保持其原始风貌。1997年，哈尔施塔特-达赫斯坦文化景观被联合国教科文组织列为世界文化遗产，进一步提升了其国际知名度。
              </p>

              <p>
                如今，哈尔施塔特镇每年吸引着数百万游客前来参观，它不仅是奥地利最美丽的湖畔小镇，更是欧洲历史与自然完美结合的典范。小镇的每一个角落都充满了故事，每一处风景都如诗如画，让游客在欣赏美景的同时，也能感受到深厚的历史文化底蕴。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                哈尔施塔特镇规模不大，游览路线分为精华路线和深度路线，游客可根据自身时间安排灵活选择，两条路线均能充分感受小镇的湖光山色、历史文化与独特风情，适配不同游览需求，让每一位游客都能收获独特的体验。
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">精华路线（2-3小时）</h4>
                <p className="text-sm mb-4">适合时间紧张的游客，涵盖小镇核心精华</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>小镇中心广场</strong> - 漫步小镇中心广场，欣赏色彩鲜艳的木屋与古朴的教堂</li>
                  <li><strong>湖畔步道</strong> - 沿哈尔施塔特湖畔步道漫步，欣赏湖光山色与小镇全景</li>
                  <li><strong>明信片角度</strong> - 前往小镇标志性明信片角度，拍摄经典全景照</li>
                  <li><strong>骸骨教堂</strong> - 参观独特的骸骨教堂，了解当地丧葬文化</li>
                  <li><strong>纪念品商店</strong> - 挑选当地特色手工艺品、盐制品等</li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">深度路线（4-5小时）</h4>
                <p className="text-sm mb-4">适合喜欢细致游览的游客，增加更多深度体验</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>精华路线全部内容</strong> - 包含上述所有精华景点</li>
                  <li><strong>哈尔施塔特盐矿</strong> - 乘坐缆车或徒步上山，参观世界最古老的盐矿，体验矿工滑梯</li>
                  <li><strong>天空步道</strong> - 在盐矿附近的天空步道俯瞰哈尔施塔特湖与小镇全景</li>
                  <li><strong>湖上游船</strong> - 乘坐游船游览哈尔施塔特湖，从水上欣赏小镇风光</li>
                  <li><strong>当地美食体验</strong> - 品尝湖区特色烤鱼、奥地利传统糕点等</li>
                </ol>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">游览小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季（6-8月）是旅游旺季，游客较多，建议避开10:00-15:00高峰时段</li>
                  <li>• 小镇内禁止车辆通行，需将车停在小镇外停车场</li>
                  <li>• 盐矿内部温度较低，建议携带外套</li>
                  <li>• 骸骨教堂内部禁止拍照，请尊重当地习俗</li>
                  <li>• 小镇街巷多为石板路，建议穿着舒适的步行鞋</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                哈尔施塔特镇拥有“世界最美小镇”之称，其湖光山色与独特的建筑风格提供了无数绝佳拍照机位。无论是专业摄影师还是普通游客，都能在这里拍出明信片级别的照片，以下是最推荐的6个机位，涵盖全景、特写与氛围感场景，满足不同拍照需求。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">1. 明信片角度（Postcard Viewpoint）</h4>
                  <p className="text-sm">
                    这是哈尔施塔特最经典的拍照机位，位于小镇北侧的湖畔步道上。以小镇的标志性尖顶教堂、错落有致的木屋和湛蓝的哈尔施塔特湖为前景，背靠翠绿的山峦，构成了一幅完美的画面。建议选择清晨或傍晚拍摄，光线柔和，能拍出小镇宁静而梦幻的氛围。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">2. 小镇中心广场（Marktplatz）</h4>
                  <p className="text-sm">
                    广场周边是色彩鲜艳的木屋、古老的喷泉和圣母升天教堂，充满了中世纪的浪漫气息。在这里可以拍摄小镇的建筑细节、街头艺人或当地居民的生活场景，捕捉小镇的烟火气。建议选择正午时分拍摄，阳光充足，能清晰展现建筑的色彩与细节。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3. 湖上游船</h4>
                  <p className="text-sm">
                    乘坐游船游览哈尔施塔特湖，可以从水上视角拍摄小镇全景。游船会缓缓驶过小镇，从不同角度欣赏依山傍水的建筑群，湖水清澈见底，倒映着小镇的影子，画面宁静而优美。建议选择晴天拍摄，湖水湛蓝，光线充足，能拍出通透的画面。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">4. 天空步道（Skywalk Hallstatt）</h4>
                  <p className="text-sm">
                    位于盐矿附近的山顶，是一个悬挑在山崖边的观景平台。从这里可以俯瞰哈尔施塔特湖与小镇的全景，视野开阔，气势磅礴。建议选择天气晴朗的日子前往，能见度高，可以拍摄到壮丽的湖光山色。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">5. 盐矿入口处</h4>
                  <p className="text-sm">
                    盐矿入口处保留了古老的矿工小屋和缆车，充满了历史感。在这里可以拍摄盐矿的工业遗迹与周围的自然风光相结合的画面，展现小镇的另一面。建议选择下午拍摄，阳光斜射，能营造出独特的历史氛围。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">6. 湖畔步道南侧</h4>
                  <p className="text-sm">
                    小镇南侧的湖畔步道相对人少，可以拍摄到小镇与湖水更为宁静的画面。这里有许多小码头和停靠的船只，可以作为前景，增加画面的层次感。建议选择清晨或傍晚，光线柔和，适合拍摄小镇的剪影或倒影。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">拍照小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 小镇建筑色彩丰富，建议穿搭浅色系或亮色衣物，避免与背景冲突</li>
                  <li>• 拍摄湖区场景时，可携带草帽、墨镜等道具，增强氛围感</li>
                  <li>• 傍晚拍摄时，可携带三脚架，保证画面清晰</li>
                  <li>• 盐矿内部光线较暗，建议调整相机参数或使用手机闪光灯</li>
                  <li>• 尊重当地居民与其他游客，拍摄人物时需提前征得同意</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                哈尔施塔特镇位于萨尔茨卡默古特湖区中心，周边景点丰富，涵盖湖泊、古镇、冰洞与自然景观，距离较近，交通便捷，可在游览小镇的同时，顺路游览，感受萨尔茨卡默古特地区的独特魅力，适合搭配哈尔施塔特形成一日或两日游行程。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">1. 达赫斯坦冰洞（Dachstein Ice Cave）</h4>
                  <p className="text-sm">
                    距离哈尔施塔特约20分钟车程，是欧洲最大的冰洞之一。洞内有壮观的冰瀑、冰柱和冰雕，常年保持零度以下，景色奇幻。游客可乘坐缆车上山，然后徒步进入冰洞参观，感受大自然的鬼斧神工。适合喜欢探险和自然奇观的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">2. 五指山观景台（Five Fingers Viewing Platform）</h4>
                  <p className="text-sm">
                    位于达赫斯坦冰洞附近，是一个悬挑在山崖边的观景平台，因其五个形状各异的“手指”而得名。从这里可以俯瞰哈尔施塔特湖、达赫斯坦山脉和萨尔茨卡默古特湖区的壮丽全景，视野极佳。适合喜欢高空观景和摄影的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3. 巴德伊舍（Bad Ischl）</h4>
                  <p className="text-sm">
                    距离哈尔施塔特约30分钟车程，是奥地利著名的皇家温泉小镇，曾是哈布斯堡皇室的避暑胜地。小镇内有皇帝别墅、皇家糕点店和温泉浴场，充满了皇室的优雅与温泉的疗愈。适合喜欢历史文化和温泉养生的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">4. 戈绍湖（Gosauseen）</h4>
                  <p className="text-sm">
                    距离哈尔施塔特约40分钟车程，由三个高山湖泊组成，湖水清澈碧绿，倒映着达赫斯坦山脉的雄姿，景色宁静而优美。游客可在湖边徒步、划船或野餐，感受高山湖泊的纯净与自然。适合喜欢户外活动和自然风光的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">5. 圣沃尔夫冈镇（St. Wolfgang）</h4>
                  <p className="text-sm">
                    距离哈尔施塔特约50分钟车程，是圣沃尔夫冈湖畔的一个美丽小镇，以其著名的朝圣教堂和白马酒店而闻名。游客可乘坐蒸汽小火车登上沙夫山，俯瞰湖区全景，或在湖边漫步，感受小镇的宁静与浪漫。适合喜欢湖畔风光和历史文化的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">6. 萨尔茨堡（Salzburg）</h4>
                  <p className="text-sm">
                    距离哈尔施塔特约1小时车程，是奥地利著名的音乐之都，莫扎特的故乡。城市内有萨尔茨堡要塞、米拉贝尔宫、莫扎特故居等众多景点，充满了艺术与历史气息。适合喜欢音乐、艺术和历史文化的游客。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                哈尔施塔特镇作为世界文化遗产，住宿选择相对有限且价格较高，建议游客提前预订。以下是详细的住宿小贴士，帮助游客更好地安排行程，提升游览体验，兼顾便利性与舒适性。
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">住宿区域推荐</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">小镇中心（推荐）</h5>
                    <p className="text-sm">
                      首选小镇中心区域，距离主要景点、餐厅和码头步行可达，清晨和傍晚可漫步在宁静的小镇，感受独特的氛围。但价格较高，且房间数量有限，需提前预订。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">上特劳恩（Obertraun）</h5>
                    <p className="text-sm">
                      距离哈尔施塔特约5分钟车程，位于哈尔施塔特湖的另一侧，有巴士和游船连接。这里住宿选择更多，价格相对实惠，且环境优美，适合预算有限或喜欢安静的游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">巴德伊舍（Bad Ischl）</h5>
                    <p className="text-sm">
                      距离哈尔施塔特约30分钟车程，是交通枢纽，住宿选择丰富，价格适中。适合以哈尔施塔特为中心，辐射周边湖区景点的游客。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">住宿类型选择</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">湖景酒店或民宿</h5>
                    <p className="text-sm">
                      哈尔施塔特镇内多为家庭经营的湖景酒店或民宿，房间数量有限，但能提供独特的湖畔住宿体验，部分房间推窗即可欣赏湖光山色。价格较高，需提前预订。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">公寓或度假屋</h5>
                    <p className="text-sm">
                      适合家庭或团体游客，通常带有厨房，可自行烹饪，体验当地生活。在上特劳恩和巴德伊舍有更多选择，价格相对实惠。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">青年旅社或经济型酒店</h5>
                    <p className="text-sm">
                      主要集中在上特劳恩和巴德伊舍，适合独自旅行或预算有限的游客。提供基本住宿设施，部分青年旅社提供公共厨房和社交空间。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">预订建议</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 哈尔施塔特的旅游旺季为每年6-8月和10月，这段时间游客较多，住宿需求量大，建议提前2-3个月预订，避免出现无房或价格上涨的情况</li>
                  <li>• 淡季（11月至次年5月）游客较少，可提前1个月预订，价格相对实惠，部分酒店还会推出优惠活动</li>
                  <li>• 预订时可查看酒店或民宿的评价，重点关注交通便利性、卫生情况和景观效果，根据自身需求选择合适的住宿</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">注意事项</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 奥地利的住宿价格普遍较高，包含早餐的住宿性价比更高，建议优先选择含早餐的房型</li>
                  <li>• 大部分酒店和民宿不提供一次性洗漱用品，游客需自带牙刷、牙膏、拖鞋等用品</li>
                  <li>• 酒店和民宿的入住时间通常为14:00以后，退房时间为11:00以前，如需提前入住或延迟退房，需提前与酒店沟通，可能会产生额外费用</li>
                  <li>• 小镇夜间非常安静，游客需注意保持安静，避免影响他人休息</li>
                  <li>• 小镇内部分区域为步行区，建议携带舒适的步行鞋，方便游览</li>
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