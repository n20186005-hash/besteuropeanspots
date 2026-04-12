import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米尔斯泰因修道院・Melk Abbey・奥地利・梅尔克 | 最佳欧洲景点',
  description: '探索米尔斯泰因修道院，奥地利最负盛名的巴洛克式建筑瑰宝，坐落于多瑙河畔的山岩之上，是瓦豪河谷世界文化遗产的核心组成部分。',
}

export default function MelkAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '米尔斯泰因修道院', href: '/attractions/melk-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">米尔斯泰因修道院・Melk Abbey・奥地利・梅尔克</h1>
          <p className="text-lg text-gray-600 mb-6">
            米尔斯泰因修道院是一座历史悠久的本笃会修道院，始建于1089年，现存巴洛克式建筑建于1702至1736年。它矗立在梅尔克镇的山岩之巅，俯瞰多瑙河与瓦豪河谷的绝美风光，以华丽的黄色外立面、金碧辉煌的教堂、珍藏无数中世纪手稿的图书馆闻名，融合了宗教信仰、艺术美学与自然景观，是奥地利中世纪至巴洛克时期文化与建筑的集大成者。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              米尔斯泰因修道院是一座历史悠久的本笃会修道院，始建于1089年，现存巴洛克式建筑建于1702至1736年。它矗立在梅尔克镇的山岩之巅，俯瞰多瑙河与瓦豪河谷的绝美风光，以华丽的黄色外立面、金碧辉煌的教堂、珍藏无数中世纪手稿的图书馆闻名，融合了宗教信仰、艺术美学与自然景观，是奥地利中世纪至巴洛克时期文化与建筑的集大成者。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="米尔斯泰因修道院" />
                <InfoRow label="英文名称" value="Melk Abbey (Stift Melk)" />
                <InfoRow label="国家" value="奥地利（Austria）" />
                <InfoRow label="城市" value="梅尔克（Melk, Lower Austria）" />
                <InfoRow label="宗教归属" value="本笃会修道院" />
              </div>
              <div className="space-y-4">
                <InfoRow label="始建年代" value="1089年（现存巴洛克建筑建于1702-1736年）" />
                <InfoRow label="建筑风格" value="巴洛克式建筑" />
                <InfoRow label="文化地位" value="瓦豪河谷世界文化遗产核心组成部分" />
                <InfoRow label="特色" value="华丽的黄色外立面、金碧辉煌的教堂、珍藏中世纪手稿的图书馆" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="2026年分时段开放：4-10月09:00-17:30，其他月份时间调整" />
              <InfoRow label="门票价格" value="修道院通票成人15欧元，学生12欧元，儿童8欧元；花园单独门票5.5欧元" />
              <InfoRow label="地址" value="Stiftsstr. 1, 3390 Melk, Austria（梅尔克镇修道院街1号）" />
              <InfoRow label="交通方式" value="从维也纳火车西站乘区域火车约1小时15分钟，步行10分钟抵达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                米尔斯泰因修道院的历史可追溯至公元976年，最初是巴本堡家族的一座城堡，作为奥地利早期统治家族的居所，见证了奥地利地区的早期发展。1089年，奥地利藩侯利奥波德二世将这座城堡捐赠给拉姆巴赫修道院的本笃会修士，正式改建为修道院，从此开启了其近千年的宗教与文化传承之路。
              </p>
              <p>
                12世纪，修道院建立了神学院，成为当时奥地利重要的学术与教育中心，同时修道院图书馆开始收集各类手稿与典籍，逐渐形成规模。15世纪，修道院发起了"梅尔克改革运动"，这场运动不仅重振了奥地利及德国南部的修道院生活，更推动了宗教文化的发展与传播。
              </p>
              <p>
                17世纪末，原有建筑因年久失修逐渐衰败，1702年至1736年，在建筑师雅各布·普兰陶尔的主持下，修道院进行了彻底的重建，采用当时最流行的巴洛克风格，融合了建筑、绘画、雕塑等多种艺术形式。众多杰出艺术大师参与其中，使修道院成为巴洛克艺术的典范之作。
              </p>
              <p>
                18世纪启蒙运动时期，米尔斯泰因修道院成为思想交流的重要场所，甚至曾设有共济会分会。在约瑟夫二世时期，奥地利许多修道院被没收解散，但米尔斯泰因修道院凭借其深厚的学术声誉与文化价值，成功躲过了解散的命运。
              </p>
              <p>
                1996年，米尔斯泰因修道院作为"瓦豪河谷文化景观"的核心部分，被列入联合国教科文组织世界文化遗产名录，其历史与文化价值得到全球认可。此外，著名小说《玫瑰之名》中，作者翁贝托·埃科将主角命名为"梅尔克的阿德索"，以此向这座古老的修道院致敬。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2.5-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  入口→主教庭院→皇帝阶梯→皇帝长廊→修道院博物馆→大理石厅→阳台观景台→图书馆→修道院教堂→北堡垒→修道院花园→出口。可选择跟随导览团（约55分钟，提供德、英、法、意四种语言）或自由参观。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议时长：</strong>2.5-3小时 | <strong>导览语言：</strong>德、英、法、意四种语言
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 入口与主教庭院</h4>
                  <p className="text-sm text-gray-700 mb-2">庭院中央有古老喷泉，四周环绕巴洛克建筑，顶部矗立着十二宗徒雕像，可清晰看到修道院教堂的墨绿色巴洛克拱顶。</p>
                  <div className="text-xs text-gray-500">⭐ 游览起点 | 🏛️ 巴洛克建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 皇帝阶梯与长廊</h4>
                  <p className="text-sm text-gray-700 mb-2">阶梯两侧装饰精美浮雕与壁画，曾是皇室成员专用通道；长廊悬挂历代院长与皇室成员画像。</p>
                  <div className="text-xs text-gray-500">🏰 皇室通道 | 🎨 精美壁画</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 修道院博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">以"从往昔到今朝"为主题，全面展现修道院近千年历史变迁，涵盖圣本尼迪克特、巴洛克时代等主题。</p>
                  <div className="text-xs text-gray-500">📚 历史文化 | 🏺 珍贵文物</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 大理石厅</h4>
                  <p className="text-sm text-gray-700 mb-2">曾是皇室宴会厅，墙面与地面全部采用大理石铺就，穹顶壁画描绘神话场景，金碧辉煌。</p>
                  <div className="text-xs text-gray-500">💎 皇室气派 | 🎭 神话壁画</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 阳台观景台</h4>
                  <p className="text-sm text-gray-700 mb-2">俯瞰多瑙河与梅尔克镇的最佳位置，可将蜿蜒河流、红屋顶小镇与河谷风光尽收眼底。</p>
                  <div className="text-xs text-gray-500">🌅 绝佳观景 | 📸 拍照必到</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 图书馆</h4>
                  <p className="text-sm text-gray-700 mb-2">被誉为"全球十座最美图书馆之一"，珍藏超过10万册古籍，巴洛克式装饰令人震撼。</p>
                  <div className="text-xs text-gray-500">📖 珍贵古籍 | 🏛️ 世界文化遗产</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 修道院教堂</h4>
                  <p className="text-sm text-gray-700 mb-2">巴洛克建筑群巅峰之作，金色与橙色主调，大量运用金箔、灰泥与大理石，庄严肃穆。</p>
                  <div className="text-xs text-gray-500">⛪ 宗教圣地 | ✨ 金碧辉煌</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 北堡垒与花园</h4>
                  <p className="text-sm text-gray-700 mb-2">设有"瓦豪实验室"和全景露台，花园融合巴洛克园林与英式自然风景园风格，设有多个主题园区。</p>
                  <div className="text-xs text-gray-500">🌺 花园美景 | 🔬 文化体验</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院外墙机位</h4>
                  <p className="text-sm text-gray-700">位于入口处广场，仰拍角度可拍摄完整黄色外立面与墨绿色拱顶，黄色墙体在阳光下格外耀眼。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 阳台观景台机位</h4>
                  <p className="text-sm text-gray-700">拍摄多瑙河与梅尔克镇全景最佳位置，可将蜿蜒河流、红屋顶小镇与河谷风光同框。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 图书馆窗边机位</h4>
                  <p className="text-sm text-gray-700">窗边区域可拍摄绿色山坡与修道院建筑一角，将古书、书架与窗外风光结合，营造文艺复古氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 主教庭院喷泉机位</h4>
                  <p className="text-sm text-gray-700">蹲在喷泉旁拍摄水面倒影，可将修道院建筑、天空与喷泉倒影完美融合，形成对称构图。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 修道院花园机位</h4>
                  <p className="text-sm text-gray-700">花园内绿篱迷宫、石凳与花卉都是绝佳背景，可拍摄漫步花园动态照片或以修道院建筑为背景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 多瑙河对岸机位</h4>
                  <p className="text-sm text-gray-700">从对岸步道拍摄，可将修道院完整建筑群与多瑙河同框，修道院矗立山岩之上，倒映河水中。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 修道院教堂、图书馆内部禁止拍照，禁止使用闪光灯</li>
                <li>• 参观时请尊重景区规定，避免影响他人与宗教活动</li>
                <li>• 户外拍摄时避免游客高峰期，可选择清晨或傍晚，光线更好</li>
                <li>• 建议晴天上午拍摄外墙，色彩饱满；傍晚拍摄多瑙河对岸，夕阳温暖</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">杜恩施泰因小镇（Dürnstein）</h4>
                <p className="text-sm text-gray-700 mb-2">距离梅尔克约20公里，瓦豪河谷精华小镇，以蓝白色尖顶奥古斯汀修道院和山顶城堡废墟闻名，传说狮心王理查一世曾被囚禁于此。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏰 中世纪传说</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">克雷姆斯小镇（Krems）</h4>
                <p className="text-sm text-gray-700 mb-2">位于瓦豪河谷北端，距离梅尔克约40公里，奥地利最古老城镇之一，以葡萄酒产区闻名，每年秋季举办葡萄酒节。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🍷 葡萄酒文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">瓦豪河谷游船之旅</h4>
                <p className="text-sm text-gray-700 mb-2">从梅尔克出发乘坐多瑙河游船前往克雷姆斯，全程约2小时，沿途欣赏河谷绝美风光，途经多个中世纪小镇与古堡。</p>
                <div className="text-xs text-gray-500">🚢 游船2小时 | 🌊 河谷风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">梅尔克镇老城区</h4>
                <p className="text-sm text-gray-700 mb-2">修道院所在的梅尔克镇本身极具游览价值，老城区保留大量中世纪与巴洛克式建筑，街道狭窄幽静，充满历史韵味。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行可达 | 🏘️ 历史街区</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">镇中心或修道院附近</h4>
                  <p className="text-sm text-blue-800">优先选择，步行可达修道院与老城区，方便游览，能避开旅游大巴高峰人群。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">靠近多瑙河住宿</h4>
                  <p className="text-sm text-green-800">享受河景，感受小镇静谧，适合喜欢安静的游客，环境优美。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">交通枢纽附近</h4>
                  <p className="text-sm text-yellow-800">靠近火车站或游船码头，适合计划游览瓦豪河谷多个景点的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">干净整洁、价格实惠，大多步行可达修道院与火车站，适合背包客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，平衡多瑙河与修道院距离，部分设有特色餐厅。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭情侣</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">四星级及以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于核心地段，部分拥有百年历史，装饰精美，设露台与高级餐厅。</p>
                  <div className="text-xs text-gray-500">💎 品质追求 | 🏰 历史建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">位于安静地段，提供当地特色早餐，充满乡土气息，体验当地生活。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（4-10月）：</strong>建议提前1-2个月预订，夏季与节假日游客较多</p>
                    <p className="mb-2"><strong>淡季（11月-次年3月）：</strong>可提前1-2周预订，部分酒店推出优惠活动</p>
                    <p><strong>文化票折扣：</strong>部分酒店与民宿提供修道院门票折扣，可节省费用</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>奥地利住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>免费停车：</strong>部分住宿提供免费停车，自驾游客可提前咨询</p>
                    <p><strong>注意事项：</strong>遵守当地规定，保持安静，尊重房东与其他游客</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                米尔斯泰因修道院不仅是一座宗教圣地，更是一座集建筑、艺术、历史于一体的文化宝库。在这里，你可以欣赏到巴洛克艺术的璀璨与精致，感受近千年的历史沉淀，俯瞰多瑙河与瓦豪河谷的绝美风光，体验奥地利小镇的宁静与惬意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                从主教庭院的庄严到图书馆的学术氛围，从大理石厅的皇室气派到教堂的精神核心，从观景台的山河全景到花园的自然和谐，每一个角落都诉说着历史的故事，展现着文化的魅力。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                希望这份攻略能帮助你更好地游览米尔斯泰因修道院，留下一段难忘的奥地利旅行记忆，在巴洛克艺术的璀璨中感受信仰的力量，在瓦豪河谷的秀美中领略自然的恩赐。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}