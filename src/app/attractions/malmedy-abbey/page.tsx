import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马尔梅迪修道院・Malmedy Abbey・比利时・马尔梅迪 | 最佳欧洲景点',
  description: '探索马尔梅迪修道院，比利时阿登地区最具历史底蕴的宗教遗迹之一，始建于7世纪，融合罗马式、哥特式与巴洛克式建筑风格。',
}

export default function MalmedyAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '马尔梅迪修道院', href: '/attractions/malmedy-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">马尔梅迪修道院・Malmedy Abbey・比利时・马尔梅迪</h1>
          <p className="text-lg text-gray-600 mb-6">
            马尔梅迪修道院是比利时阿登地区千年宗教遗迹，始建于648年，由本笃会修士建立，融合罗马式、哥特式与巴洛克式建筑风格。修道院历经战乱与修缮，现存18世纪修复后的建筑，包含回廊、博物馆、宝藏室等，陈列着中世纪文物与宗教珍品，兼具建筑艺术价值与历史底蕴，是感受宗教文化、追溯欧洲中世纪历史的必访之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              马尔梅迪修道院是比利时阿登地区千年宗教遗迹，始建于648年，由本笃会修士建立，融合罗马式、哥特式与巴洛克式建筑风格。修道院历经战乱与修缮，现存18世纪修复后的建筑，包含回廊、博物馆、宝藏室等，陈列着中世纪文物与宗教珍品，兼具建筑艺术价值与历史底蕴，是感受宗教文化、追溯欧洲中世纪历史的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="马尔梅迪修道院" />
                <InfoRow label="英文名称" value="Malmedy Abbey" />
                <InfoRow label="国家" value="比利时（Belgium）" />
                <InfoRow label="城市" value="马尔梅迪（Malmedy）" />
                <InfoRow label="所属区域" value="比利时东南部阿登地区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="阿登地区最具历史底蕴的宗教遗迹之一" />
                <InfoRow label="核心特色" value="罗马式、哥特式与巴洛克式建筑融合" />
                <InfoRow label="文化价值" value="始建于7世纪的本笃会修道院" />
                <InfoRow label="建筑价值" value="18世纪修复后的中世纪建筑" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="淡季周二至周六10:00-17:00；旺季周一至周六10:00-17:30，周日11:00-17:00" />
              <InfoRow label="门票价格" value="成人6欧元；青少年4欧元；儿童2欧元；6岁以下免费" />
              <InfoRow label="地址" value="9, place du châtelet, 4960 Malmedy, Belgium" />
              <InfoRow label="交通方式" value="从布鲁塞尔乘火车至列日转巴士约2.5小时；从列日乘巴士约1小时" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                马尔梅迪修道院的历史可追溯至公元648年，由法国索利尼亚克修道院院长圣雷马克（Saint Remacle）与几位本笃会修士共同建立，最初是一座小型宗教修行场所，因地处阿登地区的交通要道，逐渐发展成为区域性的宗教与文化中心。修道院的发展与欧洲中世纪的宗教变迁、政治动荡紧密相连，见证了马尔梅迪地区上千年的历史更迭。
              </p>
              <p>
                7世纪至10世纪，是修道院的初创与发展期。圣雷马克修士选择在马尔梅迪的高地建立修道院，秉持本笃会"祈祷与劳作"的理念，带领修士们开垦土地、传播宗教文化，逐步将修道院发展成为兼具宗教修行、文化传播与慈善救助功能的场所。这一时期，修道院的建筑以简单的罗马式风格为主，墙体厚重、屋顶低矮，主要建筑包括教堂、修士宿舍与仓库，规模较为简朴，却为后续的扩建奠定了基础。
              </p>
              <p>
                11世纪至13世纪，马尔梅迪修道院进入鼎盛时期。随着中世纪欧洲宗教势力的崛起，修道院获得了大量的土地与捐赠，开始大规模扩建。这一时期，修道院融入了哥特式建筑元素，修建了高耸的尖塔、华丽的彩绘玻璃窗与精致的浮雕，扩建了教堂、回廊与礼拜堂，规模逐渐宏大。修道院不仅是宗教修行之地，还成为阿登地区的文化与教育中心，修士们致力于抄写古籍、研究神学与自然科学，保存了大量珍贵的中世纪文献与文物，推动了当地文化的发展。同时，马尔梅迪与斯塔韦洛组成斯塔韦洛-马尔梅迪亲王国，由亲王修道院长统治，修道院成为这一教会微型国家的核心。
              </p>
              <p>
                14世纪至17世纪，修道院历经战乱与动荡，逐渐走向衰落。这一时期，欧洲爆发了宗教战争与百年战争，马尔梅迪地区多次被战火波及，修道院遭到严重破坏，部分建筑坍塌，珍贵文物被损毁或掠夺。此外，宗教改革运动的兴起，使得天主教势力受到冲击，修道院的影响力逐渐下降，修士数量减少，经济来源也日益匮乏，只能勉强维持日常运转，许多建筑因年久失修而逐渐破败。
              </p>
              <p>
                18世纪至近代，修道院迎来修复与新生。18世纪初，当地政府与宗教团体对修道院进行了大规模修缮，保留了罗马式与哥特式建筑的核心风貌，同时融入了巴洛克式建筑元素，修复了受损的教堂与回廊，使其恢复了往日的宏伟。1789年法国大革命爆发后，修道院的宗教功能被终结，结束了长达1146年的宗教生活，先后被法军、普鲁士军队与德军占用。20世纪初，比利时政府将修道院列为历史文化遗产，对其进行系统性保护与修缮，并将部分区域改造为Malmundarium博物馆，展示修道院的历史、文物与当地文化。二战期间，马尔梅迪是阿登战役的重要战场之一，修道院虽未遭到严重破坏，但周边区域受损严重，战后政府再次对其进行修复，如今已成为比利时著名的历史景点，吸引着世界各地的游客前来探访。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  镇主广场 → 修道院入口 → 回廊 → 主教堂 → Malmundarium博物馆（含皮革工坊、造纸工坊、宝藏室） → 修道院庭院 → 镇中心特色商铺与餐馆
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从镇主广场出发，全程步行游览，路线舒缓，兼顾宗教建筑、历史文物与人文风情，可租赁语音导览（支持多语言），也可跟随当地导览团（约1小时，提供多语言服务）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 镇主广场</h4>
                  <p className="text-sm text-gray-700 mb-2">作为马尔梅迪镇的核心区域，镇主广场矗立着市政厅、历史雕像与喷泉，周边环绕着古朴的石质房屋、特色商铺与餐馆，是当地市民休闲聚会的场所，充满复古气息。</p>
                  <div className="text-xs text-gray-500">🏛️ 镇中心 | 🏘️ 中世纪建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 修道院入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从镇主广场步行2分钟即可抵达修道院入口，入口处设有服务台，可租赁语音导览、购买门票与联票，入口旁的石质拱门保留着中世纪的建筑痕迹。</p>
                  <div className="text-xs text-gray-500">🚶 步行2分钟 | 🏛️ 中世纪拱门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 回廊</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过入口广场，即可抵达修道院的核心区域——回廊，回廊环绕着庭院修建，由石质拱廊组成，拱顶雕刻着精美的花纹与宗教故事，墙面保留着中世纪的壁画残片。</p>
                  <div className="text-xs text-gray-500">🏛️ 石质拱廊 | 🎨 中世纪壁画</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 主教堂</h4>
                  <p className="text-sm text-gray-700 mb-2">从回廊进入主教堂，主教堂是修道院的核心建筑，融合了罗马式与哥特式建筑风格，厚重的石质墙体搭配高耸的尖塔，内部宽敞明亮，彩绘玻璃窗透进柔和的光线。</p>
                  <div className="text-xs text-gray-500">⛪ 主教堂 | 🌈 彩绘玻璃窗</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. Malmundarium博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">主教堂旁便是Malmundarium博物馆，这座博物馆位于修道院旧址内，由修士宿舍改造而成，分为多个展区，展示着修道院的历史、当地文化与中世纪文物。</p>
                  <div className="text-xs text-gray-500">🏛️ 博物馆 | 📚 历史文化</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 修道院庭院</h4>
                  <p className="text-sm text-gray-700 mb-2">从博物馆出来，即可进入修道院庭院，庭院内种植着茂密的绿植与花卉，摆放着古朴的石桌石凳，还有一座小型喷泉，环境静谧优美。</p>
                  <div className="text-xs text-gray-500">🌿 庭院 | ⛲ 喷泉景观</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院入口拱门机位</h4>
                  <p className="text-sm text-gray-700">位于修道院入口的石质拱门前，采用仰拍角度，拍摄拱门的全貌与上面的雕刻图案，利用拱门的对称感，凸显建筑的庄严与古朴，能清晰展现中世纪建筑的细节与纹理。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 回廊拱顶机位</h4>
                  <p className="text-sm text-gray-700">在回廊内，采用仰拍角度，拍摄回廊的拱顶与拱廊，利用拱顶的线条延伸感，展现回廊的建筑美，搭配墙面的壁画残片与光影，氛围感拉满。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主教堂彩绘玻璃窗机位</h4>
                  <p className="text-sm text-gray-700">在主教堂内部，采用侧拍角度，拍摄彩绘玻璃窗的全貌，阳光透过彩绘玻璃洒在地面上，形成五彩斑斓的光影，搭配教堂内部的雕塑与祭坛，画面庄严而唯美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 博物馆宝藏室文物机位</h4>
                  <p className="text-sm text-gray-700">在宝藏室内，聚焦展示柜内的中世纪文物，采用平视角度，拍摄文物的细节，如宗教饰品、古籍文献、雕塑摆件等，利用博物馆的柔和灯光，突出文物的质感与历史底蕴。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 修道院庭院机位</h4>
                  <p className="text-sm text-gray-700">在修道院庭院内，采用平视或俯拍角度，拍摄庭院的全貌，搭配庭院内的绿植、喷泉与周边的建筑，画面静谧优美，充满生机与诗意。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 镇主广场修道院远景机位</h4>
                  <p className="text-sm text-gray-700">在镇主广场上，采用平视角度，拍摄修道院的远景，将修道院的尖塔与镇中心的建筑同框，展现修道院与小镇的融合之美，画面开阔，既能体现修道院的宏伟，又能展现马尔梅迪镇的古朴风情。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览修道院时，禁止攀爬建筑、刻画墙体，避免损坏文物</li>
                <li>• 主教堂内禁止大声喧哗，拍摄时禁止使用闪光灯</li>
                <li>• 博物馆内部分展品禁止拍摄，需遵守现场指示</li>
                <li>• 户外拍摄时，注意脚下安全，避免踩踏草坪、破坏植被</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">马尔梅迪战争纪念馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约3公里，驾车5分钟可达，步行约30分钟，是为纪念二战阿登战役中牺牲的士兵而建，博物馆内陈列着二战时期的武器、军装、照片与文献资料，还有模拟战场场景。</p>
                <div className="text-xs text-gray-500">🚗 车程5分钟 | 🕊️ 二战纪念馆</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">斯帕赛道（Circuit de Spa-Francorchamps）</h4>
                <p className="text-sm text-gray-700 mb-2">距离马尔梅迪约15公里，驾车20分钟可达，是F1比利时大奖赛与斯帕24小时耐力赛的举办地，赛道部分路段由公共公路改造而成，保留着高速、起伏的特点。</p>
                <div className="text-xs text-gray-500">🏎️ F1赛道 | 🏁 赛车体验</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿登森林步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约5公里，步行或驾车10分钟可达，这条步道贯穿阿登森林核心区域，全长约7公里，步道平缓，难度较低，适合徒步休闲，沿途风景秀丽。</p>
                <div className="text-xs text-gray-500">🌲 森林徒步 | 🥾 自然步道</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">斯塔韦洛修道院（Stavelot Abbey）</h4>
                <p className="text-sm text-gray-700 mb-2">距离马尔梅迪约10公里，驾车15分钟可达，始建于7世纪，与马尔梅迪修道院同期建立，同样是阿登地区重要的宗教遗迹，建筑风格融合了罗马式与哥特式。</p>
                <div className="text-xs text-gray-500">⛪ 宗教遗迹 | 🏛️ 中世纪建筑</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">镇中心或靠近修道院</h4>
                  <p className="text-sm text-blue-800">优先选择镇中心或靠近修道院的住宿，步行可达修道院、镇主广场与核心景点，方便游览，同时能深度感受小镇的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">镇边缘或阿登森林周边</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择镇边缘或阿登森林周边的住宿，环境静谧，能欣赏到自然美景，适合休息，适合喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">镇入口或停车场附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如斯帕赛道、斯塔韦洛修道院），可选择靠近镇入口或停车场的住宿，交通更便捷，便于驾车前往周边景点。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择镇内的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于镇中心或自然景观旁，环境优雅，房间装饰精美，部分可欣赏到修道院或森林远景，设有露台与高级餐厅。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为石质建筑，装修古朴，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客，温馨舒适。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>马尔梅迪的旅游旺季为4月至10月，尤其是夏季（7-8月）与F1比利时大奖赛期间，游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供修道院、战争纪念馆门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>比利时的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、法国一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>冬季马尔梅迪气温较低，部分山区可能有降雪，住宿时可关注是否有供暖设施，避免影响休息</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                马尔梅迪修道院，这座矗立在阿登高地的千年遗迹，承载着欧洲中世纪的宗教文化与历史记忆，融合了多种建筑风格的艺术之美，既有宗教场所的庄严肃穆，又有历史遗迹的古朴沧桑。在这里，你可以漫步在千年回廊，感受修士们的修行日常；驻足于主教堂，欣赏精美的建筑与艺术珍品；穿梭在博物馆，探寻马尔梅迪的历史变迁；漫步在小镇街巷，体验阿登地区的独特风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览马尔梅迪修道院，深入了解比利时阿登地区的历史与文化，留下一段难忘的欧洲旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年修道院与阿登森林的交融中，邂逅一段跨越时空的宗教文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}