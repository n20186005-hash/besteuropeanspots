import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班斯卡什佳夫尼察古城・Banská Štiavnica・斯洛伐克・班斯卡什佳夫尼察 | 最佳欧洲景点',
  description: '探索班斯卡什佳夫尼察古城，斯洛伐克中部的千年矿业古城，联合国教科文组织世界文化遗产，融合哥特式、巴洛克式建筑风格的中欧矿业文化典范。',
}

export default function BanskaStiavnicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '班斯卡什佳夫尼察古城', href: '/attractions/banska-stiavnica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">班斯卡什佳夫尼察古城・Banská Štiavnica・斯洛伐克・班斯卡什佳夫尼察</h1>
          <p className="text-lg text-gray-600 mb-6">
            班斯卡什佳夫尼察是斯洛伐克中部的千年矿业古城，1993年被列入联合国教科文组织世界文化遗产名录，融合了哥特式、巴洛克式建筑风格。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              班斯卡什佳夫尼察是斯洛伐克中部的千年矿业古城，1993年被列入联合国教科文组织世界文化遗产名录，融合了哥特式、巴洛克式建筑风格，留存着中世纪矿业遗迹、古老教堂、石板街巷与山间景观。古城依山而建，街巷蜿蜒，既有矿业小镇的厚重底蕴，又有喀尔巴阡山脉的清新风光，是感受中欧中世纪矿业文化、体验山城风情的必访之地，静谧而富有特色。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="班斯卡什佳夫尼察古城" />
                <InfoRow label="英文名称" value="Banská Štiavnica Old Town" />
                <InfoRow label="全称" value="Banská Štiavnica Historical Old Town" />
                <InfoRow label="斯洛伐克语名" value="Historická stará oblasť Banskej Štiavnice" />
                <InfoRow label="国家" value="斯洛伐克（Slovakia）" />
                <InfoRow label="城市" value="班斯卡什佳夫尼察（Banská Štiavnica）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="斯洛伐克中部，班斯卡·比斯特里察州" />
                <InfoRow label="地理位置" value="喀尔巴阡山脉南麓，瓦赫河支流周边山间盆地" />
                <InfoRow label="历史地位" value="联合国教科文组织世界文化遗产（1993年）" />
                <InfoRow label="建筑风格" value="哥特式、巴洛克式融合" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">古城整体：</span>免费开放</p>
                <p><span className="font-medium">圣凯瑟琳教堂：</span>成人4欧元/人，学生2欧元/人，6岁以下儿童免费</p>
                <p><span className="font-medium">矿业博物馆：</span>成人5欧元/人，学生2.5欧元/人</p>
                <p><span className="font-medium">联票（教堂+博物馆+古城塔楼）：</span>成人10欧元/人，学生5欧元/人</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">古城整体：</span>全天开放</p>
                <p><span className="font-medium">4-5月：</span>9:00-17:00（16:30停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:30-18:30（18:00停止入园）</p>
                <p><span className="font-medium">9-10月：</span>9:00-17:00（16:30停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-16:00（15:30停止入园）</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布拉迪斯拉发机场：</span>→班斯卡什佳夫尼察（1.5小时车程，走D1高速公路）</p>
                <p><span className="font-medium">公共交通：</span>布拉迪斯拉发→班斯卡什佳夫尼察（2小时火车，9欧元/人）</p>
                <p><span className="font-medium">火车站距离：</span>火车站距古城约800米，步行10分钟</p>
                <p><span className="font-medium">城际巴士：</span>布拉迪斯拉发→班斯卡什佳夫尼察（2.5小时，11欧元/人）</p>
                <p><span className="font-medium">停车场：</span>古城周边专用停车场，收费约3欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              班斯卡什佳夫尼察的历史可追溯至公元前3世纪，其发展历程与矿业开采紧密相连，是斯洛伐克中世纪矿业文化的核心载体，见证了从古代矿业兴起、中世纪繁荣到现代保护的千年变迁，承载着深厚的矿业历史与人文内涵。这座古城地处喀尔巴阡山脉南麓，地下蕴藏着丰富的银、铜等矿产资源，早在古罗马时期，就已成为重要的矿业开采据点，是中欧地区最早的矿业小镇之一。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前3世纪，古罗马人在班斯卡什佳夫尼察地区发现银矿，开始进行大规模开采，当时的小镇已形成小型聚居区，留存有古罗马时期的采矿工具、矿道遗迹，成为古城的雏形。这一时期，古罗马的采矿技术与当地文化相互融合，为班斯卡什佳夫尼察的矿业发展奠定了基础，也让这座小镇逐渐成为中欧地区重要的矿业中转站。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，班斯卡什佳夫尼察逐渐发展成为中欧地区最繁华的矿业城市之一，随着矿业的兴起，古城内开始修建大量宗教建筑、贵族府邸与矿业设施，建筑风格以哥特式、巴洛克式为主。13世纪，班斯卡什佳夫尼察成为斯洛伐克重要的矿业中心，当时的匈牙利国王（当时斯洛伐克属匈牙利管辖）下令在古城中心修建圣凯瑟琳教堂，成为当地天主教的核心场所，也成为古城的标志性建筑。这一时期，古城的规模不断扩大，街巷布局逐步形成，采矿技术不断发展，成为欧洲矿业发展的典范，吸引了大量矿工、商人与艺术家前来，推动了当地文化、经济的繁荣。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              16世纪至18世纪，班斯卡什佳夫尼察迎来黄金发展期，作为欧洲重要的银矿开采基地，这里的银矿产量一度位居欧洲前列，带动了周边地区的贸易发展，古城内商铺林立、人流涌动，成为中欧地区的商贸重镇。这一时期，建筑师结合哥特式与巴洛克式风格，对古城内的建筑进行了大规模修缮与扩建，新增了大量巴洛克式贵族府邸、教堂与公共建筑，让古城兼具庄重与华丽的气质，同时修建了完善的采矿设施与水利工程，进一步提升了采矿效率。
            </p>
            <p className="text-gray-700 leading-relaxed">
              19世纪以来，随着银矿资源的逐渐枯竭，班斯卡什佳夫尼察的矿业发展陷入停滞，城市逐渐衰落，但古城的历史风貌得以完整保留。20世纪以来，斯洛伐克政府对班斯卡什佳夫尼察进行了多次修缮与保护，重点保护了中世纪以来的古建筑、矿业遗迹、石板街巷与人文景观，同时兼顾现代城市发展需求，实现了历史风貌与现代生活的完美融合。1993年，班斯卡什佳夫尼察被列入联合国教科文组织世界文化遗产名录，成为世界范围内矿业古城保护的典范，如今，这座古城不仅是班斯卡什佳夫尼察市的核心区域，也是斯洛伐克重要的历史文化地标，每年吸引着大量游客前来，感受其千年矿业文化与山城魅力。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"矿业文化+山城烟火"为主题，难度较低，适合各类游客，建议安排3-4小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：班斯卡什佳夫尼察古城入口</h5>
                    <p>游客咨询点旁，可领取导览手册、咨询游览路线</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：主街（Hlavná ulica）</h5>
                    <p>古城核心街巷，两侧环绕巴洛克式建筑、特色商铺与咖啡馆，感受古城烟火气息，参观约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：圣凯瑟琳教堂</h5>
                    <p>位于主街中段，古城标志性建筑，融合哥特式与巴洛克式风格，内部装饰精美，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：矿业博物馆</h5>
                    <p>距离圣凯瑟琳教堂约200米，展示矿业发展历史、采矿工具与矿道遗迹，可体验模拟采矿过程，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：古城塔楼</h5>
                    <p>距离矿业博物馆约150米，登上塔楼可俯瞰整个古城全景与喀尔巴阡山脉风光，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：石板街巷漫步</h5>
                    <p>从塔楼出发，漫步在蜿蜒的石板街巷，欣赏两侧复古民居、小众商铺与街头艺术，感受古城静谧氛围</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：山间观景台</h5>
                    <p>距离古城核心区约500米，可欣赏喀尔巴阡山脉清新风光，远眺古城建筑轮廓，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：主街</h5>
                    <p>周边有当地特色餐厅，可品尝斯洛伐克传统美食，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 参观宗教建筑时，需保持安静，禁止大声喧哗，穿着需得体</li>
                  <li>• 部分景点内部禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                  <li>• 古城内石板街巷较多，路面较滑，且依山而建略有坡度，行走时需注意安全</li>
                  <li>• 周一矿业博物馆闭馆，仅开放圣凯瑟琳教堂、古城塔楼与街巷区域</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城塔楼顶端</h4>
                  <p className="text-gray-700 text-sm">拍摄古城全景最佳机位，可完整拍摄整个班斯卡什佳夫尼察古城布局，蜿蜒石板街巷、错落巴洛克式建筑、复古屋顶轮廓，搭配远处喀尔巴阡山脉。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣凯瑟琳教堂正门台阶上</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂细节核心机位，可近距离拍摄教堂哥特式尖顶、巴洛克式装饰与精美雕塑，凸显建筑宏伟与精致。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">主街中段街巷拐角</h4>
                  <p className="text-gray-700 text-sm">拍摄复古人文氛围绝佳机位，蜿蜒石板路、两侧巴洛克式民居、木质门窗与挂在墙上的花草、当地居民日常生活场景，充满中欧山城韵味。最佳时间：午后15:00-16:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">山间观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄山城交融景观最佳机位，可拍摄班斯卡什佳夫尼察古城与喀尔巴阡山脉同框画面，古城复古建筑镶嵌在青山之中，远处山脉层峦叠嶂。最佳时间：傍晚18:00-19:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">矿业博物馆庭院内</h4>
                  <p className="text-gray-700 text-sm">拍摄矿业文化氛围绝佳机位，庭院内陈列古老采矿工具、矿道模型，搭配周边复古建筑，能凸显班斯卡什佳夫尼察矿业历史底蕴。最佳时间：上午9:30-10:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:30-11:00）和傍晚（18:00-19:00），光线柔和，光影层次丰富，且游客较少</li>
                  <li>• 建议穿着简约复古风格衣物，如米白色、卡其色、深绿色，避免过于花哨，与古城复古格调、山间自然风光形成呼应</li>
                  <li>• 拍摄建筑全景与山城风光时可使用广角镜头，展现古城布局与山脉宏伟，拍摄细节时可使用长焦镜头，突出雕塑、壁画、建筑装饰、采矿工具等细节</li>
                  <li>• 拍摄街巷人文照时，可适当捕捉当地居民生活场景，让照片更具烟火气</li>
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
                      <span className="font-medium">班斯卡什佳夫尼察矿道遗址</span>
                      <p className="text-sm text-gray-600">距离古城约1公里，步行15分钟。中世纪时期采矿遗址，保留完整矿道、采矿设施与矿工居住遗迹，可深入矿道内部体验古代采矿场景，门票约4欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">瓦赫河河畔观景带</span>
                      <p className="text-sm text-gray-600">距离古城约800米，步行12分钟。瓦赫河支流蜿蜒而过，河畔植被茂密，风光清新，可漫步河畔步道，欣赏河流风光与周边山间景色，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">班斯卡什佳夫尼察民俗博物馆</span>
                      <p className="text-sm text-gray-600">距离古城约500米，步行8分钟。位于古城周边复古民居内，展示民俗文化、传统生活方式、手工艺品与服饰，门票约2.5欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">圣米哈伊尔教堂</span>
                      <p className="text-sm text-gray-600">距离古城约600米，步行10分钟。建于14世纪，哥特式建筑代表，规模虽小但外观精致，内部装饰简洁典雅，保留着中世纪壁画与雕塑，免费开放</p>
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
                      <span className="font-medium">布拉迪斯拉发老城区</span>
                      <p className="text-sm text-gray-600">距离班斯卡什佳夫尼察约130公里，自驾或乘坐火车、巴士约1.5-2.5小时可达。斯洛伐克首都核心景点，保留大量中世纪建筑、教堂与广场</p>
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
                    <h5 className="font-medium">古城周边</h5>
                    <p>距离核心景点最近，步行即可抵达，多为复古民居改造住宿，氛围古朴典雅，可深度感受班斯卡什佳夫尼察中世纪矿业风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">山间住宿</h5>
                    <p>风景优美，可欣赏喀尔巴阡山脉风光，距离古城约500-700米，步行8-12分钟可达，适合喜欢自然风光、想享受宁静氛围游客</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区内</h5>
                    <p>住宿性价比高，价格相对实惠，距离古城约1公里，可步行或乘坐公交前往，适合预算有限游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>古城周边有很多小众民宿，多由当地传统复古民居改造，装修融合中欧山城风格与矿业元素，28-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，25-60欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>古城周边与山间有少量精品酒店，装修高端精致，部分酒店具有历史底蕴，提供早餐服务，65-120欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区内有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，20-38欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 班斯卡什佳夫尼察旅游旺季为5-9月，尤其是7-8月，游客较多，住宿紧张，建议提前1个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（2.5-4欧元/天）</li>
                  <li>• 古城内民宿多位于石板街巷深处，部分无电梯，且街巷有坡度，携带大件行李的游客可选择有行李搬运服务的住宿</li>
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
                    <li>• 上午10:00-11:30：游客较少，光线柔和，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参观宗教建筑时，需保持安静，禁止大声喧哗，穿着需得体</li>
                    <li>• 古城内石板街巷较多，路面较滑，且依山而建略有坡度，行走时需注意安全</li>
                    <li>• 部分景点内部禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                    <li>• 周一矿业博物馆闭馆，仅开放圣凯瑟琳教堂、古城塔楼与街巷区域</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上古城塔楼，俯瞰整个古城全景与喀尔巴阡山脉风光</li>
                    <li>• 参观圣凯瑟琳教堂，欣赏融合哥特式与巴洛克式的建筑艺术</li>
                    <li>• 探索矿业博物馆，了解千年矿业发展历史与采矿文化</li>
                    <li>• 漫步山间观景台，感受古城与喀尔巴阡山脉的完美融合</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：欧元，部分地方支持斯洛伐克克朗（1欧元≈21.5斯洛伐克克朗）</li>
                    <li>• 语言：斯洛伐克语，但旅游区英语基本通行</li>
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