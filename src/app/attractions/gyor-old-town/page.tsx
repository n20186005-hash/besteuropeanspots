import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杰尔古城・Győr・匈牙利・杰尔 | 最佳欧洲景点',
  description: '探索杰尔古城，匈牙利西北部最具代表性的历史文化街区，融合罗马式、哥特式、巴洛克式等多种建筑风格的中欧古城风情。',
}

export default function GyorOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '杰尔古城', href: '/attractions/gyor-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">杰尔古城・Győr・匈牙利・杰尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            杰尔古城是匈牙利西北部最具代表性的历史文化街区，也是杰尔市的灵魂所在，融合了罗马式、哥特式、巴洛克式等多种建筑风格。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              杰尔古城是匈牙利西北部最具代表性的历史文化街区，也是杰尔市的灵魂所在，融合了罗马式、哥特式、巴洛克式等多种建筑风格，留存着大量中世纪以来的古建筑、石板街巷与人文遗迹。古城坐落于两河交汇处，街巷蜿蜒错落，广场错落有致，既有宗教建筑的庄严，也有市井生活的烟火气，是感受中欧古城风情、了解匈牙利西部历史文化的必访之地，低调而富有韵味。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="杰尔古城" />
                <InfoRow label="英文名称" value="Győr Old Town" />
                <InfoRow label="全称" value="Győr Historical Old Town" />
                <InfoRow label="匈牙利语名" value="Győri Történelmi Óváros" />
                <InfoRow label="国家" value="匈牙利（Hungary）" />
                <InfoRow label="城市" value="杰尔（Győr）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="匈牙利西北部，杰尔-莫松-肖普朗州首府" />
                <InfoRow label="地理位置" value="多瑙河支流拉包河与拉巴河交汇处" />
                <InfoRow label="历史地位" value="匈牙利第六大城市、七大区域中心之一" />
                <InfoRow label="建筑风格" value="罗马式、哥特式、巴洛克式融合" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">古城整体：</span>免费开放</p>
                <p><span className="font-medium">杰尔大教堂：</span>成人5欧元/人，学生2.5欧元/人，6岁以下儿童免费</p>
                <p><span className="font-medium">埃斯泰尔哈吉宫：</span>成人4欧元/人，学生2欧元/人</p>
                <p><span className="font-medium">联票（大教堂+埃斯泰尔哈吉宫）：</span>成人8欧元/人，学生4欧元/人</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">古城整体：</span>全天开放</p>
                <p><span className="font-medium">4-5月：</span>9:00-17:00（16:30停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:30-18:00（17:30停止入园）</p>
                <p><span className="font-medium">9-10月：</span>9:00-17:00（16:30停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-16:00（15:30停止入园）</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布达佩斯机场：</span>→杰尔（1.5小时车程，走M1高速公路）</p>
                <p><span className="font-medium">公共交通：</span>布达佩斯→杰尔（1小时火车，8欧元/人）</p>
                <p><span className="font-medium">维也纳：</span>→杰尔（1.5小时车程）</p>
                <p><span className="font-medium">火车站距离：</span>火车站距古城约1公里，步行12分钟</p>
                <p><span className="font-medium">停车场：</span>古城周边专用停车场，收费约3.5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              杰尔古城的历史可追溯至公元前1世纪，其发展历程与匈牙利的兴衰、中欧的贸易往来紧密相连，是匈牙利西部历史文化传承的重要载体，见证了从罗马时期到现代的千年变迁，承载着深厚的历史与人文内涵。杰尔地处布达佩斯与维也纳之间的交通要道，早在罗马帝国时期，就成为重要的军事要塞与商贸中转站，是中欧地区最早有人类定居的区域之一。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前1世纪，罗马帝国在杰尔地区建立军事要塞，命名为"Arrabona"，作为防御北方部落入侵的重要据点，同时也是罗马帝国与中东欧地区贸易往来的枢纽，当时的杰尔就已形成小型聚居区，留存有罗马时期的城墙、街道遗迹，成为杰尔古城的雏形。这一时期，罗马文化与当地文化相互融合，为杰尔古城的发展奠定了基础。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，杰尔逐渐发展成为匈牙利西部的重要城市，随着宗教的兴起，古城内开始修建大量宗教建筑，建筑风格以罗马式、哥特式为主。11世纪，杰尔成为匈牙利重要的宗教中心，当时的匈牙利国王下令在古城中心修建杰尔大教堂，成为当地天主教的核心场所，也成为古城的标志性建筑。这一时期，杰尔古城的规模不断扩大，街巷布局逐步形成，成为中欧地区重要的商贸与宗教重镇。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              16世纪，奥斯曼帝国入侵匈牙利，杰尔被奥斯曼军队占领，古城遭到严重破坏，大量古建筑被损毁，宗教活动一度中断，古城的发展陷入停滞。直到17世纪末，匈牙利摆脱奥斯曼帝国的统治，杰尔古城进入大规模重建阶段，当时的建筑师结合哥特式与巴洛克式风格，对受损建筑进行修复与扩建，同时新增了大量巴洛克式建筑，让古城兼具庄重与华丽的气质。
            </p>
            <p className="text-gray-700 leading-relaxed">
              18世纪至19世纪，杰尔古城迎来黄金发展期，作为中欧地区的交通枢纽与商贸中心，古城内商铺林立、人流涌动，同时也进行了多次城市改造，优化了街巷布局，完善了城市配套设施。这一时期，埃斯泰尔哈吉宫等知名建筑相继建成，成为古城的重要景观，也彰显了杰尔的繁荣与富裕。20世纪以来，杰尔古城历经多次修缮与保护，重点保护了中世纪以来的古建筑、石板街巷与人文遗迹，同时兼顾现代城市发展需求，实现了历史风貌与现代生活的完美融合。如今，杰尔古城不仅是杰尔市的核心区域，也是匈牙利重要的历史文化地标，每年吸引着大量游客前来，它承载着杰尔千年的历史记忆与人文底蕴，成为中欧古城文化与建筑艺术融合的重要典范。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"人文历史+古城烟火"为主题，难度较低，适合各类游客，建议安排2-3小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：杰尔古城入口</h5>
                    <p>游客咨询点旁，可领取导览手册、咨询游览路线</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：塞切尼广场</h5>
                    <p>古城中心广场，中央有塞切尼雕像，周边环绕巴洛克式建筑、特色商铺与咖啡馆，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：杰尔大教堂</h5>
                    <p>位于广场北侧，古城标志性建筑，融合哥特式与巴洛克式风格，内部装饰精美，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：埃斯泰尔哈吉宫</h5>
                    <p>距离大教堂约300米，步行5分钟可达，匈牙利西部重要巴洛克式建筑，参观约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：古城石板街巷漫步</h5>
                    <p>漫步在蜿蜒的石板街巷，欣赏两侧复古民居、小众商铺与街头艺术，购买当地手工艺品，感受古城烟火气，约30分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：拉包河河畔观景</h5>
                    <p>距离古城核心区约500米，步行8分钟可达，欣赏拉包河自然风光，远眺古城建筑轮廓，感受两河交汇处静谧之美，约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：塞切尼广场</h5>
                    <p>周边有当地特色餐厅，可品尝匈牙利传统美食，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 参观宗教建筑时，需保持安静，禁止大声喧哗，穿着需得体</li>
                  <li>• 部分景点内部禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                  <li>• 古城内石板街巷较多，路面较滑，行走时需注意安全</li>
                  <li>• 周一埃斯泰尔哈吉宫闭馆，仅开放杰尔大教堂与广场区域</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">塞切尼广场中央雕像旁</h4>
                  <p className="text-gray-700 text-sm">拍摄古城全景最佳机位，可完整拍摄广场周边巴洛克式建筑、杰尔大教堂尖顶。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">杰尔大教堂正门台阶上</h4>
                  <p className="text-gray-700 text-sm">拍摄大教堂细节核心机位，可近距离拍摄哥特式尖顶、巴洛克式装饰与精美雕塑。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城石板街巷深处</h4>
                  <p className="text-gray-700 text-sm">拍摄复古人文氛围绝佳机位，蜿蜒石板路、复古民居、木质门窗与花草。最佳时间：午后15:00-16:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">拉包河河畔观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄古城与河流同框最佳机位，杰尔古城复古建筑与蜿蜒拉包河相互呼应。最佳时间：傍晚18:00-19:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">埃斯泰尔哈吉宫庭院内</h4>
                  <p className="text-gray-700 text-sm">拍摄巴洛克式建筑细节绝佳机位，庭院雕塑、喷泉、绿植与宫殿装饰相互映衬。最佳时间：上午9:30-10:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:30-11:00）和傍晚（18:00-19:00），光线柔和，光影层次丰富</li>
                  <li>• 建议穿着简约复古风格衣物，如米白色、卡其色、藏青色，与古城复古格调形成呼应</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，拍摄细节时可使用长焦镜头，突出雕塑、壁画等细节</li>
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
                      <span className="font-medium">杰尔城堡遗址</span>
                      <p className="text-sm text-gray-600">距离古城约1.2公里，步行18分钟。中世纪时期杰尔防御性城堡，保留城堡残垣断壁、城墙与塔楼，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">拉包河游船码头</span>
                      <p className="text-sm text-gray-600">距离古城约600米，步行10分钟。可乘坐短途游船游览拉包河杰尔段，欣赏两岸自然风光与复古建筑，票价约7-10欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">杰尔历史博物馆</span>
                      <p className="text-sm text-gray-600">距离古城约800米，步行12分钟。展示杰尔市历史变迁、民俗文化与人文遗迹，收藏罗马时期文物、中世纪手稿，门票约3欧元/人</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">圣迈克尔教堂</span>
                      <p className="text-sm text-gray-600">距离古城约500米，步行8分钟。建于13世纪，哥特式建筑代表，规模虽小但外观精致，免费开放</p>
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
                      <span className="font-medium">维也纳老城区</span>
                      <p className="text-sm text-gray-600">距离杰尔约120公里，自驾或乘坐火车、巴士约1.5-2小时可达。维也纳核心景点，保留大量中世纪建筑、教堂与广场</p>
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
                    <h5 className="font-medium">古城周边或拉包河河畔</h5>
                    <p>距离核心景点最近，步行即可抵达，多为复古民居改造住宿，氛围古朴典雅，可深度感受杰尔古城中世纪风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区内</h5>
                    <p>住宿性价比高，价格相对实惠，距离古城约1.5公里，可乘坐公交或打车前往，适合预算有限游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>古城周边有很多小众民宿，多由当地传统复古民居改造，装修融合中欧风格与历史元素，30-75欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，28-65欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>古城周边与拉包河河畔有少量精品酒店，装修高端精致，部分酒店具有历史底蕴，提供早餐服务，70-130欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区内有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，22-40欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 杰尔旅游旺季为5-9月，尤其是7-8月，游客较多，住宿紧张，建议提前1个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（2-3.5欧元/天）</li>
                  <li>• 古城内民宿多位于石板街巷深处，部分无电梯，携带大件行李的游客可选择有行李搬运服务的住宿</li>
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
                    <li>• 参观宗教建筑时，需保持安静，禁止大声喧哗</li>
                    <li>• 古城内石板街巷较多，路面较滑，行走时需注意安全</li>
                    <li>• 部分景点内部禁止拍照，需遵守相关规定</li>
                    <li>• 周一埃斯泰尔哈吉宫闭馆，前往前需提前确认</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 漫步塞切尼广场，感受古城中心的热闹氛围</li>
                    <li>• 参观杰尔大教堂，欣赏融合哥特式与巴洛克式的建筑艺术</li>
                    <li>• 探索埃斯泰尔哈吉宫，感受贵族府邸的奢华精致</li>
                    <li>• 游走拉包河河畔，欣赏古城与自然景观的完美融合</li>
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