import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沙夫豪森莱茵瀑布・Rhine Falls・瑞士・沙夫豪森 | 最佳欧洲景点',
  description: '探索沙夫豪森莱茵瀑布，欧洲最大的瀑布，形成于1万多年前的冰川时期，宽150米，最大落差21米，夏季平均流量可达每秒700立方米，与周边的劳芬古堡、莱茵河畔小镇相映成趣。',
}

export default function RhineFallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '沙夫豪森莱茵瀑布', href: '/attractions/rhine-falls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">沙夫豪森莱茵瀑布・Rhine Falls・瑞士・沙夫豪森</h1>
          <p className="text-lg text-gray-600 mb-6">
            沙夫豪森莱茵瀑布是欧洲最大的瀑布，形成于1万多年前的冰川时期，宽150米，最大落差21米，夏季平均流量可达每秒700立方米。瀑布奔腾咆哮，浪花飞溅，水雾弥漫，与周边的劳芬古堡、莱茵河畔小镇相映成趣，既有自然的磅礴气势，又有深厚的人文底蕴，是感受自然力量与中世纪风情的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              沙夫豪森莱茵瀑布是欧洲最大的瀑布，形成于1万多年前的冰川时期，宽150米，最大落差21米，夏季平均流量可达每秒700立方米。瀑布奔腾咆哮，浪花飞溅，水雾弥漫，与周边的劳芬古堡、莱茵河畔小镇相映成趣，既有自然的磅礴气势，又有深厚的人文底蕴，是感受自然力量与中世纪风情的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="沙夫豪森莱茵瀑布" />
                <InfoRow label="英文名称" value="Rhine Falls" />
                <InfoRow label="国家" value="瑞士（Switzerland）" />
                <InfoRow label="城市" value="沙夫豪森（Schaffhausen）" />
                <InfoRow label="所属区域" value="瑞士北部沙夫豪森州，与德国交界处" />
              </div>
              <div className="space-y-4">
                <InfoRow label="瀑布规模" value="宽150米，最大落差21米，水深13米" />
                <InfoRow label="形成年代" value="1万多年前的冰川时期" />
                <InfoRow label="夏季流量" value="平均每秒700立方米" />
                <InfoRow label="地理特色" value="欧洲最大的瀑布，瑞士北部标志性景观" />
              </div>
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-4">开放时间</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">瀑布本身：</span>全年全天开放，无闭园时间</p>
                <p><span className="font-medium">4-10月旺季：</span>观景台9:00-18:00，游船9:30-17:30（每30分钟一班）</p>
                <p><span className="font-medium">11月-次年3月：</span>观景台10:00-16:00，游船暂停运营</p>
                <p><span className="font-medium">法定节假日：</span>观景台正常开放，游船时间略有调整</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-4">门票信息</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">观景台</h4>
                  <ul className="space-y-1">
                    <li>• 北岸观景台：8瑞士法郎</li>
                    <li>• 南岸观景台：6瑞士法郎</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">游船票（往返）</h4>
                  <ul className="space-y-1">
                    <li>• 成人：22瑞士法郎</li>
                    <li>• 12-16岁青少年：11瑞士法郎</li>
                    <li>• 6-11岁儿童：5.5瑞士法郎</li>
                    <li>• 5岁及以下：免费</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                <p><span className="font-medium">联票：</span>观景台+游船成人28瑞士法郎，青少年14瑞士法郎，儿童7瑞士法郎</p>
                <p><span className="font-medium">瑞士旅行通票：</span>可免费乘坐游船，观景台需另行购票</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-4">地址与交通</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-medium">地址：</span>Rhine Falls, 8212 Neuhausen am Rheinfall, Switzerland</p>
                <p><span className="font-medium">位置：</span>沙夫豪森市东部约4公里，莱茵河上游，瑞士与德国交界处</p>
                <p><span className="font-medium">公共交通：</span>从沙夫豪森火车站乘1路、6路公交至Neuhausen am Rheinfall站，步行5分钟；从苏黎世乘火车约40分钟到沙夫豪森，换乘公交</p>
                <p><span className="font-medium">自驾：</span>沿A4高速公路，瀑布周边有多个收费停车场</p>
                <p><span className="font-medium">观光巴士：</span>从沙夫豪森老城乘坐，约15分钟，沿途欣赏莱茵河畔风光</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                沙夫豪森莱茵瀑布的形成源于一万多年前的冰川时期，距今已有1.2万年的历史。两万年前，莱茵河此处尚未形成瀑布，后因冰川活动消融、地壳运动及莱茵河改道，水流冲击河床岩石，逐渐侵蚀形成了如今的瀑布景观，成为欧洲最古老的自然景观之一。在漫长的历史中，莱茵瀑布不仅是自然奇观，更与周边的人类文明紧密相连，见证了沙夫豪森地区的历史变迁。
              </p>
              
              <p>
                中世纪时期，莱茵瀑布因其独特的地理位置和磅礴气势，成为军事防御的重要据点。瀑布周边的劳芬古堡始建于1564年至1589年间，是沙夫豪森小镇的象征，当年古堡的士兵站在高耸的塔楼之上，可凭借莱茵瀑布的轰鸣声警惕外敌入侵，瀑布的天然屏障作用，让这里成为易守难攻的战略要地。每晚九点，塔楼中的哨兵会敲响梅诺钟，钟声回荡在周边，成为城门和酒馆关闭的警号，为这片土地增添了浓厚的中世纪韵味。
              </p>

              <p>
                从17世纪开始，莱茵瀑布逐渐成为文人墨客的聚集地。伟大的德国诗人歌德曾四次到访此地，被瀑布的壮美所折服，留下了“大美无言”的赞誉，用简洁的文字诠释了瀑布无需修饰的自然之美。英国浪漫主义诗人拜伦也被其魅力吸引，在《恰尔德·哈洛尔德游记》中，通过赞颂莱茵河与莱茵瀑布，抒发了对美好事物的憧憬，揭露了当时的社会罪恶。此外，英国著名画家透纳也曾创作《沙夫豪森的莱茵河瀑布》，用独特的绘画手法展现了瀑布的磅礴气势与自然光影，将这一自然奇观定格在艺术作品中。
              </p>

              <p>
                工业革命时期，莱茵瀑布成为科学家研究地质变迁和水力资源的重要对象，见证了人类对自然的探索与认知过程。19世纪以来，随着旅游业的兴起，莱茵瀑布逐渐被开发为旅游景点，周边修建了观景台、游船码头等配套设施，既保留了自然景观的原始风貌，又为游客提供了便捷的游览体验。20世纪以来，当地政府对瀑布及周边环境进行了保护性修缮，严格控制开发力度，确保这一自然瑰宝能够得以传承，让更多人感受其壮阔与魅力。
              </p>

              <p>
                如今，莱茵瀑布不仅是瑞士重要的自然旅游景点，更是沙夫豪森地区的文化符号，每年吸引数百万游客前来参观，它承载着自然的力量与历史的记忆，成为连接自然与人文、过去与现在的重要纽带。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                莱茵瀑布的游览路线分为精华路线和深度路线，游客可根据自身时间安排灵活选择，两条路线均能充分感受瀑布的磅礴气势与周边的人文风情，适配不同游览需求，让每一位游客都能收获独特的游览体验。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">精华路线（2-3小时）</h4>
                <p className="text-sm mb-4">适合时间紧张的游客，涵盖瀑布核心精华</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>北岸主观景台</strong> - 观赏瀑布全景最佳位置，感受水流奔腾震撼气势，浪花飞溅水雾扑面而来</li>
                  <li><strong>游船码头</strong> - 乘坐游船近距离观赏瀑布，沉浸式感受水流冲击力与轰鸣声，欣赏两岸田园风光与劳芬古堡剪影</li>
                  <li><strong>南岸观景台</strong> - 独特侧面视角，拍摄瀑布壮美景色，清晰看到瀑布下方岩石与水流的碰撞</li>
                  <li><strong>南岸休息区</strong> - 稍作休息，欣赏周边绿植花卉，缓解游览疲劳</li>
                  <li><strong>纪念品商店</strong> - 挑选当地特色手工艺品、明信片等，结束精华游览</li>
                </ol>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">深度路线（4-5小时）</h4>
                <p className="text-sm mb-4">适合喜欢细致游览的游客，增加更多深度体验</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>精华路线全部内容</strong> - 包含上述所有精华景点</li>
                  <li><strong>劳芬古堡参观</strong> - 距离瀑布步行10分钟，环形中世纪要塞，内部博物馆展示中世纪武器、盔甲、日常用品等文物</li>
                  <li><strong>古堡塔楼登顶</strong> - 俯瞰莱茵瀑布与周边小镇全景，感受中世纪军事要塞厚重与威严</li>
                  <li><strong>莱茵河畔徒步</strong> - 全长约3公里，欣赏莱茵河清澈流水、两岸田园村落与茂密植被，感受宁静田园气息</li>
                  <li><strong>当地美食体验</strong> - 品尝瑞士特色美食，如芝士火锅、烤香肠、黑品诺葡萄酒等，体验当地饮食文化</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">游览小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季游客较多，建议避开11:00-14:00高峰时段，游览体验更佳</li>
                  <li>• 游船行驶过程中会有浪花飞溅，建议携带雨衣或雨伞</li>
                  <li>• 观景台部分区域较为陡峭，老人和儿童需谨慎前行，部分区域设有无障碍设施</li>
                  <li>• 瀑布周边蚊虫较多，夏季游览建议携带驱蚊用品</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                沙夫豪森莱茵瀑布气势磅礴，周边景观丰富，既有壮阔的自然景色，又有古朴的中世纪古堡，拥有多个绝佳拍照机位，无论是专业摄影师还是普通游客，都能拍出明信片级别的照片，以下是最推荐的6个机位，涵盖全景、特写与氛围感场景，满足不同拍照需求。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">1. 北岸主观景台</h4>
                  <p className="text-sm">
                    这是拍摄瀑布全景的最佳机位，可将整个莱茵瀑布的壮阔全貌尽收眼底，宽150米的瀑布奔腾而下，浪花飞溅，水雾弥漫，背景是连绵的田园风光与远处的山峦，画面层次丰富，能充分展现瀑布的磅礴气势。建议选择晴天的上午拍摄，光线柔和，能清晰展现水流的清澈与水雾的朦胧，避免逆光拍摄，确保画面清晰明亮。
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">2. 游船之上</h4>
                  <p className="text-sm">
                    乘坐游船近距离拍摄瀑布，是最具氛围感的机位。游船靠近瀑布核心区域时，可拍摄到水流奔腾而下的特写，浪花撞击岩石的瞬间被定格，轰鸣声与画面相得益彰，能直观展现自然的力量。建议采用侧拍角度，捕捉水流的动态美感，同时可将游船的船头纳入画面，增强画面的纵深感，清晨或傍晚拍摄，还能捕捉到水雾折射出的彩虹，氛围感拉满。
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">3. 劳芬古堡塔楼</h4>
                  <p className="text-sm">
                    位于古堡顶端，是俯瞰瀑布与周边景色的绝佳机位。从这里可拍摄到瀑布、莱茵河、周边小镇与田园风光的全景，古堡的中世纪建筑与壮阔的瀑布相互映衬，既有自然的壮美，又有人文的厚重。建议使用广角镜头拍摄，捕捉全貌，夕阳西下时拍摄，阳光将古堡与瀑布染成金橙色，画面温暖而有质感。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">4. 南岸观景台</h4>
                  <p className="text-sm">
                    适合拍摄瀑布的侧面特写，视角独特，可清晰看到水流从高处坠落的轨迹，以及瀑布下方岩石的纹理，浪花飞溅的细节清晰可见，能展现瀑布的动态美感。建议采用仰拍角度，突出瀑布的高耸与磅礴，前景可搭配周边的绿植，增添画面的层次感，阴天拍摄时，水雾朦胧，更具意境。
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">5. 莱茵河畔徒步道</h4>
                  <p className="text-sm">
                    位于瀑布下游的徒步道上，是拍摄瀑布远景与莱茵河风光的绝佳机位。以清澈的莱茵河为前景，瀑布矗立在远处，背景是两岸的田园村落，构图简洁优美，既能展现瀑布的雄姿，又能体现莱茵河畔的宁静与惬意。建议选择上午拍摄，光线充足，能清晰展现河流的澄澈与瀑布的轮廓，适合拍摄全景或人物与瀑布的合影。
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">6. 瀑布下方岩石滩</h4>
                  <p className="text-sm">
                    需乘坐游船抵达，是近距离拍摄瀑布细节的机位。站在岩石滩上，可拍摄到水流撞击岩石的特写，浪花飞溅，水雾弥漫，能直观感受瀑布的冲击力，画面极具视觉震撼力。建议使用高速快门，捕捉浪花飞溅的瞬间，避免画面模糊，拍摄时注意安全，听从工作人员指引，切勿靠近水流湍急区域。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">拍照小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季光线较强，建议携带遮阳帽和防晒霜，避免强光直射镜头</li>
                  <li>• 拍摄水雾较多的场景时，可携带镜头布，及时擦拭镜头上的水雾</li>
                  <li>• 傍晚拍摄时，可携带三脚架，保证画面清晰</li>
                  <li>• 古堡内部分区域禁止拍照，需严格遵守现场标识</li>
                  <li>• 拍摄人物与瀑布合影时，可选择远景构图，突出瀑布的壮阔与人物的渺小，增强画面的视觉冲击力</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                沙夫豪森莱茵瀑布周边景点丰富，涵盖人文古堡、历史老城、自然景观与特色小镇，距离较近，交通便捷，可在游览瀑布的同时，顺路游览，感受沙夫豪森地区的独特魅力，丰富行程体验，适合搭配瀑布形成一日或两日游行程。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1. 劳芬古堡</h4>
                  <p className="text-sm">
                    距离莱茵瀑布步行10分钟可达，始建于16世纪，是一座环形中世纪要塞，也是沙夫豪森小镇的象征。古堡保留了完整的中世纪建筑风貌，厚重的石墙、高耸的塔楼、狭窄的楼梯，处处彰显着军事要塞的威严，内部现为博物馆，展示了中世纪的武器、盔甲、日常用品等文物，讲述了古堡与莱茵瀑布的历史关联，登上塔楼可俯瞰瀑布与周边全景，适合喜欢历史的游客。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2. 沙夫豪森老城</h4>
                  <p className="text-sm">
                    距离莱茵瀑布约10分钟车程，是瑞士保存最完整的中世纪老城之一，保留了大量16至18世纪的建筑，狭窄的石板路、色彩鲜艳的木屋、古朴的广场、精致的教堂，充满了浓厚的历史氛围。老城内有许多特色手工艺品店、葡萄酒专卖店和当地餐厅，可逛逛小店、品尝美食，感受当地的生活节奏，还能参观老城的博物馆，了解沙夫豪森地区的历史与文化。
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3. 博登湖</h4>
                  <p className="text-sm">
                    距离莱茵瀑布约30分钟车程，是欧洲第三大淡水湖，横跨瑞士、德国和奥地利三国，湖面广阔，湖水清澈，周边群山环绕，景色秀丽。游客可在湖边漫步、骑行、划船，夏季还能在湖边的沙滩上游玩、游泳，湖边有许多休闲座椅、餐厅和度假酒店，适合亲子游玩和休闲放松，也可乘坐环湖游船，欣赏三国交界的湖光山色。
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4. 哈布斯堡城堡</h4>
                  <p className="text-sm">
                    距离莱茵瀑布约40分钟车程，位于瑞士阿尔高州，是哈布斯堡家族的发源地，始建于11世纪，保留了中世纪的建筑风貌，城堡依山而建，地势险要，内部现为博物馆，展示了哈布斯堡家族的历史文物、艺术品和生活场景，登上城堡可俯瞰周边的田园风光与阿勒河景色，适合喜欢历史与古堡的游客。
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">5. 莱茵河畔小镇纽豪森</h4>
                  <p className="text-sm">
                    位于瀑布周边，是一个宁静的田园小镇，距离瀑布步行5分钟可达，小镇保留了古朴的乡村风貌，低矮的木屋、蜿蜒的小巷、茂密的绿植，充满了宁静与惬意。小镇内有许多当地的民宿和餐厅，可在此停留休息，品尝当地特色美食，感受乡村生活的悠闲，也可漫步在小镇的街巷中，拍摄田园风光与瀑布的远景。
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">6. 苏黎世葡萄酒之乡</h4>
                  <p className="text-sm">
                    距离莱茵瀑布约20分钟车程，位于苏黎世周边，是瑞士著名的葡萄酒产区，这里种植着大量的黑品诺葡萄，漫山遍野的葡萄园构成了美丽的田园画卷。游客可参观当地的葡萄酒庄园，了解葡萄酒的酿造过程，品尝正宗的黑品诺葡萄酒，还能在葡萄园中的餐厅就餐，一边欣赏田园风光，一边品尝美食与美酒，适合喜欢葡萄酒与田园风光的游客。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                沙夫豪森作为瑞士北部的重要旅游城市，住宿选择丰富，从高端度假酒店到经济型民宿应有尽有，游客可根据自身预算和需求选择合适的住宿，以下是详细的住宿小贴士，帮助游客更好地安排行程，提升游览体验，兼顾便利性与舒适性。
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">住宿区域推荐</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">瀑布周边或纽豪森小镇（推荐）</h5>
                    <p className="text-sm">
                      首选瀑布周边或纽豪森小镇，距离莱茵瀑布步行可达，方便游览瀑布及周边景点，清晨和傍晚可漫步在莱茵河畔，感受自然的宁静与壮美，周边有餐厅、便利店等配套设施，生活便利。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">沙夫豪森老城区</h5>
                    <p className="text-sm">
                      其次可选择沙夫豪森老城区，距离瀑布约10分钟车程，既能感受中世纪老城的历史氛围，又能便捷前往瀑布，老城内餐饮、购物设施齐全，适合喜欢人文景观的游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">沙夫豪森火车站附近</h5>
                    <p className="text-sm">
                      如果预算有限，可选择沙夫豪森火车站附近，交通便捷，适合需要乘坐火车前往周边景点的游客，火车站附近有许多餐厅和小店，生活便利。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">住宿类型选择</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">高端湖景度假型和古堡酒店</h5>
                    <p className="text-sm">
                      高端酒店以湖景度假型和古堡酒店为主，多位于瀑布周边或莱茵河畔，距离核心景点较近，通常自带全景餐厅、SPA、户外露台等配套设施，房间多为湖景或山景房，推窗即可欣赏莱茵河与瀑布风光，早餐丰富，体验感极佳，适合追求高品质住宿的游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">中端酒店</h5>
                    <p className="text-sm">
                      中端酒店多位于老城区或火车站附近，步行可达核心景点，房间干净整洁，部分房型可欣赏老城或河景，价格适中，性价比突出，适合大多数游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">经济型民宿或青年旅社</h5>
                    <p className="text-sm">
                      经济型住宿可选择当地的民宿或青年旅社，民宿多为家庭经营，风格温馨，设施齐全，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，青年旅社适合独自旅行或预算有限的游客。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">预订建议</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 沙夫豪森的旅游旺季为每年6-8月和10月，这段时间游客较多，住宿需求量大，建议提前1-2个月预订，避免出现无房或价格上涨的情况</li>
                  <li>• 淡季（11月至次年5月）游客较少，可提前1-2周预订，价格相对实惠，部分酒店还会推出优惠活动</li>
                  <li>• 预订时可查看酒店或民宿的评价，重点关注交通便利性、卫生情况和景观效果，根据自身需求选择合适的住宿，持有瑞士旅行通票的游客，部分酒店可享受优惠，预订时可提前咨询酒店</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-4">注意事项</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 瑞士的住宿价格普遍较高，包含早餐的住宿性价比更高，建议优先选择含早餐的房型</li>
                  <li>• 大部分酒店和民宿不提供一次性洗漱用品，游客需自带牙刷、牙膏、拖鞋等用品</li>
                  <li>• 酒店和民宿的入住时间通常为14:00以后，退房时间为11:00以前，如需提前入住或延迟退房，需提前与酒店沟通，可能会产生额外费用</li>
                  <li>• 沙夫豪森夜间非常安静，游客需注意保持安静，避免影响他人休息</li>
                  <li>• 瀑布周边及老城区部分路段为石板路，建议携带舒适的步行鞋，方便游览</li>
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
                    <li>• 瑞士警察：117</li>
                    <li>• 医疗急救：144</li>
                    <li>• 消防：118</li>
                    <li>• 瑞士旅游热线：+41 31 328 12 12</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">货币与支付</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 当地货币：瑞士法郎（CHF）</li>
                    <li>• 汇率参考：1欧元≈1.05瑞士法郎（2025年参考）</li>
                    <li>• 支付方式：现金、信用卡普遍接受，部分地方支持移动支付</li>
                    <li>• ATM机：小镇中心及火车站均有，支持银联卡取现</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">语言与沟通</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 官方语言：德语（瑞士德语方言）</li>
                    <li>• 旅游区英语：基本通行，酒店与景点工作人员普遍会英语</li>
                    <li>• 常用短语：Grüezi（你好）、Merci vilmal（非常感谢）</li>
                    <li>• 导览服务：部分景点提供多语言导览（含英语、德语）</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">其他实用信息</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 电压：230V，插头为Type J型（瑞士标准）</li>
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