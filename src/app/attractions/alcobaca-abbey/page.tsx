import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔科巴萨修道院・Alcobaça Abbey・葡萄牙・阿尔科巴萨 | 最佳欧洲景点',
  description: '探索阿尔科巴萨修道院，葡萄牙最具代表性的哥特式建筑瑰宝，联合国教科文组织世界文化遗产，始建于12世纪，承载着葡萄牙近千年的宗教传承与历史记忆。',
}

export default function AlcobacaAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '阿尔科巴萨修道院', href: '/attractions/alcobaca-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔科巴萨修道院・Alcobaça Abbey・葡萄牙・阿尔科巴萨</h1>
          <p className="text-lg text-gray-600 mb-6">
            阿尔科巴萨修道院始建于1153年，由葡萄牙第一位国王阿方索一世下令修建，是葡萄牙第一座哥特式建筑，也是欧洲最震撼的希斯特会建筑标志之一。它坐落于阿尔科巴萨镇中心，建筑群保存完好，以简洁庄重的哥特式轮廓、精美的宗教雕塑与珍贵的历史遗迹闻名，融合了宗教信仰、艺术美学与葡萄牙中世纪历史，是葡萄牙中世纪文化与建筑的集大成者。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              阿尔科巴萨修道院始建于1153年，由葡萄牙第一位国王阿方索一世下令修建，是葡萄牙第一座哥特式建筑，也是欧洲最震撼的希斯特会建筑标志之一。它坐落于阿尔科巴萨镇中心，建筑群保存完好，以简洁庄重的哥特式轮廓、精美的宗教雕塑与珍贵的历史遗迹闻名，融合了宗教信仰、艺术美学与葡萄牙中世纪历史，是葡萄牙中世纪文化与建筑的集大成者。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿尔科巴萨修道院" />
                <InfoRow label="英文名称" value="Alcobaça Abbey (Mosteiro de Alcobaça)" />
                <InfoRow label="国家" value="葡萄牙（Portugal）" />
                <InfoRow label="城市" value="阿尔科巴萨（Alcobaça）" />
                <InfoRow label="所属区域" value="葡萄牙中部莱里亚区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="始建年代" value="1153年（由葡萄牙第一位国王阿方索一世下令修建）" />
                <InfoRow label="建筑风格" value="哥特式建筑，希斯特会建筑标志" />
                <InfoRow label="文化地位" value="联合国教科文组织世界文化遗产" />
                <InfoRow label="特色" value="葡萄牙第一座哥特式建筑，简洁庄重轮廓" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="2026年分时段开放：1-2月10:00-17:00，3-10月09:00-18:00，11-12月10:00-17:00" />
              <InfoRow label="门票价格" value="修道院通票成人12欧元，学生9欧元，儿童6欧元；语音导览额外3欧元" />
              <InfoRow label="地址" value="Largo de São Mário, 2460-011 Alcobaça, Portugal" />
              <InfoRow label="交通方式" value="从里斯本乘火车约1小时40分钟，从莱里亚市约30分钟；自驾走A8高速公路" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                阿尔科巴萨修道院的历史与葡萄牙王国的建立紧密相连，其起源可追溯至1153年。1139年，阿方索一世在奥里基之役大破穆斯林军队，成功击退摩尔人，正式建立葡萄牙王国，为感谢上帝庇佑，也为了巩固王国的宗教基础，他于1153年下令修建阿尔科巴萨修道院，并将其捐赠给希斯特会修士，成为葡萄牙第一座希斯特会修道院，也是整个伊比利亚半岛最重要的希斯特会建筑之一。
              </p>
              <p>
                12世纪至13世纪，修道院进入快速发展期，修士们在此潜心修行、研习学术，修道院逐渐成为葡萄牙重要的学术与教育中心，同时开始收集各类宗教手稿、典籍与艺术品，慢慢形成规模庞大的藏书库与文物收藏。这一时期，修道院的主体建筑逐步建成，采用当时欧洲流行的哥特式风格，摒弃了繁琐的装饰，以简洁、庄重、宏伟为核心，展现出独特的宗教美学。
              </p>
              <p>
                14世纪至15世纪，阿尔科巴萨修道院迎来鼎盛时期，凭借其深厚的宗教影响力与丰厚的财富，成为葡萄牙最富有的修道院之一。这一时期，修道院进行了扩建与修缮，新增了多个附属建筑，同时珍藏了大量珍贵的宗教艺术品与历史文物，其中最著名的便是葡萄牙国王佩德罗一世与爱人伊内斯·德·卡斯特罗的双人墓穴，成为修道院最具代表性的历史遗迹，见证了一段跨越生死的爱情传说。
              </p>
              <p>
                近代以来，修道院历经拿破仑战争、葡萄牙内战等动荡时期，虽曾遭到一定程度的破坏，但主体建筑与核心文物得以保存。20世纪初，葡萄牙政府开始对修道院进行系统性的修复与保护，恢复其历史原貌。1983年，阿尔科巴萨修道院被联合国教科文组织列入世界文化遗产名录，其历史与文化价值得到全球认可，成为葡萄牙中世纪建筑与宗教文化的重要象征。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2-2.5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  入口→修道院广场→主立面→正门→中殿（教堂核心）→皇室墓穴→回廊→修道院博物馆→修士食堂→庭院→出口。可选择跟随导览团（约45分钟，提供葡、英、西、法四种语言）或自由参观。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议时长：</strong>2-2.5小时 | <strong>导览语言：</strong>葡、英、西、法四种语言
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 入口与修道院广场</h4>
                  <p className="text-sm text-gray-700 mb-2">广场上矗立着圣马里奥雕像，周围环绕古朴石质建筑，石板地面与高大橄榄树营造静谧庄重氛围。</p>
                  <div className="text-xs text-gray-500">⭐ 游览起点 | 🏛️ 哥特式广场</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主立面与正门</h4>
                  <p className="text-sm text-gray-700 mb-2">典型哥特式风格，线条简洁流畅，顶部两座尖塔，中间巨大玫瑰窗雕刻精美宗教图案。</p>
                  <div className="text-xs text-gray-500">🏰 哥特式建筑 | 🌹 玫瑰窗艺术</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 中殿（教堂核心）</h4>
                  <p className="text-sm text-gray-700 mb-2">高大宽敞，两侧粗壮石柱支撑高耸拱顶，彩绘玻璃窗描绘圣经故事，阳光洒入光影交错。</p>
                  <div className="text-xs text-gray-500">⛪ 宗教圣地 | 🎨 彩绘玻璃艺术</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 皇室墓穴</h4>
                  <p className="text-sm text-gray-700 mb-2">佩德罗一世与爱人伊内斯·德·卡斯特罗双人墓穴，白色大理石雕刻精美花纹与浮雕。</p>
                  <div className="text-xs text-gray-500">💕 爱情传说 | 🗿 大理石雕刻</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 回廊</h4>
                  <p className="text-sm text-gray-700 mb-2">方形结构，四周环绕拱形走廊，石柱与拱顶雕刻精美，中央小巧庭院种植绿植花卉。</p>
                  <div className="text-xs text-gray-500">🌿 修道院回廊 | 🏛️ 哥特式拱顶</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 修道院博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">以"修道院的千年传承"为主题，展示希斯特会创立、中世纪宗教生活、珍贵文物收藏。</p>
                  <div className="text-xs text-gray-500">📚 历史文化 | 🏺 宗教文物</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 修士食堂与庭院</h4>
                  <p className="text-sm text-gray-700 mb-2">保留中世纪原貌，石质餐桌座椅整齐排列，墙壁宗教壁画，庭院橄榄树柠檬树绿植。</p>
                  <div className="text-xs text-gray-500">🍽️ 中世纪食堂 | 🌳 修道院庭院</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院广场全景机位</h4>
                  <p className="text-sm text-gray-700">广场中央平视或稍仰拍，完整主立面与两座尖塔，圣马里奥雕像与橄榄树前景，层次丰富。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主立面玫瑰窗机位</h4>
                  <p className="text-sm text-gray-700">正门下方仰拍，聚焦玫瑰窗精美雕刻与窗棂细节，阳光透过形成斑驳光影，艺术感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 中殿拱顶机位</h4>
                  <p className="text-sm text-gray-700">中殿中央仰拍，高耸拱顶与石柱纵深感，彩绘玻璃窗光影洒在拱顶上，庄严肃穆氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 回廊拱形走廊机位</h4>
                  <p className="text-sm text-gray-700">回廊拱形走廊侧拍，石柱拱顶线条延伸感，搭配庭院外绿植光影，静谧复古氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 庭院绿植机位</h4>
                  <p className="text-sm text-gray-700">庭院内橄榄树柠檬树为前景，拍摄修道院建筑一角，翠绿与石质建筑古朴相映，清新自然。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 皇室墓穴细节机位</h4>
                  <p className="text-sm text-gray-700">皇室墓穴内拍摄大理石雕刻细节，浮雕线条花纹清晰展现中世纪雕刻工艺，建议使用微距镜头。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 修道院教堂内部部分区域、皇室墓穴禁止使用闪光灯，保护文物</li>
                <li>• 博物馆内部分展品禁止拍照，参观时请尊重景区规定</li>
                <li>• 户外拍摄避开游客高峰期，选择清晨或傍晚光线更佳</li>
                <li>• 建议晴天上午拍摄广场与立面，光线柔和，细节清晰</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔科巴萨老城区</h4>
                <p className="text-sm text-gray-700 mb-2">修道院所在老城区保留大量中世纪与文艺复兴建筑，狭窄幽静街道，特色餐馆咖啡馆，浓郁乡土气息。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行可达 | 🏘️ 中世纪古镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">巴塔利亚修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离约30公里，葡萄牙另一座著名哥特式建筑，世界文化遗产，融合哥特式与曼努埃尔式风格。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏰 哥特式双瑰宝</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">纳扎雷海滩</h4>
                <p className="text-sm text-gray-700 mb-2">距离约25公里，葡萄牙著名海滨度假胜地，绵长开阔海滩，细腻沙质，湛蓝海水，海鲜餐厅众多。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏖️ 海滨度假</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱里亚城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离约20公里，12世纪中世纪重要军事城堡，阿方索一世时期建筑，山顶俯瞰莱里亚市全景。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏰 中世纪军事要塞</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">镇中心或修道院附近</h4>
                  <p className="text-sm text-blue-800">优先选择，步行可达修道院与老城区，方便游览，避开旅游大巴高峰人群，节省交通时间。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">镇边缘安静区域</h4>
                  <p className="text-sm text-green-800">环境静谧，更好地休息，适合喜欢安静的游客，远离游客喧嚣。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站或巴士站附近</h4>
                  <p className="text-sm text-yellow-800">交通便捷，适合计划游览周边景点，便于前往巴塔利亚修道院、纳扎雷海滩等地。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">干净整洁、价格实惠，大多步行可达修道院与火车站，部分提供公共厨房，适合背包客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭情侣</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">四星级及以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于核心地段，环境优雅，房间装饰精美，设有露台与高级餐厅，部分可欣赏修道院远景。</p>
                  <div className="text-xs text-gray-500">💎 品质追求 | 🏰 历史地段</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于安静地段，装修古朴，常提供当地特色早餐，充满乡土气息，适合体验当地生活。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（4-10月）：</strong>建议提前1-2个月预订，夏季与节假日游客较多</p>
                    <p className="mb-2"><strong>淡季（11月-次年3月）：</strong>可提前1-2周预订，部分酒店推出优惠</p>
                    <p><strong>文化折扣券：</strong>部分酒店与民宿提供门票折扣，可节省费用</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>葡萄牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>免费停车：</strong>部分住宿提供免费停车，自驾游客可提前咨询</p>
                    <p><strong>注意事项：</strong>遵守当地规定，保持安静，尊重房东与其他游客</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                阿尔科巴萨修道院不仅是一座宗教圣地，更是一座集哥特式建筑、历史传承与艺术美学于一体的文化宝库。在这里，你可以欣赏到哥特式建筑的简洁与宏伟，感受近千年的历史沉淀，聆听跨越生死的爱情传说，体验葡萄牙中部小镇的宁静与惬意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                从皇室墓穴的动人传说到回廊拱顶的精美雕刻，从修道院博物馆的珍贵文物到修士食堂的原貌重现，每一个角落都诉说着历史的故事，展现着文化的魅力。这座修道院见证了葡萄牙王国的诞生与兴衰，承载着欧洲中世纪宗教文化的厚重底蕴。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                希望这份攻略能帮助你更好地游览阿尔科巴萨修道院，深入了解葡萄牙的历史与文化，留下一段难忘的葡萄牙旅行记忆，在哥特式建筑的庄严中感受信仰的力量，在历史传说的动人中领略人性的光辉。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}