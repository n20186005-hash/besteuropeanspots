import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦里亚古城・Veria・希腊・韦里亚 | 最佳欧洲景点',
  description: '探索韦里亚古城，这座位于希腊中马其顿地区的历史名城，以其2700年文明史和多元建筑风格而闻名。',
}

export default function VeriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '韦里亚', href: '/destinations/greece' },
            { label: '韦里亚古城', href: '/attractions/veria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">韦里亚古城・Veria・希腊・韦里亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            韦里亚古城是希腊中马其顿地区最具历史底蕴的古城之一，拥有至少2700年文明史，是古代马其顿地区的商业、历史和文化中心。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              韦里亚古城是希腊中马其顿地区最具历史底蕴的古城之一，拥有至少2700年文明史，是古代马其顿地区的商业、历史和文化中心。古城依托山丘地势而建，街巷纵横交错，融合古希腊、罗马、拜占庭、奥斯曼等多元建筑风格，留存着大量历史遗迹与古建遗存，兼具历史厚重感与地中海小城的静谧风情，是探寻古希腊文明、早期基督教文化与多元历史交融的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="韦里亚古城" />
                <InfoRow label="英文名称" value="Veria Old Town" />
                <InfoRow label="国家" value="希腊（Greece）" />
                <InfoRow label="城市" value="韦里亚（Veria）" />
                <InfoRow label="所属区域" value="中马其顿大区伊马夏州" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="古城整体全天免费开放" />
                <InfoRow label="室内景点" value="夏季9:00-18:00，冬季10:00-16:00" />
                <InfoRow label="门票价格" value="古城街巷免费开放" />
                <InfoRow label="建议游览" value="4小时左右" />
                <InfoRow label="最佳季节" value="4月-10月" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">韦里亚考古博物馆：</span>成人6欧元/人，学生、65岁以上老人半价（3欧元/人），12岁以下儿童免费</p>
                <p><span className="font-medium">使徒保罗教堂：</span>成人3欧元/人，儿童免费</p>
                <p><span className="font-medium">犹太会堂遗址：</span>成人2欧元/人，家庭套票（2大1小）5欧元</p>
                <p><span className="font-medium">英文讲解服务：</span>15欧元/人，线上提前1天购票可享受10%优惠</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">飞机：</span>塞萨洛尼基国际机场距离古城约78公里，打车约50分钟，费用约60欧元</p>
                <p><span className="font-medium">火车：</span>从雅典乘坐火车直达韦里亚火车站，车程约4.5小时，票价约45欧元</p>
                <p><span className="font-medium">市内交通：</span>韦里亚市区公交2路、5路可达古城周边，打车费用约5-8欧元</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              韦里亚古城的历史渊源可追溯至公元前7世纪，其发展与独特的地理位置、多元外来统治历史紧密相关，是马其顿地区历史文化的重要载体。作为中马其顿地区的交通枢纽与商贸中心，韦里亚凭借优越的地理位置，成为古代希腊、罗马、拜占庭等文明交流的枢纽，见证了多元文化的碰撞与融合，也承载着希腊数千年的历史更迭，其历史最早可追溯至公元前1000年，是希腊历史最悠久的城市之一。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前7世纪，韦里亚就已形成聚居村落，最初是古希腊马其顿城邦的重要城镇，凭借便利的交通条件，逐渐发展成为马其顿地区的商业与文化中心。古希腊时期，韦里亚是马其顿王国的重要城市，在阿吉德王朝统治时期（其最著名的成员是亚历山大大帝），成为仅次于佩拉的第二重要城市，当时的韦里亚已形成完善的街巷格局与公共建筑体系，是哲学、艺术的聚集地，留存下大量古希腊建筑遗迹与文物，见证了古希腊的辉煌文明。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前168年，韦里亚向罗马帝国投降，成为罗马帝国马其顿行省的重要城市，罗马人在古城原有基础上扩建了道路、公共建筑与防御工事，将罗马建筑风格与古希腊风格相融合，进一步提升了古城的防御与商贸功能。罗马帝国时期，韦里亚成为重要的宗教传播中心，公元50-55年间，使徒保罗在离开塞萨洛尼基后，曾在此向犹太人和希腊人布道，其信徒成为帝国最早的基督徒之一，为早期基督教文化的传播奠定了基础，古城内也因此留存了大量与基督教相关的遗迹。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              罗马帝国衰落之后，韦里亚先后被拜占庭帝国、奥斯曼帝国统治，其中拜占庭帝国的统治对古城影响最为深远，长达数百年。拜占庭时期，韦里亚成为希腊文化与宗教的重要中心，修建了大量拜占庭风格的教堂、修道院与公共建筑，圣索菲亚教堂、使徒保罗教堂等标志性建筑均建于这一时期，其建筑风格融合了拜占庭的穹顶、马赛克壁画与古希腊的石质结构，形成了独特的建筑风貌。
            </p>
            <p className="text-gray-700 leading-relaxed">
              奥斯曼帝国统治时期，韦里亚成为区域商贸枢纽，奥斯曼人在古城内修建了清真寺、巴扎（集市）与土耳其风格的民居，与原有古希腊、罗马、拜占庭风格建筑交相辉映，进一步丰富了古城的建筑多元性。这一时期，韦里亚的商贸活动十分繁荣，成为连接欧亚的重要商贸节点，留存下来的巴扎遗址至今仍能窥见当时的繁华景象。19世纪以来，希腊独立后，韦里亚正式归入希腊版图，成为中马其顿大区伊马夏州的首府，希腊政府开始重视韦里亚古城的保护与修缮，严格遵循"修旧如旧"的原则，对城墙、教堂、民居等历史建筑进行修复，保留了多元文化融合的建筑风貌与街巷格局。韦里亚还是重要的犹太文化遗址，曾拥有庞大的犹太社区，直至二战期间犹太人被驱逐，如今犹太会堂遗址成为纪念这一历史的重要场所。如今，韦里亚古城不仅是希腊重要的历史文化载体，也是韦里亚市的文化核心，古城内的每一处石墙、每一条街巷，都承载着多元文明的碰撞与融合，既有古希腊的文明底蕴，又有罗马、拜占庭、奥斯曼的历史痕迹，还有早期基督教文化的印记，成为感受希腊历史、体验马其顿地区文化的重要窗口，每年吸引大量游客前来探寻千年历史印记。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约1.8公里，建议游览4小时，节奏舒缓，兼顾打卡与体验感</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：韦里亚古城北门</h5>
                    <p>最具标志性的入口，保留着完整的罗马时期城门与防御城墙，可领取导览手册，打卡拍照</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：韦里亚考古博物馆（步行3分钟）</h5>
                    <p>设于罗马时期的公共建筑旧址，展示着古希腊、罗马、拜占庭时期的文物、雕塑、陶器等</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：圣索菲亚广场（步行5分钟）</h5>
                    <p>古城的核心广场，也是中世纪商贸交易中心，广场周边环绕着拜占庭风格的圣索菲亚教堂</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：圣索菲亚教堂（步行1分钟）</h5>
                    <p>建于拜占庭时期，是韦里亚最古老、最宏伟的教堂，采用拜占庭风格，外观恢弘</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：使徒保罗教堂（步行4分钟）</h5>
                    <p>建于罗马时期，是纪念使徒保罗在此布道的重要场所，保留着原始的石质结构与宗教遗迹</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：奥斯曼巴扎遗址（步行6分钟）</h5>
                    <p>奥斯曼帝国统治时期的商贸中心，保留着古老的商铺、街巷与集市格局</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：犹太会堂遗址（步行5分钟）</h5>
                    <p>韦里亚犹太文化的重要印记，保留着犹太会堂的部分建筑遗迹与文物</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：古城制高点观景台（步行8分钟）</h5>
                    <p>位于古城最高处，可俯瞰整个韦里亚古城的全景与周边风光，夕阳西下时景色绝美</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：古城南门（步行7分钟）</h5>
                    <p>南门保留着奥斯曼时期的城门遗迹，周边有很多当地特色餐厅</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 古城内多为石板路面，部分区域坡度较大，雨后易滑，建议穿舒适的步行鞋</li>
                  <li>• 室内景点与教堂内禁止大声喧哗、随意触摸文物，禁止使用闪光灯拍照</li>
                  <li>• 夏季韦里亚气候炎热，多晴天，可携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城制高点观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄古城全景的绝佳机位，可俯瞰整个韦里亚古城的石质建筑群与纵横交错的石板街巷。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣索菲亚广场中央</h4>
                  <p className="text-gray-700 text-sm">周边环绕拜占庭风格的圣索菲亚教堂、石质建筑与露天咖啡馆，构成极具氛围感的复古画面。最佳时间：上午11:00-12:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">使徒保罗教堂正门</h4>
                  <p className="text-gray-700 text-sm">罗马与拜占庭融合风格的外观、精美的石雕与拱形门窗，极具复古质感。最佳时间：下午14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城石板街巷</h4>
                  <p className="text-gray-700 text-sm">纵横交错的幽深小巷，两旁的石质民居错落有致，石板路面经过千年磨损，自带复古质感。最佳时间：傍晚17:00-18:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">奥斯曼巴扎遗址街巷</h4>
                  <p className="text-gray-700 text-sm">保留着奥斯曼时期的商铺格局与石质建筑，拱形门洞、雕花门窗与古老的商铺招牌，尽显异域风情。最佳时间：上午10:00-11:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（7:30-8:30）和傍晚（17:00-18:30），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格的衣物，如白色、米白色、浅灰色，与石质建筑形成对比</li>
                  <li>• 携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与人文特写</li>
                  <li>• 室内景点与教堂内禁止拍照，需遵守景区规定</li>
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
                      <span className="font-medium">韦里亚民俗博物馆</span>
                      <p className="text-sm text-gray-600">距离古城约600米，步行8分钟。建于1920年，收藏古代到近代民俗文物</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">韦里亚公园</span>
                      <p className="text-sm text-gray-600">距离古城约800米，步行10分钟。市区最大的城市公园，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">韦里亚清真寺</span>
                      <p className="text-sm text-gray-600">距离古城约500米，步行7分钟。奥斯曼帝国统治时期建筑，免费开放</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途交通景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">Vergina考古遗址（古埃盖）</span>
                      <p className="text-sm text-gray-600">距离古城约12公里，打车约20分钟。联合国教科文组织世界遗产</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">马其顿平原观景台</span>
                      <p className="text-sm text-gray-600">距离古城约3公里，打车约10分钟。俯瞰马其顿平原风光的绝佳去处</p>
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
                    <h5 className="font-medium">古城周边500米范围内</h5>
                    <p>出行便利，可随时漫步古城街巷，部分住宿为石质古建改造，自带复古韵味</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">韦里亚市中心</h5>
                    <p>距离古城约1公里，有更多连锁酒店与经济型酒店，设施齐全，周边商圈发达</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品复古酒店</h5>
                    <p>多由拜占庭或奥斯曼时期的石质民居改造，装修融合希腊传统元素与复古风格</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>装修简约清新，部分保留希腊传统建筑特色，房东多为当地人</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">连锁酒店</h5>
                    <p>市中心性价比高的选择，设施标准化，干净整洁</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 旅游旺季为6-8月，建议提前1个月预订，避免无房或价格上涨</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认是否提供免费停车位，古城周边停车费用较高</li>
                  <li>• 部分民宿为自助入住，需提前查看入住指南和密码</li>
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
                    <li>• 4月-10月：气候温和，适合户外活动</li>
                    <li>• 6-8月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 春秋季节：人流相对较少，价格更优惠</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 古城内多为石板路面，部分区域坡度较大，建议穿舒适步行鞋</li>
                    <li>• 夏季阳光强烈，注意防晒和补水</li>
                    <li>• 尊重当地文化和历史遗迹</li>
                    <li>• 室内景点禁止大声喧哗和闪光灯拍照</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色美食推荐</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 希腊沙拉：新鲜蔬菜配羊奶酪</li>
                    <li>• 穆萨卡：传统希腊千层饼</li>
                    <li>• 烤羊肉：当地特色肉类料理</li>
                    <li>• 希腊酸奶：配蜂蜜和坚果</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地电压：230V，插头为Type F型</li>
                    <li>• 货币：欧元，支持信用卡和移动支付</li>
                    <li>• 语言：希腊语，但旅游区英语普及</li>
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