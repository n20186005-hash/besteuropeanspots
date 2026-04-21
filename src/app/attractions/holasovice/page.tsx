import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍拉肖维采古罗马村落・Holašovice・捷克・霍拉肖维采 | 最佳欧洲景点',
  description: '探索霍拉肖维采古罗马村落，捷克南波西米亚地区保存完好的古罗马风格村落，联合国教科文组织世界文化遗产，以独特的南波西米亚民间巴洛克建筑和浓郁田园风情闻名。',
}

export default function HolasovicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '霍拉肖维采', href: '/destinations/czech-republic' },
            { label: '霍拉肖维采古罗马村落', href: '/attractions/holasovice' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">霍拉肖维采古罗马村落・Holašovice・捷克・霍拉肖维采</h1>
          <p className="text-lg text-gray-600 mb-6">
            霍拉肖维采古罗马村落是捷克南波西米亚地区保存完好的古罗马风格村落，联合国教科文组织世界文化遗产，以独特的南波西米亚民间巴洛克建筑和浓郁田园风情闻名。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              霍拉肖维采古罗马村落是捷克南波西米亚地区极具代表性的历史村落，始建于中世纪，完整保留了古罗马时期的村落布局与建筑风貌，融合了南波西米亚民间巴洛克建筑特色，拥有120余栋传统民居和23处农场附属建筑。村落依山傍水，周边环绕着大片田园与森林，兼具历史人文底蕴与自然田园之美，是研究中欧古罗马乡村生活、建筑艺术与民俗文化的活化石，也是休闲度假、摄影打卡的理想之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="霍拉肖维采古罗马村落" />
                <InfoRow label="英文名称" value="Holašovice" />
                <InfoRow label="捷克语名" value="Holašovice" />
                <InfoRow label="国家" value="捷克（Czech Republic）" />
                <InfoRow label="城市" value="霍拉肖维采（Holašovice）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="捷克南部南波西米亚地区" />
                <InfoRow label="地理位置" value="坐落于舒马瓦山脚下，毗邻奥地利边境" />
                <InfoRow label="历史地位" value="联合国教科文组织世界文化遗产" />
                <InfoRow label="建筑特色" value="独特的南波西米亚民间巴洛克建筑风格" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">村落整体：</span>全天免费开放</p>
                <p><span className="font-medium">民俗展馆：</span>成人30捷克克朗/人，学生15捷克克朗/人</p>
                <p><span className="font-medium">代表性民居（含导览）：</span>成人40捷克克朗/人，6岁以下儿童、65岁以上老人免费</p>
                <p><span className="font-medium">农场体验项目：</span>成人50捷克克朗/人，学生35捷克克朗/人</p>
                <p><span className="font-medium">团体优惠：</span>10人及以上可提前联系景区预约，享受10%团体优惠</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">村落整体：</span>全天免费开放</p>
                <p><span className="font-medium">核心展馆（4-5月、9-10月）：</span>9:00-17:00（16:30停止入场）</p>
                <p><span className="font-medium">核心展馆（6-8月）：</span>8:30-18:00（17:30停止入场）</p>
                <p><span className="font-medium">核心展馆（11月-次年3月）：</span>10:00-16:00（15:30停止入场）</p>
                <p><span className="font-medium">建议游览时长：</span>2-3小时</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布拉格瓦茨拉夫·哈维尔国际机场：</span>→霍拉肖维采（180公里，自驾2小时，走D3高速公路）</p>
                <p><span className="font-medium">公共交通（布拉格）：</span>布拉格中央火车站→České Budějovice火车站（2小时火车，18欧元/人）→打车25分钟到村落（200捷克克朗）</p>
                <p><span className="font-medium">奥地利萨尔茨堡出发：</span>自驾1.5小时车程，城际巴士至České Budějovice汽车站（10欧元/人，每天4-5班）</p>
                <p><span className="font-medium">市内交通：</span>村落区域以步行为主，街巷狭窄禁止机动车通行</p>
                <p><span className="font-medium">停车场：</span>村落外围停车场，收费约40-60捷克克朗/天，步行5分钟抵达村落中心</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              霍拉肖维采古罗马村落的历史可追溯至公元12世纪，其发展历程与中欧古罗马时期的乡村定居、农业发展、建筑艺术及民俗文化变迁紧密相连，是南波西米亚地区历史的重要见证者，也是中欧保存最完整的古罗马风格村落之一，承载着近千年的乡村文明与生活记忆，1998年被联合国教科文组织列入《世界文化遗产名录》，被誉为"中欧古罗马乡村的活化石"。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元12世纪，霍拉肖维采地区开始出现古罗马风格的定居点，当时的居民以农业、畜牧业为生，凭借周边肥沃的土壤与适宜的气候，逐渐形成了小规模的村落雏形。这一时期，村落的建筑以简易的石砌房屋为主，布局遵循古罗马乡村的传统格局，围绕中心广场分布，兼具居住、生产与防御功能，为后续村落的发展奠定了基础。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              13世纪至14世纪，霍拉肖维采村落迎来第一次大规模发展，随着南波西米亚地区农业与手工业的繁荣，村落逐渐扩大，居民数量增多，开始修建更具规模的民居与公共建筑。这一时期，古罗马建筑风格与当地民间建筑元素逐渐融合，石砌墙体、木质屋顶、拱形门窗成为村落建筑的主要特色，同时修建了村落中心广场、小型教堂等公共设施，形成了完整的村落格局，成为当时南波西米亚地区重要的乡村聚居地。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              15世纪至17世纪，霍拉肖维采村落进入稳定发展期，农业生产逐渐专业化，居民开始种植谷物、水果，酿造葡萄酒，形成了独特的乡村经济模式。这一时期，村落的建筑风格进一步发展，融入了巴洛克元素，形成了独特的南波西米亚民间巴洛克风格，民居的装饰更加精致，屋顶、门窗、墙面都增添了精美的雕刻与彩绘，既保留了古罗马建筑的厚重感，又兼具民间建筑的灵动性，其中部分民居至今仍保留着当时的原貌。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              18世纪至19世纪，中欧地区战乱频繁，霍拉肖维采村落因地处乡村腹地，未遭受严重的战火侵袭，得以完整保留了原有格局与建筑风貌。这一时期，村落的农业与手工业持续发展，居民的生活方式逐渐稳定，形成了独特的民俗文化，每年都会举办丰收节、葡萄酒节等民俗活动，传承当地的传统技艺与生活习俗。同时，当地居民开始注重建筑的修缮与保护，确保了古罗马风格与民间巴洛克风格的延续。
            </p>
            <p className="text-gray-700 leading-relaxed">
              20世纪以来，霍拉肖维采村落的历史价值与建筑价值逐渐被人们发现，当地政府开始加大对村落的保护与修缮力度，对受损的民居、公共建筑进行系统性修复，严格保留村落的原有格局与建筑特色，禁止过度商业化开发，让村落始终保持着古朴的乡村风貌。1998年，霍拉肖维采村落因其完整的古罗马村落格局、独特的建筑风格与深厚的民俗文化，被联合国教科文组织列入《世界文化遗产名录》，成为全球关注的历史村落。如今，霍拉肖维采村落不仅是捷克重要的历史文化地标，也是欧洲知名的乡村旅游目的地，每年吸引大量游客前来感受古罗马乡村风情、欣赏独特的建筑艺术、体验当地的民俗文化。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"村落探秘+民俗体验"为主题，难度适中，全程以步行为主，适合各类游客，建议安排2-3小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：霍拉肖维采游客咨询点</h5>
                    <p>可领取导览手册、寄存行李，咨询游览路线与民俗体验项目信息</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：村落中心广场</h5>
                    <p>村落核心区域，广场周边环绕代表性民居、民俗展馆与小型教堂，可欣赏复古雕塑、石砌喷泉与彩色民居，参观约25分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：民俗展馆</h5>
                    <p>位于中心广场北侧，展示当地历史文物、传统农具、民俗服饰与手工艺品，可了解村落发展历程与民俗文化，参观约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：代表性民居</h5>
                    <p>选取3-4栋保存最完整的古罗马风格民居，由当地居民讲解建筑特色、历史背景与传统生活方式，可走进民居内部，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：乡村教堂</h5>
                    <p>位于村落西侧，古罗马风格与巴洛克风格融合的代表建筑，内部保留中世纪壁画与雕塑，氛围庄严静谧，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：村落石板街巷</h5>
                    <p>漫步在蜿蜒的石板街巷中，欣赏沿途复古民居、庭院花卉与乡村景致，可驻足拍摄，感受村落烟火气息，游览约25分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：田园步道</h5>
                    <p>从村落东侧出发，漫步在田园步道上，欣赏周边农田、森林与溪流，可体验乡村采摘、拍照打卡，感受田园风光，游览约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：民俗体验点</h5>
                    <p>选择参与当地传统手工艺体验或美食体验，如制作传统面包、品尝自酿葡萄酒，了解传统技艺，体验约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：村落出口</h5>
                    <p>周边有民俗商店，可购买当地手工艺品、特色美食与葡萄酒，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 村落街巷多为石板路面，部分路段较为狭窄，行走时需注意安全，老人与小孩建议有人陪同</li>
                  <li>• 参观民居与展馆时，需保持安静，禁止大声喧哗，尊重当地居民的生活习惯</li>
                  <li>• 周一部分室内展馆（民俗展馆、代表性民居）闭馆，仅开放户外区域，前往前需提前确认</li>
                  <li>• 旺季（6-8月）游客较多，建议错峰前往，避免拥挤</li>
                  <li>• 体验民俗项目时，需遵守现场工作人员的指引，爱护相关设施</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">村落中心广场东侧</h4>
                  <p className="text-gray-700 text-sm">拍摄村落全景核心机位，可完整拍摄中心广场、周边古罗马民居与乡村教堂，建筑错落有致，色彩搭配古朴典雅，凸显村落完整格局与历史韵味。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">代表性民居庭院</h4>
                  <p className="text-gray-700 text-sm">拍摄建筑细节与民俗风情绝佳机位，民居石砌墙体、木质门窗、拱形门廊与庭院内花卉、传统农具相得益彰，可近距离拍摄建筑雕刻、彩绘等细节。最佳时间：上午9:30-10:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">乡村教堂周边</h4>
                  <p className="text-gray-700 text-sm">拍摄古罗马与巴洛克风格融合建筑绝佳机位，教堂石砌塔楼、拱形门窗、精美壁画与周边石板街巷、田园景致融为一体，充满历史沧桑感。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">田园步道中段</h4>
                  <p className="text-gray-700 text-sm">拍摄村落远景与田园风光绝佳机位，从步道上远眺可拍摄霍拉肖维采村落矗立在田园与森林之间全貌，村落、农田、森林与溪流相互映衬，画面宁静优美。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">村落石板街巷深处</h4>
                  <p className="text-gray-700 text-sm">拍摄人文与乡村烟火气息绝佳机位，蜿蜒石板路、斑驳墙体、复古门窗与庭院内绿植、晾晒农作物，充满生活气息，可捕捉当地居民日常生活场景。最佳时间：上午11:00-12:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">民俗体验点</h4>
                  <p className="text-gray-700 text-sm">拍摄民俗风情与互动类照片绝佳机位，可拍摄制作传统面包、酿造葡萄酒过程，也可拍摄手持特色美食、葡萄酒杯氛围感照片，记录民俗体验美好瞬间。最佳时间：午后15:00-16:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:00-11:00）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少</li>
                  <li>• 建议穿着简约复古风格衣物，如白色、卡其色、米白色，避免过于花哨，与村落古朴格调、田园风光形成呼应</li>
                  <li>• 拍摄建筑全景与田园风光时可使用广角镜头，展现村落宏伟与自然景观开阔，拍摄细节时可使用长焦镜头，突出建筑纹理、雕刻、彩绘等细节</li>
                  <li>• 参观民居与展馆时，部分室内区域禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                  <li>• 拍摄当地居民时，需提前征得对方同意，尊重当地风俗习惯</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">近距离景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">克鲁姆洛夫老城</span>
                      <p className="text-sm text-gray-600">距离村落约20公里，自驾30分钟可达。捷克最美丽中世纪老城之一，联合国教科文组织世界文化遗产，保留完整中世纪城堡、石板街巷与伏尔塔瓦河风光</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">兹林采民俗村落</span>
                      <p className="text-sm text-gray-600">距离村落约15公里，自驾20分钟可达。保存完好的南波西米亚民俗村落，建筑风格与霍拉肖维采相似，更具原生态乡村气息，可体验民俗手工艺</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">霍拉肖维采葡萄酒庄</span>
                      <p className="text-sm text-gray-600">距离村落约8公里，自驾15分钟可达。当地知名家族式酒庄，可漫步葡萄藤架、参观地下酒窖、品尝自酿葡萄酒，门票约30捷克克朗/人</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">稍远距离景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">舒马瓦国家公园</span>
                      <p className="text-sm text-gray-600">距离村落约35公里，自驾45分钟可达。捷克最大国家公园之一，地处舒马瓦山脚下，设有多条徒步步道，可体验徒步、露营、骑行等户外活动</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">České Budějovice老城</span>
                      <p className="text-sm text-gray-600">距离村落约25公里，自驾35分钟可达。南波西米亚地区重要城市，老城保留大量中世纪建筑、广场与教堂，可品尝当地知名百威啤酒</p>
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
                    <h5 className="font-medium">霍拉肖维采村落内部</h5>
                    <p>距离核心景点最近，可步行抵达中心广场、民俗展馆、代表性民居等景点，多为传统民居改造民宿，氛围古朴典雅，可深度感受古罗马乡村风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">村落外围</h5>
                    <p>距离村落约1-2公里，以经济型酒店与田园民宿为主，环境安静，性价比高，适合预算有限或喜欢宁静氛围的游客</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">周边乡村</h5>
                    <p>以田园民宿为主，距离村落约5-10公里，自驾可达，可欣赏大片田园与森林风光，适合喜欢田园生活、想远离喧嚣的游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民俗民宿</h5>
                    <p>村落内部有很多小众民宿，多由当地传统古罗马民居改造，装修融合古罗马元素与南波西米亚民间风格，保留石砌墙体、木质门窗、拱形门廊等特色，房东多为当地人，可提供地道出行建议，价格约35-75欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">田园民宿</h5>
                    <p>周边乡村的田园民宿环境清幽，部分民宿自带小型农场、葡萄园，可体验采摘、酿酒等乡村活动，价格约40-80欧元/晚，适合家庭或多人出行、喜欢田园生活的游客</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>村落外围与České Budějovice老城有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，价格约25-45欧元/晚，适合预算有限的游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 霍拉肖维采地区旅游旺季为5-9月，尤其是7-8月与9月中旬丰收节期间，游客较多，住宿紧张，建议提前1个月预订</li>
                  <li>• 预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 若自驾出行，需提前确认住宿周边的停车场位置与收费标准，村落内部禁止机动车通行，外围停车场收费约40-60捷克克朗/天</li>
                  <li>• 村落内部的民宿多位于石板街巷深处，部分无电梯，携带大件行李的游客可选择有行李搬运服务的住宿</li>
                  <li>• 春秋季（4-5月、9-10月）气候最宜人，游客较少，住宿价格适中，是前往的最佳时节</li>
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
                    <li>• 4-5月、9-10月：气候宜人，游客较少，住宿价格适中，还能避开旺季人流</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多，9月中旬可参与丰收节</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，部分乡村民宿可能临时关闭</li>
                    <li>• 上午10:00-11:30：游客较少，光线柔和，便于观赏建筑细节与拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 村落街巷多为石板路面，部分路段较为狭窄，行走时需注意安全</li>
                    <li>• 参观民居与展馆时，需保持安静，禁止大声喧哗，尊重当地居民生活习惯</li>
                    <li>• 周一部分室内展馆闭馆，仅开放户外区域，前往前需提前确认</li>
                    <li>• 体验民俗项目时，需遵守现场工作人员指引，爱护相关设施</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参观民俗展馆，了解霍拉肖维采村落发展历程与民俗文化</li>
                    <li>• 走进代表性民居，感受古罗马乡村的居住氛围与建筑特色</li>
                    <li>• 漫步田园步道，欣赏周边农田、森林与溪流，体验乡村采摘</li>
                    <li>• 参与民俗体验，制作传统面包、品尝自酿葡萄酒，了解传统技艺</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：捷克克朗，部分地方支持欧元（1欧元≈24捷克克朗）</li>
                    <li>• 语言：捷克语，但旅游区英语基本通行</li>
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