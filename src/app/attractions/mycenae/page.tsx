import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迈锡尼遗址・Mycenae・希腊・迈锡尼 | 最佳欧洲景点',
  description: '探索迈锡尼遗址，这座希腊青铜时代晚期的重要考古遗址，以其狮子门和王室陵墓而闻名。',
}

export default function MycenaePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '迈锡尼', href: '/destinations/greece' },
            { label: '迈锡尼遗址', href: '/attractions/mycenae' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">迈锡尼遗址・Mycenae・希腊・迈锡尼</h1>
          <p className="text-lg text-gray-600 mb-6">
            迈锡尼遗址是希腊青铜时代晚期的重要考古遗址，是荷马史诗传说中亚该亚人的都城，承载着近3000年的历史。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              迈锡尼遗址是希腊青铜时代晚期的重要考古遗址，是荷马史诗传说中亚该亚人的都城，由珀耳修斯所建，在特洛伊战争时期由阿伽门农所统治，承载着近3000年的历史。遗址依山而建，留存着坚固的环形城墙、宏伟的狮子门、神秘的王室陵墓与宫殿遗迹，融合了爱琴文明的建筑精髓，是探寻古希腊文明起源、感受荷马史诗魅力的核心景点，见证了迈锡尼文明的辉煌与衰落。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="迈锡尼遗址" />
                <InfoRow label="英文名称" value="Mycenae Archaeological Site" />
                <InfoRow label="国家" value="希腊（Greece）" />
                <InfoRow label="城市" value="迈锡尼（Mycenae）" />
                <InfoRow label="所属区域" value="伯罗奔尼撒半岛东北阿尔戈斯平原" />
              </div>
              <div className="space-y-4">
                <InfoRow label="开放时间" value="夏季8:00-19:00，冬季8:30-15:00" />
                <InfoRow label="门票价格" value="成人12欧元/人，学生半价6欧元/人" />
                <InfoRow label="建议游览" value="3-4小时" />
                <InfoRow label="最佳季节" value="4月-10月" />
                <InfoRow label="世界遗产" value="1999年列入世界文化遗产名录" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">遗址门票：</span>成人12欧元/人，学生、65岁以上老人半价（6欧元/人），12岁以下儿童免费</p>
                <p><span className="font-medium">考古博物馆：</span>成人5欧元/人，学生及老人半价（2.5欧元/人）</p>
                <p><span className="font-medium">联票优惠：</span>遗址+博物馆联票15欧元/人，比单独购票更优惠</p>
                <p><span className="font-medium">线上购票：</span>提前1天购票可享受10%优惠</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">自驾：</span>从雅典自驾约2.5小时，全程高速</p>
                <p><span className="font-medium">公共交通：</span>雅典→阿尔戈斯市长途汽车（2小时，25欧元）→打车（20分钟，15欧元）</p>
                <p><span className="font-medium">步行：</span>遗址内部仅可步行游览，建议穿防滑步行鞋</p>
                <p><span className="font-medium">停车场：</span>遗址入口外专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              迈锡尼遗址的历史渊源可追溯至公元前3000年，其发展与爱琴文明的兴衰紧密相关，是迈锡尼文明的核心载体，也是古希腊文明的重要源头之一。迈锡尼文明因迈锡尼城而得名，是希腊青铜时代晚期的文明，鼎盛时期覆盖整个伯罗奔尼撒半岛、爱琴海诸岛及小亚细亚西部，对后来的古希腊文明产生了深远影响，荷马史诗《伊利亚特》《奥德赛》中对阿伽门农国王的记载，更让迈锡尼成为承载着神话与历史的传奇之地。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              早在新石器时代，迈锡尼所在的山丘就已出现人类活动痕迹，当时的居民以农耕、畜牧为生，逐渐形成小规模聚居点，留下了简单的石质房屋遗迹与陶器碎片。公元前2000年左右，随着爱琴文明的兴起，迈锡尼开始形成早期城市，居民开始修建石质防御设施，发展农业与手工业，与克里特岛的米诺斯文明建立了密切的贸易联系，吸收了米诺斯文明的建筑与艺术精髓，为后来的繁荣奠定了基础。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公元前1600年至公元前1100年，是迈锡尼文明的鼎盛时期，迈锡尼成为伯罗奔尼撒半岛的政治、经济与军事中心，统治者修建了宏伟的宫殿、坚固的环形城墙与神秘的王室陵墓，确立了君主制统治。这一时期，迈锡尼的手工业高度发达，青铜冶炼、陶器制作、金银加工技术达到顶峰，生产的青铜武器、精美陶器与金银饰品，通过海上贸易远销至埃及、叙利亚、意大利等地，成为地中海东部重要的贸易枢纽。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              相传，这一时期的迈锡尼国王阿伽门农，率领希腊联军发动了特洛伊战争，耗时十年最终攻破特洛伊城，这段历史被荷马记载于史诗之中，成为西方文学史上的经典篇章。迈锡尼的环形城墙周长约900米，墙体由巨大的石块堆砌而成，最厚处达10米，被称为"独眼巨人墙"，相传由独眼巨人建造，展现了当时高超的建筑技术与军事防御能力；狮子门作为城墙的主要入口，雕刻着两只对称的雄狮，气势恢宏，是迈锡尼文明的标志性建筑。
            </p>
            <p className="text-gray-700 leading-relaxed">
              公元前1100年左右，迈锡尼文明开始走向衰落，关于衰落的原因至今尚无定论，主流观点认为，一方面是多利亚人的入侵，摧毁了迈锡尼的城市与防御设施，另一方面是海上贸易路线的改变与自然灾害的影响，导致经济衰退、人口流失。随着迈锡尼文明的衰落，迈锡尼城逐渐被废弃，遗址被掩埋在尘土之中，长达数千年之久，成为被遗忘的文明遗迹。19世纪，德国考古学家海因里希·施里曼根据荷马史诗的记载，在伯罗奔尼撒半岛进行考古发掘，于1876年成功发现迈锡尼遗址，出土了大量珍贵文物，包括黄金面具、青铜武器、陶器、珠宝等，其中"阿伽门农黄金面具"被誉为世界文物瑰宝，证实了迈锡尼文明的真实存在，打破了人们对荷马史诗的神话认知。此后，考古学家持续对迈锡尼遗址进行发掘与修缮，严格遵循"修旧如旧"的原则，保留了遗址的原始风貌，让这座千年文明遗址重见天日。如今，迈锡尼遗址不仅是希腊重要的考古遗址与历史文化载体，也是世界著名的旅游胜地，每年吸引大量游客前来探寻爱琴文明的奥秘，感受荷马史诗的传奇色彩。遗址内的每一块石块、每一处遗迹，都承载着千年的历史记忆，见证了迈锡尼文明的辉煌与衰落，成为连接古代爱琴文明与现代世界的重要纽带。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约1.5公里，耗时3-4小时，节奏舒缓，兼顾打卡与体验感</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：遗址游客中心</h5>
                    <p>可领取导览手册、租赁讲解设备（8欧元/台），详细了解遗址历史背景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：遗址入口与停车场（步行5分钟）</h5>
                    <p>入口处设有遗址简介牌，可拍照打卡，感受遗址整体氛围</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：狮子门（步行3分钟）</h5>
                    <p>迈锡尼遗址标志性建筑，门楣上雕刻着两只对称雄狮，姿态威严</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：环形城墙（狮子门两侧）</h5>
                    <p>沿城墙步道漫步，欣赏坚固结构，部分区域可登上城墙远眺阿尔戈斯平原</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：阿特柔斯宝库（步行8分钟）</h5>
                    <p>又称"阿伽门农墓"，宏伟圆形陵墓，入口处石门重达120吨</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：王室陵墓群（阿特柔斯宝库周边）</h5>
                    <p>多座圆形结构王室陵墓，出土大量黄金、珠宝、陶器文物</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：宫殿遗址（步行10分钟）</h5>
                    <p>位于山丘顶部，迈锡尼国王居所与政治中心，留存宫殿地基与石柱遗迹</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第七站：考古博物馆（步行5分钟）</h5>
                    <p>收藏遗址出土各类文物，包括黄金面具、青铜武器、陶器、珠宝等</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：遗址出口</h5>
                    <p>出口处有纪念商店，可购买迈锡尼文明相关纪念品</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 遗址内路面多为碎石与石板，部分区域坡度较大，建议穿舒适防滑步行鞋</li>
                  <li>• 遗址内禁止大声喧哗、随意触摸文物与遗迹，禁止攀爬墙体</li>
                  <li>• 夏季希腊气候炎热，紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">狮子门正前方</h4>
                  <p className="text-gray-700 text-sm">拍摄狮子门全貌的最佳机位，包括门楣雄狮雕刻、巨大石门与两侧环形城墙。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">环形城墙制高点</h4>
                  <p className="text-gray-700 text-sm">俯瞰整个迈锡尼遗址全貌，包括宫殿遗址、王室陵墓群、狮子门与周边阿尔戈斯平原。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">阿特柔斯宝库入口</h4>
                  <p className="text-gray-700 text-sm">拍摄宝库入口全貌，凸显石门厚重与陵墓神秘，也可拍摄入口与天空同框照片。最佳时间：上午10:30-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">宫殿遗址平台</h4>
                  <p className="text-gray-700 text-sm">拍摄遗迹与阿尔戈斯平原同框照片，石柱残缺与平原辽阔形成鲜明对比。最佳时间：下午14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">考古博物馆展厅</h4>
                  <p className="text-gray-700 text-sm">拍摄"阿伽门农黄金面具"复制品、青铜武器与精美陶器文物细节。注意：禁止使用闪光灯</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:00-9:00）和傍晚（17:00-18:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、米白色、浅灰色，与石质遗迹形成对比</li>
                  <li>• 拍摄建筑可采用仰拍角度，凸显建筑宏伟气势；拍摄全景使用广角镜头</li>
                  <li>• 拍摄文物时保持距离，避免反光，确保照片清晰</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">梯林斯考古遗址</span>
                      <p className="text-sm text-gray-600">距离约8公里，打车15分钟。同为世界文化遗产，迈锡尼文明重要组成部分</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">阿尔戈斯古城</span>
                      <p className="text-sm text-gray-600">距离约12公里，打车25分钟。古希腊重要城市，有古希腊剧院和神庙遗迹</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">阿尔戈斯平原观景台</span>
                      <p className="text-sm text-gray-600">距离约5公里，打车10分钟。俯瞰阿尔戈斯平原全景，远眺迈锡尼遗址</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">文化体验景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">纳夫普利翁小镇</span>
                      <p className="text-sm text-gray-600">距离约20公里，打车30分钟。地中海风情海滨小镇，有古老城堡和石板街巷</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">埃皮达鲁斯古剧院</span>
                      <p className="text-sm text-gray-600">距离约40公里，打车45分钟。古希腊最著名剧院之一，以完美声学效果闻名</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">住宿区域选择</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">迈锡尼小镇</h5>
                    <p>距离遗址约1公里，步行或观光车可达，氛围宁静，多为当地特色民居改造住宿</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">阿尔戈斯古城</h5>
                    <p>距离遗址约12公里，住宿选择更多，周边商圈发达，购物就餐便利</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">纳夫普利翁小镇</h5>
                    <p>距离约20公里，地中海风情海滨住宿，适合游览遗址后休闲放松</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>位于迈锡尼小镇或纳夫普利翁，融合希腊传统元素与现代风格，70-140欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>多由当地民居改造，装修简约清新，保留希腊传统建筑特色，35-80欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">连锁酒店</h5>
                    <p>阿尔戈斯古城内性价比高，设施标准化，干净整洁，20-45欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 旅游旺季为6-8月，建议提前1-2个月预订，避免无房或价格上涨</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（5-8欧元/天）</li>
                  <li>• 部分民宿为自助入住，需提前查看入住指南和密码</li>
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
                    <li>• 春秋季节：人流相对较少，价格更优惠</li>
                    <li>• 避开正午：建议上午或傍晚游览，光线更佳</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 遗址内多为碎石与石板路面，建议穿舒适防滑步行鞋</li>
                    <li>• 夏季紫外线极强，必须携带遮阳帽、防晒霜</li>
                    <li>• 尊重考古遗址，禁止触摸文物、攀爬遗迹</li>
                    <li>• 博物馆内禁止闪光灯拍照，遵守相关规定</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">文化体验建议</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 租赁讲解设备深入了解历史文化背景</li>
                    <li>• 提前预约人工讲解（英文15欧元/人，中文20欧元/人）</li>
                    <li>• 结合荷马史诗了解迈锡尼文明历史</li>
                    <li>• 参观附近梯林斯遗址，全面了解迈锡尼文明</li>
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