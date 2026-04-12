import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴德伊舍・Bad Ischl・奥地利・巴德伊舍 | 最佳欧洲景点',
  description: '探索巴德伊舍，奥地利萨尔茨卡默古特湖区核心小镇，曾是哈布斯堡皇室的避暑胜地，因弗朗茨·约瑟夫一世与茜茜公主的订婚故事闻名于世。',
}

export default function BadIschlPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴德伊舍', href: '/attractions/bad-ischl' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴德伊舍・Bad Ischl・奥地利・巴德伊舍</h1>
          <p className="text-lg text-gray-600 mb-6">
            巴德伊舍是奥地利萨尔茨卡默古特地区的核心小镇，以皇家历史与温泉资源为特色，曾是哈布斯堡皇室避暑行宫所在地，1853年弗朗茨·约瑟夫一世与茜茜公主在此订婚。小镇依偎特劳恩河，背靠达赫斯坦山脉，温泉滋养、古堡点缀、街巷古朴，既有皇室的优雅底蕴，又有湖区的自然诗意，是感受奥地利皇家风情与田园之美的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              巴德伊舍是奥地利萨尔茨卡默古特地区的核心小镇，以皇家历史与温泉资源为特色，曾是哈布斯堡皇室避暑行宫所在地，1853年弗朗茨·约瑟夫一世与茜茜公主在此订婚。小镇依偎特劳恩河，背靠达赫斯坦山脉，温泉滋养、古堡点缀、街巷古朴，既有皇室的优雅底蕴，又有湖区的自然诗意，是感受奥地利皇家风情与田园之美的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="巴德伊舍" />
                <InfoRow label="英文名称" value="Bad Ischl" />
                <InfoRow label="国家" value="奥地利（Austria）" />
                <InfoRow label="城市" value="巴德伊舍（Bad Ischl）" />
                <InfoRow label="所属区域" value="奥地利上奥地利州，萨尔茨卡默古特湖区中心" />
              </div>
              <div className="space-y-4">
                <InfoRow label="地理位置" value="特劳恩河畔，背靠达赫斯坦山脉" />
                <InfoRow label="历史地位" value="哈布斯堡皇室避暑胜地，弗朗茨·约瑟夫一世与茜茜公主订婚地" />
                <InfoRow label="文化地位" value="2024年欧洲文化之都核心组成部分" />
                <InfoRow label="特色" value="皇家历史、温泉养生、湖光山色" />
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">开放时间</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">小镇本身：</span>全年全天开放，无闭园时间</p>
                <p><span className="font-medium">皇帝别墅：</span>4月1日至10月31日9:00-17:00；11月1日至次年3月31日10:00-16:00（每周一闭馆）</p>
                <p><span className="font-medium">巴德伊舍温泉：</span>全年开放，9:00-22:00（周末及节假日延长至23:00）</p>
                <p><span className="font-medium">城市博物馆：</span>4月至10月9:30-17:00；11月至次年3月10:00-16:00</p>
                <p><span className="font-medium">法定节假日：</span>正常开放，具体以现场公告为准</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">门票信息</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">皇帝别墅</h4>
                  <ul className="space-y-1">
                    <li>• 成人：12欧元</li>
                    <li>• 12-18岁青少年：6欧元</li>
                    <li>• 6-11岁儿童：3欧元</li>
                    <li>• 5岁及以下：免费</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">巴德伊舍温泉</h4>
                  <ul className="space-y-1">
                    <li>• 成人：28欧元（含2小时体验）</li>
                    <li>• 青少年：20欧元</li>
                    <li>• 儿童：15欧元</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                <p><span className="font-medium">套票：</span>温泉+皇帝别墅成人36欧元</p>
                <p><span className="font-medium">城市博物馆：</span>成人8欧元，青少年4欧元，儿童免费</p>
                <p><span className="font-medium">奥地利旅行通票：</span>可享受门票8折优惠</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-4">地址与交通</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-medium">地址：</span>Bad Ischl, 4820 Upper Austria, Austria</p>
                <p><span className="font-medium">核心区域：</span>特劳恩河沿岸</p>
                <p><span className="font-medium">皇帝别墅地址：</span>Kaiservilla, 4820 Bad Ischl</p>
                <p><span className="font-medium">温泉地址：</span>Salzkammergut Therme, Voglhuberstraße 10, 4820 Bad Ischl</p>
                <p><span className="font-medium">公共交通：</span>从维也纳乘火车约2.5小时可达巴德伊舍火车站；从萨尔茨堡乘火车约1小时可达；小镇内公交1路、2路覆盖核心景点</p>
                <p><span className="font-medium">自驾：</span>沿A1高速公路，小镇周边有多个收费停车场</p>
                <p><span className="font-medium">旅游大巴：</span>从萨尔茨堡或因斯布鲁克可直达</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                巴德伊舍的历史可追溯至古罗马时期，当时这里就因丰富的温泉资源被古人发现，成为简单的疗愈场所。中世纪时期，随着萨尔茨卡默古特地区盐矿产业的兴起，巴德伊舍作为盐矿运输的重要节点，逐渐发展为小型集镇，“萨尔茨卡默古特”的本意便是“盐业商会的产业”，而巴德伊舍则是这一产业带中的重要枢纽。
              </p>
              
              <p>
                19世纪，巴德伊舍迎来历史上的黄金时期，成为哈布斯堡皇室的避暑胜地。1849年，弗朗茨·约瑟夫一世选择在此建立夏宫，1853年8月19日，他与茜茜公主在此举行订婚仪式，这段浪漫的皇室故事让巴德伊舍声名远扬。1854年，弗朗茨·约瑟夫一世的母亲索菲大公将皇帝别墅（Kaiservilla）赠予他作为结婚礼物，此后这座别墅便成为皇室夏季居所，弗朗茨·约瑟夫一世曾盛赞这里为“地球上的天堂”。
              </p>

              <p>
                这座小镇不仅见证了皇室的浪漫，更见证了历史的转折。1914年7月28日，弗朗茨·约瑟夫一世在皇帝别墅签署了对塞尔维亚王国的战争宣言，这一宣言标志着第一次世界大战的正式爆发，次日他便离开了巴德伊舍，再也没有返回这座他钟爱的避暑小镇。此外，弗朗茨·约瑟夫一世还在别墅附近为情妇凯瑟琳娜·施拉特安置了一处豪宅，两者之间通过一条隐藏的小径相连，成为小镇历史上的一段隐秘过往。
              </p>

              <p>
                19世纪以来，巴德伊舍的温泉产业逐渐兴盛，当地政府对温泉资源进行保护性开发，修建了现代化的温泉浴场，吸引了欧洲各地的贵族与游客前来疗愈度假。2024年，以巴德伊舍为代表的萨尔茨卡默古特湖区被推选为“2024年欧洲文化之都”，与爱沙尼亚的塔尔图、挪威的博多等城市一同向全球推广地方遗产，进一步提升了这座小镇的国际知名度。
              </p>

              <p>
                如今，巴德伊舍依然保留着浓厚的皇家氛围与古朴风貌，皇帝别墅、皇家糕点店、中世纪街巷等历史遗迹完好保存，温泉产业与旅游业成为小镇的核心产业，既承载着哈布斯堡皇室的历史记忆，又延续着自然与人文交融的独特魅力，每年吸引着数百万游客前来探寻。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                巴德伊舍小镇不大，游览路线分为精华路线和深度路线，游客可根据自身时间安排灵活选择，两条路线均能充分感受小镇的皇家底蕴、温泉特色与自然美景，适配不同游览需求，让每一位游客都能收获独特的体验。
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">精华路线（2-3小时）</h4>
                <p className="text-sm mb-4">适合时间紧张的游客，涵盖小镇核心精华</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>皇帝别墅</strong> - 参观别墅庭院、博物馆，感受皇室生活气息，俯瞰小镇与特劳恩河风光</li>
                  <li><strong>市中心老城区</strong> - 游览古朴街巷，打卡皇家糕点店，品尝萨赫蛋糕与热巧克力</li>
                  <li><strong>温泉浴场</strong> - 体验2小时温泉疗愈，缓解旅途疲劳</li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">深度路线（4-5小时）</h4>
                <p className="text-sm mb-4">适合喜欢细致游览的游客，增加更多深度体验</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>精华路线全部内容</strong> - 包含上述所有精华景点</li>
                  <li><strong>城市博物馆</strong> - 了解巴德伊舍盐矿历史、皇家过往与温泉文化</li>
                  <li><strong>特劳恩河畔徒步</strong> - 全长约2.5公里，欣赏河水、绿植与古朴桥梁，感受小镇宁静</li>
                  <li><strong>当地美食体验</strong> - 品尝奥地利传统美食，如维也纳炸猪排、土豆丸子、炖牛肉等</li>
                </ol>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">游览小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季（6-8月）是旅游旺季，建议避开10:00-15:00高峰时段</li>
                  <li>• 参观皇帝别墅需提前15分钟入场，内部禁止拍照</li>
                  <li>• 温泉浴场需自带泳衣、毛巾，也可现场租赁</li>
                  <li>• 小镇街巷多为石板路，建议穿着舒适的步行鞋</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                巴德伊舍兼具皇家建筑、温泉风光、河畔美景与古朴街巷，拥有多个绝佳拍照机位，无论是专业摄影师还是普通游客，都能拍出明信片级别的照片，以下是最推荐的6个机位，涵盖全景、特写与氛围感场景，满足不同拍照需求。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">1. 皇帝别墅庭院</h4>
                  <p className="text-sm">
                    这是拍摄皇家建筑与田园风光的最佳机位，别墅的新古典主义建筑风格精致典雅，庭院内种植着大片花卉与绿植，搭配远处的达赫斯坦山脉，画面层次丰富，既能展现皇室的优雅，又能体现自然的诗意。建议选择晴天的上午拍摄，光线柔和，能清晰展现建筑的细节与庭院的生机，适合拍摄全景或人物与别墅的合影。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">2. 皇帝别墅露台</h4>
                  <p className="text-sm">
                    位于别墅二楼，是俯瞰巴德伊舍小镇全景的绝佳机位。从这里可将特劳恩河、老城区的古朴街巷、远处的山峦尽收眼底，小镇的红瓦屋顶与绿色植被相互映衬，风景如画。建议傍晚拍摄，夕阳西下时，阳光将小镇染成金橙色，氛围感拉满，也可拍摄日落时分的光影变化，极具美感。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3. 特劳恩河畔步道</h4>
                  <p className="text-sm">
                    位于特劳恩河沿岸，是拍摄河畔风光与小镇人文的绝佳机位。以清澈的河水为前景，远处是小镇的建筑与桥梁，偶尔有游船缓缓驶过，画面宁静而治愈。建议选择清晨拍摄，河畔薄雾朦胧，光线柔和，能拍出极具意境的照片，也可捕捉当地人散步、垂钓的瞬间，增添画面的生活气息。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">4. 老城区广场</h4>
                  <p className="text-sm">
                    位于小镇中心，是拍摄古朴街巷与人文风情的核心机位。广场周边是色彩鲜艳的木屋、古朴的教堂与特色小店，石板路蜿蜒曲折，充满了中世纪的韵味。建议正午时分拍摄，阳光充足，能清晰展现建筑的色彩与细节，可拍摄街巷的纵深感，也可与当地的街头艺人、小店招牌合影，记录小镇的烟火气。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">5. 温泉酒店露台</h4>
                  <p className="text-sm">
                    以巴德伊舍温泉酒店的露台为机位，可拍摄温泉泳池与小镇风光的结合。泳池的蓝色水面与远处的山峦、小镇建筑相互映衬，兼具休闲与诗意，适合拍摄氛围感照片。建议午后拍摄，阳光洒在水面上，波光粼粼，可拍摄人物泳池打卡照，也可拍摄温泉与小镇的全景，展现温泉小镇的独特魅力。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">6. 周边湖景远眺点</h4>
                  <p className="text-sm">
                    从巴德伊舍小镇驱车15分钟可达湖边远眺点，这里可拍摄萨尔茨卡默古特湖区的湖光山色，湖水清澈湛蓝，周边群山环绕，远处的小镇点缀其间，画面壮阔而优美。建议晴天拍摄，光线充足，能清晰展现湖水的湛蓝与山峦的翠绿，适合拍摄全景，也可搭配人物剪影，增强画面的层次感。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">拍照小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 小镇建筑色彩丰富，建议穿搭浅色系衣物，避免与背景冲突</li>
                  <li>• 拍摄温泉场景时，可携带草帽、墨镜等道具，增强氛围感</li>
                  <li>• 傍晚拍摄时，可携带三脚架，保证画面清晰</li>
                  <li>• 老城区部分街巷较窄，建议使用广角镜头拍摄，捕捉街巷的纵深感</li>
                  <li>• 尊重当地居民，拍摄人物时需提前征得同意</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                巴德伊舍位于萨尔茨卡默古特湖区中心，周边景点丰富，涵盖湖泊、古堡、盐矿与特色小镇，距离较近，交通便捷，可在游览小镇的同时，顺路游览，感受萨尔茨卡默古特地区的独特魅力，适合搭配巴德伊舍形成一日或两日游行程。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">1. 哈尔施塔特镇</h4>
                  <p className="text-sm">
                    距离巴德伊舍约30分钟车程，是萨尔茨卡默古特湖区最著名的小镇，有“世界最美小镇”之称。小镇坐落在哈尔施塔特湖畔，依山而建，红瓦木屋错落有致，湖水湛蓝清澈，周边群山环绕，景色秀丽。游客可漫步湖畔，参观哈尔施塔特盐矿、骸骨教堂，乘坐游船游览湖泊，感受小镇的宁静与诗意，适合喜欢自然风光与人文景观的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">2. 特劳恩湖</h4>
                  <p className="text-sm">
                    距离巴德伊舍约20分钟车程，是萨尔茨卡默古特湖区的第二大湖，湖面广阔，湖水清澈，周边群山环绕，风光旖旎。游客可在湖边漫步、骑行、野餐，夏季还能在湖边游泳、划船，湖边有许多休闲座椅与餐厅，适合亲子游玩和休闲放松，也可乘坐环湖游船，欣赏湖光山色，感受自然的宁静。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">3. 戈绍小镇</h4>
                  <p className="text-sm">
                    距离巴德伊舍约40分钟车程，是一座宁静的田园小镇，保留了古朴的乡村风貌，周边是大片的农田与山峦，充满了田园气息。小镇内有许多特色民宿与餐厅，可在此停留休息，品尝当地特色美食，感受乡村生活的悠闲，也可前往戈绍湖，欣赏湖泊与山峦的美景，适合喜欢田园风光的游客。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">4. 巴德伊舍盐矿</h4>
                  <p className="text-sm">
                    距离小镇约15分钟车程，是萨尔茨卡默古特地区盐矿产业的重要遗迹，保留了古代盐矿的开采设施与历史文物。游客可乘坐小火车进入盐矿内部，参观盐矿的开采过程，体验盐矿滑梯，了解当地的盐矿历史与文化，适合喜欢历史与探险的游客，尤其适合亲子家庭。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">5. 圣沃尔夫冈湖</h4>
                  <p className="text-sm">
                    距离巴德伊舍约50分钟车程，是萨尔茨卡默古特湖区最美丽的湖泊之一，湖面呈月牙形，湖水湛蓝，周边群山环绕，景色壮丽。湖边有许多度假酒店与休闲设施，游客可乘坐游船游览湖泊，登上湖边的沙夫山，俯瞰湖泊全景，感受自然的壮美，也可在湖边漫步、野餐，享受休闲时光。
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">6. 皇帝狩猎行宫</h4>
                  <p className="text-sm">
                    距离巴德伊舍约10分钟车程，是弗朗茨·约瑟夫一世当年的狩猎场所，保留了中世纪的建筑风貌，内部现为博物馆，展示了狩猎相关的文物、武器与艺术品。行宫周边是茂密的森林，可在此漫步，感受皇室狩猎的氛围，也可登上行宫露台，欣赏周边的自然风光，适合喜欢历史与户外的游客。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                巴德伊舍作为奥地利著名的温泉度假小镇，住宿选择丰富，从高端温泉酒店到经济型民宿应有尽有，游客可根据自身预算和需求选择合适的住宿，以下是详细的住宿小贴士，帮助游客更好地安排行程，提升游览体验，兼顾便利性与舒适性。
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-4">住宿区域推荐</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">温泉区（推荐）</h5>
                    <p className="text-sm">
                      首选温泉区，距离温泉浴场与皇帝别墅较近，步行即可抵达，周边环境优美，安静舒适，适合想要深度体验温泉疗愈的游客，清晨和傍晚可漫步在特劳恩河畔，感受自然的宁静。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">老城区</h5>
                    <p className="text-sm">
                      其次可选择老城区，距离市中心、特色小店与餐厅较近，能充分感受小镇的人文氛围与烟火气，步行可达核心景点，生活便利。
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
                    <h5 className="font-medium text-red-800 mb-2">高端温泉度假酒店</h5>
                    <p className="text-sm">
                      高端酒店以温泉度假酒店为主，多位于温泉区或河畔，距离核心景点较近，通常自带温泉泳池、SPA、全景餐厅等配套设施，房间多为河景或山景房，推窗即可欣赏美景，早餐丰富，体验感极佳，部分酒店还提供温泉套票，适合追求高品质住宿的游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">中端酒店</h5>
                    <p className="text-sm">
                      中端酒店多位于老城区或火车站附近，步行可达核心景点，房间干净整洁，部分房型可欣赏小镇风光，价格适中，性价比突出，适合大多数游客。
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
                  <li>• 巴德伊舍的旅游旺季为每年6-8月和10月，这段时间游客较多，住宿需求量大，建议提前1-2个月预订，避免出现无房或价格上涨的情况</li>
                  <li>• 淡季（11月至次年5月）游客较少，可提前1-2周预订，价格相对实惠，部分温泉酒店还会推出温泉住宿套票，性价比更高</li>
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
                  <li>• 温泉区酒店多为无烟酒店，需严格遵守酒店规定，禁止在房间内吸烟</li>
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