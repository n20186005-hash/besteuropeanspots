import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙姆瓦夏古城・Monemvasia・希腊・蒙姆瓦夏 | 最佳欧洲景点',
  description: '探索蒙姆瓦夏古城，这座位于希腊红色岩石半岛上的中世纪海岛古堡，以其完整的城墙和多元建筑风格而闻名。',
}

export default function MonemvasiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '蒙姆瓦夏古城', href: '/attractions/monemvasia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">蒙姆瓦夏古城・Monemvasia・希腊・蒙姆瓦夏</h1>
          <p className="text-lg text-gray-600 mb-6">
            蒙姆瓦夏古城是希腊最具特色的中世纪海岛古堡古城之一，始建于公元6世纪，拥有近1500年历史，是欧洲最古老的持续有人居住的设防城镇之一。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              蒙姆瓦夏古城是希腊最具特色的中世纪海岛古堡古城之一，始建于公元6世纪，拥有近1500年历史，是欧洲最古老的持续有人居住的设防城镇之一。古城依山而建，被完整的中世纪城墙环绕，融合拜占庭、威尼斯、奥斯曼等多元建筑风格，红瓦石屋错落分布在岩石山坡上，一面靠山、三面环海，兼具军事防御底蕴与地中海海岛风情，是探寻中世纪欧洲历史、感受爱琴海岸静谧之美的核心景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="蒙姆瓦夏古城" />
                <InfoRow label="英文名称" value="Monemvasia Old Town" />
                <InfoRow label="国家" value="希腊（Greece）" />
                <InfoRow label="城市" value="蒙姆瓦夏（Monemvasia）" />
                <InfoRow label="所属区域" value="伯罗奔尼撒半岛拉科尼亚州" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="古城整体全天免费开放" />
                <InfoRow label="室内景点" value="夏季9:00-18:30，冬季10:00-16:00" />
                <InfoRow label="门票价格" value="古城街巷免费开放" />
                <InfoRow label="建议游览" value="5小时左右" />
                <InfoRow label="最佳季节" value="4月-10月" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">蒙姆瓦夏考古博物馆：</span>成人5欧元/人，学生、65岁以上老人半价（2.5欧元/人），12岁以下儿童免费</p>
                <p><span className="font-medium">圣索菲亚教堂：</span>成人2欧元/人，儿童免费</p>
                <p><span className="font-medium">上城城堡遗址：</span>成人4欧元/人，家庭套票（2大1小）10欧元</p>
                <p><span className="font-medium">英文讲解服务：</span>18欧元/人，线上提前1天购票可享受12%优惠</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">自驾：</span>从雅典自驾约5小时，全程高速，沿途可欣赏伯罗奔尼撒半岛风光</p>
                <p><span className="font-medium">公共交通：</span>雅典→蒙姆瓦夏长途汽车（6小时，40欧元）→打车（5分钟，8欧元）</p>
                <p><span className="font-medium">古城内部：</span>仅可步行游览，街巷多为石板路面，坡度较大，建议穿防滑步行鞋</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              蒙姆瓦夏古城的历史渊源可追溯至公元6世纪，其发展与独特的海岛地理位置、多元外来统治历史紧密相关，是希腊中世纪历史文化的重要载体。古城名称源于希腊语"Moni"（唯一）和"Emvasis"（入口），意为"唯一入口之城"，因古城仅通过一条堤道与大陆相连，地势险要，自古以来就是军事防御要塞，也是地中海海上贸易的重要节点，见证了多元文明的碰撞与融合。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              早在米诺斯文明时期，蒙姆瓦夏所在的岩石半岛就已出现人类活动痕迹，古希腊地理学家鲍桑尼亚斯曾将此地称为"米诺斯岬角"，推测这里曾是米诺斯人的贸易据点，水下考古也发现了古代港口的遗迹，但当时尚未形成规模化聚居地。公元4世纪，罗马帝国首都迁至君士坦丁堡后，地中海贸易路线发生变化，周边的埃皮达鲁斯利梅拉古城被废弃，蒙姆瓦夏逐渐开始形成聚居点。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元6世纪，东罗马帝国（拜占庭帝国）时期，为躲避日耳曼民族的入侵，希腊难民纷纷逃往蒙姆瓦夏的岩石半岛，在此修建防御工事与民居，正式建立古城，作为拜占庭帝国在伯罗奔尼撒半岛的重要军事要塞，抵御外敌入侵。这一时期，古城逐渐形成上城（军事防御区）与下城（居住商贸区）的格局，上城修建城堡与防御城墙，下城则发展为居民居住与商贸交易的核心区域，成为拜占庭帝国在爱琴海地区的重要战略据点。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，蒙姆瓦夏凭借险要的地理位置与便利的海上交通，成为地中海东部重要的商业中心，主要经营丝绸、香料、葡萄酒等商品贸易，其中当地出产的马尔瓦西亚葡萄酒更是闻名欧洲，古城也因此成为当时最繁华的商贸港口之一。1204年，拜占庭帝国分裂后，蒙姆瓦夏先后被威尼斯共和国、热那亚共和国统治，其中威尼斯共和国的统治对古城影响最为深远，长达近300年。
            </p>
            <p className="text-gray-700 leading-relaxed">
              威尼斯统治时期，威尼斯人在原有防御工事的基础上，大规模扩建古城城墙与城堡，加固防御体系，同时修建了大量威尼斯风格的石质建筑、教堂与商铺，红瓦屋顶、拱形门窗成为古城的鲜明特色，进一步提升了古城的商贸与防御功能。这一时期，蒙姆瓦夏的海上贸易达到顶峰，成为威尼斯共和国在爱琴海地区的重要贸易枢纽，留存下来的石质民居、商铺与教堂，至今仍能窥见当时的繁华景象。1540年，蒙姆瓦夏被奥斯曼帝国征服，奥斯曼人在古城内修建了清真寺、土耳其风格的民居与集市，与原有拜占庭、威尼斯风格建筑交相辉映，进一步丰富了古城的建筑多元性。1821年，希腊独立战争期间，蒙姆瓦夏成为重要的起义据点，当地居民联合希腊革命军击败奥斯曼军队，将古城收复，成为希腊独立后的重要城市。19世纪以来，希腊政府开始重视蒙姆瓦夏古城的保护与修缮，严格遵循"修旧如旧"的原则，对城墙、城堡、教堂、民居等历史建筑进行修复，保留了中世纪海岛古城的原始格局与多元建筑风貌。如今，蒙姆瓦夏古城不仅是希腊重要的历史文化载体，也是著名的海岛旅游胜地，古城内的每一处石墙、每一条街巷，都承载着千年的历史记忆，既有拜占庭的宗教底蕴，又有威尼斯的复古风情，还有奥斯曼的异域痕迹，加上三面环海的海岛风光，成为感受希腊中世纪历史、体验地中海海岛静谧之美的重要窗口，每年吸引大量游客前来探寻这座"东方直布罗陀"的独特魅力。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约2公里，建议游览5小时，节奏舒缓，兼顾打卡与体验感</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：蒙姆瓦夏古城入口堤道</h5>
                    <p>长约400米，漫步堤道可欣赏墨托湾辽阔海景，远眺古城全貌与红色岩石半岛</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：古城入口拱门（步行3分钟）</h5>
                    <p>古城唯一入口，保留中世纪石质拱门与防御城墙，门口设有古城导览图</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：蒙姆瓦夏考古博物馆（步行5分钟）</h5>
                    <p>设于威尼斯时期商铺旧址，展示米诺斯文明、拜占庭、威尼斯时期文物与古代贸易商品</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：下城海滨街巷（步行4分钟）</h5>
                    <p>古城商贸与居住核心，街巷蜿蜒曲折，两旁是威尼斯风格石质民居、特色商铺与海景餐厅</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：圣尼古拉斯教堂（步行3分钟）</h5>
                    <p>建于拜占庭时期，古城内最古老教堂之一，采用拜占庭风格，外观简洁古朴</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：克里萨菲提萨教堂（步行6分钟）</h5>
                    <p>建于威尼斯时期，融合拜占庭与威尼斯建筑风格，教堂金顶在阳光下熠熠生辉</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：上城步道（步行8分钟）</h5>
                    <p>沿岩石山坡修建，坡度较大，沿途可欣赏古城下城红瓦建筑群与墨托湾海景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：上城城堡遗址（步行10分钟）</h5>
                    <p>位于古城最高处，中世纪军事防御核心，保留完整城堡城墙、塔楼与炮台</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第八站：诗人里佐斯胸像（步行5分钟）</h5>
                    <p>纪念希腊诗人里佐斯的重要景点，胸像基座刻有诗人经典诗句</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：下城海景餐厅（步行12分钟）</h5>
                    <p>周边有很多当地特色海景餐厅，可品尝新鲜海鲜与地中海风味美食，欣赏落日海景</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 古城内多为石板路面，坡度较大且迂回曲折，建议穿舒适的防滑步行鞋</li>
                  <li>• 夏季蒙姆瓦夏气候炎热，紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 上城城堡遗址部分区域地势险峻，行走时注意脚下安全</li>
                  <li>• 旅游旺季（6-8月）游客较多，建议避开正午人流高峰</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">古城入口堤道中段</h4>
                  <p className="text-gray-700 text-sm">拍摄古城全景的绝佳机位，可全景拍摄蒙姆瓦夏古城整体风貌，红色岩石半岛上的红瓦建筑群、中世纪城墙与蔚蓝墨托湾融为一体。最佳时间：清晨7:30-8:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">上城城堡遗址制高点</h4>
                  <p className="text-gray-700 text-sm">拍摄古城与海景同框的核心机位，可俯瞰整个下城红瓦石屋、蜿蜒街巷，远眺墨托湾辽阔海面。最佳时间：傍晚17:30-18:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">克里萨菲提萨教堂门口</h4>
                  <p className="text-gray-700 text-sm">拜占庭与威尼斯融合风格外观、熠熠生辉的金顶，搭配身后蔚蓝海景。最佳时间：上午10:00-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">下城海滨小巷</h4>
                  <p className="text-gray-700 text-sm">威尼斯风格石质民居、红瓦屋顶与特色商铺，石板路面经过千年磨损，自带复古质感。最佳时间：下午14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">诗人里佐斯胸像周边</h4>
                  <p className="text-gray-700 text-sm">古城文化地标，胸像本身极具复古质感，周边环绕石质围墙与绿植，远处可眺望海景。最佳时间：上午9:00-10:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（7:30-8:30）和傍晚（17:30-18:30），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、浅蓝色、米白色，与古城红瓦、红色岩石和蔚蓝大海形成对比</li>
                  <li>• 携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与海景特写，效果更佳</li>
                  <li>• 拍摄海景时可利用海面倒影，提升照片的层次感与美感</li>
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
                      <span className="font-medium">蒙姆瓦夏港口</span>
                      <p className="text-sm text-gray-600">距离古城约800米，步行10分钟。保留着古老码头与石质防波堤，可欣赏墨托湾海景</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">帕利亚蒙姆瓦夏海滩</span>
                      <p className="text-sm text-gray-600">距离古城约1.2公里，步行15分钟。沙质细腻，海水澄澈蔚蓝，免费开放</p>
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
                      <span className="font-medium">马尔瓦西亚葡萄酒庄园</span>
                      <p className="text-sm text-gray-600">距离古城约3公里，打车10分钟。出产闻名欧洲的马尔瓦西亚葡萄酒，成人门票8欧元</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">埃皮达鲁斯利梅拉考古遗址</span>
                      <p className="text-sm text-gray-600">距离古城约20公里，打车30分钟。古希腊时期重要城市遗址，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">墨托湾观景台</span>
                      <p className="text-sm text-gray-600">距离古城约2公里，打车8分钟。俯瞰墨托湾全景绝佳去处，免费开放</p>
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
                    <h5 className="font-medium">蒙姆瓦夏古城内</h5>
                    <p>出行便利，可随时漫步古城街巷，感受沉浸式中世纪海岛氛围，多为石质古建改造，部分设有海景露台</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">古城周边500米范围</h5>
                    <p>距离古城入口近，步行即可进入古城，兼顾便捷性与舒适性</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">蒙姆瓦夏市区</h5>
                    <p>距离古城约1.5公里，有更多连锁酒店与经济型酒店，设施齐全，周边商圈发达</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品复古酒店</h5>
                    <p>位于古城内，多由拜占庭或威尼斯时期石质民居改造，装修融合希腊传统元素与复古风格，80-150欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>古城内及周边有很多小众民宿，装修简约清新，部分保留希腊传统建筑特色，40-85欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">连锁酒店</h5>
                    <p>市区性价比高，设施标准化，干净整洁，25-50欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 旅游旺季为6-8月，建议提前1-2个月预订，避免无房或价格上涨</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（5-10欧元/天）</li>
                  <li>• 古城内住宿多为老式石质建筑，无电梯，携带大件行李需提前确认</li>
                  <li>• 春秋季（4-6月、9-10月）气候宜人，游客较少，价格适中</li>
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
                    <li>• 春秋季：人流相对较少，价格更优惠</li>
                    <li>• 避开正午：建议上午或傍晚游览，光线更佳</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 古城内多为石板路面，坡度较大，建议穿舒适防滑步行鞋</li>
                    <li>• 夏季紫外线极强，必须携带遮阳帽、防晒霜</li>
                    <li>• 上城城堡遗址部分区域地势险峻，行走时注意脚下安全</li>
                    <li>• 尊重当地居民生活，不乱扔垃圾，保持古城宁静洁净</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 品尝当地特产马尔瓦西亚葡萄酒</li>
                    <li>• 在海景餐厅享用新鲜海鲜与地中海风味美食</li>
                    <li>• 清晨或傍晚在堤道拍摄古城全景</li>
                    <li>• 漫步下城海滨小巷，感受中世纪氛围</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地电压：230V，插头为Type F型</li>
                    <li>• 货币：欧元，支持信用卡和移动支付</li>
                    <li>• 语言：希腊语，但旅游区英语基本通行</li>
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