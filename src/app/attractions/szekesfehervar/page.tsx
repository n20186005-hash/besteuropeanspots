import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡赫塔圣捷尔吉・Székesfehérvár・匈牙利・塞克什白堡 | 最佳欧洲景点',
  description: '探索锡赫塔圣捷尔吉（塞克什白堡），这座被誉为"国王之城"的历史名城，见证43位国王加冕和15位国王安葬的匈牙利王室文化中心。',
}

export default function SzekesfehervarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '锡赫塔圣捷尔吉', href: '/attractions/szekesfehervar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">锡赫塔圣捷尔吉・Székesfehérvár・匈牙利・塞克什白堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            锡赫塔圣捷尔吉（塞克什白堡）是匈牙利历史上的重要城市，10至16世纪曾为匈牙利王国首都，这里见证了43位国王的加冕和15位国王的安葬。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              锡赫塔圣捷尔吉（塞克什白堡）是匈牙利历史上的重要城市，10至16世纪曾为匈牙利王国首都，这里见证了43位国王的加冕和15位国王的安葬，留存着大量中世纪王室遗迹与宗教建筑。核心景观涵盖中世纪遗址花园、圣斯蒂芬大教堂、博里城堡等，兼具王室历史的厚重与中欧建筑的典雅，是探索匈牙利王室文化、感受中世纪风情的必访胜地，也是匈牙利向市场经济过渡的成功典范城市。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="锡赫塔圣捷尔吉（塞克什白堡）" />
                <InfoRow label="英文名称" value="Székesfehérvár" />
                <InfoRow label="德语名" value="Stuhlweißenburg" />
                <InfoRow label="拉丁语名" value="Alba Regia" />
                <InfoRow label="国家" value="匈牙利（Hungary）" />
                <InfoRow label="城市" value="塞克什白堡（Székesfehérvár）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="匈牙利中部，费耶尔州首府" />
                <InfoRow label="地理位置" value="布达佩斯西南约60公里处" />
                <InfoRow label="历史地位" value="10-16世纪匈牙利王国首都" />
                <InfoRow label="别称" value="“国王之城”、“教堂之城”" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">中世纪遗址花园：</span>免费</p>
                <p><span className="font-medium">圣斯蒂芬大教堂：</span>成人8欧元/人，学生4欧元/人，6岁以下儿童免费</p>
                <p><span className="font-medium">博里城堡：</span>成人12欧元/人，学生7欧元/人，6-15岁儿童5欧元/人</p>
                <p><span className="font-medium">国王伊什特万博物馆：</span>成人6欧元/人，学生3欧元/人</p>
                <p><span className="font-medium">黑鹰药房博物馆：</span>成人5欧元/人</p>
                <p><span className="font-medium">景点联票：</span>成人约15欧元/人（含大教堂、博物馆、药房博物馆）</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">4-5月：</span>9:00-17:00（16:00停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:30-18:00（17:30停止入园）</p>
                <p><span className="font-medium">9月：</span>9:00-17:00（16:00停止入园）</p>
                <p><span className="font-medium">10月：</span>9:30-16:30（15:30停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-15:30（14:30停止入园）</p>
                <p className="text-red-600 font-medium">注意：周一多数博物馆、教堂闭馆</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布达佩斯机场：</span>→塞克什白堡（1小时车程）</p>
                <p><span className="font-medium">公共交通：</span>布达佩斯→塞克什白堡（1小时火车，5欧元/人）</p>
                <p><span className="font-medium">巴拉顿湖：</span>→塞克什白堡（1小时车程）</p>
                <p><span className="font-medium">市内交通：</span>老城区步行游览，巴士可达博里城堡（1.5欧元/人）</p>
                <p><span className="font-medium">停车场：</span>老城区周边专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              锡赫塔圣捷尔吉（塞克什白堡）的历史源远流长，最早可追溯至公元前5世纪，历经罗马时期、阿瓦尔可汗国时期、中世纪王室时期、奥斯曼统治时期、哈布斯堡君主国时期，直至现代，承载着匈牙利千年的兴衰与变迁，是匈牙利历史文化的重要缩影，尤其在中世纪，这里作为匈牙利王国首都，见证了王室的辉煌与荣耀。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前5世纪，该地区就已有人类居住，罗马时期，这里的定居点被称为Gorsium和Herculia，是当时重要的交通节点。民族大迁徙时期后，费耶尔州成为阿瓦尔可汗国的一部分，斯拉夫人和大摩拉维亚的痕迹在这一地区也有留存，不过相关争议仍未完全平息。中世纪时期，这里的拉丁名为Alba Regalis/Alba Regia，是巴拉顿湖和韦伦采湖之间重要的交通枢纽，多条贸易路线从这里通往巴尔干、意大利、布达和维也纳，为城市的发展奠定了基础。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              972年，阿尔帕德王朝的大公Géza在Gaja溪流及其支流Sárvíz之间的四个沼泽岛上建立了匈牙利城镇，并建造了一座小型石城堡，这便是塞克什白堡的雏形。1009年，塞克什白堡首次在维斯普雷姆主教的文献中被提及，称为Alba Civitas。匈牙利国王斯蒂芬一世（伊什特万一世）授予该定居点城市权利，用木板墙围绕城镇，并建立了一所学校和一座修道院，同时主持建造了罗马式的塞克什白堡大教堂（建造时间为1003年至1038年），当时该定居点约有3500名居民，数百年来一直是王室的所在地。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              在10至16世纪作为匈牙利王国首都的这段时期，塞克什白堡迎来了辉煌的巅峰，有43位国王在此加冕（最后一位是在1526年），有15位国王在这里安葬（最后一位是在1540年），根据圣冠教义，所有匈牙利国王都有义务在此大教堂加冕，并参加大教堂周围的加冕仪式，这里也成为了匈牙利王室权力的象征，当时的皇宫华美程度可与意大利的圣马可教堂媲美。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1543年，奥斯曼帝国在长时间围攻后征服了这座城市，除了1601年塞克什白堡在劳伦斯·布林迪西领导的军队重新征服的短暂时期外，该城市在奥斯曼行政管理下保持了145年，直到1688年。奥斯曼人将城市命名为Belgrade（"白色城市"，源自塞尔维亚语Beograd），并建造了清真寺，在16至17世纪，这座城市一度呈现出穆斯林城市的风貌，大部分原住民逃离，当时这里是布丁省的一个桑贾克中心，称为"İstolni Belgrad"。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              18世纪，塞克什白堡开始再次繁荣，城市人口呈现多元化，有匈牙利人、德国人、塞尔维亚人和摩拉维亚人。1702年，Nagyboldogasszony大教堂被炸毁，这座当时匈牙利最大的大教堂和加冕圣殿遭到摧毁，此后的匈牙利国王加冕仪式改在布拉迪斯拉发举行。二战后，这座城市经历了工业化，最重要的工厂有Ikarus巴士工厂、Videoton无线电和电视工厂等，到1970年代，人口增加到10万以上。
            </p>
            <p className="text-gray-700 leading-relaxed">
              近几十年，考古学家在塞克什白堡挖掘出了中世纪的遗迹，包括罗马式大教堂和匈牙利圣斯蒂芬陵墓的遗迹，并开辟了遗址公园，让游客得以窥见当年的辉煌。社会主义政权结束后，城市经历了转型，凭借大量熟练劳动力、优越的交通连接和现有基础设施，吸引了福特、IBM、电装等众多跨国公司投资，成为匈牙利向市场经济过渡的成功案例。如今，塞克什白堡既保留着中世纪的历史韵味，又充满现代活力，是一座将历史与现代完美融合的城市。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"王室历史+中世纪建筑"为主题，以步行为主，串联核心景点，难度适中，建议安排3-4小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：塞克什白堡老城区入口</h5>
                    <p>设有游客中心，可领取导览手册、寄存行李，周边有停车场和特色商铺</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：市政厅广场</h5>
                    <p>老城区核心广场，中央有苹果雕塑地标，周边是巴洛克风格市政厅和特色建筑，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：中世纪遗址花园</h5>
                    <p>位于市政厅广场后方，圣斯蒂芬建立的中世纪教堂遗址，俗称"废墟花园"，免费开放，参观约25分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：圣斯蒂芬大教堂</h5>
                    <p>塞克什白堡标志性建筑，明亮黄白色外观，内部装饰精美，曾是匈牙利国王加冕和安葬重要场所，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：国王伊什特万博物馆</h5>
                    <p>紧邻圣斯蒂芬大教堂，展示匈牙利历史、民俗工艺品和王室相关文物，参观约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：黑鹰药房博物馆</h5>
                    <p>距离国王伊什特万博物馆步行5分钟，展示古老药房陈列，精致神秘药罐仿佛置身魔法世界，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：博里城堡</h5>
                    <p>距离老城区约3.5公里，可乘坐当地巴士或打车前往，雕塑家Jenő Bory亲手建造私人城堡，融合哥特式与苏格兰风格，参观约1小时</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：老城区街巷漫步</h5>
                    <p>从博里城堡返回老城区，漫步蜿蜒石板街巷，欣赏两侧复古民居、特色商铺和咖啡馆，购买当地手工艺品，感受当地烟火气</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：老城区入口</h5>
                    <p>从街巷步行返回入口，周边有餐厅，可品尝当地特色美食，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 老城区石板路较多，部分路段不平整，建议穿舒适的步行鞋</li>
                  <li>• 夏季气温较高，紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 参观教堂和博物馆时，需保持安静，禁止大声喧哗，部分教堂禁止拍照或需关闭闪光灯</li>
                  <li>• 博里城堡内旋转楼梯较陡，参观时注意安全</li>
                  <li>• 周一多数博物馆、教堂闭馆，前往前需提前确认开放情况</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">市政厅广场苹果雕塑旁</h4>
                  <p className="text-gray-700 text-sm">拍摄老城区全景核心机位，可拍摄市政厅广场全貌，巴洛克风格市政厅、蜿蜒石板街巷与周边复古建筑相互映衬。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣斯蒂芬大教堂前广场</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂全景最佳机位，可完整拍摄圣斯蒂芬大教堂正面轮廓，黄白色墙体、精致雕塑与高耸尖顶清晰可见。最佳时间：上午11:00-12:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">博里城堡旋转楼梯</h4>
                  <p className="text-gray-700 text-sm">拍摄复古氛围感大片绝佳机位，城堡内复古花纹旋转楼梯设计独特，光影交错，充满欧式浪漫气息。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">博里城堡顶层露台</h4>
                  <p className="text-gray-700 text-sm">拍摄塞克什白堡全景最佳机位，登顶城堡露台，可360度俯瞰整个小镇风光，复古民居、蜿蜒街巷、远处山峦相互映衬。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">中世纪遗址花园</h4>
                  <p className="text-gray-700 text-sm">拍摄历史氛围感照片核心机位，遗址花园内残垣断壁、斑驳石块，能还原中世纪历史沧桑感。最佳时间：上午9:30-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城区石板街巷</h4>
                  <p className="text-gray-700 text-sm">拍摄人文烟火气照片绝佳机位，蜿蜒石板街巷、两侧复古民居、特色商铺与咖啡馆，充满欧式小镇烟火气。最佳时间：午后15:00-16:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:00-11:00）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少</li>
                  <li>• 建议穿着简约复古风格衣物，如米白色、卡其色、黑色，避免过于花哨，与欧式建筑形成呼应</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，展现建筑宏伟与布局，拍摄细节时可使用长焦镜头，突出雕塑、壁画等细节</li>
                  <li>• 参观教堂和博物馆时，需遵守相关规定，禁止拍照的区域切勿拍摄</li>
                  <li>• 拍摄博里城堡时，可多角度拍摄，捕捉城堡的独特布局与复古韵味</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">步行可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">圣安娜小堂</span>
                      <p className="text-sm text-gray-600">距离老城区约1公里，步行15分钟。建于1470年左右，哥特式建筑代表，外观精致，内部保留中世纪壁画与雕塑，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">沃罗什马蒂剧院</span>
                      <p className="text-sm text-gray-600">距离老城区约1.4公里，步行20分钟。匈牙利最古老剧院之一，建筑风格典雅，门票约8欧元/人</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途出行景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">韦伦采湖</span>
                      <p className="text-sm text-gray-600">距离塞克什白堡约15公里，自驾约20分钟。匈牙利第三大湖泊，湖水清澈，周边环绕茂密森林与湿地，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">巴拉顿湖</span>
                      <p className="text-sm text-gray-600">距离塞克什白堡约40公里，自驾约1小时。欧洲最大淡水湖，被誉为"匈牙利的海"，适合海滨度假</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">布达佩斯城堡区</span>
                      <p className="text-sm text-gray-600">距离塞克什白堡约60公里，火车约1小时。布达佩斯标志性景点，保留大量中世纪城堡与宗教建筑</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">住宿位置选择</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">老城区内</h5>
                    <p>距离核心景点最近，步行即可抵达，多为复古民居改造住宿，氛围古朴典雅，可深度感受中世纪风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区周边</h5>
                    <p>住宿性价比高，价格相对实惠，距离老城区约2-3公里，可乘坐公交或打车前往，适合预算有限游客</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">韦伦采湖附近</h5>
                    <p>风景优美，可欣赏湖景，适合喜欢自然风光、想享受宁静氛围游客，距离老城区约15公里，自驾出行更便捷</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>老城区内有很多小众民宿，多由当地传统复古民居改造，装修融合中欧风格与王室元素，35-80欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，30-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>老城区与市区周边有多家精品酒店，装修高端精致，部分酒店具有历史底蕴，提供早餐服务，80-140欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区周边有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，25-45欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 塞克什白堡旅游旺季为5-9月，尤其是7-8月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（4-7欧元/天）</li>
                  <li>• 老城区内民宿多位于石板街巷深处，部分无电梯，携带大件行李的游客可选择有行李搬运服务的住宿</li>
                  <li>• 春秋季（4-5月、9-10月）气候最宜人，游客较少，住宿价格适中，是最佳时节</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 4-5月、9-10月：气候宜人，游客较少，住宿价格适中</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，部分景点关闭</li>
                    <li>• 上午10:00-12:00：游客较少，光线柔和，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 老城区石板路较多，部分路段不平整，建议穿舒适的步行鞋</li>
                    <li>• 夏季气温较高，紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                    <li>• 参观教堂和博物馆时，需保持安静，禁止大声喧哗</li>
                    <li>• 博里城堡内旋转楼梯较陡，参观时注意安全</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 探索中世纪遗址花园，感受"废墟花园"的历史沧桑感</li>
                    <li>• 参观圣斯蒂芬大教堂，欣赏匈牙利国王加冕和安葬的重要场所</li>
                    <li>• 登顶博里城堡露台，360度俯瞰整个小镇风光</li>
                    <li>• 漫步老城区石板街巷，感受中欧建筑的典雅与历史的厚重</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：匈牙利福林（1欧元≈380匈牙利福林）</li>
                    <li>• 语言：匈牙利语，但旅游区英语基本通行</li>
                    <li>• 电压：230V，插头为Type F型</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话）</li>
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
