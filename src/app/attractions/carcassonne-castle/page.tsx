import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡尔卡松城堡・Carcassonne Castle・法国・卡尔卡松 | 最佳欧洲景点',
  description: '探索卡尔卡松城堡，欧洲保存最完整的中世纪军事城堡之一，被联合国教科文组织列为世界文化遗产，拥有3公里双层石砌城墙与52座防御塔楼。',
}

export default function CarcassonneCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡尔卡松城堡', href: '/attractions/carcassonne-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡尔卡松城堡・Carcassonne Castle・法国・卡尔卡松</h1>
          <p className="text-lg text-gray-600 mb-6">
            卡尔卡松城堡始建于罗马时期，1997年被列入世界文化遗产，是欧洲规模最大、保存最完整的中世纪军事城堡。城堡拥有3公里双层石砌城墙、52座防御塔楼，融合罗马式与哥特式建筑风格，兼具军事防御与居住功能，承载着2500年的历史积淀，既是中世纪军事防御体系的典范，也是法国南部人文与建筑艺术的重要载体。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              卡尔卡松城堡始建于罗马时期，1997年被列入世界文化遗产，是欧洲规模最大、保存最完整的中世纪军事城堡。城堡拥有3公里双层石砌城墙、52座防御塔楼，融合罗马式与哥特式建筑风格，兼具军事防御与居住功能，承载着2500年的历史积淀，既是中世纪军事防御体系的典范，也是法国南部人文与建筑艺术的重要载体。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="卡尔卡松城堡" />
                <InfoRow label="英文名称" value="Carcassonne Castle" />
                <InfoRow label="别称" value="中世纪军事要塞、欧洲最大城堡、石砌巨城" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="卡尔卡松（Carcassonne）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="1997年被列入世界文化遗产" />
                <InfoRow label="建筑特色" value="拥有3公里双层石砌城墙、52座防御塔楼" />
                <InfoRow label="建筑风格" value="融合罗马式与哥特式建筑风格" />
                <InfoRow label="文化价值" value="欧洲保存最完整的中世纪军事城堡之一" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡整体全天免费开放；核心景点分季节调整" />
              <InfoRow label="门票价格" value="城堡公共区域免费；核心景点联票成人11欧元" />
              <InfoRow label="地址" value="Place de l'Église, 11000 Carcassonne, France" />
              <InfoRow label="交通方式" value="从卡尔卡松火车站步行约15分钟；市内巴士Line 4直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                卡尔卡松城堡的历史跨越2500余年，是一部镌刻着战争、防御、宗教与人文交融的史诗，其发展历程与法国南部的历史变迁紧密相连，从罗马时期的军事哨所，到中世纪的军事要塞，再到如今的世界文化遗产，始终是法国南部历史文化的核心载体。
              </p>
              <p>
                公元前3世纪，罗马人在奥德河畔建立军事哨所，作为防御日耳曼部落入侵的前沿阵地，这便是卡尔卡松城堡的雏形。当时的城堡仅为简单的木质防御工事，依托地势优势，形成初步的防御体系，随着罗马帝国的扩张，这里逐渐发展成为重要的军事据点，木质工事逐渐被石砌城墙取代，奠定了城堡的基础格局。
              </p>
              <p>
                中世纪初期，西哥特人占领卡尔卡松，对城堡进行扩建，加固城墙、增设塔楼，使其成为西哥特王国南部的重要防御要塞。这一时期，城堡的防御体系逐渐完善，形成了初步的双层城墙雏形，外层城墙用于抵御外敌入侵，内层城墙保护城堡核心区域，塔楼用于瞭望与防御，成为中世纪军事防御建筑的早期典范。
              </p>
              <p>
                11世纪至13世纪，卡尔卡松城堡迎来鼎盛时期。这一时期，法国南部战乱频繁，城堡作为军事要塞，成为各方势力争夺的焦点。当地贵族与教会合作，大规模扩建城堡，将双层城墙延伸至3公里，增设至52座防御塔楼，修建吊桥、护城河、攻城塔等防御设施，形成了"外城防御、内城居住"的格局。城堡内部修建了领主住宅、教堂、兵营、仓库等建筑，既能抵御外敌入侵，又能满足居住、宗教活动与军事驻扎的需求，成为当时欧洲规模最大、防御最完善的军事城堡之一。
              </p>
              <p>
                12世纪，圣纳泽尔大教堂在城堡内部建成，融合罗马式与哥特式建筑风格，成为城堡的宗教核心，也为这座军事要塞增添了人文气息。这一时期，卡尔卡松城堡不仅是军事防御重地，也是当地的宗教与政治中心，领主、贵族与平民在此聚居，形成了独特的中世纪城堡社群，城堡周边逐渐发展出商铺、市集，呈现出繁华的市井景象。
              </p>
              <p>
                中世纪后期，百年战争的爆发给卡尔卡松城堡带来了沉重打击，城堡多次遭到围攻与损毁，部分塔楼与城墙被破坏，人口大量流失，逐渐走向衰落。16世纪至18世纪，随着军事技术的发展，城堡的防御功能逐渐弱化，不再是军事要塞，成为当地贵族的居所，部分建筑被改造为住宅与仓库，城堡的原貌逐渐被破坏。
              </p>
              <p>
                19世纪，法国政府开始重视对历史遗迹的保护，建筑师维奥莱-勒-杜克对卡尔卡松城堡进行了大规模修复，按照中世纪原貌重建了损毁的塔楼、城墙与建筑，还原了城堡的军事防御格局与哥特式建筑风貌，使这座千年城堡重焕生机。1997年，卡尔卡松城堡及周边老城区被联合国教科文组织列入世界文化遗产名录，成为全球瞩目的中世纪军事城堡遗迹，进一步提升了其国际知名度。
              </p>
              <p>
                如今，卡尔卡松城堡不仅是法国重要的历史遗迹，更是兼具历史、建筑与人文之美的旅游胜地，千年的石砌城墙、高耸的防御塔楼、庄严的教堂，共同诉说着中世纪的军事传奇与人文故事，吸引着世界各地的游客前来探访，感受中世纪军事要塞的雄浑与厚重。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时，适合时间紧张的游客）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从游客服务中心出发 → 城堡入口吊桥 → 纳博讷门 → 城堡荣誉庭院 → 瞭望塔 → 圣纳泽尔大教堂 → 城墙步道漫步
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>全程涵盖城堡核心看点，节奏紧凑，可欣赏中世纪军事防御建筑的雄浑气势，感受城堡的防御视野与壮阔景致
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时，适合喜欢细致游览、热爱历史与建筑的游客）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线基础上 → 城堡博物馆参观 → 下城（圣路易新城）游览 → 法国南部特色美食体验 → 城墙步道完整漫步 → 中世纪工匠作坊体验 → 傍晚城堡剪影欣赏
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>建议：</strong>全方位感受卡尔卡松的历史底蕴与市井风情，体验"美食+历史"的完美搭配，深入了解中世纪军事防御技术
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">城堡入口吊桥</h4>
                  <p className="text-sm text-gray-700 mb-2">城堡标志性景观，吊桥下方是干涸的护城河，两侧是高耸的防御塔楼，可欣赏中世纪军事防御建筑的雄浑气势。</p>
                  <div className="text-xs text-gray-500">🌉 吊桥景观 | 🏰 防御塔楼</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">纳博讷门</h4>
                  <p className="text-sm text-gray-700 mb-2">城堡主入口，城门雕刻精美，留存着中世纪的防御痕迹，穿过城门进入上城核心区域。</p>
                  <div className="text-xs text-gray-500">🚪 主入口 | 🎨 精美雕刻</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">城堡荣誉庭院</h4>
                  <p className="text-sm text-gray-700 mb-2">中世纪领主举行仪式、处理政务的地方，周边矗立着领主住宅与防御塔楼。</p>
                  <div className="text-xs text-gray-500">🏛️ 荣誉庭院 | 👑 领主住宅</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">瞭望塔</h4>
                  <p className="text-sm text-gray-700 mb-2">站在塔顶可俯瞰整个卡尔卡松老城区、奥德河畔的风光，感受城堡的防御视野与壮阔景致。</p>
                  <div className="text-xs text-gray-500">🗼 瞭望塔 | 🌅 俯瞰全景</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">圣纳泽尔大教堂</h4>
                  <p className="text-sm text-gray-700 mb-2">城堡内部标志性宗教建筑，融合罗马式与哥特式建筑风格，内部彩色玻璃窗与宗教雕塑精美。</p>
                  <div className="text-xs text-gray-500">⛪ 宗教建筑 | 🎨 哥特式风格</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">城墙步道</h4>
                  <p className="text-sm text-gray-700 mb-2">沿城墙步道漫步，欣赏城墙与塔楼的细节，感受中世纪军事防御体系的精巧。</p>
                  <div className="text-xs text-gray-500">🛤️ 城墙步道 | 🏰 防御体系</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 吊桥全景</h4>
                  <p className="text-sm text-gray-700">以吊桥、护城河与高耸的防御塔楼为核心，完整展现城堡的军事防御格局，石砌城墙的厚重与塔楼的高耸相得益彰。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 瞭望塔制高点</h4>
                  <p className="text-sm text-gray-700">站在瞭望塔顶端，可俯瞰整个卡尔卡松城堡的轮廓、双层城墙与52座塔楼，搭配远处的奥德河畔与田园风光。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 城墙步道侧身</h4>
                  <p className="text-sm text-gray-700">沿城墙步道行走，选择塔楼与城墙的侧身角度，捕捉石砌城墙的斑驳纹理、塔楼的精巧结构与防御设施的细节。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣纳泽尔大教堂门口</h4>
                  <p className="text-sm text-gray-700">大教堂的哥特式拱门、雕刻精美的门框与高耸的尖顶，搭配周边的石砌建筑，展现出宗教建筑的庄严与精美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 下城石板街巷</h4>
                  <p className="text-sm text-gray-700">下城的狭窄石板路、两侧古朴的石制民居、挂着藤蔓的窗台与传统商铺的招牌，都充满了中世纪的市井风情。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 城堡西侧葡萄园斜坡</h4>
                  <p className="text-sm text-gray-700">城堡西侧的葡萄园连绵起伏，葡萄藤缠绕，搭配远处的城堡城墙与塔楼，展现出"军事要塞藏于田园"的独特景观。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 城堡建筑以石砌的冷灰色为主，建议穿搭素色、简约风格或法式复古风格衣物，与建筑色调形成和谐搭配</li>
                <li>• 拍摄时禁止使用闪光灯（尤其是教堂内），禁止攀爬城墙、触摸文物，避免损坏遗迹，尊重当地的宗教习俗</li>
                <li>• 上午与傍晚的光线最适合拍摄，上午凸显建筑细节与军事气势，傍晚凸显浪漫与雄浑</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现城堡与周边风光；拍摄细节照时，可近距离聚焦城墙纹理、塔楼雕刻、教堂门窗等</li>
                <li>• 夏季夜间城堡有灯光秀，可拍摄城堡夜景，灯光勾勒出城堡轮廓，氛围感十足</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡尔卡松下城（圣路易新城）</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约10分钟步行路程，是卡尔卡松的老城区，留存着中世纪的石板街巷、石制民居、传统商铺与市集，可漫步于街巷，感受当地的市井烟火气。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🏘️ 中世纪街巷</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">奥德河畔步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约15分钟步行路程，蜿蜒的奥德河穿流而过，河畔步道绿植繁茂，景色优美，可漫步于步道，欣赏河水潺潺、两岸的田园风光与远处的城堡剪影。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🌊 河畔美景</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣纳泽尔大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">位于城堡内部，距离城堡核心区域约5分钟步行路程，是卡尔卡松的标志性宗教建筑，融合罗马式与哥特式建筑风格，内部彩色玻璃窗、宗教雕塑与拱券雕刻精美。</p>
                <div className="text-xs text-gray-500">⛪ 宗教建筑 | 🎨 哥特式风格</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">米雷贝尔城堡（Château de Mirepeisset）</h4>
                <p className="text-sm text-gray-700 mb-2">距离卡尔卡松城堡约15分钟车程，是一座13世纪的中世纪城堡，留存着完整的防御塔楼、城墙与领主住宅，可参观城堡内部，了解中世纪贵族的生活状态。</p>
                <div className="text-xs text-gray-500">🏰 13世纪城堡 | 🍷 朗格多克葡萄酒</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡尔卡松博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡核心区域约3分钟步行路程，馆内收藏了大量中世纪的军事武器、生活用具、建筑构件与历史资料，展现了卡尔卡松的历史变迁与军事文化。</p>
                <div className="text-xs text-gray-500">🏛️ 历史博物馆 | ⚔️ 军事文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">朗格多克葡萄酒庄园</h4>
                <p className="text-sm text-gray-700 mb-2">距离卡尔卡松城堡约20分钟车程，这里是法国南部重要的葡萄酒产区，庄园内葡萄藤连绵起伏，可预约酒庄导览与品酒活动，了解葡萄种植、葡萄酒酿造的全过程。</p>
                <div className="text-xs text-gray-500">🍇 葡萄酒产区 | 🍷 品酒体验</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">城堡周边区域</h4>
                  <p className="text-sm text-blue-800">距离城堡入口步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览城堡，又能沉浸式感受中世纪城堡的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">卡尔卡松市中心</h4>
                  <p className="text-sm text-green-800">距离城堡约1公里，交通便捷，周边餐饮、购物设施齐全，适合需要前往周边景点或乘坐公共交通的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">奥德河畔</h4>
                  <p className="text-sm text-yellow-800">距离城堡约15分钟步行路程，可欣赏河畔风光，环境安静，适合想要放松身心的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端城堡酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于城堡周边或市中心，融合中世纪建筑元素与现代设施，部分由古老石屋改造而成，自带观景露台、特色餐厅与SPA服务，价格约90-160欧元/晚。</p>
                  <div className="text-xs text-gray-500">🏰 中世纪元素 | 🍷 城堡导览优惠</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于市中心或城堡周边，步行可达核心景点，房间干净整洁，设施齐全，部分提供早餐与免费WiFi，价格约45-80欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 🏛️ 城堡联票优惠</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿与青旅</h4>
                  <p className="text-sm text-gray-700 mb-2">民宿多为家庭经营，风格温馨，部分融入中世纪元素；青年旅社适合独自旅行或预算有限游客，价格约18-40欧元/晚。</p>
                  <div className="text-xs text-gray-500">🏡 家庭经营 | 🎒 背包客友好</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>5-10月旅游旺季，7-8月夏季假期游客较多，建议提前1-2个月预订，避免无房或价格上涨</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>11月至次年4月游客较少，可提前1-2周预订，价格相对实惠，部分酒店推出住宿+城堡导览优惠套餐</p>
                    <p><strong>预订咨询：</strong>预订城堡酒店时可提前咨询是否包含免费早餐或城堡导览服务，重点关注交通便利性、卫生情况与服务质量</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国住宿普遍不提供一次性洗漱用品，需自带牙刷、牙膏、拖鞋等用品</p>
                    <p className="mb-2"><strong>入住时间：</strong>通常为14:00以后入住，11:00以前退房，如需提前入住或延迟退房需提前沟通</p>
                    <p><strong>特殊注意：</strong>城堡周边街巷狭窄且多石板路，建议穿舒适平底鞋；部分民宿不提供电梯，大件行李需提前咨询</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                卡尔卡松城堡，这座矗立在法国南部的千年军事要塞，历经2500余年的风雨洗礼，依然保留着中世纪的雄浑风貌与军事底蕴。在这里，你可以触摸石砌城墙的斑驳纹理，感受中世纪的战争传奇；可以漫步于防御塔楼之间，领略军事防御体系的精巧；可以探访哥特式教堂，感受宗教建筑的庄严与精美；可以远眺田园与河畔风光，感受自然与人文的完美交融。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，卡尔卡松城堡都能给你带来难忘的旅行体验，让你在千年遗韵中，邂逅法国南部的独特魅力。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年军事要塞与法国南部田园风光的交融中，邂逅一段跨越时空的中世纪文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}