import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯梅代雷沃城堡・Smederevo Fortress・塞尔维亚・斯梅代雷沃 | 最佳欧洲景点',
  description: '探索斯梅代雷沃城堡，这座位于塞尔维亚的中世纪军事堡垒，以其三角形布局和河畔风光而闻名。',
}

export default function SmederevoFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯梅代雷沃城堡', href: '/attractions/smederevo-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">斯梅代雷沃城堡・Smederevo Fortress・塞尔维亚・斯梅代雷沃</h1>
          <p className="text-lg text-gray-600 mb-6">
            斯梅代雷沃城堡坐落于塞尔维亚斯梅代雷沃市，地处多瑙河与耶扎瓦河汇流的三角平原地带，是欧洲最大的平原古城堡，也是塞尔维亚最具代表性的中世纪军事堡垒之一。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              斯梅代雷沃城堡坐落于塞尔维亚斯梅代雷沃市，地处多瑙河与耶扎瓦河汇流的三角平原地带，是欧洲最大的平原古城堡，也是塞尔维亚最具代表性的中世纪军事堡垒之一。城堡呈三角形布局，由大城和小城组成，厚重的城墙、高耸的塔楼与蜿蜒的护城河相映，兼具军事防御的雄伟与河畔风光的柔美，承载着塞尔维亚中世纪的辉煌历史与巴尔干地区的文化交融印记，是感受塞尔维亚历史底蕴与自然之美的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="斯梅代雷沃城堡" />
                <InfoRow label="英文名称" value="Smederevo Fortress" />
                <InfoRow label="国家" value="塞尔维亚共和国（Republic of Serbia）" />
                <InfoRow label="城市" value="斯梅代雷沃（Smederevo）" />
                <InfoRow label="建造年代" value="15世纪（1428-1453年）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="城堡整体全天开放" />
                <InfoRow label="建议游览" value="9:00-18:00" />
                <InfoRow label="门票价格" value="城堡整体免费" />
                <InfoRow label="游览时长" value="3-4小时" />
                <InfoRow label="最佳季节" value="4月-10月" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">城堡整体：</span>免费对外开放，无门票费用</p>
                <p><span className="font-medium">讲解服务：</span>约200塞尔维亚第纳尔/人（约合1.7欧元），学生、老人可享半价优惠</p>
                <p><span className="font-medium">部分塔楼登顶：</span>50塞尔维亚第纳尔/人，儿童（12岁以下）免费</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">飞机：</span>贝尔格莱德尼古拉·特斯拉国际机场，有长途大巴直达斯梅代雷沃汽车站，车程约1.5小时</p>
                <p><span className="font-medium">市内交通：</span>城堡周边可乘坐1路、3路公交抵达城堡入口，公交票价约80塞尔维亚第纳尔/人</p>
                <p><span className="font-medium">步行：</span>可沿多瑙河畔长廊步行前往城堡，沿途可欣赏多瑙河风光，步行约20分钟</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              斯梅代雷沃城堡的历史渊源可追溯至15世纪，其建造与塞尔维亚中世纪的政治格局和军事防御需求密切相关。1428年至1430年，塞尔维亚王国为抵御奥斯曼土耳其帝国的入侵，开始修建这座军事要塞，最初仅建成小城部分，两侧分别被多瑙河和耶扎瓦河环绕，第三侧则挖掘护城河，形成天然的防御屏障，当时这里仅允许王室成员居住，也是王公贵族躲避传说中吸血鬼侵扰的居所。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1439年，塞尔维亚王国进一步扩建城堡，大城部分开始动工，并在1444年至1453年间逐步成形，最终形成了如今呈三角形、兼具居住与防御功能的城堡格局。这座城堡是塞尔维亚王国最后的首都所在地，也是当时巴尔干地区最坚固的军事要塞之一，承载着塞尔维亚人民抵御外敌、守护家园的历史记忆。城堡的建造融合了中世纪斯拉夫建筑与拜占庭建筑风格，厚重的石砌城墙、高耸的防御塔楼和宽阔的护城河，都彰显着当时高超的军事建筑工艺。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1459年，奥斯曼土耳其帝国征服斯梅代雷沃，城堡被改为军事据点，期间对部分建筑进行了改造，融入了奥斯曼建筑元素，增设了清真寺和土耳其浴室等设施，成为奥斯曼帝国在巴尔干地区重要的军事和行政据点。此后的数百年间，城堡在奥斯曼帝国的统治下，见证了巴尔干地区的战乱与变迁，也曾多次因战争遭到损毁，部分城墙和塔楼在战火中坍塌。
            </p>
            <p className="text-gray-700 leading-relaxed">
              19世纪后期，随着奥斯曼帝国的衰落，斯梅代雷沃被纳入塞尔维亚版图，城堡逐渐失去军事防御功能，成为历史遗迹。20世纪以来，塞尔维亚政府多次对城堡进行修复与保护，严格遵循"修旧如旧"的原则，重点修复了坍塌的城墙、塔楼和城门，保留了城堡的核心格局与历史风貌。如今，城堡不仅是塞尔维亚重要的历史文化遗址，也是当地举办文化活动、音乐会和历史展览的重要场所，每一块石板、每一座塔楼，都镌刻着塞尔维亚中世纪的辉煌与沧桑，承载着当地人民的集体记忆。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约3公里，耗时3-4小时，中途可在城堡内的草坪或河畔休息</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：斯梅代雷沃城堡主入口</h5>
                    <p>标志性的石砌城门，设有城堡简介牌，可在此打卡拍照，感受城堡的雄伟气势</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：主城门与城墙</h5>
                    <p>参观保存完好的主城门，触摸厚重的石砌城墙，了解其军事防御功能，城墙顶部可漫步</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：小城遗迹</h5>
                    <p>城堡最初建成的区域，参观王室居住遗址、小型教堂遗迹，感受中世纪王室的生活场景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：护城河与吊桥</h5>
                    <p>城堡的重要防御设施，可在河畔漫步，欣赏护城河与城堡的相映之景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：大城塔楼</h5>
                    <p>城堡的制高点之一，登顶可俯瞰整个城堡全景、多瑙河与耶扎瓦河汇流的美景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：城堡内部草坪与遗迹区</h5>
                    <p>穿梭在草坪与散落的遗迹之间，感受历史的沧桑，这里偶尔会举办小型文化展览</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：多瑙河畔观景台</h5>
                    <p>位于城堡南侧，紧邻多瑙河，可欣赏多瑙河的辽阔风光，远眺河畔的乡村与植被</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：城堡出口</h5>
                    <p>周边有当地特色小吃摊和纪念品商店，可购买特色手工艺品，品尝当地美食</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 城堡内多为石砌路面，部分路段不平整，建议穿舒适的步行鞋</li>
                  <li>• 夏季（6-8月）阳光强烈，可携带遮阳帽、防晒霜，适量补充水分</li>
                  <li>• 冬季气温较低，部分路面可能结冰，注意防滑</li>
                  <li>• 旅游旺季（5-9月）游客较多，建议避开正午人流高峰</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">大城塔楼顶端</h4>
                  <p className="text-gray-700 text-sm">拍摄城堡全景的最佳机位，可360度俯瞰整个斯梅代雷沃城堡，三角形的城堡格局、蜿蜒的城墙、高耸的塔楼与多瑙河、耶扎瓦河的汇流美景尽收眼底</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">多瑙河畔观景台</h4>
                  <p className="text-gray-700 text-sm">位于城堡南侧，是拍摄城堡与多瑙河同框的绝佳场景。最佳拍摄时间为日落时分</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">主城门处</h4>
                  <p className="text-gray-700 text-sm">主城门是城堡的标志性建筑，厚重的石砌拱门、斑驳的墙面和古老的雕刻，都极具历史感</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">城堡内部遗迹区</h4>
                  <p className="text-gray-700 text-sm">这里散落着中世纪的建筑碎片、雕刻和城墙遗迹，是拍摄人文纪实类照片的绝佳场景</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">护城河沿岸</h4>
                  <p className="text-gray-700 text-sm">沿着护城河漫步，可拍摄城堡的城墙与护城河的相映之景，狭窄的护城河与高大的城墙形成鲜明对比</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（7:30-10:00）和傍晚（17:00-19:30），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色衣物，避免过于花哨，与石砌城堡、湛蓝河水形成对比</li>
                  <li>• 携带广角镜头拍摄全景，长焦镜头拍摄建筑细节和河畔特写</li>
                  <li>• 尊重城堡的历史遗迹，拍摄时避免触摸和损坏遗迹</li>
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
                      <span className="font-medium">多瑙河畔长廊</span>
                      <p className="text-sm text-gray-600">紧邻城堡南侧，步行5分钟即可抵达，全长约1公里，沿途植被茂盛，设有休闲座椅</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">斯梅代雷沃城市博物馆</span>
                      <p className="text-sm text-gray-600">距离城堡约1公里，可步行15分钟，位于19世纪古典风格建筑内，成人门票100塞尔维亚第纳尔</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">圣乔治教堂</span>
                      <p className="text-sm text-gray-600">距离城堡约800米，可步行10分钟，始建于18世纪，融合了拜占庭与斯拉夫建筑风格</p>
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
                      <span className="font-medium">斯梅代雷沃公园</span>
                      <p className="text-sm text-gray-600">距离城堡约1.2公里，是当地最大的城市公园，设有休闲步道、儿童游乐区</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">多瑙河游船码头</span>
                      <p className="text-sm text-gray-600">距离城堡约1公里，有游船可游览多瑙河，票价约500塞尔维亚第纳尔/人</p>
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
                    <h5 className="font-medium">城堡周边500米范围内</h5>
                    <p>出行便利，可随时前往城堡游览，也能便捷抵达多瑙河畔长廊，感受夜晚的河畔氛围</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">斯梅代雷沃市中心</h5>
                    <p>距离城堡约1公里，有更多精品酒店和连锁酒店，设施齐全，交通便利</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>位于多瑙河畔或城堡周边，融合当地建筑元素与现代设施，价格约100-180欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>由老建筑改造，装修简约古朴，保留传统建筑特色，价格约60-100欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">连锁酒店</h5>
                    <p>市中心性价比高的选择，设施标准化，干净整洁，价格约40-70欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 旅游旺季为5-9月，建议提前1个月预订，避免无房或价格上涨</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认是否提供免费停车位，市中心停车费用较高</li>
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
                    <li>• 4月-10月：气候适宜，秋季有斯梅代雷沃之秋文化节</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 春秋季节：人流相对较少，价格更优惠</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 城墙部分区域年久失修，请勿攀爬未开放区域</li>
                    <li>• 城堡内无商业设施，建议自备饮用水</li>
                    <li>• 尊重历史遗迹，禁止在遗迹上刻画</li>
                    <li>• 冬季部分区域可能因天气原因临时封闭</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色活动</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 斯梅代雷沃之秋文化节：每年秋季举办的文化盛会</li>
                    <li>• 葡萄酒节：品尝当地特色葡萄酒</li>
                    <li>• 多瑙河游船：欣赏河畔风光和乡村景色</li>
                    <li>• 历史展览：了解中世纪塞尔维亚历史文化</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：塞尔维亚第纳尔（RSD），1欧元≈117第纳尔</li>
                    <li>• 语言：塞尔维亚语，但旅游区英语基本通行</li>
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