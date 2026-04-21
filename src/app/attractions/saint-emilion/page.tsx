import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣埃米利翁古城・Saint-Émilion・法国・圣埃米利翁 | 最佳欧洲景点',
  description: '探索圣埃米利翁古城，世界文化遗产、法国顶级葡萄酒产区核心地带，兼具中世纪建筑底蕴与千年酿酒文化，融合人文历史、自然景观与美食美酒。',
}

export default function SaintEmilionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '圣埃米利翁古城', href: '/attractions/saint-emilion' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">圣埃米利翁古城・Saint-Émilion・法国・圣埃米利翁</h1>
          <p className="text-lg text-gray-600 mb-6">
            圣埃米利翁古城始建于公元8世纪，由隐士埃米利翁建立，1999年被列入世界文化遗产。这里是法国波尔多顶级葡萄酒产区，留存着中世纪石屋、地下教堂、古老酒庄等遗迹，罗马式与哥特式建筑交相辉映，千年酿酒传统与中世纪市井风情交融，既有厚重的历史底蕴，又有醇厚的酒香，是兼具文化体验与自然观光的独特胜地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              圣埃米利翁古城始建于公元8世纪，由隐士埃米利翁建立，1999年被列入世界文化遗产。这里是法国波尔多顶级葡萄酒产区，留存着中世纪石屋、地下教堂、古老酒庄等遗迹，罗马式与哥特式建筑交相辉映，千年酿酒传统与中世纪市井风情交融，既有厚重的历史底蕴，又有醇厚的酒香，是兼具文化体验与自然观光的独特胜地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="圣埃米利翁古城" />
                <InfoRow label="英文名称" value="Saint-Émilion" />
                <InfoRow label="别称" value="葡萄酒圣地、中世纪石城" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="圣埃米利翁（Saint-Émilion）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="1999年被列入世界文化遗产" />
                <InfoRow label="核心特色" value="法国波尔多顶级葡萄酒产区核心地带" />
                <InfoRow label="建筑风格" value="罗马式与哥特式建筑交相辉映" />
                <InfoRow label="文化价值" value="千年酿酒传统与中世纪市井风情交融" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城整体全天免费开放；核心景点分季节调整" />
              <InfoRow label="门票价格" value="古城公共区域免费；地下教堂成人8欧元，科德利埃回廊成人16.5欧元" />
              <InfoRow label="地址" value="Place de l'Église, 33330 Saint-Émilion, France" />
              <InfoRow label="交通方式" value="从波尔多市区乘坐城际巴士Line 701直达，全程约30分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                圣埃米利翁古城的千年历史，是一部宗教传承与葡萄酒文化交融的史诗，其发展跨越近1300年，历经中世纪的鼎盛、战乱的冲击、葡萄酒产业的崛起与现代的保护，始终是波尔多地区历史文化与酿酒文明的核心载体，承载着法国西南地区的人文记忆与产业积淀。
              </p>
              <p>
                公元8世纪，来自布列塔尼的隐士埃米利翁（Émilion）为躲避战乱，隐居于当地的石灰岩洞穴中，在此修行、布道，吸引了众多信徒前来追随，逐渐形成了小型宗教聚居地，古城也因此以他的名字命名。埃米利翁去世后，当地信徒为纪念他，在其隐居的洞穴基础上修建了小型教堂，这便是地下教堂的雏形，此后这里逐渐发展成为重要的宗教朝圣之地。
              </p>
              <p>
                中世纪时期，圣埃米利翁迎来第一次发展鼎盛。11世纪，当地贵族与教会合作，扩建宗教建筑，修建了地下教堂、修道院与石制民居，形成了错落有致的中世纪石城格局。由于地处石灰岩丘陵地带，当地居民依山而建，房屋、教堂多采用石灰岩砌筑，既坚固耐用，又与自然景观融为一体。这一时期，圣埃米利翁的宗教影响力不断扩大，成为连接波尔多与周边地区的宗教文化枢纽，同时，当地居民开始尝试种植葡萄、酿造葡萄酒，为日后葡萄酒产业的崛起奠定了基础。
              </p>
              <p>
                12世纪至14世纪，圣埃米利翁的葡萄酒产业逐渐兴起。当地独特的石灰岩土壤、温和的海洋性气候，非常适合葡萄生长，所酿葡萄酒口感醇厚、香气浓郁，逐渐受到法国王室与贵族的青睐。随着葡萄酒贸易的发展，古城成为重要的葡萄酒集散地，商人、酿酒师纷纷聚集于此，修建了酒庄、酒窖与商铺，街巷逐渐繁华，形成了"教堂钟声与酒香共生"的独特氛围。这一时期，古城的建筑也进一步完善，罗马式与哥特式建筑元素交融，地下教堂、科德利埃回廊等标志性建筑相继建成，成为中世纪建筑的典范。
              </p>
              <p>
                中世纪后期，百年战争的爆发给圣埃米利翁带来了沉重打击，古城部分建筑遭到损毁，葡萄酒贸易陷入停滞，人口大量流失，逐渐走向衰落。16世纪至18世纪，随着波尔多葡萄酒产业的整体复苏，圣埃米利翁重新崛起，酿酒技术不断革新，酒庄规模不断扩大，逐渐形成了如今的葡萄酒产区格局。这一时期，当地贵族开始大规模修建酒庄城堡，将居住、酿酒与仓储功能融为一体，形成了兼具实用性与观赏性的酒庄建筑。
              </p>
              <p>
                19世纪至20世纪，圣埃米利翁的葡萄酒产业进入黄金发展期，当地酒庄不断提升酿酒品质，涌现出白马酒庄、欧颂酒庄等顶级酒庄，其出产的葡萄酒享誉全球。同时，法国政府开始重视对古城历史遗迹的保护，对地下教堂、中世纪石屋等建筑进行大规模修复，保留了古城的中世纪风貌。1999年，圣埃米利翁古城及周边葡萄酒产区被联合国教科文组织列入世界文化遗产名录，成为全球首个以葡萄酒文化为核心的世界遗产，进一步提升了其国际知名度。
              </p>
              <p>
                如今，圣埃米利翁不仅是法国顶级葡萄酒产区，更是兼具历史、文化与自然之美的旅游胜地，千年的宗教遗迹与百年的酒庄文化交相辉映，吸引着世界各地的游客前来探访，感受中世纪石城的静谧与葡萄酒的醇厚。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时，适合时间紧张的游客）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从游客服务中心出发 → 教堂广场（Place de l'Église）→ 地下教堂（Église Monolithe）→ 古城石板街巷 → 科德利埃回廊（Cloître des Cordeliers）→ 回廊周边露天座椅休息
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>全程涵盖古城核心看点，节奏紧凑，可深入了解古城宗教历史与建筑艺术，感受中世纪市井气息
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时，适合喜欢细致游览、热爱葡萄酒文化的游客）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线基础上 → 古城周边中型酒庄参观品酒 → 古城内特色餐厅品尝法国西南美食 → 圣埃米利翁观景台远眺葡萄园 → 古城外围石灰岩步道探访城墙遗迹 → 傍晚返回教堂广场欣赏夕阳剪影
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>建议：</strong>全方位感受圣埃米利翁千年遗韵与酒香风情，体验"美食+美酒"完美搭配
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂广场（Place de l'Église）</h4>
                  <p className="text-sm text-gray-700 mb-2">古城核心区域，矗立着圣埃米利翁雕像与哥特式教堂，周边是古朴石制商铺与露天咖啡馆，展现中世纪建筑风貌。</p>
                  <div className="text-xs text-gray-500">⛪ 哥特式教堂 | 🗿 圣埃米利翁雕像</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">地下教堂（Église Monolithe）</h4>
                  <p className="text-sm text-gray-700 mb-2">古城标志性景点，由石灰岩开凿而成，内部雕刻精美，留存中世纪壁画与宗教雕像，门票成人8欧元。</p>
                  <div className="text-xs text-gray-500">🏛️ 石灰岩开凿 | 🎨 中世纪壁画</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">科德利埃回廊（Cloître des Cordeliers）</h4>
                  <p className="text-sm text-gray-700 mb-2">始建于14世纪的中世纪修道院遗存，罗马式拱券与雕刻石柱精美，地下有3公里长酒窖，门票成人16.5欧元。</p>
                  <div className="text-xs text-gray-500">🏛️ 14世纪回廊 | 🍷 地下酒窖</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">古城石板街巷</h4>
                  <p className="text-sm text-gray-700 mb-2">狭窄蜿蜒的石板路两侧是错落有致的中世纪石屋，部分改造为葡萄酒商店、餐厅与民宿，充满市井气息。</p>
                  <div className="text-xs text-gray-500">🛤️ 石板街巷 | 🏪 葡萄酒商店</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">圣埃米利翁观景台</h4>
                  <p className="text-sm text-gray-700 mb-2">古城制高点，可远眺周边连绵起伏的葡萄园，欣赏丘陵地带田园风光，感受葡萄酒产区壮阔景色。</p>
                  <div className="text-xs text-gray-500">🌅 观景台 | 🍇 葡萄园风光</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">古城外围石灰岩步道</h4>
                  <p className="text-sm text-gray-700 mb-2">探访中世纪城墙遗迹，沿途欣赏古老葡萄藤与石制小屋，感受自然与人文交融，了解古城防御历史。</p>
                  <div className="text-xs text-gray-500">🥾 石灰岩步道 | 🏰 城墙遗迹</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 教堂广场全景</h4>
                  <p className="text-sm text-gray-700">以哥特式教堂与圣埃米利翁雕像为核心，周边中世纪石屋、石板街巷与露天咖啡馆尽收眼底，展现中世纪石城古朴与静谧。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 地下教堂入口</h4>
                  <p className="text-sm text-gray-700">石灰岩入口雕刻精美，拱门、浮雕承载千年岁月痕迹，搭配周边石墙与绿植，氛围感十足，适合拍摄宗教建筑细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 科德利埃回廊内侧</h4>
                  <p className="text-sm text-gray-700">罗马式拱券、雕刻精美石柱、斑驳墙面搭配光影变化，展现中世纪建筑匠心巧思，适合拍摄细节照、文艺风照片。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 古城制高点观景台</h4>
                  <p className="text-sm text-gray-700">俯瞰整个圣埃米利翁古城轮廓，搭配周边连绵起伏葡萄园，展现"石城藏于葡萄园"独特景观，适合拍摄全景照、风光照。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 中世纪石板街巷</h4>
                  <p className="text-sm text-gray-700">狭窄蜿蜒石板路、古朴石屋、藤蔓窗台与葡萄酒商店招牌充满中世纪市井风情，适合拍摄街巷纵深、人文特写。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 酒庄葡萄园</h4>
                  <p className="text-sm text-gray-700">连绵起伏葡萄园、缠绕葡萄藤搭配远处酒庄建筑，展现葡萄酒产区田园风光，秋季拍摄葡萄成熟色彩斑斓效果最佳。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑以石灰岩暖灰色为主，建议穿搭素色、简约或法式复古风格衣物，与建筑色调和谐搭配</li>
                <li>• 拍摄时禁止使用闪光灯（尤其是地下教堂内），禁止攀爬墙体、触摸文物，避免损坏遗迹</li>
                <li>• 上午与傍晚光线最适合拍摄，上午凸显建筑细节与市井气息，傍晚凸显浪漫与静谧</li>
                <li>• 拍摄全景照可使用广角视角，拍摄细节照可近距离聚焦雕刻、石墙纹理、葡萄藤等</li>
                <li>• 尊重当地宗教习俗与酒庄规定，共同保护历史遗迹与景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">白马酒庄（Château Cheval Blanc）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约5分钟车程，圣埃米利翁顶级酒庄之一，1855年被评为波尔多一级酒庄，建筑兼具古典与现代风格，可预约酒庄导览与品酒活动。</p>
                <div className="text-xs text-gray-500">🏰 顶级酒庄 | 🍷 品酒体验</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">欧颂酒庄（Château Ausone）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约8分钟车程，被誉为"波尔多葡萄酒之王"的圣埃米利翁最顶级酒庄，需提前3-7天预约导览，可参观酒庄酒窖与葡萄园。</p>
                <div className="text-xs text-gray-500">👑 葡萄酒之王 | 🏆 顶级品质</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">罗尔-瓦伦汀酒庄（Château Rol Valentin）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约5分钟车程，位于世界遗产葡萄园核心地带，占地7.3公顷，建筑古朴，主打传统酿酒工艺，可免费参观酒窖。</p>
                <div className="text-xs text-gray-500">🍇 传统工艺 | 🏛️ 古朴建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">利布尔讷（Libourne）</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约15分钟车程，波尔多地区历史小镇，坐落于多尔多涅河畔，留存中世纪建筑、古老桥梁与传统市场，适合慢游体验法国小镇生活。</p>
                <div className="text-xs text-gray-500">🏘️ 历史小镇 | 🌊 多尔多涅河畔</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">多尔多涅河沿岸步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约10分钟车程，蜿蜒多尔多涅河穿流而过，河畔步道绿植繁茂，景色优美，可漫步欣赏河水潺潺与两岸田园风光。</p>
                <div className="text-xs text-gray-500">🥾 河畔步道 | 🌅 夕阳美景</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣埃米利翁葡萄酒博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约3分钟步行路程，馆内收藏大量葡萄酒相关文物、酿酒工具与历史资料，展现葡萄酒产业千年发展历程，门票5欧元/人。</p>
                <div className="text-xs text-gray-500">🏛️ 葡萄酒博物馆 | 📚 历史资料</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">距离教堂广场、地下教堂、石板街巷等核心景点步行可达，周边有特色餐厅、葡萄酒商店与咖啡馆，能沉浸式感受中世纪石城与葡萄酒文化氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">古城周边酒庄</h4>
                  <p className="text-sm text-green-800">距离古城约5-10分钟车程，可欣赏葡萄园风光，部分酒庄酒店提供免费品酒、导览服务，适合热爱葡萄酒文化的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">利布尔讷小镇</h4>
                  <p className="text-sm text-yellow-800">距离古城约15分钟车程，交通便捷，住宿价格相对亲民，适合需要前往波尔多市区或周边景点的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端酒庄酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城周边或葡萄园深处，融合古典建筑元素与现代设施，自带观景露台、葡萄酒酒窖与特色餐厅，价格约80-150欧元/晚。</p>
                  <div className="text-xs text-gray-500">🏰 古典与现代融合 | 🍷 定制化品酒套餐</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城核心区域或古城入口处，步行可达核心景点，房间干净整洁，部分提供早餐与免费WiFi，价格约40-70欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 🏛️ 中世纪石屋改造</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿与青旅</h4>
                  <p className="text-sm text-gray-700 mb-2">民宿多为家庭经营，风格温馨，部分融入葡萄酒元素；青旅适合独自旅行或预算有限游客，价格约15-35欧元/晚。</p>
                  <div className="text-xs text-gray-500">🏡 家庭经营 | 🎒 背包客友好</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>5-10月旅游旺季，9-10月葡萄收获季游客较多，建议提前1-2个月预订，避免无房或价格上涨</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>11月至次年4月游客较少，可提前1-2周预订，价格相对实惠，部分酒店推出住宿+酒庄导览优惠套餐</p>
                    <p><strong>预订咨询：</strong>预订酒庄酒店时可提前咨询是否包含免费品酒或导览服务，重点关注交通便利性、卫生情况与服务质量</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国住宿普遍不提供一次性洗漱用品，需自带牙刷、牙膏、拖鞋等用品</p>
                    <p className="mb-2"><strong>入住时间：</strong>通常为14:00以后入住，11:00以前退房，如需提前入住或延迟退房需提前沟通</p>
                    <p><strong>特殊注意：</strong>古城街巷狭窄且多石板路，建议穿舒适平底鞋；酒庄住宿需遵守酒庄规定，禁止随意进入未开放区域</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                圣埃米利翁古城，这座藏在波尔多葡萄园中的千年石城，历经近1300年的风雨洗礼，依然保留着中世纪的古朴风貌与千年的酿酒传统。在这里，你可以触摸石灰岩建筑的斑驳纹理，感受中世纪的宗教庄严；可以漫步于石板街巷，邂逅市井烟火与醇厚酒香；可以探访顶级酒庄，品味波尔多葡萄酒的独特魅力；可以远眺连绵的葡萄园，感受自然与人文的完美交融。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，圣埃米利翁都能给你带来难忘的旅行体验，让你在千年遗韵与酒香氤氲中，邂逅法国西南地区的独特魅力。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在中世纪石城与波尔多葡萄酒的交融中，邂逅一段跨越时空的法国文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}