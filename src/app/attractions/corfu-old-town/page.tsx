import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科孚老城・Corfu Old Town・希腊・科孚 | 最佳欧洲景点',
  description: '探索科孚老城，这座位于希腊科孚岛的历史名城，以其威尼斯风格建筑和多元文化印记而闻名。',
}

export default function CorfuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '科孚', href: '/destinations/greece' },
            { label: '科孚老城', href: '/attractions/corfu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">科孚老城・Corfu Old Town・希腊・科孚</h1>
          <p className="text-lg text-gray-600 mb-6">
            科孚老城坐落于希腊科孚岛东岸，濒临伊奥尼亚海，是2007年被列入《世界遗产名录》的历史名城，也是希腊保存最完好的古城之一。老城以威尼斯风格建筑为核心，融合拜占庭、英国、法国等多元文化印记。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              科孚老城坐落于希腊科孚岛东岸，濒临伊奥尼亚海，是2007年被列入《世界遗产名录》的历史名城，也是希腊保存最完好的古城之一。老城以威尼斯风格建筑为核心，融合拜占庭、英国、法国等多元文化印记，街巷蜿蜒曲折，石屋错落有致，兼具军事防御底蕴与海滨小城风情，是感受伊奥尼亚文化、欧式复古美学与地中海市井烟火的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="科孚老城" />
                <InfoRow label="英文名称" value="Corfu Old Town" />
                <InfoRow label="国家" value="希腊（Greece）" />
                <InfoRow label="城市" value="科孚（Corfu）" />
                <InfoRow label="所属岛屿" value="科孚岛（Corfu Island）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="老城整体全天免费开放" />
                <InfoRow label="室内景点" value="夏季9:00-18:00，冬季10:00-16:00" />
                <InfoRow label="门票价格" value="老城街巷免费开放" />
                <InfoRow label="建议游览" value="4-5小时" />
                <InfoRow label="最佳季节" value="4月-10月" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">科孚考古博物馆：</span>成人8欧元/人，学生、65岁以上老人半价（4欧元/人），12岁以下儿童免费</p>
                <p><span className="font-medium">新要塞：</span>成人6欧元/人，儿童免费</p>
                <p><span className="font-medium">老要塞：</span>成人5欧元/人，家庭套票（2大1小）12欧元</p>
                <p><span className="font-medium">英文讲解服务：</span>20欧元/人，线上提前1天购票可享受15%优惠</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">飞机：</span>科孚岛国际机场距离老城约3公里，打车约10分钟，费用约15欧元</p>
                <p><span className="font-medium">轮渡：</span>从雅典乘坐渡轮约8小时，票价约40欧元，港口距离老城约500米</p>
                <p><span className="font-medium">市内交通：</span>公交1路、3路、6路可达老城周边，打车费用约5-10欧元</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              科孚老城的历史渊源可追溯至公元前8世纪，其发展与科孚岛的战略地理位置、多元外来统治历史紧密相关，是伊奥尼亚地区历史文化的重要载体。作为伊奥尼亚海东岸的重要港口城市，科孚凭借优越的地理位置，成为古代希腊、罗马、威尼斯等文明交流的枢纽，见证了多元文化的碰撞与融合，也承载着希腊数千年的历史更迭。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前8世纪，科孚岛就已有人类聚居，最初是古希腊科林斯城邦的殖民地，凭借优良港口，逐渐发展成为伊奥尼亚海的重要商贸据点，也是古希腊文明的重要分支。古希腊时期，科孚老城成为哲学、艺术的聚集地，留存下大量古希腊建筑遗迹与文物，见证了古希腊的辉煌文明，当时的老城已形成初步的街巷格局与防御体系。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前229年，科孚被罗马帝国征服，成为罗马帝国的海外行省，罗马人在老城原有基础上扩建了道路、公共建筑与防御工事，将罗马建筑风格与古希腊风格相融合，进一步提升了老城的防御与商贸功能。罗马帝国衰落之后，科孚先后被拜占庭帝国、诺曼人、威尼斯共和国统治，其中威尼斯共和国的统治对老城影响最为深远，长达400余年（1386-1797年）。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              威尼斯统治时期，是科孚老城的黄金时期，这一时期，威尼斯人大规模扩建老城，修建了环绕全城的防御城墙与两座标志性要塞（新要塞、老要塞），由著名威尼斯工程师设计，用于保护海上贸易利益，抵抗土耳其帝国的入侵，形成了如今老城的核心格局。同时，老城内修建了大量威尼斯风格的石质建筑、商铺、仓库与教堂，纵横交错的狭窄街巷、红瓦屋顶、拱形门窗，成为老城最鲜明的特色，商贸活动十分繁荣，成为威尼斯在伊奥尼亚海的重要贸易枢纽。
            </p>
            <p className="text-gray-700 leading-relaxed">
              1797年威尼斯共和国衰落之后，科孚先后被法国、英国统治，19世纪英国统治时期，对老城的要塞进行了多次修缮与部分重建，同时引入了英式建筑元素，与原有威尼斯风格、古希腊风格形成独特的多元建筑风貌。1864年，科孚正式归入希腊版图，成为希腊伊奥尼亚群岛的重要城市，老城的历史格局与建筑风貌得以完整保留。20世纪以来，希腊政府开始重视科孚老城的保护与修缮，严格遵循"修旧如旧"的原则，对城墙、要塞、教堂、民居等历史建筑进行修复，保留了多元文化融合的建筑风貌与街巷格局。2007年，科孚老城作为多元文化交融的历史名城，被联合国教科文组织列入《世界遗产名录》，因其独特的城市景观与深厚的历史底蕴，成为希腊最受欢迎的旅游景点之一，每年吸引数百万游客前来探寻千年历史印记。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约2公里，建议游览4-5小时，节奏舒缓，兼顾打卡与体验感</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：科孚老城南门</h5>
                    <p>最具标志性的入口，保留着完整的中世纪城门与防御城墙，可领取导览手册，打卡拍照</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：老要塞（步行5分钟）</h5>
                    <p>始建于13世纪，由威尼斯人修建，保留着完整的城墙、塔楼与炮台，可俯瞰老城全景与伊奥尼亚海风光</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：市政厅广场（步行8分钟）</h5>
                    <p>老城核心广场，中世纪商贸交易中心，周边环绕威尼斯风格建筑与露天咖啡馆</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：科孚考古博物馆（步行3分钟）</h5>
                    <p>设于威尼斯时期仓库旧址，展示古希腊、罗马时期文物，详细介绍科孚古代历史</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：圣斯皮里东教堂（步行4分钟）</h5>
                    <p>建于16世纪，科孚最古老宏伟的教堂，拜占庭与威尼斯融合风格，内部装饰精美</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：威尼斯风格民居（步行5分钟）</h5>
                    <p>威尼斯统治时期贵族居所，保留原始石质结构、红瓦屋顶与拱形门窗</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：老城街巷漫步</h5>
                    <p>穿梭纵横交错的中世纪街巷，欣赏石质民居、特色商铺与古老教堂</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：新要塞（步行10分钟）</h5>
                    <p>建于16世纪，规模宏大的防御工事，可远眺伊奥尼亚海与科孚港全景，夕阳西下时景色绝美</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：科孚港（步行7分钟）</h5>
                    <p>漫步码头，欣赏地中海海景，感受港口海滨风情</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 老城内多为石板路面，雨后易滑，建议穿舒适的步行鞋</li>
                  <li>• 室内景点与教堂内禁止大声喧哗、随意触摸文物</li>
                  <li>• 夏季气候炎热，建议携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 旅游旺季（6-8月）建议避开正午人流高峰，错峰游览</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老要塞观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄老城全景的绝佳机位，可俯瞰整个科孚老城的红瓦建筑群与纵横交错的街巷，背景搭配伊奥尼亚海。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">市政厅广场中央</h4>
                  <p className="text-gray-700 text-sm">周边环绕威尼斯风格建筑与露天咖啡馆，鲜花雕塑与古老路灯构成复古画面。最佳时间：上午11:00-12:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣斯皮里东教堂正门</h4>
                  <p className="text-gray-700 text-sm">拜占庭与威尼斯融合风格外观，精美石雕与彩色玻璃窗极具复古质感。最佳时间：下午14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城狭窄街巷</h4>
                  <p className="text-gray-700 text-sm">纵横交错的幽深小巷，石质民居错落有致，红瓦屋顶搭配浅色石墙。最佳时间：傍晚17:00-18:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">新要塞海滨观景台</h4>
                  <p className="text-gray-700 text-sm">以老城红瓦建筑为前景，拍摄伊奥尼亚海辽阔海面，海浪与老城相映成趣。最佳时间：清晨7:30-8:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（7:30-8:30）和傍晚（17:00-18:30），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色简约风格衣物，如白色、浅蓝色、米白色，与红瓦石墙形成对比</li>
                  <li>• 携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与海景特写</li>
                  <li>• 复古风照片可搭配长裙、草帽、复古衬衫等服饰</li>
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
                      <span className="font-medium">科孚港</span>
                      <p className="text-sm text-gray-600">距离老城约500米，步行7分钟。保留着古老码头与仓库，可漫步码头欣赏伊奥尼亚海海景</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">科孚植物园</span>
                      <p className="text-sm text-gray-600">距离老城约800米，步行10分钟。建于1851年，种植多种本土与外来植物，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">科孚民俗博物馆</span>
                      <p className="text-sm text-gray-600">距离老城约1公里，步行12分钟。收藏古代到近代民俗文物，成人门票4欧元</p>
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
                      <span className="font-medium">亚喀巴城堡遗迹</span>
                      <p className="text-sm text-gray-600">距离老城约1.5公里，始建于12世纪，保留着部分城墙与塔楼遗迹，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">加拉希迪海滩</span>
                      <p className="text-sm text-gray-600">距离老城约2公里，沙质细腻，海水清澈，适合游泳日光浴，夏季最佳</p>
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
                    <h5 className="font-medium">老城周边500米范围内</h5>
                    <p>出行便利，可随时漫步老城街巷，部分住宿为威尼斯风格石质建筑改造，自带复古韵味</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">科孚市中心</h5>
                    <p>距离老城约1公里，有更多连锁酒店与经济型酒店，设施齐全，周边商圈发达</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品复古酒店</h5>
                    <p>多由威尼斯时期石质民居改造，融合希腊传统元素与威尼斯复古风格，价格约80-150欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>装修简约清新，部分保留希腊传统建筑特色，价格约40-80欧元/晚，房东多为当地人</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">连锁酒店</h5>
                    <p>市中心性价比高的选择，设施标准化，干净整洁，价格约25-50欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 旅游旺季（6-8月）建议提前1个月预订，避免无房或价格上涨</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认是否提供免费停车位，老城周边停车费用较高</li>
                  <li>• 部分民宿为自助入住，需提前查看入住指南和密码</li>
                  <li>• 老式石质建筑可能无电梯，预订时可确认是否有电梯设施</li>
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
                    <li>• 老城内多为石板路面，建议穿舒适步行鞋</li>
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
                    <li>• 海鲜烩饭：新鲜地中海海鲜</li>
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