import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦茨大教堂・Vác Cathedral・匈牙利・瓦茨 | 最佳欧洲景点',
  description: '探索瓦茨大教堂，匈牙利北部重要的天主教大教堂，融合哥特式、巴洛克式与新古典主义多种建筑风格的历史文化地标。',
}

export default function VacCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '瓦茨大教堂', href: '/attractions/vac-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">瓦茨大教堂・Vác Cathedral・匈牙利・瓦茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            瓦茨大教堂是匈牙利北部重要的天主教大教堂，也是瓦茨市的精神象征与标志性建筑，融合哥特式、巴洛克式与新古典主义多种建筑风格。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              瓦茨大教堂是匈牙利北部重要的天主教大教堂，也是瓦茨市的精神象征与标志性建筑，融合哥特式、巴洛克式与新古典主义多种建筑风格，外观典雅庄重，内部装饰精美，留存着大量中世纪壁画、雕塑与宗教文物。教堂坐落于瓦茨老城区中心，紧邻多瑙河畔，既是当地宗教朝圣的核心场所，也是欣赏中欧宗教建筑艺术、感受瓦茨历史文化的必访景点，低调而富有底蕴。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="瓦茨大教堂" />
                <InfoRow label="英文名称" value="Vác Cathedral" />
                <InfoRow label="全称" value="Cathedral of the Assumption of the Blessed Virgin Mary in Vác" />
                <InfoRow label="匈牙利语名" value="Váci Főszékesegyház" />
                <InfoRow label="国家" value="匈牙利（Hungary）" />
                <InfoRow label="城市" value="瓦茨（Vác）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="匈牙利北部，佩斯州下辖城市" />
                <InfoRow label="地理位置" value="多瑙河中游左岸，紧邻首都布达佩斯" />
                <InfoRow label="距离布达佩斯" value="约30公里" />
                <InfoRow label="建筑风格" value="哥特式、巴洛克式与新古典主义融合" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">公共区域（教堂前广场、外部庭院）：</span>免费</p>
                <p><span className="font-medium">教堂主体（含主祭坛、壁画展区）：</span>成人6欧元/人，学生3欧元/人，6岁以下儿童免费</p>
                <p><span className="font-medium">教堂珍宝馆（含宗教文物、雕塑珍品）：</span>成人4欧元/人，学生2欧元/人</p>
                <p><span className="font-medium">联票（教堂主体+珍宝馆）：</span>成人9欧元/人，学生4.5欧元/人</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">4-5月：</span>9:00-16:30（16:00停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:30-17:30（17:00停止入园）</p>
                <p><span className="font-medium">9-10月：</span>9:00-16:30（16:00停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-16:00（15:30停止入园）</p>
                <p className="text-red-600 font-medium">注意：每周一闭馆（节假日除外）</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布达佩斯机场：</span>→瓦茨（40分钟车程，走M3高速公路）</p>
                <p><span className="font-medium">公共交通：</span>布达佩斯Keleti火车站→瓦茨火车站（30分钟火车，3欧元/人）</p>
                <p><span className="font-medium">火车站距离：</span>火车站距教堂约800米，步行10分钟</p>
                <p><span className="font-medium">城际巴士：</span>布达佩斯Népliget汽车站→瓦茨（40分钟，2.5欧元/人）</p>
                <p><span className="font-medium">停车场：</span>教堂周边专用停车场，收费约3欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              瓦茨大教堂的历史可追溯至千年之前，其发展历程与瓦茨市的兴衰、匈牙利的宗教变迁紧密相连，是匈牙利北部宗教文化传承的重要载体，见证了当地从早期基督教传播到现代宗教文化发展的全过程，承载着深厚的历史与精神内涵。瓦茨作为匈牙利北部的宗教重镇，早在9世纪就已有基督教传入，成为匈牙利早期基督教传播的重要据点之一。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              11世纪，瓦茨成为匈牙利重要的宗教中心，当时的匈牙利国王伊什特万一世（圣伊什特万）下令在瓦茨建造第一座基督教教堂，作为当地天主教的核心场所，最初为罗马式风格，规模较小，主要用于宗教祈祷与仪式，成为瓦茨大教堂的雏形。这座早期教堂见证了瓦茨地区基督教的兴起与发展，也成为当地居民精神信仰的寄托。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，瓦茨大教堂历经多次改建与扩建，随着宗教影响力的提升，教堂规模不断扩大，建筑风格也逐步从罗马式向哥特式转变，新增了高耸的尖塔、精美的雕塑与彩绘玻璃，成为当时匈牙利北部最华丽的教堂之一。但在16世纪奥斯曼帝国入侵匈牙利期间，瓦茨被奥斯曼军队占领，大教堂遭到严重破坏，尖塔损毁、内部装饰被掠夺，宗教活动一度中断，教堂沦为奥斯曼军队的驻扎地，昔日的辉煌逐渐衰落。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              17世纪末，匈牙利摆脱奥斯曼帝国的统治，瓦茨大教堂进入重建阶段，当时的建筑师结合哥特式与巴洛克式风格，对教堂进行了全面修复与扩建，耗时数十年，逐步恢复了教堂的原貌，同时新增了巴洛克式的装饰细节，让教堂兼具庄重与华丽。18世纪中期，教堂再次进行修缮，融入新古典主义元素，优化了建筑的整体布局，完善了内部的壁画与雕塑装饰，形成了如今我们看到的多元风格融合的模样。
            </p>
            <p className="text-gray-700 leading-relaxed">
              19世纪至20世纪，瓦茨大教堂历经多次小规模修缮，尤其是20世纪中期的全面修复，重点保护了内部的中世纪壁画与宗教文物，修复了受损的雕塑与彩绘玻璃，让这座千年教堂重新焕发活力。值得一提的是，教堂内留存着多幅14-16世纪的壁画，描绘了宗教故事与匈牙利历史场景，还有多件中世纪的宗教雕塑与手稿，是研究匈牙利宗教文化与艺术史的重要实物资料。如今，瓦茨大教堂不仅是瓦茨市的核心宗教场所，也是匈牙利重要的历史文化地标，每年吸引着大量游客与朝圣者前来，它承载着瓦茨千年的宗教信仰与历史记忆，见证了当地的兴衰变迁，成为中欧宗教建筑与历史文化融合的重要典范，也成为瓦茨市一张独特的文化名片。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"宗教艺术+老城烟火"为主题，难度较低，适合各类游客，建议安排1-1.5小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：瓦茨大教堂入口</h5>
                    <p>设有售票窗口与游客咨询点，可购买门票、领取导览手册</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：教堂前广场</h5>
                    <p>广场中央有圣伊什特万雕像，周边是复古风格附属建筑与绿植，可拍摄教堂正面全景，参观约10分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：教堂主体大厅</h5>
                    <p>首先映入眼帘的是宏伟的主祭坛，祭坛上方悬挂大型宗教壁画，两侧是对称的侧祭坛，参观约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：教堂珍宝馆</h5>
                    <p>位于教堂东侧，展示大量中世纪宗教文物、金器、手稿、雕塑等珍品，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：教堂庭院</h5>
                    <p>位于教堂后侧，庭院内有古老石碑、绿植与小型雕塑，氛围宁静，可休憩并拍摄教堂侧面景观，参观约10分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：老城区街巷漫步</h5>
                    <p>漫步在老城区石板街巷，欣赏两侧复古民居、特色商铺与当地咖啡馆，购买当地手工艺品，感受瓦茨烟火气</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：教堂入口</h5>
                    <p>周边有当地特色餐厅，可品尝匈牙利传统美食，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 参观教堂时，需保持安静，禁止大声喧哗，穿着需得体，避免短裤、短裙、背心等过于随意的服装</li>
                  <li>• 教堂内部部分区域（如珍宝馆部分展品）禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                  <li>• 教堂内地面部分区域较滑，行走时需注意安全，老人与小孩建议有人陪同</li>
                  <li>• 周一教堂珍宝馆闭馆，仅开放教堂主体与庭院区域，前往前需提前确认</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂前广场圣伊什特万雕像旁</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂正面全景最佳机位，可完整拍摄大教堂正面轮廓，哥特式尖塔、巴洛克式装饰、新古典主义立柱清晰可见。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂后侧庭院</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂侧面与局部细节核心机位，庭院内古老石碑、绿植与教堂石砌墙体、尖塔相互映衬，画面静谧古朴。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂内部主祭坛前</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂内部宏伟感绝佳机位，可拍摄到主祭坛全貌与上方大型壁画，两侧彩绘玻璃、雕塑与穹顶装饰相互映衬。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">多瑙河畔观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂与多瑙河同框最佳机位，瓦茨大教堂复古建筑与蜿蜒多瑙河相互呼应，远处是瓦茨老城区屋顶轮廓。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城区石板街巷</h4>
                  <p className="text-gray-700 text-sm">拍摄人文烟火气与复古氛围绝佳机位，蜿蜒石板街巷、两侧复古民居、特色商铺与咖啡馆，搭配远处教堂尖塔。最佳时间：午后15:00-16:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:30-11:00）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少</li>
                  <li>• 建议穿着简约复古风格衣物，如米白色、卡其色、黑色，避免过于花哨，与教堂庄重氛围和老城区复古格调形成呼应</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，展现建筑宏伟与布局，拍摄细节时可使用长焦镜头，突出壁画、雕塑、石砌纹理等细节</li>
                  <li>• 参观教堂内部时，需遵守相关规定，禁止拍照的区域切勿拍摄</li>
                  <li>• 拍摄多瑙河与教堂同框时，可利用河流的线条，增强画面的纵深感</li>
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
                      <span className="font-medium">瓦茨城堡遗址</span>
                      <p className="text-sm text-gray-600">距离大教堂约1公里，步行15分钟。中世纪时期瓦茨防御性城堡，保留城堡残垣断壁、城墙与塔楼，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">多瑙河游船码头</span>
                      <p className="text-sm text-gray-600">距离大教堂约700米，步行10分钟。可乘坐短途游船游览多瑙河瓦茨段，欣赏两岸风光，票价约8-12欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">圣迈克尔教堂</span>
                      <p className="text-sm text-gray-600">距离大教堂约800米，步行12分钟。建于13世纪，哥特式建筑代表，规模虽小但外观精致，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">瓦茨历史博物馆</span>
                      <p className="text-sm text-gray-600">距离大教堂约900米，步行13分钟。展示瓦茨市历史变迁、民俗文化与宗教文物，门票约3欧元/人</p>
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
                      <span className="font-medium">布达佩斯老城区</span>
                      <p className="text-sm text-gray-600">距离瓦茨约30公里，自驾或乘坐火车、巴士约30-40分钟可达。布达佩斯核心景点，保留大量中世纪建筑、教堂与广场</p>
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
                    <h5 className="font-medium">大教堂周边或老城区内</h5>
                    <p>距离核心景点最近，步行即可抵达，老城区内多为复古民居改造住宿，氛围古朴典雅，可深度感受瓦茨中世纪风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">多瑙河畔</h5>
                    <p>风景优美，可欣赏河景，适合喜欢自然风光、想享受宁静氛围游客，距大教堂约500-700米，步行8-12分钟</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区周边</h5>
                    <p>住宿性价比高，价格相对实惠，距离老城区约1.5公里，可乘坐公交或打车前往，适合预算有限游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>老城区内有很多小众民宿，多由当地传统复古民居改造，装修融合中欧风格与宗教元素，28-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，25-60欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>大教堂周边与多瑙河畔有少量精品酒店，装修高端精致，部分酒店具有历史底蕴，提供早餐服务，65-120欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区周边有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，20-38欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 瓦茨旅游旺季为5-9月，尤其是7-8月，游客较多，住宿紧张，建议提前1个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（1.5-4欧元/天）</li>
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
                    <li>• 上午10:00-11:00：游客较少，光线柔和，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参观教堂时，需保持安静，禁止大声喧哗，穿着需得体</li>
                    <li>• 教堂内部部分区域（如珍宝馆部分展品）禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                    <li>• 教堂内地面部分区域较滑，行走时需注意安全，老人与小孩建议有人陪同</li>
                    <li>• 周一教堂珍宝馆闭馆，仅开放教堂主体与庭院区域，前往前需提前确认</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参观教堂主体大厅，欣赏宏伟的主祭坛与上方大型宗教壁画</li>
                    <li>• 探索教堂珍宝馆，了解中世纪宗教文物、金器与手稿</li>
                    <li>• 漫步教堂庭院，感受古老石碑与绿植营造的宁静氛围</li>
                    <li>• 游走多瑙河畔，欣赏教堂与河流交相辉映的美景</li>
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